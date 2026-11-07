"use client";

// app/serviceslist/gst/gst-itc-reconciliation/GSTITCReconciliationClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GST ITC Reconciliation";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "planner", label: "Why Mismatch?" },
  { id: "included", label: "What's Included" },
  { id: "gap", label: "ITC Gap Check" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "mistakes", label: "Pitfalls" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "Input Tax Credit (ITC) is the GST you pay on purchases that you can set off against the GST you collect on sales. For most businesses it is the single biggest lever on cash flow, and for manufacturers and traders with large purchase volumes it can run into lakhs every month. But ITC is not automatic. The law allows you to claim credit only where the supplier has reported the invoice, the credit is shown in your auto-drafted statement (GSTR-2B), and the purchase is eligible under the conditions of the Act.",
  "That is why ITC reconciliation matters. It compares your purchase books with GSTR-2B, invoice by invoice and vendor by vendor, to show what is available, what you have claimed and where they differ. Differences arise from vendors who have not filed, invoices reported in a different month, wrong GSTINs, credit notes, blocked credits and simple data-entry errors. Claiming more than is available can trigger interest, reversal and notices; claiming less leaves your own money with the government.",
  "Taxvio's CA-assisted team performs this reconciliation every month or for backlog periods. We match GSTR-2B with your purchase register, identify vendor-wise mismatches, review eligibility, advise on reversals and re-claims, and give you a clear monthly report. The goal is to claim the maximum eligible credit and to stay clear of notices. You receive a fixed quote before we begin.",
];

const FEATURES = [
  { title: "GSTR-2B vs purchase register matching", note: "We match every invoice in your books with the auto-drafted statement on invoice number, date, GSTIN and tax value, and tag each as matched, mismatched or missing." },
  { title: "Vendor-wise mismatch identification", note: "We show which suppliers have not reported your invoices or have reported them differently, so you can follow up with the right vendor." },
  { title: "ITC eligibility review", note: "We check each purchase against the eligibility conditions and the categories where credit is blocked, so you claim only what the law allows." },
  { title: "Reversal & reclaim advisory", note: "Where credit must be reversed, or can be re-claimed once a vendor files, we advise on the timing and the correct treatment." },
  { title: "Monthly reconciliation reports", note: "Each month you receive a clear report with matched, unmatched and action items, so you always know your credit position before filing GSTR-3B." },
];

const BENEFITS = [
  { icon: "💰", t: "Claim maximum eligible credit", d: "Find credit you are entitled to but have not claimed, and avoid leaving money on the table." },
  { icon: "🛡️", t: "Avoid notices and interest", d: "Excess or ineligible credit is a leading cause of GST notices; reconciliation catches it first." },
  { icon: "🔎", t: "Know your vendors", d: "Identify suppliers who file late or incorrectly, and act on them before they affect your credit." },
  { icon: "📅", t: "Monthly clarity", d: "A reconciled position before every GSTR-3B means no surprises at filing time." },
  { icon: "🧮", t: "Accurate cash planning", d: "Know how much tax you will actually pay in cash after credit, so you can plan." },
  { icon: "📚", t: "Audit-ready records", d: "Invoice-level working papers make audits and annual reconciliations much easier." },
];

const IDEAL = [
  { icon: "📦", t: "High purchase volumes", d: "Businesses with hundreds or thousands of purchase invoices a month." },
  { icon: "🏭", t: "Manufacturers & traders", d: "Entities where input credit is a large part of the tax position." },
  { icon: "⚠️", t: "Facing ITC mismatches", d: "Companies with notices, mismatches or credit blocked by vendor non-compliance." },
];

type Case = { id: string; label: string; icon: string; t: string; d: string };

const CASES: Case[] = [
  { id: "notfiled", label: "Supplier has not filed their return", icon: "📭", t: "Vendor non-filing", d: "The invoice does not appear in your GSTR-2B because the supplier has not reported it. Credit generally should not be claimed until it appears; we track the vendor and re-claim when it shows up." },
  { id: "period", label: "Invoice appears in a different month", icon: "📆", t: "Timing difference", d: "The supplier reported the invoice in a later period. We align the period, claim in the right month and avoid double counting." },
  { id: "gstin", label: "Wrong GSTIN or invoice number in the data", icon: "🔤", t: "Data-entry mismatch", d: "A small typo in GSTIN, invoice number or date prevents matching. We identify the pair and correct the book entry or ask the vendor to amend." },
  { id: "blocked", label: "Purchase is not eligible for credit", icon: "🚫", t: "Blocked or ineligible credit", d: "Certain categories, for example some personal or specified items, do not qualify for credit under the law. We flag them so you do not claim them." },
  { id: "notes", label: "Credit / debit notes do not match", icon: "🧾", t: "Credit note differences", d: "Notes issued by the supplier or by you must be reflected on both sides. We reconcile them so your net credit is right." },
  { id: "rcm", label: "Reverse charge or import purchases", icon: "🌐", t: "Reverse charge / imports", d: "Credit on reverse charge and imports follows different rules and is not always visible in the same way. We treat them separately." },
];

const DOC_SETS: Record<string, { label: string; docs: string[] }> = {
  purchases: {
    label: "Purchase data",
    docs: [
      "Purchase register for the period",
      "Purchase invoices and bills",
      "Credit and debit notes received",
      "Reverse charge and import records",
      "Expense bills on which credit is claimed",
    ],
  },
  gstr2b: {
    label: "GSTR-2B & returns",
    docs: [
      "GSTIN and portal access / downloaded GSTR-2B",
      "GSTR-3B for the period",
      "GSTR-2A, if needed for reference",
      "Electronic credit ledger statement",
      "Earlier reconciliation reports, if any",
    ],
  },
  books: {
    label: "Books of accounts",
    docs: [
      "Purchase and expense ledgers",
      "GST input ledger",
      "Vendor ledgers for high-value suppliers",
      "Notices or queries on credit, if any",
      "List of vendor contacts for follow-up",
    ],
  },
};

const CYCLE = [
  { t: "Download & import", d: "GSTR-2B and your purchase register are brought into one working file." },
  { t: "Match", d: "Invoices are matched on GSTIN, number, date and values, with tolerance rules for small differences." },
  { t: "Classify", d: "Each line is tagged as matched, partly matched, in books only or in GSTR-2B only." },
  { t: "Act on exceptions", d: "We follow up vendors, correct entries and decide what to claim, hold or reverse." },
  { t: "Report before GSTR-3B", d: "You get the monthly report and the eligible credit figure to use in your return." },
];

const STEPS = [
  { t: "Scope & period", d: "We agree the periods, registrations and volumes, and whether this is monthly, backlog or both." },
  { t: "Collect data", d: "You share the purchase register and books. We download GSTR-2B and related statements from the portal." },
  { t: "Reconcile invoice by invoice", d: "We match your books against GSTR-2B and list every difference, vendor-wise." },
  { t: "Review eligibility", d: "We check each item against the eligibility rules and identify credit to hold, reverse or re-claim." },
  { t: "Discuss & decide", d: "We walk you through the exceptions and agree the actions, including vendor follow-ups." },
  { t: "Report & repeat", d: "You receive the report and eligible credit figure, and we repeat the cycle each month." },
];

const MISTAKES = [
  { t: "Claiming credit not in GSTR-2B", d: "Credit without matching supplier data is a leading cause of reversal, interest and notices." },
  { t: "Ignoring blocked categories", d: "Some purchases are ineligible for credit regardless of a valid invoice." },
  { t: "Not chasing vendors", d: "Credit stuck because a supplier did not file stays stuck until someone follows up." },
  { t: "Reconciling only at year-end", d: "Differences found a year later are harder to fix and may be time-barred." },
  { t: "Missing reversals", d: "Credit that must be reversed, for example for unpaid invoices beyond the permitted time, needs to be tracked." },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GSTITCReconciliationClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
          <Planner />
          <Included />
          <Who />
          <Gap />
          <Documents />
          <Process />
          <Pitfalls />
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
      @keyframes ic-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes ic-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .ic-aurora { animation: ic-aurora 14s ease-in-out infinite; }
      .ic-float { animation: ic-float 7s ease-in-out infinite; }
      .ic-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .ic-reveal.ic-in { opacity: 1; transform: none; }
      .ic-hide-scroll::-webkit-scrollbar { display: none; }
      .ic-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .ic-aurora, .ic-float { animation: none !important; }
        .ic-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`ic-reveal ${shown ? "ic-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Matches", v: "GSTR-2B vs books" },
    { k: "Reports", v: "Monthly" },
    { k: "Reports", v: "Monthly" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="ic-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="ic-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">GST ITC Reconciliation</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            💳 GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST ITC Reconciliation{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Accurate, On Time, CA-Reviewed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Systematic reconciliation of GSTR-2B and purchase books to identify ITC mismatches, claim maximum eligible credit and prevent notices.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#planner" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Why Mismatch?
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
          <div className="ic-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your ITC cycle, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample status view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "GSTR-2B downloaded", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Invoices matched", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Vendor gaps listed", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Acknowledgement", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Eligible ITC confirmed", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto ic-hide-scroll">
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
      <Heading label="Overview" title="What Is GST ITC Reconciliation?" />
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
      <Heading label="Benefits" title="Why Professional GST ITC Reconciliation Pays Off" />
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
      <Heading label="What's Included" title="What You Get With GST ITC Reconciliation" />
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
      <Heading label="Who It's For" title="Who Needs ITC Reconciliation" />
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

/** Why is my ITC mismatched */
function Planner() {
  const [sel, setSel] = useState<string | null>(null);
  const cur = CASES.find((c) => c.id === sel);
  return (
    <section id="planner" className="scroll-mt-40">
      <Heading label="Why Mismatch?" title="Why Doesn't Your ITC Match GSTR-2B?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Almost every business sees differences between its purchase books and GSTR-2B. The fix depends on the cause.
          Pick the situation closest to yours to see what usually happens and how we handle it.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-2.5">
            {CASES.map((c) => {
              const on = sel === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSel(c.id)}
                  aria-pressed={on}
                  className={`text-left flex items-center gap-3 rounded-xl border px-4 py-3 transition-all ${on ? "bg-[#00416a] text-white border-[#00416a] shadow-lg shadow-[#00416a]/20" : "bg-gray-50 border-gray-200 hover:border-[#00416a]/40"}`}
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="flex-1 text-sm font-semibold">{c.label}</span>
                </button>
              );
            })}
          </div>
          {cur && (
            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-5">
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">Likely cause</p>
              <p className="font-extrabold text-[#00416a] text-lg">{cur.t}</p>
              <p className="text-sm text-gray-700 mt-1">{cur.d}</p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">Get my ITC reconciled →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. Treatment depends on the facts and the current law; our CA confirms your case.</p>
        </div>
      </Reveal>
    </section>
  );
}

/** ITC gap calculator */
function Gap() {
  const [books, setBooks] = useState(500000);
  const [g2b, setG2b] = useState(440000);
  const [blocked, setBlocked] = useState(20000);
  const [months, setMonths] = useState(2);

  const r = useMemo(() => {
    const b = Math.max(0, books), g = Math.max(0, g2b), x = Math.max(0, blocked);
    const eligibleBooks = Math.max(0, b - x);
    const excess = Math.max(0, eligibleBooks - g);
    const unclaimed = Math.max(0, g - eligibleBooks);
    const interest = Math.round(excess * 0.18 * (Math.max(0, months) / 12));
    return { excess, unclaimed, interest, eligibleBooks };
  }, [books, g2b, blocked, months]);

  const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
  const Field = ({ label, v, set }: { label: string; v: number; set: (n: number) => void }) => (
    <label className="block">
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      <input type="number" min={0} value={v} onChange={(e) => set(+e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
    </label>
  );

  return (
    <section id="gap" className="scroll-mt-40">
      <Heading label="ITC Gap Check" title="How Big Is Your ITC Gap? Quick Estimate" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Enter the credit shown in your purchase books, the credit available in GSTR-2B and any amount you know is
          ineligible. We show whether you may have claimed too much, or left credit unclaimed, and what the interest
          exposure could look like.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <Field label="ITC as per purchase books (₹)" v={books} set={setBooks} />
            <Field label="ITC available in GSTR-2B (₹)" v={g2b} set={setG2b} />
            <Field label="Known ineligible / blocked ITC (₹)" v={blocked} set={setBlocked} />
            <Field label="Months the excess has been outstanding" v={months} set={setMonths} />
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className={`rounded-2xl border p-4 ${r.excess > 0 ? "bg-amber-50 border-amber-200" : "bg-emerald-50 border-emerald-200"}`}>
              <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/70">Possible excess claim</p>
              <p className="text-2xl font-extrabold text-[#00416a]">{inr(r.excess)}</p>
              <p className="text-sm text-gray-600 mt-1">{r.excess > 0 ? "Eligible book credit exceeds GSTR-2B." : "Within GSTR-2B."}</p>
            </div>
            <div className={`rounded-2xl border p-4 ${r.unclaimed > 0 ? "bg-sky-50 border-sky-100" : "bg-gray-50 border-gray-200"}`}>
              <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/70">Possible unclaimed credit</p>
              <p className="text-2xl font-extrabold text-[#00416a]">{inr(r.unclaimed)}</p>
              <p className="text-sm text-gray-600 mt-1">{r.unclaimed > 0 ? "GSTR-2B shows more than your books." : "None indicated."}</p>
            </div>
            <div className="rounded-2xl bg-[#00416a] text-white p-4">
              <p className="text-xs uppercase tracking-widest text-sky-200 font-bold">Indicative interest</p>
              <p className="text-2xl font-extrabold">{inr(r.interest)}</p>
              <p className="text-sm text-sky-100 mt-1">At 18% a year on the excess.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl bg-sky-50 px-5 py-4 text-sm text-[#00416a]">
            <span className="flex-1 font-medium">An invoice-level reconciliation shows exactly which vendors and bills explain the gap.</span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">Reconcile now →</button>
          </div>
          <p className="mt-4 text-xs text-gray-400">A rough estimate, not a legal computation. Actual interest, timing and conditions depend on current rules and facts.</p>
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
      <Heading label="Documents" title="Documents Required for ITC Reconciliation" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          We work from your purchase data, GSTR-2B and returns, and books of accounts for the period. Tick off what you can provide in each group.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-5" role="tablist">
            {keys.map((k) => (
              <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${tab === k ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}>
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
            <span className="flex-1 font-medium">{pct === 100 ? "🎉 This group is complete." : "Missing something? We can download GSTR-2B and related data from the portal."}</span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">Ask us →</button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Pitfalls() {
  return (
    <section id="mistakes" className="scroll-mt-40">
      <Heading label="Pitfalls" title="ITC Mistakes That Cost Businesses Money" />
      <Reveal>
        <h3 className="font-extrabold text-[#00416a] text-xl mb-4">The monthly reconciliation cycle</h3>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {CYCLE.map((s, i) => (
            <li key={s.t} className="bg-white border border-gray-200 rounded-2xl p-4">
              <span className="inline-block text-[11px] font-bold text-[#00416a] uppercase tracking-wide bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full mb-2">Step {i + 1}</span>
              <p className="font-bold text-[#00416a] mb-1">{s.t}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </Reveal>
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
          Related: <Link href="/serviceslist/gst/gst-return" className="font-semibold text-[#00416a] hover:underline">GST return filing</Link>, <Link href="/serviceslist/gst/gst-audit" className="font-semibold text-[#00416a] hover:underline">GST audit assistance</Link> and all <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link>.
        </p>
      </Reveal>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-40">
      <Heading label="Process" title="How Our GST ITC Reconciliation Works" />
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
              Our fee depends on the number of purchase invoices, registrations and whether you need monthly service or backlog periods. You receive a written quote before we start, with no add-ons introduced later.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does it take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A monthly cycle is usually completed before your GSTR-3B is due, provided we receive your data on time. Backlog periods depend on volume and data quality, and we confirm a plan before we begin.
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
      <Heading label="FAQs" title="GST ITC Reconciliation — Frequently Asked Questions" />
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
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gst-itc-reconciliation").slice(0, 6);
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
        <div className="ic-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Claim maximum eligible ITC</h3>
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
          <div className="ic-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to claim every rupee of eligible ITC?</h3>
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