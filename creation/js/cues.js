/* ------------------------------------------------------------------
   In the Beginning: the cue sheet.
   One timeline shared by the picture (js/film.js) and the score
   (tools/creation/score.py reads this file as JSON, so everything after
   the '=' must stay strict JSON: double quotes, no comments).
   Times are seconds from the first frame.
   ------------------------------------------------------------------ */
window.FILM_CUES = {
  "title": "In the Beginning",
  "duration": 72.0,
  "frame": { "width": 1920, "height": 800 },

  "scenes": [
    { "id": "deep",   "t0": 0.0,  "t1": 20.9 },
    { "id": "rise",   "t0": 20.5, "t1": 23.9, "in": { "type": "white", "d": 0.4 } },
    { "id": "hill",   "t0": 23.3, "t1": 33.4, "in": { "type": "cross", "d": 0.6 } },
    { "id": "under",  "t0": 33.0, "t1": 36.5, "in": { "type": "white", "d": 0.4 } },
    { "id": "sky",    "t0": 36.3, "t1": 39.6, "in": { "type": "white", "d": 0.2 } },
    { "id": "plains", "t0": 39.2, "t1": 42.3, "in": { "type": "cross", "d": 0.4 } },
    { "id": "dust",   "t0": 41.7, "t1": 51.0, "in": { "type": "cross", "d": 0.6 } },
    { "id": "eden",   "t0": 50.5, "t1": 60.2, "in": { "type": "cross", "d": 0.5 } },
    { "id": "orbit",  "t0": 60.2, "t1": 72.0, "in": { "type": "cut", "d": 0.0 } }
  ],

  "words": [8.7, 16.0, 20.8, 23.5, 27.9, 33.4, 39.5, 42.3, 61.0],

  "hits": {
    "spirit": 4.0,
    "light": 11.0,
    "morning1": 14.3,
    "expanse": 16.6,
    "cloudrise": 18.2,
    "landrise": 20.9,
    "sprout": 23.6,
    "sunset": 27.6,
    "stars": 28.6,
    "morningstar": 31.6,
    "plunge": 33.0,
    "whale": 34.2,
    "breach": 36.3,
    "herds": 39.2,
    "hush": 41.8,
    "gather": 44.0,
    "breath": 47.4,
    "alive": 48.0,
    "verygood": 50.8,
    "rest": 54.8,
    "dark": 59.0,
    "word": 60.8,
    "sunrise": 65.6,
    "amen": 66.4,
    "end": 71.2
  },

  "text": [
    { "t": 0.9, "end": 5.5, "pos": "c", "lines": [
      { "s": "verse", "x": "In the beginning," },
      { "s": "verse", "x": "God created the heavens and the earth.", "d": 1.2 } ] },
    { "t": 6.0, "end": 8.3, "pos": "l", "lines": [
      { "s": "small", "x": "And the Spirit of God was hovering over the face of the waters." } ] },
    { "t": 8.7, "end": 10.7, "pos": "c", "lines": [
      { "s": "said", "x": "And God said," },
      { "s": "fiat", "x": "“Let there be light,”", "d": 0.6 } ] },
    { "t": 11.9, "end": 14.0, "pos": "l", "lines": [
      { "s": "fiat", "x": "and there was light." } ] },
    { "t": 14.3, "end": 15.7, "pos": "l", "lines": [
      { "s": "day", "x": "The first day" } ] },
    { "t": 16.0, "end": 18.9, "pos": "u", "lines": [
      { "s": "fiat", "x": "“Let there be an expanse in the midst of the waters.”" } ] },
    { "t": 19.1, "end": 20.4, "pos": "l", "lines": [
      { "s": "day", "x": "The second day" } ] },
    { "t": 20.8, "end": 22.9, "pos": "c", "lines": [
      { "s": "fiat", "x": "“Let the dry land appear.”" } ] },
    { "t": 23.5, "end": 25.9, "pos": "u", "lines": [
      { "s": "fiat", "x": "“Let the earth sprout vegetation.”" } ] },
    { "t": 26.1, "end": 27.4, "pos": "l", "lines": [
      { "s": "day", "x": "The third day" } ] },
    { "t": 27.9, "end": 30.6, "pos": "u", "lines": [
      { "s": "fiat", "x": "“Let there be lights in the expanse of the heavens.”" } ] },
    { "t": 31.7, "end": 33.0, "pos": "l", "lines": [
      { "s": "day", "x": "The fourth day" } ] },
    { "t": 33.4, "end": 35.9, "pos": "c", "lines": [
      { "s": "fiat", "x": "“Let the waters swarm with swarms of living creatures,”" } ] },
    { "t": 36.6, "end": 38.5, "pos": "c", "lines": [
      { "s": "fiat", "x": "“and let birds fly above the earth.”" } ] },
    { "t": 38.6, "end": 39.7, "pos": "l", "lines": [
      { "s": "day", "x": "The fifth day" } ] },
    { "t": 39.5, "end": 41.7, "pos": "c", "lines": [
      { "s": "fiat", "x": "“Let the earth bring forth living creatures.”" } ] },
    { "t": 42.3, "end": 45.8, "pos": "c", "lines": [
      { "s": "said", "x": "Then God said," },
      { "s": "fiat", "x": "“Let us make man in our image, after our likeness.”", "d": 0.6 } ] },
    { "t": 48.3, "end": 50.4, "pos": "u", "lines": [
      { "s": "verse", "x": "So God created man in his own image." } ] },
    { "t": 50.9, "end": 53.5, "pos": "u", "lines": [
      { "s": "verse", "x": "And God saw everything that he had made," },
      { "s": "verse", "x": "and behold, it was very good.", "d": 1.0 } ] },
    { "t": 53.6, "end": 54.8, "pos": "l", "lines": [
      { "s": "day", "x": "The sixth day" } ] },
    { "t": 55.0, "end": 58.5, "pos": "u", "lines": [
      { "s": "verse", "x": "Thus the heavens and the earth were finished," },
      { "s": "verse", "x": "and he rested on the seventh day.", "d": 1.3 } ] },
    { "t": 61.2, "end": 64.0, "pos": "u", "lines": [
      { "s": "john", "x": "In the beginning was the Word," } ] },
    { "t": 64.3, "end": 67.0, "pos": "u", "lines": [
      { "s": "john", "x": "All things were made through him." } ] },
    { "t": 67.6, "end": 71.2, "pos": "u", "lines": [
      { "s": "title", "x": "In the Beginning" },
      { "s": "sub", "x": "Genesis 1 · John 1", "d": 0.8 } ] }
  ]
};
