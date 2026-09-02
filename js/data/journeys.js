// Bible Atlas — journeys ("threads") data
// Schema: tools/SCHEMA.md (journeys.js section). Plain browser JS, ES5-safe, no modules.
// Every stop carries BOTH a `place` id (best guess against places.js) AND lat/lon of the
// ancient site, so the renderer can fall back to coordinates if the id does not resolve.
// `via` = intermediate waypoints travelled BEFORE reaching the stop (rivers, roads, coasts, sea lanes).
window.ATLAS = window.ATLAS || {};
ATLAS.JOURNEYS = [

// ---------------------------------------------------------------------------
// 1. THE SCARLET THREAD — the line of promise through the whole Bible
// ---------------------------------------------------------------------------
{
  id: 'scarlet-thread',
  name: 'The Scarlet Thread',
  era: 'primeval',
  color: '#b3202a',
  refs: 'Genesis 3:15 – Revelation 22:21',
  summary: 'The single line of promise that runs from Eden to the ends of the earth: God\'s pledge to crush the serpent, bless all nations through Abraham\'s seed and seat David\'s Son on an everlasting throne, fulfilled in Jesus Christ. This thread spans every era of the atlas.',
  duration: 'From the beginning to the end of the age (all eras)',
  stops: [
    {
      place: 'eden', lat: 33.0000, lon: 44.0000,
      title: 'Eden: the promise is born in the ruins',
      ref: 'Genesis 2:8-15; 3:15',
      text: 'The garden\'s true location is unknown. Genesis names the Tigris and Euphrates among its four rivers, so this marker is placed honestly in Mesopotamia only as a gesture toward that geography, not as a claim. Here humanity fell, and here, in the very sentence of judgement, God spoke the first gospel: the woman\'s offspring would crush the serpent\'s head.',
      christ: 'Every later promise unpacks Genesis 3:15; the Seed who bruises the serpent is Christ (Romans 16:20; Galatians 3:16).'
    },
    {
      place: 'ararat', lat: 39.7020, lon: 44.2988,
      title: 'Ararat: the line preserved through judgement',
      ref: 'Genesis 6:8; 8:4; 9:8-17',
      text: 'The ark came to rest "on the mountains of Ararat", the region of ancient Urartu rather than one identifiable peak; Mount Ararat itself (Ağrı Dağı) is the later tradition. Through Noah the promised line survived the flood, and God bound himself by covenant never again to destroy the earth by water.',
      christ: 'Peter reads the flood as a figure of baptism: a remnant carried safely through judgement (1 Peter 3:20-21).',
      via: [[34.5000, 44.0000], [36.3597, 43.1528], [38.0000, 43.5000]]
    },
    {
      place: 'babylon', lat: 32.5364, lon: 44.4208,
      title: 'Babel: the nations scattered',
      ref: 'Genesis 11:1-9',
      text: 'On the plain of Shinar humanity united to make a name for itself, and God scattered the nations by confusing their speech. Babel is Babylon; the city built to reach heaven becomes Scripture\'s standing symbol of proud, godless empire. The scattering sets up the question the rest of the Bible answers: how will the nations be gathered back?',
      christ: 'At Pentecost the curse of Babel is reversed as every nation hears the gospel in its own tongue (Acts 2:5-11).',
      via: [[38.0000, 43.5000], [36.3597, 43.1528], [34.5000, 44.0000]]
    },
    {
      place: 'ur', lat: 30.9626, lon: 46.1030,
      title: 'Ur: one family chosen',
      ref: 'Genesis 11:27-32; Acts 7:2-4',
      text: 'From the great Sumerian city of Ur, with its ziggurat to the moon-god Nanna, God called Terah\'s family. Stephen says the God of glory appeared to Abraham "when he was in Mesopotamia, before he lived in Haran". The promise now narrows to one man so that it may later widen to every nation.',
      via: [[32.0000, 45.2000], [31.3200, 45.6400]]
    },
    {
      place: 'haran', lat: 36.8650, lon: 39.0317,
      title: 'Haran: the call to go',
      ref: 'Genesis 12:1-3',
      text: 'At Haran on the Balikh, another moon-cult centre, Terah died and Abram received the threefold promise: land, offspring and blessing, and "in you all the families of the earth shall be blessed." He left at seventy-five without knowing where he was going.',
      christ: 'Paul calls Genesis 12:3 the gospel preached beforehand to Abraham; the blessing of the nations is justification by faith in Christ (Galatians 3:8).',
      via: [[31.3200, 45.6400], [32.5364, 44.4208], [33.0600, 44.2500], [33.6400, 42.8300], [34.4700, 41.9500], [34.5500, 40.8900], [34.9200, 40.5300], [35.9500, 39.0200]]
    },
    {
      place: 'shechem', lat: 32.2136, lon: 35.2819,
      title: 'Shechem: the first altar in the land',
      ref: 'Genesis 12:6-7',
      text: 'Between Ebal and Gerizim, at the oak of Moreh, the LORD appeared and said, "To your offspring I will give this land." Abram built the first altar in Canaan here. Centuries later Joshua would gather Israel at the same spot to renew the covenant (Joshua 24).',
      via: [[36.8292, 38.0150], [36.2000, 37.1600], [35.1300, 36.7500], [33.5138, 36.2765], [33.2500, 35.6500], [33.0178, 35.5686], [32.4136, 35.2408]]
    },
    {
      place: 'bethel', lat: 31.9297, lon: 35.2394,
      title: 'Bethel: calling on the name',
      ref: 'Genesis 12:8; 13:3-4; 28:10-22',
      text: 'On the ridge between Bethel and Ai Abram pitched his tent and "called upon the name of the LORD". His grandson Jacob would meet God here in a dream of a stairway to heaven and name the place House of God. Bethel became a hinge of promise and, later, of apostasy under Jeroboam.',
      christ: 'Jesus takes Jacob\'s stairway to himself: angels ascend and descend on the Son of Man (John 1:51).'
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Moriah: the LORD will provide',
      ref: 'Genesis 22:1-18; 2 Chronicles 3:1',
      text: 'Abraham was told to offer Isaac on a mountain in the land of Moriah, which Chronicles identifies with the Temple hill in Jerusalem. The knife was stayed, a ram died in the boy\'s place, and Abraham named the spot "The LORD will provide." The promise was then sworn with an oath: "in your offspring shall all the nations of the earth be blessed."',
      christ: 'On the same hills God did not spare his own Son (Romans 8:32); the substituted ram foreshadows the Lamb whom God provides.',
      via: [[31.8478, 35.1847]]
    },
    {
      place: 'goshen', lat: 30.7872, lon: 31.8214,
      title: 'Egypt: a family becomes a nation',
      ref: 'Genesis 46:1-4; 50:24-25; Exodus 1:7',
      text: 'God brought Jacob\'s household to Goshen in the eastern Nile delta, promising, "I will there make of you a great nation." Under the shadow of Egypt the seventy became a multitude, and the dying Joseph made Israel swear to carry his bones back to the land of promise. Even in slavery the promise was not forgotten.',
      via: [[31.5244, 35.1105], [31.2447, 34.8408], [30.9000, 34.2000], [30.8000, 33.5000], [30.7000, 32.8000]]
    },
    {
      place: 'sinai', lat: 28.5397, lon: 33.9750,
      title: 'Sinai: a kingdom of priests',
      ref: 'Exodus 19:3-6; 24:3-8',
      text: 'Redeemed from Egypt by blood and sea, Israel came to the mountain where God gave the covenant, the law and the tabernacle. The nation was constituted as "a kingdom of priests and a holy nation", set apart to carry the promise to the world. Jebel Musa is the traditional site; other candidates are discussed on the Exodus thread.',
      christ: 'Sinai\'s covenant was sealed with the blood of oxen; the new covenant with the blood of Christ, "the mediator of a new covenant" (Hebrews 12:24).',
      via: [[30.5528, 32.0997], [30.3000, 32.4000], [29.4083, 32.9550], [28.9000, 33.2000], [28.7167, 33.6167]]
    },
    {
      place: 'jericho', lat: 31.8711, lon: 35.4441,
      title: 'Jericho: the land entered',
      ref: 'Joshua 2:18-21; 6:20-25',
      text: 'After forty years the Jordan parted and Israel crossed into the land sworn to Abraham. Jericho fell to faith, not siege engines, and a Canaanite prostitute who hung a scarlet cord in her window was saved with her household. Rahab married into Judah and stands in the line of David and of Jesus (Matthew 1:5).',
      christ: 'Rahab\'s scarlet cord and her inclusion in Messiah\'s genealogy show that the promise was always for believing outsiders too.',
      via: [[28.8975, 34.3486], [30.6469, 34.4247], [30.3167, 35.4050], [31.0300, 35.6400], [31.4600, 35.7900], [31.7683, 35.7256], [31.8397, 35.6733]]
    },
    {
      place: 'shiloh', lat: 32.0556, lon: 35.2897,
      title: 'Shiloh: God\'s dwelling in the land',
      ref: 'Joshua 18:1; 1 Samuel 1–4',
      text: 'The tabernacle stood at Shiloh for some three centuries. Here Hannah prayed, Samuel heard God\'s voice as a boy, and Eli\'s corrupt sons carried the ark to defeat. The promise seemed to falter, "Ichabod", the glory departed, yet God raised up a prophet to anoint a king.',
      via: [[31.9297, 35.2394]]
    },
    {
      place: 'bethlehem', lat: 31.7054, lon: 35.2024,
      title: 'Bethlehem: Ruth, Boaz and David',
      ref: 'Ruth 4:13-22; 1 Samuel 16:1-13',
      text: 'In Bethlehem a Moabite widow found a redeemer in Boaz, and their great-grandson was David, the shepherd boy Samuel anointed in secret. The book of Ruth ends with a genealogy for a reason: the promise to Abraham is becoming a royal line. Micah would later name this small town as the birthplace of the coming ruler.',
      christ: 'Boaz the kinsman-redeemer, David the anointed shepherd-king: both are sketches of the Christ born here (Micah 5:2).',
      via: [[31.9297, 35.2394], [31.7784, 35.2354]]
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Zion: an everlasting throne',
      ref: '2 Samuel 7:12-16; 1 Kings 8:10-11',
      text: 'David took the Jebusite stronghold, brought the ark to Zion and received God\'s covenant that his house and throne would be established forever. Solomon built the Temple on Moriah and the glory-cloud filled it. The promise now has a city, a king and a house, and it is greater than any of them.',
      christ: 'Gabriel announces to Mary the fulfilment of 2 Samuel 7: "the Lord God will give to him the throne of his father David" (Luke 1:32).'
    },
    {
      place: 'babylon', lat: 32.5364, lon: 44.4208,
      title: 'Babylon: the promise in exile',
      ref: '2 Kings 25:8-12; Psalm 137; Jeremiah 29:10-14; Daniel 2:44',
      text: 'In 586 BC Nebuchadnezzar burned the Temple and marched Judah up the Euphrates road to Babylon. The Davidic king sat in a Babylonian prison, and the exiles wept by the rivers. Yet the prophets insisted the line would not end: a Branch would come from David\'s stump, a stone would shatter the empires, and God would make a new covenant.',
      christ: 'Daniel\'s stone "cut out by no human hand" is the kingdom of Christ that fills the whole earth (Daniel 2:34-35, 44).',
      via: [[32.2136, 35.2819], [33.0178, 35.5686], [34.4500, 36.5167], [35.1300, 36.7500], [36.2000, 37.1600], [36.8292, 38.0150], [35.9500, 39.0200], [34.9200, 40.5300], [34.5500, 40.8900], [33.6400, 42.8300], [33.0600, 44.2500]]
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: the return and the waiting',
      ref: 'Ezra 1:1-4; Haggai 2:6-9; Malachi 3:1',
      text: 'Cyrus\'s decree in 539 BC sent the exiles home along the Fertile Crescent, and a modest second Temple rose on the ruins. No glory-cloud filled it and no Davidic king reigned; instead the prophets promised that the Lord himself would suddenly come to his temple. Four centuries of waiting followed, ending with the Old Testament\'s last word: a promise.',
      via: [[33.0600, 44.2500], [33.6400, 42.8300], [34.5500, 40.8900], [35.9500, 39.0200], [36.8292, 38.0150], [36.2000, 37.1600], [35.1300, 36.7500], [33.5138, 36.2765], [33.0178, 35.5686], [32.2136, 35.2819]]
    },
    {
      place: 'bethlehem', lat: 31.7054, lon: 35.2024,
      title: 'Bethlehem: the Word made flesh',
      ref: 'Luke 2:1-20; Matthew 1:1; John 1:14',
      text: 'Matthew opens his Gospel with "the genealogy of Jesus Christ, the son of David, the son of Abraham": the whole scarlet thread gathered into one child. In David\'s town, in the reign of Augustus, the Seed of the woman, the Offspring of Abraham and the Son of David was born and laid in a manger.',
      christ: 'This is the hinge of the thread: every promise made before finds its yes in him (2 Corinthians 1:20).'
    },
    {
      place: 'nazareth', lat: 32.7019, lon: 35.3033,
      title: 'Nazareth: hidden years',
      ref: 'Matthew 2:19-23; Luke 2:39-52; 4:16-30',
      text: 'After the flight to Egypt the family settled in a small Galilean village of perhaps a few hundred people, unmentioned in the Old Testament. Here Jesus grew in wisdom and stature, learned a trade and worshipped in the synagogue where he would later announce that Isaiah\'s promise was fulfilled "today".',
      via: [[31.7784, 35.2354], [31.9297, 35.2394], [32.2136, 35.2819], [32.4136, 35.2408], [32.5583, 35.3283]]
    },
    {
      place: 'bethany-beyond-jordan', lat: 31.8372, lon: 35.5522,
      title: 'The Jordan: the Beloved Son',
      ref: 'Matthew 3:13-17; John 1:29-34',
      text: 'Where Israel once crossed into the land, Jesus stepped into the Jordan to be baptised by John. The heavens opened, the Spirit descended and the Father spoke: "This is my beloved Son." John pointed and said, "Behold, the Lamb of God, who takes away the sin of the world!" The site at al-Maghtas is well supported by early pilgrim tradition.',
      via: [[32.5583, 35.3283], [32.5000, 35.5000], [32.1000, 35.5500]]
    },
    {
      place: 'capernaum', lat: 32.8806, lon: 35.5750,
      title: 'Galilee: light in the darkness',
      ref: 'Matthew 4:12-25; Isaiah 9:1-2',
      text: 'Jesus made the fishing town of Capernaum his base and went through Galilee teaching, healing and proclaiming the kingdom. Matthew sees Isaiah fulfilled: the land of Zebulun and Naphtali, first to fall to Assyria, is first to see the great light. The kingdom promised to David has arrived in the person of the King.',
      via: [[32.1000, 35.5500], [32.5000, 35.5500], [32.7000, 35.5800]]
    },
    {
      place: 'golgotha', lat: 31.7784, lon: 35.2296,
      title: 'Golgotha: the serpent crushed',
      ref: 'John 19:17-30; Colossians 2:14-15; Hebrews 9:11-14',
      text: 'Outside the city wall, at Passover, the promised Seed was lifted up on a Roman cross. Here the thread reaches its crimson centre: the heel is bruised and the serpent\'s head is crushed, the Lamb God provides dies in the place of Isaac\'s children, and the curtain of the Temple is torn from top to bottom. "It is finished."',
      christ: 'The cross is not a detour in the plan of God but its goal: the Lamb slain, planned from the foundation of the world (Revelation 13:8; Acts 2:23).',
      via: [[32.5000, 35.5500], [31.8711, 35.4441], [31.7717, 35.2617]]
    },
    {
      place: 'emmaus', lat: 31.8394, lon: 34.9894,
      title: 'Emmaus: the Scriptures opened',
      ref: 'Luke 24:13-35',
      text: 'On the third day the risen Christ walked with two disciples and, "beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself." Emmaus is shown here at Nicopolis (Imwas), the earliest tradition, though Qubeibeh and Motza fit Luke\'s sixty stadia better. Wherever the road ran, on it the whole Old Testament was read as one story about Jesus.',
      christ: 'The Emmaus road is the warrant for this thread: the Scriptures are about him.',
      via: [[31.8050, 35.1100]]
    },
    {
      place: 'mount-of-olives', lat: 31.7782, lon: 35.2450,
      title: 'Mount of Olives: the King enthroned',
      ref: 'Luke 24:50-53; Acts 1:6-11; Daniel 7:13-14',
      text: 'Forty days after the resurrection Jesus led his disciples out toward Bethany and was taken up into heaven. Daniel\'s Son of Man had come with the clouds to receive an everlasting dominion; the Son of David had sat down at God\'s right hand. The disciples were told he would return to the same place.',
      via: [[31.8050, 35.1100], [31.7784, 35.2354]]
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Pentecost: the promise poured out',
      ref: 'Acts 2:1-41; Joel 2:28-32',
      text: 'Fifty days after Passover the Spirit fell on the disciples, and pilgrims from every nation heard the good news in their own languages. Peter preached that the risen Jesus is the Lord and Christ, seated on David\'s throne, and three thousand were baptised. Babel\'s scattering begins to be gathered in; the promise to Abraham begins to reach the families of the earth.'
    },
    {
      place: 'antioch-syria', lat: 36.2000, lon: 36.1600,
      title: 'Antioch: the nations come in',
      ref: 'Acts 11:19-26; 13:1-3',
      text: 'Persecution scattered believers north to the great Syrian metropolis on the Orontes, where for the first time Greeks were evangelised in large numbers and "the disciples were first called Christians." From Antioch the church sent out Barnabas and Saul, and the promise to bless every family on earth became a missionary movement.',
      christ: 'Gentiles eating at one table with Jews in Antioch is what Genesis 12:3 looks like in practice (Galatians 2:11-14).',
      via: [[32.2136, 35.2819], [33.0178, 35.5686], [33.5138, 36.2765], [35.1300, 36.7500], [36.0000, 36.5000]]
    },
    {
      place: 'rome', lat: 41.8925, lon: 12.4853,
      title: 'Rome: the gospel at the heart of the empire',
      ref: 'Acts 28:16-31; Romans 1:16; 15:8-12',
      text: 'Paul arrived in the capital as a prisoner and preached the kingdom of God "with all boldness and without hindrance." Acts ends there deliberately: the word that began in Jerusalem has reached the city that ruled the world. Paul\'s letter to the Romans strings together the promises to Abraham and David and says they were made "in order that the Gentiles might glorify God for his mercy".',
      via: [[36.1236, 35.9256], [36.3500, 35.6500], [36.5000, 34.5000], [36.3000, 33.5000], [36.0000, 32.5000], [36.2000, 31.0000], [36.2000, 29.9600], [36.3500, 28.5500], [36.5200, 28.2200], [36.5500, 27.7500], [36.6853, 27.3742], [36.3000, 26.9000], [35.3500, 26.4000], [34.9000, 26.3000], [34.8500, 25.6000], [34.9333, 24.8000], [34.8400, 24.0900], [34.6000, 23.0000], [35.0000, 20.0000], [35.5000, 17.0000], [35.9500, 14.4000], [36.6000, 15.2500], [36.9000, 15.3200], [37.0755, 15.2866], [37.3000, 15.3200], [37.7000, 15.3000], [38.0000, 15.5500], [38.1100, 15.6500], [38.3000, 15.6000], [38.6000, 15.5500], [39.5000, 15.7000], [40.0000, 15.1000], [40.3000, 14.7800], [40.4800, 14.1000], [40.7000, 14.1000], [40.8225, 14.1219], [41.1000, 14.2500], [41.2600, 13.6100], [41.2900, 13.2500], [41.3667, 12.9833], [41.5600, 12.7300]]
    },
    {
      place: 'ends-of-the-earth', lat: 50.0000, lon: -3.0000,
      title: 'To the ends of the earth',
      ref: 'Acts 1:8; Matthew 28:18-20; Revelation 7:9-10; 22:1-5',
      text: 'The thread does not stop at Rome. Jesus commissioned his disciples to be witnesses "to the end of the earth", and the story of Acts has never closed. Revelation shows where the line ends: a multitude from every nation before the throne, and the tree of life in a garden-city, Eden restored, the serpent gone, the Lamb on the throne. This marker, placed at the far western edge of the ancient world, stands for every place the gospel has since reached, including yours.',
      christ: 'Genesis 3:15 to Revelation 22: the Seed has crushed the serpent, and "the dwelling place of God is with man" (Revelation 21:3).',
      via: [[42.5000, 11.0000], [43.3000, 5.4000], [43.0000, 3.0000], [41.5000, 2.0000], [39.5000, 0.0000], [37.0000, -2.0000], [36.1000, -5.4000], [37.0000, -9.0000], [39.5000, -9.5000], [43.5000, -9.0000], [46.0000, -3.0000], [48.5000, -5.0000]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 2. ABRAHAM — the journey of faith
// ---------------------------------------------------------------------------
{
  id: 'abraham',
  name: 'Abraham: the Journey of Faith',
  era: 'patriarchs',
  color: '#c9a227',
  refs: 'Genesis 11:31 – 25:10',
  summary: 'From the ziggurats of Ur to a cave at Hebron, Abraham followed a promise he never saw fulfilled, and the land he walked as a foreigner became the stage on which God would bless the nations.',
  duration: 'c. 2166–1991 BC (traditional early chronology); departure from Haran c. 2091 BC',
  stops: [
    {
      place: 'ur', lat: 30.9626, lon: 46.1030,
      title: 'Ur of the Chaldeans',
      ref: 'Genesis 11:27-31; Joshua 24:2-3',
      text: 'Ur (Tell el-Muqayyar) was one of the great cities of Sumer, dominated by its stepped temple-tower to the moon-god Nanna, excavated by Leonard Woolley in the 1920s. Joshua later reminded Israel that their fathers "served other gods" beyond the Euphrates; Abraham did not come from a godly line. Terah took his household north-west, up the great river, toward Haran.',
      christ: 'The God who calls an idolater\'s son out of Ur is the God who "justifies the ungodly" (Romans 4:5); grace begins before faith does.'
    },
    {
      place: 'haran', lat: 36.8650, lon: 39.0317,
      title: 'Haran: the call',
      ref: 'Genesis 11:32 – 12:5; Hebrews 11:8',
      text: 'Some 1,000 km up the Euphrates and its tributary the Balikh lay Haran, a trading city that shared Ur\'s devotion to the moon-god. Terah died here, and the LORD told Abram to leave country, kindred and father\'s house for a land he would be shown. At seventy-five, with Sarai and his nephew Lot, "he went out, not knowing where he was going."',
      via: [[31.3200, 45.6400], [32.5364, 44.4208], [33.0600, 44.2500], [33.6400, 42.8300], [34.4700, 41.9500], [34.5500, 40.8900], [34.9200, 40.5300], [35.9500, 39.0200]]
    },
    {
      place: 'damascus', lat: 33.5138, lon: 36.2765,
      title: 'The Damascus road',
      ref: 'Genesis 14:15; 15:2',
      text: 'The caravan route from Haran to Canaan ran past Carchemish, Aleppo and Hamath to the oasis of Damascus. Genesis does not record a stop here, but Abram\'s steward was "Eliezer of Damascus", and he later pursued the eastern kings as far as Hobah, north of the city. Josephus preserves a tradition that Abram lived for a time at Damascus; the atlas simply marks the road he must have taken.',
      via: [[36.8292, 38.0150], [36.2000, 37.1600], [35.8000, 36.8000], [35.1300, 36.7500], [34.8300, 36.8700]]
    },
    {
      place: 'shechem', lat: 32.2136, lon: 35.2819,
      title: 'Shechem: the first altar',
      ref: 'Genesis 12:6-7',
      text: 'Descending through Galilee and the hills of Manasseh, Abram came to the pass between Ebal and Gerizim and the oak of Moreh. Here the LORD appeared and promised the land to his offspring, and Abram built the first of his altars. Shechem (Tell Balata) was already a walled town in the Middle Bronze Age.',
      christ: 'The land promised to Abraham\'s offspring is inherited, Paul says, by the one Offspring, Christ, and by all who are his (Galatians 3:16, 29).',
      via: [[33.2500, 35.6500], [33.0178, 35.5686], [32.7000, 35.4500], [32.4136, 35.2408]]
    },
    {
      place: 'bethel', lat: 31.9297, lon: 35.2394,
      title: 'Bethel: a tent and an altar',
      ref: 'Genesis 12:8-9',
      text: 'Following the watershed ridge south, Abram camped on the hill between Bethel and Ai, built a second altar and "called upon the name of the LORD." The pattern of his life in Canaan was set: a tent that moved on and an altar that stayed. From here he drifted on toward the Negeb.'
    },
    {
      place: 'memphis', lat: 29.8486, lon: 31.2547,
      title: 'Egypt: famine and failure',
      ref: 'Genesis 12:10-20',
      text: 'Famine drove Abram down the Way of Shur across northern Sinai into Egypt, where he passed Sarai off as his sister and Pharaoh took her into his house. Pharaoh\'s court in the Middle Kingdom sat near Memphis and Itj-tawy; the marker is placed there as an approximation. God struck Pharaoh\'s house with plagues and Abram left richer, rebuked and unharmed, a preview of the Exodus in miniature.',
      christ: 'The promise survived the patriarch\'s cowardice: God kept faith with Abram when Abram did not keep faith with God (2 Timothy 2:13).',
      via: [[31.7784, 35.2354], [31.5244, 35.1105], [31.2447, 34.8408], [30.9000, 34.2000], [30.8000, 33.5000], [30.7000, 32.8000], [30.7872, 31.8214], [30.1291, 31.3070]]
    },
    {
      place: 'bethel', lat: 31.9297, lon: 35.2394,
      title: 'Bethel again: parting from Lot',
      ref: 'Genesis 13:1-18',
      text: 'Back in the hill country, Abram returned to his altar at Bethel. When their herdsmen quarrelled he let Lot choose first, and Lot chose the lush Jordan valley toward Sodom. Left with the stony hills, Abram was told to look north, south, east and west: all of it would be his, and his offspring like the dust of the earth.',
      via: [[30.1291, 31.3070], [30.7872, 31.8214], [30.7000, 32.8000], [30.8000, 33.5000], [30.9000, 34.2000], [31.2447, 34.8408], [31.5244, 35.1105], [31.7784, 35.2354]]
    },
    {
      place: 'mamre', lat: 31.5560, lon: 35.1050,
      title: 'Hebron and the oaks of Mamre',
      ref: 'Genesis 13:18; 14:13-24; 15:1-21; 17; 18:1-15',
      text: 'By the oaks of Mamre, just north of Hebron, Abram settled longest. From here he rode out to rescue Lot from the eastern kings and met Melchizedek on his return; here God cut a covenant with him under the stars, gave him the sign of circumcision and, in the guise of three visitors, promised Sarah a son within the year. Ramat el-Khalil preserves Herodian and Constantinian remains of a shrine at the traditional site.',
      christ: 'Hebrews reads Melchizedek, king and priest, who blessed Abraham, as a portrait of Christ\'s eternal priesthood (Hebrews 7:1-10).',
      via: [[31.7784, 35.2354], [31.7054, 35.2024]]
    },
    {
      place: 'gerar', lat: 31.3814, lon: 34.6069,
      title: 'Gerar: sojourning among the Philistines',
      ref: 'Genesis 20:1-18; 21:1-7',
      text: 'Abraham moved to the western Negeb and settled at Gerar (probably Tel Haror), where he repeated the sister-deception with King Abimelech. God protected Sarah, and Abimelech, a pagan, proved more scrupulous than the patriarch. In this region, at last, Isaac was born to a ninety-year-old woman, and the promise took on flesh.',
      via: [[31.5244, 35.1105], [31.3000, 34.9000]]
    },
    {
      place: 'beersheba', lat: 31.2447, lon: 34.8408,
      title: 'Beersheba: the well of the oath',
      ref: 'Genesis 21:22-34',
      text: 'At the southern edge of the land Abraham dug a well, swore a treaty with Abimelech and planted a tamarisk, calling on "the LORD, the Everlasting God." Beersheba would become Israel\'s southern boundary marker, "from Dan to Beersheba". Tel Beer Sheva preserves an Iron Age town and a deep well outside its gate; the patriarchal camp was probably nearby.'
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Moriah: the binding of Isaac',
      ref: 'Genesis 22:1-19',
      text: 'A three-day journey north brought Abraham to "the land of Moriah", which 2 Chronicles 3:1 identifies with the hill where Solomon built the Temple. He bound his only son on the altar, and the angel of the LORD stopped his hand; a ram caught in a thicket died instead. "The LORD will provide" became the name of the place, and God swore by himself to bless all nations through Abraham\'s offspring.',
      christ: 'Isaac carried the wood up the hill and was spared; on the same hill God\'s only Son carried a cross and was not (John 3:16; Romans 8:32).',
      via: [[31.5244, 35.1105], [31.7054, 35.2024]]
    },
    {
      place: 'hebron', lat: 31.5247, lon: 35.1107,
      title: 'Hebron: the cave of Machpelah',
      ref: 'Genesis 23; 25:7-10',
      text: 'Sarah died at Hebron and Abraham, still a "sojourner and foreigner", bought the field and cave of Machpelah from Ephron the Hittite for four hundred shekels of silver: the only piece of the promised land he ever owned. He was buried there beside her at 175. The Herodian enclosure over the cave still stands in Hebron, one of the most continuously venerated sites on earth.',
      christ: 'Abraham died "not having received the things promised", looking for a city with foundations whose builder is God (Hebrews 11:10, 13).',
      via: [[31.7054, 35.2024], [31.2447, 34.8408]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 3. JACOB — the wrestler
// ---------------------------------------------------------------------------
{
  id: 'jacob',
  name: 'Jacob: the Wrestler\'s Road',
  era: 'patriarchs',
  color: '#b87333',
  refs: 'Genesis 25:19 – 49:33',
  summary: 'Jacob fled his brother, laboured twenty years in Haran, wrestled with God at the Jabbok and limped home a new man named Israel, before famine and a lost son drew the whole family down to Egypt.',
  duration: 'c. 2006–1859 BC (traditional early chronology); flight to Haran c. 1929 BC, descent to Egypt 1876 BC',
  stops: [
    {
      place: 'beersheba', lat: 31.2447, lon: 34.8408,
      title: 'Beersheba: birthright and blessing',
      ref: 'Genesis 25:19-34; 27:1-45',
      text: 'Isaac made his home at Beersheba, and there the twins grew up: Esau the hunter and Jacob the grasper. Jacob bought the birthright for a bowl of stew and stole the blessing with a disguise. When Esau vowed murder, Rebekah sent her favourite north to her brother Laban in Haran.',
      christ: 'God chose the younger, undeserving son "in order that God\'s purpose of election might continue" (Romans 9:11); grace, not merit, carries the promise.'
    },
    {
      place: 'bethel', lat: 31.9297, lon: 35.2394,
      title: 'Bethel: the stairway to heaven',
      ref: 'Genesis 28:10-22',
      text: 'On his first night alone, sleeping with a stone for a pillow on the ridge north of Jerusalem, Jacob dreamed of a stairway between earth and heaven with the LORD standing above it, renewing every promise made to Abraham. "Surely the LORD is in this place, and I did not know it." He named it Bethel, House of God, and vowed to return.',
      christ: 'Jesus told Nathanael he would see "the angels of God ascending and descending on the Son of Man": he is the stairway (John 1:51).',
      via: [[31.5244, 35.1105], [31.7054, 35.2024], [31.7784, 35.2354]]
    },
    {
      place: 'haran', lat: 36.8650, lon: 39.0317,
      title: 'Haran: twenty years with Laban',
      ref: 'Genesis 29:1 – 31:21',
      text: 'Retracing his grandfather\'s road in reverse, Jacob reached Haran and met Rachel at the well. Laban tricked the trickster: seven years for Leah, seven for Rachel, six more for flocks. Eleven sons and a daughter were born here, and Jacob\'s cunning with the breeding stock made him rich before he fled with his wives, children and herds.',
      via: [[32.2136, 35.2819], [32.4136, 35.2408], [33.0178, 35.5686], [33.2500, 35.6500], [33.5138, 36.2765], [35.1300, 36.7500], [36.2000, 37.1600], [36.8292, 38.0150]]
    },
    {
      place: 'penuel', lat: 32.1831, lon: 35.6892,
      title: 'Mahanaim and Penuel: wrestling at the Jabbok',
      ref: 'Genesis 31:22 – 32:32',
      text: 'Laban overtook him in the hills of Gilead and they parted with a covenant heap. Camping at Mahanaim, Jacob learned that Esau was coming with four hundred men. That night by the ford of the Jabbok a man wrestled with him until dawn, dislocated his hip and renamed him Israel, "for you have striven with God and with men, and have prevailed." Penuel is probably one of the twin mounds of Tulul edh-Dhahab in the Jabbok gorge.',
      christ: 'Jacob saw God face to face and lived; the God who wrestled and then blessed is the pattern of a grace that wounds in order to heal (Hosea 12:3-4).',
      via: [[36.8292, 38.0150], [36.2000, 37.1600], [35.1300, 36.7500], [33.5138, 36.2765], [32.8100, 36.0200], [32.5500, 35.9500], [32.3500, 35.8500]]
    },
    {
      place: 'succoth', lat: 32.1969, lon: 35.6208,
      title: 'Succoth: booths in the Jordan valley',
      ref: 'Genesis 33:1-17',
      text: 'Esau ran to meet him, embraced him and wept; the brothers parted in peace. Jacob turned down to Succoth (probably Tell Deir Alla) where the Jabbok enters the Jordan valley, built a house and booths for his cattle, and stayed long enough for the boys to grow. Bronze Age remains at the site fit the period.'
    },
    {
      place: 'shechem', lat: 32.2136, lon: 35.2819,
      title: 'Shechem: a field bought and a city sacked',
      ref: 'Genesis 33:18 – 34:31',
      text: 'Crossing the Jordan near Adam and climbing Wadi Farah, Jacob camped before Shechem and bought a plot of ground, the field where Joseph would later be buried and where a well still bears Jacob\'s name. Then Dinah was violated, and Simeon and Levi answered treachery with massacre. Jacob, appalled, was told by God to move on to Bethel.',
      christ: 'At Jacob\'s well outside Shechem Jesus offered a Samaritan woman living water and declared himself the Messiah (John 4:5-26).',
      via: [[32.1000, 35.5300], [32.2000, 35.4000]]
    },
    {
      place: 'bethel', lat: 31.9297, lon: 35.2394,
      title: 'Bethel: the vow kept',
      ref: 'Genesis 35:1-15',
      text: 'Jacob purified his household, buried their foreign gods under the oak at Shechem and went up to Bethel to fulfil the vow made as a fugitive. God appeared again, confirmed the name Israel and repeated the promise of a nation, kings and land. Jacob set up a pillar and poured out a drink offering.'
    },
    {
      place: 'bethlehem', lat: 31.7054, lon: 35.2024,
      title: 'Bethlehem: the death of Rachel',
      ref: 'Genesis 35:16-21',
      text: 'On the road south, still some distance from Ephrath, Rachel died giving birth to Benjamin, naming him "son of my sorrow" with her last breath; Jacob renamed him "son of the right hand". He buried her by the roadside and set up a pillar. The traditional Tomb of Rachel stands at Bethlehem\'s northern edge, though the note in 1 Samuel 10:2 has led some to place the grave further north near Ramah.',
      christ: 'Matthew hears Rachel weeping again when Bethlehem\'s children are slaughtered (Matthew 2:18; Jeremiah 31:15), sorrow that the child who escaped would one day answer.',
      via: [[31.7784, 35.2354]]
    },
    {
      place: 'hebron', lat: 31.5244, lon: 35.1105,
      title: 'Hebron: home to Isaac',
      ref: 'Genesis 35:27-29; 37:1-14',
      text: 'Jacob came at last to his father at Mamre near Hebron, and Esau and Jacob together buried Isaac at 180. Here the family settled, and from here Joseph was sent to find his brothers, a walk that ended in a pit and a slave caravan. Jacob would spend twenty-two years believing his son dead.'
    },
    {
      place: 'goshen', lat: 30.7872, lon: 31.8214,
      title: 'Egypt: the family goes down to Goshen',
      ref: 'Genesis 45:25 – 47:12',
      text: 'When the news came that Joseph was alive and ruling Egypt, Jacob went down to Beersheba to sacrifice and heard God say, "Do not be afraid to go down to Egypt." Seventy souls travelled the Way of Shur to Goshen in the eastern delta, where Joseph fell on his father\'s neck and wept. Israel lived seventeen more years, blessed the tribes and died asking to be carried home to Machpelah.',
      christ: 'Dying, Jacob foresaw a ruler from Judah to whom "shall be the obedience of the peoples" (Genesis 49:10), the sceptre that finally rests in Christ.',
      via: [[31.2447, 34.8408], [30.9000, 34.2000], [30.8000, 33.5000], [30.7000, 32.8000]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 4. JOSEPH — from the pit to the palace
// ---------------------------------------------------------------------------
{
  id: 'joseph',
  name: 'Joseph: from the Pit to the Palace',
  era: 'patriarchs',
  color: '#4b5fa6',
  refs: 'Genesis 37 – 50',
  summary: 'Sold by his brothers at Dothan and carried down the coast road into Egypt, Joseph rose from slave and prisoner to Pharaoh\'s vizier, and in the end saved the very family that betrayed him.',
  duration: 'c. 1898–1805 BC (traditional early chronology)',
  stops: [
    {
      place: 'hebron', lat: 31.5244, lon: 35.1105,
      title: 'Hebron: the favoured son',
      ref: 'Genesis 37:1-14',
      text: 'In the valley of Hebron, Jacob\'s seventeen-year-old son wore a special robe, reported his brothers\' faults and dreamed of sheaves and stars bowing to him. His brothers hated him for it. When they took the flocks north to pasture, Jacob sent Joseph to check on them, a journey of some 100 km on foot.'
    },
    {
      place: 'dothan', lat: 32.4136, lon: 35.2408,
      title: 'Dothan: sold for twenty shekels',
      ref: 'Genesis 37:15-36',
      text: 'Joseph followed the ridge road north past Bethel and Shechem to Dothan, a tell on the edge of a fertile plain crossed by the caravan route from Gilead to the coast. His brothers stripped him, threw him in a dry cistern and sold him to passing Ishmaelite traders for twenty shekels of silver. The robe, dipped in goat\'s blood, went home to Jacob.',
      christ: 'A beloved son betrayed by his brothers for silver, stripped and handed to Gentiles: Joseph is one of Scripture\'s clearest sketches of Jesus (Acts 7:9-14).',
      via: [[31.7054, 35.2024], [31.7784, 35.2354], [31.9297, 35.2394], [32.2136, 35.2819]]
    },
    {
      place: 'memphis', lat: 29.8486, lon: 31.2547,
      title: 'Egypt: Potiphar\'s house, prison and Pharaoh\'s court',
      ref: 'Genesis 39 – 41',
      text: 'The caravan took the coast road through Philistia and across northern Sinai into the Nile delta. In Egypt Joseph served Potiphar faithfully, was falsely accused and jailed, and interpreted dreams in prison until Pharaoh himself needed one explained. At thirty he became vizier over all Egypt and married Asenath, daughter of the priest of On (Heliopolis). The Middle Kingdom court sat near Memphis and Itj-tawy; the marker is placed there as the best approximation.',
      christ: 'From prison to the right hand of the throne: Joseph\'s humiliation and exaltation trace the pattern of Philippians 2:6-11.',
      via: [[32.1050, 34.9306], [31.8000, 34.6500], [31.6700, 34.5500], [31.5017, 34.4668], [31.2900, 34.2500], [31.1300, 33.8000], [31.0400, 32.5500], [30.6000, 31.7000], [30.1291, 31.3070]]
    },
    {
      place: 'goshen', lat: 30.7872, lon: 31.8214,
      title: 'Goshen: the family reunited',
      ref: 'Genesis 42 – 47',
      text: 'Famine brought the brothers to Egypt twice; Joseph tested them, wept, and finally revealed himself: "God sent me before you to preserve life." He settled his father and seventy kin in the pastureland of Goshen, "the land of Rameses", in the eastern delta near Avaris (Tell el-Dab\'a), where excavations have uncovered a large Asiatic population in exactly this period.',
      christ: '"You meant evil against me, but God meant it for good" (Genesis 50:20): Joseph\'s words are the Bible\'s clearest statement that God works salvation through betrayal, as he did supremely at the cross (Acts 2:23).',
      via: [[30.1291, 31.3070]]
    },
    {
      place: 'shechem', lat: 32.2136, lon: 35.2819,
      title: 'Shechem: the bones of Joseph',
      ref: 'Genesis 50:22-26; Exodus 13:19; Joshua 24:32; Hebrews 11:22',
      text: 'Joseph died at 110, embalmed in Egyptian fashion, but he made Israel swear to carry his bones to the land God had promised. Four centuries later Moses took the coffin out of Egypt, and Joshua finally buried it at Shechem in the field Jacob had bought. A tomb venerated as Joseph\'s stands there still. His faith reached beyond his own life to God\'s promise.',
      via: [[30.1291, 31.3070], [30.6000, 31.7000], [31.0400, 32.5500], [31.1300, 33.8000], [31.2900, 34.2500], [31.5017, 34.4668], [31.6700, 34.5500], [31.8000, 34.6500], [32.1050, 34.9306], [32.2500, 35.0500]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 5. THE EXODUS — out of Egypt to the plains of Moab
// ---------------------------------------------------------------------------
{
  id: 'exodus',
  name: 'The Exodus: Out of Egypt',
  era: 'exodus',
  color: '#d9822b',
  refs: 'Exodus 12 – Deuteronomy 34; Numbers 33',
  summary: 'Israel left Rameses on Passover night, passed through the sea, received the law at Sinai and wandered forty years before camping on the plains of Moab opposite Jericho. Numbers 33 preserves the itinerary; many of its stations cannot be located with certainty.',
  duration: 'c. 1446–1406 BC (early date, from 1 Kings 6:1); the late date places it c. 1260 BC',
  stops: [
    {
      place: 'rameses', lat: 30.8000, lon: 31.8333,
      title: 'Rameses: Passover night',
      ref: 'Exodus 12:1-42; Numbers 33:3-5',
      text: 'Israel set out from Rameses in the eastern delta, identified with Qantir and the adjoining Hyksos capital Avaris (Tell el-Dab\'a), on the fifteenth day of the first month, the morning after the Passover lamb was eaten and the firstborn of Egypt died. 1 Kings 6:1 places the Exodus 480 years before Solomon\'s fourth year, giving c. 1446 BC; this atlas adopts that early date. Many scholars prefer c. 1260 BC under Rameses II, since the city bears his name; early-date scholars reply that the name is an editorial updating (compare Genesis 47:11) and point to Judges 11:26 and the Merneptah stela, which already knows Israel in Canaan by c. 1208 BC.',
      christ: '"Christ, our Passover lamb, has been sacrificed" (1 Corinthians 5:7): the blood on the doorposts is the first great picture of the cross.'
    },
    {
      place: 'succoth', lat: 30.5528, lon: 32.0997,
      title: 'Succoth: the first camp',
      ref: 'Exodus 12:37; 13:20; Numbers 33:5',
      text: 'The people marched south-east down the Wadi Tumilat, the natural corridor from the delta toward the isthmus, and camped at Succoth, generally identified with Egyptian Tjeku at Tell el-Maskhuta or Tell er-Retabeh. Here Moses reminded them to carry the bones of Joseph. God did not lead them by the short coastal "way of the land of the Philistines" lest war turn them back.',
      via: [[30.6000, 31.9500]]
    },
    {
      place: 'etham', lat: 30.4500, lon: 32.3500,
      title: 'Etham: the edge of the wilderness',
      ref: 'Exodus 13:20-22; Numbers 33:6',
      text: 'At Etham "on the edge of the wilderness" the pillar of cloud by day and fire by night first appears, God himself going before his people. The site is unknown; it lay somewhere at the eastern mouth of the Wadi Tumilat near the line of lakes that then separated Egypt from Sinai. From here God turned them back toward the sea.'
    },
    {
      place: 'pi-hahiroth', lat: 30.3000, lon: 32.4000,
      title: 'Pi-hahiroth: through the sea',
      ref: 'Exodus 14:1 – 15:21; Numbers 33:7-8',
      text: 'Trapped between Pharaoh\'s chariots and the water at Pi-hahiroth, "between Migdol and the sea", Israel watched the LORD divide the sea by a strong east wind and walked through on dry ground; the returning waters destroyed the Egyptian army. The marker is placed at the Bitter Lakes, the most common reconstruction of the yam suph on the traditional route. Alternatives include the northern tip of the Gulf of Suez (29.95, 32.55), Lake Ballah further north, and, on the Arabian-Sinai theory, the Gulf of Aqaba at Nuweiba (28.98, 34.65), which most specialists reject because of the distances involved.',
      christ: 'Paul says Israel "were baptised into Moses in the cloud and in the sea" (1 Corinthians 10:2): the sea is the pattern of the deliverance sealed in baptism.'
    },
    {
      place: 'marah', lat: 29.4083, lon: 32.9550,
      title: 'Marah: bitter water made sweet',
      ref: 'Exodus 15:22-26; Numbers 33:8',
      text: 'Three days into the wilderness of Shur without water, the people reached a spring too bitter to drink. Moses threw in a log at God\'s command and the water became sweet, and the LORD named himself "your healer". Ain Hawarah, a brackish spring some 75 km down the Sinai coast, has been the traditional identification since the nineteenth century.',
      via: [[30.0000, 32.5800], [29.7000, 32.7000]]
    },
    {
      place: 'elim', lat: 29.2333, lon: 32.9833,
      title: 'Elim: twelve springs and seventy palms',
      ref: 'Exodus 15:27; Numbers 33:9',
      text: 'A day further south lay Elim, with its twelve springs and seventy palm trees, a place of rest after Marah. Wadi Gharandal, a well-watered oasis on the coastal route, fits the description and the distance. Numbers adds a camp by the Red Sea after Elim, presumably where the wadi meets the Gulf of Suez.'
    },
    {
      place: 'wilderness-sin', lat: 28.9000, lon: 33.2000,
      title: 'Wilderness of Sin: manna and quail',
      ref: 'Exodus 16; Numbers 33:11-12',
      text: 'A month out of Egypt, in the barren coastal plain of el-Markha or the sandy Debbet er-Ramleh inland, the people grumbled for the bread of Egypt. God rained bread from heaven, manna, six mornings a week for forty years, and sent quail in the evening. The Sabbath rhythm of gathering was taught here before Sinai commanded it.',
      christ: '"I am the bread of life," Jesus said; "your fathers ate the manna in the wilderness, and they died" (John 6:48-51). He is the bread that gives life that lasts.',
      via: [[29.0500, 33.1000]]
    },
    {
      place: 'rephidim', lat: 28.7167, lon: 33.6167,
      title: 'Rephidim: water from the rock, war with Amalek',
      ref: 'Exodus 17; Numbers 33:14',
      text: 'Turning inland up the great Wadi Feiran, the only green valley in south Sinai, Israel camped at Rephidim and found no water. Moses struck the rock at Horeb and water flowed; then Amalek attacked and Joshua fought while Moses\' hands were held aloft on the hill. Wadi Feiran\'s oasis and its high hill (Jebel Tahuneh) match the story well.',
      christ: 'Paul identifies the rock: "they drank from the spiritual Rock that followed them, and the Rock was Christ" (1 Corinthians 10:4), struck once so that living water might flow.',
      via: [[28.9000, 33.3500], [28.7500, 33.5000]]
    },
    {
      place: 'sinai', lat: 28.5397, lon: 33.9750,
      title: 'Mount Sinai: the covenant',
      ref: 'Exodus 19 – 40; Leviticus; Numbers 1 – 10:10',
      text: 'In the third month Israel camped before the mountain, and God descended in fire and thunder to give the Ten Words, the covenant, the tabernacle plans and the priesthood. They stayed almost a year. Jebel Musa (2,285 m), beside the fourth-century monastery of St Catherine, has been the traditional Sinai since at least the Byzantine period; its broad plain of er-Raha could hold a great camp. Nearby Jebel Serbal, Jebel Sin Bishar in north-west Sinai, Har Karkom in the Negev and Jebel al-Lawz in Saudi Arabia have all been proposed; none has produced compelling archaeological evidence and the Byzantine tradition remains the default.',
      christ: 'Hebrews sets two mountains side by side: Sinai, blazing with fire and terror, and Mount Zion, where we come to Jesus and his sprinkled blood (Hebrews 12:18-24).',
      via: [[28.6500, 33.7500]]
    },
    {
      place: 'kibroth-hattaavah', lat: 28.6500, lon: 34.1000,
      title: 'Kibroth-hattaavah: graves of craving',
      ref: 'Numbers 11; 33:16',
      text: 'Three days from Sinai the people wept for meat and despised the manna. God sent quail a day\'s journey deep around the camp, and a plague, and the place was named Graves of Craving. Here too Moses, exhausted, was given seventy elders to share the Spirit and the burden. The location is unknown; it lay on the route north-east toward the Gulf of Aqaba.'
    },
    {
      place: 'hazeroth', lat: 28.8975, lon: 34.3486,
      title: 'Hazeroth: Miriam\'s leprosy',
      ref: 'Numbers 12; 33:17',
      text: 'At Hazeroth Miriam and Aaron spoke against Moses over his Cushite wife and his unique authority; Miriam was struck with leprosy and shut outside the camp for seven days. The oasis of Ain Hudherah, with its palms in a red-granite gorge, has long been suggested, and the name may echo the Hebrew. The site sits on the natural route from Sinai to the Arabah.'
    },
    {
      place: 'kadesh-barnea', lat: 30.6469, lon: 34.4247,
      title: 'Kadesh-barnea: thirty-eight years',
      ref: 'Numbers 13 – 20:13; 33:36; Deuteronomy 1:19-46',
      text: 'From Kadesh, an oasis on the southern edge of Canaan, twelve spies went up into the land; the people believed the ten who feared the giants rather than the two who trusted God, and were sentenced to wander until that generation died. Kadesh became the base for most of the forty years. Miriam died here, and here Moses struck the rock in anger and forfeited his own entry. Ain el-Qudeirat, the largest spring in northern Sinai, is the accepted site, though its excavated forts are later than Moses.',
      christ: 'Hebrews 3–4 turns Kadesh into a sermon: do not harden your hearts as in the rebellion, for a Sabbath rest still remains for the people of God.',
      via: [[29.2000, 34.6000], [29.7000, 34.6000], [30.2000, 34.5000]]
    },
    {
      place: 'mount-hor', lat: 30.3167, lon: 35.4050,
      title: 'Mount Hor: the death of Aaron',
      ref: 'Numbers 20:22-29; 33:37-39',
      text: 'When Edom refused passage along the King\'s Highway, Israel turned toward Mount Hor "on the border of the land of Edom". There Aaron\'s robes were transferred to his son Eleazar and he died, aged 123. Jebel Harun above Petra, crowned by a shrine to Aaron, has been the traditional identification since Josephus; Jebel Madurah north-west of the Arabah, closer to Kadesh, is preferred by some because the traditional site lies deep inside Edom.',
      via: [[30.5500, 34.9000], [30.4500, 35.2000]]
    },
    {
      place: 'punon', lat: 30.6272, lon: 35.4903,
      title: 'Punon: the bronze serpent',
      ref: 'Numbers 21:4-9; 33:42-43',
      text: 'Skirting Edom by "the way to the Red Sea", the people grew impatient and were bitten by fiery serpents; Moses lifted a bronze serpent on a pole and whoever looked at it lived. Jewish tradition places the episode near Punon, the copper-mining site of Feinan in the Wadi Arabah, where ancient smelting slag still covers the ground. The exact detour around Edom (Deuteronomy 2:8 mentions Elath and Ezion-geber) is debated; the thread here follows the shorter reconstruction up the Arabah.',
      christ: '"As Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up, that whoever believes in him may have eternal life" (John 3:14-15).',
      via: [[30.4500, 35.3500]]
    },
    {
      place: 'oboth', lat: 30.7500, lon: 35.5500,
      title: 'Oboth',
      ref: 'Numbers 21:10; 33:43',
      text: 'Oboth, "water-skins", was the next station as Israel climbed out of the Arabah onto the Edomite plateau. Its location is unknown; the marker sits on the natural ascent toward the plateau east of Feinan. The itinerary of Numbers 33 preserves these names with care even where we can no longer find them.'
    },
    {
      place: 'iye-abarim', lat: 30.9500, lon: 35.6500,
      title: 'Iye-abarim: the border of Moab',
      ref: 'Numbers 21:11; 33:44',
      text: 'Iye-abarim, "ruins of the regions beyond", lay "in the wilderness that is opposite Moab, toward the sunrise", that is, on the desert fringe east of the settled land. From here Israel would cross the deep gorges that mark Moab\'s borders. The site is unidentified; the marker is placed near the head of the Zered.'
    },
    {
      place: 'zered', lat: 31.0300, lon: 35.6400,
      title: 'The Zered: the generation gone',
      ref: 'Numbers 21:12; Deuteronomy 2:13-15',
      text: 'The Wadi al-Hasa, the Zered, drains into the southern end of the Dead Sea and marked the boundary between Edom and Moab. Deuteronomy records that thirty-eight years had passed from Kadesh to the crossing of the Zered, "until the entire generation... had perished". A new generation now marched toward the promise.'
    },
    {
      place: 'arnon', lat: 31.4600, lon: 35.7900,
      title: 'The Arnon: into Sihon\'s land',
      ref: 'Numbers 21:13-31; Deuteronomy 2:24-37',
      text: 'The Arnon (Wadi Mujib) cuts a canyon half a kilometre deep across the plateau and formed Moab\'s northern border with the Amorite kingdom of Sihon. Refused passage, Israel defeated Sihon at Jahaz and took his land from the Arnon to the Jabbok. The King\'s Highway, the ancient north-south route, crossed the gorge here.',
      via: [[31.1800, 35.7000]]
    },
    {
      place: 'dibon', lat: 31.5000, lon: 35.7833,
      title: 'Dibon-gad',
      ref: 'Numbers 21:30; 33:45-46',
      text: 'North of the Arnon lay Dibon, later settled by Gad and later still the Moabite royal city where the Mesha Stela was found in 1868: the earliest inscription outside the Bible to name the LORD (YHWH), and possibly, on a damaged line, the "house of David". Israel camped here and at Almon-diblathaim on the way north.'
    },
    {
      place: 'heshbon', lat: 31.8000, lon: 35.8092,
      title: 'Heshbon: Sihon\'s capital',
      ref: 'Numbers 21:25-30; Deuteronomy 2:26-37',
      text: 'Heshbon (Tell Hesban) was Sihon\'s royal city; an old taunt-song about its fall is preserved in Numbers 21. Israel occupied it and the surrounding towns, and Reuben later received it. Excavations have found little from the Late Bronze Age, which some take as evidence that the Amorite city lay at a nearby site.',
      via: [[31.7200, 35.8000]]
    },
    {
      place: 'nebo', lat: 31.7683, lon: 35.7256,
      title: 'Mount Nebo: Moses sees the land',
      ref: 'Deuteronomy 32:48-52; 34:1-8',
      text: 'From the Pisgah ridge of Mount Nebo, 700 m above the Dead Sea, Moses was shown the whole land from Gilead to the Negeb and the Mediterranean, and told, "I have let you see it with your eyes, but you shall not go over there." He died at 120 and God buried him in an unknown grave. The Byzantine memorial church on Siyagha stands at the traditional viewpoint.',
      christ: 'Moses finally stood in the land on a high mountain, talking with the greater Prophet he had foretold (Matthew 17:3; Deuteronomy 18:15).'
    },
    {
      place: 'shittim', lat: 31.8397, lon: 35.6733,
      title: 'The plains of Moab: Shittim',
      ref: 'Numbers 22 – 36; Deuteronomy 1:1-5; Joshua 2:1',
      text: 'Israel\'s last camp before the Jordan lay at Abel-shittim on the plains of Moab opposite Jericho, "from Beth-jeshimoth as far as Abel-shittim". Here Balaam blessed when he was hired to curse, the people sinned with the daughters of Moab at Baal-peor, a second census was taken, and Moses preached Deuteronomy. Tell el-Hammam, with its great Bronze Age fortifications, is a leading candidate for the site.',
      christ: 'Balaam\'s oracle on this plain, "a star shall come out of Jacob, and a sceptre shall rise out of Israel" (Numbers 24:17), was read by the church as the promise of Christ.'
    }
  ]
},

// ---------------------------------------------------------------------------
// 6. THE CONQUEST — Joshua and the land
// ---------------------------------------------------------------------------
{
  id: 'conquest',
  name: 'Joshua: the Conquest of the Land',
  era: 'conquest-judges',
  color: '#8c6d1f',
  refs: 'Joshua 1 – 24',
  summary: 'Joshua led Israel across the Jordan, struck the central hill country from Jericho and Ai, swept the southern coalition down the Beth-horon road and turned north to burn Hazor, before the tabernacle was pitched at Shiloh and the land allotted.',
  duration: 'c. 1406–1399 BC (early date); c. 1230–1220 BC on the late date',
  stops: [
    {
      place: 'shittim', lat: 31.8397, lon: 35.6733,
      title: 'Shittim: a new leader',
      ref: 'Joshua 1:1 – 2:24',
      text: 'After Moses\' death the LORD spoke to Joshua on the plains of Moab: "Be strong and courageous... for the LORD your God is with you wherever you go." From Shittim two spies slipped into Jericho and were hidden by Rahab, who confessed that "the LORD your God, he is God in the heavens above and on the earth beneath."',
      christ: 'Joshua bears the name Yeshua, "the LORD saves", the very name given to Jesus, who leads his people into a better rest (Hebrews 4:8-9).'
    },
    {
      place: 'jordan-crossing', lat: 31.8400, lon: 35.5400,
      title: 'The Jordan crossing',
      ref: 'Joshua 3:1 – 4:18',
      text: 'In the spring flood the priests carried the ark into the river opposite Jericho and the water piled up far upstream at Adam, beside Zarethan, while the nation crossed on dry ground. Twelve stones were taken from the riverbed as a memorial. The traditional ford lies a few kilometres east of Jericho, close to where Jesus would later be baptised.',
      christ: 'The ark, God\'s presence, went first into the waters and held them back until the people were safe: an image of the one who goes before us through death.'
    },
    {
      place: 'gilgal', lat: 31.8667, lon: 35.4833,
      title: 'Gilgal: covenant renewed',
      ref: 'Joshua 4:19 – 5:15',
      text: 'The first camp in the land was at Gilgal, on the eastern edge of Jericho\'s oasis. The twelve stones were set up, the new generation was circumcised, Passover was kept, the manna ceased, and Joshua met the commander of the LORD\'s army with a drawn sword. Gilgal remained Israel\'s base for the whole southern campaign; the exact site is uncertain.'
    },
    {
      place: 'jericho', lat: 31.8711, lon: 35.4441,
      title: 'Jericho: the walls fall',
      ref: 'Joshua 6',
      text: 'For six days the ark circled the oldest walled city in the world; on the seventh the trumpets sounded, the people shouted and the wall fell down flat. Only Rahab\'s household was spared. Tell es-Sultan\'s archaeology is famously contested: Garstang (1930s) found a fallen wall and burned city he dated to c. 1400 BC; Kenyon (1950s) redated the destruction to c. 1550 BC and found little of the Late Bronze Age; Wood (1990) argued on pottery grounds for Garstang\'s date. Erosion has removed most of the relevant levels.',
      christ: 'A city taken by faith and a prostitute saved by a scarlet cord: "By faith the walls of Jericho fell down" (Hebrews 11:30-31).'
    },
    {
      place: 'ai', lat: 31.9167, lon: 35.2611,
      title: 'Ai: defeat and victory',
      ref: 'Joshua 7:1 – 8:29',
      text: 'Climbing the steep wadis from Jericho to the hill country, Israel was routed at Ai because Achan had stolen from Jericho\'s spoil. After his judgement Joshua took the town by ambush and burned it. Et-Tell, the usual identification, was largely unoccupied in this period, a genuine difficulty; Khirbet el-Maqatir, a small fortified site 1 km west with a Late Bronze destruction, has been proposed instead.',
      via: [[31.8800, 35.3800], [31.9000, 35.3200]]
    },
    {
      place: 'ebal', lat: 32.2333, lon: 35.2733,
      title: 'Mount Ebal: the law read in the land',
      ref: 'Joshua 8:30-35; Deuteronomy 27',
      text: 'Joshua marched the whole assembly north to Shechem and, as Moses had commanded, built an altar on Mount Ebal, wrote the law on plastered stones and read the blessings and curses with half the tribes on Ebal and half on Gerizim. Adam Zertal excavated a large Iron Age I altar-like structure on Ebal\'s slope; whether it is Joshua\'s remains disputed.',
      christ: 'The curses were read on Ebal; Christ "became a curse for us" (Galatians 3:13) so that the blessing of Gerizim might fall on us.',
      via: [[32.0556, 35.2897], [32.2136, 35.2819]]
    },
    {
      place: 'gibeon', lat: 31.8478, lon: 35.1847,
      title: 'Gibeon: the treaty and the night march',
      ref: 'Joshua 9:1 – 10:10',
      text: 'The Hivites of Gibeon tricked Israel into a treaty with mouldy bread and worn-out sandals, and Joshua honoured it. When five Amorite kings led by Jerusalem besieged Gibeon for defecting, Joshua marched all night from Gilgal, about 30 km with a 1,000 m climb, and fell on them at dawn. El-Jib is securely identified by jar handles inscribed "Gibeon" found in its great rock-cut pool.',
      via: [[32.0556, 35.2897], [31.9297, 35.2394], [31.8667, 35.4833], [31.8600, 35.3500]]
    },
    {
      place: 'beth-horon', lat: 31.8830, lon: 35.1180,
      title: 'Beth-horon: hailstones and the long day',
      ref: 'Joshua 10:10-15',
      text: 'The Amorites fled west down the ascent of Beth-horon, the main road from the hills to the coastal plain, and "the LORD threw down large stones from heaven" on them as far as Azekah. Here Joshua prayed and the sun stood still over Gibeon. Upper and Lower Beth-horon (Beit Ur al-Fauqa and al-Tahta) still mark the pass, one of the most fought-over roads in the land\'s history.'
    },
    {
      place: 'makkedah', lat: 31.5500, lon: 34.9500,
      title: 'Makkedah: the five kings',
      ref: 'Joshua 10:16-28',
      text: 'The five kings hid in a cave at Makkedah in the Shephelah; Joshua sealed it with stones, finished the pursuit, then brought them out, executed them and hung them on trees till evening. The town fell the same day. Makkedah is not securely located; Khirbet el-Qom, near Lachish, is one candidate.',
      via: [[31.8886, 35.0800], [31.8000, 34.9800], [31.7000, 34.9358]]
    },
    {
      place: 'lachish', lat: 31.5650, lon: 34.8489,
      title: 'Lachish',
      ref: 'Joshua 10:31-33',
      text: 'Lachish, the greatest city of the Shephelah after Jerusalem, fell to Joshua on the second day, and King Horam of Gezer who came to its aid was destroyed. Tell ed-Duweir has yielded a Late Bronze destruction (Level VII or VI, depending on date) and, from later centuries, the famous Assyrian siege ramp and the Lachish Letters.',
      via: [[31.6000, 34.8800]]
    },
    {
      place: 'eglon', lat: 31.5867, lon: 34.9256,
      title: 'Eglon',
      ref: 'Joshua 10:34-35',
      text: 'Eglon fell in a single day. Tel Eton, with a substantial Late Bronze and Iron Age town on the border between the Shephelah and the hills, is now the leading identification; the older candidate Tell el-Hesi lies further west toward the plain. The campaign then turned up into the hill country.'
    },
    {
      place: 'hebron', lat: 31.5244, lon: 35.1105,
      title: 'Hebron: the city of the Anakim',
      ref: 'Joshua 10:36-37; 14:6-15; 15:13-14',
      text: 'Joshua took Hebron, the burial place of the patriarchs and stronghold of the giant Anakim whose size had terrified the spies forty-five years earlier. The city was later given to Caleb, who at eighty-five drove out the Anakim, "because he wholly followed the LORD".',
      via: [[31.5500, 35.0500]]
    },
    {
      place: 'debir', lat: 31.4333, lon: 35.0167,
      title: 'Debir: the southern hills',
      ref: 'Joshua 10:38-43; 15:15-19',
      text: 'Debir (Kiriath-sepher), in the hills south-west of Hebron, was the last named city of the southern campaign; Khirbet Rabud is the accepted site. Joshua struck the whole region "from Kadesh-barnea as far as Gaza" in one sweep "because the LORD God of Israel fought for Israel", then returned with all Israel to Gilgal.'
    },
    {
      place: 'gilgal', lat: 31.8667, lon: 35.4833,
      title: 'Gilgal: the base camp',
      ref: 'Joshua 10:43; 14:6',
      text: 'The army returned across the Judean wilderness to the camp at Gilgal. Gilgal remained the tabernacle\'s home and the tribal assembly point until the land was pacified enough to move it to Shiloh; here Caleb came to claim Hebron.',
      via: [[31.5244, 35.1105], [31.6500, 35.3500], [31.8000, 35.4500]]
    },
    {
      place: 'hazor', lat: 33.0178, lon: 35.5686,
      title: 'Hazor: the northern campaign',
      ref: 'Joshua 11:1-15',
      text: 'Jabin of Hazor, "the head of all those kingdoms", gathered a great northern coalition at the waters of Merom. Joshua struck first, routed them and burned Hazor, the only northern city he put to the torch. Hazor was the largest Canaanite city in the land (80 hectares); Yadin and later Ben-Tor found a violent Late Bronze destruction with smashed cult statues, dated by most to the thirteenth century, a key argument in the dating debate.',
      via: [[32.2000, 35.5500], [32.5000, 35.5000], [32.8000, 35.5200], [32.9800, 35.4400]]
    },
    {
      place: 'shiloh', lat: 32.0556, lon: 35.2897,
      title: 'Shiloh: rest, and the land divided',
      ref: 'Joshua 18:1 – 21:45; 24:1-33',
      text: 'With the land subdued, the whole congregation assembled at Shiloh and set up the tent of meeting; the remaining land was allotted by lot and the Levitical cities assigned. "Not one word of all the good promises that the LORD had made to the house of Israel had failed." Joshua\'s farewell covenant was made at nearby Shechem, and he was buried in his own inheritance at Timnath-serah.',
      christ: 'Joshua gave rest in the land but not the final rest; "there remains a Sabbath rest for the people of God", entered through the greater Joshua (Hebrews 4:8-10).',
      via: [[32.8000, 35.5200], [32.5000, 35.5000], [32.2000, 35.5500], [32.1000, 35.5300], [32.2000, 35.4000], [32.2136, 35.2819]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 7. THE ARK OF THE COVENANT — from Sinai to the Temple
// ---------------------------------------------------------------------------
{
  id: 'ark',
  name: 'The Ark of the Covenant',
  era: 'united-kingdom',
  color: '#e8c547',
  refs: 'Exodus 25:10-22; Joshua 3–4; 1 Samuel 4–7; 2 Samuel 6; 1 Kings 8',
  summary: 'The gold-covered chest that held the tablets and carried God\'s throne-presence travelled from Sinai through the Jordan to Shiloh, was captured by the Philistines and sent back in fear, waited at Kiriath-jearim and came at last to Zion and Solomon\'s Temple.',
  duration: 'c. 1446–959 BC (early chronology)',
  stops: [
    {
      place: 'sinai', lat: 28.5397, lon: 33.9750,
      title: 'Sinai: the ark is made',
      ref: 'Exodus 25:10-22; 37:1-9; 40:20-21, 34-38',
      text: 'At Sinai Bezalel built a chest of acacia wood overlaid with gold, a little over a metre long, with a solid gold lid and two cherubim whose wings overshadowed the mercy seat. Inside went the tablets of the covenant. "There I will meet with you," God said, and when the tabernacle was raised the glory-cloud filled it. The ark was never a magic box; it was the footstool of the invisible King.',
      christ: 'Paul calls Christ our hilasterion, the "mercy seat" or propitiation (Romans 3:25): the place where God meets sinners over blood is now a person.'
    },
    {
      place: 'gilgal', lat: 31.8667, lon: 35.4833,
      title: 'The Jordan and Gilgal: the ark leads the way',
      ref: 'Numbers 10:33-36; Joshua 3:1 – 4:19; 6:1-20',
      text: 'For forty years the ark went before the camp, and Moses prayed, "Arise, O LORD, and let your enemies be scattered." At the Jordan the priests bearing it stood mid-river while Israel crossed; at Jericho it circled the walls. Gilgal then housed it through the conquest campaigns.',
      via: [[28.8975, 34.3486], [30.6469, 34.4247], [30.3167, 35.4050], [30.6272, 35.4903], [31.0300, 35.6400], [31.4600, 35.7900], [31.7683, 35.7256], [31.8397, 35.6733], [31.8400, 35.5400]]
    },
    {
      place: 'shiloh', lat: 32.0556, lon: 35.2897,
      title: 'Shiloh: three centuries at home',
      ref: 'Joshua 18:1; Judges 21:19; 1 Samuel 1–3',
      text: 'The tabernacle and ark were set up at Shiloh in the hills of Ephraim, where they stayed for most of the period of the Judges. Here Hannah wept and Samuel was dedicated; here the boy heard the voice of God in the night while Eli\'s sons abused the priesthood. Excavations at Khirbet Seilun have found Iron Age I storage buildings and a large flat area on the north side that may have held the sanctuary.'
    },
    {
      place: 'aphek', lat: 32.1050, lon: 34.9306,
      title: 'Ebenezer: the ark captured',
      ref: '1 Samuel 4:1-22',
      text: 'When the Philistines encamped at Aphek, Israel brought the ark from Shiloh to the battlefield at Ebenezer as a talisman. Thirty thousand fell, Eli\'s sons died, and the ark was taken; Eli fell dead at the news and a dying mother named her child Ichabod, "the glory has departed." Izbet Sartah, a small hilltop village facing Aphek across the valley, is the likely Ebenezer. Shiloh was probably destroyed soon after (Psalm 78:60; Jeremiah 7:12).',
      christ: 'God let his glory be carried off rather than be used as a charm by a faithless people; he would rather be exiled than manipulated.',
      via: [[32.0500, 35.1500], [32.1050, 34.9700]]
    },
    {
      place: 'ashdod', lat: 31.7550, lon: 34.6550,
      title: 'Ashdod: Dagon falls',
      ref: '1 Samuel 5:1-7',
      text: 'The Philistines carried the ark to Ashdod and placed it in the temple of Dagon as a trophy. Twice the idol was found fallen on its face before it, the second time with head and hands broken off, and the city was struck with tumours. The captors began to realise who had captured whom.',
      via: [[31.9500, 34.8000]]
    },
    {
      place: 'gath', lat: 31.7000, lon: 34.8472,
      title: 'Gath',
      ref: '1 Samuel 5:8-9',
      text: 'The lords of the Philistines moved the ark inland to Gath, home city of Goliath, and the plague of tumours followed it, "a very great panic". Tell es-Safi, excavated since 1996, has confirmed Gath as one of the largest cities in the land in this period.'
    },
    {
      place: 'ekron', lat: 31.7797, lon: 34.8514,
      title: 'Ekron: send it away',
      ref: '1 Samuel 5:10 – 6:12',
      text: 'When the ark reached Ekron the people cried out that it had been brought to kill them. After seven months the priests and diviners advised returning it with a guilt offering of golden tumours and mice, on a new cart drawn by two cows that had never been yoked. The cows walked straight up the road to Beth-shemesh, lowing as they went. Tel Miqne, excavated 1981–96, revealed Ekron\'s Philistine temple complex and olive-oil industry.'
    },
    {
      place: 'beth-shemesh', lat: 31.7522, lon: 34.9769,
      title: 'Beth-shemesh: the great stone',
      ref: '1 Samuel 6:13-21',
      text: 'The people of Beth-shemesh were reaping wheat in the Sorek valley when the ark came into view, and they rejoiced. The cart stopped at a great stone and the cows were offered on its wood. But seventy men who looked into the ark died, and the town asked, "Who is able to stand before the LORD, this holy God?"'
    },
    {
      place: 'kiriath-jearim', lat: 31.8092, lon: 35.1028,
      title: 'Kiriath-jearim: the long wait',
      ref: '1 Samuel 7:1-2; 1 Chronicles 13:5-6',
      text: 'The ark was carried up into the hills to the house of Abinadab at Kiriath-jearim, where his son Eleazar kept it for some seventy years, through the whole reign of Saul. It was never returned to the tabernacle, which now stood at Nob and then Gibeon. Excavations on the hill of Deir el-Azar (2017–19) uncovered a massive Iron Age platform that may have supported a shrine.'
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: David brings the ark to Zion',
      ref: '2 Samuel 6; 1 Chronicles 13 – 16; Psalm 132',
      text: 'David\'s first attempt ended when Uzzah touched the ark and died at Perez-uzzah; it waited three months in the house of Obed-edom. Then, with sacrifices every six steps, David danced before the LORD as the ark entered his new capital and was placed in a tent on Zion. Psalm 24 and Psalm 132 may echo the procession: "Lift up your heads, O gates... that the King of glory may come in."',
      christ: 'The King of glory entering his city foreshadows the true King riding into Jerusalem, and the Christ who ascended "leading a host of captives" (Ephesians 4:8; Psalm 68:18).',
      via: [[31.8000, 35.1800]]
    },
    {
      place: 'zion', lat: 31.7780, lon: 35.2354,
      title: 'The Temple: the glory fills the house',
      ref: '1 Kings 8:1-11; 2 Chronicles 5:2-14',
      text: 'At the feast in the seventh month Solomon\'s priests carried the ark into the inner sanctuary beneath the wings of the great cherubim, and the cloud of glory filled the house so that the priests could not stand to minister. The ark never appears again in Israel\'s history; it was probably destroyed or looted in 586 BC. Jeremiah foresaw a day when it would not be missed (Jeremiah 3:16), and John saw the true ark in heaven (Revelation 11:19).',
      christ: '"The Word became flesh and dwelt among us, and we have seen his glory" (John 1:14): the presence that filled the Temple now walks in Galilee, and dwells in his people.'
    }
  ]
},

// ---------------------------------------------------------------------------
// 8. DAVID'S FLIGHT — the anointed king in exile
// ---------------------------------------------------------------------------
{
  id: 'david-flight',
  name: 'David: the Fugitive King',
  era: 'united-kingdom',
  color: '#a0522d',
  refs: '1 Samuel 19 – 2 Samuel 5',
  summary: 'Anointed but not yet crowned, David spent years running from Saul through the caves and wildernesses of Judah, among the Philistines and in Moab, sparing his enemy twice, until Saul fell at Gilboa and Judah crowned him at Hebron.',
  duration: 'c. 1018–1010 BC (traditional dating); seven and a half years more at Hebron',
  stops: [
    {
      place: 'gibeah', lat: 31.8236, lon: 35.2311,
      title: 'Gibeah: Saul\'s court',
      ref: '1 Samuel 18:6 – 20:42',
      text: 'Saul ruled from his home town of Gibeah, on the hill just north of Jerusalem where Tell el-Ful stands. Here David played the lyre for the king, married Michal and became Jonathan\'s dearest friend, and here Saul, eaten by jealousy after the women sang "David his ten thousands", hurled a spear at him. Jonathan\'s warning by the arrows in the field sent David into exile.',
      christ: 'The anointed king, hated without cause and driven out by the ruler he had served, is the shape of the Christ who "came to his own, and his own people did not receive him" (John 1:11).'
    },
    {
      place: 'nob', lat: 31.7933, lon: 35.2433,
      title: 'Nob: the bread of the Presence',
      ref: '1 Samuel 21:1-9; 22:6-23',
      text: 'Nob, a priestly town probably on the ridge of Mount Scopus, housed the tabernacle after Shiloh\'s fall. Ahimelech the priest gave the hungry fugitive the holy bread and Goliath\'s sword, while Doeg the Edomite watched. Saul later had eighty-five priests of Nob slaughtered for it; only Abiathar escaped, with the ephod, to David.',
      christ: 'Jesus appealed to this very meal to defend his disciples\' Sabbath hunger: mercy outranks ritual (Mark 2:25-26).'
    },
    {
      place: 'gath', lat: 31.7000, lon: 34.8472,
      title: 'Gath: madness before Achish',
      ref: '1 Samuel 21:10-15; Psalms 34, 56',
      text: 'Carrying Goliath\'s own sword, David fled west down the Sorek and Elah valleys to Goliath\'s own city, hoping Saul would not follow. Recognised and in danger, he feigned madness and was thrown out. The headings of Psalm 34 and Psalm 56 place their composition in this humiliation: "This poor man cried, and the LORD heard him."',
      via: [[31.7522, 34.9769], [31.7000, 34.9300]]
    },
    {
      place: 'adullam', lat: 31.6503, lon: 34.9870,
      title: 'Adullam: the cave and the four hundred',
      ref: '1 Samuel 22:1-2; 2 Samuel 23:13-17; Psalms 57, 142',
      text: 'In the limestone caves around Adullam in the Shephelah, David gathered his family and "everyone who was in distress, and everyone who was in debt, and everyone who was bitter in soul", about four hundred men. The cave psalms belong here: "I cry to you, O LORD; I say, You are my refuge." From this rabble God built a kingdom.',
      christ: 'A rejected king gathering the distressed and indebted into his company is a picture of the one who said, "Come to me, all who labour and are heavy laden" (Matthew 11:28).',
      via: [[31.6900, 34.9000]]
    },
    {
      place: 'mizpah-moab', lat: 31.2000, lon: 35.7500,
      title: 'Mizpah of Moab: refuge for his parents',
      ref: '1 Samuel 22:3-4',
      text: 'David crossed to Moab, land of his great-grandmother Ruth, and lodged his parents with the king at Mizpah, "the watchtower", somewhere on the plateau above the Dead Sea; the site is unknown and the marker is placed near the Moabite capital Kir-hareseth. The route around the southern end of the Dead Sea is the most plausible, since Saul held the Jericho crossing.',
      via: [[31.5244, 35.1105], [31.2800, 35.1300], [31.0500, 35.5000], [31.1806, 35.7047]]
    },
    {
      place: 'hereth', lat: 31.6250, lon: 35.0300,
      title: 'The forest of Hereth: back into Judah',
      ref: '1 Samuel 22:5',
      text: 'The prophet Gad told David not to stay in the stronghold but to go back into the land of Judah, and he hid in the forest of Hereth, in the wooded hills west of Hebron where the village of Kharas may keep the name. Obedience meant leaving safety for danger. Here the news of the Nob massacre reached him, and Abiathar joined his company.',
      via: [[31.1806, 35.7047], [31.0500, 35.5000], [31.2800, 35.1300], [31.5244, 35.1105]]
    },
    {
      place: 'keilah', lat: 31.6167, lon: 35.0000,
      title: 'Keilah: rescued and betrayed',
      ref: '1 Samuel 23:1-13',
      text: 'When the Philistines raided the threshing floors of Keilah, David asked the LORD twice, then attacked and saved the town. Saul heard he was inside a walled city and marched; David asked the LORD through the ephod whether Keilah\'s people would hand him over, and was told yes. He and his six hundred slipped away "wherever they could go".'
    },
    {
      place: 'ziph', lat: 31.4833, lon: 35.1333,
      title: 'Wilderness of Ziph: Jonathan\'s farewell',
      ref: '1 Samuel 23:14-23; 26:1-25',
      text: 'In the dry hills south-east of Hebron, around Tell Zif, David lived in strongholds while "Saul sought him every day, but God did not give him into his hand." Jonathan came once more, at Horesh, to strengthen his friend\'s hand in God, and they never met again. The Ziphites twice informed on David; on the second occasion he crept into Saul\'s camp by night and took the spear and water jar from beside the sleeping king.',
      via: [[31.5244, 35.1105]]
    },
    {
      place: 'maon', lat: 31.4333, lon: 35.1333,
      title: 'Maon: the Rock of Escape',
      ref: '1 Samuel 23:24-28',
      text: 'Saul closed in on David in the wilderness of Maon, his men on one side of a ridge and David\'s on the other, when a messenger arrived: the Philistines had invaded. Saul turned back, and the ridge was named Sela-hammahlekoth, the Rock of Escape. Providence, not a sword, saved David.'
    },
    {
      place: 'en-gedi', lat: 31.4614, lon: 35.3900,
      title: 'En-gedi: Saul\'s robe',
      ref: '1 Samuel 23:29 – 24:22',
      text: 'David dropped down to the oasis of En-gedi on the Dead Sea shore, where waterfalls pour through a canyon of caves and ibex still climb the cliffs. Saul entered the very cave where David was hiding; David cut off a corner of his robe rather than his life, then called after him from the hillside. Saul wept and admitted, "You are more righteous than I."',
      christ: 'Refusing to seize the kingdom by killing "the LORD\'s anointed", David waited for God to give it: the way of the cross before the crown.',
      via: [[31.4000, 35.2500]]
    },
    {
      place: 'carmel-town', lat: 31.4472, lon: 35.1417,
      title: 'Carmel and the wilderness of Paran: Abigail',
      ref: '1 Samuel 25',
      text: 'After Samuel\'s death David moved to "the wilderness of Paran" (the Greek text reads Maon, which fits the story better). Nabal, a rich fool of Carmel near Maon, insulted the men who had protected his flocks; his wife Abigail rode out with provisions, fell at David\'s feet and turned him from bloodguilt with words that foresaw his "sure house". Nabal died and Abigail became David\'s wife.',
      via: [[31.4000, 35.2500]]
    },
    {
      place: 'gath', lat: 31.7000, lon: 34.8472,
      title: 'Gath again: a mercenary of Achish',
      ref: '1 Samuel 27:1-7',
      text: 'Despairing of safety in Judah, David took his six hundred men and their families to Achish of Gath and entered Philistine service. Saul gave up the chase. It was a compromise that would later cost him dearly and demand a double life of feigned raids and careful lies.',
      via: [[31.5244, 35.1105], [31.6503, 34.9870]]
    },
    {
      place: 'ziklag', lat: 31.3892, lon: 34.6822,
      title: 'Ziklag: sixteen months on the frontier',
      ref: '1 Samuel 27:6 – 30:31; 2 Samuel 1',
      text: 'Achish gave David the border town of Ziklag in the western Negeb. While Saul consulted a medium at En-dor and marched to his death on Gilboa, Amalekites burned Ziklag and took every woman and child; David "strengthened himself in the LORD", pursued and recovered all. Then a runner brought Saul\'s crown. Tel Sera\' and Tel Halif are the leading candidates for the site.',
      via: [[31.5500, 34.7500]]
    },
    {
      place: 'hebron', lat: 31.5244, lon: 35.1105,
      title: 'Hebron: king at last',
      ref: '2 Samuel 2:1-4; 5:1-5; 1 Chronicles 12:23-40',
      text: 'David went up to Hebron and the men of Judah anointed him king there at thirty. For seven and a half years he reigned over one tribe while Saul\'s house held the north; then all the elders of Israel came to Hebron and anointed him king over all Israel. His first act was to march on Jerusalem.',
      christ: 'A king anointed in secret, rejected, hunted, then crowned first by a few and at last by all: David\'s road to Hebron traces the road of his greater Son to the throne (Philippians 2:8-11).',
      via: [[31.4000, 34.9000], [31.4333, 35.0167]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 9. ELIJAH — the prophet of fire
// ---------------------------------------------------------------------------
{
  id: 'elijah',
  name: 'Elijah: the Prophet of Fire',
  era: 'divided-kingdom',
  color: '#cc5500',
  refs: '1 Kings 17 – 2 Kings 2',
  summary: 'From Gilead to Phoenicia, from Carmel\'s fire to Horeb\'s whisper, Elijah confronted Ahab and Jezebel\'s Baal cult, fled in despair, was recommissioned, and was carried to heaven from the Jordan he had parted.',
  duration: 'c. 870–850 BC, in the reigns of Ahab and Ahaziah',
  stops: [
    {
      place: 'tishbe', lat: 32.3844, lon: 35.7672,
      title: 'Tishbe of Gilead: a prophet from the hills',
      ref: '1 Kings 17:1',
      text: 'Elijah appears without introduction, "the Tishbite, of Tishbe in Gilead", a man of the rugged country east of the Jordan; the ruin of Listib near the shrine of Mar Elias probably preserves the name. He strode into Ahab\'s presence to announce a drought that would break the power of Baal, the rain-god Jezebel had imported from Sidon. Israel had "sold itself" to idolatry; God\'s answer was one man and a closed sky.'
    },
    {
      place: 'cherith', lat: 32.4000, lon: 35.6000,
      title: 'The brook Cherith: fed by ravens',
      ref: '1 Kings 17:2-7',
      text: 'Told to hide "east of the Jordan", Elijah lived by the brook Cherith while ravens brought him bread and meat morning and evening, until the brook itself dried up. The Wadi al-Yabis, which tumbles from Gilead to the Jordan, is the likely stream; a later tradition placed Cherith at Wadi Qelt near Jericho. The prophet learned to trust God\'s provision before he preached it to a widow.',
      via: [[32.2767, 35.1897], [32.2000, 35.4000], [32.3500, 35.5500]]
    },
    {
      place: 'zarephath', lat: 33.4500, lon: 35.2950,
      title: 'Zarephath: the widow\'s flour and oil',
      ref: '1 Kings 17:8-24',
      text: 'God sent his prophet into Jezebel\'s own country, to a Phoenician widow at Zarephath (Sarafand) on the coast between Tyre and Sidon. Her jar of flour and jug of oil did not run out through the famine, and when her son died Elijah stretched himself on the boy three times and God gave him back alive. Baal\'s homeland became the stage for the LORD\'s mercy to a Gentile.',
      christ: 'Jesus cited this very widow at Nazareth to show that God\'s grace reaches beyond Israel (Luke 4:25-26), and nearly lost his life for saying so.',
      via: [[32.5000, 35.5000], [32.7000, 35.4000], [32.9200, 35.0700], [33.2704, 35.1961]]
    },
    {
      place: 'carmel', lat: 32.6693, lon: 35.0503,
      title: 'Mount Carmel: the fire falls',
      ref: '1 Kings 18:1-40',
      text: 'In the third year Elijah challenged 450 prophets of Baal on Carmel: "How long will you go limping between two different opinions?" Baal\'s prophets cried and cut themselves till evening; Elijah soaked his altar with twelve jars of water and prayed one short prayer, and fire consumed sacrifice, wood, stones and water. The people fell on their faces: "The LORD, he is God." The Carmelite site of Muhraqa, "the burning", above the Kishon marks the traditional spot.',
      via: [[33.2704, 35.1961], [32.9200, 35.0700], [32.8000, 35.0300]]
    },
    {
      place: 'jezreel', lat: 32.5583, lon: 35.3283,
      title: 'Jezreel: rain, and a queen\'s threat',
      ref: '1 Kings 18:41-46; 19:1-3',
      text: 'Elijah prayed seven times on Carmel until a cloud like a man\'s hand rose from the sea, then ran before Ahab\'s chariot the 30 km to Jezreel as the storm broke. Jezreel was the royal winter residence; Jezebel received the news of her prophets\' deaths and swore Elijah would be dead within a day. The man who had faced 450 fled from one woman.'
    },
    {
      place: 'beersheba', lat: 31.2447, lon: 34.8408,
      title: 'Beersheba: under the broom tree',
      ref: '1 Kings 19:3-8',
      text: 'Elijah ran the length of the land, left his servant at Beersheba and went a day into the wilderness, where he lay under a broom tree and asked to die. An angel woke him twice with bread baked on hot stones and a jar of water: "Arise and eat, for the journey is too great for you." God met exhaustion with food and sleep before he met it with words.',
      christ: 'The bread in the wilderness that sustains a servant for forty days anticipates the true bread from heaven (John 6:32-35).',
      via: [[32.4136, 35.2408], [32.2136, 35.2819], [31.9297, 35.2394], [31.7784, 35.2354], [31.5244, 35.1105]]
    },
    {
      place: 'sinai', lat: 28.5397, lon: 33.9750,
      title: 'Horeb: the sound of a low whisper',
      ref: '1 Kings 19:8-18',
      text: 'Forty days later Elijah stood in a cave on Horeb, the mountain of God, where Moses had stood. Wind tore the rocks, earthquake and fire followed, and the LORD was in none of them; then came "the sound of a low whisper", and the question, "What are you doing here, Elijah?" God corrected his despair with facts: seven thousand had not bowed to Baal, and he had three men to anoint.',
      christ: 'Moses and Elijah, the two who met God on this mountain, would stand together on another mountain with Jesus, and the Father\'s voice would say, "listen to him" (Luke 9:30-35).',
      via: [[30.6469, 34.4247], [29.7000, 34.6000], [29.2000, 34.6000], [28.8975, 34.3486]]
    },
    {
      place: 'abel-meholah', lat: 32.3667, lon: 35.5000,
      title: 'Abel-meholah: the call of Elisha',
      ref: '1 Kings 19:15-21',
      text: 'Sent back "on your way to the wilderness of Damascus", Elijah found Elisha ploughing with twelve yoke of oxen at Abel-meholah in the Jordan valley and threw his cloak over him. Elisha slaughtered his oxen, feasted his people and followed. The prophet who wanted to die had been given a successor; the work would outlive him.',
      via: [[28.8975, 34.3486], [29.7000, 34.6000], [30.6469, 34.4247], [31.2447, 34.8408], [31.5244, 35.1105], [31.7784, 35.2354], [31.8711, 35.4441], [32.1000, 35.5300]]
    },
    {
      place: 'jericho', lat: 31.8711, lon: 35.4441,
      title: 'Jericho: the last walk',
      ref: '1 Kings 21; 2 Kings 1; 2:1-5',
      text: 'Years passed: Elijah denounced Ahab over Naboth\'s vineyard at Jezreel, called down fire on Ahaziah\'s messengers, and finally set out on a last circuit from Gilgal to Bethel to Jericho with Elisha refusing to leave him. At each place the sons of the prophets told Elisha what he already knew: "the LORD will take away your master from over you today."',
      via: [[32.2136, 35.2819], [32.0300, 35.2200], [31.9297, 35.2394]]
    },
    {
      place: 'bethany-beyond-jordan', lat: 31.8390, lon: 35.5560,
      title: 'The Jordan: chariots of fire',
      ref: '2 Kings 2:6-14; Malachi 4:5-6',
      text: 'Elijah struck the Jordan with his rolled-up cloak and the two crossed on dry ground. As they walked and talked, a chariot and horses of fire came between them and Elijah went up in a whirlwind. Elisha tore his clothes, picked up the cloak and parted the river again with it. Tell Mar Elias at al-Maghtas has been venerated as the spot since Byzantine times, and Malachi promised Elijah would come again before the great day of the LORD.',
      christ: 'John the Baptist preached at this same ford "in the spirit and power of Elijah" (Luke 1:17), and Jesus was baptised here: the forerunner and the One he ran before, at the river where Elijah left.'
    }
  ]
},

// ---------------------------------------------------------------------------
// 10. EXILE AND RETURN — Assyria, Babylon and the road home
// ---------------------------------------------------------------------------
{
  id: 'exile',
  name: 'Exile and Return',
  era: 'exile-return',
  color: '#5b5ea6',
  refs: '2 Kings 17; 24–25; Psalm 137; Ezra 1–8; Nehemiah 1–2',
  summary: 'Assyria carried the northern tribes to the Habor and Media in 722 BC; Babylon marched Judah up the Euphrates in 597 and 586; and after seventy years Persian decrees sent Zerubbabel, Ezra and Nehemiah back along the same roads to rebuild Jerusalem.',
  duration: '722–445 BC',
  stops: [
    {
      place: 'samaria', lat: 32.2767, lon: 35.1897,
      title: 'Samaria: the fall of the north, 722 BC',
      ref: '2 Kings 17:1-23; Hosea 9:3; Amos 5:27',
      text: 'After a three-year siege Samaria fell to Shalmaneser V in 722 BC and his successor Sargon II completed the deportation; Sargon\'s annals claim 27,290 captives. The Israelites were "carried away to Assyria" and foreigners settled in their place, because, says the historian, they had worshipped other gods and refused every prophet sent to them. Amos and Hosea had foretold exactly this.',
      christ: 'Hosea\'s last word over the doomed north is not judgement but "I will heal their apostasy; I will love them freely" (Hosea 14:4), a promise kept in Christ (Hosea 1:10; Romans 9:25-26).'
    },
    {
      place: 'gozan', lat: 36.8261, lon: 40.0389,
      title: 'Gozan on the Habor',
      ref: '2 Kings 17:6; 18:11',
      text: 'The captives were taken north along the Damascus road, through Hamath and Aleppo, across the Euphrates at Carchemish and past Haran to "Halah, and on the Habor, the river of Gozan". Gozan is Assyrian Guzana, Tell Halaf on the Khabur river, where administrative texts from the following century list people with Israelite names. Deportation was Assyrian policy: uproot a people and it will not rebel.',
      via: [[32.5800, 35.1800], [33.0178, 35.5686], [33.5138, 36.2765], [35.1300, 36.7500], [36.2000, 37.1600], [36.8292, 38.0150], [36.8650, 39.0317]]
    },
    {
      place: 'halah', lat: 36.5500, lon: 43.4000,
      title: 'Halah, near Nineveh',
      ref: '2 Kings 17:6; 1 Chronicles 5:26',
      text: 'Halah is probably the Assyrian district of Halahhu north-east of Nineveh, in the heartland of the empire. Israelites appear in Assyrian records as soldiers, craftsmen and chariot troops; some were absorbed, some kept their identity, and prophets like Nahum watched Nineveh with a view to its own fall in 612 BC. The marker sits between Nineveh and the hills of Halahhu.',
      via: [[37.0700, 41.2200], [36.8000, 42.3000], [36.3597, 43.1528]]
    },
    {
      place: 'ecbatana', lat: 34.7983, lon: 48.5148,
      title: 'The cities of the Medes',
      ref: '2 Kings 17:6; 18:11; Isaiah 11:11-12',
      text: 'Others were sent further east, over the Zagros passes, to "the cities of the Medes" around Ecbatana (Hamadan). These are the so-called lost tribes; most were simply absorbed into the peoples of the empire, though Isaiah promised a remnant would be gathered from Assyria and beyond. The New Testament still knows "Medes" among the Pentecost pilgrims (Acts 2:9). The thread now turns back to Judah, whose exile came 136 years later.',
      via: [[36.1900, 44.0100], [35.6000, 45.5000], [35.0000, 47.2000]]
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: three deportations, 605, 597 and 586 BC',
      ref: '2 Kings 24:1 – 25:21; Daniel 1:1-6; Ezekiel 1:1-3; Jeremiah 39',
      text: 'Nebuchadnezzar first took hostages, Daniel among them, in 605 BC; in 597 he deported King Jehoiachin, the nobles, craftsmen and a young priest named Ezekiel; and in 586, after an eighteen-month siege, he burned the Temple, broke down the walls and carried off all but the poorest. Babylonian ration tablets naming "Yaukin, king of Judah" and the burnt houses and arrowheads of the City of David confirm the story.',
      christ: 'Jeremiah, weeping over these ruins, promised a new covenant written on the heart (Jeremiah 31:31-34), the covenant Jesus sealed with his blood (Luke 22:20).',
      via: [[35.0000, 47.2000], [35.6000, 45.5000], [36.1900, 44.0100], [36.3597, 43.1528], [36.8000, 42.3000], [37.0700, 41.2200], [36.8650, 39.0317], [36.8292, 38.0150], [36.2000, 37.1600], [35.1300, 36.7500], [33.5138, 36.2765], [33.0178, 35.5686], [32.2136, 35.2819]]
    },
    {
      place: 'riblah', lat: 34.4500, lon: 36.5167,
      title: 'Riblah: Zedekiah before Nebuchadnezzar',
      ref: '2 Kings 25:4-7, 18-21; Jeremiah 39:4-7; 52:9-11',
      text: 'Zedekiah slipped out of Jerusalem by night but was caught on the plains of Jericho and brought to Nebuchadnezzar\'s field headquarters at Riblah in the land of Hamath, on the Orontes north of the Lebanon range. There he watched his sons executed, was blinded and taken in chains to Babylon; the chief priests were put to death at Riblah too. The captives followed the valley between the Lebanon ranges to reach it.',
      via: [[32.2136, 35.2819], [32.5800, 35.3300], [33.0178, 35.5686], [33.2500, 35.6500], [33.6000, 35.8000], [34.0000, 36.2000]]
    },
    {
      place: 'babylon', lat: 32.5364, lon: 44.4208,
      title: 'Babylon: by the waters we wept',
      ref: 'Psalm 137; Ezekiel 1:1-3; Daniel 1–6; Jeremiah 29:4-14',
      text: 'The road to Babylon ran north to Carchemish and then some 1,000 km down the Euphrates, through Mari and Sippar, to the greatest city in the world, with its Ishtar Gate, ziggurat and hanging gardens. Jehoiachin was fed at Nebuchadnezzar\'s table; Ezekiel saw the glory by the Chebar canal near Nippur; Daniel served four kings. Jeremiah wrote to the exiles: seek the city\'s welfare, for after seventy years "I will bring you back to the place from which I sent you into exile."',
      christ: 'Daniel saw "one like a son of man" receive an everlasting kingdom from the Ancient of Days (Daniel 7:13-14), the title Jesus chose for himself.',
      via: [[35.1300, 36.7500], [36.2000, 37.1600], [36.8292, 38.0150], [35.9500, 39.0200], [34.9200, 40.5300], [34.5500, 40.8900], [33.6400, 42.8300], [33.0600, 44.2500]]
    },
    {
      place: 'ahava', lat: 32.7000, lon: 44.2000,
      title: 'Ahava: Ezra gathers the returnees, 458 BC',
      ref: 'Ezra 7:1-10; 8:15-36',
      text: 'Cyrus\'s decree of 539 BC had already sent Zerubbabel and Jeshua home with the Temple vessels, and the second Temple was finished in 516. Eighty years on, Ezra the scribe assembled a second party of about 1,500 men and their families "by the river that runs to Ahava", an unlocated canal or town near Babylon, camped three days, found no Levites and sent for some, then fasted for a safe road rather than ask the king for soldiers.',
      christ: 'Ezra\'s life\'s aim, "to study the Law of the LORD, and to do it and to teach", prepared a people for the one who would fulfil that Law (Matthew 5:17).'
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: the return',
      ref: 'Ezra 7:8-9; 8:31-36; Nehemiah 2; 8; Malachi 3:1',
      text: 'Ezra\'s caravan took four months along the Fertile Crescent, arriving in the fifth month of Artaxerxes\' seventh year. Thirteen years later Nehemiah came to rebuild the walls in fifty-two days, and Ezra read the Law to the whole people in the square before the Water Gate while they wept and then rejoiced. The exile was over, yet no king sat on David\'s throne and no glory filled the house. Malachi\'s promise closed the age: "the Lord whom you seek will suddenly come to his temple."',
      via: [[33.0600, 44.2500], [33.6400, 42.8300], [34.5500, 40.8900], [34.9200, 40.5300], [35.9500, 39.0200], [36.8292, 38.0150], [36.2000, 37.1600], [35.1300, 36.7500], [33.5138, 36.2765], [33.0178, 35.5686], [32.2136, 35.2819], [31.9297, 35.2394]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 11. THE MINISTRY OF JESUS — a Gospel harmony
// ---------------------------------------------------------------------------
{
  id: 'jesus-ministry',
  name: 'Jesus: the Way of the Son',
  era: 'christ',
  color: '#e3b448',
  refs: 'Matthew, Mark, Luke, John',
  summary: 'From the manger in Bethlehem to the last week in Bethany, this thread follows Jesus through Egypt, Nazareth, the Jordan, Galilee, Phoenicia and Judea. The sequence is a harmony of the four Gospels; where they do not fix the order, the reconstruction follows John\'s festival framework.',
  duration: 'c. 5 BC – AD 30 (or AD 33); public ministry roughly three and a half years',
  stops: [
    {
      place: 'bethlehem', lat: 31.7054, lon: 35.2024,
      title: 'Bethlehem: born in David\'s town',
      ref: 'Luke 2:1-20; Matthew 2:1-12; Micah 5:2',
      text: 'In the last years of Herod the Great, Joseph and Mary came from Nazareth for Augustus\'s registration, and the child was born and laid in a manger, most likely in the animal quarters of a crowded house or a cave beneath it. Shepherds heard the angels; some months later magi from the east followed a star. Justin Martyr and Origen already knew the cave over which Constantine built the Church of the Nativity.',
      christ: 'The manger, the shepherds and the town of David all say the same thing: the King has come low, "to seek and to save the lost" (Luke 19:10).'
    },
    {
      place: 'on', lat: 30.1291, lon: 31.3070,
      title: 'Egypt: the flight from Herod',
      ref: 'Matthew 2:13-18; Hosea 11:1',
      text: 'Warned in a dream, Joseph took the child and his mother by night down the coast road to Egypt, beyond Herod\'s reach, while Bethlehem\'s infant boys were slaughtered. Where they lived is unknown; Coptic tradition names Matariya near Heliopolis and other sites along the Nile. Matthew hears Hosea\'s words about the Exodus fulfilled: "Out of Egypt I called my son."',
      christ: 'Jesus relives Israel\'s story, going down into Egypt and coming out again, the true Son whom the nation had failed to be.',
      via: [[31.6500, 35.0000], [31.5017, 34.4668], [31.2900, 34.2500], [31.1300, 33.8000], [31.0400, 32.5500], [30.6000, 31.7000]]
    },
    {
      place: 'nazareth', lat: 32.7019, lon: 35.3033,
      title: 'Nazareth: thirty hidden years',
      ref: 'Matthew 2:19-23; Luke 2:39-52',
      text: 'After Herod\'s death in 4 BC the family settled in Nazareth, a village of a few hundred in the Galilean hills above the Jezreel valley, so obscure that Nathanael would sneer at it. Jesus grew up as a craftsman\'s son, went up to Jerusalem at twelve and astonished the teachers, and "increased in wisdom and in stature and in favour with God and man." First-century houses and tombs have been found beneath the modern town.',
      via: [[30.6000, 31.7000], [31.0400, 32.5500], [31.1300, 33.8000], [31.2900, 34.2500], [31.5017, 34.4668], [32.0536, 34.7503], [32.4994, 34.8917], [32.5800, 35.1800]]
    },
    {
      place: 'bethany-beyond-jordan', lat: 31.8372, lon: 35.5522,
      title: 'The Jordan: baptism',
      ref: 'Matthew 3:13-17; Mark 1:9-11; John 1:28-34',
      text: 'About the age of thirty, in the fifteenth year of Tiberius (AD 26–29 depending on the reckoning), Jesus walked down the Jordan valley to John at "Bethany across the Jordan". He was baptised with sinners though he had no sin; the Spirit descended as a dove and the Father spoke. Al-Maghtas, with its Byzantine churches and pilgrim steps, is the best-attested location.',
      christ: 'At his baptism Jesus stands in the river with the repentant as their representative, "to fulfil all righteousness" (Matthew 3:15).',
      via: [[32.6000, 35.4000], [32.5000, 35.5000], [32.1000, 35.5500]]
    },
    {
      place: 'wilderness-judea', lat: 31.8736, lon: 35.4278,
      title: 'The wilderness: forty days of testing',
      ref: 'Matthew 4:1-11; Luke 4:1-13',
      text: 'Straight from the water the Spirit led Jesus into the barren hills above Jericho, where he fasted forty days and was tempted by the devil with bread, spectacle and power, answering each time from Deuteronomy. The Mount of Temptation (Jebel Quruntul), with its cliff-face monastery, is the traditional site.',
      christ: 'Where Adam fell in a garden and Israel failed in a wilderness, the Son stood firm: the obedience that would be credited to his people.'
    },
    {
      place: 'cana', lat: 32.8203, lon: 35.2986,
      title: 'Cana: water into wine',
      ref: 'John 1:35 – 2:11',
      text: 'With his first disciples, Andrew, Peter, Philip and Nathanael of Cana, Jesus went back to Galilee and attended a wedding at Cana, where he quietly turned some 500 litres of water into the best wine. "This, the first of his signs, Jesus did at Cana in Galilee, and manifested his glory." Khirbet Qana, a ruin north of the Beit Netofa valley, is the more likely site; Kafr Kanna is the pilgrim tradition.',
      via: [[31.8400, 35.5400], [32.1000, 35.5500], [32.5000, 35.5000], [32.7019, 35.3033]]
    },
    {
      place: 'capernaum', lat: 32.8806, lon: 35.5750,
      title: 'Capernaum: a first visit',
      ref: 'John 2:12',
      text: 'From Cana Jesus went down to Capernaum on the north shore of the lake with his mother, brothers and disciples, and stayed a few days. The fishing and customs town on the Via Maris, with its basalt houses and synagogue, would soon become his headquarters.'
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: the first Passover',
      ref: 'John 2:13 – 3:21',
      text: 'Jesus went up the Jordan road for Passover and drove the traders from the Temple courts: "Destroy this temple, and in three days I will raise it up." By night a Pharisee named Nicodemus came to him and heard that a man must be born again, and that "God so loved the world, that he gave his only Son." John\'s Gospel counts the Passovers of the ministry from this one.',
      via: [[32.7000, 35.5800], [32.5000, 35.5000], [32.1000, 35.5500], [31.8711, 35.4441]]
    },
    {
      place: 'sychar', lat: 32.2131, lon: 35.2856,
      title: 'Sychar: the woman at the well',
      ref: 'John 4:1-42',
      text: 'Returning north through Samaria, a route pious Jews often avoided, Jesus rested at Jacob\'s well below Mount Gerizim while his disciples bought food in Sychar (Askar). To a Samaritan woman with five husbands behind her he offered living water and declared, "I who speak to you am he." Her village believed. The well, 40 m deep, is one of the few Gospel sites whose identification is virtually certain.',
      christ: 'The Messiah reveals himself first not in the Temple but to a despised Samaritan woman, and worship is freed from mountains altogether (John 4:21-24).',
      via: [[31.9297, 35.2394], [32.0556, 35.2897]]
    },
    {
      place: 'cana', lat: 32.8203, lon: 35.2986,
      title: 'Cana: healing at a distance',
      ref: 'John 4:43-54',
      text: 'Back in Cana, a royal official from Capernaum begged Jesus to come and heal his dying son. "Go; your son will live," Jesus said, and the man found on the way home that the fever had left the boy at that very hour. It was, John notes, the second sign in Galilee.',
      via: [[32.4136, 35.2408], [32.5583, 35.3283], [32.7019, 35.3033]]
    },
    {
      place: 'nazareth', lat: 32.7019, lon: 35.3033,
      title: 'Nazareth: rejected at home',
      ref: 'Luke 4:16-30',
      text: 'In the synagogue where he had grown up, Jesus read Isaiah 61, "The Spirit of the Lord is upon me", and announced, "Today this Scripture has been fulfilled in your hearing." Admiration turned to fury when he reminded them that Elijah and Elisha had blessed Gentiles, and they tried to throw him from the hill. He walked through the crowd and left; Matthew and Mark suggest he returned once more, to the same unbelief.'
    },
    {
      place: 'capernaum', lat: 32.8806, lon: 35.5750,
      title: 'Capernaum: "his own city"',
      ref: 'Matthew 4:13-22; Mark 1:16 – 2:17; Luke 7:1-10',
      text: 'Jesus made Capernaum his home. On its shore he called Peter, Andrew, James and John from their nets and Matthew from his tax booth; in its synagogue he cast out a demon; in Peter\'s house he healed a paralytic let down through the roof and Peter\'s mother-in-law; nearby a centurion\'s faith amazed him. Excavations have exposed the fourth-century limestone synagogue on first-century basalt foundations and, 30 m away, an octagonal church built over a house venerated as Peter\'s.',
      christ: 'Isaiah\'s "great light" dawned first on Zebulun and Naphtali (Matthew 4:14-16): the kingdom came to ordinary fishermen before it came to Jerusalem.'
    },
    {
      place: 'nain', lat: 32.6314, lon: 35.3489,
      title: 'Nain: a widow\'s son raised',
      ref: 'Luke 7:11-17',
      text: 'At the gate of Nain, a village on the northern slope of the Hill of Moreh across the valley from Nazareth, Jesus met a funeral: a widow\'s only son. He touched the bier and said, "Young man, I say to you, arise," and gave him back to his mother. The crowd remembered Elijah: "A great prophet has arisen among us!"',
      via: [[32.8300, 35.5000], [32.7500, 35.4500]]
    },
    {
      place: 'gergesa', lat: 32.8253, lon: 35.6497,
      title: 'Gergesa: the storm and the legion',
      ref: 'Mark 4:35 – 5:20; Matthew 8:28-34; Luke 8:26-39',
      text: 'Crossing the lake by night, Jesus stilled a storm with a word, then landed on the eastern shore in Gentile country where a man possessed by a legion of demons lived among the tombs. The demons entered a herd of pigs that rushed down the steep bank into the sea. The manuscripts name the region variously as Gerasenes, Gadarenes or Gergesenes; Kursi, with its Byzantine monastery and a steep slope to the water, fits the story and the name Gergesa.',
      christ: 'The healed man became the first missionary to the Decapolis: "Go home to your friends and tell them how much the Lord has done for you" (Mark 5:19).',
      via: [[32.7500, 35.4500], [32.8300, 35.5000], [32.8806, 35.5750], [32.8600, 35.6100]]
    },
    {
      place: 'tyre', lat: 33.2704, lon: 35.1961,
      title: 'The region of Tyre and Sidon',
      ref: 'Mark 7:24-30; Matthew 15:21-28',
      text: 'After feeding five thousand and walking on the water, and with opposition mounting, Jesus withdrew north-west into Phoenicia. In a house in the region of Tyre a Syrophoenician woman begged him for her daughter, took his hard word about the children\'s bread and the dogs, and answered with a faith he praised: "For this statement you may go your way; the demon has left your daughter."',
      via: [[32.9100, 35.5600], [33.0500, 35.4000], [33.2000, 35.3000]]
    },
    {
      place: 'hippos', lat: 32.7789, lon: 35.6600,
      title: 'The Decapolis: four thousand fed',
      ref: 'Mark 7:31 – 8:10; Matthew 15:29-39',
      text: 'Mark says Jesus "returned from the region of Tyre and went through Sidon to the Sea of Galilee, in the region of the Decapolis", a wide loop east of the Jordan through the ten Greek cities. There he healed a deaf man with the word Ephphatha and fed four thousand Gentiles with seven loaves. The marker is placed at Hippos (Susita), the Decapolis city overlooking the lake\'s eastern shore.',
      via: [[33.5633, 35.3689], [33.4000, 35.6000], [33.2500, 35.6500], [33.0000, 35.6500], [32.9000, 35.6500]]
    },
    {
      place: 'caesarea-philippi', lat: 33.2469, lon: 35.6931,
      title: 'Caesarea Philippi: "You are the Christ"',
      ref: 'Matthew 16:13-28; Mark 8:27-38',
      text: 'At the foot of Mount Hermon, by the great spring and the cliff of Pan\'s grotto at ancient Paneas, Philip the tetrarch\'s pagan capital, Jesus asked, "Who do you say that I am?" Peter answered, "You are the Christ, the Son of the living God," and Jesus promised to build his church on this rock and immediately began to teach that the Christ must suffer, die and rise.',
      christ: 'The confession of Jesus as Messiah is bound to the cross: no one may have the Christ without the crucified Christ (Mark 8:31-34).',
      via: [[32.9100, 35.6300], [33.0500, 35.6500]]
    },
    {
      place: 'tabor', lat: 32.6869, lon: 35.3906,
      title: 'The Transfiguration',
      ref: 'Matthew 17:1-13; Mark 9:2-13; Luke 9:28-36',
      text: 'Six days later Jesus took Peter, James and John up "a high mountain" and was transfigured before them; Moses and Elijah appeared, and the Father\'s voice said, "This is my beloved Son... listen to him." Tradition since the fourth century names Mount Tabor, the domed hill in the Jezreel valley; many scholars prefer a shoulder of Mount Hermon (33.4163, 35.8574), which towers above Caesarea Philippi where the previous scene occurred. The thread follows the tradition and notes the alternative.',
      christ: 'The law-giver and the prophet stand beside Jesus and then fade, leaving "Jesus only" (Matthew 17:8): the Scriptures point to him and yield to him.',
      via: [[33.0500, 35.6500], [32.9100, 35.6300], [32.8806, 35.5750], [32.7800, 35.5300]]
    },
    {
      place: 'capernaum', lat: 32.8806, lon: 35.5750,
      title: 'Capernaum: the last Galilean days',
      ref: 'Matthew 17:24 – 18:35; Mark 9:33-50',
      text: 'Back in Capernaum Jesus paid the temple tax with a coin from a fish\'s mouth, set a child in the midst of disciples arguing about greatness, and taught about forgiving seventy times seven. Galilee had heard him for perhaps two years; now "he set his face to go to Jerusalem" (Luke 9:51).',
      via: [[32.7800, 35.5300]]
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: Tabernacles and Dedication',
      ref: 'John 7:1 – 10:39; Luke 9:51-56',
      text: 'Travelling south through Samaria, where one village refused him lodging, Jesus arrived at the Feast of Tabernacles in the autumn. As water was poured out at the altar he cried, "If anyone thirsts, let him come to me and drink"; as the great lamps burned he said, "I am the light of the world"; he healed a man born blind at the pool of Siloam and called himself the Good Shepherd. At the winter Feast of Dedication they picked up stones when he said, "I and the Father are one."',
      christ: 'Each festival symbol, water, light, shepherd, temple, is claimed by Jesus as a picture of himself: Israel\'s worship was always about him.',
      via: [[32.7019, 35.3033], [32.5583, 35.3283], [32.4136, 35.2408], [32.2136, 35.2819], [31.9297, 35.2394]]
    },
    {
      place: 'bethany', lat: 31.7717, lon: 35.2617,
      title: 'Bethany: Lazarus raised',
      ref: 'Luke 10:38-42; John 11:1-53',
      text: 'The village of Mary, Martha and Lazarus on the eastern slope of the Mount of Olives, 3 km from the city, was Jesus\' Judean home. Here Martha served and Mary sat at his feet; here, arriving four days too late by human reckoning, he wept at a tomb, said, "I am the resurrection and the life," and called Lazarus out. The Sanhedrin resolved that he must die. Al-Eizariya keeps Lazarus\'s name, and a first-century tomb is venerated there.',
      christ: 'The raising of Lazarus is the sign that sealed Jesus\' death and previewed his own resurrection: life for others at the cost of his life (John 11:50-52).'
    },
    {
      place: 'ephraim-town', lat: 31.9525, lon: 35.2997,
      title: 'Ephraim: withdrawal',
      ref: 'John 11:54',
      text: 'With a warrant out for him, Jesus "no longer walked openly among the Jews" but withdrew with his disciples to Ephraim, a town on the edge of the wilderness north-east of Jerusalem, usually identified with et-Taiyibeh on its high ridge above the Jordan valley. It was a pause before the end.',
      via: [[31.8000, 35.2800], [31.9000, 35.2800]]
    },
    {
      place: 'jericho', lat: 31.8536, lon: 35.4312,
      title: 'Jericho: Bartimaeus and Zacchaeus',
      ref: 'Luke 18:35 – 19:10; Mark 10:46-52; John 10:40-42',
      text: 'Luke and John indicate a final period across the Jordan in Perea, where John had baptised, before Jesus came up to Passover through Jericho; the thread reconstructs that loop. At Herod\'s new Jericho, with its palaces and hippodrome, he healed blind Bartimaeus by the roadside and dined with Zacchaeus the chief tax collector, who climbed a sycamore to see him. "For the Son of Man came to seek and to save the lost."',
      via: [[32.0000, 35.4500], [32.1000, 35.5500], [32.0500, 35.6500], [31.9000, 35.6200], [31.8400, 35.5400]]
    },
    {
      place: 'bethany', lat: 31.7717, lon: 35.2617,
      title: 'Bethany: six days before Passover',
      ref: 'John 12:1-11; Mark 14:3-9',
      text: 'Climbing the steep Roman road from Jericho, Jesus reached Bethany six days before the Passover. At supper Mary poured a pound of pure nard over his feet and wiped them with her hair, and Jesus received it as anointing for his burial: "wherever the gospel is proclaimed in the whole world, what she has done will be told in memory of her." The Holy Week thread takes up the story from here.',
      christ: 'He has come to Jerusalem to die; the anointing declares it, and the crowds who come to see Lazarus do not yet understand it.',
      via: [[31.8000, 35.3500]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 12. HOLY WEEK — within and around Jerusalem
// ---------------------------------------------------------------------------
{
  id: 'holy-week',
  name: 'Holy Week: from Bethany to the Ascension',
  era: 'christ',
  color: '#8b1e3f',
  refs: 'Matthew 21–28; Mark 11–16; Luke 19–24; John 12–21; Acts 1:1-12',
  summary: 'The last week of Jesus\' earthly life traced at street level: Palm Sunday from Bethphage, the Temple, the Upper Room, Gethsemane, the trials, Golgotha and the empty tomb, then Emmaus, Galilee and the Mount of Olives. Sites are the traditional ones, with alternatives noted.',
  duration: 'Eight days, Nisan 9–16, followed by forty days to the Ascension; AD 30 (7 April) or AD 33 (3 April) for Good Friday',
  stops: [
    {
      place: 'bethany', lat: 31.7717, lon: 35.2617,
      title: 'Saturday: supper at Bethany',
      ref: 'John 12:1-11; Mark 14:3-9',
      text: 'Jesus lodged in Bethany with Lazarus, Martha and Mary, and at a supper in the house of Simon the leper Mary broke a jar of nard worth a year\'s wages over him. Judas objected; Jesus answered, "She has anointed my body beforehand for burial." The village lies on the far side of the Mount of Olives, just out of sight of the city.'
    },
    {
      place: 'bethphage', lat: 31.7752, lon: 35.2521,
      title: 'Sunday: the colt at Bethphage',
      ref: 'Matthew 21:1-7; Mark 11:1-7; Zechariah 9:9',
      text: 'At Bethphage, "house of unripe figs", on the ridge between Bethany and the summit, two disciples found a young donkey tied at a doorway, as Jesus had said. He mounted it to fulfil Zechariah: "Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey." The Franciscan chapel marks the medieval site.',
      christ: 'Kings rode horses to war; the Messiah rode a donkey to make peace (Zechariah 9:10).'
    },
    {
      place: 'mount-of-olives', lat: 31.7782, lon: 35.2450,
      title: 'Palm Sunday: down the Mount of Olives',
      ref: 'Luke 19:37-44; John 12:12-19',
      text: 'As the road came over the crest and Jerusalem burst into view across the Kidron, the crowd spread cloaks and palm branches and shouted, "Blessed is the King who comes in the name of the Lord!" Jesus wept over the city that did not know the time of its visitation, and foretold its destruction. From this slope the Temple stood in full view a few hundred metres away.'
    },
    {
      place: 'zion', lat: 31.7780, lon: 35.2354,
      title: 'Monday and Tuesday: the Temple',
      ref: 'Mark 11:15-19; Matthew 21:23 – 23:39; 24–25',
      text: 'Jesus overturned the money-changers\' tables in the Court of the Gentiles, "Is it not written, My house shall be called a house of prayer for all the nations?", then taught daily in Solomon\'s Portico, silencing priests, Pharisees, Herodians and Sadducees with parables and questions. Leaving on Tuesday evening he sat on the Mount of Olives opposite the Temple and foretold that not one stone would be left on another. Herod\'s vast platform survives today; the sanctuary does not.',
      christ: 'The Temple\'s Lord came to his Temple, as Malachi promised, and found it wanting; his own body would be the temple destroyed and raised (John 2:19-21).',
      via: [[31.7775, 35.2400]]
    },
    {
      place: 'bethany', lat: 31.7717, lon: 35.2617,
      title: 'Wednesday: quiet in Bethany, a bargain in the city',
      ref: 'Mark 11:11-12, 19; Luke 21:37-38; Matthew 26:14-16',
      text: 'Each evening Jesus walked back over the mount to Bethany. Wednesday is silent in the Gospels except for one transaction: Judas went to the chief priests and agreed to hand Jesus over for thirty pieces of silver, the price of a slave in Exodus 21:32 and the wage Zechariah threw to the potter.',
      via: [[31.7775, 35.2400], [31.7782, 35.2450], [31.7752, 35.2521]]
    },
    {
      place: 'upper-room', lat: 31.7716, lon: 35.2291,
      title: 'Thursday: the Upper Room',
      ref: 'Luke 22:7-38; John 13–17; 1 Corinthians 11:23-26',
      text: 'In a large upstairs room on the western hill Jesus washed his disciples\' feet, ate the Passover with them, gave bread and cup as his body and blood, "the new covenant", and taught them of the Spirit, the vine and the Father\'s house before praying for them and for all who would believe. The Cenacle, a fourteenth-century room on Mount Zion, stands on the site of the Byzantine Hagia Sion, which early sources link to the apostles\' meeting place.',
      christ: 'Passover became the Lord\'s Supper: the lamb of Egypt gives way to the Lamb of God, and the meal of remembrance is now of him (1 Corinthians 5:7).',
      via: [[31.7752, 35.2521], [31.7782, 35.2450], [31.7775, 35.2400], [31.7740, 35.2330]]
    },
    {
      place: 'gethsemane', lat: 31.7794, lon: 35.2397,
      title: 'Thursday night: Gethsemane',
      ref: 'Mark 14:26-52; Luke 22:39-53; John 18:1-12',
      text: 'After the hymn they crossed the Kidron to an olive grove and oil-press ("Gethsemane") at the foot of the Mount of Olives. Jesus prayed in anguish, "Abba, Father... Remove this cup from me. Yet not what I will, but what you will," while the disciples slept. Judas came with a kiss and a detachment of soldiers and temple police; Peter drew a sword; the disciples fled. Ancient olives still grow beside the Church of All Nations, built over a rock venerated since the fourth century.',
      christ: 'In the garden the second Adam chose obedience where the first had chosen his own will; the cup he accepted was ours (Isaiah 51:17; Matthew 26:39).',
      via: [[31.7740, 35.2330], [31.7770, 35.2380]]
    },
    {
      place: 'house-of-caiaphas', lat: 31.7722, lon: 35.2300,
      title: 'Night: the house of Caiaphas',
      ref: 'Matthew 26:57-75; Mark 14:53-72; John 18:12-27',
      text: 'Jesus was led first to Annas, then to the high priest Caiaphas, where the Sanhedrin met by night, heard false witnesses, and condemned him for blasphemy when he affirmed he was the Christ, the Son of God, and would sit at the right hand of Power. In the courtyard below, Peter denied him three times and the cock crowed. Two rival sites on the western hill claim the house: the Armenian church of St Saviour and, lower down, St Peter in Gallicantu (31.7717, 35.2323) with its rock-cut cells.',
      via: [[31.7770, 35.2380], [31.7750, 35.2340]]
    },
    {
      place: 'praetorium', lat: 31.7767, lon: 35.2277,
      title: 'Friday morning: before Pilate',
      ref: 'Luke 23:1-25; John 18:28 – 19:16',
      text: 'At dawn the council took Jesus to Pontius Pilate, who found no guilt in him, sent him to Herod Antipas, offered Barabbas, had him flogged and mocked and finally, fearing the crowd, "delivered him over to their will". Most scholars now locate Pilate\'s praetorium in Herod the Great\'s palace on the western hill near today\'s Citadel, not the Antonia fortress north of the Temple (31.7797, 35.2340) where the Via Dolorosa tradition begins; the marker follows the palace view.',
      christ: '"Behold your King!" Pilate said in mockery, and spoke the truth (John 19:14); the judge of all the earth stood judged.'
    },
    {
      place: 'golgotha', lat: 31.7784, lon: 35.2296,
      title: 'Good Friday: Golgotha',
      ref: 'Mark 15:21-41; Luke 23:26-49; John 19:17-37',
      text: 'Outside the wall, at the Place of the Skull, Jesus was crucified between two criminals about the third hour, mocked by passers-by, and in darkness at the ninth hour cried, "It is finished," and gave up his spirit. The curtain of the Temple tore in two. The Church of the Holy Sepulchre stands over an abandoned first-century quarry with a rocky knoll and tombs that lay just outside the city wall of Jesus\' day; the Garden Tomb (31.7838, 35.2300) is a nineteenth-century alternative.',
      christ: 'This is the centre of the atlas and of history: "he himself bore our sins in his body on the tree" (1 Peter 2:24).',
      via: [[31.7775, 35.2285]]
    },
    {
      place: 'golgotha', lat: 31.7785, lon: 35.2294,
      title: 'Saturday and Sunday: the tomb',
      ref: 'Matthew 27:57 – 28:10; John 19:38 – 20:18',
      text: 'Joseph of Arimathea and Nicodemus laid the body in a new rock-cut tomb in a garden a few paces from the cross, and a stone was rolled across. On the first day of the week the women found the stone moved and the tomb empty: "He is not here, but has risen." Mary Magdalene met him in the garden. The Edicule in the Holy Sepulchre encases a tomb whose first-century bench and surrounding kokhim tombs confirm a cemetery on the spot.',
      christ: 'The empty tomb is the Father\'s verdict on the Son\'s work: "raised for our justification" (Romans 4:25).'
    },
    {
      place: 'emmaus', lat: 31.8394, lon: 34.9894,
      title: 'Sunday afternoon: the road to Emmaus',
      ref: 'Luke 24:13-35',
      text: 'Two disciples walking home to Emmaus were joined by a stranger who explained from Moses and the Prophets that the Christ had to suffer and enter his glory; at table he broke bread and their eyes were opened. Emmaus-Nicopolis, shown here, is the site named by Eusebius and Jerome, though it lies 160 stadia away; Qubeibeh (31.8397, 35.1364) and Motza (31.7936, 35.1636) match Luke\'s sixty stadia and have their own claims.',
      via: [[31.7784, 35.2354], [31.8050, 35.1100]]
    },
    {
      place: 'upper-room', lat: 31.7716, lon: 35.2291,
      title: 'Sunday evening: behind locked doors',
      ref: 'Luke 24:36-49; John 20:19-29',
      text: 'The two hurried back the 11 km to Jerusalem and found the disciples already saying, "The Lord has risen indeed." Jesus stood among them, showed his hands and side, ate fish and said, "Peace be with you... As the Father has sent me, even so I am sending you." Thomas, absent, saw him a week later in the same room and confessed, "My Lord and my God!"',
      via: [[31.8050, 35.1100], [31.7784, 35.2354]]
    },
    {
      place: 'tabgha', lat: 32.8730, lon: 35.5480,
      title: 'Galilee: breakfast on the shore',
      ref: 'John 21; Matthew 28:16-20; 1 Corinthians 15:6',
      text: 'As he had promised, Jesus met his disciples in Galilee. By the lake at dawn he filled their nets, cooked breakfast and restored Peter with three questions and one command, "Feed my sheep." On a mountain he gave the Great Commission: "All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations." Tabgha, with its Church of the Primacy of Peter, is the traditional shore.',
      christ: 'The risen Lord sends fishermen to disciple the nations: the promise to Abraham becomes the mission of the church.',
      via: [[31.7784, 35.2354], [31.8711, 35.4441], [32.1000, 35.5500], [32.5000, 35.5000], [32.7000, 35.5800]]
    },
    {
      place: 'mount-of-olives', lat: 31.7782, lon: 35.2450,
      title: 'The fortieth day: the Ascension',
      ref: 'Luke 24:50-53; Acts 1:6-12',
      text: 'Back in Jerusalem, Jesus led the disciples out "as far as Bethany", on the Mount of Olives, blessed them and was lifted up until a cloud hid him. Two angels promised he would come the same way. The disciples worshipped and returned to the city with great joy to wait for the Spirit. The small Chapel of the Ascension on the summit preserves the fourth-century site.',
      christ: 'He ascended as a man to the throne of God: our brother reigns, and "we have such a high priest" in heaven (Hebrews 8:1).',
      via: [[32.7000, 35.5800], [32.5000, 35.5000], [32.1000, 35.5500], [31.8711, 35.4441], [31.7784, 35.2354]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 13. ACTS 1–11 — to the ends of the earth
// ---------------------------------------------------------------------------
{
  id: 'acts-1-8',
  name: 'To the Ends of the Earth: Acts 1–11',
  era: 'church',
  color: '#2a9d8f',
  refs: 'Acts 1:8; 2 – 11',
  summary: 'Jesus said the gospel would go from Jerusalem to Judea and Samaria and to the end of the earth. Acts traces exactly that: Pentecost in Jerusalem, Philip in Samaria and on the Gaza road, Saul struck down at Damascus, Peter with a Gentile at Caesarea, and a new kind of church at Antioch.',
  duration: 'c. AD 30/33 – 46',
  stops: [
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: Pentecost and the first church',
      ref: 'Acts 1:8; 2:1-47; 6:8 – 7:60',
      text: 'The Spirit came with wind and fire on the day of Pentecost and Peter preached Jesus crucified, risen and exalted; three thousand were baptised. The church met in the Temple courts and in homes, shared its goods, faced the Sanhedrin and grew. Stephen\'s sermon and stoning ended the Jerusalem-only phase: "those who were scattered went about preaching the word."',
      christ: 'Peter\'s first sermon is a map of the Scarlet Thread: David\'s Psalms, Joel\'s promise and Jesus\' resurrection all converge on "this Jesus whom you crucified" (Acts 2:36).'
    },
    {
      place: 'samaria', lat: 32.2767, lon: 35.1897,
      title: 'Samaria: Philip and the despised neighbours',
      ref: 'Acts 8:4-25',
      text: 'Philip went down to "the city of Samaria", probably Sebaste, Herod\'s rebuilt capital, though some read it as Shechem, and proclaimed Christ to the people Jews would not eat with. Crowds believed, Simon the magician was exposed, and Peter and John came from Jerusalem to lay hands on the new believers. The centuries-old breach between Jew and Samaritan began to close in Christ.',
      via: [[31.9297, 35.2394], [32.0556, 35.2897], [32.2136, 35.2819]]
    },
    {
      place: 'gaza-road', lat: 31.6200, lon: 34.8500,
      title: 'The Gaza road: the Ethiopian official',
      ref: 'Acts 8:26-40; Isaiah 53:7-8',
      text: 'An angel sent Philip to the desert road toward Gaza, where a high official of the Ethiopian queen was reading Isaiah 53 in his chariot on the way home from worshipping in Jerusalem. "Do you understand what you are reading?" Philip explained the Suffering Servant, baptised him at a roadside pool and the man went on rejoicing, the first African believer. The marker sits on the road through the Shephelah near Beth-guvrin.',
      christ: 'Isaiah 53, "like a sheep he was led to the slaughter", opened to a foreigner: the servant\'s death is for the nations (Isaiah 52:15).',
      via: [[32.2136, 35.2819], [31.9297, 35.2394], [31.7784, 35.2354], [31.7000, 35.1000]]
    },
    {
      place: 'damascus', lat: 33.5138, lon: 36.2765,
      title: 'Damascus: the persecutor called',
      ref: 'Acts 9:1-25; Galatians 1:15-17',
      text: 'Saul of Tarsus, "breathing threats and murder", set out with letters from the high priest to arrest believers in Damascus, a week\'s journey north past Galilee. Near the city a light from heaven threw him down and a voice said, "Saul, Saul, why are you persecuting me?" Blind for three days in the house of Judas on Straight Street, he was healed and baptised by Ananias, then preached Jesus in the synagogues until he had to escape over the wall in a basket.',
      christ: 'The risen Christ identifies himself with his suffering people, "why are you persecuting me?", and turns his fiercest enemy into his apostle to the nations.',
      via: [[31.7784, 35.2354], [32.2136, 35.2819], [32.5000, 35.5000], [32.7800, 35.5500], [32.9500, 35.7500], [33.2000, 36.0000]]
    },
    {
      place: 'joppa', lat: 32.0536, lon: 34.7503,
      title: 'Lydda and Joppa: Peter on the coast',
      ref: 'Acts 9:32-43',
      text: 'While Saul went home to Tarsus, Peter travelled the coastal plain. At Lydda he healed the paralysed Aeneas; at the port of Joppa, where Jonah had once boarded a ship to flee from God\'s call to the nations, he raised the seamstress Tabitha from death and stayed with Simon the tanner in a house by the sea. There, on the roof, a vision would change everything.',
      via: [[33.2000, 36.0000], [32.9500, 35.7500], [32.7800, 35.5500], [32.5800, 35.1800], [32.4994, 34.8917], [32.1050, 34.9306], [31.9500, 34.8900]]
    },
    {
      place: 'caesarea-maritima', lat: 32.4994, lon: 34.8917,
      title: 'Caesarea: Cornelius and the Gentile Pentecost',
      ref: 'Acts 10:1 – 11:18',
      text: 'In Caesarea, Herod\'s marble harbour city and the seat of the Roman governor, the centurion Cornelius saw an angel; in Joppa Peter saw unclean animals and heard, "What God has made clean, do not call common." Peter walked the 50 km up the coast, preached Jesus in a Gentile house, and the Spirit fell before he finished. "Truly I understand that God shows no partiality." The Jerusalem church, hearing it, fell silent and then glorified God.',
      christ: 'The gospel is for the uncircumcised without becoming Jews first: the wall Christ demolished in his flesh (Ephesians 2:14) comes down in Peter\'s experience.',
      via: [[32.2000, 34.8300]]
    },
    {
      place: 'antioch-syria', lat: 36.2000, lon: 36.1600,
      title: 'Antioch: a church for the nations',
      ref: 'Acts 11:19-30; 13:1-3',
      text: 'Believers scattered by Stephen\'s persecution travelled up the Phoenician coast to Antioch on the Orontes, third city of the empire, and some of them, Cypriots and Cyrenians, began preaching to Greeks. A large mixed church formed; Barnabas fetched Saul from Tarsus to teach it, and here "the disciples were first called Christians." From Antioch the Spirit would send Barnabas and Saul out; the Paul threads take up the story.',
      christ: 'A church of Jews and Gentiles worshipping together is the "mystery" Paul would spend his life expounding: the nations fellow heirs in Christ (Ephesians 3:6).',
      via: [[32.9200, 35.0700], [33.2704, 35.1961], [33.5633, 35.3689], [33.8938, 35.5018], [34.1200, 35.6500], [34.4400, 35.8300], [34.8500, 35.8700], [35.5200, 35.7800], [35.9000, 36.0000]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 14. PAUL'S FIRST JOURNEY — Cyprus and Galatia
// ---------------------------------------------------------------------------
{
  id: 'paul-1',
  name: 'Paul\'s First Journey: Cyprus and Galatia',
  era: 'church',
  color: '#d4713b',
  refs: 'Acts 13:1 – 14:28',
  summary: 'Sent out by the church at Antioch, Barnabas and Saul crossed Cyprus, sailed to Pamphylia and climbed into the Galatian highlands, planting churches at Pisidian Antioch, Iconium, Lystra and Derbe before retracing their steps to appoint elders.',
  duration: 'c. AD 47–48',
  stops: [
    {
      place: 'antioch-syria', lat: 36.2000, lon: 36.1600,
      title: 'Antioch: set apart and sent',
      ref: 'Acts 13:1-3',
      text: 'While the leaders of the Antioch church were worshipping and fasting, the Holy Spirit said, "Set apart for me Barnabas and Saul for the work to which I have called them." They laid hands on them and sent them off; John Mark, Barnabas\'s cousin, went as their helper. It was the first deliberate mission from a local church in Christian history.'
    },
    {
      place: 'seleucia', lat: 36.1236, lon: 35.9256,
      title: 'Seleucia: the port of Antioch',
      ref: 'Acts 13:4',
      text: 'A day\'s walk down the Orontes brought them to Seleucia Pieria, Antioch\'s harbour at the foot of Mount Pieria, built by Seleucus I and still marked by its rock-cut water tunnel and silted basin. From here Cyprus, Barnabas\'s homeland, lay a day\'s sail to the south-west.',
      via: [[36.1500, 36.0500]]
    },
    {
      place: 'salamis', lat: 35.1833, lon: 33.9000,
      title: 'Salamis: synagogues of Cyprus',
      ref: 'Acts 13:5',
      text: 'They landed at Salamis, the chief port of eastern Cyprus, and preached in its synagogues; the island had a large Jewish population, and Cypriot believers had helped found the Antioch church. The ruins of Salamis, with gymnasium and theatre, lie north of Famagusta.',
      via: [[36.0000, 35.5000], [35.5000, 34.7000]]
    },
    {
      place: 'paphos', lat: 34.7569, lon: 32.4067,
      title: 'Paphos: the proconsul and the sorcerer',
      ref: 'Acts 13:6-12',
      text: 'Crossing the whole island by the south-coast road through Kition, Amathus and Kourion, they reached Paphos, the Roman capital. The proconsul Sergius Paulus wanted to hear them; his court magician Bar-Jesus opposed them and was struck blind at Paul\'s word, and the proconsul believed. From here Luke calls Saul by his Roman name, Paul. Inscriptions naming the Sergii Paulli have been found near Pisidian Antioch, which may explain the missionaries\' next destination.',
      christ: 'A Roman governor believing while a false prophet is blinded: the gospel confronts the powers, and "the word of God is not bound".',
      via: [[34.9200, 33.6300], [34.7100, 33.1400], [34.6600, 32.8900]]
    },
    {
      place: 'perga', lat: 36.9614, lon: 30.8539,
      title: 'Perga: John Mark turns back',
      ref: 'Acts 13:13; 15:37-38',
      text: 'Sailing north to Pamphylia, they put in at Perga, a Greek city a few kilometres up the Cestrus river, whose colonnaded streets and stadium still stand. Here John Mark left them and returned to Jerusalem, a departure Paul would hold against him years later. The plain of Pamphylia was malarial in summer; some think Paul fell ill here (Galatians 4:13).',
      via: [[34.9000, 31.9000], [35.8000, 31.2000], [36.6000, 30.8000], [36.8500, 30.8500]]
    },
    {
      place: 'antioch-pisidia', lat: 38.3061, lon: 31.1892,
      title: 'Pisidian Antioch: a light for the Gentiles',
      ref: 'Acts 13:14-52',
      text: 'A hard climb of 160 km through the bandit-ridden Taurus passes brought them to the Roman colony of Antioch near Pisidia, 1,200 m up on the Anatolian plateau. In the synagogue Paul preached the sermon Luke records at length, from the Exodus to David to the risen Jesus, "through this man forgiveness of sins is proclaimed to you." Many Gentiles believed; the Jewish leaders stirred up persecution, and Paul quoted Isaiah: "I have made you a light for the Gentiles." The city\'s ruins at Yalvaç include a temple of Augustus and a fragment of the Res Gestae.',
      christ: 'Paul\'s sermon reads Psalm 2, Psalm 16 and Isaiah 55 as promises to David fulfilled in the resurrection: "what God promised to the fathers, this he has fulfilled to us" (Acts 13:32-33).',
      via: [[37.3000, 30.9000], [37.7000, 30.7500], [38.0500, 30.8500]]
    },
    {
      place: 'iconium', lat: 37.8714, lon: 32.4847,
      title: 'Iconium',
      ref: 'Acts 14:1-7',
      text: 'The Via Sebaste, Augustus\'s military road, ran south-east from Antioch across the plateau to Iconium (Konya), a prosperous city on the edge of the Lycaonian plain. Paul and Barnabas spoke boldly for a long time and "a great number of both Jews and Greeks believed", until a plot to stone them sent them on toward Lystra. Iconium later gave the church the legend of Thecla.',
      via: [[38.1000, 31.7000]]
    },
    {
      place: 'lystra', lat: 37.5786, lon: 32.4544,
      title: 'Lystra: hailed as gods, then stoned',
      ref: 'Acts 14:8-20; 16:1-2; 2 Timothy 3:11',
      text: 'At the small Roman colony of Lystra Paul healed a man lame from birth, and the Lycaonian-speaking crowd decided Barnabas was Zeus and Paul was Hermes and tried to sacrifice oxen to them. Paul\'s protest, "we bring you good news, that you should turn from these vain things to a living God", is his only recorded sermon to pagans without a synagogue. Jews from Antioch and Iconium then had him stoned and dragged out for dead. Timothy\'s family lived here.',
      christ: 'Paul rose from the stones and walked into Derbe the next day, "always carrying in the body the death of Jesus" (2 Corinthians 4:10).'
    },
    {
      place: 'derbe', lat: 37.3500, lon: 33.3722,
      title: 'Derbe: the furthest point',
      ref: 'Acts 14:20-21',
      text: 'Derbe, a frontier town of the province near the border with the client kingdom of Antiochus, was the eastern end of the journey; an inscription found at Kerti Hüyük in 1956 fixed its location. They made many disciples here without recorded opposition. Rather than push on through the Cilician Gates to Tarsus and home, they chose to go back the way they had come and strengthen the new churches.',
      via: [[37.4500, 32.9000]]
    },
    {
      place: 'lystra', lat: 37.5786, lon: 32.4544,
      title: 'Lystra revisited: elders appointed',
      ref: 'Acts 14:21-23',
      text: 'Returning to the city where he had been stoned, Paul strengthened the disciples and told them "through many tribulations we must enter the kingdom of God." In each church he and Barnabas appointed elders, with prayer and fasting, committing the believers to the Lord. The pattern of local leadership was set from the beginning.',
      via: [[37.4500, 32.9000]]
    },
    {
      place: 'iconium', lat: 37.8714, lon: 32.4847,
      title: 'Iconium revisited',
      ref: 'Acts 14:21-23',
      text: 'At Iconium too they confirmed the believers and appointed elders, despite the plot that had driven them out months before. The Galatian churches would soon be troubled by teachers demanding circumcision; Paul\'s letter to the Galatians, on the view that it addresses these cities, was his answer.'
    },
    {
      place: 'antioch-pisidia', lat: 38.3061, lon: 31.1892,
      title: 'Pisidian Antioch revisited',
      ref: 'Acts 14:21-23',
      text: 'Back at Antioch, the city that had expelled them, they completed the circuit of the four churches. Then they turned south again toward the Taurus and the coast.',
      via: [[38.1000, 31.7000]]
    },
    {
      place: 'perga', lat: 36.9614, lon: 30.8539,
      title: 'Perga: the word preached',
      ref: 'Acts 14:24-25',
      text: 'Descending through Pisidia into Pamphylia they came again to Perga, and this time, Luke notes, they spoke the word there before going down to the harbour of Attalia.',
      via: [[38.0500, 30.8500], [37.7000, 30.7500], [37.3000, 30.9000]]
    },
    {
      place: 'attalia', lat: 36.8841, lon: 30.7056,
      title: 'Attalia: the port home',
      ref: 'Acts 14:25-26',
      text: 'Attalia (Antalya), founded by Attalus II of Pergamum, was the main harbour of the Pamphylian coast. From here they found a ship sailing east along the Cilician coast to Seleucia and Antioch, completing a journey of some 2,000 km.'
    },
    {
      place: 'antioch-syria', lat: 36.2000, lon: 36.1600,
      title: 'Antioch: the report',
      ref: 'Acts 14:26-28; 15:1-35',
      text: 'They gathered the church and "declared all that God had done with them, and how he had opened a door of faith to the Gentiles." The question of whether Gentile believers must be circumcised soon followed them to Antioch and was settled at the Jerusalem council, which Paul and Barnabas attended before setting out again.',
      christ: 'The Jerusalem council\'s verdict, that Gentiles are saved by grace through faith alone, "just as they are" (Acts 15:11), guards the gospel that this journey had preached.',
      via: [[36.6000, 31.5000], [36.1000, 32.4000], [35.9500, 32.8000], [36.1000, 33.6000], [36.4000, 34.6000], [36.4500, 35.4000], [36.3000, 35.6500], [36.1236, 35.9256], [36.1500, 36.0500]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 15. PAUL'S SECOND JOURNEY — into Europe
// ---------------------------------------------------------------------------
{
  id: 'paul-2',
  name: 'Paul\'s Second Journey: into Europe',
  era: 'church',
  color: '#1f7a8c',
  refs: 'Acts 15:36 – 18:22',
  summary: 'Paul and Silas crossed Asia Minor by land, were called in a vision at Troas to Macedonia, and planted churches along the Via Egnatia at Philippi, Thessalonica and Berea before Athens and eighteen months in Corinth; the letters to the Thessalonians were written on the way.',
  duration: 'c. AD 49–52',
  stops: [
    {
      place: 'antioch-syria', lat: 36.2000, lon: 36.1600,
      title: 'Antioch: a painful parting',
      ref: 'Acts 15:36-41',
      text: 'Paul proposed revisiting the churches; Barnabas wanted to bring John Mark, Paul refused, and "there arose a sharp disagreement". Barnabas took Mark to Cyprus, Paul took Silas north by land. God made two missions out of one quarrel, and Paul later spoke warmly of both men.'
    },
    {
      place: 'tarsus', lat: 36.9177, lon: 34.8949,
      title: 'Tarsus: through Syria and Cilicia',
      ref: 'Acts 15:41; 9:30; 22:3',
      text: 'The road north crossed the Amanus range by the Syrian Gates (Belen pass), skirted the gulf of Issus and ran across the Cilician plain to Tarsus, Paul\'s birthplace, a university city on the Cydnus and capital of Cilicia. He strengthened the churches of the region, probably founded during his silent years there after his conversion.',
      via: [[36.5000, 36.3000], [36.8500, 36.1700], [37.0000, 35.6000], [37.0000, 35.3200]]
    },
    {
      place: 'derbe', lat: 37.3500, lon: 33.3722,
      title: 'Derbe: through the Cilician Gates',
      ref: 'Acts 16:1',
      text: 'North of Tarsus the road climbs through the Cilician Gates, a gorge in the Taurus barely wide enough for the river and a road, onto the plateau. Turning west past Tyana and Cybistra, Paul and Silas came to Derbe, the last church of the first journey, now the first of the second.',
      via: [[37.2833, 34.7833], [37.4200, 34.8700], [37.8500, 34.6100], [37.5100, 34.0500]]
    },
    {
      place: 'lystra', lat: 37.5786, lon: 32.4544,
      title: 'Lystra: Timothy joins',
      ref: 'Acts 16:1-3; 2 Timothy 1:5',
      text: 'At Lystra Paul found Timothy, son of a Jewish believer, Eunice, and a Greek father, well spoken of by the churches. Paul circumcised him so that he could work among Jews, and took him as a companion; he would become Paul\'s "beloved child" and the recipient of two letters.',
      via: [[37.4500, 32.9000]]
    },
    {
      place: 'iconium', lat: 37.8714, lon: 32.4847,
      title: 'Iconium: the decree delivered',
      ref: 'Acts 16:4-5',
      text: 'In the Galatian cities Paul delivered the decision of the Jerusalem council freeing Gentiles from circumcision, "so the churches were strengthened in the faith, and they increased in numbers daily."'
    },
    {
      place: 'antioch-pisidia', lat: 38.3061, lon: 31.1892,
      title: 'Pisidian Antioch: forbidden to go to Asia',
      ref: 'Acts 16:6',
      text: 'From Antioch the natural road ran west down the Maeander valley to Ephesus and the province of Asia, but "they were forbidden by the Holy Spirit to speak the word in Asia". Instead they turned north through Phrygia toward Bithynia, and were stopped again. God was steering them toward a continent.',
      via: [[38.1000, 31.7000]]
    },
    {
      place: 'troas', lat: 39.7522, lon: 26.1583,
      title: 'Troas: "Come over to Macedonia"',
      ref: 'Acts 16:7-10',
      text: 'Passing by Mysia they came down to Alexandria Troas, a busy Roman port near ancient Troy facing the Aegean. There Paul dreamed of a Macedonian pleading, "Come over to Macedonia and help us," and Luke, whose "we" begins here, joined the party. The ruins of Troas, with its bath complex and harbour, lie in oak scrub south of the Dardanelles.',
      christ: 'The gospel crossed from Asia to Europe not by strategy but by the Spirit\'s closed doors and one night vision.',
      via: [[38.7500, 30.7500], [39.4200, 29.9800], [39.7500, 29.2000], [39.6500, 27.9000], [39.5000, 26.9400]]
    },
    {
      place: 'neapolis', lat: 40.9397, lon: 24.4122,
      title: 'Neapolis: landing in Europe',
      ref: 'Acts 16:11',
      text: 'With a fair wind they ran north-west past Tenedos and Imbros to the island of Samothrace, anchored overnight, and reached Neapolis (Kavala) the next day: two days for a crossing that later took five. Neapolis was the port of Philippi and the eastern terminus of the Via Egnatia.',
      via: [[39.7200, 25.8500], [40.1000, 25.6000], [40.4500, 25.5500], [40.6500, 25.0500], [40.8500, 24.5500]]
    },
    {
      place: 'philippi', lat: 41.0131, lon: 24.2864,
      title: 'Philippi: Lydia, the jailer and a Roman colony',
      ref: 'Acts 16:12-40; Philippians 1:1-11',
      text: 'Sixteen kilometres inland over the pass lay Philippi, a Roman colony settled with veterans after the battle of 42 BC, proud of its Latin rights. With no synagogue, Paul preached by the river to women, and Lydia the purple-seller became the first European convert. An exorcism led to a beating and prison, an earthquake and a jailer\'s baptism: "Believe in the Lord Jesus, and you will be saved, you and your household." The forum, theatre and Egnatian paving are still visible.',
      christ: 'Paul would write to this church his hymn of the self-emptying Christ (Philippians 2:5-11), from a later prison.',
      via: [[40.9800, 24.3300]]
    },
    {
      place: 'amphipolis', lat: 40.8236, lon: 23.8447,
      title: 'Amphipolis',
      ref: 'Acts 17:1',
      text: 'The Via Egnatia, Rome\'s great road across the Balkans, carried them west 50 km to Amphipolis on the Strymon, capital of the first district of Macedonia, where a colossal marble lion still guards the bridge approach. Luke records no preaching; it was a day\'s march.',
      via: [[40.9000, 24.0500]]
    },
    {
      place: 'apollonia', lat: 40.6333, lon: 23.4500,
      title: 'Apollonia',
      ref: 'Acts 17:1',
      text: 'Another day west brought them to Apollonia, a small town south of Lake Bolbe on the road to Thessalonica. The Via Egnatia made the whole journey from Neapolis to Thessalonica possible in about five days.',
      via: [[40.7000, 23.6500]]
    },
    {
      place: 'thessalonica', lat: 40.6403, lon: 22.9439,
      title: 'Thessalonica: the world turned upside down',
      ref: 'Acts 17:1-9; 1 Thessalonians 1:2-10',
      text: 'The capital of Macedonia and a free city with its own politarchs, Thessalonica had a synagogue where Paul argued for three Sabbaths that the Christ had to suffer and rise. A church formed in Jason\'s house, but a mob dragged Jason before the politarchs: "These men who have turned the world upside down have come here also... saying that there is another king, Jesus." Paul left by night; two letters soon followed, praising believers who "turned to God from idols".',
      via: [[40.6300, 23.2000]]
    },
    {
      place: 'berea', lat: 40.5242, lon: 22.2036,
      title: 'Berea: examining the Scriptures daily',
      ref: 'Acts 17:10-14',
      text: 'Leaving the Egnatia, they went 75 km south-west to Berea (Veria) in the foothills of the Vermion range. The Jews here "were more noble than those in Thessalonica; they received the word with all eagerness, examining the Scriptures daily to see if these things were so", and many believed, including prominent Greek women. When agitators arrived from Thessalonica, the believers sent Paul to the coast.',
      via: [[40.6000, 22.6000]]
    },
    {
      place: 'athens', lat: 37.9715, lon: 23.7267,
      title: 'Athens: the unknown God',
      ref: 'Acts 17:15-34',
      text: 'By sea from the Macedonian coast, past Olympus and outside Euboea, Paul came alone to Athens, the intellectual capital of the world, its Acropolis crowded with temples and its streets with idols. In the synagogue, the agora and finally before the Areopagus court he proclaimed the God who made the world, "in whom we live and move and have our being", and who had raised a man from the dead to judge it. Some mocked, Dionysius and Damaris believed, and no church letter to Athens survives.',
      christ: 'Paul quotes Greek poets and an altar to an unknown god only to announce Jesus and the resurrection: every culture\'s longing has a name (Acts 17:23, 31).',
      via: [[40.4700, 22.5900], [40.0000, 22.9000], [39.5000, 23.3500], [39.0500, 24.3000], [38.3500, 24.7500], [38.0800, 24.6200], [37.7200, 24.2200], [37.6000, 24.0500], [37.7200, 23.7200], [37.9400, 23.6400]]
    },
    {
      place: 'corinth', lat: 37.9058, lon: 22.8797,
      title: 'Corinth: eighteen months',
      ref: 'Acts 18:1-17; 1 Corinthians 2:1-5',
      text: 'The road west through Eleusis and Megara led to Corinth, the wealthy, notoriously immoral capital of Achaia straddling the isthmus between two seas. Paul lodged and worked leather with Aquila and Priscilla, refugees from Rome, and when the synagogue rejected him moved next door to the house of Titius Justus. God told him in a vision, "I have many in this city who are my people." An inscription from Delphi dates the proconsul Gallio, before whom Paul was arraigned, to AD 51–52, anchoring the whole chronology of Paul\'s life.',
      christ: 'To this proud city Paul preached "Jesus Christ and him crucified", the foolishness of God wiser than men (1 Corinthians 1:23-25; 2:2).',
      via: [[38.0400, 23.5400], [37.9900, 23.3400], [37.9300, 22.9900]]
    },
    {
      place: 'cenchreae', lat: 37.8836, lon: 22.9939,
      title: 'Cenchreae: a vow fulfilled',
      ref: 'Acts 18:18; Romans 16:1-2',
      text: 'Corinth\'s eastern harbour on the Saronic Gulf, Cenchreae, is where Paul had his hair cut for a vow before sailing for Syria with Priscilla and Aquila. A church grew here too: Phoebe, "a servant of the church at Cenchreae", would later carry Paul\'s letter to Rome. Its submerged Roman quays can still be seen.'
    },
    {
      place: 'ephesus', lat: 37.9411, lon: 27.3419,
      title: 'Ephesus: a first, brief visit',
      ref: 'Acts 18:19-21',
      text: 'The ship threaded the Cyclades to Ephesus, the great port of Asia. Paul reasoned in the synagogue and was asked to stay, but declined, promising, "I will return to you if God wills." Priscilla and Aquila remained and would soon instruct the eloquent Alexandrian preacher Apollos.',
      via: [[37.8500, 23.2500], [37.8200, 23.6000], [37.6000, 24.0500], [37.3000, 24.3000], [37.3000, 24.8000], [37.3000, 25.5000], [37.7500, 26.0000], [37.8500, 26.6000], [37.9000, 27.2000]]
    },
    {
      place: 'caesarea-maritima', lat: 32.4994, lon: 34.8917,
      title: 'Caesarea: back in Judea',
      ref: 'Acts 18:22',
      text: 'From Ephesus a long open-sea passage, south past Rhodes and Cyprus, brought Paul to Caesarea, Herod\'s harbour and the Roman capital of Judea, after some 1,200 km at sea. From here he "went up", almost certainly to Jerusalem, to greet the church and perhaps complete his vow.',
      via: [[37.9000, 27.2000], [37.8500, 26.6000], [37.5500, 26.4000], [37.2000, 26.6000], [36.8500, 26.9000], [36.6200, 27.3000], [36.5000, 27.7000], [36.0000, 27.6000], [35.8000, 27.6000], [35.3000, 30.0000], [34.4000, 32.3000], [34.3000, 33.8000], [33.6000, 34.8000]]
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: greeting the church',
      ref: 'Acts 18:22',
      text: 'Luke gives the visit one clause. Paul climbed the Beth-horon road to Jerusalem, greeted the mother church, and turned north again for Antioch. It was about three years since he had left.',
      via: [[32.1050, 34.9306], [31.8830, 35.1180]]
    },
    {
      place: 'antioch-syria', lat: 36.2000, lon: 36.1600,
      title: 'Antioch: home again',
      ref: 'Acts 18:22-23',
      text: 'Paul returned to his sending church at Antioch by the coast road through Phoenicia, and "after spending some time there" set out on his third journey. In three years he had carried the gospel from Syria to the Adriatic side of Greece and written at least two New Testament letters.',
      via: [[32.4994, 34.8917], [32.9200, 35.0700], [33.2704, 35.1961], [33.5633, 35.3689], [33.8938, 35.5018], [34.1200, 35.6500], [34.4400, 35.8300], [34.8500, 35.8700], [35.5200, 35.7800], [35.9000, 36.0000]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 16. PAUL'S THIRD JOURNEY — Ephesus and the farewell tour
// ---------------------------------------------------------------------------
{
  id: 'paul-3',
  name: 'Paul\'s Third Journey: Ephesus and Farewell',
  era: 'church',
  color: '#6a4c93',
  refs: 'Acts 18:23 – 21:17',
  summary: 'Three years in Ephesus made Asia ring with the gospel; then Paul crossed to Macedonia and Corinth, wrote Romans, and sailed island by island down the Aegean coast to Miletus, Tyre and Caesarea, going up to Jerusalem with the collection and a prophecy of chains.',
  duration: 'c. AD 53–57',
  stops: [
    {
      place: 'antioch-syria', lat: 36.2000, lon: 36.1600,
      title: 'Antioch: setting out once more',
      ref: 'Acts 18:23',
      text: 'After a stay in Antioch Paul left for the third and last time, again by the land route through Cilicia and the Galatian churches. He was heading for Ephesus, the city the Spirit had closed to him on the previous journey.'
    },
    {
      place: 'tarsus', lat: 36.9177, lon: 34.8949,
      title: 'Tarsus and the Cilician Gates',
      ref: 'Acts 18:23',
      text: 'Once more through the Syrian Gates, across the Cilician plain and up through the Cilician Gates onto the plateau, a climb Paul had made many times. The route from Tarsus to the plateau rises 1,000 m in a few kilometres of gorge.',
      via: [[36.5000, 36.3000], [36.8500, 36.1700], [37.0000, 35.6000], [37.0000, 35.3200]]
    },
    {
      place: 'antioch-pisidia', lat: 38.3061, lon: 31.1892,
      title: 'Galatia: strengthening the disciples',
      ref: 'Acts 18:23; 1 Corinthians 16:1; Galatians 6:6-10',
      text: 'Paul "went from one place to the next through the region of Galatia and Phrygia, strengthening all the disciples", passing through Derbe, Lystra and Iconium to Antioch. He organised the churches\' share in the collection for the poor believers of Jerusalem that would occupy the rest of the journey. The marker stands at Pisidian Antioch, the last Galatian city before the road to Asia.',
      via: [[37.2833, 34.7833], [37.8500, 34.6100], [37.5100, 34.0500], [37.3500, 33.3722], [37.5786, 32.4544], [37.8714, 32.4847], [38.1000, 31.7000]]
    },
    {
      place: 'ephesus', lat: 37.9411, lon: 27.3419,
      title: 'Ephesus: three years',
      ref: 'Acts 19:1 – 20:1; 1 Corinthians 16:8-9',
      text: 'Down the Lycus and Maeander valleys, past Laodicea and Tralles, Paul came to Ephesus, a city of some 200,000 with the Temple of Artemis, one of the seven wonders, and a theatre for 24,000. He baptised twelve disciples of John, taught daily in the hall of Tyrannus for two years, saw sorcerers burn their scrolls, and "all the residents of Asia heard the word of the Lord". The silversmith Demetrius finally raised a two-hour riot in the theatre, "Great is Artemis of the Ephesians!" Paul wrote 1 Corinthians from here and probably faced the "wild beasts" and near-death he mentions.',
      christ: 'In the city of the great goddess Paul preached a greater Lord, and idols lost their market: "the word of the Lord continued to increase and prevail mightily" (Acts 19:20).',
      via: [[38.0700, 30.1700], [37.8400, 29.1100], [37.8500, 28.5000], [37.8500, 27.8500], [37.8500, 27.5000]]
    },
    {
      place: 'troas', lat: 39.7522, lon: 26.1583,
      title: 'Troas: waiting for Titus',
      ref: 'Acts 20:1; 2 Corinthians 2:12-13; 7:5-7',
      text: 'After the riot Paul travelled north by the coast road through Smyrna, Pergamum and Adramyttium to Troas, where "a door was opened" for the gospel but his spirit had no rest because Titus had not come with news from troubled Corinth. He crossed to Macedonia to find him.',
      via: [[38.4189, 27.1287], [39.1319, 27.1841], [39.5000, 26.9400], [39.4908, 26.3364]]
    },
    {
      place: 'philippi', lat: 41.0131, lon: 24.2864,
      title: 'Macedonia: 2 Corinthians written',
      ref: 'Acts 20:1-2; 2 Corinthians 7:5-16; 8:1-5',
      text: 'In Macedonia Titus arrived with good news of Corinth\'s repentance, and Paul wrote 2 Corinthians, praising the Macedonians who gave to the collection "beyond their means" in their own poverty. He may have pushed as far west as Illyricum in this period (Romans 15:19). The thread marks Philippi as the base.',
      via: [[39.7200, 25.8500], [40.1000, 25.6000], [40.4500, 25.5500], [40.6500, 25.0500], [40.8500, 24.5500], [40.9397, 24.4122], [40.9800, 24.3300]]
    },
    {
      place: 'corinth', lat: 37.9058, lon: 22.8797,
      title: 'Corinth: three winter months, Romans written',
      ref: 'Acts 20:2-3; Romans 15:22-29; 16:1-2, 23',
      text: 'Paul came down to Greece, probably by the Egnatia and the long road through Thessaly, though a coastal voyage is possible, and spent the winter of AD 56–57 in Corinth. Here, in the house of Gaius, he dictated the letter to the Romans to Tertius, announcing his plan to deliver the collection to Jerusalem and then go to Rome and on to Spain. Phoebe of Cenchreae carried the letter.',
      christ: 'Romans, written at this stop, is the fullest statement of the gospel this atlas traces: righteousness from God through faith in Jesus Christ, for Jew and Greek alike (Romans 1:16-17; 3:21-26).',
      via: [[40.8236, 23.8447], [40.6403, 22.9439], [40.5242, 22.2036], [39.6400, 22.4200], [38.8000, 22.5300], [38.3200, 23.3200], [37.9900, 23.3400], [37.9300, 22.9900]]
    },
    {
      place: 'philippi', lat: 41.0131, lon: 24.2864,
      title: 'Philippi again: Passover, and a plot avoided',
      ref: 'Acts 20:3-6',
      text: 'Paul meant to sail straight for Syria, but a Jewish plot against him, probably on the ship, made him return overland through Macedonia. The delegates carrying the churches\' gifts went ahead to Troas while Paul kept Passover at Philippi with Luke, whose "we" resumes here.',
      via: [[37.9300, 22.9900], [37.9900, 23.3400], [38.3200, 23.3200], [38.8000, 22.5300], [39.6400, 22.4200], [40.5242, 22.2036], [40.6403, 22.9439], [40.8236, 23.8447]]
    },
    {
      place: 'troas', lat: 39.7522, lon: 26.1583,
      title: 'Troas: Eutychus falls from the window',
      ref: 'Acts 20:6-12',
      text: 'The crossing from Neapolis took five days against the wind. In Troas the church met on the first day of the week to break bread, Paul talked until midnight, and a young man named Eutychus, asleep in a third-storey window, fell and was taken up dead. Paul embraced him, restored him, and went on talking until daybreak.',
      via: [[40.9800, 24.3300], [40.9397, 24.4122], [40.8500, 24.5500], [40.6500, 25.0500], [40.4500, 25.5500], [40.1000, 25.6000], [39.7200, 25.8500]]
    },
    {
      place: 'assos', lat: 39.4908, lon: 26.3364,
      title: 'Assos: Paul walks',
      ref: 'Acts 20:13-14',
      text: 'The ship rounded Cape Lectum while Paul walked the 30 km across the peninsula to Assos, a hill town with a temple of Athena on its acropolis and a harbour below, and rejoined the party there. Why he walked Luke does not say; perhaps he wanted a day alone.',
      via: [[39.6000, 26.2500]]
    },
    {
      place: 'mitylene', lat: 39.1081, lon: 26.5550,
      title: 'Mitylene',
      ref: 'Acts 20:14',
      text: 'A short run down the strait between Lesbos and the mainland brought them to Mitylene, the island\'s chief city, where they anchored for the night. Coastal shipping in the Aegean sailed by day and lay up each evening, which explains Luke\'s island-by-island log.',
      via: [[39.4200, 26.5000], [39.2500, 26.6200]]
    },
    {
      place: 'miletus', lat: 37.5303, lon: 27.2764,
      title: 'Miletus: farewell to the Ephesian elders',
      ref: 'Acts 20:15-38',
      text: 'Past Chios and Samos they came to Miletus, an old Ionian port with a great theatre, whose harbour has since silted into farmland. Paul, hurrying to reach Jerusalem by Pentecost, sent for the Ephesian elders rather than visit Ephesus. His farewell is the most personal speech in Acts: he had taught them "the whole counsel of God", warned of wolves, and commended them to God; "they all wept and embraced Paul and kissed him", knowing they would not see his face again.',
      christ: 'Paul\'s summary of his message, "repentance toward God and faith in our Lord Jesus Christ", and his charge to shepherd "the church of God, which he obtained with his own blood" (Acts 20:21, 28).',
      via: [[39.0500, 26.6200], [38.9200, 26.5500], [38.9000, 26.4000], [38.7000, 26.1000], [38.4000, 25.8000], [38.1000, 26.0000], [37.9000, 26.4500], [37.7500, 26.5000], [37.6000, 26.8500], [37.6900, 26.9400], [37.5500, 27.1500]]
    },
    {
      place: 'cos', lat: 36.8931, lon: 27.2883,
      title: 'Cos',
      ref: 'Acts 21:1',
      text: 'A straight run south past the Halicarnassus peninsula brought the ship to Cos, the island of Hippocrates and its famous shrine of Asclepius, where they spent the night.',
      via: [[37.4000, 27.1000], [37.2500, 27.1500], [37.0500, 27.1300]]
    },
    {
      place: 'rhodes', lat: 36.4453, lon: 28.2278,
      title: 'Rhodes',
      ref: 'Acts 21:1',
      text: 'Next day they rounded the Cnidus peninsula and reached Rhodes, the great trading island whose harbour had once been guarded by the bronze Colossus, toppled by an earthquake two centuries earlier. Rhodian sea law governed much of Mediterranean shipping.',
      via: [[36.8500, 27.5500], [36.5500, 27.6500]]
    },
    {
      place: 'patara', lat: 36.2603, lon: 29.3147,
      title: 'Patara: changing ships',
      ref: 'Acts 21:1-2',
      text: 'At Patara on the Lycian coast, a harbour city with a lighthouse and later a bishop named Nicholas from nearby Myra, they left the coaster and found a large merchant ship bound directly for Phoenicia. The open-sea route would cut days off the journey.',
      via: [[36.3000, 28.7000]]
    },
    {
      place: 'tyre', lat: 33.2704, lon: 35.1961,
      title: 'Tyre: kneeling on the beach',
      ref: 'Acts 21:3-6',
      text: 'The ship ran south-east across 650 km of open sea, sighted Cyprus and left it to port, and unloaded at Tyre, the ancient Phoenician island-city joined to the mainland by Alexander\'s causeway. Paul sought out the disciples and stayed seven days; they told him "through the Spirit" not to go on to Jerusalem, and when he insisted, the whole church, wives and children too, knelt with him on the beach and prayed.',
      via: [[35.6000, 30.0000], [34.4000, 32.3000], [34.3000, 33.8000], [33.6000, 34.8000]]
    },
    {
      place: 'ptolemais', lat: 32.9200, lon: 35.0700,
      title: 'Ptolemais',
      ref: 'Acts 21:7',
      text: 'The ship finished its voyage at Ptolemais (Acco, later Acre), the best natural harbour on the coast of Israel, where the missionaries greeted the brothers for a day before continuing by land.',
      via: [[33.1000, 35.1000]]
    },
    {
      place: 'caesarea-maritima', lat: 32.4994, lon: 34.8917,
      title: 'Caesarea: Agabus and the belt',
      ref: 'Acts 21:8-14',
      text: 'Down the coast past Carmel to Caesarea, they stayed "many days" with Philip the evangelist and his four prophesying daughters. The prophet Agabus came from Judea, bound his own hands and feet with Paul\'s belt, and said the Jews of Jerusalem would so bind Paul and hand him to the Gentiles. Everyone begged him not to go; Paul answered, "I am ready not only to be imprisoned but even to die in Jerusalem for the name of the Lord Jesus."',
      christ: 'Like his Master setting his face toward Jerusalem, Paul walked knowingly into chains for the sake of the gospel (Luke 9:51; Acts 21:13).',
      via: [[32.8000, 35.0300], [32.6500, 34.9500]]
    },
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: the collection delivered',
      ref: 'Acts 21:15-36; Romans 15:25-31',
      text: 'Paul arrived in time for Pentecost, AD 57, and was received gladly by James and the elders, to whom he reported all God had done among the Gentiles and delivered the churches\' gift. Within a week he was seized in the Temple on a false charge of bringing a Greek inside, beaten by the mob and rescued by Roman soldiers. Agabus was right: the road to Rome would be walked in chains.',
      via: [[32.1050, 34.9306], [31.8830, 35.1180]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 17. PAUL'S VOYAGE TO ROME — shipwreck and the capital
// ---------------------------------------------------------------------------
{
  id: 'paul-rome',
  name: 'Paul\'s Voyage to Rome',
  era: 'church',
  color: '#c0392b',
  refs: 'Acts 21:27 – 28:31',
  summary: 'Arrested in Jerusalem and held two years at Caesarea, Paul appealed to Caesar and sailed as a prisoner past Cyprus and Crete into an autumn storm, was wrecked on Malta, and walked up the Appian Way to preach unhindered in Rome.',
  duration: 'AD 57–62: Caesarea 57–59, voyage autumn 59 – spring 60, Rome 60–62',
  stops: [
    {
      place: 'jerusalem', lat: 31.7784, lon: 35.2354,
      title: 'Jerusalem: arrested in the Temple',
      ref: 'Acts 21:27 – 23:22',
      text: 'Seized in the Temple and nearly lynched, Paul was rescued by the tribune and held in the Antonia fortress, where he told his story to the crowd from the steps, claimed his Roman citizenship, faced the Sanhedrin and heard the Lord say in the night, "Take courage, for as you have testified to the facts about me in Jerusalem, so you must testify also in Rome." A plot of forty men to kill him forced a night evacuation.',
      christ: 'Paul\'s defence speeches turn every hearing into a proclamation of the risen Jesus: the prisoner is the witness.'
    },
    {
      place: 'caesarea-maritima', lat: 32.4994, lon: 34.8917,
      title: 'Caesarea: two years before governors and a king',
      ref: 'Acts 23:23 – 26:32',
      text: 'Escorted by 470 soldiers by night to Antipatris and on to Caesarea, Paul was tried before Felix, who "hoped for a bribe" and left him in Herod\'s praetorium for two years. The new governor Festus heard the case with King Agrippa II and Bernice; Paul, fearing a return to Jerusalem, said, "I appeal to Caesar." Agrippa\'s verdict: "This man could have been set free if he had not appealed." Herod\'s harbour, theatre and palace promontory survive on the shore.',
      via: [[31.8830, 35.1180], [32.1050, 34.9306]]
    },
    {
      place: 'sidon', lat: 33.5633, lon: 35.3689,
      title: 'Sidon: kindness of a centurion',
      ref: 'Acts 27:1-3',
      text: 'In late summer AD 59 the centurion Julius embarked his prisoners on a coaster from Adramyttium, with Luke and Aristarchus accompanying Paul. The first day\'s run north brought them to Sidon, where Julius allowed Paul to visit friends in the church and be cared for. Kindness from a Roman officer would mark the whole voyage.',
      via: [[32.9000, 34.9500], [33.2704, 35.1500]]
    },
    {
      place: 'myra', lat: 36.2583, lon: 29.9853,
      title: 'Myra: an Alexandrian grain ship',
      ref: 'Acts 27:4-6',
      text: 'Against the prevailing westerlies the ship sailed "under the lee of Cyprus", up its east coast and along the Cilician and Pamphylian shore, using land breezes and the westward current, to Myra in Lycia. In its harbour Andriace lay a great grain ship from Alexandria bound for Rome, and Julius transferred his party aboard; it would carry 276 souls. Myra\'s rock tombs and theatre are still visible, and a granary of Hadrian stands at the port.',
      via: [[34.4000, 35.4000], [35.2000, 34.7000], [35.9000, 34.3000], [36.0000, 33.3000], [36.0000, 32.5000], [36.2000, 31.0000], [36.2000, 29.9700]]
    },
    {
      place: 'cnidus', lat: 36.6853, lon: 27.3742,
      title: 'Cnidus: the wind against them',
      ref: 'Acts 27:7',
      text: 'For many days the heavy ship crept west along the Lycian coast, past Patara and Rhodes, and "with difficulty" came off Cnidus, the Dorian city on the long peninsula tip opposite Cos, famous for its statue of Aphrodite. The wind would not let them round it to the west, so they turned south for the shelter of Crete.',
      via: [[36.1500, 29.5000], [36.3500, 28.5500], [36.5200, 28.2200], [36.5500, 27.7500]]
    },
    {
      place: 'fair-havens', lat: 34.9333, lon: 24.8000,
      title: 'Fair Havens: too late in the season',
      ref: 'Acts 27:8-12',
      text: 'Rounding Cape Salmone at Crete\'s eastern tip, they worked along the south coast to Fair Havens, a small bay (Kaloi Limenes) near the town of Lasea. The Day of Atonement, early October, had passed and sailing was already dangerous. Paul warned of disaster; the pilot and owner preferred to try for the better harbour of Phoenix, 65 km west, and the centurion agreed with the majority.',
      via: [[36.3000, 26.9000], [35.3500, 26.4000], [34.9000, 26.3000], [34.8500, 25.6000]]
    },
    {
      place: 'cauda', lat: 34.8400, lon: 24.0900,
      title: 'Cauda: the northeaster strikes',
      ref: 'Acts 27:13-17',
      text: 'A gentle south wind lured them out; as they rounded Cape Matala a "tempestuous wind, called the northeaster" (Euraquilo) tore down from Crete\'s mountains and drove the ship offshore. Running under the lee of the small island of Cauda (Gavdos), the crew hoisted the dinghy aboard, passed cables under the hull to brace it, and lowered the gear, terrified of being driven onto the Syrtis sandbanks off Libya.',
      via: [[34.9000, 24.7000], [35.0000, 24.4000]]
    },
    {
      place: 'adria', lat: 35.5000, lon: 19.0000,
      title: 'The Adria: fourteen nights adrift',
      ref: 'Acts 27:18-26',
      text: 'For two weeks the ship drifted west across what ancient sailors called the Sea of Adria, the open Mediterranean between Greece, Italy and Africa. Cargo was thrown overboard; no one ate; all hope was lost. Then Paul stood up: an angel had told him he must stand before Caesar and God had granted him all who sailed with him. "Take heart, men, for I have faith in God that it will be exactly as I have been told."',
      christ: 'The prisoner is the ship\'s true pilot: God saves 275 pagans for the sake of his witness, a picture of the many kept safe with Christ.',
      via: [[34.8000, 23.0000], [35.2000, 21.0000]]
    },
    {
      place: 'malta', lat: 35.9500, lon: 14.4000,
      title: 'Malta: shipwreck and a winter of welcome',
      ref: 'Acts 27:27 – 28:10',
      text: 'On the fourteenth night the sailors heard surf, took soundings of twenty then fifteen fathoms, and anchored by the stern until day. Paul persuaded all to eat; the ship was run toward a beach, struck a shoal "where two seas met" and broke up, and every one of the 276 reached land. The "barbarians" of Malta lit a fire, Paul shook off a viper unharmed, healed the father of the chief official Publius, and the party wintered three months on the island. St Paul\'s Bay on the north-east coast has been the traditional site since the Middle Ages; a bay on the island\'s east side (Salina or Marsaxlokk) has been argued from anchor finds and the drift calculations.',
      via: [[35.7000, 17.0000], [35.9000, 15.0000], [36.0000, 14.5000]]
    },
    {
      place: 'syracuse', lat: 37.0755, lon: 15.2866,
      title: 'Syracuse: three days in Sicily',
      ref: 'Acts 28:11-12',
      text: 'In early spring AD 60 they boarded another Alexandrian ship, the Twin Brothers, that had wintered at Malta, and crossed to Syracuse, the great Greek city of Sicily with its Greek theatre and Roman amphitheatre, where they waited three days for wind.',
      via: [[36.1000, 14.7000], [36.6000, 15.2500], [36.9000, 15.3200]]
    },
    {
      place: 'rhegium', lat: 38.1100, lon: 15.6500,
      title: 'Rhegium: at the toe of Italy',
      ref: 'Acts 28:13',
      text: 'Tacking up the Sicilian coast past Etna they reached Rhegium (Reggio Calabria) at the mouth of the Strait of Messina, the narrow passage between Scylla and Charybdis of legend. After a day a south wind rose and they ran through the strait.',
      via: [[37.3000, 15.3200], [37.7000, 15.3000], [38.0000, 15.5500]]
    },
    {
      place: 'puteoli', lat: 40.8225, lon: 14.1219,
      title: 'Puteoli: the grain port of Rome',
      ref: 'Acts 28:13-14',
      text: 'With the south wind behind them they covered 330 km in two days up the Italian coast, past Stromboli and Cape Palinuro, to Puteoli (Pozzuoli) on the Bay of Naples, where the Alexandrian grain fleet unloaded for Rome and Vesuvius still slept. Julius allowed Paul a week with the believers already there before the road north.',
      via: [[38.3000, 15.6000], [38.6000, 15.5500], [39.5000, 15.7000], [40.0000, 15.1000], [40.3000, 14.7800], [40.4800, 14.1000], [40.7000, 14.1000]]
    },
    {
      place: 'forum-of-appius', lat: 41.3667, lon: 12.9833,
      title: 'Forum of Appius: brothers on the road',
      ref: 'Acts 28:15',
      text: 'From Capua they joined the Via Appia, the "queen of roads", through Formiae and Tarracina to the Forum of Appius, a canal-side market town on the edge of the Pontine marshes that Horace remembered for its bad water and quarrelsome boatmen. Here Christians from Rome, sixty kilometres out, were waiting to welcome the apostle who had written to them three years before.',
      via: [[41.1000, 14.2500], [41.1500, 13.8500], [41.2600, 13.6100], [41.3600, 13.4300], [41.2900, 13.2500]]
    },
    {
      place: 'three-taverns', lat: 41.5600, lon: 12.7300,
      title: 'Three Taverns',
      ref: 'Acts 28:15',
      text: 'A second party met them at Three Taverns, a posting station about 50 km from Rome near modern Cisterna. "On seeing them, Paul thanked God and took courage." The escort of believers turned a prisoner\'s march into something like a triumphal procession.'
    },
    {
      place: 'rome', lat: 41.8925, lon: 12.4853,
      title: 'Rome: unhindered',
      ref: 'Acts 28:16-31; Philippians 1:12-14; 4:22',
      text: 'Paul entered Rome, the city of a million people at the heart of the empire, and was allowed to live in his own lodging with a soldier chained to him. He argued with the Jewish leaders from Moses and the Prophets, and for two whole years "welcomed all who came to him, proclaiming the kingdom of God and teaching about the Lord Jesus Christ with all boldness and without hindrance." From this house arrest came Philippians, Colossians, Ephesians and Philemon, and the gospel reached "Caesar\'s household". Luke ends there; tradition says Paul was released, travelled again, and was beheaded on the Ostian Way under Nero about AD 67.',
      christ: 'Acts closes not with Paul\'s fate but with the word\'s freedom: the promise to Abraham has reached the capital of the nations, and it cannot be chained (2 Timothy 2:9).',
      via: [[41.7200, 12.6700], [41.8500, 12.5300]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 18. THE SEVEN CHURCHES — Revelation 1–3
// ---------------------------------------------------------------------------
{
  id: 'seven-churches',
  name: 'The Seven Churches of Asia',
  era: 'church',
  color: '#b8860b',
  refs: 'Revelation 1:9 – 3:22',
  summary: 'From exile on Patmos John sent the risen Christ\'s letters to seven churches along the Roman postal road through the province of Asia, in the order a courier would visit them: Ephesus north to Pergamum, then south-east through the Lycus valley to Laodicea.',
  duration: 'c. AD 95, in the reign of Domitian (some date it to the late 60s)',
  stops: [
    {
      place: 'patmos', lat: 37.3092, lon: 26.5478,
      title: 'Patmos: "I was on the island"',
      ref: 'Revelation 1:9-20',
      text: 'A rocky island of 34 square kilometres some 60 km off the Asian coast, Patmos was where John found himself "on account of the word of God and the testimony of Jesus", probably banished by the Roman authorities. On the Lord\'s day he saw the risen Christ walking among seven golden lampstands, and was told to write to the seven churches. The Cave of the Apocalypse and the monastery of St John, founded in 1088, mark the traditional spot.',
      christ: 'The one "like a son of man" with hair white as wool is Daniel\'s Ancient of Days and Son of Man in one: "I died, and behold I am alive forevermore" (Revelation 1:13-18).'
    },
    {
      place: 'ephesus', lat: 37.9411, lon: 27.3419,
      title: 'Ephesus: the love you had at first',
      ref: 'Revelation 2:1-7',
      text: 'The courier would land first at Ephesus, the provincial capital and John\'s own city by tradition. Christ praises the church for its labour, endurance and rejection of false apostles, but "you have abandoned the love you had at first." Repent, he says, or the lampstand will be removed. Ephesus was already silting up; today the sea is 8 km away and the city is a magnificent ruin, its harbour street ending in fields.',
      via: [[37.4500, 26.1000], [37.5500, 25.8500], [37.7500, 26.0000], [37.8500, 26.6000], [37.9000, 27.2000]]
    },
    {
      place: 'smyrna', lat: 38.4189, lon: 27.1287,
      title: 'Smyrna: faithful unto death',
      ref: 'Revelation 2:8-11',
      text: 'Fifty-five kilometres north, Smyrna (İzmir) was a beautiful harbour city that called itself the crown of Asia and had a temple to Rome since 195 BC. Its poor, slandered church receives no rebuke, only a promise: "Be faithful unto death, and I will give you the crown of life." Its bishop Polycarp, John\'s disciple, was burned in the stadium here about AD 155, aged eighty-six.',
      via: [[38.1500, 27.2500]]
    },
    {
      place: 'pergamum', lat: 39.1319, lon: 27.1841,
      title: 'Pergamum: where Satan\'s throne is',
      ref: 'Revelation 2:12-17',
      text: 'The old royal capital of Asia on its 300 m acropolis housed the great altar of Zeus, a temple of Augustus, the shrine of Asclepius the serpent-god and a library second only to Alexandria. Christ, who has the sharp two-edged sword (Rome\'s proconsul had the ius gladii), commends the church for holding fast under persecution, in which Antipas died, but warns against those tolerating idolatry and immorality.',
      via: [[38.6500, 27.0500], [38.9000, 27.0500]]
    },
    {
      place: 'thyatira', lat: 38.9200, lon: 27.8400,
      title: 'Thyatira: the works of Jezebel',
      ref: 'Revelation 2:18-29; Acts 16:14',
      text: 'Turning south-east into the Lycus valley (the Hermus tributary, not the Phrygian Lycus), the road reached Thyatira (Akhisar), a manufacturing town famous for its trade guilds and purple dye, home of Lydia whom Paul met at Philippi. The church\'s love and service are praised, but a prophetess Christ calls Jezebel was leading members into the guild feasts\' idolatry, and he promises judgement and "the morning star" to those who hold fast.',
      via: [[39.0000, 27.5000]]
    },
    {
      place: 'sardis', lat: 38.4883, lon: 28.0403,
      title: 'Sardis: a reputation for being alive',
      ref: 'Revelation 3:1-6',
      text: 'Sardis, capital of Croesus and the Lydian kings, sat on a spur of Mount Tmolus above the gold-bearing Pactolus; twice its "impregnable" citadel had fallen to night attacks by climbers, under Cyrus and under Antiochus. "You have the reputation of being alive, but you are dead... if you will not wake up, I will come like a thief." Excavations have uncovered a vast third-century synagogue and the temple of Artemis.',
      via: [[38.7000, 27.9500]]
    },
    {
      place: 'philadelphia', lat: 38.3500, lon: 28.5167,
      title: 'Philadelphia: an open door',
      ref: 'Revelation 3:7-13',
      text: 'Founded to spread Greek culture eastward, Philadelphia (Alaşehir) stood on a fault line and was shattered by the earthquake of AD 17; many citizens lived outside the walls in fear of tremors. To its small church Christ says, "I have set before you an open door, which no one is able to shut", and promises to make the overcomer "a pillar in the temple of my God" that will never be shaken.',
      christ: 'The church with "little power" receives no rebuke: Christ\'s door, not the church\'s strength, is what opens the future.',
      via: [[38.4000, 28.3000]]
    },
    {
      place: 'laodicea', lat: 37.8358, lon: 29.1075,
      title: 'Laodicea: neither hot nor cold',
      ref: 'Revelation 3:14-22; Colossians 4:13-16',
      text: 'The circuit ended at Laodicea in the Lycus valley, a banking centre rich in black wool and a medical school known for eye salve, which refused imperial aid to rebuild after the earthquake of AD 60. Its water arrived lukewarm by aqueduct, unlike the hot springs of Hierapolis across the valley or the cold streams of Colossae. "You say, I am rich... not realising that you are wretched, pitiable, poor, blind, and naked." Yet the harshest letter ends with the tenderest invitation: "Behold, I stand at the door and knock."',
      christ: 'To a self-sufficient church Christ offers himself as gold, white garments and sight, and a place at his table and on his throne (Revelation 3:18-21).',
      via: [[38.1000, 28.8000], [37.9500, 29.0000]]
    }
  ]
},

// ---------------------------------------------------------------------------
// 19. WHERE GOD DWELT — the presence of God from Eden to the Church
// ---------------------------------------------------------------------------
{
  id: 'presence',
  name: 'Where God Dwelt',
  era: 'primeval',
  color: '#ffd166',
  refs: 'Genesis 3:8; Exodus 40:34; 1 Kings 8:10-11; Ezekiel 10–11; John 1:14; Matthew 27:51; Acts 2; 1 Corinthians 3:16; Revelation 21:3',
  summary: 'God\'s desire to live among his people runs from the garden through the tabernacle and temple, departs into exile, returns in the flesh of Jesus, and now fills the church by the Spirit until the city where "the dwelling place of God is with man." This thread spans every era; its lines trace the path of the story, not a single journey.',
  duration: 'From Eden to the New Jerusalem (all eras)',
  stops: [
    {
      place: 'eden', lat: 33.0000, lon: 44.0000,
      title: 'Eden: God walking in the garden',
      ref: 'Genesis 2:8-15; 3:8, 23-24',
      text: 'The first sanctuary was a garden. God walked there "in the cool of the day", and Adam was placed to "work it and keep it", the very verbs later used of priests in the tabernacle. After the fall the man and woman were driven east and cherubim guarded the way to the tree of life; the rest of the Bible is the story of the way back. The marker is a gesture toward the Tigris–Euphrates geography of Genesis 2, not a location.',
      christ: 'Cherubim barred the way to Eden; cherubim were woven into the temple veil; and that veil was torn when Christ died (Exodus 26:31; Matthew 27:51).'
    },
    {
      place: 'sinai', lat: 28.5397, lon: 33.9750,
      title: 'Sinai: "that I may dwell in their midst"',
      ref: 'Exodus 25:8-9; 29:45-46; 40:34-38',
      text: 'At Sinai God gave Moses the pattern of a portable sanctuary: "let them make me a sanctuary, that I may dwell in their midst." When it was finished the cloud covered the tent and "the glory of the LORD filled the tabernacle." A tent full of gold, cherubim and garden imagery, guarded by priests, in the middle of a camp of former slaves: Eden in miniature, on the move. The thread here follows the long road of promise from Mesopotamia through Canaan to Egypt and Sinai.',
      via: [[32.5364, 44.4208], [33.6400, 42.8300], [34.5500, 40.8900], [35.9500, 39.0200], [36.8650, 39.0317], [36.2000, 37.1600], [33.5138, 36.2765], [32.2136, 35.2819], [31.2447, 34.8408], [30.7872, 31.8214], [30.5528, 32.0997], [29.4083, 32.9550], [28.7167, 33.6167]]
    },
    {
      place: 'kadesh-barnea', lat: 30.6469, lon: 34.4247,
      title: 'The wilderness: the cloud in the camp',
      ref: 'Numbers 9:15-23; 14:14; Deuteronomy 23:14',
      text: 'For forty years the presence travelled with a rebellious people. When the cloud lifted they marched; when it settled they camped, "whether it was two days, or a month, or a longer time." Even at Kadesh, after the spies\' rebellion, Moses could plead that the nations knew "you, O LORD, are in the midst of this people." Holiness in the camp was a matter of life and death, because God was actually there.',
      via: [[28.8975, 34.3486]]
    },
    {
      place: 'gilgal', lat: 31.8667, lon: 35.4833,
      title: 'Gilgal: the presence enters the land',
      ref: 'Joshua 3:10-17; 4:19 – 5:15',
      text: 'The ark, the footstool of God\'s throne, went first into the Jordan and the waters stood up; the presence entered the land before the people did. At Gilgal the tabernacle was pitched for the years of conquest and the commander of the LORD\'s army told Joshua, as God had told Moses, "take off your sandals, for the place where you are standing is holy."',
      via: [[30.3167, 35.4050], [31.0300, 35.6400], [31.4600, 35.7900], [31.7683, 35.7256], [31.8397, 35.6733], [31.8400, 35.5400]]
    },
    {
      place: 'shiloh', lat: 32.0556, lon: 35.2897,
      title: 'Shiloh: where God first made his name dwell',
      ref: 'Joshua 18:1; Jeremiah 7:12-14; Psalm 78:60-61',
      text: 'For some three hundred years the tent stood at Shiloh, "my place... where I made my name dwell at first", as God later called it. But the presence is not a possession. When Eli\'s sons treated the ark as a weapon, God "forsook his dwelling at Shiloh" and let his glory go into captivity; Jeremiah would point to the ruins as a warning to Jerusalem\'s temple.',
      via: [[31.9297, 35.2394]]
    },
    {
      place: 'kiriath-jearim', lat: 31.8092, lon: 35.1028,
      title: 'Kiriath-jearim: the presence in a private house',
      ref: '1 Samuel 5–7; 2 Samuel 6:1-11',
      text: 'The ark toppled Dagon in Ashdod, plagued Gath and Ekron, and came home on an unmanned ox-cart to Beth-shemesh, then rested for seventy years in the house of Abinadab on the hill of Kiriath-jearim. Israel had a sanctuary at Nob and then Gibeon, but the throne of God sat in a farmhouse, waiting for a king who would seek it.',
      via: [[31.9000, 35.2000]]
    },
    {
      place: 'zion', lat: 31.7780, lon: 35.2354,
      title: 'Jerusalem: the glory fills the Temple',
      ref: '2 Samuel 6:12-19; 1 Kings 8:10-13, 27-30; Psalm 132:13-14',
      text: 'David brought the ark to Zion with dancing; Solomon built the house of cedar, gold and cherubim on Mount Moriah, and at its dedication "the glory of the LORD filled the house of the LORD" as it had filled the tent. Yet Solomon himself asked, "Will God indeed dwell on the earth? Behold, heaven and the highest heaven cannot contain you." The Temple was a true dwelling and a standing question.',
      christ: 'Jesus called the Temple "my Father\'s house" and then called his own body the temple that would be destroyed and raised (John 2:16-21).',
      via: [[31.8000, 35.1800]]
    },
    {
      place: 'nippur', lat: 32.1267, lon: 45.2308,
      title: 'The Chebar: the glory departs, and goes into exile',
      ref: 'Ezekiel 1:1-28; 10:18-19; 11:22-23; 43:1-5',
      text: 'By the Chebar canal near Nippur, among the exiles at Tel-abib, Ezekiel saw the glory of God on a throne borne by living creatures and wheels: the presence had come to Babylon. In vision he then watched that glory rise from the cherubim, pause at the east gate and leave the doomed Temple for the mountain east of the city. God had not been captured; he had walked out, and had gone into exile with his people. Ezekiel\'s last vision saw the glory return by the same east gate to a new temple.',
      christ: 'The glory left by the east gate over the Mount of Olives; from that same mount the incarnate glory would enter, weep over the city and ascend (Luke 19:37-44; Acts 1:12).',
      via: [[32.2136, 35.2819], [33.0178, 35.5686], [35.1300, 36.7500], [36.2000, 37.1600], [36.8292, 38.0150], [35.9500, 39.0200], [34.9200, 40.5300], [34.5500, 40.8900], [33.6400, 42.8300], [33.0600, 44.2500], [32.5364, 44.4208]]
    },
    {
      place: 'bethlehem', lat: 31.7054, lon: 35.2024,
      title: 'Bethlehem: the Word became flesh and tabernacled among us',
      ref: 'John 1:14; Matthew 1:23; Colossians 2:9',
      text: 'The second Temple stood for five centuries without a recorded glory-cloud. Then in Bethlehem "the Word became flesh and dwelt among us", literally "pitched his tent", "and we have seen his glory." The child is called Immanuel, God with us. Every earlier dwelling was a shadow of this: not gold and cedar but a human body, "the whole fullness of deity" living in a village and walking Galilee\'s roads.',
      christ: 'This stop is the centre of the thread: the presence of God is a person, and his name is Jesus.',
      via: [[32.5364, 44.4208], [33.0600, 44.2500], [33.6400, 42.8300], [34.5500, 40.8900], [35.9500, 39.0200], [36.8292, 38.0150], [36.2000, 37.1600], [35.1300, 36.7500], [33.5138, 36.2765], [33.0178, 35.5686], [32.2136, 35.2819], [31.9297, 35.2394], [31.7784, 35.2354]]
    },
    {
      place: 'golgotha', lat: 31.7784, lon: 35.2296,
      title: 'Jerusalem: the veil torn',
      ref: 'Matthew 27:50-51; Hebrews 9:11-12; 10:19-22',
      text: 'When Jesus died, "the curtain of the temple was torn in two, from top to bottom." The embroidered cherubim that had guarded the Most Holy Place since Sinai, the successors of the cherubim at Eden\'s gate, were split open from God\'s side. Hebrews explains: through "the curtain, that is, through his flesh", we now have confidence to enter the holy places by the blood of Jesus. Forty years later the Temple itself was gone; it was no longer needed.',
      christ: 'The way back to the garden, barred since Genesis 3, is opened by the death of the Son (Hebrews 10:20).',
      via: [[31.7784, 35.2354]]
    },
    {
      place: 'upper-room', lat: 31.7716, lon: 35.2291,
      title: 'Pentecost: the Spirit fills the church',
      ref: 'Acts 2:1-4; Ephesians 2:19-22; 1 Peter 2:4-5',
      text: 'At Pentecost the fire that had fallen on Sinai and filled Solomon\'s Temple fell on a room full of disciples. From that day the New Testament calls believers together "a holy temple in the Lord... a dwelling place for God by the Spirit", living stones built on Christ the cornerstone. God\'s house is now made of people.',
      christ: 'What the tabernacle pictured, Christ achieved and the Spirit applies: God dwelling not among but within his people (John 14:17, 23).'
    },
    {
      place: 'corinth', lat: 37.9058, lon: 22.8797,
      title: 'Corinth: "you are God\'s temple"',
      ref: '1 Corinthians 3:16-17; 6:19; 2 Corinthians 6:16; Revelation 21:3, 22',
      text: 'To a quarrelling church in a pagan Greek port, with the temple of Apollo above the forum and a shrine of Aphrodite on the Acrocorinth, Paul wrote: "Do you not know that you are God\'s temple and that God\'s Spirit dwells in you?" The presence that once required a mountain, a tent and a house now lives in ordinary believers in every city. The thread ends where Scripture does: a city with no temple, "for its temple is the Lord God the Almighty and the Lamb", and "the dwelling place of God is with man."',
      christ: 'Eden lost, Eden promised, Eden restored: "He will dwell with them, and they will be his people, and God himself will be with them as their God" (Revelation 21:3).',
      via: [[32.4994, 34.8917], [33.6000, 34.8000], [34.3000, 33.8000], [34.4000, 32.3000], [35.3000, 30.0000], [35.8000, 27.6000], [36.0000, 27.6000], [36.4500, 26.6000], [36.2000, 25.5000], [36.5500, 24.6000], [36.5500, 24.1000], [36.9500, 23.9500], [37.5000, 23.7500], [37.8400, 23.6000], [37.8400, 23.3000], [37.8836, 22.9939]]
    }
  ]
}

];