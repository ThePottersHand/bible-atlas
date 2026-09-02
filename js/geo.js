/* ------------------------------------------------------------------
   Geography helpers.
   Scene space: Web Mercator, scaled so that 1 scene unit ~ 1 km at 35°N.
   +X = east, +Z = south (screen "down" on a north-up map), +Y = up.
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.GEO = (function () {
  var S = 32828.0;           // km per full Mercator world width, at cos(35°)
  var UC = 0.5, VC = 0.5;    // Mercator centre (set from the terrain manifest)
  var D2R = Math.PI / 180, R2D = 180 / Math.PI;

  function merc(lat, lon) {
    var r = lat * D2R;
    return { u: (lon + 180) / 360, v: (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 };
  }
  function unmerc(u, v) {
    var n = Math.PI - 2 * Math.PI * v;
    return { lat: Math.atan(Math.sinh(n)) * R2D, lon: u * 360 - 180 };
  }
  function toScene(lat, lon) {
    var m = merc(lat, lon);
    return { x: (m.u - UC) * S, z: (m.v - VC) * S };
  }
  function fromScene(x, z) { return unmerc(x / S + UC, z / S + VC); }
  function setCenter(lat, lon) { var m = merc(lat, lon); UC = m.u; VC = m.v; }

  /* true ground distance in km */
  function haversine(lat1, lon1, lat2, lon2) {
    var dLat = (lat2 - lat1) * D2R, dLon = (lon2 - lon1) * D2R;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * D2R) * Math.cos(lat2 * D2R) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 6371.0 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  /* initial bearing in degrees from north, clockwise */
  function bearing(lat1, lon1, lat2, lon2) {
    var p1 = lat1 * D2R, p2 = lat2 * D2R, dl = (lon2 - lon1) * D2R;
    var y = Math.sin(dl) * Math.cos(p2);
    var x = Math.cos(p1) * Math.sin(p2) - Math.sin(p1) * Math.cos(p2) * Math.cos(dl);
    return (Math.atan2(y, x) * R2D + 360) % 360;
  }
  /* scene-km -> real km correction at a latitude */
  function kmScale(lat) { return Math.cos(lat * D2R) / Math.cos(35 * D2R); }
  /* point at distance (km) and bearing from a lat/lon */
  function destination(lat, lon, bearingDeg, km) {
    var d = km / 6371.0, b = bearingDeg * D2R, p1 = lat * D2R, l1 = lon * D2R;
    var p2 = Math.asin(Math.sin(p1) * Math.cos(d) + Math.cos(p1) * Math.sin(d) * Math.cos(b));
    var l2 = l1 + Math.atan2(Math.sin(b) * Math.sin(d) * Math.cos(p1), Math.cos(d) - Math.sin(p1) * Math.sin(p2));
    return { lat: p2 * R2D, lon: ((l2 * R2D + 540) % 360) - 180 };
  }
  function fmtCoord(lat, lon) {
    return Math.abs(lat).toFixed(3) + '°' + (lat >= 0 ? 'N' : 'S') + ' ' + Math.abs(lon).toFixed(3) + '°' + (lon >= 0 ? 'E' : 'W');
  }
  function fmtKm(km) { return km >= 100 ? Math.round(km) + ' km' : km.toFixed(1) + ' km'; }
  function fmtMiles(km) { return Math.round(km * 0.621371) + ' mi'; }
  function walkingDays(km) { var d = km / 30; return d < 1 ? 'under a day on foot' : (d < 1.5 ? 'about a day on foot' : 'about ' + Math.round(d) + ' days on foot'); }

  return {
    S: S, merc: merc, unmerc: unmerc, toScene: toScene, fromScene: fromScene, setCenter: setCenter,
    center: function () { return { u: UC, v: VC }; },
    haversine: haversine, bearing: bearing, kmScale: kmScale, destination: destination,
    fmtCoord: fmtCoord, fmtKm: fmtKm, fmtMiles: fmtMiles, walkingDays: walkingDays
  };
})();
