/* ------------------------------------------------------------------
   UI: the Scroll (timeline), the Stele (place card), Threads & Layers
   panels, search, narration bar, toasts, help.  Pure DOM; talks to
   ATLAS.App for everything that touches the scene.
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.UI = (function () {
  var App, GEO = ATLAS.GEO;
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var el = function (tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var paras = function (s) { return String(s || '').split(/\n\n+/).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join(''); };
  var CONF = { certain: 'Certain', probable: 'Probable', traditional: 'Traditional site', disputed: 'Disputed', unknown: 'Unknown' };
  var TYPE = { city: 'City', town: 'Town', mountain: 'Mountain', river: 'River', sea: 'Sea', region: 'Region', wilderness: 'Wilderness', desert: 'Desert', site: 'Site', island: 'Island' };
  var steleAnchor = null, toastTimer = null, bannerTimer = null;

  function init(app) {
    App = app;
    buildScroll();
    buildThreads();
    wireTools();
    wireLayers();
    wireSearch();
    wireKeys();
    $('#stele .close').addEventListener('click', function () { App.deselect(); });
    $('#narr-close').addEventListener('click', function () { App.stopJourney(); });
    $('#narr-play').addEventListener('click', function () { App.togglePlay(); });
    $('#narr-prev').addEventListener('click', function () { App.stepStop(-1); });
    $('#narr-next').addEventListener('click', function () { App.stepStop(1); });
    $('#stand-exit').addEventListener('click', function () { App.exitStand(); });
    $('#help .close').addEventListener('click', function () { closePanels(); });
    $('#help').addEventListener('click', function (e) { if (e.target === e.currentTarget) closePanels(); });
  }

  /* ---------- the Scroll ---------- */
  function buildScroll() {
    var host = $('#eras'); host.innerHTML = '';
    ATLAS.ERAS.forEach(function (e, i) {
      var d = el('button', 'era', '<span class="n">' + (i + 1) + '</span><span class="nm">' + esc(e.name) + '</span><span class="dt">' + esc(e.dates) + '</span>');
      d.dataset.id = e.id; d.title = e.span;
      d.addEventListener('click', function () { App.setEra(e.id); });
      host.appendChild(d);
    });
  }
  function setEra(era) {
    $$('#eras .era').forEach(function (d) { d.classList.toggle('on', d.dataset.id === era.id); });
    var b = $('#books'); b.innerHTML = era.books.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('');
    var on = $('#eras .era.on'); if (on && on.scrollIntoView) { try { on.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }); } catch (e) { } }
    banner('<h3>' + esc(era.name) + '</h3><div class="dt">' + esc(era.dates) + ' · ' + esc(era.span) + '</div><p>' + esc(era.blurb) + '</p>');
  }
  function banner(html) {
    var b = $('#banner'); b.innerHTML = html; b.classList.add('show');
    clearTimeout(bannerTimer); bannerTimer = setTimeout(function () { b.classList.remove('show'); }, 6500);
  }

  /* ---------- Threads panel ---------- */
  function buildThreads() {
    var host = $('#threads-list'); host.innerHTML = '';
    var byEra = {};
    ATLAS.JOURNEYS = ATLAS.JOURNEYS || [];
    ATLAS.JOURNEYS.forEach(function (j) { (byEra[j.era] = byEra[j.era] || []).push(j); });
    var spanning = ['scarlet-thread', 'presence'];
    var top = ATLAS.JOURNEYS.filter(function (j) { return spanning.indexOf(j.id) >= 0; });
    if (top.length) { host.appendChild(el('h3', '', 'Through the whole Bible')); top.forEach(function (j) { host.appendChild(threadItem(j)); }); }
    ATLAS.ERAS.forEach(function (e) {
      var list = (byEra[e.id] || []).filter(function (j) { return spanning.indexOf(j.id) < 0; });
      if (!list.length) return;
      host.appendChild(el('h3', '', esc(e.name) + ' <small>' + esc(e.dates) + '</small>'));
      list.forEach(function (j) { host.appendChild(threadItem(j)); });
    });
  }
  function threadItem(j) {
    var d = el('button', 'thread', '<span class="sw" style="--c:' + j.color + '"></span><span class="tx"><b>' + esc(j.name) + '</b><small>' + esc(j.summary || '') + '</small><em>' + j.stops.length + ' stops' + (j.duration ? ' · ' + esc(j.duration) : '') + '</em></span>');
    d.dataset.id = j.id;
    d.addEventListener('click', function () { App.playJourney(j.id); closePanels(); });
    return d;
  }
  function markThread(id) { $$('#threads-list .thread').forEach(function (d) { d.classList.toggle('on', d.dataset.id === id); }); }

  /* ---------- tools / panels ---------- */
  function wireTools() {
    $('#btn-threads').addEventListener('click', function () { togglePanel('panel-threads'); });
    $('#btn-layers').addEventListener('click', function () { togglePanel('panel-layers'); });
    $('#btn-light').addEventListener('click', function () { togglePanel('pop-light'); });
    $('#btn-help').addEventListener('click', function () { togglePanel('help'); });
    $('#btn-measure').addEventListener('click', function () { App.toggleMeasure(); });
    $('#btn-sound').addEventListener('click', function () { App.toggleSound(); });
    $('#btn-home').addEventListener('click', function () { App.home(); });
    $('#hour').addEventListener('input', function (e) { App.setHour(parseFloat(e.target.value)); });
    $('#hour-reset').addEventListener('click', function () { App.setHour(null); });
  }
  function togglePanel(id) {
    var p = document.getElementById(id), open = p.classList.contains('open');
    closePanels();
    if (!open) p.classList.add('open');
  }
  function closePanels() { $$('.panel, .pop, .modal').forEach(function (p) { p.classList.remove('open'); }); }

  function wireLayers() {
    $('#lay-regions').addEventListener('change', function (e) { App.setRegionGroup(e.target.value || null); });
    $('#lay-rivers').addEventListener('change', function (e) { App.setLayer('rivers', e.target.checked); });
    $('#lay-proph').addEventListener('change', function (e) { App.setLayer('prophecy', e.target.checked); });
    $('#lay-density').addEventListener('input', function (e) { App.setLayer('density', parseFloat(e.target.value)); });
    $('#lay-exag').addEventListener('input', function (e) { App.setExag(parseFloat(e.target.value)); });
  }
  function syncLayers(st, groups) {
    var sel = $('#lay-regions'); sel.innerHTML = '<option value="">None</option>' + groups.map(function (g) { return '<option value="' + g + '"' + (g === st.regionGroup ? ' selected' : '') + '>' + esc(ATLAS.REGION_GROUP_NAMES[g] || g) + '</option>'; }).join('');
    $('#lay-rivers').checked = st.rivers; $('#lay-proph').checked = st.prophecy;
    $('#lay-density').value = st.density; $('#lay-exag').value = st.exag;
    $('#hour').value = st.hour === null ? 12 : st.hour;
    $('#pop-light .val').textContent = st.hour === null ? 'The era’s own light' : fmtHour(st.hour);
    $('#btn-measure').classList.toggle('on', st.measuring);
    $('#btn-sound').classList.toggle('off', st.muted);
    $('#btn-sound').textContent = st.muted ? '♪̸' : '♪';
  }
  function fmtHour(h) { var hh = Math.floor(h), mm = Math.round((h - hh) * 60); return (hh % 12 === 0 ? 12 : hh % 12) + ':' + (mm < 10 ? '0' : '') + mm + (hh < 12 ? ' am' : ' pm'); }

  /* ---------- search ---------- */
  function wireSearch() {
    var q = $('#q'), res = $('#search-results'), idx = -1;
    function render(list) {
      res.innerHTML = list.map(function (p, i) {
        return '<li data-id="' + p.id + '"' + (i === idx ? ' class="on"' : '') + '><b>' + esc(p.name) + '</b><small>' + esc(TYPE[p.type] || p.type) + (p.alt && p.alt.length ? ' · ' + esc(p.alt.slice(0, 3).join(', ')) : '') + '</small></li>';
      }).join('');
      res.classList.toggle('open', list.length > 0);
    }
    var cur = [];
    q.addEventListener('input', function () {
      var s = q.value.trim().toLowerCase(); idx = -1;
      if (s.length < 2) { cur = []; render(cur); return; }
      cur = App.search(s).slice(0, 9); render(cur);
    });
    q.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { idx = Math.min(cur.length - 1, idx + 1); render(cur); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { idx = Math.max(0, idx - 1); render(cur); e.preventDefault(); }
      else if (e.key === 'Enter') { var p = cur[idx >= 0 ? idx : 0]; if (p) { App.selectPlace(p.id, { fly: true }); q.value = ''; cur = []; render(cur); q.blur(); } }
      else if (e.key === 'Escape') { q.value = ''; cur = []; render(cur); q.blur(); }
    });
    res.addEventListener('click', function (e) {
      var li = e.target.closest('li'); if (!li) return;
      App.selectPlace(li.dataset.id, { fly: true }); q.value = ''; cur = []; render(cur);
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('#search')) { cur = []; render(cur); } });
  }

  function wireKeys() {
    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (e.key === '/') { e.preventDefault(); $('#q').focus(); }
      else if (e.key === 'Escape') { if ($('.panel.open, .pop.open, .modal.open')) closePanels(); else if (App.isStanding()) App.exitStand(); else App.deselect(); }
      else if (e.key === ']') App.stepEra(1);
      else if (e.key === '[') App.stepEra(-1);
      else if (e.key === ' ') { if (App.hasJourney()) { e.preventDefault(); App.togglePlay(); } }
      else if (e.key === 'n' || e.key === 'ArrowRight') { if (App.hasJourney()) App.stepStop(1); }
      else if (e.key === 'p' || e.key === 'ArrowLeft') { if (App.hasJourney()) App.stepStop(-1); }
      else if (e.key === 'h') App.home();
      else if (e.key === 's') App.standSelected();
      else if (e.key === 'm') App.toggleMeasure();
      else if (e.key === 't') togglePanel('panel-threads');
      else if (e.key === 'l') togglePanel('panel-layers');
      else if (e.key === '?') togglePanel('help');
    });
  }

  /* ---------- the Stele ---------- */
  function chips(refs) { return (refs || []).map(function (r) { return '<span class="chip">' + esc(r) + '</span>'; }).join(''); }
  function conf(c) { return c ? '<span class="conf c-' + c + '">' + (CONF[c] || c) + '</span>' : ''; }

  function showPlace(p, journeysThrough, prophs) {
    var b = $('#stele .body'), h = [];
    h.push('<div class="kicker">' + esc(TYPE[p.type] || p.type) + (p.confidence ? ' · ' + conf(p.confidence) : '') + '</div>');
    h.push('<h2>' + esc(p.name) + '</h2>');
    if (p.original) h.push('<div class="orig">' + esc(p.original) + '</div>');
    if (p.alt && p.alt.length) h.push('<div class="alt">Also called ' + esc(p.alt.join(', ')) + '</div>');
    var meta = [];
    if (typeof p.elev === 'number') meta.push((p.elev < 0 ? '' : '') + p.elev + ' m ' + (p.elev < 0 ? 'below' : 'above') + ' sea level');
    meta.push(GEO.fmtCoord(p.lat, p.lon));
    if (p.modern) meta.push(esc(p.modern));
    h.push('<div class="meta">' + meta.join(' · ') + '</div>');
    if (p.verse && p.verse.text) h.push('<blockquote class="verse">“' + esc(p.verse.text) + '”<cite>' + esc(p.verse.ref) + '</cite></blockquote>');
    if (p.summary) h.push('<p class="summary">' + esc(p.summary) + '</p>');
    if (p.detail) h.push('<div class="detail">' + paras(p.detail) + '</div>');
    if (p.christ) h.push('<div class="christ"><h4>Pointing to Christ</h4><p>' + esc(p.christ) + '</p></div>');
    if (prophs && prophs.length) {
      h.push('<div class="proph"><h4>Prophecy fulfilled here</h4>' + prophs.map(function (x) {
        return '<div class="pf"><b>' + esc(x.title) + '</b><blockquote>“' + esc(x.prophecy.text) + '”<cite>' + esc(x.prophecy.ref) + '</cite></blockquote><div class="ful"><span>Fulfilment</span> ' + esc(x.fulfilment.text) + ' <cite>' + esc(x.fulfilment.ref) + '</cite></div>' + (x.note ? '<p class="nt">' + esc(x.note) + '</p>' : '') + '</div>';
      }).join('') + '</div>');
    }
    if (p.alternatives && p.alternatives.length) {
      h.push('<div class="alts"><h4>Other proposed locations</h4><ul>' + p.alternatives.map(function (a, i) {
        return '<li><button class="alt-go" data-i="' + i + '"><b>' + esc(a.name) + '</b></button>' + (a.note ? '<span>' + esc(a.note) + '</span>' : '') + '</li>';
      }).join('') + '</ul></div>');
    }
    if (p.identification) h.push('<div class="ident"><h4>Identification</h4><p>' + esc(p.identification) + '</p></div>');
    if (p.refs && p.refs.length) h.push('<div class="refs"><h4>Scripture</h4>' + chips(p.refs) + '</div>');
    if (journeysThrough && journeysThrough.length) {
      h.push('<div class="through"><h4>Threads through this place</h4>' + journeysThrough.map(function (j) {
        return '<button class="thr" data-id="' + j.id + '" style="--c:' + j.color + '"><span class="sw"></span>' + esc(j.name) + '</button>';
      }).join('') + '</div>');
    }
    h.push('<div class="actions"><button id="act-stand">Stand here</button><button id="act-fly">Fly closer</button><button id="act-link">Copy link</button></div>');
    b.innerHTML = h.join('');
    b.scrollTop = 0;
    $('#stele').classList.add('open'); steleAnchor = p.id;
    $('#act-stand').addEventListener('click', function () { App.stand(p.id); });
    $('#act-fly').addEventListener('click', function () { App.selectPlace(p.id, { fly: true, close: true }); });
    $('#act-link').addEventListener('click', function () { App.copyLink(); });
    $$('#stele .alt-go').forEach(function (btn) { btn.addEventListener('click', function () { var a = p.alternatives[+btn.dataset.i]; App.flyToLatLon(a.lat, a.lon, 40); toast('Alternative site: ' + a.name); }); });
    $$('#stele .thr').forEach(function (btn) { btn.addEventListener('click', function () { App.playJourney(btn.dataset.id); }); });
  }

  function showStop(j, handle, i) {
    var s = handle.stops[i], st = s.stop, b = $('#stele .body'), h = [];
    h.push('<div class="kicker"><span class="sw" style="--c:' + j.color + '"></span>' + esc(j.name) + ' · stop ' + (i + 1) + ' of ' + handle.stops.length + '</div>');
    h.push('<h2>' + esc(st.title) + '</h2>');
    if (st.ref) h.push('<div class="meta">' + esc(st.ref) + (i > 0 ? ' · ' + GEO.fmtKm(s.km - handle.stops[i - 1].km) + ' from the last stop' : '') + '</div>');
    if (st.text) h.push('<div class="detail">' + paras(st.text) + '</div>');
    if (st.christ) h.push('<div class="christ"><h4>Pointing to Christ</h4><p>' + esc(st.christ) + '</p></div>');
    if (st.place && App.place(st.place)) h.push('<div class="actions"><button id="act-place">About ' + esc(App.place(st.place).name) + '</button><button id="act-stand">Stand here</button></div>');
    else h.push('<div class="actions"><button id="act-stand">Stand here</button></div>');
    b.innerHTML = h.join(''); b.scrollTop = 0;
    $('#stele').classList.add('open'); steleAnchor = null;
    var ap = $('#act-place'); if (ap) ap.addEventListener('click', function () { App.selectPlace(st.place, { fly: false, keepJourney: true }); });
    $('#act-stand').addEventListener('click', function () { App.standAt(s.lat, s.lon, st.title); });
    /* narration bar */
    $('#narr-stop').textContent = (i + 1) + ' / ' + handle.stops.length;
    $$('#narr-dots span').forEach(function (d, k) { d.classList.toggle('on', k <= i); d.classList.toggle('cur', k === i); });
  }
  function showProphecy(x) {
    var b = $('#stele .body');
    b.innerHTML = '<div class="kicker">Prophecy &amp; fulfilment</div><h2>' + esc(x.title) + '</h2>' +
      '<blockquote class="verse">“' + esc(x.prophecy.text) + '”<cite>' + esc(x.prophecy.ref) + '</cite></blockquote>' +
      '<div class="ful"><span>Fulfilment</span> ' + esc(x.fulfilment.text) + ' <cite>' + esc(x.fulfilment.ref) + '</cite></div>' +
      (x.note ? '<p class="nt">' + esc(x.note) + '</p>' : '') +
      (App.place(x.place) ? '<div class="actions"><button id="act-place">About ' + esc(App.place(x.place).name) + '</button></div>' : '');
    $('#stele').classList.add('open'); steleAnchor = x.place;
    var ap = $('#act-place'); if (ap) ap.addEventListener('click', function () { App.selectPlace(x.place, { fly: true }); });
  }
  function hideStele() { $('#stele').classList.remove('open'); steleAnchor = null; }

  function narration(j, handle) {
    var n = $('#narration');
    if (!j) { n.classList.remove('open'); return; }
    $('#narr-title').textContent = j.name;
    $('#narr-sub').textContent = (j.refs || '') + (j.duration ? ' · ' + j.duration : '') + ' · ' + GEO.fmtKm(handle.total) + ' in all';
    $('#narr-dots').innerHTML = handle.stops.map(function (s) { return '<span title="' + esc(s.stop.title) + '"></span>'; }).join('');
    $$('#narr-dots span').forEach(function (d, k) { d.addEventListener('click', function () { App.gotoStop(k); }); });
    n.classList.add('open');
  }
  function setPlaying(b) { $('#narr-play').textContent = b ? '❚❚' : '▶'; $('#narr-play').title = b ? 'Pause' : 'Play'; }
  function setProgress(f) { $('#narr-bar span').style.width = (f * 100).toFixed(2) + '%'; }

  function standbar(on, title) { var s = $('#standbar'); s.classList.toggle('open', !!on); if (title) $('#stand-title').textContent = title; }
  function compass(deg) { var c = $('#stand-compass'); if (c) c.style.transform = 'rotate(' + (-deg) + 'deg)'; }

  function toast(msg, ms) {
    var t = $('#toast'); t.innerHTML = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('show'); }, ms || 3200);
  }
  function hud(html) { $('#hud').innerHTML = html; }

  /* leader line from the stele to the selected marker */
  function leader(pt) {
    var svg = $('#leader'), path = svg.firstElementChild;
    if (!pt || !steleAnchor || !$('#stele').classList.contains('open') || pt.hidden) { path.setAttribute('d', ''); return; }
    var card = $('#stele').getBoundingClientRect();
    var x0 = card.left, y0 = card.top + 46;
    if (window.innerWidth < 760) { x0 = card.left + card.width / 2; y0 = card.top; }
    var mx = (x0 + pt.x) / 2;
    path.setAttribute('d', 'M' + x0 + ',' + y0 + ' C' + mx + ',' + y0 + ' ' + mx + ',' + pt.y + ' ' + pt.x + ',' + pt.y);
  }
  function anchor() { return steleAnchor; }

  return { init: init, setEra: setEra, banner: banner, markThread: markThread, closePanels: closePanels, syncLayers: syncLayers, showPlace: showPlace, showStop: showStop,
    showProphecy: showProphecy, hideStele: hideStele, narration: narration, setPlaying: setPlaying, setProgress: setProgress, standbar: standbar, compass: compass,
    toast: toast, hud: hud, leader: leader, anchor: anchor, fmtHour: fmtHour };
})();
