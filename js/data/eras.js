/* ------------------------------------------------------------------
   Eras of the biblical story, and the light each one casts on the land.
   Dates follow the traditional (early) chronology; see the Notes.
   sunAz: degrees clockwise from north.  sunEl: degrees above horizon.
   ------------------------------------------------------------------ */
window.ATLAS = window.ATLAS || {};

ATLAS.ERAS = [
  {
    id: 'primeval', name: 'Beginnings', dates: 'Genesis 1–11', span: 'Creation to Babel',
    blurb: 'Eden, the Flood, the mountains of Ararat and the tower at Babel. Scripture roots the story of the world in the land between the rivers, but gives no dates and few fixed points. The light is a first dawn, still misted.',
    books: ['Genesis 1–11', 'Job (setting)'],
    light: { sunAz: 95, sunEl: 9, sunColor: '#ffd9a8', zenith: '#6e86a8', horizon: '#f1d4b2', ambient: '#8aa0b8', tint: '#c9b8a6', tintAmt: 0.22, desat: 0.25, haze: 0.00060, hazeColor: '#e8d9c4' }
  },
  {
    id: 'patriarchs', name: 'The Patriarchs', dates: 'c. 2100–1800 BC', span: 'Abraham to Joseph',
    blurb: 'A man is called out of Ur to a land he has never seen. Abraham, Isaac and Jacob walk the ridge from Shechem to Beersheba as strangers with a promise. Hard noon light on raw clay: a land not yet possessed.',
    books: ['Genesis 12–50'],
    light: { sunAz: 175, sunEl: 62, sunColor: '#fff3dc', zenith: '#3f6a9e', horizon: '#dcc9ad', ambient: '#7f93aa', tint: '#c98d5a', tintAmt: 0.14, desat: 0.05, haze: 0.00028, hazeColor: '#dccfb8' }
  },
  {
    id: 'exodus', name: 'Exodus & Wilderness', dates: 'c. 1446–1406 BC', span: 'Egypt to the plains of Moab',
    blurb: 'Out of Egypt through the sea, to the mountain where God gave the law and made his dwelling among his people. Forty years in the wilderness. Fire-coloured evening light from the west, long shadows across Sinai.',
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
    light: { sunAz: 262, sunEl: 14, sunColor: '#ffb56b', zenith: '#4a5f88', horizon: '#f2b27a', ambient: '#8a7f8c', tint: '#d99a5a', tintAmt: 0.2, desat: 0.0, haze: 0.00040, hazeColor: '#e6b98f' }
  },
  {
    id: 'conquest-judges', name: 'Conquest & Judges', dates: 'c. 1406–1050 BC', span: 'Joshua to Samuel',
    blurb: 'The Jordan parts, Jericho falls, and the tribes take their allotments. Then the long unsettled centuries of the judges: "in those days there was no king in Israel." Clear morning light, the land divided in colour.',
    books: ['Joshua', 'Judges', 'Ruth', '1 Samuel 1–7'],
    light: { sunAz: 120, sunEl: 40, sunColor: '#fff0d2', zenith: '#3b6ca8', horizon: '#dfd3bd', ambient: '#8ea1b5', tint: '#c9a86a', tintAmt: 0.12, desat: 0.0, haze: 0.00026, hazeColor: '#dcd3c2' }
  },
  {
    id: 'united-kingdom', name: 'The United Kingdom', dates: 'c. 1050–930 BC', span: 'Saul, David, Solomon',
    blurb: 'Saul, David and Solomon. Jerusalem becomes the city of the great King, the Ark comes to rest, and the Temple is filled with glory. Golden hour on a gilded land, from the Brook of Egypt to the Euphrates.',
    books: ['1 Samuel 8–31', '2 Samuel', '1 Kings 1–11', '1 Chronicles', '2 Chronicles 1–9', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Songs'],
    light: { sunAz: 248, sunEl: 22, sunColor: '#ffcf8a', zenith: '#3e5f94', horizon: '#f0c896', ambient: '#8b8a90', tint: '#dcbd82', tintAmt: 0.18, desat: 0.0, haze: 0.00030, hazeColor: '#e9cfa0' }
  },
  {
    id: 'divided-kingdom', name: 'The Divided Kingdom', dates: '930–586 BC', span: 'Israel and Judah; the prophets',
    blurb: 'Two kingdoms, a long line of kings, and the prophets who cried out against them. Samaria falls to Assyria in 722 BC; Jerusalem to Babylon in 586. Cooler light, a sky beginning to cloud.',
    books: ['1 Kings 12–22', '2 Kings', '2 Chronicles 10–36', 'Isaiah', 'Jeremiah', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah'],
    light: { sunAz: 205, sunEl: 34, sunColor: '#f3e6cf', zenith: '#5a6f8a', horizon: '#cfc7b8', ambient: '#8d9199', tint: '#a89a7c', tintAmt: 0.18, desat: 0.22, haze: 0.00048, hazeColor: '#cfc8bc' }
  },
  {
    id: 'exile-return', name: 'Exile & Return', dates: '586–430 BC', span: 'Babylon, Persia, the remnant returns',
    blurb: 'The Temple in ashes, the people by the rivers of Babylon. Then Cyrus, and a remnant walks home to rebuild. Ash-grey light, the cities of the land gone dark; a single lamp relit in Jerusalem.',
    books: ['Lamentations', 'Ezekiel', 'Daniel', 'Ezra', 'Nehemiah', 'Esther', 'Haggai', 'Zechariah', 'Malachi'],
    light: { sunAz: 230, sunEl: 12, sunColor: '#d9c9b4', zenith: '#4b5361', horizon: '#a89f94', ambient: '#6e727a', tint: '#8f8a82', tintAmt: 0.3, desat: 0.55, haze: 0.00080, hazeColor: '#a9a49c' }
  },
  {
    id: 'intertestamental', name: 'Between the Testaments', dates: '430–4 BC', span: 'Alexander, the Maccabees, Herod',
    blurb: 'Alexander sweeps east; Greek cities rise; the Maccabees fight for the Temple; Rome arrives and Herod builds. Four hundred years of silence in which the stage is set. Cool marble light.',
    books: ['(no canonical books)', '1–2 Maccabees (Apocrypha)', 'Daniel 8–11 (prophecy)'],
    light: { sunAz: 160, sunEl: 48, sunColor: '#f4f1ea', zenith: '#4c6f9c', horizon: '#d9d8d2', ambient: '#93a0ae', tint: '#b8b8c2', tintAmt: 0.18, desat: 0.2, haze: 0.00034, hazeColor: '#d6d8d8' }
  },
  {
    id: 'christ', name: 'The Life of Christ', dates: '4 BC – AD 33', span: 'Bethlehem to the Mount of Olives',
    blurb: '"The people who walked in darkness have seen a great light." God comes to Bethlehem, grows up in Nazareth, teaches by Galilee and dies outside Jerusalem. Then the tomb is empty. Dawn breaking over Galilee.',
    books: ['Matthew', 'Mark', 'Luke', 'John'],
    light: { sunAz: 82, sunEl: 7, sunColor: '#ffc98e', zenith: '#4f6b9c', horizon: '#f6c7a2', ambient: '#8c93a6', tint: '#e2a877', tintAmt: 0.16, desat: 0.0, haze: 0.00044, hazeColor: '#f0cfae' }
  },
  {
    id: 'church', name: 'The Church Goes Out', dates: 'AD 33–100', span: 'Acts, Paul, Revelation',
    blurb: 'Fire falls at Pentecost and the gospel runs from Jerusalem to Judea, Samaria and the ends of the earth. Paul crosses Asia and Greece to Rome; John writes to seven churches. High clear morning, the whole world in view.',
    books: ['Acts', 'Romans', '1–2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1–2 Thessalonians', '1–2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1–2 Peter', '1–3 John', 'Jude', 'Revelation'],
    light: { sunAz: 140, sunEl: 55, sunColor: '#fff6e6', zenith: '#2f66a8', horizon: '#dbe0dd', ambient: '#93a6bb', tint: '#d6b27a', tintAmt: 0.1, desat: 0.0, haze: 0.00022, hazeColor: '#d8dcd8' }
  }
];

/* default boundary group to show for each era */
ATLAS.ERA_REGION_GROUP = {
  'primeval': null, 'patriarchs': 'kingdoms', 'exodus': 'kingdoms', 'conquest-judges': 'tribes',
  'united-kingdom': 'kingdoms', 'divided-kingdom': 'kingdoms', 'exile-return': 'empires',
  'intertestamental': 'empires', 'christ': 'nt', 'church': 'provinces'
};

ATLAS.REGION_GROUP_NAMES = {
  tribes: 'Tribal allotments', kingdoms: 'Kingdoms & neighbours', empires: 'Empires',
  nt: 'Herodian & Roman districts', provinces: 'Roman provinces'
};
