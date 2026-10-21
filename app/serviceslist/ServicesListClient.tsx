"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path to where serviceCategories.ts lives
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

/* ══════════════════════ CONFIG ══════════════════════ */

type Category = (typeof serviceCategories)[number];

const CATEGORY_ICONS: Record<string, string> = {
  fssai: "🍽️",
  gst: "🧾",
  "income-tax": "📊",
  roc: "🏢",
};

// Accent per category (navy / blue family + a teal for FSSAI)
const CATEGORY_ACCENTS: Record<string, { from: string; to: string; soft: string }> = {
  gst: { from: "#00416a", to: "#0a6aa8", soft: "bg-sky-50" },
  "income-tax": { from: "#00527f", to: "#1a8fc9", soft: "bg-blue-50" },
  roc: { from: "#002b45", to: "#00527f", soft: "bg-slate-100" },
  fssai: { from: "#0b5a6b", to: "#16a3a3", soft: "bg-teal-50" },
};
const DEFAULT_ACCENT = CATEGORY_ACCENTS.gst;

const POPULAR_SEARCHES = ["GST Registration", "ITR", "Private Limited", "FSSAI License", "DPT-3", "Tax Audit"];

// Keyword → emoji so every card gets a meaningful icon without editing the data file
const KEYWORD_ICONS: [RegExp, string][] = [
  [/audit/i, "🔍"],
  [/return|gstr|itr|filing/i, "📝"],
  [/registration|incorporat|formation|license|licence/i, "✅"],
  [/cancel|closure|strike|revok|revival|restor/i, "🗂️"],
  [/refund/i, "💸"],
  [/notice|appeal|assessment|scrutiny|demand/i, "📬"],
  [/tds|tcs|advance tax|tax planning/i, "🧮"],
  [/director|dir-|din|kyc/i, "👤"],
  [/llp/i, "🤝"],
  [/share|capital|fdi|fc-gpr|charge/i, "📈"],
  [/trademark|msme|udyam|iec|import|export/i, "🏷️"],
  [/food|fssai|fostac|label/i, "🍽️"],
  [/gst/i, "🧾"],
  [/tax/i, "📊"],
  [/company|roc|agm|annual/i, "🏢"],
];
function iconFor(title: string, fallback: string) {
  for (const [re, icon] of KEYWORD_ICONS) if (re.test(title)) return icon;
  return fallback;
}

/* ══════════════════════ ROOT ══════════════════════ */

export default function ServicesListClient() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [activeSlug, setActiveSlug] = useState<string>(serviceCategories[0]?.slug ?? "");
  const searchRef = useRef<HTMLInputElement>(null);

  const totalServices = useMemo(
    () => serviceCategories.reduce((sum, cat) => sum + cat.services.length, 0),
    []
  );

  const query = search.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!query) return serviceCategories;
    return serviceCategories
      .map((cat) => ({
        ...cat,
        services: cat.services.filter(
          (s) =>
            s.title.toLowerCase().includes(query) ||
            s.shortDescription.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.services.length > 0);
  }, [query]);

  const matchCount = useMemo(
    () => filteredCategories.reduce((n, c) => n + c.services.length, 0),
    [filteredCategories]
  );

  // "/" focuses the search box, Esc clears it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
      if (e.key === "/" && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === searchRef.current) {
        setSearch("");
        searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll-spy for the sticky category bar
  const slugKey = filteredCategories.map((c) => c.slug).join(",");
  useEffect(() => {
    const ids = slugKey ? slugKey.split(",") : [];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSlug(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [slugKey]);

  return (
    <main className="bg-slate-50 text-gray-800 overflow-x-hidden">
      <GlobalStyles />
      <Hero
        totalServices={totalServices}
        categoryCount={serviceCategories.length}
        search={search}
        onSearchChange={setSearch}
        searchRef={searchRef}
      />
      <InquiryFormButton />

      <StickyBar
        categories={filteredCategories}
        activeSlug={activeSlug}
        view={view}
        onViewChange={setView}
        matchCount={matchCount}
        searching={!!query}
      />

      {filteredCategories.length === 0 ? (
        <NoResults search={search} onClear={() => setSearch("")} />
      ) : (
        filteredCategories.map((cat) => (
          <CategorySection key={cat.slug} category={cat} view={view} query={query} />
        ))
      )}

      <HowItWorks />
      <FinalCTA />
      <BackToTop />
      <Footar />
    </main>
  );
}

/* ══════════════════════ GLOBAL STYLES ══════════════════════ */

function GlobalStyles() {
  return (
    <style>{`
      @keyframes sl-fade-up { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes sl-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
      @keyframes sl-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes sl-shine { from { transform: translateX(-120%) skewX(-20deg); } to { transform: translateX(400%) skewX(-20deg); } }
      .sl-fade-up { animation: sl-fade-up .55s cubic-bezier(.22,1,.36,1) both; }
      .sl-float { animation: sl-float 7s ease-in-out infinite; }
      .sl-aurora { animation: sl-aurora 14s ease-in-out infinite; }
      .sl-card:hover .sl-shine { animation: sl-shine .9s ease; }
      .sl-hide-scroll::-webkit-scrollbar { display: none; }
      .sl-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .sl-fade-up, .sl-float, .sl-aurora { animation: none !important; }
      }
    `}</style>
  );
}

/* ══════════════════════ HERO ══════════════════════ */

function Hero({
  totalServices,
  categoryCount,
  search,
  onSearchChange,
  searchRef,
}: {
  totalServices: number;
  categoryCount: number;
  search: string;
  onSearchChange: (v: string) => void;
  searchRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      {/* aurora blobs */}
      <div className="sl-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="sl-aurora absolute -bottom-40 right-0 w-[30rem] h-[30rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-6s]" />
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* floating chips (desktop) */}
      <div className="hidden lg:block">
        <span className="sl-float absolute top-24 left-[7%] text-3xl bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-3">🧾</span>
        <span className="sl-float absolute top-40 right-[8%] text-3xl bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-3 [animation-delay:-2s]">📊</span>
        <span className="sl-float absolute bottom-16 left-[12%] text-3xl bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-3 [animation-delay:-4s]">🏢</span>
        <span className="sl-float absolute bottom-24 right-[14%] text-3xl bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-4 py-3 [animation-delay:-1s]">🍽️</span>
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 pt-16 pb-24 md:pt-20 md:pb-28 text-center">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60 flex items-center justify-center gap-2 sl-fade-up">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-white">Services</span>
        </nav>

        <span className="sl-fade-up inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
          </span>
          {totalServices}+ CA-assisted services
        </span>

        <h1 className="sl-fade-up text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5 [animation-delay:80ms]">
          Every Compliance Service,
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
            In One Place
          </span>
        </h1>
        <p className="sl-fade-up text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mx-auto mb-9 [animation-delay:160ms]">
          GST, Income Tax, ROC and FSSAI — search the full catalogue or jump to a category.
          Every service is handled by a qualified CA team, start to finish.
        </p>

        {/* search */}
        <div className="sl-fade-up max-w-2xl mx-auto [animation-delay:240ms]">
          <div className="group relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 shadow-2xl shadow-black/20 focus-within:bg-white focus-within:border-white transition-colors duration-200">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 group-focus-within:text-[#00416a] transition-colors" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </span>
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search — GST registration, DPT-3, ITR, FSSAI…"
              aria-label="Search services"
              className="w-full bg-transparent rounded-2xl pl-14 pr-24 py-4 sm:py-5 text-base text-white placeholder-white/60 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {search ? (
                <button
                  onClick={() => onSearchChange("")}
                  aria-label="Clear search"
                  className="w-8 h-8 rounded-full bg-gray-200/80 text-gray-600 hover:bg-gray-300 flex items-center justify-center text-sm transition"
                >
                  ✕
                </button>
              ) : (
                <kbd className="hidden sm:inline-block text-[11px] font-semibold text-white/70 border border-white/30 rounded-md px-2 py-1 group-focus-within:hidden">
                  /
                </kbd>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/50 mr-1">Popular</span>
            {POPULAR_SEARCHES.map((p) => (
              <button
                key={p}
                onClick={() => onSearchChange(p)}
                className="text-xs sm:text-sm text-white/90 bg-white/10 hover:bg-white hover:text-[#00416a] border border-white/20 px-3 py-1.5 rounded-full transition"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* stats */}
        <div className="sl-fade-up mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto [animation-delay:320ms]">
          {[
            { k: `${totalServices}+`, v: "Services" },
            { k: String(categoryCount), v: "Categories" },
            { k: "CA-led", v: "Every filing" },
            { k: "Pan-India", v: "100% online" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 px-4 py-4">
              <div className="text-xl sm:text-2xl font-extrabold">{s.k}</div>
              <div className="text-xs text-sky-100/70 mt-0.5">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* curved bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-10 text-slate-50" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,60 L0,30 Q360,-10 720,25 T1440,20 L1440,60 Z" />
      </svg>
    </section>
  );
}

/* ══════════════════════ STICKY BAR ══════════════════════ */

function StickyBar({
  categories,
  activeSlug,
  view,
  onViewChange,
  matchCount,
  searching,
}: {
  categories: Category[];
  activeSlug: string;
  view: "grid" | "list";
  onViewChange: (v: "grid" | "list") => void;
  matchCount: number;
  searching: boolean;
}) {
  if (categories.length === 0) return null;

  return (
    <div className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2 overflow-x-auto sl-hide-scroll">
          {categories.map((cat) => {
            const active = cat.slug === activeSlug;
            return (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className={`flex-shrink-0 flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
                  active
                    ? "bg-[#00416a] text-white border-[#00416a] shadow-md shadow-[#00416a]/25"
                    : "text-[#00416a] bg-[#00416a]/5 border-[#00416a]/15 hover:bg-[#00416a]/10"
                }`}
              >
                <span>{CATEGORY_ICONS[cat.slug] ?? "📋"}</span>
                {cat.category}
                <span className={`text-xs ${active ? "text-white/70" : "text-[#00416a]/50"}`}>
                  {cat.services.length}
                </span>
              </a>
            );
          })}
        </div>

        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          {searching && (
            <span className="text-xs font-semibold text-[#00416a] bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full">
              {matchCount} result{matchCount === 1 ? "" : "s"}
            </span>
          )}
          <div className="flex rounded-xl border border-gray-200 bg-gray-50 p-1" role="group" aria-label="Layout">
            {(["grid", "list"] as const).map((v) => (
              <button
                key={v}
                onClick={() => onViewChange(v)}
                aria-pressed={view === v}
                aria-label={`${v} view`}
                className={`w-9 h-8 rounded-lg flex items-center justify-center transition ${
                  view === v ? "bg-[#00416a] text-white shadow" : "text-gray-500 hover:text-[#00416a]"
                }`}
              >
                {v === "grid" ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="4" rx="1.5" /><rect x="3" y="10" width="18" height="4" rx="1.5" /><rect x="3" y="16" width="18" height="4" rx="1.5" /></svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ HIGHLIGHT ══════════════════════ */

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${safe})`, "ig"));
  return (
    <>
      {parts.map((p, i) =>
        p.toLowerCase() === query ? (
          <mark key={i} className="bg-yellow-200/80 text-inherit rounded px-0.5">
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

/* ══════════════════════ CATEGORY SECTION ══════════════════════ */

function CategorySection({
  category,
  view,
  query,
}: {
  category: Category;
  view: "grid" | "list";
  query: string;
}) {
  const accent = CATEGORY_ACCENTS[category.slug] ?? DEFAULT_ACCENT;
  const catIcon = CATEGORY_ICONS[category.slug] ?? "📋";

  return (
    <section id={category.slug} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 scroll-mt-20">
      {/* header card */}
      <div
        className="relative overflow-hidden rounded-3xl p-6 sm:p-8 mb-8 text-white shadow-xl"
        style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
      >
        <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-white/10" />
        <div className="absolute right-16 -bottom-16 w-40 h-40 rounded-full bg-white/5" />
        <div className="relative flex items-start gap-4 sm:gap-5">
          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center text-3xl">
            {catIcon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{category.category}</h2>
              <span className="text-xs font-semibold bg-white/15 border border-white/25 px-3 py-1 rounded-full">
                {category.services.length} services
              </span>
            </div>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-3xl">
              {category.description}
            </p>
          </div>
          <button
            onClick={() => openInquiryForm(category.category)}
            className="hidden md:inline-flex flex-shrink-0 items-center gap-2 bg-white text-[#00416a] text-sm font-bold px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Talk to a CA →
          </button>
        </div>
      </div>

      {/* cards */}
      <div
        className={
          view === "grid"
            ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            : "flex flex-col gap-3"
        }
      >
        {category.services.map((service, i) => (
          <ServiceCard
            key={service.slug}
            index={i}
            categorySlug={category.slug}
            service={service}
            fallbackIcon={catIcon}
            accent={accent}
            view={view}
            query={query}
          />
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ SERVICE CARD ══════════════════════ */

function ServiceCard({
  index,
  categorySlug,
  service,
  fallbackIcon,
  accent,
  view,
  query,
}: {
  index: number;
  categorySlug: string;
  service: { slug: string; title: string; shortDescription: string };
  fallbackIcon: string;
  accent: { from: string; to: string; soft: string };
  view: "grid" | "list";
  query: string;
}) {
  const href = `/serviceslist/${categorySlug}/${service.slug}`;
  const icon = iconFor(service.title, fallbackIcon);
  const delay = `${Math.min(index, 8) * 45}ms`;

  const iconBox = (
    <div
      className={`flex-shrink-0 w-11 h-11 rounded-xl ${accent.soft} flex items-center justify-center text-xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}
    >
      {icon}
    </div>
  );

  if (view === "list") {
    return (
      <div
        className="sl-card sl-fade-up group relative overflow-hidden bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-4 flex items-center gap-4 hover:border-[#00416a]/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        style={{ animationDelay: delay }}
      >
        <span
          className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"
          style={{ backgroundImage: `linear-gradient(${accent.from}, ${accent.to})` }}
        />
        {iconBox}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[#00416a] leading-snug">
            <Link href={href} className="hover:underline">
              <Highlight text={service.title} query={query} />
            </Link>
          </h3>
          <p className="text-sm text-gray-600 line-clamp-1 sm:line-clamp-2">
            <Highlight text={service.shortDescription} query={query} />
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href={href} className="hidden sm:inline text-sm font-semibold text-[#00416a] hover:underline">
            Details
          </Link>
          <button
            onClick={() => openInquiryForm(service.title)}
            className="text-xs font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition"
          >
            Enquire
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="sl-card sl-fade-up group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-5 flex flex-col hover:border-[#00416a]/40 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      {/* top accent bar */}
      <span
        className="absolute inset-x-0 top-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
        style={{ backgroundImage: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
      />
      {/* shine sweep */}
      <span className="sl-shine pointer-events-none absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-[120%]" />

      <div className="flex items-start justify-between mb-4">
        {iconBox}
        <span className="text-[11px] font-bold text-gray-300 group-hover:text-[#00416a]/40 transition tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-bold text-[#00416a] mb-2 leading-snug text-[17px]">
        <Link href={href} className="hover:underline decoration-2 underline-offset-2">
          <Highlight text={service.title} query={query} />
        </Link>
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
        <Highlight text={service.shortDescription} query={query} />
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <Link
          href={href}
          className="group/link inline-flex items-center gap-1 text-sm font-semibold text-[#00416a]"
        >
          Learn more
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
        <button
          onClick={() => openInquiryForm(service.title)}
          className="ml-auto text-xs font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] active:scale-95 transition"
        >
          Enquire
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════ NO RESULTS ══════════════════════ */

function NoResults({ search, onClear }: { search: string; onClear: () => void }) {
  return (
    <section className="max-w-2xl mx-auto px-6 py-24 text-center sl-fade-up">
      <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-white border border-gray-200 shadow-lg flex items-center justify-center text-4xl">
        🔍
      </div>
      <h2 className="text-2xl font-extrabold text-[#00416a] mb-2">
        No services match “{search}”
      </h2>
      <p className="text-gray-500 mb-6 leading-relaxed">
        Try a different term, or tell us what you need — our team will point you to the right
        service even if it isn’t listed by that exact name.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onClear}
          className="border-2 border-[#00416a] text-[#00416a] px-6 py-3 rounded-xl font-semibold hover:bg-[#00416a]/5 transition"
        >
          Clear Search
        </button>
        <button
          onClick={() => openInquiryForm()}
          className="bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#002b45] transition shadow-lg shadow-[#00416a]/20"
        >
          Ask Us Directly →
        </button>
      </div>
    </section>
  );
}

/* ══════════════════════ HOW IT WORKS ══════════════════════ */

function HowItWorks() {
  const steps = [
    { n: "01", icon: "📝", t: "Tell us what you need", d: "Pick a service or just describe your situation in the 30-second form." },
    { n: "02", icon: "👨‍💼", t: "A CA reviews your case", d: "A qualified professional checks your documents and confirms the exact scope." },
    { n: "03", icon: "📤", t: "Upload documents online", d: "Share files securely from your phone — no office visits, anywhere in India." },
    { n: "04", icon: "✅", t: "We file & keep you updated", d: "Filing is done, acknowledgements are shared, and deadlines are tracked for you." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60">How it works</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-2">
          From enquiry to filing in four steps
        </h2>
      </div>
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] border-t-2 border-dashed border-[#00416a]/20" />
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white flex items-center justify-center text-2xl shadow-lg shadow-[#00416a]/25 mb-4">
              {s.icon}
              <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-white text-[#00416a] border border-[#00416a]/20 rounded-full px-1.5 py-0.5">
                {s.n}
              </span>
            </div>
            <h3 className="font-bold text-[#00416a] mb-1">{s.t}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ FINAL CTA ══════════════════════ */

function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] shadow-2xl px-6 py-12 sm:px-12 sm:py-16 text-white">
        <div className="sl-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-4">
              Free consultation
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Not sure which service you need?
            </h3>
            <p className="text-lg text-sky-100/90 leading-relaxed">
              Tell us about your business in a few lines and a CA from our team will tell you
              exactly what’s required — no obligation, no pressure.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-white/80">
              <li>✓ Transparent fees</li>
              <li>✓ CA-assisted</li>
              <li>✓ 100% online</li>
            </ul>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openInquiryForm()}
              className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Consultation →
            </button>
            <Link
              href="/contact"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition text-center"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ BACK TO TOP ══════════════════════ */

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 left-4 sm:left-6 z-40 w-11 h-11 rounded-full bg-white text-[#00416a] border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition flex items-center justify-center"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}