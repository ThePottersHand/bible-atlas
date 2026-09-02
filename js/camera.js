/* ------------------------------------------------------------------
   Camera: flights, zoom-to-cursor, thread following, and "Stand here"
   (a first-person look-around from a real vantage point).
   heading = compass direction the camera looks toward (0 = north).
   pitch   = degrees above the horizon the camera sits at (90 = straight down).
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.Cam = (function () {
  var GEO = ATLAS.GEO, T = ATLAS.Terrain;
  var camera, controls, dom;
  var flight = null, follow = null, stand = null;
  var D2R = Math.PI / 180, R2D = 180 / Math.PI;
  var tmp = new THREE.Vector3(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2();

  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function offset(dist, heading, pitch) {
    var a = heading * D2R, p = pitch * D2R;
    return new THREE.Vector3(-Math.sin(a) * Math.cos(p) * dist, Math.sin(p) * dist, Math.cos(a) * Math.cos(p) * dist);
  }

  function init(cam, ctr, el) {
    camera = cam; controls = ctr; dom = el;
    controls.enableZoom = false;         // we zoom to cursor ourselves
    dom.addEventListener('wheel', onWheel, { passive: false });
    dom.addEventListener('pointerdown', onDown); dom.addEventListener('pointermove', onMoveLook); dom.addEventListener('pointerup', onUp);
    dom.addEventListener('dblclick', function (e) {
      var g = groundAt(e.clientX, e.clientY);
      if (g && !stand) flyTo({ lat: g.lat, lon: g.lon, dist: Math.max(distance() * 0.35, 3), duration: 1200 });
    });
  }

  function groundAt(cx, cy) {
    var r = dom.getBoundingClientRect();
    ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    return T.pickGround(ray.ray.origin, ray.ray.direction);
  }

  var pinch = null;
  function onWheel(e) {
    if (stand) { e.preventDefault(); camera.fov = Math.max(20, Math.min(90, camera.fov + (e.deltaY > 0 ? 4 : -4))); camera.updateProjectionMatrix(); return; }
    if (flight) return;
    e.preventDefault();
    var k = e.deltaY > 0 ? -0.22 : 0.2;
    if (Math.abs(e.deltaY) < 20) k *= 0.4;
    var g = groundAt(e.clientX, e.clientY);
    var P = g ? g.point : controls.target;
    var d = camera.position.distanceTo(P);
    if (k > 0 && d < 0.25) return;
    if (k < 0 && camera.position.distanceTo(controls.target) > 12000) return;
    camera.position.lerp(P, k);
    controls.target.lerp(P, k * 0.85);
    if (follow) follow = null;
  }

  /* ---- flights ---- */
  function flyTo(o) {
    /* o: {lat, lon, dist, heading, pitch, duration} (any of dist/heading/pitch may be omitted to keep current) */
    var s = state();
    var tgt = T.scenePos(o.lat, o.lon);
    var dist = o.dist !== undefined ? o.dist : s.dist, heading = o.heading !== undefined ? o.heading : s.heading, pitch = o.pitch !== undefined ? o.pitch : Math.max(s.pitch, 25);
    var endPos = tgt.clone().add(offset(dist, heading, pitch));
    var travel = controls.target.distanceTo(tgt);
    var dur = o.duration !== undefined ? o.duration : Math.min(4200, 900 + travel * 0.9 + Math.abs(s.dist - dist) * 0.4);
    follow = null;
    if (Cam.instant) { controls.target.copy(tgt); camera.position.copy(endPos); flight = null; return Promise.resolve(); }
    return new Promise(function (res) {
      flight = { t0: performance.now(), dur: dur, p0: camera.position.clone(), t0v: controls.target.clone(), p1: endPos, t1: tgt,
        bump: Math.min(2600, travel * 0.45 + Math.abs(s.dist - dist) * 0.1), done: res };
    });
  }
  function flyToState(st, dur) { return flyTo({ lat: st.lat, lon: st.lon, dist: st.dist, heading: st.heading, pitch: st.pitch, duration: dur }); }

  function state() {
    var d = camera.position.clone().sub(controls.target);
    var dist = d.length();
    var pitch = Math.asin(Math.max(-1, Math.min(1, d.y / (dist || 1)))) * R2D;
    var heading = (Math.atan2(-d.x, d.z) * R2D + 360) % 360;
    var ll = GEO.fromScene(controls.target.x, controls.target.z);
    return { lat: ll.lat, lon: ll.lon, dist: dist, heading: heading, pitch: pitch };
  }
  function distance() { return camera.position.distanceTo(controls.target); }

  /* ---- follow (journeys) ---- */
  function setFollow(fn, dist, pitch) { follow = fn ? { fn: fn, dist: dist || 60, pitch: pitch || 38, heading: state().heading } : null; }

  /* ---- stand here ---- */
  var look = { yaw: 0, pitch: 0, drag: null };
  function standAt(lat, lon, heading, eyeM) {
    var prev = state();
    var p = GEO.toScene(lat, lon), h = T.heightAt(lat, lon) || 0;
    stand = { lat: lat, lon: lon, h: h, x: p.x, z: p.z, eye: (eyeM || 25) * 0.001, prev: prev, fov0: camera.fov };
    look.yaw = heading || 0; look.pitch = -3;
    controls.enabled = false; follow = null; flight = null;
    camera.fov = 62; camera.updateProjectionMatrix();
    placeStand();
  }
  function placeStand() {
    if (!stand) return;
    var ex = T.U.uExag.value * 0.001;
    camera.position.set(stand.x, stand.h * ex + stand.eye * T.U.uExag.value, stand.z);
    var a = look.yaw * D2R, e = look.pitch * D2R;
    tmp.set(Math.sin(a) * Math.cos(e), Math.sin(e), -Math.cos(a) * Math.cos(e));
    camera.lookAt(camera.position.clone().add(tmp));
  }
  function exitStand() {
    if (!stand) return Promise.resolve();
    var prev = stand.prev; stand = null;
    camera.fov = 50; camera.updateProjectionMatrix();
    controls.enabled = true;
    var p = camera.position.clone();
    controls.target.copy(p).add(new THREE.Vector3(0, -0.01, -0.02));
    return flyToState(prev, 2200);
  }
  function onDown(e) { if (!stand) return; look.drag = { x: e.clientX, y: e.clientY, yaw: look.yaw, pitch: look.pitch }; dom.setPointerCapture(e.pointerId); }
  function onMoveLook(e) {
    if (!stand || !look.drag) return;
    look.yaw = look.drag.yaw - (e.clientX - look.drag.x) * 0.18;
    look.pitch = Math.max(-60, Math.min(60, look.drag.pitch + (e.clientY - look.drag.y) * 0.15));
  }
  function onUp(e) { look.drag = null; }
  function setYaw(deg) { look.yaw = deg; }

  /* ---- per frame ---- */
  function update(dt) {
    if (stand) { placeStand(); return; }
    if (flight) {
      var f = flight, t = Math.min(1, (performance.now() - f.t0) / f.dur), k = ease(t);
      controls.target.lerpVectors(f.t0v, f.t1, k);
      camera.position.lerpVectors(f.p0, f.p1, k);
      camera.position.y += Math.sin(Math.PI * t) * f.bump;
      if (t >= 1) { flight = null; f.done(); }
    } else if (follow) {
      var tg = follow.fn();
      if (tg) {
        var a = 1 - Math.exp(-dt * 2.4);
        controls.target.lerp(tg.pos, a);
        if (tg.heading !== undefined) { var dh = ((tg.heading - follow.heading + 540) % 360) - 180; follow.heading += dh * Math.min(1, dt * 0.5); }
        var want = tg.pos.clone().add(offset(follow.dist, follow.heading, follow.pitch));
        camera.position.lerp(want, a);
      }
    }
    controls.update();
    /* keep the camera above ground */
    var gh = T.heightAtScene(camera.position.x, camera.position.z);
    if (gh !== null) {
      var minY = gh * 0.001 * T.U.uExag.value + Math.max(0.02, distance() * 0.02);
      if (camera.position.y < minY) camera.position.y = minY;
    }
  }

  var Cam = { init: init, flyTo: flyTo, flyToState: flyToState, state: state, distance: distance, setFollow: setFollow, update: update,
    standAt: standAt, exitStand: exitStand, setYaw: setYaw, groundAt: groundAt, isStanding: function () { return !!stand; }, isFlying: function () { return !!flight; },
    isFollowing: function () { return !!follow; }, instant: false };
  return Cam;
})();
