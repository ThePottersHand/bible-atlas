/* ------------------------------------------------------------------
   Day three, second half, and day four on one hill.
   "Let the earth sprout vegetation": green runs up from the valleys,
   grass stands up along the crest, and a single tree grows on the hill,
   backlit by the light of the first days. "Let there be lights": that
   light gathers into the sun, which sets; the stars are spoken out, the
   moon crosses, and before dawn the morning star rises.
   ------------------------------------------------------------------ */
FILM.scenes.hill = (function () {
  var U = FILM.U, L;

  var camP = U.track([[23.2, [-1.0, 1.7, 9.0]], [27.3, [0.0, 1.7, 1.0]], [29.8, [-2.5, 1.4, 24.0]], [33.4, [-3.0, 1.3, 30.0]]]);
  var camT = U.track([[23.2, [5.0, 6.0, -60]], [27.3, [6.5, 7.0, -60]], [29.8, [3.5, 16.0, -60]], [33.4, [2.5, 18.0, -60]]]);
  var fov = U.track([[23.2, 30], [27.3, 29], [29.8, 40], [33.4, 41]]);
  // the sun: born from the light at 27.6, sets to the right; under the earth it swings round to rise on the left
  var sunAz = U.track([[23.0, 24], [27.6, 24], [29.6, 32], [30.4, 60], [31.4, -70], [33.4, -48]]);
  var sunEl = U.track([[23.0, 9.0], [27.6, 8.5], [29.6, -9.0], [30.4, -17], [31.4, -17], [32.4, -10], [33.4, -4.5]]);
  var moonAz = U.track([[29.0, -64], [32.8, -22]]);
  var moonEl = U.track([[29.0, -4], [31.0, 22], [32.8, 34]]);
  var POLE = U.norm([0, Math.sin(32 * Math.PI / 180), Math.cos(32 * Math.PI / 180)]);
  var MW = null;
  function mulM3(m, v) { return [m[0] * v[0] + m[3] * v[1] + m[6] * v[2], m[1] * v[0] + m[4] * v[1] + m[7] * v[2], m[2] * v[0] + m[5] * v[1] + m[8] * v[2]]; }
  function skyRot(t) { return L.rotAxis(POLE, -(t - 28.0) * 0.16); }
  // place the Milky Way so that at the middle of the night it rises behind the tree and arches up to the right
  function milkyWay() {
    var a = L.dir(22, -2), b = L.dir(-40, 72);
    var n = U.norm(U.cross(a, b));
    var g = L.dir(10, 9), k = g[0] * n[0] + g[1] * n[1] + g[2] * n[2];
    g = U.norm([g[0] - n[0] * k, g[1] - n[1] * k, g[2] - n[2] * k]);
    var R = skyRot(30.8);
    return { n: mulM3(R, n), c: mulM3(R, g) };
  }

  function state(t) {
    var s = {};
    var p = camP(t), look = camT(t);
    s.cam = U.camera(p, look, fov(t), 0);
    var born = U.sstep(27.45, 27.85, t);           // the light becomes the sun
    s.glory = 6.0 * (1 - born) + 14.0 * U.sstep(27.4, 27.6, t) * (1 - U.sstep(27.6, 28.0, t));
    s.sunDisk = born;
    s.sunI = born;
    s.sunDir = L.dir(sunAz(t), sunEl(t));
    if (t < 27.6) s.sunDir = L.dir(24, 9.0);
    // after the glory light yields, the sky follows the sun; before, it is lit as a first morning
    s.stars = U.sstep(28.5, 29.8, t) * (1 - U.sstep(32.3, 33.3, t));
    s.skyRot = skyRot(t);
    MW = MW || milkyWay();
    s.mwN = MW.n; s.mwC = MW.c;
    s.moon = U.sstep(29.1, 29.6, t) * (1 - U.sstep(32.2, 33.0, t));
    s.moonDir = L.dir(moonAz(t), moonEl(t));
    s.venus = U.sstep(31.2, 31.9, t) * 1.6;
    s.venusDir = L.dir(-40, 6.5);
    s.green = U.sstep(23.6, 26.6, t);
    s.wet = 1 - U.sstep(23.3, 25.6, t);
    s.lush = 0;
    s.grass = (t - 23.5) * 0.55;
    s.grow = Math.max(0, (t - 23.9) * 1.08);
    s.wind = 0.25;
    s.fruit = U.sstep(26.4, 27.2, t);
    s.clouds = U.lerp(0.25, 0.5, U.sstep(27.5, 28.5, t)) * (1 - U.sstep(29.0, 29.9, t)) + 0.3 * U.sstep(31.9, 32.8, t);
    return s;
  }

  return {
    init: function (gl) { L = FILM.Land; L.init(gl); },
    render: function (t, local, target) { L.render(t, target, state(t)); },
    post: function (t) {
      var s = state(t), sz = FILM.size();
      var d = s.sunDir, far = [s.cam.pos[0] + d[0] * 1e4, s.cam.pos[1] + d[1] * 1e4, s.cam.pos[2] + d[2] * 1e4];
      var lp = U.project(s.cam, far, sz[0] / sz[1]) || [0.8, 0.5];
      var night = U.sstep(28.8, 29.8, t) * (1 - U.sstep(32.4, 33.4, t));
      var flash = U.sstep(27.4, 27.6, t) * (1 - U.sstep(27.6, 28.2, t));
      return {
        exposure: U.lerp(0.95, 1.25, night), bloom: 0.06 + 0.15 * flash + 0.04 * night, thresh: U.lerp(1.2, 0.9, night),
        star: 0.55 + 0.3 * flash + 0.3 * night, starLen: 0.9,
        rays: 0.45 * (1 - U.sstep(28.4, 29.2, t)), light: [lp[0], lp[1]], raysDensity: 0.85, raysDecay: 0.965,
        sat: U.lerp(1.08, 0.9, night), contrast: 1.06,
        lift: U.mix3([0.004, 0.003, 0.004], [0.0, 0.004, 0.012], night), gain: U.mix3([1.04, 1.0, 0.95], [0.92, 0.98, 1.08], night),
        vignette: 0.6, grain: 0.022, pulseAmt: 0.6
      };
    }
  };
})();
