/* ------------------------------------------------------------------
   Terrain: a sculpted relief model of the biblical world.
   Three nested heightmap layers (world z7, Levant z9, Jerusalem z12) in
   terrarium encoding, displaced in the vertex shader and lit per-fragment
   from the height texture itself, so the relief is as sharp as the data.
   Water is flat at its (historical) surface level with depth-tinted colour.
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.Terrain = (function () {
  var GEO = ATLAS.GEO;
  var layers = [];          // [world, levant, jerusalem]
  var byName = {};
  var group = new THREE.Group();
  var SKIRT_Y = -60;
  var maxSceneY = 20;

  /* shared uniforms (light, era, overlay, focus) */
  var U = {
    uExag: { value: 3.0 },
    uTime: { value: 0 },
    uSunDir: { value: new THREE.Vector3(0.3, 0.8, 0.5) },
    uSunColor: { value: new THREE.Color('#fff0d2') },
    uAmbient: { value: new THREE.Color('#8ea1b5') },
    uZenith: { value: new THREE.Color('#3b6ca8') },
    uHorizon: { value: new THREE.Color('#dfd3bd') },
    uTint: { value: new THREE.Color('#c9a86a') },
    uTintAmt: { value: 0.12 },
    uDesat: { value: 0.0 },
    uHaze: { value: 0.00026 },
    uHazeColor: { value: new THREE.Color('#dcd3c2') },
    uOverlay: { value: null },
    uOverlayOn: { value: 1.0 },
    uWorldOrigin: { value: new THREE.Vector2() },
    uWorldSize: { value: new THREE.Vector2(1, 1) },
    uFocus: { value: new THREE.Vector3(0, 0, 10) },
    uFocusAmt: { value: 0.0 },
    uS: { value: GEO.S },
    uUC: { value: 0.5 },
    uVC: { value: 0.5 },
    uNight: { value: 0.0 }
  };

  var COMMON = [
    'float decodeH(vec3 c){ return c.r*65280.0 + c.g*255.0 - 32768.0 + c.b*0.99609375; }',
    'float sampleH(sampler2D t, vec2 uv, vec2 ts){',
    '  vec2 p = uv*ts - 0.5; vec2 i = floor(p); vec2 f = p - i; vec2 px = 1.0/ts;',
    '  float a = decodeH(texture2D(t, (i+vec2(0.5,0.5))*px).rgb);',
    '  float b = decodeH(texture2D(t, (i+vec2(1.5,0.5))*px).rgb);',
    '  float c = decodeH(texture2D(t, (i+vec2(0.5,1.5))*px).rgb);',
    '  float d = decodeH(texture2D(t, (i+vec2(1.5,1.5))*px).rgb);',
    '  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y); }',
    'float hash21(vec2 p){ p = fract(p*vec2(233.34, 851.73)); p += dot(p, p+23.45); return fract(p.x*p.y); }',
    'float vnoise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.0-2.0*f);',
    '  return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x), mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x), f.y); }',
    'float fbm(vec2 p){ float v=0.0, a=0.5; for(int k=0;k<4;k++){ v+=a*vnoise(p); p*=2.03; a*=0.5; } return v; }'
  ].join('\n');

  var VERT = [
    '#include <common>',
    '#include <logdepthbuf_pars_vertex>',
    'uniform sampler2D uH; uniform vec2 uTexSize; uniform vec2 uOrigin; uniform vec2 uSize;',
    'uniform sampler2D uPH; uniform vec2 uPTexSize; uniform vec2 uPOrigin; uniform vec2 uPSize; uniform float uHasParent; uniform float uFeather;',
    'uniform float uExag; uniform float uS; uniform float uUC; uniform float uVC;',
    'attribute float edge;',
    'varying vec2 vMerc; varying float vH; varying vec3 vWorld; varying float vEdge; varying float vFeather;',
    COMMON,
    'void main(){',
    '  vMerc = vec2(position.x/uS + uUC, position.z/uS + uVC);',
    '  vec2 uv = (vMerc - uOrigin)/uSize;',
    '  float h = sampleH(uH, clamp(uv, 0.0, 1.0), uTexSize);',
    '  float w = 1.0;',
    '  if (uHasParent > 0.5) {',
    '    vec2 d = min(uv, 1.0-uv); float e = min(d.x, d.y); w = smoothstep(0.0, uFeather, e);',
    '    float hp = sampleH(uPH, (vMerc-uPOrigin)/uPSize, uPTexSize);',
    '    h = mix(hp, h, w);',
    '  }',
    '  vFeather = w; vH = h; vEdge = edge;',
    '  vec3 p = vec3(position.x, h*0.001*uExag, position.z);',
    '  if (edge > 0.5) p.y = ' + SKIRT_Y.toFixed(1) + ';',
    '  vWorld = p;',
    '  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);',
    '  #include <logdepthbuf_vertex>',
    '}'
  ].join('\n');

  var FRAG = [
    '#include <logdepthbuf_pars_fragment>',
    'uniform sampler2D uH; uniform sampler2D uW; uniform vec2 uTexSize; uniform vec2 uOrigin; uniform vec2 uSize;',
    'uniform vec4 uHole; uniform float uHoleOn;',
    'uniform float uExag; uniform float uS; uniform float uTime; uniform float uNight;',
    'uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uAmbient; uniform vec3 uZenith; uniform vec3 uHorizon;',
    'uniform vec3 uTint; uniform float uTintAmt; uniform float uDesat; uniform float uHaze; uniform vec3 uHazeColor;',
    'uniform sampler2D uOverlay; uniform float uOverlayOn; uniform vec2 uWorldOrigin; uniform vec2 uWorldSize;',
    'uniform vec3 uFocus; uniform float uFocusAmt;',
    'varying vec2 vMerc; varying float vH; varying vec3 vWorld; varying float vEdge; varying float vFeather;',
    COMMON,
    'vec3 hypso(float h, float slope){',
    '  vec3 c;',
    '  if (h < 0.0)        c = mix(vec3(0.40,0.27,0.17), vec3(0.80,0.70,0.52), clamp((h+420.0)/420.0, 0.0, 1.0));',
    '  else if (h < 200.0) c = mix(vec3(0.85,0.81,0.70), vec3(0.79,0.73,0.59), h/200.0);',
    '  else if (h < 700.0) c = mix(vec3(0.79,0.73,0.59), vec3(0.66,0.61,0.46), (h-200.0)/500.0);',
    '  else if (h < 1500.0) c = mix(vec3(0.66,0.61,0.46), vec3(0.57,0.53,0.45), (h-700.0)/800.0);',
    '  else if (h < 2500.0) c = mix(vec3(0.58,0.52,0.42), vec3(0.72,0.70,0.67), (h-1500.0)/1000.0);',
    '  else                c = mix(vec3(0.72,0.70,0.67), vec3(0.95,0.95,0.94), clamp((h-2500.0)/1200.0, 0.0, 1.0));',
    '  c = mix(c, vec3(0.44,0.35,0.25), smoothstep(0.2, 0.85, slope)*0.6);',
    '  return c; }',
    'void main(){',
    '  #include <logdepthbuf_fragment>',
    '  if (uHoleOn > 0.5 && vMerc.x > uHole.x && vMerc.x < uHole.z && vMerc.y > uHole.y && vMerc.y < uHole.w) discard;',
    '  vec3 V = normalize(cameraPosition - vWorld);',
    '  float dist = length(cameraPosition - vWorld);',
    '  vec3 col;',
    '  if (vEdge > 0.5) {',
    '    col = vec3(0.16,0.12,0.09) * (0.6 + 0.4*abs(V.y));',
    '  } else {',
    '    vec2 uv = (vMerc - uOrigin)/uSize; vec2 px = 1.0/uTexSize;',
    '    float hL = sampleH(uH, uv - vec2(px.x,0.0), uTexSize), hR = sampleH(uH, uv + vec2(px.x,0.0), uTexSize);',
    '    float hD = sampleH(uH, uv - vec2(0.0,px.y), uTexSize), hU = sampleH(uH, uv + vec2(0.0,px.y), uTexSize);',
    '    float kx = 0.001*uExag / (2.0*px.x*uSize.x*uS);',
    '    float kz = 0.001*uExag / (2.0*px.y*uSize.y*uS);',
    '    vec3 N = normalize(vec3(-(hR-hL)*kx, 1.0, -(hU-hD)*kz));',
    '    float slope = 1.0 - N.y;',
    '    vec3 wtx = texture2D(uW, uv).rgb;',
    '    float water = smoothstep(0.42, 0.58, wtx.r);',
    '    float depth = max(wtx.g*5100.0, wtx.b*510.0);',
    '    float gfade = exp(-dist*0.0012);',
    '    float grain = (fbm(vMerc*9000.0)*0.10 + fbm(vMerc*900.0)*0.08 - 0.09) * gfade + (fbm(vMerc*120.0)-0.5)*0.06;',
    '    vec3 land = hypso(vH, slope) * (1.0 + grain);',
    '    vec3 L = normalize(uSunDir);',
    '    float ndl = dot(N, L);',
    '    float diff = clamp(ndl, 0.0, 1.0);',
    '    float wrap = clamp((ndl + 0.35)/1.35, 0.0, 1.0);',
    '    float shadow = smoothstep(-0.05, 0.45, ndl);',
    '    vec3 sky = mix(uHorizon, uZenith, clamp(N.y, 0.0, 1.0));',
    '    vec3 lit = land * (uSunColor * (diff*0.95 + wrap*0.35) * (0.6+0.4*shadow) + uAmbient * 0.38 * (0.7 + 0.3*N.y) + sky * 0.10);',
    '    /* water */',
    '    vec2 rp = vMerc*4000.0; float r1 = vnoise(rp + uTime*0.02), r2 = vnoise(rp*1.7 - uTime*0.017);',
    '    vec3 Nw = normalize(vec3((r1-0.5)*0.08, 1.0, (r2-0.5)*0.08));',
    '    vec3 shallow = vec3(0.36,0.66,0.66), deep = vec3(0.06,0.20,0.36);',
    '    vec3 wcol = mix(shallow, deep, clamp(depth/700.0, 0.0, 1.0));',
    '    wcol = mix(wcol, vec3(0.10,0.30,0.46), smoothstep(300.0, 2500.0, depth)*0.6);',
    '    float fres = pow(1.0 - clamp(dot(Nw, V), 0.0, 1.0), 3.0);',
    '    vec3 Hh = normalize(L + V);',
    '    float spec = pow(clamp(dot(Nw, Hh), 0.0, 1.0), 180.0) * 0.9 + pow(clamp(dot(Nw, Hh), 0.0, 1.0), 24.0)*0.12;',
    '    vec3 waterLit = wcol * (vec3(0.55,0.6,0.7)*0.7 + uSunColor*0.55*clamp(dot(Nw,L),0.0,1.0)) + sky*fres*0.45 + uSunColor*spec;',
    '    float foam = (1.0 - smoothstep(0.0, 14.0, depth)) * water * 0.35;',
    '    waterLit += vec3(0.8,0.85,0.85)*foam;',
    '    col = mix(lit, waterLit, water);',
    '    /* boundaries overlay */',
    '    vec2 ouv = (vMerc - uWorldOrigin)/uWorldSize;',
    '    vec4 ov = texture2D(uOverlay, ouv);',
    '    col = mix(col, ov.rgb * (0.55 + 0.75*dot(col, vec3(0.33))), ov.a * 0.55 * uOverlayOn * (1.0 - water*0.9));',
    '    /* era tint & desaturation */',
    '    float lum = dot(col, vec3(0.299,0.587,0.114));',
    '    float tintW = 1.0 - water*0.75;',
    '    col = mix(col, vec3(lum), uDesat * tintW);',
    '    col = mix(col, col * uTint * 1.55, uTintAmt * tintW);',
    '    /* focus ring */',
    '    if (uFocusAmt > 0.001) {',
    '      float fd = distance(vWorld.xz, uFocus.xy); float fr = uFocus.z;',
    '      float ring = smoothstep(fr*1.0, fr*0.82, fd) * (1.0 - smoothstep(fr*0.82, fr*0.5, fd));',
    '      float glow = (1.0 - smoothstep(0.0, fr*0.8, fd)) * 0.18;',
    '      float pulse = 0.75 + 0.25*sin(uTime*2.2);',
    '      col += (ring*0.45*pulse + glow) * vec3(1.0, 0.86, 0.55) * uFocusAmt;',
    '    }',
    '    /* night */',
    '    col = mix(col, col*vec3(0.32,0.38,0.55), uNight);',
    '  }',
    '  /* haze */',
    '  float fog = 1.0 - exp(-dist*uHaze);',
    '  col = mix(col, uHazeColor, fog*0.9);',
    '  gl_FragColor = vec4(col, 1.0);',
    '}'
  ].join('\n');

  /* ---- sky dome ---- */
  var SKY_VERT = 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }';
  var SKY_FRAG = [
    'varying vec3 vDir;',
    'uniform vec3 uZenith; uniform vec3 uHorizon; uniform vec3 uSunDir; uniform vec3 uSunColor; uniform float uTime; uniform float uNight;',
    'float hash31(vec3 p){ p = fract(p*vec3(443.897, 441.423, 437.195)); p += dot(p, p.yzx+19.19); return fract((p.x+p.y)*p.z); }',
    'void main(){',
    '  float y = clamp(vDir.y, -0.2, 1.0);',
    '  vec3 col = mix(uHorizon, uZenith, pow(clamp(y*1.2, 0.0, 1.0), 0.55));',
    '  col = mix(col, uHorizon*0.85, smoothstep(0.0, -0.2, vDir.y));',
    '  float s = clamp(dot(normalize(vDir), normalize(uSunDir)), 0.0, 1.0);',
    '  col += uSunColor * (pow(s, 600.0)*1.2 + pow(s, 24.0)*0.35 + pow(s, 4.0)*0.12);',
    '  vec3 sp = floor(vDir*380.0); float st = step(0.9975, hash31(sp)) * smoothstep(0.02, 0.3, vDir.y);',
    '  col += vec3(st) * uNight * (0.6 + 0.4*sin(uTime*3.0 + hash31(sp)*20.0));',
    '  col = mix(col, col*vec3(0.25,0.3,0.5), uNight);',
    '  gl_FragColor = vec4(col, 1.0);',
    '}'
  ].join('\n');

  /* ---- helpers ---- */
  function loadImage(url) {
    return new Promise(function (res, rej) {
      var im = new Image(); im.onload = function () { res(im); }; im.onerror = function () { rej(new Error('image failed: ' + url)); }; im.src = url;
    });
  }
  function texFromImage(im, nearest) {
    var t = new THREE.Texture(im);
    t.flipY = false; t.generateMipmaps = false;
    t.minFilter = nearest ? THREE.NearestFilter : THREE.LinearFilter;
    t.magFilter = nearest ? THREE.NearestFilter : THREE.LinearFilter;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.needsUpdate = true;
    return t;
  }
  /* decode terrarium PNG to a Float32Array at 1/step resolution */
  function decodeHeights(im, step) {
    var W = im.width, H = im.height;
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(im, 0, 0);
    var d;
    try { d = ctx.getImageData(0, 0, W, H).data; } catch (e) { return null; }
    var w = Math.floor(W / step), h = Math.floor(H / step);
    var out = new Float32Array(w * h);
    for (var y = 0; y < h; y++) {
      var sy = y * step;
      for (var x = 0; x < w; x++) {
        var i = (sy * W + x * step) * 4;
        out[y * w + x] = d[i] * 256 + d[i + 1] - 32768 + d[i + 2] / 256;
      }
    }
    return { data: out, w: w, h: h };
  }

  function buildGrid(layer, segX, segZ) {
    /* grid in scene XZ covering the layer's Mercator bbox, plus a skirt ring */
    var m = layer.m, z2 = Math.pow(2, m.z);
    var u0 = m.x0 / z2, u1 = (m.x0 + m.nx) / z2, v0 = m.y0 / z2, v1 = (m.y0 + m.ny) / z2;
    var c = GEO.center(), S = GEO.S;
    var x0 = (u0 - c.u) * S, x1 = (u1 - c.u) * S, z0 = (v0 - c.v) * S, z1 = (v1 - c.v) * S;
    var nx = segX + 1, nz = segZ + 1;
    var skirt = layer.skirt ? 1 : 0;
    var NX = nx + 2 * skirt, NZ = nz + 2 * skirt;
    var pos = new Float32Array(NX * NZ * 3), edge = new Float32Array(NX * NZ);
    var k = 0;
    for (var j = 0; j < NZ; j++) {
      var jj = Math.min(Math.max(j - skirt, 0), nz - 1);
      var zz = z0 + (z1 - z0) * jj / (nz - 1);
      for (var i = 0; i < NX; i++) {
        var ii = Math.min(Math.max(i - skirt, 0), nx - 1);
        var xx = x0 + (x1 - x0) * ii / (nx - 1);
        pos[k * 3] = xx; pos[k * 3 + 1] = 0; pos[k * 3 + 2] = zz;
        edge[k] = (skirt && (i === 0 || j === 0 || i === NX - 1 || j === NZ - 1)) ? 1 : 0;
        k++;
      }
    }
    var idx = new Uint32Array((NX - 1) * (NZ - 1) * 6), q = 0;
    for (var j2 = 0; j2 < NZ - 1; j2++) for (var i2 = 0; i2 < NX - 1; i2++) {
      var a = j2 * NX + i2, b = a + 1, cc = a + NX, d = cc + 1;
      idx[q++] = a; idx[q++] = cc; idx[q++] = b; idx[q++] = b; idx[q++] = cc; idx[q++] = d;
    }
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('edge', new THREE.BufferAttribute(edge, 1));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3((x0 + x1) / 2, 0, (z0 + z1) / 2), Math.hypot(x1 - x0, z1 - z0) * 0.6 + 100);
    layer.bbox = { x0: x0, x1: x1, z0: z0, z1: z1, u0: u0, u1: u1, v0: v0, v1: v1 };
    return g;
  }

  function makeLayer(name, m, parent, seg, skirt) {
    var z2 = Math.pow(2, m.z);
    var L = { name: name, m: m, parent: parent || null, skirt: !!skirt,
      origin: new THREE.Vector2(m.x0 / z2, m.y0 / z2), size: new THREE.Vector2(m.nx / z2, m.ny / z2),
      texSize: new THREE.Vector2(m.width, m.height), seg: seg };
    return L;
  }

  function buildMesh(L) {
    var g = buildGrid(L, L.seg[0], L.seg[1]);
    var uni = {
      uH: { value: L.tex }, uW: { value: L.wtex }, uTexSize: { value: L.texSize }, uOrigin: { value: L.origin }, uSize: { value: L.size },
      uPH: { value: L.parent ? L.parent.tex : L.tex }, uPTexSize: { value: L.parent ? L.parent.texSize : L.texSize },
      uPOrigin: { value: L.parent ? L.parent.origin : L.origin }, uPSize: { value: L.parent ? L.parent.size : L.size },
      uHasParent: { value: L.parent ? 1 : 0 }, uFeather: { value: 0.06 },
      uHole: { value: new THREE.Vector4() }, uHoleOn: { value: 0 }
    };
    for (var k in U) uni[k] = U[k];
    var mat = new THREE.ShaderMaterial({ uniforms: uni, vertexShader: VERT, fragmentShader: FRAG });
    if (L.parent) { mat.polygonOffset = true; mat.polygonOffsetFactor = -2; mat.polygonOffsetUnits = -2; }
    var mesh = new THREE.Mesh(g, mat);
    mesh.frustumCulled = false;
    mesh.renderOrder = L.parent ? (L.parent.parent ? 3 : 2) : 1;
    L.mesh = mesh; L.mat = mat;
    return mesh;
  }

  function setHole(parent, child) {
    /* parent discards inside the child's inner (non-feathered) area */
    var f = 0.03; // half the feather, in child uv
    var hx0 = child.origin.x + child.size.x * f, hx1 = child.origin.x + child.size.x * (1 - f);
    var hy0 = child.origin.y + child.size.y * f, hy1 = child.origin.y + child.size.y * (1 - f);
    parent.mat.uniforms.uHole.value.set(hx0, hy0, hx1, hy1);
    parent.mat.uniforms.uHoleOn.value = 1;
  }

  /* ---- CPU height sampling ---- */
  function sampleCPU(L, u, v) {
    var c = L.cpu; if (!c) return null;
    var fx = (u - L.origin.x) / L.size.x, fy = (v - L.origin.y) / L.size.y;
    if (fx < 0 || fx > 1 || fy < 0 || fy > 1) return null;
    var px = fx * c.w - 0.5, py = fy * c.h - 0.5;
    var x0 = Math.floor(px), y0 = Math.floor(py), tx = px - x0, ty = py - y0;
    var x1 = Math.min(x0 + 1, c.w - 1), y1 = Math.min(y0 + 1, c.h - 1);
    x0 = Math.max(x0, 0); y0 = Math.max(y0, 0);
    var d = c.data, w = c.w;
    var a = d[y0 * w + x0], b = d[y0 * w + x1], cc = d[y1 * w + x0], dd = d[y1 * w + x1];
    return (a * (1 - tx) + b * tx) * (1 - ty) + (cc * (1 - tx) + dd * tx) * ty;
  }
  function heightAt(lat, lon) {
    var m = GEO.merc(lat, lon);
    for (var i = layers.length - 1; i >= 0; i--) {
      var h = sampleCPU(layers[i], m.u, m.v);
      if (h !== null) return h;
    }
    return null;
  }
  function heightAtScene(x, z) {
    var c = GEO.center();
    var u = x / GEO.S + c.u, v = z / GEO.S + c.v;
    for (var i = layers.length - 1; i >= 0; i--) {
      var h = sampleCPU(layers[i], u, v);
      if (h !== null) return h;
    }
    return null;
  }
  function sceneY(lat, lon) { var h = heightAt(lat, lon); return (h === null ? 0 : h) * 0.001 * U.uExag.value; }
  function scenePos(lat, lon) { var p = GEO.toScene(lat, lon); return new THREE.Vector3(p.x, sceneY(lat, lon), p.z); }

  /* ray-march the camera ray against the CPU heightfield */
  function pickGround(origin, dir, maxDist) {
    maxDist = maxDist || 40000;
    var t = 0, step, p = new THREE.Vector3(), lastT = 0, lastAbove = true;
    var ex = U.uExag.value * 0.001;
    var world = byName.world.bbox;
    for (var i = 0; i < 400 && t < maxDist; i++) {
      p.copy(origin).addScaledVector(dir, t);
      var inside = p.x >= world.x0 && p.x <= world.x1 && p.z >= world.z0 && p.z <= world.z1;
      var gh = inside ? heightAtScene(p.x, p.z) : null;
      var gy = gh === null ? -1e9 : gh * ex;
      var above = p.y > gy;
      if (!above && gh !== null) {
        /* bisect between lastT and t */
        var lo = lastT, hi = t;
        for (var k = 0; k < 10; k++) {
          var mid = (lo + hi) / 2; p.copy(origin).addScaledVector(dir, mid);
          var g2 = heightAtScene(p.x, p.z); var gy2 = (g2 === null ? -1e9 : g2 * ex);
          if (p.y > gy2) lo = mid; else hi = mid;
        }
        p.copy(origin).addScaledVector(dir, (lo + hi) / 2);
        var ll = GEO.fromScene(p.x, p.z);
        return { point: p.clone(), lat: ll.lat, lon: ll.lon, h: heightAtScene(p.x, p.z) };
      }
      if (dir.y >= 0 && p.y > maxSceneY && inside) return null;
      lastT = t; lastAbove = above;
      var gap = above ? (p.y - Math.max(gy, -5)) : 1;
      step = Math.max(0.05, Math.min(gap * 0.6, 60));
      if (!inside) step = Math.max(step, 20);
      t += step;
    }
    return null;
  }

  /* ---- load ---- */
  function load(onProgress) {
    var base = 'assets/terrain/';
    return fetch(base + 'manifest.json').then(function (r) { return r.json(); }).then(function (man) {
      var w = makeLayer('world', man.world, null, [768, 512], true);
      var l = makeLayer('levant', man.levant, w, [512, 768], false);
      var j = makeLayer('jerusalem', man.jerusalem, l, [192, 192], false);
      layers = [w, l, j];
      byName = { world: w, levant: l, jerusalem: j };
      /* centre the scene on the world map */
      var z2 = Math.pow(2, man.world.z);
      var cu = (man.world.x0 + man.world.nx / 2) / z2, cv = (man.world.y0 + man.world.ny / 2) / z2;
      var cll = GEO.unmerc(cu, cv); GEO.setCenter(cll.lat, cll.lon);
      U.uUC.value = cu; U.uVC.value = cv;
      U.uWorldOrigin.value.copy(w.origin); U.uWorldSize.value.copy(w.size);
      maxSceneY = man.world.hmax * 0.001 * 4 + 1;
      var jobs = [], done = 0, total = layers.length * 2;
      function tick() { done++; if (onProgress) onProgress(done / total); }
      layers.forEach(function (L) {
        jobs.push(loadImage(base + L.name + '.png').then(function (im) {
          L.tex = texFromImage(im, true);
          L.cpu = decodeHeights(im, L.name === 'world' ? 2 : (L.name === 'levant' ? 2 : 1));
          if (!L.cpu) console.warn('Could not read heights for ' + L.name + ' (serve over http)');
          tick();
        }));
        jobs.push(loadImage(base + L.name + '_water.png').then(function (im) { L.wtex = texFromImage(im, false); tick(); }));
      });
      return Promise.all(jobs).then(function () {
        layers.forEach(function (L) { group.add(buildMesh(L)); });
        setHole(w, l); setHole(l, j);
        /* base plate under the model */
        var bb = w.bbox;
        var plate = new THREE.Mesh(new THREE.PlaneGeometry(bb.x1 - bb.x0 + 600, bb.z1 - bb.z0 + 600),
          new THREE.MeshBasicMaterial({ color: 0x120d09 }));
        plate.rotation.x = -Math.PI / 2; plate.position.set((bb.x0 + bb.x1) / 2, SKIRT_Y - 0.5, (bb.z0 + bb.z1) / 2);
        group.add(plate);
        /* sky */
        var sky = new THREE.Mesh(new THREE.SphereGeometry(60000, 48, 24),
          new THREE.ShaderMaterial({ uniforms: { uZenith: U.uZenith, uHorizon: U.uHorizon, uSunDir: U.uSunDir, uSunColor: U.uSunColor, uTime: U.uTime, uNight: U.uNight },
            vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, side: THREE.BackSide, depthWrite: false, depthTest: false }));
        sky.renderOrder = -10; sky.frustumCulled = false;
        group.add(sky);
        Terrain.sky = sky;
        return man;
      });
    });
  }

  /* ---- light presets ---- */
  var tmpC = new THREE.Color();
  function applyLight(L, hourOverride) {
    var az = L.sunAz, el = L.sunEl;
    if (hourOverride !== null && hourOverride !== undefined) {
      var f = (hourOverride - 6) / 12; // 6h -> 0, 18h -> 1
      az = 80 + f * 200; el = Math.sin(Math.max(0, Math.min(1, f)) * Math.PI) * 70 - (f < 0 || f > 1 ? 30 : 0);
    }
    var a = az * Math.PI / 180, e = Math.max(el, -30) * Math.PI / 180;
    U.uSunDir.value.set(Math.sin(a) * Math.cos(e), Math.sin(e), -Math.cos(a) * Math.cos(e));
    U.uNight.value = el < 0 ? Math.min(1, -el / 12) : 0;
  }
  function setLight(L) {
    applyLight(L, Terrain.hourOverride);
    U.uSunColor.value.set(L.sunColor); U.uAmbient.value.set(L.ambient); U.uZenith.value.set(L.zenith); U.uHorizon.value.set(L.horizon);
    U.uTint.value.set(L.tint); U.uTintAmt.value = L.tintAmt; U.uDesat.value = L.desat; U.uHaze.value = L.haze; U.uHazeColor.value.set(L.hazeColor);
  }
  /* linear blend of two presets */
  function lerpLight(A, B, t) {
    function lc(a, b) { var ca = new THREE.Color(a), cb = new THREE.Color(b); return '#' + ca.lerp(cb, t).getHexString(); }
    var azA = A.sunAz, azB = B.sunAz; var d = azB - azA; if (d > 180) d -= 360; if (d < -180) d += 360;
    return { sunAz: azA + d * t, sunEl: A.sunEl + (B.sunEl - A.sunEl) * t, sunColor: lc(A.sunColor, B.sunColor), zenith: lc(A.zenith, B.zenith),
      horizon: lc(A.horizon, B.horizon), ambient: lc(A.ambient, B.ambient), tint: lc(A.tint, B.tint), tintAmt: A.tintAmt + (B.tintAmt - A.tintAmt) * t,
      desat: A.desat + (B.desat - A.desat) * t, haze: A.haze + (B.haze - A.haze) * t, hazeColor: lc(A.hazeColor, B.hazeColor) };
  }

  var Terrain = {
    group: group, U: U, layers: layers, load: load, heightAt: heightAt, heightAtScene: heightAtScene, sceneY: sceneY, scenePos: scenePos,
    pickGround: pickGround, setLight: setLight, lerpLight: lerpLight, hourOverride: null,
    get exag() { return U.uExag.value; }, set exag(v) { U.uExag.value = v; },
    bounds: function () { return byName.world.bbox; },
    layer: function (n) { return byName[n]; },
    setFocus: function (x, z, r, amt) { U.uFocus.value.set(x, z, r); U.uFocusAmt.value = amt; },
    setOverlay: function (tex) { U.uOverlay.value = tex; },
    tick: function (t) { U.uTime.value = t; }
  };
  return Terrain;
})();
