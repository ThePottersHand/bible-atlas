/* ------------------------------------------------------------------
   Day six, first shot: "Let the earth bring forth living creatures."
   From the air at the end of the afternoon: rolling grassland, and
   across it rivers of animals on the move, each with a long shadow,
   the dust they raise glowing against a low sun.
   ------------------------------------------------------------------ */
FILM.scenes.plains = (function () {
  var U = FILM.U, G = FILM.GL, prog, herdProg, dustProg, vaoH, vaoD, nHerd = 0, nDust = 0;
  var SUN = U.norm([0.18, 0.13, -1.0]);

  var HEIGHT = `
float groundH(vec2 p){
  return 60.0*fbm(p*0.0028 + 3.0, 4) + 7.0*fbm(p*0.018 + 9.0, 3) - 34.0;
}`;

  var FRAG = FILM.GLSL.common + HEIGHT + `
uniform vec3 uSunDir;
vec3 skyCol(vec3 rd){
  float y = max(rd.y, 0.0), mu = dot(rd, uSunDir);
  vec3 c = mix(vec3(0.95, 0.60, 0.32), vec3(0.16, 0.24, 0.46), pow(sat(y*2.2), 0.55));
  c += vec3(1.6, 1.0, 0.5)*(0.35*pow(max(mu, 0.0), 10.0) + 1.0*pow(max(mu, 0.0), 150.0));
  c += vec3(1.0, 0.85, 0.6)*40.0*sstep(0.99990, 0.99995, mu);
  return c;
}
float trace(vec3 ro, vec3 rd){
  if (rd.y >= 0.0) return -1.0;
  float t = max(0.0, (34.0 - ro.y)/rd.y);
  for (int i = 0; i < 110; i++){
    vec3 p = ro + rd*t;
    float d = p.y - groundH(p.xz);
    if (d < 0.05 + t*0.001) return t;
    t += max(d*0.6, 0.3 + t*0.004);
    if (t > 5000.0) break;
  }
  return -1.0;
}
// scattered trees: a canopy on a trunk, and a long shadow thrown away from the sun
float treeShade(vec2 p, out float canopy){
  canopy = 0.0;
  float sh = 1.0;
  vec2 cell = floor(p/28.0);
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++){
    vec2 c = cell + vec2(float(i), float(j));
    vec2 hh = hash22(c);
    if (hh.x > 0.09) continue;
    vec2 tp = (c + 0.2 + 0.6*hh)*28.0;
    float r = 4.0 + 3.0*hh.y;
    canopy = max(canopy, sstep(r, r*0.7, length(p - tp)));
    vec2 sd = normalize(-uSunDir.xz)*(r*3.5);
    vec2 q = p - (tp + sd*0.55);
    vec2 ax = normalize(sd);
    float along = dot(q, ax), across = dot(q, vec2(-ax.y, ax.x));
    float e = length(vec2(along/(length(sd)*0.62), across/(r*0.9)));
    sh = min(sh, mix(0.35, 1.0, sstep(0.8, 1.05, e)));
  }
  return sh;
}
void main(){
  vec3 ro = uCamPos, rd = camRay(gl_FragCoord.xy);
  float t = trace(ro, rd);
  vec3 col; float mask = 0.0;
  if (t < 0.0){ col = skyCol(rd); mask = 1.0; }
  else {
    vec3 p = ro + rd*t;
    float e = 0.6 + t*0.002;
    vec3 n = normalize(vec3(groundH(p.xz - vec2(e, 0.0)) - groundH(p.xz + vec2(e, 0.0)), 2.0*e,
                            groundH(p.xz - vec2(0.0, e)) - groundH(p.xz + vec2(0.0, e))));
    float n1 = fbm(p.xz*0.02, 4), n2 = noise(p.xz*0.3);
    vec3 grass = mix(vec3(0.30, 0.20, 0.07), vec3(0.16, 0.15, 0.05), n1);
    grass = mix(grass, vec3(0.07, 0.09, 0.03), sstep(0.55, 0.72, n1)*0.8);
    grass *= 0.8 + 0.4*n2;
    float canopy;
    float sh = treeShade(p.xz, canopy);
    vec3 sunC = vec3(1.0, 0.66, 0.36)*3.4, amb = vec3(0.16, 0.20, 0.32)*0.45;
    float dif = max(dot(n, uSunDir), 0.0);
    vec3 alb = mix(grass, vec3(0.02, 0.03, 0.012), canopy);
    col = alb*(sunC*dif*sh + amb*(0.6 + 0.4*n.y));
    // sheen of the dry grass toward the sun
    col += vec3(1.0, 0.75, 0.4)*pow(max(dot(reflect(rd, n), uSunDir), 0.0), 6.0)*0.25*sh*(1.0 - canopy);
    float fog = 1.0 - exp(-t*0.00042);
    col = mix(col, skyCol(normalize(vec3(rd.x, 0.02, rd.z)))*0.8, fog);
  }
  fragColor = vec4(col, mask);
}`;

  var NOISE_V = `
uniform sampler2D uNoise;
const mat2 FBM_R = mat2(0.80, 0.60, -0.60, 0.80);
float sstep(float a, float b, float x){ float t = clamp((x-a)/(b-a), 0.0, 1.0); return t*t*(3.0-2.0*t); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return textureLod(uNoise, (i + f + 0.5)/256.0, 0.0).x; }
float fbm(vec2 p, int oct){ float v = 0.0, a = 0.5, n = 0.0;
  for (int i = 0; i < 6; i++){ if (i >= oct) break; v += a*noise(p); n += a; p = FBM_R*p*2.03 + 17.1; a *= 0.5; } return v/n; }
`;

  var HERD_V = `#version 300 es
layout(location=0) in vec2 aCorner;
layout(location=1) in vec4 aA;      // stream, along, across, seed
uniform mat4 uVP; uniform float uTime; uniform vec3 uSunDir; uniform vec3 uCamRight; uniform int uPass;
uniform vec4 uStreams[5];           // x0 z0 dirAngle speed
` + NOISE_V + HEIGHT + `
out vec2 vQ; out float vShadow; out float vSeed;
void main(){
  vec4 st = uStreams[int(aA.x)];
  vec2 dir = vec2(cos(st.z), sin(st.z)), side = vec2(-dir.y, dir.x);
  float along = aA.y + uTime*st.w*(0.9 + 0.2*fract(aA.w*5.1));
  float wob = sin(along*0.05 + aA.w*20.0)*3.0 + sin(along*0.009 + st.x)*40.0 + sin(along*0.021 + st.y)*14.0;
  vec2 xz = st.xy + dir*along + side*(aA.z + wob);
  float y = groundH(xz);
  vSeed = aA.w;
  if (uPass == 0){
    // the shadow: a strip on the ground pointing away from the sun
    vec2 sd = normalize(-uSunDir.xz), sp = vec2(-sd.y, sd.x);
    float L = 1.6/max(uSunDir.y, 0.05);
    vec2 g = xz + sd*(aCorner.y*0.5 + 0.5)*L + sp*aCorner.x*0.7;
    gl_Position = uVP*vec4(g.x, groundH(g) + 0.15, g.y, 1.0);
    vShadow = 1.0;
  } else {
    vec3 up = vec3(0.0, 1.0, 0.0);
    vec3 w = vec3(xz.x, y + 0.9 + aCorner.y*0.9, xz.y) + uCamRight*aCorner.x*1.3;
    gl_Position = uVP*vec4(w, 1.0);
    vShadow = 0.0;
  }
  vQ = aCorner;
}`;
  var HERD_F = FILM.GLSL.geomHeader + `
in vec2 vQ; in float vShadow; in float vSeed;
void main(){
  if (vShadow > 0.5){
    float a = sstep(1.0, 0.3, abs(vQ.x))*sstep(1.0, 0.6, abs(vQ.y*2.0 - 0.0 + 0.0));
    fragColor = vec4(vec3(0.03, 0.025, 0.02), 0.55*a);
    return;
  }
  // an animal side-on: body, neck, a head carried low
  vec2 p = vQ*vec2(1.3, 0.9);
  float body = length((p - vec2(0.0, 0.1))/vec2(0.7, 0.32)) - 1.0;
  float head = length((p - vec2(0.75, 0.05))/vec2(0.22, 0.2)) - 1.0;
  float legs = max(abs(fract((p.x + 0.55)*1.8) - 0.5) - 0.18, abs(p.y + 0.45) - 0.4);
  legs = max(legs, abs(p.x) - 0.62);
  float d = min(min(body, head), legs*2.0);
  float a = sstep(0.25, -0.1, d);
  if (a < 0.02) discard;
  fragColor = vec4(vec3(0.05, 0.035, 0.025)*(0.7 + 0.6*vSeed), a);
}`;

  var DUST_V = `#version 300 es
layout(location=0) in vec4 aD;      // stream, along, across, seed
uniform mat4 uVP; uniform float uTime; uniform float uPx;
uniform vec4 uStreams[5];
` + NOISE_V + HEIGHT + `
out float vA; out float vSeed;
void main(){
  vec4 st = uStreams[int(aD.x)];
  vec2 dir = vec2(cos(st.z), sin(st.z)), side = vec2(-dir.y, dir.x);
  float along = aD.y + uTime*st.w;
  float wob = sin(along*0.009 + st.x)*40.0 + sin(along*0.021 + st.y)*14.0;
  vec2 xz = st.xy + dir*(along - 8.0) + side*(aD.z + wob);
  float rise = fract(aD.w*7.0 + uTime*0.15);
  vec3 p = vec3(xz.x, groundH(xz) + 2.0 + rise*14.0, xz.y);
  vec4 cp = uVP*vec4(p, 1.0);
  gl_Position = cp;
  gl_PointSize = min((10.0 + 26.0*rise)*uPx/cp.w, 220.0);
  vA = (1.0 - rise)*sstep(0.0, 0.15, rise);
  vSeed = aD.w;
}`;
  var DUST_F = FILM.GLSL.geomHeader + `
in float vA; in float vSeed;
uniform vec3 uGlow;
void main(){
  vec2 q = gl_PointCoord*2.0 - 1.0;
  float a = exp(-dot(q, q)*3.0)*vA*0.16;
  if (a < 0.003) discard;
  fragColor = vec4(uGlow*a, a*0.25);
}`;

  // five columns of animals crossing the land, slanting toward the light
  var STREAMS = [
    [-300, -380, -1.30, 9], [-90, -560, -1.38, 11], [110, -420, -1.22, 8], [260, -700, -1.48, 10], [-420, -760, -1.12, 9]
  ];
  function build() {
    var r = U.rng(606), h = [], d = [];
    for (var i = 0; i < 5200; i++) {
      var s = Math.floor(r() * 5);
      var along = r() * 900 - 450, across = (r() + r() + r() - 1.5) * (9 + 7 * Math.sin(along * 0.015));
      h.push(s, along, across, r());
    }
    for (var j = 0; j < 700; j++) {
      var s2 = Math.floor(r() * 5);
      d.push(s2, r() * 900 - 450, (r() - 0.5) * 30, r());
    }
    return { herd: new Float32Array(h), dust: new Float32Array(d) };
  }

  var camP = U.track([[39.1, [0, 150, 260]], [42.4, [-20, 132, 150]]]);
  var camT = U.track([[39.1, [-60, -10, -500]], [42.4, [-90, -10, -620]]]);

  function streamsAt() {
    var a = [];
    STREAMS.forEach(function (s) { a.push(s[0], s[1], s[2], s[3]); });
    return new Float32Array(a);
  }

  return {
    init: function (gl) {
      prog = G.program('plains', FRAG);
      herdProg = G.program('herd', HERD_F, HERD_V);
      dustProg = G.program('dust-plains', DUST_F, DUST_V);
      var b = build();
      vaoH = gl.createVertexArray(); gl.bindVertexArray(vaoH);
      var q = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, q);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      var hb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, hb); gl.bufferData(gl.ARRAY_BUFFER, b.herd, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 0, 0); gl.vertexAttribDivisor(1, 1);
      nHerd = b.herd.length / 4;
      vaoD = gl.createVertexArray(); gl.bindVertexArray(vaoD);
      var db = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, db); gl.bufferData(gl.ARRAY_BUFFER, b.dust, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 0, 0);
      nDust = b.dust.length / 4;
      gl.bindVertexArray(null);
    },
    render: function (t, local, target) {
      var gl = G.gl, cam = U.camera(camP(t), camT(t), 34, 0);
      G.bind(target);
      FILM.bindCommon(prog.use(), t, local, cam).set('uSunDir', SUN);
      G.draw();
      var sz = FILM.size(), vp = U.viewProj(cam, sz[0] / sz[1], 1, 8000), st = streamsAt();
      var lt = t - 39.0;
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE);
      FILM.bindCommon(herdProg.use(), lt, local, null);
      herdProg.setAll({ uVP: vp, uTime: lt, uSunDir: SUN, uCamRight: cam.right, uStreams: st, uPass: 0 });
      gl.bindVertexArray(vaoH);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, nHerd);
      herdProg.set('uPass', 1);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, nHerd);
      // dust, added as light
      gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE);
      FILM.bindCommon(dustProg.use(), lt, local, null);
      dustProg.setAll({ uVP: vp, uTime: lt, uPx: sz[1] / cam.fov * 0.5, uStreams: st, uGlow: [1.4, 0.95, 0.55] });
      gl.bindVertexArray(vaoD);
      gl.drawArrays(gl.POINTS, 0, nDust);
      gl.bindVertexArray(null);
      gl.disable(gl.BLEND);
    },
    post: function (t) {
      var cam = U.camera(camP(t), camT(t), 34, 0), sz = FILM.size();
      var lp = U.project(cam, [cam.pos[0] + SUN[0] * 1e5, cam.pos[1] + SUN[1] * 1e5, cam.pos[2] + SUN[2] * 1e5], sz[0] / sz[1]) || [0.6, 0.9];
      return {
        exposure: 0.95, bloom: 0.08, thresh: 1.2, star: 0.4, starLen: 0.9,
        rays: 0.35, light: [lp[0], lp[1]], raysDensity: 0.9, raysDecay: 0.965,
        sat: 1.1, contrast: 1.08, lift: [0.01, 0.004, 0.0], gain: [1.05, 0.99, 0.92], vignette: 0.6, grain: 0.022,
        pulseAmt: 0.5
      };
    }
  };
})();
