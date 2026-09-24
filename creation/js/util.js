/* ------------------------------------------------------------------
   Timing and camera helpers shared by the scenes.
   ------------------------------------------------------------------ */
window.FILM = window.FILM || {};
FILM.scenes = FILM.scenes || {};

FILM.U = (function () {
  function clamp(x, a, b) { return x < a ? a : x > b ? b : x; }
  function lerp(a, b, k) { return a + (b - a) * k; }
  function lstep(a, b, x) { return clamp((x - a) / (b - a), 0, 1); }
  function sstep(a, b, x) { var k = lstep(a, b, x); return k * k * (3 - 2 * k); }
  function ease(k) { return k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; }   // cubic in-out
  function easeOut(k) { return 1 - Math.pow(1 - k, 3); }
  function easeIn(k) { return k * k * k; }
  function mix3(a, b, k) { return [lerp(a[0], b[0], k), lerp(a[1], b[1], k), lerp(a[2], b[2], k)]; }

  /* keyframes: [[t, value(s)...], ...] sampled with Catmull-Rom between keys; values may be numbers or arrays */
  function track(keys) {
    return function (t) {
      if (t <= keys[0][0]) return keys[0][1];
      var n = keys.length;
      if (t >= keys[n - 1][0]) return keys[n - 1][1];
      var i = 0;
      while (i < n - 2 && t > keys[i + 1][0]) i++;
      var k0 = keys[Math.max(0, i - 1)], k1 = keys[i], k2 = keys[i + 1], k3 = keys[Math.min(n - 1, i + 2)];
      var u = (t - k1[0]) / (k2[0] - k1[0]);
      function cr(p0, p1, p2, p3) {
        var u2 = u * u, u3 = u2 * u;
        return 0.5 * (2 * p1 + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3);
      }
      if (typeof k1[1] === 'number') return cr(k0[1], k1[1], k2[1], k3[1]);
      var out = [];
      for (var j = 0; j < k1[1].length; j++) out.push(cr(k0[1][j], k1[1][j], k2[1][j], k3[1][j]));
      return out;
    };
  }

  function norm(v) { var l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; }
  function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }

  /* camera looking from pos to target; returns uniforms for FILM.GLSL camRay() */
  function camera(pos, target, fovDeg, roll) {
    var f = norm(sub(target, pos));
    var r = norm(cross(f, [0, 1, 0]));
    var u = cross(r, f);
    if (roll) {
      var c = Math.cos(roll), s = Math.sin(roll);
      var r2 = [r[0] * c + u[0] * s, r[1] * c + u[1] * s, r[2] * c + u[2] * s];
      u = [u[0] * c - r[0] * s, u[1] * c - r[1] * s, u[2] * c - r[2] * s];
      r = r2;
    }
    return {
      pos: pos, fwd: f, right: r, up: u,
      rot: new Float32Array([r[0], r[1], r[2], u[0], u[1], u[2], -f[0], -f[1], -f[2]]),
      fov: Math.tan(fovDeg * Math.PI / 360)
    };
  }

  /* world point -> [u, v] in 0..1 (y up) for a camera and aspect, or null when behind */
  function project(cam, p, aspect) {
    var d = sub(p, cam.pos);
    var x = d[0] * cam.right[0] + d[1] * cam.right[1] + d[2] * cam.right[2];
    var y = d[0] * cam.up[0] + d[1] * cam.up[1] + d[2] * cam.up[2];
    var z = d[0] * cam.fwd[0] + d[1] * cam.fwd[1] + d[2] * cam.fwd[2];
    if (z <= 0) return null;
    return [x / z / cam.fov / aspect * 0.5 + 0.5, y / z / cam.fov * 0.5 + 0.5, z];
  }

  /* column-major view-projection for geometry drawn with the same camera as the shaders */
  function viewProj(cam, aspect, near, far) {
    var r = cam.right, u = cam.up, f = cam.fwd, p = cam.pos;
    var tx = -(r[0] * p[0] + r[1] * p[1] + r[2] * p[2]);
    var ty = -(u[0] * p[0] + u[1] * p[1] + u[2] * p[2]);
    var tz = (f[0] * p[0] + f[1] * p[1] + f[2] * p[2]);
    var view = [r[0], u[0], -f[0], 0, r[1], u[1], -f[1], 0, r[2], u[2], -f[2], 0, tx, ty, tz, 1];
    var sy = 1 / cam.fov, sx = sy / aspect, a = (far + near) / (near - far), b = 2 * far * near / (near - far);
    var proj = [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, a, -1, 0, 0, b, 0];
    var out = new Float32Array(16);
    for (var c = 0; c < 4; c++) for (var rr = 0; rr < 4; rr++) {
      var sum = 0;
      for (var k = 0; k < 4; k++) sum += proj[k * 4 + rr] * view[c * 4 + k];
      out[c * 4 + rr] = sum;
    }
    return out;
  }

  /* seeded random for anything generated in JS, so every render is identical */
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  return { clamp: clamp, lerp: lerp, lstep: lstep, sstep: sstep, ease: ease, easeOut: easeOut, easeIn: easeIn,
    mix3: mix3, track: track, camera: camera, project: project, viewProj: viewProj, norm: norm, cross: cross, sub: sub, rng: rng };
})();
