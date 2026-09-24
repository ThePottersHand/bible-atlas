/* ------------------------------------------------------------------
   Small WebGL2 helpers: programs with typed uniform setters, half-float
   render targets and the one full-screen triangle every pass draws.
   ------------------------------------------------------------------ */
window.FILM = window.FILM || {};

FILM.GL = (function () {
  var gl = null, tri = null;

  function init(canvas, opts) {
    gl = canvas.getContext('webgl2', {
      antialias: false, alpha: false, depth: false, stencil: false, premultipliedAlpha: false,
      preserveDrawingBuffer: !!(opts && opts.preserve), powerPreference: 'high-performance'
    });
    if (!gl) return null;
    gl.getExtension('EXT_color_buffer_float');
    gl.getExtension('EXT_color_buffer_half_float');
    gl.getExtension('OES_texture_float_linear');
    tri = gl.createVertexArray();
    gl.bindVertexArray(tri);
    var b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
    return gl;
  }

  var FS_VERT = '#version 300 es\nlayout(location=0) in vec2 aPos; out vec2 vUv;\n' +
    'void main(){ vUv = aPos*0.5+0.5; gl_Position = vec4(aPos, 0.0, 1.0); }';

  function numbered(src) {
    return src.split('\n').map(function (l, i) { return (i + 1) + ': ' + l; }).join('\n');
  }
  function compile(type, src, name) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      var log = gl.getShaderInfoLog(s);
      console.error('[' + name + '] ' + log + '\n' + numbered(src));
      throw new Error('Shader ' + name + ': ' + log);
    }
    return s;
  }

  /* program(name, fragSrc[, vertSrc]) -> { p, set(name, value), use() } */
  function program(name, frag, vert) {
    var p = gl.createProgram();
    gl.attachShader(p, compile(gl.VERTEX_SHADER, vert || FS_VERT, name + '.vert'));
    gl.attachShader(p, compile(gl.FRAGMENT_SHADER, frag, name + '.frag'));
    gl.bindAttribLocation(p, 0, 'aPos');
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error('Link ' + name + ': ' + gl.getProgramInfoLog(p));
    var info = {}, n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (var i = 0; i < n; i++) {
      var a = gl.getActiveUniform(p, i), nm = a.name.replace(/\[0\]$/, '');
      info[nm] = { loc: gl.getUniformLocation(p, a.name), type: a.type, size: a.size };
    }
    var unit = 0;
    var prog = {
      p: p, name: name,
      use: function () { gl.useProgram(p); unit = 0; return prog; },
      set: function (k, v) {
        var u = info[k];
        if (!u) return prog;
        switch (u.type) {
          case gl.FLOAT: if (u.size > 1) gl.uniform1fv(u.loc, v); else gl.uniform1f(u.loc, v); break;
          case gl.FLOAT_VEC2: gl.uniform2fv(u.loc, v); break;
          case gl.FLOAT_VEC3: gl.uniform3fv(u.loc, v); break;
          case gl.FLOAT_VEC4: gl.uniform4fv(u.loc, v); break;
          case gl.FLOAT_MAT3: gl.uniformMatrix3fv(u.loc, false, v); break;
          case gl.FLOAT_MAT4: gl.uniformMatrix4fv(u.loc, false, v); break;
          case gl.INT: case gl.BOOL: gl.uniform1i(u.loc, v); break;
          case gl.SAMPLER_2D:
            gl.activeTexture(gl.TEXTURE0 + unit);
            gl.bindTexture(gl.TEXTURE_2D, v && v.tex ? v.tex : v);
            gl.uniform1i(u.loc, unit++);
            break;
        }
        return prog;
      },
      setAll: function (o) { for (var k in o) prog.set(k, o[k]); return prog; }
    };
    return prog;
  }

  function texture(w, h, opts) {
    opts = opts || {};
    var t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    var half = opts.half !== false;
    gl.texImage2D(gl.TEXTURE_2D, 0, half ? gl.RGBA16F : gl.RGBA8, w, h, 0, gl.RGBA, half ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE, opts.data || null);
    var f = opts.nearest ? gl.NEAREST : gl.LINEAR;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, f);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, f);
    var wrap = opts.repeat ? gl.REPEAT : gl.CLAMP_TO_EDGE;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
    return t;
  }

  function target(w, h, opts) {
    w = Math.max(1, Math.round(w)); h = Math.max(1, Math.round(h));
    var t = texture(w, h, opts);
    var fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { fb: fb, tex: t, w: w, h: h, release: function () { gl.deleteFramebuffer(fb); gl.deleteTexture(t); } };
  }

  function bind(tg) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, tg ? tg.fb : null);
    if (tg) gl.viewport(0, 0, tg.w, tg.h);
  }

  function draw() {
    gl.bindVertexArray(tri);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindVertexArray(null);
  }

  return { init: init, program: program, target: target, texture: texture, bind: bind, draw: draw,
    get gl() { return gl; }, FS_VERT: FS_VERT };
})();
