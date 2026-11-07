"use client";

// app/serviceslist/gst/gstr-9/GSTR9Client.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GST Annual Return (GSTR-9)";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "applicability", label: "Applicability" },
  { id: "included", label: "What's Included" },
  { id: "reconcile", label: "Reconciliation Check" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "parts", label: "What It Covers" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "GSTR-9 is the annual return that every eligible regular GST taxpayer files once a year. It is not a fresh set of numbers: it consolidates everything you reported in your monthly or quarterly returns, such as outward supplies, tax paid, inward supplies and input tax credit, into a single yearly statement. Because it summarises a whole financial year, any mismatch between your books and your filed returns shows up here.",
  "That is what makes the annual return both important and risky. Once filed, GSTR-9 generally cannot be revised. Errors such as missed invoices, credit claimed in the wrong year, or tax paid but not reported can turn into demand notices, interest and penalties later. A careful reconciliation before filing is the difference between a clean return and a problem that follows you for years.",
  "Taxvio's CA-assisted team prepares your GSTR-9 from scratch. We reconcile your books of accounts with your GSTR-1, GSTR-3B and credit statements, identify errors and gaps, explain each difference in plain language, verify compliance and file only after your approval. Where a reconciliation statement (GSTR-9C) applies to your turnover, we guide you on that as well. You get a fixed quote before we begin.",
];

const FEATURES = [
  { title: "Annual data reconciliation", note: "We reconcile your books of accounts with the returns filed during the year, invoice totals, tax paid and input tax credit, and prepare a clear gap statement." },
  { title: "GSTR-9 filing", note: "We prepare all the required tables of the annual return, check them against the reconciliation and file on the GST portal after your confirmation." },
  { title: "Error identification", note: "We find missed invoices, mismatched credit, wrong-period entries and unreported tax, and tell you what can still be corrected and how." },
  { title: "Compliance verification", note: "We verify that the whole year is compliant, check whether GSTR-9C applies and confirm there are no pending returns or dues that should be cleared first." },
];

const BENEFITS = [
  { icon: "🧮", t: "One clean yearly record", d: "Your whole year's GST position is consolidated and cross-checked against your books." },
  { icon: "🔍", t: "Catch errors early", d: "Mismatches are found while they can still be explained or corrected, not during a departmental audit." },
  { icon: "🛡️", t: "Fewer notices", d: "A reconciled annual return lowers the chance of queries on turnover, tax and credit." },
  { icon: "⏰", t: "Avoid late fees", d: "A tracked deadline and early preparation help you avoid daily late fees on the annual return." },
  { icon: "💳", t: "Protect your credit", d: "We check input tax credit claimed against what was available, reducing reversal and interest risk." },
  { icon: "🏦", t: "Audit-ready books", d: "Reconciled records make financial audits, loans and due diligence smoother." },
];

const IDEAL = [
  { icon: "🏭", t: "All GST-registered businesses", d: "Any regular taxpayer within the annual return requirement or choosing to file it." },
  { icon: "🧰", t: "Traders & manufacturers", d: "High-volume businesses where reconciliation gaps are more likely and more costly." },
  { icon: "💼", t: "Service providers", d: "Consultants and agencies who want a clean yearly record without the spreadsheet work." },
];

const PARTS = [
  { p: "Basic details", d: "Financial year, GSTIN, legal and trade name." },
  { p: "Outward supplies", d: "Total taxable, zero-rated, exempt and nil-rated supplies reported in the year, including amendments." },
  { p: "Tax paid", d: "Tax payable and tax actually paid through cash and credit ledgers." },
  { p: "Input tax credit", d: "Credit availed, reversed and ineligible, with inputs, input services and capital goods." },
  { p: "Previous year items", d: "Transactions of the earlier year reported in the current year and amendments made." },
  { p: "Demands & refunds", d: "Refunds claimed, demands raised and amounts paid under them." },
  { p: "Other information", d: "HSN-wise summaries, late fee payable and paid, and other disclosures." },
];

const DOC_SETS: Record<string, { label: string; docs: string[] }> = {
  returns: {
    label: "GST returns",
    docs: [
      "GSTR-1 for every period of the year",
      "GSTR-3B for every period of the year",
      "Auto-drafted credit statements (GSTR-2B)",
      "Amendments and credit / debit notes",
      "Cash and credit ledger statements",
    ],
  },
  books: {
    label: "Books",
    docs: [
      "Trial balance and profit & loss account",
      "Balance sheet (provisional or audited)",
      "Sales ledger and purchase ledger",
      "Expense ledgers with GST",
      "Fixed asset register, if capital goods credit was claimed",
    ],
  },
  data: {
    label: "Sales & purchases",
    docs: [
      "Sales invoice register for the year",
      "Purchase invoice register for the year",
      "Import / export documents, if any",
      "E-commerce sales statements, if any",
      "Details of any notices, refunds or demands",
    ],
  },
};

const STEPS = [
  { t: "Scope & applicability check", d: "We confirm whether GSTR-9 is mandatory or optional for you, and whether a GSTR-9C reconciliation statement applies." },
  { t: "Collect returns & books", d: "You share filed returns, ledgers and books. We download portal data to cross-check against what you send." },
  { t: "Reconcile the year", d: "We compare turnover, tax and credit across your books, GSTR-1, GSTR-3B and credit statements and list every gap." },
  { t: "Review differences with you", d: "We explain each difference and agree how to treat it: correct in the return, pay, or document an explanation." },
  { t: "Prepare & file GSTR-9", d: "After your approval we complete the tables, prepare GSTR-9C if applicable, and file on the portal." },
  { t: "Acknowledgement & follow-up", d: "You receive the acknowledgement and a short note of next steps and the upcoming compliance dates." },
];

const MISTAKES = [
  { t: "Turnover differs from books", d: "A gap between annual return turnover and books or income tax return invites scrutiny." },
  { t: "Credit claimed but not available", d: "Credit that did not appear in the statement of the relevant period is a common reversal item." },
  { t: "Wrong-year entries", d: "Invoices reported in the wrong financial year distort both years' annual returns." },
  { t: "Tax paid but not reported", d: "Payments through the ledgers that are not matched to reported liability cause mismatches." },
  { t: "Filing without a review", d: "As the return generally cannot be revised, rushing it can lock in an error." },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GSTR9Client({ faqs }: { faqs: { q: string; a: string }[] }) {
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
      <SectionNav active={active} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 grid lg:grid-cols-[1fr_340px] gap-10">
        <div className="min-w-0 space-y-16 md:space-y-20">
          <Overview />
          <Benefits />
          <Applicability />
          <Included />
          <Who />
          <Reconcile2 />
          <Documents />
          <Process />
          <Parts />
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
      @keyframes g9-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes g9-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .g9-aurora { animation: g9-aurora 14s ease-in-out infinite; }
      .g9-float { animation: g9-float 7s ease-in-out infinite; }
      .g9-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .g9-reveal.g9-in { opacity: 1; transform: none; }
      .g9-hide-scroll::-webkit-scrollbar { display: none; }
      .g9-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .g9-aurora, .g9-float { animation: none !important; }
        .g9-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`g9-reveal ${shown ? "g9-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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

/* ══════════════════════ HERO + NAV ══════════════════════ */

function Hero() {
  const facts = [
    { k: "Frequency", v: "Once a year" },
    { k: "Form", v: "GSTR-9 (+ 9C)" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="g9-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="g9-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <Link href="/serviceslist#gst" className="hover:text-white transition">GST Services</Link><span>/</span>
            <span className="text-white">GST Annual Return (GSTR-9)</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            📑 GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST Annual Return (GSTR-9){" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Accurate, On Time, CA-Reviewed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Preparation and filing of your GST annual return with year-end reconciliation, error identification and compliance review.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#applicability" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Do I Need GSTR-9?
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
          <div className="g9-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your annual return, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample status view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Returns & books received", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Year reconciled with books", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Errors reviewed with you", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "GSTR-9 filed", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Acknowledgement shared", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto g9-hide-scroll">
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
      <Heading label="Overview" title="What Is GST Annual Return (GSTR-9)?" />
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

function Benefits() {
  return (
    <section className="scroll-mt-40">
      <Heading label="Benefits" title="Why Professional GST Annual Return (GSTR-9) Pays Off" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.t} delay={i * 60}>
            <div className="group h-full bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center text-xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-transform">{b.icon}</div>
              <h3 className="font-bold text-[#00416a] mb-1">{b.t}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Included() {
  return (
    <section id="included" className="scroll-mt-40">
      <Heading label="What's Included" title="What You Get With GST Annual Return (GSTR-9)" />
      <div className="grid sm:grid-cols-2 gap-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 70}>
            <div className="group h-full bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white flex items-center justify-center font-bold group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-[#00416a]">{f.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{f.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Who() {
  return (
    <section className="scroll-mt-40">
      <Heading label="Who It's For" title="Who We File GSTR-9 For" />
      <div className="grid sm:grid-cols-3 gap-4">
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


type Band = "lt2" | "mid" | "gt5";

/** Applicability checker */
function Applicability() {
  const [reg, setReg] = useState<"regular" | "comp" | null>(null);
  const [band, setBand] = useState<Band | null>(null);

  const result = useMemo(() => {
    if (!reg || !band) return null;
    if (reg === "comp") return { tone: "maybe", t: "Composition taxpayers file a different annual return", d: "Taxpayers under the composition scheme generally file GSTR-4, not GSTR-9. Our CA will confirm what applies." };
    if (band === "lt2") return { tone: "optional", t: "GSTR-9 may be optional for you", d: "Smaller taxpayers have often been exempted or allowed to file optionally by notification. Filing may still help you keep clean records. Confirm the position for the year." };
    if (band === "mid") return { tone: "must", t: "GSTR-9 is likely mandatory", d: "Regular taxpayers in this turnover range generally must file the annual return. A reconciliation statement may not be required at this level." };
    return { tone: "must", t: "GSTR-9 and GSTR-9C are likely required", d: "Above the higher turnover limit, a reconciliation statement (GSTR-9C) generally has to be furnished with the annual return, now usually self-certified." };
  }, [reg, band]);

  const Opt = ({ on, set, label }: { on: boolean; set: () => void; label: string }) => (
    <button onClick={set} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${on ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}>{label}</button>
  );
  const tone = result?.tone === "must" ? "bg-emerald-50 border-emerald-200" : result?.tone === "maybe" ? "bg-amber-50 border-amber-200" : "bg-sky-50 border-sky-100";

  return (
    <section id="applicability" className="scroll-mt-40">
      <Heading label="Applicability" title="Do I Need to File GSTR-9? Check in 10 Seconds" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Whether GSTR-9 is mandatory depends on your registration type and aggregate turnover, and the limits and exemptions
          have changed over the years by notification. This is a quick indication; our CA confirms the exact requirement for your year.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Your registration type</p>
              <div className="flex flex-wrap gap-2">
                <Opt on={reg === "regular"} set={() => setReg("regular")} label="Regular taxpayer" />
                <Opt on={reg === "comp"} set={() => setReg("comp")} label="Composition scheme" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Aggregate annual turnover</p>
              <div className="flex flex-wrap gap-2">
                <Opt on={band === "lt2"} set={() => setBand("lt2")} label="Up to ₹2 crore" />
                <Opt on={band === "mid"} set={() => setBand("mid")} label="₹2–5 crore" />
                <Opt on={band === "gt5"} set={() => setBand("gt5")} label="Above ₹5 crore" />
              </div>
            </div>
          </div>
          {result && (
            <div className={`mt-6 rounded-2xl border p-5 ${tone}`}>
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">Indication</p>
              <p className="font-extrabold text-[#00416a] text-lg">{result.t}</p>
              <p className="text-sm text-gray-600 mt-1">{result.d}</p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">Confirm with a CA →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. Thresholds and exemptions are set by notification and differ by year.</p>
        </div>
      </Reveal>
    </section>
  );
}

function Parts() {
  return (
    <section id="parts" className="scroll-mt-40">
      <Heading label="What It Covers" title="What Goes Into the GST Annual Return" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          GSTR-9 is organised in parts that mirror your year. Every part must tie back to the returns you already filed,
          which is why reconciliation comes first. Here is what each part captures.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {PARTS.map((c, i) => (
          <Reveal key={c.p} delay={i * 50}>
            <div className="h-full bg-white border border-gray-200 border-l-4 border-l-[#00416a] rounded-2xl p-5 hover:shadow-lg transition-all">
              <span className="inline-block text-[11px] font-bold text-[#00416a] uppercase tracking-wide bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full mb-2">Part {i + 1}</span>
              <h3 className="font-bold text-[#00416a] mb-1.5">{c.p}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal><h3 className="font-extrabold text-[#00416a] text-xl mb-4">Mistakes that cost businesses money</h3></Reveal>
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
      <Reveal>
        <p className="mt-6 text-sm text-gray-500">
          Also see <Link href="/serviceslist/gst/gst-return" className="font-semibold text-[#00416a] hover:underline">GST return filing</Link> or all <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link>.
        </p>
      </Reveal>
    </section>
  );
}

/** Books vs returns gap checker */
function Reconcile2() {
  const [books, setBooks] = useState(5000000);
  const [rets, setRets] = useState(4850000);
  const [itcClaimed, setItcClaimed] = useState(400000);
  const [itcAvail, setItcAvail] = useState(370000);
  const inr = (n: number) => (n < 0 ? "-₹" : "₹") + Math.abs(n).toLocaleString("en-IN");
  const tGap = books - rets;
  const cGap = itcClaimed - itcAvail;
  const tPct = books ? Math.abs(tGap) / books * 100 : 0;

  const Field = ({ label, v, set }: { label: string; v: number; set: (n: number) => void }) => (
    <label className="block">
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      <input type="number" min={0} value={v} onChange={(e) => set(+e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
    </label>
  );

  return (
    <section id="reconcile" className="scroll-mt-40">
      <Heading label="Reconciliation Check" title="Do Your Books and GST Returns Match?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Try a quick self-check. Enter your yearly turnover as per books and as per your GST returns, and the input tax credit
          you claimed against what the credit statements showed as available. Any difference is a reconciliation item to resolve before GSTR-9 is filed.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <Field label="Turnover as per books (₹)" v={books} set={setBooks} />
            <Field label="Turnover as per GST returns (₹)" v={rets} set={setRets} />
            <Field label="ITC claimed in returns (₹)" v={itcClaimed} set={setItcClaimed} />
            <Field label="ITC available as per statements (₹)" v={itcAvail} set={setItcAvail} />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className={`rounded-2xl border p-4 ${tGap === 0 ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"}`}>
              <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/70">Turnover gap</p>
              <p className="text-2xl font-extrabold text-[#00416a]">{inr(tGap)} <span className="text-sm font-semibold text-gray-500">({tPct.toFixed(1)}%)</span></p>
              <p className="text-sm text-gray-600 mt-1">{tGap === 0 ? "Matches." : tGap > 0 ? "Books show more than returns: possible unreported sales." : "Returns show more than books: possible entries to correct."}</p>
            </div>
            <div className={`rounded-2xl border p-4 ${cGap <= 0 ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"}`}>
              <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/70">Credit gap</p>
              <p className="text-2xl font-extrabold text-[#00416a]">{inr(cGap)}</p>
              <p className="text-sm text-gray-600 mt-1">{cGap <= 0 ? "Claimed credit is within what is available." : "Claimed credit exceeds what appears available: possible reversal and interest."}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl bg-sky-50 px-5 py-4 text-sm text-[#00416a]">
            <span className="flex-1 font-medium">Found a gap? We identify each difference and tell you how to treat it before filing.</span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">Get it reviewed →</button>
          </div>
          <p className="mt-4 text-xs text-gray-400">A simple self-check, not a legal reconciliation. Differences can arise from timing, notes and amendments.</p>
        </div>
      </Reveal>
    </section>
  );
}

function Documents() {
  const keys = Object.keys(DOC_SETS);
  const [tab, setTab] = useState(keys[0]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const set = DOC_SETS[tab];
  const done = set.docs.filter((d) => checked[tab + d]).length;
  const pct = Math.round((done / set.docs.length) * 100);

  return (
    <section id="documents" className="scroll-mt-40">
      <Heading label="Documents" title="Documents Required for GST Annual Return (GSTR-9)" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          We work from your filed returns, books of accounts and sales and purchase data for the full financial year. If you use accounting software, exports are enough. Tick off what you have in each group.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-5" role="tablist">
            {keys.map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={tab === k}
                onClick={() => setTab(k)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                  tab === k ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"
                }`}
              >
                {DOC_SETS[k].label}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-[#00416a]">Your document checklist</p>
            <p className="text-sm font-semibold text-gray-500 tabular-nums">{done}/{set.docs.length} ready</p>
          </div>
          <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden mb-5">
            <div className="h-full rounded-full bg-gradient-to-r from-[#00416a] to-emerald-500 transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <ul className="space-y-2.5">
            {set.docs.map((d) => {
              const on = !!checked[tab + d];
              return (
                <li key={d}>
                  <label className={`flex items-center gap-3 cursor-pointer rounded-xl border px-4 py-3 transition-all ${on ? "bg-emerald-50 border-emerald-200" : "bg-gray-50 border-gray-200 hover:border-[#00416a]/30"}`}>
                    <input type="checkbox" checked={on} onChange={() => setChecked((c) => ({ ...c, [tab + d]: !on }))} className="w-5 h-5 accent-[#00416a]" />
                    <span className={`text-sm font-medium ${on ? "text-emerald-800 line-through decoration-emerald-400" : "text-gray-800"}`}>{d}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          <div className={`mt-5 rounded-2xl px-5 py-4 text-sm flex flex-col sm:flex-row sm:items-center gap-3 ${pct === 100 ? "bg-emerald-50 text-emerald-900" : "bg-sky-50 text-[#00416a]"}`}>
            <span className="flex-1 font-medium">
              {pct === 100 ? "🎉 This group is complete." : "Missing something? We'll tell you the easiest way to get it."}
            </span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">
              Ask us →
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
      <Heading label="Process" title="How Our GST Annual Return (GSTR-9) Works" />
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
      <Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">💰</p>
            <h3 className="font-bold text-[#00416a] mb-2">What does it cost?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our fee depends on your turnover, the volume of invoices, how clean your books are and whether GSTR-9C or backlog years are involved. You receive a written quote before we start. Any late fee payable to the government is shown separately.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">📅</p>
            <h3 className="font-bold text-[#00416a] mb-2">When is it due?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              GSTR-9 is generally due on 31 December after the financial year, though extensions have been given by notification. Start reconciliation early, ideally soon after year-end, so there is time to fix issues. Our team confirms the current date.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FAQs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="scroll-mt-40">
      <Heading label="FAQs" title="GSTR-9 — Frequently Asked Questions" />
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
  const gst = serviceCategories.find((c) => c.slug === "gst");
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gstr-9").slice(0, 6);
  if (!items.length) return null;
  return (
    <section className="scroll-mt-40">
      <Heading label="Related Services" title="More GST Services" />
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((r, i) => (
          <Reveal key={r.slug} delay={i * 60}>
            <Link
              href={`/serviceslist/gst/${r.slug}`}
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
        <div className="g9-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Get your GSTR-9 right first time</h3>
          <p className="text-sm text-sky-100/85 leading-relaxed mb-5">Tell us about your business — a CA from our team will call you back with a clear plan and a fixed quote.</p>
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
          <div className="g9-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to file your GST annual return?</h3>
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