/* ------------------------------------------------------------------
   Day six: "Let us make man in our image." At dusk the dust of the
   ground lifts and turns and gathers into a man, kneeling with his head
   bowed. Light comes down into him, runs through him like breath, and he
   rises, lifts his head and opens his hands toward the light.
   The figure is ~50k particles hung on a twenty-joint skeleton whose
   pose is interpolated between kneeling, half-risen and standing.
   ------------------------------------------------------------------ */
FILM.scenes.dust = (function () {
  var U = FILM.U, G = FILM.GL, prog, pProg, vao, nP = 0;
  var LIGHT = U.norm([-0.35, 0.10, -1.0]);

  /* joints: 0 pelvis 1 chest 2 neck 3 head 4-7 left arm 8-11 right arm 12-15 left leg 16-19 right leg */
  var STAND = [
    [0, 0.98, 0], [0, 1.30, 0.0], [0, 1.50, 0.01], [0, 1.615, 0.05],
    [-0.19, 1.44, 0.01], [-0.29, 1.2, -0.1], [-0.38, 1.02, -0.26], [-0.42, 0.95, -0.36],
    [0.19, 1.44, 0.01], [0.29, 1.2, -0.1], [0.38, 1.02, -0.26], [0.42, 0.95, -0.36],
    [-0.1, 0.95, 0], [-0.11, 0.52, -0.02], [-0.11, 0.08, 0.02], [-0.12, 0.02, -0.16],
    [0.1, 0.95, 0], [0.11, 0.52, -0.02], [0.11, 0.08, 0.02], [0.12, 0.02, -0.16]
  ];
  var HALF = [
    [0, 0.62, 0.1], [0, 0.93, 0.02], [0, 1.13, -0.07], [0, 1.25, -0.14],
    [-0.19, 1.08, -0.02], [-0.25, 0.83, -0.1], [-0.23, 0.6, -0.24], [-0.22, 0.51, -0.33],
    [0.19, 1.08, -0.02], [0.23, 0.85, -0.2], [0.18, 0.64, -0.36], [0.15, 0.57, -0.46],
    [-0.1, 0.6, 0.1], [-0.11, 0.08, -0.05], [-0.11, 0.08, 0.38], [-0.11, 0.02, 0.52],
    [0.1, 0.6, 0.1], [0.11, 0.55, -0.38], [0.11, 0.08, -0.4], [0.12, 0.02, -0.56]
  ];
  var KNEEL = [
    [0, 0.5, 0.2], [0, 0.8, 0.06], [0, 0.97, -0.07], [0, 1.0, -0.2],
    [-0.19, 0.92, 0.0], [-0.21, 0.66, -0.07], [-0.15, 0.5, -0.26], [-0.13, 0.46, -0.38],
    [0.19, 0.92, 0.0], [0.21, 0.66, -0.07], [0.15, 0.5, -0.26], [0.13, 0.46, -0.38],
    [-0.1, 0.48, 0.2], [-0.11, 0.1, -0.28], [-0.11, 0.1, 0.2], [-0.11, 0.03, 0.34],
    [0.1, 0.48, 0.2], [0.11, 0.1, -0.28], [0.11, 0.1, 0.2], [0.11, 0.03, 0.34]
  ];
  /* bones: joint a, joint b, radius at a, radius at b, lateral stretch (x) of the cross-section */
  var BONES = [
    [0, 20, 0.105, 0.098, 1.6], [20, 1, 0.098, 0.115, 1.5], [1, 2, 0.112, 0.06, 1.55], [2, 4, 0.062, 0.058, 1.0], [2, 8, 0.062, 0.058, 1.0],
    [12, 16, 0.1, 0.1, 1.0],
    [2, 3, 0.05, 0.045, 1.0],
    [4, 5, 0.056, 0.046, 1.0], [5, 6, 0.045, 0.035, 1.0], [6, 7, 0.035, 0.02, 1.3],
    [8, 9, 0.056, 0.046, 1.0], [9, 10, 0.045, 0.035, 1.0], [10, 11, 0.035, 0.02, 1.3],
    [12, 13, 0.088, 0.058, 1.0], [13, 14, 0.055, 0.036, 1.0], [14, 15, 0.036, 0.025, 1.4],
    [16, 17, 0.088, 0.058, 1.0], [17, 18, 0.055, 0.036, 1.0], [18, 19, 0.036, 0.025, 1.4]
  ];
  var HEAD = 3;

  /* the frame a bone's cross-section is measured in; must match the vertex shader */
  function frame(b, P) {
    var A = P[b[0]], B = P[b[1]];
    var d = U.norm(U.sub(B, A));
    var side = U.norm(U.cross(d, Math.abs(d[1]) > 0.9 ? [0, 0, 1] : [0, 1, 0]));
    if (b[4] > 1.2) side = U.norm([1 - d[0] * d[0], -d[0] * d[1], -d[0] * d[2]]);
    return { A: A, B: B, d: d, side: side, fwd: U.cross(side, d), len: Math.hypot(B[0] - A[0], B[1] - A[1], B[2] - A[2]) };
  }
  function radiusAt(b, u) { return (b[2] + (b[3] - b[2]) * u) * (1 + (b[4] > 1.2 ? 0.0 : 0.14) * Math.sin(Math.PI * u)); }
  function inside(p, skip) {
    for (var j = 0; j < BONES.length; j++) {
      if (j === skip) continue;
      var b = BONES[j], f = frame(b, STAND);
      var ap = U.sub(p, f.A), u = (ap[0] * f.d[0] + ap[1] * f.d[1] + ap[2] * f.d[2]) / f.len;
      if (u < -0.05 || u > 1.05) continue;
      u = U.clamp(u, 0, 1);
      var c = [f.A[0] + f.d[0] * f.len * u, f.A[1] + f.d[1] * f.len * u, f.A[2] + f.d[2] * f.len * u];
      var rv = U.sub(p, c), R = radiusAt(b, u);
      var x = (rv[0] * f.side[0] + rv[1] * f.side[1] + rv[2] * f.side[2]) / (R * b[4]);
      var y = (rv[0] * f.fwd[0] + rv[1] * f.fwd[1] + rv[2] * f.fwd[2]) / R;
      if (x * x + y * y < 0.9) return true;
    }
    if (skip !== -1) {
      var h = STAND[HEAD], q = [(p[0] - h[0]) / 0.095, (p[1] - h[1]) / 0.118, (p[2] - h[2]) / 0.105];
      if (q[0] * q[0] + q[1] * q[1] + q[2] * q[2] < 0.9) return true;
    }
    return false;
  }
  function build() {
    var r = U.rng(2701), out = [];
    function push(kind, bi, u, th, rr, seed) {
      // kind 0 = bone, 1 = head, 2 = loose dust; each grain also has a place on the ground to rise from
      var ang = r() * 6.283, dist = 0.4 + Math.pow(r(), 0.7) * 3.2;
      out.push(kind, bi, u, th, rr, seed, Math.cos(ang) * dist, Math.sin(ang) * dist - 0.2);
    }
    // surface density per square metre, the same everywhere; hidden grains (inside another limb) are dropped
    var DENS = 64000;
    BONES.forEach(function (b, i) {
      var f = frame(b, STAND);
      var area = f.len * (b[2] + b[3]) * Math.PI * (b[4] > 1.2 ? 1.25 : 1.0);
      var n = Math.round(DENS * area);
      for (var k = 0; k < n; k++) {
        var u = r(), th = r() * 6.283, R = radiusAt(b, u);
        var c = [f.A[0] + f.d[0] * f.len * u, f.A[1] + f.d[1] * f.len * u, f.A[2] + f.d[2] * f.len * u];
        var o = [f.side[0] * Math.cos(th) * b[4] + f.fwd[0] * Math.sin(th), f.side[1] * Math.cos(th) * b[4] + f.fwd[1] * Math.sin(th),
          f.side[2] * Math.cos(th) * b[4] + f.fwd[2] * Math.sin(th)];
        var p = [c[0] + o[0] * R, c[1] + o[1] * R, c[2] + o[2] * R];
        if (inside(p, i)) continue;
        push(0, i, u, th, 0.9 + 0.1 * Math.sqrt(r()), r());
      }
    });
    var nh = Math.round(DENS * 4 * Math.PI * 0.09 * 0.09 * 1.1);
    for (var h = 0; h < nh; h++) {
      var z = r() * 2 - 1, th2 = r() * 6.283;
      pushHead(0, z, th2);
    }
    // the face and jaw, a smaller shape forward and below the crown
    for (var f2 = 0; f2 < nh * 0.35; f2++) pushHead(1, r() * 2 - 1, r() * 6.283);
    function pushHead(face, z, th) {
      var ang = r() * 6.283, dist = 0.4 + Math.pow(r(), 0.7) * 3.2;
      out.push(1, HEAD, z, th, 0.93 + 0.07 * Math.sqrt(r()), r(), Math.cos(ang) * dist, face);
    }
    // loose dust that never becomes the man: it turns around him and drifts
    for (var d = 0; d < 9000; d++) push(2, 0, r(), r() * 6.283, r(), r());
    return new Float32Array(out);
  }

  var BG = FILM.GLSL.common + `
uniform vec3 uLight; uniform float uDusk;
vec3 skyCol(vec3 rd){
  float y = max(rd.y, 0.0), mu = dot(rd, uLight);
  vec3 c = mix(vec3(0.55, 0.26, 0.12), vec3(0.030, 0.045, 0.11), pow(sat(y*3.0), 0.45));
  c = mix(c, vec3(0.010, 0.014, 0.040), sstep(0.35, 1.0, y));
  c += vec3(1.3, 0.55, 0.2)*(0.5*pow(max(mu, 0.0), 6.0) + 0.9*pow(max(mu, 0.0), 40.0))*sstep(0.25, 0.0, y);
  return c*uDusk;
}
void main(){
  vec3 ro = uCamPos, rd = camRay(gl_FragCoord.xy);
  vec3 col; float mask = 0.0;
  // low hills on the horizon
  float hz = 0.012 + 0.018*fbm(vec2(atan(rd.x, -rd.z)*6.0, 0.5), 4);
  if (rd.y < hz){
    if (rd.y < 0.0){
      float t = -ro.y/rd.y;
      vec3 p = ro + rd*t;
      float n = fbm(p.xz*1.8, 5), n2 = noise(p.xz*9.0);
      vec3 earth = vec3(0.05, 0.035, 0.025)*(0.6 + 0.6*n)*(0.8 + 0.4*n2);
      // the ground catches the last light where it faces it
      vec3 rr = reflect(rd, normalize(vec3((n2 - 0.5)*0.3, 1.0, (n - 0.5)*0.3)));
      col = earth*(0.4 + 1.5*skyCol(normalize(vec3(rd.x, 0.05, rd.z)))) + skyCol(rr)*0.05;
      float fog = 1.0 - exp(-t*0.012);
      col = mix(col, skyCol(normalize(vec3(rd.x, 0.004, rd.z)))*0.35, fog);
    } else {
      col = skyCol(vec3(rd.x, 0.0, rd.z))*0.25;
    }
  } else {
    col = skyCol(rd);
    // the first stars
    vec3 q = rd*300.0;
    float h = hash31(floor(q));
    col += vec3(0.9, 0.95, 1.0)*step(0.9965, h)*0.25*sstep(0.1, 0.4, rd.y)*uDusk;
    mask = 1.0;
  }
  fragColor = vec4(col, mask);
}`;

  var PV = `#version 300 es
layout(location=0) in vec4 aA;      // kind, bone, u, theta
layout(location=1) in vec4 aB;      // radius frac, seed, start x, start z
uniform mat4 uVP; uniform vec3 uJ[21]; uniform vec4 uBone[19]; uniform vec4 uBoneR[19];
uniform float uTime; uniform float uGather; uniform float uBreath; uniform float uRise;
uniform vec3 uCamPos; uniform float uFocus; uniform float uPx; uniform vec3 uLight; uniform vec3 uChest;
out vec3 vCol; out float vAlpha;
float h(float x){ return fract(sin(x*127.1)*43758.5453); }
void main(){
  float kind = aA.x, seed = aB.y;
  vec3 formed;
  vec3 nrm = vec3(0.0, 1.0, 0.0);
  if (kind < 0.5){
    vec4 b = uBone[int(aA.y)], br = uBoneR[int(aA.y)];
    vec3 A = uJ[int(b.x)], B = uJ[int(b.y)];
    vec3 d = normalize(B - A + 1e-5);
    vec3 side = normalize(cross(d, abs(d.y) > 0.9 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0)));
    // keep the wide axis of the trunk across the body
    if (br.w > 1.2) side = normalize(vec3(1.0, 0.0, 0.0) - d*d.x);
    vec3 fwd = cross(side, d);
    float rad = mix(br.x, br.y, aA.z)*(1.0 + (br.w > 1.2 ? 0.0 : 0.14)*sin(3.14159*aA.z))*aB.x;
    nrm = side*cos(aA.w)*br.w + fwd*sin(aA.w);
    formed = mix(A, B, aA.z) + nrm*rad;
    nrm = normalize(nrm);
  } else if (kind < 1.5){
    vec3 d = normalize(uJ[3] - uJ[2]);
    vec3 fw = normalize(cross(d, vec3(1.0, 0.0, 0.0)));
    vec3 sd = cross(fw, d);
    float z = aA.z, r = sqrt(max(0.0, 1.0 - z*z));
    vec3 loc = aB.w > 0.5 ? vec3(r*cos(aA.w)*0.058, z*0.07, r*sin(aA.w)*0.062) : vec3(r*cos(aA.w)*0.076, z*0.108, r*sin(aA.w)*0.094);
    vec3 c = uJ[3] + (aB.w > 0.5 ? fw*0.05 - d*0.05 : vec3(0.0));
    vec3 s = sd*loc.x + d*loc.y + fw*loc.z;
    nrm = normalize(s);
    formed = c + s*aB.x;
  } else {
    formed = vec3(0.0, 0.8, 0.0);
  }
  // before it is formed each grain lies on the ground; it rises, turns about the figure, and settles
  vec3 ground = kind > 0.5 && kind < 1.5 ? vec3(aB.z, 0.02, -0.2 + 2.0*(h(seed*4.3) - 0.5)) : vec3(aB.z, 0.01 + 0.02*h(seed*9.0), aB.w);
  float delay = h(seed*3.7)*0.55;
  float g = clamp((uGather - delay)/0.45, 0.0, 1.0);
  g = g*g*(3.0 - 2.0*g);
  float lift = clamp(uGather*1.6 - h(seed*5.1)*0.6, 0.0, 1.0);
  float ang = (1.0 - g)*(2.5 + 3.0*h(seed*2.3))*lift + uTime*0.25*(1.0 - g);
  vec3 rel = ground - vec3(0.0, 0.0, -0.2);
  float ca = cos(ang), sa = sin(ang);
  vec3 swirl = vec3(ca*rel.x - sa*rel.z, 0.0, sa*rel.x + ca*rel.z)*(1.0 - 0.45*lift) + vec3(0.0, -0.2*0.0, -0.2);
  swirl.y = ground.y + lift*(0.25 + 1.6*h(seed*6.1))*(1.0 - g) + sin(uTime*1.3 + seed*30.0)*0.04*lift;
  vec3 p = mix(swirl, formed, kind > 1.5 ? 0.0 : g);
  if (kind > 1.5){
    // loose dust keeps drifting upward in the light
    float tt = fract(h(seed*1.9) + uTime*0.035);
    p = vec3(aB.z*1.3, 0.05 + tt*2.6, aB.w*1.3 - 0.4) + vec3(sin(uTime*0.4 + seed*20.0), 0.0, cos(uTime*0.3 + seed*11.0))*0.3;
  }
  vec4 cp = uVP*vec4(p, 1.0);
  gl_Position = cp;
  // depth of field: grains off the focal plane swell into soft discs
  float coc = abs(cp.w - uFocus)*0.045;
  gl_PointSize = clamp((0.0055 + coc)*uPx/cp.w, 1.0, 64.0);
  float spread = 1.0/(1.0 + coc*coc*uPx*uPx/(cp.w*cp.w)*0.8);
  // colour: dust lit from behind by the dusk, then the breath runs out from the chest
  vec3 V = normalize(uCamPos - p);
  float facing = abs(dot(nrm, V));
  float rim = pow(max(dot(nrm, uLight), 0.0), 1.5)*(0.35 + 0.65*pow(1.0 - facing, 2.0));
  float fill = 0.25 + 0.2*nrm.y;
  vec3 dustC = vec3(0.26, 0.16, 0.09)*(fill + 2.2*rim);
  float wave = clamp((uBreath*1.5 - length(formed - uChest))/0.25, 0.0, 1.0);
  wave *= kind > 1.5 ? 0.0 : 1.0;
  vec3 alive = vec3(1.0, 0.66, 0.38)*(fill*0.55 + 2.8*rim)*0.5 + vec3(1.0, 0.8, 0.55)*0.035;
  float flash = exp(-pow((uBreath*1.5 - length(formed - uChest))/0.12, 2.0))*(1.0 - clamp(uBreath - 1.0, 0.0, 1.0));
  vCol = mix(dustC, alive, wave) + vec3(1.0, 0.9, 0.7)*flash*0.9*(kind > 1.5 ? 0.0 : 1.0);
  if (kind > 1.5) vCol = vec3(0.9, 0.55, 0.28)*(0.5 + 0.8*rim)*0.6;
  float vis = kind > 1.5 ? 0.35*uGather : mix(0.35, 1.0, g)*step(0.001, uGather + 0.001);
  vAlpha = vis*spread;
}`;
  var PF = FILM.GLSL.geomHeader + `
in vec3 vCol; in float vAlpha;
void main(){
  vec2 q = gl_PointCoord*2.0 - 1.0;
  float a = sstep(1.0, 0.55, length(q))*vAlpha;
  if (a < 0.003) discard;
  fragColor = vec4(vCol*a, 0.0);
}`;

  var camP = U.track([[41.6, [3.8, 0.55, 2.2]], [47.4, [3.0, 0.72, 1.1]], [48.6, [3.2, 0.8, 1.1]], [51.0, [4.3, 1.0, 1.4]]]);
  var camT = U.track([[41.6, [-0.3, 0.45, -1.3]], [47.4, [-0.2, 0.62, -1.1]], [48.6, [-0.2, 0.7, -1.1]], [51.0, [-0.3, 0.9, -1.4]]]);

  function lerpPose(a, b, k) { return a.map(function (j, i) { return U.mix3(j, b[i], k); }); }
  function withWaist(P) {
    var a = P[0], c = P[1];
    return P.concat([[(a[0] + c[0]) / 2, (a[1] + c[1]) / 2, (a[2] + c[2]) / 2 - 0.01]]);
  }
  STAND = withWaist(STAND); HALF = withWaist(HALF); KNEEL = withWaist(KNEEL);
  function pose(t) {
    var k1 = U.ease(U.lstep(47.9, 48.9, t)), k2 = U.ease(U.lstep(48.8, 50.1, t));
    var p = lerpPose(KNEEL, HALF, k1);
    if (k2 > 0) p = lerpPose(p, STAND, k2);
    // the kneeling figure breathes a little
    var br = 0.004 * Math.sin(t * 2.0);
    p[1] = [p[1][0], p[1][1] + br, p[1][2]];
    return p;
  }
  var boneU = new Float32Array(BONES.length * 4), boneR = new Float32Array(BONES.length * 4);
  BONES.forEach(function (b, i) { boneU.set([b[0], b[1], 0, 0], i * 4); boneR.set([b[2], b[3], 0, b[4]], i * 4); });

  function state(t) {
    var cam = U.camera(camP(t), camT(t), 34, 0);
    var j = pose(t), flat = new Float32Array(63);
    j.forEach(function (x, i) { flat.set(x, i * 3); });
    return {
      cam: cam, joints: flat, chest: U.mix3(j[1], j[2], 0.3),
      gather: U.lstep(42.4, 47.2, t), breath: U.lstep(47.35, 48.6, t) * 1.0 + U.lstep(48.6, 50.0, t) * 1.0,
      dusk: 1.0
    };
  }

  return {
    init: function (gl) {
      prog = G.program('dust-bg', BG);
      pProg = G.program('dust-man', PF, PV);
      var data = build();
      vao = gl.createVertexArray(); gl.bindVertexArray(vao);
      var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 32, 0);
      gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 32, 16);
      gl.bindVertexArray(null);
      nP = data.length / 8;
    },
    render: function (t, local, target) {
      var gl = G.gl, s = state(t);
      G.bind(target);
      FILM.bindCommon(prog.use(), t, local, s.cam).setAll({ uLight: LIGHT, uDusk: s.dusk });
      G.draw();
      var sz = FILM.size();
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ZERO, gl.ONE);
      pProg.use().setAll({
        uVP: U.viewProj(s.cam, sz[0] / sz[1], 0.05, 100), uJ: s.joints, uBone: boneU, uBoneR: boneR,
        uTime: t, uGather: s.gather, uBreath: s.breath, uRise: 0, uCamPos: s.cam.pos,
        uFocus: Math.hypot(s.cam.pos[0], s.cam.pos[2] + 0.2), uPx: sz[1] / s.cam.fov * 0.5, uLight: LIGHT, uChest: s.chest
      });
      gl.bindVertexArray(vao);
      gl.drawArrays(gl.POINTS, 0, nP);
      gl.bindVertexArray(null);
      gl.disable(gl.BLEND);
    },
    post: function (t) {
      var s = state(t), sz = FILM.size();
      var lp = U.project(s.cam, s.chest, sz[0] / sz[1]) || [0.5, 0.5];
      var bloom = U.sstep(47.3, 47.7, t) * (1 - U.sstep(48.2, 49.5, t));
      return {
        exposure: 1.1, bloom: 0.1 + 0.35 * bloom, thresh: 0.9, star: 0.2 + 0.5 * bloom, starLen: 0.8,
        rays: 0.25, light: [lp[0], lp[1]], raysDensity: 0.8, raysDecay: 0.96,
        sat: 1.0, contrast: 1.06, lift: [0.006, 0.004, 0.006], gain: [1.03, 0.99, 0.95], vignette: 0.75, grain: 0.024,
        pulseX: 0.5, pulseY: 0.5, pulseAmt: 0.7
      };
    }
  };
})();
