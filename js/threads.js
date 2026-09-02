/* ------------------------------------------------------------------
   Threads: journeys laid on the land as glowing ribbons that unspool;
   rivers as thin blue ribbons; the measuring cord.
   Ribbons are draped on the CPU heightfield and widened in the vertex
   shader so they keep a constant on-screen weight at any distance.
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.Threads = (function () {
  var GEO = ATLAS.GEO, T = ATLAS.Terrain;
  var scene, journey = null, rivers = [], measureMesh = null, riversVisible = true;

  var VERT = [
    '#include <common>',
    '#include <logdepthbuf_pars_vertex>',
    'attribute float aSide; attribute vec3 aPerp; attribute float aAlong; attribute float aH;',
    'uniform float uWidth; uniform float uLift; uniform float uExag;',
    'varying float vSide; varying float vAlong;',
    'void main(){ vSide = aSide; vAlong = aAlong;',
    '  vec3 p = position + aPerp * aSide * uWidth; p.y = aH*0.001*uExag + uLift;',
    '  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);',
    '  #include <logdepthbuf_vertex>',
    '}'].join('\n');
  var FRAG = [
    '#include <logdepthbuf_pars_fragment>',
    'uniform vec3 uColor; uniform float uProgress; uniform float uOpacity; uniform float uTime; uniform float uDash; uniform float uLen;',
    'varying float vSide; varying float vAlong;',
    'void main(){',
    '#include <logdepthbuf_fragment>',
    '  if (vAlong > uProgress) discard;',
    '  float e = 1.0 - abs(vSide);',
    '  float a = smoothstep(0.0, 0.45, e);',
    '  float head = exp(-max(0.0, uProgress - vAlong) * 260.0);',
    '  float sheen = 0.5 + 0.5*sin(vAlong*uLen*0.35 - uTime*2.5);',
    '  vec3 col = uColor * (0.85 + 0.25*e) + vec3(0.25,0.18,0.08)*sheen*e*0.35;',
    '  col = mix(col, vec3(1.0,0.97,0.9), head*0.85);',
    '  if (uDash > 0.5) { float d = fract(vAlong*uLen*0.5); if (d > 0.55) discard; }',
    '  gl_FragColor = vec4(col, a * uOpacity * (0.9 + head*0.4)); }'].join('\n');

  function init(sc) { scene = sc; }

  /* Chaikin smoothing on lat/lon control points (keeps close to the polyline) */
  function chaikin(pts, iters) {
    for (var k = 0; k < iters; k++) {
      var out = [pts[0]];
      for (var i = 0; i < pts.length - 1; i++) {
        var a = pts[i], b = pts[i + 1];
        out.push({ lat: a.lat * 0.75 + b.lat * 0.25, lon: a.lon * 0.75 + b.lon * 0.25, key: a.key && i === 0 ? a.key : null });
        out.push({ lat: a.lat * 0.25 + b.lat * 0.75, lon: a.lon * 0.25 + b.lon * 0.75 });
      }
      out.push(pts[pts.length - 1]);
      pts = out;
    }
    return pts;
  }

  /* densify: returns samples [{lat, lon, x, z, h, km}] and total km */
  function buildPath(ctrl, smooth) {
    var pts = smooth ? chaikin(ctrl, 2) : ctrl;
    var total = 0, i;
    for (i = 0; i < pts.length - 1; i++) total += GEO.haversine(pts[i].lat, pts[i].lon, pts[i + 1].lat, pts[i + 1].lon);
    var step = Math.min(3, Math.max(0.02, total / 2200));
    var out = [], km = 0;
    for (i = 0; i < pts.length - 1; i++) {
      var a = pts[i], b = pts[i + 1];
      var d = GEO.haversine(a.lat, a.lon, b.lat, b.lon);
      var n = Math.max(1, Math.ceil(d / step));
      for (var j = 0; j < n; j++) {
        var f = j / n, lat = a.lat + (b.lat - a.lat) * f, lon = a.lon + (b.lon - a.lon) * f;
        var s = GEO.toScene(lat, lon), h = T.heightAt(lat, lon); if (h === null) h = 0;
        out.push({ lat: lat, lon: lon, x: s.x, z: s.z, h: h, km: km + d * f });
      }
      km += d;
    }
    var last = pts[pts.length - 1], sl = GEO.toScene(last.lat, last.lon), hl = T.heightAt(last.lat, last.lon) || 0;
    out.push({ lat: last.lat, lon: last.lon, x: sl.x, z: sl.z, h: hl, km: km });
    return { pts: out, total: km };
  }

  function makeRibbon(path, color, opts) {
    opts = opts || {};
    var P = path.pts, n = P.length, total = path.total || 1;
    var pos = new Float32Array(n * 6), side = new Float32Array(n * 2), perp = new Float32Array(n * 6), along = new Float32Array(n * 2), hh = new Float32Array(n * 2);
    var px, pz;
    for (var i = 0; i < n; i++) {
      var a = P[Math.max(0, i - 1)], b = P[Math.min(n - 1, i + 1)];
      var dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1;
      px = -dz / l; pz = dx / l;
      var f = P[i].km / total;
      for (var s = 0; s < 2; s++) {
        var k = i * 2 + s;
        pos[k * 3] = P[i].x; pos[k * 3 + 1] = 0; pos[k * 3 + 2] = P[i].z;
        perp[k * 3] = px; perp[k * 3 + 1] = 0; perp[k * 3 + 2] = pz;
        side[k] = s === 0 ? -1 : 1; along[k] = f; hh[k] = P[i].h;
      }
    }
    var idx = new Uint32Array((n - 1) * 6), q = 0;
    for (var j = 0; j < n - 1; j++) { var a0 = j * 2, b0 = a0 + 1, c0 = a0 + 2, d0 = a0 + 3; idx[q++] = a0; idx[q++] = c0; idx[q++] = b0; idx[q++] = b0; idx[q++] = c0; idx[q++] = d0; }
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSide', new THREE.BufferAttribute(side, 1));
    g.setAttribute('aPerp', new THREE.BufferAttribute(perp, 3));
    g.setAttribute('aAlong', new THREE.BufferAttribute(along, 1));
    g.setAttribute('aH', new THREE.BufferAttribute(hh, 1));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    var mat = new THREE.ShaderMaterial({
      uniforms: { uWidth: { value: 1 }, uLift: { value: 0.1 }, uExag: T.U.uExag, uColor: { value: new THREE.Color(color) }, uProgress: { value: opts.progress !== undefined ? opts.progress : 1 },
        uOpacity: { value: opts.opacity !== undefined ? opts.opacity : 1 }, uTime: T.U.uTime, uDash: { value: opts.dash ? 1 : 0 }, uLen: { value: total } },
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(g, mat); mesh.frustumCulled = false; mesh.renderOrder = opts.order || 12;
    return mesh;
  }

  /* position along a path at fraction f of total km */
  function pointAt(path, f) {
    var P = path.pts, km = f * path.total, lo = 0, hi = P.length - 1;
    while (hi - lo > 1) { var mid = (lo + hi) >> 1; if (P[mid].km <= km) lo = mid; else hi = mid; }
    var a = P[lo], b = P[hi], t = (b.km - a.km) > 0 ? (km - a.km) / (b.km - a.km) : 0;
    var ex = T.U.uExag.value * 0.001;
    return { pos: new THREE.Vector3(a.x + (b.x - a.x) * t, (a.h + (b.h - a.h) * t) * ex, a.z + (b.z - a.z) * t),
      lat: a.lat + (b.lat - a.lat) * t, lon: a.lon + (b.lon - a.lon) * t, heading: GEO.bearing(a.lat, a.lon, b.lat, b.lon), h: a.h + (b.h - a.h) * t };
  }

  /* ---- journeys ---- */
  function showJourney(j, resolve) {
    clearJourney();
    var ctrl = [], stopIdx = [];
    j.stops.forEach(function (st, i) {
      var p = resolve(st);
      if (st.via) st.via.forEach(function (v) { ctrl.push({ lat: v[0], lon: v[1] }); });
      ctrl.push({ lat: p.lat, lon: p.lon, stop: i });
      stopIdx.push(ctrl.length - 1);
    });
    /* km at each stop along the smoothed path: compute along unsmoothed then map by nearest */
    var path = buildPath(ctrl, true);
    var stops = [], from = 0;
    stopIdx.forEach(function (ci, i) {
      var c = ctrl[ci], s = GEO.toScene(c.lat, c.lon), best = from, bd = 1e18;
      /* search forward from the previous stop; stop once we are clearly moving away again */
      for (var k = from; k < path.pts.length; k++) {
        var dx = path.pts[k].x - s.x, dz = path.pts[k].z - s.z, d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = k; }
        else if (bd < 4 && d > bd * 25 && k > best + 40) break;
      }
      from = best;
      stops.push({ stop: j.stops[i], index: i, along: path.pts[best].km / path.total, lat: c.lat, lon: c.lon, km: path.pts[best].km });
    });
    var mesh = makeRibbon(path, j.color || '#c9a227', { progress: 0, order: 14 });
    scene.add(mesh);
    journey = { j: j, mesh: mesh, path: path, stops: stops, total: path.total };
    return journey;
  }
  function clearJourney() {
    if (journey) { scene.remove(journey.mesh); journey.mesh.geometry.dispose(); journey.mesh.material.dispose(); journey = null; }
  }
  function setProgress(f) { if (journey) journey.mesh.material.uniforms.uProgress.value = f; }

  /* ---- rivers ---- */
  function setRivers(list) {
    rivers.forEach(function (r) { scene.remove(r.mesh); });
    rivers = [];
    (list || []).forEach(function (r) {
      var ctrl = r.points.map(function (p) { return { lat: p[0], lon: p[1] }; });
      if (ctrl.length < 2) return;
      var path = buildPath(ctrl, true);
      var mesh = makeRibbon(path, r.rank === 1 ? '#5aa7c4' : '#6fb3cc', { opacity: r.rank === 1 ? 0.9 : 0.75, order: 11 });
      scene.add(mesh);
      rivers.push({ r: r, mesh: mesh, path: path });
    });
  }
  function setRiversVisible(v) { riversVisible = v; rivers.forEach(function (r) { r.mesh.visible = v; }); }

  /* ---- measuring cord ---- */
  function measure(a, b) {
    clearMeasure();
    if (!a || !b) return null;
    var path = buildPath([{ lat: a.lat, lon: a.lon }, { lat: b.lat, lon: b.lon }], false);
    measureMesh = makeRibbon(path, '#fff4dc', { dash: true, order: 16 });
    scene.add(measureMesh);
    return { km: GEO.haversine(a.lat, a.lon, b.lat, b.lon), path: path };
  }
  function clearMeasure() { if (measureMesh) { scene.remove(measureMesh); measureMesh = null; } }

  function update(camDist) {
    var w = Math.min(14, Math.max(0.03, camDist * 0.0032));
    var lift = Math.max(0.006, camDist * 0.0022);
    if (journey) { journey.mesh.material.uniforms.uWidth.value = w; journey.mesh.material.uniforms.uLift.value = lift * 1.2; }
    var rw = Math.min(4, Math.max(0.02, camDist * 0.0011));
    var fade2 = 1 - Math.min(1, Math.max(0, (camDist - 900) / 900));
    rivers.forEach(function (r) {
      var m = r.mesh.material.uniforms; var rank1 = r.r.rank === 1;
      m.uWidth.value = rank1 ? rw : rw * 0.6; m.uLift.value = lift * 0.6;
      m.uOpacity.value = rank1 ? 0.9 : 0.75 * fade2;
      r.mesh.visible = riversVisible && (rank1 || fade2 > 0.02);
    });
    if (measureMesh) { measureMesh.material.uniforms.uWidth.value = w * 0.5; measureMesh.material.uniforms.uLift.value = lift * 1.3; }
  }

  return { init: init, showJourney: showJourney, clearJourney: clearJourney, setProgress: setProgress, pointAt: pointAt,
    setRivers: setRivers, setRiversVisible: setRiversVisible, measure: measure, clearMeasure: clearMeasure, update: update,
    current: function () { return journey; } };
})();
