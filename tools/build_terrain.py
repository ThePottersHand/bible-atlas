"""
Bible Atlas terrain pipeline.

Downloads open elevation tiles (AWS Terrain Tiles, "terrarium" encoding, derived from
SRTM / GMTED / ETOPO1 -- public domain sources), stitches them into heightmaps and
derives water masks:

  assets/terrain/world.png       biblical world  lon ~10-50E, lat ~27-46N   (zoom 7)
  assets/terrain/levant.png      Holy Land + Sinai  lon ~32.5-37.5E, lat ~27.5-34N (zoom 9)
  assets/terrain/jerusalem.png   Jerusalem environs (zoom 12)
  assets/terrain/*_water.png     water masks (255 = water)
  assets/terrain/manifest.json   tile geometry so the app can place the textures

Terrarium encoding: height_m = R*256 + G - 32768 + B/256.  Kept as-is in the PNGs; the
shader decodes it.  Water masks: ocean is flood-filled from seeded sea points across
cells <= 0 m; inland lakes use explicit rules.  The Dead Sea is filled to its ancient
level (about -395 m) so the southern basin is water, as it was in biblical times.

Usage:  python tools/build_terrain.py            (tiles are cached in tools/cache)
"""
import json, math, os, time
from concurrent.futures import ThreadPoolExecutor
import urllib.request
import numpy as np
from PIL import Image
from scipy import ndimage

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CACHE = os.path.join(HERE, 'cache')
OUT = os.path.join(ROOT, 'assets', 'terrain')
os.makedirs(CACHE, exist_ok=True)
os.makedirs(OUT, exist_ok=True)

URL = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'


def lon2x(lon, z):
    return (lon + 180.0) / 360.0 * (1 << z)


def lat2y(lat, z):
    r = math.radians(lat)
    return (1.0 - math.log(math.tan(r) + 1.0 / math.cos(r)) / math.pi) / 2.0 * (1 << z)


def x2lon(x, z):
    return x / (1 << z) * 360.0 - 180.0


def y2lat(y, z):
    n = math.pi - 2.0 * math.pi * y / (1 << z)
    return math.degrees(math.atan(math.sinh(n)))


def fetch(z, x, y):
    p = os.path.join(CACHE, '%d_%d_%d.png' % (z, x, y))
    if os.path.exists(p) and os.path.getsize(p) > 0:
        return p
    err = None
    for attempt in range(4):
        try:
            d = urllib.request.urlopen(URL.format(z=z, x=x, y=y), timeout=30).read()
            with open(p, 'wb') as f:
                f.write(d)
            return p
        except Exception as e:  # noqa
            err = e
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError('failed %d/%d/%d: %s' % (z, x, y, err))


LAKE_RULES = [  # name, lat0, lat1, lon0, lon1, water level (m)
    ('Sea of Galilee', 32.68, 32.92, 35.50, 35.68, -205.0),
    ('Dead Sea (ancient level)', 30.90, 31.80, 35.30, 35.62, -395.0),
    ('Caspian Sea', 36.5, 46.0, 46.5, 50.5, -20.0),
]
FLAT_BOXES = [  # perfectly flat cells inside these boxes are lakes
    ('Lake Van', 38.3, 39.1, 42.2, 43.7), ('Lake Urmia', 37.0, 38.3, 44.9, 46.2),
    ('Lake Tuz', 38.5, 39.1, 33.0, 33.7), ('Lake Egirdir', 37.8, 38.3, 30.7, 31.0),
    ('Lake Beysehir', 37.5, 37.9, 31.3, 31.7), ('Lake Sevan', 40.1, 40.7, 44.9, 45.7),
    ('Lake Qarun (Moeris)', 29.35, 29.6, 30.3, 30.9), ('Lake Iznik', 40.4, 40.5, 29.4, 29.7),
    ('Lake Trichonida', 38.5, 38.6, 21.4, 21.7), ('Lake Ohrid', 40.9, 41.2, 20.6, 20.8),
    ('Lake Prespa', 40.7, 41.0, 20.85, 21.1), ('Lake Scutari', 42.0, 42.4, 19.0, 19.5),
]
SEA_SEEDS = [(34.0, 18.0), (36.0, 18.0), (42.0, 16.0), (38.0, 25.0), (40.7, 28.5), (43.0, 34.0),
             (28.0, 33.5), (29.0, 34.7), (28.0, 49.5), (33.5, 33.0), (32.0, 26.0), (37.5, 12.0),
             (43.5, 40.0), (44.5, 30.0), (36.5, 36.0), (30.5, 32.35), (39.0, 26.0), (35.5, 34.0)]


def build(name, z, lon0, lon1, lat0, lat1):
    x0, x1 = int(math.floor(lon2x(lon0, z))), int(math.floor(lon2x(lon1, z)))
    y0, y1 = int(math.floor(lat2y(lat1, z))), int(math.floor(lat2y(lat0, z)))
    nx, ny = x1 - x0 + 1, y1 - y0 + 1
    print('%s: z%d tiles x%d-%d y%d-%d -> %d x %d px, %d tiles' % (name, z, x0, x1, y0, y1, nx * 256, ny * 256, nx * ny))
    tiles = [(x, y) for y in range(y0, y1 + 1) for x in range(x0, x1 + 1)]
    with ThreadPoolExecutor(8) as ex:
        paths = list(ex.map(lambda t: fetch(z, t[0], t[1]), tiles))
    rgb = np.zeros((ny * 256, nx * 256, 3), np.uint8)
    for (x, y), p in zip(tiles, paths):
        im = np.asarray(Image.open(p).convert('RGB'))
        rgb[(y - y0) * 256:(y - y0 + 1) * 256, (x - x0) * 256:(x - x0 + 1) * 256] = im
    h = rgb[..., 0].astype(np.float32) * 256 + rgb[..., 1].astype(np.float32) - 32768 + rgb[..., 2].astype(np.float32) / 256
    print('  height range %.0f .. %.0f m' % (h.min(), h.max()))
    H, W = h.shape

    def px(lat, lon):
        return int((lat2y(lat, z) - y0) * 256), int((lon2x(lon, z) - x0) * 256)

    def box(la0, la1, lo0, lo1):
        r0, c0 = px(la1, lo0)
        r1, c1 = px(la0, lo1)
        return max(0, r0), min(H, r1), max(0, c0), min(W, c1)

    # ocean: connected components of h <= 0 that contain a sea seed
    sea = h <= 0.0
    lab, n = ndimage.label(sea)
    keep = set()
    for lat, lon in SEA_SEEDS:
        r, c = px(lat, lon)
        if 0 <= r < H and 0 <= c < W and lab[r, c] > 0:
            keep.add(int(lab[r, c]))
    water = np.isin(lab, list(keep))

    # inland seas by level rule (largest blob only)
    for nm, la0, la1, lo0, lo1, lvl in LAKE_RULES:
        r0, r1, c0, c1 = box(la0, la1, lo0, lo1)
        if r1 <= r0 or c1 <= c0:
            continue
        sub = h[r0:r1, c0:c1] < lvl
        l2, n2 = ndimage.label(sub)
        if n2:
            sizes = ndimage.sum(sub, l2, range(1, n2 + 1))
            big = int(np.argmax(sizes)) + 1
            water[r0:r1, c0:c1] |= (l2 == big)
            print('  %s: %d px' % (nm, int(sizes[big - 1])))

    # flat lakes above sea level inside whitelisted boxes
    gy = np.abs(np.diff(h, axis=0, prepend=h[:1])) + np.abs(np.diff(h, axis=0, append=h[-1:]))
    gx = np.abs(np.diff(h, axis=1, prepend=h[:, :1])) + np.abs(np.diff(h, axis=1, append=h[:, -1:]))
    flat = (gx + gy) < 0.01
    for nm, la0, la1, lo0, lo1 in FLAT_BOXES:
        r0, r1, c0, c1 = box(la0, la1, lo0, lo1)
        if r1 <= r0 or c1 <= c0:
            continue
        sub = flat[r0:r1, c0:c1] & (h[r0:r1, c0:c1] > -10)
        l2, n2 = ndimage.label(sub)
        if n2:
            sizes = ndimage.sum(sub, l2, range(1, n2 + 1))
            big = int(np.argmax(sizes)) + 1
            if sizes[big - 1] >= 6:
                water[r0:r1, c0:c1] |= (l2 == big)
                print('  %s: %d px' % (nm, int(sizes[big - 1])))

    wm = ndimage.binary_closing(water, iterations=1) | water
    # water surface: flatten heights to the surface level, keep depth in the water texture
    surface = np.where(wm, 0.0, h)                       # ocean surface = 0
    for nm, la0, la1, lo0, lo1, lvl in LAKE_RULES:        # inland seas at their level
        r0, r1, c0, c1 = box(la0, la1, lo0, lo1)
        if r1 <= r0 or c1 <= c0:
            continue
        sub = wm[r0:r1, c0:c1]
        surface[r0:r1, c0:c1] = np.where(sub, lvl, surface[r0:r1, c0:c1])
    for nm, la0, la1, lo0, lo1 in FLAT_BOXES:             # flat lakes keep their own level
        r0, r1, c0, c1 = box(la0, la1, lo0, lo1)
        if r1 <= r0 or c1 <= c0:
            continue
        sub = wm[r0:r1, c0:c1]
        surface[r0:r1, c0:c1] = np.where(sub, h[r0:r1, c0:c1], surface[r0:r1, c0:c1])
    depth = np.clip(surface - h, 0, 5200)
    enc = np.clip(surface + 32768.0, 0, 65535.99)
    out = np.zeros_like(rgb)
    out[..., 0] = np.floor(enc / 256).astype(np.uint8)
    out[..., 1] = np.floor(enc % 256).astype(np.uint8)
    out[..., 2] = np.floor((enc - np.floor(enc)) * 256).astype(np.uint8)
    wtex = np.zeros_like(rgb)
    wtex[..., 0] = (wm * 255).astype(np.uint8)
    wtex[..., 1] = np.clip(depth / 20.0, 0, 255).astype(np.uint8)
    wtex[..., 2] = np.clip(depth / 2.0, 0, 255).astype(np.uint8)
    Image.fromarray(out, 'RGB').save(os.path.join(OUT, name + '.png'), optimize=True)
    Image.fromarray(wtex, 'RGB').save(os.path.join(OUT, name + '_water.png'), optimize=True)
    return {'z': z, 'x0': x0, 'y0': y0, 'nx': nx, 'ny': ny, 'width': W, 'height': H,
            'lon0': x2lon(x0, z), 'lon1': x2lon(x1 + 1, z), 'lat1': y2lat(y0, z), 'lat0': y2lat(y1 + 1, z),
            'hmin': float(h.min()), 'hmax': float(h.max())}


if __name__ == '__main__':
    manifest = {
        'world': build('world', 7, 10.0, 49.9, 27.0, 46.0),
        'levant': build('levant', 9, 32.5, 37.5, 27.5, 34.0),
        'jerusalem': build('jerusalem', 12, 35.10, 35.32, 31.70, 31.85),
        'encoding': 'terrarium',
        'source': 'AWS Terrain Tiles (SRTM / GMTED2010 / ETOPO1), public domain',
        'notes': 'Dead Sea filled to c. -395 m (ancient level). Sea of Galilee -205 m. Modern reservoirs are not water.'
    }
    with open(os.path.join(OUT, 'manifest.json'), 'w') as f:
        json.dump(manifest, f, indent=1)
    for k in ('world', 'levant', 'jerusalem'):
        for suf in ('', '_water'):
            p = os.path.join(OUT, k + suf + '.png')
            print('%s: %.2f MB' % (p, os.path.getsize(p) / 1e6))
    print('done')
