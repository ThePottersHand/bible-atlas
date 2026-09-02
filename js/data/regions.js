// Bible Atlas — region polygons and river polylines.
// All coordinates are [lat, lon] in decimal degrees. Polygons are APPROXIMATE:
// ancient boundaries were lists of towns and natural features, not surveyed lines,
// and most changed within the era shown. See each region's `note`.
window.ATLAS = window.ATLAS || {};
var ATLAS = window.ATLAS; // alias so the file also loads outside a browser (node checks)

ATLAS.REGIONS = [

  // ------------------------------------------------------------------
  // TRIBES (Joshua 13–19) — shown for conquest-judges and united-kingdom
  // ------------------------------------------------------------------
  {
    id: 'tribe-judah', name: 'Judah', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#b3202a',
    polygon: [
      [31.87, 34.70], [31.79, 34.91], [31.75, 34.98], [31.80, 35.10], [31.77, 35.23],
      [31.80, 35.35], [31.83, 35.50], [31.60, 35.45], [31.30, 35.45], [31.05, 35.45],
      [30.95, 35.35], [30.80, 35.25], [30.69, 34.49], [30.90, 34.30], [31.13, 33.80],
      [31.29, 34.25], [31.50, 34.47], [31.67, 34.55], [31.80, 34.65]
    ],
    label: [31.45, 35.05],
    note: 'Approximate, after Joshua 15:1-12. The allotment nominally ran to the Mediterranean and the Brook of Egypt, but the coastal plain was held by the Philistines throughout the period; the northern line (Beth-hoglah to Kiriath-jearim to the sea at Jabneel) is a town list, not a surveyed border. Simeon lay inside its southern part.'
  },
  {
    id: 'tribe-simeon', name: 'Simeon', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#d9825b',
    polygon: [
      [31.45, 34.55], [31.45, 34.95], [31.35, 35.10], [31.15, 35.10], [31.00, 34.90],
      [30.95, 34.60], [31.10, 34.40], [31.30, 34.40]
    ],
    label: [31.22, 34.78],
    note: 'Approximate. Joshua 19:1-9 gives Simeon only a list of Negev towns (Beersheba, Ziklag, Hormah, Sharuhen) inside Judah\'s allotment, with no boundary. The polygon simply encloses those towns; Simeon was absorbed into Judah early (Judges 1:3).'
  },
  {
    id: 'tribe-benjamin', name: 'Benjamin', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#c9a227',
    polygon: [
      [31.83, 35.52], [31.90, 35.50], [31.95, 35.40], [31.95, 35.25], [31.93, 35.15],
      [31.88, 35.05], [31.80, 35.10], [31.77, 35.23], [31.80, 35.35], [31.83, 35.50]
    ],
    label: [31.87, 35.28],
    note: 'Approximate, after Joshua 18:11-28: a narrow strip between Judah and Ephraim from the Jordan near Jericho west to Kiriath-jearim and Lower Beth-horon. Jerusalem (Jebus) sat on the Judah–Benjamin line.'
  },
  {
    id: 'tribe-dan', name: 'Dan', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#6b8e5a',
    polygon: [
      [32.10, 34.78], [32.05, 34.95], [31.95, 35.05], [31.88, 35.05], [31.80, 35.10],
      [31.75, 34.98], [31.79, 34.91], [31.78, 34.85], [31.87, 34.70], [32.05, 34.75]
    ],
    label: [31.92, 34.88],
    note: 'Original coastal allotment after Joshua 19:40-48 (Zorah, Eshtaol, Timnah, Ekron, Me-jarkon, Joppa). Dan never secured it against the Amorites and Philistines (Judges 1:34) and most of the tribe migrated north to Laish (Judges 18); see Dan (Laish).'
  },
  {
    id: 'tribe-ephraim', name: 'Ephraim', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#3f7f9f',
    polygon: [
      [32.20, 34.85], [32.15, 34.95], [32.13, 35.10], [32.11, 35.20], [32.20, 35.30],
      [32.15, 35.40], [32.05, 35.50], [31.95, 35.55], [31.90, 35.50], [31.95, 35.40],
      [31.95, 35.25], [31.93, 35.15], [31.88, 35.05], [31.95, 35.05], [32.05, 34.95],
      [32.10, 34.78]
    ],
    label: [32.02, 35.25],
    note: 'Approximate, after Joshua 16. Southern line shared with Benjamin (Bethel–Beth-horon–Gezer); northern line from Michmethath near Shechem west along the Brook Kanah to the sea. Ephraim also held towns inside Manasseh (Joshua 16:9), so the line between them was never clean.'
  },
  {
    id: 'tribe-manasseh-west', name: 'Manasseh (West)', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#5a9a8a',
    polygon: [
      [32.20, 34.85], [32.15, 34.95], [32.13, 35.10], [32.11, 35.20], [32.20, 35.30],
      [32.15, 35.40], [32.05, 35.50], [32.20, 35.55], [32.35, 35.55], [32.40, 35.45],
      [32.50, 35.35], [32.55, 35.25], [32.58, 35.18], [32.65, 35.10], [32.72, 35.00],
      [32.83, 34.97], [32.62, 34.92], [32.50, 34.89], [32.35, 34.87]
    ],
    label: [32.38, 35.15],
    note: 'Approximate, after Joshua 17:7-11. From the Brook Kanah north to Carmel and the Jezreel valley edge; Manasseh also held Beth-shean, Dor, Megiddo and other towns technically inside Issachar and Asher (17:11), which it could not take at first (17:12, Judges 1:27).'
  },
  {
    id: 'tribe-issachar', name: 'Issachar', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#a67c52',
    polygon: [
      [32.58, 35.18], [32.60, 35.30], [32.68, 35.25], [32.75, 35.40], [32.72, 35.57],
      [32.60, 35.57], [32.45, 35.57], [32.35, 35.55], [32.40, 35.45], [32.50, 35.35],
      [32.55, 35.25]
    ],
    label: [32.58, 35.42],
    note: 'Approximate, after Joshua 19:17-23: the eastern Jezreel valley, Mount Tabor and the Beth-shean valley to the Jordan. The southern edge overlaps Manasseh, which held several of these towns (Joshua 17:11).'
  },
  {
    id: 'tribe-zebulun', name: 'Zebulun', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#8c6bb1',
    polygon: [
      [32.65, 35.10], [32.72, 35.00], [32.80, 35.10], [32.90, 35.20], [32.88, 35.35],
      [32.80, 35.42], [32.75, 35.40], [32.68, 35.25], [32.60, 35.30], [32.58, 35.18]
    ],
    label: [32.76, 35.25],
    note: 'Approximate, after Joshua 19:10-16: the hills of Lower Galilee around Nazareth and Hannathon between the Kishon and Tabor. Landlocked despite Genesis 49:13; its western edge is set at the Kishon plain.'
  },
  {
    id: 'tribe-naphtali', name: 'Naphtali', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#4c7fb5',
    polygon: [
      [32.75, 35.40], [32.80, 35.42], [32.88, 35.35], [32.95, 35.32], [33.10, 35.35],
      [33.25, 35.40], [33.28, 35.60], [33.15, 35.65], [33.00, 35.62], [32.90, 35.62],
      [32.72, 35.57]
    ],
    label: [33.02, 35.50],
    note: 'Approximate, after Joshua 19:32-39: eastern Upper Galilee from Tabor north along the Jordan and Sea of Galilee to Hazor and Kedesh. The line with Asher on the west follows the Galilean watershed only roughly.'
  },
  {
    id: 'tribe-asher', name: 'Asher', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#2f9e8f',
    polygon: [
      [32.83, 34.97], [32.92, 35.07], [33.05, 35.10], [33.27, 35.20], [33.56, 35.37],
      [33.55, 35.50], [33.30, 35.45], [33.10, 35.35], [32.95, 35.32], [32.88, 35.35],
      [32.90, 35.20], [32.80, 35.10], [32.72, 35.00]
    ],
    label: [33.10, 35.22],
    note: 'Approximate, after Joshua 19:24-31: the coastal strip from Carmel to the region of Tyre and Sidon. Asher never dislodged the Phoenician cities (Judges 1:31), so the northern half is a claim, not a possession.'
  },
  {
    id: 'tribe-dan-north', name: 'Dan (Laish)', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#6b8e5a',
    polygon: [
      [33.20, 35.55], [33.30, 35.60], [33.32, 35.72], [33.22, 35.75], [33.15, 35.68],
      [33.12, 35.60], [33.15, 35.55], [33.18, 35.52]
    ],
    label: [33.24, 35.66],
    note: 'Small area around Laish/Dan (Tel Dan) at the Jordan springs, seized by migrating Danites (Judges 18; Joshua 19:47). Extent is a guess: the city and its immediate valley.'
  },
  {
    id: 'tribe-manasseh-east', name: 'Manasseh (East)', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#5a9a8a',
    polygon: [
      [32.62, 35.70], [32.72, 35.60], [33.00, 35.65], [33.30, 35.75], [33.40, 35.90],
      [33.30, 36.30], [32.95, 36.60], [32.60, 36.80], [32.30, 36.60], [32.30, 36.00],
      [32.45, 35.80]
    ],
    label: [32.85, 36.15],
    note: 'Approximate, after Joshua 13:29-31 and Deuteronomy 3:13-14: Bashan (kingdom of Og) and northern Gilead (Havvoth-jair) from the Yarmuk region to Mount Hermon and Salecah. The eastern desert edge is arbitrary.'
  },
  {
    id: 'tribe-gad', name: 'Gad', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#c46f3a',
    polygon: [
      [31.83, 35.55], [32.20, 35.55], [32.50, 35.57], [32.70, 35.60], [32.62, 35.70],
      [32.45, 35.80], [32.30, 36.00], [32.05, 36.15], [31.85, 36.15], [31.85, 35.75]
    ],
    label: [32.15, 35.85],
    note: 'Approximate, after Joshua 13:24-28: central Gilead from the Heshbon region north past the Jabbok, plus the Jordan valley strip up to the Sea of Chinnereth (13:27). The eastern edge toward Ammon (Rabbah) is uncertain.'
  },
  {
    id: 'tribe-reuben', name: 'Reuben', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#a05a8c',
    polygon: [
      [31.83, 35.55], [31.85, 35.75], [31.85, 36.15], [31.80, 36.20], [31.50, 36.20],
      [31.45, 35.90], [31.47, 35.65], [31.55, 35.55]
    ],
    label: [31.65, 35.90],
    note: 'Approximate, after Joshua 13:15-23: the Mishor (tableland) from the Arnon north to Heshbon and the Jordan plain opposite Jericho. Moab reclaimed much of this later (Isaiah 15–16; Mesha Stele).'
  },
  {
    id: 'philistia', name: 'Philistia', group: 'tribes',
    eras: ['conquest-judges', 'united-kingdom'],
    color: '#7a7a7a',
    polygon: [
      [32.05, 34.75], [31.87, 34.70], [31.78, 34.85], [31.70, 34.85], [31.60, 34.80],
      [31.50, 34.75], [31.40, 34.60], [31.30, 34.40], [31.22, 34.30], [31.29, 34.25],
      [31.50, 34.47], [31.67, 34.55], [31.80, 34.65]
    ],
    label: [31.60, 34.62],
    note: 'The unconquered southern coastal plain of the five Philistine cities (Gaza, Ashkelon, Ashdod, Ekron, Gath; Joshua 13:2-3, Judges 3:3). Inland edge set at the Shephelah foothills; the northern limit near Joppa is approximate.'
  },

  // ------------------------------------------------------------------
  // KINGDOMS
  // ------------------------------------------------------------------
  {
    id: 'kingdom-david-solomon', name: 'Kingdom of David and Solomon', group: 'kingdoms',
    eras: ['united-kingdom'],
    color: '#b3202a',
    polygon: [
      [31.13, 33.80], [31.29, 34.25], [31.50, 34.47], [32.05, 34.75], [32.50, 34.89],
      [32.83, 34.97], [33.10, 35.12], [33.30, 35.55], [33.60, 35.85], [34.20, 36.20],
      [34.70, 36.50], [35.30, 36.80], [35.85, 38.50], [35.00, 38.80], [34.00, 37.80],
      [33.50, 36.90], [32.60, 36.70], [31.80, 36.40], [31.00, 36.00], [30.20, 35.40],
      [29.53, 35.00], [29.60, 34.80], [30.20, 34.60], [30.69, 34.49], [30.90, 34.10]
    ],
    label: [33.20, 36.60],
    note: 'Maximal extent after 2 Samuel 8, 1 Kings 4:21-24, 8:65 and 2 Chronicles 8:3-4: from the Brook of Egypt and Ezion-geber to Tiphsah on the Euphrates, with Damascus garrisoned (2 Sam 8:6). The Hamath sphere and Aram were tributary rather than annexed, Tyre and Sidon were allies not subjects, and Philistia and Edom were subdued vassals; the whole northern half is a zone of influence, not a governed border. The archaeological footprint of this state is debated.'
  },
  {
    id: 'kingdom-israel', name: 'Israel (Northern Kingdom)', group: 'kingdoms',
    eras: ['divided-kingdom'],
    color: '#3f7f9f',
    polygon: [
      [32.35, 34.87], [32.15, 34.85], [32.05, 34.95], [31.95, 35.05], [31.93, 35.20],
      [31.93, 35.40], [31.90, 35.50], [31.85, 35.60], [31.85, 35.90], [32.05, 36.15],
      [32.30, 36.30], [32.60, 36.50], [33.00, 36.30], [33.30, 35.90], [33.30, 35.65],
      [33.20, 35.50], [33.10, 35.35], [32.95, 35.15], [32.83, 34.97], [32.62, 34.92],
      [32.50, 34.89]
    ],
    label: [32.35, 35.35],
    note: 'Approximate core of the northern kingdom c. 930–722 BC: from Bethel to Dan, the Sharon coast north of Philistia, and Gilead/Bashan in Transjordan. Gilead and Bashan were repeatedly lost to Aram and Moab (1 Kings 22, 2 Kings 10:32-33) and Assyria annexed Galilee and Gilead in 732 BC (2 Kings 15:29); the Bethel line was disputed with Judah.'
  },
  {
    id: 'kingdom-judah', name: 'Judah (Southern Kingdom)', group: 'kingdoms',
    eras: ['divided-kingdom'],
    color: '#b3202a',
    polygon: [
      [31.95, 35.05], [31.93, 35.20], [31.93, 35.40], [31.90, 35.50], [31.83, 35.52],
      [31.60, 35.45], [31.30, 35.45], [31.05, 35.45], [30.90, 35.30], [30.70, 35.00],
      [30.55, 34.70], [30.69, 34.49], [30.90, 34.40], [31.20, 34.60], [31.40, 34.75],
      [31.60, 34.85], [31.75, 34.90], [31.85, 34.95]
    ],
    label: [31.45, 35.05],
    note: 'Approximate extent of the southern kingdom c. 930–586 BC: Judah and Benjamin from the Bethel line to Beersheba and the Negev highlands, bounded by the Dead Sea and the Philistine Shephelah. Judah lost the Negev forts and Shephelah towns under Sennacherib (701 BC) and at times controlled Ezion-geber and Elath (2 Kings 14:22), not shown.'
  },
  {
    id: 'aram-damascus', name: 'Aram-Damascus', group: 'kingdoms',
    eras: ['divided-kingdom'],
    color: '#8c6bb1',
    polygon: [
      [33.35, 35.80], [33.50, 35.85], [34.00, 36.30], [34.30, 36.80], [34.20, 37.40],
      [33.70, 37.30], [33.20, 37.00], [32.80, 36.80], [32.60, 36.50], [33.00, 36.30],
      [33.30, 35.95]
    ],
    label: [33.60, 36.60],
    note: 'Aramaean kingdom of Damascus (1 Kings 11:23-25, 15:18, 20; 2 Kings 5–8, 16:9), the chief rival of Israel until Tiglath-pileser III destroyed it in 732 BC. Its core was the Damascus oasis and Anti-Lebanon; its reach into Bashan and Gilead varied and the desert edge is arbitrary.'
  },
  {
    id: 'phoenicia', name: 'Phoenicia', group: 'kingdoms',
    eras: ['divided-kingdom'],
    color: '#2f9e8f',
    polygon: [
      [32.92, 35.07], [33.27, 35.20], [33.56, 35.37], [33.90, 35.50], [34.12, 35.65],
      [34.43, 35.83], [34.90, 35.88], [34.90, 36.10], [34.50, 36.10], [34.10, 35.95],
      [33.75, 35.80], [33.50, 35.65], [33.30, 35.50], [33.10, 35.35], [32.95, 35.20]
    ],
    label: [33.85, 35.65],
    note: 'The coastal city-states of Tyre, Sidon, Byblos and Arvad (1 Kings 5, 16:31; Ezekiel 26–28). Never a single kingdom; the polygon is the coastal strip between the sea and the Lebanon ridge. Acco (Akko) is included as Phoenician in practice though allotted to Asher.'
  },
  {
    id: 'ammon', name: 'Ammon', group: 'kingdoms',
    eras: ['divided-kingdom'],
    color: '#c46f3a',
    polygon: [
      [32.05, 35.62], [32.25, 35.75], [32.30, 36.00], [32.20, 36.30], [31.95, 36.35],
      [31.75, 36.20], [31.70, 35.90], [31.85, 35.70]
    ],
    label: [31.98, 36.02],
    note: 'Kingdom of the Ammonites around Rabbah (Amman), between the Jabbok and the Arnon headwaters (Deuteronomy 3:16; Judges 11; 2 Samuel 10–12; Jeremiah 49:1-6). Small and shifting; the polygon marks the plateau around the capital.'
  },
  {
    id: 'moab', name: 'Moab', group: 'kingdoms',
    eras: ['divided-kingdom'],
    color: '#a05a8c',
    polygon: [
      [31.80, 35.65], [31.80, 36.00], [31.45, 36.20], [31.10, 36.20], [30.95, 35.95],
      [30.93, 35.60], [31.00, 35.48], [31.25, 35.48], [31.48, 35.57], [31.60, 35.55]
    ],
    label: [31.30, 35.85],
    note: 'Moab proper lay between the Arnon and the Zered east of the Dead Sea (Numbers 21:13; Isaiah 15–16). Shown with the Medeba plateau north of the Arnon, which Moab recovered from Israel under Mesha c. 840 BC (Mesha Stele; 2 Kings 3). The desert edge is arbitrary.'
  },
  {
    id: 'edom', name: 'Edom', group: 'kingdoms',
    eras: ['divided-kingdom'],
    color: '#a67c52',
    polygon: [
      [30.93, 35.60], [30.95, 35.95], [30.70, 36.10], [30.30, 36.00], [29.80, 35.60],
      [29.53, 35.00], [29.65, 34.90], [30.00, 35.10], [30.40, 35.20], [30.70, 35.30],
      [30.90, 35.40]
    ],
    label: [30.45, 35.62],
    note: 'Edom (Seir) on the highlands from the Zered south to the Gulf of Aqaba, with Bozrah and Sela (Genesis 36; 2 Kings 8:20-22, 14:7; Obadiah). Its western extent into the Arabah and Negev, and Judah\'s control of Elath, shifted repeatedly. The eastern edge is the desert.'
  },
  {
    id: 'philistia-dk', name: 'Philistia', group: 'kingdoms',
    eras: ['divided-kingdom'],
    color: '#7a7a7a',
    polygon: [
      [32.05, 34.75], [31.95, 34.95], [31.80, 34.90], [31.65, 34.85], [31.50, 34.75],
      [31.35, 34.55], [31.25, 34.35], [31.20, 34.25], [31.29, 34.25], [31.50, 34.47],
      [31.67, 34.55], [31.80, 34.65]
    ],
    label: [31.60, 34.62],
    note: 'The Philistine cities in the divided-kingdom period (Gaza, Ashkelon, Ashdod, Ekron; Gath declined after the 9th century; Amos 1:6-8, 2 Kings 18:8). Assyrian vassals from the late 8th century. Inland edge at the Shephelah is approximate and contested with Judah.'
  },
  {
    id: 'egypt-new-kingdom', name: 'Egypt', group: 'kingdoms',
    eras: ['patriarchs', 'exodus'],
    color: '#c9a227',
    polygon: [
      [27.00, 30.70], [28.10, 30.30], [29.00, 30.50], [29.30, 30.30], [30.00, 30.60],
      [30.60, 30.10], [31.10, 29.80], [31.20, 29.92], [31.40, 30.42], [31.52, 31.84],
      [31.30, 32.30], [31.04, 32.55], [30.80, 32.50], [30.50, 32.40], [29.97, 32.55],
      [29.80, 32.20], [29.30, 31.60], [28.50, 31.30], [28.00, 31.30], [27.00, 31.70]
    ],
    label: [29.40, 31.00],
    note: 'The inhabited Nile valley, Faiyum and Delta as far south as the map edge (about Asyut), including Goshen and the eastern Delta (Genesis 45:10, 47:11; Exodus 1:11) up to the frontier fortress line at Sile/Tjaru near Pelusium. Egypt\'s real territory in the Middle and New Kingdoms was the cultivated strip only; the edges here are drawn a little into the desert for legibility.'
  },

  // ------------------------------------------------------------------
  // EMPIRES
  // ------------------------------------------------------------------
  {
    id: 'assyria', name: 'Assyrian Empire', group: 'empires',
    eras: ['divided-kingdom'],
    color: '#8b1e3f',
    polygon: [
      [31.29, 34.25], [31.50, 34.47], [32.05, 34.75], [32.83, 34.97], [33.56, 35.37],
      [34.43, 35.83], [35.60, 35.78], [36.12, 35.93], [36.85, 36.15], [36.75, 35.60],
      [36.60, 34.60], [36.35, 33.95], [36.90, 33.30], [37.60, 33.80], [38.20, 35.00],
      [38.50, 36.50], [38.60, 38.50], [38.80, 40.00], [38.70, 41.50], [38.30, 43.00],
      [37.80, 44.20], [37.20, 45.00], [36.20, 46.00], [35.20, 46.50], [34.00, 46.20],
      [33.00, 46.00], [32.00, 46.20], [31.00, 47.00], [30.30, 47.20], [30.30, 45.50],
      [30.90, 44.00], [32.00, 42.50], [33.20, 41.00], [34.20, 39.50], [33.80, 38.00],
      [33.00, 37.00], [32.20, 36.60], [31.20, 36.10], [30.60, 35.30], [30.80, 34.40]
    ],
    label: [35.80, 42.80],
    note: 'Neo-Assyrian empire c. 700 BC (reign of Sennacherib): from the Egyptian frontier at the Brook of Egypt through the Levant, Cilicia (Que) and Tabal to the Urartian and Median foothills, Babylonia and the Elamite border. Judah, Philistia, Moab, Edom, Ammon, Phoenicia and Cyprus were vassals rather than provinces; the Syrian and Arabian deserts were never controlled, so the inner desert line is arbitrary. Egypt itself was not conquered until 671 BC.'
  },
  {
    id: 'babylon', name: 'Neo-Babylonian Empire', group: 'empires',
    eras: ['exile-return'],
    color: '#c46f3a',
    polygon: [
      [31.29, 34.25], [32.05, 34.75], [32.83, 34.97], [33.56, 35.37], [34.43, 35.83],
      [35.60, 35.78], [36.12, 35.93], [36.60, 36.15], [37.00, 36.60], [37.50, 37.20],
      [38.00, 37.90], [38.50, 38.80], [38.60, 40.20], [38.20, 42.00], [37.60, 43.50],
      [36.80, 45.00], [35.50, 45.80], [34.50, 46.00], [33.30, 46.00], [32.30, 46.30],
      [31.20, 47.00], [30.40, 47.60], [30.20, 46.80], [30.30, 45.00], [30.80, 43.80],
      [31.80, 42.50], [33.00, 41.20], [34.00, 40.00], [34.20, 38.80], [33.60, 37.80],
      [33.00, 37.00], [32.20, 36.60], [31.50, 36.30], [30.90, 36.00], [30.20, 35.50],
      [29.53, 35.00], [29.70, 34.60], [30.60, 34.20]
    ],
    label: [34.00, 43.50],
    note: 'Neo-Babylonian empire c. 580 BC under Nebuchadnezzar II: Babylonia, Assyria, the Khabur and upper Euphrates, and the whole Levant to the Egyptian border after the fall of Jerusalem (586) and during the siege of Tyre. Cilicia was not held; the Median frontier in the north-east and the desert edges are schematic. Elam was probably outside Babylonian control.'
  },
  {
    id: 'persia', name: 'Persian (Achaemenid) Empire', group: 'empires',
    eras: ['exile-return'],
    color: '#4c7fb5',
    polygon: [
      [44.20, 28.60], [44.30, 26.00], [42.00, 24.00], [40.85, 24.75],
      [40.65, 26.00], [40.20, 26.50], [39.75, 26.16], [39.00, 26.90], [38.40, 26.60],
      [37.90, 27.20], [36.70, 27.80], [36.60, 28.40], [36.30, 30.20], [36.80, 31.40],
      [36.20, 32.90], [36.40, 34.40], [36.80, 35.90], [36.10, 35.95], [34.80, 35.90],
      [33.50, 35.35], [32.00, 34.75], [31.30, 34.25], [31.04, 32.55], [31.52, 31.84],
      [31.20, 29.92], [31.20, 27.20], [31.60, 25.20], [27.00, 25.00], [27.00, 50.00],
      [42.80, 50.00], [43.20, 46.50], [43.30, 43.00], [43.00, 40.50], [41.60, 41.60],
      [41.00, 39.70], [42.00, 35.10], [41.20, 31.50], [41.10, 29.10], [42.00, 27.90],
      [43.20, 28.00]
    ],
    label: [36.50, 45.00],
    note: 'Achaemenid empire within the map frame, c. 500 BC (Darius I): Thrace to the Danube, all Anatolia, the Levant, Egypt and Libya (Cyrene), Mesopotamia, Media and Elam, clipped at the east and south map edges. Egypt was in revolt for long periods (c. 404–343 BC), Thrace was lost after 479 BC, and the Aegean islands, Cyprus and the Caucasus fringe are omitted; the west-Libyan line at about lon 25 is a placeholder for a frontier that had no fixed position.'
  },
  {
    id: 'alexander', name: 'Empire of Alexander', group: 'empires',
    eras: ['intertestamental'],
    color: '#6b3fa0',
    polygon: [
      [42.50, 19.20], [41.30, 19.45], [40.20, 19.60], [39.20, 20.30], [38.30, 21.30],
      [36.60, 22.20], [36.50, 23.00], [37.90, 23.80], [39.00, 23.30], [40.00, 23.70],
      [40.85, 24.75], [40.30, 26.50], [39.75, 26.16], [38.60, 26.60], [37.60, 27.20],
      [36.60, 28.50], [36.30, 30.20], [36.60, 31.90], [36.30, 34.00], [36.80, 35.90],
      [35.00, 35.90], [32.00, 34.75], [31.04, 32.55], [31.20, 29.92], [31.60, 25.20],
      [32.90, 21.50], [30.50, 19.50], [27.00, 19.50], [27.00, 50.00], [42.50, 50.00],
      [43.30, 43.00], [43.00, 40.50], [41.00, 39.70], [42.00, 35.10], [41.10, 29.10],
      [43.20, 28.00], [44.20, 28.60], [44.50, 25.00], [44.80, 21.00], [43.50, 19.50]
    ],
    label: [38.50, 40.00],
    note: 'Alexander\'s empire at his death (323 BC) as far as the map frame: Macedon, the Greek allies of the Corinthian League, Thrace, Anatolia, the Levant, Egypt with Cyrene, Mesopotamia and Media; Persis, Bactria and India lie off the map. Sparta, Epirus, Armenia, Cappadocia and inner Anatolia (Bithynia, Paphlagonia, Pontus) were never actually subdued; the Danube frontier is inherited from Philip II. A political envelope, not an administered border.'
  },
  {
    id: 'ptolemaic', name: 'Ptolemaic Kingdom', group: 'empires',
    eras: ['intertestamental'],
    color: '#c9a227',
    polygon: [
      [34.65, 35.98], [34.65, 36.30], [34.30, 36.25], [33.80, 36.00], [33.30, 35.95],
      [32.80, 36.30], [32.50, 36.50], [31.90, 36.30], [31.00, 35.80], [30.40, 35.40],
      [29.70, 35.10], [29.50, 34.90], [28.00, 34.50], [27.73, 34.25], [27.90, 33.55],
      [27.00, 33.60], [27.00, 20.00], [31.00, 20.00], [32.10, 20.07], [32.90, 21.50],
      [32.50, 23.00], [31.60, 25.10], [31.30, 27.20], [30.90, 29.00], [31.20, 29.92],
      [31.47, 30.37], [31.52, 31.84], [31.04, 32.55], [31.29, 34.25], [32.05, 34.75],
      [32.83, 34.97], [33.27, 35.20], [33.90, 35.50], [34.43, 35.83]
    ],
    label: [29.50, 30.00],
    note: 'Ptolemaic Egypt c. 250 BC (Ptolemy II): Egypt, Cyrenaica, Sinai and Coele-Syria/Phoenicia north to the Eleutherus river (the Syrian Wars frontier), plus the Transjordan plateau held through the Tobiads. Cyprus and the Ptolemaic coastal footholds in Cilicia, Lycia, Caria and the Aegean are omitted. Coele-Syria passed to the Seleucids after Panion (200 BC).'
  },
  {
    id: 'seleucid', name: 'Seleucid Kingdom', group: 'empires',
    eras: ['intertestamental'],
    color: '#3f7f9f',
    polygon: [
      [34.65, 35.98], [35.60, 35.78], [36.12, 35.93], [36.85, 36.15], [36.75, 35.60],
      [36.60, 34.60], [36.35, 33.95], [36.60, 33.00], [37.00, 32.00], [37.50, 31.00],
      [37.80, 29.80], [37.40, 28.50], [37.30, 27.60], [37.90, 27.25], [38.45, 27.10],
      [38.60, 28.00], [39.50, 29.50], [39.60, 31.00], [39.00, 32.50], [38.60, 34.00],
      [38.20, 35.50], [38.60, 37.00], [38.90, 38.50], [39.20, 40.50], [38.50, 42.00],
      [37.50, 44.00], [37.00, 46.00], [36.20, 48.00], [35.50, 50.00], [29.50, 50.00],
      [29.80, 49.00], [30.30, 47.90], [30.20, 46.50], [30.50, 44.50], [31.50, 42.50],
      [32.50, 40.50], [33.50, 38.80], [33.20, 36.80], [33.30, 35.95], [34.20, 36.25]
    ],
    label: [36.20, 40.50],
    note: 'Seleucid kingdom c. 250 BC (Antiochus II): northern Syria, Mesopotamia, Babylonia, Media and Susiana, and most of Anatolia south of the independent kingdoms of Pergamum, Bithynia, Pontus and Cappadocia and the Galatian settlements. The Ionian coast and Cilicia Tracheia were contested with the Ptolemies, Parthia and Bactria were breaking away, and the eastern satrapies beyond lon 50 are off the map. Boundaries are schematic.'
  },
  {
    id: 'hasmonean', name: 'Hasmonean Kingdom', group: 'empires',
    eras: ['intertestamental'],
    color: '#b3202a',
    polygon: [
      [32.83, 34.97], [32.90, 35.20], [33.05, 35.30], [33.10, 35.55], [33.10, 35.80],
      [32.80, 36.00], [32.50, 36.00], [32.20, 36.00], [32.00, 35.80], [31.70, 35.80],
      [31.40, 35.80], [31.10, 35.70], [31.05, 35.45], [30.90, 35.20], [31.00, 34.80],
      [31.15, 34.30], [31.29, 34.25], [31.50, 34.47], [32.05, 34.75], [32.50, 34.89],
      [32.62, 34.92]
    ],
    label: [31.90, 35.30],
    note: 'Hasmonean kingdom c. 100–90 BC under Alexander Jannaeus: Judea, Idumea, Samaria, Galilee, the coast from Raphia to Carmel (excluding Ptolemais/Akko and, until 96 BC, Gaza), Perea, Gaulanitis, and the Moabite plateau. Philadelphia (Amman) remained independent and the Greek cities across the Jordan (Gadara, Pella, Gerasa) were taken piecemeal; the eastern and northern lines are approximate.'
  },
  {
    id: 'herod-great', name: 'Kingdom of Herod the Great', group: 'empires',
    eras: ['intertestamental', 'christ'],
    color: '#8b1e3f',
    polygon: [
      [32.83, 34.97], [32.90, 35.20], [33.05, 35.30], [33.15, 35.55], [33.30, 35.70],
      [33.35, 36.00], [33.30, 36.50], [32.90, 36.80], [32.50, 36.80], [32.40, 36.30],
      [32.35, 35.95], [32.10, 35.85], [31.90, 35.75], [31.50, 35.75], [31.20, 35.60],
      [31.05, 35.45], [30.90, 35.20], [31.00, 34.80], [31.15, 34.30], [31.29, 34.25],
      [31.50, 34.47], [32.05, 34.75], [32.50, 34.89], [32.62, 34.92]
    ],
    label: [32.30, 35.40],
    note: 'Herod\'s kingdom at his death in 4 BC: Judea, Idumea, Samaria, Galilee, Perea, the coast from Gaza to Caesarea (Ascalon excluded), and the north-eastern districts granted by Augustus (Gaulanitis, Batanea, Trachonitis, Auranitis, Paneas). Ptolemais and the Decapolis cities (Gadara, Hippos, Scythopolis lost in 4 BC) are excluded only roughly.'
  },

  // ------------------------------------------------------------------
  // NEW TESTAMENT PALESTINE (era: christ)
  // ------------------------------------------------------------------
  {
    id: 'judea-province', name: 'Judea', group: 'nt',
    eras: ['christ'],
    color: '#b3202a',
    polygon: [
      [32.10, 34.80], [32.05, 35.00], [32.05, 35.30], [32.00, 35.45], [31.90, 35.55],
      [31.83, 35.52], [31.60, 35.45], [31.55, 35.35], [31.55, 35.00], [31.60, 34.85],
      [31.75, 34.75], [31.90, 34.70], [32.05, 34.75]
    ],
    label: [31.80, 35.10],
    note: 'Judea proper (the Jewish district) as governed by the Roman prefect from AD 6 to 41: from the Acrabatta/Anuathu Borcaeus line in the north to the Idumean hills south of Beth-zur, including Joppa and the Jamnia estates. The prefect\'s province also comprised Samaria and Idumea, shown separately. Ascalon was a free city. Boundaries after Josephus, War 3.51-56, approximate.'
  },
  {
    id: 'samaria-region', name: 'Samaria', group: 'nt',
    eras: ['christ'],
    color: '#a67c52',
    polygon: [
      [32.10, 34.80], [32.05, 35.00], [32.05, 35.30], [32.00, 35.45], [31.90, 35.55],
      [32.20, 35.55], [32.40, 35.55], [32.45, 35.40], [32.50, 35.20], [32.50, 35.05],
      [32.50, 34.89], [32.35, 34.87], [32.20, 34.85]
    ],
    label: [32.25, 35.20],
    note: 'Samaria (the Samaritan district) between Judea and Galilee, from Ginae (Jenin) to Acrabatta, including the coastal plain to Caesarea which belonged administratively to the same prefecture (Josephus, War 3.48-50). Scythopolis on the Jordan belonged to the Decapolis. Approximate.'
  },
  {
    id: 'galilee', name: 'Galilee (Antipas)', group: 'nt',
    eras: ['christ'],
    color: '#3f7f9f',
    polygon: [
      [32.55, 35.10], [32.70, 35.05], [32.85, 35.10], [33.00, 35.15], [33.10, 35.25],
      [33.10, 35.55], [32.90, 35.62], [32.72, 35.57], [32.60, 35.55], [32.50, 35.45],
      [32.50, 35.20]
    ],
    label: [32.82, 35.35],
    note: 'Upper and Lower Galilee as ruled by Herod Antipas (4 BC–AD 39), bounded by Phoenician Ptolemais and Tyre on the west, the Jordan and Sea of Galilee on the east, and Scythopolis and Samaria on the south (Josephus, War 3.35-40). Approximate.'
  },
  {
    id: 'perea', name: 'Perea (Antipas)', group: 'nt',
    eras: ['christ'],
    color: '#3f7f9f',
    polygon: [
      [32.45, 35.58], [32.40, 35.80], [32.20, 35.85], [32.00, 35.80], [31.80, 35.80],
      [31.55, 35.75], [31.30, 35.70], [31.20, 35.55], [31.55, 35.55], [31.77, 35.55],
      [32.00, 35.55], [32.20, 35.55]
    ],
    label: [31.95, 35.68],
    note: 'Perea, "the land beyond the Jordan", the second part of Antipas\'s tetrarchy: from Pella in the north to Machaerus in the south, between the Jordan and the territories of Philadelphia and Gerasa (Josephus, War 3.44-47). The eastern edge is approximate.'
  },
  {
    id: 'philip-tetrarchy', name: 'Tetrarchy of Philip', group: 'nt',
    eras: ['christ'],
    color: '#5a9a8a',
    polygon: [
      [32.72, 35.60], [32.90, 35.62], [33.10, 35.55], [33.20, 35.62], [33.35, 35.75],
      [33.45, 36.00], [33.35, 36.50], [33.10, 36.80], [32.80, 36.90], [32.55, 36.85],
      [32.45, 36.30], [32.60, 36.00], [32.55, 35.75], [32.70, 35.65]
    ],
    label: [33.00, 36.25],
    note: 'Philip\'s tetrarchy (4 BC–AD 34): Gaulanitis, Batanea, Trachonitis, Auranitis and the Paneas/Iturean district (Luke 3:1). Hippos and Gadara on its south-western edge were Decapolis cities and are excluded only roughly; the desert edge of Trachonitis is arbitrary.'
  },
  {
    id: 'decapolis', name: 'Decapolis', group: 'nt',
    eras: ['christ'],
    color: '#8c6bb1',
    polygon: [
      [32.55, 35.40], [32.70, 35.58], [32.80, 35.70], [32.65, 35.95], [32.55, 36.05],
      [32.30, 36.10], [32.10, 36.20], [31.90, 36.15], [31.75, 36.00], [31.85, 35.85],
      [32.10, 35.80], [32.40, 35.65], [32.45, 35.55], [32.40, 35.40]
    ],
    label: [32.30, 35.95],
    note: 'The Decapolis (Mark 5:20, 7:31) was a league of Greek cities, not a territory: this polygon links the territories of Scythopolis, Hippos, Gadara, Pella, Dion, Gerasa and Philadelphia. Damascus, Raphana and Canatha, also counted by Pliny, lie outside the shape. Approximate.'
  },
  {
    id: 'idumea', name: 'Idumea', group: 'nt',
    eras: ['christ'],
    color: '#c46f3a',
    polygon: [
      [31.55, 35.35], [31.55, 35.00], [31.60, 34.85], [31.50, 34.60], [31.30, 34.55],
      [31.15, 34.70], [31.05, 34.95], [31.05, 35.25], [31.10, 35.45], [31.35, 35.45]
    ],
    label: [31.30, 35.05],
    note: 'Idumea, the southern Judean hills and northern Negev settled by Edomites after the exile and forcibly Judaised by John Hyrcanus c. 125 BC (Mark 3:8). Governed with Judea under the prefects. Northern edge near Beth-zur and Marisa is approximate.'
  },
  {
    id: 'nabatea', name: 'Nabatea', group: 'nt',
    eras: ['christ'],
    color: '#d9825b',
    polygon: [
      [31.00, 34.95], [31.10, 34.70], [30.60, 34.20], [30.10, 34.00], [29.50, 34.60],
      [28.50, 34.50], [27.50, 35.30], [27.00, 35.60], [27.00, 38.50], [29.00, 38.50],
      [30.50, 38.50], [31.50, 38.00], [32.30, 37.50], [32.80, 37.20], [32.70, 36.90],
      [32.45, 36.70], [32.30, 36.40], [31.70, 36.20], [31.30, 36.00], [31.20, 35.70],
      [31.05, 35.45], [30.90, 35.30]
    ],
    label: [30.20, 36.00],
    note: 'Nabataean kingdom under Aretas IV (9 BC–AD 40; 2 Corinthians 11:32, Galatians 1:17): Petra, the Negev caravan towns, eastern Sinai, southern Transjordan and the Hauran (Bostra). Its Hejaz territory (Hegra) lies south of the map and the desert edges are arbitrary; Nabataean control of Damascus in Paul\'s day is disputed and not shown.'
  },
  {
    id: 'phoenicia-nt', name: 'Phoenicia', group: 'nt',
    eras: ['christ'],
    color: '#2f9e8f',
    polygon: [
      [32.83, 34.97], [32.92, 35.07], [33.27, 35.20], [33.56, 35.37], [33.90, 35.50],
      [34.12, 35.65], [34.43, 35.83], [34.65, 35.98], [34.60, 36.20], [34.20, 36.00],
      [33.80, 35.85], [33.50, 35.65], [33.30, 35.50], [33.15, 35.30], [33.00, 35.15],
      [32.85, 35.10]
    ],
    label: [33.70, 35.60],
    note: 'The Phoenician coast within the Roman province of Syria: Ptolemais, Tyre, Sidon, Berytus, Byblos, Aradus (Mark 7:24-31; Acts 21:2-7). Shown separately from Syria for the Gospel geography; the inland edge at the Lebanon ridge is approximate.'
  },
  {
    id: 'syria-province', name: 'Syria (Roman province)', group: 'nt',
    eras: ['christ'],
    color: '#7a7a7a',
    polygon: [
      [34.65, 35.98], [35.60, 35.78], [36.12, 35.93], [36.60, 36.15], [36.85, 36.15],
      [37.00, 36.60], [37.10, 37.50], [37.06, 37.87], [36.50, 38.20], [35.90, 38.50],
      [35.20, 38.80], [34.60, 38.50], [34.00, 37.80], [33.50, 37.20], [33.10, 36.60],
      [33.40, 36.00], [33.80, 36.00], [34.20, 36.05], [34.60, 36.25]
    ],
    label: [35.50, 37.20],
    note: 'Roman Syria in the time of Christ (Luke 2:2; Matthew 4:24), governed from Antioch: from the Amanus and the Euphrates at Zeugma south to Damascus and the Phoenician coast (shown separately). Cilicia Pedias was attached to Syria until AD 72 but is drawn with Cilicia; Commagene (annexed AD 17–38) and Palmyra were client zones. Desert edge is arbitrary.'
  },

  // ------------------------------------------------------------------
  // ROMAN PROVINCES c. AD 50 (era: church) — clipped to lon 10–50, lat 27–46
  // ------------------------------------------------------------------
  {
    id: 'italia', name: 'Italia', group: 'provinces',
    eras: ['church'],
    color: '#b3202a',
    polygon: [
      [46.00, 10.00], [46.00, 12.00], [46.00, 13.50], [45.70, 13.80], [45.20, 14.10],
      [44.90, 13.90], [45.30, 13.60], [45.70, 13.20], [45.40, 12.30], [44.50, 12.30],
      [43.60, 13.50], [42.40, 14.20], [41.90, 15.10], [41.10, 16.90], [40.65, 17.90],
      [39.80, 18.40], [40.35, 17.20], [39.20, 17.15], [38.40, 16.55], [37.95, 15.65],
      [38.45, 15.90], [39.20, 16.10], [40.00, 15.60], [40.60, 14.80], [41.30, 13.00],
      [42.00, 11.80], [42.90, 10.60], [43.70, 10.30], [44.10, 10.00]
    ],
    label: [42.80, 12.80],
    note: 'Italy (not a province but the imperial homeland) from the Alps to the straits, including Istria, clipped at the western map edge (lon 10). Sardinia and Corsica are off the map; Sicilia is a separate province. Coastline simplified.'
  },
  {
    id: 'sicilia', name: 'Sicilia', group: 'provinces',
    eras: ['church'],
    color: '#c9a227',
    polygon: [
      [38.25, 15.65], [38.10, 15.10], [37.70, 15.20], [37.10, 15.30], [36.70, 15.10],
      [36.80, 14.50], [37.10, 13.80], [37.30, 13.20], [37.60, 12.60], [37.80, 12.45],
      [38.10, 12.70], [38.15, 13.35], [38.05, 14.20], [38.10, 14.80], [38.25, 15.25]
    ],
    label: [37.55, 14.20],
    note: 'Senatorial province of Sicily (Acts 28:12, Syracuse). Coastline simplified; Malta (Melita, Acts 28:1) lies at 35.9N and is not drawn as a polygon.'
  },
  {
    id: 'macedonia', name: 'Macedonia', group: 'provinces',
    eras: ['church'],
    color: '#4c7fb5',
    polygon: [
      [41.80, 19.60], [41.30, 19.45], [40.60, 19.40], [40.00, 19.80], [39.60, 20.10],
      [39.00, 20.75], [38.90, 21.20], [38.80, 22.55], [39.00, 23.00], [39.30, 23.30],
      [39.90, 22.60], [40.30, 22.60], [40.50, 23.00], [40.30, 23.60], [40.05, 23.90],
      [40.50, 24.00], [40.80, 24.50], [40.85, 24.75], [41.50, 24.40], [42.00, 23.50],
      [42.40, 22.60], [42.20, 21.60], [42.00, 20.60], [42.30, 19.70]
    ],
    label: [40.90, 21.80],
    note: 'Province of Macedonia c. AD 50 (Acts 16–17: Philippi, Thessalonica, Berea), then including Epirus and Thessaly, from the Adriatic to the Nestos river. The northern line with Moesia and the eastern line with Thracia are approximate.'
  },
  {
    id: 'achaia', name: 'Achaia', group: 'provinces',
    eras: ['church'],
    color: '#2f9e8f',
    polygon: [
      [38.80, 22.55], [38.60, 22.90], [38.40, 23.60], [38.20, 24.00], [37.90, 24.05],
      [37.60, 23.90], [37.90, 23.50], [37.70, 23.10], [37.50, 23.50], [36.80, 23.10],
      [36.40, 22.50], [36.40, 22.20], [36.70, 21.70], [37.30, 21.60], [37.90, 21.10],
      [38.30, 21.30], [38.60, 21.00], [38.95, 20.75], [38.90, 21.40], [38.85, 22.00]
    ],
    label: [37.90, 22.30],
    note: 'Senatorial province of Achaia (Acts 18:12: Corinth, Athens), southern Greece from Thermopylae and Aetolia to the Peloponnese. Euboea and the Aegean islands, part of the province, are not drawn. Coastline much simplified.'
  },
  {
    id: 'thracia', name: 'Thracia', group: 'provinces',
    eras: ['church'],
    color: '#a05a8c',
    polygon: [
      [42.00, 23.50], [42.70, 23.50], [42.90, 25.00], [43.00, 27.00], [43.10, 27.90],
      [42.50, 27.50], [42.00, 28.00], [41.20, 28.50], [41.00, 28.20], [40.70, 27.00],
      [40.60, 26.60], [40.30, 26.50], [40.60, 26.00], [40.85, 25.50], [40.85, 24.75],
      [41.50, 24.40], [41.80, 24.20]
    ],
    label: [41.80, 26.20],
    note: 'Thracia, made a province in AD 46, between the Haemus (Balkan) range, the Black Sea, the Propontis and the Nestos river. Byzantium and the Chersonese had special status; the northern and western lines are approximate.'
  },
  {
    id: 'asia', name: 'Asia', group: 'provinces',
    eras: ['church'],
    color: '#c46f3a',
    polygon: [
      [40.40, 28.70], [40.00, 29.50], [39.50, 30.50], [38.80, 31.20], [38.00, 31.00],
      [37.70, 30.20], [37.20, 29.50], [36.80, 29.00], [36.70, 28.60], [37.00, 28.20],
      [36.70, 27.40], [37.04, 27.42], [37.30, 27.20], [37.53, 27.28], [37.90, 27.30],
      [38.40, 26.90], [38.70, 26.70], [39.20, 26.60], [39.60, 26.10], [40.05, 26.35],
      [40.40, 26.90], [40.30, 27.90]
    ],
    label: [38.60, 28.60],
    note: 'Senatorial province of Asia (Acts 19; Revelation 1–3: Ephesus, Smyrna, Pergamum, Sardis, Laodicea): Mysia, Lydia, Caria and western Phrygia. The inland line with Galatia through Phrygia is uncertain; islands (Lesbos, Chios, Samos, Patmos) not drawn.'
  },
  {
    id: 'bithynia-pontus', name: 'Bithynia et Pontus', group: 'provinces',
    eras: ['church'],
    color: '#8c6bb1',
    polygon: [
      [40.40, 28.70], [40.70, 29.20], [41.10, 29.10], [41.20, 30.20], [41.10, 31.50],
      [41.60, 32.20], [41.90, 33.50], [42.00, 35.10], [41.30, 36.30], [41.00, 37.20],
      [40.60, 37.00], [40.30, 36.00], [40.50, 34.00], [40.60, 32.50], [40.30, 31.50],
      [40.20, 30.50], [39.90, 29.80], [40.00, 28.80]
    ],
    label: [40.90, 32.50],
    note: 'Bithynia and Pontus (Acts 16:7; 1 Peter 1:1): the Black Sea coastal province from the Bosporus to Amisus. Eastern Pontus was still the client kingdom of Polemon II until AD 64. Inland line with Galatia and Paphlagonia approximate.'
  },
  {
    id: 'galatia', name: 'Galatia', group: 'provinces',
    eras: ['church'],
    color: '#6b8e5a',
    polygon: [
      [40.60, 32.50], [40.50, 34.00], [40.30, 36.00], [40.60, 37.00], [40.40, 37.80],
      [39.80, 37.50], [39.40, 35.50], [38.50, 34.50], [37.80, 33.80], [37.30, 33.50],
      [37.00, 32.50], [37.20, 31.50], [37.50, 30.80], [37.60, 30.20], [38.00, 31.00],
      [38.80, 31.20], [39.50, 30.50], [40.00, 29.50], [40.20, 30.50], [40.30, 31.50]
    ],
    label: [39.20, 33.20],
    note: 'The great imperial province of Galatia (Acts 13–14, 16:6; Galatians 1:2): ethnic Galatia around Ancyra plus Pisidia, Lycaonia, Isauria, eastern Phrygia, Paphlagonia and Pontus Galaticus, i.e. including Pisidian Antioch, Iconium, Lystra and Derbe. Whether "Galatia" in Paul means the province or the northern ethnic region is disputed. Lines approximate.'
  },
  {
    id: 'cappadocia', name: 'Cappadocia', group: 'provinces',
    eras: ['church'],
    color: '#a67c52',
    polygon: [
      [40.40, 37.80], [40.20, 39.00], [39.80, 40.00], [39.20, 40.50], [38.80, 39.00],
      [38.30, 38.00], [37.80, 37.20], [37.40, 35.20], [37.60, 34.20], [37.80, 33.80],
      [38.50, 34.50], [39.40, 35.50], [39.80, 37.50]
    ],
    label: [38.70, 36.30],
    note: 'Cappadocia, a procuratorial province from AD 17 (Acts 2:9; 1 Peter 1:1), from the Taurus and Cilician Gates north to the Pontic ranges and east to the Euphrates near Melitene. Armenia Minor and Commagene (client kingdoms until AD 72) lie on its eastern edge. Approximate.'
  },
  {
    id: 'lycia-pamphylia', name: 'Lycia et Pamphylia', group: 'provinces',
    eras: ['church'],
    color: '#d9825b',
    polygon: [
      [36.70, 28.60], [36.55, 29.10], [36.26, 29.32], [36.20, 29.65], [36.30, 30.15],
      [36.55, 30.55], [36.88, 30.70], [36.85, 31.00], [36.77, 31.39], [36.60, 31.90],
      [37.00, 32.40], [37.20, 31.50], [37.50, 30.80], [37.60, 30.20], [37.20, 29.50],
      [36.80, 29.00]
    ],
    label: [36.80, 30.00],
    note: 'Lycia and Pamphylia, joined as a province in AD 43 (Acts 13:13, 14:25, 27:5: Perga, Attalia, Patara, Myra). Mountain line with Asia and Galatia approximate; Rhodes not drawn.'
  },
  {
    id: 'cilicia', name: 'Cilicia', group: 'provinces',
    eras: ['church'],
    color: '#3f7f9f',
    polygon: [
      [36.55, 32.00], [36.02, 32.83], [36.15, 33.40], [36.38, 33.93], [36.60, 34.60],
      [36.75, 35.60], [36.85, 36.15], [36.60, 36.15], [37.00, 36.50], [37.30, 35.80],
      [37.40, 35.20], [37.60, 34.20], [37.80, 33.80], [37.30, 33.50], [37.00, 32.50]
    ],
    label: [36.95, 34.60],
    note: 'Cilicia (Acts 21:39, Tarsus; Galatians 1:21). In AD 50 the plain (Cilicia Pedias) was administered with Syria and the rugged west (Cilicia Tracheia) was held by the client king Antiochus IV of Commagene; a separate province was formed only in AD 72. Shown as the geographical region.'
  },
  {
    id: 'cyprus', name: 'Cyprus', group: 'provinces',
    eras: ['church'],
    color: '#c9a227',
    polygon: [
      [35.70, 34.58], [35.35, 34.00], [35.15, 33.90], [35.00, 34.05], [34.70, 33.60],
      [34.60, 33.00], [34.58, 32.90], [34.70, 32.40], [35.00, 32.30], [35.20, 32.70],
      [35.35, 33.30], [35.55, 33.90], [35.65, 34.30]
    ],
    label: [35.05, 33.20],
    note: 'Senatorial province of Cyprus (Acts 13:4-12: Salamis, Paphos). Island outline simplified.'
  },
  {
    id: 'creta', name: 'Creta', group: 'provinces',
    eras: ['church'],
    color: '#5a9a8a',
    polygon: [
      [35.30, 23.50], [35.50, 23.60], [35.55, 24.10], [35.35, 24.80], [35.40, 25.40],
      [35.30, 26.10], [35.20, 26.30], [35.05, 26.10], [34.95, 25.70], [35.00, 25.00],
      [34.95, 24.60], [35.10, 24.10], [35.25, 23.55]
    ],
    label: [35.20, 24.90],
    note: 'Crete (Acts 27:7-13; Titus 1:5), governed jointly with Cyrenaica as one senatorial province. Island outline simplified.'
  },
  {
    id: 'syria-palaestina', name: 'Syria (with Judea)', group: 'provinces',
    eras: ['church'],
    color: '#7a7a7a',
    polygon: [
      [31.29, 34.25], [31.50, 34.47], [32.05, 34.75], [32.83, 34.97], [33.56, 35.37],
      [34.43, 35.83], [35.60, 35.78], [36.12, 35.93], [36.60, 36.15], [37.00, 36.60],
      [37.06, 37.87], [36.50, 38.20], [35.90, 38.50], [35.20, 38.80], [34.60, 38.50],
      [34.00, 37.80], [33.50, 37.20], [33.10, 36.60], [32.60, 36.40], [32.30, 36.10],
      [31.90, 35.90], [31.50, 35.75], [31.10, 35.50], [30.90, 35.20], [31.00, 34.80],
      [31.15, 34.30]
    ],
    label: [34.80, 37.20],
    note: 'Roman Syria c. AD 50 together with the procuratorial province of Judea (AD 44–66), which was under the legate of Syria\'s oversight. Agrippa II\'s client territories in the north-east and the Nabataean kingdom are drawn as outside; Cilicia Pedias is drawn with Cilicia. The name Syria Palaestina dates only from AD 135 and is used here as a label of convenience.'
  },
  {
    id: 'aegyptus', name: 'Aegyptus', group: 'provinces',
    eras: ['church'],
    color: '#c9a227',
    polygon: [
      [27.00, 25.00], [31.55, 25.15], [31.20, 27.20], [30.90, 29.00], [31.20, 29.92],
      [31.47, 30.37], [31.52, 31.84], [31.04, 32.55], [31.15, 33.80], [30.60, 34.20],
      [29.80, 34.60], [29.50, 34.90], [28.00, 34.50], [27.73, 34.25], [27.90, 33.55],
      [27.00, 33.60]
    ],
    label: [29.00, 30.00],
    note: 'Imperial province of Egypt (Acts 2:10, 18:24: Alexandria), from the Cyrenaican border at Catabathmus Magnus to Rhinocolura and the Sinai, clipped at lat 27. The Sinai interior was only loosely administered. Southern Egypt lies off the map.'
  },
  {
    id: 'cyrenaica', name: 'Creta et Cyrenaica (Cyrenaica)', group: 'provinces',
    eras: ['church'],
    color: '#5a9a8a',
    polygon: [
      [30.30, 19.10], [31.00, 20.00], [32.10, 20.07], [32.60, 20.60], [32.90, 21.50],
      [32.80, 22.60], [32.50, 23.20], [31.90, 24.50], [31.55, 25.15], [30.00, 25.00],
      [27.00, 25.00], [27.00, 19.10]
    ],
    label: [31.20, 22.50],
    note: 'Cyrenaica (Acts 2:10, 6:9, 11:20: Cyrene), the Libyan half of the joint province Creta et Cyrenaica, from Arae Philaenorum to Catabathmus Magnus, clipped at lat 27. The desert interior was not administered.'
  },
  {
    id: 'illyricum', name: 'Illyricum (Dalmatia)', group: 'provinces',
    eras: ['church'],
    color: '#8c6bb1',
    polygon: [
      [45.20, 14.10], [45.00, 14.50], [44.50, 15.00], [44.00, 15.30], [43.50, 16.30],
      [43.20, 17.30], [42.60, 18.10], [42.40, 18.80], [41.90, 19.40], [41.80, 19.60],
      [42.20, 20.00], [42.80, 20.50], [43.60, 20.30], [44.30, 19.50], [45.00, 18.50],
      [45.30, 17.00], [45.60, 15.50], [45.60, 14.50]
    ],
    label: [43.90, 17.40],
    note: 'Illyricum (Romans 15:19; 2 Timothy 4:10, Dalmatia): the Adriatic province of Dalmatia from Istria to Lissus, inland to the Sava and Drina. Pannonia (the northern half of old Illyricum) lies mostly north of the map. Coastline and inland line simplified.'
  }
];

// ------------------------------------------------------------------
// RIVERS — polylines [lat, lon]; rank 1 major, rank 2 minor. Courses approximate.
// ------------------------------------------------------------------
ATLAS.RIVERS = [
  { id: 'nile', name: 'Nile', rank: 1, points: [
    [27.00, 31.20], [27.30, 31.10], [27.60, 30.90], [28.10, 30.75], [28.60, 30.85],
    [29.10, 31.10], [29.60, 31.20], [30.05, 31.23]
  ] },
  { id: 'nile-rosetta', name: 'Nile (Rosetta branch)', rank: 1, points: [
    [30.05, 31.23], [30.45, 31.10], [30.80, 30.90], [31.10, 30.60], [31.30, 30.45], [31.47, 30.37]
  ] },
  { id: 'nile-damietta', name: 'Nile (Damietta branch)', rank: 1, points: [
    [30.05, 31.23], [30.45, 31.20], [30.80, 31.40], [31.10, 31.70], [31.30, 31.80], [31.52, 31.84]
  ] },
  { id: 'nile-pelusiac', name: 'Nile (Pelusiac branch, ancient)', rank: 1, points: [
    [30.30, 31.50], [30.60, 31.75], [30.80, 32.00], [30.95, 32.25], [31.00, 32.40], [31.04, 32.55]
  ] },
  { id: 'euphrates', name: 'Euphrates', rank: 1, points: [
    [39.50, 40.50], [39.20, 39.80], [38.70, 39.20], [38.40, 38.60], [38.00, 38.30],
    [37.53, 38.50], [37.06, 37.87], [36.83, 38.02], [36.40, 38.10], [35.98, 38.10],
    [35.85, 38.50], [35.60, 39.00], [35.30, 39.60], [34.75, 40.73], [34.55, 40.89],
    [34.20, 41.30], [33.90, 42.00], [33.64, 42.83], [33.30, 43.50], [33.06, 44.25],
    [32.54, 44.42], [32.13, 45.23], [31.32, 45.64], [30.96, 46.10], [30.80, 46.80],
    [30.50, 47.80]
  ] },
  { id: 'tigris', name: 'Tigris', rank: 1, points: [
    [38.50, 40.50], [38.20, 40.40], [37.91, 40.24], [37.60, 40.90], [37.50, 41.50],
    [37.33, 42.19], [37.00, 42.50], [36.60, 42.90], [36.36, 43.15], [36.00, 43.20],
    [35.46, 43.26], [35.00, 43.50], [34.20, 43.87], [33.80, 44.20], [33.30, 44.40],
    [32.80, 44.90], [32.50, 45.82], [32.00, 46.30], [31.84, 47.14], [31.00, 47.40]
  ] },
  { id: 'jordan', name: 'Jordan', rank: 1, points: [
    [33.40, 35.85], [33.25, 35.65], [33.10, 35.62], [33.00, 35.61], [32.90, 35.62],
    [32.71, 35.57], [32.55, 35.55], [32.40, 35.57], [32.20, 35.55], [32.00, 35.53],
    [31.85, 35.53], [31.76, 35.55]
  ] },

  // rank 2 — Levant
  { id: 'orontes', name: 'Orontes', rank: 2, points: [
    [34.10, 36.20], [34.40, 36.40], [34.75, 36.60], [35.13, 36.75], [35.55, 36.55],
    [35.90, 36.40], [36.15, 36.15], [36.05, 35.97]
  ] },
  { id: 'litani', name: 'Litani (Leontes)', rank: 2, points: [
    [33.95, 36.10], [33.70, 35.85], [33.45, 35.65], [33.35, 35.55], [33.30, 35.45], [33.34, 35.24]
  ] },
  { id: 'kishon', name: 'Kishon', rank: 2, points: [
    [32.55, 35.25], [32.60, 35.20], [32.65, 35.15], [32.70, 35.12], [32.75, 35.08], [32.82, 35.02]
  ] },
  { id: 'yarkon', name: 'Yarkon (Me-jarkon)', rank: 2, points: [
    [32.10, 34.93], [32.10, 34.88], [32.10, 34.83], [32.09, 34.79], [32.10, 34.77], [32.10, 34.76]
  ] },
  { id: 'sorek', name: 'Sorek', rank: 2, points: [
    [31.78, 35.15], [31.75, 35.05], [31.75, 34.98], [31.80, 34.85], [31.88, 34.75], [31.93, 34.70]
  ] },
  { id: 'besor', name: 'Besor', rank: 2, points: [
    [31.00, 34.85], [31.10, 34.70], [31.20, 34.55], [31.30, 34.45], [31.40, 34.38], [31.45, 34.35]
  ] },
  { id: 'brook-of-egypt', name: 'Brook of Egypt (Wadi el-Arish)', rank: 2, points: [
    [30.30, 34.10], [30.60, 33.95], [30.85, 33.85], [31.00, 33.82], [31.08, 33.80], [31.13, 33.80]
  ] },
  { id: 'jabbok', name: 'Jabbok', rank: 2, points: [
    [31.95, 35.95], [32.05, 35.95], [32.15, 35.85], [32.20, 35.75], [32.18, 35.65], [32.19, 35.55]
  ] },
  { id: 'arnon', name: 'Arnon', rank: 2, points: [
    [31.35, 36.10], [31.40, 35.95], [31.45, 35.80], [31.48, 35.70], [31.47, 35.62], [31.48, 35.57]
  ] },
  { id: 'yarmuk', name: 'Yarmuk', rank: 2, points: [
    [32.65, 36.10], [32.70, 36.00], [32.72, 35.90], [32.68, 35.75], [32.68, 35.65], [32.68, 35.57]
  ] },
  { id: 'zered', name: 'Zered', rank: 2, points: [
    [30.85, 36.00], [30.90, 35.85], [30.95, 35.70], [30.98, 35.60], [31.00, 35.52], [31.02, 35.48]
  ] },

  // rank 2 — Mesopotamia and Elam
  { id: 'kebar', name: 'Kebar (Chebar) canal', rank: 2, points: [
    [32.60, 44.50], [32.45, 44.70], [32.30, 44.95], [32.13, 45.23], [32.00, 45.45], [31.85, 45.65]
  ] },
  { id: 'habor', name: 'Habor (Khabur)', rank: 2, points: [
    [36.85, 40.07], [36.55, 40.55], [36.20, 40.80], [35.80, 40.65], [35.40, 40.55], [35.15, 40.45]
  ] },
  { id: 'balikh', name: 'Balikh', rank: 2, points: [
    [36.65, 38.95], [36.40, 39.00], [36.20, 39.05], [36.10, 39.02], [36.00, 39.00], [35.95, 39.00]
  ] },
  { id: 'greater-zab', name: 'Greater Zab', rank: 2, points: [
    [37.20, 43.50], [36.90, 43.60], [36.60, 43.50], [36.30, 43.40], [36.00, 43.35], [35.95, 43.25]
  ] },
  { id: 'lesser-zab', name: 'Lesser Zab', rank: 2, points: [
    [36.30, 45.00], [36.00, 44.60], [35.70, 44.30], [35.50, 43.90], [35.30, 43.60], [35.25, 43.40]
  ] },
  { id: 'diyala', name: 'Diyala', rank: 2, points: [
    [34.90, 45.40], [34.50, 45.30], [34.20, 45.10], [33.90, 44.90], [33.60, 44.70], [33.30, 44.50]
  ] },
  { id: 'ulai', name: 'Ulai (Karkheh/Karun, at Susa)', rank: 2, points: [
    [33.50, 47.60], [33.00, 48.00], [32.40, 48.10], [32.19, 48.25], [31.60, 48.30], [31.00, 48.40], [30.50, 48.30]
  ] },

  // rank 2 — Anatolia
  { id: 'halys', name: 'Halys (Kizilirmak)', rank: 2, points: [
    [39.80, 38.30], [39.50, 37.30], [39.20, 36.30], [38.90, 35.20], [38.90, 34.50],
    [39.30, 33.90], [39.90, 33.50], [40.40, 33.80], [40.80, 34.50], [41.20, 35.00],
    [41.50, 35.50], [41.72, 35.95]
  ] },
  { id: 'sangarius', name: 'Sangarius (Sakarya)', rank: 2, points: [
    [39.40, 31.30], [39.60, 31.80], [39.90, 31.90], [40.20, 31.50], [40.40, 30.80],
    [40.60, 30.40], [40.80, 30.40], [41.13, 30.65]
  ] },
  { id: 'maeander', name: 'Maeander', rank: 2, points: [
    [38.07, 30.15], [37.85, 29.60], [37.85, 29.10], [37.80, 28.50], [37.75, 28.00], [37.60, 27.60], [37.53, 27.35]
  ] },
  { id: 'hermus', name: 'Hermus (Gediz)', rank: 2, points: [
    [38.90, 29.60], [38.75, 29.00], [38.60, 28.40], [38.55, 27.80], [38.50, 27.30], [38.55, 26.80]
  ] },
  { id: 'cayster', name: 'Cayster', rank: 2, points: [
    [38.20, 28.20], [38.10, 27.90], [38.05, 27.60], [37.98, 27.45], [37.95, 27.35], [37.98, 27.25]
  ] },
  { id: 'pactolus', name: 'Pactolus', rank: 2, points: [
    [38.40, 28.08], [38.44, 28.06], [38.48, 28.04], [38.52, 28.03], [38.55, 28.00], [38.58, 27.98]
  ] },
  { id: 'cydnus', name: 'Cydnus', rank: 2, points: [
    [37.30, 34.85], [37.20, 34.86], [37.10, 34.88], [36.92, 34.90], [36.80, 34.95], [36.70, 35.00]
  ] },
  { id: 'sarus', name: 'Sarus (Seyhan)', rank: 2, points: [
    [37.80, 35.40], [37.50, 35.30], [37.20, 35.25], [37.00, 35.30], [36.80, 35.30], [36.70, 35.20]
  ] },
  { id: 'pyramus', name: 'Pyramus (Ceyhan)', rank: 2, points: [
    [37.60, 36.60], [37.30, 36.30], [37.00, 35.80], [36.90, 35.60], [36.75, 35.55], [36.55, 35.55]
  ] },

  // rank 2 — Greece and Macedonia
  { id: 'axios', name: 'Axios (Vardar)', rank: 2, points: [
    [42.00, 21.40], [41.50, 21.80], [41.20, 22.20], [40.90, 22.60], [40.70, 22.70], [40.50, 22.70]
  ] },
  { id: 'strymon', name: 'Strymon', rank: 2, points: [
    [42.40, 23.10], [42.00, 23.00], [41.60, 23.20], [41.30, 23.30], [41.00, 23.50], [40.78, 23.85]
  ] },
  { id: 'pineios', name: 'Pineios (Peneus)', rank: 2, points: [
    [39.60, 21.50], [39.55, 22.00], [39.65, 22.40], [39.80, 22.55], [39.90, 22.70], [39.92, 22.85]
  ] }
];
