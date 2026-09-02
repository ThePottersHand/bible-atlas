/* ------------------------------------------------------------------
   Labels & markers: DOM labels projected onto the terrain each frame,
   with rank-by-distance culling and greedy collision avoidance; GPU
   point markers; the selection ring.
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.Labels = (function () {
  var GEO = ATLAS.GEO, T = ATLAS.Terrain;
  var container, camera, renderer, scene;
  var items = [], byId = {};
  var extra = [];            // region / stop / prophecy labels
  var markers = null, markerGeo = null, markerAlpha = null;
  var ring = null, selectedId = null;
  var eraId = null, density = 1.0, camDist = 3000, tier = -1, lastTier = -1;
  var pickCb = null, hoverEl = null, standing = false;
  var proj = new THREE.Vector3();
  var TYPE_COLOR = { city: '#f1d58a', town: '#e6cf98', mountain: '#d9c9a8', site: '#f0b26b', sea: '#8fc6d8', river: '#8fc6d8', region: '#cfc2a8', wilderness: '#d9c3a0', desert: '#d9c3a0', island: '#e6cf98' };

  var MK_VERT = [
    '#include <common>',
    '#include <logdepthbuf_pars_vertex>',
    'attribute float aSize; attribute float aAlpha; attribute vec3 aColor; uniform float uPx; uniform float uExag;',
    'varying float vAlpha; varying vec3 vColor;',
    'void main(){ vAlpha = aAlpha; vColor = aColor;',
    '  vec3 p = position; p.y = p.y * uExag;',
    '  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;',
    '  gl_PointSize = aSize * uPx;',
    '  #include <logdepthbuf_vertex>',
    '}'].join('\n');
  var MK_FRAG = [
    '#include <logdepthbuf_pars_fragment>',
    'varying float vAlpha; varying vec3 vColor;',
    'void main(){',
    '#include <logdepthbuf_fragment>',
    '  vec2 c = gl_PointCoord - 0.5; float d = length(c)*2.0; if (d > 1.0 || vAlpha < 0.02) discard;',
    '  float core = 1.0 - smoothstep(0.45, 0.62, d); float rim = smoothstep(0.62, 0.72, d) * (1.0 - smoothstep(0.85, 1.0, d));',
    '  vec3 col = mix(vec3(0.16,0.10,0.05), vColor, core); col = mix(col, vec3(0.98,0.93,0.80), rim*0.9);',
    '  float a = (1.0 - smoothstep(0.86, 1.0, d)) * vAlpha;',
    '  gl_FragColor = vec4(col, a); }'].join('\n');

  function init(el, cam, rend, sc) {
    container = el; camera = cam; renderer = rend; scene = sc;
    ring = new THREE.Mesh(new THREE.RingGeometry(0.78, 1.0, 64),
      new THREE.MeshBasicMaterial({ color: 0xffd27a, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthTest: false, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.renderOrder = 20; ring.visible = false; ring.frustumCulled = false;
    scene.add(ring);
    container.addEventListener('click', onClick);
    container.addEventListener('mousemove', onMove);
  }

  function makeLabel(cls, html) {
    var el = document.createElement('div');
    el.className = 'lbl ' + cls; el.innerHTML = html; el.style.display = 'none';
    container.appendChild(el);
    return el;
  }

  function setPlaces(places) {
    items.forEach(function (it) { container.removeChild(it.el); });
    items = []; byId = {};
    var n = places.length;
    var pos = new Float32Array(n * 3), size = new Float32Array(n), alpha = new Float32Array(n), col = new Float32Array(n * 3);
    places.forEach(function (p, i) {
      var glyph = p.type === 'mountain' ? '<span class="gl">▲</span>' : (p.type === 'site' ? '<span class="gl">✦</span>' : '');
      var el = makeLabel('t-' + p.type + ' r-' + p.rank + (p.confidence === 'disputed' || p.confidence === 'unknown' ? ' disputed' : ''),
        glyph + '<span class="nm">' + p.name + '</span>' + (p.confidence === 'disputed' || p.confidence === 'unknown' ? '<span class="q">?</span>' : ''));
      el.dataset.id = p.id;
      var s = GEO.toScene(p.lat, p.lon);
      var h = T.heightAt(p.lat, p.lon); if (h === null) h = 0;
      var it = { id: p.id, place: p, el: el, x: s.x, z: s.z, h: h, sx: 0, sy: 0, w: 0, hh: 0, shown: false, idx: i, alpha: 0 };
      items.push(it); byId[p.id] = it;
      pos[i * 3] = s.x; pos[i * 3 + 1] = h * 0.001; pos[i * 3 + 2] = s.z;
      var isPoint = p.type === 'city' || p.type === 'town' || p.type === 'site' || p.type === 'mountain' || p.type === 'island';
      size[i] = isPoint ? (p.rank === 1 ? 13 : p.rank === 2 ? 11 : p.rank === 3 ? 9 : 7.5) : 0;
      alpha[i] = 1;
      var c = new THREE.Color(TYPE_COLOR[p.type] || '#f1d58a'); col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    });
    if (markers) scene.remove(markers);
    markerGeo = new THREE.BufferGeometry();
    markerGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    markerGeo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    markerAlpha = new THREE.BufferAttribute(alpha, 1); markerGeo.setAttribute('aAlpha', markerAlpha);
    markerGeo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    var mat = new THREE.ShaderMaterial({ uniforms: { uPx: { value: window.devicePixelRatio || 1 }, uExag: T.U.uExag }, vertexShader: MK_VERT, fragmentShader: MK_FRAG,
      transparent: true, depthWrite: false });
    markers = new THREE.Points(markerGeo, mat); markers.renderOrder = 15; markers.frustumCulled = false;
    scene.add(markers);
    lastTier = -1;
  }

  function eraOk(p) { return !eraId || !p.eras || p.eras.length === 0 || p.eras.indexOf(eraId) >= 0; }
  function rankLimit() {
    var d = camDist / Math.max(0.4, density);
    return d > 2600 ? 1 : d > 1300 ? 2 : d > 420 ? 3 : 4;
  }

  function refreshMarkers(rl) {
    if (!markerGeo) return;
    items.forEach(function (it) {
      var p = it.place, ok = eraOk(p);
      var a = 0;
      if (p.rank <= rl) a = ok ? 1 : (p.rank <= 2 ? 0.3 : 0);
      else if (p.rank <= rl + 1 && ok) a = 0.35;
      markerAlpha.array[it.idx] = a;
    });
    markerAlpha.needsUpdate = true;
  }

  function measure(it) {
    if (it.w) return;
    it.el.style.display = ''; it.el.style.visibility = 'hidden';
    it.w = it.el.offsetWidth || 60; it.hh = it.el.offsetHeight || 16;
    it.el.style.visibility = ''; if (!it.shown) it.el.style.display = 'none';
  }

  var placed = [];
  function collides(x, y, w, h) {
    for (var i = 0; i < placed.length; i++) {
      var b = placed[i];
      if (x < b.x + b.w && x + w > b.x && y < b.y + b.h && y + h > b.y) return true;
    }
    return false;
  }

  function update(cd) {
    camDist = cd;
    var W = renderer.domElement.clientWidth, H = renderer.domElement.clientHeight;
    var rl = rankLimit();
    if (rl !== lastTier) { refreshMarkers(rl); lastTier = rl; }
    var ex = T.U.uExag.value * 0.001;
    var cands = [];
    var lowCam = camera.position.y - T.U.uExag.value * 0.002 < (T.heightAtScene(camera.position.x, camera.position.z) || 0) * ex + 0.5;
    var i, it, p;
    for (i = 0; i < items.length; i++) {
      it = items[i]; p = it.place;
      var ok = eraOk(p);
      var want = (p.rank <= rl && (ok || p.rank <= 2)) || it.id === selectedId;
      if (want && standing) {
        var ddx = it.x - camera.position.x, ddz = it.z - camera.position.z, dd = Math.sqrt(ddx * ddx + ddz * ddz);
        var lim = p.rank <= 1 ? 140 : p.rank === 2 ? 70 : 35;
        if (p.type === 'region' || p.type === 'wilderness' || p.type === 'desert') lim = 0;
        if (p.type === 'sea') lim = 60;
        if (dd > lim) want = false;
      }
      if (!want) { if (it.shown) { it.el.style.display = 'none'; it.shown = false; } continue; }
      proj.set(it.x, it.h * ex, it.z).project(camera);
      if (proj.z > 1 || proj.x < -1.1 || proj.x > 1.1 || proj.y < -1.1 || proj.y > 1.1) { if (it.shown) { it.el.style.display = 'none'; it.shown = false; } continue; }
      it.sx = (proj.x + 1) / 2 * W; it.sy = (1 - proj.y) / 2 * H;
      it.dim = !ok;
      it.pri = (it.id === selectedId ? -10 : p.rank) + proj.z * 0.001;
      cands.push(it);
    }
    for (i = 0; i < extra.length; i++) {
      it = extra[i];
      proj.set(it.x, it.h * ex, it.z).project(camera);
      if (proj.z > 1 || proj.x < -1.1 || proj.x > 1.1 || proj.y < -1.1 || proj.y > 1.1) { if (it.shown) { it.el.style.display = 'none'; it.shown = false; } continue; }
      it.sx = (proj.x + 1) / 2 * W; it.sy = (1 - proj.y) / 2 * H;
      it.pri = it.pri0;
      if (it.kind === 'region' && (camDist < it.minDist || standing)) { if (it.shown) { it.el.style.display = 'none'; it.shown = false; } continue; }
      cands.push(it);
    }
    cands.sort(function (a, b) { return a.pri - b.pri; });
    placed.length = 0;
    for (i = 0; i < cands.length; i++) {
      it = cands[i]; measure(it);
      var x = it.kind === 'region' ? it.sx - it.w / 2 : it.sx + 8, y = it.kind === 'region' ? it.sy - it.hh / 2 : it.sy - it.hh / 2;
      var forced = it.id === selectedId || (it.kind === 'stop' && it.data.current);
      if (!forced && collides(x - 3, y - 2, it.w + 6, it.hh + 4)) { if (it.shown) { it.el.style.display = 'none'; it.shown = false; } continue; }
      placed.push({ x: x - 3, y: y - 2, w: it.w + 6, h: it.hh + 4 });
      it.el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
      if (!it.shown) { it.el.style.display = ''; it.shown = true; }
      var cls = it.dim ? '1' : '0';
      if (it.dimCls !== cls) { it.el.classList.toggle('dim', !!it.dim); it.dimCls = cls; }
      var sel = it.id === selectedId;
      if (it.selCls !== sel) { it.el.classList.toggle('sel', sel); it.selCls = sel; }
    }
    if (ring.visible) {
      var s = Math.max(0.02, camDist * 0.012);
      ring.scale.set(s, s, s);
      var rit = byId[selectedId];
      if (rit) ring.position.set(rit.x, rit.h * ex + s * 0.02, rit.z);
      ring.material.opacity = 0.55 + 0.3 * Math.sin(performance.now() * 0.003);
    }
    if (markers) markers.material.uniforms.uPx.value = renderer.getPixelRatio();
  }

  function setEra(id) { eraId = id; lastTier = -1; }
  function setStanding(b) { standing = b; }
  function setDensity(d) { density = d; lastTier = -1; }
  function select(id) {
    selectedId = id;
    var it = id ? byId[id] : null;
    ring.visible = !!it;
    if (it) T.setFocus(it.x, it.z, Math.max(1.5, camDist * 0.05), 1.0); else T.setFocus(0, 0, 1, 0);
  }
  function setExtra(kind, list) {
    /* list: [{id, name, lat, lon, color, html, pri, minDist}] */
    for (var i = extra.length - 1; i >= 0; i--) if (extra[i].kind === kind) { container.removeChild(extra[i].el); extra.splice(i, 1); }
    list.forEach(function (r) {
      var el = makeLabel('t-' + kind, r.html || ('<span class="nm">' + r.name + '</span>'));
      if (r.color) el.style.setProperty('--c', r.color);
      el.dataset.kind = kind; el.dataset.id = r.id;
      var s = GEO.toScene(r.lat, r.lon), h = T.heightAt(r.lat, r.lon) || 0;
      extra.push({ kind: kind, id: r.id, data: r, el: el, x: s.x, z: s.z, h: h, w: 0, hh: 0, shown: false, pri0: r.pri !== undefined ? r.pri : 2.5, minDist: r.minDist || 0 });
    });
  }
  function clearExtra(kind) { setExtra(kind, []); }
  function setCurrentStop(i) {
    extra.forEach(function (it) {
      if (it.kind !== 'stop') return;
      var cur = it.data.index === i;
      it.data.current = cur;
      it.el.classList.toggle('cur', cur);
      it.el.classList.toggle('done', it.data.index < i);
      it.el.innerHTML = '<span class="num">' + (it.data.index + 1) + '</span><span class="nm">' + (cur ? it.data.name : it.data.short) + '</span>';
      it.w = 0;
    });
  }

  function nearest(mx, my, maxPx) {
    var best = null, bd = maxPx * maxPx, i, it, dx, dy, d;
    for (i = 0; i < items.length; i++) { it = items[i]; if (!it.shown) continue; dx = it.sx - mx; dy = it.sy - my; d = dx * dx + dy * dy; if (d < bd) { bd = d; best = { type: 'place', id: it.id, place: it.place }; } }
    for (i = 0; i < extra.length; i++) { it = extra[i]; if (!it.shown || it.kind === 'region') continue; dx = it.sx - mx; dy = it.sy - my; d = dx * dx + dy * dy; if (d < bd) { bd = d; best = { type: it.kind, id: it.id, data: it.data }; } }
    return best;
  }
  function onClick(e) {
    if (!pickCb) return;
    var t = e.target.closest ? e.target.closest('.lbl') : null;
    if (t) {
      if (t.dataset.kind) { var ex = extra.filter(function (x) { return x.id === t.dataset.id; })[0]; if (ex) pickCb({ type: ex.kind, id: ex.id, data: ex.data }, e); }
      else pickCb({ type: 'place', id: t.dataset.id, place: byId[t.dataset.id].place }, e);
      return;
    }
    var r = renderer.domElement.getBoundingClientRect();
    var hit = nearest(e.clientX - r.left, e.clientY - r.top, 16);
    if (hit) pickCb(hit, e); else pickCb(null, e);
  }
  function onMove(e) {
    var r = renderer.domElement.getBoundingClientRect();
    var hit = nearest(e.clientX - r.left, e.clientY - r.top, 14);
    container.style.cursor = hit ? 'pointer' : '';
  }
  function screenPos(id) { var it = byId[id]; return it && it.shown ? { x: it.sx, y: it.sy } : (it ? { x: it.sx, y: it.sy, hidden: true } : null); }

  return { init: init, setPlaces: setPlaces, update: update, setEra: setEra, setDensity: setDensity, select: select, setCurrentStop: setCurrentStop, setStanding: setStanding,
    setExtra: setExtra, clearExtra: clearExtra, onPick: function (cb) { pickCb = cb; }, screenPos: screenPos,
    item: function (id) { return byId[id]; } };
})();
