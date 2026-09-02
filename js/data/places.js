// Bible Atlas gazetteer. See tools/SCHEMA.md for the field definitions.
// Coordinates are of the ancient site (tell / ruin) where known, to 4 dp.
// Dates follow the traditional/early Exodus chronology (1446 BC) unless noted.
window.ATLAS = window.ATLAS || {};
ATLAS.PLACES = [

// ---------------------------------------------------------------------------
// PRIMEVAL WORLD, MESOPOTAMIA AND PERSIA
// ---------------------------------------------------------------------------
{
  id: 'eden', name: 'Eden', alt: ['Garden of Eden'], original: 'עֵדֶן Eden',
  lat: 31.5000, lon: 46.0000, type: 'region', rank: 2, confidence: 'unknown',
  alternatives: [
    { name: 'Head of the Persian Gulf', lat: 30.0000, lon: 48.5000, note: 'Where the Tigris and Euphrates meet; some suggest the Pishon and Gihon were rivers now drowned beneath the Gulf. Attractive, but unprovable.' },
    { name: 'Armenian highlands', lat: 39.0000, lon: 41.0000, note: 'Near the sources of the Tigris and Euphrates; supported by the phrase "in the east" read from Canaan. Problems: no obvious Pishon or Gihon.' },
    { name: 'Southern Mesopotamia (Eridu / Sumer)', lat: 30.8000, lon: 46.0000, note: 'Sumerian tradition placed the first city at Eridu; the Hebrew "Eden" may echo Sumerian edin, "plain". Suggestive rather than decisive.' }
  ],
  eras: ['primeval'],
  refs: ['Genesis 2:8-15', 'Genesis 3:23-24', 'Ezekiel 28:13', 'Revelation 22:1-2'],
  verse: { ref: 'Genesis 2:8', text: 'And the LORD God planted a garden in Eden, in the east, and there he put the man whom he had formed.' },
  summary: 'The garden God planted for humanity, watered by a river that divided into the Pishon, Gihon, Tigris and Euphrates. Its location is unknown.',
  detail: 'Genesis names four rivers, two of them (the Tigris and Euphrates) well known, two (the Pishon and Gihon) unidentified. That single clue has produced proposals ranging from the Armenian highlands, where the two great rivers rise, to the marshes of southern Iraq and the floor of the Persian Gulf. Scripture itself does not ask us to find Eden; after the Flood the landscape it describes may no longer exist in the same form.\n\nWhat the text does insist on is that Eden was a real place in the real world, "in the east", not a fairyland. The atlas therefore marks it in lower Mesopotamia, where the two known rivers flow, and lists the alternatives honestly. No archaeological evidence bears on the question.',
  christ: 'Humanity was exiled from the tree of life; Revelation ends with that tree standing again beside the river of life in the new Jerusalem, access restored through the Lamb. The Garden is where the story of redemption begins, and where its promise (Genesis 3:15) is first spoken.',
  modern: 'Unknown; marked in southern Iraq',
  identification: 'Unknown. Marker is a conventional centroid in lower Mesopotamia; see alternatives.'
},
{
  id: 'ararat', name: 'Mount Ararat', alt: ['Mountains of Ararat', 'Urartu'], original: 'אֲרָרַט Ararat',
  lat: 39.7019, lon: 44.2983, elev: 5137, type: 'mountain', rank: 2, confidence: 'traditional',
  alternatives: [
    { name: 'Cudi Dağı (Mount Judi)', lat: 37.3667, lon: 42.4500, note: 'The landing place in early Syriac, Armenian and Islamic tradition, in the south of the old Urartian realm. Lower and more habitable than Ağrı Dağı.' }
  ],
  eras: ['primeval'],
  refs: ['Genesis 8:4', '2 Kings 19:37', 'Jeremiah 51:27'],
  verse: { ref: 'Genesis 8:4', text: 'and in the seventh month, on the seventeenth day of the month, the ark came to rest on the mountains of Ararat.' },
  summary: 'The highland region (Assyrian Urartu) where the ark came to rest. Tradition since the Middle Ages has fixed on the great volcano Ağrı Dağı.',
  detail: 'Genesis says the ark rested "on the mountains of Ararat", the plural pointing to a region rather than a single peak. Ararat is the Hebrew form of Urartu, the kingdom that flourished around Lake Van in the ninth to sixth centuries BC and is named again in 2 Kings 19:37 and Jeremiah 51:27. Any of the ranges of eastern Anatolia could satisfy the text.\n\nThe identification with the 5,137 m volcano now called Ağrı Dağı is comparatively late; older Jewish, Syriac and Muslim tradition favoured Cudi Dağı further south. Repeated claims of ark remains on Ağrı Dağı have not been substantiated, and the atlas treats the mountain as the traditional rather than the demonstrated site.',
  christ: 'Peter reads the Flood as a picture of baptism: a few were brought safely through water by God\'s provision of an ark (1 Peter 3:20-21). The ark resting on the mountains is the first great image of salvation through judgement.',
  modern: 'Ağrı Dağı, Ağrı Province, Turkey',
  identification: 'Traditional. Scripture names a region (Urartu), not a peak.'
},
{
  id: 'babylon', name: 'Babylon', alt: ['Babel', 'Shinar', 'Chaldea'], original: 'בָּבֶל Bavel; Βαβυλών Babylōn',
  lat: 32.5364, lon: 44.4208, elev: 35, type: 'city', rank: 1, confidence: 'certain',
  eras: [],
  refs: ['Genesis 11:1-9', '2 Kings 25:1-21', 'Daniel 1:1-4', 'Psalm 137:1', 'Isaiah 13-14', 'Revelation 18:2'],
  verse: { ref: 'Psalm 137:1', text: 'By the waters of Babylon, there we sat down and wept, when we remembered Zion.' },
  summary: 'The city of the tower of Babel, capital of Hammurabi and of Nebuchadnezzar, and the place of Judah\'s exile. In Scripture it becomes the symbol of human pride set against God.',
  detail: 'Babylon sits on the Euphrates about 85 km south of Baghdad. Genesis 11 places the tower and the confusion of languages "in the land of Shinar" at Babel, a name the Hebrew connects with balal, "to confuse", while the Babylonians themselves read it as Bab-ili, "gate of the god". The city rose to greatness under Hammurabi (eighteenth century BC) and again under Nabopolassar and Nebuchadnezzar II (626-539 BC), who rebuilt it with the Ishtar Gate, the Processional Way, the great ziggurat Etemenanki and the palace where, by his own account, Daniel served.\n\nRobert Koldewey\'s German excavations (1899-1917) uncovered the Neo-Babylonian city; glazed-brick reliefs from the Ishtar Gate are now in Berlin. Cuneiform ration tablets from the palace archives name "Yaukin king of Judah" (Jehoiachin) and his sons, confirming 2 Kings 25:27-30, and the Babylonian Chronicle records the capture of Jerusalem in 597 BC. The city fell to Cyrus of Persia in 539 BC, as Daniel 5 describes, and slowly declined until, as Isaiah and Jeremiah foretold, it lay in ruins.',
  christ: 'From Babel to Babylon to the "Babylon the great" of Revelation, the city stands for a humanity building its own name without God. Pentecost reverses Babel as the Spirit makes the gospel heard in every tongue, and Revelation 18 announces the final fall of proud Babylon before the bride, the new Jerusalem, descends.',
  modern: 'Near Hillah, Babil Governorate, Iraq',
  identification: 'Certain; extensively excavated.'
},
{
  id: 'ur', name: 'Ur', alt: ['Ur of the Chaldeans'], original: 'אוּר כַּשְׂדִּים Ur Kasdim',
  lat: 30.9626, lon: 46.1030, elev: 10, type: 'city', rank: 2, confidence: 'probable',
  alternatives: [
    { name: 'Urfa (Şanlıurfa) / northern Ur', lat: 37.1591, lon: 38.7969, note: 'Some scholars argue Abraham\'s Ur lay in the north near Haran, citing the family\'s northern connections (Nahor, Serug and Terah are all northern place-names) and Urfa\'s own tradition. Problem: "of the Chaldeans" points south, though the label may be a later gloss.' }
  ],
  eras: ['patriarchs'],
  refs: ['Genesis 11:28-31', 'Genesis 15:7', 'Nehemiah 9:7', 'Acts 7:2-4'],
  verse: { ref: 'Genesis 15:7', text: 'I am the LORD who brought you out from Ur of the Chaldeans to give you this land to possess.' },
  summary: 'Abraham\'s home city, from which Terah\'s family set out for Haran and Canaan. Identified with Tell el-Muqayyar in southern Iraq, one of the great cities of Sumer.',
  detail: 'Tell el-Muqayyar was excavated by Leonard Woolley (1922-34), who uncovered the ziggurat of the moon-god Nanna, the Royal Cemetery with its extraordinary gold work, and the well-built brick houses of the early second millennium BC, the period in which the traditional dating places Abraham. Ur was then a prosperous, literate city with schools and international trade, not a village of nomads.\n\nMost scholars accept the identification, although a minority favour a northern Ur because the family\'s other associations (Haran, Nahor, Serug) cluster there. Genesis simply says Terah left Ur with his household and settled at Haran; Stephen adds that God\'s call came to Abraham "when he was in Mesopotamia, before he lived in Haran" (Acts 7:2).',
  christ: 'Abraham left a city of idols at the bare word of promise; Hebrews 11:8-10 holds him up as the pattern of faith that looks for "the city that has foundations, whose designer and builder is God".',
  modern: 'Tell el-Muqayyar, Dhi Qar Governorate, Iraq',
  identification: 'Generally accepted since Woolley; a northern alternative persists.'
},
{
  id: 'haran', name: 'Haran', alt: ['Harran', 'Paddan-aram'], original: 'חָרָן Charan',
  lat: 36.8647, lon: 39.0264, elev: 360, type: 'city', rank: 2, confidence: 'certain',
  eras: ['patriarchs'],
  refs: ['Genesis 11:31-32', 'Genesis 12:4-5', 'Genesis 27:43', 'Genesis 29:4-5', '2 Kings 19:12'],
  verse: { ref: 'Genesis 12:4', text: 'So Abram went, as the LORD had told him, and Lot went with him. Abram was seventy-five years old when he departed from Haran.' },
  summary: 'The city in northern Mesopotamia where Terah died, from which Abraham set out for Canaan, and where Jacob later served Laban for twenty years.',
  detail: 'Haran lay on the Balikh, a tributary of the Euphrates, at the junction of major caravan routes between Assyria, Anatolia and Syria. Like Ur it was a centre of the moon-god cult, and it appears in Assyrian and Babylonian texts throughout the second and first millennia BC. The modern village of Harran with its ruined medieval walls and beehive houses lies on the ancient mound; the great tell has been sampled but not fully excavated.\n\nAbraham\'s wider family remained here (Genesis 24, 27-31), so that the region is called Paddan-aram, "the field of Aram". Isaac\'s wife Rebekah and Jacob\'s wives Leah and Rachel all came from this district.',
  modern: 'Harran, Şanlıurfa Province, Turkey',
  identification: 'Certain; name preserved continuously.'
},
{
  id: 'erech', name: 'Erech', alt: ['Uruk', 'Warka'], original: 'אֶרֶךְ Erekh',
  lat: 31.3222, lon: 45.6367, elev: 15, type: 'city', rank: 4, confidence: 'certain',
  eras: ['primeval'],
  refs: ['Genesis 10:10', 'Ezra 4:9'],
  verse: { ref: 'Genesis 10:10', text: 'The beginning of his kingdom was Babel, Erech, Accad, and Calneh, in the land of Shinar.' },
  summary: 'One of the cities of Nimrod in Genesis 10; the Sumerian Uruk, home of the legendary Gilgamesh and one of the world\'s earliest true cities.',
  detail: 'Uruk was already a large walled city by 3200 BC and is where the earliest cuneiform tablets were found. German excavations since 1912 have exposed temples of Inanna and Anu and the massive city wall attributed to Gilgamesh. Its appearance in Genesis 10 alongside Babel fits the biblical picture of the first kingdoms rising on the plain of Shinar.',
  modern: 'Warka, Muthanna Governorate, Iraq',
  identification: 'Certain.'
},
{
  id: 'nippur', name: 'Nippur', original: 'Nibru (Sumerian)',
  lat: 32.1264, lon: 45.2306, elev: 20, type: 'city', rank: 4, confidence: 'certain',
  eras: ['exile-return'],
  refs: ['Ezekiel 1:1-3', 'Ezekiel 3:15'],
  summary: 'The religious capital of Sumer, sacred to Enlil. Not named in Scripture, but the Chebar canal of Ezekiel flowed nearby and Jewish exiles are documented here.',
  detail: 'Nippur is important to the atlas because the canal called nar Kabari, Ezekiel\'s Chebar, ran past it, and because business tablets of the fifth century BC (the Murashu archive) name dozens of Jewish residents in its district. The city\'s temple and library were excavated by the University of Pennsylvania from 1889 onward, yielding thousands of Sumerian literary tablets.',
  modern: 'Nuffar, Al-Qadisiyyah Governorate, Iraq',
  identification: 'Certain.'
},
{
  id: 'mari', name: 'Mari', original: 'Tell Hariri',
  lat: 34.5497, lon: 40.8894, elev: 180, type: 'city', rank: 4, confidence: 'certain',
  eras: ['patriarchs'],
  refs: ['Genesis 11:31'],
  summary: 'A great Euphrates city of the patriarchal age, not named in Scripture, whose archives illuminate the world of Abraham.',
  detail: 'French excavations at Tell Hariri (from 1933) uncovered the palace of Zimri-Lim, destroyed by Hammurabi about 1760 BC, with more than 20,000 cuneiform tablets. They document tribal groups, personal names and customs (including the town of Nahur, compare Nahor) that make the Genesis narratives feel at home in the early second millennium BC. Mari controlled the river road between Babylon and Haran that Abraham\'s family would have travelled.',
  modern: 'Tell Hariri, Deir ez-Zor Governorate, Syria',
  identification: 'Certain.'
},
{
  id: 'carchemish', name: 'Carchemish', original: 'כַּרְכְּמִישׁ Karkemish',
  lat: 36.8300, lon: 38.0150, elev: 350, type: 'city', rank: 3, confidence: 'certain',
  eras: ['divided-kingdom'],
  refs: ['2 Chronicles 35:20', 'Isaiah 10:9', 'Jeremiah 46:2'],
  summary: 'Fortress city on the Euphrates crossing where Nebuchadnezzar crushed Pharaoh Neco in 605 BC, fixing the fate of Judah.',
  detail: 'Carchemish was a Hittite and then Neo-Hittite royal city, later an Assyrian provincial capital. Josiah died at Megiddo trying to stop Neco marching here (609 BC); four years later the Egyptian army was routed at Carchemish and Babylon became master of the Levant, which Jeremiah 46 celebrates. Woolley and T. E. Lawrence excavated the site before the First World War; renewed Turkish-Italian work began in 2011. The mound straddles the Turkish-Syrian border.',
  modern: 'Karkamış, Gaziantep Province, Turkey',
  identification: 'Certain.'
},
{
  id: 'gozan', name: 'Gozan', alt: ['Guzana', 'Tell Halaf'], original: 'גּוֹזָן Gozan',
  lat: 36.8264, lon: 40.0389, elev: 350, type: 'city', rank: 4, confidence: 'certain',
  eras: ['divided-kingdom'],
  refs: ['2 Kings 17:6', '2 Kings 18:11', '1 Chronicles 5:26'],
  verse: { ref: '2 Kings 17:6', text: 'In the ninth year of Hoshea, the king of Assyria captured Samaria, and he carried the Israelites away to Assyria and placed them in Halah, and on the Habor, the river of Gozan, and in the cities of the Medes.' },
  summary: 'A city on the Habor (Khabur) river to which the northern tribes were deported after the fall of Samaria in 722 BC.',
  detail: 'Tell Halaf, excavated by Max von Oppenheim (1911-13, 1929), was the Aramean and Assyrian city of Guzana. Assyrian records from the site include lists of personnel with Israelite-sounding names, plausibly some of the exiles of 2 Kings 17. The deportees of the north were scattered and never returned as a body, the origin of the phrase "the lost tribes".',
  modern: 'Tell Halaf, near Ras al-Ayn, Syria',
  identification: 'Certain.'
},
{
  id: 'nineveh', name: 'Nineveh', original: 'נִינְוֵה Nineveh',
  lat: 36.3597, lon: 43.1528, elev: 220, type: 'city', rank: 1, confidence: 'certain',
  eras: ['divided-kingdom'],
  refs: ['Genesis 10:11', 'Jonah 1:2', 'Jonah 3:4-10', '2 Kings 19:36', 'Nahum 1:1', 'Matthew 12:41'],
  verse: { ref: 'Jonah 1:2', text: 'Arise, go to Nineveh, that great city, and call out against it, for their evil has come up before me.' },
  summary: 'Capital of the Assyrian empire at its height, the city to which Jonah preached and against which Nahum prophesied. It fell to the Medes and Babylonians in 612 BC.',
  detail: 'Nineveh lies on the east bank of the Tigris opposite Mosul, its two mounds, Kuyunjik and Nebi Yunus ("prophet Jonah"), enclosed by 12 km of walls. Sennacherib made it his capital about 700 BC; Layard\'s excavations (1845-51) recovered the palace reliefs, including the siege of Lachish, and Ashurbanipal\'s library of some 30,000 tablets, among them the Babylonian Flood story. Sennacherib\'s Prism records his campaign against Hezekiah but, tellingly, no capture of Jerusalem (2 Kings 19).\n\nJonah\'s "three days\' journey" and "great city" fit an urban district of this scale. The mosque over Jonah\'s traditional tomb on Nebi Yunus was destroyed in 2014, exposing parts of an Assyrian palace beneath. Nineveh\'s sudden and total ruin in 612 BC fulfilled Nahum so completely that Xenophon passed the site two centuries later without knowing what it was.',
  christ: 'Jesus pointed to Nineveh\'s repentance at Jonah\'s preaching as a rebuke to his own generation: "something greater than Jonah is here" (Matthew 12:41). The mercy shown to a violent pagan city foreshadows the gospel going to the nations.',
  modern: 'Mosul, Nineveh Governorate, Iraq',
  identification: 'Certain.'
},
{
  id: 'calah', name: 'Calah', alt: ['Nimrud', 'Kalhu'], original: 'כָּלַח Kalach',
  lat: 36.0989, lon: 43.3283, elev: 230, type: 'city', rank: 3, confidence: 'certain',
  eras: ['divided-kingdom'],
  refs: ['Genesis 10:11-12'],
  summary: 'Assyrian capital under Ashurnasirpal II and his successors (ninth to eighth centuries BC), named among Nimrod\'s cities in Genesis 10.',
  detail: 'Nimrud was Layard\'s first great excavation (1845). Its Northwest Palace produced the Black Obelisk of Shalmaneser III, which shows "Jehu son of Omri" bowing before the Assyrian king, the only contemporary image of an Israelite monarch, and the annals of Tiglath-pileser III that name Menahem, Pekah, Hoshea and Ahaz. Much of the site was deliberately destroyed in 2015.',
  modern: 'Nimrud, Nineveh Governorate, Iraq',
  identification: 'Certain.'
},
{
  id: 'asshur', name: 'Asshur', alt: ['Ashur'], original: 'אַשּׁוּר Ashshur',
  lat: 35.4567, lon: 43.2597, elev: 150, type: 'city', rank: 4, confidence: 'certain',
  eras: ['divided-kingdom'],
  refs: ['Genesis 10:22', 'Ezekiel 27:23'],
  summary: 'The ancient religious capital of Assyria on the Tigris, home of the national god Ashur from whom the empire took its name.',
  detail: 'Asshur was Assyria\'s first capital and remained its ceremonial heart even after the kings moved to Calah and Nineveh. German excavations (1903-14) recovered royal tombs, temples and the Assyrian King List, a key document for biblical chronology. In Genesis 10:22 Asshur is a son of Shem, the eponymous ancestor of the Assyrians.',
  modern: 'Qal\'at Sherqat, Saladin Governorate, Iraq',
  identification: 'Certain.'
},
{
  id: 'dur-sharrukin', name: 'Dur-Sharrukin', alt: ['Khorsabad'],
  lat: 36.5100, lon: 43.2294, elev: 300, type: 'city', rank: 4, confidence: 'certain',
  eras: ['divided-kingdom'],
  refs: ['Isaiah 20:1', '2 Kings 17:6'],
  summary: 'The new capital built by Sargon II (721-705 BC), the king who completed the deportation of Samaria. Not named in Scripture, but Sargon is (Isaiah 20:1).',
  detail: 'For centuries Sargon was known only from Isaiah 20:1, and critics doubted his existence until Paul-Émile Botta excavated Khorsabad in 1843 and found his palace, reliefs and annals, which claim the capture of Samaria and the deportation of 27,290 Israelites. The city was abandoned at his death when Sennacherib moved to Nineveh.',
  modern: 'Khorsabad, Nineveh Governorate, Iraq',
  identification: 'Certain.'
},
{
  id: 'assyria', name: 'Assyria', alt: ['Asshur'], original: 'אַשּׁוּר Ashshur',
  lat: 36.0000, lon: 42.2000, type: 'region', rank: 2, confidence: 'certain',
  eras: ['divided-kingdom'],
  refs: ['2 Kings 15:29', '2 Kings 17:5-6', '2 Kings 18-19', 'Isaiah 10:5-19', 'Nahum 3:18-19'],
  verse: { ref: 'Isaiah 10:5', text: 'Ah, Assyria, the rod of my anger; the staff in their hands is my fury!' },
  summary: 'The empire of the upper Tigris that destroyed the northern kingdom of Israel (722 BC) and besieged Jerusalem under Sennacherib (701 BC).',
  detail: 'Assyria\'s heartland was the triangle of Asshur, Calah and Nineveh on the Tigris. From Tiglath-pileser III (745 BC) onward its kings pressed into the Levant, exacting tribute from Menahem, deporting Galilee and Gilead, and finally under Shalmaneser V and Sargon II taking Samaria. Sennacherib\'s campaign of 701 BC devastated Judah but, as both 2 Kings 19 and his own annals agree, Jerusalem did not fall.\n\nThe prophets read Assyria as the rod of God\'s anger, wielded and then broken. Its records (annals, reliefs, the Black Obelisk, the Lachish reliefs) are the richest external witness to the kings of Israel and Judah. The empire collapsed with astonishing speed between 626 and 609 BC.',
  modern: 'Northern Iraq',
  identification: 'Certain.'
},
{
  id: 'babylonia', name: 'Babylonia', alt: ['Shinar', 'Chaldea', 'Land of the Chaldeans'], original: 'שִׁנְעָר Shinar; כַּשְׂדִּים Kasdim',
  lat: 31.8000, lon: 45.4000, type: 'region', rank: 3, confidence: 'certain',
  eras: ['primeval', 'divided-kingdom', 'exile-return'],
  refs: ['Genesis 10:10', 'Genesis 11:2', 'Daniel 1:2', 'Ezekiel 1:3', 'Jeremiah 25:11-12'],
  summary: 'The alluvial plain of the lower Tigris and Euphrates: Shinar of Genesis, Chaldea of the prophets, and the land of Judah\'s seventy-year exile.',
  detail: 'Southern Mesopotamia was the cradle of Sumerian civilisation and later of the Neo-Babylonian empire. Judah\'s exiles were settled in its canal districts (Tel-abib on the Chebar, near Nippur) where, as Jeremiah 29 urged, they built houses and planted gardens. Cuneiform archives such as those from Al-Yahudu, "Judah-town", record ordinary Jewish life there in the sixth and fifth centuries BC.',
  modern: 'Southern Iraq',
  identification: 'Certain.'
},
{
  id: 'tel-abib', name: 'Tel-abib', alt: ['Tel Abib'], original: 'תֵּל אָבִיב Tel Aviv',
  lat: 32.2000, lon: 45.0500, type: 'site', rank: 4, confidence: 'unknown',
  eras: ['exile-return'],
  refs: ['Ezekiel 3:15', 'Ezekiel 1:1-3'],
  verse: { ref: 'Ezekiel 3:15', text: 'And I came to the exiles at Tel-abib, who were dwelling by the Chebar canal, and I sat where they were dwelling. And I sat there overwhelmed among them seven days.' },
  summary: 'The settlement of Judean exiles by the Chebar canal where Ezekiel received his commission. Its site is unknown; the canal ran past Nippur.',
  detail: 'The Chebar is almost certainly the nar Kabari, a major canal off the Euphrates flowing through Nippur, so Tel-abib lay somewhere in that district. The name means "mound of the flood" in Akkadian (til abubi); the modern Israeli city borrowed it in 1909. No site has been identified.',
  modern: 'Unknown; near Nippur, Iraq',
  identification: 'Unknown; marker placed on the Chebar near Nippur.'
},
{
  id: 'ahava', name: 'Ahava', original: 'אַהֲוָא Ahava',
  lat: 33.0000, lon: 44.0000, type: 'site', rank: 4, confidence: 'unknown',
  eras: ['exile-return'],
  refs: ['Ezra 8:15', 'Ezra 8:21', 'Ezra 8:31'],
  verse: { ref: 'Ezra 8:15', text: 'I gathered them to the river that runs to Ahava, and there we camped three days.' },
  summary: 'The river or canal in Babylonia where Ezra assembled the returning exiles in 458 BC, fasted, and recruited Levites before the journey to Jerusalem.',
  detail: 'Ahava is otherwise unattested. It was evidently a canal town within a short distance of Babylon, and the atlas marks a conventional point north-west of the city on the route to Judah. Casiphia, from which Ezra summoned Levites, was near enough for messengers to go and return within the three-day camp.',
  modern: 'Unknown; Iraq',
  identification: 'Unknown.'
},
{
  id: 'casiphia', name: 'Casiphia', original: 'כָּסִפְיָא Kasifya',
  lat: 33.4000, lon: 44.2000, type: 'site', rank: 4, confidence: 'unknown',
  eras: ['exile-return'],
  refs: ['Ezra 8:17'],
  summary: 'A place in Babylonia, home to a community of Levites and temple servants, from which Ezra recruited ministers for the second temple.',
  detail: 'Ezra 8:17 twice calls it "the place Casiphia", the word maqom sometimes carrying the sense of a sanctuary, so some think a Jewish house of prayer stood here in exile. Its site is unknown; a connection with Ctesiphon on the Tigris has been suggested on grounds of sound alone.',
  modern: 'Unknown; Iraq',
  identification: 'Unknown.'
},
{
  id: 'susa', name: 'Susa', alt: ['Shushan'], original: 'שׁוּשַׁן Shushan',
  lat: 32.1894, lon: 48.2578, elev: 80, type: 'city', rank: 2, confidence: 'certain',
  eras: ['exile-return'],
  refs: ['Esther 1:2', 'Esther 9:11-15', 'Nehemiah 1:1', 'Daniel 8:2'],
  verse: { ref: 'Nehemiah 1:1', text: 'The words of Nehemiah the son of Hacaliah. Now it happened in the month of Chislev, in the twentieth year, as I was in Susa the citadel,' },
  summary: 'The Elamite city that became the winter capital of the Persian kings. The setting of the book of Esther and of Nehemiah\'s service as cupbearer to Artaxerxes.',
  detail: 'Susa had been the capital of Elam for two thousand years before Darius I built his palace and apadana here about 520 BC. French excavations since 1884 (Dieulafoy, de Morgan, Ghirshman) have uncovered the royal quarter, the glazed-brick archer friezes now in the Louvre, and the famous Code of Hammurabi, carried here as Elamite booty. The Hebrew "Shushan the citadel" refers to this fortified palace mound.\n\nEsther\'s account of court life, with its gate, inner court and banquets, fits what is known of Achaemenid Susa, and a tomb attributed to Daniel has drawn pilgrims here since at least the twelfth century, though the attribution is traditional only.',
  christ: 'In Esther God\'s name is never spoken yet his hand is everywhere, preserving the people from whom Messiah would come. Nehemiah left the comfort of Susa to rebuild Jerusalem, as the Servant would one day "restore the preserved of Israel".',
  modern: 'Shush, Khuzestan Province, Iran',
  identification: 'Certain.'
},
{
  id: 'ecbatana', name: 'Ecbatana', alt: ['Achmetha'], original: 'אַחְמְתָא Achmeta',
  lat: 34.7992, lon: 48.5146, elev: 1850, type: 'city', rank: 3, confidence: 'certain',
  eras: ['exile-return'],
  refs: ['Ezra 6:2'],
  verse: { ref: 'Ezra 6:2', text: 'And in Ecbatana, the citadel that is in the province of Media, a scroll was found on which this was written: "A record."' },
  summary: 'Capital of Media and summer residence of the Persian kings, where the decree of Cyrus permitting the rebuilding of the temple was found in the archives.',
  detail: 'Ecbatana lies high in the Zagros at Hamadan, one of the oldest continuously inhabited cities in the world. Herodotus describes its seven concentric walls. The ancient city lies beneath the modern one and has been only partially excavated. Ezra 6 is a telling detail of Persian bureaucracy: Darius found Cyrus\'s decree not at Babylon but in the summer capital, exactly where a document issued in the king\'s first summer would have been filed.',
  modern: 'Hamadan, Iran',
  identification: 'Certain.'
},
{
  id: 'persepolis', name: 'Persepolis', alt: ['Parsa'],
  lat: 29.9346, lon: 52.8916, elev: 1600, type: 'city', rank: 3, confidence: 'certain',
  eras: ['exile-return'],
  refs: ['Esther 1:1', 'Ezra 7:1'],
  summary: 'The ceremonial capital of the Achaemenid empire, built by Darius I and Xerxes (Esther\'s Ahasuerus). Not named in Scripture, but the seat of the kings who ruled Judah for two centuries.',
  detail: 'The great terrace with its apadana, Hall of a Hundred Columns and reliefs of tribute-bearers from every satrapy is the finest surviving monument of the empire that permitted the exiles to return. The Persepolis Fortification Tablets record rations and travel authorisations of the very sort Ezra and Nehemiah received (Ezra 7:21; Nehemiah 2:7-9). Alexander burned the palaces in 330 BC.',
  modern: 'Near Marvdasht, Fars Province, Iran',
  identification: 'Certain.'
},
{
  id: 'pasargadae', name: 'Pasargadae',
  lat: 30.1944, lon: 53.1789, elev: 1900, type: 'city', rank: 4, confidence: 'certain',
  eras: ['exile-return'],
  refs: ['Isaiah 44:28', 'Isaiah 45:1', '2 Chronicles 36:22-23'],
  summary: 'Cyrus the Great\'s first capital and the site of his tomb. Not named in Scripture, but the home of the king Isaiah calls the LORD\'s "shepherd" and "anointed".',
  detail: 'Cyrus (559-530 BC) founded Pasargadae after defeating the Medes. His plain gabled tomb still stands on the plateau; Alexander visited and repaired it. Isaiah 44-45 names Cyrus a century and a half before his birth as the one who would let the exiles return, and the Cyrus Cylinder from Babylon shows his general policy of restoring captive peoples and their gods, the pattern into which the decree of Ezra 1 fits.',
  modern: 'Fars Province, Iran',
  identification: 'Certain.'
},
{
  id: 'elam-persia', name: 'Persia', alt: ['Elam', 'Paras'], original: 'פָּרַס Paras; עֵילָם Elam',
  lat: 31.0000, lon: 50.5000, type: 'region', rank: 2, confidence: 'certain',
  eras: ['exile-return'],
  refs: ['Genesis 10:22', 'Daniel 8:2', 'Ezra 1:1-4', 'Esther 1:1', 'Daniel 6:28', 'Acts 2:9'],
  verse: { ref: 'Daniel 8:2', text: 'And I saw in the vision; and when I saw, I was in Susa the citadel, which is in the province of Elam.' },
  summary: 'The Iranian plateau: Elam in Genesis and Daniel, Persia from Cyrus onward. The empire that ended the exile and ruled Judah from 539 to 332 BC.',
  detail: 'Elam, centred on Susa, was an ancient rival of Babylon. Persia proper (Parsa, modern Fars) lay south-east of it in the Zagros; under Cyrus, Darius and Xerxes it became the largest empire the world had yet seen, stretching from India to Greece and Egypt. Its policy of tolerating local cults, seen in the Cyrus Cylinder, explains the decrees that sent Zerubbabel, Ezra and Nehemiah home. Daniel served through the transition from Babylon to Persia (Daniel 6:28), and Jews from among "Parthians and Medes and Elamites" were in Jerusalem at Pentecost.',
  modern: 'Iran',
  identification: 'Certain.'
},
{
  id: 'media', name: 'Media', alt: ['Medes'], original: 'מָדַי Madai',
  lat: 35.2000, lon: 47.5000, type: 'region', rank: 3, confidence: 'certain',
  eras: ['divided-kingdom', 'exile-return'],
  refs: ['2 Kings 17:6', 'Isaiah 13:17', 'Daniel 5:28', 'Daniel 6:8', 'Ezra 6:2', 'Acts 2:9'],
  summary: 'The highland kingdom of north-west Iran, where Israelite exiles were settled, which joined Babylon to destroy Nineveh and then fell to its Persian cousins under Cyrus.',
  detail: 'The Medes are first mentioned in Assyrian records of the ninth century BC. Israelites deported in 722 BC were placed "in the cities of the Medes". Isaiah and Jeremiah foresaw the Medes as Babylon\'s destroyers; in 539 BC the combined Medo-Persian army took the city, and Daniel speaks of "the law of the Medes and Persians". The capital Ecbatana (Hamadan) became the Persian summer residence.',
  modern: 'North-western Iran',
  identification: 'Certain.'
},
{
  id: 'euphrates', name: 'Euphrates', alt: ['The River', 'Perath'], original: 'פְּרָת Perat; Εὐφράτης Euphratēs',
  lat: 34.5000, lon: 40.7000, type: 'river', rank: 2, confidence: 'certain',
  eras: [],
  refs: ['Genesis 2:14', 'Genesis 15:18', 'Deuteronomy 11:24', '2 Kings 24:7', 'Jeremiah 13:4-7', 'Revelation 16:12'],
  verse: { ref: 'Genesis 15:18', text: 'To your offspring I give this land, from the river of Egypt to the great river, the river Euphrates,' },
  summary: 'The great river of Mesopotamia, one of the four rivers of Eden and the promised north-eastern boundary of Abraham\'s land.',
  detail: 'Rising in the Armenian highlands, the Euphrates flows 2,800 km through Syria and Iraq to the Persian Gulf. Simply called "the River" in the Old Testament, it was the frontier that David and Solomon\'s realm briefly reached (2 Samuel 8:3; 1 Kings 4:21) and the line along which Assyria, Babylon and Egypt contended. Abraham crossed it leaving Haran; the exiles wept beside it; in Revelation its drying signals the last gathering of the nations.',
  modern: 'Turkey, Syria, Iraq',
  identification: 'Certain.'
},
{
  id: 'tigris', name: 'Tigris', alt: ['Hiddekel'], original: 'חִדֶּקֶל Chiddeqel',
  lat: 34.2000, lon: 43.9000, type: 'river', rank: 2, confidence: 'certain',
  eras: [],
  refs: ['Genesis 2:14', 'Daniel 10:4', 'Nahum 2:6'],
  verse: { ref: 'Daniel 10:4', text: 'On the twenty-fourth day of the first month, as I was standing on the bank of the great river (that is, the Tigris)' },
  summary: 'The eastern river of Mesopotamia, on whose banks stood Asshur, Calah and Nineveh, and where Daniel received his final vision.',
  detail: 'Faster and less navigable than the Euphrates, the Tigris was the axis of Assyria. Nineveh\'s walls stood on its bank, and Nahum 2:6 pictures the river gates giving way at the city\'s fall. Daniel 10 opens with the prophet, in the third year of Cyrus, standing beside the Tigris when the vision of the man clothed in linen comes to him.',
  modern: 'Turkey, Iraq',
  identification: 'Certain.'
},
{
  id: 'persian-gulf', name: 'Persian Gulf', alt: ['Lower Sea', 'Sea of the Rising Sun'],
  lat: 27.0000, lon: 51.5000, type: 'sea', rank: 3, confidence: 'certain',
  eras: ['primeval', 'exile-return'],
  refs: ['Genesis 2:10-14', 'Genesis 10:10'],
  summary: 'The gulf into which the Tigris and Euphrates flow, the "Lower Sea" of Mesopotamian texts and the southern limit of Babylonia.',
  detail: 'In antiquity the Gulf reached further north than today; Ur and Eridu stood close to its shore. Some locate Eden near its head, where the great rivers meet. Its coast was the sea-route to Dilmun (Bahrain) and beyond, and Persian ships sailed from here to the Indus.',
  modern: 'Persian Gulf',
  identification: 'Certain.'
},

// ---------------------------------------------------------------------------
// EGYPT, THE EXODUS ROUTE, SINAI, TRANSJORDAN AND THE FAR SOUTH
// ---------------------------------------------------------------------------
{
  id: 'egypt', name: 'Egypt', alt: ['Mizraim', 'Land of Ham'], original: 'מִצְרַיִם Mitzrayim; Αἴγυπτος Aigyptos',
  lat: 28.3000, lon: 30.8000, type: 'region', rank: 1, confidence: 'certain',
  eras: [],
  refs: ['Genesis 12:10', 'Genesis 46:3-4', 'Exodus 1-14', 'Deuteronomy 26:5-9', 'Hosea 11:1', 'Matthew 2:13-15'],
  verse: { ref: 'Hosea 11:1', text: 'When Israel was a child, I loved him, and out of Egypt I called my son.' },
  summary: 'The great river civilisation to the south-west: refuge for Abraham, Joseph, Jeremiah\'s remnant and the infant Jesus, and the house of bondage from which God redeemed his people.',
  detail: 'Egypt appears more than six hundred times in Scripture. Its history runs in parallel with the Bible\'s: the patriarchs visit it in the Middle Kingdom; Joseph rises to power, on the traditional chronology, under the late Twelfth or Thirteenth Dynasty; the enslavement and Exodus fall in the New Kingdom, the early date of 1446 BC placing the Exodus under the Eighteenth Dynasty (Amenhotep II) while the late date (c. 1260 BC) prefers Ramesses II. Later, Shishak (Shoshenq I) plundered Jerusalem (1 Kings 14:25), Neco killed Josiah at Megiddo, and Judeans fled here after 586 BC (Jeremiah 43-44).\n\nArchaeologically, Egypt preserves the Merneptah Stele (c. 1208 BC), the earliest mention of "Israel" as a people in Canaan; the Amarna letters describing unrest in Canaan in the fourteenth century; and the Elephantine papyri of a Jewish garrison in the fifth century BC. Egyptian records never mention the Exodus, which is unsurprising given royal inscriptions record victories, not humiliations. Alexandria later became home to the largest Jewish community of the Diaspora and the birthplace of the Septuagint.',
  christ: 'Israel\'s son was called out of Egypt; Matthew sees the pattern fulfilled when the child Jesus is brought back from Egypt (Matthew 2:15). Christ is the true Israel who relives and completes his people\'s story, and his death is the Passover that makes a new exodus.',
  modern: 'Egypt',
  identification: 'Certain.'
},
{
  id: 'goshen', name: 'Goshen', alt: ['Land of Rameses'], original: 'גֹּשֶׁן Goshen',
  lat: 30.6500, lon: 31.7500, type: 'region', rank: 2, confidence: 'probable',
  eras: ['patriarchs', 'exodus'],
  refs: ['Genesis 45:10', 'Genesis 46:28-34', 'Genesis 47:27', 'Exodus 8:22', 'Exodus 9:26'],
  verse: { ref: 'Genesis 45:10', text: 'You shall dwell in the land of Goshen, and you shall be near me, you and your children and your children\'s children, and your flocks, your herds, and all that you have.' },
  summary: 'The pastoral district of the eastern Nile delta where Jacob\'s family settled under Joseph and where Israel multiplied and was enslaved.',
  detail: 'Goshen is generally identified with the eastern delta around Wadi Tumilat and the region of Pi-Ramesses (Qantir) and Avaris (Tell el-Dab\'a), "the land of Rameses" of Genesis 47:11. It was good grazing land on the Asiatic frontier, kept somewhat apart from the Egyptian heartland, which fits Joseph\'s advice to present the family as shepherds. Austrian excavations at Tell el-Dab\'a have revealed a large Middle Bronze population of Canaanite origin in exactly this district, and the plagues narrative distinguishes Goshen from the rest of Egypt (Exodus 8:22).',
  christ: 'God preserved his people in a foreign land through a rejected brother exalted to save them, a pattern the New Testament sees fulfilled in Jesus (Acts 7:9-14).',
  modern: 'Eastern Nile Delta, Sharqia Governorate, Egypt',
  identification: 'Generally accepted; the region, not the boundaries, is secure.'
},
{
  id: 'rameses', name: 'Rameses', alt: ['Raamses', 'Pi-Ramesses', 'Avaris'], original: 'רַעְמְסֵס Ra\'meses',
  lat: 30.7994, lon: 31.8383, elev: 10, type: 'city', rank: 2, confidence: 'probable',
  eras: ['exodus'],
  refs: ['Genesis 47:11', 'Exodus 1:11', 'Exodus 12:37', 'Numbers 33:3-5'],
  verse: { ref: 'Exodus 12:37', text: 'And the people of Israel journeyed from Rameses to Succoth, about six hundred thousand men on foot, besides women and children.' },
  summary: 'The store-city Israel built and the starting point of the Exodus. Identified with Pi-Ramesses at Qantir, on the site of the older Hyksos capital Avaris.',
  detail: 'Pi-Ramesses, the delta capital of Ramesses II, has been located by German excavations at Qantir, immediately north of Tell el-Dab\'a (ancient Avaris). The name in Exodus is therefore either an anachronistic updating of an older place-name (as when Genesis 14:14 says "Dan") or, on the late-date view, a genuine memory of Ramesses\' city. Under the early date, Israel\'s labour would have been at Avaris under the Eighteenth Dynasty, with the later name substituted by the biblical writer or a scribe. Either way the geography is consistent: the eastern delta, on the road to the Sinai frontier.',
  modern: 'Qantir, Sharqia Governorate, Egypt',
  identification: 'Generally accepted; the name raises chronological questions discussed above.'
},
{
  id: 'pithom', name: 'Pithom', original: 'פִּתֹם Pitom (Egyptian Per-Atum)',
  lat: 30.5497, lon: 31.9628, elev: 8, type: 'city', rank: 3, confidence: 'disputed',
  alternatives: [
    { name: 'Tell el-Maskhuta', lat: 30.5514, lon: 32.1000, note: 'Naville\'s 1883 identification, further east along Wadi Tumilat; Per-Atum inscriptions were found here, but the main occupation appears to be Saite and later.' }
  ],
  eras: ['exodus'],
  refs: ['Exodus 1:11'],
  verse: { ref: 'Exodus 1:11', text: 'Therefore they set taskmasters over them to afflict them with heavy burdens. They built for Pharaoh store cities, Pithom and Raamses.' },
  summary: 'One of the two store-cities built by Israelite forced labour. Egyptian Per-Atum, "house of Atum", in Wadi Tumilat; the exact tell is disputed.',
  detail: 'Two mounds in Wadi Tumilat compete: Tell el-Retabah, which has New Kingdom fortifications and a temple of Ramesses II, and Tell el-Maskhuta, where the name Per-Atum was found but whose main occupation is later. Most current opinion favours Retabah for the New Kingdom Pithom, with the name migrating east in the Saite period. Wadi Tumilat was the corridor from the delta to the Bitter Lakes and Sinai.',
  modern: 'Tell el-Retabah, Wadi Tumilat, Egypt',
  identification: 'Disputed between Tell el-Retabah and Tell el-Maskhuta.'
},
{
  id: 'memphis', name: 'Memphis', alt: ['Noph', 'Moph'], original: 'נֹף Noph',
  lat: 29.8467, lon: 31.2547, elev: 20, type: 'city', rank: 3, confidence: 'certain',
  eras: ['exodus', 'divided-kingdom'],
  refs: ['Isaiah 19:13', 'Jeremiah 2:16', 'Jeremiah 46:14', 'Ezekiel 30:13', 'Hosea 9:6'],
  verse: { ref: 'Hosea 9:6', text: 'For behold, they are going away from destruction; but Egypt shall gather them; Memphis shall bury them.' },
  summary: 'The ancient capital of Lower Egypt near the pyramids of Saqqara and Giza, named by the prophets as a symbol of Egypt\'s power and doom.',
  detail: 'Memphis was Egypt\'s administrative capital for much of its history, and on the early Exodus chronology the pharaoh of the plagues would have held court either here or at Thebes, with a residence in the delta. The temple of Ptah, the colossi of Ramesses II and the alabaster sphinx survive at Mit Rahina; the necropolis at Saqqara, with the Step Pyramid, lies on the desert edge above. Jeremiah 46:14 and Ezekiel 30:13 pronounce judgement on Noph.',
  modern: 'Mit Rahina, Giza Governorate, Egypt',
  identification: 'Certain.'
},
{
  id: 'on', name: 'On', alt: ['Heliopolis', 'Aven', 'Beth-shemesh (Egypt)'], original: 'אֹן On (Egyptian Iunu)',
  lat: 30.1289, lon: 31.3072, elev: 20, type: 'city', rank: 4, confidence: 'certain',
  eras: ['patriarchs', 'divided-kingdom'],
  refs: ['Genesis 41:45', 'Genesis 41:50', 'Jeremiah 43:13', 'Ezekiel 30:17'],
  verse: { ref: 'Genesis 41:45', text: 'And Pharaoh called Joseph\'s name Zaphenath-paneah. And he gave him in marriage Asenath, the daughter of Potiphera priest of On. So Joseph went out over the land of Egypt.' },
  summary: 'The city of the sun-god Re, whose priest Potiphera became Joseph\'s father-in-law. Jeremiah calls it Beth-shemesh, "house of the sun".',
  detail: 'Heliopolis was the greatest religious centre of Lower Egypt, its temple of Re-Atum one of the largest in the land. The single standing obelisk of Senusret I (c. 1940 BC) is all that remains above ground; the site lies beneath the Cairo suburb of Matariya. Jeremiah 43:13 foretold that Nebuchadnezzar would break its obelisks, and Ezekiel 30:17 pronounced judgement on "the young men of On".',
  modern: 'Matariya, Cairo, Egypt',
  identification: 'Certain.'
},
{
  id: 'thebes', name: 'Thebes', alt: ['No', 'No-amon', 'Luxor'], original: 'נֹא אָמוֹן No Amon',
  lat: 25.7188, lon: 32.6573, elev: 80, type: 'city', rank: 3, confidence: 'certain',
  eras: ['exodus', 'divided-kingdom'],
  refs: ['Jeremiah 46:25', 'Ezekiel 30:14-16', 'Nahum 3:8-10'],
  verse: { ref: 'Nahum 3:8', text: 'Are you better than Thebes that sat by the Nile, with water around her, her rampart a sea, and water her wall?' },
  summary: 'The southern capital of the New Kingdom pharaohs, city of Amun, with the temples of Karnak and Luxor. Nahum points to its sack by Assyria in 663 BC as a warning to Nineveh.',
  detail: 'Thebes was the seat of the Eighteenth Dynasty, whose kings (Thutmose III, Amenhotep II) are the pharaohs of the oppression and Exodus on the early-date chronology. Across the river lie the Valley of the Kings and the mortuary temples. Ashurbanipal\'s sack of the city in 663 BC is the event Nahum invokes: if Thebes with its rivers fell, so will Nineveh. Karnak\'s Bubastite Portal records Shoshenq I\'s (Shishak\'s) campaign in Palestine (1 Kings 14:25).',
  modern: 'Luxor, Egypt',
  identification: 'Certain.'
},
{
  id: 'tahpanhes', name: 'Tahpanhes', alt: ['Daphnae', 'Tehaphnehes'], original: 'תַּחְפַּנְחֵס Tachpanches',
  lat: 30.8617, lon: 32.1717, elev: 5, type: 'city', rank: 3, confidence: 'certain',
  eras: ['divided-kingdom'],
  refs: ['Jeremiah 2:16', 'Jeremiah 43:7-13', 'Jeremiah 44:1', 'Ezekiel 30:18'],
  verse: { ref: 'Jeremiah 43:7', text: 'And they came into the land of Egypt, for they did not obey the voice of the LORD. And they arrived at Tahpanhes.' },
  summary: 'The frontier fortress in the north-eastern delta to which Judean refugees dragged Jeremiah after the fall of Jerusalem, and where he buried stones as a sign of Babylon\'s coming.',
  detail: 'Tell Defenneh, Greek Daphnae, was a garrison town founded by Psammetichus I and manned partly by Greek mercenaries, as Herodotus records. Petrie excavated it in 1886 and identified a large fortified platform which local tradition still called "the palace of the Jew\'s daughter", an intriguing echo of Jeremiah 43:9, though the connection cannot be proved. Jeremiah\'s last recorded prophecies were delivered here.',
  modern: 'Tell Defenneh, Sharqia Governorate, Egypt',
  identification: 'Certain.'
},
{
  id: 'migdol', name: 'Migdol', original: 'מִגְדּוֹל Migdol ("tower")',
  lat: 30.9833, lon: 32.4500, elev: 5, type: 'site', rank: 4, confidence: 'disputed',
  alternatives: [
    { name: 'Tell el-Borg', lat: 30.9500, lon: 32.4600, note: 'A New Kingdom fort on the ancient Ways of Horus excavated by Hoffmeier (1999-2007); a candidate for the Migdol of the Exodus, whereas Tell el-Her suits Jeremiah\'s Migdol of the sixth century.' }
  ],
  eras: ['exodus', 'divided-kingdom'],
  refs: ['Exodus 14:2', 'Numbers 33:7', 'Jeremiah 44:1', 'Jeremiah 46:14', 'Ezekiel 29:10'],
  summary: 'A "tower" fortress on Egypt\'s north-eastern frontier, named in the Exodus route and again as a settlement of Judean refugees in Jeremiah\'s day.',
  detail: 'Migdol is a common Semitic word for a watchtower, and Egypt had several frontier forts so named. The Migdol of Jeremiah 44 is usually placed at Tell el-Her, east of the Suez Canal; the Migdol of Exodus 14 may be the same or an earlier fort in the Ballah Lakes region. The uncertainty is one strand of the wider debate about the crossing site.',
  modern: 'Tell el-Her, North Sinai, Egypt',
  identification: 'Disputed; more than one fort bore the name.'
},
{
  id: 'pi-hahiroth', name: 'Pi-hahiroth', alt: ['Baal-zephon'], original: 'פִּי הַחִירֹת Pi ha-Chirot',
  lat: 30.3000, lon: 32.4000, type: 'site', rank: 3, confidence: 'disputed',
  alternatives: [
    { name: 'Lake Ballah / El-Qantara', lat: 30.8500, lon: 32.3000, note: 'A northern crossing through the marshy Ballah lakes, favoured by Hoffmeier and others; fits the proximity of Migdol and Egypt\'s eastern forts. Problem: the text stresses deep water, not marsh.' },
    { name: 'Head of the Gulf of Suez', lat: 29.9500, lon: 32.5500, note: 'The traditional southern crossing, near modern Suez; the Gulf is unquestionably "sea" and the route leads naturally toward the southern Sinai. Problem: a long detour for a people in haste.' },
    { name: 'Nuweiba (Gulf of Aqaba)', lat: 28.9800, lon: 34.6500, note: 'Required by the Jebel al-Lawz theory of Sinai. Problems: a 300 km march in a few days, a crossing more than 800 m deep, and no Egyptian presence to hem the people in.' }
  ],
  eras: ['exodus'],
  refs: ['Exodus 14:2', 'Exodus 14:9', 'Numbers 33:7-8'],
  verse: { ref: 'Exodus 14:2', text: 'Tell the people of Israel to turn back and encamp in front of Pi-hahiroth, between Migdol and the sea, in front of Baal-zephon; you shall encamp facing it, by the sea.' },
  summary: 'The camp by the sea, between Migdol and Baal-zephon, from which Israel crossed on dry ground. Its site, and therefore the crossing point, is disputed.',
  detail: 'Scripture gives three landmarks (Pi-hahiroth, Migdol, Baal-zephon) none of which can be fixed with certainty. The name may be Egyptian (Pi-Hathor?) or Semitic ("mouth of the canals"). The Hebrew yam suph, "sea of reeds", can describe both the Gulf of Suez (1 Kings 9:26 uses it of the Gulf of Aqaba) and the reed-fringed lakes of the isthmus, which in the second millennium were more extensive and linked to the Gulf.\n\nThe atlas marks the Bitter Lakes, a middle position consistent with an eastward march from Rameses and Succoth (Tell el-Maskhuta) along Wadi Tumilat, and lists the main alternatives. Whatever the exact spot, the narrative insists on a real body of water, an army trapped against it, and a deliverance that Israel sang about for ever after.',
  christ: 'Paul says the fathers "were all baptised into Moses in the cloud and in the sea" (1 Corinthians 10:2). Passing through the waters from slavery to freedom is the Old Testament\'s great picture of the salvation Christ brings.',
  modern: 'Bitter Lakes region, Suez Canal, Egypt',
  identification: 'Disputed. Marker is a conventional mid-isthmus position.'
},
{
  id: 'red-sea', name: 'Red Sea', alt: ['Sea of Reeds', 'Yam Suph'], original: 'יַם־סוּף Yam Suph; Ἐρυθρὰ Θάλασσα',
  lat: 26.5000, lon: 34.8000, type: 'sea', rank: 2, confidence: 'certain',
  eras: ['exodus', 'united-kingdom'],
  refs: ['Exodus 13:18', 'Exodus 14:21-31', 'Exodus 15:4', 'Numbers 21:4', '1 Kings 9:26', 'Hebrews 11:29'],
  verse: { ref: 'Exodus 14:21', text: 'Then Moses stretched out his hand over the sea, and the LORD drove the sea back by a strong east wind all night and made the sea dry land, and the waters were divided.' },
  summary: 'The sea God parted for Israel and closed over Pharaoh\'s army. In Hebrew yam suph covers the Red Sea and both its gulfs, Suez and Aqaba, and possibly the lakes of the isthmus.',
  detail: 'The Greek translators rendered yam suph as "Red Sea", and the New Testament follows them (Acts 7:36; Hebrews 11:29). The term is used of the Gulf of Aqaba at Ezion-geber (1 Kings 9:26) and of the sea Israel skirted on the way to Edom (Numbers 21:4), so it is a broad name. Where exactly Israel crossed is bound up with the site of Pi-hahiroth and of Mount Sinai; see those entries. Solomon\'s fleet sailed from the Gulf of Aqaba to Ophir.',
  christ: 'The song of Moses at the sea (Exodus 15) is sung again by the redeemed in Revelation 15:3, "the song of Moses ... and the song of the Lamb". The exodus through the sea is the pattern of the greater deliverance accomplished at the cross.',
  modern: 'Red Sea, between Egypt and Arabia',
  identification: 'Certain as a sea; the crossing point is disputed.'
},
{
  id: 'marah', name: 'Marah', original: 'מָרָה Marah ("bitter")',
  lat: 29.4000, lon: 32.9000, type: 'site', rank: 4, confidence: 'traditional',
  eras: ['exodus'],
  refs: ['Exodus 15:22-26', 'Numbers 33:8'],
  verse: { ref: 'Exodus 15:23', text: 'When they came to Marah, they could not drink the water of Marah because it was bitter; therefore it was named Marah.' },
  summary: 'The first camp in the wilderness of Shur, three days from the sea, where bitter water was made sweet. Traditionally Ain Hawarah on the Gulf of Suez coast.',
  detail: 'Ain Hawarah, some 75 km south of Suez, has brackish water and has been proposed since the nineteenth century. The identification depends entirely on the southern route to Jebel Musa and is traditional, not demonstrated. The narrative stresses the lesson rather than the place: "I am the LORD, your healer".',
  christ: 'Bitter water made sweet by a tree the LORD showed Moses has long been read as a picture of the cross, though Scripture itself does not draw the line; what it does teach is that the LORD who tests also heals.',
  modern: 'Ain Hawarah, South Sinai, Egypt (traditional)',
  identification: 'Traditional; depends on the southern route.'
},
{
  id: 'elim', name: 'Elim', original: 'אֵילִם Elim ("terebinths")',
  lat: 29.2500, lon: 32.9500, type: 'site', rank: 4, confidence: 'traditional',
  eras: ['exodus'],
  refs: ['Exodus 15:27', 'Numbers 33:9-10'],
  verse: { ref: 'Exodus 15:27', text: 'Then they came to Elim, where there were twelve springs of water and seventy palm trees, and they encamped there by the water.' },
  summary: 'The oasis of twelve springs and seventy palms, second camp after the sea. Traditionally Wadi Gharandal, a well-watered valley on the Suez coast.',
  detail: 'Wadi Gharandal is the most abundant oasis on the western Sinai coast and has been favoured as Elim since Robinson\'s travels in 1838. As with Marah, the identification is only as strong as the southern route it assumes. Twelve springs and seventy palms invite the reader to think of the twelve tribes and seventy elders, though the text makes nothing of it.',
  modern: 'Wadi Gharandal, South Sinai, Egypt (traditional)',
  identification: 'Traditional.'
},
{
  id: 'rephidim', name: 'Rephidim', original: 'רְפִידִים Refidim',
  lat: 28.7167, lon: 33.6333, elev: 700, type: 'site', rank: 3, confidence: 'traditional',
  eras: ['exodus'],
  refs: ['Exodus 17:1-16', 'Exodus 19:2', 'Numbers 33:14-15'],
  verse: { ref: 'Exodus 17:6', text: 'Behold, I will stand before you there on the rock at Horeb, and you shall strike the rock, and water shall come out of it, and the people will drink.' },
  summary: 'The camp where Moses struck the rock for water, Israel defeated Amalek while Moses\' hands were held up, and Jethro met the people. Traditionally in Wadi Feiran below Jebel Serbal.',
  detail: 'Wadi Feiran is the largest oasis of southern Sinai and the natural approach to Jebel Musa, which is why it has been identified with Rephidim since at least the fourth century, when a bishopric was established there. The name Massah and Meribah ("testing and quarrelling") was given to the place of the water miracle. The site is traditional and cannot be confirmed.',
  christ: 'Paul writes that the fathers "drank from the spiritual Rock that followed them, and the Rock was Christ" (1 Corinthians 10:4). The struck rock giving water to a grumbling people is one of the Old Testament\'s richest pictures of grace.',
  modern: 'Wadi Feiran, South Sinai, Egypt (traditional)',
  identification: 'Traditional since the Byzantine period.'
},
{
  id: 'sinai', name: 'Mount Sinai', alt: ['Horeb', 'Mountain of God', 'Jebel Musa'], original: 'סִינַי Sinai; חֹרֵב Chorev',
  lat: 28.5395, lon: 33.9751, elev: 2285, type: 'mountain', rank: 1, confidence: 'traditional',
  alternatives: [
    { name: 'Jebel Serbal', lat: 28.6425, lon: 33.6483, note: 'Above Wadi Feiran; the earliest Christian pilgrims may have venerated this peak before Jebel Musa. A striking mountain but with no plain at its foot for a great encampment.' },
    { name: 'Jebel al-Lawz (north-west Arabia)', lat: 28.6544, lon: 35.3039, note: 'Popularised since the 1980s on the basis of Galatians 4:25 ("Sinai in Arabia") and a supposed Aqaba crossing. Problems: Paul\'s "Arabia" included Sinai; the route requires impossible distances; the "blackened peak" is a natural geological feature; the Saudi authorities\' surveys found nothing conclusive.' },
    { name: 'Har Karkom (Negev)', lat: 30.2917, lon: 34.7500, note: 'Anati\'s proposal based on abundant Bronze Age cult sites and rock art. Problem: the activity dates mostly to the third millennium BC, far too early.' },
    { name: 'Jebel Sin Bishar (west-central Sinai)', lat: 29.8300, lon: 33.1500, note: 'Har-El\'s proposal, only three days from the Bitter Lakes, matching Exodus 3:18. Modest height; little tradition.' }
  ],
  eras: ['exodus', 'divided-kingdom'],
  refs: ['Exodus 3:1-12', 'Exodus 19-20', 'Exodus 24:12-18', 'Deuteronomy 4:10-15', '1 Kings 19:8', 'Galatians 4:24-25', 'Hebrews 12:18-24'],
  verse: { ref: 'Exodus 19:20', text: 'The LORD came down on Mount Sinai, to the top of the mountain. And the LORD called Moses to the top of the mountain, and Moses went up.' },
  summary: 'The mountain of God where Moses saw the burning bush, where the LORD gave the law and made covenant with Israel, and where Elijah later heard the still small voice. The traditional site is Jebel Musa in southern Sinai.',
  detail: 'Sinai and Horeb are used interchangeably for the same mountain or massif. Israel camped before it from the third month after leaving Egypt for almost a year (Exodus 19:1; Numbers 10:11), receiving the Ten Commandments, the covenant, and the instructions for the tabernacle. Scripture gives its distance as eleven days from Kadesh-barnea by the Mount Seir road (Deuteronomy 1:2) and places it outside Canaan, in Midianite country.\n\nJebel Musa (2,285 m) has been venerated as Sinai since at least the fourth century AD; the monastery of St Catherine at its foot, built by Justinian in the sixth century, preserves a bush claimed as the burning bush and houses one of the world\'s oldest libraries. The broad plain of er-Raha before the mountain would accommodate a large encampment. There is no archaeological confirmation, and none should be expected of a tent-dwelling people; the identification rests on tradition and on the fit with the southern route. Alternative sites are listed; the northern Arabian theory in particular has been widely publicised but is rejected by nearly all specialists.',
  christ: 'Hebrews 12 sets Sinai, the mountain of fire, darkness and trembling, beside Mount Zion, where believers come to Jesus the mediator of a new covenant. The law given here was a guardian until Christ came (Galatians 3:24), and on another mountain Jesus, the greater Moses, taught the true righteousness of the kingdom.',
  modern: 'Jebel Musa, South Sinai, Egypt',
  identification: 'Traditional since the fourth century AD; no site can be demonstrated.'
},
{
  id: 'wilderness-shur', name: 'Wilderness of Shur', alt: ['Etham'], original: 'שׁוּר Shur ("wall")',
  lat: 30.4000, lon: 33.2000, type: 'wilderness', rank: 3, confidence: 'probable',
  eras: ['patriarchs', 'exodus'],
  refs: ['Genesis 16:7', 'Genesis 20:1', 'Genesis 25:18', 'Exodus 15:22', '1 Samuel 15:7', '1 Samuel 27:8'],
  verse: { ref: 'Genesis 16:7', text: 'The angel of the LORD found her by a spring of water in the wilderness, the spring on the way to Shur.' },
  summary: 'The desert of north-western Sinai east of Egypt\'s frontier, where Hagar fled and where Israel first marched after crossing the sea.',
  detail: 'Shur, "wall", probably takes its name from the line of Egyptian frontier forts along the isthmus. Numbers 33:8 calls the same district the wilderness of Etham. Hagar, Abraham (dwelling "between Kadesh and Shur"), the Ishmaelites and later Saul and David all range across it, marking it as the natural corridor between Egypt and the Negev.',
  modern: 'North-western Sinai, Egypt',
  identification: 'Generally accepted as a region.'
},
{
  id: 'wilderness-sin', name: 'Wilderness of Sin', original: 'סִין Sin',
  lat: 29.1000, lon: 33.3000, type: 'wilderness', rank: 3, confidence: 'traditional',
  eras: ['exodus'],
  refs: ['Exodus 16:1', 'Exodus 17:1', 'Numbers 33:11-12'],
  verse: { ref: 'Exodus 16:4', text: 'Then the LORD said to Moses, "Behold, I am about to rain bread from heaven for you, and the people shall go out and gather a day\'s portion every day, that I may test them, whether they will walk in my law or not."' },
  summary: 'The wilderness between Elim and Sinai where Israel grumbled for food and God first gave manna and quail.',
  detail: 'On the traditional southern route the wilderness of Sin is the coastal plain of el-Markha or the gravel plain of Debbet er-Ramleh, between the Gulf of Suez and the granite mountains. The name is probably related to Sinai and has nothing to do with the English word. Here the pattern of the wilderness years is set: complaint, provision, and the sabbath principle taught through the manna.',
  christ: 'Jesus told the crowds that the manna was not the true bread from heaven: "I am the bread of life" (John 6:32-35). The daily gift in the wilderness of Sin points to him.',
  modern: 'South-western Sinai, Egypt',
  identification: 'Traditional; depends on the southern route.'
},
{
  id: 'wilderness-paran', name: 'Wilderness of Paran', original: 'פָּארָן Paran',
  lat: 29.9000, lon: 34.4000, type: 'wilderness', rank: 3, confidence: 'probable',
  eras: ['patriarchs', 'exodus'],
  refs: ['Genesis 21:21', 'Numbers 10:12', 'Numbers 12:16', 'Numbers 13:3', 'Deuteronomy 33:2', '1 Samuel 25:1'],
  verse: { ref: 'Numbers 10:12', text: 'and the people of Israel set out by stages from the wilderness of Sinai. And the cloud settled down in the wilderness of Paran.' },
  summary: 'The great central desert of the Sinai peninsula, home of Ishmael, through which Israel marched from Sinai toward Kadesh and from which the spies were sent into Canaan.',
  detail: 'Paran is the limestone plateau of central and north-eastern Sinai, the largest and harshest of the wilderness regions Israel crossed. Kadesh-barnea lay on its northern edge (Numbers 13:26 places Kadesh "in the wilderness of Paran"), so the thirty-eight years of wandering were spent largely here and in the adjoining Negev. Habakkuk 3:3 and Deuteronomy 33:2 remember Mount Paran as a place of God\'s shining forth.',
  modern: 'Central Sinai, Egypt',
  identification: 'Generally accepted as a region.'
},
{
  id: 'wilderness-zin', name: 'Wilderness of Zin', original: 'צִן Tsin',
  lat: 30.7500, lon: 35.0500, type: 'wilderness', rank: 3, confidence: 'probable',
  eras: ['exodus', 'conquest-judges'],
  refs: ['Numbers 13:21', 'Numbers 20:1', 'Numbers 27:14', 'Numbers 34:3-4', 'Joshua 15:1-3'],
  verse: { ref: 'Numbers 20:1', text: 'And the people of Israel, the whole congregation, came into the wilderness of Zin in the first month, and the people stayed in Kadesh. And Miriam died there and was buried there.' },
  summary: 'The desert on the southern border of Canaan, between the Negev and Edom, where Miriam died and Moses struck the rock at Kadesh in anger.',
  detail: 'Zin lies north-east of Paran, embracing Kadesh-barnea (Numbers 20:1) and stretching to the Ascent of Akrabbim and the Arabah. It formed the southern boundary of the promised land and of Judah (Numbers 34:3; Joshua 15:1). The modern Nahal Zin, draining to the Arabah south of the Dead Sea, preserves the name in Israeli usage.',
  modern: 'Northern Negev / Arabah, Israel',
  identification: 'Generally accepted as a region.'
},
{
  id: 'kadesh-barnea', name: 'Kadesh-barnea', alt: ['Kadesh', 'En-mishpat', 'Meribah-kadesh'], original: 'קָדֵשׁ בַּרְנֵעַ Qadesh Barnea',
  lat: 30.6478, lon: 34.4194, elev: 450, type: 'site', rank: 2, confidence: 'disputed',
  alternatives: [
    { name: 'Ain Qadis', lat: 30.5900, lon: 34.5000, note: 'A smaller spring 8 km south-east which preserves the name Kadesh; Trumbull\'s 1881 identification. Probably part of the same oasis district.' },
    { name: 'Petra / Wadi Musa', lat: 30.3285, lon: 35.4444, note: 'Josephus and later tradition placed Kadesh near Petra, with Aaron\'s tomb on the adjacent Jebel Harun. Fits Numbers 20 (Kadesh on Edom\'s border) but not Numbers 34:4 and Joshua 15:3, which put it west of the Arabah.' }
  ],
  eras: ['patriarchs', 'exodus'],
  refs: ['Genesis 14:7', 'Numbers 13:26', 'Numbers 20:1-13', 'Numbers 32:8', 'Deuteronomy 1:19-46', 'Joshua 10:41'],
  verse: { ref: 'Numbers 20:12', text: 'Because you did not believe in me, to uphold me as holy in the eyes of the people of Israel, therefore you shall not bring this assembly into the land that I have given them.' },
  summary: 'The oasis on Canaan\'s southern border where the spies were sent out and Israel refused to enter the land, where Miriam died, and where Moses forfeited his own entry. The centre of the thirty-eight years of wandering.',
  detail: 'Kadesh-barnea is usually identified with the oasis of Ain el-Qudeirat in north-eastern Sinai, the richest spring in the region, with Ain Qadis nearby. Excavations at Ain el-Qudeirat (Dothan 1956; Cohen 1976-82) uncovered three superimposed Judahite fortresses of the tenth to sixth centuries BC but nothing from the Late Bronze Age, which is consistent with a tented encampment leaving no trace, though some scholars weigh the silence differently. The name Kadesh means "holy place", and En-mishpat, "spring of judgement", is the older name in Genesis 14:7.\n\nHere the first generation heard the spies\' report and refused to go up (Numbers 13-14); here, decades later, Moses struck the rock and was told he would not enter the land (Numbers 20). Deuteronomy 1:46 says "you remained at Kadesh many days".',
  christ: 'Hebrews 3-4 takes the refusal at Kadesh as the great warning against unbelief: a whole generation failed to enter God\'s rest. The invitation "Today, if you hear his voice" is spoken to those who have Christ as the Joshua who brings his people in.',
  modern: 'Ain el-Qudeirat, North Sinai, Egypt',
  identification: 'Generally accepted at Ain el-Qudeirat; disputed in detail.'
},
{
  id: 'mount-hor', name: 'Mount Hor', alt: ['Jebel Harun'], original: 'הֹר הָהָר Hor ha-Har',
  lat: 30.3167, lon: 35.4000, elev: 1350, type: 'mountain', rank: 3, confidence: 'traditional',
  alternatives: [
    { name: 'Jebel Madurah (Madra)', lat: 30.7100, lon: 35.0200, note: 'A conical hill in the northern Arabah west of Edom, proposed because Numbers 20:23 puts Hor "on the border of the land of Edom" and Israel was refused passage through Edom itself. Fits the geography better than Petra; lacks tradition.' }
  ],
  eras: ['exodus'],
  refs: ['Numbers 20:22-29', 'Numbers 33:37-41', 'Deuteronomy 32:50'],
  verse: { ref: 'Numbers 20:28', text: 'And Moses stripped Aaron of his garments and put them on Eleazar his son. And Aaron died there on the top of the mountain. Then Moses and Eleazar came down from the mountain.' },
  summary: 'The mountain on the border of Edom where Aaron died and the high priesthood passed to Eleazar. Tradition since Josephus fixes it on Jebel Harun above Petra.',
  detail: 'Jebel Harun ("Aaron\'s mountain") rises 1,350 m above the ruins of Petra; a fourteenth-century shrine on its summit marks the traditional tomb, and a Byzantine monastery has been excavated on the ridge below. The tradition is ancient but the location sits inside Edom rather than on its border, and the text says Israel marched from Kadesh to Hor and on around Edom. A site in the northern Arabah such as Jebel Madurah answers that difficulty. The atlas follows tradition and flags the doubt.',
  christ: 'Aaron died outside the land, his priesthood passing to another; Hebrews 7:23-25 contrasts the many mortal priests with Christ who "holds his priesthood permanently, because he continues forever".',
  modern: 'Jebel Harun, near Petra, Jordan (traditional)',
  identification: 'Traditional since Josephus; geographically questioned.'
},
{
  id: 'ezion-geber', name: 'Ezion-geber', alt: ['Elath', 'Eloth'], original: 'עֶצְיוֹן גֶּבֶר Etsyon Gever',
  lat: 29.5470, lon: 34.9930, elev: 10, type: 'city', rank: 3, confidence: 'disputed',
  alternatives: [
    { name: 'Jezirat Faraun (Pharaoh\'s Island / Coral Island)', lat: 29.4622, lon: 34.8592, note: 'Rothenberg\'s proposal: a small island with an ancient harbour and casemate wall 12 km south of Eilat. It has the only natural anchorage at the head of the gulf; but occupation is not clearly Iron Age.' }
  ],
  eras: ['exodus', 'united-kingdom', 'divided-kingdom'],
  refs: ['Numbers 33:35-36', 'Deuteronomy 2:8', '1 Kings 9:26', '1 Kings 22:48', '2 Chronicles 8:17', '2 Chronicles 20:36'],
  verse: { ref: '1 Kings 9:26', text: 'King Solomon built a fleet of ships at Ezion-geber, which is near Eloth on the shore of the Red Sea, in the land of Edom.' },
  summary: 'Solomon\'s port on the Gulf of Aqaba from which the fleet sailed to Ophir, and a station on Israel\'s wilderness route.',
  detail: 'Nelson Glueck excavated Tell el-Kheleifeh (1938-40) on the shore between Eilat and Aqaba and identified it as Ezion-geber, at first as a great copper refinery, a claim later withdrawn; re-analysis by Pratico dated the fortified settlement to the eighth to sixth centuries BC rather than to Solomon. A Solomonic harbour may lie beneath modern Aqaba or at Jezirat Faraun; the question is open. The town was Edomite, taken by David, lost and retaken (2 Kings 14:22; 16:6).',
  modern: 'Tell el-Kheleifeh, near Aqaba, Jordan',
  identification: 'Disputed; Tell el-Kheleifeh is the conventional marker.'
},
{
  id: 'punon', name: 'Punon', alt: ['Feinan', 'Phaino'], original: 'פּוּנֹן Punon',
  lat: 30.6272, lon: 35.4922, elev: 300, type: 'site', rank: 4, confidence: 'probable',
  eras: ['exodus'],
  refs: ['Numbers 33:42-43', 'Numbers 21:4-9'],
  summary: 'A camp on the wilderness itinerary in Edom, identified with the copper-mining district of Feinan, and a plausible setting for the bronze serpent.',
  detail: 'Khirbet Faynan preserves the name Punon (Byzantine Phaino, a penal mining colony). The Wadi Faynan copper mines were worked from the Chalcolithic period through the Iron Age, one of the largest ancient copper fields in the Levant; an Edomite settlement of the tenth to ninth centuries has been excavated at nearby Khirbat en-Nahas. Numbers lists Punon immediately after Zalmonah on the march around Edom, in the general context of the serpent episode of Numbers 21, though the text does not tie the two.',
  christ: 'Jesus said, "as Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up" (John 3:14). The bronze serpent, raised somewhere on this stretch of the march, is his own chosen picture of the cross.',
  modern: 'Khirbet Faynan, Tafilah Governorate, Jordan',
  identification: 'Generally accepted on the strength of the name.'
},
{
  id: 'edom', name: 'Edom', alt: ['Seir', 'Mount Seir', 'Idumea'], original: 'אֱדוֹם Edom',
  lat: 30.5500, lon: 35.6500, type: 'region', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'exodus', 'united-kingdom', 'divided-kingdom'],
  refs: ['Genesis 36:8-9', 'Numbers 20:14-21', '2 Samuel 8:13-14', '2 Kings 8:20-22', 'Obadiah 1-21', 'Malachi 1:2-4'],
  verse: { ref: 'Numbers 20:21', text: 'Thus Edom refused to give Israel passage through his territory, so Israel turned away from him.' },
  summary: 'The mountainous land of Esau\'s descendants south-east of the Dead Sea, which refused Israel passage, was subdued by David, and drew the prophets\' fiercest words for its gloating over Jerusalem\'s fall.',
  detail: 'Edom occupied the red sandstone highlands east of the Arabah from the Wadi Zered to the Gulf of Aqaba, with its capital at Bozrah (Buseirah) and later at Sela. Archaeology shows a substantial Edomite state only from the ninth or eighth century BC, though copper-working at Faynan and pastoral groups existed much earlier; Egyptian texts of the thirteenth century mention the "Shasu of Edom". Under Babylonian and Nabataean pressure the Edomites drifted west into southern Judah, where by New Testament times their land was called Idumea; Herod the Great was of Idumean stock.\n\nObadiah\'s whole prophecy is directed against Edom, and Malachi opens with "I have loved Jacob but Esau I have hated", which Paul takes up in Romans 9.',
  modern: 'Southern Jordan',
  identification: 'Certain.'
},
{
  id: 'moab', name: 'Moab', original: 'מוֹאָב Moav',
  lat: 31.3500, lon: 35.8500, type: 'region', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'exodus', 'conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Genesis 19:37', 'Numbers 22-24', 'Deuteronomy 34:1-6', 'Ruth 1:1-4', '2 Kings 3:4-27', 'Isaiah 15-16'],
  verse: { ref: 'Ruth 1:16', text: 'Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.' },
  summary: 'The tableland east of the Dead Sea, home of Lot\'s descendants, where Balaam blessed Israel, Moses died, and Ruth was born.',
  detail: 'Moab proper lay between the Arnon and the Zered, with the disputed Mishor (plateau) north of the Arnon changing hands with Israel. Its capital was Kir-hareseth (Kerak), its great sanctuary Dibon. The Mesha Stele, found at Dhiban in 1868, is a Moabite king\'s own account of the ninth-century wars with Israel described from the other side in 2 Kings 3; it mentions Omri, Yahweh, and probably "the house of David". Israel camped on the plains of Moab opposite Jericho before crossing the Jordan, and there Moses gave the addresses of Deuteronomy.',
  christ: 'Ruth the Moabite, a foreigner grafted into Israel by faith, became the great-grandmother of David and stands in the genealogy of Jesus (Matthew 1:5), an early sign that the gospel would gather in the nations.',
  modern: 'Central Jordan (Kerak and Madaba governorates)',
  identification: 'Certain.'
},
{
  id: 'ammon', name: 'Ammon', alt: ['Rabbah', 'Rabbath-ammon', 'Philadelphia'], original: 'עַמּוֹן Ammon',
  lat: 32.0500, lon: 36.1000, type: 'region', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Genesis 19:38', 'Deuteronomy 2:19', 'Judges 11:4-33', '1 Samuel 11:1-11', '2 Samuel 11:1', '2 Samuel 12:26-31', 'Jeremiah 49:1-6'],
  summary: 'The kingdom of Lot\'s other descendants on the upper Jabbok, with its capital at Rabbah (modern Amman), where Uriah died in David\'s siege.',
  detail: 'Ammon lay north of Moab around the headwaters of the Jabbok, hemmed between Gilead and the desert. Rabbah\'s citadel (Jebel el-Qala in Amman) has yielded Iron Age remains and Ammonite inscriptions, including the Amman Citadel Inscription. Jephthah fought the Ammonites, Saul relieved Jabesh-gilead from them, and David besieged Rabbah while he sinned with Bathsheba. In the Hellenistic period the city was refounded as Philadelphia, one of the Decapolis.',
  modern: 'Amman, Jordan',
  identification: 'Certain.'
},
{
  id: 'dibon', name: 'Dibon', alt: ['Dibon-gad', 'Dhiban'], original: 'דִּיבוֹן Divon',
  lat: 31.4997, lon: 35.7797, elev: 700, type: 'city', rank: 3, confidence: 'certain',
  eras: ['exodus', 'divided-kingdom'],
  refs: ['Numbers 21:30', 'Numbers 32:34', 'Numbers 33:45', 'Joshua 13:9', 'Isaiah 15:2', 'Jeremiah 48:18'],
  summary: 'A Moabite city north of the Arnon, allotted to Gad and later King Mesha\'s capital. Here the Mesha Stele, the longest Moabite inscription, was found in 1868.',
  detail: 'Dhiban was excavated by American teams from 1950 and again from 2004. The Mesha Stele, now in the Louvre, describes Mesha throwing off Israel\'s yoke after Omri\'s dynasty had oppressed Moab "forty years" and recounts his building works at Dibon, including the "high place for Chemosh". It offers the closest extra-biblical parallel to the narratives of 2 Kings 3 and 1 Kings 16, written in a language almost identical to Hebrew.',
  modern: 'Dhiban, Madaba Governorate, Jordan',
  identification: 'Certain.'
},
{
  id: 'heshbon', name: 'Heshbon', alt: ['Tell Hesban', 'Esbus'], original: 'חֶשְׁבּוֹן Cheshbon',
  lat: 31.8000, lon: 35.8092, elev: 895, type: 'city', rank: 3, confidence: 'probable',
  eras: ['exodus', 'conquest-judges', 'divided-kingdom'],
  refs: ['Numbers 21:25-30', 'Deuteronomy 2:24-37', 'Joshua 13:17', 'Song of Solomon 7:4', 'Isaiah 15:4', 'Jeremiah 48:2'],
  summary: 'Capital of Sihon king of the Amorites, whose defeat opened Transjordan to Israel; later a Reubenite, then Moabite, town celebrated for its pools.',
  detail: 'Tell Hesban was excavated by Andrews University (1968-76). The earliest substantial remains are Iron I (twelfth century BC), leaving no Late Bronze city for Sihon, so some scholars propose that the biblical Heshbon of Numbers 21 lay at nearby Tell Jalul or that the site was a lightly built settlement; others simply note the limits of excavation. The Song of Solomon compares the beloved\'s eyes to "pools in Heshbon"; a large Iron Age reservoir was indeed found. The name survives in the modern village.',
  modern: 'Hesban, Madaba Governorate, Jordan',
  identification: 'Name secure; Late Bronze occupation not yet found.'
},
{
  id: 'jazer', name: 'Jazer', original: 'יַעְזֵר Ya\'zer',
  lat: 31.9722, lon: 35.7458, elev: 750, type: 'town', rank: 4, confidence: 'disputed',
  alternatives: [
    { name: 'Khirbet Jazzir', lat: 32.0333, lon: 35.7333, note: 'Preserves the name near es-Salt; favoured by some over Khirbet es-Sar.' }
  ],
  eras: ['exodus', 'conquest-judges', 'united-kingdom'],
  refs: ['Numbers 21:32', 'Numbers 32:1-3', 'Joshua 13:25', 'Joshua 21:39', '2 Samuel 24:5', 'Isaiah 16:8-9', 'Jeremiah 48:32'],
  summary: 'An Amorite town in Gilead taken by Moses, allotted to Gad as a Levitical city, and mourned in the prophets\' laments over Moab\'s vines.',
  detail: 'Jazer marked the northern edge of the good pasture that Reuben and Gad asked for (Numbers 32:1). Eusebius placed it 10 Roman miles west of Philadelphia (Amman). Khirbet es-Sar and Khirbet Jazzir are the candidates; neither has been excavated enough to settle the matter.',
  modern: 'Khirbet es-Sar, near Amman, Jordan',
  identification: 'Disputed between two nearby sites.'
},
{
  id: 'nebo', name: 'Mount Nebo', alt: ['Pisgah', 'Abarim', 'Siyagha'], original: 'נְבוֹ Nevo',
  lat: 31.7686, lon: 35.7253, elev: 710, type: 'mountain', rank: 2, confidence: 'traditional',
  eras: ['exodus'],
  refs: ['Numbers 27:12', 'Deuteronomy 32:48-52', 'Deuteronomy 34:1-8'],
  verse: { ref: 'Deuteronomy 34:1', text: 'Then Moses went up from the plains of Moab to Mount Nebo, to the top of Pisgah, which is opposite Jericho. And the LORD showed him all the land, Gilead as far as Dan,' },
  summary: 'The peak of the Abarim range from which Moses viewed the promised land before he died. The traditional site, Ras Siyagha, commands the whole Jordan valley from Hermon to the Dead Sea.',
  detail: 'Nebo (Siyagha, 710 m) rises abruptly above the plains of Moab opposite Jericho, and on a clear day the view takes in Hermon, the Galilee hills, Jerusalem\'s ridge and the Dead Sea, matching Deuteronomy 34:1-3 remarkably well. Pilgrims were shown the spot by the fourth century; Egeria visited about AD 384, and a memorial church with fine mosaics was built and enlarged through the Byzantine period. The Franciscans excavated it from 1933. "No one knows the place of his burial to this day" (Deuteronomy 34:6), and the shrine claims only the viewpoint, not the grave.',
  christ: 'Moses saw the land but could not enter; the law brings us to the border of the promise but cannot bring us in. Yet Moses did at last stand in the land, on the mount of Transfiguration, talking with Jesus (Luke 9:30-31).',
  modern: 'Ras Siyagha, Madaba Governorate, Jordan',
  identification: 'Traditional since the fourth century; geographically apt.'
},
{
  id: 'alexandria', name: 'Alexandria', original: 'Ἀλεξάνδρεια Alexandreia',
  lat: 31.2001, lon: 29.9187, elev: 5, type: 'city', rank: 2, confidence: 'certain',
  eras: ['intertestamental', 'church'],
  refs: ['Acts 6:9', 'Acts 18:24', 'Acts 27:6', 'Acts 28:11'],
  verse: { ref: 'Acts 18:24', text: 'Now a Jew named Apollos, a native of Alexandria, came to Ephesus. He was an eloquent man, competent in the Scriptures.' },
  summary: 'Alexander\'s Egyptian capital, the second city of the Roman world and home of the largest Jewish community outside Judea, where the Septuagint was translated.',
  detail: 'Founded in 331 BC, Alexandria grew into a city of perhaps half a million with the great Library, the Museum and the Pharos lighthouse. Two of its five quarters were Jewish; here the Hebrew Scriptures were translated into Greek from the third century BC, producing the Septuagint quoted throughout the New Testament, and here Philo wrote. Apollos came from this city, and Paul sailed to Rome on Alexandrian grain ships. The city\'s later church, with Clement, Origen and Athanasius, was one of the great centres of early Christianity. Most of the ancient city lies beneath the modern one or under the harbour, where underwater archaeology has recovered parts of the Ptolemaic palace quarter.',
  modern: 'Alexandria, Egypt',
  identification: 'Certain.'
},
{
  id: 'cyrene', name: 'Cyrene', original: 'Κυρήνη Kyrēnē',
  lat: 32.8250, lon: 21.8583, elev: 620, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'],
  refs: ['Matthew 27:32', 'Mark 15:21', 'Acts 2:10', 'Acts 6:9', 'Acts 11:20', 'Acts 13:1'],
  verse: { ref: 'Mark 15:21', text: 'And they compelled a passerby, Simon of Cyrene, who was coming in from the country, the father of Alexander and Rufus, to carry his cross.' },
  summary: 'The Greek city of Libya from which came Simon who carried Jesus\' cross, Lucius the teacher at Antioch, and some of the first men to preach to Gentiles.',
  detail: 'Cyrene, founded from Thera about 631 BC, was the chief city of the Libyan Pentapolis and had a large Jewish population, which Josephus says was settled there by the Ptolemies. Cyrenians were in the Pentecost crowd, disputed with Stephen, and were among those who first evangelised Greeks at Antioch (Acts 11:20). The ruins at Shahhat, including the sanctuary of Apollo and a fine agora, are among the best preserved Greek cities in Africa. Tradition credits Mark, from a Cyrenian family, with founding the Egyptian church.',
  modern: 'Shahhat, Libya',
  identification: 'Certain.'
},
{
  id: 'nile', name: 'Nile', alt: ['The River', 'Shihor', 'Rivers of Egypt'], original: 'יְאֹר Ye\'or',
  lat: 26.0000, lon: 32.0000, type: 'river', rank: 1, confidence: 'certain',
  eras: [],
  refs: ['Genesis 41:1-3', 'Exodus 1:22', 'Exodus 2:3-5', 'Exodus 7:17-21', 'Isaiah 19:5-8', 'Ezekiel 29:3'],
  verse: { ref: 'Exodus 7:20', text: 'Moses and Aaron did as the LORD commanded. In the sight of Pharaoh and in the sight of his servants he lifted up the staff and struck the water in the Nile, and all the water in the Nile turned into blood.' },
  summary: 'The river that made Egypt: source of Pharaoh\'s dream-harvests, hiding place of the infant Moses, and first target of the plagues.',
  detail: 'Hebrew normally calls the Nile simply ye\'or, "the river", borrowing the Egyptian word. Its annual flood, on which the whole economy depended, lies behind Joseph\'s dreams of plenty and famine and behind the first plague, when the river that Egypt worshipped as the god Hapi turned to blood. Pharaoh\'s edict to drown Hebrew boys in it, and Moses\' rescue from its reeds, bind the river to the story of deliverance. Isaiah and Ezekiel picture Egypt as the crocodile of the Nile and foretell its drying up.',
  christ: 'The child drawn out of the Nile grew up to lead Israel through the sea; another child was carried to Egypt and out again to lead a greater exodus (Matthew 2:15). Both were saved from a king who killed the innocents.',
  modern: 'Egypt, Sudan',
  identification: 'Certain.'
},
{
  id: 'negev', name: 'Negev', alt: ['Negeb', 'The South'], original: 'נֶגֶב Negev',
  lat: 31.0500, lon: 34.8000, type: 'desert', rank: 3, confidence: 'certain',
  eras: ['patriarchs', 'conquest-judges', 'united-kingdom'],
  refs: ['Genesis 12:9', 'Genesis 13:1', 'Genesis 20:1', 'Numbers 13:17', 'Joshua 15:21', '1 Samuel 27:10'],
  verse: { ref: 'Genesis 12:9', text: 'And Abram journeyed on, still going toward the Negeb.' },
  summary: 'The dry southland of Judah around Beersheba and Arad, grazing country of the patriarchs and the frontier zone of the kingdom.',
  detail: 'The word negev means "dry" and came to mean "south". Abraham and Isaac pastured flocks here between Hebron, Beersheba and Gerar; the spies entered Canaan by way of the Negev; David raided from Ziklag across its southern reaches. Iron Age fortresses at Arad, Beersheba and Kadesh-barnea guarded the routes to Egypt and Edom, and Solomon\'s and Uzziah\'s copper and trade interests ran through it to the Red Sea.',
  modern: 'Southern Israel',
  identification: 'Certain.'
},
{
  id: 'sheba', name: 'Sheba', alt: ['Saba'], original: 'שְׁבָא Sheva',
  lat: 15.4256, lon: 45.3331, elev: 1200, type: 'region', rank: 3, confidence: 'probable',
  eras: ['united-kingdom'],
  refs: ['Genesis 10:28', '1 Kings 10:1-13', 'Psalm 72:10', 'Isaiah 60:6', 'Matthew 12:42'],
  verse: { ref: '1 Kings 10:1', text: 'Now when the queen of Sheba heard of the fame of Solomon concerning the name of the LORD, she came to test him with hard questions.' },
  summary: 'The incense kingdom of south-west Arabia whose queen travelled to hear Solomon\'s wisdom. Identified with Saba, centred on Marib in Yemen.',
  detail: 'Saba controlled the frankincense and myrrh trade of southern Arabia and the caravan routes north to Gaza and Damascus. Its capital Marib, with the great dam and the Awam temple, has been excavated by German teams, though the monumental remains date mostly from the eighth century BC onward; the tenth-century kingdom of Solomon\'s day is less well documented, and Assyrian texts first mention Sabaean rulers about 715 BC. Ethiopian tradition claims the queen as its own, reflecting Sabaean colonisation across the Red Sea.',
  christ: 'Jesus said, "The queen of the South came from the ends of the earth to hear the wisdom of Solomon, and behold, something greater than Solomon is here" (Matthew 12:42). Isaiah 60:6 foresees Sheba\'s gold and frankincense brought to Zion\'s light.',
  modern: 'Marib, Yemen',
  identification: 'Generally accepted as Saba in Yemen.'
},
{
  id: 'ophir', name: 'Ophir', original: 'אוֹפִיר Ofir',
  lat: 16.5000, lon: 43.5000, type: 'region', rank: 4, confidence: 'disputed',
  alternatives: [
    { name: 'Horn of Africa (Punt / Somali coast)', lat: 10.5000, lon: 46.0000, note: 'Egypt\'s land of Punt, source of gold, incense and exotic animals, reached by the same Red Sea route; a strong candidate.' },
    { name: 'India (Supara / Sopara)', lat: 19.4200, lon: 72.7900, note: 'Josephus and the Septuagint (Sophir) point to India; the peacocks and almug wood of 1 Kings 10:22 suit it. Problem: a three-year round trip is long even for India.' }
  ],
  eras: ['united-kingdom'],
  refs: ['Genesis 10:29', '1 Kings 9:28', '1 Kings 10:11', '1 Kings 22:48', 'Job 22:24', 'Isaiah 13:12'],
  verse: { ref: '1 Kings 9:28', text: 'And they went to Ophir and brought from there gold, 420 talents, and they brought it to King Solomon.' },
  summary: 'The land of fine gold reached by Solomon\'s Red Sea fleet. Its location is disputed; south-western Arabia, East Africa and India have all been proposed.',
  detail: 'Ophir appears in Genesis 10:29 among the Arabian sons of Joktan, beside Sheba and Havilah, which is the strongest argument for an Arabian location. An eighth-century ostracon from Tell Qasile reads "gold of Ophir for Beth-horon", confirming the phrase as a real commodity label. The round trip took three years (1 Kings 10:22), which some think implies a destination beyond Arabia.',
  modern: 'Unknown; marked in south-western Arabia',
  identification: 'Disputed.'
},
{
  id: 'tarshish', name: 'Tarshish', original: 'תַּרְשִׁישׁ Tarshish',
  lat: 37.2000, lon: -6.3000, type: 'region', rank: 4, confidence: 'disputed',
  alternatives: [
    { name: 'Sardinia (Nora)', lat: 38.9833, lon: 9.0167, note: 'The Nora Stone (ninth century BC) is read by some to contain the name Tarshish; Phoenician Sardinia was a source of silver and lead.' },
    { name: 'Tarsus (Cilicia)', lat: 36.9172, lon: 34.8956, note: 'Josephus\' identification; suits Genesis 10:4 (Tarshish among the sons of Javan) but poorly fits the far western metal trade.' }
  ],
  eras: ['united-kingdom', 'divided-kingdom'],
  refs: ['Genesis 10:4', '1 Kings 10:22', 'Psalm 72:10', 'Isaiah 23:1', 'Isaiah 60:9', 'Jonah 1:3', 'Ezekiel 27:12'],
  verse: { ref: 'Jonah 1:3', text: 'But Jonah rose to flee to Tarshish from the presence of the LORD. He went down to Joppa and found a ship going to Tarshish.' },
  summary: 'The far-western trading land of silver, iron, tin and lead for which Jonah bought passage. Usually identified with Tartessos in southern Spain, though Sardinia and other sites are argued.',
  detail: '"Ships of Tarshish" became a phrase for large ocean-going merchantmen. Ezekiel 27:12 lists its exports as silver, iron, tin and lead, the metals of the western Mediterranean; Isaiah treats it as the end of the earth. Tartessos, the Phoenician-influenced kingdom of the Guadalquivir estuary, fits the trade and the distance, and Esarhaddon\'s inscriptions name Tarsisi among the lands "in the midst of the sea". The identification is likely but not certain.',
  christ: 'Jonah fled toward Tarshish, the western edge of the known world, to escape preaching mercy to Nineveh; Isaiah 60:9 foresees the ships of Tarshish bringing the nations\' children home to the light of Zion.',
  modern: 'Lower Guadalquivir, Andalusia, Spain (probable)',
  identification: 'Disputed; Tartessos is the leading candidate.'
},

// ---------------------------------------------------------------------------
// CANAAN: PATRIARCHS AND CONQUEST
// ---------------------------------------------------------------------------
{
  id: 'canaan', name: 'Canaan', alt: ['The Promised Land', 'Land of Israel', 'Palestine'], original: 'כְּנַעַן Kena\'an',
  lat: 31.9000, lon: 35.0000, type: 'region', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'exodus', 'conquest-judges'],
  refs: ['Genesis 12:5-7', 'Genesis 17:8', 'Numbers 13:2', 'Numbers 34:2-12', 'Joshua 1:2-4', 'Matthew 15:22'],
  verse: { ref: 'Genesis 17:8', text: 'And I will give to you and to your offspring after you the land of your sojournings, all the land of Canaan, for an everlasting possession, and I will be their God.' },
  summary: 'The land between the Jordan and the Mediterranean promised to Abraham, inhabited by the Canaanite peoples until the conquest under Joshua.',
  detail: 'Canaan in Egyptian and Akkadian texts of the second millennium BC denotes the Levantine coast and hinterland under Egyptian control, roughly modern Israel, the Palestinian territories, Lebanon and coastal Syria. Numbers 34 draws its borders from the Wadi of Egypt to Lebo-hamath. The Amarna letters (fourteenth century BC) show a land of small city-states quarrelling under a distant pharaoh, and the Merneptah Stele (c. 1208 BC) names Israel among the peoples there. Its Late Bronze culture, religion (Baal, Asherah, El) and language are richly known from Ugarit and from excavations at Hazor, Megiddo and Lachish.\n\nThe land is the great sacrament of the Old Testament: promised, entered, defiled, lost and regained, and always pointing beyond itself.',
  christ: 'Abraham, though he lived in Canaan, "was looking forward to the city that has foundations" (Hebrews 11:10). The land was a foretaste; the meek who inherit the earth (Matthew 5:5) receive the fulfilment in Christ.',
  modern: 'Israel, Palestine, Lebanon, western Syria',
  identification: 'Certain.'
},
{
  id: 'shechem', name: 'Shechem', alt: ['Sichem', 'Tell Balata'], original: 'שְׁכֶם Shekhem',
  lat: 32.2136, lon: 35.2822, elev: 500, type: 'city', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Genesis 12:6-7', 'Genesis 33:18-20', 'Genesis 34', 'Joshua 24:1-27', 'Judges 9', '1 Kings 12:1-25'],
  verse: { ref: 'Joshua 24:15', text: 'But as for me and my house, we will serve the LORD.' },
  summary: 'The first place Abraham built an altar in Canaan, where Jacob bought land and dug a well, where Joshua renewed the covenant, and where Israel\'s kingdom split in two.',
  detail: 'Shechem lies in the pass between Mount Ebal and Mount Gerizim, at the crossroads of the central hill country. Tell Balata, on the eastern edge of Nablus, was excavated by Sellin (1913-34) and by G. E. Wright (1956-73), revealing massive Middle Bronze fortifications and the great "fortress temple" (Temple 1), a candidate for the "house of El-berith" of Judges 9:46. The city is named in Egyptian texts from the nineteenth century BC and in the Amarna letters, where its ruler Labayu troubled his neighbours.\n\nAbraham heard the promise of the land here; Jacob settled here and his sons avenged Dinah; Joseph was buried here (Joshua 24:32; his traditional tomb lies nearby); Joshua gathered the tribes to renew the covenant; Abimelech ruled and razed it; Rehoboam lost the north here. Jacob\'s well, where Jesus met the Samaritan woman, lies a little to the south-east.',
  christ: 'At the very spot where the promise of the land was first spoken, Jesus told a Samaritan woman that true worship is bound to no mountain but to spirit and truth, and revealed himself as Messiah (John 4:19-26).',
  modern: 'Tell Balata, Nablus, West Bank',
  identification: 'Certain.'
},
{
  id: 'bethel', name: 'Bethel', alt: ['Luz', 'Beth-aven'], original: 'בֵּית־אֵל Bet-El ("house of God")',
  lat: 31.9297, lon: 35.2386, elev: 880, type: 'city', rank: 2, confidence: 'probable',
  alternatives: [
    { name: 'El-Bireh', lat: 31.9083, lon: 35.2167, note: 'Livingston argued Bethel was at el-Bireh, 3 km south-west, to make Khirbet Nisya fit as Ai. Most scholars retain Beitin, which preserves the name and matches Eusebius\' distance from Jerusalem.' }
  ],
  eras: ['patriarchs', 'conquest-judges', 'divided-kingdom'],
  refs: ['Genesis 12:8', 'Genesis 28:10-22', 'Genesis 35:1-15', 'Judges 20:18-28', '1 Kings 12:28-33', 'Amos 7:10-13'],
  verse: { ref: 'Genesis 28:17', text: 'And he was afraid and said, "How awesome is this place! This is none other than the house of God, and this is the gate of heaven."' },
  summary: 'Where Jacob dreamed of the ladder and God renewed the covenant; a sanctuary in the days of the judges; and Jeroboam\'s rival shrine with its golden calf, denounced by Amos and Hosea.',
  detail: 'Beitin, 17 km north of Jerusalem on the watershed road, preserves the name. Albright and Kelso excavated it (1927, 1934, 1954-60), finding a Middle Bronze city, Late Bronze destruction, and Iron Age occupation; no trace of Jeroboam\'s temple has been identified, and the Iron Age evidence is thinner than the biblical prominence would suggest, a point critics raise. Abraham camped between Bethel and Ai and built an altar; Jacob named the place after his dream and returned to it; the ark was housed here for a time (Judges 20:27).\n\nAfter the division of the kingdom Bethel became the southern of the two royal shrines of Israel, "the king\'s sanctuary" (Amos 7:13). Hosea renamed it Beth-aven, "house of wickedness". Josiah destroyed its altar (2 Kings 23:15).',
  christ: 'Jesus told Nathanael he would see "heaven opened, and the angels of God ascending and descending on the Son of Man" (John 1:51). Jacob\'s ladder at Bethel is Christ himself, the meeting place of heaven and earth.',
  modern: 'Beitin, West Bank',
  identification: 'Generally accepted at Beitin.'
},
{
  id: 'ai', name: 'Ai', alt: ['Aiath', 'Aija'], original: 'הָעַי ha-Ai ("the ruin")',
  lat: 31.9169, lon: 35.2606, elev: 850, type: 'city', rank: 3, confidence: 'disputed',
  alternatives: [
    { name: 'Khirbet el-Maqatir', lat: 31.9153, lon: 35.2447, note: 'Excavated by Associates for Biblical Research (Wood, 1995-2016): a small fortified Late Bronze I site destroyed by fire around 1400 BC, matching the early-date conquest. Small size and distance from Beitin are debated.' },
    { name: 'Khirbet Nisya', lat: 31.8992, lon: 35.2264, note: 'Livingston\'s proposal, tied to relocating Bethel at el-Bireh; found little architecture.' }
  ],
  eras: ['patriarchs', 'conquest-judges'],
  refs: ['Genesis 12:8', 'Joshua 7:2-5', 'Joshua 8:1-29', 'Ezra 2:28', 'Nehemiah 11:31'],
  verse: { ref: 'Joshua 8:28', text: 'So Joshua burned Ai and made it forever a heap of ruins, as it is to this day.' },
  summary: 'The city east of Bethel where Israel was first defeated because of Achan\'s sin and then took the town by ambush. Its site is one of the classic problems of biblical archaeology.',
  detail: 'Et-Tell, 3 km east of Beitin, matches the name (both mean "the ruin") and the position, and has been accepted since Albright. But Marquet-Krause (1933-35) and Callaway (1964-72) found a great Early Bronze city destroyed about 2400 BC and then nothing until a small unwalled Iron I village, so there was no city for Joshua to attack on either the early or the late date. Callaway concluded the story was aetiological.\n\nConservative scholars respond either that the Joshua narrative describes a small fort (the Hebrew ir need not mean a large city) or that Ai lay elsewhere; Khirbet el-Maqatir, with its Late Bronze I fortress burned about 1400 BC, is the leading alternative. The atlas keeps et-Tell as the conventional marker and flags the issue honestly.',
  modern: 'Et-Tell, near Deir Dibwan, West Bank',
  identification: 'Disputed; et-Tell is conventional but archaeologically problematic.'
},
{
  id: 'hebron', name: 'Hebron', alt: ['Kiriath-arba', 'Mamre', 'Machpelah'], original: 'חֶבְרוֹן Chevron',
  lat: 31.5236, lon: 35.0989, elev: 930, type: 'city', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'conquest-judges', 'united-kingdom'],
  refs: ['Genesis 13:18', 'Genesis 18:1', 'Genesis 23:17-20', 'Numbers 13:22', 'Joshua 14:13-15', '2 Samuel 2:1-4', '2 Samuel 5:1-5'],
  verse: { ref: '2 Samuel 5:5', text: 'At Hebron he reigned over Judah seven years and six months, and at Jerusalem he reigned over all Israel and Judah thirty-three years.' },
  summary: 'Abraham\'s home by the oaks of Mamre, the burial place of the patriarchs in the cave of Machpelah, Caleb\'s inheritance, and David\'s first capital.',
  detail: 'Hebron sits high in the Judean hills, 30 km south of Jerusalem. The Bronze and Iron Age city was on Tel Rumeida (Tell Hebron), where excavations have found Middle Bronze walls of the size Numbers 13:22 implies ("built seven years before Zoan"), and Iron Age remains including lmlk storage jars of Hezekiah\'s time. Mamre is traditionally placed at Ramat el-Khalil, 3 km north, where Herod and later Constantine built enclosures.\n\nThe cave of Machpelah, where Abraham, Sarah, Isaac, Rebekah, Jacob and Leah were buried, lies beneath the Herodian enclosure now shared as the Tomb of the Patriarchs and the Ibrahimi Mosque; the Herodian masonry is certain, the tradition of the cave beneath it ancient and unbroken since at least Josephus. Anointed king of Judah here, David reigned in Hebron seven and a half years before taking Jerusalem.',
  christ: 'Abraham bought a grave in the land he never possessed, sure of the promise; his heirs "died in faith, not having received the things promised" (Hebrews 11:13). David was anointed here before he took his true capital, as Jesus was proclaimed king before Jerusalem received him.',
  modern: 'Hebron (al-Khalil), West Bank',
  identification: 'Certain; the exact tomb is traditional but very ancient.'
},
{
  id: 'beersheba', name: 'Beersheba', alt: ['Beer-sheba', 'Tel Sheva'], original: 'בְּאֵר שֶׁבַע Be\'er Sheva ("well of the oath / seven")',
  lat: 31.2447, lon: 34.8408, elev: 280, type: 'city', rank: 2, confidence: 'probable',
  eras: ['patriarchs', 'conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Genesis 21:22-34', 'Genesis 22:19', 'Genesis 26:23-33', 'Genesis 46:1-5', 'Judges 20:1', '1 Kings 19:3', 'Amos 5:5'],
  verse: { ref: 'Genesis 21:33', text: 'Abraham planted a tamarisk tree in Beersheba and called there on the name of the LORD, the Everlasting God.' },
  summary: 'The well of the patriarchs on the edge of the Negev, where Abraham and Isaac made treaties and God appeared to Jacob; the southern limit of Israel in the phrase "from Dan to Beersheba".',
  detail: 'Tel Sheva, 4 km east of the modern city, was excavated by Aharoni (1969-76) and found to be a planned Iron Age administrative town with a deep well at the gate, a circular street plan, and a dismantled horned altar whose stones had been reused in a wall, plausibly evidence of Hezekiah\'s or Josiah\'s reforms. There is no Bronze Age town, so the patriarchal Beersheba was a well and encampment, possibly nearer the modern city where the Ottoman-era wells stand. The name is explained twice in Genesis, from Abraham\'s oath with Abimelech and from the seven ewe lambs.\n\nElijah passed through on his flight to Horeb; Amos condemned pilgrims who went there.',
  modern: 'Tel Sheva, Beersheba, Israel',
  identification: 'Certain for the Iron Age town; the patriarchal well is a matter of tradition.'
},
{
  id: 'gerar', name: 'Gerar', original: 'גְּרָר Gerar',
  lat: 31.3822, lon: 34.6072, elev: 130, type: 'city', rank: 3, confidence: 'probable',
  eras: ['patriarchs'],
  refs: ['Genesis 10:19', 'Genesis 20:1-18', 'Genesis 26:1-33', '2 Chronicles 14:13-14'],
  verse: { ref: 'Genesis 26:1', text: 'Now there was a famine in the land, besides the former famine that was in the days of Abraham. And Isaac went to Gerar to Abimelech king of the Philistines.' },
  summary: 'The city of Abimelech, where both Abraham and Isaac passed their wives off as sisters and where Isaac\'s wells were disputed.',
  detail: 'Tel Haror, on Nahal Gerar between Gaza and Beersheba, is the leading candidate; excavations (Oren, 1982-90) revealed a very large Middle Bronze city with a temple, suiting a regional king of the patriarchal age. The "Philistines" of Genesis 20 and 26 are Aegean-linked people settled long before the main Philistine arrival about 1175 BC, or the name is used proleptically; the point is much discussed. An earlier proposal, Tell Jemmeh, is now generally set aside.',
  modern: 'Tel Haror, Negev, Israel',
  identification: 'Generally accepted at Tel Haror.'
},
{
  id: 'sodom', name: 'Sodom and Gomorrah', alt: ['Sodom', 'Gomorrah', 'Cities of the Plain'], original: 'סְדֹם Sedom; עֲמֹרָה Amorah',
  lat: 31.2528, lon: 35.5306, elev: -200, type: 'city', rank: 2, confidence: 'disputed',
  alternatives: [
    { name: 'Tall el-Hammam', lat: 31.8394, lon: 35.6733, note: 'Collins (2005-) argues for this large Middle Bronze city north-east of the Dead Sea, destroyed about 1650 BC, citing Genesis 13:10 (the plain visible from Bethel). Problems: Genesis puts Zoar and the Salt Sea area in view; the date sits late for Abraham on the traditional chronology; a claimed airburst has been disputed.' },
    { name: 'Numeira', lat: 31.1333, lon: 35.5333, note: 'A small Early Bronze town 13 km south of Bab edh-Dhra, destroyed by fire; paired with Bab edh-Dhra as Gomorrah by Rast and Schaub. Chronology (c. 2350 BC) is early for Abraham.' },
    { name: 'Beneath the southern Dead Sea basin', lat: 31.1000, lon: 35.4500, note: 'The older view, following Josephus and the location of Zoar and Mount Sodom: the cities lie drowned under the shallow southern basin. Untestable.' }
  ],
  eras: ['patriarchs'],
  refs: ['Genesis 13:10-13', 'Genesis 14:1-12', 'Genesis 18:16-33', 'Genesis 19:1-29', 'Deuteronomy 29:23', 'Luke 17:28-32', '2 Peter 2:6-8'],
  verse: { ref: 'Genesis 19:24', text: 'Then the LORD rained on Sodom and Gomorrah sulfur and fire from the LORD out of heaven.' },
  summary: 'The cities of the plain destroyed by fire from heaven for their wickedness, from which Lot was rescued. Their site is unknown; most place them near the southern Dead Sea.',
  detail: 'Genesis locates Sodom in the Jordan plain "toward Zoar", in a region later covered by the Salt Sea (Genesis 14:3), rich in bitumen and salt. The traditional view puts the cities at the southern end of the Dead Sea, near the salt mountain still called Jebel Usdum (Mount Sodom). Bab edh-Dhra and Numeira, two Early Bronze towns on the eastern shore, were both destroyed by fire around 2350 BC and have been proposed as Sodom and Gomorrah, though that date is several centuries before Abraham on the traditional chronology.\n\nA northern location at Tall el-Hammam has been argued vigorously since 2005 and is the only excavated candidate with a Middle Bronze destruction, but its geography sits awkwardly with the text\'s references to Zoar and the Salt Sea. The atlas marks Bab edh-Dhra as a conventional southern position and lists the rest. Whatever the site, Scripture makes Sodom a byword for judgement and a warning Jesus himself repeats.',
  christ: 'Abraham pleaded for Sodom, asking whether God would sweep away the righteous with the wicked; the answer is finally given at the cross, where the one righteous man bears judgement so that many may be spared. Jesus said the day of the Son of Man would be as in the days of Lot (Luke 17:28-30).',
  modern: 'Unknown; marked at Bab edh-Dhra, Jordan',
  identification: 'Disputed; no site is established.'
},
{
  id: 'zoar', name: 'Zoar', alt: ['Bela', 'Zoara'], original: 'צֹעַר Tso\'ar ("little")',
  lat: 31.0428, lon: 35.4728, elev: -350, type: 'town', rank: 4, confidence: 'probable',
  eras: ['patriarchs', 'exodus'],
  refs: ['Genesis 13:10', 'Genesis 14:2', 'Genesis 19:20-23', 'Deuteronomy 34:3', 'Isaiah 15:5'],
  verse: { ref: 'Genesis 19:22', text: 'Escape there quickly, for I can do nothing till you arrive there. Therefore the name of the city was called Zoar.' },
  summary: 'The small city spared at Lot\'s request, to which he fled from Sodom. Later a Moabite town at the south-eastern corner of the Dead Sea.',
  detail: 'Byzantine Zoara, shown on the Madaba mosaic map at the south-east end of the Dead Sea, lay at Ghor es-Safi, where a large cemetery of the Roman and Byzantine periods with Jewish and Christian tombstones has been excavated. Whether the biblical Zoar lay exactly here is uncertain but the district is agreed, and it anchors the southern location of Sodom. Moses saw "the Negeb, and the Plain, that is, the Valley of Jericho as far as Zoar" from Nebo.',
  modern: 'Ghor es-Safi, Kerak Governorate, Jordan',
  identification: 'District generally accepted; exact site uncertain.'
},
{
  id: 'dothan', name: 'Dothan', original: 'דֹּתָן Dotan',
  lat: 32.4144, lon: 35.3172, elev: 300, type: 'city', rank: 3, confidence: 'certain',
  eras: ['patriarchs', 'divided-kingdom'],
  refs: ['Genesis 37:17-28', '2 Kings 6:13-23'],
  verse: { ref: '2 Kings 6:16', text: 'He said, "Do not be afraid, for those who are with us are more than those who are with them."' },
  summary: 'Where Joseph was sold by his brothers to passing traders, and where Elisha\'s servant saw the hills full of horses and chariots of fire.',
  detail: 'Tell Dothan rises above a fertile plain on the route from Shechem to the Jezreel valley, exactly where Genesis places the brothers grazing and the Ishmaelite caravan passing on the way to Egypt. Free\'s excavations (1953-64) found occupation from the Chalcolithic to the Iron Age, with a substantial Middle Bronze city and a well-preserved Iron II town, the period of the Aramean siege in 2 Kings 6. The name survives in the village of Tell Dothan.',
  christ: 'Joseph, rejected by his brothers and sold for silver, was raised up to save the very ones who betrayed him; Stephen tells his story (Acts 7:9-14) as a foreshadowing of Jesus.',
  modern: 'Tell Dothan, near Jenin, West Bank',
  identification: 'Certain.'
},
{
  id: 'succoth', name: 'Succoth (Gilead)', alt: ['Tell Deir Alla'], original: 'סֻכּוֹת Sukkot ("booths")',
  lat: 32.1972, lon: 35.6208, elev: -200, type: 'town', rank: 4, confidence: 'probable',
  eras: ['patriarchs', 'conquest-judges', 'united-kingdom'],
  refs: ['Genesis 33:17', 'Joshua 13:27', 'Judges 8:5-16', '1 Kings 7:46', 'Psalm 60:6'],
  verse: { ref: 'Genesis 33:17', text: 'But Jacob journeyed to Succoth, and built himself a house and made booths for his livestock. Therefore the name of the place is called Succoth.' },
  summary: 'Jacob\'s first settlement after meeting Esau, in the Jordan valley near the Jabbok. Later a town of Gad whose elders refused Gideon bread. Not the Succoth of the Exodus.',
  detail: 'Tell Deir Alla, near the Jabbok\'s mouth, was excavated by Franken (1960-67, 1976-78). It yielded a Late Bronze sanctuary and, from about 800 BC, the plaster inscription of Balaam son of Beor, the seer of Numbers 22-24, the only extra-biblical text to name him. Solomon\'s bronze work for the temple was cast "in the clay ground between Succoth and Zarethan" (1 Kings 7:46), and the valley is indeed rich in clay.',
  modern: 'Tell Deir Alla, Balqa Governorate, Jordan',
  identification: 'Generally accepted, though some place Succoth at nearby Tell el-Ekhsas.'
},
{
  id: 'penuel', name: 'Penuel', alt: ['Peniel'], original: 'פְּנוּאֵל Penuel ("face of God")',
  lat: 32.1836, lon: 35.6942, elev: 100, type: 'town', rank: 3, confidence: 'probable',
  eras: ['patriarchs', 'conquest-judges', 'divided-kingdom'],
  refs: ['Genesis 32:22-32', 'Judges 8:8-17', '1 Kings 12:25'],
  verse: { ref: 'Genesis 32:30', text: 'So Jacob called the name of the place Peniel, saying, "For I have seen God face to face, and yet my life has been delivered."' },
  summary: 'Where Jacob wrestled through the night with God at the ford of the Jabbok and received the name Israel. Later a fortified town rebuilt by Jeroboam I.',
  detail: 'The twin hills of Tulul edh-Dhahab, "mounds of gold", rise where the Jabbok cuts through the hills toward the Jordan, and the western mound is usually taken as Penuel, the eastern as Mahanaim; some reverse them. Surveys and limited excavation show Iron Age fortifications on both. The tower of Penuel that Gideon pulled down and the city Jeroboam built fit the commanding position over the ford.',
  christ: 'Jacob prevailed by clinging and asking for blessing, and limped away renamed; the God he saw "face to face" is the God whom, John says, no one has seen except through the Son (John 1:18).',
  modern: 'Tulul edh-Dhahab (west), Jordan',
  identification: 'Generally accepted; the pairing with Mahanaim is debated.'
},
{
  id: 'mahanaim', name: 'Mahanaim', original: 'מַחֲנַיִם Machanayim ("two camps")',
  lat: 32.1917, lon: 35.7042, elev: 150, type: 'city', rank: 3, confidence: 'disputed',
  alternatives: [
    { name: 'Khirbet Mahneh', lat: 32.3000, lon: 35.7500, note: 'Preserves the name north of the Jabbok; but the hilltop site is small and less strategic.' }
  ],
  eras: ['patriarchs', 'united-kingdom'],
  refs: ['Genesis 32:1-2', 'Joshua 13:26', '2 Samuel 2:8', '2 Samuel 17:24-27', '2 Samuel 19:32', '1 Kings 2:8'],
  verse: { ref: 'Genesis 32:2', text: 'And when Jacob saw them he said, "This is God\'s camp!" So he called the name of that place Mahanaim.' },
  summary: 'Where Jacob met the angels of God; later Ish-bosheth\'s capital and David\'s refuge across the Jordan during Absalom\'s revolt.',
  detail: 'Mahanaim was a Levitical city of Gad on the border with Manasseh (Joshua 21:38). Its strategic value is clear from its role as a royal seat in two civil wars. The eastern mound of Tulul edh-Dhahab, opposite Penuel across the Jabbok gorge, is the usual identification; the wider district near the river is not in doubt but the exact tell is.',
  modern: 'Tulul edh-Dhahab (east), Jordan',
  identification: 'Disputed among sites near the Jabbok.'
},
{
  id: 'jabbok', name: 'Jabbok', alt: ['Zarqa River'], original: 'יַבֹּק Yabboq',
  lat: 32.1900, lon: 35.8500, type: 'river', rank: 3, confidence: 'certain',
  eras: ['patriarchs', 'exodus', 'conquest-judges'],
  refs: ['Genesis 32:22', 'Numbers 21:24', 'Deuteronomy 3:16', 'Joshua 12:2', 'Judges 11:13'],
  verse: { ref: 'Genesis 32:22', text: 'The same night he arose and took his two wives, his two female servants, and his eleven children, and crossed the ford of the Jabbok.' },
  summary: 'The river of Gilead that Jacob crossed the night he wrestled with God, and the northern boundary of Sihon\'s Amorite kingdom.',
  detail: 'The Zarqa rises near Amman, loops north and then west through a deep gorge to join the Jordan 40 km north of the Dead Sea. Its upper course bounded Ammon; its lower course divided the halves of Gilead. Rabbah, Penuel, Mahanaim and Succoth all stand on or near it.',
  modern: 'Nahr ez-Zarqa, Jordan',
  identification: 'Certain.'
},
{
  id: 'jordan', name: 'Jordan River', alt: ['The Jordan'], original: 'יַרְדֵּן Yarden; Ἰορδάνης Iordanēs',
  lat: 32.2500, lon: 35.5500, elev: -300, type: 'river', rank: 1, confidence: 'certain',
  eras: [],
  refs: ['Genesis 13:10', 'Joshua 3:14-17', '2 Kings 2:6-14', '2 Kings 5:10-14', 'Matthew 3:13-17', 'John 10:40'],
  verse: { ref: 'Matthew 3:13', text: 'Then Jesus came from Galilee to the Jordan to John, to be baptized by him.' },
  summary: 'The river of Israel, from the springs of Hermon through the Sea of Galilee to the Dead Sea: the boundary Israel crossed on dry ground, where Naaman was cleansed and Jesus was baptised.',
  detail: 'The Jordan falls from about 70 m above sea level at Dan to 430 m below at the Dead Sea over roughly 200 km of meandering course in the great rift valley, hence its name, from yarad, "to descend". Its lower valley (the Ghor) is hot and, near Jericho, was a jungle of tamarisk and reed where lions once roamed (Jeremiah 49:19). The river itself is modest, easily fordable at many points except in spring flood, which is precisely when Israel crossed (Joshua 3:15).\n\nIt marks Israel\'s eastern boundary and the threshold of promise: Jacob crossed it returning home, Israel entered the land through it, Elijah was taken up beside it, Elisha divided it, Naaman washed in it, and John baptised in it. Jesus\' baptism in the Jordan opens his public ministry.',
  christ: 'Jesus entered the waters where Israel had entered the land and where sinners were confessing their sins, identifying himself with his people; the Father\'s voice and the descending Spirit declared him the beloved Son (Matthew 3:16-17). Crossing the Jordan has become the church\'s picture of passing through death into the promised rest.',
  modern: 'Israel, Jordan, West Bank',
  identification: 'Certain.'
},
{
  id: 'jericho', name: 'Jericho', alt: ['City of Palms', 'Tell es-Sultan'], original: 'יְרִיחוֹ Yericho; Ἰεριχώ',
  lat: 31.8711, lon: 35.4441, elev: -258, type: 'city', rank: 2, confidence: 'certain',
  eras: ['exodus', 'conquest-judges', 'divided-kingdom', 'christ'],
  refs: ['Numbers 22:1', 'Joshua 2', 'Joshua 6', '2 Kings 2:4-5', 'Luke 10:30', 'Luke 18:35-19:10', 'Hebrews 11:30-31'],
  verse: { ref: 'Hebrews 11:30', text: 'By faith the walls of Jericho fell down after they had been encircled for seven days.' },
  summary: 'The oasis city whose walls fell to Joshua, the first conquest in Canaan. In the Gospels, Herod\'s winter city where Jesus healed blind Bartimaeus and called Zacchaeus.',
  detail: 'Tell es-Sultan, beside the spring of Ain es-Sultan, is one of the oldest towns on earth, with a stone tower of about 8000 BC. Its Bronze Age history is the most debated in biblical archaeology. Garstang (1930-36) found a fallen double wall and a burned city he dated to about 1400 BC, in line with the early-date conquest. Kenyon (1952-58) re-dated that destruction to about 1550 BC (the end of the Middle Bronze Age) and concluded there was virtually no city for Joshua to take on either date. Bryant Wood (1990) re-examined Kenyon\'s pottery and Garstang\'s finds, arguing for a Late Bronze I destruction about 1400 BC after all, noting the burnt grain stores (a spring-time, short siege, no plundering: Joshua 6:24), collapsed mudbrick walls forming a ramp at the base of the revetment, and a scarab series running to Amenhotep III. Radiocarbon dates on the burned layer have favoured the sixteenth century, so the matter remains contested, though erosion has removed most Late Bronze remains from the summit.\n\nNew Testament Jericho lay 2 km south at Tulul Abu el-Alayiq, where Herod\'s winter palaces with their pools and gardens have been excavated. The steep road up to Jerusalem is the setting of the Good Samaritan.',
  christ: 'Rahab the prostitute, spared by faith and a scarlet cord, entered Jesus\' genealogy (Matthew 1:5). At Jericho Jesus, whose name is Joshua\'s, gave sight to the blind and sought out Zacchaeus, "for the Son of Man came to seek and to save the lost" (Luke 19:10).',
  modern: 'Tell es-Sultan, Jericho, West Bank',
  identification: 'Certain; the date of the conquest destruction is debated.'
},
{
  id: 'gilgal', name: 'Gilgal', original: 'גִּלְגָּל Gilgal ("circle")',
  lat: 31.8760, lon: 35.4560, elev: -240, type: 'site', rank: 3, confidence: 'disputed',
  alternatives: [
    { name: 'Khirbet el-Mefjir', lat: 31.8811, lon: 35.4614, note: 'North-east of Tell es-Sultan; Iron I sherds; proposed by Muilenburg. The conventional marker.' },
    { name: 'Jordan valley foot-shaped enclosures (Bedhat esh-Sha\'ab)', lat: 32.0500, lon: 35.5000, note: 'Zertal\'s survey found several Iron I stone enclosures shaped like a sandal, which he connected with gilgal camps and the ceremonial treading of the land. Suggestive, not proven.' }
  ],
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Joshua 4:19-24', 'Joshua 5:2-12', 'Joshua 10:6-9', '1 Samuel 11:14-15', '1 Samuel 13:8-14', '1 Samuel 15:33', 'Hosea 4:15'],
  verse: { ref: 'Joshua 5:9', text: 'And the LORD said to Joshua, "Today I have rolled away the reproach of Egypt from you." And so the name of that place is called Gilgal to this day.' },
  summary: 'Israel\'s first camp in Canaan, where the twelve stones from the Jordan were set up, the people circumcised and the first Passover in the land kept. Later Saul was made king and rejected here.',
  detail: 'Gilgal lay "on the east border of Jericho" (Joshua 4:19) and served as Joshua\'s base through the conquest. It remained a sanctuary and assembly point through Samuel\'s day, condemned by Hosea and Amos for corrupt worship. No site has been identified with confidence; Khirbet el-Mefjir, on the Jericho plain, is the conventional marker. Eusebius and the Madaba map placed it about 2 Roman miles east of Jericho.',
  christ: 'At Gilgal Israel was circumcised and ate the Passover before taking the land, rolling away the reproach of Egypt; Paul speaks of the true circumcision "made without hands" in Christ (Colossians 2:11), the mark of the people who inherit.',
  modern: 'Jericho plain, West Bank',
  identification: 'Disputed; no excavated site confirmed.'
},
{
  id: 'shiloh', name: 'Shiloh', alt: ['Khirbet Seilun'], original: 'שִׁלוֹ Shiloh',
  lat: 32.0556, lon: 35.2897, elev: 700, type: 'city', rank: 2, confidence: 'certain',
  eras: ['conquest-judges', 'divided-kingdom'],
  refs: ['Joshua 18:1', 'Judges 21:19', '1 Samuel 1-4', 'Psalm 78:60', 'Jeremiah 7:12-14', 'Jeremiah 26:6'],
  verse: { ref: 'Jeremiah 7:12', text: 'Go now to my place that was in Shiloh, where I made my name dwell at first, and see what I did to it because of the evil of my people Israel.' },
  summary: 'Where the tabernacle stood for some three centuries, from Joshua to Samuel; the home of Eli and the boy Samuel, from which the ark was carried out to defeat and never returned.',
  detail: 'Khirbet Seilun, 30 km north of Jerusalem, preserves the name and is secured by Eusebius\' description and its position "north of Bethel, east of the road to Shechem, south of Lebonah" (Judges 21:19). Danish excavations (1926-32), Finkelstein (1981-84) and Associates for Biblical Research (2017-) have found a Middle Bronze fortress, an Iron I settlement with pillared storage buildings containing collared-rim jars and quantities of animal bone consistent with sacrifice, and a destruction by fire around 1050 BC which fits the Philistine victory of 1 Samuel 4, though the Bible does not directly describe Shiloh\'s fall. A flat platform on the north side has been proposed for the tabernacle; the claim is plausible but unproven.\n\nPsalm 78:60 and Jeremiah 7 remember Shiloh as the sanctuary God abandoned, a warning to Jerusalem.',
  christ: 'Hannah\'s song at Shiloh, praising the God who raises the poor and brings low the proud, is echoed in Mary\'s Magnificat. God forsook his tent at Shiloh; in Christ "the Word became flesh and dwelt (tabernacled) among us" (John 1:14), a dwelling that cannot be lost.',
  modern: 'Khirbet Seilun, West Bank',
  identification: 'Certain.'
},
{
  id: 'gibeon', name: 'Gibeon', alt: ['el-Jib'], original: 'גִּבְעוֹן Giv\'on',
  lat: 31.8472, lon: 35.1847, elev: 750, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Joshua 9', 'Joshua 10:1-14', '2 Samuel 2:12-17', '2 Samuel 21:1-9', '1 Kings 3:4-15', '1 Chronicles 16:39'],
  verse: { ref: 'Joshua 10:12', text: 'Sun, stand still at Gibeon, and moon, in the Valley of Aijalon.' },
  summary: 'The Hivite city that tricked Joshua into a treaty, and above which the sun stood still. Later the site of the tabernacle in David\'s day and of Solomon\'s dream.',
  detail: 'El-Jib, 10 km north-west of Jerusalem, was excavated by Pritchard (1956-62), who found the name "Gibeon" on more than thirty jar handles, one of the clearest epigraphic identifications of any biblical site. He also uncovered a great rock-cut pool with a spiral stair, likely the "pool of Gibeon" where Abner and Joab\'s men fought (2 Samuel 2:13), and a wine-making industry with 63 rock-cut cellars. Late Bronze remains are limited, mostly tombs, which some weigh against the Joshua account.\n\nThe high place of Gibeon housed the tabernacle and the bronze altar until Solomon built the temple; here the young king asked for wisdom.',
  modern: 'El-Jib, West Bank',
  identification: 'Certain; confirmed by inscribed jar handles.'
},
{
  id: 'hazor', name: 'Hazor', alt: ['Tel Hazor'], original: 'חָצוֹר Chatsor',
  lat: 33.0175, lon: 35.5683, elev: 230, type: 'city', rank: 2, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 11:1-13', 'Judges 4:2', '1 Kings 9:15', '2 Kings 15:29'],
  verse: { ref: 'Joshua 11:10', text: 'And Joshua turned back at that time and captured Hazor and struck its king with the sword, for Hazor formerly was the head of all those kingdoms.' },
  summary: 'The greatest Canaanite city, "head of all those kingdoms", burned by Joshua; later the seat of Jabin and Sisera, one of Solomon\'s fortified cities, and a casualty of Tiglath-pileser III.',
  detail: 'Tel Hazor in upper Galilee covers some 80 hectares, ten times the size of Jerusalem in David\'s day, and is named in Egyptian texts, the Mari archive and the Amarna letters, where its king alone in Canaan is styled "king". Yigael Yadin (1955-58, 1968) and Amnon Ben-Tor (1990-) excavated it. The Late Bronze city was destroyed in a fierce fire, with cult statues deliberately decapitated and the palace burned at temperatures that melted mudbrick, the only Canaanite city the book of Joshua says he burned (11:11). Ben-Tor dates the destruction to the thirteenth century BC and attributes it to Israel; others prefer the fifteenth century in line with the early date, and the Judges 4 reference to a later Jabin shows Hazor recovered for a time.\n\nA six-chambered gate and casemate wall of the tenth century, matching those at Megiddo and Gezer, are widely taken as Solomon\'s work (1 Kings 9:15), though the dating is debated. Assyrian destruction in 732 BC ended the city.',
  modern: 'Tel Hazor, near Rosh Pinna, Israel',
  identification: 'Certain.'
},
{
  id: 'lachish', name: 'Lachish', alt: ['Tel Lachish', 'Tell ed-Duweir'], original: 'לָכִישׁ Lakhish',
  lat: 31.5647, lon: 34.8490, elev: 270, type: 'city', rank: 2, confidence: 'certain',
  eras: ['conquest-judges', 'divided-kingdom'],
  refs: ['Joshua 10:31-32', '2 Kings 14:19', '2 Kings 18:14-17', '2 Chronicles 32:9', 'Jeremiah 34:7', 'Micah 1:13'],
  verse: { ref: 'Joshua 10:32', text: 'And the LORD gave Lachish into the hand of Israel, and he captured it on the second day and struck it with the sword, and every person in it, as he had done to Libnah.' },
  summary: 'The second city of Judah, taken by Joshua, besieged and stormed by Sennacherib in 701 BC (the scene of the famous Nineveh reliefs), and one of the last fortresses to fall to Nebuchadnezzar.',
  detail: 'Tel Lachish guards the road from the coast into the Judean hills. Starkey (1932-38), Aharoni, Ussishkin (1973-94) and current teams have made it the best-understood Iron Age city in Judah. The Assyrian siege ramp of 701 BC, the only one known in the Near East, still lies against the south-west corner, with arrowheads, sling stones and the remains of the counter-ramp inside; the same siege is depicted in extraordinary detail on Sennacherib\'s palace reliefs from Nineveh, now in the British Museum, showing Judahite captives and impaled defenders. Sennacherib made Lachish his headquarters while his envoys threatened Jerusalem (2 Kings 18:17).\n\nThe Lachish Letters, ostraca found in the gatehouse from the final Babylonian siege of 588-586 BC, include a soldier\'s note that he can no longer see the fire signals of Azekah, echoing Jeremiah 34:7. A Late Bronze destruction (Level VI) around 1150 BC and an earlier one (Level VII) bear on the conquest debate.',
  christ: 'Hezekiah\'s Jerusalem was spared while Lachish fell, "for I will defend this city, to save it, for my own sake and for the sake of my servant David" (2 Kings 19:34): the LORD\'s commitment to David\'s line, kept for Messiah\'s sake.',
  modern: 'Tel Lachish, Lachish region, Israel',
  identification: 'Certain.'
},
{
  id: 'debir', name: 'Debir', alt: ['Kiriath-sepher', 'Kiriath-sannah'], original: 'דְּבִיר Devir',
  lat: 31.4358, lon: 35.0161, elev: 700, type: 'city', rank: 4, confidence: 'probable',
  eras: ['conquest-judges'],
  refs: ['Joshua 10:38-39', 'Joshua 15:15-17', 'Joshua 21:15', 'Judges 1:11-13'],
  summary: 'A Canaanite royal city in the southern hill country taken by Joshua and again by Othniel, who won Caleb\'s daughter Achsah by it.',
  detail: 'Albright identified Debir with Tell Beit Mirsim and excavated it (1926-32), but Kochavi\'s survey and excavation of Khirbet Rabud (1968-69), 13 km south-west of Hebron, found a much larger Late Bronze and Iron Age city in the hill country where Joshua 15 requires, and Rabud is now generally preferred. Debir was a Levitical city.',
  modern: 'Khirbet Rabud, West Bank',
  identification: 'Generally accepted at Khirbet Rabud.'
},
{
  id: 'makkedah', name: 'Makkedah', original: 'מַקֵּדָה Maqqedah',
  lat: 31.5306, lon: 34.9464, elev: 450, type: 'town', rank: 4, confidence: 'disputed',
  alternatives: [
    { name: 'Khirbet el-Qom', lat: 31.5306, lon: 34.9464, note: 'Dorsey\'s proposal, with Iron Age remains and caves; the conventional marker.' },
    { name: 'Tel Beit Mirsim area', lat: 31.4472, lon: 34.9006, note: 'Older suggestions placed Makkedah further south-west; unproven.' }
  ],
  eras: ['conquest-judges'],
  refs: ['Joshua 10:10', 'Joshua 10:16-28', 'Joshua 12:16', 'Joshua 15:41'],
  summary: 'The town in whose cave the five Amorite kings hid after the battle of Gibeon, and where Joshua executed them and took the city.',
  detail: 'Makkedah lay in the Shephelah, in the same district as Lachish, Libnah and Eglon, and was the end point of Joshua\'s long pursuit from Gibeon by way of Beth-horon and Azekah. Its site is not established; Khirbet el-Qom, where a Hebrew tomb inscription mentioning Yahweh and "his Asherah" was found, is the most cited candidate.',
  modern: 'Khirbet el-Qom (?), West Bank',
  identification: 'Disputed.'
},
{
  id: 'libnah', name: 'Libnah', original: 'לִבְנָה Livnah',
  lat: 31.6290, lon: 34.8710, elev: 250, type: 'town', rank: 4, confidence: 'probable',
  eras: ['conquest-judges', 'divided-kingdom'],
  refs: ['Joshua 10:29-30', 'Joshua 21:13', '2 Kings 8:22', '2 Kings 19:8', '2 Kings 23:31'],
  summary: 'A Shephelah town taken by Joshua, a Levitical city that rebelled against Jehoram, and Sennacherib\'s next camp after Lachish.',
  detail: 'Tel Burna, on the Guvrin valley 8 km north of Lachish, has been excavated since 2010 and shows a fortified Iron II town with Judahite culture, fitting Libnah well; Tel Zayit is the other serious candidate. Libnah\'s standing as a royal city appears in that two of Judah\'s kings, Josiah and Jehoahaz, had mothers from it.',
  modern: 'Tel Burna, Israel',
  identification: 'Generally accepted at Tel Burna; not confirmed.'
},
{
  id: 'eglon', name: 'Eglon', original: 'עֶגְלוֹן Eglon',
  lat: 31.5136, lon: 34.9622, elev: 400, type: 'town', rank: 4, confidence: 'disputed',
  alternatives: [
    { name: 'Tell el-Hesi', lat: 31.5450, lon: 34.7250, note: 'Petrie and Albright\'s identification, on the coastal plain edge; excavated from 1890 (the first stratigraphic dig in Palestine). Now thought too far west and perhaps the biblical Libnah or another town.' }
  ],
  eras: ['conquest-judges'],
  refs: ['Joshua 10:3-5', 'Joshua 10:34-36', 'Joshua 12:12', 'Joshua 15:39'],
  summary: 'One of the five Amorite royal cities allied against Gibeon; taken by Joshua after Lachish. Not to be confused with Eglon king of Moab.',
  detail: 'Tel Eton, in the trough between the Shephelah and the hills, has been excavated since 2006 and revealed a large Late Bronze and Iron Age town with a governor\'s residence of the tenth century; many now identify it as Eglon. Earlier scholarship placed Eglon at Tell el-Hesi. The question is open.',
  modern: 'Tel Eton, Israel',
  identification: 'Disputed between Tel Eton and Tell el-Hesi.'
},
{
  id: 'gezer', name: 'Gezer', alt: ['Tel Gezer'], original: 'גֶּזֶר Gezer',
  lat: 31.8594, lon: 34.9236, elev: 230, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Joshua 10:33', 'Joshua 16:10', 'Judges 1:29', '2 Samuel 5:25', '1 Kings 9:15-17'],
  verse: { ref: '1 Kings 9:16', text: '(Pharaoh king of Egypt had gone up and captured Gezer and burned it with fire, and had killed the Canaanites who lived in the city, and had given it as dowry to his daughter, Solomon\'s wife;' },
  summary: 'A Canaanite city on the coastal road that Israel failed to take, given by Pharaoh to Solomon as a dowry and rebuilt as one of his three fortified cities.',
  detail: 'Tel Gezer, overlooking the Aijalon valley where the coastal road turns up to Jerusalem, was excavated by Macalister (1902-09), Dever and Seger (1964-90) and Ortiz and Wolff (2006-17). It has yielded a Middle Bronze "high place" of ten standing stones, a Canaanite water system, the Gezer Calendar (a tenth-century schoolboy\'s Hebrew exercise), and thirteen boundary stones inscribed "boundary of Gezer". The six-chambered gate and casemate wall match those at Hazor and Megiddo and are conventionally Solomonic. A destruction layer with Egyptian material may be the Pharaoh\'s burning of 1 Kings 9:16.',
  modern: 'Tel Gezer, Israel',
  identification: 'Certain; confirmed by boundary inscriptions.'
},
{
  id: 'ebal', name: 'Mount Ebal', original: 'עֵיבָל Eval',
  lat: 32.2339, lon: 35.2731, elev: 940, type: 'mountain', rank: 3, confidence: 'certain',
  eras: ['conquest-judges'],
  refs: ['Deuteronomy 11:29', 'Deuteronomy 27:4-13', 'Joshua 8:30-35'],
  verse: { ref: 'Deuteronomy 11:29', text: 'And when the LORD your God brings you into the land that you are entering to take possession of it, you shall set the blessing on Mount Gerizim and the curse on Mount Ebal.' },
  summary: 'The mountain of the curse north of Shechem, where Joshua built an altar and wrote the law on stones as Moses had commanded.',
  detail: 'Ebal, the higher of the two peaks flanking Shechem, faces Gerizim across the narrow pass, making a natural amphitheatre for the covenant ceremony of Joshua 8. Zertal (1982-89) excavated a large rectangular stone structure on a north-eastern shoulder filled with ash and burned bones of kosher animals, dated by pottery and scarabs to about 1250-1150 BC, which he identified as Joshua\'s altar. Many archaeologists dispute the interpretation (a watchtower or farmstead has been proposed), and a small folded lead tablet from the site published in 2023 as a "curse inscription" is contested. The mountain\'s role in Scripture does not depend on the debate.',
  christ: 'The curses read from Ebal fell on all who failed to keep the law; Paul writes that Christ "redeemed us from the curse of the law by becoming a curse for us" (Galatians 3:13).',
  modern: 'Jebel Islamiyeh, Nablus, West Bank',
  identification: 'Certain; the altar identification is disputed.'
},
{
  id: 'gerizim', name: 'Mount Gerizim', original: 'גְּרִזִים Gerizim',
  lat: 32.2000, lon: 35.2731, elev: 881, type: 'mountain', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'intertestamental', 'christ'],
  refs: ['Deuteronomy 11:29', 'Deuteronomy 27:12', 'Joshua 8:33', 'Judges 9:7', 'John 4:20'],
  summary: 'The mountain of the blessing south of Shechem; from the fourth century BC the holy mountain of the Samaritans, "this mountain" of the woman at the well.',
  detail: 'Six tribes stood on Gerizim to pronounce the blessings while six stood on Ebal for the curses. The Samaritans, holding Gerizim rather than Zion to be God\'s chosen place, built a temple on its summit in the Persian or early Hellenistic period; Magen\'s excavations (1982-2006) uncovered a large sacred precinct and the Hellenistic town around it, destroyed by John Hyrcanus about 110 BC. A small Samaritan community still sacrifices the Passover lambs on the mountain each year. Hadrian and then the Byzantines built over the summit.',
  christ: 'Standing within sight of Gerizim, Jesus told the Samaritan woman that the hour had come when worship would be neither on this mountain nor in Jerusalem but "in spirit and truth" (John 4:21-24); the blessing pronounced from Gerizim is found in him.',
  modern: 'Jebel et-Tur, Nablus, West Bank',
  identification: 'Certain.'
},
{
  id: 'dead-sea', name: 'Dead Sea', alt: ['Salt Sea', 'Sea of the Arabah', 'Eastern Sea', 'Lake Asphaltitis'], original: 'יָם הַמֶּלַח Yam ha-Melach',
  lat: 31.5000, lon: 35.4800, elev: -430, type: 'sea', rank: 2, confidence: 'certain',
  eras: [],
  refs: ['Genesis 14:3', 'Numbers 34:3', 'Joshua 3:16', 'Ezekiel 47:8-10', 'Zechariah 14:8'],
  verse: { ref: 'Genesis 14:3', text: 'And all these joined forces in the Valley of Siddim (that is, the Salt Sea).' },
  summary: 'The hypersaline lake at the lowest point on earth, the Salt Sea of the Old Testament, bounding Judah on the east and Moab on the west.',
  detail: 'The Dead Sea lies 430 m below sea level in the rift valley, fed by the Jordan and with no outlet; its water is nearly ten times saltier than the ocean. Scripture calls it the Salt Sea, the Sea of the Arabah and the Eastern Sea, never "Dead". Sodom lay in its vicinity, En-gedi and Masada on its western cliffs, Qumran above its north-western shore, where the Dead Sea Scrolls were found in 1947. Its level has fallen dramatically in modern times, exposing the shallow southern basin where some believe the cities of the plain lie.',
  christ: 'Ezekiel saw a river flowing from the temple to make the Dead Sea fresh and teem with fish (Ezekiel 47), and Jesus spoke of living water flowing from the one who believes in him (John 7:38): the picture of life reaching the deadest place.',
  modern: 'Israel, West Bank, Jordan',
  identification: 'Certain.'
},
{
  id: 'mediterranean', name: 'Mediterranean Sea', alt: ['Great Sea', 'Western Sea', 'Sea of the Philistines'], original: 'הַיָּם הַגָּדוֹל ha-Yam ha-Gadol',
  lat: 33.0000, lon: 32.0000, type: 'sea', rank: 1, confidence: 'certain',
  eras: [],
  refs: ['Numbers 34:6', 'Joshua 1:4', 'Joshua 15:12', 'Ezekiel 47:10', 'Acts 27'],
  verse: { ref: 'Joshua 1:4', text: 'From the wilderness and this Lebanon as far as the great river, the river Euphrates, all the land of the Hittites to the Great Sea toward the going down of the sun shall be your territory.' },
  summary: 'The Great Sea of the Old Testament, Israel\'s western boundary; in the New Testament the highway of the gospel from Caesarea and Antioch to Rome.',
  detail: 'Israel was never a seafaring people; the coast south of Carmel has few harbours and the Philistines and Phoenicians controlled it. The sea appears as the western limit of the land and as a realm of storm and chaos (Psalm 107; Jonah 1). In the Roman period it became the Mare Nostrum, safe enough for Paul to sail it repeatedly, though his shipwreck off Malta shows its dangers in the closed season after October. Ezekiel\'s vision has fishermen spreading nets from En-gedi to En-eglaim as the Dead Sea becomes like the Great Sea.',
  modern: 'Mediterranean Sea',
  identification: 'Certain.'
},
{
  id: 'arnon', name: 'Arnon', alt: ['Wadi Mujib'], original: 'אַרְנוֹן Arnon',
  lat: 31.4700, lon: 35.6200, type: 'river', rank: 3, confidence: 'certain',
  eras: ['exodus', 'conquest-judges', 'divided-kingdom'],
  refs: ['Numbers 21:13-15', 'Numbers 21:24', 'Deuteronomy 2:24', 'Deuteronomy 3:8', 'Judges 11:18-26', 'Isaiah 16:2'],
  summary: 'The deep gorge draining to the Dead Sea that marked the border between Moab and the Amorite kingdom of Sihon, and later Israel\'s southern frontier in Transjordan.',
  detail: 'The Wadi Mujib cuts a canyon 500 m deep through the Moabite plateau, a formidable natural frontier. Israel crossed it to defeat Sihon, and Jephthah cited three hundred years of Israelite possession north of it. The Mesha Stele records Mesha building "the highway in the Arnon". Aroer stood on its northern rim.',
  modern: 'Wadi Mujib, Jordan',
  identification: 'Certain.'
},

// ---------------------------------------------------------------------------
// JERUSALEM, JUDAH, PHILISTIA AND THE NORTHERN VALLEYS
// ---------------------------------------------------------------------------
{
  id: 'jerusalem', name: 'Jerusalem', alt: ['Jebus', 'Salem', 'Zion', 'City of David', 'Ariel'], original: 'יְרוּשָׁלַיִם Yerushalayim; Ἱερουσαλήμ',
  lat: 31.7784, lon: 35.2354, elev: 760, type: 'city', rank: 1, confidence: 'certain',
  eras: [],
  refs: ['Genesis 14:18', '2 Samuel 5:6-10', '1 Kings 8:1-11', '2 Kings 25:8-10', 'Nehemiah 2:11-18', 'Luke 19:41-44', 'Acts 2:1-4', 'Revelation 21:2'],
  verse: { ref: 'Psalm 122:6', text: 'Pray for the peace of Jerusalem! May they be secure who love you!' },
  summary: 'The city of David and of the temple, centre of the whole biblical story: captured by David, glorified by Solomon, destroyed by Babylon and Rome, and the scene of the death and resurrection of Jesus and the birth of the church.',
  detail: 'Jerusalem stands on the watershed ridge of the Judean hills, 760 m above sea level, on a spur bounded by the Kidron and Hinnom valleys. Its only spring, the Gihon, lies at the foot of the eastern ridge, which is why the earliest city, the Canaanite and Davidic "City of David", occupied that narrow hill south of the later Temple Mount. The city is named in Egyptian Execration Texts (c. 1900 BC) and the Amarna letters (Urusalim), and Salem in Genesis 14 is generally taken to be Jerusalem.\n\nDavid took the Jebusite stronghold about 1003 BC and brought the ark here; Solomon built the temple on the threshing floor of Araunah, Mount Moriah, just north of the city. Hezekiah\'s Broad Wall and his tunnel to the Pool of Siloam (with its Hebrew inscription), the Babylonian destruction layer of 586 BC with arrowheads and burned houses, Nehemiah\'s wall, Herod\'s vast Temple Mount platform with the Western Wall and Robinson\'s Arch, the Pool of Siloam, the stepped street to the temple, and the ossuary of Caiaphas have all been excavated. Kenyon, Shiloh, Mazar and Reich are among the principal excavators. The Large Stone Structure found by Eilat Mazar in 2005 has been proposed as David\'s palace, a claim widely debated.\n\nJesus wept over the city, cleansed its temple, was crucified outside its wall and rose from a tomb nearby; the Spirit fell here at Pentecost; and Titus destroyed the city and temple in AD 70, as Jesus had foretold.',
  christ: 'Jerusalem is where God set his name, where the lamb was slain, and where the Son of David was rejected and raised. Scripture ends not with the earthly city but with the new Jerusalem coming down from God, "and I saw no temple in the city, for its temple is the Lord God the Almighty and the Lamb" (Revelation 21:22).',
  modern: 'Jerusalem',
  identification: 'Certain.'
},
{
  id: 'zion', name: 'Mount Zion / Moriah', alt: ['Zion', 'Moriah', 'Temple Mount', 'Mount of the LORD'], original: 'צִיּוֹן Tsiyyon; מֹרִיָּה Moriyyah',
  lat: 31.7780, lon: 35.2358, elev: 740, type: 'site', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'united-kingdom', 'divided-kingdom', 'exile-return', 'christ'],
  refs: ['Genesis 22:1-14', '2 Samuel 5:7', '2 Samuel 24:18-25', '2 Chronicles 3:1', 'Psalm 2:6', 'Psalm 48:1-2', 'Isaiah 2:2-3', 'Hebrews 12:22'],
  verse: { ref: '2 Chronicles 3:1', text: 'Then Solomon began to build the house of the LORD in Jerusalem on Mount Moriah, where the LORD had appeared to David his father, at the place that David had appointed, on the threshing floor of Ornan the Jebusite.' },
  summary: 'Moriah, where Abraham offered Isaac and Solomon built the temple; Zion, first the Jebusite citadel David took, then the temple hill and the whole holy city in the psalms and prophets.',
  detail: 'Zion originally named the fortified ridge David captured (2 Samuel 5:7). Once the ark and temple stood on the hill to its north, "Zion" widened to mean the temple mount and then Jerusalem as the city of God. In Byzantine times the name migrated to the south-western hill, where "Mount Zion" is marked today, a mislabelling that persists. Moriah is named only in Genesis 22 and 2 Chronicles 3:1, the latter identifying the temple site with the place God appeared to David at Araunah\'s threshing floor.\n\nThe present Haram esh-Sharif is Herod\'s platform, enlarged from Solomon\'s and Zerubbabel\'s; the bedrock outcrop under the Dome of the Rock is the likely site of the altar or the Holy of Holies. No excavation is possible on the platform itself, but Herodian masonry, the Western Wall and the ritual baths and shops at its foot are visible.',
  christ: 'On Moriah God provided a ram in place of Isaac and Abraham named the place "The LORD will provide"; on the same ridge, two thousand years later, the Father did not spare his own Son. Believers "have come to Mount Zion and to the city of the living God" (Hebrews 12:22).',
  modern: 'Temple Mount / Haram esh-Sharif, Jerusalem',
  identification: 'Certain for the temple hill; the Byzantine "Mount Zion" is misplaced.'
},
{
  id: 'mount-of-olives', name: 'Mount of Olives', alt: ['Olivet', 'Mount of Corruption'], original: 'הַר הַזֵּיתִים Har ha-Zetim; ὄρος τῶν Ἐλαιῶν',
  lat: 31.7780, lon: 35.2450, elev: 826, type: 'mountain', rank: 2, confidence: 'certain',
  eras: ['united-kingdom', 'divided-kingdom', 'christ', 'church'],
  refs: ['2 Samuel 15:30', '1 Kings 11:7', 'Zechariah 14:4', 'Matthew 24:3', 'Luke 19:29-44', 'Luke 22:39', 'Acts 1:9-12'],
  verse: { ref: 'Acts 1:12', text: 'Then they returned to Jerusalem from the mount called Olivet, which is near Jerusalem, a Sabbath day\'s journey away.' },
  summary: 'The ridge east of Jerusalem across the Kidron valley, from which Jesus wept over the city, began his triumphal entry, taught about the end, prayed in Gethsemane and ascended to heaven.',
  detail: 'The Mount of Olives rises about 60 m above the Temple Mount and commands the classic view of the city. David climbed it weeping as he fled from Absalom; Solomon built shrines to foreign gods on it, earning it the name Mount of Corruption; Ezekiel saw the glory of the LORD depart to it (Ezekiel 11:23); Zechariah foretold the LORD standing on it and the mountain splitting. Bethany and Bethphage lie on its eastern slope. Its western slope has been a Jewish burial ground for three thousand years. Byzantine and Crusader churches mark the Ascension, the Lord\'s Prayer (Pater Noster) and Jesus\' weeping (Dominus Flevit); the Chapel of the Ascension is a small Crusader octagon.',
  christ: 'Jesus rode down this hill to be acclaimed king, sweated blood at its foot, and was taken up into heaven from it, and the angels promised he will return "in the same way" (Acts 1:11). Zechariah 14:4 saw his feet standing there.',
  modern: 'Jerusalem',
  identification: 'Certain.'
},
{
  id: 'bethlehem', name: 'Bethlehem', alt: ['Ephrath', 'Ephrathah', 'City of David'], original: 'בֵּית לֶחֶם Bet Lechem ("house of bread"); Βηθλέεμ',
  lat: 31.7054, lon: 35.2024, elev: 775, type: 'town', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'conquest-judges', 'united-kingdom', 'christ'],
  refs: ['Genesis 35:19', 'Ruth 1:19', '1 Samuel 16:1-13', '1 Samuel 17:12', 'Micah 5:2', 'Matthew 2:1-18', 'Luke 2:1-20', 'John 7:42'],
  verse: { ref: 'Micah 5:2', text: 'But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.' },
  summary: 'The village of Ruth and Boaz, where Samuel anointed David, and where Jesus the Son of David was born as Micah had foretold.',
  detail: 'Bethlehem lies 8 km south of Jerusalem on the ridge road to Hebron, with terraced hills for vines and olives and, to the east, the shepherds\' fields sloping toward the Judean wilderness. Rachel died on the way to Ephrath, and her traditional tomb stands at the town\'s northern entrance. Ruth gleaned in the fields of Boaz here; their great-grandson David kept his father\'s sheep here and was anointed by Samuel in his father\'s house. Bethlehem was never important politically, which is Micah\'s point.\n\nThe Church of the Nativity, begun by Constantine in 326 and rebuilt by Justinian, stands over a cave venerated as the birthplace since at least the second century, when Justin Martyr and Origen mention it; the tradition is early and the town certain, though the exact cave cannot be proved. A 2012 bulla reading "Bethlehem" from Jerusalem is the earliest extra-biblical mention of the town. Herod\'s slaughter of the infants is not recorded outside Matthew but is wholly in character with the king\'s final years.',
  christ: 'Here the "house of bread" gave the bread of life; the Son of David was born in David\'s town, laid in a manger, and announced first to shepherds in the fields where David had shepherded. Micah 5:2, quoted by the scribes to Herod, fixed the place seven centuries beforehand.',
  modern: 'Bethlehem, West Bank',
  identification: 'Certain; the Nativity cave is traditional from the second century.'
},
{
  id: 'ramah', name: 'Ramah', alt: ['Ramah of Benjamin', 'Ramathaim-zophim', 'er-Ram'], original: 'רָמָה Ramah ("height")',
  lat: 31.8503, lon: 35.2314, elev: 790, type: 'town', rank: 3, confidence: 'probable',
  alternatives: [
    { name: 'Nebi Samwil', lat: 31.8328, lon: 35.1811, note: 'Traditional tomb of Samuel since the Byzantine period; some make it Ramathaim. Excavation found no Iron I town, only Iron II and later.' },
    { name: 'Rentis (Ramathaim / Arimathea)', lat: 32.0311, lon: 35.0378, note: 'Eusebius placed Samuel\'s Ramathaim in the hills of Ephraim near Lydda, the Arimathea of the Gospels. Would separate Samuel\'s Ramah from Ramah of Benjamin.' }
  ],
  eras: ['conquest-judges', 'divided-kingdom', 'exile-return'],
  refs: ['Joshua 18:25', 'Judges 4:5', '1 Samuel 1:19', '1 Samuel 7:17', '1 Samuel 19:18', 'Isaiah 10:29', 'Jeremiah 31:15', 'Jeremiah 40:1'],
  verse: { ref: '1 Samuel 7:17', text: 'Then he would return to Ramah, for his home was there, and there also he judged Israel. And he built there an altar to the LORD.' },
  summary: 'Samuel\'s home and burial place, and the town of Benjamin where Nebuzaradan sorted the captives after Jerusalem fell, near where Jeremiah heard Rachel weeping.',
  detail: 'Ramah of Benjamin, at er-Ram 8 km north of Jerusalem, is secure. Whether Samuel\'s Ramah (Ramathaim-zophim, 1 Samuel 1:1) is the same place is debated; the name is common, and Eusebius put Ramathaim near Lydda, while Jewish and Christian tradition has venerated Samuel\'s tomb at Nebi Samwil since Byzantine times. The atlas follows the common view that Samuel\'s Ramah is er-Ram. Jeremiah 31:15, "a voice is heard in Ramah", is quoted by Matthew of the slaughter at Bethlehem.',
  modern: 'Er-Ram, West Bank',
  identification: 'Ramah of Benjamin certain; Samuel\'s Ramathaim debated.'
},
{
  id: 'mizpah', name: 'Mizpah', alt: ['Mizpeh', 'Tell en-Nasbeh'], original: 'מִצְפָּה Mitspah ("watchtower")',
  lat: 31.8847, lon: 35.2167, elev: 780, type: 'town', rank: 3, confidence: 'probable',
  alternatives: [
    { name: 'Nebi Samwil', lat: 31.8328, lon: 35.1811, note: 'The commanding hilltop north-west of Jerusalem; suits the meaning "watchtower" and 1 Maccabees 3:46 ("opposite Jerusalem"). Lacks the Iron I and Babylonian-period remains found at Tell en-Nasbeh.' }
  ],
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom', 'exile-return'],
  refs: ['Judges 20:1-3', '1 Samuel 7:5-12', '1 Samuel 10:17-25', '1 Kings 15:22', '2 Kings 25:23-25', 'Jeremiah 40:6-41:3', 'Nehemiah 3:7'],
  verse: { ref: '1 Samuel 7:5', text: 'Then Samuel said, "Gather all Israel at Mizpah, and I will pray to the LORD for you."' },
  summary: 'Samuel\'s assembly place where Israel repented and defeated the Philistines and where Saul was chosen by lot; later the seat of Gedaliah, the Babylonian-appointed governor, murdered here.',
  detail: 'Tell en-Nasbeh, 12 km north of Jerusalem on the watershed road, was excavated by Badè (1926-35) and revealed a strongly fortified Iron Age town with a massive wall and inset-offset gate, plausibly Asa\'s fortification (1 Kings 15:22), and, unusually, undisturbed occupation through the Babylonian period, exactly as Jeremiah 40-41 requires for the provincial capital after 586 BC. Seal impressions reading msh/mtsh may abbreviate Mizpah. The identification is generally accepted.',
  modern: 'Tell en-Nasbeh, West Bank',
  identification: 'Generally accepted at Tell en-Nasbeh.'
},
{
  id: 'gibeah', name: 'Gibeah', alt: ['Gibeah of Saul', 'Gibeah of Benjamin', 'Tell el-Ful'], original: 'גִּבְעָה Giv\'ah',
  lat: 31.8233, lon: 35.2317, elev: 840, type: 'town', rank: 3, confidence: 'probable',
  alternatives: [
    { name: 'Jaba\'', lat: 31.8667, lon: 35.2833, note: 'Miller and Arnold argue Gibeah and Geba are the same place at Jaba\', north-east of Jerusalem, and that Tell el-Ful is unrelated. A minority view with textual arguments.' }
  ],
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Judges 19-20', '1 Samuel 10:26', '1 Samuel 11:4', '1 Samuel 13:2', '1 Samuel 22:6', 'Isaiah 10:29', 'Hosea 10:9'],
  verse: { ref: '1 Samuel 10:26', text: 'Saul also went to his home at Gibeah, and with him went men of valor whose hearts God had touched.' },
  summary: 'Saul\'s home town and capital, and the scene of the outrage in Judges 19 that led to civil war against Benjamin.',
  detail: 'Tell el-Ful, on the northern edge of Jerusalem, was excavated by Albright (1922-23, 1933) and Lapp (1964). It produced a small Iron I fortress with a corner tower, which Albright identified as Saul\'s citadel, though Lapp dated it a little later. The site\'s position 5 km north of Jerusalem on the main road fits Isaiah 10:29 and Josephus. Hosea uses "the days of Gibeah" as a byword for Israel\'s sin.',
  modern: 'Tell el-Ful, Jerusalem',
  identification: 'Generally accepted at Tell el-Ful; contested by some.'
},
{
  id: 'nob', name: 'Nob', original: 'נֹב Nov',
  lat: 31.7975, lon: 35.2517, elev: 800, type: 'town', rank: 4, confidence: 'disputed',
  alternatives: [
    { name: 'Mount Scopus (Ras el-Mesharif)', lat: 31.7950, lon: 35.2400, note: 'The ridge north of the Mount of Olives from which Isaiah 10:32 has the Assyrian shake his fist at Jerusalem; suits the text but has no confirmed remains.' }
  ],
  eras: ['united-kingdom', 'divided-kingdom'],
  refs: ['1 Samuel 21:1-9', '1 Samuel 22:9-19', 'Isaiah 10:32', 'Nehemiah 11:32'],
  summary: 'The priestly town where David received the holy bread and Goliath\'s sword from Ahimelech, and where Saul had the priests slaughtered.',
  detail: 'Nob housed the tabernacle, or at least the priesthood and ephod, after Shiloh\'s fall. It lay within sight of Jerusalem on the north (Isaiah 10:32) and near Anathoth (Nehemiah 11:32). El-Isawiyeh, on the eastern flank of Mount Scopus, and the summit of Scopus itself are the usual candidates; neither is confirmed. Jesus appealed to David\'s eating the bread of the Presence here in defence of his disciples (Mark 2:25-26).',
  modern: 'El-Isawiyeh (?), Jerusalem',
  identification: 'Disputed.'
},
{
  id: 'anathoth', name: 'Anathoth', alt: ['Anata'], original: 'עֲנָתוֹת Anatot',
  lat: 31.8106, lon: 35.2597, elev: 680, type: 'town', rank: 3, confidence: 'probable',
  eras: ['united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 21:18', '1 Kings 2:26', 'Jeremiah 1:1', 'Jeremiah 11:21-23', 'Jeremiah 32:6-15'],
  verse: { ref: 'Jeremiah 1:1', text: 'The words of Jeremiah, the son of Hilkiah, one of the priests who were in Anathoth in the land of Benjamin,' },
  summary: 'Jeremiah\'s home town, a priestly village of Benjamin to which Abiathar was banished, and where the prophet bought a field as a sign of restoration during the siege.',
  detail: 'The village of Anata, 5 km north-east of Jerusalem, preserves the name; the Iron Age site is usually placed at Ras el-Kharrubeh just to its south-west, where surveys have found Iron II pottery. Jeremiah\'s kinsmen there plotted against him (Jeremiah 11:21), yet in prison he bought his cousin\'s field at Anathoth as a pledge that "houses and fields and vineyards shall again be bought in this land" (32:15).',
  christ: 'Jeremiah paid for a field he could not enjoy, trusting God\'s promise of return; he also foretold the new covenant (31:31-34) that Jesus sealed with his blood.',
  modern: 'Anata, West Bank',
  identification: 'Generally accepted.'
},
{
  id: 'kiriath-jearim', name: 'Kiriath-jearim', alt: ['Baalah', 'Kiriath-baal', 'Deir el-Azar'], original: 'קִרְיַת יְעָרִים Qiryat Ye\'arim ("city of forests")',
  lat: 31.8113, lon: 35.1049, elev: 730, type: 'town', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Joshua 9:17', 'Joshua 15:9', 'Judges 18:12', '1 Samuel 6:21-7:2', '2 Samuel 6:1-4', '1 Chronicles 13:5-6'],
  verse: { ref: '1 Samuel 7:2', text: 'From the day that the ark was lodged at Kiriath-jearim, a long time passed, some twenty years, and all the house of Israel lamented after the LORD.' },
  summary: 'The Gibeonite town on the Judah-Benjamin border where the ark rested for twenty years in the house of Abinadab until David brought it up to Jerusalem.',
  detail: 'The hill of Deir el-Azar above Abu Ghosh, 12 km west of Jerusalem, has long been identified as Kiriath-jearim, and a large Iron Age platform on the summit, excavated by Finkelstein and Römer (2017-19), suggests a significant eighth-century sanctuary or administrative site. A church of Our Lady of the Ark of the Covenant crowns the hill. The ark was brought here from Beth-shemesh after its return from the Philistines. Abu Ghosh below is also one of the candidates for Emmaus.',
  modern: 'Deir el-Azar, Abu Ghosh, Israel',
  identification: 'Certain.'
},
{
  id: 'philistia', name: 'Philistia', alt: ['Land of the Philistines', 'Pelesheth'], original: 'פְּלֶשֶׁת Peleshet',
  lat: 31.6000, lon: 34.6200, type: 'region', rank: 2, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Genesis 21:32', 'Judges 13-16', '1 Samuel 4-6', '1 Samuel 17', '2 Samuel 5:17-25', 'Amos 1:6-8', 'Zephaniah 2:4-7'],
  verse: { ref: 'Psalm 60:8', text: 'Moab is my washbasin; upon Edom I cast my shoe; over Philistia I shout in triumph.' },
  summary: 'The southern coastal plain held by the five Philistine cities (Gaza, Ashkelon, Ashdod, Gath, Ekron), Israel\'s chief enemy from Samson to David. The name Palestine derives from it.',
  detail: 'The Philistines were one of the Sea Peoples who settled the coast about 1175 BC after being repulsed from Egypt by Ramesses III; their distinctive Aegean-style pottery, hearths and pig bones mark their cities, and recent DNA from Ashkelon confirms a southern European origin. Their monopoly of iron and their chariots are noted in Samuel. They captured the ark, killed Saul, and were finally contained by David; Assyria and then Babylon extinguished their independence. The "Philistines" of Genesis are either an earlier Aegean group or a modernising label.',
  modern: 'Southern coastal plain, Israel and Gaza',
  identification: 'Certain.'
},
{
  id: 'ekron', name: 'Ekron', alt: ['Tel Miqne'], original: 'עֶקְרוֹן Eqron',
  lat: 31.7789, lon: 34.8511, elev: 70, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 13:3', '1 Samuel 5:10', '1 Samuel 6:16-17', '1 Samuel 17:52', '2 Kings 1:2-3', 'Amos 1:8'],
  verse: { ref: '1 Samuel 5:10', text: 'So they sent the ark of God to Ekron. But as soon as the ark of God came to Ekron, the people of Ekron cried out, "They have brought around to us the ark of the God of Israel to kill us and our people."' },
  summary: 'The northernmost Philistine city, to which the plague-bearing ark was passed, and home of Baal-zebub whom Ahaziah consulted.',
  detail: 'Tel Miqne, excavated by Dothan and Gitin (1981-96), was confirmed as Ekron by a royal dedicatory inscription of 1996 naming "Achish son of Padi, ruler of Ekron", both kings known from Assyrian records. The site revealed a large Philistine city of the twelfth to eleventh centuries with Aegean-style pottery, then a seventh-century boom as the largest olive-oil production centre yet found in the ancient Near East, with over a hundred presses. Nebuchadnezzar destroyed it in 603 BC.',
  modern: 'Tel Miqne, Israel',
  identification: 'Certain; confirmed by inscription.'
},
{
  id: 'ashdod', name: 'Ashdod', alt: ['Azotus'], original: 'אַשְׁדּוֹד Ashdod; Ἄζωτος',
  lat: 31.7550, lon: 34.6550, elev: 40, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom', 'church'],
  refs: ['Joshua 11:22', '1 Samuel 5:1-7', '2 Chronicles 26:6', 'Isaiah 20:1', 'Nehemiah 13:23-24', 'Acts 8:40'],
  verse: { ref: '1 Samuel 5:1', text: 'When the Philistines captured the ark of God, they brought it from Ebenezer to Ashdod.' },
  summary: 'Philistine city where the captured ark toppled the image of Dagon; besieged by Sargon II; and, as Azotus, on Philip the evangelist\'s route north from Gaza.',
  detail: 'Tel Ashdod, 5 km inland from the modern port, was excavated by Dothan (1962-72). It shows the Philistine arrival about 1175 BC, a fortified city with a six-chambered gate, and Assyrian destruction with fragments of a victory stele of Sargon II, who records the revolt of Ashdod in 711 BC that Isaiah 20:1 mentions. Uzziah breached its walls; Nehemiah complained that Jerusalem children spoke "the language of Ashdod". In the Hellenistic and Roman periods it was Azotus.',
  modern: 'Tel Ashdod, Israel',
  identification: 'Certain.'
},
{
  id: 'ashkelon', name: 'Ashkelon', alt: ['Ascalon'], original: 'אַשְׁקְלוֹן Ashqelon',
  lat: 31.6633, lon: 34.5461, elev: 20, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Judges 1:18', 'Judges 14:19', '1 Samuel 6:17', '2 Samuel 1:20', 'Jeremiah 47:5-7', 'Amos 1:8', 'Zephaniah 2:4'],
  verse: { ref: '2 Samuel 1:20', text: 'Tell it not in Gath, publish it not in the streets of Ashkelon, lest the daughters of the Philistines rejoice, lest the daughters of the uncircumcised exult.' },
  summary: 'The only Philistine city on the sea, a great port from the Canaanite period to the Crusades, where Samson slew thirty men for their garments.',
  detail: 'The Leon Levy Expedition under Stager and Master (1985-2016) excavated the largest of the Philistine cities, 60 hectares within a Middle Bronze rampart with the oldest arched gateway known. Finds include a Canaanite silver calf in a shrine, the Philistine cemetery whose DNA study was published in 2019, and the destruction of 604 BC by Nebuchadnezzar, foretold by Jeremiah, with skeletons in the rubble of a marketplace. Ashkelon appears in the Merneptah Stele beside Israel.',
  modern: 'Ashkelon National Park, Israel',
  identification: 'Certain.'
},
{
  id: 'gaza', name: 'Gaza', original: 'עַזָּה Azzah; Γάζα',
  lat: 31.5017, lon: 34.4668, elev: 30, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'divided-kingdom', 'church'],
  refs: ['Genesis 10:19', 'Joshua 10:41', 'Judges 16:1-3', 'Judges 16:21-31', 'Amos 1:6-7', 'Acts 8:26'],
  verse: { ref: 'Judges 16:21', text: 'And the Philistines seized him and gouged out his eyes and brought him down to Gaza and bound him with bronze shackles. And he ground at the mill in the prison.' },
  summary: 'The southernmost Philistine city, gateway to Egypt on the coast road, where blind Samson pulled down the temple of Dagon, and near which Philip baptised the Ethiopian official.',
  detail: 'Gaza has been continuously inhabited since the Bronze Age, so the ancient city lies largely inaccessible beneath the modern one; excavations at nearby Tell el-Ajjul and in the city\'s Byzantine church at Jabaliya have been the main archaeological windows. It was an Egyptian provincial capital in the New Kingdom, then Philistine, then a key Assyrian and Persian station on the route to Egypt. Alexander besieged it for two months. In Acts 8 the desert road from Jerusalem toward Gaza is where Philip met the Ethiopian reading Isaiah 53.',
  christ: 'On the Gaza road a foreigner reading of the Servant "led like a lamb to the slaughter" heard the good news about Jesus and went down into the water: the gospel already crossing to the ends of the earth (Acts 8:26-39).',
  modern: 'Gaza City',
  identification: 'Certain.'
},
{
  id: 'gath', name: 'Gath', alt: ['Tell es-Safi', 'Gath of the Philistines'], original: 'גַּת Gat ("winepress")',
  lat: 31.7000, lon: 34.8472, elev: 200, type: 'city', rank: 3, confidence: 'probable',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 11:22', '1 Samuel 5:8', '1 Samuel 17:4', '1 Samuel 21:10-15', '1 Samuel 27:2-4', '2 Kings 12:17', 'Amos 6:2'],
  verse: { ref: '1 Samuel 17:4', text: 'And there came out from the camp of the Philistines a champion named Goliath of Gath, whose height was six cubits and a span.' },
  summary: 'Goliath\'s home and the city of Achish, where David feigned madness and later served as a mercenary; the largest Philistine city until Hazael of Damascus destroyed it about 830 BC.',
  detail: 'Tell es-Safi, at the mouth of the Elah valley where David fought Goliath, has been excavated by Maeir since 1996. It proved to be the largest Iron Age city in the region, with a massive ninth-century siege trench 2.5 km long attributed to Hazael (2 Kings 12:17), Philistine temples, and an ostracon bearing two names etymologically akin to Goliath. The absence of Gath from Amos 1:6-8 fits its destruction before his day. The identification, long debated against Tell en-Nagila and others, is now widely accepted.',
  christ: 'David\'s single-handed victory over the champion of Gath, on behalf of a trembling people, has always been read as a picture of Christ defeating the enemy his people could not face.',
  modern: 'Tell es-Safi, Israel',
  identification: 'Generally accepted.'
},
{
  id: 'ziklag', name: 'Ziklag', original: 'צִקְלַג Tsiqlag',
  lat: 31.3889, lon: 34.6833, elev: 170, type: 'town', rank: 4, confidence: 'disputed',
  alternatives: [
    { name: 'Tel Halif (Tell el-Khuweilifeh)', lat: 31.3833, lon: 34.8667, note: 'A Judahite town on the Negev edge with Iron I remains; proposed by Borowski.' },
    { name: 'Khirbet a-Ra\'i', lat: 31.5969, lon: 34.8206, note: 'Garfinkel and Ganor (2019) found a Philistine settlement of the twelfth to eleventh centuries followed by an early tenth-century rural Judahite phase, matching the sequence in 1 Samuel 27 and 30. Its position in the Shephelah near Lachish is further north than usually assumed for Ziklag.' }
  ],
  eras: ['united-kingdom'],
  refs: ['Joshua 15:31', 'Joshua 19:5', '1 Samuel 27:5-7', '1 Samuel 30:1-20', '2 Samuel 1:1', 'Nehemiah 11:28'],
  verse: { ref: '1 Samuel 27:6', text: 'So that day Achish gave him Ziklag. Therefore Ziklag has belonged to the kings of Judah to this day.' },
  summary: 'The town Achish of Gath gave David as his base for sixteen months, burned by the Amalekites while he was away, and where he heard of Saul\'s death.',
  detail: 'Ziklag is listed among the towns of Simeon and Judah but was in Philistine hands when Achish granted it to David. It lay far enough from Gath for David to raid the Negev unseen. Tel Sera (Tell esh-Sharia) has long been the conventional identification, but Tel Halif and, since 2019, Khirbet a-Ra\'i have strong advocates. None is confirmed.',
  modern: 'Tel Sera, Israel (conventional)',
  identification: 'Disputed among three sites.'
},
{
  id: 'en-gedi', name: 'En-gedi', alt: ['Engedi', 'Hazazon-tamar'], original: 'עֵין גֶּדִי En Gedi ("spring of the kid")',
  lat: 31.4614, lon: 35.3922, elev: -300, type: 'town', rank: 3, confidence: 'certain',
  eras: ['united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 15:62', '1 Samuel 23:29', '1 Samuel 24:1-22', '2 Chronicles 20:2', 'Song of Solomon 1:14', 'Ezekiel 47:10'],
  verse: { ref: '1 Samuel 24:1', text: 'When Saul returned from following the Philistines, he was told, "Behold, David is in the wilderness of Engedi."' },
  summary: 'The oasis of springs and waterfalls on the western shore of the Dead Sea where David hid in the caves and spared Saul\'s life.',
  detail: 'En-gedi\'s perennial springs make a lush oasis of palms and balsam beneath the desert cliffs, famous in antiquity for its perfume industry. Excavations at Tel Goren revealed a Judahite town of the seventh century BC with perfume workshops, a Chalcolithic temple above the spring, and a Byzantine synagogue with a mosaic inscription cursing anyone who reveals "the secret of the town", probably the balsam recipe. The caves in the cliffs above are the setting of 1 Samuel 24. The Song of Solomon compares the beloved to "a cluster of henna blossoms in the vineyards of Engedi".',
  modern: 'Ein Gedi, Israel',
  identification: 'Certain.'
},
{
  id: 'adullam', name: 'Adullam', original: 'עֲדֻלָּם Adullam',
  lat: 31.6472, lon: 34.9917, elev: 380, type: 'town', rank: 3, confidence: 'probable',
  eras: ['patriarchs', 'conquest-judges', 'united-kingdom'],
  refs: ['Genesis 38:1', 'Joshua 12:15', 'Joshua 15:35', '1 Samuel 22:1-2', '2 Samuel 23:13', 'Micah 1:15'],
  verse: { ref: '1 Samuel 22:1', text: 'David departed from there and escaped to the cave of Adullam. And when his brothers and all his father\'s house heard it, they went down there to him.' },
  summary: 'The Canaanite royal city in the Shephelah near whose cave David gathered his band of outcasts, later a fortress of Rehoboam.',
  detail: 'Khirbet esh-Sheikh Madhkur, above the Elah valley between Socoh and Keilah, preserves the name in nearby Id el-Ma and has Iron Age remains and many caves, though it has not been extensively excavated. Judah\'s friend Hirah was an Adullamite (Genesis 38). The "stronghold" of 1 Samuel 22:4 and 2 Samuel 23:14 is often taken as Adullam too.',
  christ: 'To the cave of Adullam came the distressed, the debtors and the discontented, and David made them his mighty men; so the rejected king still gathers those who have nowhere else to go (Matthew 11:28).',
  modern: 'Khirbet esh-Sheikh Madhkur, Israel',
  identification: 'Generally accepted.'
},
{
  id: 'keilah', name: 'Keilah', original: 'קְעִילָה Qe\'ilah',
  lat: 31.6089, lon: 35.0075, elev: 450, type: 'town', rank: 4, confidence: 'probable',
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Joshua 15:44', '1 Samuel 23:1-13', 'Nehemiah 3:17-18'],
  summary: 'The walled Shephelah town David rescued from Philistine raiders, whose citizens would nonetheless have handed him over to Saul.',
  detail: 'Khirbet Qila, about 13 km north-west of Hebron on the edge of the hills, preserves the name and has Iron Age sherds; it has not been excavated. David enquired of the LORD twice before relieving the town, and consulted the ephod again on hearing Saul was coming, a passage that shows how the ephod was used.',
  modern: 'Khirbet Qila, West Bank',
  identification: 'Generally accepted on the name.'
},
{
  id: 'ziph', name: 'Ziph', original: 'זִיף Zif',
  lat: 31.4808, lon: 35.1289, elev: 880, type: 'town', rank: 4, confidence: 'probable',
  eras: ['united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 15:55', '1 Samuel 23:14-24', '1 Samuel 26:1-2', '2 Chronicles 11:8'],
  summary: 'A hill town south-east of Hebron whose people twice betrayed David\'s hiding places to Saul; fortified by Rehoboam.',
  detail: 'Tell Zif, 7 km south-east of Hebron, preserves the name. The "wilderness of Ziph" is the barren slope falling east toward the Dead Sea where David hid in the wood of Horesh and Jonathan came to him for the last time. Royal lmlk jar handles from the eighth century stamped "Ziph" show it was one of four Judahite administrative centres under Hezekiah.',
  modern: 'Tell Zif, West Bank',
  identification: 'Generally accepted.'
},
{
  id: 'maon', name: 'Maon', original: 'מָעוֹן Ma\'on',
  lat: 31.4239, lon: 35.1231, elev: 850, type: 'town', rank: 4, confidence: 'probable',
  eras: ['united-kingdom'],
  refs: ['Joshua 15:55', '1 Samuel 23:24-28', '1 Samuel 25:2'],
  summary: 'The town of Nabal, in whose wilderness David narrowly escaped Saul and later met Abigail.',
  detail: 'Khirbet Ma\'in, 13 km south of Hebron, preserves the name and has Iron Age and later remains including a synagogue. The wilderness of Maon is the steppe land east of the town, grazing country where Nabal\'s three thousand sheep were sheared at nearby Carmel. The "Rock of Escape" (1 Samuel 23:28) is somewhere in these hills.',
  modern: 'Khirbet Ma\'in, West Bank',
  identification: 'Generally accepted.'
},
{
  id: 'carmel-town', name: 'Carmel (Judah)', alt: ['Carmel of Judah'], original: 'כַּרְמֶל Karmel',
  lat: 31.4400, lon: 35.1300, elev: 830, type: 'town', rank: 4, confidence: 'probable',
  eras: ['united-kingdom'],
  refs: ['Joshua 15:55', '1 Samuel 15:12', '1 Samuel 25:2-42', '1 Samuel 27:3'],
  verse: { ref: '1 Samuel 25:2', text: 'And there was a man in Maon whose business was in Carmel. The man was very rich; he had three thousand sheep and a thousand goats. He was shearing his sheep in Carmel.' },
  summary: 'The Judean hill town where Nabal sheared his sheep and Saul set up a monument after defeating Amalek; not the northern Mount Carmel.',
  detail: 'Khirbet el-Karmil, a kilometre or so north of Maon, has a large ancient reservoir, Iron Age remains and a Byzantine church; the name survives. Abigail, Nabal\'s widow, became David\'s wife. Hezron\'s wife in David\'s guard, Hezrai the Carmelite (2 Samuel 23:35), came from here.',
  modern: 'Khirbet el-Karmil, West Bank',
  identification: 'Generally accepted.'
},
{
  id: 'beth-shemesh', name: 'Beth-shemesh', alt: ['Ir-shemesh', 'Tel Beth Shemesh'], original: 'בֵּית שֶׁמֶשׁ Bet Shemesh ("house of the sun")',
  lat: 31.7522, lon: 34.9769, elev: 250, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'divided-kingdom'],
  refs: ['Joshua 15:10', 'Joshua 21:16', 'Judges 1:33', '1 Samuel 6:9-21', '2 Kings 14:11-13', '2 Chronicles 28:18'],
  verse: { ref: '1 Samuel 6:13', text: 'Now the people of Beth-shemesh were reaping their wheat harvest in the valley. And when they lifted up their eyes and saw the ark, they rejoiced to see it.' },
  summary: 'The Levitical town in the Sorek valley, opposite Zorah of Samson, to which the ark returned from Philistia on an unguided cart, and where Jehoash of Israel captured Amaziah of Judah.',
  detail: 'Tel Beth Shemesh commands the Sorek valley where it opens toward Philistine Timnah and Ekron. Excavated by Mackenzie, Grant, and since 1990 by Bunimovitz and Lederman, it shows an Iron I border town notable for the absence of pig bones, in contrast to Philistine sites downstream, then a fortified Judahite city with a great reservoir, destroyed by Sennacherib in 701 BC. A large stone found in the Iron I level has been compared with the "great stone" on which the ark was set (1 Samuel 6:14-15), a suggestive rather than secure link.',
  modern: 'Tel Beth Shemesh, Israel',
  identification: 'Certain.'
},
{
  id: 'jabesh-gilead', name: 'Jabesh-gilead', original: 'יָבֵשׁ גִּלְעָד Yavesh Gil\'ad',
  lat: 32.4092, lon: 35.7231, elev: 200, type: 'town', rank: 3, confidence: 'disputed',
  alternatives: [
    { name: 'Tell Abu Kharaz', lat: 32.3922, lon: 35.6197, note: 'Glueck\'s identification in the Jordan valley itself, excavated by Fischer with Iron Age occupation; Wadi Yabis, which preserves the name, flows past both candidates.' }
  ],
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Judges 21:8-14', '1 Samuel 11:1-11', '1 Samuel 31:11-13', '2 Samuel 2:4-7', '2 Samuel 21:12'],
  summary: 'The Gileadite town punished for absence from the war against Benjamin, rescued from the Ammonites by Saul in his first act as king, and whose men recovered Saul\'s body from Beth-shan.',
  detail: 'Wadi Yabis preserves the name and runs from the Gilead hills to the Jordan opposite Beth-shan, which fits the night march of 1 Samuel 31. Tell el-Maqlub, on the wadi in the hills, and Tell Abu Kharaz, at its mouth, are the two candidates. The loyalty of Jabesh to Saul\'s house is one of the tender threads of the narrative; David\'s first message as king of Judah was to thank them.',
  modern: 'Tell el-Maqlub (?), Irbid Governorate, Jordan',
  identification: 'Disputed between two sites on Wadi Yabis.'
},
{
  id: 'beth-shan', name: 'Beth-shan', alt: ['Beth-shean', 'Scythopolis', 'Tel Beth Shean'], original: 'בֵּית שְׁאָן Bet She\'an',
  lat: 32.5033, lon: 35.5041, elev: -120, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'christ'],
  refs: ['Joshua 17:11-16', 'Judges 1:27', '1 Samuel 31:10-13', '2 Samuel 21:12', '1 Kings 4:12'],
  verse: { ref: '1 Samuel 31:10', text: 'They put his armor in the temple of Ashtaroth, and they fastened his body to the wall of Beth-shan.' },
  summary: 'The Egyptian garrison city guarding the junction of the Jezreel and Jordan valleys, on whose wall the Philistines hung the bodies of Saul and his sons. Later Scythopolis, chief city of the Decapolis.',
  detail: 'Tel Beth Shean, one of the tallest mounds in Israel, was excavated by the University of Pennsylvania (1921-33) and by Mazar (1989-96). It was an Egyptian stronghold for most of the Late Bronze Age, with stelae of Seti I and Ramesses II, a statue of Ramesses III, and Egyptian-style temples and governors\' residences; Israel could not take it (Judges 1:27). The eleventh-century temples found there suit the "temple of Ashtaroth" of 1 Samuel 31. Below the tell lies the magnificent Roman and Byzantine city of Scythopolis, the only Decapolis city west of the Jordan, with its theatre, colonnaded streets and baths.',
  modern: 'Beit She\'an, Israel',
  identification: 'Certain.'
},
{
  id: 'endor', name: 'Endor', alt: ['En-dor'], original: 'עֵין־דֹּר En Dor',
  lat: 32.6350, lon: 35.3850, elev: 200, type: 'town', rank: 4, confidence: 'probable',
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Joshua 17:11', '1 Samuel 28:7-25', 'Psalm 83:10'],
  verse: { ref: '1 Samuel 28:7', text: 'Then Saul said to his servants, "Seek out for me a woman who is a medium, that I may go to her and inquire of her." And his servants said to him, "Behold, there is a medium at En-dor."' },
  summary: 'The village on the northern slope of the Hill of Moreh where Saul consulted a medium the night before he died on Gilboa.',
  detail: 'Khirbet Safsafa, near the Arab village of Indur which preserved the name until 1948, has Iron Age pottery and lies on the north side of the Hill of Moreh, which Saul would have had to skirt behind Philistine lines from Gilboa. Psalm 83:10 recalls a victory over Midian "at En-dor", near Gideon\'s battlefield. The site is accepted on the name and position; no excavation has confirmed it.',
  modern: 'Khirbet Safsafa, Israel',
  identification: 'Generally accepted.'
},
{
  id: 'shunem', name: 'Shunem', alt: ['Sulam'], original: 'שׁוּנֵם Shunem',
  lat: 32.6058, lon: 35.3339, elev: 130, type: 'town', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 19:18', '1 Samuel 28:4', '1 Kings 1:3', '2 Kings 4:8-37', 'Song of Solomon 6:13'],
  verse: { ref: '2 Kings 4:8', text: 'One day Elisha went on to Shunem, where a wealthy woman lived, who urged him to eat some food. So whenever he passed that way, he would turn in there to eat food.' },
  summary: 'The village at the foot of the Hill of Moreh where the Philistines camped before Gilboa, home of Abishag and of the woman whose son Elisha raised.',
  detail: 'Sulam, on the southern slope of the Hill of Moreh facing Jezreel across the valley, preserves the name; it appears in Thutmose III\'s lists and the Amarna letters. The Philistines camped here while Saul held Gilboa 6 km to the south. Elisha\'s "Shunammite woman" built him an upper room and received her son back from death. The Shulammite of the Song may be the same word.',
  christ: 'Elisha raised the Shunammite\'s son on the very hillside where, at Nain on its other slope, Jesus would raise a widow\'s son and the crowd would say, "A great prophet has arisen among us!" (Luke 7:16).',
  modern: 'Sulam, Israel',
  identification: 'Certain.'
},
{
  id: 'jezreel', name: 'Jezreel', alt: ['Tel Jezreel', 'Esdraelon'], original: 'יִזְרְעֶאל Yizre\'el ("God sows")',
  lat: 32.5575, lon: 35.3286, elev: 100, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 19:18', '1 Samuel 29:1', '1 Kings 18:45-46', '1 Kings 21:1-24', '2 Kings 9:14-37', 'Hosea 1:4-5'],
  verse: { ref: '1 Kings 21:1', text: 'Now Naboth the Jezreelite had a vineyard in Jezreel, beside the palace of Ahab king of Samaria.' },
  summary: 'The winter capital of Ahab and Jezebel on a spur above the valley that bears its name; scene of Naboth\'s murder, Jezebel\'s death and Jehu\'s bloody coup.',
  detail: 'Tel Jezreel overlooks the eastern end of the great valley, with Gilboa behind and Moreh opposite. Ussishkin and Woodhead (1990-96) uncovered a large ninth-century royal enclosure with a casemate wall, corner towers and a rock-cut moat, a military compound of exactly the Omride period, and later excavation has found a large winery that some connect with Naboth\'s vineyard. The compound was abandoned soon after Jehu\'s coup. The Valley of Jezreel, Greek Esdraelon, is the broad plain between Galilee and Samaria that the trunk roads cross.',
  christ: 'Hosea named his son Jezreel to announce judgement on Jehu\'s house, then turned the name to hope: "God sows", and the sown people will be called sons of the living God (Hosea 1:10-11; 2:22-23), a promise Paul applies to the Gentiles in Christ (Romans 9:25-26).',
  modern: 'Tel Jezreel, Israel',
  identification: 'Certain.'
},
{
  id: 'megiddo', name: 'Megiddo', alt: ['Armageddon', 'Tel Megiddo'], original: 'מְגִדּוֹ Megiddo; Ἁρμαγεδών',
  lat: 32.5847, lon: 35.1836, elev: 160, type: 'city', rank: 2, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom', 'church'],
  refs: ['Joshua 12:21', 'Judges 1:27', 'Judges 5:19', '1 Kings 9:15', '2 Kings 9:27', '2 Kings 23:29-30', 'Revelation 16:16'],
  verse: { ref: 'Revelation 16:16', text: 'And they assembled them at the place that in Hebrew is called Armageddon.' },
  summary: 'The fortress guarding the pass where the coastal highway enters the Jezreel valley, fought over from Thutmose III to Allenby; one of Solomon\'s chariot cities, where Josiah died, and the Armageddon of Revelation.',
  detail: 'Tel Megiddo has some twenty superimposed cities from the fourth millennium to the Persian period. Excavated by Schumacher, the Oriental Institute (1925-39), Yadin and since 1994 by Finkelstein and Ussishkin, it has yielded a great Early Bronze temple complex, Canaanite palaces with ivories, a six-chambered gate and palaces conventionally attributed to Solomon (1 Kings 9:15), pillared buildings once called Solomon\'s stables but now thought to be later, and a deep water system. The dating of the tenth- and ninth-century levels is the crux of the "low chronology" debate about the united monarchy.\n\nThutmose III fought his first great battle here (1457 BC); Deborah\'s victory was "by the waters of Megiddo"; Ahaziah fled here to die; Josiah was killed opposing Neco (609 BC). Har Magedon, "mountain of Megiddo", gives Revelation its name for the last battle, although no mountain stands on the plain and the name is symbolic of the place where kings gather and are defeated.',
  christ: 'Megiddo is where the nations\' kings have always met their doom; Revelation borrows its name for the final gathering against the Lamb, whose victory is already won (Revelation 17:14).',
  modern: 'Tel Megiddo, Israel',
  identification: 'Certain.'
},
{
  id: 'taanach', name: 'Taanach', alt: ['Tell Ti\'innik'], original: 'תַּעְנַךְ Ta\'nakh',
  lat: 32.5203, lon: 35.2222, elev: 180, type: 'city', rank: 4, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Joshua 12:21', 'Joshua 17:11', 'Judges 1:27', 'Judges 5:19', '1 Kings 4:12'],
  verse: { ref: 'Judges 5:19', text: 'The kings came, they fought; then fought the kings of Canaan, at Taanach, by the waters of Megiddo; they got no spoils of silver.' },
  summary: 'A Canaanite royal city 8 km south-east of Megiddo, near the battlefield of Deborah and Barak, that Manasseh failed to take.',
  detail: 'Sellin (1902-04) and Lapp (1963-68) excavated Tell Ti\'innik, finding Middle and Late Bronze fortifications, an archive of Akkadian tablets from the fifteenth century, and a tenth-century cult stand with lions, sphinxes and possibly a representation of a deity, one of the most discussed objects of Israelite-period religion. The name is preserved in the village.',
  modern: 'Tell Ti\'innik, West Bank',
  identification: 'Certain.'
},
{
  id: 'dor', name: 'Dor', alt: ['Tel Dor', 'Naphath-dor'], original: 'דּוֹר Dor',
  lat: 32.6175, lon: 34.9167, elev: 15, type: 'city', rank: 4, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 11:2', 'Joshua 12:23', 'Judges 1:27', '1 Kings 4:11'],
  summary: 'The Canaanite and Sea-Peoples harbour on the Carmel coast that Israel could not take, later one of Solomon\'s districts and an Assyrian provincial capital.',
  detail: 'Tel Dor, excavated by Stern (1980-2000) and since by Gilboa and Sharon, was settled by the Sikils (Tjeker), a Sea People related to the Philistines, then became Phoenician and was a major harbour with purple-dye works. The tale of Wenamun places an Egyptian envoy here about 1075 BC. Solomon\'s son-in-law governed the district. It is one of the few natural harbours south of Carmel.',
  modern: 'Tel Dor, near Nahsholim, Israel',
  identification: 'Certain.'
},
{
  id: 'joppa', name: 'Joppa', alt: ['Jaffa', 'Yafo'], original: 'יָפוֹ Yafo; Ἰόππη',
  lat: 32.0544, lon: 34.7517, elev: 25, type: 'city', rank: 3, confidence: 'certain',
  eras: ['united-kingdom', 'divided-kingdom', 'church'],
  refs: ['Joshua 19:46', '2 Chronicles 2:16', 'Jonah 1:3', 'Ezra 3:7', 'Acts 9:36-43', 'Acts 10:5-23'],
  verse: { ref: 'Acts 10:5', text: 'And now send men to Joppa and bring one Simon who is called Peter.' },
  summary: 'The ancient port of Judah, where cedar for the temple was landed, Jonah boarded ship for Tarshish, Peter raised Tabitha and received Cornelius\' messengers.',
  detail: 'Jaffa\'s rocky promontory offered the only shelter for ships on the coast between Egypt and Carmel before Herod built Caesarea. Excavations on the tell have uncovered a Late Bronze Egyptian fortress gate inscribed with the titles of Ramesses II, Philistine and Phoenician levels, and Hellenistic remains. The Amarna letters mention its granaries. Tradition points out "the house of Simon the tanner" near the harbour, a late and unverifiable identification. Here Peter was staying when the vision of the unclean animals prepared him to go to the Gentile Cornelius at Caesarea.',
  christ: 'From Joppa Jonah fled from preaching to Gentiles; from Joppa Peter went, reluctantly and then gladly, to preach Christ to a Gentile household, and "the Holy Spirit fell on all who heard the word" (Acts 10:44).',
  modern: 'Jaffa, Tel Aviv, Israel',
  identification: 'Certain.'
},
{
  id: 'aphek', name: 'Aphek', alt: ['Antipatris', 'Tel Afek', 'Ras el-Ain'], original: 'אֲפֵק Afeq; Ἀντιπατρίς',
  lat: 32.1050, lon: 34.9303, elev: 30, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'church'],
  refs: ['Joshua 12:18', '1 Samuel 4:1', '1 Samuel 29:1', 'Acts 23:31'],
  verse: { ref: '1 Samuel 4:1', text: 'And the word of Samuel came to all Israel. Now Israel went out to battle against the Philistines. They encamped at Ebenezer, and the Philistines encamped at Aphek.' },
  summary: 'The city at the springs of the Yarkon where the Philistines mustered before capturing the ark; rebuilt by Herod as Antipatris, where Paul\'s escort halted on the night ride to Caesarea.',
  detail: 'Tel Afek stands at the sources of the Yarkon, a natural choke-point on the coastal highway where travellers had to pass between river and hills. Kochavi\'s excavations (1972-85) uncovered a Late Bronze Egyptian governor\'s residence with cuneiform, Egyptian and Canaanite texts, then a Philistine town, then the Herodian city of Antipatris with a cardo and forum. The Roman road from Jerusalem passed through it, matching Acts 23:31. Ebenezer, Israel\'s camp, was probably at Izbet Sartah 3 km east, an Iron I village where an early alphabet ostracon was found. Not to be confused with Aphek in Asher or Aphek east of Galilee (1 Kings 20:26).',
  modern: 'Tel Afek, Yarkon National Park, Israel',
  identification: 'Certain.'
},
{
  id: 'lod', name: 'Lod', alt: ['Lydda', 'Diospolis'], original: 'לֹד Lod; Λύδδα',
  lat: 31.9522, lon: 34.8950, elev: 55, type: 'town', rank: 3, confidence: 'certain',
  eras: ['exile-return', 'church'],
  refs: ['1 Chronicles 8:12', 'Ezra 2:33', 'Nehemiah 11:35', 'Acts 9:32-38'],
  verse: { ref: 'Acts 9:34', text: 'And Peter said to him, "Aeneas, Jesus Christ heals you; rise and make your bed." And immediately he rose.' },
  summary: 'A Benjaminite town on the coastal plain, resettled after the exile; as Lydda, where Peter healed the paralysed Aeneas and was summoned to nearby Joppa.',
  detail: 'Lod is listed in Thutmose III\'s conquests and has been continuously occupied; excavation in the modern city has uncovered a Neolithic village and a superb Roman mosaic. It was a centre of rabbinic learning after AD 70 and, in Christian tradition, the burial place of St George. The plain of Lod (Ono) was the natural route between Jerusalem and Joppa.',
  modern: 'Lod, Israel',
  identification: 'Certain.'
},
{
  id: 'gilboa', name: 'Mount Gilboa', original: 'גִּלְבֹּעַ Gilboa',
  lat: 32.5000, lon: 35.4167, elev: 500, type: 'mountain', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom'],
  refs: ['Judges 7:1', '1 Samuel 28:4', '1 Samuel 31:1-8', '2 Samuel 1:6-27', '2 Samuel 21:12'],
  verse: { ref: '2 Samuel 1:21', text: 'You mountains of Gilboa, let there be no dew or rain upon you, nor fields of offerings! For there the shield of the mighty was defiled, the shield of Saul, not anointed with oil.' },
  summary: 'The ridge on the south-eastern edge of the Jezreel valley where Saul and Jonathan died fighting the Philistines, and at whose foot Gideon\'s men were tested at the spring of Harod.',
  detail: 'Gilboa runs north-west to south-east for about 15 km, rising steeply above the valley to some 500 m. The spring of Harod (Ain Jalud) at its northern foot is the traditional place where Gideon reduced his army to three hundred. Saul camped by the spring of Jezreel below the ridge and fell on its slopes; the Philistines took his body to Beth-shan at its eastern end. David\'s lament over Saul and Jonathan is among the finest poetry in Scripture.',
  modern: 'Mount Gilboa, Israel',
  identification: 'Certain.'
},
{
  id: 'tabor', name: 'Mount Tabor', original: 'תָּבוֹר Tavor',
  lat: 32.6869, lon: 35.3906, elev: 575, type: 'mountain', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'christ'],
  refs: ['Joshua 19:22', 'Judges 4:6-14', 'Psalm 89:12', 'Jeremiah 46:18', 'Hosea 5:1'],
  verse: { ref: 'Psalm 89:12', text: 'The north and the south, you have created them; Tabor and Hermon joyously praise your name.' },
  summary: 'The dome-shaped hill rising alone from the Jezreel valley where Deborah and Barak gathered Israel against Sisera; since the fourth century the traditional Mount of the Transfiguration.',
  detail: 'Tabor\'s isolated symmetrical form made it a landmark and a sanctuary from early times (Hosea 5:1 hints at illicit worship there). Barak mustered ten thousand men on it and charged down on Sisera\'s chariots in the plain. The Gospels place the Transfiguration on an unnamed "high mountain" in the north (Matthew 17:1); Origen and Cyril of Jerusalem named Tabor, and Byzantine, Crusader and modern churches have crowned the summit since. Many scholars prefer Mount Hermon, being nearer Caesarea Philippi where the preceding events occurred; the atlas lists Tabor\'s claim as traditional.',
  christ: 'Whether on Tabor or Hermon, Jesus was transfigured before Peter, James and John, with Moses and Elijah beside him and the Father\'s voice saying "This is my beloved Son ... listen to him" (Matthew 17:5): the law and the prophets bearing witness to Christ.',
  modern: 'Mount Tabor, Israel',
  identification: 'Certain; the Transfiguration tradition is fourth-century.'
},
{
  id: 'carmel', name: 'Mount Carmel', original: 'כַּרְמֶל Karmel ("garden-land")',
  lat: 32.7333, lon: 35.0500, elev: 525, type: 'mountain', rank: 2, confidence: 'certain',
  eras: ['conquest-judges', 'divided-kingdom'],
  refs: ['Joshua 19:26', '1 Kings 18:19-46', '2 Kings 2:25', '2 Kings 4:25', 'Song of Solomon 7:5', 'Isaiah 35:2', 'Amos 1:2'],
  verse: { ref: '1 Kings 18:21', text: 'How long will you go limping between two different opinions? If the LORD is God, follow him; but if Baal, then follow him.' },
  summary: 'The wooded ridge jutting into the Mediterranean above the Bay of Acre, where Elijah confronted the prophets of Baal and fire fell from heaven, and from which he saw the cloud of rain.',
  detail: 'Carmel runs 39 km south-east from the cape at Haifa, a limestone ridge that stays green when the land is parched, hence its use as a byword for beauty and fruitfulness (Song 7:5; Isaiah 35:2). It was a sacred mountain for Canaanites and Phoenicians long before Elijah, which is why the contest with Baal was staged there; Thutmose III calls it "the holy head". The traditional site of the sacrifice, el-Muhraqa ("the burning"), on the south-eastern spur near Yokneam, overlooks the Kishon where the Baal prophets were killed and has a Carmelite chapel; the identification is traditional but the topography fits well. Elisha also frequented the mountain.',
  christ: 'Elijah\'s fire on Carmel answered the question "Who is God?"; at Pentecost the fire of the Spirit fell not on a sacrifice but on the people, for the sacrifice had already been offered once for all.',
  modern: 'Mount Carmel, Haifa, Israel',
  identification: 'Certain; el-Muhraqa is traditional.'
},
{
  id: 'kishon', name: 'Kishon', alt: ['Nahal Kishon'], original: 'קִישׁוֹן Qishon',
  lat: 32.7300, lon: 35.1300, type: 'river', rank: 4, confidence: 'certain',
  eras: ['conquest-judges', 'divided-kingdom'],
  refs: ['Judges 4:7', 'Judges 4:13', 'Judges 5:21', '1 Kings 18:40', 'Psalm 83:9'],
  verse: { ref: 'Judges 5:21', text: 'The torrent Kishon swept them away, the ancient torrent, the torrent Kishon. March on, my soul, with might!' },
  summary: 'The stream draining the Jezreel valley to the sea at Haifa, whose winter flood bogged Sisera\'s chariots, and beside which Elijah executed the prophets of Baal.',
  detail: 'The Kishon is a sluggish brook for most of the year but a swamp-maker after rain, and the Song of Deborah credits a downpour (Judges 5:4, 20-21) with turning the plain into mud that neutralised the Canaanite chariotry. It flows below Carmel\'s northern slopes, so the Baal prophets were brought down from the mountain to its bank.',
  modern: 'Nahal Kishon, Israel',
  identification: 'Certain.'
},
{
  id: 'gilead', name: 'Gilead', original: 'גִּלְעָד Gil\'ad',
  lat: 32.3000, lon: 35.8500, type: 'region', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'exodus', 'conquest-judges', 'united-kingdom', 'divided-kingdom'],
  refs: ['Genesis 31:21-25', 'Numbers 32:1', 'Judges 11', '2 Samuel 17:22-29', '1 Kings 17:1', '2 Kings 15:29', 'Jeremiah 8:22'],
  verse: { ref: 'Jeremiah 8:22', text: 'Is there no balm in Gilead? Is there no physician there?' },
  summary: 'The wooded highlands east of the Jordan between the Yarmuk and the Arnon, home of Jephthah and Elijah, David\'s refuge, famed for its balm.',
  detail: 'Gilead was settled by Reuben, Gad and half of Manasseh, who preferred its pastures to the land west of Jordan. Its oak forests and grazing contrast with the deserts beyond. Jacob made his covenant with Laban in its hills, Jephthah and Jair judged from it, Elijah came from Tishbe in it, and David fled to Mahanaim in it. It was the first Israelite territory lost to Assyria (733 BC). The "balm of Gilead" was a resin exported through the region and became a byword for healing.',
  christ: 'Jeremiah asked if there was no balm in Gilead for the wound of God\'s people; the Gospels answer with the Physician who came not for the healthy but for the sick (Mark 2:17).',
  modern: 'Northern Jordan (Ajloun, Jerash, Balqa governorates)',
  identification: 'Certain.'
},

// ---------------------------------------------------------------------------
// THE NORTHERN KINGDOM, PHOENICIA AND ARAM
// ---------------------------------------------------------------------------
{
  id: 'tirzah', name: 'Tirzah', alt: ['Tell el-Far\'ah (North)'], original: 'תִּרְצָה Tirtsah',
  lat: 32.2872, lon: 35.3392, elev: 180, type: 'city', rank: 3, confidence: 'probable',
  eras: ['conquest-judges', 'divided-kingdom'],
  refs: ['Joshua 12:24', '1 Kings 14:17', '1 Kings 15:33', '1 Kings 16:8-18', '1 Kings 16:23-24', 'Song of Solomon 6:4'],
  verse: { ref: 'Song of Solomon 6:4', text: 'You are beautiful as Tirzah, my love, lovely as Jerusalem, awesome as an army with banners.' },
  summary: 'A Canaanite royal city that became the first capital of the northern kingdom under Jeroboam, Baasha, Elah, Zimri and Omri, until Omri moved to Samaria.',
  detail: 'Tell el-Far\'ah, 11 km north-east of Nablus at the head of the Wadi Far\'ah that leads down to the Jordan, was excavated by de Vaux (1946-60). A well-planned tenth- and ninth-century town was followed by a level with a large unfinished building, plausibly Omri\'s abandoned palace when he transferred the court to Samaria after six years (1 Kings 16:23-24). Zimri burned the palace over his own head here. The identification is widely accepted though not epigraphically confirmed.',
  modern: 'Tell el-Far\'ah (North), West Bank',
  identification: 'Generally accepted.'
},
{
  id: 'samaria', name: 'Samaria (city)', alt: ['Sebaste', 'Sebastia', 'Shomron'], original: 'שֹׁמְרוֹן Shomron; Σαμάρεια, Σεβαστή',
  lat: 32.2764, lon: 35.1897, elev: 440, type: 'city', rank: 2, confidence: 'certain',
  eras: ['divided-kingdom', 'intertestamental', 'christ', 'church'],
  refs: ['1 Kings 16:24', '1 Kings 20:1', '1 Kings 22:37-39', '2 Kings 6:24-7:20', '2 Kings 17:5-6', 'Amos 3:9-15', 'Acts 8:5-25'],
  verse: { ref: '1 Kings 16:24', text: 'He bought the hill of Samaria from Shemer for two talents of silver, and he fortified the hill and called the name of the city that he built Samaria, after the name of Shemer, the owner of the hill.' },
  summary: 'Omri\'s new capital of the northern kingdom, with Ahab\'s ivory palace; besieged by Aram, taken by Assyria in 722 BC; rebuilt by Herod as Sebaste, where Philip preached Christ.',
  detail: 'Samaria crowns an isolated hill with wide views west to the sea. Harvard (1908-10) and the Joint Expedition under Crowfoot (1931-35) uncovered the Omride royal acropolis: a finely built casemate wall and palace of ashlar masonry that is the best royal architecture of Iron Age Israel, together with carved ivories (Amos 6:4 and "the ivory house" of 1 Kings 22:39) and the Samaria Ostraca, wine and oil receipts of the eighth century in Hebrew. Sargon\'s annals record the city\'s capture and the resettlement of foreigners, the origin of the Samaritans of later history.\n\nHerod rebuilt it as Sebaste (Greek for Augusta) with a temple to Augustus, a colonnaded street and stadium; the ruins visible today are largely his. Philip\'s mission to "the city of Samaria" (Acts 8:5) is the gospel\'s first step beyond Judea, and John the Baptist\'s tomb was venerated here by the fourth century.',
  christ: 'The capital that Amos and Hosea condemned for luxury and idolatry received the gospel with joy from Philip, and Peter and John laid hands on its believers: the promise of Acts 1:8, "in all Judea and Samaria", fulfilled.',
  modern: 'Sebastia, West Bank',
  identification: 'Certain.'
},
{
  id: 'dan', name: 'Dan', alt: ['Laish', 'Leshem', 'Tel Dan'], original: 'דָּן Dan; לַיִשׁ Layish',
  lat: 33.2486, lon: 35.6522, elev: 200, type: 'city', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'conquest-judges', 'divided-kingdom'],
  refs: ['Genesis 14:14', 'Judges 18:27-31', '1 Kings 12:29-30', '1 Kings 15:20', '2 Kings 10:29', 'Amos 8:14'],
  verse: { ref: 'Judges 18:29', text: 'And they named the city Dan, after the name of Dan their ancestor, who was born to Israel; but the name of the city was Laish at the first.' },
  summary: 'The northernmost city of Israel at the source of the Jordan, seized by the tribe of Dan from Laish, and made the site of Jeroboam\'s golden calf. Here the Tel Dan Stele mentioning the "House of David" was found.',
  detail: 'Tel Dan sits beside one of the Jordan\'s great springs beneath Hermon. Biran excavated it from 1966 to 1999, uncovering a huge Middle Bronze rampart with a complete mudbrick arched gate, a Late Bronze city (the Laish of Judges 18), and a large Iron Age sacred precinct with a monumental stone platform and a horned-altar fragment, almost certainly the high place of Jeroboam\'s calf, expanded by Ahab and Jeroboam II. A bilingual inscription "to the god who is in Dan" confirmed the site\'s name.\n\nIn 1993-94 fragments of a basalt stele in Aramaic were found reused in the outer gate. Set up by a king of Damascus, probably Hazael, about 840 BC, it boasts of killing the king of Israel and the king of "the House of David" (bytdwd), the first extra-biblical reference to David, only about 150 years after his reign, though a few scholars dispute the reading. It parallels 2 Kings 8-9 from the Aramean side.',
  christ: 'Jeroboam set up a golden calf at Dan and said, "Behold your gods", leading Israel into the sin that ended in exile; John the Baptist would point instead to "the Lamb of God, who takes away the sin of the world" (John 1:29).',
  modern: 'Tel Dan, Upper Galilee, Israel',
  identification: 'Certain; confirmed by inscription.'
},
{
  id: 'tyre', name: 'Tyre', alt: ['Tyrus', 'Sur'], original: 'צֹר Tsor; Τύρος',
  lat: 33.2704, lon: 35.1961, elev: 5, type: 'city', rank: 2, confidence: 'certain',
  eras: ['united-kingdom', 'divided-kingdom', 'christ', 'church'],
  refs: ['Joshua 19:29', '2 Samuel 5:11', '1 Kings 5:1-12', '1 Kings 7:13-14', 'Isaiah 23', 'Ezekiel 26-28', 'Mark 7:24-31', 'Acts 21:3-6'],
  verse: { ref: 'Mark 7:24', text: 'And from there he arose and went away to the region of Tyre and Sidon. And he entered a house and did not want anyone to know, yet he could not be hidden.' },
  summary: 'The great Phoenician island port whose king Hiram supplied cedar and craftsmen for David and Solomon; the subject of Ezekiel\'s longest oracle; visited by Jesus, who healed a Syrophoenician woman\'s daughter there.',
  detail: 'Tyre was built on a rocky island half a mile offshore, with a mainland suburb (Ushu). Hiram I (c. 980-947 BC) was Solomon\'s partner in the temple and in the Red Sea trade; Ethbaal\'s daughter Jezebel brought its Baal cult to Israel. Its merchants planted Carthage and ranged to Tarshish. Ezekiel 27 is a magnificent picture of its trade; Ezekiel 26 and Isaiah 23 foretold its fall. Nebuchadnezzar besieged it for thirteen years; Alexander took it in 332 BC by building a mole to the island, which silt has since widened into the present peninsula. The extensive Roman ruins, hippodrome and colonnades are on that ground. Jesus withdrew to "the region of Tyre" and people from Tyre came to hear him; Paul stayed a week here with the church (Acts 21).',
  christ: 'Jesus said that if the miracles done in Galilee had been done in Tyre and Sidon they would have repented (Matthew 11:21), and he honoured the faith of a Tyrian mother; Psalm 87:4 already counted Tyre among those who would know the LORD.',
  modern: 'Sour (Tyre), Lebanon',
  identification: 'Certain.'
},
{
  id: 'sidon', name: 'Sidon', alt: ['Zidon', 'Saida'], original: 'צִידוֹן Tsidon; Σιδών',
  lat: 33.5633, lon: 35.3689, elev: 10, type: 'city', rank: 2, confidence: 'certain',
  eras: ['conquest-judges', 'divided-kingdom', 'christ', 'church'],
  refs: ['Genesis 10:19', 'Judges 1:31', '1 Kings 16:31', 'Ezekiel 28:20-23', 'Matthew 15:21', 'Luke 6:17', 'Acts 27:3'],
  verse: { ref: 'Acts 27:3', text: 'The next day we put in at Sidon. And Julius treated Paul kindly and gave him leave to go to his friends and be cared for.' },
  summary: 'The oldest of the Phoenician cities, "Great Sidon" of Joshua, home of Jezebel\'s father Ethbaal; crowds from here heard Jesus, and Paul\'s ship put in on the voyage to Rome.',
  detail: 'Sidon, on a promontory with a good double harbour, was the leading Phoenician city until Tyre overtook it; "Sidonians" is used loosely for all Phoenicians in Kings. It produced glass and purple dye and its craftsmen helped build the temple. Excavation has been limited by the modern city, but the temple of Eshmun at nearby Bustan esh-Sheikh, the royal sarcophagi of the Persian period, and recent British Museum digs in the city centre have illuminated it. Jesus went as far as the region of Tyre and Sidon; the church here received Paul kindly on the way to Rome.',
  modern: 'Saida, Lebanon',
  identification: 'Certain.'
},
{
  id: 'zarephath', name: 'Zarephath', alt: ['Sarepta', 'Sarafand'], original: 'צָרְפַת Tsarefat; Σάρεπτα',
  lat: 33.4467, lon: 35.2919, elev: 10, type: 'town', rank: 3, confidence: 'certain',
  eras: ['divided-kingdom', 'christ'],
  refs: ['1 Kings 17:8-24', 'Obadiah 20', 'Luke 4:25-26'],
  verse: { ref: 'Luke 4:26', text: 'and Elijah was sent to none of them but only to Zarephath, in the land of Sidon, to a woman who was a widow.' },
  summary: 'The Phoenician town between Tyre and Sidon where Elijah lodged with a widow during the famine, multiplying her flour and oil and raising her son.',
  detail: 'Sarafand preserves the name, and Pritchard\'s excavation of the ancient harbour town (1969-74) made it the first Phoenician city in the homeland to be dug extensively, revealing pottery kilns, purple-dye works and a shrine of Tanit-Ashtart. Elijah\'s sojourn among Gentiles in the land of Baal\'s own worshippers, while Israel starved under Ahab, is the passage Jesus cited at Nazareth to show that God\'s grace reaches beyond Israel.',
  christ: 'Jesus\' first sermon at Nazareth pointed to the widow of Zarephath as proof that God sends his grace to outsiders, and his hearers tried to kill him for it (Luke 4:25-29). Elijah raising her son anticipates the greater Prophet who raises the dead.',
  modern: 'Sarafand, Lebanon',
  identification: 'Certain.'
},
{
  id: 'byblos', name: 'Byblos', alt: ['Gebal', 'Jbeil'], original: 'גְּבַל Geval; Βύβλος',
  lat: 34.1189, lon: 35.6481, elev: 25, type: 'city', rank: 4, confidence: 'certain',
  eras: ['united-kingdom', 'divided-kingdom'],
  refs: ['Joshua 13:5', '1 Kings 5:18', 'Ezekiel 27:9', 'Psalm 83:7'],
  verse: { ref: '1 Kings 5:18', text: 'So Solomon\'s builders and Hiram\'s builders and the men of Gebal did the cutting and prepared the timber and the stone to build the house.' },
  summary: 'The ancient Phoenician port whose stonemasons worked on Solomon\'s temple and whose shipwrights Ezekiel praised. Its Greek name gave us the word "Bible".',
  detail: 'Byblos traded cedar and resin to Egypt from the third millennium BC and is one of the oldest continuously inhabited towns in the world. French excavations since 1921 have uncovered the temples of Baalat Gebal and the Obelisks, royal tombs with Egyptian gifts, and the sarcophagus of Ahiram (c. 1000 BC) bearing one of the earliest alphabetic inscriptions, the script from which Hebrew and Greek letters descend. Because Egyptian papyrus reached Greece through this port, the Greeks called papyrus byblos, hence biblia, "books".',
  modern: 'Jbeil, Lebanon',
  identification: 'Certain.'
},
{
  id: 'phoenicia', name: 'Phoenicia', alt: ['Lebanon', 'Sidonians', 'Canaan (coast)'], original: 'Φοινίκη Phoinikē',
  lat: 33.9000, lon: 35.5500, type: 'region', rank: 3, confidence: 'certain',
  eras: ['united-kingdom', 'divided-kingdom', 'christ', 'church'],
  refs: ['1 Kings 5:6', 'Isaiah 23', 'Ezekiel 27', 'Mark 7:26', 'Acts 11:19', 'Acts 15:3', 'Acts 21:2'],
  summary: 'The narrow coastal strip of Lebanon held by the sea-trading cities of Tyre, Sidon, Byblos and Arvad, source of cedar, purple and the alphabet, and Israel\'s northern neighbour.',
  detail: 'The Phoenicians were the Canaanites of the coast, speaking a language close to Hebrew and worshipping Baal, Astarte and Melqart. Never a unified state, their cities were commercial partners of David and Solomon, sources of Jezebel\'s idolatry, and the founders of colonies as far as Spain and Carthage. The "cedars of Lebanon" from their mountains built the temple. Believers scattered by Stephen\'s death preached here (Acts 11:19), and Paul passed through its churches on his way to Jerusalem.',
  modern: 'Lebanon',
  identification: 'Certain.'
},
{
  id: 'damascus', name: 'Damascus', original: 'דַּמֶּשֶׂק Dammeseq; Δαμασκός',
  lat: 33.5117, lon: 36.3067, elev: 690, type: 'city', rank: 1, confidence: 'certain',
  eras: ['patriarchs', 'united-kingdom', 'divided-kingdom', 'church'],
  refs: ['Genesis 14:15', '2 Samuel 8:5-6', '1 Kings 11:23-25', '2 Kings 5:12', '2 Kings 8:7-15', '2 Kings 16:9', 'Isaiah 17:1', 'Acts 9:1-25', 'Galatians 1:17'],
  verse: { ref: 'Acts 9:3', text: 'Now as he went on his way, he approached Damascus, and suddenly a light from heaven shone around him.' },
  summary: 'The oasis capital of Aram, Israel\'s persistent rival under Ben-hadad and Hazael, taken by Assyria in 732 BC; on the road to it Saul of Tarsus met the risen Christ.',
  detail: 'Damascus lies where the Barada (biblical Abana) breaks from the Anti-Lebanon into a fertile oasis on the desert\'s edge, and it claims to be the oldest continuously inhabited capital in the world. It appears in Egyptian lists from the fifteenth century BC. David garrisoned it; Rezon made it independent; the Ben-hadads and Hazael fought Israel for a century (Naaman and Elisha, the siege of Samaria, the Tel Dan Stele); Tiglath-pileser III ended its kingdom in 732 BC. The Umayyad Mosque stands on the site of the temple of Hadad and the later temple of Jupiter, and the Roman street plan survives in the "Street called Straight" (Acts 9:11).\n\nAncient Damascus lies beneath the living city, so excavation has been minimal. A large Jewish community lived here in Paul\'s day, and the traditional sites of his conversion, of Judas\' house and of the wall from which he escaped in a basket are late but honour a certain event.',
  christ: 'The persecutor was blinded by the glory of Jesus on the Damascus road and rose to be the apostle to the nations; Paul told the story three times as evidence that Christ is alive (Acts 9, 22, 26). Ananias\' words, "Brother Saul", are the church\'s first welcome to its greatest enemy.',
  modern: 'Damascus, Syria',
  identification: 'Certain.'
},
{
  id: 'aram', name: 'Aram', alt: ['Syria', 'Aram-Damascus', 'Aram-naharaim', 'Aram-zobah'], original: 'אֲרָם Aram; Συρία',
  lat: 34.8000, lon: 37.6000, type: 'region', rank: 3, confidence: 'certain',
  eras: ['patriarchs', 'united-kingdom', 'divided-kingdom', 'church'],
  refs: ['Genesis 25:20', 'Deuteronomy 26:5', '2 Samuel 8:3-6', '1 Kings 20', '2 Kings 5:1', '2 Kings 6:24', 'Isaiah 7:1-9', 'Acts 15:23'],
  verse: { ref: '2 Kings 5:1', text: 'Naaman, commander of the army of the king of Syria, was a great man with his master and in high favor, because by him the LORD had given victory to Syria. He was a mighty man of valor, but he was a leper.' },
  summary: 'The Aramean lands from Damascus to the Euphrates: Abraham\'s kin came from Aram-naharaim, and the kingdom of Aram-Damascus was Israel\'s chief rival for two centuries. Called Syria in Greek.',
  detail: 'The Arameans were Semitic tribes who formed kingdoms across Syria and upper Mesopotamia after 1200 BC: Zobah, Beth-rehob, Maacah, Hamath and above all Damascus. Their language, Aramaic, became the lingua franca of the Assyrian and Persian empires, the language of parts of Daniel and Ezra and of Jesus and his disciples. Assyria absorbed the Aramean states by 720 BC. In the New Testament "Syria" is the Roman province governed from Antioch that included Judea for a time (Luke 2:2).',
  modern: 'Syria',
  identification: 'Certain.'
},
{
  id: 'riblah', name: 'Riblah', original: 'רִבְלָה Rivlah',
  lat: 34.4436, lon: 36.5297, elev: 560, type: 'town', rank: 3, confidence: 'probable',
  eras: ['divided-kingdom'],
  refs: ['Numbers 34:11', '2 Kings 23:33', '2 Kings 25:6-7', '2 Kings 25:20-21', 'Jeremiah 39:5-7', 'Jeremiah 52:9-27'],
  verse: { ref: '2 Kings 25:6', text: 'Then they captured the king and brought him up to the king of Babylon at Riblah, and they passed sentence on him.' },
  summary: 'Nebuchadnezzar\'s headquarters on the Orontes during the siege of Jerusalem, where Zedekiah was blinded after seeing his sons killed and where Judah\'s leaders were executed.',
  detail: 'The village of Ribleh, on the Orontes south of Homs near the ancient Kadesh, preserves the name; it lay on the great north-south route where an army could be supplied from the Beqaa and Syria while campaigning in Palestine. Pharaoh Neco had used it for the same purpose when he deposed Jehoahaz in 609 BC. The Riblah of Numbers 34:11 on Israel\'s ideal north-eastern border may be the same place or another.',
  modern: 'Ribleh, Homs Governorate, Syria',
  identification: 'Generally accepted on the name.'
},
{
  id: 'hamath', name: 'Hamath', alt: ['Hama', 'Epiphania'], original: 'חֲמָת Chamat',
  lat: 35.1318, lon: 36.7578, elev: 300, type: 'city', rank: 3, confidence: 'certain',
  eras: ['united-kingdom', 'divided-kingdom'],
  refs: ['Numbers 34:8', '2 Samuel 8:9-10', '1 Kings 8:65', '2 Kings 14:28', '2 Kings 17:24', '2 Kings 18:34', 'Isaiah 10:9', 'Amos 6:2'],
  summary: 'The city-state on the Orontes whose king Toi congratulated David; "the entrance of Hamath" (Lebo-hamath) marked Israel\'s ideal northern border. Destroyed by Sargon II in 720 BC.',
  detail: 'Danish excavations at the citadel of Hama (1931-38) traced occupation from the Neolithic through a Neo-Hittite and Aramean royal city with Luwian hieroglyphic and Aramaic inscriptions, destroyed and deported by Sargon II, whose annals record the event; settlers from Hamath were placed in Samaria (2 Kings 17:24). Solomon\'s realm briefly reached to "the entrance of Hamath", the northern end of the Beqaa valley. The Assyrian envoys\' taunt, "Where are the gods of Hamath?", used its fall to threaten Jerusalem.',
  modern: 'Hama, Syria',
  identification: 'Certain.'
},
{
  id: 'kadesh-orontes', name: 'Kadesh on the Orontes', alt: ['Qadesh', 'Tell Nebi Mend'],
  lat: 34.5570, lon: 36.5190, elev: 520, type: 'city', rank: 4, confidence: 'certain',
  eras: ['exodus', 'united-kingdom'],
  refs: ['2 Samuel 24:6', 'Numbers 13:21'],
  summary: 'The Hittite-Egyptian frontier fortress where Ramesses II fought his famous battle (c. 1274 BC). Probably the "Kadesh" of David\'s census in 2 Samuel 24:6 (some texts) and not the Kadesh of the wilderness.',
  detail: 'Tell Nebi Mend, at the confluence of the Orontes and a tributary south of Homs, was excavated by Pézard (1921-22) and Parr (1975-95), revealing Bronze and Iron Age fortifications. The battle of Kadesh, recorded at length in Ramesses II\'s temples, ended in the first known international peace treaty. On the early-date chronology the battle falls in the period of the Judges, well after the Exodus. The site is included as an anchor for Syrian geography rather than for a biblical event.',
  modern: 'Tell Nebi Mend, Homs Governorate, Syria',
  identification: 'Certain.'
},
{
  id: 'tadmor', name: 'Tadmor', alt: ['Palmyra'], original: 'תַּדְמֹר Tadmor',
  lat: 34.5560, lon: 38.2739, elev: 400, type: 'city', rank: 4, confidence: 'certain',
  eras: ['united-kingdom'],
  refs: ['1 Kings 9:18', '2 Chronicles 8:4'],
  summary: 'The great caravan oasis of the Syrian desert, which Chronicles says Solomon built (Hebrew text of Kings reads Tamar, a Judean site; the tradition of Tadmor is early).',
  detail: 'Palmyra flourished under Rome as a trading metropolis with colonnaded streets, the temple of Bel and distinctive tower tombs, before Aurelian sacked it in 273. Whether Solomon really controlled it is doubted by many; 1 Kings 9:18 reads Tamar in the consonantal text with Tadmor as the traditional reading, and 2 Chronicles 8:4 places Solomon\'s building of Tadmor in Hamath. Much of the site was damaged in 2015-17.',
  modern: 'Tadmur, Homs Governorate, Syria',
  identification: 'Certain as Palmyra; the Solomonic connection is debated.'
},
{
  id: 'hermon', name: 'Mount Hermon', alt: ['Sirion', 'Senir', 'Baal-hermon', 'Jebel esh-Sheikh'], original: 'חֶרְמוֹן Chermon',
  lat: 33.4161, lon: 35.8575, elev: 2814, type: 'mountain', rank: 2, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'christ'],
  refs: ['Deuteronomy 3:8-9', 'Joshua 11:17', 'Psalm 42:6', 'Psalm 89:12', 'Psalm 133:3', 'Song of Solomon 4:8', 'Matthew 17:1'],
  verse: { ref: 'Psalm 133:3', text: 'It is like the dew of Hermon, which falls on the mountains of Zion! For there the LORD has commanded the blessing, life forevermore.' },
  summary: 'The snow-capped massif at the northern limit of Israel, source of the Jordan, famed for its dew; the probable "high mountain" of the Transfiguration near Caesarea Philippi.',
  detail: 'Hermon, the southern spur of the Anti-Lebanon, rises to 2,814 m and is snow-covered for most of the year; its melt feeds the springs at Dan and Banias that form the Jordan. It marked the northern boundary of the conquest (Joshua 11:17) and of Og\'s kingdom. Sacred to Baal (Baal-hermon) and later to Pan at its foot, its slopes carry the ruins of many temples. Because Peter\'s confession at Caesarea Philippi immediately precedes the Transfiguration and Hermon is the only "high mountain" nearby, many scholars place the Transfiguration here rather than on Tabor.',
  christ: 'On this mountain, or on Tabor, the disciples saw the glory of the Son and heard the Father say "listen to him"; Peter wrote that "we were eyewitnesses of his majesty" (2 Peter 1:16-18) on "the holy mountain".',
  modern: 'Jebel esh-Sheikh, Lebanon/Syria/Israel border',
  identification: 'Certain.'
},

// ---------------------------------------------------------------------------
// THE WORLD OF THE GOSPELS
// ---------------------------------------------------------------------------
{
  id: 'galilee', name: 'Galilee', original: 'גָּלִיל Galil ("circuit"); Γαλιλαία',
  lat: 32.9000, lon: 35.3800, type: 'region', rank: 2, confidence: 'certain',
  eras: ['divided-kingdom', 'christ', 'church'],
  refs: ['Joshua 20:7', '2 Kings 15:29', 'Isaiah 9:1-2', 'Matthew 4:12-25', 'Luke 4:14-15', 'John 7:41', 'Acts 10:37'],
  verse: { ref: 'Matthew 4:15-16', text: 'The land of Zebulun and the land of Naphtali, the way of the sea, beyond the Jordan, Galilee of the Gentiles— the people dwelling in darkness have seen a great light, and for those dwelling in the region and shadow of death, on them a light has dawned.' },
  summary: 'The hill country and lake basin of northern Israel where Jesus grew up and did most of his ministry, "Galilee of the Gentiles" on which Isaiah said light would dawn.',
  detail: 'Galilee was the tribal land of Naphtali, Zebulun, Issachar and Asher, the first region deported by Assyria (733 BC) and, after centuries of mixed population, re-Judaised under the Hasmoneans. In Jesus\' day it was ruled by Herod Antipas and was densely settled with villages of farmers and fishermen, a Jewish population with a distinct accent (Matthew 26:73), looked down upon by Jerusalem (John 7:52). Upper Galilee is rugged; Lower Galilee, where Nazareth, Cana and Nain lie, is a land of broad valleys; the lake basin is subtropical. Excavations at Capernaum, Magdala, Sepphoris, Gamla and elsewhere have revealed synagogues, ritual baths and stone vessels showing a thoroughly Jewish culture. After the resurrection Jesus met his disciples again in Galilee (Matthew 28:16).',
  christ: 'Matthew reads the whole Galilean ministry through Isaiah 9: the great light dawned first not in Jerusalem but in the despised north. From Galilee came the apostles, "uneducated, common men" (Acts 4:13) who turned the world upside down.',
  modern: 'Northern Israel',
  identification: 'Certain.'
},
{
  id: 'samaria-region', name: 'Samaria (region)', alt: ['Hill country of Ephraim', 'Samaritans'], original: 'Σαμάρεια Samareia',
  lat: 32.3500, lon: 35.3500, type: 'region', rank: 3, confidence: 'certain',
  eras: ['exile-return', 'intertestamental', 'christ', 'church'],
  refs: ['2 Kings 17:24-41', 'Ezra 4:1-5', 'Luke 9:51-56', 'Luke 17:11-19', 'John 4:4-42', 'Acts 1:8', 'Acts 8:1-25'],
  verse: { ref: 'Acts 1:8', text: 'But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.' },
  summary: 'The central hill country between Galilee and Judea, home of the Samaritans, a people of mixed origin who worshipped on Gerizim and whom Jews avoided; Jesus passed through it and the church early took root here.',
  detail: 'After 722 BC Assyria settled foreigners in the former northern kingdom, and the population that emerged, holding to the Pentateuch and to Gerizim as the true sanctuary, was regarded by Jews as heretical and half-pagan; the hostility of Ezra 4 and John 4:9 has deep roots. Jews travelling between Galilee and Jerusalem often crossed the Jordan to avoid it. Jesus deliberately went through Samaria, spoke with a Samaritan woman, healed a Samaritan leper and made a Samaritan the hero of a parable. Philip evangelised it and the apostles confirmed the work.',
  modern: 'Northern West Bank',
  identification: 'Certain.'
},
{
  id: 'judea', name: 'Judea', alt: ['Judah', 'Yehud'], original: 'יְהוּדָה Yehudah; Ἰουδαία Ioudaia',
  lat: 31.6200, lon: 35.0800, type: 'region', rank: 2, confidence: 'certain',
  eras: ['exile-return', 'intertestamental', 'christ', 'church'],
  refs: ['Ezra 5:8', 'Matthew 2:1', 'Matthew 3:1', 'Luke 2:4', 'John 11:7', 'Acts 1:8', 'Acts 9:31'],
  verse: { ref: 'Luke 2:4', text: 'And Joseph also went up from Galilee, from the town of Nazareth, to Judea, to the city of David, which is called Bethlehem, because he was of the house and lineage of David,' },
  summary: 'The southern hill country around Jerusalem, the Persian province of Yehud and the Roman province governed by Pontius Pilate; the land of Judah under its Greek name.',
  detail: 'Judea is the heartland of the old kingdom of Judah, the territory to which the exiles returned. Under the Hasmoneans it expanded; under Herod the Great it was a client kingdom; from AD 6 it was governed by Roman prefects and procurators, of whom Pilate (AD 26-36) is attested by an inscription from Caesarea. The Judean hills, terraced with vines and olives, fall east into the wilderness and west into the Shephelah. Jesus was born, died and rose here, though most of his ministry was in Galilee; the first church was Judean.',
  modern: 'Southern West Bank and central Israel',
  identification: 'Certain.'
},
{
  id: 'perea', name: 'Perea', alt: ['Beyond the Jordan', 'Judea beyond the Jordan'], original: 'Περαία Peraia; πέραν τοῦ Ἰορδάνου',
  lat: 31.9500, lon: 35.7200, type: 'region', rank: 3, confidence: 'certain',
  eras: ['christ'],
  refs: ['Matthew 4:25', 'Matthew 19:1', 'Mark 10:1', 'John 1:28', 'John 10:40'],
  verse: { ref: 'Matthew 19:1', text: 'Now when Jesus had finished these sayings, he went away from Galilee and entered the region of Judea beyond the Jordan,' },
  summary: 'The Jewish territory east of the Jordan under Herod Antipas, where John baptised and Jesus taught during his final journey to Jerusalem.',
  detail: 'Perea, "the land beyond", stretched along the east bank from Pella to Machaerus, the fortress where John the Baptist was imprisoned and executed. Jews used it as a corridor between Galilee and Judea to avoid Samaria. The Gospels call it "beyond the Jordan"; Josephus gives the name Perea. Much of Jesus\' teaching in Luke 13-18, including the parables of the lost sheep and the prodigal son, belongs to this stage of the journey.',
  modern: 'Balqa and Madaba governorates, Jordan',
  identification: 'Certain.'
},
{
  id: 'decapolis', name: 'Decapolis', original: 'Δεκάπολις Dekapolis ("ten cities")',
  lat: 32.5500, lon: 35.9000, type: 'region', rank: 3, confidence: 'certain',
  eras: ['christ'],
  refs: ['Matthew 4:25', 'Mark 5:20', 'Mark 7:31'],
  verse: { ref: 'Mark 5:20', text: 'And he went away and began to proclaim in the Decapolis how much Jesus had done for him, and everyone marveled.' },
  summary: 'The league of Hellenistic cities, mostly east of the Jordan (Scythopolis, Pella, Gerasa, Gadara, Hippos, Philadelphia and others), a largely Gentile region on Galilee\'s eastern edge.',
  detail: 'Pliny lists the ten as Damascus, Philadelphia, Raphana, Scythopolis, Gadara, Hippos, Dion, Pella, Gerasa and Canatha. They were Greek-speaking, pagan cities with theatres and temples; the pig-herding of Mark 5 reflects their culture. Jesus healed the demoniac in this region and sent him back to it as his first Gentile witness, and later passed through it on his way to the lake. The magnificent ruins of Jerash (Gerasa), Umm Qais (Gadara) and Beit She\'an (Scythopolis) show the world the disciples knew.',
  modern: 'Northern Jordan, southern Syria, north-eastern Israel',
  identification: 'Certain.'
},
{
  id: 'idumea', name: 'Idumea', original: 'Ἰδουμαία Idoumaia',
  lat: 31.3000, lon: 34.9500, type: 'region', rank: 4, confidence: 'certain',
  eras: ['intertestamental', 'christ'],
  refs: ['Mark 3:8', 'Ezekiel 35:15', 'Ezekiel 36:5'],
  verse: { ref: 'Mark 3:8', text: 'and from Jerusalem and Idumea and from beyond the Jordan and from around Tyre and Sidon. When the great crowd heard all that he was doing, they came to him.' },
  summary: 'The southern Judean hills and Negev settled by Edomites after the exile; forcibly converted to Judaism by John Hyrcanus, and the homeland of Herod the Great\'s family.',
  detail: 'When Nabataeans pushed into old Edom, Edomites moved west into the emptied lands of southern Judah around Hebron and Beersheba; the Greeks called the region Idumea. Excavations at Maresha (Tell Sandahannah) reveal a mixed Idumean-Hellenistic town of this period. Hyrcanus conquered and circumcised the Idumeans about 125 BC, and Herod\'s father Antipater rose from among them. People from Idumea were among the crowds that came to Jesus.',
  modern: 'Southern West Bank and northern Negev, Israel',
  identification: 'Certain.'
},
{
  id: 'wilderness-judea', name: 'Wilderness of Judea', alt: ['Jeshimon', 'Desert of Judah'], original: 'מִדְבַּר יְהוּדָה Midbar Yehudah; ἔρημος τῆς Ἰουδαίας',
  lat: 31.6500, lon: 35.3500, type: 'wilderness', rank: 3, confidence: 'certain',
  eras: ['united-kingdom', 'christ'],
  refs: ['Judges 1:16', '1 Samuel 23:14', 'Psalm 63:1', 'Matthew 3:1', 'Matthew 4:1-11', 'Mark 1:12-13'],
  verse: { ref: 'Matthew 3:1', text: 'In those days John the Baptist came preaching in the wilderness of Judea,' },
  summary: 'The barren, deeply eroded slope between the Judean hills and the Dead Sea where David hid from Saul, John the Baptist preached, and Jesus fasted forty days and was tempted.',
  detail: 'The Judean wilderness lies in the rain shadow of the hills, falling 1,200 m in 20 km to the Dead Sea in a landscape of chalk ridges and gorges, with a few springs (En-gedi) and winter grazing. David composed psalms here (Psalm 63 title); the Qumran community withdrew here and left the Dead Sea Scrolls; John baptised on its eastern edge at the Jordan; and the traditional Mount of Temptation (Jebel Quruntul) rises above Jericho, a Byzantine identification. Monasteries such as Mar Saba and St George of Choziba have kept a Christian presence in it since the fifth century.',
  christ: 'Israel was tested forty years in the wilderness and failed; Jesus, the true Israel, fasted forty days here and answered every temptation with the word of God (Matthew 4:1-11), succeeding where Adam and Israel fell.',
  modern: 'Judean Desert, West Bank and Israel',
  identification: 'Certain.'
},
{
  id: 'sea-of-galilee', name: 'Sea of Galilee', alt: ['Lake of Gennesaret', 'Sea of Tiberias', 'Sea of Chinnereth', 'Kinneret'], original: 'כִּנֶּרֶת Kinneret; θάλασσα τῆς Γαλιλαίας',
  lat: 32.8211, lon: 35.5881, elev: -210, type: 'sea', rank: 1, confidence: 'certain',
  eras: ['conquest-judges', 'christ'],
  refs: ['Numbers 34:11', 'Joshua 12:3', 'Matthew 4:18', 'Mark 4:35-41', 'Mark 6:45-52', 'Luke 5:1-11', 'John 6:1', 'John 21:1-14'],
  verse: { ref: 'Mark 1:16', text: 'Passing alongside the Sea of Galilee, he saw Simon and Andrew the brother of Simon casting a net into the sea, for they were fishermen.' },
  summary: 'The freshwater lake in the Jordan rift, 21 km long, around whose north-western shore Jesus called fishermen, taught from boats, stilled storms and walked on the water.',
  detail: 'The lake (Hebrew Kinneret, perhaps from kinnor, "harp", for its shape) lies 210 m below sea level, ringed by hills that funnel sudden violent winds down onto it. In the first century its shores were densely settled with fishing towns: Capernaum, Bethsaida, Magdala, Gennesaret, Tiberias, Hippos and Gergesa. A first-century fishing boat, 8 m long, was recovered from the mud at Ginosar in 1986 and is displayed there, of exactly the type the Gospels presuppose. Fish were salted at Magdala (Taricheae, "salting place") and exported.\n\nJesus made Capernaum his base and most of the recorded miracles took place around the lake\'s northern end. After the resurrection he met seven disciples fishing here and cooked them breakfast (John 21).',
  christ: 'On this lake Jesus commanded the wind and waves and they obeyed, and the disciples asked, "Who then is this?" (Mark 4:41); the answer is the one who in Psalm 107:29 "made the storm be still".',
  modern: 'Lake Kinneret, Israel',
  identification: 'Certain.'
},
{
  id: 'nazareth', name: 'Nazareth', original: 'Ναζαρέθ Nazareth',
  lat: 32.7019, lon: 35.2978, elev: 350, type: 'town', rank: 2, confidence: 'certain',
  eras: ['christ'],
  refs: ['Matthew 2:23', 'Luke 1:26-38', 'Luke 2:39-52', 'Luke 4:16-30', 'John 1:45-46', 'Acts 10:38'],
  verse: { ref: 'John 1:46', text: 'Nathanael said to him, "Can anything good come out of Nazareth?" Philip said to him, "Come and see."' },
  summary: 'The obscure Galilean village where the angel came to Mary, where Jesus grew up, and whose synagogue rejected him after his first sermon.',
  detail: 'Nazareth lies in a basin among the hills of Lower Galilee, 25 km west of the lake and 6 km from Sepphoris, Herod Antipas\' capital, where Joseph may have found building work. It is unmentioned in the Old Testament, Josephus or the Talmud, an obscurity that the Gospels themselves note (John 1:46), and its existence in the first century was once doubted; excavations under the Church of the Annunciation and the Sisters of Nazareth convent have since revealed first-century houses, storage pits, tombs and agricultural terraces of a small Jewish farming village of perhaps a few hundred people, and a 2009 dig exposed a house of the period. A third- or fourth-century inscription from Caesarea names Nazareth as a home of priests after AD 70, the earliest non-Christian mention.\n\nThe Basilica of the Annunciation (1969) stands over a grotto venerated since Byzantine times; Mary\'s Well, fed by the village\'s one spring, is the Orthodox site. The "brow of the hill" (Luke 4:29) is traditionally Jebel Qafzeh south of the town.',
  christ: 'God chose a nowhere town for his Son to be raised, so that "he shall be called a Nazarene" (Matthew 2:23), a name of contempt worn as a title of glory on the cross (John 19:19). In its synagogue Jesus announced that Isaiah 61 was fulfilled in their hearing.',
  modern: 'Nazareth, Israel',
  identification: 'Certain.'
},
{
  id: 'capernaum', name: 'Capernaum', alt: ['Kefar Nahum', 'Tell Hum'], original: 'Καφαρναούμ Kapharnaoum ("village of Nahum")',
  lat: 32.8806, lon: 35.5750, elev: -200, type: 'town', rank: 2, confidence: 'certain',
  eras: ['christ'],
  refs: ['Matthew 4:13', 'Matthew 8:5-17', 'Matthew 9:1-9', 'Matthew 11:23', 'Mark 1:21-34', 'Mark 2:1-12', 'Luke 7:1-10', 'John 6:24-59'],
  verse: { ref: 'Matthew 4:13', text: 'And leaving Nazareth he went and lived in Capernaum by the sea, in the territory of Zebulun and Naphtali,' },
  summary: 'Jesus\' home and headquarters during the Galilean ministry, "his own city": the town of Peter, Andrew, James, John and Matthew, and of the synagogue where he taught and healed.',
  detail: 'Capernaum was a fishing and farming village of perhaps 1,500 people on the north-western shore, with a customs post on the border of Antipas\' and Philip\'s territories (hence Matthew the tax collector) and a small garrison (the centurion). Franciscan excavations (Corbo and Loffreda, 1968-86) exposed insulae of basalt houses. One house, 30 m from the synagogue, was singled out in the first century, plastered and venerated, enlarged in the fourth century and enclosed in an octagonal church in the fifth; pilgrims from Egeria onward called it Peter\'s house. The identification is early and plausible, not certain. A modern church now hovers over it.\n\nThe white limestone synagogue, one of the finest in Galilee, dates from the fourth or fifth century, but it stands on a basalt foundation and pavement of the first century, very likely the synagogue built by the centurion (Luke 7:5) in which Jesus preached the bread of life (John 6). Despite all he did here, the town did not repent, and Jesus pronounced its woe (Matthew 11:23).',
  christ: 'Here the paralytic was lowered through the roof and heard "your sins are forgiven", here Jairus\' daughter was raised and the centurion\'s faith praised, here Jesus said "I am the bread of life". Capernaum saw more of Christ than any town and is the standing warning that seeing is not believing.',
  modern: 'Kfar Nahum, Israel',
  identification: 'Certain; the site was never lost.'
},
{
  id: 'bethsaida', name: 'Bethsaida', alt: ['Julias', 'et-Tell', 'el-Araj'], original: 'Βηθσαϊδά Bēthsaida ("house of fishing")',
  lat: 32.9097, lon: 35.6308, elev: -165, type: 'town', rank: 3, confidence: 'disputed',
  alternatives: [
    { name: 'El-Araj (Beit HaBek)', lat: 32.8886, lon: 35.6183, note: 'On the present shore; excavations since 2016 (Aviam and Notley) found a Roman bath-house and first-century remains, and in 2019-22 a Byzantine church with a mosaic inscription that fits Willibald\'s eighth-century "Church of the Apostles" over Peter and Andrew\'s house. Strong recent contender.' }
  ],
  eras: ['christ'],
  refs: ['Matthew 11:21', 'Mark 6:45', 'Mark 8:22-26', 'Luke 9:10-17', 'John 1:44', 'John 12:21'],
  verse: { ref: 'John 1:44', text: 'Now Philip was from Bethsaida, the city of Andrew and Peter.' },
  summary: 'The fishing town of Philip, Andrew and Peter, near which Jesus fed the five thousand and where he healed a blind man in two stages; upbraided for its unbelief. Two rival sites compete.',
  detail: 'Bethsaida lay east of the Jordan\'s inflow to the lake, in Philip\'s territory; he refounded it as Julias about AD 30. Et-Tell, 2 km inland, was excavated by Arav from 1987 and yielded a substantial Iron Age city (perhaps Geshur\'s capital) and a modest Roman village, but it is far from the water, which has prompted the alternative at el-Araj on the shore, where recent finds of a Roman bath-house, a first-century layer and a Byzantine basilica have made a strong case. The atlas marks et-Tell as the longer-established identification and gives el-Araj as a serious alternative; opinion is shifting.',
  christ: 'Jesus fed the crowd in a desolate place near Bethsaida, as the LORD fed Israel with manna, then walked on the sea to his disciples; "they did not understand about the loaves" (Mark 6:52), and the two-stage healing of the blind man there mirrors the disciples\' own slowly opening eyes.',
  modern: 'Et-Tell / el-Araj, Bethsaida Valley, Israel',
  identification: 'Disputed between et-Tell and el-Araj.'
},
{
  id: 'chorazin', name: 'Chorazin', alt: ['Korazim', 'Khirbet Karraza'], original: 'Χοραζίν Chorazin',
  lat: 32.9114, lon: 35.5644, elev: 60, type: 'town', rank: 3, confidence: 'certain',
  eras: ['christ'],
  refs: ['Matthew 11:21-24', 'Luke 10:13-15'],
  verse: { ref: 'Matthew 11:21', text: 'Woe to you, Chorazin! Woe to you, Bethsaida! For if the mighty works done in you had been done in Tyre and Sidon, they would have repented long ago in sackcloth and ashes.' },
  summary: 'A town in the hills 4 km above Capernaum, named only in Jesus\' woe against the unbelieving lake towns; the Gospels record no event there, implying much that is unrecorded.',
  detail: 'Khirbet Karraza preserves the name and has been excavated since 1962, exposing a basalt town of the third to fourth centuries AD with a synagogue, ritual bath and olive presses, including the stone "seat of Moses" mentioned in Matthew 23:2. The first-century village lies beneath. Jesus\' mention of "mighty works done in you" is a reminder that the Gospels are selective (John 21:25).',
  modern: 'Korazim National Park, Israel',
  identification: 'Certain.'
},
{
  id: 'magdala', name: 'Magdala', alt: ['Taricheae', 'Migdal'], original: 'Μαγδαλά Magdala (Hebrew migdal, "tower")',
  lat: 32.8253, lon: 35.5175, elev: -200, type: 'town', rank: 3, confidence: 'certain',
  eras: ['christ'],
  refs: ['Matthew 15:39', 'Matthew 27:56', 'Mark 16:1', 'Luke 8:2', 'John 20:1-18'],
  verse: { ref: 'Luke 8:2', text: 'and also some women who had been healed of evil spirits and infirmities: Mary, called Magdalene, from whom seven demons had gone out,' },
  summary: 'The fish-salting town on the western shore from which Mary Magdalene came, where a first-century synagogue with a carved stone depicting the temple was found in 2009.',
  detail: 'Magdala (Greek Taricheae) was a prosperous town with a harbour, fish-processing industry and, according to Josephus, a hippodrome; it was a rebel centre in AD 67. Excavations begun in 2009 when a hotel was being built uncovered one of the very few synagogues in Israel securely dated to the first century, in use in Jesus\' lifetime, with frescoes, mosaics and the Magdala Stone, a carved block showing a seven-branched menorah and probably the temple, the earliest such depiction. A second first-century synagogue was found in 2021, together with streets, ritual baths and a market. The town is the most likely setting for the "Magadan" of Matthew 15:39.',
  christ: 'The woman from whom seven demons had gone out became the first witness of the risen Lord and was sent to tell the apostles (John 20:17-18): grace that heals, then commissions.',
  modern: 'Migdal, Israel',
  identification: 'Certain.'
},
{
  id: 'tiberias', name: 'Tiberias', original: 'Τιβεριάς Tiberias',
  lat: 32.7922, lon: 35.5312, elev: -200, type: 'city', rank: 3, confidence: 'certain',
  eras: ['christ'],
  refs: ['John 6:1', 'John 6:23', 'John 21:1'],
  verse: { ref: 'John 6:23', text: 'Other boats from Tiberias came near the place where they had eaten the bread after the Lord had given thanks.' },
  summary: 'Herod Antipas\' new capital on the lake\'s western shore, built about AD 20 over tombs and so shunned by pious Jews; the Gospels never record Jesus entering it.',
  detail: 'Antipas named the city for the emperor Tiberius and gave it a stadium, palace and Gentile-style institutions; because it was built over a cemetery, observant Jews avoided it for a generation. After AD 70 it became, ironically, the great centre of rabbinic Judaism where the Mishnah was completed and the Jerusalem Talmud compiled. Excavations have uncovered the Roman gate, theatre and later synagogues. John calls the lake "the Sea of Tiberias" for Gentile readers.',
  modern: 'Tiberias, Israel',
  identification: 'Certain.'
},
{
  id: 'cana', name: 'Cana', alt: ['Cana of Galilee', 'Khirbet Qana'], original: 'Κανά Kana',
  lat: 32.8211, lon: 35.3011, elev: 200, type: 'town', rank: 3, confidence: 'disputed',
  alternatives: [
    { name: 'Kafr Kanna', lat: 32.7467, lon: 35.3406, note: 'The pilgrim site since the Middle Ages, 7 km from Nazareth, with Franciscan and Orthodox "wedding churches". Convenient for pilgrims; the identification is not attested before the Crusader period.' }
  ],
  eras: ['christ'],
  refs: ['John 2:1-11', 'John 4:46-54', 'John 21:2'],
  verse: { ref: 'John 2:11', text: 'This, the first of his signs, Jesus did at Cana in Galilee, and manifested his glory. And his disciples believed in him.' },
  summary: 'The village where Jesus turned water into wine at a wedding, later healed an official\'s son at a distance, and from which Nathanael came.',
  detail: 'Most scholars favour Khirbet Qana, a ruined village on a hill on the north side of the Beth Netofa valley 13 km north of Nazareth, which preserves the name and is the Cana of Josephus and of early pilgrims; excavations (Edwards, McCollough, 1998-) found a first-century Jewish village with a possible synagogue and a Byzantine-period cave venerated by Christians, with stone vessels. Kafr Kanna, nearer Nazareth, has held the pilgrim tradition since the Crusades. Cana in the Gospels is a real, ordinary village where Jesus began his signs.',
  christ: 'The first sign turned the water of Jewish purification into the wine of the wedding feast, an announcement that the messianic banquet had begun and that the best wine was kept for last (John 2:10).',
  modern: 'Khirbet Qana, Israel',
  identification: 'Disputed; Khirbet Qana is preferred by scholars, Kafr Kanna by pilgrims.'
},
{
  id: 'nain', name: 'Nain', alt: ['Nein'], original: 'Ναΐν Nain',
  lat: 32.6300, lon: 35.3489, elev: 220, type: 'town', rank: 3, confidence: 'certain',
  eras: ['christ'],
  refs: ['Luke 7:11-17'],
  verse: { ref: 'Luke 7:14', text: 'Then he came up and touched the bier, and the bearers stood still. And he said, "Young man, I say to you, arise."' },
  summary: 'The village on the northern slope of the Hill of Moreh where Jesus met a funeral at the gate and raised a widow\'s only son.',
  detail: 'Nein, a small Arab village, preserves the name and position, on the flank of Moreh facing Nazareth across the valley; rock-cut tombs lie east of it, where the procession would have been heading. A small Franciscan chapel marks the event. The village is not otherwise known in antiquity. Shunem, where Elisha raised another woman\'s son, is on the other side of the same hill, which Luke\'s readers who knew the land would have noticed.',
  christ: 'Jesus raised the young man out of compassion for his mother, unasked, and the crowd said "God has visited his people" (Luke 7:16), the very hope of Zechariah\'s song (Luke 1:68).',
  modern: 'Nein, Israel',
  identification: 'Certain.'
},
{
  id: 'gennesaret', name: 'Gennesaret', alt: ['Chinnereth', 'Ginosar', 'Plain of Gennesaret'], original: 'Γεννησαρέτ Gennēsaret',
  lat: 32.8550, lon: 35.5300, elev: -200, type: 'region', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'christ'],
  refs: ['Joshua 19:35', 'Matthew 14:34-36', 'Mark 6:53-56', 'Luke 5:1'],
  verse: { ref: 'Luke 5:1', text: 'On one occasion, while the crowd was pressing in on him to hear the word of God, he was standing by the lake of Gennesaret,' },
  summary: 'The fertile crescent-shaped plain on the north-western shore, between Magdala and Capernaum, where crowds brought their sick to Jesus after he walked on the water.',
  detail: 'The plain of Gennesaret, 5 km long, was famed by Josephus for its year-round fruit, walnuts, palms, figs and grapes. Tel Kinrot at its northern end is the Chinnereth of Joshua 19:35, which gave the lake its Hebrew name. The 1986 "Jesus boat" was found in the mud of its shore at Ginosar. Here the sick were laid in the market-places and touched the fringe of his garment.',
  modern: 'Ginosar valley, Israel',
  identification: 'Certain.'
},
{
  id: 'gergesa', name: 'Gergesa', alt: ['Kursi', 'Country of the Gerasenes'], original: 'Γεργεσά Gergesa; Γερασηνοί',
  lat: 32.8258, lon: 35.6494, elev: -200, type: 'site', rank: 3, confidence: 'traditional',
  eras: ['christ'],
  refs: ['Matthew 8:28-34', 'Mark 5:1-20', 'Luke 8:26-39'],
  verse: { ref: 'Mark 5:1', text: 'They came to the other side of the sea, to the country of the Gerasenes.' },
  summary: 'The eastern shore where Jesus cast a legion of demons out of a man into a herd of pigs that rushed down a steep bank into the lake. Tradition fixes it at Kursi, the only place on the shore with such a slope.',
  detail: 'The manuscripts vary between Gerasenes, Gadarenes and Gergesenes; Gerasa (Jerash) is 50 km from the lake and Gadara 10 km, so Origen already argued that the village must be Gergesa on the shore. Kursi, where a steep hillside runs down to the water, has a large Byzantine monastery and church excavated in 1970-74, evidently built to mark the miracle, and a small chapel on the slope above. The region was part of the Decapolis, hence the pigs.',
  christ: 'The man whom no chains could hold sat clothed and in his right mind at Jesus\' feet, and became the first missionary to the Gentiles of the Decapolis (Mark 5:19-20).',
  modern: 'Kursi National Park, Israel',
  identification: 'Traditional since the Byzantine period; topographically apt.'
},
{
  id: 'gadara', name: 'Gadara', alt: ['Umm Qais'], original: 'Γάδαρα Gadara',
  lat: 32.6550, lon: 35.6811, elev: 350, type: 'city', rank: 3, confidence: 'certain',
  eras: ['christ'],
  refs: ['Matthew 8:28'],
  verse: { ref: 'Matthew 8:28', text: 'And when he came to the other side, to the country of the Gadarenes, two demon-possessed men met him, coming out of the tombs, so fierce that no one could pass that way.' },
  summary: 'A city of the Decapolis on a ridge above the Yarmuk, south-east of the lake, whose territory reached the shore; Matthew names the demoniacs\' region after it.',
  detail: 'Umm Qais preserves fine Roman ruins of black basalt: two theatres, a colonnaded street, baths and a long stretch of Roman road, with a view over the lake and Hermon. Gadara was a centre of Greek culture, birthplace of the poet Meleager and the philosopher Menippus. Its lands ran down to the lake, so "country of the Gadarenes" is compatible with a shore site such as Kursi, and coins of Gadara show ships.',
  modern: 'Umm Qais, Irbid Governorate, Jordan',
  identification: 'Certain.'
},
{
  id: 'caesarea-philippi', name: 'Caesarea Philippi', alt: ['Panias', 'Banias', 'Baal-gad', 'Neronias'], original: 'Καισάρεια ἡ Φιλίππου',
  lat: 33.2481, lon: 35.6947, elev: 330, type: 'city', rank: 2, confidence: 'certain',
  eras: ['christ'],
  refs: ['Matthew 16:13-20', 'Mark 8:27-30'],
  verse: { ref: 'Matthew 16:16', text: 'Simon Peter replied, "You are the Christ, the Son of the living God."' },
  summary: 'The city at the great spring of the Jordan beneath Hermon, sacred to Pan, where Peter confessed Jesus as the Christ and Jesus first spoke of his church and his coming death.',
  detail: 'The spring gushes from a cave at the foot of a red cliff that was carved with niches for statues of Pan (Greek Paneas, Arabic Banias). Herod built a temple to Augustus here and his son Philip refounded the town as Caesarea in AD 2, adding his own name to distinguish it from the coastal Caesarea. Excavations since 1988 have exposed the sanctuary of Pan, a palace of Agrippa II and the Roman city. It was the northernmost point of Jesus\' travels, deep in Gentile territory, and the "high mountain" of the Transfiguration six days later is likely Hermon above it.',
  christ: 'In the shadow of a cliff dedicated to a pagan god and a temple to a deified emperor, Peter confessed the true Son of the living God, and Jesus promised that on this rock he would build his church and the gates of Hades would not prevail against it (Matthew 16:18).',
  modern: 'Banias, Golan Heights',
  identification: 'Certain.'
},
{
  id: 'sychar', name: 'Sychar / Jacob\'s Well', alt: ['Sychar', 'Jacob\'s Well', 'Askar'], original: 'Συχάρ Sychar',
  lat: 32.2078, lon: 35.2856, elev: 470, type: 'site', rank: 2, confidence: 'certain',
  eras: ['patriarchs', 'christ'],
  refs: ['Genesis 33:18-19', 'Genesis 48:22', 'Joshua 24:32', 'John 4:4-42'],
  verse: { ref: 'John 4:14', text: 'but whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life.' },
  summary: 'The deep well on Jacob\'s land near Shechem, where Jesus, weary at noon, asked a Samaritan woman for a drink and offered her living water.',
  detail: 'Jacob\'s Well is one of the most secure sites in the Gospels: a rock-cut shaft over 40 m deep at the foot of Gerizim, at the eastern edge of Nablus, fed by ground water (hence "living water" in the woman\'s ears). Genesis does not mention Jacob digging a well, but he bought land here and the tradition is shared by Jews, Samaritans and Christians. A Byzantine cruciform church stood over it by AD 380; the present Greek Orthodox church (completed 2007) encloses the well in its crypt. Sychar is generally identified with the village of Askar, 1 km north-east, though some take it as a form of Shechem. Joseph\'s traditional tomb lies between the two.',
  christ: 'Jesus, greater than Jacob, gives water that ends thirst for ever, and reveals to a despised foreign woman what he had veiled from Jerusalem: "I who speak to you am he" (John 4:26). "The fields are white for harvest" in Samaria before Judea believes.',
  modern: 'Bir Ya\'qub, Balata, Nablus, West Bank',
  identification: 'Certain for the well; Sychar generally Askar.'
},
{
  id: 'aenon', name: 'Aenon near Salim', alt: ['Aenon', 'Ainun'], original: 'Αἰνών Ainōn ("springs")',
  lat: 32.3350, lon: 35.5025, elev: -150, type: 'site', rank: 4, confidence: 'disputed',
  alternatives: [
    { name: 'Salim near Nablus (Ainun)', lat: 32.2144, lon: 35.3294, note: 'A village Salim east of Shechem with a ruin Ainun to its north-east; would place John\'s later baptising in Samaritan territory, which some find unlikely.' },
    { name: 'Wadi el-Kharrar (Bethany beyond Jordan)', lat: 31.8378, lon: 35.5567, note: 'A minority view that Aenon is another name for the same spring-fed baptism site in Perea.' }
  ],
  eras: ['christ'],
  refs: ['John 3:22-30'],
  verse: { ref: 'John 3:23', text: 'John also was baptizing at Aenon near Salim, because water was plentiful there, and people were coming and being baptized.' },
  summary: 'The place of abundant springs where John the Baptist continued baptising after Jesus\' ministry began, and where he said, "He must increase, but I must decrease."',
  detail: 'Eusebius and the Madaba mosaic map place Aenon in the Jordan valley eight Roman miles south of Scythopolis, near Tell Shalem, a district of many springs; that is the marker used here. The name is simply the Aramaic for "springs". Neither candidate has been confirmed, but the valley location suits John\'s ministry along the Jordan.',
  christ: 'Here John gave his last testimony: "Behold, the Lamb of God"; "the friend of the bridegroom rejoices greatly at the bridegroom\'s voice" (John 3:29).',
  modern: 'Near Tell Shalem, Jordan valley, West Bank',
  identification: 'Disputed; Madaba map location used.'
},
{
  id: 'bethany-beyond-jordan', name: 'Bethany beyond the Jordan', alt: ['Bethabara', 'Al-Maghtas', 'Wadi el-Kharrar'], original: 'Βηθανία πέραν τοῦ Ἰορδάνου',
  lat: 31.8378, lon: 35.5567, elev: -350, type: 'site', rank: 2, confidence: 'traditional',
  alternatives: [
    { name: 'Batanea (Bashan)', lat: 32.8000, lon: 36.2000, note: 'Some read "Bethany" as the region Batanea in the north-east, where Jesus\' first disciples came from; would make the distances in John 1-2 (Cana on the third day) easier. A textual and geographical argument without a site.' },
    { name: 'Qasr el-Yahud (west bank)', lat: 31.8375, lon: 35.5333, note: 'The traditional Greek Orthodox baptism site directly opposite al-Maghtas, on the Israeli side; the river has shifted, and both banks share the tradition.' }
  ],
  eras: ['christ'],
  refs: ['Matthew 3:13-17', 'Mark 1:9-11', 'John 1:28', 'John 10:40'],
  verse: { ref: 'John 1:28', text: 'These things took place in Bethany across the Jordan, where John was baptizing.' },
  summary: 'The place east of the Jordan opposite Jericho where John baptised and, by tradition, where Jesus was baptised and the Spirit descended on him as a dove.',
  detail: 'John 1:28 names Bethany across the Jordan as the site of the Baptist\'s ministry; some early manuscripts read Bethabara. Wadi el-Kharrar, a spring-fed streambed on the east bank near where Elijah was taken up (2 Kings 2), has been identified as the place since Byzantine times: excavations since 1996 uncovered a series of churches, pools and a hill called Tell Mar Elias with a monastery, matching pilgrim descriptions from the sixth century onward, and the site was inscribed as a World Heritage Site in 2015. The tradition is strong but is tradition; the Gospels say only that Jesus came from Galilee to the Jordan to John.',
  christ: 'At the same ford where Israel entered the land and where Elijah was taken up, Jesus was baptised and the Father spoke: "You are my beloved Son" (Mark 1:11). Here Jesus "fulfilled all righteousness" by standing with sinners.',
  modern: 'Al-Maghtas, Balqa Governorate, Jordan',
  identification: 'Traditional since the Byzantine period; the district is secure.'
},
{
  id: 'bethany', name: 'Bethany', alt: ['Al-Eizariya', 'Lazarium'], original: 'Βηθανία Bēthania',
  lat: 31.7717, lon: 35.2617, elev: 700, type: 'town', rank: 2, confidence: 'certain',
  eras: ['christ'],
  refs: ['Matthew 21:17', 'Matthew 26:6-13', 'Mark 11:1', 'Luke 10:38-42', 'Luke 24:50', 'John 11:1-44', 'John 12:1-8'],
  verse: { ref: 'John 11:25', text: 'Jesus said to her, "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live,"' },
  summary: 'The village of Mary, Martha and Lazarus on the eastern slope of the Mount of Olives, where Jesus raised Lazarus, was anointed by Mary, lodged during Passion week, and near which he ascended.',
  detail: 'Bethany lies 3 km from Jerusalem on the old Jericho road, "about two miles" as John says (11:18). The Arabic name al-Eizariya preserves "Lazarium", the church of Lazarus, which Eusebius and Jerome describe over the tomb by the fourth century; the rock-cut tomb shown today, reached by steps beside a sixteenth-century mosque, is that traditional site, and the ruins of the Byzantine and Crusader churches stand beside the modern Franciscan chapel. The first-century village was on the slope above. Jesus stayed here with his friends during his final week, walking over the Mount of Olives each morning.',
  christ: 'At Bethany Jesus wept at a friend\'s grave and then called him out of it, showing that he is the resurrection and the life before he himself entered death. Mary\'s costly ointment prepared his body for burial, "and wherever the gospel is proclaimed in the whole world, what she has done will be told" (Mark 14:9).',
  modern: 'Al-Eizariya, West Bank',
  identification: 'Certain; the tomb is traditional from the fourth century.'
},
{
  id: 'bethphage', name: 'Bethphage', original: 'Βηθφαγή Bēthphagē ("house of unripe figs")',
  lat: 31.7761, lon: 35.2528, elev: 780, type: 'town', rank: 3, confidence: 'traditional',
  eras: ['christ'],
  refs: ['Matthew 21:1-9', 'Mark 11:1-10', 'Luke 19:29-38'],
  verse: { ref: 'Matthew 21:1', text: 'Now when they drew near to Jerusalem and came to Bethphage, to the Mount of Olives, then Jesus sent two disciples,' },
  summary: 'The village on the Mount of Olives between Bethany and the summit where the disciples found the donkey and the triumphal entry began.',
  detail: 'Bethphage was the last village before Jerusalem on the road from Jericho, mentioned in the Talmud as marking the city\'s sabbath limit. The Franciscan church (1883) at et-Tur on the mount\'s eastern slope stands on a medieval chapel and preserves a Crusader painted stone said to be the mounting block; the exact location is traditional but must be close. Palm Sunday processions have started from here since the Byzantine period.',
  christ: 'Here Jesus mounted a donkey, the king "humble and mounted on a donkey" of Zechariah 9:9, to be acclaimed with Psalm 118 and then to weep over the city that would reject him.',
  modern: 'Et-Tur, Mount of Olives, Jerusalem',
  identification: 'Traditional; the general position is certain.'
},
{
  id: 'ephraim-town', name: 'Ephraim (town)', alt: ['Ophrah', 'Ephron', 'Aphairema', 'et-Taiyibeh'], original: 'Ἐφραίμ Ephraim',
  lat: 31.9500, lon: 35.3000, elev: 850, type: 'town', rank: 4, confidence: 'probable',
  eras: ['christ'],
  refs: ['John 11:54', '2 Samuel 13:23', '2 Chronicles 13:19'],
  verse: { ref: 'John 11:54', text: 'Jesus therefore no longer walked openly among the Jews, but went from there to the region near the wilderness, to a town called Ephraim, and there he stayed with the disciples.' },
  summary: 'The hill village on the edge of the wilderness where Jesus withdrew with his disciples after raising Lazarus, until the Passover.',
  detail: 'Et-Taiyibeh, a Christian village 20 km north-east of Jerusalem overlooking the Jordan valley, is generally identified with Ephraim, the Ophrah of Benjamin (Joshua 18:23) and Ephron taken by Abijah (2 Chronicles 13:19); Eusebius put Ephraim 20 Roman miles north of Jerusalem. Its position on the edge of the wilderness fits John 11:54 exactly. A Byzantine church of St George stands in ruins there.',
  modern: 'Taybeh, West Bank',
  identification: 'Generally accepted.'
},
{
  id: 'emmaus', name: 'Emmaus', alt: ['Nicopolis', 'Amwas', 'Imwas'], original: 'Ἐμμαοῦς Emmaous',
  lat: 31.8394, lon: 34.9894, elev: 220, type: 'town', rank: 2, confidence: 'disputed',
  alternatives: [
    { name: 'Abu Ghosh (Kiriath-jearim)', lat: 31.8064, lon: 35.1094, note: 'The Crusader identification, 14 km from Jerusalem with a Roman fort and a fine twelfth-century church over a spring. Right distance; no tradition before the twelfth century.' },
    { name: 'El-Qubeibeh', lat: 31.8397, lon: 35.1361, note: 'The Franciscan site since the fourteenth century, about 12 km north-west of Jerusalem, with a Crusader church and a village called Parva Mahomeria. Right distance; the identification is late.' },
    { name: 'Motza (Colonia / Ammaous)', lat: 31.7906, lon: 35.1617, note: 'Josephus mentions a Roman veterans\' colony at Ammaous 30 stadia (6 km) from Jerusalem, and the Talmud names Motza. Closest to Jerusalem, but shorter than Luke\'s 60 stadia unless the round trip is meant.' }
  ],
  eras: ['christ'],
  refs: ['Luke 24:13-35'],
  verse: { ref: 'Luke 24:32', text: 'They said to each other, "Did not our hearts burn within us while he talked to us on the road, while he opened to us the Scriptures?"' },
  summary: 'The village about 60 stadia (11 km) from Jerusalem to which two disciples walked on Easter evening with a stranger who opened the Scriptures to them and was known in the breaking of bread. Four sites compete.',
  detail: 'Luke gives only the name and the distance, and a few manuscripts read 160 stadia (30 km), which is exactly the distance to Emmaus-Nicopolis (Amwas) in the Aijalon valley, the only Emmaus known from other sources (1 Maccabees 3:40; Josephus) and the site Eusebius, Jerome and the whole early church identified; a large Byzantine basilica and baptistery have been excavated there. The objection is that 60 km there and back in an evening is impossible, so the majority reading of 60 stadia points to a site nearer Jerusalem: Abu Ghosh, el-Qubeibeh or Motza. Motza (Colonia) has the strongest ancient attestation as a place called Ammaous at roughly the right distance, and recent excavations have found a first-century Jewish village there.\n\nThe atlas marks Nicopolis as the site with the earliest Christian tradition and lists the rest fairly. The uncertainty does not touch the event: two disciples walked home in despair and came back running with joy.',
  christ: 'The risen Christ showed on the Emmaus road that "everything written about me in the Law of Moses and the Prophets and the Psalms must be fulfilled" (Luke 24:44), and made himself known in the breaking of bread: the pattern of the church\'s worship ever since, word and table.',
  modern: 'Imwas / Latrun, Israel',
  identification: 'Disputed among four sites.'
},
{
  id: 'golgotha', name: 'Golgotha', alt: ['Calvary', 'Place of a Skull', 'Church of the Holy Sepulchre'], original: 'Γολγοθᾶ Golgotha (Aramaic gulgulta, "skull")',
  lat: 31.7785, lon: 35.2296, elev: 760, type: 'site', rank: 2, confidence: 'traditional',
  alternatives: [
    { name: 'Gordon\'s Calvary / Garden Tomb', lat: 31.7838, lon: 35.2300, note: 'A skull-like cliff face north of the Damascus Gate noticed by Otto Thenius (1842) and popularised by General Gordon (1883); the adjacent Garden Tomb is a fine, quiet site, but its tombs are Iron Age (eighth to seventh century BC), not "new" in Jesus\' day (John 19:41), and the tradition is modern.' }
  ],
  eras: ['christ'],
  refs: ['Matthew 27:33-56', 'Mark 15:22-41', 'Luke 23:33-49', 'John 19:17-42', 'Hebrews 13:12'],
  verse: { ref: 'John 19:17-18', text: 'and he went out, bearing his own cross, to the place called The Place of a Skull, which in Aramaic is called Golgotha. There they crucified him, and with him two others, one on either side, and Jesus between them.' },
  summary: 'The place outside the city wall where Jesus was crucified and, in a garden nearby, buried in a new rock-cut tomb. The Church of the Holy Sepulchre has marked both since AD 326.',
  detail: 'The Gospels require a site outside the walls (Hebrews 13:12), near a road (Mark 15:29), visible from a distance, with a garden and new tombs at hand (John 19:41). The Church of the Holy Sepulchre satisfies all of these for the walls of AD 30: it lay in a disused quarry just outside the second wall, and first-century tombs (the "kokhim" tombs behind the Edicule) survive within it, proving it was a burial ground then. Constantine\'s builders in 326 dug away a temple of Venus to reach the tomb, guided by local Christian memory; the site had been inside the walls since Agrippa I (AD 41-44), so a fourth-century invention would not have chosen it. Most archaeologists, including many Protestants, regard the tradition as very probably correct. The rock of Calvary rises 4-5 m inside the church; the tomb itself was reduced to a shelf by successive destructions but was confirmed under the marble cladding during the 2016 restoration.\n\nThe Garden Tomb north of the city, favoured by many Protestant visitors since the nineteenth century, is a beautiful place for reflection but its tombs date from the time of the kings of Judah.',
  christ: 'Here the Lamb of God was offered outside the camp, the veil of the temple was torn, and the centurion said "Truly this man was the Son of God" (Mark 15:39); and here, on the third day, the tomb was empty. Everything in this atlas leads to this place and flows out from it.',
  modern: 'Church of the Holy Sepulchre, Old City, Jerusalem',
  identification: 'Traditional from AD 326, with strong archaeological support.'
},
{
  id: 'gethsemane', name: 'Gethsemane', alt: ['Garden of Gethsemane'], original: 'Γεθσημανί Gethsēmani (Aramaic gat shemanim, "oil press")',
  lat: 31.7794, lon: 35.2397, elev: 690, type: 'site', rank: 2, confidence: 'traditional',
  eras: ['christ'],
  refs: ['Matthew 26:36-56', 'Mark 14:32-52', 'Luke 22:39-53', 'John 18:1-12'],
  verse: { ref: 'Matthew 26:39', text: 'And going a little farther he fell on his face and prayed, saying, "My Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will."' },
  summary: 'The olive grove at the foot of the Mount of Olives across the Kidron from the temple, where Jesus prayed in agony, was betrayed with a kiss and arrested.',
  detail: 'The name means "oil press", so the garden was an olive orchard with a press, perhaps in a cave, which Jesus and the disciples used as a regular meeting place (Luke 22:39; John 18:2). The Franciscan Church of All Nations (1924), built over a fourth-century basilica that Egeria and Jerome describe, encloses a bare rock venerated as the place of the agony; the adjacent grove has olives that carbon dating puts at some 900 years old, with roots that may be older. The Cave of Gethsemane beside Mary\'s Tomb and the Russian and Orthodox gardens nearby show that the exact spot within the grove is not fixed, but the location at the foot of the mount opposite the temple is not in doubt.',
  christ: 'In the garden the second Adam did what the first would not: "not as I will, but as you will". The cup he asked to be spared he drank to the last drop, so that those who trust him need never drink it.',
  modern: 'Kidron valley, Jerusalem',
  identification: 'Traditional from the fourth century; general position certain.'
},
{
  id: 'siloam', name: 'Pool of Siloam', alt: ['Shiloah', 'Siloam'], original: 'שִׁלֹחַ Shiloach; Σιλωάμ ("sent")',
  lat: 31.7708, lon: 35.2359, elev: 620, type: 'site', rank: 3, confidence: 'certain',
  eras: ['divided-kingdom', 'exile-return', 'christ'],
  refs: ['2 Kings 20:20', 'Isaiah 8:6', 'Nehemiah 3:15', 'Luke 13:4', 'John 9:1-11'],
  verse: { ref: 'John 9:7', text: 'and said to him, "Go, wash in the pool of Siloam" (which means Sent). So he went and washed and came back seeing.' },
  summary: 'The pool at the southern tip of the City of David fed by Hezekiah\'s tunnel from the Gihon spring, where Jesus sent a man born blind to wash and he came back seeing. The first-century pool was discovered in 2004.',
  detail: 'Hezekiah cut a 533 m tunnel through the rock to bring the Gihon\'s water inside the city before Sennacherib\'s siege (2 Kings 20:20; 2 Chronicles 32:30); the Siloam Inscription, found in the tunnel in 1880 and now in Istanbul, records in Hebrew the moment the two teams of tunnellers met. The small Byzantine pool at the tunnel\'s mouth was long taken for the Gospel site, until in June 2004 sewer repairs exposed a much larger stepped pool of the Second Temple period a little to the south-east, excavated by Reich and Shukron: a monumental trapezoidal reservoir with three tiers of steps, dated by coins to the first century BC and AD. This is almost certainly the pool of John 9, used by pilgrims for purification before climbing the stepped street, also excavated, to the temple. Excavation of the full pool resumed in 2023.',
  christ: 'The man born blind washed in the pool called "Sent" at the word of the One who was sent (John 9:4, 7), and came back seeing; the sign points to Jesus as the light of the world who opens the eyes of those who admit they are blind.',
  modern: 'City of David, Silwan, Jerusalem',
  identification: 'Certain since 2004.'
},
{
  id: 'bethesda', name: 'Pool of Bethesda', alt: ['Bethzatha', 'Sheep Pool', 'Probatica'], original: 'Βηθεσδά Bēthesda ("house of mercy")',
  lat: 31.7813, lon: 35.2361, elev: 740, type: 'site', rank: 3, confidence: 'certain',
  eras: ['christ'],
  refs: ['John 5:1-15'],
  verse: { ref: 'John 5:2', text: 'Now there is in Jerusalem by the Sheep Gate a pool, in Aramaic called Bethesda, which has five roofed colonnades.' },
  summary: 'The twin pool with five colonnades north of the temple where Jesus healed a man who had been an invalid for thirty-eight years, telling him to take up his bed on the sabbath.',
  detail: 'John\'s description was once dismissed as symbolic, but excavations beside the Church of St Anne (1871-1964) uncovered two large rock-cut reservoirs separated by a central wall, so that colonnades on four sides and one across the middle make exactly five, matching the text. The Copper Scroll from Qumran also refers to "Beth Eshdatain", the twin pools. Beside them were later Roman healing baths dedicated to Asclepius or Serapis, and a Byzantine church straddled the central dam to commemorate the miracle. The pools lay near the Sheep Gate where sacrificial animals were washed. Verse 4 about the angel stirring the water is missing from the earliest manuscripts.',
  christ: 'Jesus chose one man out of the crowd of the helpless and healed him with a word, then declared, "My Father is working until now, and I am working" (John 5:17), claiming equality with God.',
  modern: 'St Anne\'s Church, Muslim Quarter, Jerusalem',
  identification: 'Certain.'
},
{
  id: 'caesarea-maritima', name: 'Caesarea Maritima', alt: ['Caesarea', 'Strato\'s Tower', 'Sebastos'], original: 'Καισάρεια Kaisareia',
  lat: 32.4983, lon: 34.8917, elev: 10, type: 'city', rank: 2, confidence: 'certain',
  eras: ['christ', 'church'],
  refs: ['Acts 8:40', 'Acts 10:1-48', 'Acts 12:19-23', 'Acts 21:8-16', 'Acts 23:23-26:32', 'Acts 27:1'],
  verse: { ref: 'Acts 10:1', text: 'At Caesarea there was a man named Cornelius, a centurion of what was known as the Italian Cohort,' },
  summary: 'Herod\'s great harbour city and the Roman capital of Judea, home of Pilate; where the Gentile Cornelius was baptised, Philip the evangelist lived, Herod Agrippa I died, and Paul was imprisoned two years before sailing for Rome.',
  detail: 'Herod the Great built Caesarea (22-10 BC) on the site of Strato\'s Tower with an artificial harbour (Sebastos) of hydraulic concrete, a temple to Rome and Augustus, a theatre, hippodrome and aqueducts, making it the port and administrative capital of the province. The prefects and procurators lived here, and a reused stone from the theatre found in 1961 bears a dedication by "Pontius Pilatus, Prefect of Judea", the only inscription naming him. Extensive excavations have exposed Herod\'s palace on the promontory, where Paul likely stood before Felix, Festus and Agrippa II (Acts 24-26), the harbour warehouses, and the Byzantine city.\n\nThe gospel came here through Philip; Peter baptised the first Gentile household here; Paul landed and departed here repeatedly. Later it was the home of Origen\'s library and Eusebius\' bishopric.',
  christ: 'At Caesarea the Spirit fell on uncircumcised Gentiles as on the Jews at Pentecost, and Peter concluded, "God shows no partiality" (Acts 10:34). From its harbour Paul sailed to bear witness to Christ before Caesar.',
  modern: 'Caesarea National Park, Israel',
  identification: 'Certain.'
},
{
  id: 'ptolemais', name: 'Ptolemais', alt: ['Acco', 'Akko', 'Acre'], original: 'עַכּוֹ Akko; Πτολεμαΐς Ptolemais',
  lat: 32.9236, lon: 35.0836, elev: 10, type: 'city', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'church'],
  refs: ['Judges 1:31', 'Acts 21:7'],
  verse: { ref: 'Acts 21:7', text: 'When we had finished the voyage from Tyre, we arrived at Ptolemais, and we greeted the brothers and stayed with them for one day.' },
  summary: 'The Canaanite and Phoenician port of Acco that Asher failed to take, renamed Ptolemais by the Ptolemies; Paul spent a day with the church here on his last journey to Jerusalem.',
  detail: 'Tel Akko, east of the old city, was a major Bronze and Iron Age harbour named in Egyptian texts and the Amarna letters; excavations (Dothan, 1973-89, and since) have traced Canaanite ramparts and Phoenician and Persian occupation. The Hellenistic city moved to the peninsula where the Crusader and Ottoman town stands. The bay of Acco is the best natural anchorage on the coast of Israel, and the city was the gateway to Galilee.',
  modern: 'Akko, Israel',
  identification: 'Certain.'
},

// ---------------------------------------------------------------------------
// THE WORLD OF ACTS AND THE LETTERS: SYRIA, CYPRUS, ASIA MINOR, GREECE, ITALY
// ---------------------------------------------------------------------------
{
  id: 'antioch-syria', name: 'Antioch', alt: ['Antioch on the Orontes', 'Antiochia'], original: 'Ἀντιόχεια Antiocheia',
  lat: 36.2021, lon: 36.1603, elev: 67, type: 'city', rank: 1, confidence: 'certain',
  eras: ['intertestamental', 'church'], refs: ['Acts 11:19-26', 'Acts 13:1-3', 'Acts 15:22-35', 'Galatians 2:11-14'],
  verse: { ref: 'Acts 11:26', text: 'And in Antioch the disciples were first called Christians.' },
  summary: 'Third city of the Roman Empire and the first great Gentile church: the base from which Paul was sent out.',
  detail: 'Founded by Seleucus I in 300 BC on the Orontes, twenty-five kilometres from its port Seleucia, Antioch grew to perhaps half a million people, a Greek city with a large Jewish community. Believers scattered by Stephen\'s death preached here to Greeks as well as Jews; Barnabas fetched Saul from Tarsus to teach them, and the church sent famine relief to Jerusalem and then, at the Spirit\'s word, sent Barnabas and Saul themselves.\n\nAll three of Paul\'s missionary journeys began at Antioch. The confrontation with Peter over eating with Gentiles (Galatians 2) happened here. Little of the ancient city is visible under modern Antakya, badly damaged by earthquake in 2023, but its mosaics fill the local museum.',
  christ: 'At Antioch the gospel proved it could cross every cultural border. A church of Jews and Greeks together, taught by Barnabas and Paul, became the launch point of the mission to the nations Jesus commanded.',
  modern: 'Antakya, Turkey', identification: 'Certain.'
},
{
  id: 'seleucia', name: 'Seleucia Pieria', alt: ['Seleucia'], original: 'Σελεύκεια',
  lat: 36.1189, lon: 35.9297, elev: 20, type: 'town', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 13:4'],
  summary: 'The harbour of Antioch, where Barnabas and Saul took ship for Cyprus.',
  detail: 'Built by Seleucus I as the port for his new capital, Seleucia sat at the mouth of the Orontes under Mount Pieria. Its great rock-cut flood channel, the Tunnel of Titus, still runs above the site. From here the first missionary journey put to sea in about AD 47.',
  modern: 'Çevlik / Samandağ, Turkey', identification: 'Certain.'
},
{
  id: 'cyprus', name: 'Cyprus', alt: ['Kittim', 'Chittim'], original: 'Κύπρος Kypros',
  lat: 35.05, lon: 33.20, type: 'island', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 4:36', 'Acts 11:19-20', 'Acts 13:4-12', 'Acts 15:39'],
  summary: 'Barnabas\'s home island and the first stop of the first missionary journey.',
  detail: 'The Old Testament knows the island as Kittim (Genesis 10:4, Isaiah 23:1). A Roman senatorial province from 22 BC, it had Jewish communities in its cities and copper mines in its hills. Barnabas, a Levite from Cyprus, later returned with Mark after parting from Paul.',
  modern: 'Cyprus', identification: 'Certain.'
},
{
  id: 'salamis', name: 'Salamis', original: 'Σαλαμίς',
  lat: 35.1836, lon: 33.9000, elev: 10, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 13:5'],
  summary: 'Chief city of eastern Cyprus, where Barnabas and Saul first preached in the synagogues.',
  detail: 'Salamis had a large enough Jewish population for Luke to speak of "synagogues" in the plural. Its ruins, north of Famagusta, include a gymnasium, theatre and basilicas; the traditional tomb of Barnabas lies nearby.',
  modern: 'near Famagusta, Cyprus', identification: 'Certain.'
},
{
  id: 'paphos', name: 'Paphos', original: 'Πάφος',
  lat: 34.7570, lon: 32.4060, elev: 15, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 13:6-13'],
  summary: 'Roman capital of Cyprus, where the proconsul Sergius Paulus believed and Saul is first called Paul.',
  detail: 'Nea Paphos was the seat of the proconsul; Old Paphos, inland, had the famous sanctuary of Aphrodite. Here the magician Bar-Jesus (Elymas) opposed the missionaries and was struck blind, and Luke\'s narrative shifts from "Saul" to "Paul" and from "Barnabas and Saul" to "Paul and his companions". Fine Roman mosaics survive in the villas by the harbour.',
  modern: 'Kato Paphos, Cyprus', identification: 'Certain.'
},
{
  id: 'perga', name: 'Perga', original: 'Πέργη',
  lat: 36.9614, lon: 30.8540, elev: 40, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 13:13-14', 'Acts 14:25'],
  summary: 'City of Pamphylia where John Mark turned back, and where Paul preached on the return leg.',
  detail: 'Perga lay a few kilometres up the Cestrus river from the coast, a wealthy city with a famous temple of Artemis. Mark left the party here, a desertion Paul remembered (Acts 15:38). The colonnaded street, baths and stadium are among the best preserved in Turkey.',
  modern: 'Aksu, near Antalya, Turkey', identification: 'Certain.'
},
{
  id: 'attalia', name: 'Attalia', original: 'Ἀττάλεια',
  lat: 36.8841, lon: 30.7056, elev: 30, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 14:25-26'],
  summary: 'The port from which Paul and Barnabas sailed home to Antioch at the end of the first journey.',
  detail: 'Founded by Attalus II of Pergamum about 150 BC, Attalia was the main harbour of Pamphylia. Hadrian\'s Gate and the old harbour still mark the ancient town at the heart of modern Antalya.',
  modern: 'Antalya, Turkey', identification: 'Certain.'
},
{
  id: 'antioch-pisidia', name: 'Antioch of Pisidia', alt: ['Pisidian Antioch'], original: 'Ἀντιόχεια τῆς Πισιδίας',
  lat: 38.3061, lon: 31.1892, elev: 1200, type: 'city', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 13:14-52', 'Acts 14:21', '2 Timothy 3:11'],
  verse: { ref: 'Acts 13:47', text: 'I have made you a light for the Gentiles, that you may bring salvation to the ends of the earth.' },
  summary: 'A Roman colony on the Anatolian plateau where Paul preached his first recorded sermon and turned openly to the Gentiles.',
  detail: 'Refounded by Augustus as a colony for veterans, Antioch stood on the Via Sebaste at 1,200 metres. Paul\'s synagogue sermon (Acts 13) is the longest Luke records; when the Jewish leaders rejected it, he and Barnabas declared, "we are turning to the Gentiles". Excavations have uncovered the imperial sanctuary, a church traditionally on the synagogue\'s site, and an inscription naming Sergius Paulus\'s family, which may explain why Paul came here from Cyprus.',
  christ: 'Paul\'s sermon here traces Israel\'s story from Egypt to David and lands on the risen Jesus: "through this man forgiveness of sins is proclaimed to you" (Acts 13:38).',
  modern: 'Yalvaç, Turkey', identification: 'Certain.'
},
{
  id: 'iconium', name: 'Iconium', original: 'Ἰκόνιον',
  lat: 37.8746, lon: 32.4932, elev: 1020, type: 'city', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 13:51-14:6', 'Acts 16:2', '2 Timothy 3:11'],
  summary: 'Prosperous city on the plateau where Paul and Barnabas preached long and were nearly stoned.',
  detail: 'Iconium sat in a well-watered oasis on the road east from Antioch. The apostles "remained for a long time" and "a great number of both Jews and Greeks believed" before a plot to stone them drove them on to Lystra. The city later produced the apocryphal Acts of Paul and Thecla. It is modern Konya, a large city with almost nothing of the Roman town above ground.',
  modern: 'Konya, Turkey', identification: 'Certain.'
},
{
  id: 'lystra', name: 'Lystra', original: 'Λύστρα',
  lat: 37.5783, lon: 32.4533, elev: 1150, type: 'town', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 14:6-20', 'Acts 16:1-3', '2 Timothy 3:11'],
  summary: 'Timothy\'s home town, where Paul healed a lame man, was hailed as Hermes and then stoned.',
  detail: 'A small Roman colony off the main road, Lystra spoke Lycaonian rather than Greek, which is why the crowd\'s reaction to the healing baffled the apostles until it was too late. Paul was stoned and left for dead, yet returned on the next journey and took Timothy from here. The mound at Hatunsaray was identified by an inscription found in 1885.',
  christ: 'Paul rose from the stones of Lystra and went straight back in to strengthen the disciples: "through many tribulations we must enter the kingdom of God" (Acts 14:22).',
  modern: 'Hatunsaray (Zoldera), Turkey', identification: 'Certain (inscription).'
},
{
  id: 'derbe', name: 'Derbe', original: 'Δέρβη',
  lat: 37.3500, lon: 33.3600, elev: 1000, type: 'town', rank: 3, confidence: 'probable',
  eras: ['church'], refs: ['Acts 14:20-21', 'Acts 16:1', 'Acts 20:4'],
  summary: 'The easternmost town of the first journey, home of Paul\'s companion Gaius.',
  detail: 'After the stoning at Lystra, Paul and Barnabas went on to Derbe, "made many disciples", and then turned back to revisit every church. Two inscriptions found in the 1950s and 60s place it at Kerti Hüyük near Karaman rather than at earlier proposed sites.',
  modern: 'Kerti Hüyük, near Karaman, Turkey', identification: 'Probable; supported by two inscriptions naming the city.'
},
{
  id: 'tarsus', name: 'Tarsus', original: 'Ταρσός',
  lat: 36.9177, lon: 34.8949, elev: 20, type: 'city', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 9:11, 30', 'Acts 11:25', 'Acts 21:39', 'Acts 22:3'],
  verse: { ref: 'Acts 21:39', text: 'I am a Jew, from Tarsus in Cilicia, a citizen of no obscure city.' },
  summary: 'Paul\'s birthplace: capital of Cilicia, a university city at the foot of the Cilician Gates.',
  detail: 'Tarsus stood on the Cydnus where the road from Syria climbs through the Taurus by the Cilician Gates into Anatolia. It was a centre of Stoic philosophy and had granted Roman citizenship to some of its Jewish families, which is how Paul came to be born a citizen. He returned here after his escape from Jerusalem and was fetched from here to Antioch by Barnabas. A stretch of Roman street and "Cleopatra\'s Gate" survive in the modern city.',
  modern: 'Tarsus, Turkey', identification: 'Certain.'
},
{
  id: 'cilicia', name: 'Cilicia', original: 'Κιλικία',
  lat: 37.0, lon: 35.0, type: 'region', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 6:9', 'Acts 15:23, 41', 'Galatians 1:21'],
  summary: 'Paul\'s home region, the fertile plain between the Taurus mountains and the sea.',
  detail: 'Cilicia had two parts: the rugged west ("Rough Cilicia") and the rich plain around Tarsus. Paul preached here in the years after his conversion, and the Cilician Gates north of Tarsus were his road to Galatia on the second and third journeys.',
  modern: 'Çukurova, southern Turkey', identification: 'Certain.'
},
{
  id: 'galatia', name: 'Galatia', original: 'Γαλατία',
  lat: 39.3, lon: 32.5, type: 'region', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 16:6', 'Acts 18:23', 'Galatians 1:2', '1 Peter 1:1'],
  summary: 'Roman province of central Anatolia, home of the churches that received Paul\'s letter to the Galatians.',
  detail: 'The name comes from the Gauls who settled around Ancyra in the third century BC. Rome\'s province of Galatia (25 BC) was far larger, taking in Pisidian Antioch, Iconium, Lystra and Derbe to the south. Most scholars now hold that "the churches of Galatia" are those southern cities of the first journey, not the ethnic Gauls of the north.',
  modern: 'Central Anatolia around Ankara and Konya, Turkey', identification: 'Certain (the province); the "North Galatian" theory places the churches further north.'
},
{
  id: 'cappadocia', name: 'Cappadocia', original: 'Καππαδοκία',
  lat: 38.6, lon: 35.0, type: 'region', rank: 4, confidence: 'certain',
  eras: ['exile-return', 'church'], refs: ['Acts 2:9', '1 Peter 1:1'],
  summary: 'High plateau of eastern Anatolia; its Jews heard Peter at Pentecost and its Christians received Peter\'s first letter.',
  detail: 'A Persian satrapy, then a client kingdom, Cappadocia became a Roman province in AD 17. Paul never went there in Acts, yet Peter addresses believers in Cappadocia within a generation, evidence of how fast the gospel spread beyond the apostles\' own routes.',
  modern: 'Kayseri and Nevşehir, Turkey', identification: 'Certain.'
},
{
  id: 'bithynia', name: 'Bithynia', original: 'Βιθυνία',
  lat: 40.4, lon: 30.0, type: 'region', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 16:7', '1 Peter 1:1'],
  summary: 'The region Paul was forbidden by the Spirit to enter, turning him west to Troas and Europe.',
  detail: 'Bithynia lay along the southern shore of the Black Sea and the Sea of Marmara, later famous for Nicaea and Chalcedon. Paul and Silas "attempted to go into Bithynia, but the Spirit of Jesus did not allow them"; churches nonetheless existed there by the time of 1 Peter, and Pliny found Christians numerous there in AD 112.',
  modern: 'North-western Turkey', identification: 'Certain.'
},
{
  id: 'asia', name: 'Asia', alt: ['Province of Asia'], original: 'Ἀσία',
  lat: 38.6, lon: 28.6, type: 'region', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 16:6', 'Acts 19:10', '1 Corinthians 16:19', 'Revelation 1:4'],
  summary: 'The wealthy Roman province of western Anatolia, with Ephesus as its capital and the seven churches of Revelation in its cities.',
  detail: 'Formed from the kingdom of Pergamum in 133 BC, Asia was the richest of the eastern provinces. Paul was first prevented from preaching here, then spent three years in Ephesus until "all the residents of Asia heard the word of the Lord". John\'s Revelation is addressed to seven of its churches.',
  modern: 'Western Turkey', identification: 'Certain.'
},
{
  id: 'troas', name: 'Troas', alt: ['Alexandria Troas'], original: 'Τρῳάς',
  lat: 39.7517, lon: 26.1583, elev: 30, type: 'city', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 16:8-11', 'Acts 20:5-12', '2 Corinthians 2:12', '2 Timothy 4:13'],
  verse: { ref: 'Acts 16:9', text: 'A man of Macedonia was standing there, urging him and saying, "Come over to Macedonia and help us."' },
  summary: 'The Aegean port where Paul saw the vision of the Macedonian and where Eutychus fell from the window.',
  detail: 'Alexandria Troas, near ancient Troy, was a Roman colony and the main crossing point to Europe. Paul\'s vision here took the gospel across to Macedonia; on the third journey he preached until midnight and raised Eutychus. He left his cloak and books with Carpus here. The harbour has silted, but the bath-gymnasium and city walls remain among the olives.',
  christ: 'At Troas the gospel crossed from Asia into Europe. Luke\'s "we" begins here too: the author of Acts joins the party.',
  modern: 'Dalyan, Çanakkale, Turkey', identification: 'Certain.'
},
{
  id: 'assos', name: 'Assos', original: 'Ἄσσος',
  lat: 39.4917, lon: 26.3369, elev: 230, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 20:13-14'],
  summary: 'Harbour town where Paul, having walked overland from Troas, rejoined the ship.',
  detail: 'Assos sits on a volcanic crag above its harbour, with a Doric temple of Athena on the summit and a well-preserved theatre. Paul walked the thirty kilometres from Troas by road while the ship rounded the cape.',
  modern: 'Behramkale, Turkey', identification: 'Certain.'
},
{
  id: 'mitylene', name: 'Mitylene', alt: ['Mytilene'], original: 'Μιτυλήνη',
  lat: 39.1100, lon: 26.5550, elev: 10, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 20:14'],
  summary: 'Chief city of Lesbos, an overnight stop on Paul\'s voyage to Jerusalem.',
  detail: 'Coasting vessels anchored each night; Luke lists the stops with a sailor\'s precision. Mitylene, home of the poet Sappho, had two harbours joined by a channel.',
  modern: 'Mytilene, Lesbos, Greece', identification: 'Certain.'
},
{
  id: 'macedonia', name: 'Macedonia', original: 'Μακεδονία',
  lat: 40.8, lon: 22.8, type: 'region', rank: 2, confidence: 'certain',
  eras: ['intertestamental', 'church'], refs: ['Acts 16:9-12', 'Acts 20:1-3', '2 Corinthians 8:1-5', 'Philippians 4:15'],
  summary: 'Alexander\'s homeland and the first European province to receive the gospel: Philippi, Thessalonica, Berea.',
  detail: 'Macedonia became a Roman province in 146 BC, crossed east to west by the Via Egnatia. The Macedonian churches were poor but generous, giving "beyond their means" to the Jerusalem collection and supporting Paul again and again.',
  modern: 'Northern Greece', identification: 'Certain.'
},
{
  id: 'neapolis', name: 'Neapolis', original: 'Νεάπολις',
  lat: 40.9397, lon: 24.4069, elev: 10, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 16:11'],
  summary: 'The port of Philippi where Paul first set foot in Europe.',
  detail: 'Neapolis was the Aegean terminus of the Via Egnatia, sixteen kilometres from Philippi. The aqueduct and acropolis of the later Byzantine town dominate modern Kavala.',
  modern: 'Kavala, Greece', identification: 'Certain.'
},
{
  id: 'philippi', name: 'Philippi', original: 'Φίλιπποι',
  lat: 41.0131, lon: 24.2864, elev: 60, type: 'city', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 16:12-40', 'Acts 20:6', 'Philippians 1:1-5', '1 Thessalonians 2:2'],
  verse: { ref: 'Philippians 1:6', text: 'He who began a good work in you will bring it to completion at the day of Jesus Christ.' },
  summary: 'Roman colony on the Via Egnatia where Lydia believed by the river, the jailer was converted, and the first European church was born.',
  detail: 'Named for Philip II of Macedon and refounded by Augustus as a colony for veterans of the civil wars, Philippi was proudly Roman: Latin inscriptions, magistrates called strategoi, and citizens who could demand their rights, as Paul did. With no synagogue, the believers first met at the river Gangites. The forum, the theatre and the traditional "prison of Paul" lie beside the modern road; a basilica marks Lydia\'s baptism site at the river.\n\nThe church Paul founded here stayed his most affectionate: the letter to the Philippians, written from prison, is full of joy.',
  christ: 'The jailer\'s question, "What must I do to be saved?", and its answer, "Believe in the Lord Jesus", were spoken in this city at midnight (Acts 16:30-31).',
  modern: 'Filippoi, near Kavala, Greece', identification: 'Certain.'
},
{
  id: 'amphipolis', name: 'Amphipolis', original: 'Ἀμφίπολις',
  lat: 40.8236, lon: 23.8433, elev: 60, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 17:1'],
  summary: 'First night\'s stop on the Via Egnatia after Philippi.',
  detail: 'Capital of the first district of Macedonia, on a bend of the Strymon. The colossal marble Lion of Amphipolis stands by the bridge, and a vast Macedonian tomb was uncovered nearby in 2012.',
  modern: 'Amfipoli, Greece', identification: 'Certain.'
},
{
  id: 'apollonia', name: 'Apollonia', original: 'Ἀπολλωνία',
  lat: 40.6270, lon: 23.4490, elev: 40, type: 'town', rank: 4, confidence: 'probable',
  eras: ['church'], refs: ['Acts 17:1'],
  summary: 'Second night\'s stop between Philippi and Thessalonica.',
  detail: 'A small town of Mygdonia on the Via Egnatia south of Lake Bolbe. Paul and Silas passed through without recorded preaching, covering the 150 kilometres from Philippi to Thessalonica in about three days.',
  modern: 'Nea Apollonia, Greece', identification: 'Probable.'
},
{
  id: 'thessalonica', name: 'Thessalonica', original: 'Θεσσαλονίκη',
  lat: 40.6403, lon: 22.9439, elev: 20, type: 'city', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 17:1-9', '1 Thessalonians 1:1-10', '2 Thessalonians 1:1', 'Philippians 4:16'],
  verse: { ref: '1 Thessalonians 1:9', text: 'You turned to God from idols to serve the living and true God.' },
  summary: 'Capital of Macedonia and a free city, where Paul preached three sabbaths and was accused of proclaiming "another king, Jesus".',
  detail: 'Founded in 316 BC and named for Alexander\'s half-sister, Thessalonica sat where the Via Egnatia met the sea. As a free city it kept its own magistrates, the politarchs, a title Luke uses accurately and which inscriptions confirm. The mob\'s charge that the Christians were "turning the world upside down" was political: Caesar\'s decrees against predicting a change of ruler. Paul wrote two letters back within months. The Roman forum and the later Rotunda and Galerius arch stand in the modern city centre.',
  christ: 'Paul\'s first letters to this young church are full of the return of Christ: "the Lord himself will descend from heaven with a cry of command" (1 Thessalonians 4:16).',
  modern: 'Thessaloniki, Greece', identification: 'Certain.'
},
{
  id: 'berea', name: 'Berea', alt: ['Beroea'], original: 'Βέροια',
  lat: 40.5240, lon: 22.2040, elev: 130, type: 'town', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 17:10-15', 'Acts 20:4'],
  verse: { ref: 'Acts 17:11', text: 'They received the word with all eagerness, examining the Scriptures daily to see if these things were so.' },
  summary: 'Where the Jews "examined the Scriptures daily" and many believed, including Sopater who later travelled with Paul.',
  detail: 'Berea lay off the Via Egnatia at the foot of Mount Bermion, a quieter town where Paul could preach after being hurried out of Thessalonica. Its synagogue community was more receptive and more careful than most. A modern monument marks the traditional place of Paul\'s preaching.',
  modern: 'Veria, Greece', identification: 'Certain.'
},
{
  id: 'achaia', name: 'Achaia', original: 'Ἀχαΐα',
  lat: 38.2, lon: 22.4, type: 'region', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 18:12', 'Acts 18:27', 'Romans 15:26', '2 Corinthians 1:1'],
  summary: 'Roman province of southern Greece, governed from Corinth, where Gallio ruled and Paul spent eighteen months.',
  detail: 'Achaia covered the Peloponnese and central Greece including Athens. A senatorial province governed by a proconsul, its capital was Corinth, not Athens. An inscription from Delphi dates Gallio\'s proconsulship to AD 51-52, anchoring Paul\'s chronology.',
  modern: 'Southern Greece', identification: 'Certain.'
},
{
  id: 'athens', name: 'Athens', original: 'Ἀθῆναι',
  lat: 37.9715, lon: 23.7257, elev: 150, type: 'city', rank: 1, confidence: 'certain',
  eras: ['intertestamental', 'church'], refs: ['Acts 17:15-34', '1 Thessalonians 3:1'],
  verse: { ref: 'Acts 17:24', text: 'The God who made the world and everything in it, being Lord of heaven and earth, does not live in temples made by man.' },
  summary: 'The intellectual capital of the Greek world, where Paul reasoned in the agora and preached the unknown God on the Areopagus.',
  detail: 'By Paul\'s day Athens was a university town living on its past, "very religious" and full of altars, including some "to an unknown god". Paul debated Stoics and Epicureans in the agora and was brought before the Areopagus council. His speech (Acts 17) quotes their poets, names the Creator, and ends with the resurrection, at which most laughed; but Dionysius the Areopagite and Damaris believed. The Acropolis, the agora and the Areopagus rock all stand where he saw them.',
  christ: 'Paul told the philosophers that God "has fixed a day on which he will judge the world in righteousness by a man whom he has appointed; and of this he has given assurance to all by raising him from the dead" (Acts 17:31).',
  modern: 'Athens, Greece', identification: 'Certain.'
},
{
  id: 'corinth', name: 'Corinth', original: 'Κόρινθος',
  lat: 37.9059, lon: 22.8797, elev: 80, type: 'city', rank: 1, confidence: 'certain',
  eras: ['church'], refs: ['Acts 18:1-18', 'Acts 20:2-3', '1 Corinthians 1:2', '2 Corinthians 1:1', 'Romans 16:23'],
  verse: { ref: '1 Corinthians 2:2', text: 'For I decided to know nothing among you except Jesus Christ and him crucified.' },
  summary: 'The great port city on the isthmus, wealthy and notoriously loose, where Paul spent eighteen months and founded the church he wrote to most.',
  detail: 'Destroyed by Rome in 146 BC and refounded by Julius Caesar in 44 BC, Corinth controlled two harbours, Lechaeum on the west and Cenchreae on the east, and the diolkos over which ships were dragged across the isthmus. It was capital of Achaia, site of the Isthmian Games, and a byword for vice. Paul lodged with Aquila and Priscilla, worked as a tentmaker, preached in the synagogue and then in the house of Titius Justus, and was brought before Gallio at the bema in the forum, which survives. An inscription of "Erastus" the aedile may name the Erastus of Romans 16:23. The temple of Apollo\'s columns still stand under Acrocorinth.',
  christ: 'To this proud, divided, immoral city Paul wrote the hymn to love (1 Corinthians 13) and the great chapter on the resurrection (1 Corinthians 15).',
  modern: 'Archaia Korinthos, Greece', identification: 'Certain.'
},
{
  id: 'cenchreae', name: 'Cenchreae', original: 'Κεγχρεαί',
  lat: 37.8836, lon: 22.9939, elev: 5, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 18:18', 'Romans 16:1'],
  summary: 'Corinth\'s eastern harbour, where Paul cut his hair for a vow and Phoebe served the church.',
  detail: 'The Saronic port of Corinth, from which Paul sailed for Ephesus. Phoebe, "a servant of the church at Cenchreae", probably carried the letter to the Romans. The harbour moles are now partly underwater.',
  modern: 'Kechries, Greece', identification: 'Certain.'
},
{
  id: 'ephesus', name: 'Ephesus', original: 'Ἔφεσος',
  lat: 37.9411, lon: 27.3419, elev: 20, type: 'city', rank: 1, confidence: 'certain',
  eras: ['church'], refs: ['Acts 18:19-21', 'Acts 19:1-41', 'Acts 20:17-38', 'Ephesians 1:1', '1 Timothy 1:3', 'Revelation 2:1-7'],
  verse: { ref: 'Acts 19:20', text: 'So the word of the Lord continued to increase and prevail mightily.' },
  summary: 'Capital of Asia and home of the temple of Artemis; Paul\'s base for three years, later John\'s city and the first of the seven churches.',
  detail: 'Ephesus was a city of a quarter of a million with a harbour, a theatre for 24,000, and the Artemision, one of the seven wonders. Paul taught daily in the hall of Tyrannus, healed, saw magic books burned, and provoked the riot of the silversmiths in the theatre, which still stands. Timothy later pastored here, and tradition places John\'s old age and Mary\'s last years in the city. The harbour has silted; the ruins now lie eight kilometres from the sea.\n\nRevelation praises the church\'s endurance and rebukes its lost first love.',
  christ: 'Paul\'s farewell to the Ephesian elders on the beach at Miletus and his letter to the Ephesians give the fullest picture of the Church as Christ\'s body and bride.',
  modern: 'Selçuk, Turkey', identification: 'Certain.'
},
{
  id: 'miletus', name: 'Miletus', original: 'Μίλητος',
  lat: 37.5304, lon: 27.2759, elev: 10, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 20:15-38', '2 Timothy 4:20'],
  verse: { ref: 'Acts 20:28', text: 'Pay careful attention to yourselves and to all the flock... to care for the church of God, which he obtained with his own blood.' },
  summary: 'Ancient Ionian port where Paul summoned the Ephesian elders and said farewell, knowing he would not see them again.',
  detail: 'Miletus had been the greatest Greek city of Asia before the Persian wars, home of Thales and Anaximander. By Paul\'s time the Maeander was silting its four harbours; today the theatre looks out over dry fields where ships once anchored. Trophimus was left ill here on a later visit.',
  modern: 'Balat, Turkey', identification: 'Certain.'
},
{
  id: 'cos', name: 'Cos', alt: ['Kos'], original: 'Κῶς',
  lat: 36.8930, lon: 27.2880, elev: 5, type: 'island', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 21:1'],
  summary: 'Island of Hippocrates, an overnight anchorage on the voyage from Miletus to Patara.',
  detail: 'Home of the great medical school of the Asclepieion. Luke, himself a physician, records the stop in a single word.',
  modern: 'Kos, Greece', identification: 'Certain.'
},
{
  id: 'rhodes', name: 'Rhodes', original: 'Ῥόδος',
  lat: 36.4450, lon: 28.2278, elev: 10, type: 'island', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 21:1'],
  summary: 'Great trading island at the corner of the Aegean, passed on Paul\'s way to Jerusalem.',
  detail: 'Rhodes had been a naval and commercial power; its Colossus had fallen in an earthquake two centuries before Paul. The Old Testament may know it as Dodanim/Rodanim (Genesis 10:4).',
  modern: 'Rhodes, Greece', identification: 'Certain.'
},
{
  id: 'patara', name: 'Patara', original: 'Πάταρα',
  lat: 36.2600, lon: 29.3150, elev: 5, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 21:1-2'],
  summary: 'Lycian port where Paul changed to a ship bound directly for Phoenicia.',
  detail: 'Capital of the Lycian League, with an oracle of Apollo and a lighthouse recently re-erected. From here the open-sea crossing to Tyre took about five days.',
  modern: 'Gelemiş, Turkey', identification: 'Certain.'
},
{
  id: 'myra', name: 'Myra', original: 'Μύρα',
  lat: 36.2600, lon: 29.9820, elev: 20, type: 'town', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 27:5-6'],
  summary: 'Lycian port where the centurion Julius put Paul aboard an Alexandrian grain ship for Italy.',
  detail: 'Myra\'s harbour at Andriace was a regular stop for the great grain ships from Egypt to Rome, which used the prevailing winds to sail north to Asia Minor and then west. Its rock-cut tombs and theatre survive; it was later the see of St Nicholas.',
  modern: 'Demre, Turkey', identification: 'Certain.'
},
{
  id: 'cnidus', name: 'Cnidus', original: 'Κνίδος',
  lat: 36.6858, lon: 27.3750, elev: 20, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 27:7'],
  summary: 'Cape city on a long peninsula, reached "with difficulty" against the wind before the ship turned south for Crete.',
  detail: 'Cnidus sat at the tip of a peninsula with two harbours back to back. Head winds from the north-west stopped the grain ship here, and the captain chose to run under the lee of Crete rather than wait.',
  modern: 'Tekir, Datça peninsula, Turkey', identification: 'Certain.'
},
{
  id: 'crete', name: 'Crete', alt: ['Caphtor'], original: 'Κρήτη',
  lat: 35.2, lon: 24.9, type: 'island', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 2:11', 'Acts 27:7-21', 'Titus 1:5-12'],
  summary: 'Long mountainous island where Paul\'s ship sheltered before the storm, and where Titus later organised the churches.',
  detail: 'Crete, the Caphtor of the Philistines\' origin (Amos 9:7), had Jewish communities and later a church to which Paul sent Titus. Sailing along its southern coast, the grain ship reached Fair Havens too late in the season to go on safely.',
  modern: 'Crete, Greece', identification: 'Certain.'
},
{
  id: 'fair-havens', name: 'Fair Havens', alt: ['Kaloi Limenes'], original: 'Καλοὶ Λιμένες',
  lat: 34.9333, lon: 24.7900, elev: 5, type: 'site', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 27:8-12'],
  verse: { ref: 'Acts 27:10', text: 'Sirs, I perceive that the voyage will be with injury and much loss, not only of the cargo and the ship, but also of our lives.' },
  summary: 'Small bay on Crete\'s south coast where Paul advised wintering and was overruled.',
  detail: 'The bay still bears the name Kaloi Limenes. It was too open for a winter anchorage, so the majority chose to try for Phoenix, a better harbour fifty kilometres west. The town of Lasea lay just inland, exactly as Luke says.',
  modern: 'Kaloi Limenes, Crete', identification: 'Certain (name preserved).'
},
{
  id: 'cauda', name: 'Cauda', alt: ['Clauda', 'Gavdos'], original: 'Καῦδα',
  lat: 34.8400, lon: 24.0900, elev: 100, type: 'island', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 27:16-17'],
  summary: 'Small island in whose lee the crew hauled in the boat and undergirded the ship as the storm took hold.',
  detail: 'Gavdos is the southernmost point of Europe. Running before the "northeaster", the crew used its brief shelter to secure the ship, then drifted for fourteen days across the Adriatic to Malta.',
  modern: 'Gavdos, Greece', identification: 'Certain.'
},
{
  id: 'adria', name: 'Sea of Adria', alt: ['Adriatic', 'Ionian Sea'], original: 'Ἀδρίας',
  lat: 36.3, lon: 17.8, type: 'sea', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 27:27'],
  summary: 'In the first century "Adria" meant the whole central Mediterranean between Crete, Sicily and Italy, across which Paul\'s ship drifted for two weeks.',
  detail: 'Not only the modern Adriatic: ancient writers used the name for the sea south of Italy as far as Crete and Malta. Luke\'s fourteen nights of drifting from Cauda to Malta match a westward drift of about 750 kilometres at a little over a knot, which is what a ship hove-to in a northeaster would make.',
  modern: 'Ionian Sea and central Mediterranean', identification: 'Certain (ancient usage).'
},
{
  id: 'malta', name: 'Malta', alt: ['Melita'], original: 'Μελίτη',
  lat: 35.9500, lon: 14.4000, elev: 20, type: 'island', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 27:39-28:10'],
  verse: { ref: 'Acts 28:2', text: 'The native people showed us unusual kindness, for they kindled a fire and welcomed us all.' },
  summary: 'Where the ship broke up on a sandbar and all 276 aboard were saved; Paul shook off a viper and healed the father of Publius.',
  detail: 'St Paul\'s Bay on the north-east coast is the traditional landing place, and its topography, with a bay, a beach and a place "where two seas met", fits Luke\'s account. The islanders\' Punic dialect is why Luke calls them barbaroi, non-Greek speakers. Paul spent three winter months here; Publius, "the chief man of the island", bears a title confirmed by inscriptions.',
  modern: 'Malta', identification: 'Certain (the island); the exact bay is traditional.'
},
{
  id: 'syracuse', name: 'Syracuse', original: 'Συράκουσαι',
  lat: 37.0755, lon: 15.2866, elev: 10, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 28:12'],
  summary: 'Greatest city of Sicily, where the ship carrying Paul to Rome waited three days for a wind.',
  detail: 'Once the rival of Athens and Carthage, Syracuse had a great harbour and the quarries where Athenian prisoners died in 413 BC. Luke records the stop without incident; a catacomb of St John and a tradition of Paul\'s preaching grew up later.',
  modern: 'Siracusa, Sicily, Italy', identification: 'Certain.'
},
{
  id: 'rhegium', name: 'Rhegium', original: 'Ῥήγιον',
  lat: 38.1100, lon: 15.6500, elev: 10, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 28:13'],
  summary: 'Port on the toe of Italy at the Strait of Messina, from which a south wind carried the ship to Puteoli in a day.',
  detail: 'Ships waited at Rhegium for a favourable wind to pass the strait between Scylla and Charybdis. The 300 kilometres to Puteoli in a day and a night implies a fine following breeze.',
  modern: 'Reggio Calabria, Italy', identification: 'Certain.'
},
{
  id: 'puteoli', name: 'Puteoli', original: 'Ποτίολοι',
  lat: 40.8260, lon: 14.1230, elev: 10, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 28:13-14'],
  summary: 'Italy\'s great grain port on the Bay of Naples, where Paul landed and found brothers already waiting.',
  detail: 'Before Ostia\'s harbour was built, the Alexandrian grain fleet unloaded at Puteoli. Christians were already here in AD 60, evidence of how far the faith had travelled without any apostle. The Roman market and amphitheatre survive in Pozzuoli, in the shadow of Vesuvius.',
  modern: 'Pozzuoli, Italy', identification: 'Certain.'
},
{
  id: 'forum-of-appius', name: 'Forum of Appius', original: 'Ἀππίου Φόρον',
  lat: 41.4600, lon: 12.9600, elev: 10, type: 'site', rank: 4, confidence: 'probable',
  eras: ['church'], refs: ['Acts 28:15'],
  summary: 'Market town on the Appian Way, 65 kilometres from Rome, where believers from the city came out to meet Paul.',
  detail: 'A staging post at the northern end of the canal through the Pontine Marshes, mocked by Horace for its bad water and boatmen. That Roman Christians walked two days to greet a prisoner says much about how Paul\'s letter had been received.',
  modern: 'Borgo Faiti, near Latina, Italy', identification: 'Probable (Roman milestone distance).'
},
{
  id: 'three-taverns', name: 'Three Taverns', original: 'Τρεῖς Ταβέρναι',
  lat: 41.5900, lon: 12.8300, elev: 60, type: 'site', rank: 4, confidence: 'probable',
  eras: ['church'], refs: ['Acts 28:15'],
  summary: 'Second meeting place on the Appian Way, 50 kilometres from Rome. "On seeing them, Paul thanked God and took courage."',
  detail: 'Tres Tabernae was a road station where the Appian Way was crossed by the road from Antium. Cicero mentions it. The site is near modern Cisterna di Latina.',
  modern: 'near Cisterna di Latina, Italy', identification: 'Probable.'
},
{
  id: 'rome', name: 'Rome', original: 'Ῥώμη',
  lat: 41.8925, lon: 12.4853, elev: 20, type: 'city', rank: 1, confidence: 'certain',
  eras: ['intertestamental', 'christ', 'church'], refs: ['Acts 28:14-31', 'Romans 1:7-15', 'Philippians 1:13', '2 Timothy 1:17', 'Revelation 17-18'],
  verse: { ref: 'Romans 1:16', text: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek.' },
  summary: 'Capital of the world. Paul preached here under house arrest for two years, and here, by strong tradition, both Peter and Paul died under Nero.',
  detail: 'A city of a million, ruling from Britain to the Euphrates. Jews had lived in Rome since the second century BC; Christians were there before any apostle, and Paul\'s letter to them (c. AD 57) is his fullest statement of the gospel. He arrived as a prisoner in about AD 60, "welcomed all who came to him", and wrote Philippians, Colossians, Ephesians and Philemon. Acts ends with him still preaching. Tradition, with early support (Clement, c. AD 96), holds that he was beheaded on the Ostian Way and Peter crucified on the Vatican hill during Nero\'s persecution after the fire of AD 64.\n\nIn Revelation, "Babylon the great" is widely read as Rome.',
  christ: 'The gospel reached the centre of the empire in the mouth of a chained prisoner, "and the word of God is not bound" (2 Timothy 2:9). What began in a Bethlehem stable was proclaimed under Caesar\'s nose.',
  modern: 'Rome, Italy', identification: 'Certain.'
},
{
  id: 'italy', name: 'Italy', original: 'Ἰταλία',
  lat: 42.6, lon: 13.0, type: 'region', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 18:2', 'Acts 27:1', 'Hebrews 13:24'],
  summary: 'The heart of the empire, goal of Paul\'s final voyage in Acts.',
  detail: 'Aquila and Priscilla had "recently come from Italy" when Paul met them in Corinth, expelled with other Jews by Claudius in AD 49. Hebrews closes with greetings from "those who come from Italy".',
  modern: 'Italy', identification: 'Certain.'
},
{
  id: 'sicily', name: 'Sicily', original: 'Σικελία',
  lat: 37.6, lon: 14.1, type: 'island', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Acts 28:12'],
  summary: 'Rome\'s granary island, passed on the last leg of Paul\'s voyage.',
  detail: 'The first Roman province (241 BC). Paul\'s ship called at Syracuse on its east coast.',
  modern: 'Sicily, Italy', identification: 'Certain.'
},
{
  id: 'illyricum', name: 'Illyricum', alt: ['Dalmatia'], original: 'Ἰλλυρικόν',
  lat: 43.5, lon: 17.5, type: 'region', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Romans 15:19', '2 Timothy 4:10'],
  summary: 'The Adriatic province Paul names as the western limit of his preaching "from Jerusalem and all the way around to Illyricum".',
  detail: 'Acts does not record a visit; Paul may have reached it from Macedonia along the Via Egnatia during the third journey. Titus later went to Dalmatia, its southern part.',
  modern: 'Croatia, Bosnia, Albania', identification: 'Certain (the province).'
},
{
  id: 'patmos', name: 'Patmos', original: 'Πάτμος',
  lat: 37.3100, lon: 26.5470, elev: 100, type: 'island', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Revelation 1:9'],
  verse: { ref: 'Revelation 1:9', text: 'I, John, your brother and partner in the tribulation... was on the island called Patmos on account of the word of God and the testimony of Jesus.' },
  summary: 'Small rocky island where John, in exile, received the Revelation.',
  detail: 'Sixty kilometres off Miletus, Patmos was a place of banishment under the Romans. Tradition places John\'s vision in a cave on the hillside below the later monastery of St John (1088). From here the seven letters went out in a circle to the cities of Asia, in the order a courier would ride.',
  christ: 'On this island the risen Christ appeared as he is now: "I am the first and the last, and the living one. I died, and behold I am alive forevermore" (Revelation 1:17-18).',
  modern: 'Patmos, Greece', identification: 'Certain.'
},
{
  id: 'smyrna', name: 'Smyrna', original: 'Σμύρνα',
  lat: 38.4189, lon: 27.1287, elev: 20, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Revelation 1:11', 'Revelation 2:8-11'],
  verse: { ref: 'Revelation 2:10', text: 'Be faithful unto death, and I will give you the crown of life.' },
  summary: 'The suffering church, praised without rebuke. Its bishop Polycarp was burned here in AD 155.',
  detail: 'A beautiful harbour city, loyal to Rome, with a strong Jewish community hostile to the Christians. Smyrna is the only one of the seven cities that has been continuously inhabited; the Roman agora is excavated in the centre of Izmir.',
  modern: 'Izmir, Turkey', identification: 'Certain.'
},
{
  id: 'pergamum', name: 'Pergamum', original: 'Πέργαμος',
  lat: 39.1320, lon: 27.1840, elev: 330, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Revelation 1:11', 'Revelation 2:12-17'],
  summary: 'Former royal capital "where Satan\'s throne is": centre of the imperial cult, with the great altar of Zeus and the shrine of Asclepius.',
  detail: 'Pergamum\'s acropolis towers 300 metres above the plain, with a library second only to Alexandria, a steep theatre, and the first temple in Asia to a living emperor (29 BC). Antipas, "my faithful witness", was killed here. The church was commended for holding fast but rebuked for tolerating false teaching.',
  modern: 'Bergama, Turkey', identification: 'Certain.'
},
{
  id: 'thyatira', name: 'Thyatira', original: 'Θυάτειρα',
  lat: 38.9200, lon: 27.8400, elev: 100, type: 'town', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 16:14', 'Revelation 1:11', 'Revelation 2:18-29'],
  summary: 'Town of dyers and trade guilds, Lydia\'s home city, whose church tolerated "Jezebel".',
  detail: 'Thyatira lay in a valley on the road from Pergamum to Sardis, known for its purple dye and its many guilds, whose feasts posed the problem of idol-food the letter addresses. Lydia, "a seller of purple goods from the city of Thyatira", was converted at Philippi. Only a small excavated area survives in the modern town.',
  modern: 'Akhisar, Turkey', identification: 'Certain.'
},
{
  id: 'sardis', name: 'Sardis', original: 'Σάρδεις',
  lat: 38.4883, lon: 28.0400, elev: 120, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Revelation 1:11', 'Revelation 3:1-6'],
  verse: { ref: 'Revelation 3:2', text: 'Wake up, and strengthen what remains and is about to die.' },
  summary: 'Old capital of Lydia and of Croesus, twice captured by surprise; the church with a reputation for life that was dead.',
  detail: 'Sardis on its supposedly impregnable acropolis fell to Cyrus in 546 BC and to Antiochus III in 214 BC through unwatched approaches, which gives edge to "wake up" and "I will come like a thief". The temple of Artemis, the huge gymnasium-bath complex and the largest ancient synagogue yet found have been excavated.',
  modern: 'Sart, Turkey', identification: 'Certain.'
},
{
  id: 'philadelphia', name: 'Philadelphia', original: 'Φιλαδέλφεια',
  lat: 38.3500, lon: 28.5200, elev: 200, type: 'town', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Revelation 1:11', 'Revelation 3:7-13'],
  verse: { ref: 'Revelation 3:8', text: 'Behold, I have set before you an open door, which no one is able to shut.' },
  summary: 'The faithful church with "little power", in an earthquake-prone town on the road into Phrygia.',
  detail: 'Founded by the Attalid kings as a missionary city of Greek culture, an "open door" to the interior. Devastated by the earthquake of AD 17, its people lived in fear of tremors, which the promise of a pillar that will "never go out" of God\'s temple answers. Little remains beyond a Byzantine basilica.',
  modern: 'Alaşehir, Turkey', identification: 'Certain.'
},
{
  id: 'laodicea', name: 'Laodicea', original: 'Λαοδίκεια',
  lat: 37.8360, lon: 29.1070, elev: 280, type: 'city', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Colossians 2:1', 'Colossians 4:13-16', 'Revelation 1:11', 'Revelation 3:14-22'],
  verse: { ref: 'Revelation 3:20', text: 'Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me.' },
  summary: 'Rich banking city in the Lycus valley, "lukewarm" like its piped water, with a famous eye-salve and black wool.',
  detail: 'Laodicea refused imperial aid to rebuild after the earthquake of AD 60, boasting "I am rich". Its water came by aqueduct and arrived tepid, unlike the hot springs of Hierapolis opposite or the cold streams of Colossae. Paul wrote it a letter now lost. Recent excavations have exposed a colonnaded street, two theatres and a large early church.',
  modern: 'Eskihisar, near Denizli, Turkey', identification: 'Certain.'
},
{
  id: 'colossae', name: 'Colossae', original: 'Κολοσσαί',
  lat: 37.7880, lon: 29.2620, elev: 350, type: 'town', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Colossians 1:2', 'Colossians 4:9-17', 'Philemon 1-2'],
  verse: { ref: 'Colossians 1:17', text: 'And he is before all things, and in him all things hold together.' },
  summary: 'Small town in the Lycus valley whose church, founded by Epaphras, received Paul\'s letters to the Colossians and to Philemon.',
  detail: 'Once important, Colossae had been overtaken by Laodicea and Hierapolis. Philemon and his slave Onesimus lived here. The mound has never been excavated; Paul himself never visited.',
  modern: 'near Honaz, Turkey', identification: 'Certain (unexcavated mound).'
},
{
  id: 'hierapolis', name: 'Hierapolis', original: 'Ἱεράπολις',
  lat: 37.9240, lon: 29.1260, elev: 350, type: 'town', rank: 4, confidence: 'certain',
  eras: ['church'], refs: ['Colossians 4:13'],
  summary: 'Spa city above the white terraces of Pamukkale, mentioned with Laodicea and Colossae as a field of Epaphras\'s labour.',
  detail: 'Hot mineral springs made Hierapolis a healing resort and produced the travertine cascades still visible from Laodicea across the valley. Tradition holds that the apostle Philip died here; a martyrium and a tomb identified as his were excavated in 2011.',
  modern: 'Pamukkale, Turkey', identification: 'Certain.'
},
{
  id: 'aegean', name: 'Aegean Sea', original: 'Αἰγαῖον πέλαγος',
  lat: 38.6, lon: 25.2, type: 'sea', rank: 2, confidence: 'certain',
  eras: ['church'], refs: ['Acts 16:11', 'Acts 20:13-16', 'Acts 21:1'],
  summary: 'The island-strewn sea between Greece and Asia that Paul crossed and recrossed on his second and third journeys.',
  detail: 'Coasting ships hopped between its islands by day and anchored at night. Luke\'s itineraries through it are precise enough to be checked against the winds.',
  modern: 'Aegean Sea', identification: 'Certain.'
},
{
  id: 'black-sea', name: 'Black Sea', alt: ['Pontus Euxinus'], original: 'Πόντος Εὔξεινος',
  lat: 43.0, lon: 34.0, type: 'sea', rank: 3, confidence: 'certain',
  eras: ['church'], refs: ['Acts 2:9', '1 Peter 1:1'],
  summary: 'The inland sea north of Anatolia; Jews of Pontus were at Pentecost and Peter wrote to its churches.',
  detail: 'Not named in Scripture, but the provinces along its southern shore, Pontus and Bithynia, are. Aquila was "a native of Pontus" (Acts 18:2).',
  modern: 'Black Sea', identification: 'Certain.'
},

// ---------------------------------------------------------------------------
// SMALLER STATIONS AND SITES REFERENCED BY THE THREADS
// ---------------------------------------------------------------------------
{
  id: 'mamre', name: 'Mamre', alt: ['Oaks of Mamre', 'Terebinths of Mamre'], original: 'מַמְרֵא Mamre',
  lat: 31.5580, lon: 35.1000, elev: 990, type: 'site', rank: 4, confidence: 'traditional',
  alternatives: [{ name: 'Khirbet es-Sibte (Oak of Abraham)', lat: 31.5300, lon: 35.0850, note: 'The Russian Orthodox site with its ancient oak, three kilometres south-west.' }],
  eras: ['patriarchs'], refs: ['Genesis 13:18', 'Genesis 18:1-15', 'Genesis 23:17-19'],
  summary: 'The grove near Hebron where Abraham pitched his tent, built an altar and entertained three visitors.',
  detail: 'Ramat el-Khalil, north of Hebron, has a Herodian enclosure later rebuilt by Constantine around a well and a tree; tradition identified it as Mamre from at least the first century. Here Abraham heard that Sarah would have a son and pleaded for Sodom.',
  christ: 'The LORD "appeared to him by the oaks of Mamre" and ate at his table: the God who would one day sit at table in Galilee.',
  modern: 'Ramat el-Khalil, north of Hebron', identification: 'Traditional since Herodian times.'
},
{
  id: 'etham', name: 'Etham', original: 'אֵתָם Etham',
  lat: 30.60, lon: 32.30, type: 'site', rank: 4, confidence: 'unknown',
  eras: ['exodus'], refs: ['Exodus 13:20', 'Numbers 33:6-8'],
  summary: 'Encampment "on the edge of the wilderness" after Succoth, before Israel turned back toward the sea.',
  detail: 'The name may be Egyptian (htm, "fort"), one of the frontier forts on the line of the later Suez Canal. Its site is unknown; the wilderness beyond the sea is also called "the wilderness of Etham" (Numbers 33:8), so it may name a district rather than a town.',
  modern: 'Eastern edge of the Nile Delta', identification: 'Unknown.'
},
{
  id: 'kibroth-hattaavah', name: 'Kibroth-hattaavah', original: 'קִבְרוֹת הַתַּאֲוָה "graves of craving"',
  lat: 28.75, lon: 34.20, type: 'site', rank: 4, confidence: 'unknown',
  eras: ['exodus'], refs: ['Numbers 11:31-35', 'Numbers 33:16', 'Deuteronomy 9:22'],
  summary: 'The first camp after Sinai, where the people craved meat, quail came, and a plague followed.',
  detail: 'A day\'s march or more north-east of Sinai on the way to Hazeroth. Its site depends on the location of Sinai and is not fixed.',
  modern: 'Sinai peninsula', identification: 'Unknown.'
},
{
  id: 'hazeroth', name: 'Hazeroth', original: 'חֲצֵרוֹת Hatserot',
  lat: 28.79, lon: 34.42, elev: 500, type: 'site', rank: 4, confidence: 'probable',
  eras: ['exodus'], refs: ['Numbers 11:35', 'Numbers 12:16', 'Numbers 33:17'],
  summary: 'Camp where Miriam and Aaron spoke against Moses and Miriam was struck with leprosy.',
  detail: 'Usually placed at the oasis of Ain Khadra (Ain Hudra), whose name preserves the Hebrew, on the route north-east from Jebel Musa toward the Gulf of Aqaba.',
  modern: 'Ain Khadra, Sinai', identification: 'Probable (name preserved).'
},
{
  id: 'shittim', name: 'Shittim', alt: ['Abel-shittim'], original: 'שִׁטִּים "acacias"',
  lat: 31.8400, lon: 35.6700, elev: -200, type: 'site', rank: 3, confidence: 'probable',
  eras: ['exodus', 'conquest-judges'], refs: ['Numbers 25:1', 'Numbers 33:49', 'Joshua 2:1', 'Joshua 3:1', 'Micah 6:5'],
  summary: 'Israel\'s last camp before the Jordan, in the plains of Moab: the sin with Baal of Peor, the census, Moses\' farewell, and Joshua\'s spies sent to Jericho.',
  detail: 'Abel-shittim, "the meadow of acacias", lay in the plain east of the Jordan opposite Jericho. Tall el-Hammam, a large Bronze and Iron Age site at the foot of the hills, is the leading candidate. From here Balaam looked down on the camp, and from here the people went down to the river.',
  christ: 'Balaam\'s oracle from these plains: "a star shall come out of Jacob, and a sceptre shall rise out of Israel" (Numbers 24:17).',
  modern: 'Tall el-Hammam, Jordan', identification: 'Probable.'
},
{
  id: 'beth-horon', name: 'Beth-horon', original: 'בֵּית חוֹרוֹן Beth Horon',
  lat: 31.8830, lon: 35.0830, elev: 400, type: 'town', rank: 3, confidence: 'certain',
  eras: ['conquest-judges', 'united-kingdom', 'intertestamental'], refs: ['Joshua 10:10-11', 'Joshua 16:3, 5', '1 Samuel 13:18', '1 Kings 9:17', '1 Maccabees 3:16-24'],
  summary: 'Twin villages, Upper and Lower, guarding the main ascent from the coast to the hill country. Joshua chased the Amorites down it under hailstones.',
  detail: 'The Beth-horon ridge is the easiest road from the plain of Aijalon up to Gibeon and Jerusalem, and armies used it for three thousand years: Joshua, the Philistines, Judas Maccabeus, Cestius Gallus in AD 66. Solomon fortified it. The two Arab villages of Beit Ur el-Tahta (lower) and Beit Ur el-Foqa (upper) keep the name.',
  modern: 'Beit Ur el-Tahta and Beit Ur el-Foqa, West Bank', identification: 'Certain (name preserved).'
},
{
  id: 'tishbe', name: 'Tishbe', original: 'תִּשְׁבֶּה',
  lat: 32.4667, lon: 35.7167, elev: 700, type: 'town', rank: 4, confidence: 'probable',
  eras: ['divided-kingdom'], refs: ['1 Kings 17:1'],
  summary: 'Elijah\'s home in Gilead, from which he stepped onto the stage of Israel\'s history.',
  detail: 'Elijah "the Tishbite, of Tishbe in Gilead" is all we are told. Listib (el-Istib), near the Byzantine ruins of Mar Elias in the hills of Ajloun, preserves the name and has been venerated as his birthplace since at least the sixth century.',
  modern: 'Listib / Mar Elias, near Ajloun, Jordan', identification: 'Probable (name preserved).'
},
{
  id: 'abel-meholah', name: 'Abel-meholah', original: 'אָבֵל מְחוֹלָה',
  lat: 32.3500, lon: 35.5333, elev: -200, type: 'town', rank: 4, confidence: 'probable',
  eras: ['conquest-judges', 'divided-kingdom'], refs: ['Judges 7:22', '1 Kings 4:12', '1 Kings 19:16'],
  summary: 'Elisha\'s home town in the Jordan valley, where Elijah found him ploughing and threw his cloak over him.',
  detail: 'Named among the limits of Gideon\'s pursuit of the Midianites and in Solomon\'s districts. Tell Abu Sus on the west bank of the Jordan, south of Beth-shan, is the usual identification.',
  modern: 'Tell Abu Sus, Jordan valley', identification: 'Probable.'
},
{
  id: 'hippos', name: 'Hippos', alt: ['Sussita'], original: 'Ἵππος',
  lat: 32.7789, lon: 35.6600, elev: 140, type: 'town', rank: 4, confidence: 'certain',
  eras: ['christ'], refs: ['Matthew 5:14 (possible allusion)'],
  summary: 'Decapolis city on a flat-topped hill above the eastern shore of Galilee, visible from Capernaum.',
  detail: 'Hippos stood 350 metres above the lake, directly across from Capernaum, its lights visible at night. Some suggest Jesus had it in view when he said "a city set on a hill cannot be hidden". Its Roman street and churches have been excavated since 2000.',
  modern: 'Sussita, Israel', identification: 'Certain.'
},
{
  id: 'tabgha', name: 'Tabgha', alt: ['Heptapegon', 'Seven Springs'], original: 'Ἑπτάπηγον',
  lat: 32.8740, lon: 35.5490, elev: -200, type: 'site', rank: 4, confidence: 'traditional',
  eras: ['christ'], refs: ['Mark 6:30-44', 'John 21:1-19'],
  summary: 'Springs on the north-west shore of Galilee, the traditional site of the feeding of the five thousand and of the risen Jesus\' breakfast with Peter.',
  detail: 'Warm springs here draw fish to the shore, which is why fishermen worked these waters. Byzantine pilgrims fixed the feeding miracle and the "Primacy of Peter" here; the fifth-century loaves-and-fishes mosaic survives in the Church of the Multiplication. The Gospels place the feeding on the other, quieter side of the lake, so the site is a tradition, not a certainty.',
  modern: 'Tabgha, Israel', identification: 'Traditional (Byzantine).'
},
{
  id: 'upper-room', name: 'The Upper Room', alt: ['Cenacle'], original: 'ἀνάγαιον anagaion',
  lat: 31.7716, lon: 35.2291, elev: 770, type: 'site', rank: 3, confidence: 'traditional',
  eras: ['christ', 'church'], refs: ['Mark 14:12-26', 'Luke 22:7-38', 'John 13-17', 'Acts 1:13', 'Acts 2:1-4'],
  verse: { ref: 'Luke 22:19', text: 'This is my body, which is given for you. Do this in remembrance of me.' },
  summary: 'The room of the Last Supper, and by tradition of Pentecost, on the western hill of Jerusalem.',
  detail: 'The Cenacle on Mount Zion is a fourteenth-century Crusader hall standing over earlier remains; Christians have located the Supper on this hill since at least the fourth century, when the great basilica of Holy Zion was built here. Whether the same room saw the Last Supper and Pentecost cannot be proven, but the tradition is early and the hill was the wealthy quarter where a large upper room would be found.',
  christ: 'Here Jesus washed feet, broke bread, and said "a new commandment I give to you, that you love one another". Here the Spirit came down.',
  modern: 'Mount Zion, Jerusalem', identification: 'Traditional (fourth century).'
},
{
  id: 'house-of-caiaphas', name: 'House of Caiaphas', original: 'οἰκία τοῦ ἀρχιερέως',
  lat: 31.7720, lon: 35.2310, elev: 760, type: 'site', rank: 4, confidence: 'traditional',
  alternatives: [{ name: 'St Peter in Gallicantu', lat: 31.7717, lon: 35.2325, note: 'The Assumptionist church on the eastern slope of Mount Zion, with rock-cut cells and a Byzantine church beneath.' }],
  eras: ['christ'], refs: ['Matthew 26:57-75', 'John 18:12-27'],
  summary: 'The high priest\'s residence where Jesus was tried by night and Peter denied him.',
  detail: 'The Armenian church of the Saviour, inside the Zion Gate, and St Peter in Gallicantu ("cock-crow") nearby both claim the site. The high priest\'s house would indeed have stood in this wealthy upper city, where Herodian mansions have been excavated.',
  modern: 'Mount Zion, Jerusalem', identification: 'Traditional; two rival sites.'
},
{
  id: 'praetorium', name: 'Praetorium', alt: ['Pilate\'s residence'], original: 'πραιτώριον',
  lat: 31.7765, lon: 35.2280, elev: 770, type: 'site', rank: 4, confidence: 'disputed',
  alternatives: [{ name: 'Antonia Fortress', lat: 31.7800, lon: 35.2350, note: 'North-west of the Temple; start of the traditional Via Dolorosa, but a barracks rather than a residence.' },
                 { name: 'Herod\'s Palace', lat: 31.7765, lon: 35.2280, note: 'The governor\'s normal lodging when in Jerusalem; near the Jaffa Gate. Most scholars now favour this.' }],
  eras: ['christ'], refs: ['Matthew 27:27', 'Mark 15:16', 'John 18:28-19:16'],
  summary: 'Where Pilate tried Jesus. Two sites compete: the Antonia fortress and Herod\'s palace.',
  detail: 'The Via Dolorosa assumes the Antonia, but the praetorium was where the governor stayed, and Philo and Josephus both put Pilate and later governors in Herod\'s palace on the western hill. Remains of the palace platform were found under the Kishle prison by the Jaffa Gate in the 2000s. From either site the way to Golgotha was short.',
  modern: 'Jerusalem, near the Jaffa Gate (or the Antonia site)', identification: 'Disputed; Herod\'s palace is now preferred.'
},
{
  id: 'halah', name: 'Halah', original: 'חֲלַח',
  lat: 36.60, lon: 43.20, type: 'region', rank: 4, confidence: 'probable',
  eras: ['divided-kingdom', 'exile-return'], refs: ['2 Kings 17:6', '2 Kings 18:11', '1 Chronicles 5:26'],
  summary: 'District in Assyria to which Israelites of the northern kingdom were deported in 722 BC.',
  detail: 'Probably the Assyrian province of Halahhu north-east of Nineveh, named in cuneiform texts. With Gozan on the Habor and "the cities of the Medes", it marks the dispersal of the ten tribes.',
  modern: 'North of Mosul, Iraq', identification: 'Probable.'
}

];
