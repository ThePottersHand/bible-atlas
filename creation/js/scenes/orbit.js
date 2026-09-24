/* ------------------------------------------------------------------
   Coda: "In the beginning was the Word." Darkness, and one point of
   light, as on the first day. Around it a thin arc of air begins to
   glow and the curve of the whole earth comes out of the dark; then the
   sun clears the rim of the world and its light runs across the cloud
   tops: the first day of a new week.
   ------------------------------------------------------------------ */
FILM.scenes.orbit = (function () {
  var U = FILM.U, G = FILM.GL, prog;
  var R = 6371.0, ALT = 420.0;

  var FRAG = FILM.GLSL.common + `
uniform vec3 uSunDir; uniform float uSunUp; uniform float uPoint; uniform float uGlowAmt; uniform float uStars;
const float R = 6371.0;
const float HA = 90.0;          // top of the visible atmosphere
vec2 sphere(vec3 ro, vec3 rd, float r){
  float b = dot(ro, rd), c = dot(ro, ro) - r*r, h = b*b - c;
  if (h < 0.0) return vec2(-1.0);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}
vec3 stars(vec3 rd){
  vec3 p = rd*420.0, i = floor(p), f = fract(p);
  float h = hash31(i);
  if (h > 0.05) return vec3(0.0);
  vec3 sp = vec3(hash31(i + 1.3), hash31(i + 2.7), hash31(i + 5.1))*0.8 + 0.1;
  float d = length(f - sp);
  float b = 0.04 + 0.8*pow(hash31(i + 7.7), 12.0);
  return vec3(0.85, 0.9, 1.0)*b*exp(-d*d*60.0);
}
void main(){
  vec3 ro = vec3(0.0, R + ${ALT.toFixed(1)}, 0.0) + uCamPos, rd = camRay(gl_FragCoord.xy);
  vec3 col = stars(rd)*uStars;
  float mask = 0.0;
  vec2 hp = sphere(ro, rd, R);
  // the planet: night below, cloud tops catching the dawn along the terminator
  if (hp.x > 0.0){
    vec3 p = ro + rd*hp.x, n = normalize(p);
    float sun = dot(n, uSunDir);
    vec3 q = n*9.0;
    float cl = fbm3(q + vec3(0.0, 0.0, uTime*0.004), 6);
    float cloud = sstep(0.46, 0.66, cl);
    vec3 ocean = vec3(0.004, 0.012, 0.03);
    vec3 alb = mix(ocean, vec3(0.9, 0.88, 0.85), cloud);
    float day = sstep(-0.02, 0.12, sun);
    vec3 dawn = mix(vec3(1.0, 0.35, 0.12), vec3(1.0, 0.85, 0.7), sstep(0.0, 0.2, sun));
    col = alb*dawn*day*2.2*uSunUp + alb*vec3(0.004, 0.006, 0.012);
    // air seen edge-on over the surface, only near the rim
    float edge = pow(1.0 - max(dot(-rd, n), 0.0), 8.0);
    col += vec3(0.10, 0.22, 0.55)*edge*(0.05 + 0.8*day)*uGlowAmt;
  }
  // the thin shell of air, seen edge-on above the limb
  vec2 ha = sphere(ro, rd, R + HA);
  if (ha.y > 0.0){
    float tc = max(-dot(ro, rd), 0.0);
    vec3 pc = ro + rd*tc;
    float hgt = length(pc) - R;                   // height of the ray's lowest point
    float onPlanet = 0.0;
    if (hp.x > 0.0){
      // over the disc the air is only a veil: strongest right at the rim
      vec3 ps = ro + rd*hp.x;
      onPlanet = pow(1.0 - max(dot(-rd, normalize(ps)), 0.0), 10.0);
      hgt = 0.0;
      pc = ps;
    }
    float mu = dot(rd, uSunDir);
    float fwd = pow(max(mu, 0.0), 4.0), fwd2 = pow(max(mu, 0.0), 40.0), near = pow(max(mu, 0.0), 300.0);
    float h = max(hgt, 0.0);
    // layers of the air seen edge-on: thin blue high up, pale blue-white, and orange-red at the base toward the sun
    vec3 band = vec3(0.02, 0.09, 0.42)*exp(-h/30.0)*0.8
              + vec3(0.30, 0.58, 1.00)*exp(-h/9.0)*(0.55 + 0.8*fwd)
              + vec3(1.00, 0.52, 0.16)*exp(-h/3.5)*fwd*2.2
              + vec3(1.00, 0.28, 0.06)*exp(-h/1.2)*fwd2*2.5
              + vec3(1.00, 0.90, 0.75)*exp(-h/5.0)*near*6.0;
    float lit = sstep(-0.35, 0.2, dot(normalize(pc), uSunDir) + 0.25);
    col += band*lit*uGlowAmt*(hp.x > 0.0 ? onPlanet*0.35 : 1.0);
    if (hp.x < 0.0) mask = 1.0;
  }
  // the light itself: first a point, as on the first day, then the sun
  float a = acos(clamp(dot(rd, uSunDir), -1.0, 1.0));
  vec3 L = vec3(1.0, 0.92, 0.8);
  float occl = hp.x > 0.0 ? 0.0 : 1.0;
  col += L*occl*(uPoint*(80.0*exp(-a*a*4.0e6) + 1.5*exp(-a*a*1.2e5)) + uSunUp*(60.0*sstep(0.0048, 0.0042, a) + 2.0*exp(-a*a*4.0e3)));
  fragColor = vec4(col, mask);
}`;

  // the camera sits in orbit looking along the horizon toward where the sun will rise
  function state(t) {
    var s = {};
    var dip = Math.acos(R / (R + ALT));
    var yaw = U.lerp(-0.06, -0.03, U.ease(U.lstep(60.2, 72, t)));
    var lookDip = dip - 0.1 + 0.03 * U.ease(U.lstep(62, 70, t));
    var fwd = [Math.sin(yaw), -Math.sin(lookDip), -Math.cos(yaw)];
    var pos = [0, 0, 0];
    s.cam = U.camera(pos, [fwd[0] * 100, fwd[1] * 100, fwd[2] * 100], U.lerp(26, 30, U.lstep(60.2, 72, t)), U.lerp(0.06, 0.02, U.lstep(60.2, 72, t)));
    // the sun: from just below the limb to clear above it
    var el = U.lerp(-dip + 0.0006, -dip + 0.05, U.ease(U.lstep(61.0, 68.0, t)));
    el += 0.012 * U.sstep(65.0, 66.2, t);
    s.sun = [Math.sin(0.04) * Math.cos(el), Math.sin(el), -Math.cos(0.04) * Math.cos(el)];
    s.point = U.sstep(60.8, 61.5, t) * (1 - U.sstep(65.3, 66.0, t));
    s.up = U.sstep(65.2, 66.0, t);
    s.glow = U.sstep(61.6, 65.6, t) * 0.9 + 0.35 * U.sstep(65.4, 66.4, t);
    s.stars = 0.8 * (1 - U.sstep(65.4, 67.0, t));
    return s;
  }

  return {
    init: function () { prog = G.program('orbit', FRAG); },
    render: function (t, local, target) {
      var s = state(t);
      G.bind(target);
      FILM.bindCommon(prog.use(), t, local, s.cam);
      prog.setAll({ uSunDir: s.sun, uSunUp: s.up, uPoint: s.point, uGlowAmt: s.glow, uStars: s.stars });
      G.draw();
    },
    post: function (t) {
      var s = state(t), sz = FILM.size();
      var lp = U.project(s.cam, [s.sun[0] * 1e6, s.sun[1] * 1e6, s.sun[2] * 1e6], sz[0] / sz[1]) || [0.5, 0.4];
      var burst = U.sstep(65.3, 66.3, t) * (1 - 0.45 * U.sstep(67.5, 70, t));
      return {
        exposure: 1.0, bloom: 0.05 + 0.2 * burst, thresh: 1.4, star: 0.8 + 0.6 * burst, starLen: 1.0 + 0.35 * burst,
        rays: 0.25 * burst, light: [lp[0], lp[1]], raysDensity: 0.9, raysDecay: 0.97,
        sat: 1.05, contrast: 1.06, lift: [0.0, 0.002, 0.006], gain: [1.03, 1.0, 0.97], vignette: 0.6, grain: 0.022,
        pulseX: lp[0], pulseY: lp[1], pulseAmt: 0.9
      };
    }
  };
})();
