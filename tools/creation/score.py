"""The score for "In the Beginning": synthesised from nothing, in D major.

    python tools/creation/score.py            # writes tools/cache/score.wav and creation/audio/score.mp3

Every cue is read from creation/js/cues.js so the music lands where the
picture does. One idea carries the piece: each "And God said" is the same
rising figure, A-D-E (the Word), sung or played by whatever the day is
made of; at the end it rises through F# and A and comes home to D.

Needs numpy and scipy; ffmpeg (on PATH or $FFMPEG) for the mp3.
"""
import json, math, os, re, subprocess, sys
import numpy as np
from scipy import signal

SR = 48000
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))


def load_cues():
    src = open(os.path.join(ROOT, 'creation', 'js', 'cues.js'), encoding='utf-8').read()
    return json.loads(src[src.index('{'):src.rindex('}') + 1])


CUES = load_cues()
DUR = CUES['duration']
N = int(DUR * SR)
H = CUES['hits']
WORDS = CUES['words']
RNG = np.random.default_rng(2024)

# ------------------------------------------------------------------ pitch
NAMES = {'C': -9, 'D': -7, 'E': -5, 'F': -4, 'G': -2, 'A': 0, 'B': 2}


def hz(name):
    """'A4' -> 440, 'F#5', 'Bb2'."""
    m = re.fullmatch(r'([A-G])([#b]?)(-?\d)', name)
    semi = NAMES[m.group(1)] + (1 if m.group(2) == '#' else -1 if m.group(2) == 'b' else 0) + (int(m.group(3)) - 4) * 12
    return 440.0 * 2 ** (semi / 12)


def chord(s):
    return [hz(x) for x in s.split()]


# ------------------------------------------------------------------ buses
class Bus:
    def __init__(self):
        self.x = np.zeros((2, N + SR * 6))

    def add(self, sig, t0, pan=0.0, gain=1.0):
        """Mono (pan applied, equal power) or stereo signal starting at t0 seconds."""
        i = int(round(t0 * SR))
        if i < 0:
            sig = sig[..., -i:]
            i = 0
        if sig.ndim == 1:
            a = (pan + 1) * math.pi / 4
            sig = np.vstack([sig * math.cos(a), sig * math.sin(a)])
        n = min(sig.shape[1], self.x.shape[1] - i)
        if n > 0:
            self.x[:, i:i + n] += sig[:, :n] * gain


MUSIC, SFX, UNDER = Bus(), Bus(), Bus()


# ------------------------------------------------------------------ building blocks
def tvec(n):
    return np.arange(n) / SR


def env(n, a, r, hold=None, shape=1.0):
    """Attack a, release r (s); holds at 1 between them. Raised-cosine edges."""
    e = np.ones(n)
    na, nr = max(1, int(a * SR)), max(1, int(r * SR))
    na = min(na, n)
    e[:na] = (0.5 - 0.5 * np.cos(np.linspace(0, math.pi, na))) ** shape
    nr = min(nr, n)
    e[n - nr:] *= (0.5 + 0.5 * np.cos(np.linspace(0, math.pi, nr)))
    return e


def smooth_noise(n, rate, rng):
    """Slow random wander in [-1, 1] at about `rate` Hz."""
    k = max(2, int(n / SR * rate) + 3)
    pts = rng.uniform(-1, 1, k)
    x = np.linspace(0, k - 1, n)
    return np.interp(x, np.arange(k), pts)


def polyblep_saw(freq):
    dt = freq / SR
    ph = np.cumsum(dt) % 1.0
    y = 2 * ph - 1
    m = ph < dt
    t = ph[m] / dt[m]
    y[m] -= t + t - t * t - 1
    m = ph > 1 - dt
    t = (ph[m] - 1) / dt[m]
    y[m] -= t * t + t + t + 1
    return y


def lp(x, fc, order=2):
    b, a = signal.butter(order, min(fc, SR * 0.45) / (SR / 2), 'low')
    return signal.lfilter(b, a, x, axis=-1)


def hp(x, fc, order=2):
    b, a = signal.butter(order, fc / (SR / 2), 'high')
    return signal.lfilter(b, a, x, axis=-1)


def bp(x, lo, hi, order=2):
    b, a = signal.butter(order, [lo / (SR / 2), min(hi, SR * 0.45) / (SR / 2)], 'band')
    return signal.lfilter(b, a, x, axis=-1)


def peak(x, f, q):
    b, a = signal.iirpeak(min(f, SR * 0.45), q, SR)
    return signal.lfilter(b, a, x)


def noise(n, rng=RNG):
    return rng.standard_normal(n)


def brown(n, rng=RNG):
    y = np.cumsum(rng.standard_normal(n))
    y = hp(y, 20, 1)
    return y / (np.std(y) + 1e-9)


def pink(n, rng=RNG):
    w = rng.standard_normal(n)
    b = [0.049922035, -0.095993537, 0.050612699, -0.004408786]
    a = [1, -2.494956002, 2.017265875, -0.522189400]
    y = signal.lfilter(b, a, w)
    return y / (np.std(y) + 1e-9)


def vib_freq(f, n, rng, depth=0.002, rate=5.4, delay=0.35, drift=0.0012, detune=0.0):
    t = tvec(n)
    ramp = np.clip((t - delay) / 0.6, 0, 1)
    v = depth * np.sin(2 * math.pi * (rate + rng.uniform(-0.3, 0.3)) * t + rng.uniform(0, 6.28)) * ramp
    d = drift * smooth_noise(n, 1.5, rng)
    return f * 2 ** (detune / 1200) * (1 + v + d)


# ------------------------------------------------------------------ instruments
def strings(freqs, t0, dur, amp, attack=0.5, release=1.2, bright=2600, voices=5, spread=0.8, seed=0, bus=None):
    """A string section: detuned saws, gently filtered, spread across the stage."""
    bus = bus or MUSIC
    rng = np.random.default_rng(seed + int(t0 * 1000))
    n = int((dur + release) * SR)
    for fi, f in enumerate(freqs):
        acc = np.zeros((2, n))
        for v in range(voices):
            fr = vib_freq(f, n, rng, depth=0.0018, rate=5.6, delay=0.25, detune=rng.uniform(-9, 9))
            s = polyblep_saw(fr)
            p = spread * (-1 + 2 * (v + rng.uniform(0.2, 0.8)) / voices)
            a = (p + 1) * math.pi / 4
            acc[0] += s * math.cos(a)
            acc[1] += s * math.sin(a)
        fc = min(bright, f * 14)
        acc = lp(acc, fc, 2)
        acc = hp(acc, 45, 1)
        e = env(n, attack, release, shape=1.3)
        # lower notes a little quieter, so chords sit
        w = amp / voices * (0.55 + 0.45 * min(1.0, f / 220))
        bus.add(acc * e * w, t0)


FORMANT = {
    'a_s': [(800, 80, 0), (1150, 90, -6), (2900, 120, -32), (3900, 130, -20), (4950, 140, -50)],
    'a_a': [(800, 80, 0), (1150, 90, -4), (2800, 120, -20), (3500, 130, -36), (4950, 140, -60)],
    'a_t': [(650, 80, 0), (1080, 90, -6), (2650, 120, -7), (2900, 130, -8), (3250, 140, -22)],
    'a_b': [(600, 60, 0), (1040, 70, -7), (2250, 110, -9), (2450, 120, -9), (2750, 130, -20)],
    'o_s': [(450, 70, 0), (800, 80, -11), (2830, 100, -22), (3800, 120, -22), (4950, 120, -50)],
    'o_a': [(450, 70, 0), (800, 80, -9), (2830, 100, -16), (3500, 130, -28), (4950, 135, -55)],
    'o_t': [(400, 70, 0), (800, 80, -10), (2600, 100, -12), (2800, 130, -12), (3000, 135, -26)],
    'o_b': [(400, 40, 0), (750, 80, -11), (2400, 100, -21), (2600, 120, -20), (2900, 120, -40)],
    'u_s': [(350, 50, 0), (600, 60, -20), (2700, 170, -17), (3800, 180, -8), (4950, 200, -12)],
    'u_a': [(325, 50, 0), (700, 60, -12), (2530, 170, -30), (3500, 180, -40), (4950, 200, -64)],
    'u_t': [(350, 40, 0), (600, 60, -20), (2700, 100, -17), (2900, 120, -14), (3300, 120, -26)],
    'u_b': [(350, 40, 0), (600, 80, -20), (2400, 100, -32), (2675, 120, -28), (2950, 120, -36)],
}


def part_of(f):
    return 'b' if f < 170 else 't' if f < 300 else 'a' if f < 520 else 's'


def formant_filter(src, vowel):
    y = np.zeros_like(src)
    for F, bw, g in FORMANT[vowel]:
        y += peak(src, F, F / bw) * 10 ** (g / 20)
    return y


def choir(freqs, t0, dur, amp, vowel='a', attack=0.7, release=1.4, voices=4, seed=0, bus=None, spread=0.7):
    """A choir: breathy detuned voices through the formants of a vowel, per register."""
    bus = bus or MUSIC
    rng = np.random.default_rng(seed + 7 + int(t0 * 1000))
    n = int((dur + release) * SR)
    for f in freqs:
        v_ = vowel + '_' + part_of(f)
        acc = np.zeros((2, n))
        for v in range(voices):
            fr = vib_freq(f, n, rng, depth=0.0045, rate=5.1, delay=0.4, drift=0.002, detune=rng.uniform(-13, 13))
            s = polyblep_saw(fr) * 0.8 + 0.2 * np.sin(2 * math.pi * np.cumsum(fr) / SR)
            s += 0.05 * bp(noise(n, rng), 1500, 5000)
            y = formant_filter(s, v_)
            p = spread * (-1 + 2 * (v + rng.uniform(0.2, 0.8)) / voices)
            a = (p + 1) * math.pi / 4
            acc[0] += y * math.cos(a)
            acc[1] += y * math.sin(a)
        e = env(n, attack, release, shape=1.4)
        bus.add(acc * e * (amp / voices * 0.5), t0)


def legato_line(notes, t0, glide=0.07):
    """notes: [(name or hz, start offset, length)] -> frequency curve from t0, and total samples."""
    end = max(s + l for _, s, l in notes)
    n = int((end + 2.6) * SR)
    f = np.zeros(n)
    for i, (nm, s, l) in enumerate(notes):
        fr = hz(nm) if isinstance(nm, str) else nm
        a = int(s * SR)
        f[a:] = fr
    # smooth the steps into short glides
    k = max(3, int(glide * SR))
    win = np.hanning(k)
    f = np.convolve(np.pad(f, (k, k), mode='edge'), win / win.sum(), mode='same')[k:-k]
    return f, n


def line_dyn(notes, n, release, lo=0.75):
    """Loudness curve of a legato line: each note swells a little; after the last note a smooth release."""
    dyn = np.zeros(n)
    for nm, s, l in notes:
        a, b = int(s * SR), int((s + l) * SR)
        dyn[a:b] = np.maximum(dyn[a:b], lo + (1 - lo) * np.sin(np.linspace(0, math.pi, b - a)) ** 0.7)
    last = int(max(s + l for _, s, l in notes) * SR)
    nr = min(int(release * SR), n - last)
    dyn[last:last + nr] = dyn[last - 1] * (0.5 + 0.5 * np.cos(np.linspace(0, math.pi, nr)))
    dyn = lp(dyn, 10, 1)
    na = int(0.08 * SR)
    dyn[:na] *= np.linspace(0, 1, na)
    return np.clip(dyn, 0, None)


def horn_line(notes, t0, amp, bright=0.6, seed=0, pan=0.0, bus=None, release=1.2):
    """A French horn, legato: warm additive tone that brightens as it swells."""
    bus = bus or MUSIC
    rng = np.random.default_rng(seed + 11)
    f, n = legato_line(notes, t0)
    t = tvec(n)
    f = f * (1 + 0.0035 * np.sin(2 * math.pi * 5.0 * t) * np.clip((t - 0.3) / 0.5, 0, 1) + 0.001 * smooth_noise(n, 2, rng))
    ph = 2 * math.pi * np.cumsum(f) / SR
    dyn = line_dyn(notes, n, release)
    y = np.zeros(n)
    for k in range(1, 13):
        ak = (1.0 / k ** 1.1) * np.exp(-k * (1.1 - bright * dyn) * 0.55)
        ak = ak * (f * k < 9000)
        y += ak * np.sin(k * ph + rng.uniform(0, 6.28))
    y = peak(y, 480, 1.2) * 0.3 + y
    bus.add(y * dyn * amp * 0.25, t0, pan)


def voice_line(notes, t0, amp, vowel='a', seed=0, pan=0.0, bus=None, release=1.4):
    """A single sung line (the Word in the coda): one voice through moving formants."""
    bus = bus or MUSIC
    rng = np.random.default_rng(seed + 13)
    f, n = legato_line(notes, t0, glide=0.09)
    t = tvec(n)
    f = f * (1 + 0.006 * np.sin(2 * math.pi * 5.2 * t) * np.clip((t - 0.5) / 0.8, 0, 1) + 0.0015 * smooth_noise(n, 2, rng))
    src = polyblep_saw(f) * 0.7 + 0.3 * np.sin(2 * math.pi * np.cumsum(f) / SR)
    src += 0.03 * bp(noise(n, rng), 1200, 6000)
    y = formant_filter(src, vowel + '_s')
    dyn = line_dyn(notes, n, release, lo=0.8)
    bus.add(y * dyn * amp * 0.18, t0, pan)


def harp(f, t0, amp, pan=0.0, decay=2.4, bus=None):
    bus = bus or MUSIC
    n = int(decay * 2.2 * SR)
    t = tvec(n)
    y = np.zeros(n)
    for k in range(1, 18):
        if f * k > 12000:
            break
        a = abs(math.sin(k * math.pi * 0.14)) / k ** 1.4
        tau = decay / (1 + 0.18 * k ** 1.25) * (220 / max(f, 110)) ** 0.3
        y += a * np.sin(2 * math.pi * f * k * (1 + 0.0002 * k * k) * t) * np.exp(-t / tau)
    y *= np.minimum(1, t / 0.002)
    bus.add(y * amp * 0.5, t0, pan)


BELLS = {
    'celesta': ([1, 2, 3, 4.1], [1, 0.3, 0.08, 0.04], [1.5, 0.6, 0.3, 0.2]),
    'glock': ([1, 2.76, 5.40, 8.93], [1, 0.35, 0.18, 0.08], [1.3, 0.55, 0.28, 0.14]),
    'toll': ([0.5, 1, 1.19, 1.5, 2, 2.52, 3.0, 4.0], [0.55, 0.8, 0.45, 0.22, 0.55, 0.16, 0.12, 0.08], [7, 5, 3.6, 3, 2.8, 1.8, 1.4, 0.9]),
}


def bell(f, t0, amp, kind='celesta', pan=0.0, bus=None, rng=RNG):
    bus = bus or MUSIC
    ratios, amps, decs = BELLS[kind]
    n = int(max(decs) * 2.5 * SR)
    t = tvec(n)
    y = np.zeros(n)
    for r, a, d in zip(ratios, amps, decs):
        fr = f * r
        if fr > 16000:
            continue
        y += a * np.sin(2 * math.pi * fr * t + rng.uniform(0, 6.28)) * np.exp(-t / d)
    y *= np.minimum(1, t / (0.003 if kind == 'toll' else 0.006)) ** 1.5
    if kind == 'toll':
        y += 0.2 * lp(noise(n, rng), 3000) * np.exp(-t / 0.02)
    bus.add(y * amp * 0.35, t0, pan)


def timpani(f, t0, amp, pan=0.0, bus=None, rng=RNG):
    bus = bus or MUSIC
    n = int(3.5 * SR)
    t = tvec(n)
    glide = 1 + 0.025 * np.exp(-t / 0.04)
    y = np.zeros(n)
    for r, a, d in [(1.0, 1.0, 2.0), (1.504, 0.5, 1.5), (1.742, 0.35, 1.2), (2.0, 0.28, 0.95), (2.245, 0.18, 0.75), (2.494, 0.12, 0.6)]:
        y += a * np.sin(2 * math.pi * np.cumsum(f * r * glide) / SR) * np.exp(-t / d)
    y += 0.5 * lp(noise(n, rng), 900) * np.exp(-t / 0.025)
    y *= np.minimum(1, t / 0.001)
    bus.add(y * amp * 0.45, t0, pan)


def timp_roll(f, t0, dur, a0, a1, rate=15, bus=None):
    rng = np.random.default_rng(int(t0 * 100))
    k = int(dur * rate)
    for i in range(k):
        x = i / max(1, k - 1)
        timpani(f, t0 + i / rate + rng.uniform(-0.006, 0.006), (a0 + (a1 - a0) * x ** 1.6) * rng.uniform(0.8, 1.0),
                pan=rng.uniform(-0.15, 0.15), bus=bus, rng=rng)


def boom(t0, amp, f0=62, f1=31, dur=3.5, bus=None, rng=RNG):
    bus = bus or MUSIC
    n = int(dur * SR)
    t = tvec(n)
    f = f1 + (f0 - f1) * np.exp(-t / 0.3)
    y = np.sin(2 * math.pi * np.cumsum(f) / SR) * np.exp(-t / 1.3)
    y = np.tanh(y * 1.8) / np.tanh(1.8)
    y += 0.4 * lp(noise(n, rng), 180) * np.exp(-t / 0.09)
    bus.add(y * amp, t0)


def swell(t_end, dur, amp, lo=2500, bus=None, rng=RNG):
    """Reverse cymbal / air riser that ends exactly on a hit."""
    bus = bus or MUSIC
    n = int(dur * SR)
    x = np.linspace(0, 1, n)
    y = np.vstack([hp(noise(n, rng), lo), hp(noise(n, rng), lo)])
    y = lp(y, 14000)
    e = x ** 3.2
    e[-int(0.012 * SR):] *= np.linspace(1, 0, int(0.012 * SR))
    bus.add(y * e * amp * 0.25, t_end - dur)


def crash(t0, amp, dur=5.0, bus=None, rng=RNG):
    bus = bus or MUSIC
    n = int(dur * SR)
    t = tvec(n)
    y = np.vstack([hp(noise(n, rng), 3000), hp(noise(n, rng), 3000)]) * np.exp(-t / 1.4)
    for f in [3160, 4270, 5610, 7110, 8430]:
        y += 0.05 * np.sin(2 * math.pi * f * t + rng.uniform(0, 6)) * np.exp(-t / rng.uniform(0.8, 2.0))
    y = lp(y, 12000)
    bus.add(y * amp * 0.2, t0)


def sine_tone(f, t0, dur, amp, pan=0.0, a=0.3, r=1.0, bus=None):
    bus = bus or MUSIC
    n = int((dur + r) * SR)
    t = tvec(n)
    y = np.sin(2 * math.pi * f * t) * env(n, a, r)
    bus.add(y * amp, t0, pan)


def drone(f, t0, dur, amp, a=2.0, r=2.0, bus=None):
    bus = bus or MUSIC
    n = int((dur + r) * SR)
    t = tvec(n)
    br = 0.85 + 0.15 * np.sin(2 * math.pi * 0.11 * t)
    y = (np.sin(2 * math.pi * f * t) + 0.35 * np.sin(2 * math.pi * f * 2.003 * t) + 0.15 * np.sin(2 * math.pi * f * 3.001 * t)) * br
    bus.add(y * env(n, a, r) * amp, t0)


def word(t0, inst, octave=4, step=0.5, amp=0.5, hold=1.0, pan=0.0, extra=None):
    """The motif: A - D - E, rising a fourth then a step."""
    a, d, e = 'A%d' % octave, 'D%d' % (octave + 1), 'E%d' % (octave + 1)
    notes = [(a, 0, step), (d, step, step), (e, 2 * step, hold)]
    if extra:
        notes += extra
    if inst == 'horn':
        horn_line(notes, t0, amp, pan=pan)
    elif inst == 'voice':
        voice_line(notes, t0, amp, pan=pan)
    elif inst == 'celesta':
        for nm, s, l in notes:
            bell(hz(nm), t0 + s, amp, 'celesta', pan)
    elif inst == 'strings':
        for i, (nm, s, l) in enumerate(notes):
            strings([hz(nm)], t0 + s, l, amp, attack=0.08, release=0.5, bright=3500, voices=4, seed=i)
    elif inst == 'harp':
        for nm, s, l in notes:
            harp(hz(nm), t0 + s, amp, pan)


def shimmer(t0, dur, freqs, amp, rate=14):
    rng = np.random.default_rng(int(t0 * 10))
    k = int(dur * rate)
    for i in range(k):
        x = i / max(1, k - 1)
        bell(freqs[rng.integers(len(freqs))], t0 + i / rate + rng.uniform(0, 0.03), amp * (1 - 0.7 * x) * rng.uniform(0.5, 1.0),
             'celesta', rng.uniform(-0.9, 0.9))


def chime(t0, amp=0.35):
    """The small bell that marks the end of each day."""
    bell(hz('D6'), t0, amp, 'glock', -0.25)
    bell(hz('A6'), t0 + 0.12, amp * 0.5, 'glock', 0.25)
    bell(hz('D5'), t0, amp * 0.6, 'celesta', 0.0)


# ------------------------------------------------------------------ sound of the world
def wind(t0, dur, amp, lo=250, hi=900, gust=0.5, pan=0.0, seed=0, bus=None):
    bus = bus or SFX
    rng = np.random.default_rng(seed + 101)
    n = int(dur * SR)
    a, b = bp(pink(n, rng), lo, hi), bp(pink(n, rng), lo * 1.8, hi * 2.2)
    m = 0.5 + 0.5 * smooth_noise(n, 0.4, rng)
    g = 1 + gust * smooth_noise(n, 0.7, rng)
    y = (a * (1 - m) + b * m * 0.6) * np.clip(g, 0.1, 2)
    y2 = (b * (1 - m) + a * m * 0.6) * np.clip(g, 0.1, 2)
    e = env(n, min(1.5, dur / 3), min(2.0, dur / 3))
    bus.add(np.vstack([y, y2]) * e * amp, t0)


def ocean(t0, dur, amp, deep=0.0, seed=0, bus=None):
    """Swell and wash; deep > 0 leans toward a dark rumble."""
    bus = bus or SFX
    rng = np.random.default_rng(seed + 202)
    n = int(dur * SR)
    t = tvec(n)
    body = lp(brown(n, rng), 500 - 350 * deep)
    sw = 0.6 + 0.4 * np.sin(2 * math.pi * 0.13 * t + 1) * (0.7 + 0.3 * smooth_noise(n, 0.3, rng))
    wash = hp(pink(n, rng), 900) * np.clip(np.sin(2 * math.pi * 0.13 * t - 0.6), 0, 1) ** 3 * (1 - deep)
    l = body * sw + 0.35 * wash
    r = np.roll(body, 3000) * sw + 0.35 * np.roll(wash, 5000)
    e = env(n, min(2.5, dur / 3), min(2.5, dur / 3))
    bus.add(np.vstack([l, r]) * e * amp, t0)


def bubble(t0, f0, amp, pan=0.0, bus=None):
    bus = bus or SFX
    d = 0.02 + 30.0 / f0 * 0.03
    n = int(d * 3 * SR)
    t = tvec(n)
    f = f0 * (1 + 1.6 * t / d)
    y = np.sin(2 * math.pi * np.cumsum(f) / SR) * np.exp(-t / d) * np.minimum(1, t / 0.001)
    bus.add(y * amp, t0, pan)


def whale(t0, contour, amp, bus=None, rng=RNG):
    """contour: [(time, hz)] glide; a few harmonics, a nasal formant, slow tremolo."""
    bus = bus or SFX
    tt = [c[0] for c in contour]
    dur = tt[-1]
    n = int((dur + 0.5) * SR)
    t = tvec(n)
    f = np.interp(t, tt, [c[1] for c in contour])
    f *= 1 + 0.004 * np.sin(2 * math.pi * 3.0 * t)
    ph = 2 * math.pi * np.cumsum(f) / SR
    y = np.sin(ph) + 0.5 * np.sin(2 * ph + 0.3) + 0.25 * np.sin(3 * ph + 1.1) + 0.12 * np.sin(4 * ph)
    y = peak(y, 700, 2.0) * 0.6 + y
    y = lp(y, 1600)
    e = env(n, 0.35, 0.6) * (0.8 + 0.2 * np.sin(2 * math.pi * 1.7 * t))
    bus.add(y * e * amp, t0, 0.2)


def chirp(t0, amp, pan, kind, rng):
    if kind == 0:     # a quick upward sweep, repeated
        for k in range(rng.integers(2, 5)):
            d = rng.uniform(0.05, 0.09)
            n = int(d * SR)
            t = tvec(n)
            f = rng.uniform(2400, 3200) + rng.uniform(2000, 3000) * (t / d)
            y = np.sin(2 * math.pi * np.cumsum(f) / SR) * np.sin(math.pi * t / d) ** 2
            SFX.add(y * amp, t0 + k * rng.uniform(0.11, 0.16), pan)
    elif kind == 1:   # a trill
        d = rng.uniform(0.3, 0.6)
        n = int(d * SR)
        t = tvec(n)
        f = rng.uniform(3500, 4800) + 700 * np.sin(2 * math.pi * rng.uniform(22, 32) * t)
        y = np.sin(2 * math.pi * np.cumsum(f) / SR) * np.sin(math.pi * t / d) ** 1.5
        SFX.add(y * amp * 0.8, t0, pan)
    else:             # two notes, falling
        for k, fr in enumerate([rng.uniform(3000, 3800), rng.uniform(2300, 2800)]):
            d = 0.12
            n = int(d * SR)
            t = tvec(n)
            y = np.sin(2 * math.pi * fr * (1 - 0.05 * t / d) * t) * np.sin(math.pi * t / d) ** 2
            SFX.add(y * amp, t0 + k * 0.16, pan)


def flutter(t0, dur, amp, count, rng):
    """Wings: many birds lifting off together."""
    for i in range(count):
        s = t0 + rng.uniform(0, dur * 0.6)
        d = rng.uniform(0.6, 1.6)
        n = int(d * SR)
        t = tvec(n)
        rate = rng.uniform(7, 12)
        y = bp(noise(n, rng), 350, 2600) * (0.5 + 0.5 * np.sin(2 * math.pi * rate * t)) ** 4 * np.exp(-t / (d * 0.5))
        SFX.add(y * amp * rng.uniform(0.4, 1.0), s, rng.uniform(-0.8, 0.8))


def coo(t0, amp, pan=0.0):
    """A dove: a soft 'hoo-OO-hoo-hoo'."""
    rng = np.random.default_rng(77)
    for k, (s, d, f, a) in enumerate([(0, 0.28, 470, 0.6), (0.38, 0.55, 520, 1.0), (1.02, 0.22, 450, 0.5), (1.3, 0.3, 440, 0.55)]):
        n = int(d * SR)
        t = tvec(n)
        fr = f * (1 + 0.04 * np.sin(math.pi * t / d)) * (1 + 0.01 * np.sin(2 * math.pi * 12 * t))
        src = np.sin(2 * math.pi * np.cumsum(fr) / SR) + 0.2 * np.sin(4 * math.pi * np.cumsum(fr) / SR)
        src += 0.05 * lp(noise(n, rng), 1500)
        y = src * np.sin(math.pi * t / d) ** 1.2
        SFX.add(lp(y, 1400) * amp * a, t0 + s, pan)


def hooves(t0, dur, amp, rate, rng):
    n = int(dur * SR)
    y = np.zeros(n)
    k = int(dur * rate)
    for i in range(k):
        x = i / k
        at = int(rng.uniform(0, n - 4000))
        f = rng.uniform(60, 120)
        m = 3000
        tt = tvec(m)
        hit = np.sin(2 * math.pi * f * tt) * np.exp(-tt / 0.035) + 0.6 * rng.standard_normal(m) * np.exp(-tt / 0.006)
        y[at:at + m] += hit * rng.uniform(0.3, 1.0)
    y = lp(y, 1400)
    e = np.clip(np.linspace(0, 1, n) * 1.3, 0, 1) ** 1.5
    SFX.add(np.vstack([y, np.roll(y, 1777)]) * e * amp / math.sqrt(rate / 50), t0)


def drum(t0, amp, f0=110, pan=0.0, rng=RNG):
    n = int(0.9 * SR)
    t = tvec(n)
    f = f0 * 0.55 + f0 * 0.45 * np.exp(-t / 0.05)
    y = np.sin(2 * math.pi * np.cumsum(f) / SR) * np.exp(-t / 0.28)
    y += 0.35 * lp(noise(n, rng), 1800) * np.exp(-t / 0.012)
    MUSIC.add(np.tanh(y * 1.5) * amp, t0, pan)


def sparkle(t0, dur, count, amp, rng, lo=3000, hi=9000):
    for i in range(count):
        x = rng.uniform(0, 1) ** 0.6
        s = t0 + x * dur
        d = rng.uniform(0.02, 0.06)
        n = int(d * SR)
        t = tvec(n)
        f = rng.uniform(lo, hi)
        y = np.sin(2 * math.pi * f * t) * np.sin(math.pi * t / d) ** 2
        SFX.add(y * amp * x * rng.uniform(0.3, 1.0), s, rng.uniform(-0.9, 0.9))


def crickets(t0, dur, amp, rng):
    for c in range(4):
        f = rng.uniform(4300, 5200)
        period = rng.uniform(0.55, 0.9)
        pan = rng.uniform(-0.8, 0.8)
        a = amp * rng.uniform(0.5, 1.0)
        k = int(dur / period)
        for i in range(k):
            s = t0 + i * period + rng.uniform(0, 0.05)
            x = i / max(1, k - 1)
            fade = min(1, x * 4) * (1 - x) ** 0.7
            for p in range(3):
                n = int(0.014 * SR)
                t = tvec(n)
                y = np.sin(2 * math.pi * f * t) * np.sin(math.pi * t / 0.014)
                SFX.add(y * a * fade, s + p * 0.035, pan)


def breath_in(t0, dur, amp):
    n = int(dur * SR)
    x = np.linspace(0, 1, n)
    y = bp(noise(n), 600, 2600) * 0.7 + bp(noise(n), 2500, 6000) * 0.3
    y = peak(y, 1100, 2) * 0.6 + y
    e = x ** 1.6 * np.minimum(1, (1 - x) * 12)
    SFX.add(np.vstack([y, np.roll(y, 300)]) * e * amp, t0)


def heartbeat(t0, amp):
    for k, (off, f, d, a) in enumerate([(0, 52, 0.11, 1.0), (0.27, 64, 0.09, 0.75)]):
        n = int(0.5 * SR)
        t = tvec(n)
        y = np.sin(2 * math.pi * f * t * (1 + 0.1 * np.exp(-t / 0.02))) * np.exp(-t / d)
        y += 0.2 * lp(noise(n), 400) * np.exp(-t / 0.015)
        y *= np.minimum(1, t / 0.004)
        SFX.add(np.tanh(y * 1.4) * amp * a, t0 + off)


def rumble(t0, dur, amp, seed=0):
    rng = np.random.default_rng(seed + 303)
    n = int(dur * SR)
    y = lp(brown(n, rng), 110, 2) * 1.6 + 0.4 * lp(brown(n, rng), 400)
    for i in range(int(dur * 6)):
        at = int(rng.uniform(0, n - 12000))
        m = 12000
        tt = tvec(m)
        crack = lp(rng.standard_normal(m), rng.uniform(400, 1500)) * np.exp(-tt / rng.uniform(0.03, 0.12))
        y[at:at + m] += crack * rng.uniform(0.5, 1.5)
    e = env(n, 0.4, 1.2) * np.clip(1.2 - np.linspace(0, 1, n) * 0.6, 0, 1)
    SFX.add(np.vstack([y, np.roll(y, 911)]) * e * amp, t0)


def cascade(t0, dur, amp, seed=0):
    rng = np.random.default_rng(seed + 404)
    n = int(dur * SR)
    y = bp(pink(n, rng), 900, 5000) * (0.6 + 0.4 * smooth_noise(n, 3, rng))
    y2 = bp(pink(n, rng), 900, 5000) * (0.6 + 0.4 * smooth_noise(n, 3, rng))
    e = env(n, 0.6, 1.5)
    SFX.add(np.vstack([y, y2]) * e * amp, t0)


def whoosh(t0, dur, amp, lo=200, hi=3000, up=True, pan=0.0, rng=RNG):
    n = int(dur * SR)
    x = np.linspace(0, 1, n)
    src = pink(n, rng)
    # sweep a band through the noise by crossfading three fixed bands
    b1, b2, b3 = bp(src, lo, lo * 3), bp(src, lo * 2.5, hi / 2), bp(src, hi / 2.5, hi)
    k = x if up else 1 - x
    y = b1 * (1 - k) ** 2 + b2 * 2 * k * (1 - k) + b3 * k ** 2
    e = np.sin(math.pi * x) ** 1.5
    SFX.add(y * e * amp, t0, pan)


# ================================================================== the score
def score():
    say = WORDS

    # ---------------- In the beginning: darkness over the deep
    drone(hz('D1'), 0.0, 10.4, 0.2, a=3.5, r=1.2)
    drone(hz('A1'), 1.0, 4.2, 0.14, a=2.0, r=1.2)
    ocean(0.2, 11.5, 0.11, deep=0.85, seed=1)
    strings(chord('D2 A2'), 0.8, 4.8, 0.12, attack=2.5, release=1.5, bright=900)
    choir(chord('D3 A3'), 1.0, 4.6, 0.32, 'u', attack=1.8, release=1.2)
    choir(chord('F3'), 2.4, 3.2, 0.4, 'u', attack=1.2, release=1.0)
    # the Spirit hovering: breath of wings moving left to right, and a glassy shimmer
    for i in range(6):
        tt = 4.1 + i * 0.95
        pan = -0.85 + 1.5 * (tt - 4.0) / 5.3
        whoosh(tt, 1.1, 0.10 + 0.04 * math.sin(i), lo=300, hi=2600, up=(i % 2 == 0), pan=pan)
    for i, nm in enumerate(['D6', 'A6', 'F6', 'E6', 'A5', 'D6', 'C6']):
        bell(hz(nm), 4.2 + i * 0.7, 0.12, 'celesta', -0.8 + i * 0.25)
    strings(chord('D5'), 4.0, 1.6, 0.06, attack=1.2, release=0.8, bright=2200)
    strings(chord('Bb1 F2 Bb2 D3 F3'), 5.6, 1.4, 0.2, attack=0.9, release=0.6, bright=1300)
    choir(chord('F3 Bb3 D4'), 5.6, 1.4, 0.3, 'u', attack=0.8, release=0.6)
    strings(chord('G1 D2 Bb2 E3'), 7.0, 1.6, 0.22, attack=0.5, release=0.5, bright=1400)
    choir(chord('G3 Bb3 E4'), 7.0, 1.6, 0.32, 'u', attack=0.5, release=0.5)
    # "And God said": the Word, first on a horn, over a suspended A
    strings(chord('A1 E2 A2 D3 E3'), 8.6, 1.6, 0.26, attack=0.4, release=0.3, bright=1700)
    choir(chord('A3 D4 E4'), 8.6, 1.6, 0.36, 'a', attack=0.5, release=0.3)
    word(say[0] + 0.05, 'horn', 4, step=0.5, amp=0.55, hold=0.75)
    strings(chord('A1 E2 A2 C#3 E3 A3'), 10.2, 0.68, 0.34, attack=0.3, release=0.02, bright=2600)
    choir(chord('A3 C#4 E4 A4'), 10.2, 0.68, 0.44, 'a', attack=0.3, release=0.02)
    brass = lambda fs, t0, d, a, br=0.6, rel=1.0: [horn_line([(f, 0, d)], t0, a, bright=br, seed=int(f), pan=(i - 1.5) * 0.25, release=rel)
                                                  for i, f in enumerate(fs)]
    brass([hz('A2'), hz('E3')], 10.25, 0.62, 0.25, 0.4, rel=0.05)
    timp_roll(hz('A2'), 9.7, 1.25, 0.05, 0.5)
    swell(H['light'], 2.4, 1.0)

    # ---------------- "Let there be light" (11.0)
    L = H['light']
    boom(L, 0.7)
    timpani(hz('D2'), L, 1.0)
    crash(L, 1.1)
    strings(chord('D2 A2 D3 F#3 A3 D4 F#4 A4 D5 F#5'), L, 2.2, 0.6, attack=0.04, release=0.5, bright=5200)
    choir(chord('A2 D3 F#3 A3 D4 F#4 A4 D5 F#5'), L, 2.2, 0.7, 'a', attack=0.06, release=0.5)
    brass([hz('D3'), hz('A3'), hz('D4'), hz('F#4')], L, 2.3, 0.42, 0.9)
    horn_line([('F#5', 0, 1.6)], L, 0.35, bright=0.9, pan=0.1, release=0.6)
    for i, nm in enumerate(['D6', 'F#6', 'A6', 'D7', 'A6', 'F#6']):
        bell(hz(nm), L + 0.05 + i * 0.09, 0.3, 'glock', -0.5 + i * 0.2)
    strings(chord('A5 D6 F#6'), L, 2.0, 0.22, attack=0.05, release=0.8, bright=9000, voices=6)
    shimmer(L + 0.1, 3.2, chord('D6 F#6 A6 D7'), 0.05)
    for i, nm in enumerate(['D5', 'A4', 'F#4', 'D4', 'A3', 'F#3', 'D3']):
        harp(hz(nm), 12.2 + i * 0.12, 0.35, 0.3 - i * 0.1)
    ocean(11.0, 10.5, 0.14, deep=0.1, seed=2)
    # evening and morning: the light dims to the fourth, then returns
    strings(chord('D2 G2 D3 G3 B3 D4 G4 B4'), 13.3, 1.4, 0.3, attack=0.5, release=0.5, bright=2200)
    choir(chord('G3 B3 D4 G4'), 13.3, 1.4, 0.3, 'o', attack=0.5, release=0.5)
    strings(chord('D2 A2 D3 F#3 A3 D4 F#4 A4'), 14.6, 1.6, 0.3, attack=0.4, release=0.8, bright=2600)
    choir(chord('A3 D4 F#4 A4'), 14.6, 1.6, 0.3, 'a', attack=0.4, release=0.8)
    chime(H['morning1'])

    # ---------------- Day two: the expanse
    wind(14.9, 6.4, 0.14, 250, 800, seed=3)
    word(say[1], 'strings', 4, step=0.35, amp=0.22, hold=0.8)
    strings(chord('B1 F#2 B2 D3 F#3 B3 D4'), 16.0, 1.5, 0.3, attack=0.35, release=0.4, bright=2400)
    choir(chord('F#3 B3 D4 F#4'), 16.0, 1.5, 0.28, 'a', attack=0.5, release=0.4)
    strings(chord('G1 D2 G2 B2 D3 G3 B3 D4'), 17.5, 1.5, 0.32, attack=0.3, release=0.4, bright=2600)
    choir(chord('G3 B3 D4 G4'), 17.5, 1.5, 0.3, 'a', attack=0.3, release=0.4)
    strings(chord('A1 A2 D3 F#3 A3 D4 F#4'), 19.0, 0.8, 0.32, attack=0.2, release=0.3, bright=2800)
    strings(chord('A1 E2 A2 C#3 E3 A3 C#4 E4'), 19.8, 1.2, 0.36, attack=0.2, release=0.25, bright=3200)
    choir(chord('A3 C#4 E4 A4'), 19.8, 1.2, 0.34, 'a', attack=0.25, release=0.25)
    # a pulse opens with the sky
    pat = {16.6: 'B3 D4 F#4 D4', 17.5: 'B3 D4 G4 D4', 18.5: 'B3 D4 G4 B4', 19.0: 'A3 D4 F#4 A4', 19.8: 'A3 C#4 E4 A4'}
    keys = sorted(pat)
    for ki, k0 in enumerate(keys):
        k1 = keys[ki + 1] if ki + 1 < len(keys) else 20.85
        notes = pat[k0].split()
        i = 0
        tt = k0
        while tt < k1 - 0.05:
            strings([hz(notes[i % 4])], tt, 0.2, 0.09 + 0.05 * (tt - 16.6) / 4.2, attack=0.02, release=0.12, bright=4200, voices=3, seed=i)
            tt += 0.25
            i += 1
    whoosh(16.4, 4.2, 0.12, lo=150, hi=1800, up=True)
    whoosh(20.1, 0.9, 0.2, lo=400, hi=6000, up=True)
    swell(20.9, 1.2, 0.6)
    chime(19.1)

    # ---------------- Day three: dry land
    T3 = H['landrise']
    word(say[2], 'horn', 2, step=0.4, amp=0.55, hold=0.6)
    boom(T3, 0.55, f0=55, f1=30)
    rumble(T3 - 0.1, 3.4, 0.55)
    cascade(T3 + 0.8, 2.8, 0.12)
    timp_roll(hz('D2'), T3, 1.5, 0.15, 0.5, rate=14)
    timpani(hz('C2'), 22.5, 0.7)
    strings(chord('D1 D2 A2 D3 F3 A3'), T3, 0.95, 0.4, attack=0.1, release=0.3, bright=2000)
    brass([hz('D2'), hz('A2'), hz('D3')], T3, 0.9, 0.4, 0.5)
    strings(chord('Bb1 F2 Bb2 D3 F3 Bb3'), 21.8, 0.75, 0.42, attack=0.1, release=0.25, bright=2300)
    brass([hz('Bb2'), hz('F3'), hz('Bb3')], 21.8, 0.7, 0.42, 0.6)
    strings(chord('C2 G2 C3 E3 G3 C4'), 22.5, 0.8, 0.46, attack=0.1, release=0.25, bright=2600)
    brass([hz('C3'), hz('G3'), hz('C4'), hz('E4')], 22.5, 0.75, 0.46, 0.75)
    timpani(hz('D2'), 23.3, 0.8)
    strings(chord('D2 A2 D3 F#3 A3 D4 F#4 A4'), 23.3, 0.6, 0.45, attack=0.05, release=0.5, bright=3600)
    brass([hz('D3'), hz('A3'), hz('D4'), hz('F#4')], 23.3, 0.55, 0.4, 0.8)
    crash(23.3, 0.5)
    # "Let the earth sprout vegetation": harp and warm strings, growing upward
    word(say[3], 'celesta', 5, step=0.3, amp=0.45, hold=0.6)
    prog3 = [(23.9, 'G2 D3 G3 B3 D4', 'G3 B3 D4 G4'), (24.8, 'F#2 D3 A3 D4 F#4', 'A3 D4 F#4 A4'),
             (25.6, 'E2 B2 D3 G3 B3', 'B3 D4 G4 B4'), (26.4, 'A2 E3 G3 D4 E4', 'A3 D4 E4 A4'), (27.1, 'D2 A2 D3 F#3 A3', 'A3 D4 F#4')]
    for i, (t0, s, arp) in enumerate(prog3):
        d = (prog3[i + 1][0] if i + 1 < len(prog3) else 27.6) - t0
        strings(chord(s), t0, d, 0.26, attack=0.3, release=0.4, bright=2400)
        choir(chord(s)[2:], t0, d, 0.18, 'o', attack=0.35, release=0.4)
        a = chord(arp)
        for j in range(int(d / 0.125)):
            harp(a[j % len(a)] * (2 if (j // len(a)) % 2 else 1), t0 + j * 0.125, 0.22, pan=-0.4 + 0.8 * (j % 5) / 4)
    wind(23.3, 4.4, 0.07, 400, 1400, seed=4)
    sparkle(23.9, 3.0, 60, 0.03, np.random.default_rng(5), 2500, 6000)
    chime(26.1)

    # ---------------- Day four: lights in the expanse
    swell(H['sunset'], 1.4, 0.6)
    word(say[4], 'celesta', 5, step=0.35, amp=0.55, hold=0.7)
    strings(chord('D2 A2 D3 F#3 A3 D4 F#4 A4 D5'), H['sunset'], 0.9, 0.42, attack=0.05, release=0.6, bright=4200)
    choir(chord('A3 D4 F#4 A4 D5'), H['sunset'], 0.9, 0.42, 'a', attack=0.08, release=0.6)
    brass([hz('D3'), hz('A3'), hz('F#4')], H['sunset'], 0.8, 0.35, 0.8)
    strings(chord('D2 A2 C#3 F#3 A3 C#4 F#4'), 28.4, 1.3, 0.24, attack=0.3, release=0.4, bright=2200)
    choir(chord('C#4 F#4 A4'), 28.4, 1.3, 0.22, 'o', attack=0.4, release=0.4)
    # night: the Lydian stars
    strings(chord('D2 E3 G#3 B3 E4'), 29.6, 1.1, 0.2, attack=0.4, release=0.3, bright=1800)
    choir(chord('G#3 B3 E4 G#4'), 29.6, 1.1, 0.24, 'u', attack=0.5, release=0.3)
    strings(chord('B1 F#2 D3 A3 C#4 E4'), 30.7, 1.0, 0.2, attack=0.3, release=0.3, bright=1800)
    choir(chord('A3 C#4 E4 F#4'), 30.7, 1.0, 0.22, 'u', attack=0.3, release=0.3)
    strings(chord('G1 D2 B2 A3 D4'), 31.6, 0.8, 0.2, attack=0.2, release=0.3, bright=2200)
    strings(chord('A1 E2 A2 D3 E3 A3'), 32.4, 0.7, 0.22, attack=0.2, release=0.25, bright=2200)
    rng = np.random.default_rng(9)
    stars = chord('E5 G#5 B5 D6 E6 G#6 B6 E7')
    for i in range(22):
        tt = 28.6 + i * 0.13 + rng.uniform(0, 0.05)
        bell(stars[rng.integers(len(stars))], tt, 0.10 * (1 - i / 30), 'celesta', rng.uniform(-0.9, 0.9))
    sparkle(28.5, 2.0, 70, 0.035, rng, 6000, 11000)
    drone(hz('D2'), 29.2, 2.8, 0.08, a=0.8, r=1.0)
    bell(hz('A6'), H['morningstar'], 0.55, 'glock', 0.35)
    bell(hz('A5'), H['morningstar'], 0.3, 'celesta', 0.35)
    wind(27.5, 5.6, 0.05, 200, 700, seed=6)
    chime(31.75, 0.3)

    # ---------------- Day five: the waters swarm (under water the music is muffled)
    P = H['plunge']
    whoosh(P - 0.15, 0.5, 0.25, lo=150, hi=2500, up=False)
    ocean(P, 3.4, 0.35, deep=1.0, seed=7, bus=UNDER)
    rng = np.random.default_rng(10)
    for i in range(40):
        bubble(P + rng.uniform(0, 0.8) ** 2 * 3.2, rng.uniform(300, 1400), 0.05, rng.uniform(-0.7, 0.7), bus=UNDER)
    word(say[5], 'harp', 3, step=0.3, amp=0.6, hold=0.6)
    und = [(33.0, 'B1 F#2 B2 D3 F#3', 'B2 D3 F#3 B3'), (34.2, 'G1 D2 G2 B2 D3', 'G2 B2 D3 G3'),
           (35.0, 'F#1 D2 A2 D3 F#3', 'A2 D3 F#3 A3'), (35.8, 'A1 E2 A2 C#3 E3', 'A2 C#3 E3 A3')]
    for i, (t0, s, arp) in enumerate(und):
        d = (und[i + 1][0] if i + 1 < len(und) else 36.3) - t0
        strings(chord(s), t0, d, 0.3, attack=0.3, release=0.2, bright=900, bus=UNDER)
        a = chord(arp)
        for j in range(int(d / (1 / 6))):
            harp(a[j % 4] * 2, t0 + j / 6, 0.18, pan=-0.5 + (j % 4) / 3, bus=UNDER)
    whale(H['whale'], [(0, 160), (0.5, 230), (1.2, 420), (1.5, 380), (2.0, 260)], 0.18, bus=UNDER)
    whale(H['whale'] + 2.0, [(0, 300), (0.4, 520), (0.9, 470), (1.4, 180)], 0.12, bus=UNDER)
    swell(H['breach'], 1.0, 0.5)
    # up into the air: a splash, and birds
    B = H['breach']
    whoosh(B - 0.05, 0.45, 0.45, lo=600, hi=8000, up=False)
    for i in range(18):
        bubble(B + rng.uniform(0, 0.5), rng.uniform(1200, 3500), 0.03, rng.uniform(-0.8, 0.8))
    ocean(B, 3.4, 0.14, deep=0.0, seed=8)
    flutter(B + 0.05, 1.4, 0.12, 60, rng)
    birds_t = np.sort(rng.uniform(B + 0.2, 39.4, 26))
    for tt in birds_t:
        chirp(tt, 0.05 * rng.uniform(0.5, 1.0), rng.uniform(-0.9, 0.9), int(rng.integers(3)), rng)
    coo(37.85, 0.13, -0.2)
    brt = [(B, 'D2 A2 D3 F#3 A3 D4 F#4 A4 D5'), (37.3, 'G2 D3 G3 B3 D4 G4 B4'), (38.0, 'A2 E3 A3 C#4 E4 A4'), (38.6, 'D2 A2 D3 F#3 A3 D4 F#4')]
    for i, (t0, s) in enumerate(brt):
        d = (brt[i + 1][0] if i + 1 < len(brt) else 39.4) - t0
        strings(chord(s), t0, d, 0.3, attack=0.1, release=0.35, bright=4200)
        choir(chord(s)[3:], t0, d, 0.2, 'a', attack=0.15, release=0.35)
        tops = chord(s)[-3:]
        j = 0
        tt = t0
        while tt < t0 + d - 0.05:
            strings([tops[j % 3] * 2], tt, 0.1, 0.05, attack=0.01, release=0.08, bright=6000, voices=2, seed=j)
            tt += 0.125
            j += 1
    horn_line([('A4', 0, 0.3), ('D5', 0.3, 0.3), ('F#5', 0.6, 0.6)], B + 0.4, 0.3, bright=0.8, pan=0.2)
    chime(38.6, 0.4)

    # ---------------- Day six: the beasts of the earth
    C = H['herds']
    hooves(C, H['hush'] - C, 0.3, 160, rng)
    word(say[6], 'horn', 3, step=0.35, amp=0.55, hold=0.5, extra=[('F#4', 1.2, 0.3), ('A4', 1.5, 0.4)])
    herd = [(C, 'D2 A2 D3 F#3 A3'), (40.0, 'C2 G2 C3 E3 G3'), (40.6, 'G1 D2 G2 B2 D3 G3'), (41.2, 'D2 A2 D3 F#3 A3 D4')]
    for i, (t0, s) in enumerate(herd):
        d = (herd[i + 1][0] if i + 1 < len(herd) else H['hush']) - t0
        strings(chord(s), t0, d, 0.46, attack=0.06, release=0.05, bright=3400)
        brass(chord(s)[1:4], t0, d, 0.34, 0.75, rel=0.05)
    for k in range(int((H['hush'] - C) / 0.25)):
        tt = C + k * 0.25
        acc = 1.0 if k % 4 == 0 else 0.55 if k % 2 == 0 else 0.3
        drum(tt, 0.5 * acc, 95 if k % 4 == 0 else 125, pan=-0.2 if k % 2 else 0.2)
    timpani(hz('D2'), 41.2, 0.7)

    # ---------------- "Let us make man in our image": the hush, the dust, the breath
    M = H['hush']
    sine_tone(hz('A5'), M, 5.5, 0.018, 0.3, a=0.6, r=1.5)
    drone(hz('D2'), M, 6.0, 0.06, a=1.5, r=1.5)
    # the Word in three voices: "Let us"
    for (sop, alt, ten, t0, d) in [('A4', 'F#4', 'D4', 42.3, 0.6), ('D5', 'F#4', 'B3', 42.9, 0.6), ('E5', 'A4', 'C#4', 43.5, 0.9)]:
        choir([hz(sop), hz(alt), hz(ten)], t0, d, 0.6, 'o', attack=0.2, release=0.5, voices=3)
    wind(42.2, 5.3, 0.06, 500, 2400, gust=0.8, seed=11)
    sparkle(42.4, 4.8, 420, 0.028, rng, 3000, 9000)
    whoosh(43.0, 2.5, 0.07, lo=250, hi=2000, up=True, pan=-0.5)
    whoosh(45.0, 2.2, 0.07, lo=300, hi=2500, up=True, pan=0.5)
    for i, (t0, s) in enumerate([(44.2, 'G2 D3 G3 B3'), (45.3, 'E2 B2 E3 G3 B3 E4'), (46.4, 'A2 E3 A3 D4 E4')]):
        d = [45.3, 46.4, 47.0][i] - t0
        strings(chord(s), t0, d, 0.12 + 0.1 * i, attack=0.5, release=0.1, bright=1800 + 500 * i)
        choir(chord(s)[1:], t0, d, 0.12 + 0.08 * i, 'u', attack=0.5, release=0.1)
    breath_in(H['breath'] - 0.4, 0.45, 0.22)
    heartbeat(47.55, 0.55)
    heartbeat(48.62, 0.4)
    timp_roll(hz('A2'), 47.5, 0.5, 0.1, 0.45, rate=18)
    swell(H['alive'], 0.9, 0.7)
    A6 = H['alive']
    timpani(hz('D2'), A6, 0.9)
    boom(A6, 0.45, f0=58, f1=34)
    crash(A6, 0.8)
    rise = [(A6, 'D2 A2 D3 F#3 A3 D4 F#4 A4'), (49.0, 'G1 D2 G2 B2 D3 G3 B3 D4'), (49.6, 'A1 E2 A2 C#3 E3 A3 C#4 E4'),
            (50.4, 'D2 A2 D3 F#3 A3 D4 F#4 A4 D5')]
    for i, (t0, s) in enumerate(rise):
        d = (rise[i + 1][0] if i + 1 < len(rise) else 51.0) - t0
        strings(chord(s), t0, d, 0.5, attack=0.08, release=0.5, bright=4400)
        choir(chord(s)[2:], t0, d, 0.5, 'a', attack=0.1, release=0.5)
        brass(chord(s)[2:5], t0, d, 0.3, 0.8)
    strings(chord('A5 D6 F#6'), A6, 2.8, 0.16, attack=0.3, release=0.8, bright=9000, voices=6)
    # the Word, rising all the way as he stands
    horn_line([('A4', 0, 0.5), ('D5', 0.5, 0.5), ('E5', 1.0, 0.5), ('F#5', 1.5, 0.6), ('A5', 2.1, 1.1)], A6, 0.42, bright=0.9, pan=0.1)
    voice_line([('A4', 0, 0.5), ('D5', 0.5, 0.5), ('E5', 1.0, 0.5), ('F#5', 1.5, 0.6), ('A5', 2.1, 1.1)], A6, 0.35, pan=-0.1)
    bell(hz('D6'), 50.4, 0.3, 'glock', 0.2)

    # ---------------- very good: evening in the garden
    eden = [(50.8, 'G2 D3 G3 B3 D4'), (51.8, 'F#2 D3 A3 D4 F#4'), (52.6, 'E2 B2 D3 G3 B3'), (53.2, 'A2 E3 G3 D4 E4'),
            (53.7, 'A2 E3 G3 C#4 E4'), (54.2, 'D2 A2 D3 F#3 A3 D4')]
    for i, (t0, s) in enumerate(eden):
        d = (eden[i + 1][0] if i + 1 < len(eden) else 54.9) - t0
        strings(chord(s), t0, d, 0.26, attack=0.35, release=0.45, bright=2300)
        choir(chord(s)[2:], t0, d, 0.18, 'o', attack=0.4, release=0.45)
        a = chord(s)[1:]
        for j in range(int(d / 0.2)):
            harp(a[j % len(a)] * 2, t0 + j * 0.2, 0.16, pan=-0.3 + 0.6 * ((j * 3) % 5) / 4)
    strings(chord('F#5'), 50.8, 1.0, 0.1, attack=0.3, release=0.3, bright=3500, voices=4, seed=1)
    strings(chord('E5'), 51.8, 0.4, 0.1, attack=0.15, release=0.2, bright=3500, voices=4, seed=2)
    strings(chord('D5'), 52.2, 0.4, 0.1, attack=0.15, release=0.2, bright=3500, voices=4, seed=3)
    strings(chord('B4'), 52.6, 0.6, 0.1, attack=0.15, release=0.2, bright=3500, voices=4, seed=4)
    strings(chord('C#5'), 53.2, 0.5, 0.1, attack=0.15, release=0.2, bright=3500, voices=4, seed=5)
    strings(chord('E5'), 53.7, 0.5, 0.1, attack=0.15, release=0.2, bright=3500, voices=4, seed=6)
    strings(chord('D5'), 54.2, 1.2, 0.1, attack=0.2, release=0.8, bright=3500, voices=4, seed=7)
    wind(50.5, 5.0, 0.05, 300, 1200, seed=12)
    for tt in np.sort(rng.uniform(50.8, 54.6, 9)):
        chirp(tt, 0.025, rng.uniform(-0.9, 0.9), int(rng.integers(3)), rng)
    chime(53.6, 0.4)

    # ---------------- the seventh day: finished, and rest
    R7 = H['rest']
    bell(hz('D3'), R7 + 0.2, 0.5, 'toll', 0.0)
    strings(chord('D2 A2 D3 E4 F#4 A4'), R7, 1.5, 0.18, attack=0.6, release=0.6, bright=1600)
    choir(chord('D4 E4 F#4 A4'), R7, 1.5, 0.18, 'u', attack=0.7, release=0.6)
    strings(chord('D2 G2 D3 G3 B3'), 56.2, 1.2, 0.14, attack=0.5, release=0.6, bright=1400)
    choir(chord('G3 B3 D4'), 56.2, 1.2, 0.14, 'u', attack=0.5, release=0.6)
    strings(chord('D2 A2 D3 F#3 A3'), 57.4, 1.9, 0.1, attack=0.4, release=1.6, bright=1100)
    crickets(55.2, 4.2, 0.008, rng)
    wind(54.8, 4.6, 0.025, 200, 700, seed=13)

    # ---------------- In the beginning was the Word
    Wd = H['word']
    bell(hz('A6'), Wd, 0.25, 'celesta', 0.0)
    sine_tone(hz('A5'), Wd, 0.6, 0.05, 0.0, a=0.03, r=1.4)
    drone(hz('D2'), 61.0, 4.8, 0.06, a=2.0, r=0.5)
    drone(hz('A2'), 61.5, 4.3, 0.03, a=2.0, r=0.5)
    voice_line([('A4', 0, 0.6), ('D5', 0.6, 0.6), ('E5', 1.2, 2.1)], say[8], 1.2, pan=0.0)
    horn_line([('A4', 0, 0.6), ('D5', 0.6, 0.6), ('E5', 1.2, 2.1)], say[8], 0.34, bright=0.35, pan=0.0)
    strings(chord('D3 D4'), 62.5, 1.1, 0.14, attack=0.8, release=0.2, bright=1800)
    strings(chord('D3 A3 D4 F#4'), 63.5, 0.8, 0.2, attack=0.4, release=0.2, bright=2200)
    choir(chord('D4 F#4 A4'), 63.6, 0.7, 0.18, 'o', attack=0.4, release=0.2)
    # "All things were made through him": up through F# and A, the Amen, and home
    voice_line([('F#5', 0, 0.7), ('A5', 0.7, 0.6), ('B5', 1.3, 0.8), ('A5', 2.1, 1.1), ('F#5', 3.2, 0.8), ('E5', 4.0, 0.8), ('D5', 4.8, 2.4)],
               64.3, 0.42, pan=0.0, release=2.0)
    horn_line([('F#5', 0, 0.7), ('A5', 0.7, 0.6), ('B5', 1.3, 0.8), ('A5', 2.1, 1.1), ('F#5', 3.2, 0.8), ('E5', 4.0, 0.8), ('D5', 4.8, 2.4)],
              64.3, 0.3, bright=0.85, pan=0.05, release=2.0)
    strings(chord('A1 E2 A2 C#3 E3 A3 C#4 E4'), 64.3, 1.3, 0.32, attack=0.4, release=0.1, bright=3000)
    choir(chord('A3 C#4 E4 A4'), 64.3, 1.3, 0.32, 'a', attack=0.4, release=0.1)
    timp_roll(hz('D2'), 64.5, 1.1, 0.08, 0.55, rate=16)
    swell(H['sunrise'], 2.2, 0.9)
    S = H['sunrise']
    boom(S, 0.55, f0=60, f1=32, dur=4.5)
    timpani(hz('D2'), S, 0.9)
    crash(S, 0.9, dur=6)
    strings(chord('D2 G2 D3 G3 B3 D4 G4 B4 D5'), S, H['amen'] - S, 0.55, attack=0.06, release=0.2, bright=4600)
    choir(chord('G2 D3 G3 B3 D4 G4 B4 D5'), S, H['amen'] - S, 0.6, 'a', attack=0.08, release=0.2)
    brass([hz('G3'), hz('B3'), hz('D4'), hz('G4')], S, H['amen'] - S, 0.4, 0.85, rel=0.2)
    Am = H['amen']
    timpani(hz('D2'), Am, 0.7)
    strings(chord('D2 A2 D3 F#3 A3 D4 F#4 A4 D5 F#5'), Am, 71.2 - Am, 0.55, attack=0.12, release=1.6, bright=4400)
    choir(chord('A2 D3 F#3 A3 D4 F#4 A4 D5'), Am, 71.2 - Am, 0.55, 'a', attack=0.15, release=1.6)
    brass([hz('D3'), hz('A3'), hz('D4'), hz('F#4')], Am, 71.0 - Am, 0.36, 0.7, rel=1.4)
    drone(hz('D1'), Am, 71.2 - Am, 0.1, a=0.4, r=1.8)
    for i, nm in enumerate(['D6', 'F#6', 'A6', 'D7']):
        bell(hz(nm), Am + 0.08 * i, 0.22, 'glock', -0.3 + 0.2 * i)
    strings(chord('A5 D6 F#6'), Am, 71.0 - Am, 0.2, attack=0.2, release=1.6, bright=9000, voices=6)
    shimmer(S + 0.05, 71.0 - S, chord('D6 F#6 A6 D7 G6 B6'), 0.04)
    bell(hz('D6'), 69.0, 0.2, 'celesta', 0.1)
    bell(hz('A5'), 70.3, 0.16, 'celesta', -0.1)
    whoosh(62.4, 3.4, 0.08, lo=80, hi=900, up=True)


# ------------------------------------------------------------------ the conductor
# (time, dB) for the orchestra: dark and far at first, the light sudden, a true hush before man,
# rest at the end of the seventh day, and the last Amen the loudest thing in the film
DYNAMICS = [
    (0.0, -7), (8.5, -7), (10.3, -6), (10.95, -6), (11.0, 0), (12.6, -2), (13.4, -4), (16.0, -4), (20.7, -3),
    (20.9, -1), (23.3, -2), (23.6, -5), (27.4, -5), (27.6, -2), (28.5, -6), (31.5, -6), (33.0, -7), (36.2, -7),
    (36.35, -3), (39.1, -2), (41.7, 0), (41.85, -10), (46.8, -7), (47.15, -14), (47.9, -6), (48.0, 0), (50.4, -1),
    (50.9, -2), (54.7, -4), (57.0, -8), (59.4, -14), (60.7, -4), (64.2, -3), (65.5, -2), (65.6, 0), (67.5, -1), (71.2, -4),
]


def dynamics_curve(n):
    t = tvec(n)
    k = np.array(DYNAMICS)
    db = np.interp(t, k[:, 0], k[:, 1])
    g = 10 ** (db / 20)
    return lp(g, 25, 1)


# ------------------------------------------------------------------ space: reverb, mix, master
def reverb_ir(rt, seconds, seed, bright=1.0, predelay=0.02):
    rng = np.random.default_rng(seed)
    n = int(seconds * SR)
    t = tvec(n)
    ir = np.zeros((2, n))
    for ch in range(2):
        w = rng.standard_normal(n)
        lo, mid, hi = lp(w, 400), bp(w, 400, 3500), hp(w, 3500)
        ir[ch] = lo * np.exp(-6.9 * t / (rt * 1.15)) + mid * np.exp(-6.9 * t / rt) + hi * np.exp(-6.9 * t / (rt * 0.55 * bright))
    # early reflections
    for k in range(10):
        d = int((predelay + rng.uniform(0.005, 0.07)) * SR)
        ir[:, d] += rng.uniform(-0.5, 0.5, 2) * (1 - k / 12)
    fade = np.minimum(1, t / 0.01)
    ir *= fade
    ir[:, :int(predelay * SR)] = 0
    return ir / np.sqrt(np.sum(ir ** 2) / 2)


def convolve(x, ir):
    return np.vstack([signal.fftconvolve(x[0], ir[0])[:x.shape[1]], signal.fftconvolve(x[1], ir[1])[:x.shape[1]]])


def limit(x, ceiling_db=-1.2, look=0.004, release=0.12):
    """Look-ahead peak limiter: the gain dips before a peak arrives and recovers over `release`."""
    from scipy.ndimage import maximum_filter1d, uniform_filter1d
    c = 10 ** (ceiling_db / 20)
    w = int(look * SR)
    pk = maximum_filter1d(np.max(np.abs(x), axis=0), 2 * w + 1)
    g = np.minimum(1, c / (pk + 1e-12))
    r_c = math.exp(-1 / (release * SR))
    g = np.minimum(g, 1 + signal.lfilter([1 - r_c], [1, -r_c], g - 1))
    g = uniform_filter1d(g, w)
    g = np.minimum(g, c / (np.max(np.abs(x), axis=0) + 1e-12))
    return x * np.minimum(g, 1)


def loudness(x):
    """ITU-R BS.1770 integrated loudness (LUFS), 48 kHz K-weighting."""
    b1, a1 = [1.53512485958697, -2.69169618940638, 1.19839281085285], [1, -1.69065929318241, 0.73248077421585]
    b2, a2 = [1.0, -2.0, 1.0], [1, -1.99004745483398, 0.99007225036621]
    y = signal.lfilter(b2, a2, signal.lfilter(b1, a1, x, axis=-1), axis=-1)
    blk, hop = int(0.4 * SR), int(0.1 * SR)
    z = np.array([np.sum(np.mean(y[:, i:i + blk] ** 2, axis=1)) for i in range(0, y.shape[1] - blk, hop)])
    l = -0.691 + 10 * np.log10(z + 1e-15)
    z = z[l > -70]
    rel = -0.691 + 10 * np.log10(np.mean(z)) - 10
    z = z[(-0.691 + 10 * np.log10(z)) > rel]
    return -0.691 + 10 * np.log10(np.mean(z))


def master():
    n = N
    music = MUSIC.x[:, :n + SR * 4] * dynamics_curve(n + SR * 4)
    sfx = SFX.x[:, :n + SR * 4]
    under = UNDER.x[:, :n + SR * 4]
    hall = reverb_ir(2.8, 4.5, 1)
    room = reverb_ir(1.3, 2.2, 2, bright=0.8, predelay=0.012)
    deep = reverb_ir(4.5, 6.0, 3, bright=0.3, predelay=0.04)
    wet_m = convolve(music, hall)
    wet_s = convolve(sfx, room)
    # under the surface everything is dark and far away
    und = lp(under, 700, 2)
    wet_u = convolve(und, deep)
    mix = music * 0.78 + wet_m * 0.34 + sfx * 0.9 + wet_s * 0.2 + und * 0.6 + wet_u * 0.36
    mix = hp(mix, 34, 2)
    # a little presence, since the orchestra is weighted low
    mix = mix + 0.22 * hp(mix, 1200, 1) - 0.12 * hp(mix, 9000, 1)
    mix = mix[:, :n]
    # end: breathe out to silence by the last frame
    t = tvec(n)
    mix *= np.clip((DUR - t) / 0.8, 0, 1) ** 1.5
    lufs = loudness(mix)
    target = -17.0
    mix *= 10 ** ((target - lufs) / 20)
    mix = limit(mix, -1.2)
    mix = limit(mix, -1.0)
    return mix, lufs


def main():
    score()
    mix, before = master()
    after = loudness(mix)
    pk = 20 * np.log10(np.max(np.abs(mix)) + 1e-12)
    print('loudness %.1f -> %.1f LUFS, peak %.2f dBFS, %.1f s' % (before, after, pk, mix.shape[1] / SR))
    cache = os.path.join(ROOT, 'tools', 'cache')
    os.makedirs(cache, exist_ok=True)
    wav = os.path.join(cache, 'score.wav')
    from scipy.io import wavfile
    wavfile.write(wav, SR, mix.T.astype(np.float32))
    ff = os.environ.get('FFMPEG', 'ffmpeg')
    out = os.path.join(ROOT, 'creation', 'audio', 'score.mp3')
    os.makedirs(os.path.dirname(out), exist_ok=True)
    try:
        subprocess.run([ff, '-y', '-loglevel', 'error', '-i', wav, '-c:a', 'libmp3lame', '-q:a', '2', out], check=True)
        print('wrote', out)
    except (OSError, subprocess.CalledProcessError) as e:
        print('ffmpeg unavailable, wrote only', wav, e)


if __name__ == '__main__':
    main()
