"use client";

// app/city/gst-services/[city]/GstCityClient.tsx

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Footar from "@/components/Footar"; // ← remove if your layout already renders the footer
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

/* ══════════════════════ TYPES ══════════════════════ */

type ServiceView = {
  slug: string;
  title: string;
  shortDescription: string;
  features: string[];
  documentsRequired: string[];
  idealFor: string[];
  sections: { heading: string; body: string }[];
};

type Props = {
  locName: string;
  label: string;
  state: string;
  kind: "district" | "subdistrict";
  districtName: string;
  districtHref: string;
  subDistrictCount: number;
  gstCode: string | null;
  intro: string;
  services: ServiceView[];
  faqs: { q: string; a: string }[];
  related: { key: string; name: string; href: string }[];
};

const NAV = [
  { id: "services", label: "Services" },
  { id: "checker", label: "Do I need GST?" },
  { id: "faqs", label: "FAQs" },
  { id: "nearby", label: "Nearby areas" },
];

const iconFor = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("registration")) return "📝";
  if (t.includes("refund")) return "💸";
  if (t.includes("lut")) return "✈️";
  if (t.includes("notice")) return "📬";
  if (t.includes("audit")) return "🔍";
  if (t.includes("invoice") || t.includes("e-way")) return "🧾";
  if (t.includes("return") || t.includes("gstr")) return "📅";
  if (t.includes("cancel") || t.includes("amend")) return "✏️";
  if (t.includes("reconcil") || t.includes("itc")) return "⚖️";
  return "📊";
};

/* ══════════════════════ PRIMITIVES ══════════════════════ */

function GlobalStyles() {
  return (
    <style>{`
      @keyframes gc-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes gc-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      @keyframes gc-pulse { 0% { box-shadow: 0 0 0 0 rgba(251,191,36,.55); } 70% { box-shadow: 0 0 0 12px rgba(251,191,36,0); } 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); } }
      @keyframes gc-ring { 0%,60%,100% { transform: rotate(0); } 10%,30% { transform: rotate(-14deg); } 20%,40% { transform: rotate(14deg); } 50% { transform: rotate(-8deg); } }
      @keyframes gc-shine { 0% { transform: translateX(-120%) skewX(-20deg); } 60%,100% { transform: translateX(260%) skewX(-20deg); } }
      .gc-aurora { animation: gc-aurora 14s ease-in-out infinite; }
      .gc-float { animation: gc-float 7s ease-in-out infinite; }
      .gc-pulse { animation: gc-pulse 2s infinite; }
      .gc-ring { animation: gc-ring 3.2s ease-in-out infinite; transform-origin: 50% 50%; }
      .gc-shine { animation: gc-shine 3.8s ease-in-out infinite; }
      .gc-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .gc-reveal.gc-in { opacity: 1; transform: none; }
      .gc-hide-scroll::-webkit-scrollbar { display: none; }
      .gc-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .gc-aurora, .gc-float, .gc-pulse, .gc-ring, .gc-shine { animation: none !important; }
        .gc-reveal { opacity: 1; transform: none; transition: none; }
      }
    `}</style>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`gc-reveal ${shown ? "gc-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Heading({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-7">
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00416a]/70 border border-[#00416a]/15 bg-[#00416a]/5 px-3 py-1.5 rounded-full mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00416a]" />
        {label}
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#00416a] leading-tight">{title}</h2>
      {sub && <p className="mt-2 text-gray-600 max-w-2xl">{sub}</p>}
    </Reveal>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{v}{suffix}</>;
}

/* ══════════════════════ FLOATING CONTACT BUTTON ══════════════════════ */

function FloatingCTA({ topic }: { topic: string }) {
  return (
    <button
      type="button"
      onClick={() => openInquiryForm(topic)}
      aria-label="Contact Taxvio: talk to a CA, free callback"
      className="gc-pulse group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-[70] flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 py-2 pl-2 pr-4 sm:pr-5 text-[#00416a] shadow-xl ring-2 ring-white/70 transition hover:scale-105 active:scale-95"
    >
      <span aria-hidden className="gc-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-sm" />
      <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#00416a] text-white shadow-inner">
        <svg viewBox="0 0 24 24" className="gc-ring h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
      </span>
      <span className="relative text-left leading-tight">
        <span className="block text-[10px] font-bold uppercase tracking-widest opacity-70">Free CA callback</span>
        <span className="block text-sm font-extrabold">Contact Us</span>
      </span>
    </button>
  );
}

/* ══════════════════════ ROOT ══════════════════════ */

export default function GstCityClient(p: Props) {
  const [active, setActive] = useState("services");
  const topic = `GST Services in ${p.label}`;

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-slate-50 text-gray-800 overflow-x-clip">
      <GlobalStyles />
      <InquiryFormButton />
      <FloatingCTA topic={topic} />
      <Hero p={p} topic={topic} />
      <ChipNav active={active} topic={topic} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 grid lg:grid-cols-[1fr_320px] gap-10">
        <div className="min-w-0 space-y-16 md:space-y-20">
          <Services p={p} />
          <Checker p={p} />
          <Faqs faqs={p.faqs} />
          <Nearby p={p} />
          <Reveal>
            <p className="text-xs leading-5 text-gray-500">
              This page is for general information and is not legal or tax advice. GST rates, limits, due dates and
              procedures change from time to time, so confirm the current position on the official GST portal or with a
              qualified professional before acting.
            </p>
          </Reveal>
        </div>
        <aside className="hidden lg:block">
          <SideCard p={p} topic={topic} />
        </aside>
      </div>

      <FinalCta p={p} topic={topic} />
      <Footar />
    </main>
  );
}

/* ══════════════════════ HERO + NAV ══════════════════════ */

function Hero({ p, topic }: { p: Props; topic: string }) {
  const facts: { k: string; v: ReactNode }[] = [
    { k: "State", v: p.state },
    { k: "District", v: p.districtName },
    { k: p.kind === "district" ? "Tehsils / sub-districts" : "Area type", v: p.kind === "district" ? <CountUp to={p.subDistrictCount} /> : "Tehsil / sub-district" },
    { k: "Services", v: <CountUp to={p.services.length} suffix="+" /> },
  ];
  if (p.gstCode) facts.push({ k: "GSTIN starts with", v: p.gstCode });

  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="gc-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="gc-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 25% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 25% 40%, black 20%, transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-12 pb-24 md:pt-16 md:pb-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link><span>/</span>
            <Link href="/city/gst-services" className="hover:text-white transition">GST services</Link><span>/</span>
            <span className="text-white">{p.locName}</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            📍 {p.label}, {p.state}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST Services in{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">{p.locName}</span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            {p.intro} CA-assisted GST registration, return filing, refunds, notices and more for businesses in {p.label}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button onClick={() => openInquiryForm(topic)} className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200">
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#services" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              See all {p.services.length} services
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {facts.map((f) => (
              <div key={f.k} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-4 py-2.5">
                <p className="text-[10px] uppercase tracking-widest text-sky-200/70">{f.k}</p>
                <p className="font-bold text-sm">{f.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="gc-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">How it works</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">GST done online, from {p.locName}</p>
            <ol className="space-y-3 mb-5">
              {[
                ["Share your details", "Fill the short contact form. No office visit."],
                ["CA reviews your case", "We confirm the right service and the documents."],
                ["We file on the portal", "You get acknowledgements and a clear status."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center">{i + 1}</span>
                  <span className="text-sm"><b className="block text-[#00416a]">{t}</b><span className="text-gray-500">{d}</span></span>
                </li>
              ))}
            </ol>
            <div className="rounded-2xl bg-[#00416a] text-white px-4 py-3 text-sm flex items-center gap-3">
              <span className="text-xl">👨‍💼</span>
              <span><b>CA-assisted</b> across {p.state}</span>
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 w-full h-10 text-slate-50" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,60 L0,30 Q360,-10 720,25 T1440,20 L1440,60 Z" />
      </svg>
    </section>
  );
}

function ChipNav({ active, topic }: { active: string; topic: string }) {
  return (
    <div className="sticky top-[72px] z-40 bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3">
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto gc-hide-scroll">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`flex-shrink-0 text-sm font-semibold px-3.5 py-2 rounded-full transition-all whitespace-nowrap ${active === n.id ? "bg-[#00416a] text-white shadow-md shadow-[#00416a]/25" : "text-[#00416a]/80 hover:bg-[#00416a]/5"}`}>
              {n.label}
            </a>
          ))}
        </div>
        <button onClick={() => openInquiryForm(topic)} className="hidden md:inline-flex flex-shrink-0 text-xs font-bold bg-[#00416a] text-white px-4 py-2.5 rounded-lg hover:bg-[#002b45] active:scale-95 transition">
          Enquire now
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════ SERVICES ══════════════════════ */

function Services({ p }: { p: Props }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s ? p.services.filter((x) => (x.title + " " + x.shortDescription).toLowerCase().includes(s)) : p.services;
  }, [q, p.services]);

  // open an article when the URL points at it, e.g. #svc-gst-registration
  useEffect(() => {
    const h = window.location.hash;
    if (h.startsWith("#svc-")) {
      const slug = h.slice(5);
      setOpen((o) => ({ ...o, [slug]: true }));
      setTimeout(() => document.getElementById("svc-" + slug)?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
    }
  }, []);

  const jump = (slug: string) => {
    setOpen((o) => ({ ...o, [slug]: true }));
    setTimeout(() => document.getElementById("svc-" + slug)?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };
  const allOpen = filtered.length > 0 && filtered.every((s) => open[s.slug]);

  return (
    <section id="services" className="scroll-mt-40">
      <Heading label="Services" title={`GST services available in ${p.label}`} sub="Search a service, then open it to read how it works, what you get and which documents you need." />

      <Reveal>
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden>🔎</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={`Search ${p.services.length} GST services…`}
              aria-label="Search GST services"
              className="w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-[#00416a]/15 focus:border-[#00416a]"
            />
          </div>
          <button
            onClick={() => setOpen(Object.fromEntries(filtered.map((s) => [s.slug, !allOpen])))}
            className="rounded-2xl border border-[#00416a]/25 bg-white text-[#00416a] font-semibold text-sm px-5 py-3.5 hover:bg-[#00416a]/5 transition"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>
        <p className="text-xs text-gray-500 mb-4" aria-live="polite">Showing {filtered.length} of {p.services.length} services</p>
      </Reveal>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
          <p className="font-bold text-[#00416a] mb-1">No service matches “{q}”</p>
          <p className="text-sm text-gray-500 mb-4">Tell us what you need and a CA will point you to the right one.</p>
          <button onClick={() => openInquiryForm(`GST Services in ${p.label}`)} className="bg-[#00416a] text-white font-bold px-5 py-2.5 rounded-lg hover:bg-[#002b45] transition">Ask a CA →</button>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {filtered.map((s, i) => (
          <Reveal key={s.slug} delay={Math.min(i, 8) * 40}>
            <a href={`#svc-${s.slug}`} onClick={() => jump(s.slug)} className="group block h-full bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg mb-2.5 group-hover:scale-110 group-hover:-rotate-6 transition-transform">{iconFor(s.title)}</div>
              <span className="block font-bold text-[#00416a] leading-snug">{s.title}</span>
              <span className="mt-1 block text-sm text-gray-600 line-clamp-2">{s.shortDescription}</span>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#00416a]">Read more <span className="group-hover:translate-x-1 transition-transform">→</span></span>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((s) => (
          <ServiceArticle key={s.slug} s={s} p={p} isOpen={!!open[s.slug]} toggle={() => setOpen((o) => ({ ...o, [s.slug]: !o[s.slug] }))} />
        ))}
      </div>
    </section>
  );
}

function ServiceArticle({ s, p, isOpen, toggle }: { s: ServiceView; p: Props; isOpen: boolean; toggle: () => void }) {
  const [tab, setTab] = useState<"about" | "get" | "docs" | "ideal">("about");
  const [checked, setChecked] = useState<boolean[]>(() => s.documentsRequired.map(() => false));
  const done = checked.filter(Boolean).length;
  const pct = s.documentsRequired.length ? Math.round((done / s.documentsRequired.length) * 100) : 0;
  const tabs = [
    { id: "about", label: "How it works" },
    { id: "get", label: "What you get" },
    { id: "docs", label: "Documents" },
    { id: "ideal", label: "Ideal for" },
  ] as const;

  return (
    <article id={`svc-${s.slug}`} className={`scroll-mt-40 rounded-3xl border bg-white transition-all duration-300 ${isOpen ? "border-[#00416a]/35 shadow-xl shadow-[#00416a]/10" : "border-gray-200 hover:border-[#00416a]/25"}`}>
      <button onClick={toggle} aria-expanded={isOpen} className="w-full flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left">
        <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white flex items-center justify-center text-xl shadow-md">{iconFor(s.title)}</span>
        <span className="flex-1 min-w-0">
          <h2 className="font-extrabold text-[#00416a] text-lg sm:text-xl leading-snug">{s.title} in {p.locName}</h2>
          <span className="block text-sm text-gray-600 mt-0.5 line-clamp-2">{s.shortDescription}</span>
        </span>
        <span className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${isOpen ? "bg-[#00416a] text-white rotate-45" : "bg-[#00416a]/10 text-[#00416a]"}`}>+</span>
      </button>

      <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6">
            <div role="tablist" aria-label={`${s.title} details`} className="flex gap-1.5 overflow-x-auto gc-hide-scroll mb-5 border-b border-gray-100 pb-3">
              {tabs.map((t) => (
                <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)} className={`flex-shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition ${tab === t.id ? "bg-[#00416a] text-white shadow" : "text-[#00416a]/80 hover:bg-[#00416a]/5"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            <div role="tabpanel" hidden={tab !== "about"} className="space-y-5">
              {s.sections.map((sec) => (
                <section key={sec.heading}>
                  <h3 className="text-base font-bold text-gray-900">{sec.heading}</h3>
                  <p className="mt-1.5 leading-7 text-gray-700">{sec.body}</p>
                </section>
              ))}
            </div>

            <div role="tabpanel" hidden={tab !== "get"}>
              <ul className="grid sm:grid-cols-2 gap-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 px-4 py-3 text-sm text-gray-800">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            <div role="tabpanel" hidden={tab !== "docs"}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-[#00416a] text-sm">Your document checklist</p>
                <p className="text-xs font-semibold text-gray-500 tabular-nums">{done}/{s.documentsRequired.length} ready</p>
              </div>
              <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden mb-4">
                <div className="h-full rounded-full bg-gradient-to-r from-[#00416a] to-emerald-500 transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
              <ul className="space-y-2">
                {s.documentsRequired.map((d, i) => (
                  <li key={d}>
                    <label className={`flex items-center gap-3 cursor-pointer rounded-xl border px-4 py-2.5 transition-all ${checked[i] ? "bg-emerald-50 border-emerald-200" : "bg-gray-50 border-gray-200 hover:border-[#00416a]/30"}`}>
                      <input type="checkbox" checked={checked[i]} onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))} className="w-5 h-5 accent-[#00416a]" />
                      <span className={`text-sm font-medium ${checked[i] ? "text-emerald-800 line-through decoration-emerald-400" : "text-gray-800"}`}>{d}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div role="tabpanel" hidden={tab !== "ideal"}>
              <ul className="flex flex-wrap gap-2">
                {s.idealFor.map((i) => (
                  <li key={i} className="rounded-full bg-sky-50 border border-sky-200 text-[#00416a] text-sm font-semibold px-4 py-2">{i}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-sky-50 text-[#00416a] px-5 py-4 text-sm flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="flex-1 font-medium">Need {s.title} in {p.label}? A CA from our team will call you back with a clear plan.</span>
              <button onClick={() => openInquiryForm(`${s.title} in ${p.label}`)} className="bg-[#00416a] text-white font-bold px-5 py-2.5 rounded-lg hover:bg-[#002b45] active:scale-95 transition">
                Get {s.title} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ══════════════════════ REGISTRATION CHECKER ══════════════════════ */

function Checker({ p }: { p: Props }) {
  const [kind, setKind] = useState<"goods" | "services" | "both">("goods");
  const [turn, setTurn] = useState(25);
  const [inter, setInter] = useState(false);
  const [ecom, setEcom] = useState(false);
  const limit = kind === "goods" ? 40 : 20;
  const forced = (kind !== "services" && inter) || ecom;
  const pct = Math.min(100, (turn / limit) * 100);
  const state: "must" | "near" | "below" = forced || turn > limit ? "must" : turn >= limit * 0.75 ? "near" : "below";
  const msg = {
    must: forced && turn <= limit
      ? "Registration is likely required whatever your turnover, because of inter-state supply of goods or selling through an e-commerce platform."
      : "Your turnover is above the usual limit, so GST registration is likely required.",
    near: "You are close to the limit. Plan registration now so you can issue tax invoices from the day you cross it.",
    below: "You are below the usual limit. Registration is optional, though many businesses register voluntarily to claim input tax credit and to sell to larger buyers.",
  }[state];
  const tone = { must: "bg-red-50 border-red-200 text-red-900", near: "bg-amber-50 border-amber-200 text-amber-900", below: "bg-emerald-50 border-emerald-200 text-emerald-900" }[state];

  return (
    <section id="checker" className="scroll-mt-40">
      <Heading label="Quick check" title={`Does your ${p.locName} business need GST registration?`} sub="Answer three things and see where you stand against the usual limits." />
      <Reveal>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <p className="text-sm font-semibold text-gray-700 mb-2">What do you supply?</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {([["goods", "Goods"], ["services", "Services"], ["both", "Goods and services"]] as const).map(([v, l]) => (
              <button key={v} onClick={() => setKind(v)} aria-pressed={kind === v} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${kind === v ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}>{l}</button>
            ))}
          </div>

          <label className="block text-sm font-semibold text-gray-700">Annual turnover: <span className="text-[#00416a] tabular-nums">₹{turn} lakh</span></label>
          <input type="range" min={0} max={100} step={1} value={turn} onChange={(e) => setTurn(+e.target.value)} className="w-full mt-3 accent-[#00416a]" />

          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {[
              [inter, setInter, "I supply goods to other states"],
              [ecom, setEcom, "I sell through e-commerce platforms"],
            ].map(([v, set, l]) => (
              <label key={l as string} className={`flex items-center gap-3 cursor-pointer rounded-xl border px-4 py-3 transition ${v ? "bg-sky-50 border-[#00416a]/40" : "bg-gray-50 border-gray-200 hover:border-[#00416a]/30"}`}>
                <input type="checkbox" checked={v as boolean} onChange={(e) => (set as (b: boolean) => void)(e.target.checked)} className="w-5 h-5 accent-[#00416a]" />
                <span className="text-sm font-medium text-gray-800">{l as string}</span>
              </label>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-xs text-gray-600 mb-1.5"><span>Turnover against the usual ₹{limit} lakh limit</span><span className="tabular-nums">{Math.round(pct)}%</span></div>
            <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-500 ${state === "must" ? "bg-red-500" : state === "near" ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${pct}%` }} />
            </div>
          </div>

          <div className={`mt-5 rounded-2xl border px-5 py-4 text-sm leading-relaxed ${tone}`} aria-live="polite">
            <p className="font-bold mb-1">{state === "must" ? "Registration likely required" : state === "near" ? "Near the limit" : "Below the limit"}</p>
            {msg}
          </div>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <button onClick={() => openInquiryForm(`GST Registration in ${p.label}`)} className="bg-[#00416a] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#002b45] active:scale-95 transition">Get GST registration in {p.locName} →</button>
            <p className="text-xs text-gray-400">Indicative only. Lower limits apply in some special category states, and other rules can apply. A CA confirms your position.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ══════════════════════ FAQS ══════════════════════ */

function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="scroll-mt-40">
      <Heading label="FAQs" title="GST questions from local businesses" />
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const on = open === i;
          return (
            <Reveal key={f.q} delay={Math.min(i, 5) * 40}>
              <div className={`rounded-2xl border bg-white transition-all duration-300 ${on ? "border-[#00416a]/40 shadow-lg shadow-[#00416a]/10" : "border-gray-200 hover:border-[#00416a]/25"}`}>
                <button onClick={() => setOpen(on ? null : i)} aria-expanded={on} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className={`font-bold ${on ? "text-[#00416a]" : "text-gray-800"}`}>{f.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${on ? "bg-[#00416a] text-white rotate-45" : "bg-[#00416a]/10 text-[#00416a]"}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden"><p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</p></div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ══════════════════════ NEARBY ══════════════════════ */

function Nearby({ p }: { p: Props }) {
  const [q, setQ] = useState("");
  const [all, setAll] = useState(false);
  if (p.related.length === 0 && p.kind === "district") return null;
  const list = q.trim() ? p.related.filter((r) => r.name.toLowerCase().includes(q.trim().toLowerCase())) : p.related;
  const collapsed = !all && !q && p.related.length > 24;
  return (
    <section id="nearby" className="scroll-mt-40">
      <Heading
        label="Nearby areas"
        title={p.kind === "district" ? `GST services in tehsils of ${p.districtName}` : `GST services in other areas of ${p.districtName} district`}
      />
      <Reveal>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 shadow-sm">
          {p.related.length > 12 && (
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Find your tehsil or town…" aria-label="Find a nearby area" className="w-full mb-4 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
          )}
          <ul className={`flex flex-wrap gap-2 ${collapsed ? "max-h-40 overflow-hidden" : ""}`}>
            {p.kind === "subdistrict" && (
              <li>
                <Link href={p.districtHref} prefetch={false} className="inline-block rounded-full bg-[#00416a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0a5a8c] transition">{p.districtName} district</Link>
              </li>
            )}
            {list.map((r) => (
              <li key={r.key}>
                <Link href={r.href} prefetch={false} className="inline-block rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-[#00416a] hover:bg-[#00416a] hover:text-white hover:-translate-y-0.5 transition-all">{r.name}</Link>
              </li>
            ))}
          </ul>
          {collapsed && (
            <button onClick={() => setAll(true)} className="mt-4 text-sm font-semibold text-[#00416a] hover:underline">Show all {p.related.length} areas ↓</button>
          )}
          {q && list.length === 0 && <p className="text-sm text-gray-500">No area matches “{q}”.</p>}
          <p className="mt-5 text-sm">
            <Link href="/city/gst-services" className="text-[#00416a] font-semibold underline underline-offset-2">Browse GST services in all states and districts</Link>
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ══════════════════════ SIDEBAR + CTA ══════════════════════ */

function SideCard({ p, topic }: { p: Props; topic: string }) {
  return (
    <div className="sticky top-40 space-y-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white p-6 shadow-xl">
        <div className="gc-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">GST help in {p.locName}</h3>
          <p className="text-sm text-sky-100/85 leading-relaxed mb-5">Tell us what you need. A CA from our team will call you back with a clear plan.</p>
          <button onClick={() => openInquiryForm(topic)} className="w-full bg-white text-[#00416a] font-bold py-3.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition">Get a Free Quote →</button>
          <ul className="mt-4 space-y-1.5 text-sm text-white/80">
            <li>✓ No obligation</li>
            <li>✓ 100% online</li>
            <li>✓ CA-assisted</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <p className="font-bold text-[#00416a] mb-3 text-sm">On this page</p>
        <ul className="space-y-1.5">
          {NAV.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} className="text-sm text-gray-600 hover:text-[#00416a] hover:translate-x-1 inline-block transition">{n.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FinalCta({ p, topic }: { p: Props; topic: string }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] shadow-2xl px-6 py-12 sm:px-12 sm:py-16 text-white">
          <div className="gc-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Get your GST work done in {p.locName}</h2>
              <p className="text-lg text-sky-100/90 leading-relaxed">Share your requirement in 30 seconds. A CA from our team will call you back with a clear plan and honest pricing.</p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <button onClick={() => openInquiryForm(topic)} className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all">Get a Free Quote →</button>
              <Link href="/city/gst-services" className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition text-center">All locations</Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}