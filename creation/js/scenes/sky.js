/* ------------------------------------------------------------------
   Day five, second half: "and let birds fly above the earth." We come up
   out of the water into morning. A flock lifts off the sea and wheels
   away toward the sun, and a single white dove comes down out of the
   bright sky toward us.
   ------------------------------------------------------------------ */
FILM.scenes.sky = (function () {
  var U = FILM.U, G = FILM.GL, prog, birdProg, vao, nBirds = 0;
  var SUN = U.norm([0.42, 0.34, -0.84]);

  var FRAG = FILM.GLSL.common + `
uniform vec3 uSunDir;

vec3 skyCol(vec3 rd){
  float y = max(rd.y, 0.0), mu = dot(rd, uSunDir);
  vec3 c = mix(vec3(0.42, 0.56, 0.74), vec3(0.04, 0.15, 0.46), pow(sat(y*2.2), 0.55));
  c += vec3(1.3, 1.0, 0.7)*(0.25*pow(max(mu, 0.0), 8.0) + 0.8*pow(max(mu, 0.0), 120.0));
  c += vec3(1.0, 0.95, 0.85)*60.0*sstep(0.99992, 0.99996, mu);
  return c;
}
vec3 clouds(vec3 rd, vec3 c){
  if (rd.y < 0.01) return c;
  vec2 uv = rd.xz/(rd.y + 0.08)*1.3 + vec2(uTime*0.02, 0.0);
  float n = fbm(uv*0.9 + 3.0, 6);
  float cov = sstep(0.5, 0.72, n)*sstep(0.01, 0.12, rd.y);
  float mu = dot(rd, uSunDir);
  float thick = sstep(0.55, 0.85, n);
  vec3 lit = mix(vec3(1.05, 1.0, 0.95), vec3(0.55, 0.6, 0.7), thick*0.6);
  lit += vec3(1.4, 1.1, 0.8)*pow(max(mu, 0.0), 12.0)*(1.0 - thick)*2.0;
  return mix(c, lit, cov*0.9);
}
vec3 sea(vec3 ro, vec3 rd){
  float t = -ro.y/rd.y;
  vec3 p = ro + rd*t;
  vec2 q = p.xz*0.6 + vec2(uTime*0.5, uTime*0.3), q2 = FBM_R*p.xz*2.1 - uTime*0.8, q3 = p.xz*0.12 + uTime*0.15;
  float fade = sat(1.0 - t/200.0);
  vec2 g = vec2(noise(q + vec2(0.3, 0.0)) - noise(q), noise(q + vec2(0.0, 0.3)) - noise(q))*0.9*fade
         + vec2(noise(q2 + vec2(0.3, 0.0)) - noise(q2), noise(q2 + vec2(0.0, 0.3)) - noise(q2))*0.6*fade*fade
         + vec2(noise(q3 + vec2(0.3, 0.0)) - noise(q3), noise(q3 + vec2(0.0, 0.3)) - noise(q3))*1.0;
  vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
  vec3 rr = reflect(rd, n); rr.y = abs(rr.y);
  float fres = 0.02 + 0.98*pow(1.0 - max(dot(n, -rd), 0.0), 5.0);
  vec3 body = vec3(0.01, 0.06, 0.09) + vec3(0.03, 0.2, 0.2)*pow(max(dot(rd, uSunDir), 0.0), 4.0)*0.4;
  vec3 c = mix(body, clouds(rr, skyCol(rr)), fres);
  float haze = 1.0 - exp(-t*0.004);
  return mix(c, skyCol(normalize(vec3(rd.x, 0.02, rd.z))), haze);
}
void main(){
  vec3 ro = uCamPos, rd = camRay(gl_FragCoord.xy);
  vec3 col; float mask = 0.0;
  if (rd.y < 0.0) col = sea(ro, rd);
  else { col = clouds(rd, skyCol(rd)); mask = 1.0; }
  fragColor = vec4(col, mask);
}`;

  var BIRD_V = `#version 300 es
layout(location=0) in vec2 aCorner;
layout(location=1) in vec4 aB;        // start x, start z, launch time, seed
uniform mat4 uVP; uniform float uTime; uniform vec3 uCamRight; uniform vec3 uCamUp;
uniform vec3 uDove; uniform float uDoveOn; uniform float uDoveFlap;
out vec2 vQ; out float vFlap; out float vWhite; out float vFog;
void main(){
  float sd = aB.w;
  vec3 p; float size; float flap; float white = 0.0;
  if (sd < 0.0){
    // the dove
    p = uDove; size = 0.9; flap = uDoveFlap; white = 1.0;
  } else {
    float age = max(uTime - aB.z, 0.0);
    float lift = 1.0 - exp(-age*1.4);
    vec3 dir = normalize(vec3(0.5 + 0.3*sin(sd*21.0), 0.55 + 0.25*sin(sd*13.0), -0.35 + 0.3*sin(sd*7.0)));
    p = vec3(aB.x, 0.3, aB.y) + dir*age*(7.0 + 3.0*fract(sd*9.1))*lift;
    p += vec3(sin(age*1.7 + sd*30.0), sin(age*2.3 + sd*17.0)*0.6, 0.0)*1.2*lift;
    size = 0.55 + 0.3*fract(sd*3.7);
    flap = sin(uTime*(10.0 + 4.0*fract(sd*5.3)) + sd*40.0);
  }
  float on = sd < 0.0 ? uDoveOn : step(aB.z, uTime);
  vec3 w = p + (uCamRight*aCorner.x + uCamUp*aCorner.y)*size*on;
  gl_Position = uVP*vec4(w, 1.0);
  vQ = aCorner; vFlap = flap; vWhite = white;
  vFog = 0.0;
}`;
  var BIRD_F = FILM.GLSL.geomHeader + `
in vec2 vQ; in float vFlap; in float vWhite; in float vFog;
uniform vec3 uSunCol;
float seg(vec2 p, vec2 a, vec2 b, float ra, float rb){
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba)/dot(ba, ba), 0.0, 1.0);
  return length(pa - ba*h) - mix(ra, rb, h);
}
// a bird side-on, flying to the right; flap 1 = wings raised, -1 = lowered
float bird(vec2 p, float flap){
  float d = (length(p/vec2(0.30, 0.07)) - 1.0)*0.07;
  d = min(d, length(p - vec2(0.30, 0.04)) - 0.06);
  d = min(d, seg(p, vec2(-0.2, 0.0), vec2(-0.46, -0.02), 0.035, 0.08));
  float a = flap*1.05;
  vec2 s = vec2(0.03, 0.03), e = s + vec2(-0.08, 0.32*sin(a) + 0.04), k = e + vec2(-0.2, 0.34*sin(a*1.15) + 0.02);
  d = min(d, min(seg(p, s, e, 0.07, 0.05), seg(p, e, k, 0.05, 0.01)));
  // the far wing, a little behind
  vec2 e2 = s + vec2(-0.05, 0.24*sin(a + 0.25)), k2 = e2 + vec2(-0.16, 0.26*sin(a*1.15 + 0.25));
  d = min(d, min(seg(p, s, e2, 0.05, 0.035), seg(p, e2, k2, 0.035, 0.008)) + 0.004);
  return d;
}
// the dove coming down toward us: wings spread wide, tail fanned
float dove(vec2 p, float flap){
  float d = (length(p/vec2(0.075, 0.17)) - 1.0)*0.075;
  d = min(d, length(p - vec2(0.0, 0.15)) - 0.058);
  vec2 tp = p - vec2(0.0, -0.13);
  float tail = max(abs(tp.x) - 0.03 - max(-tp.y, 0.0)*0.45, abs(tp.y + 0.1) - 0.1);
  d = min(d, tail);
  for (int k = 0; k < 2; k++){
    float sgn = k == 0 ? 1.0 : -1.0;
    vec2 q = vec2(p.x*sgn, p.y);
    vec2 s = vec2(0.04, 0.05), w = vec2(0.24, 0.07 + 0.13*flap), tip = vec2(0.47, 0.05 + 0.26*flap);
    d = min(d, min(seg(q, s, w, 0.075, 0.065), seg(q, w, tip, 0.065, 0.03)));
    // the long flight feathers at the tip
    for (int f = 0; f < 3; f++){
      float ff = float(f);
      vec2 base = mix(w, tip, 0.55 + ff*0.18);
      d = min(d, seg(q, base, base + vec2(0.07 + ff*0.01, -0.05 - ff*0.015 + 0.05*flap), 0.022, 0.008));
    }
  }
  return d;
}
uniform float uBank;
void main(){
  vec2 q = vQ;
  if (vWhite > 0.5){
    float c = cos(uBank), s = sin(uBank);
    q = vec2(c*q.x - s*q.y, s*q.x + c*q.y);
    q.x *= q.x > 0.0 ? 1.0 : 1.25;           // turned a little: the far wing foreshortened
  }
  float d = vWhite > 0.5 ? dove(q, vFlap) : bird(q, vFlap);
  float aa = fwidth(d)*1.2;
  float a = sstep(aa, -aa, d);
  if (a < 0.01) discard;
  vec3 dark = vec3(0.02, 0.025, 0.035);
  // seen from below the dove is shaded, and the sun comes through the edges of its feathers
  float edge = sstep(-0.035, 0.0, d);
  vec3 dove = mix(vec3(0.42, 0.45, 0.52), vec3(0.95, 0.94, 0.92), 0.35 + 0.35*sstep(-0.1, 0.1, q.y)) + uSunCol*edge*1.1;
  fragColor = vec4(mix(dark, dove, vWhite), a);
}`;

  function buildBirds() {
    var r = U.rng(505), d = [-1, 0, 0, -1];   // first instance is the dove
    for (var i = 0; i < 260; i++) {
      var x = -18 + r() * 26, z = -38 - r() * 26;
      d.push(x, z, 36.35 + Math.pow(r(), 1.5) * 1.2, r());
    }
    return new Float32Array(d);
  }

  var camP = U.track([[36.3, [0, 1.1, 0]], [39.6, [0.4, 1.9, -3]]]);
  var camT = U.track([[36.3, [0, 7, -30]], [37.4, [2, 9, -30]], [39.6, [5, 13, -30]]]);
  var doveP = U.track([[36.6, [9, 18, -26]], [37.6, [4.0, 8.0, -12]], [38.3, [1.0, 4.6, -6]], [38.9, [-3.5, 3.6, -2.5]], [39.4, [-8, 3.4, 0]]]);

  function state(t) {
    var cam = U.camera(camP(t), camT(t), 52, 0.03 * Math.sin(t * 0.9));
    var glide = U.sstep(37.3, 37.6, t) * (1 - U.sstep(38.0, 38.3, t));
    var flap = U.lerp(Math.sin(t * 8.0), 0.3 + 0.08 * Math.sin(t * 2.0), glide);
    return { cam: cam, dove: doveP(t), doveOn: U.sstep(36.5, 36.9, t), flap: flap, bank: 0.25 * Math.sin(t * 1.7) - 0.2 * U.sstep(38.2, 39.0, t) };
  }

  return {
    init: function (gl) {
      prog = G.program('sky', FRAG);
      birdProg = G.program('bird', BIRD_F, BIRD_V);
      vao = gl.createVertexArray(); gl.bindVertexArray(vao);
      var q = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, q);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-0.55, -0.5, 0.55, -0.5, -0.55, 0.5, 0.55, 0.5]), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      var data = buildBirds();
      var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 0, 0); gl.vertexAttribDivisor(1, 1);
      gl.bindVertexArray(null);
      nBirds = data.length / 4;
    },
    render: function (t, local, target) {
      var gl = G.gl, s = state(t);
      G.bind(target);
      FILM.bindCommon(prog.use(), t, local, s.cam);
      prog.setAll({ uSunDir: SUN });
      G.draw();
      var sz = FILM.size();
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA);
      birdProg.use().setAll({ uVP: U.viewProj(s.cam, sz[0] / sz[1], 0.1, 500), uTime: t, uCamRight: s.cam.right, uCamUp: s.cam.up,
        uDove: s.dove, uDoveOn: s.doveOn, uDoveFlap: s.flap, uBank: s.bank, uSunCol: [1.0, 0.92, 0.78] });
      gl.bindVertexArray(vao);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, nBirds);
      gl.bindVertexArray(null);
      gl.disable(gl.BLEND);
    },
    post: function (t) {
      var s = state(t), sz = FILM.size();
      var lp = U.project(s.cam, [s.cam.pos[0] + SUN[0] * 1e4, s.cam.pos[1] + SUN[1] * 1e4, s.cam.pos[2] + SUN[2] * 1e4], sz[0] / sz[1]) || [0.8, 0.8];
      var flash = 1 - U.sstep(36.3, 36.9, t);
      return {
        exposure: 0.95 + 0.6 * flash, bloom: 0.07 + 0.2 * flash, thresh: 1.3, star: 0.5, starLen: 1.0,
        rays: 0.35, light: [lp[0], lp[1]], raysDensity: 0.9, raysDecay: 0.965,
        sat: 1.06, contrast: 1.05, lift: [0.0, 0.003, 0.008], gain: [1.03, 1.0, 0.97], vignette: 0.5, grain: 0.02,
        pulseAmt: 0.5
      };
    }
  };
})();
