# The Land Bears Witness — an atlas of Scripture

An interactive relief atlas of the Bible, built for biblically curious Christians. Real elevation data is sculpted into a model of the biblical world (Rome to Ur, Egypt to Ararat) and lit differently for each era of the story. Nothing modern is drawn: only the land, its waters, and what Scripture names.

Companion to [The Tabernacle: A 3D Journey](https://thepottershand.github.io/tabernacle-3d/).

## Run it

**Live site:** https://thepottershand.github.io/bible-atlas/

Or locally: The heightmaps are PNG textures, and browsers refuse to read image data from `file://` pages, so the folder must be served over http:

```
python serve.py          # or double-click serve.cmd
```

then open <http://localhost:8080>. Any static host (GitHub Pages included) works as-is; there is no build step.

## What is inside

- **The land.** Three nested heightmaps (biblical world at ~1 km, Holy Land and Sinai at ~250 m, Jerusalem at ~30 m) displaced and lit on the GPU. Water is flat at its historical surface: the Dead Sea at its ancient level with the southern basin flooded, the Sea of Galilee at -205 m, no modern reservoirs.
- **The Scroll.** Ten eras from Beginnings to the early Church. Each era casts its own light on the land (hard noon on the Patriarchs, fire-coloured evening on the Exodus, ash-grey for the Exile, dawn for the Life of Christ) and swaps in its own boundaries and places.
- **Threads.** Nineteen journeys laid on the terrain as glowing cords that unspool stop by stop while the camera follows: Abraham, Jacob, Joseph, the Exodus, the Conquest, the Ark, David's flight, Elijah, the Exile and return, Jesus' ministry, Holy Week, Acts 1:8, Paul's four voyages, the seven churches, plus two that span the whole Bible: the **Scarlet Thread** (the line of promise from Eden to the ends of the earth) and **Where God Dwelt**.
- **Steles.** Click a place for its card: Hebrew or Greek name, Scripture, history that separates text from archaeology from tradition, a confidence grade with alternative sites for disputed ones, and a "Pointing to Christ" note.
- **Stand here.** Drop to eye level at true scale and look around from any site.
- **Layers.** Boundaries (tribal allotments, kingdoms, empires, Herodian districts, Roman provinces), rivers, prophecy-and-fulfilment pins, label density, relief exaggeration, time of day.
- **Measuring cord**, deep links, keyboard shortcuts, a quiet synthesised soundscape (optional), and a help sheet with the full **Notes on the Map**.

## Files

| Path | Purpose |
| --- | --- |
| `index.html`, `css/style.css` | Page shell and the stone-and-ink interface |
| `js/data/places.js` | Gazetteer: coordinates, confidence, references, notes |
| `js/data/journeys.js` | Threads: stops, routes, narration |
| `js/data/regions.js` | Boundary polygons and river polylines |
| `js/data/eras.js` | Eras and their lighting presets |
| `js/data/prophecies.js` | Prophecy and fulfilment pins |
| `js/terrain.js` | Heightmap layers, shaders, sky, CPU height sampling |
| `js/labels.js` | Projected labels, markers, selection ring |
| `js/threads.js` | Ribbon geometry for journeys, rivers, measuring cord |
| `js/overlay.js` | Boundaries painted into a Mercator canvas and projected on the terrain |
| `js/camera.js` | Flights, zoom-to-cursor, following, Stand Here |
| `js/ui.js`, `js/app.js` | Interface and orchestration |
| `tools/build_terrain.py` | Downloads open elevation tiles and builds `assets/terrain/` |
| `vendor/` | three.js r147 and OrbitControls |

## Rebuilding the terrain

```
pip install numpy pillow scipy
python tools/build_terrain.py
```

Tiles come from AWS Terrain Tiles (SRTM / GMTED2010 / ETOPO1, public domain) and are cached under `tools/cache/`.

## Editing the content

All text lives in `js/data/`. The schema is documented in `tools/SCHEMA.md`. Scripture quotations are ESV.

## In the Beginning: a film of Genesis 1

`creation/` holds a one-minute film of the seven days of creation, drawn live in the browser (WebGL 2) and scored in code: **https://thepottershand.github.io/bible-atlas/creation/**, or `in-the-beginning.mp4` beside it.

Darkness over the deep and the Spirit hovering; a point of light (not the sun, which waits for the fourth day); the waters parted by the expanse; land rising and a single tree growing on a hill; the sun, moon, stars and the morning star; the swarms of the sea and a dove; the herds, and a man formed from the dust who takes breath and stands; the garden at evening and the rest of the seventh day. Then darkness, one point of light again, and a sunrise over the whole earth: *In the beginning was the Word.*

The links to Christ are meant to be found rather than announced. Every "And God said" carries the same rising three-note figure, which the coda names as the Word (John 1:1-3) and brings home. The light of the first day, like every bright light in the film, flares into a cross. Dry land and life rise on the third day. We come up out of the water and a dove comes down (Mark 1:10). Man is made on the sixth day and the heavens and the earth are *finished* (Gen 2:1, John 19:30); the seventh day is dark and still; the last image is the first day of a new week.

| Path | Purpose |
| --- | --- |
| `creation/index.html`, `css/film.css` | The theatre: title, playback controls, end card |
| `creation/js/cues.js` | The cue sheet shared by picture and score: scenes, Scripture lines (ESV), musical hits |
| `creation/js/film.js`, `post.js`, `gl.js`, `glsl.js`, `text.js`, `util.js` | Timeline, WebGL helpers, bloom / cross glints / god rays / grade, Scripture on screen |
| `creation/js/scenes/*.js` | One file per scene: the deep, the land rising, the hill and tree (days 3-4), under the sea, the birds, the herds, the man from the dust, Eden, the orbital dawn |
| `creation/audio/score.mp3` | The score, rendered by `tools/creation/score.py` |
| `tools/creation/score.py` | Synthesises the score from the cue sheet (numpy/scipy; ffmpeg for mp3) |
| `tools/creation/render.js` | Exports stills or the whole film frame by frame with headless Chromium (Playwright) and ffmpeg |

Everything is keyed to film time, so any frame can be drawn exactly: `?capture=1` exposes that hook for the exporter.

```
pip install numpy scipy
python tools/creation/score.py                 # tools/cache/score.wav and creation/audio/score.mp3
node tools/creation/render.js stills 11 28.5 48 --w 960
node tools/creation/render.js frames           # 2160 PNGs in tools/cache/frames, resumable (about an hour without a GPU)
ffmpeg -framerate 30 -i tools/cache/frames/f%05d.png -i tools/cache/score.wav -c:v libx264 -preset slow -crf 25 \
  -maxrate 4500k -bufsize 9000k -tune film -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 160k -shortest creation/in-the-beginning.mp4
```

`render.js film` does both steps in one pass when the machine can keep an encoder fed.

## Deep links

The address bar always reflects the current view and can be shared. Parameters live in the hash:

`#era=christ` · `place=capernaum` · `thread=paul-2` · `stand=nebo` · `view=lat,lon,distanceKm,heading,pitch`

Add `?auto=1` to skip the title screen (for embedding).
