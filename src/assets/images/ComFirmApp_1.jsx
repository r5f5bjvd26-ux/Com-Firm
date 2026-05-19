/**
 * Com-Firm — Complete React App
 * Brand: Navy #1B2A4A · Orange #E8620A
 * Fonts: Inter (body) · Playfair Display (headings)
 * All 12 blog posts migrated with full copy + real Wix CDN images
 */

import { useState, useEffect, useRef } from "react";

// ─── BRAND TOKENS ─────────────────────────────────────────────────────────────
const C = {
  navy:    "#1B2A4A",
  navyDk:  "#111d33",
  navyMd:  "#253660",
  navyLt:  "#e8edf5",
  navyXl:  "#f2f5fa",
  orange:  "#E8620A",
  orangeDk:"#c4510a",
  orangeLt:"#fdf0e8",
  white:   "#ffffff",
  gray:    "#f7f8fa",
  border:  "#dde3ee",
  text:    "#1B2A4A",
  textSm:  "#4a5878",
  textXs:  "#7a88a8",
};

// ─── IMAGE URLS ────────────────────────────────────────────────────────────────
const IMG = {
  paul:        "https://static.wixstatic.com/media/f53d09_2cb4e33e16124a7ab48ab2f03266e3f9~mv2.jpg/v1/crop/x_81,y_0,w_1039,h_1600/fill/w_600,h_920,al_c,q_85/",
  valencia:    "https://static.wixstatic.com/media/f53d09_3a9fa11aad8f419185568eb97dbf99dc~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85/",
  marathon2:   "https://static.wixstatic.com/media/f53d09_472685873d2b4aae8914a774feed0742~mv2.jpg/v1/fill/w_900,h_500,fp_0.50_0.50,q_85/",
  agile:       "https://static.wixstatic.com/media/f53d09_27ba68b9f47f405cb5ec42e941021ff8~mv2.jpeg/v1/fill/w_900,h_500,fp_0.50_0.50,q_85/",
  ghent:       "https://static.wixstatic.com/media/f53d09_8f9e8bf92db44a99b1e462c7963814d8~mv2.jpg/v1/fill/w_800,h_420,al_c,q_85/",
  jaar15:      "https://static.wixstatic.com/media/f53d09_060503ce9eac4deb8a5bf41aa5763d25~mv2.jpg/v1/fill/w_900,h_440,al_c,q_85/",
  marathons:   "https://static.wixstatic.com/media/f53d09_7f021145794943f1a2cfa116e15cb0ec~mv2.png/v1/fill/w_900,h_700,al_c,q_85/",
  heineken:    "https://static.wixstatic.com/media/f53d09_f5b7f2ccd53246b58b4a8e26556eedd1~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85/",
  nike:        "https://static.wixstatic.com/media/f53d09_06b05195eebc4eb89ef610c3b7e933cf~mv2.jpg/v1/fill/w_900,h_460,al_c,q_85/",
  nikeTeam:    "https://static.wixstatic.com/media/f53d09_a1d9e1f4fc254516ba730a37f030e6de~mv2.jpg/v1/fill/w_700,h_480,al_c,q_85/",
  bagan1:      "https://static.wixstatic.com/media/f53d09_21edef1281a042639f2ed8aa98a277e1~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/",
  bagan2:      "https://static.wixstatic.com/media/f53d09_7ac57b5cb04a432cb1d6564620cf880f~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85/",
  bagan3:      "https://static.wixstatic.com/media/f53d09_2c1a0544a6a04ab9af4a63f8cc4ada01~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/",
  philips:     "https://static.wixstatic.com/media/f53d09_bffd254748f24720aa0a80757fb52186~mv2.jpg/v1/fill/w_700,h_480,al_c,q_85/",
  philipsEcom: "https://static.wixstatic.com/media/f53d09_1b2391ccd9de427981e5650480f879c4~mv2.jpg/v1/fill/w_900,h_460,al_c,q_85/",
  friesland:   "https://static.wixstatic.com/media/f53d09_07d82a8b76ee4fd88253d1b76352b89e~mv2.jpg/v1/fill/w_900,h_460,al_c,q_85/",
  bibian:      "https://static.wixstatic.com/media/f53d09_346fea10de374987996ae4ed438cf8d5~mv2.jpg/v1/fill/w_900,h_460,al_c,q_85/",
  dutchess:    "https://static.wixstatic.com/media/f53d09_b8c6b5b785814e4dac23a74174f597b7~mv2.png/v1/fill/w_900,h_440,al_c,q_85/",
  roparun:     "https://static.wixstatic.com/media/f53d09_d37ca3f27a9b42ee99c6e48321054fe0~mv2.jpg/v1/fill/w_900,h_680,al_c,q_85/",
  roparun2:    "https://static.wixstatic.com/media/f53d09_ea2fc5786c1b4f899d7e4cf39b11213f~mv2.jpg/v1/fill/w_700,h_520,al_c,q_85/",
  roparunPre:  "https://static.wixstatic.com/media/f53d09_f5828892f12647e7ae1714fe57ec436e~mv2.png/v1/fill/w_900,h_460,al_c,q_85/",
};

// ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;1,500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  a { text-decoration: none; color: inherit; }
  body { font-family: 'Inter', sans-serif; background: ${C.gray}; color: ${C.text}; }
  img { max-width: 100%; display: block; }
  @keyframes fadeDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)}  to{opacity:1;transform:translateY(0)} }
  .serif { font-family: 'Playfair Display', serif; }
  .nav-link { font-size: 13px; font-weight: 500; color: rgba(255,255,255,.65); cursor: pointer; padding: 6px 11px; border-radius: 6px; transition: all .18s; letter-spacing: .01em; border-bottom: 2px solid transparent; }
  .nav-link:hover { color: #fff; background: rgba(255,255,255,.1); }
  .nav-link.active { color: #fff; background: rgba(232,98,10,.2); border-bottom-color: ${C.orange}; }
  .btn-primary { display: inline-block; padding: 10px 22px; background: ${C.orange}; color: #fff; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: .02em; border: none; border-radius: 6px; cursor: pointer; transition: all .18s; }
  .btn-primary:hover { background: ${C.orangeDk}; transform: translateY(-1px); }
  .btn-secondary { display: inline-block; padding: 9px 20px; background: transparent; color: ${C.navy}; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; border: 1.5px solid ${C.navy}; border-radius: 6px; cursor: pointer; transition: all .18s; }
  .btn-secondary:hover { background: ${C.navyLt}; }
  .btn-ghost-white { display: inline-block; padding: 8px 18px; background: transparent; color: #fff; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; border: 1.5px solid rgba(255,255,255,.35); border-radius: 6px; cursor: pointer; transition: all .18s; }
  .btn-ghost-white:hover { background: rgba(255,255,255,.1); }
  .card-hover { transition: transform .22s, box-shadow .22s; cursor: pointer; }
  .card-hover:hover { transform: translateY(-4px); }
  input, textarea { font-family: 'Inter', sans-serif; font-size: 13px; width: 100%; padding: 10px 13px; border: 1.5px solid ${C.border}; background: #fff; color: ${C.text}; outline: none; border-radius: 6px; transition: border-color .18s; }
  input:focus, textarea:focus { border-color: ${C.orange}; }
  @media (max-width: 720px) {
    .two-col, .three-col, .hero-grid { grid-template-columns: 1fr !important; }
    .hero-h1 { font-size: 32px !important; }
    .hide-sm { display: none !important; }
  }
`;

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function useInView(t = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: t });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
}
function Reveal({ children, delay = 0, style = {} }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(22px)", transition: `opacity .6s ${delay}s, transform .6s ${delay}s`, ...style }}>
      {children}
    </div>
  );
}
const Wrap = ({ children, max = 1100 }) => <div style={{ maxWidth: max, margin: "0 auto", padding: "0 24px" }}>{children}</div>;
const Eyebrow = ({ t, light }) => <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: light ? "rgba(255,255,255,.5)" : C.orange, marginBottom: 8 }}>{t}</p>;
const Rule = () => <div style={{ width: 32, height: 3, background: C.orange, borderRadius: 2, margin: "10px 0 18px" }} />;
const H2 = ({ children, light, size = 28 }) => <h2 className="serif" style={{ fontSize: size, fontWeight: 600, color: light ? "#fff" : C.navy, lineHeight: 1.2, letterSpacing: "-.01em", marginBottom: 12 }}>{children}</h2>;
const BodyP = ({ children, muted, style = {} }) => <p style={{ fontSize: 14, lineHeight: 1.85, color: muted ? C.textSm : C.textSm, marginBottom: 14, ...style }}>{children}</p>;

function Photo({ src, alt = "", ratio = "55%", style = {} }) {
  return (
    <div style={{ position: "relative", paddingBottom: ratio, overflow: "hidden", ...style }}>
      <img src={src} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

// ─── ALL BLOG POST DATA ────────────────────────────────────────────────────────
const ALL_POSTS = [
  {
    id: "2m", title: "2 marathons in 1 week", date: "9 nov 2025", readTime: "3 min",
    cats: ["Marathons"], excerpt: "In 1 week tijd 2 marathons op 2 continenten in 2 seizoenen: Dublin en Auckland.",
    img: IMG.marathon2, accent: C.orange,
  },
  {
    id: "agile", title: "Running the Agile Marathon", date: "9 jun 2024", readTime: "2 min",
    cats: ["English blogs", "Com-Firm"], excerpt: "Similarities between endurance racing and agile way of working.",
    img: IMG.agile, accent: C.navy,
  },
  {
    id: "15j", title: "15 jaar Focus, Flow & Fun", date: "29 mei 2024", readTime: "3 min",
    cats: ["Com-Firm"], excerpt: "15 jaar (en 150 dagen) samen werken en samen leven. Sub3 in Valencia!",
    img: IMG.jaar15, accent: C.orange,
  },
  {
    id: "marathons", title: "Marathons: tonnen aan memories", date: "6 mei 2024", readTime: "1 min",
    cats: ["Marathons"], excerpt: "Hardlopen is een rode draad in mijn leven geworden. Verrijkend en intensief.",
    img: IMG.marathons, accent: C.orange,
  },
  {
    id: "heineken", title: "Digital @ Heineken", date: "30 apr 2024", readTime: "2 min",
    cats: ["Com-Firm", "Projecten"], excerpt: "Digitaal b(r)ouwen aan de Heineken 'road to digital'.",
    img: IMG.heineken, accent: C.orange,
  },
  {
    id: "valencia", title: "Sub3 Valencia Marathon #16", date: "4 dec 2023", readTime: "3 min",
    cats: ["Marathons"], excerpt: "Na 5 pogingen is het me eindelijk gelukt: een marathon onder de 3 uur!",
    img: IMG.valencia, accent: C.orange,
  },
  {
    id: "nike", title: "Cybersecurity @ Nike", date: "31 jan 2022", readTime: "2 min",
    cats: ["Com-Firm", "Projecten"], excerpt: "Van mei 2018 tot februari 2022 voor Nike EMEA & APLA als Scrum Master en Programma Manager CIS.",
    img: IMG.nike, accent: C.navy,
  },
  {
    id: "bibian", title: "Verzamel herinneringen, geen bezittingen", date: "19 mei 2021", readTime: "1 min",
    cats: ["Com-Passie"], excerpt: "Bibian heeft laten zien wat doorzetten is, wat positivisme is en hoe belangrijk het is om te genieten van de kleine dingen.",
    img: IMG.bibian, accent: C.orange,
  },
  {
    id: "dutchess", title: "Four power women sailing the Atlantic Ocean", date: "27 nov 2020", readTime: "1 min",
    cats: ["Com-Passie", "English blogs"], excerpt: "My dear friend Bela Evers is rowing 3,000 miles across the Atlantic Ocean for charity!",
    img: IMG.dutchess, accent: C.navy,
  },
  {
    id: "roparun", title: "Roparun: Run, Bike, Fun van Paris naar Rotterdam", date: "13 jun 2019", readTime: "6 min",
    cats: ["Com-Passie"], excerpt: "In 50 uur tijd 536 kilometer hardgelopen, gefietst, gefeest en 31.000 Euro opgehaald. Team Awesome!",
    img: IMG.roparun, accent: C.orange,
  },
  {
    id: "roparunpre", title: "Voorbereidingen Roparun", date: "26 apr 2019", readTime: "2 min",
    cats: ["Com-Passie"], excerpt: "8 t/m 10 juni gaan 324 teams deelnemen aan de Roparun. Ik ben trots om deel uit te maken van het Nike Courage team.",
    img: IMG.roparunPre, accent: C.orange,
  },
  {
    id: "bagan", title: "Bagan Temple Marathon #9", date: "27 nov 2019", readTime: "6 min",
    cats: ["Marathons", "English blogs"], excerpt: "Running a marathon among the 2,000 sacred temples of Bagan in Myanmar!",
    img: IMG.bagan1, accent: C.orange,
  },
  {
    id: "friesland", title: "Digital @ FrieslandCampina", date: "1 feb 2018", readTime: "1 min",
    cats: ["Com-Firm", "Projecten"], excerpt: "Binnen FrieslandCampina mooie stappen gezet in de digitale transformatie voor melkveehouders.",
    img: IMG.friesland, accent: C.navy,
  },
  {
    id: "philipsecom", title: "eCommerce @ Philips", date: "11 jan 2017", readTime: "1 min",
    cats: ["Com-Firm", "Projecten"], excerpt: "Als Programma Manager eCommerce online shops van 14 landen gemigreerd naar SAP Hybris.",
    img: IMG.philipsEcom, accent: C.navy,
  },
];

const CATS = ["Alle blogs", "Com-Firm", "Projecten", "Com-Passie", "Marathons", "English blogs"];

// ─── NAV ──────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", page: "home" }, { label: "Over", page: "over" },
  { label: "Projecten", page: "projecten" }, { label: "Blog", page: "blog" },
  { label: "Contact", page: "contact" },
];
function Nav({ page, navigate }) {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: C.navy, animation: "fadeDown .5s ease" }}>
      <Wrap>
        <div style={{ height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => navigate("home")}>
            <div style={{ width: 34, height: 34, background: C.orange, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 600, color: "#fff", fontSize: 14 }}>CF</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-.01em" }}>Com-Firm</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,.45)", letterSpacing: ".12em", textTransform: "uppercase" }}>digitale transformatie</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            {NAV_LINKS.map(l => (
              <span key={l.page} className={`nav-link${page === l.page ? " active" : ""}`} onClick={() => navigate(l.page)}>{l.label}</span>
            ))}
          </div>
        </div>
      </Wrap>
    </nav>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ navigate }) {
  return (
    <footer style={{ background: C.navyDk, padding: "44px 24px 20px" }}>
      <Wrap>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,.08)", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Com-Firm</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", letterSpacing: ".06em" }}>Digitale Transformatie · Paul ten Donkelaar</div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            {NAV_LINKS.map(l => (
              <span key={l.page} style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,.45)", cursor: "pointer", transition: "color .18s" }}
                onMouseEnter={e => e.target.style.color = "#fff"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,.45)"}
                onClick={() => navigate(l.page)}>{l.label}</span>
            ))}
          </div>
          <div>
            <a href="mailto:paul@com-firm.com" style={{ fontSize: 12, color: C.orange, display: "block", marginBottom: 6, fontWeight: 500 }}>📧 paul@com-firm.com</a>
            <a href="https://www.linkedin.com/in/ptendonkelaar" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: C.orange, fontWeight: 500 }}>🔗 LinkedIn</a>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,.25)", fontWeight: 500 }}>© 2024 Com-Firm · Paul ten Donkelaar</p>
      </Wrap>
    </footer>
  );
}

// ─── BLOG POST SHELL ──────────────────────────────────────────────────────────
function PostShell({ id, navigate, children }) {
  const post = ALL_POSTS.find(p => p.id === id);
  const related = ALL_POSTS.filter(p => p.id !== id).slice(0, 4);
  return (
    <div style={{ paddingTop: 58 }}>
      <div style={{ position: "relative", height: 380, overflow: "hidden" }}>
        <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.45)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: post.accent }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: "0 24px 40px" }}>
          <div style={{ maxWidth: 800 }}>
            <button onClick={() => navigate("blog")} style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", color: "#fff", padding: "5px 12px", fontSize: 11, fontWeight: 500, letterSpacing: ".06em", cursor: "pointer", borderRadius: 4, marginBottom: 18, fontFamily: "'Inter',sans-serif" }}>← Terug naar blog</button>
            <h1 className="serif" style={{ fontSize: 38, fontWeight: 600, color: "#fff", lineHeight: 1.2, letterSpacing: "-.02em", marginBottom: 12, textShadow: "0 2px 12px rgba(0,0,0,.5)" }}>{post.title}</h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.7)", fontWeight: 500 }}>{post.date} · {post.readTime} lezen · Paul ten Donkelaar</p>
          </div>
        </div>
      </div>
      <div style={{ background: C.white, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 290px", gap: 56 }} className="two-col">
          <article style={{ fontSize: 15, lineHeight: 1.9, color: C.textSm }}>{children}</article>
          <aside className="hide-sm">
            <div style={{ position: "sticky", top: 76 }}>
              <div style={{ background: C.navyXl, border: `1px solid ${C.border}`, borderRadius: 10, padding: 20, marginBottom: 18 }}>
                <img src={IMG.paul} alt="Paul ten Donkelaar" style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", marginBottom: 12 }} />
                <p style={{ fontSize: 14, fontWeight: 600, color: C.navy, marginBottom: 4 }}>Paul ten Donkelaar</p>
                <p style={{ fontSize: 12, color: C.textSm, lineHeight: 1.6, marginBottom: 14 }}>Digital Project Manager, Scrum Master & marathonloper. 25+ jaar ervaring in digitale transformatie.</p>
                <a href="https://www.linkedin.com/in/ptendonkelaar" target="_blank" rel="noreferrer">
                  <button className="btn-secondary" style={{ width: "100%", fontSize: 12, textAlign: "center" }}>LinkedIn →</button>
                </a>
              </div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: C.textXs, marginBottom: 12 }}>Andere posts</p>
              {related.map(r => (
                <div key={r.id} style={{ display: "flex", gap: 10, marginBottom: 14, cursor: "pointer", paddingBottom: 14, borderBottom: `1px solid ${C.border}` }} onClick={() => navigate("post-" + r.id)}>
                  <img src={r.img} alt={r.title} style={{ width: 52, height: 38, objectFit: "cover", flexShrink: 0, borderRadius: 4 }} />
                  <div>
                    <p style={{ fontSize: 11, color: r.accent, fontWeight: 500, marginBottom: 2 }}>{r.date}</p>
                    <p style={{ fontSize: 12, lineHeight: 1.4, color: C.navy, fontWeight: 500 }}>{r.title}</p>
                  </div>
                </div>
              ))}
              <button className="btn-primary" style={{ width: "100%", marginTop: 8, textAlign: "center" }} onClick={() => navigate("contact")}>Samenwerken? →</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function AH3({ children }) { return <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 600, color: C.navy, margin: "28px 0 10px", letterSpacing: "-.01em" }}>{children}</h3>; }
function AP({ children, style = {} }) { return <p style={{ marginBottom: 16, ...style }}>{children}</p>; }
function AQ({ children, accent = C.orange }) { return <blockquote style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 18, margin: "20px 0", fontStyle: "italic", fontSize: 15, color: C.navy, fontFamily: "'Playfair Display',serif" }}>{children}</blockquote>; }

// ─── BLOG POST PAGES ──────────────────────────────────────────────────────────
function Post2M({ navigate }) {
  return (
    <PostShell id="2m" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>In 1 week tijd 2 marathons op 2 continenten in 2 seizoenen.</AP>
      <AP>Wat ben ik weer een levenservaring rijker. Ik zit hier op Dubai airport, het is 6:10 en ik heb net een onvergetelijke week achter de rug, waarin hardlopen een centrale rol had. Hardlopen is al een tijd mijn uitlaatklep en favoriete sport — met steeds weer een marathon als stok achter de deur om door weer en wind mezelf altijd te motiveren.</AP>
      <AH3>De aanloop</AH3>
      <AP>Met veel marathons stelde ik doelen. Mijn eerste marathon in Tokyo was puur uitlopen op karakter — 5:45. Vijf jaar later voor mijn 40e sub4 gehaald in Barcelona! En toen de ambitie voor sub3: Parijs, Berlijn, Boston, Rome, Apeldoorn, Antwerpen waren nodig om het uiteindelijk in Valencia voor elkaar te krijgen. Puta madre, wat een mijlpaal!!</AP>
      <AP>Dit jaar wilde ik de Midwinter, Praag en Dublin doen. Maar toen besloten we naar Bali te gaan — en bleek er ook een marathon te zijn. Voor Bidfood kreeg ik te horen dat ik mee mocht naar Nieuw-Zeeland. In mijn enthousiasme keek ik of er een marathon was. Bleek dat de Auckland marathon een paar dagen ná Dublin viel. Behalve vrouwlief en mijn boys verklaarde iedereen me voor gek. Maar ik schreef me in. Die kans kreeg ik nooit meer!</AP>
      <AH3>Dublin én Auckland</AH3>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.marathon2} alt="2 marathons in 1 week" ratio="46%" /></div>
      <AP>Fast forward zit ik hier nu met een grote glimlach dit stukje te typen. Het is gelukt: in 1 week tijd 2 marathons op 2 continenten in 2 seizoenen — een natte, winderige en koude Dublin herfst-marathon en een warme, zweterige en zonnige Auckland lente-marathon. Prestige zat hem hier niet in tijd, maar in gezond en voldaan de streep halen.</AP>
      <AH3>Passion & persistence</AH3>
      <AP>Later labelde ik deze prestatie als "passion & persistence". In Dublin zat de passie in de support — rijen dik werden de lopers toegejuicht door enthousiaste Ieren in alle soorten en maten. In Auckland was het vooral het prachtige uitzicht, het lopen over de Harbour Bridge en langs de Hauraki Golf uitkijkend op het Rangitoto eiland.</AP>
      <AP>De laatste 10 kilometer waren ontzettend slopend. Met 30 uur reistijd en 12 uur tijdverschil was de energie helemaal op. Puur op karakter doorgezet — om vervolgens eindelijk te kunnen ontspannen.</AP>
      <AQ>Dezelfde dag was ik nog getuige van echte passie: de Rugby league wedstrijd van de Kiwi's tegen Tonga. Kippenvel. Wat een passie er door dat stadion ging!</AQ>
    </PostShell>
  );
}

function PostAgile({ navigate }) {
  return (
    <PostShell id="agile" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>Similarities between endurance racing and agile way of working.</AP>
      <AP>This week at the regional Scrum Gathering in Ghent (#RSGGhent24), I had the pleasure of meeting many great and inspiring professionals. Earlier in March, I was in Ghent to run a marathon. The experience made me reflect on how running a marathon and embracing an agile way of working share intriguing similarities.</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.agile} alt="Running the Agile Marathon" ratio="46%" /></div>
      <AH3>Endurance and Long-Term Commitment</AH3>
      <AP>Just as running 26.2 miles demands physical endurance, the agile way of working requires mental and organizational stamina. Both endeavors are long-term commitments that necessitate sustained effort. Success is not achieved overnight; it's the result of consistent, disciplined action over an extended period.</AP>
      <AH3>Iterative Progress</AH3>
      <AP>Marathons and agile projects share a common philosophy of iterative progress. In a marathon, runners break down the race into manageable segments, focusing on one step at a time. Similarly, agile methodologies encourage incremental development and continuous delivery.</AP>
      <AH3>Flexibility and Adaptability</AH3>
      <AP>Marathon runners often encounter unexpected challenges, such as changing weather conditions or unforeseen obstacles. Likewise, agile teams embrace change and adaptability. They understand that project requirements may evolve, and flexibility is crucial for responding to new information.</AP>
      <AH3>Goal Setting and Planning</AH3>
      <AP>Both running a marathon and practicing agile methodologies involve meticulous goal setting and planning. Marathon runners set pace targets, hydration plans, and race strategies. Similarly, agile teams establish sprint goals and create a roadmap for project completion.</AP>
      <AH3>Continuous Improvement</AH3>
      <AP>Marathon runners are always seeking ways to enhance their performance. The agile methodology is rooted in continuous improvement, with regular retrospectives allowing teams to reflect on their processes and identify areas for enhancement.</AP>
      <AH3>Team Collaboration</AH3>
      <AP>Marathon relays showcase the significance of collaboration among runners. In the agile world, cross-functional teams work closely together, breaking down silos and fostering open communication. The success of both depends on the collective effort of the entire team.</AP>
      <AH3>Feedback Loops</AH3>
      <AP>Runners rely on feedback from their bodies to adjust pace and strategy. Similarly, agile teams thrive on quick feedback loops, with regular reviews helping them identify and address issues promptly.</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.ghent} alt="Scrum Gathering Ghent 2024" ratio="44%" /><p style={{ fontSize: 12, color: C.textXs, marginTop: 8, fontStyle: "italic", textAlign: "center" }}>Scrum Gathering Ghent 2024</p></div>
      <AQ accent={C.navy}>Just as a marathon runner conquers each mile with determination, agile teams navigate the complexities of projects with a commitment to delivering value incrementally and embracing change along the way.</AQ>
    </PostShell>
  );
}

function Post15j({ navigate }) {
  return (
    <PostShell id="15j" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>15 jaar (en 150 dagen) samen werken en samen leven. Live the life you love and love the life you live!</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.jaar15} alt="15 jaar Com-Firm" ratio="42%" /></div>
      <AH3>Back in time</AH3>
      <AP>Ik weet nog dat ik voor Mercedes-Benz in oktober 2008 in Kopenhagen zat. Op het vliegveld besloot ik om zelfstandig te gaan en verzon ik de naam Com-Firm. Dat betekende een mooie carrière bij een gaaf bedrijf inleveren voor volledige onzekerheid. 1 januari 2009 was dag no. 1. Ik was net vader, het banksaldo kleurde rood, het was hartje kredietcrisis en ik had nog geen concrete opdrachten. Goeie timing….</AP>
      <AH3>Nu</AH3>
      <AP>Ik kijk inmiddels een stuk grijzer maar vooral 15 jaar wijzer terug op een fantastische periode. Het was uitdagend en intensief, maar ik ben trots. Trots op mezelf, trots op mijn familie, trots op de mensen en teams waar ik mee heb samengewerkt. Trots op wat we samen hebben bereikt!</AP>
      <AH3>Samen werken vanuit Com-Firm</AH3>
      <AP>De afgelopen 15 jaar heb ik de lat flink hoog gelegd en mooie projecten succesvol afgerond bij bedrijven als Nike, Philips, FrieslandCampina en momenteel bij Heineken. Zoveel verschillende stakeholders, belangen, percepties, meningen, prioriteiten maar vooral goede ideeën, enthousiasme en energie van de mensen en teams waar ik mee samenwerkte.</AP>
      <AH3>Samen leven vanuit Com-Passie</AH3>
      <AP>Privé leren om een goede vader te zijn voor mijn twee geweldige boys. De relatie met mijn soulmate goed houden. Ja, ik wilde ook uitdagingen aangaan voor goede doelen — van geld ophalen door marathons tot scholen opknappen in Senegal en Zuid-Afrika. Sinds begin 2023 tuinier en klus ik samen met mijn nieuwe vriend Paul, die het down-syndroom heeft. Samen leren! Samen leven!</AP>
      <AH3>Sub3 Valencia</AH3>
      <AP>Parijs 3:10, Boston en Berlijn helaas niet, Rome 3:10, Antwerpen 3:07 als generale repetitie. Met nog 6 weken voorbereiden verloor ik nog een paar kilo, deed ik extra krachtoefeningen, passeerde ik de 10.000 trainingskilometers (in 5 jaar) en richtte ik alle pijlers op Valencia.</AP>
      <AP>Sunny Schippers a.k.a. Mister Marathon was mijn haas. Na het startschot was het pure focus. Bij 35 km zei Sunny: "ik ga sub3 lopen! Jij ook?" Kriebels in mijn maag en kippenvel. Donkey finishte in <strong style={{ color: C.orange }}>2:59:31</strong>! WHOEHOEEE!</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.valencia} alt="Sub3 Valencia" ratio="50%" /><p style={{ fontSize: 12, color: C.textXs, marginTop: 8, fontStyle: "italic", textAlign: "center" }}>3 december 2023 — Valencia — 2:59:31 🎉</p></div>
      <AQ>Focus leidt tot flow. Flow leidt tot fun.</AQ>
      <p style={{ textAlign: "center", fontFamily: "'Playfair Display',serif", fontSize: 18, color: C.navy, marginTop: 16 }}><strong>No human is limited!</strong><br /><span style={{ fontSize: 13, color: C.textXs, letterSpacing: ".1em" }}>— ELIUD KIPCHOGE</span></p>
    </PostShell>
  );
}

const MARATHON_LIST = [
  { year: "Coming Up", races: ["No. 20 – Angkor Wat, Cambodja"] },
  { year: "2024", races: ["No. 19 – Great Breweries", "No. 18 – Gent", "No. 17 – Midwinter Kroondomein het Loo"] },
  { year: "2023", races: ["No. 16 – Valencia (sub3! 2:59:31) ⭐", "No. 15 – Antwerpen (3:07)", "No. 14 – Midzomer Apeldoorn", "No. 13 – Rome"] },
  { year: "2022", races: ["No. 12 – Berlijn", "No. 11 – Boston"] },
  { year: "2021", races: ["No. 10 – Parijs (3:10)"] },
  { year: "2019", races: ["No. 9 – Bagan Temple, Myanmar", "No. 8 – Boedapest", "No. 7 – Hamburg"] },
  { year: "2018", races: ["No. 6 – Rotterdam"] },
  { year: "2017", races: ["No. 5 – Eindhoven", "No. 4 – Great Wall, China"] },
  { year: "2016", races: ["No. 3 – Barcelona (sub4! 3:59:45) ⭐"] },
  { year: "2015", races: ["No. 2 – Amsterdam (4:17)"] },
  { year: "2010", races: ["No. 1 – Tokyo (5:45)"] },
];

function PostMarathons({ navigate }) {
  return (
    <PostShell id="marathons" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>Hardlopen is een rode draad in mijn leven geworden. Verrijkend en intensief.</AP>
      <AP>Afgelopen weekend liep ik alweer mijn 19e marathon door verschillende Belgische brouwerijen. Net als elke marathon waren de eerste 30 km relatief chill, maar the Duvel — ehh devil — is in the detail. De pilskes na de finish waren heerlijk!</AP>
      <AP>Het was mijn intentie om na elke marathon een verslag te schrijven. Helaas heb ik dat niet altijd gedaan. Hieronder een overzicht:</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.marathons} alt="Marathons overzicht" ratio="54%" /></div>
      <div style={{ marginTop: 8 }}>
        {MARATHON_LIST.map(({ year, races }) => (
          <div key={year} style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: C.orange, marginBottom: 8, borderBottom: `1px solid ${C.border}`, paddingBottom: 6 }}>{year}</p>
            {races.map(r => <p key={r} style={{ fontSize: 14, color: C.textSm, lineHeight: 1.7, paddingLeft: 14, borderLeft: `2px solid ${C.navyLt}`, marginBottom: 5 }}>{r}</p>)}
          </div>
        ))}
      </div>
    </PostShell>
  );
}

function PostHeineken({ navigate }) {
  return (
    <PostShell id="heineken" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>Digitaal b(r)ouwen aan de Heineken "road to digital".</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.heineken} alt="Heineken digitale transformatie" ratio="50%" /></div>
      <AP>Februari 2022 leverde ik mijn Nike schoenen in voor een krat Heineken. Van cybersecurity bij Nike weer terug naar digitale transformatie projecten bij Heineken.</AP>
      <AH3>SWO — SamenWerkingsOvereenkomst</AH3>
      <AP>Mijn eerste project was gelijk een ambitieus E2E-project. Doel: het dealmaking-proces van Sales versimpelen, versnellen en automatiseren. Van CRM via CPQ (Experlogix), Xpertdoc voor contractgeneratie, digitaal ondertekenen via DocuSign, opslaan in SharePoint/MijnZaak en terugschrijven naar SAP — in 10 minuten.</AP>
      <AP>In 9 maanden heeft het projectteam hard gewerkt om dit te realiseren. Begin november ging de MVP live voor Midden-Brabant en Utrecht; in januari 2023 volgde de rest van Nederland.</AP>
      <AH3>Horecashop</AH3>
      <AP>Samen met het sHOPs team zijn we aan de slag gegaan om 16 webshops te integreren in 1 omgeving: de Horecashop. In augustus 2022 live — daarna doorontwikkeld op basis van klantwensen.</AP>
      <AH3>Digitale B(r)ouwers</AH3>
      <AP>Vanaf februari 2023 als Scrum Master samengewerkt met het Heineken/Triple team aan MijnZaak (klanten), MijnKlant (account managers) en HeinekenHoreca.nl (prospects). Samen met de PO een roadmap met duidelijke doelen en prioriteiten gebouwd.</AP>
      <AQ>Met hoge ambitie: meer dan 50 features en functionaliteiten in bijna 1,5 jaar. Van tankbier bestellen tot personalisatie. Van CRM-koppeling tot rebranding. Van PowerBI dashboarding tot financiële inzichten.</AQ>
    </PostShell>
  );
}

function PostValencia({ navigate }) {
  return (
    <PostShell id="valencia" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>Na 5 pogingen is het me eindelijk gelukt: een marathon onder de 3 uur! Eliud Kipchoge heeft gelijk: No human is limited!</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.valencia} alt="Sub3 Valencia Marathon" ratio="52%" /><p style={{ fontSize: 12, color: C.textXs, marginTop: 8, fontStyle: "italic", textAlign: "center" }}>3 december 2023 — Valencia — 2:59:31</p></div>
      <AP>Mijn doel was ooit in 2010 een keer een marathon uit te lopen voor een goed doel. In Tokyo in 5:45. Vijf jaar later sub4 voor mijn 40e — in Barcelona in de laatste kilometer het verschil gemaakt: 3:59:45!</AP>
      <AH3>De weg naar sub3</AH3>
      <AP>Parijs 3:10, Boston en Berlijn helaas niet, Rome 3:10, Antwerpen 3:07 als generale repetitie. Met nog 6 weken voorbereiden, een paar kilo verloren, extra krachtoefeningen, de 10.000 trainingskilometers gepasseerd en alle pijlers gericht op Valencia.</AP>
      <AH3>Race day</AH3>
      <AP>Sunny Schippers a.k.a. Mister Marathon was mijn haas. Na het startschot was het pure focus, focus, focus. Geen handje klappen, mooie vrouwen kijken of praten. Focus. Kilometer na kilometer liepen we steady as a rock onder de sub3. Bij 25 km begon ik te zeuren, maar dankzij mijn eeuwige steun (vrouwlief!) en "gaan met die banaan!"</AP>
      <AP>Bij 35 km zei Sunny: "ik ga sub3 lopen! Jij ook?" Kriebels in mijn maag, kippenvel. Ik besefte me dat ik het ging halen. Waar ik na 30 km altijd getrakteerd wordt door McHammer, had ik nu zoiets van "you can't touch this"!</AP>
      <AP>De laatste km was taaaaaaiiiii. Tot de blauwe baan bij Hemisfèric zich openbaarde. Ik zag de tijd en dacht "nog even kerel, gas erop!" Donkey finishte in <strong style={{ color: C.orange }}>2:59:31</strong>! De focus en flow waren er tijdens de marathon, maar de fun en euforie kwamen erna. Freaking trots!</AP>
      <AQ>Eliud Kipchoge heeft gelijk: No Human is limited!</AQ>
    </PostShell>
  );
}

function PostNike({ navigate }) {
  return (
    <PostShell id="nike" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>Van mei 2018 tot februari 2022 voor Nike EMEA & APLA als Scrum Master, Project- en Programma Manager Corporate Information Security.</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.nike} alt="Cybersecurity @ Nike" ratio="46%" /></div>
      <AP>Het is de missie van Corporate Information Security (CIS) om alle data van Nike's atleten* te beschermen. Met een internationaal en energiek team was onze primaire focus binnen EMEA (Europa, Midden-Oosten en Afrika) en APLA (Azië-Pacific, Latijns-Amerika).</AP>
      <AH3>Werkzaamheden</AH3>
      <AP>De werkzaamheden waren het uitvoeren van interne en externe risk assessments op het gebied van data(toegang) en informatie — voor applicaties en bedrijven waarmee Nike werkt, variërend van alle logistieke leveranciers, de fabrieken en zelfs het gehele European Logistics Center. Sinds de invoering van GDPR werkten wij ook nauw samen met Privacy en verschillende Technology- en Digital-afdelingen.</AP>
      <AH3>Bewustwording & groei</AH3>
      <AP>In die tijd hebben we CIS volledig in de organisatie opgenomen op alle niveaus. Met ons engagement programma droegen we pro-actief bij aan de bewustwording van collega's, teams en leveranciers. Trainingen en presentaties, maar ook grotere evenementen zoals Dojo's (hack wedstrijden) en Girls Day.</AP>
      <AP>Verder werkten we aan Compliance, Governance, Technical Disaster Recovery en Application Security. Vanuit de CISO kreeg ik ook een project om met een team van specialisten een Merger & Acquisition Playbook op te leveren — als leidraad bij fusies en overnames.</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.nikeTeam} alt="Nike team" ratio="52%" /></div>
      <AQ accent={C.navy}>Ondanks dat mijn roots binnen Digital liggen, was dit een erg interessante uitdaging. Nike heeft als organisatie altijd hoog op mijn lijst gestaan. Overal zie en voel je sport, maatschappelijke betrokkenheid en doelgerichtheid.</AQ>
      <AP style={{ fontSize: 12, color: C.textXs }}>* Als je een lichaam hebt, ben je een atleet!</AP>
    </PostShell>
  );
}

function PostBibian({ navigate }) {
  return (
    <PostShell id="bibian" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>Bibian heeft laten zien wat doorzetten is, wat positivisme is en hoe belangrijk het is om te genieten van de kleine dingen in het leven.</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.bibian} alt="Verzamel herinneringen" ratio="44%" /></div>
      <AP>29 maart overleed Bibian Mentel.</AP>
      <AP>Bibian heeft ons laten zien wat doorzetten is, wat positivisme is en hoe belangrijk het is om te genieten van de kleine dingen in het leven, vooral ook om te leven en te geven. Als dank voor al haar inspiratie, besloot ik om voor 2021 vanuit Com-Passie haar Mentelity Foundation te steunen met een mooie donatie.</AP>
      <AP>Stimuleren en inspireren van kinderen en jong volwassenen die leven met een fysieke en mentale uitdaging is wat haar Mentelity Foundation beweegt. De mentaliteit van Bibian Mentel, meervoudig internationaal onderscheiden paralympisch topsporter, vormt het fundament voor hun handelen.</AP>
      <AQ>Verzamel herinneringen, geen bezittingen.</AQ>
      <p style={{ marginBottom: 16 }}>
        <a href="https://mentelityfoundation.org/doe-een-donatie/" target="_blank" rel="noreferrer">
          <button className="btn-primary">Doe ook een donatie →</button>
        </a>
      </p>
    </PostShell>
  );
}

function PostDutchess({ navigate }) {
  return (
    <PostShell id="dutchess" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>My dear friend Bela Evers is going to do a challenge which is the superlative of a challenge: rowing 3,000 miles across the Atlantic Ocean!</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.dutchess} alt="Four power women" ratio="44%" /></div>
      <AP>Exactly a year ago I was writing an article in China about my amazing Myanmar experience. Time flies when you're having fun. Some of you know that I try to do a yearly challenge for charity. This year I did not do any challenge as we all had a mutual challenge to deal with: COVID-19.</AP>
      <AP>However one of my dear friends, Bela Evers, is going to do a challenge for charity with three other power women which is the superlative of a challenge: rowing 3,000 miles across the Atlantic Ocean!!! By doing so these four Dutchess of the Sea are raising money for ALS Netherlands and the Plastic Soup Foundation.</AP>
      <AH3>The Talisker Whisky Atlantic Challenge</AH3>
      <AP>The world's toughest rowing event starts in La Gomera in the Canary Islands and finishes in Antigua. Yes, I'll repeat: 3,000 miles across the Atlantic Ocean!</AP>
      <AP>In about two weeks they will be rowing in shifts of 2 hours on / 2 hours off, through storms and 50ft waves that toss their tiny boat, blisters, sea sickness, sunburn, lack of sleep, open sores and dehydrated food. A mental and physical journey awaits them.</AP>
      <AP>In total 55 rowers in 21 resilient teams from 9 countries will aim to cross that 1 magnificent ocean.</AP>
      <AQ accent={C.navy}>To support them in their exciting journey I decided to sponsor them — so with an oar I am "partly joining". Every little bit helps.</AQ>
    </PostShell>
  );
}

function PostRoparun({ navigate }) {
  return (
    <PostShell id="roparun" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>In 50 uur tijd hebben we 536 kilometer hardgelopen, gefietst, gefeest en 31.000 Euro opgehaald. Team Awesome!</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.roparun} alt="Roparun Nike Courage" ratio="52%" /></div>
      <AP>Hou je van hardlopen? Hou je van fietsen? Hou je van team spirit? Hou je van plezier? Doe dan volgende keer mee met de Roparun!</AP>
      <AP>323 teams hebben ruim 3,5 miljoen Euro opgehaald voor 111 goede doelen. Ons team ruim 31.000 Euro. Ik ben blij om zo weer een kleine bijdrage te hebben mogen leveren — en daar zo'n ongelooflijk grote herinnering voor te hebben mogen krijgen!</AP>
      <AP>Grote dank aan het hele Nike Courage team: mede-bitches van team 2 Kate, Mia, Michael, Willem, Balys; drivers Ricardo de Bejaarden-Stripper, Paul G. en Bob; team 1 posse Lucien, Jose, Michel, Cally, Shi, Joost, Mandy en Lenny; head-coaches Tom en Bas; massage-torturers Patricia en Linda; catering-posse Lois, Nathalie en Daniel.</AP>
      <AH3>Van Parijs naar Rotterdam</AH3>
      <AP>Vrijdagnacht om 2:05 wakker. Om 4:00 vertrokken richting Parijs. Voor de start: spaghetti, voorbereiding en het versieren van de bussen met een roze flamingo en krokodil. Om 12:15 ging Team 1 van start.</AP>
      <AP>Om en om renden we 2 km en fietsten we voor en na die 2 km met de andere renner mee. De omgeving was prachtig — kleine dorpjes en heuvelachtige landschappen. Een paar flinke buien onderweg, maar ook verfrissend.</AP>
      <AH3>Door de nacht</AH3>
      <AP>Om 3:00 met kerstverlichting de nacht in. Hard muziek, van Avici tot System of a Down. Om 06:15 zagen we de zon opkomen. Vermoeid en voldaan. In Antwerpen liep ik door het prachtige havenhuis via een rode loper met juichende mensen. Fantastisch!</AP>
      <AP>De vierde ronde eindigde net buiten Ossendrecht — alsof het carnaval was. Versierde huizen, juichende en verklede mensen, vuurkorven. Echt fantastisch.</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.roparun2} alt="Roparun finish Rotterdam" ratio="52%" /></div>
      <AH3>De finish in Rotterdam</AH3>
      <AP>De laatste 52 km deden we anders: geen busje mee. Zes teamleden op de fiets, 1 moest lopen. Via de Haringvlietbrug van Zeeland naar Zuid-Holland. In Numansdorp en Oud-Beijerland een groot feest met juichende mensen.</AP>
      <AP>Als team 2 eindigden we bij de Willemsbrug. Ricardo opende een Corona voor me en we liepen als gezamenlijke Nike Courage posse met een grote Just Do It vlag naar de finish. We just did it!</AP>
      <AQ>#winasateam #justdoit!</AQ>
    </PostShell>
  );
}

function PostRoparunPre({ navigate }) {
  return (
    <PostShell id="roparunpre" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>8 tot en met 10 juni gaan 324 teams deelnemen aan de Roparun. Ik ben trots om deel uit te maken van het Nike Courage team.</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.roparunPre} alt="Voorbereidingen Roparun" ratio="44%" /></div>
      <AP>Totaal zijn we met 19 renners, fietsers, chauffeurs en coaches begonnen met trainen om ons klaar te maken voor deze epische 520 kilometer uitdaging. Naast het trainen zijn we ook druk bezig om geld op te halen voor mensen met kanker.</AP>
      <AP>De Roparun heeft hiervoor een mooi motto: <em>"Leven toevoegen aan de dagen, waar vaak geen dagen meer kunnen worden toegevoegd aan het leven."</em></AP>
      <AH3>Hoe kun jij helpen?</AH3>
      <AP>Je kunt een donatie doen aan ons Roparun team. Voor €2,50 kun je een lootje winnen met mooie prijzen — variërend van een auto van mijn oud-werkgever tot grote vakantie-cheques. Wil je je bedrijfslogo op ons shirt? Neem contact op!</AP>
      <AH3>Hoogtepunten uit de voorbereiding</AH3>
      <AP><strong>29 mei — Cake Sale bij Nike:</strong> 480 Euro opgehaald!</AP>
      <AP><strong>9 mei — Hardlooptraining met Paula Radcliffe</strong>, de snelste marathonvrouw van de wereld!</AP>
      <AH3>Over de Roparun</AH3>
      <AP>De Roparun is een estafetteloop met startlocaties in Parijs en Hamburg en een gezamenlijke finish in Rotterdam. Een Roparunteam bestaat uit maximaal acht lopers die ieder gemiddeld zo'n 65 km lopen — meer dan anderhalve marathon. De afgelopen 27 edities is al meer dan 84 miljoen euro opgehaald voor zorg voor mensen met kanker.</AP>
    </PostShell>
  );
}

function PostBagan({ navigate }) {
  return (
    <PostShell id="bagan" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>Running a marathon among the 2,000 sacred temples of Bagan in Myanmar!</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.bagan1} alt="Bagan temples" ratio="50%" /></div>
      <AP>Having participated in the Great Wall marathon two years ago I wanted to do another adventure marathon. I chose the Bagan Temple marathon in the mystic country of Myanmar. When I spoke with various folks about this trip, I noticed that very few knew about Myanmar — I'll be honest that beside the Rohingya situation, I did not know a lot more. Well recommended!</AP>
      <AH3>A beautiful culture shock</AH3>
      <AP>Arriving in Yangon: immediately hit by the heat — 30 degrees warmer than the cold Dutch lowlands! Everywhere I looked there was activity: little markets, stray dogs, monks and nuns, and a lot of traffic. A culture shock in the most positive way.</AP>
      <AH3>Tour de Mandalay</AH3>
      <AP>We walked over the U-Bein bridge — the world's largest teak bridge — visited a monk monastery where the monks got ready to eat (their day starts at 4:00 every day), saw craftsmen working on Buddha statues, and visited Myanmar's second most sacred temple, the Mahamuni temple. The Kuthodaw pagoda houses the world's biggest book: 729 chapters, each page its own white pagoda.</AP>
      <AH3>Row row row your boat — down the Irrawaddy</AH3>
      <AP>At 5:00 we took a full day on a boat to Bagan. In our group: two Guinness Book of Record holders (married couple with almost 1,300 marathons combined!), people who had run 100+ ultras including the Marathon des Sables (250 km in the Sahara), and a brother and sister who ran in fireman gear. One thing we all had in common: we love adventure!</AP>
      <AH3>The big day!</AH3>
      <AP>At 6:15, just before sunrise, 500+ people from 35 countries started with the Htilominlo temple in the back. Children with big smiles giving high fives and flowers, goats and cows crossing the track. Breathtaking — literally, when you need to run!</AP>
      <AP>I got into a good flow and managed the first 21.1 km in 2 hours. At 28 km the flow was gone — but Greg ran next to me with running quotes and jokes. We even spoke French and did a photoshoot with a Chinese tourist. Finally, we saw the finish line and finished hand in hand. It took me 4:44 (no. 35 of 152 runners).</AP>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "24px 0" }}>
        <Photo src={IMG.bagan2} alt="Bagan runner" ratio="120%" />
        <Photo src={IMG.bagan3} alt="Bagan finish" ratio="120%" />
      </div>
      <AH3>Balloons over Bagan</AH3>
      <AP>The next morning at 4:00 we joined one of 30 hot air balloons over the Bagan complex at sunrise. As someone afraid of heights, I got scared — until the spectacular view made me forget all about it. After landing: champagne breakfast.</AP>
      <AQ>What does our world have a magnificent variety of cultures and people! We should really cherish this!</AQ>
      <AP>Kyay-Zuu-Tin-Par-Tal! — Thank you to all the beautiful people of Myanmar, the Albatros team, and everyone in Group E.</AP>
    </PostShell>
  );
}

function PostFriesland({ navigate }) {
  return (
    <PostShell id="friesland" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>Binnen FrieslandCampina mooie stappen gezet in de digitale transformatie voor melkveehouders.</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.friesland} alt="FrieslandCampina" ratio="46%" /></div>
      <AP>Van maart 2017 tot februari 2018 heb ik als Project Manager Digital een aantal projecten gedaan binnen Cooperative Affairs bij FrieslandCampina. Een geweldige organisatie om voor en mee samen te werken.</AP>
      <AH3>Weidegangkalender</AH3>
      <AP>In april zijn we live gegaan met het eerste project: een digitale weidegangkalender voor de melkveehouders. Via een website kunnen zij registreren hoeveel uur de koeien in de wei hebben gestaan.</AP>
      <AH3>Melkapp</AH3>
      <AP>Het tweede project, begin juni live in Nederland, België en Duitsland, was de Melkapp. Melkveehouders kunnen via deze app hun melkleveranties controleren en een grafisch overzicht zien van de waardes van hun recente melkleveranties.</AP>
      <AH3>Melkweb 2.0</AH3>
      <AP>Het grootste en meest complexe project was Melkweb 2.0. Doel: het bedenken, ontwerpen, bouwen en live zetten van een digitale webomgeving die de melkveehouder informeert, faciliteert, inspireert, activeert en ondersteunt bij zijn bedrijfsvoering op alle coöperatieve thema's.</AP>
      <AH3>Over FrieslandCampina</AH3>
      <AP>Zuivelcoöperatie FrieslandCampina U.A. is een grote internationaal opererende coöperatie, gevormd door melkveehouders in Nederland, België en Duitsland. Met vestigingen in 33 landen en bijna 22.000 medewerkers produceert en verkoopt FrieslandCampina consumentenproducten in meer dan 100 landen.</AP>
    </PostShell>
  );
}

function PostPhilipsEcom({ navigate }) {
  return (
    <PostShell id="philipsecom" navigate={navigate}>
      <AP style={{ fontSize: 17, fontStyle: "italic", color: C.navy, fontFamily: "'Playfair Display',serif" }}>Na al ruim 3 jaar projecten gedaan te hebben bij Philips, werd ik gevraagd voor de rol van Programma Manager eCommerce.</AP>
      <div style={{ margin: "24px 0" }}><Photo src={IMG.philipsEcom} alt="eCommerce Philips" ratio="46%" /></div>
      <AP>Na al eerder ruim 3 jaar projecten gedaan te hebben bij Philips vanuit IT, werd ik in april gevraagd om een rol aan businesszijde te vervullen als Programma Manager eCommerce.</AP>
      <AH3>De scope</AH3>
      <AP>Binnen Personal Health was het doel om de online shops van 14 landen op ATG te migreren naar SAP Hybris — en 4 andere landen uit Centraal Oost-Europa wilden ook een online shop. Bij Health Systems diende er de eerste online shop te komen in Noord-Amerika voor de Business Group PCMS (Patient Care en Monitoring Systems).</AP>
      <AP>Verschillende business product owners, gespecialiseerd in Finance, Supply Chain, Care en UX, hebben hier samen met 6 IT teams hard aan gewerkt. Voor Personal Health zijn de eerste 8 shops live in Tsjechië, Engeland, België, Italië, Denemarken, Finland, Noorwegen en Zweden.</AP>
      <AH3>Resultaten</AH3>
      <AP>Een zeer goede teamprestatie — er waren flink wat uitdagingen. Zo waren er verschillende campagne-shops die tussendoor nog live moesten in Amerika, Polen, Nederland en België. Technisch is binnen Health Systems de shop ook klaar.</AP>
      <AQ accent={C.navy}>"Paul has been instrumental in ensuring that we as a team build & deploy the eCommerce solution for both Personal Health and Health Systems and the professional support he has given towards IT and business."<br /><span style={{ fontSize: 13, fontStyle: "normal", fontWeight: 600, color: C.textSm }}>— Gertin Schraa, Global Lead eCommerce, Philips</span></AQ>
    </PostShell>
  );
}

// ─── PAGE: HOME ───────────────────────────────────────────────────────────────
const PILLARS = [
  { key: "Focus", icon: "🎯", color: C.navy, bg: C.navyLt, desc: "Focus als team op de stip aan de horizon, op de doelstellingen, op de roadmap, op toegevoegde waarde voor de klant. Met volledige transparantie en agility." },
  { key: "Flow",  icon: "🌊", color: C.orange, bg: C.orangeLt, desc: "Met een duidelijk doel voor ogen zorgen dat iedereen goed in de flow komt. Als individu en als team — iedereen in zijn kracht, het bundelen van die krachten en gaan voor synergie!" },
  { key: "Fun",   icon: "🎉", color: C.navy, bg: C.navyLt, desc: "En als de doelen dan gehaald zijn samen de successen vieren! En ook tussendoor vooral ook veel plezier hebben met elkaar! Proost!" },
];

function PageHome({ navigate }) {
  const [hov, setHov] = useState(null);
  return (
    <div>
      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 58, background: C.navy, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -80, top: "5%", width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(232,98,10,.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 40, top: "22%", width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(232,98,10,.1)", pointerEvents: "none" }} />
        <Wrap>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", padding: "80px 0" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: C.orange, marginBottom: 16, animation: "fadeUp .7s .1s both" }}>Focus · Flow · Fun</p>
              <h1 className="hero-h1 serif" style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.1, color: "#fff", letterSpacing: "-.02em", marginBottom: 20, animation: "fadeUp .7s .25s both" }}>
                Samenwerken<br /><em style={{ color: C.orange, fontStyle: "italic" }}>aan digitale</em><br />transformatie
              </h1>
              <div style={{ animation: "fadeUp .7s .4s both" }}>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,.65)", fontStyle: "italic", maxWidth: 460, lineHeight: 1.75, marginBottom: 32, fontFamily: "'Playfair Display',serif" }}>
                  "If you want to go fast, go alone — if you want to go far, go together."
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <button className="btn-primary" onClick={() => navigate("contact")}>Samen werken →</button>
                  <button className="btn-ghost-white" onClick={() => navigate("over")}>Over Paul</button>
                </div>
              </div>
            </div>
            <div className="hide-sm" style={{ animation: "fadeUp .7s .35s both", position: "relative" }}>
              <img src={IMG.paul} alt="Paul ten Donkelaar" style={{ width: "100%", maxWidth: 380, height: 500, objectFit: "cover", objectPosition: "center top", borderRadius: 8 }} />
              <div style={{ position: "absolute", bottom: 20, left: 20, background: C.orange, color: "#fff", padding: "14px 18px", borderRadius: 6 }}>
                <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Playfair Display',serif", lineHeight: 1 }}>25+</div>
                <div style={{ fontSize: 10, opacity: .85, letterSpacing: ".08em", fontWeight: 500, marginTop: 2 }}>jaar ervaring</div>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* PILLARS */}
      <section style={{ background: C.white, padding: "80px 24px" }}>
        <Wrap>
          <Reveal><Eyebrow t="Werkwijze" /><H2>Mijn drie pijlers</H2><Rule /></Reveal>
          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 8 }}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.key} delay={i * .1}>
                <div style={{ background: hov === p.key ? p.bg : C.gray, border: `1.5px solid ${hov === p.key ? p.color + "50" : C.border}`, borderTop: `3px solid ${p.color}`, borderRadius: 8, padding: "28px 22px", transition: "all .25s", transform: hov === p.key ? "translateY(-5px)" : "none" }}
                  onMouseEnter={() => setHov(p.key)} onMouseLeave={() => setHov(null)}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{p.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: p.color, marginBottom: 10, letterSpacing: "-.01em" }}>{p.key}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: C.textSm }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </section>

      {/* STATS */}
      <div style={{ background: C.orange, padding: "52px 24px" }}>
        <Wrap>
          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, textAlign: "center" }}>
            {[["25+", "jaar digitale ervaring"], ["19+", "marathons gelopen"], ["50+", "features @ Heineken"]].map(([n, l]) => (
              <div key={l}>
                <p className="serif" style={{ fontSize: 44, fontWeight: 600, color: "#fff", lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,.8)", marginTop: 6, fontWeight: 500, letterSpacing: ".06em", textTransform: "uppercase" }}>{l}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </div>

      {/* RECENT BLOG */}
      <section style={{ padding: "80px 24px", background: C.gray }}>
        <Wrap>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
              <div><Eyebrow t="Inzichten" /><H2>Recente posts</H2></div>
              <button className="btn-secondary" style={{ fontSize: 12 }} onClick={() => navigate("blog")}>Alle blogs →</button>
            </div>
          </Reveal>
          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {ALL_POSTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * .08}>
                <div className="card-hover" style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, overflow: "hidden" }} onClick={() => navigate("post-" + p.id)}>
                  <Photo src={p.img} alt={p.title} ratio="58%" />
                  <div style={{ padding: "16px 18px 20px", borderTop: `3px solid ${p.accent}` }}>
                    <p style={{ fontSize: 11, color: p.accent, fontWeight: 500, letterSpacing: ".06em", marginBottom: 6 }}>{p.date} · {p.readTime} lezen</p>
                    <h3 style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, color: C.navy, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: C.textSm, lineHeight: 1.6 }}>{p.excerpt}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </section>

      {/* CTA */}
      <section style={{ background: C.navyDk, padding: "72px 24px", textAlign: "center" }}>
        <Wrap>
          <Reveal>
            <Eyebrow t="Samenwerken" light />
            <H2 light size={34}>Keertje samenwerken?</H2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 420, margin: "0 auto 28px", lineHeight: 1.7 }}>Op zoek naar een ervaren partner in digitale transformatie?</p>
            <button className="btn-primary" style={{ fontSize: 15, padding: "12px 36px" }} onClick={() => navigate("contact")}>Neem contact op →</button>
          </Reveal>
        </Wrap>
      </section>
    </div>
  );
}

// ─── PAGE: OVER ───────────────────────────────────────────────────────────────
function PageOver({ navigate }) {
  return (
    <div style={{ paddingTop: 58 }}>
      <div style={{ position: "relative", height: 420, overflow: "hidden" }}>
        <img src={IMG.paul} alt="Paul ten Donkelaar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(.4)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: C.orange }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: "0 24px 48px" }}>
          <Wrap>
            <Eyebrow t="Over" light />
            <h1 className="serif" style={{ fontSize: 48, fontWeight: 600, color: "#fff", letterSpacing: "-.02em", textShadow: "0 2px 14px rgba(0,0,0,.5)" }}>Paul ten Donkelaar</h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.7)", fontStyle: "italic", marginTop: 8 }}>Digital Project Manager · Scrum Master · Marathonloper</p>
          </Wrap>
        </div>
      </div>

      <section style={{ background: C.white, padding: "72px 24px" }}>
        <Wrap>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 56, alignItems: "start" }}>
            <Reveal>
              <Eyebrow t="Biografie" /><H2>Wie is Paul?</H2><Rule />
              <BodyP>Eind vorige eeuw bij Baan begonnen, uiteindelijk global verantwoordelijk voor Digital. Na 6 jaar de stap naar Mercedes-Benz voor grootschalige digitale transformatie.</BodyP>
              <BodyP>Sinds 2009 als freelancer bij Philips, Nike en Heineken als DPM / Scrum Master uitdagende projecten succesvol afgerond.</BodyP>
              <BodyP>Inmiddels 19 marathons gelopen, waaronder een sub3 in Valencia (2:59:31). Tuinier, vrijwilliger en fan van lekker eten met familie en vrienden en reizen.</BodyP>
              <blockquote style={{ borderLeft: `3px solid ${C.orange}`, paddingLeft: 20, margin: "24px 0" }}>
                <p className="serif" style={{ fontSize: 20, fontStyle: "italic", color: C.navy, marginBottom: 6 }}>"No human is limited."</p>
                <small style={{ fontSize: 11, color: C.textXs, letterSpacing: ".1em", fontWeight: 600 }}>— ELIUD KIPCHOGE</small>
              </blockquote>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => navigate("contact")}>Samenwerken →</button>
                <a href="https://www.linkedin.com/in/ptendonkelaar" target="_blank" rel="noreferrer">
                  <button className="btn-secondary">LinkedIn →</button>
                </a>
              </div>
            </Reveal>
            <Reveal delay={.15}>
              <div style={{ background: C.navy, padding: "28px 24px", borderRadius: 8, color: "#fff", marginBottom: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 6 }}>Gestart als freelancer</div>
                <div className="serif" style={{ fontSize: 44, fontWeight: 600, lineHeight: 1 }}>2009</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.55)", marginTop: 5 }}>Hartje kredietcrisis — en nooit meer omgekeken.</div>
              </div>
              {[["25+", "jaar digitale ervaring"], ["19", "marathons gelopen"], ["2:59:31", "sub3 Valencia 2023"]].map(([n, l]) => (
                <div key={l} style={{ background: C.navyXl, border: `1px solid ${C.border}`, borderRadius: 6, padding: "12px 16px", marginBottom: 10, display: "flex", alignItems: "center", gap: 14 }}>
                  <span className="serif" style={{ fontSize: 20, fontWeight: 600, color: C.navy, minWidth: 60 }}>{n}</span>
                  <span style={{ fontSize: 12, color: C.textSm }}>{l}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </Wrap>
      </section>

      {/* Timeline */}
      <section style={{ background: C.gray, padding: "72px 24px" }}>
        <Wrap max={760}>
          <Reveal><Eyebrow t="Loopbaan" /><H2>Tijdlijn</H2><Rule /></Reveal>
          {[
            { y: "2023 →", c: C.orange, l: "Bidfood", d: "Replatforming programma als Digital Project Manager." },
            { y: "2022–2023", c: C.orange, l: "Heineken — Digitale B(r)ouwers", d: "Scrum Master voor MijnZaak, MijnKlant en HeinekenHoreca.nl. 50+ features in 1,5 jaar." },
            { y: "2022", c: C.navy, l: "Heineken — Horecashop & SWO", d: "16 webshops geïntegreerd; E2E dealmaking-oplossing live gebracht." },
            { y: "2018–2022", c: C.navy, l: "Nike EMEA & APLA", d: "Cybersecurity team van 4 naar 17 specialisten. Honderden assessments en audits." },
            { y: "2017–2018", c: C.navy, l: "FrieslandCampina", d: "Digitale transformatie voor melkveehouders: Weidegangkalender, Melkapp, Melkweb 2.0." },
            { y: "2009–2017", c: C.navy, l: "Philips", d: "eCommerce programma en diverse digitale transformatie projecten." },
            { y: "2003–2009", c: C.textXs, l: "Mercedes-Benz", d: "Digitale transformatie op Europees niveau." },
            { y: "1997–2003", c: C.textXs, l: "Baan Company", d: "Van junior naar global verantwoordelijke voor Digital." },
          ].map((e, i) => (
            <Reveal key={e.l} delay={i * .05}>
              <div style={{ display: "flex", gap: 20, paddingBottom: 22, borderBottom: `1px solid ${C.border}`, marginBottom: 22 }}>
                <div style={{ minWidth: 88, fontSize: 11, fontWeight: 500, color: C.textXs, letterSpacing: ".04em", paddingTop: 2 }}>{e.y}</div>
                <div style={{ borderLeft: `2px solid ${e.c}`, paddingLeft: 18 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: e.c, marginBottom: 4 }}>{e.l}</p>
                  <p style={{ fontSize: 13, color: C.textSm, lineHeight: 1.65 }}>{e.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </Wrap>
      </section>

      {/* Valencia strip */}
      <section style={{ background: C.navy, padding: "72px 24px" }}>
        <Wrap>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
            <Reveal><Photo src={IMG.valencia} alt="Sub3 Valencia" ratio="65%" style={{ borderRadius: 8 }} /></Reveal>
            <Reveal delay={.15}>
              <Eyebrow t="Com-Passie" light />
              <H2 light>Sub3 in Valencia</H2>
              <Rule />
              <p style={{ fontSize: 14, color: "rgba(255,255,255,.7)", lineHeight: 1.8, marginBottom: 22 }}>Na 5 pogingen in Parijs, Boston, Berlijn, Rome en Antwerpen finishte ik op 3 december 2023 in Valencia in 2:59:31. Pure focus, flow en fun!</p>
              <button className="btn-ghost-white" onClick={() => navigate("post-valencia")}>Lees het verhaal →</button>
            </Reveal>
          </div>
        </Wrap>
      </section>
    </div>
  );
}

// ─── PAGE: PROJECTEN ──────────────────────────────────────────────────────────
const PROJECTS = [
  { client: "Heineken", color: C.orange, img: IMG.heineken, period: "2022–2023", role: "Scrum Master / Digital Project Manager", blogId: "heineken",
    items: ["50+ features voor digitale transformatie (Digitale B(r)ouwers team)", "16 webshops gemigreerd naar 1 centrale Horecashop", "E2E dealmaking SWO met 7 leveranciers en 40+ stakeholders live"] },
  { client: "Nike EMEA & APLA", color: C.navy, img: IMG.nikeTeam, period: "2018–2022", role: "Cybersecurity Program Manager", blogId: "nike",
    items: ["Cybersecurity team van 4 naar 17 specialisten", "Honderden risk assessments, compliance audits en application security", "M&A Playbook ontwikkeld vanuit de CISO"] },
  { client: "Philips", color: C.orange, img: IMG.philips, period: "2009–2017", role: "Digital Project Manager / Scrum Master", blogId: "philipsecom",
    items: ["eCommerce-programma: 14 landen gemigreerd naar SAP Hybris", "12 projecten in 9 maanden voor 15 Product Owners uit 4 domeinen", "Roadmap opgebouwd en uitgerold voor internationale markten"] },
  { client: "FrieslandCampina", color: C.navy, img: IMG.friesland, period: "2017–2018", role: "Project Manager Digital", blogId: "friesland",
    items: ["Digitale weidegangkalender voor melkveehouders", "Melkapp live in Nederland, België en Duitsland", "Melkweb 2.0 ontworpen en eerste release live"] },
];

function PageProjecten({ navigate }) {
  return (
    <div style={{ paddingTop: 58 }}>
      <div style={{ background: C.navy, padding: "72px 24px 52px" }}>
        <Wrap><Reveal>
          <Eyebrow t="Projecten" light />
          <H2 light size={42}>Digitale transformatie</H2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", fontStyle: "italic" }}>Mens-, waarde- en resultaatgericht</p>
        </Reveal></Wrap>
      </div>
      <section style={{ background: C.white, padding: "48px 24px" }}>
        <Wrap max={760}>
          <Reveal>
            <BodyP>De dynamiek in digitale transformatie projecten is altijd enorm. De business wil "alles, gisteren en gratis". Het team wil het goed uitdenken en uitvoeren. In dat speelveld pak ik graag mijn rol en probeer ik het beste van beide werelden te combineren tot iets waar de klant het meeste waarde aan heeft.</BodyP>
            <BodyP>Mijn uitgangspunt is altijd mens-, waarde- en resultaatgericht werken. Met een helicopter view en oog voor detail. En met de goede focus, flow en fun!</BodyP>
          </Reveal>
        </Wrap>
      </section>
      <section style={{ background: C.gray, padding: "56px 24px" }}>
        <Wrap>
          <Reveal><Eyebrow t="Opdrachtgevers" /><H2>Projecten</H2></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }}>
            {PROJECTS.map((p, i) => (
              <Reveal key={p.client} delay={i * .1}>
                <div className="two-col" style={{ display: "grid", gridTemplateColumns: "220px 1fr", background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, overflow: "hidden" }}>
                  <Photo src={p.img} alt={p.client} ratio="70%" />
                  <div style={{ padding: "28px 28px", borderLeft: `4px solid ${p.color}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
                      <div>
                        <h3 style={{ fontSize: 20, fontWeight: 700, color: p.color, marginBottom: 3, letterSpacing: "-.01em" }}>{p.client}</h3>
                        <p style={{ fontSize: 11, fontWeight: 500, color: C.textXs, letterSpacing: ".06em", textTransform: "uppercase" }}>{p.role} · {p.period}</p>
                      </div>
                      <button className="btn-secondary" style={{ fontSize: 11, padding: "6px 14px" }} onClick={() => navigate("post-" + p.blogId)}>Case study →</button>
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                      {p.items.map(item => (
                        <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ color: p.color, fontSize: 14, lineHeight: 1.5, flexShrink: 0, fontWeight: 700 }}>→</span>
                          <span style={{ fontSize: 13, color: C.textSm, lineHeight: 1.6 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </section>
    </div>
  );
}

// ─── PAGE: BLOG ───────────────────────────────────────────────────────────────
function PageBlog({ navigate }) {
  const [cat, setCat] = useState("Alle blogs");
  const filtered = cat === "Alle blogs" ? ALL_POSTS : ALL_POSTS.filter(p => p.cats.includes(cat));
  return (
    <div style={{ paddingTop: 58 }}>
      <div style={{ background: C.navy, padding: "64px 24px 44px", borderBottom: `4px solid ${C.orange}` }}>
        <Wrap><Reveal><Eyebrow t="Blog" light /><H2 light size={38}>Inzichten & verhalen</H2></Reveal></Wrap>
      </div>
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: "0 24px" }}>
        <Wrap>
          <div style={{ display: "flex", overflowX: "auto" }}>
            {CATS.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{ padding: "13px 16px", background: "none", border: "none", borderBottom: `2.5px solid ${cat === c ? C.orange : "transparent"}`, color: cat === c ? C.orange : C.textXs, fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", transition: "all .18s", letterSpacing: ".04em", fontFamily: "'Inter',sans-serif" }}>{c}</button>
            ))}
          </div>
        </Wrap>
      </div>
      <section style={{ background: C.gray, padding: "48px 24px 72px" }}>
        <Wrap>
          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * .05}>
                <div className="card-hover" style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, overflow: "hidden" }} onClick={() => navigate("post-" + p.id)}>
                  <Photo src={p.img} alt={p.title} ratio="56%" />
                  <div style={{ padding: "16px 18px 20px", borderTop: `3px solid ${p.accent}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <p style={{ fontSize: 11, color: p.accent, fontWeight: 500 }}>{p.date}</p>
                      <p style={{ fontSize: 11, color: C.textXs }}>{p.readTime} lezen</p>
                    </div>
                    <h3 style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4, color: C.navy, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: C.textSm, lineHeight: 1.6, marginBottom: 12 }}>{p.excerpt}</p>
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                      {p.cats.map(c => <span key={c} style={{ fontSize: 10, fontWeight: 600, padding: "2px 9px", background: C.navyXl, color: C.navy, borderRadius: 20, letterSpacing: ".06em" }}>{c}</span>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {!filtered.length && <p style={{ textAlign: "center", color: C.textXs, padding: "60px 0" }}>Geen posts in deze categorie.</p>}
        </Wrap>
      </section>
    </div>
  );
}

// ─── PAGE: CONTACT ────────────────────────────────────────────────────────────
function PageContact() {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ paddingTop: 58 }}>
      <div style={{ background: C.navy, padding: "72px 24px 52px" }}>
        <Wrap><Reveal>
          <Eyebrow t="Contact" light />
          <H2 light size={40}>Keertje samenwerken?</H2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", fontStyle: "italic" }}>Ik ga graag het gesprek aan.</p>
        </Reveal></Wrap>
      </div>
      <section style={{ background: C.white, padding: "72px 24px" }}>
        <Wrap>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <Reveal>
              <Eyebrow t="Direct contact" /><H2>Neem contact op</H2><Rule />
              <BodyP>Bent u op zoek naar een ervaren partner in digitale transformatie? Of wilt u gewoon eens sparren over agile werken, marathons of synergie? Ik sta altijd open voor een goed gesprek.</BodyP>
              {[["📧", "E-mail", "paul@com-firm.com", "mailto:paul@com-firm.com"],
                ["🔗", "LinkedIn", "linkedin.com/in/ptendonkelaar", "https://www.linkedin.com/in/ptendonkelaar"],
                ["🌐", "Website", "www.com-firm.com", "https://www.com-firm.com"]].map(([icon, label, val, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <div style={{ display: "flex", gap: 14, alignItems: "center", padding: "13px 16px", border: `1.5px solid ${C.border}`, borderRadius: 8, marginBottom: 10, transition: "all .18s", cursor: "pointer" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.background = C.orangeLt; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "transparent"; }}>
                    <div style={{ width: 34, height: 34, borderRadius: 6, background: C.navyLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{icon}</div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".1em", color: C.textXs, textTransform: "uppercase", marginBottom: 2 }}>{label}</p>
                      <p style={{ fontSize: 13, color: C.orange, fontWeight: 500 }}>{val}</p>
                    </div>
                  </div>
                </a>
              ))}
              <div style={{ borderLeft: `3px solid ${C.orange}`, paddingLeft: 18, marginTop: 24 }}>
                <p className="serif" style={{ fontSize: 15, fontStyle: "italic", color: C.textSm, lineHeight: 1.75 }}>"Samenwerken leidt tot energie, creativiteit en slagvaardigheid. Geen ego's en silo's, maar synergie."</p>
                <small style={{ fontSize: 11, color: C.textXs, letterSpacing: ".08em", fontWeight: 600, display: "block", marginTop: 6, textTransform: "uppercase" }}>— Paul ten Donkelaar</small>
              </div>
            </Reveal>
            <Reveal delay={.15}>
              <Eyebrow t="Stuur een bericht" /><H2>Contactformulier</H2><Rule />
              {sent ? (
                <div style={{ padding: "44px 28px", background: "#eaf4ee", border: "1px solid #48bb78", borderRadius: 8, textAlign: "center" }}>
                  <p style={{ fontSize: 36, marginBottom: 12 }}>✓</p>
                  <p style={{ fontSize: 18, fontWeight: 600, color: "#276749", marginBottom: 8 }}>Bericht verzonden!</p>
                  <p style={{ fontSize: 13, color: C.textSm }}>Ik neem zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                  <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }}>
                    <div><label style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".08em", color: C.textXs, display: "block", marginBottom: 5, textTransform: "uppercase" }}>Naam</label><input type="text" placeholder="Uw naam" required /></div>
                    <div><label style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".08em", color: C.textXs, display: "block", marginBottom: 5, textTransform: "uppercase" }}>Bedrijf</label><input type="text" placeholder="Uw bedrijf" /></div>
                  </div>
                  <div><label style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".08em", color: C.textXs, display: "block", marginBottom: 5, textTransform: "uppercase" }}>E-mailadres</label><input type="email" placeholder="u@bedrijf.nl" required /></div>
                  <div><label style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".08em", color: C.textXs, display: "block", marginBottom: 5, textTransform: "uppercase" }}>Onderwerp</label><input type="text" placeholder="Bijv. Keertje samenwerken?" /></div>
                  <div><label style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".08em", color: C.textXs, display: "block", marginBottom: 5, textTransform: "uppercase" }}>Bericht</label><textarea rows={6} placeholder="Uw bericht..." required style={{ resize: "vertical" }} /></div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", padding: "12px 32px" }}>Verstuur bericht →</button>
                </form>
              )}
            </Reveal>
          </div>
        </Wrap>
      </section>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
const TOP_PAGES = ["home", "over", "projecten", "blog", "contact"];

export default function App() {
  const [page, setPage] = useState("home");
  const navigate = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const render = () => {
    switch (page) {
      case "home":            return <PageHome navigate={navigate} />;
      case "over":            return <PageOver navigate={navigate} />;
      case "projecten":       return <PageProjecten navigate={navigate} />;
      case "blog":            return <PageBlog navigate={navigate} />;
      case "contact":         return <PageContact />;
      case "post-2m":         return <Post2M navigate={navigate} />;
      case "post-agile":      return <PostAgile navigate={navigate} />;
      case "post-15j":        return <Post15j navigate={navigate} />;
      case "post-marathons":  return <PostMarathons navigate={navigate} />;
      case "post-heineken":   return <PostHeineken navigate={navigate} />;
      case "post-valencia":   return <PostValencia navigate={navigate} />;
      case "post-nike":       return <PostNike navigate={navigate} />;
      case "post-bibian":     return <PostBibian navigate={navigate} />;
      case "post-dutchess":   return <PostDutchess navigate={navigate} />;
      case "post-roparun":    return <PostRoparun navigate={navigate} />;
      case "post-roparunpre": return <PostRoparunPre navigate={navigate} />;
      case "post-bagan":      return <PostBagan navigate={navigate} />;
      case "post-friesland":  return <PostFriesland navigate={navigate} />;
      case "post-philipsecom":return <PostPhilipsEcom navigate={navigate} />;
      default:                return <PageHome navigate={navigate} />;
    }
  };

  return (
    <>
      <style>{CSS}</style>
      <Nav page={TOP_PAGES.includes(page) ? page : "blog"} navigate={navigate} />
      <main>{render()}</main>
      <Footer navigate={navigate} />
    </>
  );
}
