import { useState } from "react";

/* ─── SVG ICONS ─────────────────────────────────────────────────────────── */
const IconCompass = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor" stroke="none" />
  </svg>
);
const IconCalendar = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconUsers = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0-3-3.87" />
  </svg>
);
const IconGrid = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
  </svg>
);
const IconBell = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const IconSearch = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconBookmark = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);
const IconPlay = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
);
const IconChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
);
const IconChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
);
const IconUserRound = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const IconMoctale = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#22c55e" />
    <path d="M6 18L12 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8.5" y1="14" x2="15.5" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* ─── VIBE DONUT ─────────────────────────────────────────────────────────── */
const VIBE_DATA = [
  { label: "Sci-Fi",  color: "#22d3ee", pct: 35 },
  { label: "Action",  color: "#ef4444", pct: 30 },
  { label: "Drama",   color: "#a8896c", pct: 25 },
  { label: "Comedy",  color: "#eab308", pct: 10 },
];

function DonutChart() {
  const r = 58, cx = 80, cy = 80, sw = 20;
  const circ = 2 * Math.PI * r;
  const gap = 2.5;
  let offset = 0;
  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      {VIBE_DATA.map((d, i) => {
        const dash = (d.pct / 100) * circ - gap;
        const el = (
          <circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke={d.color} strokeWidth={sw}
            strokeDasharray={`${dash} ${circ - dash}`}
            strokeDashoffset={-offset}
            style={{ transform: "rotate(-90deg)", transformOrigin: `${cx}px ${cy}px` }}
          />
        );
        offset += (d.pct / 100) * circ;
        return el;
      })}
      <text x={cx} y={cy - 8} textAnchor="middle" fill="#9ca3af" fontSize="12" fontFamily="Inter,sans-serif">Sci-Fi</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fill="white" fontSize="24" fontWeight="700" fontFamily="Inter,sans-serif">35%</text>
    </svg>
  );
}

/* ─── CAST DATA ──────────────────────────────────────────────────────────── */
const CAST = [
  { name: "Pedro Pascal",       img: "https://i.pravatar.cc/80?img=11" },
  { name: "Vanessa Kirby",      img: "https://i.pravatar.cc/80?img=47" },
  { name: "Joseph Quinn",       img: "https://i.pravatar.cc/80?img=12" },
  { name: "Ebon Moss-Bachrach", img: "https://i.pravatar.cc/80?img=13" },
  { name: "Julia Garner",       img: "https://i.pravatar.cc/80?img=48" },
  { name: "Ralph Ineson",       img: "https://i.pravatar.cc/80?img=15" },
];

const TICKET_PLATFORMS = ["Fandango", "AMC Theatres", "Cinemark", "Regal"];

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */
export default function MoctaleMoviePage() {
  const [watched, setWatched]           = useState(true);
  const [inCollection, setInCollection] = useState(false);
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-[56px] left-0 right-0 z-40 bg-[#111] border-b border-zinc-800 px-5 py-4 flex flex-col gap-4 md:hidden">
          {[["Discover", IconCompass], ["Schedule", IconCalendar], ["Friends", IconUsers], ["Browse", IconGrid], ["Alerts", IconBell], ["Search", IconSearch]].map(([label, Icon]) => (
            <button key={label} className="flex items-center gap-3 text-zinc-300 hover:text-white text-sm transition-colors">
              <Icon />{label}
            </button>
          ))}
        </div>
      )}

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
        {/* Background image */}
        <img
          src="https://m.media-amazon.com/images/M/MV5BNTc1NjIwMDAtZDA4Yy00Njg3LTliMjMtMGI5NGViZDJmNDdkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          alt="The Fantastic Four: First Steps backdrop"
          className="w-full h-full object-cover object-center"
          onError={e => { e.target.style.background = "#1a1a2e"; e.target.style.display = "none"; }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

        {/* Play button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/15 border border-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/25 transition-all duration-200 cursor-pointer">
          <IconPlay />
        </button>

        {/* Bottom info row */}
        <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 flex items-end gap-4 md:gap-5">
          {/* Poster */}
          <div className="hidden sm:block w-[100px] md:w-[118px] flex-shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNzE2ZTY2NjgtMzZkZC00YWU2LWFhY2ItMTkxNGFiYzUxYTdlXkEyXkFqcGc@._V1_.jpg"
              alt="Poster"
              className="w-full aspect-[2/3] object-cover"
              onError={e => { e.target.parentElement.style.background = "#1c1c2e"; e.target.style.display = "none"; }}
            />
          </div>

          {/* Metadata */}
          <div className="flex-1 min-w-0">
            <p className="text-xs text-zinc-400 mb-1.5">Movie • 2025 • 1h 55m</p>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-3">
              The Fantastic Four: First Steps
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm">
              {[["Directed By","Matt Shakman"],["Country","USA"],["Language","English"],["Age Rating","13+"]].map(([k,v]) => (
                <div key={k}>
                  <span className="text-zinc-500 block text-xs">{k}</span>
                  <span className="text-zinc-100 font-semibold">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hidden sm:flex flex-col gap-2.5 flex-shrink-0 w-[200px]">
            <button
              onClick={() => setWatched(w => !w)}
              className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                watched
                  ? "bg-green-500 hover:bg-green-400 text-white"
                  : "bg-transparent border border-zinc-600 text-zinc-200 hover:border-zinc-400"
              }`}
            >
              {watched && <IconCheck />}
              {watched ? "Watched" : "Mark as Watched"}
            </button>
            <button
              onClick={() => setInCollection(c => !c)}
              className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium border transition-all duration-200 cursor-pointer ${
                inCollection
                  ? "border-zinc-500 bg-zinc-800 text-white"
                  : "border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:border-zinc-500"
              }`}
            >
              <IconBookmark />
              {inCollection ? "In Collection" : "Add to Collection"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile CTAs */}
      <div className="sm:hidden flex gap-2.5 px-4 pt-3">
        <button
          onClick={() => setWatched(w => !w)}
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all cursor-pointer ${
            watched ? "bg-green-500 text-white" : "border border-zinc-600 text-zinc-200"
          }`}
        >
          {watched && <IconCheck />}{watched ? "Watched" : "Mark Watched"}
        </button>
        <button
          onClick={() => setInCollection(c => !c)}
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium border transition-all cursor-pointer ${
            inCollection ? "border-zinc-500 bg-zinc-800 text-white" : "border-zinc-700 bg-zinc-900/80 text-zinc-200"
          }`}
        >
          <IconBookmark />{inCollection ? "Saved" : "Add to Collection"}
        </button>
      </div>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-4 md:px-8 pt-6 pb-16 max-w-[1200px] mx-auto">

        {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Family Friendly badge */}
          <div className="inline-flex items-center gap-1.5 border border-zinc-700 rounded-full px-3.5 py-1.5 text-xs text-zinc-300 mb-6">
            <IconUserRound />
            Family Friendly
          </div>

          {/* Overview */}
          <h2 className="text-lg font-semibold mb-3">Overview</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            Set in a 1960s alternate Earth, the film follows the Fantastic Four, Reed Richards, Sue Storm,
            Johnny Storm, and Ben Grimm. When Reed and Sue await their child, the Silver Surfer arrives,
            announcing Galactus will destroy Earth. The team must confront Galactus to save their world and
            child, facing personal struggles and public fear, while showcasing their powers and family bond.
          </p>

          {/* Genre tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Superhero","Family Drama","Action","Humour","Adaptation"].map(tag => (
              <span key={tag} className="border border-zinc-700 rounded-md px-3.5 py-1.5 text-xs text-zinc-300 bg-white/[0.03] hover:border-zinc-500 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>

          {/* Cast */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Cast</h2>
              <div className="flex gap-2">
                {[IconChevronLeft, IconChevronRight].map((Icon, i) => (
                  <button key={i} className="w-7 h-7 rounded-full bg-white/5 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-all cursor-pointer">
                    <Icon />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700">
              {CAST.map(actor => (
                <div key={actor.name} className="flex flex-col items-center gap-2 flex-shrink-0 w-16">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-zinc-800">
                    <img src={actor.img} alt={actor.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10.5px] text-zinc-400 text-center leading-snug">{actor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800/70 mb-6" />

          {/* Tickets On */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-zinc-400">Tickets On</h2>
            <div className="flex flex-wrap gap-3">
              {TICKET_PLATFORMS.map(p => (
                <button key={p} className="bg-zinc-900 border border-zinc-700/60 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg px-4 py-2.5 text-sm transition-all cursor-pointer">
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Vibe Chart ──────────────────────────────── */}
        <div className="lg:w-[240px] flex-shrink-0">
          <div className="bg-[#131313] border border-zinc-800/60 rounded-2xl p-5 sticky top-20">
            <h3 className="text-[15px] font-semibold mb-5">Vibe Chart</h3>
            <div className="flex justify-center mb-5">
              <DonutChart />
            </div>
            <div className="flex flex-col gap-3">
              {VIBE_DATA.map(d => (
                <div key={d.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                    <span className="text-zinc-300">{d.label}</span>
                  </div>
                  <span className="font-semibold text-white">{d.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}