/* ------------------------------------------------------------------
   Audio: a quiet, synthesised soundscape. A modal drone whose root note
   follows the era, wind that rises as you climb, and small cues.
   Everything is generated with the Web Audio API; nothing is downloaded.
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.Audio = (function () {
  var ctx = null, master, drone = null, wind = null, muted = false, started = false;
  var ERA_ROOT = { 'primeval': 55.0, 'patriarchs': 61.74, 'exodus': 58.27, 'conquest-judges': 65.41, 'united-kingdom': 73.42, 'divided-kingdom': 69.30,
    'exile-return': 51.91, 'intertestamental': 65.41, 'christ': 73.42, 'church': 82.41 };
  try { muted = localStorage.getItem('atlas-muted') === '1'; } catch (e) { }

  function start() {
    if (started) return;
    started = true;
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.7; master.connect(ctx.destination);
    buildDrone(); buildWind();
  }
  function buildDrone() {
    var g = ctx.createGain(); g.gain.value = 0.0;
    var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420; lp.Q.value = 0.7;
    var oscs = [];
    [[1, 0.35, 'sine'], [1.003, 0.2, 'triangle'], [1.5, 0.12, 'sine'], [2.0, 0.09, 'sine'], [0.5, 0.25, 'sine']].forEach(function (d) {
      var o = ctx.createOscillator(); o.type = d[2]; var og = ctx.createGain(); og.gain.value = d[1];
      o.connect(og); og.connect(lp); o.start(); oscs.push({ o: o, ratio: d[0] });
    });
    var lfo = ctx.createOscillator(); lfo.frequency.value = 0.07; var lg = ctx.createGain(); lg.gain.value = 140; lfo.connect(lg); lg.connect(lp.frequency); lfo.start();
    lp.connect(g); g.connect(master);
    drone = { g: g, oscs: oscs, root: 61.74 };
    setRoot(61.74, 0.01);
    g.gain.linearRampToValueAtTime(0.32, ctx.currentTime + 6);
  }
  function setRoot(f, t) {
    if (!drone) return;
    drone.root = f;
    drone.oscs.forEach(function (x) { x.o.frequency.cancelScheduledValues(ctx.currentTime); x.o.frequency.setTargetAtTime(f * x.ratio, ctx.currentTime, t || 3); });
  }
  function buildWind() {
    var len = ctx.sampleRate * 3, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0), last = 0;
    for (var i = 0; i < len; i++) { var w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    var src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    var bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 500; bp.Q.value = 0.6;
    var g = ctx.createGain(); g.gain.value = 0.0;
    var lfo = ctx.createOscillator(); lfo.frequency.value = 0.11; var lg = ctx.createGain(); lg.gain.value = 0.35; lfo.connect(lg); lg.connect(g.gain); lfo.start();
    src.connect(bp); bp.connect(g); g.connect(master); src.start();
    wind = { g: g, bp: bp, target: 0.15 };
  }
  function setWind(amount) { if (!wind) return; wind.target = amount; wind.g.gain.setTargetAtTime(0.05 + amount * 0.5, ctx.currentTime, 1.5); wind.bp.frequency.setTargetAtTime(350 + amount * 900, ctx.currentTime, 1.5); }
  function setEra(id) { if (ERA_ROOT[id]) setRoot(ERA_ROOT[id], 4); }

  function tone(freq, dur, type, vol, when) {
    if (!ctx || muted) return;
    var t = ctx.currentTime + (when || 0);
    var o = ctx.createOscillator(); o.type = type || 'sine'; o.frequency.value = freq;
    var g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol || 0.2, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.05);
  }
  function cue(name) {
    if (!ctx) return;
    var r = drone ? drone.root : 61.74;
    if (name === 'select') { tone(r * 8, 0.9, 'sine', 0.10); tone(r * 12, 1.4, 'sine', 0.06, 0.05); }
    else if (name === 'fly') { noiseSweep(0.9, 300, 1400, 0.10); }
    else if (name === 'era') { tone(r * 2, 3.5, 'sine', 0.16); tone(r * 3, 3.0, 'triangle', 0.06, 0.2); tone(r * 4, 2.5, 'sine', 0.05, 0.4); }
    else if (name === 'stop') { tone(r * 6, 0.6, 'triangle', 0.07); tone(r * 9, 0.8, 'sine', 0.05, 0.12); }
    else if (name === 'tick') { tone(1200, 0.06, 'square', 0.02); }
    else if (name === 'begin') { [1, 1.5, 2, 3].forEach(function (m, i) { tone(r * 4 * m, 2.2, 'sine', 0.08, i * 0.18); }); }
  }
  function noiseSweep(dur, f0, f1, vol) {
    var len = ctx.sampleRate * dur, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    var s = ctx.createBufferSource(); s.buffer = buf;
    var bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.2; bp.frequency.setValueAtTime(f0, ctx.currentTime); bp.frequency.exponentialRampToValueAtTime(f1, ctx.currentTime + dur);
    var g = ctx.createGain(); g.gain.setValueAtTime(0, ctx.currentTime); g.gain.linearRampToValueAtTime(vol, ctx.currentTime + dur * 0.3); g.gain.linearRampToValueAtTime(0, ctx.currentTime + dur);
    s.connect(bp); bp.connect(g); g.connect(master); s.start();
  }
  function setMuted(m) {
    muted = m; try { localStorage.setItem('atlas-muted', m ? '1' : '0'); } catch (e) { }
    if (master) master.gain.setTargetAtTime(m ? 0 : 0.7, ctx.currentTime, 0.3);
  }
  return { start: start, cue: cue, setEra: setEra, setWind: setWind, setMuted: setMuted, isMuted: function () { return muted; } };
})();
