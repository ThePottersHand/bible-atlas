/* ------------------------------------------------------------------
   The land of days three to seven: one hill with one tree, drawn as
   curtains of landscape at increasing distance (hill, valley, ranges,
   the sea beyond) under a sky that can hold the light of the first
   days, the sun, the moon, the stars and the morning star. The tree and
   the grass are geometry that grows; the hill profile below is shared
   with the shader so everything stands on the same ground.
   ------------------------------------------------------------------ */
FILM.Land = (function () {
  var U = FILM.U, G = FILM.GL;
  var bg, branchProg, leafProg, bladeProg;
  var tree = null, blades = null;
  var MAIN_Z = -60, TREE_X = 8.0;

  function hMain(x) {
    return 6.5 * Math.exp(-Math.pow((x - 8.0) / 24.0, 2)) + 1.2 * Math.sin(x * 0.07 + 1.0) + 0.5 * Math.sin(x * 0.19 + 2.0) - 1.4;
  }

  var BG = FILM.GLSL.common + `
uniform vec3 uSunDir; uniform float uSunDisk; uniform float uGlory; uniform float uSunI;
uniform vec3 uMoonDir; uniform float uMoon;
uniform vec3 uVenusDir; uniform float uVenus;
uniform mat3 uSkyRot; uniform float uStars; uniform vec3 uMwN; uniform vec3 uMwC;
uniform float uGreen; uniform float uLush; uniform float uWet; uniform float uFigures; uniform float uSeaOpen;
uniform float uClouds;

float hMain(float x){ return 6.5*exp(-pow((x - 8.0)/24.0, 2.0)) + 1.2*sin(x*0.07 + 1.0) + 0.5*sin(x*0.19 + 2.0) - 1.4; }
float hMid(float x){ return 13.0 + 7.0*sin(x*0.011 + 0.5) + 4.0*sin(x*0.027 + 1.9) + 1.6*sin(x*0.071 + 0.3) + 3.0*(noise(vec2(x*0.02, 3.0)) - 0.5); }
float hFar(float x){ return -30.0 + 230.0*ridged(vec2(x*0.0011 + 4.0, 0.7), 6); }

// ---------- sky ----------
void skyPal(float s, out vec3 Z, out vec3 H, out vec3 W, out vec3 A){
  // keyed on the sun's elevation in degrees: day, golden hour, sunset, twilight, nautical, night
  vec3 z0 = vec3(0.060, 0.160, 0.420), h0 = vec3(0.55, 0.66, 0.80), w0 = vec3(0.90, 0.85, 0.75), a0 = vec3(0.50, 0.60, 0.75);
  vec3 z1 = vec3(0.040, 0.100, 0.300), h1 = vec3(0.40, 0.43, 0.52), w1 = vec3(1.50, 0.92, 0.46), a1 = vec3(0.30, 0.36, 0.50);
  vec3 z2 = vec3(0.030, 0.060, 0.180), h2 = vec3(0.46, 0.30, 0.30), w2 = vec3(1.90, 0.58, 0.16), a2 = vec3(0.32, 0.20, 0.30);
  vec3 z3 = vec3(0.012, 0.022, 0.070), h3 = vec3(0.12, 0.08, 0.12), w3 = vec3(0.60, 0.20, 0.07), a3 = vec3(0.06, 0.05, 0.10);
  vec3 z4 = vec3(0.008, 0.014, 0.040), h4 = vec3(0.040, 0.046, 0.085), w4 = vec3(0.09, 0.055, 0.060), a4 = vec3(0.030, 0.038, 0.070);
  vec3 z5 = vec3(0.0075, 0.0130, 0.0380), h5 = vec3(0.0280, 0.0380, 0.0750), w5 = h5, a5 = h5;
  float k;
  if (s > 8.0){ k = sstep(8.0, 25.0, s); Z = mix(z1, z0, k); H = mix(h1, h0, k); W = mix(w1, w0, k); A = mix(a1, a0, k); }
  else if (s > 0.0){ k = s/8.0; Z = mix(z2, z1, k); H = mix(h2, h1, k); W = mix(w2, w1, k); A = mix(a2, a1, k); }
  else if (s > -5.0){ k = (s + 5.0)/5.0; Z = mix(z3, z2, k); H = mix(h3, h2, k); W = mix(w3, w2, k); A = mix(a3, a2, k); }
  else if (s > -12.0){ k = (s + 12.0)/7.0; Z = mix(z4, z3, k); H = mix(h4, h3, k); W = mix(w4, w3, k); A = mix(a4, a3, k); }
  else { k = sstep(-18.0, -12.0, s); Z = mix(z5, z4, k); H = mix(h5, h4, k); W = mix(w5, w4, k); A = mix(a5, a4, k); }
}
vec3 skyBase(vec3 rd){
  float s = degrees(asin(clamp(uSunDir.y, -1.0, 1.0)));
  vec3 Z, H, W, A; skyPal(s, Z, H, W, A);
  float y = max(rd.y, 0.0);
  vec2 hz = normalize(rd.xz + 1e-5), sz = normalize(uSunDir.xz + 1e-5);
  float az = dot(hz, sz)*0.5 + 0.5;
  vec3 hor = mix(A, W, pow(az, 3.0));
  hor = mix(hor, H, 0.35);
  vec3 c = mix(hor, Z, pow(sat(y*2.4), 0.5));
  float mu = dot(rd, uSunDir);
  float glowK = sstep(-10.0, 2.0, s);
  c += W*glowK*(0.22*pow(max(mu, 0.0), 10.0) + 0.6*pow(max(mu, 0.0), 90.0));
  return c;
}
vec3 sunLight(){
  float s = degrees(asin(clamp(uSunDir.y, -1.0, 1.0)));
  vec3 c = mix(vec3(1.0, 0.45, 0.18), vec3(1.0, 0.9, 0.78), sstep(0.0, 14.0, s));
  return c*sstep(-2.0, 3.0, s)*uSunI;
}
vec3 starField(vec3 rd){
  if (uStars <= 0.0) return vec3(0.0);
  vec3 d = uSkyRot*rd;
  // the Milky Way, in its own frame: v across the band, u along it from the core (the seam is behind us)
  vec3 side = normalize(cross(uMwN, uMwC));
  float v = dot(d, uMwN);
  float u = atan(dot(d, side), dot(d, uMwC));
  float coreK = exp(-u*u*1.6);
  float sig = 0.085 + 0.11*coreK;
  float prof = exp(-v*v/(sig*sig));
  vec3 acc = vec3(0.0);
  if (prof > 0.002){
    vec2 q = vec2(u*4.0, v*15.0);
    float clump = fbm(q + 11.0, 6);
    float fine = fbm(q*3.3 + 5.0, 4);
    float rift = exp(-pow((v - 0.018*sin(u*3.0) - 0.03*(fbm(vec2(u*6.0, 0.5), 4) - 0.5))/(0.022 + 0.02*coreK), 2.0));
    float riftMod = sstep(0.3, 0.6, fbm(vec2(u*8.0, v*20.0) + 3.0, 5));
    float dust = rift*(0.45 + 0.55*riftMod) + 0.45*sstep(0.56, 0.76, fbm(q*1.7 + 21.0, 5));
    float I = prof*(0.2 + 1.3*clump*clump)*(0.65 + 0.7*fine)*(0.45 + 1.3*coreK)*(1.0 - 0.85*sat(dust));
    vec3 mwc = mix(vec3(0.60, 0.67, 0.95), vec3(1.0, 0.80, 0.58), coreK*0.85 + 0.05);
    acc += mwc*I*0.075;
  }
  float px = 2.0*uFov/uRes.y;
  float sg = max(px*0.7, 0.0002);
  for (int L = 0; L < 3; L++){
    float sc = L == 0 ? 160.0 : L == 1 ? 380.0 : 820.0;
    float dens = L == 0 ? 0.035 : L == 1 ? 0.035 + 0.05*prof : 0.02 + 0.22*prof;
    vec3 p = d*sc, i = floor(p), f = fract(p);
    float h = hash31(i + float(L)*31.0);
    if (h < dens){
      vec3 sp = vec3(hash31(i + 1.3), hash31(i + 2.7), hash31(i + 5.1))*0.8 + 0.1;
      float dist = length(f - sp)/sc;
      float r = hash31(i + 7.7);
      float b = L == 0 ? 0.08 + 2.4*pow(r, 9.0) : L == 1 ? 0.035 + 0.3*pow(r, 10.0) : 0.02 + 0.04*r;
      float tw = 0.8 + 0.2*sin(uTime*(3.0 + h*400.0) + r*90.0);
      vec3 tc = mix(vec3(1.0, 0.75, 0.55), vec3(0.72, 0.84, 1.0), hash31(i + 9.9));
      acc += tc*b*tw*exp(-dist*dist/(sg*sg));
    }
  }
  return acc*uStars;
}
vec3 moonCol(vec3 rd){
  if (uMoon <= 0.0) return vec3(0.0);
  float r = 0.016;
  vec3 m = uMoonDir;
  float d = acos(clamp(dot(rd, m), -1.0, 1.0));
  vec3 halo = vec3(0.55, 0.62, 0.75)*0.12*exp(-d*d*120.0);
  if (d > r) return halo*uMoon;
  vec3 up = normalize(cross(cross(m, vec3(0.0, 1.0, 0.0)), m));
  vec3 rt = normalize(cross(m, up));
  vec2 q = vec2(dot(rd - m, rt), dot(rd - m, up))/r;
  float zz = sqrt(max(0.0, 1.0 - dot(q, q)));
  vec3 n = normalize(rt*q.x + up*q.y + (-m)*zz);
  vec3 L = normalize(uSunDir - m*dot(uSunDir, m)*0.2);
  float lit = sstep(-0.08, 0.2, dot(n, L));
  float mare = fbm(q*3.0 + 5.0, 5);
  vec3 c = vec3(1.0, 0.96, 0.88)*(0.55 + 0.45*sstep(0.35, 0.65, mare))*(0.006 + 1.3*lit);
  float edge = sstep(1.0, 0.92, length(q));
  return (c*edge + halo)*uMoon;
}
vec3 cloudLayer(vec3 rd, out float cov){
  cov = 0.0;
  if (uClouds <= 0.0 || rd.y <= 0.004) return vec3(0.0);
  vec2 uv = rd.xz/(rd.y + 0.06)*0.9 + vec2(uTime*0.01, 0.0);
  float n = fbm(uv*1.4 + 7.0, 6);
  float thin = sstep(0.52, 0.78, n)*sstep(0.0, 0.08, rd.y)*sstep(0.55, 0.12, rd.y);
  cov = thin*uClouds;
  float s = degrees(asin(clamp(uSunDir.y, -1.0, 1.0)));
  vec3 Z, H, W, A; skyPal(s, Z, H, W, A);
  float mu = dot(rd, uSunDir);
  vec3 lit = mix(A*1.4, W*1.6, pow(max(mu*0.5 + 0.5, 0.0), 3.0)) + H*0.3;
  lit *= (0.6 + 0.5*sstep(0.5, 0.9, n))*mix(0.1, 1.0, sstep(-9.0, -2.0, s));
  return lit;
}
vec3 sunGlint(vec3 rd){
  float a = acos(clamp(dot(rd, uSunDir), -1.0, 1.0));
  return (sunLight()*uSunDisk*8.0 + vec3(1.0, 0.9, 0.75)*uGlory*2.0)*exp(-a*a*3000.0);
}
vec3 skyFog(vec3 rd){
  float cov; vec3 cc = cloudLayer(rd, cov);
  return mix(skyBase(rd), cc, cov*0.85);
}
vec3 sky(vec3 rd, bool withSun){
  vec3 c = skyBase(rd);
  float cov; vec3 cc = cloudLayer(rd, cov);
  c += starField(rd)*(1.0 - cov)*sstep(-0.02, 0.05, rd.y) + moonCol(rd)*(1.0 - cov*0.7);
  if (uVenus > 0.0){
    float d = acos(clamp(dot(rd, uVenusDir), -1.0, 1.0));
    c += vec3(0.9, 0.95, 1.0)*uVenus*(40.0*exp(-d*d*4.0e6) + 0.25*exp(-d*d*2.0e4));
  }
  if (withSun){
    float mu = dot(rd, uSunDir), a = acos(clamp(mu, -1.0, 1.0));
    vec3 sl = sunLight();
    // before the fourth day the light has no disc: a point of glory with a halo
    c += vec3(1.0, 0.9, 0.75)*uGlory*(60.0*exp(-a*a*6.0e5) + 2.0*exp(-a*a*2.0e4) + 0.05*exp(-a*a*900.0));
    float disc = sstep(0.0052, 0.0046, a);
    c += (sl + vec3(0.2))*disc*uSunDisk*22.0;
  }
  c = mix(c, cc, cov*0.85);
  return c;
}

// ---------- ground ----------
vec3 hemi(vec3 n){
  float s = degrees(asin(clamp(uSunDir.y, -1.0, 1.0)));
  vec3 Z, H, W, A; skyPal(s, Z, H, W, A);
  return mix(H*0.5, Z*1.4 + H*0.3, n.y*0.5 + 0.5) + uMoon*vec3(0.02, 0.025, 0.035);
}
vec3 shadeLayer(vec3 p, vec3 rd, float dy, float slope, float scaleY, vec3 alb, float rimK){
  vec3 nTop = normalize(vec3(-slope, 1.0, 0.0));
  vec3 n = normalize(mix(nTop, normalize(vec3(-slope*0.3, 0.45, 1.0)), sstep(0.0, scaleY, dy)));
  vec3 sl = sunLight() + vec3(1.0, 0.9, 0.75)*uGlory*0.05;
  float dif = max(dot(n, uSunDir), 0.0);
  float back = pow(max(dot(rd, uSunDir), 0.0), 3.0);
  float rim = back*exp(-dy/max(scaleY*0.08, 1e-3))*rimK;
  return alb*(sl*dif*0.9 + hemi(n)*0.55) + sl*rim*1.1;
}
float figure(vec2 q, float h, float woman){
  // a person standing, seen side-on at a distance: head, body, legs, arms
  q /= h;
  float d = length(q - vec2(0.0, 0.93)) - 0.062;
  vec2 b = q - vec2(0.0, 0.64);
  float torso = length(max(abs(b) - vec2(0.075 - woman*0.012 - b.y*0.12, 0.2), 0.0)) - 0.03;
  d = min(d, torso);
  float legs = length(max(abs(q - vec2(0.0, 0.24)) - vec2(0.05 + woman*0.03, 0.24), 0.0)) - 0.02;
  d = min(d, legs);
  if (woman > 0.5) d = min(d, length(max(abs(q - vec2(0.03, 0.83)) - vec2(0.05, 0.1), 0.0)) - 0.02);
  return d*h;
}

void main(){
  vec3 ro = uCamPos, rd = camRay(gl_FragCoord.xy);
  float px = 2.0*uFov/uRes.y;

  // 1. the hill of the tree (with anti-aliased coverage, so its crest stays clean)
  vec3 frontCol = vec3(0.0); float front = 0.0;
  if (rd.z < 0.0){
    float t = (-60.0 - ro.z)/rd.z;
    vec3 p = ro + rd*t;
    float h = hMain(p.x);
    float aa = px*t*0.8;
    // two people stand near the tree on the sixth day
    float fig = 1e9;
    if (uFigures > 0.0){
      fig = min(figure(p.xy - vec2(4.35, hMain(4.35) - 0.05), 1.78, 0.0), figure(p.xy - vec2(5.05, hMain(5.05) - 0.05), 1.64, 1.0));
    }
    float cover = sstep(aa, -aa, p.y - h);
    float fcov = uFigures*sstep(aa, -aa, fig);
    front = max(cover, fcov);
    if (front > 0.0){
      float dy = max(h - p.y, 0.0);
      float slope = (hMain(p.x + 0.5) - hMain(p.x - 0.5));
      float n1 = noise(p.xy*vec2(0.9, 1.6)), n2 = noise(p.xy*4.0);
      vec3 earth = mix(vec3(0.07, 0.05, 0.035), vec3(0.12, 0.085, 0.055), n1)*(1.0 - 0.45*uWet);
      float g = sstep(0.0, 0.25, uGreen*1.35 - dy/9.0 - n1*0.25);
      vec3 grass = mix(vec3(0.025, 0.060, 0.014), vec3(0.070, 0.125, 0.028), n2);
      grass = mix(grass, vec3(0.20, 0.23, 0.07), uLush*0.4*n1);
      vec3 alb = mix(earth, grass, g);
      // flowers once the land is lush
      vec2 fc2 = floor(p.xy*vec2(6.0, 9.0));
      float fl = uLush*step(0.93, hash21(fc2))*sstep(0.2, 5.0, dy);
      alb = mix(alb, mix(vec3(0.8, 0.75, 0.6), vec3(0.7, 0.3, 0.5), hash21(fc2 + 3.0)), fl*0.6);
      vec3 c = shadeLayer(p, rd, dy, slope, 8.0, alb, 1.6);
      c += uWet*0.25*pow(max(dot(reflect(rd, normalize(vec3(-slope, 1.0, 0.4))), uSunDir), 0.0), 20.0)*sunLight();
      vec3 figc = vec3(0.015, 0.012, 0.012) + sunLight()*0.35*pow(max(dot(rd, uSunDir), 0.0), 3.0)*sstep(0.05, -0.02, fig);
      c = mix(c, figc, fcov);
      float fog = 1.0 - exp(-t*0.0015);
      frontCol = mix(c, skyFog(normalize(vec3(rd.x, 0.02, rd.z))), fog*0.5);
    }
    if (front >= 1.0){ fragColor = vec4(frontCol, 0.0); return; }
  }

  vec3 c = vec3(0.0); float m = 0.0;
  bool done = false;
  // 2. the valley floor between the hill and the far hills, with a river
  if (rd.y < 0.0){
    float tv = (-3.0 - ro.y)/rd.y;
    vec3 p = ro + rd*tv;
    if (p.z < -60.0 && p.z > -320.0){
      float river = abs(p.x + 40.0 + 30.0*sin(p.z*0.018) + 12.0*sin(p.z*0.05)) - 3.0 - 1.5*sin(p.z*0.03);
      float n1 = noise(p.xz*0.08);
      vec3 grass = mix(vec3(0.05, 0.09, 0.03), vec3(0.12, 0.17, 0.05), n1);
      vec3 earth = vec3(0.07, 0.05, 0.04)*(1.0 - 0.4*uWet);
      float g = sstep(0.0, 0.3, uGreen*1.4 - 0.2 - n1*0.3);
      vec3 alb = mix(earth, grass, g);
      vec3 cc = shadeLayer(p, rd, 50.0, 0.0, 1.0, alb, 0.0)*0.9;
      if (river < 0.0){
        vec3 rr = reflect(rd, vec3(0.0, 1.0, 0.0));
        cc = mix(cc, (skyFog(rr) + sunGlint(rr))*0.8, 0.85);
      }
      float fog = 1.0 - exp(-tv*0.004);
      c = mix(cc, skyFog(normalize(vec3(rd.x, 0.02, rd.z))), fog*0.6);
      done = true;
    }
  }
  // 3. the middle hills
  if (!done && rd.z < 0.0){
    float t = (-320.0 - ro.z)/rd.z;
    vec3 p = ro + rd*t;
    float h = hMid(p.x);
    if (p.y < h){
      float dy = h - p.y;
      float slope = (hMid(p.x + 2.0) - hMid(p.x - 2.0))*0.25;
      float n1 = noise(p.xy*vec2(0.12, 0.25)), n2 = noise(p.xy*0.7);
      vec3 earth = vec3(0.09, 0.07, 0.055);
      float g = sstep(0.0, 0.3, uGreen*1.3 - dy/25.0 - n1*0.3 + 0.05);
      vec3 forest = mix(vec3(0.03, 0.06, 0.025), vec3(0.08, 0.12, 0.04), n2*n2);
      vec3 alb = mix(earth, forest, g);
      vec3 cc = shadeLayer(p, rd, dy, slope, 20.0, alb, 1.0);
      float fog = 1.0 - exp(-t*0.0026);
      c = mix(cc, skyFog(normalize(vec3(rd.x, 0.015, rd.z))), fog*0.8);
      done = true;
    }
  }
  // 4. the ranges that rose from the sea
  if (!done && rd.z < 0.0){
    float t = (-2400.0 - ro.z)/rd.z;
    vec3 p = ro + rd*t;
    float h = hFar(p.x);
    if (p.y < h){
      float dy = h - p.y;
      float slope = (hFar(p.x + 8.0) - hFar(p.x - 8.0))/16.0;
      vec3 alb = mix(vec3(0.10, 0.09, 0.09), vec3(0.06, 0.08, 0.05), uGreen*sstep(60.0, 5.0, dy));
      vec3 cc = shadeLayer(p, rd, dy, slope, 80.0, alb, 0.8);
      c = mix(cc, skyFog(normalize(vec3(rd.x, 0.01, rd.z))), 0.72);
      done = true;
    }
  }
  // 5. the sea, then the sky
  if (!done){
    if (rd.y < 0.0){
      float ts = -ro.y/rd.y;
      vec3 p = ro + rd*ts;
      vec2 q = p.xz*0.02 + uTime*0.1;
      vec3 n = normalize(vec3((noise(q) - 0.5)*0.12, 1.0, (noise(q + 3.0) - 0.5)*0.12));
      vec3 rr = reflect(rd, n);
      float fres = 0.02 + 0.98*pow(1.0 - max(-rd.y, 0.0), 5.0);
      c = mix(vec3(0.005, 0.015, 0.03)*hemi(vec3(0.0, 1.0, 0.0))*8.0, skyFog(rr) + sunGlint(rr), fres);
      c = mix(c, skyFog(normalize(vec3(rd.x, 0.01, rd.z))), 0.3);
    } else {
      c = sky(rd, true);
      m = 1.0;
    }
  }
  c = mix(c, frontCol, front);
  m *= 1.0 - front;
  fragColor = vec4(c, m);
}`;

  /* ---------- the tree: a seeded branching, each segment with a birth time ---------- */
  function buildTree() {
    var r = U.rng(1033);
    var segs = [], leaves = [];
    function grow(p, ang, len, rad, depth, born, dur) {
      var n = 4, cur = p, a = ang;
      var tEnd = born + dur;
      for (var i = 0; i < n; i++) {
        a += (r() - 0.5) * 0.22 + (depth > 1 ? (-(a - Math.PI / 2)) * 0.03 : 0);
        var l = len / n;
        var nx = cur[0] + Math.cos(a) * l, ny = cur[1] + Math.sin(a) * l;
        var r0 = rad * (1 - i / n * 0.28), r1 = rad * (1 - (i + 1) / n * 0.28);
        var b0 = born + dur * i / n, b1 = born + dur * (i + 1) / n;
        segs.push([cur[0], cur[1], nx, ny, r0, r1, b0, b1]);
        cur = [nx, ny];
        // side shoots along older limbs
        if (depth < 5 && i === 2 && r() < 0.55) {
          var sa = a + (r() < 0.5 ? -1 : 1) * (0.7 + r() * 0.4);
          grow(cur, sa, len * 0.45, r1 * 0.55, depth + 2, b1, dur * 0.7);
        }
      }
      if (depth >= 6 || len < 0.35) {
        for (var k = 0; k < 16; k++) {
          var rr = Math.sqrt(r()) * 0.85, aa = r() * 6.283;
          leaves.push([cur[0] + Math.cos(aa) * rr * 1.2, cur[1] + Math.sin(aa) * rr * 0.8, tEnd + r() * 0.5, 0.28 + r() * 0.42, r(), r() < 0.035 ? 1 : 0]);
        }
        return;
      }
      var kids = depth < 2 ? 3 : 2;
      for (var c = 0; c < kids; c++) {
        var spread = depth < 2 ? 0.55 : 0.5;
        var na = a + (c - (kids - 1) / 2) * spread * 2 / Math.max(1, kids - 1) + (r() - 0.5) * 0.35;
        // the crown spreads wide rather than tall
        na = Math.PI / 2 + (na - Math.PI / 2) * (depth < 3 ? 1.25 : 1.05);
        grow(cur, na, len * (0.72 + r() * 0.12), rad * 0.66, depth + 1, tEnd, dur * 0.85);
      }
    }
    var base = [TREE_X, hMain(TREE_X) - 0.3];
    grow(base, Math.PI / 2 + 0.05, 3.1, 0.42, 0, 0, 0.55);
    return { segs: segs, leaves: leaves };
  }

  var BRANCH_V = `#version 300 es
layout(location=0) in vec2 aCorner;
layout(location=1) in vec4 aSeg;      // x0 y0 x1 y1
layout(location=2) in vec4 aInfo;     // r0 r1 born0 born1
uniform mat4 uVP; uniform float uGrow; uniform float uThick; uniform float uZ;
out vec2 vLocal; out vec2 vDir; out vec3 vWorld;
void main(){
  float g = clamp((uGrow - aInfo.z)/max(aInfo.w - aInfo.z, 1e-3), 0.0, 1.0);
  vec2 a = aSeg.xy, b = mix(aSeg.xy, aSeg.zw, g);
  vec2 d = normalize(aSeg.zw - aSeg.xy + 1e-6);
  vec2 n = vec2(-d.y, d.x);
  float r = mix(aInfo.x, aInfo.y, aCorner.y)*uThick*(g > 0.0 ? 1.0 : 0.0);
  vec2 p = mix(a, b, aCorner.y) + n*r*aCorner.x + d*r*0.6*(aCorner.y*2.0 - 1.0);
  vLocal = aCorner; vDir = d;
  vWorld = vec3(p, uZ);
  gl_Position = uVP*vec4(p, uZ, 1.0);
}`;
  var BRANCH_F = FILM.GLSL.geomHeader + `
in vec2 vLocal; in vec2 vDir; in vec3 vWorld;
uniform vec3 uSunDir; uniform vec3 uSunCol; uniform vec3 uAmb; uniform vec3 uCamPos;
float hMain(float x){ return 6.5*exp(-pow((x - 8.0)/24.0, 2.0)) + 1.2*sin(x*0.07 + 1.0) + 0.5*sin(x*0.19 + 2.0) - 1.4; }
void main(){
  if (vWorld.y < hMain(vWorld.x) - 0.25) discard;
  vec2 n = vec2(-vDir.y, vDir.x);
  float side = vLocal.x;                      // -1..1 across the limb
  vec2 ls = normalize(uSunDir.xy + 1e-4);
  float facing = dot(n*side, ls);
  vec3 rd = normalize(vWorld - uCamPos);
  float back = pow(max(dot(rd, uSunDir), 0.0), 2.0);
  float rim = sstep(0.55, 1.0, abs(side))*max(facing, 0.0)*(0.25 + 1.6*back);
  float round_ = sqrt(max(0.0, 1.0 - side*side));
  vec3 bark = vec3(0.045, 0.035, 0.028);
  vec3 c = bark*(uAmb*(0.5 + 0.5*round_) + uSunCol*max(facing, 0.0)*0.35*(1.0 - back)) + uSunCol*rim*0.55;
  fragColor = vec4(c, 1.0);
}`;

  var LEAF_V = `#version 300 es
layout(location=0) in vec4 aLeaf;     // x y born size
layout(location=1) in vec2 aMore;     // seed fruit
uniform mat4 uVP; uniform float uGrow; uniform float uZ; uniform float uPx; uniform float uTime; uniform float uFruit;
uniform vec2 uCrown; uniform vec3 uSunDir;
out float vSeed; out float vFruit; out float vA; out float vEdge;
void main(){
  float g = clamp((uGrow - aLeaf.z)/0.6, 0.0, 1.0);
  vec2 sway = vec2(sin(uTime*1.3 + aMore.x*20.0), cos(uTime*1.1 + aMore.x*13.0))*0.03;
  vec4 p = uVP*vec4(aLeaf.xy + sway, uZ + (aMore.x - 0.5)*1.5, 1.0);
  gl_Position = p;
  float fr = aMore.y*uFruit;
  gl_PointSize = (fr > 0.5 ? 0.35 : aLeaf.w)*g*uPx/p.w;
  vSeed = aMore.x; vFruit = fr; vA = g;
  // leaves on the side of the crown toward the light let it through
  vec2 off = (aLeaf.xy - uCrown)/vec2(4.5, 3.0);
  vEdge = clamp(dot(off, normalize(uSunDir.xy + 1e-4))*0.8 + length(off)*0.35, 0.0, 1.0);
}`;
  var LEAF_F = FILM.GLSL.geomHeader + `
in float vSeed; in float vFruit; in float vA; in float vEdge;
uniform vec3 uSunCol; uniform vec3 uAmb; uniform float uBack; uniform float uLush;
void main(){
  vec2 q = gl_PointCoord*2.0 - 1.0;
  float an = vSeed*6.283;
  q = mat2(cos(an), sin(an), -sin(an), cos(an))*q;
  q.x *= 1.45;
  float r = length(q);
  float a = smoothstep(1.0, 0.75, r)*vA;
  if (a < 0.01) discard;
  vec3 leaf = mix(vec3(0.010, 0.022, 0.007), vec3(0.022, 0.045, 0.012), vSeed);
  vec3 through = vec3(0.30, 0.50, 0.07)*uSunCol*uBack*vEdge*vEdge*(0.35 + 0.65*smoothstep(0.2, 1.0, r));
  vec3 c = leaf*(uAmb*0.6 + uSunCol*0.08) + through*0.55;
  if (vFruit > 0.5) c = vec3(1.0, 0.5, 0.16)*(uSunCol*0.3 + uAmb*1.2 + 0.05)*(0.3 + 0.7*uLush);
  fragColor = vec4(c, a);
}`;

  /* ---------- grass: blades on the hill and at our feet, each with a birth time ---------- */
  function buildBlades() {
    var r = U.rng(4242), out = [];
    // along the crest of the hill
    for (var i = 0; i < 2600; i++) {
      var x = -70 + r() * 150;
      var z = MAIN_Z + (r() - 0.5) * 2.0;
      var y = hMain(x) - 0.05 - r() * 0.15;
      var born = 0.12 + Math.abs(x - TREE_X) / 150 * 0.35 + r() * 0.25;
      out.push(x, y, z, 0.35 + r() * 0.55, 0.05 + r() * 0.04, born, r() * 6.28, r() < 0.05 ? 1 : 0);
    }
    // near the camera, tall and out of the light
    for (var j = 0; j < 900; j++) {
      var zz = -5 - r() * 9;
      var xx = (r() - 0.5) * zz * -1.9;
      out.push(xx, -1.1 + r() * 0.2, zz, 0.5 + r() * 0.8, 0.012 + r() * 0.012, 0.05 + r() * 0.3, r() * 6.28, r() < 0.08 ? 1 : 0);
    }
    return new Float32Array(out);
  }
  var BLADE_V = `#version 300 es
layout(location=0) in vec2 aV;        // x: side -1..1, y: 0..1 along the blade
layout(location=1) in vec4 aBase;     // x y z height
layout(location=2) in vec4 aInfo;     // width born phase flower
uniform mat4 uVP; uniform float uGrow; uniform float uTime; uniform float uWind;
out float vH; out float vSide; out float vFlower; out vec3 vWorld;
void main(){
  float g = clamp((uGrow - aInfo.y)/0.45, 0.0, 1.0);
  g = g*g*(3.0 - 2.0*g);
  float h = aBase.w*g;
  float lean = (sin(uTime*1.6 + aInfo.z + aBase.x*0.3)*0.5 + 0.3)*uWind*aV.y*aV.y;
  float bend = (fract(aInfo.z*7.1) - 0.5)*0.5*aV.y*aV.y;
  vec3 p = aBase.xyz + vec3((lean + bend)*h + aV.x*aInfo.x*(1.0 - aV.y*0.9), aV.y*h, 0.0);
  gl_Position = uVP*vec4(p, 1.0);
  vH = aV.y; vSide = aV.x; vFlower = aInfo.w*g; vWorld = p;
}`;
  var BLADE_F = FILM.GLSL.geomHeader + `
in float vH; in float vSide; in float vFlower; in vec3 vWorld;
uniform vec3 uSunCol; uniform vec3 uAmb; uniform vec3 uSunDir; uniform vec3 uCamPos; uniform float uLush;
void main(){
  vec3 rd = normalize(vWorld - uCamPos);
  float back = pow(max(dot(rd, uSunDir), 0.0), 3.0);
  vec3 base = mix(vec3(0.015, 0.025, 0.008), vec3(0.05, 0.085, 0.02), vH);
  vec3 c = base*(uAmb + uSunCol*0.25) + uSunCol*vec3(0.5, 0.65, 0.2)*back*vH*vH*0.5;
  fragColor = vec4(c, 1.0);
}`;

  var vaoB, vaoL, vaoG, nSegs = 0, nLeaves = 0, nBlades = 0;
  function init(gl) {
    if (bg) return;
    bg = G.program('land', BG);
    branchProg = G.program('branch', BRANCH_F, BRANCH_V);
    leafProg = G.program('leaf', LEAF_F, LEAF_V);
    bladeProg = G.program('blade', BLADE_F, BLADE_V);
    tree = buildTree();
    // branches: one quad per segment, instanced
    vaoB = gl.createVertexArray(); gl.bindVertexArray(vaoB);
    var quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 0, 1, 0, -1, 1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    var sd = new Float32Array(tree.segs.length * 8);
    tree.segs.forEach(function (s, i) { sd.set(s, i * 8); });
    var sb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, sb); gl.bufferData(gl.ARRAY_BUFFER, sd, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 32, 0); gl.vertexAttribDivisor(1, 1);
    gl.enableVertexAttribArray(2); gl.vertexAttribPointer(2, 4, gl.FLOAT, false, 32, 16); gl.vertexAttribDivisor(2, 1);
    nSegs = tree.segs.length;
    // leaves and fruit as points
    vaoL = gl.createVertexArray(); gl.bindVertexArray(vaoL);
    var ld = new Float32Array(tree.leaves.length * 6);
    tree.leaves.forEach(function (l, i) { ld.set(l, i * 6); });
    var lb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, lb); gl.bufferData(gl.ARRAY_BUFFER, ld, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 24, 0);
    gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 24, 16);
    nLeaves = tree.leaves.length;
    // grass blades: a strip of 7 vertices, instanced
    vaoG = gl.createVertexArray(); gl.bindVertexArray(vaoG);
    var strip = [];
    for (var k = 0; k <= 3; k++) { var y = k / 3; if (k < 3) strip.push(-1, y, 1, y); else strip.push(0, 1); }
    var gb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, gb); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(strip), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    var bd = buildBlades();
    var bb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, bb); gl.bufferData(gl.ARRAY_BUFFER, bd, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 32, 0); gl.vertexAttribDivisor(1, 1);
    gl.enableVertexAttribArray(2); gl.vertexAttribPointer(2, 4, gl.FLOAT, false, 32, 16); gl.vertexAttribDivisor(2, 1);
    nBlades = bd.length / 8;
    gl.bindVertexArray(null);
  }

  /* sky colour helpers on the JS side, to light the geometry like the shader lights the land */
  function sunCol(s) {
    var el = Math.asin(U.clamp(s.sunDir[1], -1, 1)) * 180 / Math.PI;
    var k = U.sstep(0, 14, el), vis = U.sstep(-2, 3, el) * s.sunI;
    var c = [U.lerp(1.0, 1.0, k), U.lerp(0.45, 0.9, k), U.lerp(0.18, 0.78, k)];
    var gl_ = s.glory * 0.05;
    return [c[0] * vis + gl_, c[1] * vis + gl_ * 0.9, c[2] * vis + gl_ * 0.75];
  }
  function ambCol(s) {
    var el = Math.asin(U.clamp(s.sunDir[1], -1, 1)) * 180 / Math.PI;
    var day = U.sstep(-12, 10, el);
    return [U.lerp(0.004, 0.16, day) + s.moon * 0.02, U.lerp(0.006, 0.20, day) + s.moon * 0.025, U.lerp(0.014, 0.30, day) + s.moon * 0.035];
  }

  /* s: { cam, sunDir, sunDisk, glory, sunI, moonDir, moon, venusDir, venus, skyRot, stars, green, lush, wet, figures,
          grow (tree clock, s), grass (grass clock, s), wind, fruit, clouds } */
  function render(t, target, s) {
    var gl = G.gl;
    G.bind(target);
    FILM.bindCommon(bg.use(), t, 0, s.cam);
    bg.setAll({
      uSunDir: s.sunDir, uSunDisk: s.sunDisk, uGlory: s.glory, uSunI: s.sunI,
      uMoonDir: s.moonDir || [0, -1, 0], uMoon: s.moon || 0, uVenusDir: s.venusDir || [0, -1, 0], uVenus: s.venus || 0,
      uSkyRot: s.skyRot || new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), uStars: s.stars || 0,
      uMwN: s.mwN || [0, 0, 1], uMwC: s.mwC || [1, 0, 0],
      uGreen: s.green, uLush: s.lush || 0, uWet: s.wet || 0, uFigures: s.figures || 0, uClouds: s.clouds || 0
    });
    G.draw();

    var sz = FILM.size(), aspect = sz[0] / sz[1];
    var vp = U.viewProj(s.cam, aspect, 0.5, 5000);
    var sc = sunCol(s), am = ambCol(s);
    var back = Math.max(0, -s.sunDir[2]) * U.sstep(-0.05, 0.1, s.sunDir[1]);
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA);
    if (s.grow > 0) {
      branchProg.use().setAll({ uVP: vp, uGrow: s.grow, uThick: U.lerp(0.25, 1.0, U.sstep(0, 3.2, s.grow)), uZ: MAIN_Z,
        uSunDir: s.sunDir, uSunCol: sc, uAmb: am, uCamPos: s.cam.pos });
      gl.bindVertexArray(vaoB);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, nSegs);
      leafProg.use().setAll({ uVP: vp, uGrow: s.grow, uZ: MAIN_Z, uPx: sz[1] / s.cam.fov * 0.5, uTime: t, uFruit: s.fruit || 0,
        uSunCol: sc, uAmb: am, uBack: back, uLush: s.lush || 0, uCrown: [TREE_X - 0.5, hMain(TREE_X) + 6.5], uSunDir: s.sunDir });
      gl.bindVertexArray(vaoL);
      gl.drawArrays(gl.POINTS, 0, nLeaves);
    }
    if (s.grass > 0) {
      bladeProg.use().setAll({ uVP: vp, uGrow: s.grass, uTime: t, uWind: s.wind != null ? s.wind : 0.2,
        uSunCol: sc, uAmb: am, uSunDir: s.sunDir, uCamPos: s.cam.pos, uLush: s.lush || 0 });
      gl.bindVertexArray(vaoG);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 7, nBlades);
    }
    gl.bindVertexArray(null);
    gl.disable(gl.BLEND);
  }

  /* sun direction from azimuth (0 = straight ahead, +right) and elevation, in degrees */
  function dir(az, el) {
    var a = az * Math.PI / 180, e = el * Math.PI / 180;
    return [Math.sin(a) * Math.cos(e), Math.sin(e), -Math.cos(a) * Math.cos(e)];
  }
  function rotY(a) { var c = Math.cos(a), s = Math.sin(a); return new Float32Array([c, 0, -s, 0, 1, 0, s, 0, c]); }
  function rotAxis(ax, a) {
    var c = Math.cos(a), s = Math.sin(a), t = 1 - c, x = ax[0], y = ax[1], z = ax[2];
    return new Float32Array([t * x * x + c, t * x * y + s * z, t * x * z - s * y, t * x * y - s * z, t * y * y + c, t * y * z + s * x,
      t * x * z + s * y, t * y * z - s * x, t * z * z + c]);
  }

  return { init: init, render: render, dir: dir, rotY: rotY, rotAxis: rotAxis, hMain: hMain, TREE_X: TREE_X, MAIN_Z: MAIN_Z };
})();
