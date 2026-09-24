/* ------------------------------------------------------------------
   In the Beginning: the film. Owns the timeline, draws each frame from
   film time alone (scenes, transitions, post, Scripture), and keeps the
   picture locked to the score. ?capture=1 exposes FILM_CAPTURE for the
   frame-by-frame export in tools/creation/render.js.
   ------------------------------------------------------------------ */
window.FILM = window.FILM || {};
FILM.scenes = FILM.scenes || {};

(function () {
  var G = FILM.GL, U = FILM.U, Post = FILM.Post, CUES = window.FILM_CUES;
  var params = new URLSearchParams(location.search);
  var CAPTURE = params.has('capture');
  var canvas = document.getElementById('film');
  var frameEl = document.getElementById('frame');
  var gl, noise2, noise3, frameNo = 0, scale = 1, W = 0, H = 0;

  /* ---------- noise textures (seeded, so exports are repeatable) ---------- */
  function makeNoise() {
    var r = U.rng(7), n = 256, d2 = new Uint8Array(n * n * 4);
    for (var i = 0; i < d2.length; i++) d2[i] = Math.floor(r() * 256);
    noise2 = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, noise2);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, n, n, 0, gl.RGBA, gl.UNSIGNED_BYTE, d2);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    var m = 64, d3 = new Uint8Array(m * m * m);
    for (var j = 0; j < d3.length; j++) d3[j] = Math.floor(r() * 256);
    noise3 = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_3D, noise3);
    gl.texImage3D(gl.TEXTURE_3D, 0, gl.R8, m, m, m, 0, gl.RED, gl.UNSIGNED_BYTE, d3);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_R, gl.REPEAT);
  }

  /* common uniforms every scene program gets */
  FILM.bindCommon = function (prog, t, local, cam) {
    prog.set('uRes', [W, H]).set('uTime', t).set('uLocal', local);
    var loc = gl.getUniformLocation(prog.p, 'uNoise');
    if (loc) { gl.activeTexture(gl.TEXTURE14); gl.bindTexture(gl.TEXTURE_2D, noise2); gl.uniform1i(loc, 14); }
    loc = gl.getUniformLocation(prog.p, 'uNoise3');
    if (loc) { gl.activeTexture(gl.TEXTURE15); gl.bindTexture(gl.TEXTURE_3D, noise3); gl.uniform1i(loc, 15); }
    if (cam) prog.set('uCamPos', cam.pos).set('uCamRot', cam.rot).set('uFov', cam.fov);
    return prog;
  };
  FILM.size = function () { return [W, H]; };

  /* ---------- sizing ---------- */
  function layout() {
    var fw = CUES.frame.width, fh = CUES.frame.height, aspect = fw / fh;
    var vw = window.innerWidth, vh = window.innerHeight;
    var cw, ch;
    if (CAPTURE) { cw = +(params.get('w') || fw); ch = cw / aspect; }
    else if (vw / vh > aspect) { ch = vh; cw = ch * aspect; }
    else { cw = vw; ch = cw / aspect; }
    frameEl.style.width = cw + 'px';
    frameEl.style.height = ch + 'px';
    frameEl.style.setProperty('--u', (ch / 800) + 'px');
    var dpr = CAPTURE ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    var bw = Math.round(cw * dpr), bh = Math.round(ch * dpr);
    // cap the internal buffer at the export size; the live view scales further when frames run slow
    var cap = CAPTURE ? 1 : Math.min(1, fw / bw);
    canvas.width = Math.round(bw * cap);
    canvas.height = Math.round(bh * cap);
    setScale(scale);
  }
  function setScale(s) {
    scale = s;
    var w = Math.round(canvas.width * s), h = Math.round(canvas.height * s);
    if (w !== W || h !== H) { W = w; H = h; Post.resize(W, H); }
  }

  /* ---------- post settings: blend numbers and arrays between two scenes ---------- */
  function blendPost(a, b, k) {
    var o = {};
    for (var key in a) {
      var va = a[key], vb = b[key];
      if (vb === undefined) { o[key] = va; continue; }
      if (typeof va === 'number') o[key] = U.lerp(va, vb, k);
      else if (Array.isArray(va)) o[key] = va.map(function (x, i) { return U.lerp(x, vb[i], k); });
      else o[key] = k < 0.5 ? va : vb;
    }
    for (var key2 in b) if (o[key2] === undefined) o[key2] = b[key2];
    return o;
  }

  function active(t) {
    var have = CUES.scenes.filter(function (s) { return FILM.scenes[s.id]; });
    var list = have.filter(function (s) { return t >= s.t0 && t < s.t1; });
    if (!list.length) {
      // before the first or after the last scene we have: hold the nearest one
      var best = have[0], gap = Infinity;
      have.forEach(function (s) { var g = t < s.t0 ? s.t0 - t : t - s.t1; if (g < gap) { gap = g; best = s; } });
      list = [best];
    }
    return list.slice(-2);
  }

  /* ---------- one frame ---------- */
  function renderAt(t) {
    var T = Post.T, list = active(t), post;
    if (list.length === 1) {
      var s = FILM.scenes[list[0].id];
      s.render(t, t - list[0].t0, T.main);
      post = s.post(t, t - list[0].t0);
    } else {
      var A = list[0], B = list[1], sa = FILM.scenes[A.id], sb = FILM.scenes[B.id];
      var k = U.clamp((t - B.t0) / Math.max(1e-3, A.t1 - B.t0), 0, 1);
      var mode = (B.in && B.in.type) || 'cross';
      if (mode === 'cut') k = 1;
      if (k < 1) sa.render(t, t - A.t0, T.aux);
      sb.render(t, t - B.t0, T.aux2);
      if (k < 1) Post.mixInto(T.main, T.aux, T.aux2, k, mode);
      else { Post.mixInto(T.main, T.aux2, T.aux2, 0, 'cross'); }
      post = blendPost(sa.post(t, t - A.t0), sb.post(t, t - B.t0), mode === 'cross' ? U.sstep(0, 1, k) : (k < 0.5 ? 0 : 1));
    }
    // the Word: each "And God said" sends a ring outward
    CUES.words.forEach(function (w) {
      var age = t - w;
      if (age >= 0 && age < 3.5) post.pulse = [post.pulseX || 0.5, post.pulseY || 0.52, age, post.pulseAmt != null ? post.pulseAmt : 1.0];
    });
    // head and tail of the whole film
    var edge = Math.max(1 - U.sstep(0, 0.6, t), U.sstep(CUES.duration - 0.8, CUES.duration, t));
    post.fade = Math.max(post.fade || 0, edge);
    if (edge > (post.fadeWhite || 0)) post.fadeColor = [0, 0, 0];
    // exported frames carry lighter grain: encoders spend their bits on noise
    if (CAPTURE) post.grain = (post.grain != null ? post.grain : 0.03) * 0.5;
    post.time = t;
    post.frame = frameNo++;
    Post.run(T.main, post, canvas.width, canvas.height);
    FILM.Text.update(t);
  }
  FILM.renderAt = renderAt;

  /* ---------- live playback ---------- */
  var audio = document.getElementById('score');
  var playing = false, tNow = 0, anchorT = 0, anchorPerf = 0, raf = 0, frameTimes = [];

  function clock() {
    if (!playing) return tNow;
    var now = performance.now();
    var t = anchorT + (now - anchorPerf) / 1000;
    if (audio && !audio.paused && audio.readyState >= 2) {
      var at = audio.currentTime;
      if (Math.abs(at - t) > 0.06) { anchorT = at; anchorPerf = now; t = at; }
    }
    return t;
  }
  function loop() {
    var t0 = performance.now();
    tNow = clock();
    if (tNow >= CUES.duration) { tNow = CUES.duration; renderAt(tNow - 1e-3); finish(); return; }
    renderAt(tNow);
    updateBar();
    // adaptive resolution: keep the frame under ~20 ms
    frameTimes.push(performance.now() - t0);
    if (frameTimes.length > 20) {
      frameTimes.sort(function (a, b) { return a - b; });
      var med = frameTimes[10];
      frameTimes = [];
      if (med > 24 && scale > 0.5) setScale(Math.max(0.5, scale * 0.85));
      else if (med < 12 && scale < 1) setScale(Math.min(1, scale * 1.1));
    }
    raf = requestAnimationFrame(loop);
  }
  function play(from) {
    if (from != null) tNow = from;
    playing = true;
    anchorT = tNow; anchorPerf = performance.now();
    document.body.classList.add('playing');
    document.body.classList.remove('paused', 'ended');
    if (audio) {
      try { audio.currentTime = tNow; } catch (e) { }
      var p = audio.play();
      if (p && p.catch) p.catch(function () { });
    }
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
  }
  function pause() {
    tNow = clock();
    playing = false;
    if (audio) audio.pause();
    cancelAnimationFrame(raf);
    document.body.classList.remove('playing');
    document.body.classList.add('paused');
    renderAt(tNow);
  }
  function finish() {
    playing = false;
    if (audio) audio.pause();
    document.body.classList.remove('playing', 'paused');
    document.body.classList.add('ended');
  }
  function updateBar() {
    var bar = document.getElementById('bar');
    if (bar) bar.style.transform = 'scaleX(' + (tNow / CUES.duration).toFixed(4) + ')';
  }

  function bindUI() {
    var begin = document.getElementById('begin');
    begin.addEventListener('click', function () { document.body.classList.add('started'); play(0); });
    document.getElementById('again').addEventListener('click', function () { play(0); });
    document.getElementById('pp').addEventListener('click', function () { if (playing) pause(); else play(); });
    document.getElementById('restart').addEventListener('click', function () { play(0); });
    document.getElementById('mute').addEventListener('click', function () {
      audio.muted = !audio.muted;
      this.classList.toggle('off', audio.muted);
      this.setAttribute('aria-pressed', audio.muted ? 'true' : 'false');
    });
    document.getElementById('full').addEventListener('click', function () {
      var el = document.documentElement;
      if (document.fullscreenElement) document.exitFullscreen();
      else if (el.requestFullscreen) el.requestFullscreen();
    });
    document.getElementById('seek').addEventListener('click', function (e) {
      var r = this.getBoundingClientRect();
      var t = U.clamp((e.clientX - r.left) / r.width, 0, 1) * CUES.duration;
      if (playing) play(t); else { tNow = t; renderAt(t); updateBar(); }
    });
    window.addEventListener('keydown', function (e) {
      if (!document.body.classList.contains('started')) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); begin.click(); }
        return;
      }
      if (e.key === ' ' || e.key === 'k') { e.preventDefault(); if (playing) pause(); else play(); }
      else if (e.key === 'f') document.getElementById('full').click();
      else if (e.key === 'm') document.getElementById('mute').click();
      else if (e.key === 'r' || e.key === 'Home') play(0);
    });
    var idle = 0;
    window.addEventListener('mousemove', function () {
      document.body.classList.add('awake');
      clearTimeout(idle);
      idle = setTimeout(function () { document.body.classList.remove('awake'); }, 2200);
    });
    window.addEventListener('resize', function () { layout(); if (!playing) renderAt(tNow); });
  }

  /* ---------- boot ---------- */
  function boot() {
    gl = G.init(canvas, { preserve: CAPTURE });
    if (!gl) { document.body.classList.add('nogl'); return Promise.reject(new Error('WebGL2 unavailable')); }
    if (CAPTURE) document.body.classList.add('capture', 'started');
    makeNoise();
    Post.init();
    layout();
    FILM.Text.init(document.getElementById('words'), CUES);
    var ids = Object.keys(FILM.scenes);
    ids.forEach(function (id) { FILM.scenes[id].init(gl); });
    return document.fonts.ready.then(function () {
      // compile everything up front by drawing a frame from each scene
      CUES.scenes.forEach(function (s) { if (FILM.scenes[s.id]) renderAt(s.t0 + 0.01); });
      tNow = CAPTURE ? 0 : 7.2;          // behind the title: the Spirit over the dark waters
      renderAt(tNow);
      gl.finish();
    });
  }

  var ready = boot();
  if (CAPTURE) {
    window.FILM_CAPTURE = {
      ready: ready.then(function () { return { duration: CUES.duration, width: CUES.frame.width, height: CUES.frame.height }; }),
      frame: function (t) {
        renderAt(t);
        var px = new Uint8Array(4);
        gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);   // wait for the GPU
        return true;
      }
    };
  } else {
    ready.then(function () {
      document.body.classList.add('ready');
      bindUI();
    }).catch(function (e) {
      console.error(e);
      document.body.classList.add('nogl');
    });
  }
})();
