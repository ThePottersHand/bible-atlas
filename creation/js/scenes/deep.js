/* ------------------------------------------------------------------
   The deep (Genesis 1:1-8). One continuous shot over the waters:
   darkness, the Spirit hovering low (a fluttering breath of light whose
   wake opens behind it like wings), the first light (a point of glory,
   not the sun, which waits for the fourth day), evening and morning,
   then a mist that lies on the waters lifts into a ceiling of cloud and
   the expanse opens between the waters above and the waters below.
   ------------------------------------------------------------------ */
FILM.scenes.deep = (function () {
  var U = FILM.U, prog;

  var FRAG = FILM.GLSL.common + `
uniform vec3 uLightDir; uniform float uLightI; uniform vec3 uLightCol;
uniform float uDay; uniform float uAmb; uniform float uEve;
uniform vec3 uSpirit; uniform float uSpiritI; uniform vec2 uSpiritDir; uniform float uTrail;
uniform float uFogBase; uniform float uFogTop; uniform float uFogDens;
uniform float uWaveAmp;

float wave(vec2 p, vec2 d, float k, float ph, float sharp){
  float w = sqrt(9.81*k)*0.8;
  float s = 0.5 + 0.5*sin(dot(p, d)*k - w*uTime + ph);
  return pow(s, sharp);
}
float seaH(vec2 p, float detail){
  float h = 0.0;
  h += 0.62*wave(p, vec2(0.287, 0.958), 0.16, 0.0, 2.3);
  h += 0.38*wave(p, vec2(-0.514, 0.857), 0.27, 1.3, 2.5);
  h += 0.22*wave(p, vec2(0.944, 0.330), 0.46, 2.1, 2.7);
  h += 0.13*wave(p, vec2(-0.874, 0.486), 0.74, 0.7, 3.0);
  h += 0.07*wave(p, vec2(0.110, -0.994), 1.21, 4.1, 3.0);
  if (detail > 0.0) h += detail*0.16*(fbm(p*0.8 + vec2(uTime*0.35, -uTime*0.22), 3) - 0.5);
  return (h - 0.55)*uWaveAmp;
}
vec3 seaN(vec2 p, float t){
  float e = 0.03 + t*0.0025;
  float d = sat(1.0 - t/140.0);
  vec3 n = normalize(vec3(seaH(p - vec2(e, 0.0), d) - seaH(p + vec2(e, 0.0), d), 2.0*e,
                          seaH(p - vec2(0.0, e), d) - seaH(p + vec2(0.0, e), d)));
  vec2 q = p*3.1 + vec2(uTime*0.9, uTime*0.4);
  vec2 r = vec2(noise(q) - noise(q + vec2(0.7, 0.0)), noise(q) - noise(q + vec2(0.0, 0.7)));
  n.xz += r*0.22*sat(1.0 - t/40.0);
  return normalize(n);
}
float traceSea(vec3 ro, vec3 rd){
  float top = 0.45*uWaveAmp;
  if (rd.y >= -0.0005) return -1.0;
  float t = max(0.0, (top - ro.y)/rd.y);
  float tPrev = t;
  for (int i = 0; i < 72; i++){
    vec3 p = ro + rd*t;
    float d = p.y - seaH(p.xz, sat(1.0 - t/140.0));
    if (d < 0.0){
      float a = tPrev, b = t;
      for (int j = 0; j < 6; j++){ float m = 0.5*(a + b); vec3 q = ro + rd*m; if (q.y - seaH(q.xz, 1.0) < 0.0) b = m; else a = m; }
      return 0.5*(a + b);
    }
    tPrev = t;
    t += max(d*0.6, 0.01 + t*0.012);
    if (t > 2500.0) break;
  }
  return t;
}

// The sky of the first day: deep blue overhead, the horizon warm only where the light is.
vec3 skyCol(vec3 rd){
  float y = max(rd.y, 0.0);
  float mu = dot(rd, uLightDir);
  vec2 hz = normalize(rd.xz + 1e-5), lz = normalize(uLightDir.xz);
  float az = max(dot(hz, lz), 0.0);
  vec3 voidC = vec3(0.003, 0.005, 0.010)*uAmb*exp(-y*8.0);
  vec3 zen = mix(vec3(0.018, 0.040, 0.120), vec3(0.030, 0.022, 0.070), uEve);
  vec3 mid = mix(vec3(0.085, 0.115, 0.250), vec3(0.120, 0.070, 0.160), uEve);
  vec3 horCool = mix(vec3(0.30, 0.27, 0.36), vec3(0.34, 0.16, 0.22), uEve);
  vec3 horWarm = mix(vec3(1.55, 0.92, 0.46), vec3(1.40, 0.45, 0.18), uEve);
  vec3 hor = mix(horCool, horWarm, pow(az, 4.0));
  float gy = sqrt(y);
  vec3 c = mix(hor, mid, sstep(0.0, 0.42, gy));
  c = mix(c, zen, sstep(0.35, 1.0, gy));
  c += vec3(1.5, 1.0, 0.55)*pow(max(mu, 0.0), 90.0) + vec3(0.35, 0.21, 0.11)*pow(max(mu, 0.0), 14.0);
  return voidC + c*uDay;
}
vec3 lightCore(vec3 rd){
  float mu = max(dot(rd, uLightDir), 0.0);
  float a = acos(min(mu, 1.0));
  return uLightCol*uLightI*(60.0*exp(-a*a*6.0e5) + 3.0*exp(-a*a*2.0e4) + 0.05*exp(-a*a*900.0));
}

// The Spirit: a breath of light, wide like outspread wings, fluttering as it hovers.
vec3 spiritGlow(vec3 ro, vec3 rd, float tmax){
  if (uSpiritI <= 0.0) return vec3(0.0);
  vec3 f = vec3(uSpiritDir.x, 0.0, uSpiritDir.y), s = vec3(-f.z, 0.0, f.x);
  float flap = sin(uTime*5.2)*0.5 + 0.5;
  vec3 col = vec3(0.0);
  for (int k = 0; k < 3; k++){
    float side = float(k - 1);
    vec3 c = uSpirit + s*side*1.15 + vec3(0.0, abs(side)*(0.12 + 0.22*flap), 0.0);
    vec3 sc = k == 1 ? vec3(1.0/0.7, 1.0/0.9, 1.0/0.45) : vec3(1.0/0.5, 1.0/1.25, 1.0/0.22);
    vec3 o = ro - c;
    vec3 lo = vec3(dot(o, f), dot(o, s), o.y)*sc;
    vec3 ld = vec3(dot(rd, f), dot(rd, s), rd.y)*sc;
    float tc = -dot(lo, ld)/dot(ld, ld);
    if (tc < 0.0 || tc > tmax + 3.0) continue;
    vec3 q = lo + ld*tc;
    float d2 = dot(q, q);
    float w = k == 1 ? 1.0 : 0.55 + 0.25*flap;
    col += w*(0.9*exp(-d2*3.5) + 0.16*exp(-d2*0.3));
  }
  float fl = 0.85 + 0.15*noise(vec2(uTime*3.0, 1.0));
  return vec3(1.0, 0.85, 0.62)*uSpiritI*fl*col;
}
// Light left on the water where the Spirit passed: a V that widens behind it.
vec3 wake(vec2 p){
  if (uTrail <= 0.0) return vec3(0.0);
  vec2 rel = p - uSpirit.xz;
  float s = -dot(rel, uSpiritDir);
  float c = dot(rel, vec2(-uSpiritDir.y, uSpiritDir.x));
  float lead = sstep(-2.5, 0.5, s);
  float sp = max(s, 0.0);
  float arm = abs(abs(c) - sp*0.55);
  float width = 0.18 + sp*0.05;
  float g = exp(-arm*arm/(width*width))*exp(-sp*0.22);
  float ripple = 0.5 + 0.5*sin(length(vec2(sp, c*1.6))*2.6 - uTime*2.4);
  float inside = sstep(0.0, 0.6, sp*0.55 - abs(c))*exp(-sp*0.2)*ripple;
  float near = exp(-dot(rel, rel)*0.5);
  float spark = pow(noise(p*6.0 + vec2(uTime*1.7, -uTime*1.1)), 5.0)*5.0;
  return vec3(0.95, 0.76, 0.48)*(g*(0.3 + spark*0.7) + inside*0.08 + near*0.35)*lead*uTrail;
}

vec4 clouds(vec3 ro, vec3 rd, float tmax, out vec3 acc){
  acc = vec3(0.0);
  if (uFogDens <= 0.0) return vec4(0.0, 0.0, 0.0, 1.0);
  float lo = uFogBase - 6.0;
  float t0, t1;
  if (abs(rd.y) < 1e-4) { t0 = 0.0; t1 = (ro.y > lo && ro.y < uFogTop) ? 900.0 : -1.0; }
  else {
    float ta = (lo - ro.y)/rd.y, tb = (uFogTop - ro.y)/rd.y;
    t0 = max(min(ta, tb), 0.0); t1 = max(ta, tb);
  }
  t1 = min(t1, min(tmax, 1400.0));
  if (t1 <= t0) return vec4(0.0, 0.0, 0.0, 1.0);
  float T = 1.0;
  const int N = 44;
  float dt = (t1 - t0)/float(N);
  float t = t0 + dt*hash21(gl_FragCoord.xy + floor(uTime*30.0)*vec2(17.0, 31.0));
  float mu = dot(rd, uLightDir);
  float g1 = 0.6, g2 = -0.25;
  float phase = 0.75*(1.0 - g1*g1)/pow(1.0 + g1*g1 - 2.0*g1*mu, 1.5) + 0.25*(1.0 - g2*g2)/pow(1.0 + g2*g2 - 2.0*g2*mu, 1.5);
  vec3 amb = vec3(0.016, 0.021, 0.036)*(0.4 + uDay);
  for (int i = 0; i < N; i++){
    vec3 p = ro + rd*t;
    vec2 w = p.xz*0.012 + vec2(uTime*0.02, 0.0);
    float base = uFogBase + (fbm(w, 4) - 0.5)*14.0;
    float h = (p.y - base)/max(uFogTop - base, 1e-3);
    vec3 q = p*vec3(0.03, 0.05, 0.03) + vec3(uTime*0.03, 0.0, uTime*0.015);
    float n = fbm3(q, 4);
    float dens = sstep(0.0, 0.08, h + (n - 0.55)*0.12)*sstep(1.0, 0.8, h)*(0.35 + n);
    dens *= uFogDens;
    if (dens > 1e-4){
      // light reaches only the underside: it comes in low from the horizon
      float into = max(p.y - base, 0.0);
      float toward = sstep(-150.0, 900.0, dot(p.xz - ro.xz, normalize(uLightDir.xz)));
      float direct = exp(-into*0.25)*(0.5 + 0.5*n)*toward*toward;
      vec3 lum = uLightCol*uLightI*(0.02 + 0.2*phase*pow(max(mu, 0.0), 3.0))*direct + amb*(1.0 + 1.2*exp(-into*0.1));
      float a = 1.0 - exp(-dens*dt*0.6);
      acc += T*a*lum;
      T *= 1.0 - a;
      if (T < 0.01) break;
    }
    t += dt;
  }
  return vec4(acc, T);
}

void main(){
  vec3 ro = uCamPos, rd = camRay(gl_FragCoord.xy);
  vec3 col; float mask = 0.0;
  float ts = traceSea(ro, rd);
  float tmax = 1e5;
  if (ts > 0.0){
    vec3 p = ro + rd*ts;
    tmax = ts;
    vec3 n = seaN(p.xz, ts);
    float cosi = max(dot(n, -rd), 0.0);
    float fres = 0.02 + 0.98*pow(1.0 - cosi, 5.0);
    vec3 rr = reflect(rd, n); rr.y = abs(rr.y);
    vec3 refl = skyCol(rr) + lightCore(rr)*0.6;
    vec3 cacc; vec4 cl = clouds(p + vec3(0.0, 0.05, 0.0), rr, 700.0, cacc);
    refl = refl*cl.a + cacc;
    vec3 deep = vec3(0.003, 0.014, 0.026);
    float crest = sat((p.y + 0.3*uWaveAmp)/(0.9*uWaveAmp));
    vec3 sss = vec3(0.04, 0.22, 0.22)*pow(max(dot(rd, uLightDir), 0.0), 3.0)*crest*crest*uLightI*0.03;
    vec3 body = deep*(uDay*1.4 + uAmb*0.3) + sss;
    vec3 sl = uSpirit - p; float sd = length(sl); sl /= sd;
    float sspec = pow(max(dot(rr, sl), 0.0), 80.0);
    vec3 sp = vec3(1.0, 0.84, 0.6)*uSpiritI*(sspec*14.0*fres + 0.08*max(dot(n, sl), 0.0))/(1.0 + sd*sd*0.015);
    vec3 wk = wake(p.xz)*(0.5 + 0.9*crest);
    col = mix(body, refl, fres) + sp + wk;
    col += vec3(0.45, 0.55, 0.8)*uAmb*fres*0.12;
    float haze = 1.0 - exp(-ts*0.0012);
    col = mix(col, skyCol(normalize(vec3(rd.x, 0.015, rd.z))), haze*uDay*0.85);
  } else {
    col = skyCol(rd) + lightCore(rd);
    mask = 1.0;
  }
  vec3 cacc; vec4 cl = clouds(ro, rd, tmax, cacc);
  col = col*cl.a + cacc;
  mask *= cl.a;
  col += spiritGlow(ro, rd, tmax);
  fragColor = vec4(col, mask);
}`;

  var cam = U.track([
    [0, [0, 3.0, 6]], [9, [0, 3.2, 0]], [15.0, [0, 3.6, -8]], [18.0, [0, 4.4, -14]], [20.9, [0, 20, -22]]
  ]);
  var look = U.track([
    [0, [0, 0.4, -40]], [8.4, [0, 1.0, -40]], [11.0, [0, 4.0, -40]], [15.0, [0, 4.0, -45]], [18.0, [0, 7.0, -52]], [20.9, [0, 30, -60]]
  ]);
  function ldir(t) {
    var el = U.lerp(8.5, 1.2, U.sstep(13.2, 14.5, t));
    el = U.lerp(el, 3.2, U.sstep(14.6, 16.0, t));
    el *= Math.PI / 180;
    return [0, Math.sin(el), -Math.cos(el)];
  }

  function state(t) {
    var s = {};
    // the first light: a point that ignites, floods everything, then settles; evening and morning at the label
    var ig = U.lstep(10.55, 11.0, t);
    var li = t < 10.55 ? 0 : t < 11.0 ? 0.02 + 70 * Math.pow(ig, 3) : U.lerp(70, 7.0, U.easeOut(U.lstep(11.0, 12.8, t)));
    var eve = U.sstep(13.3, 14.2, t) * (1 - U.sstep(14.6, 15.5, t));
    s.eve = eve;
    s.lightI = li * (1 - 0.75 * eve);
    s.day = U.sstep(10.8, 12.2, t) * (1 - 0.6 * eve);
    s.amb = U.sstep(1.5, 5.0, t);
    // the Spirit crosses the waters, then passes into the dark
    var sp = U.lstep(3.6, 9.4, t);
    var a = [-19, 1.1, -26], b = [15, 1.1, -15];
    var e = U.lerp(sp, U.ease(sp), 0.5);
    s.spirit = U.mix3(a, b, e);
    s.spirit[1] += 0.2 * Math.sin(t * 1.3);
    var dir = U.norm([b[0] - a[0], 0, b[2] - a[2]]);
    s.spiritDir = [dir[0], dir[2]];
    s.spiritI = U.sstep(3.6, 4.6, t) * (1 - U.sstep(8.1, 9.3, t));
    s.trail = U.sstep(3.8, 4.8, t) * (1 - U.sstep(8.8, 10.8, t));
    // the waters above: a mist lying on the waters, lifting into a ceiling of cloud
    s.fogDens = U.sstep(14.9, 15.8, t) * 0.5;
    var lift = U.ease(U.lstep(16.4, 21.2, t));
    s.fogBase = U.lerp(11, 70, lift);
    s.fogTop = s.fogBase + 60;
    s.wave = U.lerp(1.15, 0.9, U.sstep(10, 16, t));
    s.cam = U.camera(cam(t), look(t), 38, 0.0);
    s.ldir = ldir(t);
    return s;
  }

  return {
    init: function () { prog = FILM.GL.program('deep', FRAG); },
    render: function (t, local, target) {
      var s = state(t);
      FILM.GL.bind(target);
      FILM.bindCommon(prog.use(), t, local, s.cam);
      prog.set('uLightDir', s.ldir).set('uLightI', s.lightI).set('uLightCol', [1.0, 0.9, 0.74])
        .set('uDay', s.day).set('uAmb', s.amb).set('uEve', s.eve)
        .set('uSpirit', s.spirit).set('uSpiritI', s.spiritI).set('uSpiritDir', s.spiritDir).set('uTrail', s.trail)
        .set('uFogBase', s.fogBase).set('uFogTop', s.fogTop).set('uFogDens', s.fogDens).set('uWaveAmp', s.wave);
      FILM.GL.draw();
    },
    post: function (t) {
      var s = state(t);
      var sz = FILM.size();
      var L = s.ldir, far = [s.cam.pos[0] + L[0] * 1000, s.cam.pos[1] + L[1] * 1000, s.cam.pos[2] + L[2] * 1000];
      var lp = U.project(s.cam, far, sz[0] / sz[1]) || [0.5, 0.6];
      var flash = U.sstep(10.7, 11.0, t) * (1 - U.sstep(11.0, 12.6, t));
      return {
        exposure: 1.0, bloom: 0.06 + 0.3 * flash, thresh: 1.2,
        star: 0.9 * U.sstep(10.6, 11.0, t) * (1 - 0.45 * U.sstep(12, 14, t)) + 0.25 * s.spiritI, starLen: 1.0 + 1.2 * flash,
        rays: 0.25 * U.sstep(10.7, 11.4, t) + 0.55 * U.sstep(16.5, 18, t), light: [lp[0], lp[1]], raysDensity: 0.95, raysDecay: 0.965,
        sat: U.lerp(0.7, 1.05, U.sstep(10.6, 12.5, t)), contrast: 1.05,
        lift: U.mix3([0.002, 0.004, 0.010], [0.004, 0.004, 0.008], U.sstep(10.6, 12, t)),
        gain: U.mix3([0.95, 1.0, 1.08], [1.03, 1.0, 0.96], U.sstep(10.6, 12, t)),
        vignette: 0.6, grain: 0.02,
        pulseX: lp[0], pulseY: lp[1], pulseAmt: 0.8
      };
    }
  };
})();
