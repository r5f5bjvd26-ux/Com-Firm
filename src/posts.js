/**
 * Com-Firm — All Blog Posts Data
 * 
 * STRUCTURE per post:
 * {
 *   id:      unique string, used in URL routing (e.g. "hamburg")
 *   title:   display title
 *   date:    display date string
 *   readTime: e.g. "3 min"
 *   cats:    array of category strings — choose from:
 *            "Com-Firm" | "Projecten" | "Com-Passie" | "Marathons" | "English blogs"
 *   excerpt: one-line summary shown on blog card
 *   img:     key from IMG object in App.jsx (e.g. "marathon2") OR a full URL string
 *   content: HTML string rendered inside the post body
 * }
 *
 * HOW TO ADD A NEW POST:
 * 1. Add entry to POSTS array below
 * 2. Add image to src/assets/images/ and import it in App.jsx IMG object
 * 3. Add route to the switch() in App.jsx: case "post-yourId": return <PostPage id="yourId" />
 */

export const POSTS = [

  {
  id: "2m",
    title: "2 marathons in 1 week",
    date: "9 nov 2025",
    readTime: "3 min",
    cats: ["Marathons"],
    excerpt: "In 1 week tijd 2 marathons op 2 continenten in 2 seizoenen: Dublin en Auckland.",
    img: "marathon2",
    content: `
      <p class="post-intro">In 1 week tijd 2 marathons op 2 continenten in 2 seizoenen: een natte Dublin herfst-marathon en een warme Auckland lente-marathon.</p>
      <p>Wat ben ik weer een levenservaring rijker. Ik zit hier op Dubai airport, het is 6:10 en ik heb net een onvergetelijke week achter de rug, waarin hardlopen een centrale rol had. Hardlopen is al een tijd mijn uitlaatklep en favoriete sport — met steeds een marathon als stok achter de deur om mezelf te motiveren.</p>
      <h3>De aanloop</h3>
      <p>Met veel marathons stelde ik doelen. Mijn eerste marathon in Tokyo was puur uitlopen op karakter — 5:45. Vijf jaar later sub4 gehaald in Barcelona, dag voor mijn 40e! En toen de ambitie voor sub3: Parijs, Berlijn, Boston, Rome, Apeldoorn, Antwerpen waren nodig om het in Valencia voor elkaar te krijgen.</p>
      <h3>Dublin én Auckland</h3>
      <p>Voor Bidfood mee naar Nieuw-Zeeland. In mijn enthousiasme zag ik dat de Auckland marathon een paar dagen ná Dublin viel. Behalve vrouwlief en mijn boys verklaarde iedereen me voor gek — maar ik schreef me in. Die kans kreeg ik nooit meer!</p>
      <p>In 1 week tijd 2 marathons op 2 continenten in 2 seizoenen. Prestige zat hem hier niet in tijd, maar in gezond en voldaan de streep halen.</p>
      <h3>Passion & persistence</h3>
      <p>In Dublin rijen dik toegejuicht door enthousiaste Ieren. In Auckland het prachtige uitzicht, lopen over de Harbour Bridge met uitzicht op het Rangitoto eiland. De laatste 10 km waren ontzettend slopend — met 30 uur reistijd en 12 uur tijdverschil puur op karakter doorgezet.</p>
      <blockquote>Dezelfde dag was ik nog getuige van echte passie: de Rugby league wedstrijd van de Kiwi's tegen Tonga. Kippenvel!</blockquote>
    `
  },

  {
  id: "agile",
    title: "Running the Agile Marathon",
    date: "9 jun 2024",
    readTime: "2 min",
    cats: ["Com-Firm", "English blogs"],
    excerpt: "Similarities between endurance racing and agile way of working.",
    img: "agile",
    content: `
      <p class="post-intro">Similarities between endurance racing and agile way of working.</p>
      <p>At the regional Scrum Gathering in Ghent (#RSGGhent24), I had the pleasure of meeting many great and inspiring professionals. Earlier in March, I was in Ghent to run a marathon. The experience made me reflect on how running a marathon and embracing an agile way of working share intriguing similarities.</p>
      <h3>Endurance and Long-Term Commitment</h3>
      <p>Just as running 26.2 miles demands physical endurance, the agile way of working requires mental and organizational stamina. Both endeavors are long-term commitments that necessitate sustained effort. Success is not achieved overnight; it's the result of consistent, disciplined action over an extended period.</p>
      <h3>Iterative Progress</h3>
      <p>Marathons and agile projects share a philosophy of iterative progress. Marathoners break the race into manageable segments. Similarly, agile methodologies encourage incremental development and continuous delivery, building on successes and learning from each iteration.</p>
      <h3>Flexibility and Adaptability</h3>
      <p>Marathon runners often encounter unexpected challenges such as changing weather. Likewise, agile teams embrace change and adaptability. They understand that project requirements may evolve, and flexibility is crucial for responding to new information.</p>
      <h3>Goal Setting and Planning</h3>
      <p>Both running a marathon and practicing agile involve meticulous goal setting and planning. Marathon runners set pace targets and race strategies. Agile teams establish sprint goals, prioritize tasks, and create roadmaps. In both cases a thoughtful plan is essential.</p>
      <h3>Continuous Improvement</h3>
      <p>Marathon runners always seek ways to enhance their performance. Agile methodologies are rooted in continuous improvement, with regular retrospectives allowing teams to reflect on their processes and identify areas for enhancement.</p>
      <h3>Team Collaboration</h3>
      <p>Marathon relays showcase the significance of collaboration. In the agile world, cross-functional teams work closely together, breaking down silos and fostering open communication. The success of both depends on the collective effort of the entire team.</p>
      <h3>Feedback Loops</h3>
      <p>Runners rely on feedback from their bodies to adjust pace and strategy. Similarly, agile teams thrive on quick feedback loops, with regular reviews helping them identify and address issues promptly.</p>
      <blockquote>Just as a marathon runner conquers each mile with determination, agile teams navigate the complexities of projects with a commitment to delivering value incrementally.</blockquote>
    `
  },

  {
  id: "15j",
    title: "15 jaar Focus, Flow & Fun",
    date: "29 mei 2024",
    readTime: "3 min",
    cats: ["Com-Firm"],
    excerpt: "15 jaar (en 150 dagen) samen werken en samen leven. Live the life you love!",
    img: "jaar15",
    content: `
      <p class="post-intro">15 jaar (en 150 dagen) samen werken en samen leven. Live the life you love and love the life you live!</p>
      <h3>Back in time</h3>
      <p>Ik weet nog dat ik voor Mercedes-Benz in oktober 2008 in Kopenhagen zat. Op het vliegveld besloot ik om zelfstandig te gaan en verzon ik de naam Com-Firm. Dat betekende een mooie carrière bij een gaaf bedrijf inleveren voor volledige onzekerheid. 1 januari 2009 was dag no. 1. Ik was net vader, het banksaldo kleurde rood, het was hartje kredietcrisis en ik had nog geen concrete opdrachten. Goeie timing….</p>
      <h3>Nu</h3>
      <p>Ik kijk inmiddels een stuk grijzer maar vooral 15 jaar wijzer terug op een fantastische periode. Het was uitdagend en intensief, maar ik ben trots. Trots op mezelf, trots op mijn familie, trots op de mensen en teams waar ik mee heb samengewerkt en op wat we samen hebben bereikt!</p>
      <h3>Samen werken vanuit Com-Firm</h3>
      <p>De afgelopen 15 jaar heb ik de lat flink hoog gelegd en mooie projecten succesvol afgerond bij bedrijven als Nike, Philips, FrieslandCampina en Heineken. Zoveel goede ideeën, enthousiasme en energie.</p>
      <h3>Samen leven vanuit Com-Passie</h3>
      <p>Privé leren om een goede vader te zijn voor mijn twee geweldige boys. Uitdagingen voor goede doelen: van geld ophalen door marathons tot scholen opknappen in Senegal en Zuid-Afrika. Samen leren, samen leven!</p>
      <h3>Sub3 Valencia</h3>
      <p>Parijs 3:10, Boston en Berlijn helaas niet, Rome 3:10, Antwerpen 3:07 als generale repetitie. 3 december 2023 Valencia: <strong>2:59:31</strong>! WHOEHOEEE!</p>
      <blockquote>Focus leidt tot flow. Flow leidt tot fun. No human is limited! — Eliud Kipchoge</blockquote>
    `
  },

  {
  id: "marathons",
    title: "Marathons: tonnen aan memories",
    date: "6 mei 2024",
    readTime: "1 min",
    cats: ["Marathons"],
    excerpt: "Hardlopen is een rode draad in mijn leven geworden. Verrijkend en intensief.",
    img: "marathons",
    content: `
      <p class="post-intro">Hardlopen is een rode draad in mijn leven geworden. Verrijkend en intensief.</p>
      <p>Afgelopen weekend liep ik alweer mijn 19e marathon door verschillende Belgische brouwerijen. Net als elke marathon waren de eerste 30 km relatief chill, maar the Duvel — ehh devil — is in the detail. De pilskes na de finish waren heerlijk!</p>
      <p>Het was mijn intentie om na elke marathon een verslag te schrijven. Helaas heb ik dat niet voor elke marathon gedaan. Hieronder een overzicht:</p>
      <div class="marathon-list">
        <p class="ml-year">Coming Up</p>
        <p class="ml-item">No. 20 – Angkor Wat, Cambodja</p>
        <p class="ml-year">2024</p>
        <p class="ml-item">No. 19 – Great Breweries</p>
        <p class="ml-item">No. 18 – Gent</p>
        <p class="ml-item">No. 17 – Midwinter Kroondomein het Loo</p>
        <p class="ml-year">2023</p>
        <p class="ml-item">No. 16 – Valencia (sub3! 2:59:31) ⭐</p>
        <p class="ml-item">No. 15 – Antwerpen (3:07)</p>
        <p class="ml-item">No. 14 – Midzomer Apeldoorn</p>
        <p class="ml-item">No. 13 – Rome</p>
        <p class="ml-year">2022</p>
        <p class="ml-item">No. 12 – Berlijn</p>
        <p class="ml-item">No. 11 – Boston</p>
        <p class="ml-year">2021</p>
        <p class="ml-item">No. 10 – Parijs (3:10)</p>
        <p class="ml-year">2019</p>
        <p class="ml-item">No. 9 – Bagan Temple, Myanmar</p>
        <p class="ml-item">No. 8 – Boedapest</p>
        <p class="ml-item">No. 7 – Hamburg (PR: 3:36) ⭐</p>
        <p class="ml-year">2018</p>
        <p class="ml-item">No. 6 – Rotterdam</p>
        <p class="ml-year">2017</p>
        <p class="ml-item">No. 5 – Eindhoven</p>
        <p class="ml-item">No. 4 – Great Wall, China</p>
        <p class="ml-year">2016</p>
        <p class="ml-item">No. 3 – Barcelona (sub4! 3:59:45) ⭐</p>
        <p class="ml-year">2015</p>
        <p class="ml-item">No. 2 – Amsterdam (4:17)</p>
        <p class="ml-year">2010</p>
        <p class="ml-item">No. 1 – Tokyo (5:45)</p>
      </div>
    `
  },

  {
  id: "heineken",
    title: "Digital @ Heineken",
    date: "30 apr 2024",
    readTime: "2 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Digitaal b(r)ouwen aan de Heineken 'road to digital'.",
    img: "heineken",
    content: `
      <p class="post-intro">Digitaal b(r)ouwen aan de Heineken "road to digital".</p>
      <p>Februari 2022 leverde ik mijn Nike schoenen in voor een krat Heineken. Van cybersecurity bij Nike weer terug naar digitale transformatie projecten bij Heineken.</p>
      <h3>SWO — SamenWerkingsOvereenkomst</h3>
      <p>Mijn eerste project was gelijk een ambitieus E2E-project. Doel: het dealmaking-proces van Sales versimpelen, versnellen en automatiseren. Van CRM via CPQ (Experlogix), Xpertdoc voor contractgeneratie, digitaal ondertekenen via DocuSign, opslaan in SharePoint/MijnZaak en terugschrijven naar SAP — in 10 minuten. In 9 maanden ging de MVP live voor heel Nederland.</p>
      <h3>Horecashop</h3>
      <p>Samen met het sHOPs team 16 webshops geïntegreerd in 1 omgeving: de Horecashop. In augustus 2022 live — daarna doorontwikkeld op basis van klantwensen.</p>
      <h3>Digitale B(r)ouwers</h3>
      <p>Vanaf februari 2023 als Scrum Master samengewerkt met het Heineken/Triple team aan MijnZaak, MijnKlant en HeinekenHoreca.nl. Samen met de PO een roadmap met duidelijke doelen en prioriteiten gebouwd.</p>
      <blockquote>Met hoge ambitie: meer dan 50 features in 1,5 jaar. Van tankbier bestellen tot personalisatie. Van CRM-koppeling tot rebranding. Van PowerBI dashboarding tot financiële inzichten.</blockquote>
    `
  },

  {
  id: "valencia",
    title: "Sub3 Valencia Marathon #16",
    date: "4 dec 2023",
    readTime: "3 min",
    cats: ["Marathons"],
    excerpt: "Na 5 pogingen is het me eindelijk gelukt: een marathon onder de 3 uur!",
    img: "valencia",
    content: `
      <p class="post-intro">Na 5 pogingen is het me eindelijk gelukt: een marathon onder de 3 uur! Eliud Kipchoge heeft gelijk: No human is limited!</p>
      <p>Mijn doel was ooit in 2010 een keer een marathon uit te lopen voor een goed doel. In Tokyo in 5:45. Vijf jaar later sub4 voor mijn 40e — in Barcelona in de laatste kilometer het verschil gemaakt: 3:59:45!</p>
      <h3>De weg naar sub3</h3>
      <p>Parijs 3:10, Boston en Berlijn helaas niet, Rome 3:10, Antwerpen 3:07 als generale repetitie. Met nog 6 weken voorbereiden, een paar kilo verloren, extra krachtoefeningen, de 10.000 trainingskilometers gepasseerd en alle pijlers gericht op Valencia.</p>
      <h3>Race day</h3>
      <p>Sunny Schippers a.k.a. Mister Marathon was mijn haas. Na het startschot was het pure focus. Kilometer na kilometer liepen we steady as a rock onder de sub3. Bij 25 km begon ik te zeuren, maar dankzij mijn eeuwige steun en "gaan met die banaan!"</p>
      <p>Bij 35 km zei Sunny: "ik ga sub3 lopen! Jij ook?" Kriebels in mijn maag, kippenvel. Ik besefte me dat ik het ging halen. De laatste km was taaaaaaiiiii. Tot de blauwe baan bij Hemisfèric zich openbaarde. Donkey finishte in <strong>2:59:31</strong>! Freaking trots!</p>
      <blockquote>Eliud Kipchoge heeft gelijk: No Human is limited!</blockquote>
    `
  },

  {
  id: "nike",
    title: "Cybersecurity @ Nike",
    date: "31 jan 2022",
    readTime: "2 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Van mei 2018 tot februari 2022 voor Nike EMEA & APLA als Scrum Master en Programma Manager CIS.",
    img: "nike",
    content: `
      <p class="post-intro">Van mei 2018 tot februari 2022 voor Nike EMEA & APLA als Scrum Master, Project- en Programma Manager Corporate Information Security.</p>
      <p>Het is de missie van Corporate Information Security (CIS) om alle data van Nike's atleten* te beschermen. Met een internationaal en energiek team was onze primaire focus binnen EMEA en APLA.</p>
      <h3>Werkzaamheden</h3>
      <p>Risk assessments, compliance audits en application security voor logistieke leveranciers, fabrieken en het European Logistics Center. Naast GDPR nauw samengewerkt met Privacy en Technology/Digital afdelingen.</p>
      <h3>Bewustwording & groei</h3>
      <p>CIS volledig in de organisatie opgenomen. Trainingen, Dojo's (hack wedstrijden), Girls Day. Team gegroeid van 4 naar 17 specialisten. Vanuit de CISO ook een Merger & Acquisition Playbook opgeleverd.</p>
      <blockquote>Nike heeft als organisatie altijd hoog op mijn lijst gestaan. Overal zie en voel je sport, maatschappelijke betrokkenheid en doelgerichtheid.</blockquote>
      <p><small>* Als je een lichaam hebt, ben je een atleet!</small></p>
    `
  },

  // ── COM-PASSIE ──────────────────────────────────────────────────────────────,

  {
  id: "bibian",
    title: "Verzamel herinneringen, geen bezittingen",
    date: "19 mei 2021",
    readTime: "1 min",
    cats: ["Com-Passie"],
    excerpt: "Bibian heeft laten zien wat doorzetten is en hoe belangrijk het is om te genieten van de kleine dingen.",
    img: "bibian",
    content: `
      <p class="post-intro">Bibian heeft ons laten zien wat doorzetten is, wat positivisme is en hoe belangrijk het is om te genieten van de kleine dingen in het leven.</p>
      <p>29 maart overleed Bibian Mentel.</p>
      <p>Bibian heeft ons laten zien wat doorzetten is, wat positivisme is en hoe belangrijk het is om te genieten van de kleine dingen in het leven — vooral ook om te leven en te geven. Als dank voor al haar inspiratie, besloot ik om voor 2021 vanuit Com-Passie haar Mentelity Foundation te steunen met een mooie donatie.</p>
      <p>Stimuleren en inspireren van kinderen en jong volwassenen die leven met een fysieke en mentale uitdaging is wat haar Mentelity Foundation beweegt. De mentaliteit van Bibian Mentel, meervoudig internationaal onderscheiden paralympisch topsporter, vormt het fundament voor hun handelen.</p>
      <blockquote>Verzamel herinneringen, geen bezittingen.</blockquote>
    `
  },

  {
  id: "dutchess",
    title: "Four power women sailing the Atlantic Ocean",
    date: "27 nov 2020",
    readTime: "1 min",
    cats: ["Com-Passie", "English blogs"],
    excerpt: "My dear friend Bela Evers is rowing 3,000 miles across the Atlantic Ocean for charity!",
    img: "dutchess",
    content: `
      <p class="post-intro">My dear friend Bela Evers is going to do a challenge which is the superlative of a challenge: rowing 3,000 miles across the Atlantic Ocean!</p>
      <p>This year I did not do any challenge as we all had a mutual challenge to deal with: COVID-19. However one of my dear friends, Bela Evers, is going to do a challenge for charity with three other power women: rowing 3,000 miles across the Atlantic Ocean! By doing so these four Dutchess of the Sea are raising money for ALS Netherlands and the Plastic Soup Foundation.</p>
      <h3>The Talisker Whisky Atlantic Challenge</h3>
      <p>The world's toughest rowing event starts in La Gomera in the Canary Islands and finishes in Antigua. In about two weeks they will be rowing in shifts of 2 hours on / 2 hours off — storms, 50ft waves, blisters, sea sickness, sunburn, lack of sleep, open sores and dehydrated food. A mental and physical journey. In total 55 rowers in 21 resilient teams from 9 countries.</p>
      <blockquote>To support them in their exciting journey I decided to sponsor them — so with an oar I am "partly joining". Every little bit helps.</blockquote>
    `
  },

  {
  id: "bagan",
    title: "Bagan Temple Marathon #9",
    date: "27 nov 2019",
    readTime: "6 min",
    cats: ["Marathons", "English blogs"],
    excerpt: "Running a marathon among the 2,000 sacred temples of Bagan in Myanmar!",
    img: "bagan1",
    content: `
      <p class="post-intro">Running a marathon among the 2,000 sacred temples of Bagan in Myanmar!</p>
      <p>Having participated in the Great Wall marathon two years ago I wanted to do another adventure marathon. I chose the Bagan Temple marathon in the mystic country of Myanmar — very few people I spoke with even knew about Myanmar.</p>
      <h3>A beautiful culture shock</h3>
      <p>Arriving in Yangon: immediately hit by the heat — 30 degrees warmer than the Dutch lowlands! Markets, stray dogs, monks and nuns, and traffic everywhere. A culture shock in the most positive way.</p>
      <h3>Tour de Mandalay</h3>
      <p>We walked over the U-Bein bridge (world's largest teak bridge), visited a monk monastery, saw craftsmen working on Buddha statues, and visited the Mahamuni temple. The Kuthodaw pagoda houses the world's biggest book: 729 chapters, each page its own white pagoda.</p>
      <h3>The big day!</h3>
      <p>At 6:15, just before sunrise, 500+ people from 35 countries started with the Htilominlo temple in the back. Children with big smiles giving high fives and flowers. Goats and cows crossing the track!</p>
      <p>I managed the first 21.1km in 2 hours. At 28km the flow was gone — but Greg ran next to me with quotes and jokes. We even spoke French and did a photoshoot with a Chinese tourist. We finished hand in hand in <strong>4:44</strong> (no. 35 of 152 runners).</p>
      <h3>Balloons over Bagan</h3>
      <p>The next morning at 4:00 we joined one of 30 hot air balloons over the Bagan complex at sunrise. Champagne breakfast. Unforgettable!</p>
      <blockquote>What does our world have a magnificent variety of cultures and people! We should really cherish this! Kyay-Zuu-Tin-Par-Tal!</blockquote>
    `
  },

  // ── COM-PASSIE SENEGAL & GREAT WALL ────────────────────────────────────────,

  {
  id: "alpacas",
    title: "From the south to the sea with Los Alpacas Nerdos",
    date: "5 jul 2019",
    readTime: "3 min",
    cats: ["Com-Passie", "English blogs"],
    excerpt: "The first Hood to Coast Europe: a 190km running relay from Eindhoven to Zandvoort with 1,250 Nike employees.",
    img: "h2c_mo_farah",
    content: `
      <p class="post-intro">The first Hood to Coast Europe: a 190km running relay from Eindhoven to Zandvoort with 1,250 Nike employees.</p>
      <p>After a great Roparun experience it was now time for another challenge: the first Hood To Coast in Europe. Of all places they chose Holland! Hood To Coast started in Portland in 1982 and is the world's largest running and walking relay. From Nike, 1,250 employees from all over Europe participated.</p>
      <p>The initial plan was to run from Brunssum to Zandvoort for 285km. Due to the national heat plan it was shortened to 16 legs (about 190 km). We started at the High Tech Campus in Eindhoven — where I had worked for Philips for over 3 years.</p>
      <h3>The ceremony</h3>
      <p>At EHQ in Hilversum a great ceremony with VP Marketing EMEA Edgar Jorissen, and two awesome athletes: women's marathon record holder <strong>Paula Radcliffe</strong> and Olympic Champion <strong>Mo Farah</strong>. As our team was called Los Alpacas Nerdos we decorated our cars with a lama! (It was a lama!!!)</p>
      <h3>Running through the night</h3>
      <p>It was my turn for a 14km run — felt really happy! The first 5km with Mikos from Greece. Arriving at Erp I managed to pass 7 runners at almost 12km/hour. After a short rest in a gym (hilarious sounds!) the sun rose.</p>
      <h3>Finish at Zandvoort</h3>
      <p>Around 30 degrees at the finish. We happily crossed the ceremonial finish line, got the medals and drank a few cold beers at Beach House Bernie's.</p>
      <blockquote>Muchos gracias Los Alpacas Nerdos for a great time! *it was a lama!!!</blockquote>
    `
  },

  {
  id: "roparun",
    title: "Roparun: Run, Bike, Fun van Paris naar Rotterdam",
    date: "13 jun 2019",
    readTime: "6 min",
    cats: ["Com-Passie"],
    excerpt: "In 50 uur tijd 536 kilometer hardgelopen, gefietst, gefeest en 31.000 Euro opgehaald. Team Awesome!",
    img: "roparun2",
    content: `
      <p class="post-intro">In 50 uur tijd hebben we 536 kilometer hardgelopen, gefietst, gefeest en 31.000 Euro opgehaald. Team Awesome!</p>
      <p>Hou je van hardlopen? Hou je van fietsen? Hou je van team spirit? Doe dan volgende keer mee met de Roparun! 323 teams hebben ruim 3,5 miljoen Euro opgehaald voor 111 goede doelen. Ons team ruim 31.000 Euro.</p>
      <p>Allereerst grote dank en een diepe buiging voor het hele Nike Courage team: mijn mede-bitches van team 2: Kate, Mia, Michael, Willem, Balys. Onze drivers: Backstreet-boy, Paul G. en Ricardo de Bejaarden-Stripper en adoptie-ouder van Ferry de Flamingo.</p>
      <h3>Van Parijs naar Rotterdam</h3>
      <p>Vrijdagnacht om 2:05 wakker. Om 4:00 vertrokken richting Parijs. Spaghetti, voorbereiding en de bussen versieren met een roze flamingo en krokodil. Om 12:15 ging Team 1 van start.</p>
      <p>Om en om renden we 2 km en fietsten we voor en na die 2 km. De omgeving was prachtig — kleine dorpjes en heuvelachtige landschappen. Een paar flinke buien, maar ook verfrissend!</p>
      <h3>Door de nacht</h3>
      <p>Om 3:00 met kerstverlichting de nacht in. Muziek variërend van Avici tot System of a Down. 06:15 zagen we de zon opkomen. Vermoeid en voldaan.</p>
      <p>In Antwerpen liep ik door het prachtige havenhuis via een rode loper met juichende mensen. De vierde ronde eindigde net buiten Ossendrecht — net als carnaval: versierde huizen, juichende mensen, vuurkorven.</p>
      <h3>Finish in Rotterdam</h3>
      <p>Ricardo opende een Corona voor me en we liepen als gezamenlijke Nike Courage posse met een grote Just Do It vlag naar de finish. Letterlijk toen we de finish passeerden begon het keihard te regenen. We just did it!</p>
      <blockquote>#winasateam #justdoit!</blockquote>
    `
  },

  {
  id: "roparuneng",
    title: "Running from Paris to Rotterdam",
    date: "13 jun 2019",
    readTime: "5 min",
    cats: ["English blogs"],
    excerpt: "In 50 hours we ran, biked and partied for 536 km. So on average we each ran 45 km and cycled 90 km! Team Awesome!",
    img: "roparun",
    content: `
      <p class="post-intro">In 50 hours we ran, biked and partied for 536 kilometres. Team Awesome!</p>
      <p>Do you like running? Do you like cycling? Do you like team spirit? Do you like fun? Join the Roparun next time! 323 teams raised over 3.5 million Euro for 111 charities. Our team raised over 31,000 Euro.</p>
      <p>Deep bow and huge thanks to the Nike Courage team: Kate, Mia, Michael, Willem, Balys. Drivers: Backstreet-boy, Paul G. and Ricardo the Stripper (and Ferry the Flamingo's adopted dad). The catering-posse, Lois, Nathalie and Daniel. Head-coaches Tom and Bas. Torture-masseuses Patricia and Linda.</p>
      <h3>From Paris to Rotterdam</h3>
      <p>Friday night I woke up at 02:05. A quick shower, quick breakfast, get dressed and raced to Hilversum. We left for Paris at 04:00. Just before the start we ate spaghetti, decorated our vans with a pink flamingo and a crocodile while Team 1 were getting ready.</p>
      <p>The landscape was beautiful. Little villages, countryside, hills and forests. The weather was nice, but we did get quite some free showers while running.</p>
      <h3>Through the night</h3>
      <p>At 03:00 we hit the road with Christmas lighting in the dark. Avici to System of a Down blasting. At 06:15 we saw the sunrise. In Antwerp I ran through the beautiful Havenhuis on a red carpet with cheering people. </p>
      <h3>Finish Rotterdam</h3>
      <p>Ricardo opened a Corona for me and we walked as the full Nike Courage posse with a big Just Do It flag to the finish. Literally the moment we passed the finish line it started raining heavily. We just did it!</p>
      <blockquote>#winasateam #justdoit!</blockquote>
    `
  },

  {
  id: "hamburg",
    title: "Hamburg Marathon #7",
    date: "30 apr 2019",
    readTime: "3 min",
    cats: ["Marathons"],
    excerpt: "Whoehoee! Ik heb mijn marathon PR verpulverd met 23 minuten: 3:36! Hamburg BAMburg!",
    img: "hamburg",
    content: `
      <p class="post-intro">Whoehoee! Ik heb mijn marathon PR verpulverd met 23 minuten: 3:36! Hamburg BAMburg!</p>
      <p>Voor degenen die niet van lezen houden een "tweet": Whoehoee! Ik heb mijn marathon PR verpulverd met 23 minuten!!: 3:36!</p>
      <h3>Eerst terug naar het recente verleden</h3>
      <p>1 januari 2019: Gelukkig Nieuw Jaar! Alleen een minder gelukkig gewicht op de weegschaal. Die dag vierde ik ook mijn 10 jarig jubileum met Com-Firm. Een mooi moment om nieuwe doelen te stellen! Het eerste doel: in 2019 vier marathons lopen.</p>
      <p>In mijn 10 jaar Com-Firm heb ik totaal 6 marathons gelopen. Na de zware beproeving in China, schreef ik me in voor Hamburg, Midzomer Apeldoorn, Boedapest en de Bagan Temple Marathon in Myanmar.</p>
      <h3>28 april — De Hamburg Marathon</h3>
      <p>Waar veel mensen aan het bijkomen waren van Koningsdag, zat ik met mijn gezin in Hamburg. De voorspelling: 17 graden en droog. De dag zelf: 9 graden en regen. Ik hield mijn warme kleding en poncho zo lang mogelijk aan.</p>
      <p>Via St. Pauli, de Reeperbahn en het havendistrict met veel enthousiast publiek voelde ik me goed thuis. Na 7 km vergrootte ik mijn tempo. Bij 11 km stond la familia te schreeuwen. Bij het Red Bull punt (32 km): "Paul ten Donkelaar aus die Niederlanden!" — vleugels!</p>
      <p>Vanaf 35 km focuste ik me op de laatste loodjes. Net voor 42 km stonden de boys klaar. Mijn horloge bevestigde dat ik mijn tijdsdoel had overschreden: <strong>3:36:48</strong>! WTF (Wat The Fluitketel)!</p>
      <blockquote>Ondersteund door mijn mannen kregen we alledrie een medaille omgehangen. I f…… did it! WHOEHOOOEEE!</blockquote>
    `
  },

  {
  id: "roparunpre",
    title: "Voorbereidingen Roparun",
    date: "26 apr 2019",
    readTime: "2 min",
    cats: ["Com-Passie"],
    excerpt: "8 t/m 10 juni gaan 324 teams deelnemen aan de Roparun. Ik ben trots om deel uit te maken van het Nike Courage team.",
    img: "roparunPre",
    content: `
      <p class="post-intro">8 tot en met 10 juni gaan 324 teams deelnemen aan de Roparun. Ik ben trots om deel uit te maken van het Nike Courage team.</p>
      <p>Totaal zijn we met 19 renners, fietsers, chauffeurs en coaches begonnen met trainen om ons klaar te maken voor deze epische 520 kilometer uitdaging. Naast het trainen zijn we ook druk bezig om geld op te halen voor mensen met kanker.</p>
      <p>De Roparun heeft hiervoor een mooi motto: <em>"Leven toevoegen aan de dagen, waar vaak geen dagen meer kunnen worden toegevoegd aan het leven."</em></p>
      <h3>Hoe kun jij helpen?</h3>
      <p>Je kunt een donatie doen aan ons Roparun team. Voor €2,50 kun je een lootje winnen met mooie prijzen. Wil je je bedrijfslogo op ons shirt? Neem contact op!</p>
      <h3>Hoogtepunten uit de voorbereiding</h3>
      <p><strong>29 mei — Cake Sale bij Nike:</strong> 480 Euro opgehaald!</p>
      <p><strong>9 mei — Hardlooptraining met Paula Radcliffe</strong>, de snelste marathonvrouw van de wereld!</p>
      <h3>Over de Roparun</h3>
      <p>De Roparun is een estafetteloop Parijs/Hamburg → Rotterdam. Een Roparunteam bestaat uit maximaal acht lopers die ieder gemiddeld 65 km lopen. De afgelopen 27 edities is al meer dan 84 miljoen euro opgehaald voor zorg voor mensen met kanker.</p>
    `
  },

  {
  id: "10jaarcomfirm",
    title: "10 jaar Com-Firm & Com-Passie",
    date: "1 jan 2019",
    readTime: "1 min",
    cats: ["Com-Firm"],
    excerpt: "10 jaar later... hard gewerkt, veel geleerd, vol energie, gefrustreerd, moe, voldaan, nieuwe kansen. Vooral trots!",
    img: "10_jaar",
    content: `
      <p class="post-intro">10 jaar later... hard gewerkt, veel geleerd, vol energie, gefrustreerd, moe, voldaan, nieuwe kansen. Vooral trots!</p>
      <p>Allereerst bedankt! Bedankt dat ik met je heb mogen werken en van je heb mogen leren!</p>
      <p>10 jaar geleden! 1 januari 2009 startte ik mijn avontuur als zzp-er. Na een gave periode bij Mercedes-Benz dook ik in het diepe. Spannend en eng tegelijk.</p>
      <p>En nu 10 jaar later... hard gewerkt, veel geleerd, veel gereisd, geïnspireerd, moe, voldaan, vol energie, gefrustreerd, weer een nieuwe dag, nieuwe kansen, geslaagd, gefaald, het verschil willen maken, verandering brengen, trots, nooit saai.</p>
      <p>In deze 10 jaar heb ik met professionele mensen mogen werken aan uitdagende digitale projecten voor verschillende organisaties. Momenteel met veel plezier bij Nike.</p>
      <p>10 jaar geleden kon ik net 5 km lopen en nu heb ik er inmiddels 6 marathons op zitten, waaronder de Great Wall Marathon in China. Op naar in ieder geval de 10!</p>
      <p>Ik word vooral erg blij als ik terugdenk aan de bijzondere ontmoetingen in Zuid-Afrika en Senegal tijdens het renoveren en bouwen van de scholen. Het delen van kennis was ook fantastisch — de verschillende co-creatie sessies vanuit Gave Dingen Doen.</p>
      <p>En tenslotte natuurlijk mijn familie. 10 jaar geleden was onze oudste nog geen 1 jaar oud en in 2011 kwam de jongste naar Planeet Aarde. Vandaag ben ik alweer 12,5 jaar getrouwd met mijn maatje.</p>
      <blockquote>Ik kijk uit naar de volgende jaren. Wordt vervolgd. Paul 10 Donkelaar</blockquote>
    `
  },

  {
  id: "friesland",
    title: "Digital @ FrieslandCampina",
    date: "1 feb 2018",
    readTime: "1 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Binnen FrieslandCampina mooie stappen gezet in de digitale transformatie voor melkveehouders.",
    img: "friesland",
    content: `
      <p class="post-intro">Binnen FrieslandCampina mooie stappen gezet in de digitale transformatie voor melkveehouders.</p>
      <p>Van maart 2017 tot februari 2018 heb ik als Project Manager Digital een aantal projecten gedaan binnen Cooperative Affairs bij FrieslandCampina. Een geweldige organisatie om voor en mee samen te werken.</p>
      <h3>Weidegangkalender</h3>
      <p>In april zijn we live gegaan met het eerste project: een digitale weidegangkalender voor de melkveehouders. Via een website kunnen zij registreren hoeveel uur de koeien in de wei hebben gestaan.</p>
      <h3>Melkapp</h3>
      <p>Het tweede project ging begin juni live in Nederland, België en Duitsland: de Melkapp. Melkveehouders kunnen via deze app hun melkleveranties controleren en een grafisch overzicht zien van de waardes van hun recente melkleveranties.</p>
      <h3>Melkweb 2.0</h3>
      <p>Het grootste en meest complexe project was Melkweb 2.0. Doel: het bedenken, ontwerpen, bouwen en live zetten van een digitale webomgeving die de melkveehouder informeert, faciliteert, inspireert, activeert en ondersteunt bij zijn bedrijfsvoering op alle coöperatieve thema's. In januari 2018 ging de eerste release live.</p>
    `
  },

  {
  id: "senegal",
    title: "Een onwerkelijke realiteit in Senegal",
    date: "7 nov 2017",
    readTime: "3 min",
    cats: ["Com-Passie"],
    excerpt: "Onwerkelijk, onvoorstelbaar, onvoorspelbaar en onvergetelijk. Less is more!",
    img: "senegal",
    content: `
      <p class="post-intro">Jamballon (goedendag in Pulaar)! Onwerkelijk, onvoorstelbaar, onvoorspelbaar en onvergetelijk. Less is more!</p>
      <p>Nog maar net een paar dagen thuis en ik ben door mijn werk al weer bijna vergeten dat ik vorige week in Senegal zat. Dat ik in mei in China bij de Great Wall Marathon Sandra uit New York ontmoet die haar ziel en zaligheid legt in marathons lopen om scholen te bouwen in arme landen. Dat dit mij naar Senegal brengt om mee te bouwen aan een van die scholen. Dat had ik begin van dit jaar nog niet kunnen voorspellen.</p>
      <h3>Die onwerkelijkheid vertaalde zich in een realiteit waar ik...</h3>
      <p>...met 40 graden het fundament voor een school heb mogen maken samen met die dames, bouwvakkers en een grote groep bewoners uit het dorp Tanguis Peulh.</p>
      <p>...heb geleerd hoe je stenen en bewapening maakt en heb gegraven voor het fundament.</p>
      <p>...met de openingsceremonie op een soort trommel mocht slaan en er vrouwen voor mijn neus aan het twerken waren.</p>
      <p>...prachtige en levenslustige kinderen en dorpsbewoners heb ontmoet die met bijna niets zoveel blijdschap uitstralen.</p>
      <p>...van de dorpelingen de naam Ndiambour Ba en Ahmet Ba kreeg en bij een hostfamilie verbleef die alleen Wolof en Pulaar spraken.</p>
      <p>...een "gendertalk" had over polygamie en koeien (met het verzoek om een stier op te sturen — waarbij ze serieus ingingen op alternatieve oplossingen).</p>
      <p>...voor de sluitingsceremonie in een Senegalees carnavalskostuum een korte speech in Pulaar gaf.</p>
      <p>...wederom de bevestiging kreeg dat humor en een glimlach universeel is en alle culturen verbindt.</p>
      <p>Ik zag er erg tegenop om er heen te gaan, maar ik ben erg dankbaar dat ik heb doorgezet.</p>
      <blockquote>What happened in Senegal, stays in Senegal! ;) — Jërë-jëf!</blockquote>
      <p><strong>UPDATE 1 februari 2018:</strong> Na ons zijn ze verder gegaan met het afmaken van de school. Zie hieronder het resultaat. TROTS!</p>
    `
  },

  {
  id: "senegaleng",
    title: "Build a school in Senegal — an unreal reality",
    date: "7 nov 2017",
    readTime: "3 min",
    cats: ["Com-Passie", "English blogs"],
    excerpt: "I met Sandra in China and ended up in Senegal helping to build one of the schools. Amazing!",
    img: "senegal_en",
    content: `
      <p class="post-intro">Jamballon (Good day in Pulaar)! I am just back from Senegal and it was unreal and it still is!</p>
      <p>At the beginning of the year I could not predict to meet Sandra from New York who runs marathons to raise money to build schools during the Great Wall Marathon. And then ending up in Senegal with her and four other powerwomen to help to build one of the schools. Amazing!</p>
      <p>This unreality translated itself in a reality where I...</p>
      <p>...contributed in making the school's foundation with over 100 Fahrenheit with these ladies, construction workers and a large group of the Tanguis Peulh community.</p>
      <p>...learned how to make bricks and dig the school's foundation. And got even more respect for women than I already have!</p>
      <p>...had to play the drums during the opening ceremony where women were twerking in front of my eyes.</p>
      <p>...fell in love with Naafi's cooking arts and was challenged to wrestle with a guy who also had a crush on her.</p>
      <p>...had a "gendertalk" about topics like polygamy and cows (requesting me to buy a bull and send it over).</p>
      <p>...was dressed in a Senegalese outfit to dance and give a speech in Pulaar.</p>
      <p>...got the confirmation once again that humor and a smile is universal and connects all cultures.</p>
      <blockquote>To be honest I was a bit anxious to go there, but I am so grateful I persisted and was awarded with this unforgettable experience. Jërë-jëf!</blockquote>
    `
  },

  {
  id: "sportensuport",
    title: "Sport & Support",
    date: "10 okt 2017",
    readTime: "2 min",
    cats: ["Com-Passie", "Marathons"],
    excerpt: "Oktober wordt de maand van sport & support: de Marathon Eindhoven en een bouwreis naar Senegal.",
    img: "sportensuport",
    content: `
      <p class="post-intro">Mijn China-blog sloot ik af met de woorden "to be com-tinued"…. En dat klopt. Oktober wordt de maand van sport & support.</p>
      <h3>Marathon Eindhoven</h3>
      <p>Volgende week zondag ga ik mijn 5e marathon lopen in Eindhoven "de gekste"! Ruim 3 jaar heb ik daar gewerkt bij Philips en ik vind het tof dat de marathon ook langs de High Tech Campus gaat. Na de zware beproeving in China wil ik dit jaar een betere tijd neerzetten — misschien wel weer onder de vier, zoals in Barcelona.</p>
      <h3>Bouwreis Senegal</h3>
      <p>28 oktober vlieg ik met Royal Air Maroc via Casablanca naar Dakar. Wat gaade ge daar doen, jonguh!?! Een school bouwen! Tijdens de Great Wall Marathon ontmoette ik Sandra uit New York. Zij rent marathons om geld op te halen om scholen te bouwen in arme landen. Vorig jaar de eerste school in Nepal, dit jaar Senegal.</p>
      <p>Toen ze mij hierover vertelde in China, zei ik gekscherend dat ik wel mee zou gaan. En nu gaat het echt gebeuren! Als enige Hollander met een groep Amerikanen. <a href="https://www.buildon.org" target="_blank">BuildOn</a> is de organisatie erachter — alleen al in Senegal hebben zij 89 scholen gebouwd.</p>
      <p>We gaan in het dorp slapen bij de mensen thuis. Het scheelt dat het meer dan 30 graden is, er geen water en elektriciteit is en de malariamuggen ook actief zijn….</p>
      <blockquote>Ik vind het best spannend, maar hoop met onvergetelijke verhalen terug te komen en iets positiefs te hebben bijgedragen aan de toekomst van arme kinderen.</blockquote>
    `
  },

  {
  id: "greatwall",
    title: "The Great Wall Marathon in China",
    date: "21 mei 2017",
    readTime: "6 min",
    cats: ["Marathons", "English blogs"],
    excerpt: "5,164 steps into history! Running one of the most demanding marathons at over 35°C.",
    img: "greatwall2",
    content: `
      <p class="post-intro">5,164 steps into history! Running one of the most demanding marathons along one of mankind's greatest constructs with over 35°C.</p>
      <p>The Great Wall Marathon was an almost indescribable adventure. Tuesday afternoon I flew to Beijing. After checking in I went to Tiananmen Square. In the evening I had dinner with two great guys from the UK — Mike and Paul. We decided against tortoise and pig intestines and chose safe dishes instead.</p>
      <p>Thursday we took off to Huangyaguang for the inspection day. After 2.5 hours by bus we walked 3.5 km on this amazing piece of art. With 39 degrees Celsius — not easy, but really great.</p>
      <h3>Sandra from New York — a true hero</h3>
      <p>At breakfast I met Sandra and Kymian from New York. Sandra grew up in Romania under the Ceaușescu regime, immigrated to New York at 21, and started running marathons to raise money to build schools in developing countries. Through <strong>#run2buildschools</strong> she was doing ten marathons that year. The first school was in Nepal; Senegal was planned. Hero!</p>
      <h3>Race day — 3:00 AM</h3>
      <p>I slept very badly and was happy when it was 3:00. The bus took us to the start. WHAT AN ATMOSPHERE! A Chinese Orchestra was playing Jingle Bells. Die-hards from 59 countries. 30 New Zealanders came on stage to do a Haka. Goosebumps!</p>
      <p>7:40 the battle started. After 1km the first climb started — a total of 1,165 meters up and 1,165 down! The 5,164 steps were unforgiving. At water stations I drank and threw water over my head. At 25km I had various blisters. Pure survival with 38°C.</p>
      <h3>Giving up was not an option</h3>
      <p>The wall felt like it was killing us all and everyone helped each other through it. "Always look on the bright side of life" and "Stairway to heaven." The end was in sight! Emotionally I crossed the finish line. It took me <strong>7:45</strong>. I f..king did it!</p>
      <p><strong>215 of the 825 marathon participants either stopped or did not meet the time limit. Only 39 participants ran within 5 hours. So I am very proud that I endured.</strong></p>
      <blockquote>"If the World would be like the atmosphere in a marathon the World would be an awesome place!" — Sandra</blockquote>
      <p>To be com-tinued ;)</p>
    `
  },

  // ── PROJECTEN ───────────────────────────────────────────────────────────────,

  {
  id: "philipsecom",
    title: "eCommerce @ Philips",
    date: "11 jan 2017",
    readTime: "1 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Als Programma Manager eCommerce online shops van 14 landen gemigreerd naar SAP Hybris.",
    img: "philipsEcom",
    content: `
      <p class="post-intro">Na al ruim 3 jaar projecten gedaan te hebben bij Philips, werd ik gevraagd voor de rol van Programma Manager eCommerce.</p>
      <p>Binnen Personal Health was het doel om de online shops van 14 landen op ATG te migreren naar SAP Hybris — en 4 andere landen uit Centraal Oost-Europa wilden ook een online shop. Bij Health Systems diende er de eerste online shop te komen in Noord-Amerika voor Business Group PCMS.</p>
      <h3>Resultaten</h3>
      <p>Voor Personal Health zijn de eerste 8 shops live in Tsjechië, Engeland, België, Italië, Denemarken, Finland, Noorwegen en Zweden. De andere landen volgden begin 2017. Technisch is binnen Health Systems de shop ook klaar en ging in februari live.</p>
      <blockquote>"Paul has been instrumental in ensuring that we as a team build & deploy the eCommerce solution for both Personal Health and Health Systems and the professional support he has given towards IT and business." — Gertin Schraa, Global Lead eCommerce</blockquote>
    `
  },

  {
  id: "hopdonders",
    title: "Crowdfunding Hopdonders",
    date: "1 aug 2016",
    readTime: "1 min",
    cats: ["Com-Passie"],
    excerpt: "Twee jongemannen met passie en ondernemerschap: een bierspeciaalzaak in Apeldoorn. Ik besloot ze te steunen.",
    img: "hopdonders",
    content: `
      <p class="post-intro">Qua Com-Passie doel koos ik dit keer voor iets lokaals. Ik had daarin twee voorwaarden: er moest duidelijk passie en ondernemerschap naar voren komen.</p>
      <p>Mijn marathon uitdaging in Barcelona had ik dit jaar niet aan een mooi Com-Passie doel gekoppeld. Daarnaast was ik qua projecten erg druk in 2016 en woonde ik maanden in een caravan vanwege de verbouwing aan ons nieuwe huis.</p>
      <p>Daarom besloot ik qua Com-Passie doel voor iets anders en iets lokaals te kiezen. Het werd Hopdonders. Twee jongemannen uit Apeldoorn hadden het idee om een bierspeciaalzaak te gaan beginnen. Via een bevlogen en professionele crowdfunding actie met een vleugje humor maakten ze mij enthousiast.</p>
      <p>Eind juli had er totaal 110 investeerders waren en ze ruim 81.000 Euro hadden opgehaald. Hop hop hop aan de slag!</p>
      <blockquote>Inmiddels zijn ze bijna een jaar open en goed en zichtbaar in het Apeldoornse gevestigd. Check <a href="http://www.hopdonders.nl" target="_blank">www.hopdonders.nl</a> of beter nog: ga erheen en koop een paar lekkere biertjes. Proost!</blockquote>
    `
  },

  {
  id: "salesforce",
    title: "Salesforce @ onna-onna en FlightClaim",
    date: "30 mei 2016",
    readTime: "2 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Twee Salesforce implementaties met ambitieuze doelstellingen en verschillende leveranciers.",
    img: "salesforce",
    content: `
      <p class="post-intro">Twee Salesforce implementaties met ambitieuze doelstellingen en verschillende leveranciers.</p>
      <h3>onna-onna</h3>
      <p>Sinds 2008 heeft Nederland er een online verzekeraar bij die zich helemaal richt op vrouwen: onna-onna (vrouw in het Japans). Gestart met alleen een autoverzekering, inmiddels ook andere verzekeringen. onna-onna is voor 100% een dochteronderneming van AEGON.</p>
      <p>Vanuit onna-onna was ik gevraagd om de rol van project manager op me te nemen voor een Salesforce CRM implementatie. De ambitie was groot: bij aanvang maar liefst 184 requirements. Samen met Marketing en Klantgeluk, CRMWaypoint (onderdeel Accenture), Aegon en verschillende andere partners hebben we in 9 maanden tijd dit project tot het gewenste resultaat gebracht.</p>
      <h3>FlightClaim</h3>
      <p>Met nog flinke spierpijn van de Amsterdam marathon begon ik op 20 oktober aan een nieuw project: Flight Claim. Op een gepimpte zolderkamer in een voormalige gasfabriek maakte ik kennis met de mensen van dit lean startup initiatief. Ambitie hoog en de deadline al bepaald: voor 31/12/2015.</p>
      <p>Doel was een website waar mensen een claim kunnen indienen bij vluchtvertraging. Het hele proces rondom de afhandeling van de claim en communicatie met luchtvaartmaatschappijen volledig via Salesforce. In slechts 9 weken live gegaan op 23 december met een eenvoudig ogende website maar complexe technische back-end met 20 API's (initieel waren er 3 nodig!).</p>
      <blockquote>De eerste claim werd dezelfde dag ingediend en binnen een uur succesvol afgehandeld — wat normaal weken duurt!</blockquote>
    `
  },

  {
  id: "barcelona",
    title: "Barcelona Marathon #3",
    date: "13 mrt 2016",
    readTime: "3 min",
    cats: ["Marathons"],
    excerpt: "Mijn mantra was 'onder de 4 met veel plezier'. 1 dag voor mijn 40e flikte ik het met 15 seconden: 3:59:45. Muy f..king bien!",
    img: "barcelona",
    content: `
      <p class="post-intro">Mijn mantra was "onder de 4 met veel plezier". 1 dag voor mijn 40e flikte ik het met 15 seconden verschil: 3:59:45. Muy f..king bien!</p>
      <p>19 Oktober 2015, een dag na de marathon van Amsterdam, schreef ik mij in voor de marathon van Barcelona. Mijn doel: voor mijn 40e een marathon onder de vier uur lopen. Mijn 1e marathon was in Tokyo in 2010 met als tijd 5:33.</p>
      <p>Mijn voorbereiding was niet ideaal — erg druk met twee projecten én middenin een verbouwing. Maar ik had me aangesloten bij loopgroep AV 34 voor trainingen, waaronder twee duurlopen van 30 kilometer door de prachtige Kroondomeinen.</p>
      <h3>Race day</h3>
      <p>13 maart, om 8:15 ging ik het 3:45-4:00 vak in. Om 8:30 het startschot. Langzaam beginnen, hartslag laag houden. Bij de 12 km stonden mijn schatten toe te juichen langs de kant. Tijd om te versnellen.</p>
      <p>Het mooie weer, de enthousiaste mensen en de geweldige organisatie van Barcelona deden de rest. De laatste kilometers met de mantra "onder de vier met plezier" — en het lukte! <strong>3:59:45</strong>! 15 seconden voor mijn 40e verjaardag!</p>
      <blockquote>Muy f..king bien! Sub4 gelukt!</blockquote>
    `
  },

  {
  id: "amsterdam",
    title: "Amsterdam Marathon #2",
    date: "20 okt 2015",
    readTime: "3 min",
    cats: ["Marathons"],
    excerpt: "70 trainingen, 810 trainingskilometers en 72.252 verbrande calorieën en bijna 1,5 uur sneller dan Japan!",
    img: "amsterdam",
    content: `
      <p class="post-intro">70 trainingen, 810 trainingskilometers en 72.252 verbrande calorieën en bijna 1,5 uur sneller dan Japan!</p>
      <p>18 Oktober was een zondag om nooit meer te vergeten. Helaas waren de 70 trainingen, 810 trainingskilometers en 72.252 verbrande calorieën toch te weinig om het doel van onder de vier uur te halen. Mijn eindtijd was <strong>4:18</strong> — een flinke verbetering ten opzichte van Tokyo (5:33).</p>
      <p>Desondanks ben ik trots op mezelf en alle superheroes die de finishstreep afgelopen zondag hebben gehaald.</p>
      <h3>Race day</h3>
      <p>Rustig ontbeten, douchen, aankleden en richting het Olympisch stadion. Fransen, Italianen, Brazilianen en nog 102 nationaliteiten hoorden om 9:30 het pistoolschot. Tussen 44.026 andere mannen en vrouwen liepen we als eerste richting het Vondelpark.</p>
      <p>Na 24 kilometer begon de slijtageslag. Bij 30 km probeerde ik nog de 4:00 pacers bij te benen, maar de pap was op. De laatste 12,195 km waren erg koud en zwaar. Toch zag ik het Olympisch stadion opdoemen en rende ik emotioneel over de finishlijn.</p>
      <h3>Vamos a Barcelona</h3>
      <p>De volgende dag in bed met veel spierpijn keek ik wat de volgende marathon kon zijn. Gevonden! Een dag voordat ik 40 wordt is de Marathon van Barcelona! Ingeschreven en Com-firmed!</p>
      <blockquote>Iedereen heeft zich ingezet en zijn/haar grenzen verlegd. Of het nu 8, 21 of 42 km was.</blockquote>
    `
  },

  // ── BATCH 2: NEW POSTS ─────────────────────────────────────────────────────,

  {
  id: "digitalphilips",
    title: "Digital @ Philips",
    date: "29 sep 2015",
    readTime: "3 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Samen bouwen aan een platform waarin Philips innovaties laat zien die een positieve impact hebben op het leven van mensen.",
    img: "philipsDigital",
    content: `
      <p class="post-intro">Samen bouwen aan een digital storytelling platform voor Philips — innovation and you.</p>
      <p>In november 2013 maakte Philips wereldwijd zijn nieuwe merkpositionering bekend met als nieuwe tagline: <em>innovation and you</em>. In 2014 werd besloten de tijdelijke website te vervangen en er een digital storytelling platform van te maken — waarop Philips een serie innovaties laat zien die een positieve impact hebben op het leven van mensen.</p>
      <h3>Voorbereidingsfase</h3>
      <p>Eind augustus 2014 werd ik als project manager gevraagd, verantwoordelijk voor alle IT-gerelateerde werkzaamheden en teams. Samen met Global Brand Communications, Ogilvy New York en Digital Services werkte ik de scope en requirements uit.</p>
      <h3>Ready fase</h3>
      <p>Nadat het budget was goedgekeurd stelde ik vanuit IT een Ready team op. Half oktober begon Ogilvy NY met interactieontwerpen en eerste design concepten. We reviewden de ontwerpen nauwgezet en borgden dat alle Philips design richtlijnen gevolgd werden.</p>
      <h3>Development fase</h3>
      <p>De mooiste fase — eindelijk bouwen. Begin januari 2015 kick-off workshop. Elke twee weken een demo. Vanaf mei kreeg het platform echt vorm. Aangezien ik al een tijd overwoog bij een ander bedrijf te gaan werken, gaf ik eind mei aan te willen stoppen bij Philips. In goed overleg bleven we tot eind juli. Het platform ging uiteindelijk <strong>19 augustus live in 8 landen tegelijk</strong>! Op 25 augustus vierden we het projectsucces met een gezellig etentje.</p>
    `
  },

  {
  id: "orangoetan",
    title: "42 km rennen voor orang-oetans",
    date: "20 sep 2015",
    readTime: "2 min",
    cats: ["Com-Passie", "Marathons"],
    excerpt: "In 2016 hopen wij 40 te worden en hebben we elkaar uitgedaagd om voor die tijd een marathon te lopen onder de 4 uur.",
    img: "orangoetan",
    content: `
      <p class="post-intro">Boven zie je een foto uit 1997. 18 jaar geleden gingen die twee mensapen met kleren aan naar Australië. Volgend jaar hopen wij allebei 40 te worden en hebben we elkaar uitgedaagd een marathon onder de 4 uur te lopen.</p>
      <p>De twee mensapen zijn ik (links) en mate Raymond (rechts). De eerste poging is over exact 4 weken tijdens de 40e editie van de Amsterdam marathon! Inmiddels hebben we al ruim 400 km hardgelopen. In 2011 deden we samen ook al de Alpe d'Huzes voor KWF.</p>
      <h3>Waarom voor de orang-oetan?</h3>
      <p>Het is een persoonlijke motivatie. Ik heb een zwak voor apen. Al sinds 1999 heb ik een aap geadopteerd via Stichting Aap. Misschien ben ik daarom wel in A(a)peldoorn gaan wonen met de prachtige Apenheul. En al jaren heb ik Borneo bovenin mijn bucketlist staan.</p>
      <p>Ik maak me oprecht zorgen om onze natuur en wat er met de orang-oetan gebeurt door jacht en het kappen van de regenwouden. Mijn oudste zoon kwam met een poster van een WNF campagne voor orang-oetans en mijn jongste was onlangs erg verdrietig toen orang-oetan Merah was verdronken in de Apenheul.</p>
      <blockquote>Sportieve groeten, Raymond en Paul. * Voor degenen die mij al langer kennen: die van Tokyo heb ik in 2010 in 5,5 uur gelopen...</blockquote>
    `
  },

  {
  id: "dierendoelen",
    title: "Goede dierendoelen",
    date: "2015",
    readTime: "1 min",
    cats: ["Com-Passie"],
    excerpt: "Mijn betrokkenheid bij goede doelen voor dieren — van Stichting Aap tot WWF.",
    img: "goede_doelen",
    content: `
      <p class="post-intro">Ik heb een zwak voor dieren. Al jaren steun ik verschillende goede doelen die opkomen voor de bescherming van dieren en hun leefomgeving.</p>
      <p>Stichting Aap staat het dichtst bij mijn hart — al meer dan 20 jaar geadopteerd. De Apenheul in Apeldoorn is voor mij geen toeristische attractie maar een serieuse conservatie-organisatie.</p>
      <p>Via de Amsterdam marathon liep ik in 2015 mede voor het WWF en de bescherming van de orang-oetan. Want als we niet oppassen, verdwijnen deze prachtige dieren binnen onze generatie uit het wild.</p>
      <p>Kleine bijdragen tellen op. Een adoptie, een donatie, bewustwording bij je kinderen — het begint allemaal met aandacht.</p>
      <blockquote>De wereld is niet alleen van ons mensen. We delen hem met miljoenen andere soorten. Dat vergeten we te gemakkelijk.</blockquote>
    `
  },

  {
  id: "philipsactivation",
    title: "An active period within Philips Activation",
    date: "19 nov 2014",
    readTime: "6 min",
    cats: ["Com-Firm", "Projecten", "English blogs"],
    excerpt: "Completed 12 projects in 9 months for 15 Product Owners from 4 sectors.",
    img: "philips4",
    content: `
      <p class="post-intro">Completed 12 projects and various RFCs in 9 months for 15 Product Owners from 4 different sectors.</p>
      <p>The Dragontails and Avanti scrum teams worked on 12 projects from all sectors (CL, LI, HC and Group) within the Philips Activation domain — making a significant contribution to Philips's digital presence. From the professionalization of homepage and category pages to simplified registration forms to increase sales.</p>
      <h3>The big five</h3>
      <p><strong>MCC (Mother and Child Care):</strong> First CL category website in CQ5.6 for Philips Avent — live in Germany 3 hours before the first TV commercial, then rolled out in 15 countries over 4 months.</p>
      <p><strong>Rebranding:</strong> Foundation tools and components across all CQ5 websites, following new Philips brand guidelines. Complex, time-critical, long-lasting effect.</p>
      <p><strong>Careers:</strong> Fully responsive website for all career opportunities, integrated with Taleo through SOAP. All parties working seamlessly together.</p>
      <p><strong>PRF (Product Registration Form):</strong> Simple user-friendly registration flow. Complex CQ-Janrain backend integration.</p>
      <p><strong>Cypress:</strong> Full blast campaign website for the Shaver 9000 series (win a trip to space!), with integrations to Janrain, Eloqua and CQ. Also migrated the Male Grooming Experience Center from CQ5.5 to CQ5.6.</p>
      <h3>Results</h3>
      <p>12 projects and various RFCs in 9 months for 15 Product Owners from all sectors. Over 1/3 of the web CQ component library was developed by both teams. Dragontails average CSAT: <strong>8.1</strong> · Avanti: <strong>8.6</strong>!</p>
      <blockquote>"IT and the Dragontails team have been an instrumental part of Personal Care, allowing us to rollout our digital campaigns and content across markets successfully." — Willem Schüngel, Product Owner Personal Care</blockquote>
    `
  },

  {
  id: "marketingstudiereis",
    title: "Een inspirerende marketingstudiereis",
    date: "28 okt 2014",
    readTime: "4 min",
    cats: ["Com-Passie", "Com-Firm"],
    excerpt: "Een week in Kaapstad en Dubai met mooie ontmoetingen, inspirerende gesprekken en natuurlijk het prachtige Zuid-Afrika.",
    img: "marketingstudiereis",
    content: `
      <p class="post-intro">Een week in Kaapstad en Dubai met mooie ontmoetingen, inspirerende gesprekken en natuurlijk het prachtige Zuid-Afrika.</p>
      <p>In oktober ben ik ruim een week naar Kaapstad en Dubai geweest voor een marketingstudiereis samen met een groep register marketeers en marketingprofessionals. Het was één groot hoogtepunt vol met inspiratie.</p>
      <p>Donderdagavond 9 oktober ontmoetten we elkaar. Na een korte tussenstop in Dubai vlogen we door naar Kaapstad. Eenmaal aangekomen, werden we door onze buschauffeur en groot Manchester United-fan Sonny Fortune naar ons hotel gebracht.</p>
      <h3>University of Stellenbosch & Backsberg Winery</h3>
      <p>De volgende dag vertrokken we na het ontbijt richting de University of Stellenbosch Business School voor Masterclasses over Zuid-Afrika en marketing. 's Middags luisterden we naar de jonge eigenaar Simon Back van Backsberg Winery Estate — in zijn korte broek, in de zon, met een wit wijntje. Zijn overgrootvader begon als bouwvakker en kocht uiteindelijk een boerderij die nu bekend staat als Backsberg. Na een rondleiding: een heerlijke wijnproeverij.</p>
      <h3>Hubspace in Khayelitsha township</h3>
      <p>Zondagochtend gingen we de Khayelitsha township in waar we bij Hubspace luisterden naar zes jonge ondernemers — vier mannen en twee vrouwen die vanuit armoede zichzelf omhoog hebben gevochten met zo'n drive, focus en passie dat ze alleen al geld zouden kunnen verdienen door ingekakte ondernemers in onze rijke Westerse wereld wakker te schudden. Cya Daweti is bezig met een gangstermuseum om kinderen voor te lichten. Lufefe Nomjana noemt zichzelf Spinach King en verkoopt spinaziebrood.</p>
      <blockquote>Zuid-Afrika en Kaapstad zijn magnifiek, complex, hard en mooi. Een ervaring die je raakt en motiveert.</blockquote>
    `
  },

  {
  id: "kinderschoenen",
    title: "160 paar kinderschoenen",
    date: "19 okt 2014",
    readTime: "4 min",
    cats: ["Com-Passie"],
    excerpt: "Ik ga op marketingstudiereis naar Kaapstad en ik neem mee... 67 paar kinderschoenen.",
    img: "kinderschoenen",
    content: `
      <p class="post-intro">Ik ga op marketingstudiereis naar Kaapstad en ik neem mee... 67 paar kinderschoenen.</p>
      <p>Twee jaar geleden was ik al in Kaapstad geweest om een school te renoveren. Destijds heb ik daar met een groep project managers voor Philippi Children's Centre (PCC) een week hard gewerkt en ruim 15.000 Euro opgehaald. Nu wilde ik weer iets meenemen voor de kids. Nadat ik had nagevraagd waar de meeste behoefte voor was, was de reactie duidelijk: <strong>schoenen</strong>. "Shoes are like gold in a township."</p>
      <p>Een bericht op Facebook, een mail richting de deelnemers en een mail naar Philips collega's leidde tot veel reacties. Een aantal mensen kochten zelfs nieuwe schoentjes! Jeanine Dijkhuis haalde met haar super achterban 55 paar schoenen op. Margriet Larmit meldde de dag voor vertrek nog 20 paar. Zelf moest ik helaas nee zeggen tegen vrienden en relaties na 67 paar — ik kon het gewoonweg niet meer meekrijgen.</p>
      <p>Drie andere deelnemers bleken ook nog schoenen en kleding te hebben meegenomen — totaal: <strong>160 paar schoenen!</strong> Stiekem had ik gehoopt op zo'n 80 paar, maar dit overtrof alles.</p>
      <p>Bij aankomst bij PCC stond er een heel ontvangstcomité te wachten. Ik was erg dankbaar voor de schoentjes. Vreugde en trots vervulden mij volledig toen ik zag wat er allemaal veranderd was: extra gebouwen, een groentetuin, betegelde vloeren, een speeltuin, nieuw sanitair.</p>
      <blockquote>Hoe tof is het toch om met zo'n kleine inspanning zoveel mensen blij te maken!</blockquote>
    `
  },

  {
  id: "synergie150",
    title: "Synergie tussen 150 mensen",
    date: "10 feb 2014",
    readTime: "4 min",
    cats: ["Com-Passie", "Com-Firm"],
    excerpt: "'Verbinden en verbonden' was het thema van de jaarlijkse inspiratiebijeenkomst van de Bestuursacademie.",
    img: "synergie150",
    content: `
      <p class="post-intro">Maandag 3 februari kwamen 150 mensen bij elkaar tijdens de jaarlijkse inspiratiebijeenkomst van de Bestuursacademie. Gave Dingen Doen speelde die avond een grote rol.</p>
      <p>Vorig jaar werd ik door Bas van den Hoogen van het Verenigingsburo benaderd of we vanuit Gave Dingen Doen (GDD) Apeldoorn een actieve rol wilden spelen voor de Inspiratiebijeenkomst van de Bestuurdersacademie. Blijkt dat we maar liefst 2.200 verschillende verenigingen en stichtingen hebben in Apeldoorn!</p>
      <p>In mijn enthousiasme zei ik gelijk ja. De maanden erna stelden we een mooi programma samen met Medy van der Laan als gastspreker en een hoofdrol van Gave Dingen Doen met 6 pitches. Na een oproep aan de andere GDD facilitators boden Gijs, Marieke, Yvonne, Dorien en Bela zich spontaan aan.</p>
      <h3>De avond</h3>
      <p>Gastvrouw Hanneke Koning van Rabobank Apeldoorn had alles tot in de puntjes geregeld. Stoelen, zalen, pennen, geeltjes — alles stond klaar. Twee van de zes pitchers vielen op het laatste moment uit door omstandigheden, dus we moesten improviseren. Ik mailte Medy van der Laan of we een vraag uit haar presentatie als pitch mochten inzetten — en ze deed spontaan zelf ook mee!</p>
      <p>Het werd een erg geslaagde avond waarbij het thema en doel "verbinden en verbonden" in vele opzichten is gehaald.</p>
      <blockquote>Gave Dingen Doen verbindt mensen met passie voor hun omgeving. Synergie in zijn mooiste vorm.</blockquote>
    `
  },

  {
  id: "watdoeje",
    title: "Wat doe je als Digital Project Manager?",
    date: "30 jan 2014",
    readTime: "4 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Als Digital Project Manager ben ik verantwoordelijk om alle mensen, processen, prioriteiten en belangen naadloos op elkaar af te stemmen.",
    img: "philips3",
    content: `
      <p class="post-intro">Wat doe je voor werk? Ik ben Digital Project Manager. Oooh, dus je bouwt websites. Een IT-er! Nee… Wat doe je dan eigenlijk?</p>
      <p>Hieronder een poging over wat ik momenteel doe als Digital Project Manager bij Philips. Sinds mei 2012 zit ik als Digital Project Manager bij Philips IT binnen het Digital Marketing domein — begonnen binnen CMC, later verantwoordelijk voor het Activation domein.</p>
      <h3>De Business</h3>
      <p>Als Internet Project Manager ben ik vanuit IT centraal aanspreekpunt rondom Activation projecten op het CMS CQ5 platform. Initieel voor Personal Care, al snel kwamen Coffee, Domestic Appliances en Health & Wellness erbij. Minstens 1x per week in Amsterdam om de status van projecten door te nemen met online marketing directors, programma managers, Philips Design en externe bureaus.</p>
      <h3>IT</h3>
      <p>Binnen IT werken we volledig agile. Momenteel verantwoordelijk voor twee scrumteams: Dragontails en Avanti. Beide teams: scrum master, business analyst, tech lead, 4 developers en een testlead. Dagelijks standups, elke twee weken demo's met business stakeholders/product owners.</p>
      <p>Naast dagelijks contact met de teams nog te maken met: Delivery & Programma management, Security & risk officer, Controlling, Architecten, Externe partners Wipro en Accenture, Operations, Digital Services, Release Management en Purchase management.</p>
      <blockquote>Als Digital Project Manager vervul ik een centrale spil-functie om alle mensen, processen, prioriteiten en belangen goed op elkaar af te stemmen. Communicatie, transparantie, samenwerken, een people-first mentaliteit, focus, flow en fun is hierin cruciaal.</blockquote>
    `
  },

  {
  id: "5jaarcomfirm",
    title: "5 jaar Com-Firm & Com-Passie",
    date: "1 jan 2014",
    readTime: "3 min",
    cats: ["Com-Firm"],
    excerpt: "5 jaar geleden gestart als zelfstandig professional in hartje kredietcrisis. Wat een vijfbaan attractie was het!",
    img: "5_jaar_com-firm",
    content: `
      <p class="post-intro">Op de 1e dag van 2014 was het al weer 5 jaar geleden dat ik met Com-Firm ben gestart als zelfstandig professional. Ik begon in hartje kredietcrisis met een rood saldo en pas 8 maanden in de nieuwe functie van vader.</p>
      <p>5 jaar verder en helaas is de crisis er nog. Ik ben gelukkig zelf uit de rode cijfers en inmiddels mag ik mijzelf met twee top mannekes een ervaren en trotse papa noemen. Een paar bruine haren zijn iets grijzer geworden, maar met grijsheid komt wijsheid. ;)</p>
      <h3>Com-Firm hoogtepunten</h3>
      <p>Vanuit Com-Firm heb ik in die 5 jaar voor vele opdrachtgevers verschillende mooie (online) communicatieprojecten gedaan: Prenatal, Wensink, Chrysler, Jeep, Hogeschool van Arnhem en Nijmegen, CentER, Tilburg University, en inmiddels al meerdere jaren bij Philips.</p>
      <h3>Com-Passie hoogtepunten</h3>
      <p>Vier bijzondere uitdagingen: de Tokyo marathon voor Stichting Opkikker (2010), de Alpe d'Huzes voor KWF (2011), de Bouwreis Kaapstad voor Sasdi (2012), en het Zwitsallab experiment (2013).</p>
      <p>Gastcolleges bij Saxion, de HAN en Ondernemer voor de Klas. Betrokken bij Gave Dingen Doen — een platform dat verbindt, co-creëert en energie geeft aan iedereen die er deel van uitmaakt.</p>
      <blockquote>Het was in ieder geval één grote vijfbaan attractie vol dynamiek en verandering. Op naar de volgende 5 jaar!</blockquote>
    `
  },

  {
  id: "zwitsalok",
    title: "Zwitsal LAB: een geslaagd experiment",
    date: "13 okt 2013",
    readTime: "5 min",
    cats: ["Com-Passie", "Com-Firm"],
    excerpt: "5 mensen, 4 weken, 3 perspectieven, 2 dagen, 1 experiment, 0 euro — en een geweldig resultaat!",
    img: "zwitsalok",
    content: `
      <p class="post-intro">Nog maar nauwelijks bekomen van twee dagen Zwitsal LAB wil ik toch gelijk het gevoel vastleggen: puur, statusloos, ongedwongen, open, toegankelijk, positiviteit, no-nonsense, enthousiasme, inspirerend, passie, verbindend en energie.</p>
      <h3>Vrijdag 11/10: (net)werken bij Zwitsal LAB</h3>
      <p>"Wij zijn hier in Siberie!" — met deze woorden opende Jasper van der Graaf, Beleidsadviseur Cultuur van de Gemeente Apeldoorn, zijn betoog. Herfstachtig koud, maar alle Flexwerkers, Facehoekers, Workshoppers en Gavedingendoeners zaten enthousiast in de "schoolbanken".</p>
      <p>In de loop van de dag kwamen er steeds meer mensen binnen. Hoe koud het ook was, hoe warm de verbindingen waren tussen mensen, bedrijven en initiatieven. Magrietha Vosselman van ZUSlunches verzorgde een uitgebreide lunch voor iedereen.</p>
      <h3>Zaterdag 12/10: doen bij Zwitsal LAB</h3>
      <p>De tweede dag was nog voller en energieker. Workshops, pitches, samenwerking en verbinding. Mensen die elkaar nog nooit hadden ontmoet, werkten plots samen aan mooie ideeën. Dat is de magie van Gave Dingen Doen.</p>
      <p>Aan het einde van de avond liepen mensen met een glimlach naar buiten. Reacties als "puik", "verfrissend", "inspirerend" en "energie". Mission accomplished!</p>
      <blockquote>5 mensen, 4 weken, 3 perspectieven, 2 dagen, 1 experiment, 0 euro. En een onvergetelijk resultaat!</blockquote>
    `
  },

  {
  id: "zwitsalexp",
    title: "Zwitsal LAB, een experiment in Apeldoorn",
    date: "18 sep 2013",
    readTime: "2 min",
    cats: ["Com-Passie", "Com-Firm"],
    excerpt: "Even geen marathon of school bouwen, maar gave dingen doen in mijn hometown Apeldoorn.",
    img: "zwitsalexp",
    content: `
      <p class="post-intro">Even geen marathon in Japan of een school bouwen in Zuid-Afrika, maar gave dingen doen in mijn hometown Apeldoorn.</p>
      <p>Sinds ik voor mezelf ben begonnen, heb ik gezegd dat ik 1x per jaar een uitdaging wil aangaan voor een goed doel. Dit jaar heb ik besloten het dichterbij en iets rustiger aan te doen.</p>
      <h3>Gave Dingen Doen in Apeldoorn</h3>
      <p>Sinds een jaar organiseer ik co-creatie sessies in Apeldoorn en ben ik facilitator bij Gave Dingen Doen. Inmiddels zijn er vier sessies geweest en zijn er tussen de ruim 70 deelnemers en pitchers al mooie verbindingen gelegd. Jeanine's pitch over Klein Berlijn is niet langer meer een droom, maar inmiddels gave realiteit!</p>
      <p>Ik wil ook daadwerkelijk het verschil maken: van passief naar actief! Echt doen! En dat allemaal in Apeldoorn, die mooie plaats in het "Midden-Oosten" van Nederland — met ook een erg hoog "kat-uit-de-boom-kijken"-gehalte. Een uitdaging dus.</p>
      <h3>De uitdaging: het Zwitsal LAB experiment</h3>
      <p>Het Zwitsal terrein in Apeldoorn — een terrein met een rijke historie met enorm veel potentie. Mijn plan: twee dagen lang een pop-up werkplek, co-creatie sessies, workshops en verbinding organiseren op dit bijzondere terrein. Gratis. Open. Voor iedereen.</p>
      <blockquote>Het doel: mensen, ideeën en initiatieven met elkaar verbinden op een plek die zelf ook bruist van de energie en potentie.</blockquote>
    `
  },

  {
  id: "coworkfriday",
    title: "Back to school met CoworkFriday",
    date: "2013",
    readTime: "1 min",
    cats: ["Com-Firm", "Com-Passie"],
    excerpt: "Samenwerken op een nieuwe manier: CoworkFriday brengt freelancers bij elkaar op bijzondere locaties.",
    img: "coworkfriday",
    content: `
      <p class="post-intro">CoworkFriday: elke vrijdag op een andere gave locatie samenwerken met andere freelancers en zelfstandigen.</p>
      <p>Als zzp-er werk je vaak alleen. Dat geeft vrijheid, maar soms ook eenzaamheid. CoworkFriday lost dat op op de leukste manier: elke week een andere locatie, andere mensen, nieuwe inspiratie.</p>
      <p>Van een bakkerij tot een museum, van een school tot een stadsboerderij — elke locatie geeft een andere energie. En die energie werkt aanstekelijk. Je komt voor het wifi en de koffie, en gaat naar huis met nieuwe ideeën en contacten.</p>
      <blockquote>Samenwerken is beter dan alleen werken. Zelfs als je 'zelfstandig' bent.</blockquote>
    `
  },

  {
  id: "8uuroverwerken",
    title: "8UO — Acht Uur Overwerken",
    date: "2013",
    readTime: "1 min",
    cats: ["Com-Firm"],
    excerpt: "Een initiatief waarbij professionals een dag gratis hun expertise inzetten voor maatschappelijke organisaties.",
    img: "8uo",
    content: `
      <p class="post-intro">8UO — Acht Uur Overwerken: een dag lang gratis je expertise inzetten voor een goed doel of maatschappelijke organisatie.</p>
      <p>Het concept is simpel en krachtig: professionals die normaal veel verdienen, stellen een dag hun kennis en vaardigheden beschikbaar voor organisaties die dat normaal niet kunnen betalen. Een dag marketing, communicatie, strategie of technologie — volledig pro bono.</p>
      <p>Ik deed mee en hielp een lokale stichting met hun digitale communicatie. Een dag werk dat voor mij routine was, had voor hen een impact die maanden duurde.</p>
      <blockquote>Je meest waardevolle bezit is niet je geld. Het is je tijd en je kennis. Investeer ze soms gratis.</blockquote>
    `
  },

  {
  id: "ondernemer67",
    title: "Ondernemer voor groep 6 en 7",
    date: "2013",
    readTime: "1 min",
    cats: ["Com-Firm", "Com-Passie"],
    excerpt: "Als ondernemer voor de klas — kinderen van groep 6 en 7 vertellen wat een ondernemer doet.",
    img: "ondernemervoordeklas",
    content: `
      <p class="post-intro">Ondernemer voor de Klas — een initiatief waarbij ondernemers naar basisscholen gaan om kinderen te vertellen over ondernemen.</p>
      <p>Naar groep 6 en 7 in Apeldoorn. 25 paar grote ogen keken me aan. "Wat doe jij voor werk?" En dan probeer je in taal die een 10-jarige begrijpt uit te leggen wat een Digital Project Manager doet.</p>
      <p>De vragen die ze stellen zijn verfrissend eerlijk: "Verdien je veel geld?" "Moet je ook naar school?" "Waarom werk je niet voor een baas?" Kinderen snijden altijd door de ruis heen.</p>
      <p>Maar het mooiste was toen een meisje aan het einde zei: "Ik wil later ook iets verzinnen en dat dan doen." Dat is precies wat ondernemen is.</p>
      <blockquote>De beste les die ik die dag leerde, leerden de kinderen mij.</blockquote>
    `
  },

  {
  id: "freshheads",
    title: "Digital @ Freshheads",
    date: "2013",
    readTime: "1 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Samenwerking met Freshheads aan digitale projecten vanuit Com-Firm.",
    img: "fh",
    content: `
      <p class="post-intro">Samenwerking met Freshheads — een van de gave digitale bureaus waarmee ik als Com-Firm heb samengewerkt.</p>
      <p>Freshheads uit Tilburg is een van de meest professionele digitale bureaus die ik ken. Scherpe developers, goede designers en een no-nonsense werkwijze die ik waardeer.</p>
      <p>Onze samenwerking draaide om gezamenlijke projecten waarbij ik de projectmanagement rol vervulde en Freshheads de technische realisatie deed. Een goede taakverdeling die resulteerde in mooie producten.</p>
      <blockquote>De beste samenwerkingen zijn die waarbij iedereen doet waar hij goed in is. Dat is synergie in de praktijk.</blockquote>
    `
  },

  {
  id: "gdd3",
    title: "Gave Dingen Doen Sessie #3",
    date: "25 apr 2013",
    readTime: "3 min",
    cats: ["Com-Passie", "Com-Firm"],
    excerpt: "Vervolgstappen met een gave groep mensen over het Zwitsalterrein in Apeldoorn.",
    img: "gdd3",
    content: `
      <p class="post-intro">Puik, verfrissend, inspirerend, energie — dat waren de reacties aan het einde van een wederom geslaagde Gave Dingen Doen sessie in Apeldoorn.</p>
      <p>Bij de derde editie waren we te gast bij 't Cafeetje van Marja, dankzij een uitnodiging van Marij Wools. Met een huiselijke feel-good sfeer kon de avond al niet meer stuk.</p>
      <h3>Rondleiding Zwitsalterrein</h3>
      <p>Voordat we begonnen, hadden we een rondleiding georganiseerd op het Zwitsal-terrein. Een terrein met een rijke historie waar Zwitsal verschillende producten maakte, maar waar ook papaver werd gemalen om morfine van te maken (Klein Afghanistan ;)). Een plek met ontzettend veel potentie voor "ons Apeldoorners"!</p>
      <p>We zagen het ketelhuis waar de Veluwse Schavuyt haar brouwerij gaat vestigen. Met een oppervlakte van 3.500 vierkante meter zagen veel van ons al allerlei kansen.</p>
      <h3>De sessie</h3>
      <p>Bij de voorstelronde kwamen de bijzonderheden al mooi naar voren. De een kam net terug uit Costa Rica en de ander staat op het punt om een deel van de pelgrimsroute naar Santiago de Compostela te lopen. Uiteindelijk begonnen we met 20 man aan een zeer geslaagde avond vol pitches en verbindingen.</p>
      <blockquote>Gave Dingen Doen brengt mensen bij elkaar die iets willen en mensen die iets kunnen. De magie zit in het kruispunt.</blockquote>
    `
  },

  {
  id: "gdd2",
    title: "Gave Dingen Doen Sessie #2",
    date: "1 mrt 2013",
    readTime: "2 min",
    cats: ["Com-Passie", "Com-Firm"],
    excerpt: "Een gave avond op een gave locatie met gave mensen. De tweede editie van Gave Dingen Doen in Apeldoorn.",
    img: "gdd2",
    content: `
      <p class="post-intro">Afgelopen woensdag was de tweede editie van Gave Dingen Doen in Apeldoorn. Het was een gave avond op een gave locatie met gave mensen.</p>
      <p>Zelf zag ik er aardig tegenop, omdat ik en het hele gezin grieperig was. Sandra Weijers en Susanne Bakkenist waren gelukkig zo tof geweest om alles al klaar te zetten bij Klein Berlijn.</p>
      <p>Toen ik er om 18:30 binnenkwam, voelde ik de energie al op gang komen. Helaas waren een flink aantal mensen door griep geveld, maar spontaan kwamen er nieuwe deelnemers mee. Er waren ook mensen uit Arnhem en Utrecht.</p>
      <h3>De avond</h3>
      <p>Om 19:40 begon ik met een introductie over Gave Dingen Doen. De voorstelronde was leuk — een veelzijdige groep van grafisch ontwerpers tot communicatie-experts. De extra vraag: "met wat voor gebouw zou je jezelf vergelijken en waarom?" Antwoorden varieerden van de Empire State Building tot een kasteel in Ljubljana en van het Disney-kasteel tot de schuur in de tuin.</p>
      <p>Middelpunt van de avond was een pitch over een inspirerend initiatief dat verbinding zocht met mensen die wilden helpen. Typisch Gave Dingen Doen — mensen met ideeën, mensen met krachten, en de magie die daartussenin ontstaat.</p>
      <blockquote>Gave Dingen Doen werkt. Als je mensen bij elkaar brengt met passie voor hun omgeving, ontstaat er vanzelf energie en synergie.</blockquote>
    `
  },

  {
  id: "debalans",
    title: "De balans tussen human being & human doing",
    date: "1 feb 2013",
    readTime: "3 min",
    cats: ["Com-Firm", "Com-Passie"],
    excerpt: "Vaag/Gaaf, Philips/Philippi, Human being/Human doing — 2012 begon vaag maar werd gaaf.",
    img: "debalans",
    content: `
      <p class="post-intro">Vaag / Gaaf, Philips / Philippi, Human being / Human doing. 2012 begon als een onvoorspelbaar vaag jaar maar werd een onvoorstelbaar gaaf jaar!</p>
      <p>Gelukkig nieuwjaar! Als zelfstandig ondernemer heb ik geen 13e maand meer. Daarom ben ik 2013 maar per 1 februari begonnen en heb ik mijzelf januari als 13e maand gegeven.</p>
      <p>2012 was een jaar met hoogte- en dieptepunten. Maar ook een jaar waar ik meer human doing was dan human being! Iets waar ik dit jaar meer balans in wil brengen.</p>
      <h3>Van Philippi naar Philips</h3>
      <p>Het eerste kwartaal had ik nagenoeg geen opdrachten — tijd voor mijn nieuwe website en nieuwe mensen. Een afwijzing vanwege geen PRINCE2 certificaat leidde uiteindelijk tot het hoogtepunt van 2012: de bouwreis naar Kaapstad.</p>
      <p>Na Philippi ging ik vrijwel direct aan de slag bij Philips. De overgang van Philippi naar Philips was groot, erg groot. Van een township naar een multinational. Van armoede naar overvloed. Van eenvoud naar complexiteit. De contrasten raakten me en maakten me scherper over wat echt telt.</p>
      <h3>Human being vs human doing</h3>
      <p>In 2012 was ik veel te veel bezig met doen. Projecten, deadlines, klanten, kilometers. Goed voor de portemonnee, minder goed voor de ziel. In 2013 wil ik meer ruimte maken voor zijn. Voor nadenken. Voor verbinding. Voor de dingen die niet op een to-do lijst staan maar die het leven rijker maken.</p>
      <blockquote>Vaag werd gaaf. Philips werd Philippi. Human doing wordt human being. Tot volgende maand!</blockquote>
    `
  },

  {
  id: "justdobe",
    title: "Just do-be it!",
    date: "1 feb 2013",
    readTime: "3 min",
    cats: ["Com-Firm", "Com-Passie"],
    excerpt: "Socrates zei 'To be is to do', Plato draaide het om, Frank Sinatra deed 'do-be-do-be-do'. Voor mij is het de balans: Just do-be it!",
    img: "justdobe",
    content: `
      <p class="post-intro">Socrates zei: "To be is to do". Plato draaide het om: "To do is to be". Frank Sinatra sloot in 1966 zijn liedje Strangers in the Night af met "do-be-do-be-do". Voor mij is het de balans tussen to do en to be. Kortom: <strong>Just do-be it!</strong></p>
      <p>Al jaren is Nike's "Just do it" één van mijn favoriete quotes. Kort, krachtig en actiegericht. Ik ben een absolute doener — ik overweeg zelfs om mijn achternaam te veranderen in ten Doenkelaar. Echter heb ik ook jaren gehad dat ik zoveel hooi op mijn vork nam dat ik tegen mijn fysieke en geestelijke grenzen aanliep. 2012 was ook zo'n jaar.</p>
      <h3>Human being vs human doing</h3>
      <p>De puurste vorm van "zijn" is voor mij stilstaan en bewust zijn hoe je je voelt, waar je bent en wat je doet in het nu. Kinderen zijn daar experts in. De afgelopen jaren heb ik een aantal keer voor de klas gestaan en eindigde ik mijn verhaal steevast met het feit dat we human beings zijn en geen human doings, en dat het belangrijk is om nooit het kind in jezelf te verliezen. Authenticiteit!</p>
      <p>Maandagmiddag ging ik hardlopen en op een viaduct stond een jongetje te springen van plezier, omdat hij naar vrachtwagens toeterbewegingen maakte en ze reageerden met een luide claxon. Hij was helemaal in zijn element, helemaal in het nu. Prachtig om te zien.</p>
      <p>Vorig jaar heb ik mijzelf veelvuldig human doing genoemd, omdat ik maar bleef doorgaan met van alles te doen en mezelf veel druk oplegde. Om mij heen zie ik ook zeer veel human doings. Ik wil graag doorgaan met doen — want dat zit in me — maar dan wel in goede balans door ook te zijn.</p>
      <blockquote>We zijn tenslotte human beings en geen human doings. Just do-be it!</blockquote>
    `
  },

  {
  id: "ondernemerszin",
    title: "Ondernemerszin = passie",
    date: "28 okt 2012",
    readTime: "2 min",
    cats: ["Com-Firm", "Com-Passie"],
    excerpt: "Mijn basisopleiding fotografie afgerond. Met het woord ondernemerszin kon ik het meest — gerelateerd aan de bouwreis in Kaapstad.",
    img: "ondernemerszin",
    content: `
      <p class="post-intro">Recent heb ik mijn basisopleiding fotografie aan de Fotovakschool succesvol afgerond. Met het woord ondernemerszin kon ik het meest — al snel relateerde ik dat aan mijn gaafste avontuur van 2012: de bouwreis naar Kaapstad.</p>
      <p>Op mijn eindopdracht-foto staat Peter Postema, initiatiefnemer van de bouwreis. Zelf heeft hij jaren in Kaapstad gewoond en liep al lang met de gedachte om actief bij te dragen aan de toekomst van kinderen in de townships. Peter is directeur van Global Project Performance en geeft o.a. PRINCE2 opleidingen. Dit jaar bood hij cursisten aan om PRINCE2 in praktijk te brengen: als project een school renoveren in Philippi. Zijn droom werd werkelijkheid.</p>
      <h3>Ondernemerszin = passie</h3>
      <p>Tijdens het renoveren liep Peter op een dag in het zwart — ik vond dat iets te sober. Met de schilderskwast in de hand schilderde ik op zijn jas een hart en op de achterkant een smiley. Typisch ondernemerszin: initiatief nemen, humor inbrengen, verbinding maken.</p>
      <p>Ondernemerszin is voor mij synoniem aan passie. Het is de drive om iets te willen betekenen — voor je klanten, voor je omgeving, voor mensen aan de andere kant van de wereld. Of dat nu een digitaal project is bij Philips of een schoolrenovatie in een township.</p>
      <blockquote>Ondernemerszin is niet het verlangen naar winst. Het is het verlangen naar betekenis.</blockquote>
    `
  },

  {
  id: "tilburg",
    title: "Digital @ Tilburg University",
    date: "2012",
    readTime: "1 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Digitale projecten voor Tilburg University als onderdeel van mijn werk in het hoger onderwijs.",
    img: "econtrack",
    content: `
      <p class="post-intro">Digitale projecten voor Tilburg University — onderdeel van een mooie periode met meerdere projecten in het hoger onderwijs.</p>
      <p>Het hoger onderwijs is een bijzondere sector om in te werken. Academici hebben sterke meningen, processen zijn lang, maar de inhoud is altijd boeiend. En de campussen zijn geweldig om te werken.</p>
      <p>Bij Tilburg University hielp ik met de digitale communicatiestrategie en de implementatie van nieuwe online tools. Van CMS tot social media, van student portals tot alumni platforms.</p>
      <blockquote>Kennis delen is de kern van onderwijs. Digitale tools maken dat delen oneindig schaalbaar.</blockquote>
    `
  },

  {
  id: "saxion",
    title: "Gastcollege bij Saxion",
    date: "2012",
    readTime: "1 min",
    cats: ["Com-Firm"],
    excerpt: "Gastcollege voor communicatiestudenten bij Saxion Hogeschool over digitale marketing en projectmanagement.",
    img: "saxion",
    content: `
      <p class="post-intro">Gastcollege voor communicatiestudenten bij Saxion Hogeschool over digitale marketing en projectmanagement.</p>
      <p>Saxion in Apeldoorn — vlakbij mijn eigen deur. Het gastcollege draaide om de vraag: hoe ziet een dag in het leven van een Digital Project Manager eruit? En wat verwacht de arbeidsmarkt van jullie?</p>
      <p>De studenten waren betrokken, stelden goede vragen en hadden al verrassend veel praktijkkennis. Het gesprek ging alle kanten op — van SEO tot agile werken, van personal branding tot werk-privébalans.</p>
      <p>Ik kom altijd energieker terug van gastcolleges dan ik er heen ga. De frisse energie van studenten die nog alles voor zich hebben is aanstekelijk.</p>
      <blockquote>De beste manier om iets te leren is het uit te leggen aan iemand anders. Gastcolleges houden mij scherp.</blockquote>
    `
  },

  {
  id: "bouwreiskaapstad",
    title: "Een onvergetelijke bouwreis in Kaapstad",
    date: "9 mei 2012",
    readTime: "7 min",
    cats: ["Com-Passie"],
    excerpt: "16 mensen met verschillende achtergronden hebben samen met SASDI en Philippi laten zien wat synergie en samenwerken is.",
    img: "bouwreiskaapstad",
    content: `
      <p class="post-intro">16 mensen tussen de 26 en 62 met totaal verschillende achtergronden hebben samen met de mensen van SASDI en Philippi laten zien wat synergie en samenwerken is.</p>
      <p>Daar zit ik dan weer in mijn werkkamer vaag te staren naar mijn beeldscherm. Met mijn gedachten zit ik in Kaapstad. Ik zie de lieve kindjes van Philippi en de townships voor me, ik denk aan de mooie gesprekken met bijzondere mensen, de ontelbare lachmomenten en de goede samenwerking. De tijd in Kaapstad was bijzonder, indrukwekkend, emotioneel en onvergetelijk.</p>
      <h3>Maandag: Actie!</h3>
      <p>Maandagochtend reden we vanuit ons hotel naar de arme farming community Philippi. Twee totaal verschillende werelden en toch zo dicht bij elkaar. Bij Philippi werden we opgewacht door een bijzondere vrouw, Helen. Zij is de principal van Philippi Children's Centre en woont op het terrein van de school. Helen werkte eerst bij een rijke private school, maar haar hart is zodanig groot dat zij arme kindjes wilde gaan helpen.</p>
      <h3>De week in Philippi</h3>
      <p>Een week lang schilderen, vloeren leggen, ramen en deuren plaatsen, een speeltuin bouwen en de bibliotheek inrichten. Elke dag hard werken in de warmte, 's avonds samenkomsten met de groep vol humor en verbinding.</p>
      <p>De kindjes van Philippi waren de mooiste motivatie. Met grote ogen keken ze toe hoe hun school langzaam veranderde. Hun lachjes waren het mooiste loon dat je je voor kunt stellen.</p>
      <h3>Het resultaat</h3>
      <p>We hebben meer dan <strong>15.000 Euro</strong> opgehaald en een school getransformeerd. Nieuwe vloeren, frisse muren, nieuwe ramen, een speeltuin, een bibliotheek — en bovenal: verbinding tussen 16 mensen die elkaar daarvoor niet kenden.</p>
      <blockquote>Deze ervaring is lastig in woord en beeld uit te drukken. Het was een prachtig voorbeeld van in het "nu" leven.</blockquote>
    `
  },

  {
  id: "cheetas",
    title: "Cheeta's, Wailers, Capetown en (samen)werken",
    date: "1 mei 2012",
    readTime: "3 min",
    cats: ["Com-Passie"],
    excerpt: "Bijzondere ontmoeting met The Wailers, wandelen met een cheeta en samenwerken aan het Philippi Children's Centre.",
    img: "cheetas",
    content: `
      <p class="post-intro">Molweni (Xhosa voor hallo) from Capetown. Wat ik de afgelopen dagen heb meegemaakt, ga ik nooit meer meemaken.</p>
      <p>Heb je dat ook wel eens gehad dat je op safari gaat en het zo hard regent dat het alarm van de Landcruiser afgaat waardoor alle dieren vluchten — behalve de cheeta's want die vonden omsingelen wel een goed plan? En dan vervolgens reggaemannen uit Jamaica rond zien lopen en hen 's avonds een besloten concert zien geven aan het personeel van wildreservaat Inverdoorn?</p>
      <p>Dit was nog maar de eerste dag van mijn tijd in Kaapstad. Deze beste reggaemannen waren niemand minder dan <strong>The Wailers</strong> met de legendarische Aston "Family Man" Barret, verantwoordelijk voor alle basslines van Bob Marley! Ze speelden o.a. Redemption Song en ook mijn verzoek voor No Woman No Cry. De volgende dag gaven ze een benefietconcert voor de bescherming van neushoorns.</p>
      <h3>Safari & Velvet de Cheeta</h3>
      <p>De tweede dag: ochtendsafari. Door de mist zagen we het eerste uur geen dieren, maar uiteindelijk kwamen ze allemaal gezellig te voorschijn: Nico Neushoorn met zijn twee vrouwtjes, Henk en Hilde Hippo, Leo de Leeuw met zijn twee vrouwtjes, de familie Zebra, de family Eland. Daarna heb ik gezellig gewandeld met Velvet, een cheeta!</p>
      <h3>Samenwerken aan Philippi</h3>
      <p>Daarna begon het echte werk bij het Philippi Children's Centre. 16 mensen met totaal verschillende achtergronden, samen met de mensen van SASDI — dat is synergie in de zuiverste vorm. Meer hierover in mijn volgende blog!</p>
      <blockquote>Capetown is een stad vol contrasten: prachtige natuur, schrijnende armoede en ongelooflijk inspirerende mensen. Een stad die je raakt.</blockquote>
    `
  },

  {
  id: "complimentendag",
    title: "......... Dag",
    date: "8 mrt 2012",
    readTime: "2 min",
    cats: ["Com-Passie"],
    excerpt: "Nationale Complimentendag, Internationale Vrouwendag en een top tien van de meest bijzondere dagjes. Ik pleit voor de Wonderdag!",
    img: "complimentendag",
    content: `
      <p class="post-intro">Vorige week donderdag was het Nationale Complimentendag. Vandaag Internationale Vrouwendag. En ik heb een top tien van de meest bijzondere dagjes voor je.</p>
      <p>Toen ik voor het eerst hoorde van Nationale Complimentendag, was mijn eerste reactie: "Dat zal wel weer iets kunstmatigs uit de US zijn." Maar het blijkt geïnitieerd te zijn door een Hollander, Hans Poortvliet. Hij is er in 2003 mee begonnen in de overtuiging dat oprechte aandacht, erkenning en waardering in de toekomst het enige échte onderscheid zou zijn. Mijn complimenten voor dit initiatief!</p>
      <h3>Internationale Vrouwendag</h3>
      <p>Dat komt dan wel uit Amerika en bestaat al 104 jaar. Gefeliciteerd! Ik vind het nog steeds apart dat vrouwen in managementposities 14% minder verdienen. In Qatar zelfs 38%.</p>
      <h3>Top 10 meest bijzondere dagjes</h3>
      <p>Over het algemeen heb ik een allergie voor alle "...dag" en "week van…". Na wat gegoogle vond ik een mooie lijst. Mijn top tien:</p>
      <p>21/2 Pannekoekendag · 28/2 Internationale Dag tegen RS · 25/4 Rode Hoedendag · 6/5 Anti-dieetdag · 12/5 Dag van het Aangespannen Paard · 24/6 Wereld UFO Dag · 13/8 Linkshandigendag · 2/9 Roodharigendag · 19/11 Internationale Mannendag én Wereld Toiletdag (twee voor de prijs van één!)</p>
      <blockquote>Ik pleit voor een vervanging van donderdag naar <strong>wonderdag</strong>. Geeft een veel positievere lading!</blockquote>
      <p><strong>TIP:</strong> Deze week is het de week van het restaurant! Mannen en vrouwen: geef je partner een dik compliment en ga lekker uit eten.</p>
    `
  },

,

  {
  id: "kleinesprong",
    title: "Een kleine sprong, een groot hoogtepunt",
    date: "23 feb 2012",
    readTime: "3 min",
    cats: ["Com-Passie"],
    excerpt: "Een bijzondere en emotionele ontmoeting in de sportschool.",
    img: "kleine_sprong",
    content: `
      <p class="post-intro">Een bijzondere en emotionele ontmoeting in de sportschool.</p>
      <p>Vandaag was ik lekker aan het fietsen in de sportschool en ik keek ontspannen om me heen. Mijn oog viel op een jongen die heel geconcentreerd als een kangaroo sprongetjes aan het maken was. Een oefening die ik nog niet eerder had gezien. Hij liep er wat vreemd bij, maar hij intrigeerde mij.</p>
      <p>Bij zijn volgende oefening zette hij twee blokken neer met daarop een plank — qua hoogte ongeveer 25 centimeter. Een tijd lang stond hij er nerveus voor te bewegen. Hij haalde er iemand van de sportschool bij die zijn hand voor hem moest houden zodat hij niet naar voren zou vallen als de sprong mislukte.</p>
      <p>Wederom nerveus — en die kerel van de sportschool werd wat ongeduldig. Maar zijn focus was zo sterk dat hij zijn nerveusiteit overwon en op de plank sprong. Op het moment dat hij sprong riep hij zo hard "Yes!" dat een aantal mensen dachten dat hij een orgasme kreeg. De jongen liep euforisch, ontroerd en juichend heen en weer.</p>
      <p>Zelf kreeg ik een heel bijzonder gevoel. Bij zijn "Yes" moment voelde ik zijn euforie, zijn overwinning. Ik liep naar hem toe en sprak hem. Zijn naam was Sander en hij vertelde me dat hij 8 jaar geleden een herseninfact had gehad waardoor zijn linkerkant het niet meer deed. Die kleine sprong — dat was voor hem als Eddy Merckx die de Tour de France won.</p>
      <blockquote>Kleine dingen kunnen voor iemand anders een enorme overwinning zijn. Vergeet dat nooit.</blockquote>
    `
  },

  {
  id: "kaapstad3",
    title: "3e Com-Passie doel in Kaapstad",
    date: "20 feb 2012",
    readTime: "2 min",
    cats: ["Com-Passie"],
    excerpt: "Voor SASDI gaan we het Philippi Children's Center renoveren in een van de armste townships van Kaapstad.",
    img: "kaapstad3",
    content: `
      <p class="post-intro">Vorige week had ik een echt 2-vliegen-in-1-klap-moment: ik was aan het nadenken over mijn volgende Com-Passie doel en was op zoek naar een PRINCE2 training.</p>
      <p>Recent zag ik een internet project waarvoor ik geen PRINCE2 certificaat had. Teleurstellend, maar besloot het nu te halen. Bij Global Project Performance (GPP) zag ik dat ze een Bouwreis naar Kaapstad organiseren, waarbij ze gelijk PRINCE2 toepassen. Na een gesprek met directeur Peter Postema zat ik vrijdagavond al bij de groep deelnemers in Utrecht.</p>
      <p>Na goed overleg met het thuisfront heb ik de knoop doorgehakt: na de Tokyo marathon en de Alpe d'Huzes wordt dit mijn derde uitdaging! <em>(UPDATE: op vrijdag de 13e kreeg ik de uitslag dat ik voor PRINCE2 was geslaagd!)</em></p>
      <h3>Het doel</h3>
      <p>Voor SASDI (Southern Africa Sustainable Development Initiative) gaan we van 28 april tot 6 mei in een van de armste townships van Kaapstad het huidige Philippi Children's Center renoveren. Dit schooltje biedt opvang en onderwijs aan 200 arme kinderen van 2 t/m 6 jaar oud. Ze zijn volledig afhankelijk van liefdadigheid.</p>
      <p>De renovatie houdt in: schilderen, het plaatsen van nieuwe ramen en deuren, het leggen van vloertegels, het bouwen van een bibliotheek, het aanleggen van een speeltuin en het voorzien van het schooltje van nieuwe meubels.</p>
      <blockquote>Naast de werkzaamheden beogen we ook nog 15.000 euro op te halen. Elke euro is welkom!</blockquote>
    `
  },

  {
  id: "han",
    title: "Digital @ Hogeschool van Arnhem en Nijmegen",
    date: "2011",
    readTime: "1 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Digitale transformatie projecten voor de HAN als onderdeel van mijn werk in het hoger onderwijs.",
    img: "han",
    content: `
      <p class="post-intro">Digitale transformatie projecten voor de Hogeschool van Arnhem en Nijmegen (HAN).</p>
      <p>De HAN was een van de vroege projecten in mijn hoger onderwijs portfolio. Grote organisatie, veel stakeholders, complexe besluitvorming — maar ook veel enthousiaste mensen die écht het verschil wilden maken voor hun studenten.</p>
      <p>Naast de projecten gaf ik ook een aantal gastcolleges voor communicatiestudenten. Die interactie met studenten gaf me altijd energie — hun frisse blik en kritische vragen houden je scherp.</p>
      <blockquote>Studenten stellen de beste vragen. Niet omdat ze alles weten, maar omdat ze nog niet bang zijn om iets niet te weten.</blockquote>
    `
  },

  {
  id: "alpedhuzedag",
    title: "Alpe d'Huzes - Een onvergetelijke dag",
    date: "13 jun 2011",
    readTime: "6 min",
    cats: ["Com-Passie"],
    excerpt: "Wat was 9 juni een onvergetelijke dag! De dag van de Alpe d'HuZes!",
    img: "ad6_ray_paul",
    content: `
      <p class="post-intro">Na maanden van training, dagen van spanning en uren van inspanning, waren de laatste dagen vooral weer ontspanning. Wat was 9 juni een onvergetelijke dag!</p>
      <p>Voor drie uur waren we al wakker. Na het ontbijt reden Raymond en ik om 3:15 richting de start. Het was nog donker en alle auto's die ons passeerden hadden een Nederlands nummerbord.</p>
      <h3>De start</h3>
      <p>Bij de start in Bourg d'Oisans werden we opgesteld in vak 2. Om 4:30 werden er vuurpijlen afgestoken en was de start een feit. 10 minuten later kwamen ook wij in beweging. Naast ons fietste Gertjan Kunnen, een 120 kg wegende kerel met een heerlijke dosis humor — hij zorgde ervoor dat mensen langs de kant die niets zeiden, alsnog begonnen te zingen of te schreeuwen.</p>
      <h3>De 1e beklimming</h3>
      <p>Voor bocht 21 begint de klim met een stijgingspercentage van 10,4%. Omdat het donker was, zag je de steilheid niet — een psychologisch voordeel. Met muziek van Survivor, U2 en Abba fietste ik de eerste beklimming erop.</p>
      <p>Bij iedere beklimming hadden we supporters langs de kant. Mijn ouders en vrienden Igor en Bas stonden op verschillende punten te juichen. Kippenvel bij elke aanmoediging!</p>
      <h3>6 klimmingen later</h3>
      <p>Na de zesde beklimming was de voldoening overweldigend. We hebben ons doel van 6.000 Euro ruimschoots overschreden en waren met <strong>6 beklimmingen</strong> klaar. Onvergetelijk!</p>
      <blockquote>Wat een bijzondere dag. Wat een bijzondere mensen. Wat een bijzondere berg. Tot volgend jaar!</blockquote>
    `
  },

  {
  id: "alpedhuzesfinal",
    title: "Alpe d'Huzes - The final countdown",
    date: "8 jun 2011",
    readTime: "1 min",
    cats: ["Com-Passie"],
    excerpt: "Eerst waren het maanden, toen weken, toen dagen en nu nog slechts uren. Morgenvroeg om half 5 mogen we aan de bak.",
    img: "opgevenisgeenoptie",
    content: `
      <p class="post-intro">Eerst waren het maanden, toen weken, toen dagen en nu nog slechts uren. Morgenvroeg om half 5 mogen we aan de bak.</p>
      <p>We verblijven in le Velo Jaune, een B&B gerund door een Engels stel, Lynne en Alan, met een passie voor de wielersport. Naast ons: drie deelnemers uit Castricum en drie motormuizen. 's Avonds heerlijke gerechten — lasagne en boeuf bourguignion. Het rustige Engelse stel keek elkaar veelvuldig aan toen de Hollanders weer in een deuk lagen.</p>
      <p>Het donker is nog aanwezig om half vijf, maar in de duisternis zal er een lichtslang ontstaan van al deze mensen die deze beroemde berg gaan bedwingen. Naast de kleine lichtjes horen we het geluid van vogels en zwoegende mensen. En al snel ook de geur van zweet. Tranen zullen er ook heel veel gaan vallen.</p>
      <p>Ik zie er als een berg tegenop, maar kijk er ook vooral naar uit. Afgelopen maandag voor het eerst kennisgemaakt met de Alpe d'Huez. Zwaar, maar de voldoening boven was geweldig.</p>
      <blockquote>Mijn vrouw en twee mannekes zijn thuis, maar zij zullen er met hun gedachten zeker bij zijn — al denk ik dat de kleinste maar aan één ding denkt. Morgen meer!</blockquote>
    `
  },

  {
  id: "alpedhuzes6x",
    title: "Alpe d'Huzes — 6x klimmen voor…",
    date: "23 mei 2011",
    readTime: "4 min",
    cats: ["Com-Passie"],
    excerpt: "Over 3 weken gaan 4.000 mensen de strijd aan met de Alpe d'Huez. 6 keer omhoog voor mensen die strijden tegen kanker.",
    img: "ad6_com-firm",
    content: `
      <p class="post-intro">Nog minder dan drie weken en dan gaan 4.000 mensen de strijd aan met de Alpe d'Huez. Een strijd die een dag heel zwaar zal zijn voor ons — maar niets voor de mensen die dag in dag uit strijden tegen kanker.</p>
      <p>Ik heb erg mijn best gedaan om mij zo goed mogelijk voor te bereiden. De komende weken doe ik nog een paar zware trainingen met Raymond en hopelijk volgen er nog mooie donaties om ons doel van 6.000 euro te halen.</p>
      <h3>6 klimmingen, 6 opdrachten</h3>
      <p>Ik heb besloten om voor iedere keer dat ik omhoog ga, de beklimming aan iemand op te dragen:</p>
      <p><strong>1e klim — Mevrouw Tollenaar:</strong> In mijn studententijd werkte ik bij de familie Tollenaar. Op een dag kwam het nieuws dat mevrouw Tollenaar borstkanker had. Ze overleed. Een schat van een mens. Dit was voor mij de eerste keer dat ik met kanker te maken kreeg.</p>
      <p><strong>2e t/m 6e klim:</strong> Opgedragen aan andere bijzondere mensen in mijn leven die te maken hebben of hadden met kanker — familieleden, vrienden, bekenden. Hun strijd geeft mij de kracht om door te gaan als het zwaar wordt op de berg.</p>
      <blockquote>5 juni vertrekken we richting Frankrijk. 9 juni om half vijf 's ochtends beginnen we. Het gaat echt gebeuren!</blockquote>
    `
  },

  {
  id: "alpedhuzes",
    title: "Alpe d'Huzes - Mijn verhaal",
    date: "10 jan 2011",
    readTime: "2 min",
    cats: ["Com-Passie"],
    excerpt: "Door mee te doen aan dit uitdagende evenement hoop ik een bijdrage te kunnen leveren aan de strijd tegen kanker.",
    img: "ad6_indurain",
    content: `
      <p class="post-intro">Op de eerste deelnemersbijeenkomst werd ik tot tranen geroerd bij het horen van de vele emotionele verhalen, maar ook de krachtige en inspirerende woorden. Wat een helden!</p>
      <p>Door mee te doen aan dit uitdagende evenement hoop ik een bijdrage te kunnen leveren aan de strijd tegen kanker en een gebaar te maken naar al die mensen en hun families die met deze verschrikkelijke ziekte te maken hebben.</p>
      <h3>Com-Passie</h3>
      <p>1 januari 2009 ben ik begonnen aan een nieuw avontuur: zelfstandig ondernemer. Als nevenactiviteit wil ik onder de naam Com-Passie 1 keer per jaar een grote sportieve uitdaging aangaan voor een goed doel. 28 februari 2010 deed ik de eerste: de Tokyo marathon voor Stichting Opkikker.</p>
      <h3>Wielrennen</h3>
      <p>Als 15-jarig pubertje begon ik met fietsen en reed ik 30 tot 100 km. De Hel van Wageningen, Veenendaal-Veenendaal en de Huchiestocht zijn ritten die ik me nog goed herinner. Mijn vader probeerde me altijd uit de wind te fietsen, maar eigenwijs als ik was, ging ik altijd voorop. Gevolg: pa mocht zoonlief de laatste kilometers duwen.</p>
      <blockquote>Naast de Alpe d'Huzes wil ik ook geld ophalen voor KWF Kankerbestrijding. Elke euro is een steun in de rug voor mensen die er elke dag tegenaan gaan.</blockquote>
    `
  },

  {
  id: "tokyo",
    title: "Tokyo Marathon #1",
    date: "1 mrt 2010",
    readTime: "4 min",
    cats: ["Marathons", "Com-Passie"],
    excerpt: "Yes! Na 18 weken intensief trainen en 7 kilo lichter heb ik na ruim 5,5 uur het mooiste woord van 2010 gezien: Finish!",
    img: "tokyo",
    content: `
      <p class="post-intro">Yes! Het is gelukt. Na 18 weken intensief trainen en afscheid te hebben genomen van zeven kilo lichaamsgewicht, heb ik na ruim 5,5 uur het mooiste woord van 2010 gezien: Finish!</p>
      <h3>De laatste dagen</h3>
      <p>De paar dagen voor de marathon nam de druk erg bij mij toe. De vliegreis, de jetlag en het acclimatiseren hakten er aardig in. Onze kleine reus besloot ook nog eens consequent wakker te worden op de Nederlandse tijd — elke nacht vier uur bij ons in bed stuiteren.</p>
      <h3>De laatste uren</h3>
      <p>De laatste nacht deed ik helemaal geen oog dicht en had ik lichte griep. Om 6:00 ging de wekker en na een douche en ontbijt ben ik met de metro naar de start gegaan. Wat een mierenhoop van mensen. Gelukkig strak georganiseerd en eenvoudig te vinden.</p>
      <p>35.000 deelnemers aan de start — waaronder Haile Gebrselassie. Zelf had ik me aangemeld voor het goede doel Stichting Opkikker, die ernstig zieke kinderen een onvergetelijke dag bezorgt.</p>
      <h3>De marathon</h3>
      <p>De eerste 20 km gingen voorspoedig. Tokyo is een geweldige stad om een marathon in te lopen — overal enthousiaste mensen, mooie wijken en gebouwen. Bij 25 km begon de slijtageslag. Toch sleepte ik mezelf naar de finish in <strong>5:33</strong>. De finish was het mooiste woord van 2010!</p>
      <blockquote>Ik had me aangemeld voor het goede doel Stichting Opkikker — die ernstig zieke kinderen een onvergetelijke dag bezorgt. Dat geeft extra motivatie om door te gaan als het zwaar wordt.</blockquote>
    `
  },

  // ── BATCH 3: KAAPSTAD, ALPE D'HUZES, GAVE DINGEN DOEN, ZWITSAL & VROEG ────,

  {
  id: "marcomautomotive",
    title: "MarCom Automotive Center of Expertise",
    date: "2009",
    readTime: "1 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Een van de eerste projecten na de start van Com-Firm: marketing en communicatie voor de automotive sector.",
    img: "ace",
    content: `
      <p class="post-intro">Een van de eerste projecten na de start van Com-Firm: marketing en communicatie consultancy voor de automotive sector.</p>
      <p>Na mijn jaren bij Mercedes-Benz en Chrysler had ik een stevige basis in de automotive wereld opgebouwd. Het was dan ook logisch dat een van mijn eerste klanten als zelfstandige uit die branche kwam.</p>
      <p>Als MarCom consultant hielp ik dealers en importeurs met hun digitale communicatie, online marketing en klantcommunicatie. De branche was op dat moment volop in transitie — van print naar digitaal, van dealer-push naar klant-pull.</p>
      <blockquote>De automotive sector leerde me dat verandering altijd sneller gaat dan mensen verwachten — en altijd langzamer dan technologen hopen.</blockquote>
    `
  },

  {
  id: "prenatal",
    title: "Digital @ Prenatal",
    date: "2009",
    readTime: "1 min",
    cats: ["Com-Firm", "Projecten"],
    excerpt: "Een van de eerste opdrachten van Com-Firm: digitale communicatie voor Prenatal.",
    img: "prenatal",
    content: `
      <p class="post-intro">Een van de eerste opdrachten van Com-Firm: digitale communicatie en online marketing voor Prenatal.</p>
      <p>Januari 2009, eerste week als zelfstandige. Prenatal was een van de eerste klanten. Toeval of niet — ik was zelf net vader geworden en wist als geen ander wat jonge ouders bezighield.</p>
      <p>Het project draaide om de verbetering van de online aanwezigheid en klantcommunicatie. Website-optimalisatie, nieuwsbrieven, sociale media — in 2009 nog een relatief nieuw terrein voor veel retailers.</p>
      <blockquote>Mijn eerste klant als zelfstandige. Altijd een bijzonder plekje in mijn hart.</blockquote>
    `
  },

  {
  id: "mercedes",
    title: "Digitale transformatie bij Mercedes-Benz & Chrysler",
    date: "31 dec 2008",
    readTime: "2 min",
    cats: ["Com-Firm"],
    excerpt: "Ruim 3,5 jaar verantwoordelijk voor de aansturing van digitale transformatie projecten bij Mercedes-Benz en Chrysler.",
    img: "mercedes",
    content: `
      <p class="post-intro">Ruim 3,5 jaar lang ben ik binnen Mercedes-Benz en Chrysler verantwoordelijk geweest voor de aansturing van gave en gevarieerde digitale transformatie projecten.</p>
      <p>Een prachtig speelveld met vele stakeholders: verschillende internet- en reclamebureaus, de importeur, het dealernetwerk en de hoofdkantoren. Met aan de ene kant de Amerikanen met Chrysler, Jeep en Dodge en aan de andere kant de Duitsers met smart, Mercedes-Benz en Maybach. Én Aftersales en Bedrijfswagens.</p>
      <h3>Mercedes-Benz.nl</h3>
      <p>Eind 2007 migreerde www.mercedes-benz.nl (ruim 4.500 pagina's) naar een nieuw content management systeem. In mei 2008 werd de site, voorzien van een volledig nieuw design, opnieuw gelanceerd. Kort daarop werden ook alle dealersites uitgerold. Nederland was daarmee het eerste land wereldwijd waar de dealersites geheel in lijn zijn met de corporate huisstijl.</p>
      <h3>SterOccasion, smart en online marketing</h3>
      <p>In 2006 ging steroccasion.nl live en werd deze site door Autoweek uitgeroepen tot beste occasionsite. Voor smart volgde kort daarop smartforsure.nl. Begin 2008 kreeg smart.nl een geheel nieuw design. Op het terrein van online marketing werden verschillende search-, display- en e-mailcampagnes opgezet en geoptimaliseerd.</p>
      <blockquote>De combinatie van de Amerikaanse drive en de Duitse precisie maakte dit tot een unieke en leerzame omgeving. Eind 2008 besloot ik de sprong te wagen en voor mezelf te beginnen: Com-Firm.</blockquote>
    `
  },

  {
  id: "aanleidingcompassie",
    title: "De aanleiding van Com-Passie",
    date: "6 dec 2008",
    readTime: "1 min",
    cats: ["Com-Passie"],
    excerpt: "Mijn eerste uitdaging: de beklimming van de 5.895 meter hoge Kilimanjaro, Afrika's hoogste berg.",
    img: "aanleidingcompassie",
    content: `
      <p class="post-intro">Mijn eerste uitdaging vond plaats in 2003: de beklimming van de 5.895 meter hoge Kilimanjaro, Afrika's hoogste berg.</p>
      <p>Met enkele Tanzanianen en de Zweedse Viking Jan klommen we via de Machame-route in vier dagen naar de top. Het zwaarst was de laatste dag. Omstreeks middernacht begonnen we aan de laatste kilometer. Kort na zonsopkomst haalden we de top — een prachtig uitzicht. Na 16 uur waren we terug op 3.200 meter, gebroken maar voldaan.</p>
      <p>Het ultieme genot was een warm voetenbadje, waar Jan zijn grote Vikingvoeten al uitgebreid in had gewassen. En dat op eerste kerstdag!</p>
      <h3>Nieuwe uitdagingen</h3>
      <p>Na de beklimming van de Kilimanjaro ontstond het idee om meer van deze uitdagingen aan te gaan. Door dit te koppelen aan een goed doel, is Com-Passie ontstaan als nevenactiviteit van Com-Firm.</p>
      <blockquote>Elke uitdaging leert je iets over jezelf. De Kilimanjaro leerde me dat grenzen verder liggen dan je denkt — als je maar één stap voor de andere blijft zetten.</blockquote>
    `
  },

  // ── BATCH 4: LAATSTE POSTS ──────────────────────────────────────────────────,

  {
  id: "baanbaan",
    title: "Mijn eerste baan bij Baan",
    date: "1 okt 1999",
    readTime: "2 min",
    cats: ["Com-Firm"],
    excerpt: "In turbulente tijden van reorganisaties en overnames begon ik mijn eerste zelfgecreëerde baan als Coordinator Internal Communication.",
    img: "baanbaan",
    content: `
      <p class="post-intro">In turbulente tijden van reorganisaties en overnames begon ik mijn eerste zelfgecreëerde baan als Coordinator Internal Communication binnen Baan Global Support EMEA — om uiteindelijk wereldwijd eindverantwoordelijk te worden voor alle internetactiviteiten.</p>
      <p>In 2000 realiseerde ik voor de 600 man grote Europese support organisatie van Baan een intranet. Alle mogelijke informatie werd daar centraal gedeeld. In alle landen en afdelingen werden mensen getraind om hun informatie te delen.</p>
      <h3>Van lokaal naar globaal</h3>
      <p>In 2001 werd dit initiatief wereldwijd uitgerold. In datzelfde jaar maakte ook het eerste content management systeem zijn opmars. Met een team uit India en Amerika werd dit CMS geïmplementeerd.</p>
      <p>In 2002 was de opdracht om voor heel Baan de internetstrategie en -organisatie neer te zetten. De onstane wildgroei werd geconsolideerd naar één centrale content management omgeving — flinke besparingen, wereldwijd een consistente look and feel en meer efficiency.</p>
      <h3>SSA Global & Mercedes-Benz</h3>
      <p>In 2003 nam SSA Global naast Baan verschillende IT-bedrijven over. Als Global Internet Manager was ik verantwoordelijk voor de Going Global strategie en projecten voor de geacquireerde bedrijven. Een geweldige leerervaring die me klaarstoomde voor de volgende stap: Mercedes-Benz.</p>
      <blockquote>Baan was voor mij de perfecte school: internationaal, dynamisch en altijd in beweging. De basis voor alles wat daarna kwam.</blockquote>
    `
  },

  {
  id: "downunder",
    title: "Down Under in 1997 — Australia Rules",
    date: "1997",
    readTime: "2 min",
    cats: ["Com-Passie"],
    excerpt: "In 1997 vertrok ik met een vriend voor een half jaar naar Australië. Een avontuur dat mijn blik op de wereld voorgoed veranderde.",
    img: "downunder",
    content: `
      <p class="post-intro">In 1997 vertrok ik met mijn vriend Raymond voor een half jaar naar Australië. Een avontuur dat mijn blik op de wereld voorgoed veranderde.</p>
      <p>We waren jong, onervaren en vol energie. Met een backpack en een one-way ticket vlogen we naar Sydney. Geen plan, geen reserveringen — alleen de wil om de wereld te ontdekken.</p>
      <p>Op doorreis via Singapore bezochten we een orang-oetan reservaat. Die ontmoeting plantte een zaadje dat jaren later zou ontkiemen in mijn betrokkenheid bij natuur en dieren.</p>
      <p>In Australië werkten we op boerderijen, reisden we langs de oostkust, ontmoetten we mensen uit de hele wereld. Australiërs zijn direct, hartelijk en nuchter. Eigenlijk best Nederlands.</p>
      <p>Die reis leerde me dat de wereld veel groter en veel mooier is dan je vanuit Apeldoorn kunt zien. En dat je af en toe gewoon moet springen — ook als je de landing nog niet ziet.</p>
      <blockquote>Australia rules. En de wereld ook.</blockquote>
    `
  },


];

export default POSTS;
