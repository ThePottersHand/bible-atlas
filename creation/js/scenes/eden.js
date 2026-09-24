/* ------------------------------------------------------------------
   The end of the sixth day and the seventh. The hill of the third day,
   now in fruit, with a man and a woman standing near the tree; the river
   in the valley; everything very good in the last of the light. Then the
   sun goes down, the first stars come out, and all is still: rest.
   ------------------------------------------------------------------ */
FILM.scenes.eden = (function () {
  var U = FILM.U, L;

  var camP = U.track([[50.4, [-3.2, 2.2, 4.0]], [55.0, [-3.8, 2.3, 7.0]], [60.3, [-4.6, 2.4, 11.0]]]);
  var camT = U.track([[50.4, [3.5, 6.6, -60]], [55.0, [3.2, 7.6, -60]], [60.3, [3.0, 9.0, -60]]]);
  var sunEl = U.track([[50.4, 6.5], [54.8, 3.5], [57.5, -2.5], [60.3, -9.0]]);

  function state(t) {
    var s = {};
    s.cam = U.camera(camP(t), camT(t), 31, 0);
    s.sunDir = FILM.Land.dir(38, sunEl(t));
    s.sunDisk = 1; s.sunI = 1; s.glory = 0;
    s.stars = U.sstep(57.0, 59.5, t) * 0.8;
    s.skyRot = L.rotAxis(U.norm([0, 0.53, 0.85]), (t - 50) * 0.02);
    s.mwN = [0.35, 0.55, 0.76]; s.mwC = U.norm([0.9, 0.1, -0.4]);
    s.moon = 0; s.venus = U.sstep(57.5, 58.5, t) * 0.7; s.venusDir = FILM.Land.dir(46, 9);
    s.green = 1; s.lush = 1; s.wet = 0; s.figures = 1;
    s.grass = 10; s.grow = 10; s.fruit = 1; s.wind = 0.18 * (1 - U.sstep(55, 58, t));
    s.clouds = 0.45;
    return s;
  }

  return {
    init: function (gl) { L = FILM.Land; L.init(gl); },
    render: function (t, local, target) { L.render(t, target, state(t)); },
    post: function (t) {
      var s = state(t), sz = FILM.size();
      var d = s.sunDir, far = [s.cam.pos[0] + d[0] * 1e4, s.cam.pos[1] + d[1] * 1e4, s.cam.pos[2] + d[2] * 1e4];
      var lp = U.project(s.cam, far, sz[0] / sz[1]) || [0.9, 0.5];
      var night = U.sstep(56.5, 59.0, t);
      return {
        exposure: U.lerp(1.0, 1.2, night), bloom: 0.08, thresh: 1.1, star: 0.45, starLen: 1.0,
        rays: 0.45 * (1 - night), light: [lp[0], lp[1]], raysDensity: 0.85, raysDecay: 0.965,
        sat: U.lerp(1.1, 0.95, night), contrast: 1.06,
        lift: U.mix3([0.006, 0.003, 0.0], [0.0, 0.003, 0.01], night), gain: U.mix3([1.06, 0.99, 0.92], [0.94, 0.98, 1.06], night),
        vignette: 0.6, grain: 0.022,
        fade: U.sstep(58.6, 60.1, t), fadeColor: [0, 0, 0], pulseAmt: 0.5
      };
    }
  };
})();
