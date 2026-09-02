/* ------------------------------------------------------------------
   Boundary overlay: regions are painted into a canvas in Mercator space
   and projected onto the terrain by the shader, so borders drape over
   every hill and their feathered edges say "approximate" honestly.
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.Overlay = (function () {
  var GEO = ATLAS.GEO;
  var cv, ctx, tex, W = 3072, H = 2048, origin, size;

  function init(worldLayer) {
    origin = worldLayer.origin; size = worldLayer.size;
    H = Math.round(W * size.y / size.x);
    cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    ctx = cv.getContext('2d');
    tex = new THREE.CanvasTexture(cv); tex.flipY = false; tex.minFilter = THREE.LinearFilter; tex.magFilter = THREE.LinearFilter; tex.generateMipmaps = false;
    draw([]);
    return tex;
  }
  function toPx(lat, lon) { var m = GEO.merc(lat, lon); return [(m.u - origin.x) / size.x * W, (m.v - origin.y) / size.y * H]; }

  function hexToRgba(hex, a) {
    var c = new THREE.Color(hex);
    return 'rgba(' + Math.round(c.r * 255) + ',' + Math.round(c.g * 255) + ',' + Math.round(c.b * 255) + ',' + a + ')';
  }

  function draw(regions) {
    ctx.clearRect(0, 0, W, H);
    regions.forEach(function (r) {
      if (!r.polygon || r.polygon.length < 3) return;
      ctx.beginPath();
      r.polygon.forEach(function (p, i) { var q = toPx(p[0], p[1]); if (i === 0) ctx.moveTo(q[0], q[1]); else ctx.lineTo(q[0], q[1]); });
      ctx.closePath();
      ctx.save();
      ctx.shadowColor = hexToRgba(r.color, 0.7); ctx.shadowBlur = 14;
      ctx.fillStyle = hexToRgba(r.color, 0.22); ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.clip();
      ctx.lineWidth = 12; ctx.strokeStyle = hexToRgba(r.color, 0.45); ctx.stroke();
      ctx.restore();
      ctx.lineWidth = 2.4; ctx.setLineDash([10, 7]); ctx.strokeStyle = hexToRgba(r.color, 0.95); ctx.stroke(); ctx.setLineDash([]);
    });
    tex.needsUpdate = true;
  }

  return { init: init, draw: draw, texture: function () { return tex; } };
})();
