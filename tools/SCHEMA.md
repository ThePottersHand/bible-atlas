# Bible Atlas — content data schema

All data files are plain browser JS (no modules, no build step), each starting with
`window.ATLAS = window.ATLAS || {};` and assigning one array. Use single quotes in JS,
escape apostrophes inside strings with \' . UTF-8. No trailing commas problems (ES5-safe).

## Era ids (use exactly these)
primeval            Genesis 1–11: Eden, Ararat, Babel (undated)
patriarchs          c. 2100–1800 BC: Abraham, Isaac, Jacob, Joseph
exodus              c. 1446–1406 BC: Egypt, Red Sea, Sinai, wilderness (early date default)
conquest-judges     c. 1406–1050 BC: Joshua, Judges, Ruth, Samuel
united-kingdom      c. 1050–930 BC: Saul, David, Solomon
divided-kingdom     930–586 BC: Israel & Judah, Assyria, Babylon; fall of Samaria 722, Jerusalem 586
exile-return        586–430 BC: Babylon, Persia, Ezra, Nehemiah, Esther
intertestamental    430–4 BC: Alexander, Ptolemies, Seleucids, Maccabees, Herod
christ              4 BC–AD 33: Life of Jesus
church              AD 33–100: Acts, Paul, Revelation

## js/data/places.js  ->  ATLAS.PLACES = [ {...}, ... ]
{
  id: 'jerusalem',                 // unique kebab-case
  name: 'Jerusalem',
  alt: ['Jebus', 'Salem', 'Zion'], // other biblical names (optional)
  original: 'יְרוּשָׁלַיִם Yerushalayim',   // Hebrew (OT) or Greek (NT) with transliteration (optional)
  lat: 31.7784, lon: 35.2354,      // decimal degrees, 4 dp, of the ancient site (tell), not the modern city centre
  elev: 760,                       // metres above sea level (optional; negative allowed e.g. Jericho -258)
  type: 'city',                    // city | town | mountain | river | sea | region | wilderness | site | island | desert
  rank: 1,                         // 1 = always labelled (Jerusalem, Babylon, Rome, Nile); 2 major; 3 minor; 4 only when close
  confidence: 'certain',           // certain | probable | traditional | disputed | unknown
  alternatives: [                  // ONLY for disputed/traditional sites; other candidate locations
    { name: 'Jebel al-Lawz', lat: 28.654, lon: 35.304, note: 'Proposed by ... ; problems: ...' }
  ],
  eras: ['patriarchs', 'united-kingdom', 'christ'],   // eras when it matters; [] means all eras
  refs: ['Genesis 14:18', '2 Samuel 5:6-10', 'Luke 19:41'],   // key references, 2–6
  verse: { ref: 'Psalm 122:6', text: 'Pray for the peace of Jerusalem! May they be secure who love you!' }, // ONE short ESV quotation (1–2 verses). Optional. Must be accurate ESV wording.
  summary: 'One or two sentences. What it is and why it matters.',
  detail: 'One to three paragraphs (join paragraphs with \n\n). Historically careful: distinguish what Scripture says from archaeology and tradition. Mention excavation evidence where well known.',
  christ: 'Optional "Pointing to Christ" note: how this place figures in redemptive history, prophecy, or typology. 1–3 sentences, no forced allegory.',
  modern: 'Modern name / country (optional)',
  identification: 'Optional note on how the site was identified and how secure it is.'
}

## js/data/journeys.js  ->  ATLAS.JOURNEYS = [ {...}, ... ]
{
  id: 'abraham',
  name: 'Abraham: the Journey of Faith',
  era: 'patriarchs',
  color: '#c9a227',                // thread colour (hex)
  refs: 'Genesis 11:31 – 25:10',
  summary: 'One or two sentences.',
  duration: 'c. 2091–1991 BC (traditional dating)',   // optional human-readable
  stops: [
    {
      place: 'ur',                 // id from places.js (preferred) — OR lat/lon for a point that is not a place
      lat: 30.9626, lon: 46.1030, // only if no place id
      title: 'Ur of the Chaldeans',
      ref: 'Genesis 11:28-31',
      text: 'Narration for this stop: 2–4 sentences, warm and clear, historically grounded.',
      christ: 'Optional 1-sentence Christ-centred note.',
      via: [[lat, lon], [lat, lon]] // optional intermediate waypoints travelled BEFORE reaching this stop (to route along rivers/roads/coasts, avoid crossing sea etc.)
    }
  ]
}

## js/data/regions.js  ->  ATLAS.REGIONS = [ ... ]  and  ATLAS.RIVERS = [ ... ]
Region:
{
  id: 'tribe-judah', name: 'Judah', group: 'tribes',   // group: tribes | kingdoms | empires | provinces | nt
  eras: ['conquest-judges', 'united-kingdom'],        // eras in which this boundary is shown
  color: '#b3202a',
  polygon: [[lat, lon], [lat, lon], ...],             // closed implicitly; 8–30 points; APPROXIMATE is fine
  label: [lat, lon],                                  // where to put the name
  note: 'Approximate, after Joshua 15. Boundaries in Scripture are lists of towns, not lines.'
}
River:
{ id: 'jordan', name: 'Jordan', rank: 1, points: [[lat, lon], ...] }   // rank 1 major (Nile, Euphrates, Tigris, Jordan), 2 minor
Sea/lake labels are places of type 'sea' in places.js.
