"use client";

// app/serviceslist/gst/gst-audit/GSTAuditClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GST Audit Assistance";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "planner", label: "Which Audit?" },
  { id: "included", label: "What's Included" },
  { id: "notice", label: "Reply Tracker" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "mistakes", label: "Pitfalls" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "A GST audit is a verification of the accuracy of the returns you have filed, the turnover you have declared, the tax you have paid and the input tax credit you have claimed. It can happen in several ways. The tax department may select your business for an audit, or send a notice after scrutinising your returns. In some cases a special audit by a cost or chartered accountant is ordered. Many businesses also choose a voluntary internal review before the department finds a problem.",
  "The experience can be stressful because an audit looks at a full period, sometimes several years, and compares your books against your returns, your supplier data and the auto-drafted credit statements. Gaps that looked small month by month, such as unmatched invoices, credit claimed in the wrong period or tax paid on the wrong rate, can add up to a demand with interest and penalty. What decides the outcome is usually preparation: organised records, a clear reconciliation and timely, well-reasoned replies.",
  "Taxvio's CA-assisted team supports you through the whole process. We check whether and how an audit applies to you, reconcile your data, prepare the documentation and audit-related reports, and coordinate with the department on your behalf, including drafting replies and attending to queries. Our aim is to resolve questions at the earliest stage, with the facts in order. You receive a fixed quote before we begin.",
];

const FEATURES = [
  { title: "Audit applicability check", note: "We review any notice or intimation you have received, identify the type of audit or scrutiny, the period covered and the time you have to respond." },
  { title: "Data reconciliation", note: "We reconcile your books with GSTR-1, GSTR-3B, the annual return and credit statements, and list every gap with a proposed explanation or correction." },
  { title: "Audit report preparation", note: "We prepare the reconciliation statements, working papers and reports that support your position, in the format the audit or reply requires." },
  { title: "Department coordination", note: "We draft replies, compile the documents requested, communicate with the officer and attend to follow-up queries on your behalf." },
];

const BENEFITS = [
  { icon: "🧾", t: "Records in order", d: "A clean reconciliation gives you a clear answer to most questions an auditor will ask." },
  { icon: "🛡️", t: "Reduce exposure", d: "Early identification of gaps lets you correct or explain them before they become a demand." },
  { icon: "⏰", t: "Reply on time", d: "We track the response window so no notice goes unanswered." },
  { icon: "🤝", t: "A single point of contact", d: "One team handles the officer, the documents and the follow-ups so you can run your business." },
  { icon: "💳", t: "Protect your credit", d: "Input tax credit claims are checked against available data before the department questions them." },
  { icon: "📚", t: "Better compliance after", d: "We point out process fixes so the same issues do not repeat next year." },
];

const IDEAL = [
  { icon: "🏢", t: "Large businesses", d: "High-turnover entities with many invoices and multiple registrations that face regular scrutiny." },
  { icon: "📨", t: "Entities under GST audit", d: "Businesses that have received an audit intimation or a notice and need organised support." },
  { icon: "🔍", t: "Businesses wanting a review", d: "Companies that want an internal check of their GST position before an audit finds issues." },
];

type Case = { id: string; label: string; icon: string; t: string; d: string };

const CASES: Case[] = [
  { id: "dept", label: "Intimation of an audit by the department", icon: "🏛️", t: "Departmental audit", d: "The department generally gives advance intimation and asks for records. We reconcile, prepare the documents and coordinate with the audit team." },
  { id: "scrutiny", label: "Notice pointing out discrepancies in my returns", icon: "📨", t: "Scrutiny of returns", d: "The officer has flagged differences and asks for an explanation within a stated time. We prepare a reasoned reply with supporting data." },
  { id: "special", label: "Order for a special audit by an accountant", icon: "📑", t: "Special audit", d: "In complex cases an audit by a nominated accountant may be ordered. We help you provide records and respond to the auditor's requests." },
  { id: "annual", label: "Large turnover — annual return and reconciliation", icon: "📊", t: "Annual return reconciliation", d: "Higher-turnover taxpayers generally need to reconcile the annual return with financial statements. We prepare the reconciliation." },
  { id: "self", label: "No notice — I want a voluntary health check", icon: "🩺", t: "Voluntary GST review", d: "We review your returns, credit and records ahead of time, report the gaps and help you correct them before any notice." },
];

const DOC_SETS: Record<string, { label: string; docs: string[] }> = {
  returns: {
    label: "GST returns",
    docs: [
      "GSTR-1 and GSTR-3B for the audit period",
      "Annual return (GSTR-9) and reconciliation statement, if filed",
      "Auto-drafted credit statements (GSTR-2A / 2B)",
      "Cash and credit ledger statements",
      "Notices, intimations and replies received so far",
    ],
  },
  registers: {
    label: "Sales & purchase registers",
    docs: [
      "Sales register with invoice-wise tax details",
      "Purchase register with supplier GSTIN and credit claimed",
      "Credit and debit note registers",
      "Export, SEZ and e-way bill records, if applicable",
      "Stock and fixed-asset registers where credit was claimed",
    ],
  },
  books: {
    label: "Books of accounts",
    docs: [
      "Trial balance, profit & loss and balance sheet",
      "Ledgers of sales, purchases and expenses",
      "Bank statements and reconciliations",
      "Income tax return and tax audit report, if available",
      "Agreements and contracts for key transactions",
    ],
  },
};

const STAGES = [
  { t: "Intimation / notice received", d: "The department communicates the audit or the discrepancies and the records or reply required." },
  { t: "Preparation & reconciliation", d: "We organise your records and reconcile books against returns and credit data." },
  { t: "Records produced & queries", d: "Requested documents are provided and the audit team may raise queries or observations." },
  { t: "Reply & clarification", d: "We draft reasoned replies with working papers, correcting or explaining each gap." },
  { t: "Findings & closure", d: "The officer issues findings. Where there is no further issue, the audit is concluded; otherwise a notice for tax, interest or penalty may follow." },
];

const STEPS = [
  { t: "Review the notice or objective", d: "We study any notice, the period and the time limit, and confirm what the department needs or what you want reviewed." },
  { t: "Collect records", d: "You share returns, registers and books. We pull portal data to cross-check what you give us." },
  { t: "Reconcile & identify gaps", d: "We reconcile turnover, tax and credit across sources and list every difference with a likely cause." },
  { t: "Plan the response", d: "We agree with you which gaps to correct, which to explain and what supporting evidence is needed." },
  { t: "Prepare reports & replies", d: "We prepare the reconciliation statements, working papers and a reasoned reply." },
  { t: "Coordinate with the department", d: "We submit documents, attend to queries and keep you informed until the matter is closed." },
];

const MISTAKES = [
  { t: "Missing the reply deadline", d: "Notices carry a response window; silence can lead to an order passed on the department's own figures." },
  { t: "Unreconciled turnover", d: "Differences between books, returns and the annual return are the first thing an auditor checks." },
  { t: "Unsupported credit claims", d: "Credit without matching supplier data or eligible documents is a common ground for demand." },
  { t: "Disorganised records", d: "Records that cannot be produced quickly weaken even a correct position." },
  { t: "Replying without evidence", d: "A reply without working papers and documents is rarely persuasive; every point needs backup." },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GSTAuditClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
          <Notice />
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
      @keyframes au-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes au-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .au-aurora { animation: au-aurora 14s ease-in-out infinite; }
      .au-float { animation: au-float 7s ease-in-out infinite; }
      .au-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .au-reveal.au-in { opacity: 1; transform: none; }
      .au-hide-scroll::-webkit-scrollbar { display: none; }
      .au-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .au-aurora, .au-float { animation: none !important; }
        .au-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`au-reveal ${shown ? "au-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Support", v: "End-to-end" },
    { k: "Mode", v: "100% online" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="au-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="au-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">GST Audit Assistance</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            🔍 GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST Audit Assistance{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Accurate, On Time, CA-Reviewed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Complete support for GST audit including reconciliation, documentation, audit reports and departmental coordination — by a CA-led team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#planner" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Which Audit?
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
          <div className="au-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your audit, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample status view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Notice reviewed", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Data reconciled", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Reports prepared", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Acknowledgement", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Closure follow-up", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto au-hide-scroll">
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
      <Heading label="Overview" title="What Is GST Audit Assistance?" />
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
      <Heading label="Benefits" title="Why Professional GST Audit Assistance Pays Off" />
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
      <Heading label="What's Included" title="What You Get With GST Audit Assistance" />
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
      <Heading label="Who It's For" title="Who We Support" />
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

/** Which audit / scrutiny situation */
function Planner() {
  const [sel, setSel] = useState<string | null>(null);
  const cur = CASES.find((c) => c.id === sel);
  return (
    <section id="planner" className="scroll-mt-40">
      <Heading label="Which Audit?" title="What Kind of GST Audit or Notice Do You Face?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          GST audit is not one thing. The right preparation depends on what has actually happened. Choose the situation
          closest to yours for an indication of the type and how we would approach it.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid gap-2.5">
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
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">Indication</p>
              <p className="font-extrabold text-[#00416a] text-lg">{cur.t}</p>
              <p className="text-sm text-gray-700 mt-1">{cur.d}</p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">Talk to a CA →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. Procedures and time limits depend on the notice and current law; our CA confirms your case.</p>
        </div>
      </Reveal>
    </section>
  );
}

/** Notice reply-date tracker */
function Notice() {
  const [noticeDate, setNoticeDate] = useState("");
  const [days, setDays] = useState(15);
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setToday(d);
  }, []);

  const info = useMemo(() => {
    if (!noticeDate || !today) return null;
    const start = new Date(noticeDate + "T00:00:00");
    if (isNaN(start.getTime())) return null;
    const due = new Date(start);
    due.setDate(due.getDate() + Math.max(0, days));
    const diff = Math.round((due.getTime() - today.getTime()) / 86400000);
    return { due, diff };
  }, [noticeDate, days, today]);

  const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  return (
    <section id="notice" className="scroll-mt-40">
      <Heading label="Reply Tracker" title="How Much Time Do You Have to Reply?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Every notice states a time to respond, and missing it can make things worse. Enter the notice date and the number
          of days given in the notice to see your reply date. Extensions are sometimes possible on request, so ask early.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Date of notice</span>
              <input type="date" value={noticeDate} onChange={(e) => setNoticeDate(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Days given to reply (as in the notice)</span>
              <input type="number" min={0} value={days} onChange={(e) => setDays(+e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
            </label>
          </div>
          {info && (
            <div className={`mt-5 rounded-2xl border p-5 ${info.diff < 0 ? "bg-red-50 border-red-200" : info.diff <= 5 ? "bg-amber-50 border-amber-200" : "bg-emerald-50 border-emerald-200"}`}>
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">Reply due</p>
              <p className="text-xl font-extrabold text-[#00416a]">{fmt(info.due)}</p>
              <p className="text-sm text-gray-700 mt-1">
                {info.diff < 0 ? `The date passed ${Math.abs(info.diff)} day${Math.abs(info.diff) === 1 ? "" : "s"} ago. Contact us immediately so a request for time or a late reply can be considered.` : info.diff === 0 ? "Due today." : `${info.diff} day${info.diff === 1 ? "" : "s"} left.`}
              </p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">Get help replying →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Always follow the date and instructions in your actual notice. This is only a helper.</p>
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
      <Heading label="Documents" title="Documents Required for GST Audit Support" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          We work from your GST returns, sales and purchase registers and books of accounts for the audit period. Tick off what
          you can already provide in each group; the more organised your records, the stronger your position.
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
            <span className="flex-1 font-medium">{pct === 100 ? "🎉 This group is complete." : "Missing records? We'll tell you how to rebuild or retrieve them."}</span>
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
      <Heading label="Pitfalls" title="GST Audit Mistakes That Cost Businesses Money" />
      <Reveal>
        <h3 className="font-extrabold text-[#00416a] text-xl mb-4">How an audit typically unfolds</h3>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {STAGES.map((s, i) => (
            <li key={s.t} className="bg-white border border-gray-200 rounded-2xl p-4">
              <span className="inline-block text-[11px] font-bold text-[#00416a] uppercase tracking-wide bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full mb-2">Stage {i + 1}</span>
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
          Related: <Link href="/serviceslist/gst/gstr-9" className="font-semibold text-[#00416a] hover:underline">GST annual return (GSTR-9)</Link>, <Link href="/serviceslist/gst/gst-return" className="font-semibold text-[#00416a] hover:underline">GST return filing</Link> and all <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link>.
        </p>
      </Reveal>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-40">
      <Heading label="Process" title="How Our GST Audit Assistance Works" />
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
              Our fee depends on the audit period, the number of registrations and invoices, and the stage of the matter. You receive a written quote before we start. Any tax, interest or penalty finally demanded is payable to the government and is separate.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does it take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Audit timelines are set by the department and the notice, and vary by case. We prepare quickly and track every date. The earlier you contact us, the more time there is to reconcile and respond.
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
      <Heading label="FAQs" title="GST Audit — Frequently Asked Questions" />
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
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gst-audit").slice(0, 6);
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
        <div className="au-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Face your GST audit with confidence</h3>
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
          <div className="au-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Facing a GST audit or notice?</h3>
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