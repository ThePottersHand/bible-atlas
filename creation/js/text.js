/* ------------------------------------------------------------------
   Scripture on screen. Every line is a DOM element whose opacity, blur
   and tracking are set from film time, never from CSS animation, so a
   frame rendered for export matches the frame seen live.
   ------------------------------------------------------------------ */
window.FILM = window.FILM || {};

FILM.Text = (function () {
  var U = FILM.U, items = [], root = null;
  var IN = { verse: 1.1, small: 0.9, said: 0.7, fiat: 0.9, day: 0.6, john: 1.3, title: 1.6, sub: 1.2 };
  var OUT = { verse: 0.9, small: 0.8, said: 0.7, fiat: 0.8, day: 0.5, john: 1.0, title: 1.2, sub: 1.2 };

  function init(el, cues) {
    root = el;
    root.innerHTML = '';
    cues.text.forEach(function (c) {
      var box = document.createElement('div');
      box.className = 'cue pos-' + (c.pos || 'c');
      var lines = c.lines.map(function (l) {
        var d = document.createElement('div');
        d.className = 'ln s-' + l.s;
        d.textContent = l.x;
        box.appendChild(d);
        return { el: d, s: l.s, d: l.d || 0 };
      });
      root.appendChild(box);
      items.push({ box: box, t: c.t, end: c.end, lines: lines });
    });
  }

  function update(t) {
    items.forEach(function (it) {
      var on = t > it.t - 0.05 && t < it.end + 0.05;
      it.box.style.display = on ? '' : 'none';
      if (!on) return;
      it.lines.forEach(function (l) {
        var a = U.sstep(0, IN[l.s], t - it.t - l.d);
        var b = U.sstep(0, OUT[l.s], it.end - t);
        var k = Math.min(a, b);
        var rise = (1 - a) * 0.18 - (1 - b) * 0.12;          // drift up a little on the way in, and out
        var blur = (1 - a) * 0.9 + (1 - b) * 0.7;
        var track = (1 - U.easeOut(a)) * 0.08;
        l.el.style.opacity = k.toFixed(4);
        l.el.style.filter = blur > 0.01 ? 'blur(calc(var(--u) * ' + (blur * 4).toFixed(3) + '))' : 'none';
        l.el.style.transform = 'translateY(calc(var(--u) * ' + (rise * 40).toFixed(3) + '))';
        l.el.style.letterSpacing = 'calc(var(--track, 0em) + ' + track.toFixed(4) + 'em)';
      });
    });
  }

  return { init: init, update: update };
})();
