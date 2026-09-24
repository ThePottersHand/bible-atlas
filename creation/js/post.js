/* ------------------------------------------------------------------
   Post: transitions, bloom (13-tap down / tent up), star glints drawn
   as four directional streaks (the lower arm longest), god rays by
   radial blur from a light position, then tone-map, grade, grain.
   Scenes write a light-source mask in alpha; the rays read only that.
   ------------------------------------------------------------------ */
window.FILM = window.FILM || {};

FILM.Post = (function () {
  var G = FILM.GL, H = FILM.GLSL.header;
  var P = {}, T = {}, W = 0, Hh = 0;

  var MIX = H + `
uniform sampler2D uA; uniform sampler2D uB; uniform float uK; uniform int uMode;
void main(){
  vec4 a = texture(uA, vUv), b = texture(uB, vUv);
  vec4 c;
  if (uMode == 1) {            // through white
    vec4 w = vec4(6.0, 5.6, 5.0, 1.0);
    c = uK < 0.5 ? mix(a, w, smoothstep(0.0, 1.0, uK*2.0)) : mix(w, b, smoothstep(0.0, 1.0, uK*2.0 - 1.0));
  } else if (uMode == 2) {     // through black
    c = uK < 0.5 ? a*(1.0 - smoothstep(0.0, 1.0, uK*2.0)) : b*smoothstep(0.0, 1.0, uK*2.0 - 1.0);
  } else {
    c = mix(a, b, smoothstep(0.0, 1.0, uK));
  }
  fragColor = c;
}`;

  var BRIGHT = H + `
uniform sampler2D uSrc; uniform vec2 uTexel; uniform float uThresh; uniform float uKnee;
void main(){
  vec3 c = texture(uSrc, vUv + uTexel*vec2(-0.5,-0.5)).rgb + texture(uSrc, vUv + uTexel*vec2(0.5,-0.5)).rgb
         + texture(uSrc, vUv + uTexel*vec2(-0.5,0.5)).rgb + texture(uSrc, vUv + uTexel*vec2(0.5,0.5)).rgb;
  c = min(c*0.25, vec3(400.0));
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThresh + uKnee, 0.0, 2.0*uKnee);
  soft = soft*soft/(4.0*uKnee + 1e-4);
  float k = max(soft, br - uThresh)/max(br, 1e-4);
  float m = texture(uSrc, vUv).a;
  fragColor = vec4(c*k, m);
}`;

  var DOWN = H + `
uniform sampler2D uSrc; uniform vec2 uTexel;
vec4 s(vec2 o){ return texture(uSrc, vUv + o*uTexel); }
void main(){
  vec4 a = s(vec2(-2,-2)), b = s(vec2(0,-2)), c = s(vec2(2,-2));
  vec4 d = s(vec2(-1,-1)), e = s(vec2(1,-1));
  vec4 f = s(vec2(-2,0)), g = s(vec2(0,0)), h = s(vec2(2,0));
  vec4 i = s(vec2(-1,1)), j = s(vec2(1,1));
  vec4 k = s(vec2(-2,2)), l = s(vec2(0,2)), m = s(vec2(2,2));
  vec4 o = (d+e+i+j)*0.125 + (a+b+g+f)*0.03125 + (b+c+h+g)*0.03125 + (f+g+l+k)*0.03125 + (g+h+m+l)*0.03125;
  fragColor = o;
}`;

  var UP = H + `
uniform sampler2D uSrc; uniform sampler2D uBase; uniform vec2 uTexel; uniform float uRadius;
void main(){
  vec2 d = uTexel*uRadius;
  vec4 s = texture(uSrc, vUv + vec2(-d.x,-d.y)) + 2.0*texture(uSrc, vUv + vec2(0,-d.y)) + texture(uSrc, vUv + vec2(d.x,-d.y))
         + 2.0*texture(uSrc, vUv + vec2(-d.x,0)) + 4.0*texture(uSrc, vUv) + 2.0*texture(uSrc, vUv + vec2(d.x,0))
         + texture(uSrc, vUv + vec2(-d.x,d.y)) + 2.0*texture(uSrc, vUv + vec2(0,d.y)) + texture(uSrc, vUv + vec2(d.x,d.y));
  fragColor = texture(uBase, vUv) + s/16.0;
}`;

  // One pass of a directional streak (Kawase): 4 taps spaced uStep units apart, weight uDecay^distance.
  // A bright point at s spreads to s - dir*d, so dir points back toward the light.
  var STREAK = H + `
uniform sampler2D uSrc; uniform vec2 uDir; uniform float uStep; uniform float uDecay;
void main(){
  vec3 c = vec3(0.0); float wsum = 0.0;
  for (int i = 0; i < 4; i++){
    float d = float(i)*uStep;
    float w = pow(uDecay, d);
    c += w*texture(uSrc, vUv + uDir*d).rgb; wsum += w;
  }
  fragColor = vec4(c/wsum, 1.0);
}`;

  var RAYSRC = H + `
uniform sampler2D uSrc; uniform vec2 uTexel;
void main(){
  vec4 a = texture(uSrc, vUv + uTexel*vec2(-1.0,-1.0)), b = texture(uSrc, vUv + uTexel*vec2(1.0,-1.0));
  vec4 c = texture(uSrc, vUv + uTexel*vec2(-1.0,1.0)), d = texture(uSrc, vUv + uTexel*vec2(1.0,1.0));
  vec3 s = (a.rgb*a.a + b.rgb*b.a + c.rgb*c.a + d.rgb*d.a)*0.25;
  s = max(s - vec3(0.6), vec3(0.0));
  fragColor = vec4(min(s, vec3(60.0)), 1.0);
}`;

  var ADD4 = H + `
uniform sampler2D uA; uniform sampler2D uB; uniform sampler2D uC; uniform sampler2D uD; uniform vec4 uW;
void main(){ fragColor = vec4(texture(uA,vUv).rgb*uW.x + texture(uB,vUv).rgb*uW.y + texture(uC,vUv).rgb*uW.z + texture(uD,vUv).rgb*uW.w, 1.0); }`;

  var RAYS = H + `
uniform sampler2D uSrc; uniform vec2 uLight; uniform float uDensity; uniform float uDecay;
void main(){
  vec2 uv = vUv;
  vec2 d = (uv - uLight)*uDensity/48.0;
  vec3 sum = vec3(0.0); float w = 1.0;
  float j = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)))*43758.5453);
  uv -= d*j;
  for (int i = 0; i < 48; i++){
    uv -= d;
    sum += texture(uSrc, uv).rgb*w;
    w *= uDecay;
  }
  fragColor = vec4(sum/48.0, 1.0);
}`;

  var COMPOSITE = H + `
uniform sampler2D uScene; uniform sampler2D uBloom; uniform sampler2D uStar; uniform sampler2D uRays;
uniform vec2 uRes; uniform float uTime; uniform float uFrame;
uniform float uExposure; uniform float uBloomAmt; uniform float uStarAmt; uniform float uRaysAmt;
uniform float uSat; uniform float uContrast; uniform vec3 uLift; uniform vec3 uGain; uniform float uVignette;
uniform float uGrain; uniform float uFade; uniform vec3 uFadeColor;
uniform vec4 uPulse;   // xy centre (uv), z age (s), w strength

vec3 aces(vec3 x){
  const mat3 I = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
  const mat3 O = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
  vec3 v = I*x;
  vec3 a = v*(v + 0.0245786) - 0.000090537;
  vec3 b = v*(0.983729*v + 0.4329510) + 0.238081;
  return clamp(O*(a/b), 0.0, 1.0);
}
float h(vec2 p){ uvec2 q = uvec2(p); uint x = q.x*1597334677u ^ q.y*3812015801u ^ uint(uFrame)*2654435761u;
  x ^= x >> 16; x *= 0x7feb352du; x ^= x >> 15; x *= 0x846ca68bu; x ^= x >> 16; return float(x)/4294967295.0; }

void main(){
  vec2 uv = vUv;
  // the Word: a faint ring of light and refraction that travels outward
  float ring = 0.0;
  if (uPulse.w > 0.0) {
    vec2 q = (uv - uPulse.xy)*vec2(uRes.x/uRes.y, 1.0);
    float r = length(q), R = uPulse.z*0.55;
    ring = exp(-pow((r - R)*18.0, 2.0))*uPulse.w*exp(-uPulse.z*1.3);
    uv -= normalize(q + 1e-5)*ring*0.006/vec2(uRes.x/uRes.y, 1.0);
  }
  vec3 c = texture(uScene, uv).rgb;
  c += texture(uBloom, uv).rgb*uBloomAmt;
  c += texture(uStar, uv).rgb*uStarAmt;
  c += texture(uRays, uv).rgb*uRaysAmt;
  c *= 1.0 + ring*0.6;
  c *= uExposure;
  c = aces(c);
  // grade (display-referred)
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(vec3(l), c, uSat);
  c = (c - 0.5)*uContrast + 0.5;
  c = c*uGain + uLift*(1.0 - c);
  vec2 v = (vUv - 0.5)*vec2(uRes.x/uRes.y, 1.0);
  c *= mix(1.0, smoothstep(1.35, 0.25, length(v)), uVignette);
  c = clamp(c, 0.0, 1.0);
  c = mix(c, uFadeColor, uFade);
  c = pow(c, vec3(1.0/2.2));
  // grain strongest in the mid-tones, then a triangular dither
  float g = (h(gl_FragCoord.xy) + h(gl_FragCoord.xy + 71.0) - 1.0);
  float lg = dot(c, vec3(0.3333));
  c += g*uGrain*(0.35 + 0.65*4.0*lg*(1.0 - lg));
  c += (h(gl_FragCoord.xy + 13.0) - h(gl_FragCoord.xy + 29.0))/255.0;
  fragColor = vec4(c, 1.0);
}`;

  function init() {
    P.mix = G.program('mix', MIX);
    P.bright = G.program('bright', BRIGHT);
    P.down = G.program('down', DOWN);
    P.up = G.program('up', UP);
    P.streak = G.program('streak', STREAK);
    P.add4 = G.program('add4', ADD4);
    P.rays = G.program('rays', RAYS);
    P.raysrc = G.program('raysrc', RAYSRC);
    P.comp = G.program('composite', COMPOSITE);
  }

  function resize(w, h) {
    if (w === W && h === Hh) return;
    for (var k in T) { if (T[k].release) T[k].release(); else if (T[k].forEach) T[k].forEach(function (x) { x.release(); }); }
    T = {};
    W = w; Hh = h;
    T.main = G.target(w, h); T.aux = G.target(w, h); T.aux2 = G.target(w, h);
    T.down = []; T.up = [];
    var cw = w / 2, ch = h / 2;
    for (var i = 0; i < 6; i++) { T.down.push(G.target(cw, ch)); T.up.push(G.target(cw, ch)); cw /= 2; ch /= 2; }
    var qw = w / 4, qh = h / 4;
    T.s0 = G.target(qw, qh); T.s1 = G.target(qw, qh);
    T.arm = [G.target(qw, qh), G.target(qw, qh), G.target(qw, qh), G.target(qw, qh)];
    T.star = G.target(qw, qh);
    T.rays = G.target(qw, qh);
    T.rsrc = G.target(qw, qh);
  }

  function mixInto(dst, a, b, k, mode) {
    G.bind(dst);
    P.mix.use().set('uA', a).set('uB', b).set('uK', k).set('uMode', mode === 'white' ? 1 : mode === 'black' ? 2 : 0);
    G.draw();
  }

  function streakArm(src, dir, len, out) {
    // three passes with the spacing growing 4x: 63 units of reach, scaled so one arm is len texels long
    var unit = len / 63, cur = src, step = 1;
    for (var p = 0; p < 3; p++) {
      var dst = p === 2 ? out : (p === 0 ? T.s0 : T.s1);
      G.bind(dst);
      P.streak.use().set('uSrc', cur).set('uDir', [dir[0] * unit / src.w, dir[1] * unit / src.h])
        .set('uStep', step).set('uDecay', Math.pow(0.015, 1 / 63));
      G.draw();
      cur = dst; step *= 4;
    }
  }

  /* run(src, o): o = { exposure, bloom, star, rays, light:[x,y], raysDensity, raysDecay, sat, contrast, lift, gain,
                       vignette, grain, fade, fadeColor, pulse:[x,y,age,strength], thresh, time, frame } */
  function run(src, o, outW, outH) {
    var gl = G.gl;
    // bright pass -> bloom chain
    G.bind(T.down[0]);
    P.bright.use().set('uSrc', src).set('uTexel', [1 / src.w, 1 / src.h]).set('uThresh', o.thresh != null ? o.thresh : 1.0).set('uKnee', 0.6);
    G.draw();
    for (var i = 1; i < T.down.length; i++) {
      G.bind(T.down[i]);
      P.down.use().set('uSrc', T.down[i - 1]).set('uTexel', [1 / T.down[i - 1].w, 1 / T.down[i - 1].h]);
      G.draw();
    }
    var n = T.down.length;
    var cur = T.down[n - 1];
    for (var j = n - 2; j >= 0; j--) {
      G.bind(T.up[j]);
      P.up.use().set('uSrc', cur).set('uBase', T.down[j]).set('uTexel', [1 / cur.w, 1 / cur.h]).set('uRadius', 1.0);
      G.draw();
      cur = T.up[j];
    }
    var bloom = T.up[0];

    // star glints from the quarter-res bright image: short arms sideways, long arm down, shorter up
    var starAmt = o.star || 0;
    if (starAmt > 0) {
      var q = T.down[1], L = (o.starLen || 1) * q.h * 0.22;
      streakArm(q, [-1, 0], L * 0.5, T.arm[0]);   // right arm
      streakArm(q, [1, 0], L * 0.5, T.arm[1]);    // left arm
      streakArm(q, [0, 1], L * 0.75, T.arm[2]);   // lower arm, a little longer
      streakArm(q, [0, -1], L * 0.5, T.arm[3]);   // upper arm
      G.bind(T.star);
      P.add4.use().set('uA', T.arm[0]).set('uB', T.arm[1]).set('uC', T.arm[2]).set('uD', T.arm[3]).set('uW', [0.5, 0.5, 0.62, 0.5]);
      G.draw();
    }
    var raysAmt = o.rays || 0;
    if (raysAmt > 0) {
      G.bind(T.rsrc);
      P.raysrc.use().set('uSrc', src).set('uTexel', [1 / src.w, 1 / src.h]);
      G.draw();
      G.bind(T.rays);
      P.rays.use().set('uSrc', T.rsrc).set('uLight', o.light || [0.5, 0.5]).set('uDensity', o.raysDensity || 0.9)
        .set('uDecay', o.raysDecay || 0.97);
      G.draw();
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, outW, outH);
    P.comp.use()
      .set('uScene', src).set('uBloom', bloom).set('uStar', T.star).set('uRays', T.rays)
      .set('uRes', [outW, outH]).set('uTime', o.time || 0).set('uFrame', o.frame || 0)
      .set('uExposure', o.exposure != null ? o.exposure : 1.0).set('uBloomAmt', o.bloom != null ? o.bloom : 0.08)
      .set('uStarAmt', starAmt).set('uRaysAmt', raysAmt)
      .set('uSat', o.sat != null ? o.sat : 1.0).set('uContrast', o.contrast != null ? o.contrast : 1.0)
      .set('uLift', o.lift || [0, 0, 0]).set('uGain', o.gain || [1, 1, 1]).set('uVignette', o.vignette != null ? o.vignette : 0.5)
      .set('uGrain', o.grain != null ? o.grain : 0.03).set('uFade', o.fade || 0).set('uFadeColor', o.fadeColor || [0, 0, 0])
      .set('uPulse', o.pulse || [0.5, 0.5, 0, 0]);
    G.draw();
  }

  return { init: init, resize: resize, run: run, mixInto: mixInto, get T() { return T; } };
})();
