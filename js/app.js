/* ------------------------------------------------------------------
   App: boot, state, and the render loop.  Everything the user can do
   funnels through here so that deep links, the Scroll, the Stele and
   the threads stay in step.
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.App = (function () {
  var GEO = ATLAS.GEO, T = ATLAS.Terrain, L = ATLAS.Labels, TH = ATLAS.Threads, OV = ATLAS.Overlay, Cam = ATLAS.Cam, UI = ATLAS.UI, AU = ATLAS.Audio;
  var renderer, scene, camera, controls, clock;
  var places = {}, placeList = [], journeys = {}, eras = {}, eraIdx = {}, placeNames = {};
  var st = { era: null, regionGroup: null, rivers: true, prophecy: false, density: 1, exag: 3, hour: null, selected: null, measuring: false, muted: AU.isMuted(), autoplay: true };
  var lightA = null, lightB = null, lightT = 1, lightDur = 1.8;
  var exagFrom = 3, exagTo = 3, exagT = 1;
  var play = null;            // journey playback
  var measureA = null;
  var mouse = { x: -1, y: -1, moved: false };
  var HOME = { lat: 31.85, lon: 35.35, dist: 620, heading: 12, pitch: 46 };
  var t0 = performance.now(), frames = 0, fpsT = 0, lowPower = false, entered = false;

  /* ---------- boot ---------- */
  function boot() {
    var app = document.getElementById('app');
    renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    app.appendChild(renderer.domElement);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 200000);
    camera.position.set(0, 9000, 6000);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; controls.dampingFactor = 0.09; controls.rotateSpeed = 0.55; controls.panSpeed = 0.8;
    controls.minDistance = 0.15; controls.maxDistance = 14000; controls.maxPolarAngle = 1.53; controls.screenSpacePanning = false;
    controls.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE };
    controls.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_ROTATE };
    clock = new THREE.Clock();

    var intro = document.querySelector('#intro'), bar = document.querySelector('#intro .bar span'), msg = document.querySelector('#intro .msg');
    msg.textContent = 'Raising the land…';
    T.load(function (f) { bar.style.width = Math.round(f * 100) + '%'; }).then(function () {
      scene.add(T.group);
      indexData();
      L.init(document.getElementById('labels'), camera, renderer, scene);
      L.setPlaces(placeList);
      L.onPick(onPick);
      T.setOverlay(OV.init(T.layer('world')));
      TH.init(scene);
      TH.setRivers(ATLAS.RIVERS);
      Cam.init(camera, controls, renderer.domElement);
      UI.init(App);
      applyHash(true);
      if (!st.era) setEra('united-kingdom', { silent: true, instant: true });
      msg.textContent = '';
      document.querySelector('#intro').classList.add('ready');
      document.querySelector('#intro .enter').addEventListener('click', enter);
      if (/auto/.test(location.search + location.hash)) { setTimeout(function () { enter(); intro.style.display = "none"; }, 50); }
      window.addEventListener('resize', onResize);
      renderer.domElement.addEventListener('mousemove', function (e) { mouse.x = e.clientX; mouse.y = e.clientY; mouse.moved = true; });
      window.addEventListener('hashchange', function () { applyHash(false); });
      requestAnimationFrame(loop);
    }).catch(function (err) {
      console.error(err);
      msg.innerHTML = 'The terrain could not be loaded.<br><small>' + (location.protocol === 'file:' ? 'Browsers block heightmap textures when a page is opened from disk. Serve the folder over http (see README) or use the live site.' : String(err.message || err)) + '</small>';
    });
  }

  function indexData() {
    placeList = (ATLAS.PLACES || []).slice();
    placeList.forEach(function (p) { places[p.id] = p; placeNames[p.name.toLowerCase()] = 1; });
    ATLAS.JOURNEYS = ATLAS.JOURNEYS || []; ATLAS.REGIONS = ATLAS.REGIONS || []; ATLAS.RIVERS = ATLAS.RIVERS || []; ATLAS.PROPHECIES = ATLAS.PROPHECIES || [];
    ATLAS.JOURNEYS.forEach(function (j) { journeys[j.id] = j; });
    ATLAS.ERAS.forEach(function (e, i) { eras[e.id] = e; eraIdx[e.id] = i; });
  }

  function enter() {
    var intro = document.querySelector('#intro');
    intro.classList.add('leave');
    setTimeout(function () { intro.style.display = 'none'; }, 1800);
    AU.start(); AU.cue('begin'); AU.setEra(st.era);
    var target = pendingView || HOME;
    pendingView = null; entered = true;
    var still = /still/.test(location.search + location.hash);
    Cam.instant = still;
    /* start high over the sea, descend to the land */
    var s = GEO.toScene(33.5, 27.0);
    camera.position.set(s.x, 6200, s.z + 2200); controls.target.set(s.x, 0, s.z - 800);
    Cam.flyTo({ lat: target.lat, lon: target.lon, dist: target.dist, heading: target.heading, pitch: target.pitch, duration: still ? 1 : 6500 }).then(function () {
      if (pendingSelect) { selectPlace(pendingSelect, { fly: !still }); pendingSelect = null; }
      if (pendingJourney) {
        playJourney(pendingJourney); pendingJourney = null;
        var fullNow = function () { if (play) { play.t = 1; play.stopIdx = play.h.stops.length - 1; play.playing = false; play.waitUntil = Infinity; TH.setProgress(1); L.setCurrentStop(play.stopIdx); UI.setProgress(1); UI.showStop(play.j, play.h, play.stopIdx); } };
        if (pendingFull) { if (still) setTimeout(function () { fullNow(); Cam.flyTo({ lat: target.lat, lon: target.lon, dist: target.dist, heading: target.heading, pitch: target.pitch }); }, 0); else setTimeout(fullNow, 2800); }
      }
      if (pendingStand) { var sid = pendingStand; pendingStand = null; if (still) { stand(sid); exagT = 1; exagFrom = exagTo = 1; T.exag = 1; } else setTimeout(function () { stand(sid); }, 200); }
      if (pendingPanel) { document.getElementById(pendingPanel).classList.add('open'); pendingPanel = null; }
    });
    UI.banner('<h3>' + eras[st.era].name + '</h3><div class="dt">' + eras[st.era].dates + ' · ' + eras[st.era].span + '</div><p>' + eras[st.era].blurb + '</p>');
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  /* ---------- eras & light ---------- */
  function currentLight() { return lightA && lightT < 1 ? T.lerpLight(lightA, lightB, smooth(lightT)) : (lightB || eras[st.era].light); }
  function smooth(t) { return t * t * (3 - 2 * t); }
  function setEra(id, o) {
    o = o || {};
    if (!eras[id]) return;
    var prev = st.era; st.era = id;
    var e = eras[id];
    lightA = currentLight(); lightB = e.light; lightT = o.instant ? 1 : 0;
    if (o.instant) T.setLight(lightB);
    L.setEra(id);
    var g = st.regionGroupUser !== undefined && st.regionGroupUser !== null ? st.regionGroupUser : ATLAS.ERA_REGION_GROUP[id];
    setRegionGroup(g, true);
    UI.setEra(e);
    syncUI();
    if (!o.silent && prev !== id) { AU.setEra(id); AU.cue('era'); }
    if (play && !o.keepJourney) { /* a journey belongs to its era; leave it running */ }
    updateHash();
  }
  function stepEra(d) { var i = eraIdx[st.era] + d; if (i >= 0 && i < ATLAS.ERAS.length) setEra(ATLAS.ERAS[i].id); }
  function setHour(h) { st.hour = h; T.hourOverride = h; T.setLight(currentLight()); syncUI(); }

  function availableGroups() {
    var set = {}; ATLAS.REGIONS.forEach(function (r) { if (r.eras && r.eras.indexOf(st.era) >= 0) set[r.group] = 1; });
    return Object.keys(set);
  }
  function setRegionGroup(g, fromEra) {
    if (!fromEra) st.regionGroupUser = g;
    var avail = availableGroups();
    if (g && avail.indexOf(g) < 0) g = fromEra ? (avail[0] || null) : g;
    st.regionGroup = g;
    var regs = g ? ATLAS.REGIONS.filter(function (r) { return r.group === g && r.eras && r.eras.indexOf(st.era) >= 0; }) : [];
    OV.draw(regs);
    L.setExtra('region', regs.filter(function (r) { return r.label && !placeNames[String(r.name).replace(/\s*\(.*?\)\s*/g, ' ').trim().toLowerCase()]; }).map(function (r) {
      var span = polySpan(r.polygon);
      var nm = String(r.name).replace(/\s*\(.*?\)\s*/g, ' ').trim();
      return { id: r.id, name: nm, lat: r.label[0], lon: r.label[1], color: r.color, pri: 1.8, minDist: span * 0.25, html: '<span class="nm">' + nm + '</span>' };
    }));
    syncUI();
  }
  function polySpan(poly) {
    var la0 = 90, la1 = -90, lo0 = 180, lo1 = -180;
    poly.forEach(function (p) { la0 = Math.min(la0, p[0]); la1 = Math.max(la1, p[0]); lo0 = Math.min(lo0, p[1]); lo1 = Math.max(lo1, p[1]); });
    return GEO.haversine(la0, lo0, la1, lo1);
  }
  function setLayer(k, v) {
    st[k] = v;
    if (k === 'rivers') TH.setRiversVisible(v);
    if (k === 'density') L.setDensity(v);
    if (k === 'prophecy') refreshProphecy();
    syncUI();
  }
  function refreshProphecy() {
    L.setExtra('proph', st.prophecy ? ATLAS.PROPHECIES.map(function (x) {
      var p = places[x.place]; return { id: x.id, name: x.title, lat: p ? p.lat : x.lat, lon: p ? p.lon : x.lon, pri: 1.2, html: '<span class="gl">✶</span><span class="nm">' + x.title + '</span>' };
    }) : []);
  }
  function setExag(v) { exagFrom = T.exag; exagTo = v; exagT = 0; st.exag = v; syncUI(); }
  function syncUI() { UI.syncLayers(st, availableGroups()); }

  /* ---------- selection ---------- */
  function onPick(hit, e) {
    if (st.measuring) { var g = Cam.groundAt(e.clientX, e.clientY); if (g) measureClick(g); return; }
    if (!hit) { if (!e.target.closest || !e.target.closest('.lbl')) { /* click on ground: nothing */ } return; }
    if (hit.type === 'place') selectPlace(hit.id, { fly: false, keepJourney: !!play });
    else if (hit.type === 'proph') { var x = ATLAS.PROPHECIES.filter(function (q) { return q.id === hit.id; })[0]; if (x) { L.select(x.place); UI.showProphecy(x); AU.cue('select'); } }
    else if (hit.type === 'stop') { var i = +hit.data.index; if (play) gotoStop(i); }
  }
  function viewDist(p) {
    switch (p.type) {
      case 'sea': return 420; case 'region': return 380; case 'wilderness': case 'desert': return 260; case 'river': return 300;
      case 'mountain': return 22; case 'site': return 6; case 'island': return 60; case 'town': return 18; default: return p.rank <= 2 ? 45 : 24;
    }
  }
  function selectPlace(id, o) {
    o = o || {};
    var p = places[id]; if (!p) return;
    if (play && !o.keepJourney) stopJourney(true);
    st.selected = id;
    L.select(id);
    var through = ATLAS.JOURNEYS.filter(function (j) { return j.stops.some(function (s) { return s.place === id; }); });
    var prophs = ATLAS.PROPHECIES.filter(function (x) { return x.place === id; });
    UI.showPlace(p, through, prophs);
    AU.cue('select');
    if (o.fly) {
      var d = o.close ? Math.max(1.5, viewDist(p) * 0.3) : viewDist(p);
      AU.cue('fly');
      Cam.flyTo({ lat: p.lat, lon: p.lon, dist: d, pitch: o.close ? 32 : undefined });
    }
    updateHash();
  }
  function deselect() {
    st.selected = null; L.select(null); UI.hideStele();
    if (play) { UI.showStop(play.j, play.h, Math.max(0, play.stopIdx)); }
    updateHash();
  }
  function flyToLatLon(lat, lon, dist) { AU.cue('fly'); return Cam.flyTo({ lat: lat, lon: lon, dist: dist }); }
  function home() { if (Cam.isStanding()) exitStand(); if (play) stopJourney(); deselect(); AU.cue('fly'); Cam.flyTo(HOME); }

  /* ---------- journeys ---------- */
  function resolveStop(s) {
    var p = s.place && places[s.place];
    return p ? { lat: p.lat, lon: p.lon, place: p } : { lat: s.lat, lon: s.lon };
  }
  function playJourney(id) {
    var j = journeys[id]; if (!j) return;
    if (Cam.isStanding()) exitStand();
    stopJourney(true);
    if (j.era && j.era !== st.era && j.era !== 'primeval') setEra(j.era, { silent: true });
    var h = TH.showJourney(j, resolveStop);
    L.setExtra('stop', h.stops.map(function (s, i) {
      var short = String(s.stop.title).split(/[:(\u2014\u2013]/)[0].trim();
      return { id: id + ':' + i, index: i, name: s.stop.title, short: short, lat: s.lat, lon: s.lon, color: j.color, pri: -5 + i * 0.001, html: '<span class="num">' + (i + 1) + '</span><span class="nm">' + short + '</span>' };
    }));
    var dur = Math.min(95, Math.max(28, h.total / 60));
    play = { j: j, h: h, t: 0, playing: false, stopIdx: -1, rate: 1 / dur, followDist: Math.min(950, Math.max(5, h.total * 0.11)), waitUntil: 0 };
    UI.narration(j, h); UI.markThread(id); UI.setPlaying(false);
    st.selected = null; L.select(null);
    /* fly to the first stop, then begin */
    var s0 = h.stops[0];
    var whole = Math.min(3000, Math.max(30, h.total * 0.55));
    AU.cue('fly');
    Cam.flyTo({ lat: (s0.lat + h.stops[h.stops.length - 1].lat) / 2, lon: (s0.lon + h.stops[h.stops.length - 1].lon) / 2, dist: whole, pitch: 52, duration: 2600 }).then(function () {
      if (!play || play.j !== j) return;
      arriveAt(0);
    });
    updateHash();
  }
  function arriveAt(i) {
    var s = play.h.stops[i];
    play.stopIdx = i; play.t = s.along; play.playing = false;
    L.setCurrentStop(i);
    TH.setProgress(play.t);
    UI.showStop(play.j, play.h, i); UI.setPlaying(false); UI.setProgress(play.t);
    AU.cue('stop');
    Cam.setFollow(null);
    var d = Math.min(play.followDist * 0.8, 120);
    Cam.flyTo({ lat: s.lat, lon: s.lon, dist: Math.max(4, d), pitch: 40, duration: 1800 }).then(function () {
      if (!play || play.stopIdx !== i) return;
      play.waitUntil = st.autoplay ? performance.now() + 7000 : Infinity;
    });
  }
  function resume() {
    if (!play) return;
    if (play.stopIdx >= play.h.stops.length - 1) { play.playing = false; UI.setPlaying(false); return; }
    play.playing = true; play.waitUntil = 0; UI.setPlaying(true);
    var pd = play.followDist;
    Cam.setFollow(function () { var pt = TH.pointAt(play.h.path, play.t); return { pos: pt.pos, heading: pt.heading }; }, pd, 36);
  }
  function togglePlay() { if (!play) return; if (play.playing) { play.playing = false; play.waitUntil = Infinity; UI.setPlaying(false); Cam.setFollow(null); } else resume(); }
  function stepStop(d) { if (!play) return; var i = Math.max(0, Math.min(play.h.stops.length - 1, (play.stopIdx < 0 ? 0 : play.stopIdx) + d)); gotoStop(i); }
  function gotoStop(i) { if (!play) return; Cam.setFollow(null); arriveAt(i); }
  function stopJourney(quiet) {
    if (!play) return;
    play = null; TH.clearJourney(); L.clearExtra('stop'); Cam.setFollow(null);
    UI.narration(null); UI.markThread(null); UI.hideStele();
    if (!quiet) updateHash();
  }
  function stepPlayback(dt, now) {
    if (!play) return;
    if (!play.playing) { if (play.waitUntil && now >= play.waitUntil && play.stopIdx < play.h.stops.length - 1) resume(); return; }
    var next = play.h.stops[play.stopIdx + 1];
    play.t = Math.min(1, play.t + dt * play.rate);
    TH.setProgress(play.t); UI.setProgress(play.t);
    if (next && play.t >= next.along - 1e-6) { arriveAt(play.stopIdx + 1); }
  }

  /* ---------- stand here ---------- */
  var standPrevExag = null;
  function stand(id) { var p = places[id]; if (!p) return; standAt(p.lat, p.lon, p.name); }
  function standSelected() { if (st.selected) stand(st.selected); }
  function standAt(lat, lon, title) {
    if (Cam.isStanding()) return;
    standPrevExag = st.exag;
    exagFrom = T.exag; exagTo = 1; exagT = 0;
    /* look toward the most significant place nearby */
    var best = null, bd = 1e9;
    placeList.forEach(function (q) { if (q.rank > 2 || (q.type !== 'city' && q.type !== 'sea' && q.type !== 'mountain')) return; var d = GEO.haversine(lat, lon, q.lat, q.lon); if (d > 1 && d < bd) { bd = d; best = q; } });
    var heading = best ? GEO.bearing(lat, lon, best.lat, best.lon) : 0;
    Cam.standAt(lat, lon, heading, 22);
    UI.standbar(true, title || '');
    UI.hideStele();
    UI.toast('Drag to look around · scroll to zoom the view · Esc to leave' + (best ? ' · facing ' + best.name : ''), 5000);
    AU.cue('fly');
  }
  function exitStand() {
    if (!Cam.isStanding()) return;
    exagFrom = T.exag; exagTo = standPrevExag || 3; exagT = 0;
    UI.standbar(false);
    Cam.exitStand();
  }

  /* ---------- measuring cord ---------- */
  function toggleMeasure() {
    st.measuring = !st.measuring; measureA = null;
    if (!st.measuring) TH.clearMeasure(); else UI.toast('Measuring cord: click two points on the land');
    document.body.classList.toggle('measuring', st.measuring);
    syncUI();
  }
  function measureClick(g) {
    if (!measureA) { measureA = g; TH.clearMeasure(); UI.toast('Now click the second point'); return; }
    var r = TH.measure(measureA, g);
    var kmA = r.km;
    UI.toast('<b>' + GEO.fmtKm(kmA) + '</b> · ' + GEO.fmtMiles(kmA) + ' · ' + GEO.walkingDays(kmA) + ' <small>(30 km a day)</small>', 9000);
    measureA = null;
  }

  /* ---------- sound ---------- */
  function toggleSound() { st.muted = !st.muted; AU.setMuted(st.muted); syncUI(); }

  /* ---------- search ---------- */
  function search(s) {
    var out = [];
    placeList.forEach(function (p) {
      var n = p.name.toLowerCase(), score = -1;
      if (n === s) score = 0; else if (n.indexOf(s) === 0) score = 1; else if (n.indexOf(s) >= 0) score = 2;
      else if (p.alt && p.alt.some(function (a) { return a.toLowerCase().indexOf(s) >= 0; })) score = 3;
      if (score >= 0) out.push({ p: p, s: score * 10 + p.rank });
    });
    out.sort(function (a, b) { return a.s - b.s; });
    return out.map(function (x) { return x.p; });
  }

  /* ---------- deep links ---------- */
  var pendingView = null, pendingSelect = null, pendingJourney = null, pendingStand = null, pendingFull = false, pendingPanel = null, hashLock = false;
  function updateHash() {
    if (hashLock || !entered) return;
    var parts = ['era=' + st.era];
    if (st.selected) parts.push('place=' + st.selected);
    if (play) parts.push('thread=' + play.j.id);
    var v = Cam.state();
    parts.push('view=' + v.lat.toFixed(4) + ',' + v.lon.toFixed(4) + ',' + Math.round(v.dist) + ',' + Math.round(v.heading) + ',' + Math.round(v.pitch));
    hashLock = true; history.replaceState(null, '', '#' + parts.join('&')); setTimeout(function () { hashLock = false; }, 50);
  }
  function applyHash(initial) {
    if (hashLock) return;
    var h = location.hash.replace(/^#/, ''); if (!h) return;
    var q = {}; h.split('&').forEach(function (kv) { var i = kv.indexOf('='); if (i > 0) q[kv.slice(0, i)] = decodeURIComponent(kv.slice(i + 1)); });
    if (q.era && eras[q.era]) setEra(q.era, { silent: true, instant: initial });
    if (q.view) { var v = q.view.split(',').map(parseFloat); if (v.length >= 3) { var view = { lat: v[0], lon: v[1], dist: v[2], heading: v[3] || 0, pitch: v[4] || 45 }; if (initial) pendingView = view; else Cam.flyTo(view); } }
    if (q.place && places[q.place]) { if (initial) pendingSelect = q.place; else selectPlace(q.place, { fly: !q.view }); }
    if (q.thread && journeys[q.thread]) { if (initial) pendingJourney = q.thread; else playJourney(q.thread); }
    if (q.stand && places[q.stand]) { if (initial) pendingStand = q.stand; else stand(q.stand); }
    if (q.full) pendingFull = true;
    if (q.panel) pendingPanel = q.panel;
  }
  function copyLink() {
    updateHash();
    var url = location.href;
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { UI.toast('Link copied'); }, function () { UI.toast(url, 8000); });
    else UI.toast(url, 8000);
  }

  /* ---------- loop ---------- */
  var lastHud = 0;
  function loop() {
    requestAnimationFrame(loop);
    var dt = Math.min(0.1, clock.getDelta()), now = performance.now(), t = (now - t0) / 1000;
    T.tick(t);
    if (lightT < 1) { lightT = Math.min(1, lightT + dt / lightDur); T.setLight(currentLight()); }
    if (exagT < 1) { exagT = Math.min(1, exagT + dt / 1.4); }
    Cam.update(dt);
    /* relief exaggeration eases toward true scale as you come close, and is exactly true when standing */
    var exagCur = exagFrom + (exagTo - exagFrom) * smooth(exagT);
    var cdk = Cam.isStanding() ? 1 : (0.55 + 0.45 * smooth(Math.min(1, Math.max(0, (Cam.distance() - 25) / 500))));
    T.exag = exagCur * cdk;
    stepPlayback(dt, now);
    var cd = Cam.distance();
    L.setStanding(Cam.isStanding());
    L.update(cd);
    TH.update(cd);
    if (Cam.isStanding()) UI.compass(Cam.state().heading);
    /* leader line */
    var anchor = UI.anchor();
    UI.leader(anchor ? L.screenPos(anchor) : null);
    /* hud: ground under cursor */
    if (mouse.moved && now - lastHud > 120) {
      lastHud = now; mouse.moved = false;
      var g = Cam.groundAt(mouse.x, mouse.y);
      if (g) UI.hud('<span>' + GEO.fmtCoord(g.lat, g.lon) + '</span><span>' + (g.h === null ? '' : Math.round(g.h) + ' m') + '</span><span class="era">' + eras[st.era].name + '</span>');
    }
    /* wind with altitude */
    if (frames % 30 === 0) AU.setWind(Math.min(1, cd / 2500) * 0.6 + (Cam.isStanding() ? 0.45 : 0));
    /* adaptive resolution */
    frames++; fpsT += dt;
    if (fpsT > 2) { var fps = frames / fpsT; frames = 0; fpsT = 0; if (fps < 28 && !lowPower) { lowPower = true; renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1)); } }
    if (frames % 90 === 0 && !Cam.isFlying()) updateHash();
    renderer.render(scene, camera);
  }

  var App = {
    boot: boot, setEra: setEra, stepEra: stepEra, setHour: setHour, setRegionGroup: setRegionGroup, setLayer: setLayer, setExag: setExag,
    selectPlace: selectPlace, deselect: deselect, flyToLatLon: flyToLatLon, home: home, playJourney: playJourney, stopJourney: stopJourney,
    togglePlay: togglePlay, stepStop: stepStop, gotoStop: gotoStop, hasJourney: function () { return !!play; },
    stand: stand, standAt: standAt, standSelected: standSelected, exitStand: exitStand, isStanding: function () { return Cam.isStanding(); },
    toggleMeasure: toggleMeasure, toggleSound: toggleSound, search: search, copyLink: copyLink,
    place: function (id) { return places[id]; }, state: st
  };
  return App;
})();

window.addEventListener('DOMContentLoaded', function () { ATLAS.App.boot(); });
