/* ------------------------------------------------------------------
   Day five, first half: "Let the waters swarm." Beneath the surface,
   looking up into the bright window of the sky: shafts of light, a
   shoal of silver fish turning in a slow vortex, and a humpback passing
   overhead with its long fins spread like wings, its shadow cutting the
   light. The camera rises and breaks the surface.
   ------------------------------------------------------------------ */
FILM.scenes.under = (function () {
  var U = FILM.U, G = FILM.GL, prog, fishProg, vao, nFish = 0;

  var FRAG = FILM.GLSL.common + `
uniform vec3 uSunDir; uniform vec3 uWhale; uniform float uWhaleAng; uniform float uWhaleLen; uniform float uFin;

vec2 surfGrad(vec2 p){
  vec2 q = p*0.6 + vec2(uTime*0.35, uTime*0.22);
  vec2 q2 = FBM_R*p*1.7 - vec2(uTime*0.5, -uTime*0.3);
  float a = noise(q), b = noise(q + vec2(0.4, 0.0)), c = noise(q + vec2(0.0, 0.4));
  float d = noise(q2), e = noise(q2 + vec2(0.4, 0.0)), f = noise(q2 + vec2(0.0, 0.4));
  return vec2(b - a, c - a)*0.9 + vec2(e - d, f - d)*0.45;
}
// bright webs of light that the waves focus on the water below
float caustic(vec2 p){
  vec2 q = p*0.55 + vec2(uTime*0.3, uTime*0.2);
  float n1 = noise(q), n2 = noise(FBM_R*q*1.7 - uTime*0.25);
  float w = 1.0 - abs(n1 - n2)*3.2;
  return pow(sat(w), 5.0);
}
float segSDF(vec2 p, vec2 a, vec2 b, float ra, float rb){
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba)/dot(ba, ba), 0.0, 1.0);
  return length(pa - ba*h) - mix(ra, rb, h);
}
// a humpback seen from below: body, tail stock, flukes and the long pectoral fins
float whale(vec2 p){
  vec2 w = p - uWhale.xz;
  float c = cos(uWhaleAng), s = sin(uWhaleAng);
  w = vec2(c*w.x + s*w.y, -s*w.x + c*w.y)/uWhaleLen;
  w.y *= 0.55;                                  // seen from below at a slant: widen so the fins still read
  float sway = 0.02*sin(uTime*1.3 - w.x*4.0);
  w.y += sway*(0.5 - w.x);
  vec2 e = w - vec2(0.12, 0.0);
  float body = (length(e/vec2(0.34, 0.12)) - 1.0)*0.11;
  body = min(body, segSDF(w, vec2(-0.02, 0.0), vec2(-0.38, 0.0), 0.10, 0.022));
  float fl = 0.16 + 0.02*sin(uTime*1.3);
  body = min(body, segSDF(w, vec2(-0.37, 0.0), vec2(-0.47, fl), 0.035, 0.008));
  body = min(body, segSDF(w, vec2(-0.37, 0.0), vec2(-0.47, -fl), 0.035, 0.008));
  float spread = 0.44 + 0.03*sin(uFin);
  body = min(body, min(segSDF(w, vec2(0.17, 0.08), vec2(0.05, 0.24), 0.05, 0.04), segSDF(w, vec2(0.05, 0.24), vec2(-0.12, spread), 0.04, 0.012)));
  body = min(body, min(segSDF(w, vec2(0.17, -0.08), vec2(0.05, -0.24), 0.05, 0.04), segSDF(w, vec2(0.05, -0.24), vec2(-0.12, -spread), 0.04, 0.012)));
  return body*uWhaleLen;
}

vec3 waterCol(vec3 rd){
  vec3 deep = vec3(0.002, 0.016, 0.040), mid = vec3(0.012, 0.085, 0.14), up = vec3(0.05, 0.30, 0.38);
  float y = rd.y;
  vec3 c = y < 0.0 ? mix(mid, deep, sat(-y*1.6)) : mix(mid, up, pow(sat(y), 0.8));
  return c;
}

void main(){
  vec3 ro = uCamPos, rd = camRay(gl_FragCoord.xy);
  vec3 col = waterCol(rd);
  float tSurf = rd.y > 0.0 ? -ro.y/rd.y : 1e9;
  float mask = 0.0;
  vec3 Lw = normalize(vec3(uSunDir.x*0.75, 1.0, uSunDir.z*0.75));   // the sun, bent by the surface
  if (rd.y > 0.0){
    vec3 p = ro + rd*tSurf;
    vec2 g = surfGrad(p.xz)*sat(1.0 - tSurf/120.0);
    vec3 n = normalize(vec3(-g.x, -1.0, -g.y));
    float cosi = dot(rd, -n);
    float sint = 1.33*sqrt(max(0.0, 1.0 - cosi*cosi));
    vec3 sc;
    if (sint < 1.0){
      vec3 tr = refract(rd, n, 1.33);
      float mu = max(dot(tr, uSunDir), 0.0);
      sc = vec3(0.55, 0.78, 0.95)*1.2 + vec3(1.0, 0.95, 0.85)*(8.0*pow(mu, 400.0) + 1.2*pow(mu, 12.0));
      float edge = sstep(1.0, 0.9, sint);
      sc = mix(waterCol(reflect(rd, n))*1.5, sc, edge);
      mask = edge;
    } else {
      sc = waterCol(reflect(rd, n))*1.3;
    }
    float fog = 1.0 - exp(-tSurf*0.06);
    col = mix(sc, col, fog);
    mask *= 1.0 - fog;
  }
  // the whale, dark against the light
  float wy = uWhale.y;
  if (rd.y > 0.0 && ro.y < wy){
    float tw = (wy - ro.y)/rd.y;
    vec3 p = ro + rd*tw;
    float d = whale(p.xz);
    float soft = 0.06 + tw*0.004;
    float cov = sstep(soft, -soft, d);
    if (cov > 0.0){
      vec3 wc = vec3(0.006, 0.02, 0.03) + vec3(0.1, 0.25, 0.3)*sstep(-0.35, 0.0, d)*0.4;
      float fog = 1.0 - exp(-tw*0.028);
      wc = mix(wc, waterCol(rd), fog);
      col = mix(col, wc, cov);
      mask *= 1.0 - cov;
    }
  }
  // shafts of light, broken by the whale's shadow
  float tEnd = min(tSurf, 38.0);
  const int N = 28;
  float dt = tEnd/float(N);
  float t = dt*hash21(gl_FragCoord.xy + floor(uTime*30.0)*vec2(7.0, 13.0));
  vec3 shaft = vec3(0.0);
  for (int i = 0; i < N; i++){
    vec3 s = ro + rd*t;
    float depth = -s.y;
    vec2 at = s.xz + Lw.xz/Lw.y*depth;
    float c = caustic(at*0.35);
    if (s.y < wy){
      vec2 ws = s.xz + Lw.xz/Lw.y*(wy - s.y);
      c *= sstep(-0.2, 0.6, whale(ws));
    }
    shaft += vec3(0.35, 0.75, 0.8)*c*exp(-depth*0.09)*exp(-t*0.035);
    t += dt;
  }
  col += shaft*dt*0.12*pow(max(dot(rd, Lw), 0.0), 2.0);
  fragColor = vec4(col, mask);
}`;

  var FISH_V = `#version 300 es
layout(location=0) in vec4 aFish;    // radius, angle, height, seed
uniform mat4 uVP; uniform float uTime; uniform vec3 uCentre; uniform float uPx; uniform vec3 uCamPos;
out float vSeed; out float vAng; out float vLight; out float vFog;
vec3 tilt(vec3 v){ float c = 0.82, s = 0.57; return vec3(v.x, c*v.y - s*v.z, s*v.y + c*v.z); }
void main(){
  float r = aFish.x, a0 = aFish.y, h = aFish.z, sd = aFish.w;
  float w = (0.55 + 0.35*fract(sd*7.3))*(1.8/(0.6 + r*0.3));
  float a = a0 + uTime*w;
  // a ball, not a disc: each fish circles on its own shell and latitude
  float lat = h;
  float rr = r*cos(lat)*(1.0 + 0.1*sin(uTime*0.7 + sd*20.0));
  float yy = r*sin(lat) + 0.35*sin(a*2.0 + sd*11.0);
  vec3 p = uCentre + tilt(vec3(cos(a)*rr, yy, sin(a)*rr));
  vec3 v = tilt(vec3(-sin(a), 0.2*cos(a*2.0 + sd*11.0), cos(a)));
  vec4 cp = uVP*vec4(p, 1.0);
  vec4 cq = uVP*vec4(p + v*0.3, 1.0);
  vec2 dir = cq.xy/cq.w - cp.xy/cp.w;
  vAng = atan(dir.y, dir.x*1.0);
  gl_Position = cp;
  gl_PointSize = clamp(0.42*uPx/cp.w, 2.5, 60.0);
  vSeed = sd;
  // a fish flashes when it turns its side to the light
  vLight = pow(0.5 + 0.5*sin(a*1.0 + sd*40.0 + uTime*0.8), 6.0);
  vFog = exp(-length(p - uCamPos)*0.05);
}`;
  var FISH_F = FILM.GLSL.geomHeader + `
in float vSeed; in float vAng; in float vLight; in float vFog;
uniform vec3 uWater;
void main(){
  vec2 q = gl_PointCoord*2.0 - 1.0;
  q.y = -q.y;
  float c = cos(-vAng), s = sin(-vAng);
  q = vec2(c*q.x - s*q.y, s*q.x + c*q.y);
  // a slim body with a forked tail
  float body = length(q/vec2(0.62, 0.17)) - 1.0;
  vec2 tq = q - vec2(-0.72, 0.0);
  float tail = max(abs(tq.y) - 0.05 - max(-tq.x, 0.0)*0.9, abs(tq.x + 0.08) - 0.14);
  float d = min(body, tail*4.0);
  float a = sstep(0.15, -0.15, d);
  if (a < 0.02) discard;
  vec3 silver = mix(vec3(0.10, 0.18, 0.22), vec3(0.55, 0.75, 0.80), 0.5 + 0.5*q.y*3.0);
  vec3 col = silver*(0.35 + 2.2*vLight);
  col = mix(uWater, col, vFog);
  fragColor = vec4(col, a*0.95);
}`;

  function buildFish() {
    var r = U.rng(91), d = [];
    for (var i = 0; i < 4200; i++) {
      var rad = 1.0 + Math.pow(r(), 0.5) * 3.6;
      d.push(rad, r() * 6.283, Math.asin(r() * 2 - 1) * 0.9, r());
    }
    return new Float32Array(d);
  }

  var camP = U.track([[33.0, [0, -11.0, 4]], [35.3, [0.5, -10.0, 0]], [36.35, [1.0, -0.4, -5]]]);
  var camT = U.track([[33.0, [-2, 3.5, -15]], [35.3, [-1, 5.5, -16]], [36.35, [1.5, 9.0, -12]]]);
  var whaleP = U.track([[33.0, [19, -4.2, -11]], [37.0, [-17, -4.2, -6]]]);

  function state(t) {
    var p = camP(t), cam = U.camera(p, camT(t), 58, 0.05 * Math.sin(t * 0.7));
    return { cam: cam, whale: whaleP(t), fin: t * 1.1 };
  }

  return {
    init: function (gl) {
      prog = G.program('under', FRAG);
      fishProg = G.program('fish', FISH_F, FISH_V);
      vao = gl.createVertexArray(); gl.bindVertexArray(vao);
      var data = buildFish();
      var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 0, 0);
      gl.bindVertexArray(null);
      nFish = data.length / 4;
    },
    render: function (t, local, target) {
      var gl = G.gl, s = state(t);
      G.bind(target);
      FILM.bindCommon(prog.use(), t, local, s.cam);
      prog.setAll({ uSunDir: U.norm([0.25, 0.8, -0.45]), uWhale: s.whale, uWhaleAng: Math.atan2(-5, 36) + Math.PI, uWhaleLen: 14.0, uFin: s.fin });
      G.draw();
      var sz = FILM.size();
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA);
      fishProg.use().setAll({ uVP: U.viewProj(s.cam, sz[0] / sz[1], 0.1, 200), uTime: t, uCentre: [-4.5, -8.0 + 0.3 * Math.sin(t * 0.5), -14],
        uPx: sz[1] / s.cam.fov * 0.5, uCamPos: s.cam.pos, uWater: [0.012, 0.085, 0.14] });
      gl.bindVertexArray(vao);
      gl.drawArrays(gl.POINTS, 0, nFish);
      gl.bindVertexArray(null);
      gl.disable(gl.BLEND);
    },
    post: function (t) {
      var s = state(t), sz = FILM.size();
      var lp = U.project(s.cam, [s.cam.pos[0] + 2, s.cam.pos[1] + 10, s.cam.pos[2] - 4], sz[0] / sz[1]) || [0.55, 0.95];
      var up = U.sstep(35.6, 36.3, t);
      return {
        exposure: 1.0 + 0.8 * up, bloom: 0.08 + 0.2 * up, thresh: 1.0, star: 0.25, starLen: 0.6,
        rays: 0.5, light: [lp[0], lp[1]], raysDensity: 0.8, raysDecay: 0.96,
        sat: 1.05, contrast: 1.05, lift: [0.0, 0.006, 0.01], gain: [0.95, 1.02, 1.04], vignette: 0.7, grain: 0.024,
        pulseAmt: 0.6
      };
    }
  };
})();
