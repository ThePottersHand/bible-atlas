/* ------------------------------------------------------------------
   Day three, first half: "Let the dry land appear." Seen from above the
   clouds of the second day: ranges push up out of the sea, water pouring
   off their shoulders, shallows turning turquoise as the land comes up,
   and at the end the first green running inland from the shore.
   ------------------------------------------------------------------ */
FILM.scenes.rise = (function () {
  var U = FILM.U, prog;

  var FRAG = FILM.GLSL.common + `
uniform vec3 uLightDir; uniform float uLightI; uniform float uSink; uniform float uRate; uniform float uGreen;

float landH(vec2 p, int oct){
  float c = fbm(p*0.00045 + vec2(3.1, 7.7), 4);
  float r = ridged(p*0.0011 + vec2(1.3, 2.9), oct);
  float h = (c - 0.5)*1000.0 + r*r*400.0*sstep(0.3, 0.6, c) + (fbm(p*0.004, 3) - 0.5)*50.0;
  return h;
}
float H(vec2 p, int oct){ return landH(p, oct) - uSink; }

vec3 skyCol(vec3 rd){
  float y = max(rd.y, 0.0), mu = dot(rd, uLightDir);
  vec3 c = mix(vec3(0.46, 0.55, 0.68), vec3(0.06, 0.15, 0.38), pow(y, 0.45));
  c = mix(c, vec3(1.4, 1.0, 0.68), 0.45*pow(max(mu, 0.0), 8.0));
  c += vec3(1.3, 0.95, 0.6)*pow(max(mu, 0.0), 120.0);
  return c;
}
vec3 lightCore(vec3 rd){
  float a = acos(min(max(dot(rd, uLightDir), 0.0), 1.0));
  return vec3(1.0, 0.9, 0.75)*uLightI*(50.0*exp(-a*a*4.0e5) + 2.0*exp(-a*a*1.5e4));
}

float trace(vec3 ro, vec3 rd, out float hitWater){
  hitWater = 0.0;
  float tw = rd.y < 0.0 ? -ro.y/rd.y : 1e9;
  float top = 700.0 - uSink;  // nothing stands higher than this
  float t = rd.y < 0.0 ? max(0.0, (top - ro.y)/rd.y) : 0.0;
  if (ro.y > top && rd.y >= 0.0) { hitWater = -1.0; return 1e9; }
  for (int i = 0; i < 140; i++){
    vec3 p = ro + rd*t;
    if (t > tw) { hitWater = 1.0; return tw; }
    float d = p.y - H(p.xz, 6);
    if (d < 0.4 + t*0.0008) return t;
    t += max(d*0.45, 1.0 + t*0.002);
    if (t > 9000.0) break;
  }
  if (tw < 1e8) { hitWater = 1.0; return tw; }
  hitWater = -1.0;
  return 1e9;
}
float shadow(vec3 p){
  float s = 1.0, t = 8.0;
  for (int i = 0; i < 28; i++){
    vec3 q = p + uLightDir*t;
    float d = q.y - H(q.xz, 4);
    s = min(s, 10.0*d/t);
    if (s < 0.0) break;
    t += max(d*0.5, 12.0 + t*0.03);
    if (q.y > 700.0) break;
  }
  return sat(s);
}

void main(){
  vec3 ro = uCamPos, rd = camRay(gl_FragCoord.xy);
  float hw;
  float t = trace(ro, rd, hw);
  vec3 col; float mask = 0.0;
  vec3 sunC = vec3(1.0, 0.86, 0.66)*uLightI*0.34;
  vec3 ambC = vec3(0.22, 0.30, 0.44)*0.45;
  if (hw < 0.0){
    col = skyCol(rd) + lightCore(rd);
    mask = 1.0;
  } else if (hw > 0.5){
    vec3 p = ro + rd*t;
    float depth = -H(p.xz, 5);                         // how far the land is below the surface here
    // two scales of swell, each fading before it can tile into a pattern
    vec2 q = p.xz*0.017 + vec2(uTime*0.25, uTime*0.18), q2 = FBM_R*p.xz*0.0045 - vec2(uTime*0.06, 0.0);
    float f1 = sat(1.0 - t/2600.0);
    vec2 g = vec2(noise(q) - noise(q + vec2(0.6, 0.0)), noise(q) - noise(q + vec2(0.0, 0.6)))*0.3*f1
           + vec2(noise(q2) - noise(q2 + vec2(0.5, 0.0)), noise(q2) - noise(q2 + vec2(0.0, 0.5)))*0.45;
    vec3 n = normalize(vec3(g.x, 1.0, g.y));
    float fres = 0.02 + 0.98*pow(1.0 - max(dot(n, -rd), 0.0), 5.0);
    vec3 rr = reflect(rd, n);
    vec3 refl = skyCol(rr) + lightCore(rr)*0.4;
    float shallow = exp(-max(depth, 0.0)*0.018);
    vec3 deep = vec3(0.003, 0.016, 0.05);
    vec3 turq = vec3(0.05, 0.36, 0.40);
    vec3 sand = vec3(0.45, 0.40, 0.30);
    vec3 water = mix(deep, turq, shallow)*(ambC*1.6 + sunC*0.25);
    water = mix(water, sand*(ambC + sunC*0.6)*0.8, shallow*shallow*shallow*0.6);
    col = mix(water, refl, fres);
    // surf where the new land meets the sea
    float foam = sstep(28.0, 0.0, depth)*(0.4 + 0.6*noise(p.xz*0.09 + uTime*0.6));
    foam *= sstep(-3.0, 4.0, depth);
    col = mix(col, vec3(0.9, 0.9, 0.88)*(ambC*1.4 + sunC*0.7), foam*0.85);
  } else {
    vec3 p = ro + rd*t;
    float e = 1.2 + t*0.0015;
    float h0 = H(p.xz, 9);
    vec3 n = normalize(vec3(H(p.xz - vec2(e, 0.0), 9) - H(p.xz + vec2(e, 0.0), 9), 2.0*e, H(p.xz - vec2(0.0, e), 9) - H(p.xz + vec2(0.0, e), 9)));
    float hgt = p.y;
    // new land is wet, and runs with water; the wet band trails the shoreline as it climbs
    float wet = exp(-max(hgt, 0.0)/(uRate*0.55 + 1.0));
    float strata = noise(vec2(p.y*0.08, 0.0) + p.xz*0.002);
    vec3 rock = mix(vec3(0.17, 0.12, 0.085), vec3(0.30, 0.23, 0.16), strata);
    rock = mix(rock, vec3(0.14, 0.13, 0.12), sstep(0.6, 0.9, 1.0 - n.y));
    float g = uGreen*sstep(0.55, 0.85, n.y)*sstep(0.0, 1.0, (uGreen*380.0 - hgt)/60.0 + (noise(p.xz*0.01) - 0.5)*1.6);
    vec3 grass = mix(vec3(0.10, 0.20, 0.05), vec3(0.20, 0.30, 0.08), noise(p.xz*0.03));
    vec3 alb = mix(rock, grass, sat(g));
    alb *= 1.0 - 0.55*wet;
    float dif = max(dot(n, uLightDir), 0.0)*shadow(p + n*2.0);
    float sky = 0.5 + 0.5*n.y;
    col = alb*(sunC*dif + ambC*sky);
    vec3 rr = reflect(rd, n);
    col += wet*(0.04 + 0.5*pow(1.0 - max(dot(n, -rd), 0.0), 4.0))*(skyCol(rr) + lightCore(rr)*0.3)*0.6;
    // water streaming down the flanks of what has just risen
    float fall = wet*sstep(0.75, 0.35, n.y)*pow(noise(vec2(dot(p.xz, n.zx*vec2(1.0, -1.0))*0.35, p.y*0.015 + uTime*3.0)), 7.0)*3.0;
    col += vec3(0.8, 0.85, 0.9)*(ambC + sunC*0.4)*fall;
  }
  // air between us and the ground
  if (hw >= 0.0){
    float fog = 1.0 - exp(-t*0.00013);
    vec3 fc = skyCol(normalize(vec3(rd.x, 0.05, rd.z)))*0.9;
    col = mix(col, fc, fog*0.85);
  }
  fragColor = vec4(col, mask);
}`;

  var camP = U.track([[20.4, [0, 1050, 1900]], [24.0, [0, 940, 1250]]]);
  var camT = U.track([[20.4, [-80, 0, -500]], [24.0, [-40, 0, -1000]]]);
  var az = -35 * Math.PI / 180, el = 11 * Math.PI / 180;
  var LDIR = [Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el)];

  function state(t) {
    var k = U.lstep(20.8, 23.2, t);
    var sink = 640 * Math.pow(1 - k, 2.2);
    var rate = 640 * 2.2 * Math.pow(1 - k, 1.2) / 2.4;       // metres per second, for the wet band
    var shake = U.sstep(20.8, 21.2, t) * (1 - U.sstep(22.6, 23.4, t));
    var p = camP(t);
    p = [p[0] + shake * 3.0 * Math.sin(t * 23.0), p[1] + shake * 2.0 * Math.sin(t * 31.0 + 1.0), p[2]];
    return { sink: sink, rate: rate + 8, green: U.sstep(23.0, 24.0, t), cam: U.camera(p, camT(t), 40, 0) };
  }

  return {
    init: function () { prog = FILM.GL.program('rise', FRAG); },
    render: function (t, local, target) {
      var s = state(t);
      FILM.GL.bind(target);
      FILM.bindCommon(prog.use(), t, local, s.cam);
      prog.set('uLightDir', LDIR).set('uLightI', 7.0).set('uSink', s.sink).set('uRate', s.rate).set('uGreen', s.green);
      FILM.GL.draw();
    },
    post: function (t) {
      var s = state(t), sz = FILM.size();
      var lp = U.project(s.cam, [s.cam.pos[0] + LDIR[0] * 1e5, s.cam.pos[1] + LDIR[1] * 1e5, s.cam.pos[2] + LDIR[2] * 1e5], sz[0] / sz[1]) || [0.3, 0.8];
      return {
        exposure: 1.0, bloom: 0.07, thresh: 1.2, star: 0.35, starLen: 0.8,
        rays: 0.2, light: [lp[0], lp[1]], raysDensity: 0.9, raysDecay: 0.96,
        sat: 1.12, contrast: 1.12, lift: [0.0, 0.002, 0.008], gain: [1.03, 1.0, 0.97], vignette: 0.55, grain: 0.02,
        pulseAmt: 0.6
      };
    }
  };
})();
