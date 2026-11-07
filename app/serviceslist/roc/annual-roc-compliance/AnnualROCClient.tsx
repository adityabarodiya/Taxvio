"use client";

// app/serviceslist/roc/annual-roc-compliance/AnnualROCClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "Annual ROC Compliance";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "update", label: "Oct 2026 Update" },
  { id: "covered", label: "What's Covered" },
  { id: "dates", label: "Due Dates" },
  { id: "calculator", label: "Calculator" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "penalties", label: "Penalties & Fees" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "Every company and LLP registered in India has to file its accounts and annual return with the Registrar of Companies (ROC) every year, whether or not it did any business. For private limited companies the core filings are Form AOC-4 (financial statements) and Form MGT-7 (annual return). For LLPs they are Form 8 (statement of account and solvency) and Form 11 (annual return). Directors also have to complete DIR-3 KYC, companies have to report auditor appointments, and many have to file a return of deposits.",
  "These filings look routine, but the consequences of missing them are not. Late fees accrue for each day or slab of delay, officers in default can be penalised, directors can be disqualified, DINs can be deactivated, and prolonged non-filing can lead the Registrar to strike the entity off the register. Reviving a struck-off company is a slow, expensive exercise compared with filing a few months late.",
  "Taxvio's CA-assisted team takes annual ROC compliance off your plate. We check your filing history, prepare the financials and forms, get them reviewed by a Chartered Accountant, file them on time and keep a due-date calendar for your entity. If you have fallen behind, we also clear the backlog and tell you the cost before we start.",
  "Latest update (26 October 2026): MCA General Circular 05/2026 lets companies file AOC-4 and its variants up to 31 December 2026, and MGT-7 and MGT-7A up to 31 January 2027, for FY 2025-26 without additional fees. It does not extend the AGM deadline and it does not cover LLP forms. See the update section below for how it affects your dates.",
];

const COVERED = [
  { icon: "📄", t: "AOC-4 filing", d: "Filing of the company's financial statements — balance sheet, profit & loss account and the auditor's and board's reports — with the ROC." },
  { icon: "📋", t: "MGT-7 filing", d: "Filing of the annual return, which records shareholding, directors, meetings and other prescribed details as on the year-end." },
  { icon: "🤝", t: "LLP Form 11 & 8", d: "Annual return of the LLP (Form 11) and its statement of account and solvency (Form 8), including partner and contribution details." },
  { icon: "🪪", t: "DIR-3 KYC", d: "Annual KYC of every director holding a DIN, so that the DIN remains active." },
  { icon: "🧾", t: "ADT-1 & auditor filings", d: "Reporting the appointment of a statutory auditor to the ROC within the prescribed time." },
  { icon: "📅", t: "Due-date calendar", d: "A compliance calendar for your entity, so each next deadline is known well before it becomes urgent." },
];

const IDEAL = [
  { icon: "🏢", t: "Private limited companies", d: "Companies of every size must file AOC-4 and MGT-7 each year, and hold an AGM, regardless of turnover." },
  { icon: "🤝", t: "LLPs", d: "LLPs must file Form 11 and Form 8 every year. Form 8 for FY 2025-26 is due 30 October 2026, and the additional fee for delay is a slab multiple that rises with the delay." },
  { icon: "👤", t: "One Person Companies", d: "OPCs have relaxations such as no AGM, but still file financial statements and a simplified annual return." },
  { icon: "🌱", t: "Dormant & backlog entities", d: "Entities that have missed several years and want to regularise their position before facing strike-off or disqualification." },
];

const DOCS = [
  "Balance sheet",
  "Profit & loss account",
  "Auditor's report and signed financial statements",
  "Notes to accounts and cash-flow statement (where applicable)",
  "Directors' report details (companies)",
  "List of directors and shareholders / partners",
  "AGM date and notice details (companies)",
  "Statement of account & solvency details (LLPs)",
  "Digital Signature Certificates of signatories",
  "Previous filings / SRNs, if available",
];

const STEPS = [
  { t: "Compliance health check", d: "We review your MCA master data and past filings to see exactly what has been filed, what is pending and what is coming up." },
  { t: "Collect financials & details", d: "You share the financial statements and basic details listed here. We check them for completeness and consistency with your books." },
  { t: "Prepare resolutions & forms", d: "We prepare the board and AGM documentation for companies, and the statements for LLPs, and fill the forms with the required attachments." },
  { t: "CA review & signatures", d: "A Chartered Accountant reviews the filing line by line. Directors or partners sign digitally, and the forms are certified where required." },
  { t: "File with the MCA", d: "We file the forms on the MCA portal, track payment and processing, and fix any rejection or resubmission promptly." },
  { t: "Acknowledgement & next-year calendar", d: "You receive the acknowledgements and filed copies, plus a calendar of your next due dates." },
];

const DATE_TABLE = [
  { k: "Financial statements", co: "AOC-4: within 30 days of the AGM. FY 2025-26: no additional fee up to 31 Dec 2026", llp: "Form 8: within 30 days of six months from year-end (30 Oct 2026 for FY 2025-26)", opc: "AOC-4: within 180 days of year-end. FY 2025-26: no additional fee up to 31 Dec 2026" },
  { k: "Annual return", co: "MGT-7: within 60 days of the AGM. FY 2025-26: no additional fee up to 31 Jan 2027", llp: "Form 11: within 60 days of year-end (≈ 30 May)", opc: "MGT-7A: within 60 days of year-end. FY 2025-26: no additional fee up to 31 Jan 2027" },
  { k: "AGM", co: "Within 6 months of year-end (30 Sep 2026 for FY 2025-26). Not extended by the circular", llp: "Not required", opc: "Not required" },
  { k: "Director / DIN KYC", co: "DIR-3 KYC by 30 Sep each year", llp: "DIN KYC by 30 Sep each year", opc: "DIR-3 KYC by 30 Sep each year" },
  { k: "Auditor appointment", co: "ADT-1: within 15 days of the AGM", llp: "Audit only above prescribed limits", opc: "ADT-1 as applicable" },
  { k: "Statutory audit", co: "Required", llp: "Only above prescribed limits", opc: "Required" },
];

const RISKS = [
  { icon: "💸", t: "Additional fees for delay", d: "Late filing attracts additional fees. For companies public references report ₹100 per day per form with no cap. For LLPs it is a slab multiple of the normal fee that rises with the delay. Either way, you pay per form." },
  { icon: "⚖️", t: "Penalties on officers", d: "The company and its officers in default can be penalised for failing to file financial statements or the annual return." },
  { icon: "🪪", t: "DIN deactivation", d: "A director who misses DIR-3 KYC can see their DIN deactivated, and a fee is charged to reactivate it." },
  { icon: "🚫", t: "Director disqualification", d: "Directors of a company that has not filed financial statements or returns for a prescribed continuous period can be disqualified." },
  { icon: "🗑️", t: "Strike-off risk", d: "Prolonged non-filing can lead the Registrar to strike the entity off the register, and restoration is slow and costly." },
  { icon: "🏦", t: "Banking & funding hurdles", d: "Banks, investors and large customers check MCA compliance status; a poor record can block loans, tenders or funding." },
];

const MISTAKES = [
  { t: "Assuming a dormant entity needs no filing", d: "Annual filings are mandatory even with zero turnover, and late fees keep running." },
  { t: "Filing financials that don't match the books", d: "Mismatches between ROC filings, GST returns and the income tax return invite queries across departments." },
  { t: "Forgetting DIR-3 KYC", d: "Directors often overlook the annual KYC, and find out only when the DIN is deactivated." },
  { t: "Holding the AGM late", d: "A delayed AGM pushes every later due date and can add its own penalty." },
  { t: "Treating the extension as a waiver", d: "Circular 05/2026 relieves additional fees only inside its window. File after it and fees are counted from the original due date, not the extended one." },
  { t: "Assuming the AGM was extended too", d: "The circular says it does not extend the time for holding AGMs. A company that missed the AGM date remains liable under the Act." },
  { t: "Waiting for the last day", d: "Portal slowdowns near deadlines cause missed filings. Aim to file well before the due date." },
];

/* ══════════════════════ HELPERS ══════════════════════ */

type Entity = "company" | "llp" | "opc";

const addDays = (d: Date, n: number) => {
  const r = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  r.setDate(r.getDate() + n);
  return r;
};
const addMonths = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
const toInput = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromInput = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
};

/* ══════════════════════ ROOT ══════════════════════ */

export default function AnnualROCClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [active, setActive] = useState("overview");

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
      <Hero />
      <InquiryFormButton />
      <FloatingCTA />
      <SectionNav active={active} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 grid lg:grid-cols-[1fr_340px] gap-10">
        <div className="min-w-0 space-y-16 md:space-y-20">
          <Overview />
          <LatestUpdate />
          <Covered />
          <Who />
          <Dates />
          <Calculator />
          <Documents />
          <Process />
          <Penalties />
          <FAQs faqs={faqs} />
          <Related />
        </div>
        <aside className="hidden lg:block">
          <SideCard />
        </aside>
      </div>

      <FinalCTA />
      <Footar />
    </main>
  );
}

/* ══════════════════════ PRIMITIVES ══════════════════════ */

function GlobalStyles() {
  return (
    <style>{`
      @keyframes ar-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes ar-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      @keyframes ar-pulse { 0% { box-shadow: 0 0 0 0 rgba(251,191,36,.55); } 70% { box-shadow: 0 0 0 12px rgba(251,191,36,0); } 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); } }
      @keyframes ar-ring { 0%,60%,100% { transform: rotate(0); } 10%,30% { transform: rotate(-14deg); } 20%,40% { transform: rotate(14deg); } 50% { transform: rotate(-8deg); } }
      @keyframes ar-shine { 0% { transform: translateX(-120%) skewX(-20deg); } 60%,100% { transform: translateX(260%) skewX(-20deg); } }
      .ar-pulse { animation: ar-pulse 2s infinite; }
      .ar-ring { animation: ar-ring 3.2s ease-in-out infinite; transform-origin: 50% 50%; }
      .ar-shine { animation: ar-shine 3.8s ease-in-out infinite; }
      .ar-aurora { animation: ar-aurora 14s ease-in-out infinite; }
      .ar-float { animation: ar-float 7s ease-in-out infinite; }
      .ar-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .ar-reveal.ar-in { opacity: 1; transform: none; }
      .ar-hide-scroll::-webkit-scrollbar { display: none; }
      .ar-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .ar-aurora, .ar-float, .ar-pulse, .ar-ring, .ar-shine { animation: none !important; }
        .ar-reveal { opacity: 1; transform: none; transition: none; }
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
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`ar-reveal ${shown ? "ar-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Heading({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-7">
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00416a]/70 border border-[#00416a]/15 bg-[#00416a]/5 px-3 py-1.5 rounded-full mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00416a]" />
        {label}
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#00416a] leading-tight">{title}</h2>
    </Reveal>
  );
}


/* ══════════════════════ LATEST UPDATE (26 Oct 2026) ══════════════════════ */

function LatestUpdate() {
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setToday(d);
  }, []);
  const left = (y: number, m: number, d: number) => (today ? Math.round((new Date(y, m, d).getTime() - today.getTime()) / 86400000) : null);
  const cards = [
    { f: "LLP Form 8", d: "30 Oct 2026", n: left(2026, 9, 30), note: "Not covered by the circular", tone: "from-red-500 to-rose-600" },
    { f: "AOC-4 family", d: "31 Dec 2026", n: left(2026, 11, 31), note: "No additional fee up to this date", tone: "from-[#00416a] to-[#0a6aa8]" },
    { f: "MGT-7 / MGT-7A", d: "31 Jan 2027", n: left(2027, 0, 31), note: "No additional fee up to this date", tone: "from-indigo-600 to-violet-600" },
  ];
  return (
    <section id="update" className="scroll-mt-40">
      <Heading label="Oct 2026 Update" title="MCA General Circular 05/2026: What Changed for FY 2025-26" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-5">
          On 24 October 2026 the Ministry of Corporate Affairs allowed companies to file their FY 2025-26 financial statements
          (AOC-4, AOC-4 CFS, AOC-4 XBRL and the two NBFC Ind AS variants) up to 31 December 2026, and annual returns (MGT-7 and
          MGT-7A) up to 31 January 2027, without additional fees. We read the circular as follows.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-4 mb-5">
        {cards.map((k, i) => (
          <Reveal key={k.f} delay={i * 70}>
            <div className={`h-full rounded-2xl bg-gradient-to-br ${k.tone} text-white p-5 shadow-lg`}>
              <p className="text-xs uppercase tracking-widest text-white/70 font-semibold">{k.f}</p>
              <p className="text-2xl font-extrabold mt-1">{k.d}</p>
              <p className="text-sm mt-2 text-white/90">{k.n === null ? "…" : k.n > 0 ? `${k.n} days left` : k.n === 0 ? "Last day today" : `${Math.abs(k.n)} days past`}</p>
              <p className="text-xs mt-1 text-white/70">{k.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <ul className="space-y-3">
          {[
            ["It relaxes additional fees only.", "Normal filing fees still apply."],
            ["The AGM date was not extended.", "The circular says it does not give extra time to hold AGMs, and companies that missed timelines remain liable under the Act."],
            ["After the window, fees run from the original due date.", "Paragraph 4 says later filings attract all fees, including additional fees, from the date the filing was actually due. One day late can cost weeks of fees."],
            ["LLPs are not named.", "Form 8 stays due on 30 October 2026 as far as we know. Confirm on the MCA site if an LLP notice is issued."],
            ["Other company forms were not mentioned.", "ADT-1, DIR-3 KYC, MSME-1 and DPT-3 follow their own dates."],
          ].map(([t, d]) => (
            <li key={t} className="flex gap-3 bg-white border border-gray-200 rounded-2xl p-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00416a] text-white text-sm font-bold flex items-center justify-center">✓</span>
              <p className="text-sm text-gray-600 leading-relaxed"><b className="text-[#00416a]">{t}</b> {d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          Read more:{" "}
          <Link href="/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension" className="font-semibold text-[#00416a] hover:underline">circular explained</Link>,{" "}
          <Link href="/guide/roc/roc-additional-fee-from-original-due-date-aoc-4-mgt-7" className="font-semibold text-[#00416a] hover:underline">the fee cliff</Link>,{" "}
          <Link href="/guide/roc/aoc-4-xbrl-cfs-mgt-7-mgt-7a-which-form-to-file" className="font-semibold text-[#00416a] hover:underline">which form to file</Link> and{" "}
          <Link href="/guide/roc/llp-form-8" className="font-semibold text-[#00416a] hover:underline">LLP Form 8</Link>.
        </p>
      </Reveal>
    </section>
  );
}

/* ══════════════════════ FLOATING CONTACT BUTTON ══════════════════════ */

function FloatingCTA() {
  return (
    <button
      type="button"
      onClick={() => openInquiryForm(SERVICE)}
      aria-label="Contact Taxvio: talk to a CA, free callback"
      className="ar-pulse group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-[70] flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 py-2 pl-2 pr-4 sm:pr-5 text-[#00416a] shadow-xl ring-2 ring-white/70 transition hover:scale-105 active:scale-95"
    >
      <span aria-hidden className="ar-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-sm" />
      <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#00416a] text-white shadow-inner">
        <svg viewBox="0 0 24 24" className="ar-ring h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

/* ══════════════════════ HERO + NAV ══════════════════════ */

function Hero() {
  const facts = [
    { k: "Applies to", v: "Companies & LLPs" },
    { k: "Due", v: "Every year, even if dormant" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="ar-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="ar-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <Link href="/serviceslist" className="hover:text-white transition">Services</Link><span>/</span>
            <Link href="/serviceslist#roc" className="hover:text-white transition">ROC / Company Law</Link><span>/</span>
            <span className="text-white">Annual ROC Compliance</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            📅 Updated 26 Oct 2026 · MCA Circular 05/2026
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            Annual ROC Compliance{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — AOC-4, MGT-7, LLP Form 11 &amp; 8, On Time
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Filing of annual ROC returns and compliance documents for companies and LLPs — prepared, CA-reviewed and filed
            before the deadline, with a due-date calendar for every year.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#calculator" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Check My Due Dates
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {facts.map((q) => (
              <div key={q.k} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-4 py-2.5">
                <p className="text-[10px] uppercase tracking-widest text-sky-200/70">{q.k}</p>
                <p className="font-bold text-sm">{q.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="ar-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your compliance, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample annual calendar</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "ADT-1 (auditor)", s: "Filed", c: "bg-emerald-100 text-emerald-700" },
                { t: "AOC-4 (financials)", s: "In review", c: "bg-amber-100 text-amber-700" },
                { t: "MGT-7 (annual return)", s: "Upcoming", c: "bg-sky-100 text-sky-700" },
                { t: "DIR-3 KYC", s: "Upcoming", c: "bg-sky-100 text-sky-700" },
                { t: "LLP Form 11 & 8", s: "Upcoming", c: "bg-sky-100 text-sky-700" },
              ].map((r) => (
                <li key={r.t} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm">
                  <span className="flex-1 font-semibold">{r.t}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${r.c}`}>{r.s}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-[#00416a] text-white px-4 py-3 text-sm flex items-center gap-3">
              <span className="text-xl">👨‍💼</span>
              <span><b>CA-reviewed</b> before every filing</span>
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

function SectionNav({ active }: { active: string }) {
  return (
    <div className="sticky top-[72px] z-40 bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3">
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto ar-hide-scroll">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`flex-shrink-0 text-sm font-semibold px-3.5 py-2 rounded-full transition-all whitespace-nowrap ${
                active === n.id ? "bg-[#00416a] text-white shadow-md shadow-[#00416a]/25" : "text-[#00416a]/80 hover:bg-[#00416a]/5"
              }`}
            >
              {n.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => openInquiryForm(SERVICE)}
          className="hidden md:inline-flex flex-shrink-0 text-xs font-bold bg-[#00416a] text-white px-4 py-2.5 rounded-lg hover:bg-[#002b45] active:scale-95 transition"
        >
          Enquire now
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTIONS ══════════════════════ */

function Overview() {
  return (
    <section id="overview" className="scroll-mt-40">
      <Heading label="Overview" title="What Is Annual ROC Compliance?" />
      <div className="space-y-5">
        {INTRO.map((p, i) => (
          <Reveal key={i} delay={i * 70}>
            <p className={`pl-5 border-l-4 text-gray-700 leading-relaxed ${i === 0 ? "border-[#00416a]" : "border-[#00416a]/25"}`}>{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Covered() {
  return (
    <section id="covered" className="scroll-mt-40">
      <Heading label="What's Covered" title="What Our Annual ROC Compliance Service Includes" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {COVERED.map((c, i) => (
          <Reveal key={c.t} delay={i * 60}>
            <div className="group h-full bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center text-xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-transform">{c.icon}</div>
              <h3 className="font-bold text-[#00416a] mb-1">{c.t}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Who() {
  return (
    <section id="who" className="scroll-mt-40">
      <Heading label="Who It's For" title="Who Needs Annual ROC Compliance?" />
      <div className="grid sm:grid-cols-2 gap-4">
        {IDEAL.map((w, i) => (
          <Reveal key={w.t} delay={i * 70}>
            <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#00416a] to-[#00527f] text-white rounded-2xl p-6 shadow-lg">
              <span className="absolute -right-4 -bottom-6 text-8xl opacity-10 select-none">{w.icon}</span>
              <div className="relative">
                <p className="text-2xl mb-2">{w.icon}</p>
                <h3 className="font-bold text-lg mb-1.5">{w.t}</h3>
                <p className="text-sm text-sky-100/90 leading-relaxed">{w.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Dates() {
  return (
    <section id="dates" className="scroll-mt-40">
      <Heading label="Due Dates" title="Annual ROC Due Dates at a Glance" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-5">
          The table below summarises the usual due dates for a financial year ending 31 March. MCA sometimes extends
          deadlines through circulars, and rules can change, so our team always confirms the current dates for your entity.
        </p>
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg bg-white">
          <table className="min-w-[760px] w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="px-4 py-4 bg-gray-50 rounded-tl-3xl" />
                <th className="px-4 py-4 text-left font-extrabold text-white bg-gradient-to-br from-[#00416a] to-[#0a6aa8]">Private Limited Company</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50">LLP</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50 rounded-tr-3xl">One Person Company</th>
              </tr>
            </thead>
            <tbody>
              {DATE_TABLE.map((r) => (
                <tr key={r.k} className="group">
                  <td className="px-4 py-3.5 font-bold text-gray-800 border-t border-gray-100 group-hover:bg-gray-50">{r.k}</td>
                  <td className="px-4 py-3.5 font-semibold text-[#00416a] bg-sky-50/70 border-t border-[#00416a]/10">{r.co}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.llp}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.opc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Looking to incorporate first? See{" "}
          <Link href="/serviceslist/roc/private-limited-formation" className="font-semibold text-[#00416a] hover:underline">Private Limited Formation</Link>,{" "}
          <Link href="/serviceslist/roc/llp-formation" className="font-semibold text-[#00416a] hover:underline">LLP Registration</Link> or{" "}
          <Link href="/serviceslist/roc/opc-formation" className="font-semibold text-[#00416a] hover:underline">OPC Registration</Link>.
        </p>
      </Reveal>
    </section>
  );
}

/** Interactive due-date calculator */
function Calculator() {
  const [entity, setEntity] = useState<Entity>("company");
  const [fyStart, setFyStart] = useState(2025); // FY 2025-26 by default
  const fyEnd = useMemo(() => new Date(fyStart + 1, 2, 31), [fyStart]);
  const [agm, setAgm] = useState<string>(() => toInput(new Date(2026, 8, 30)));
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => setToday(new Date()), []);
  // keep the AGM default tied to the chosen year until the user edits it
  useEffect(() => setAgm(toInput(addMonths(new Date(fyStart + 1, 2, 31), 6))), [fyStart]);

  const items = useMemo(() => {
    const out: { form: string; label: string; due: Date; free?: Date }[] = [];
    const later = (a: Date, b: Date) => (a.getTime() >= b.getTime() ? a : b);
    const relief = fyStart === 2025; // MCA General Circular 05/2026, FY 2025-26 only
    const agmDate = fromInput(agm);
    const kyc = new Date(fyStart + 1, 8, 30);
    if (entity === "company") {
      out.push({ form: "AGM", label: "Annual General Meeting", due: addMonths(fyEnd, 6) });
      out.push({ form: "ADT-1", label: "Auditor appointment (15 days from AGM)", due: addDays(agmDate, 15) });
      out.push({ form: "AOC-4", label: "Financial statements (30 days from AGM)", due: addDays(agmDate, 30), free: relief ? later(addDays(agmDate, 30), new Date(2026, 11, 31)) : undefined });
      out.push({ form: "MGT-7", label: "Annual return (60 days from AGM)", due: addDays(agmDate, 60), free: relief ? later(addDays(agmDate, 60), new Date(2027, 0, 31)) : undefined });
      out.push({ form: "DIR-3 KYC", label: "Director KYC", due: kyc });
    } else if (entity === "opc") {
      out.push({ form: "MGT-7A", label: "Annual return (60 days from year-end)", due: addDays(fyEnd, 60), free: relief ? later(addDays(fyEnd, 60), new Date(2027, 0, 31)) : undefined });
      out.push({ form: "AOC-4", label: "Financial statements (180 days from year-end)", due: addDays(fyEnd, 180), free: relief ? later(addDays(fyEnd, 180), new Date(2026, 11, 31)) : undefined });
      out.push({ form: "DIR-3 KYC", label: "Director KYC", due: kyc });
    } else {
      out.push({ form: "Form 11", label: "LLP annual return (60 days from year-end)", due: addDays(fyEnd, 60) });
      out.push({ form: "Form 8", label: "Statement of account & solvency", due: addDays(addMonths(fyEnd, 6), 30) });
      out.push({ form: "DIN KYC", label: "Designated partner KYC", due: kyc });
    }
    return out.sort((a, b) => a.due.getTime() - b.due.getTime());
  }, [entity, fyStart, fyEnd, agm]);

  const status = (due: Date, free?: Date) => {
    const eff = free ?? due;
    if (!today) return { text: "", cls: "bg-gray-100 text-gray-500" };
    const days = Math.ceil((eff.getTime() - new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()) / 86400000);
    if (days < 0) return { text: `Overdue by ${-days} day${-days === 1 ? "" : "s"}`, cls: "bg-red-100 text-red-700" };
    if (days === 0) return { text: "Due today", cls: "bg-red-100 text-red-700" };
    if (days <= 30) return { text: `Due in ${days} days`, cls: "bg-amber-100 text-amber-800" };
    return { text: `In ${days} days`, cls: "bg-sky-100 text-sky-700" };
  };

  const overdue = today ? items.filter((i) => (i.free ?? i.due).getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()).length : 0;

  const Pill = ({ value, label }: { value: Entity; label: string }) => (
    <button
      onClick={() => setEntity(value)}
      className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
        entity === value ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="calculator" className="scroll-mt-40">
      <Heading label="Calculator" title="Check Your Annual ROC Due Dates" />
      <Reveal>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <p className="text-sm text-gray-500 mb-5">
            Choose your entity and financial year to see the usual due dates. For FY 2025-26 the calculator also shows the fee-free dates from MCA General Circular 05/2026. After that date, fees are counted from the original due date. This is an indicative guide, so confirm with a CA before relying on a date.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Entity type</p>
              <div className="flex flex-wrap gap-2">
                <Pill value="company" label="Private Limited" />
                <Pill value="llp" label="LLP" />
                <Pill value="opc" label="OPC" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Financial year</label>
                <select
                  value={fyStart}
                  onChange={(e) => setFyStart(Number(e.target.value))}
                  className="rounded-xl border border-gray-300 px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#00416a]/15 focus:border-[#00416a]"
                >
                  {[2022, 2023, 2024, 2025, 2026].map((y) => (
                    <option key={y} value={y}>
                      FY {y}-{String(y + 1).slice(2)} (ends 31 Mar {y + 1})
                    </option>
                  ))}
                </select>
              </div>
              {entity === "company" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">AGM date</label>
                  <input
                    type="date"
                    value={agm}
                    onChange={(e) => e.target.value && setAgm(e.target.value)}
                    className="rounded-xl border border-gray-300 px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#00416a]/15 focus:border-[#00416a]"
                  />
                </div>
              )}
            </div>
          </div>

          <ul className="space-y-2.5">
            {items.map((it) => {
              const s = status(it.due, it.free);
              return (
                <li key={it.form + it.label} className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
                  <span className="w-24 text-center text-xs font-extrabold text-[#00416a] bg-[#00416a]/10 rounded-lg py-2">{it.form}</span>
                  <span className="flex-1 min-w-[180px] text-sm font-semibold text-gray-800">{it.label}</span>
                  <span className="text-sm font-bold text-[#00416a] tabular-nums">{fmt(it.due)}</span>
                  {it.free && it.free.getTime() > it.due.getTime() && (
                    <span className="w-full sm:w-auto text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1">No additional fee up to {fmt(it.free)}</span>
                  )}
                  {s.text && <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${s.cls}`}>{s.text}</span>}
                </li>
              );
            })}
          </ul>

          <div className={`mt-5 rounded-2xl px-5 py-4 text-sm flex flex-col sm:flex-row sm:items-center gap-3 ${overdue ? "bg-red-50 text-red-900" : "bg-sky-50 text-[#00416a]"}`}>
            <span className="flex-1 font-medium">
              {overdue
                ? `⚠️ ${overdue} filing${overdue === 1 ? " looks" : "s look"} overdue for this year. Late fees grow with the delay — the sooner it's filed, the lower the cost.`
                : "Want these tracked for you every year? We keep a due-date calendar and file on time."}
            </span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">
              {overdue ? "Fix it now →" : "Get a quote →"}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Documents() {
  const [checked, setChecked] = useState<boolean[]>(() => DOCS.map(() => false));
  const done = checked.filter(Boolean).length;
  const pct = Math.round((done / DOCS.length) * 100);
  return (
    <section id="documents" className="scroll-mt-40">
      <Heading label="Documents" title="Documents Required for Annual ROC Filing" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          The balance sheet and profit &amp; loss account are the heart of the filing. Share signed or final financials where
          available — if your accounts aren&apos;t ready, we can also help prepare them with your bookkeeper. Some items apply only
          to companies or only to LLPs.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-[#00416a]">Your document checklist</p>
            <p className="text-sm font-semibold text-gray-500 tabular-nums">{done}/{DOCS.length} ready</p>
          </div>
          <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden mb-5">
            <div className="h-full rounded-full bg-gradient-to-r from-[#00416a] to-emerald-500 transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <ul className="space-y-2.5">
            {DOCS.map((d, i) => (
              <li key={d}>
                <label className={`flex items-center gap-3 cursor-pointer rounded-xl border px-4 py-3 transition-all ${checked[i] ? "bg-emerald-50 border-emerald-200" : "bg-gray-50 border-gray-200 hover:border-[#00416a]/30"}`}>
                  <input type="checkbox" checked={checked[i]} onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))} className="w-5 h-5 accent-[#00416a]" />
                  <span className={`text-sm font-medium ${checked[i] ? "text-emerald-800 line-through decoration-emerald-400" : "text-gray-800"}`}>{d}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className={`mt-5 rounded-2xl px-5 py-4 text-sm flex flex-col sm:flex-row sm:items-center gap-3 ${pct === 100 ? "bg-emerald-50 text-emerald-900" : "bg-sky-50 text-[#00416a]"}`}>
            <span className="flex-1 font-medium">
              {pct === 100 ? "🎉 You have everything on the list — you're ready to start." : "Tick off what you already have. Missing something? We'll tell you the easiest way to get it."}
            </span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">
              {pct === 100 ? "Start now →" : "Ask us →"}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-40">
      <Heading label="Process" title="How Our Annual ROC Compliance Works, Step by Step" />
      <ol className="relative space-y-5 before:absolute before:left-[27px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#00416a]/40 before:to-[#00416a]/5">
        {STEPS.map((s, i) => (
          <Reveal key={s.t} delay={i * 70}>
            <li className="relative flex gap-5">
              <span className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white flex items-center justify-center text-lg font-extrabold shadow-lg shadow-[#00416a]/25">{i + 1}</span>
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-[#00416a]/30 transition-all">
                <h3 className="font-bold text-[#00416a] mb-1.5">{s.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Penalties() {
  return (
    <section id="penalties" className="scroll-mt-40">
      <Heading label="Penalties & Fees" title="What Happens If You Miss Annual ROC Filing?" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {RISKS.map((r, i) => (
          <Reveal key={r.t} delay={i * 60}>
            <div className="h-full bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all">
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-xl mb-3">{r.icon}</div>
              <h3 className="font-bold text-[#00416a] mb-1">{r.t}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{r.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Reveal>
          <div className="h-full bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does filing take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Once we have final financials and the required details, a standard annual filing is typically completed within a
              few working days. The main variable is how quickly the accounts and signatures are ready. Backlog cases take
              longer because several years are prepared together.
            </p>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="h-full bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">💰</p>
            <h3 className="font-bold text-[#00416a] mb-2">What does it cost?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The total has two parts: Taxvio&apos;s professional fee and government charges (filing fees and any late fees), which
              depend on your authorised capital and how late the filing is. You receive a written, itemised quote before we
              start, with no add-ons introduced once the work is underway.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal><h3 className="font-extrabold text-[#00416a] text-xl mb-4">Common mistakes we help you avoid</h3></Reveal>
      <div className="space-y-3">
        {MISTAKES.map((m, i) => (
          <Reveal key={m.t} delay={i * 50}>
            <div className="flex gap-4 bg-amber-50/70 border border-amber-200/70 rounded-2xl p-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center">!</span>
              <div>
                <p className="font-bold text-gray-800">{m.t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{m.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FAQs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="scroll-mt-40">
      <Heading label="FAQs" title="Annual ROC Compliance — Frequently Asked Questions" />
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={Math.min(i, 5) * 40}>
              <div className={`rounded-2xl border bg-white transition-all duration-300 ${isOpen ? "border-[#00416a]/40 shadow-lg shadow-[#00416a]/10" : "border-gray-200 hover:border-[#00416a]/25"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className={`font-bold ${isOpen ? "text-[#00416a]" : "text-gray-800"}`}>{f.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${isOpen ? "bg-[#00416a] text-white rotate-45" : "bg-[#00416a]/10 text-[#00416a]"}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
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

function Related() {
  const roc = serviceCategories.find((c) => c.slug === "roc");
  const items = (roc?.services ?? []).filter((s) => s.slug !== "annual-roc-compliance").slice(0, 6);
  if (!items.length) return null;
  return (
    <section className="scroll-mt-40">
      <Heading label="Related Services" title="More ROC & Company Law Services" />
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((r, i) => (
          <Reveal key={r.slug} delay={i * 60}>
            <Link
              href={`/serviceslist/roc/${r.slug}`}
              className="group block h-full bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300"
            >
              <h3 className="font-bold text-[#00416a] mb-1.5 leading-snug">{r.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">{r.shortDescription}</p>
              <span className="text-sm font-semibold text-[#00416a] inline-flex items-center gap-1">
                Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ SIDEBAR + CTA ══════════════════════ */

function SideCard() {
  return (
    <div className="sticky top-40 space-y-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white p-6 shadow-xl">
        <div className="ar-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Never miss a ROC deadline</h3>
          <p className="text-sm text-sky-100/85 leading-relaxed mb-5">Tell us your entity — a CA from our team will call you back with a clear plan and a fixed quote.</p>
          <button onClick={() => openInquiryForm(SERVICE)} className="w-full bg-white text-[#00416a] font-bold py-3.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition">
            Get a Free Quote →
          </button>
          <ul className="mt-4 space-y-1.5 text-sm text-white/80">
            <li>✓ No obligation</li>
            <li>✓ Fixed quote upfront</li>
            <li>✓ 100% online</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <p className="font-bold text-[#00416a] mb-3 text-sm">On this page</p>
        <ul className="space-y-1.5">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-sm text-gray-600 hover:text-[#00416a] hover:translate-x-1 inline-block transition">{n.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] shadow-2xl px-6 py-12 sm:px-12 sm:py-16 text-white">
          <div className="ar-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Get your annual ROC filing done on time</h3>
              <p className="text-lg text-sky-100/90 leading-relaxed">Share your requirement in 30 seconds. A CA from our team will call you back with a clear plan and honest pricing.</p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <button onClick={() => openInquiryForm(SERVICE)} className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all">
                Get a Free Quote →
              </button>
              <Link href="/serviceslist" className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition text-center">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}