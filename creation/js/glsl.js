/* ------------------------------------------------------------------
   Shared GLSL: header, noise (texture-backed, smooth), fbm variants,
   camera rays and a few colour helpers. Scenes prepend FILM.GLSL.common.
   ------------------------------------------------------------------ */
window.FILM = window.FILM || {};

FILM.GLSL = (function () {
  var header = `#version 300 es
precision highp float;
precision highp int;
precision highp sampler3D;
in vec2 vUv;
out vec4 fragColor;
`;

  var geomHeader = `#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
float sat(float x){ return clamp(x, 0.0, 1.0); }
float sstep(float a, float b, float x){ float t = clamp((x-a)/(b-a), 0.0, 1.0); return t*t*(3.0-2.0*t); }
`;

  var common = header + `
uniform vec2 uRes;
uniform float uTime;
uniform float uLocal;
uniform sampler2D uNoise;
uniform sampler3D uNoise3;
uniform vec3 uCamPos;
uniform mat3 uCamRot;
uniform float uFov;

#define PI 3.14159265
#define TAU 6.28318531
float sat(float x){ return clamp(x, 0.0, 1.0); }
vec3 sat3(vec3 x){ return clamp(x, 0.0, 1.0); }
float lstep(float a, float b, float x){ return clamp((x-a)/(b-a), 0.0, 1.0); }
float sstep(float a, float b, float x){ float t = lstep(a,b,x); return t*t*(3.0-2.0*t); }
float luma(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
mat2 rot2(float a){ float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }

uint hashu(uint x){ x ^= x >> 16; x *= 0x7feb352du; x ^= x >> 15; x *= 0x846ca68bu; x ^= x >> 16; return x; }
float hash11(float p){ return float(hashu(floatBitsToUint(p))) / 4294967295.0; }
float hash21(vec2 p){ uvec2 q = uvec2(ivec2(floor(p))); return float(hashu(q.x ^ hashu(q.y + 0x9e3779b9u))) / 4294967295.0; }
vec2 hash22(vec2 p){ uvec2 q = uvec2(ivec2(floor(p))); uint h = hashu(q.x ^ hashu(q.y + 0x9e3779b9u));
  return vec2(float(h & 0xffffu), float(h >> 16)) / 65535.0; }
float hash31(vec3 p){ uvec3 q = uvec3(ivec3(floor(p))); return float(hashu(q.x ^ hashu(q.y ^ hashu(q.z + 0x51ed27u)))) / 4294967295.0; }

// Smooth value noise from one bilinear fetch (256x256 random texture, C1 via smoothstep remap).
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.0-2.0*f);
  return textureLod(uNoise, (i + f + 0.5)/256.0, 0.0).x;
}
vec4 noise4(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.0-2.0*f);
  return textureLod(uNoise, (i + f + 0.5)/256.0, 0.0);
}
// Smooth 3D value noise (64^3 random volume).
float noise3(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f*f*(3.0-2.0*f);
  return textureLod(uNoise3, (i + f + 0.5)/64.0, 0.0).x;
}
const mat2 FBM_R = mat2(0.80, 0.60, -0.60, 0.80);
float fbm(vec2 p, int oct){
  float v = 0.0, a = 0.5, n = 0.0;
  for (int i = 0; i < 10; i++){ if (i >= oct) break; v += a*noise(p); n += a; p = FBM_R*p*2.03 + 17.1; a *= 0.5; }
  return v/n;
}
float fbm3(vec3 p, int oct){
  float v = 0.0, a = 0.5, n = 0.0;
  for (int i = 0; i < 8; i++){ if (i >= oct) break; v += a*noise3(p); n += a; p = p*2.02 + vec3(13.7, 7.1, 3.3); a *= 0.5; }
  return v/n;
}
float ridged(vec2 p, int oct){
  float v = 0.0, a = 0.5, n = 0.0, w = 1.0;
  for (int i = 0; i < 10; i++){ if (i >= oct) break;
    float r = 1.0 - abs(noise(p)*2.0 - 1.0); r *= r;
    v += a*r*w; n += a; w = clamp(r*1.6, 0.0, 1.0);
    p = FBM_R*p*2.07 + 5.3; a *= 0.5; }
  return v/n;
}

vec3 camRay(vec2 fc){
  vec2 p = (2.0*fc - uRes)/uRes.y;
  return normalize(uCamRot*vec3(p*uFov, -1.0));
}
// Screen position (0..1) of a world direction, z<0 means behind the camera.
vec3 dirToScreen(vec3 d){
  vec3 c = transpose(uCamRot)*d;
  if (c.z >= 0.0) return vec3(0.5, 0.5, -1.0);
  vec2 p = c.xy/(-c.z)/uFov;
  return vec3(p.x*uRes.y/uRes.x*0.5 + 0.5, p.y*0.5 + 0.5, 1.0);
}

// Soft glow around a direction, shaped like a lens halo.
float glow(vec3 rd, vec3 dir, float sharp){ return pow(max(dot(rd, dir), 0.0), sharp); }
`;

  return { header: header, geomHeader: geomHeader, common: common };
})();
