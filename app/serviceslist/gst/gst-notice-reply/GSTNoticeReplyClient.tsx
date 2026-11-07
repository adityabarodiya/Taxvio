"use client";

// app/serviceslist/gst/gst-notice-reply/GSTNoticeReplyClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GST Notice Reply & Compliance";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "planner", label: "Notice Types" },
  { id: "included", label: "What's Included" },
  { id: "deadline", label: "Reply Tracker" },
  { id: "gap", label: "Exposure Estimate" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "mistakes", label: "Pitfalls" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "Receiving a GST notice is stressful, and the first instinct is often to ignore it, hope it goes away or reply in a hurry. Both are mistakes. A GST notice is a formal communication from the department that starts a legal process with fixed time limits. A well-prepared reply, filed on time with supporting documents, resolves most notices at the first stage. A late, thin or missing reply can lead to an order against you on the department's own figures, with tax, interest and penalty.",
  "Notices come in many forms. Some ask for clarification on a return, such as a mismatch between your GSTR-1 and GSTR-3B or between your credit claimed and the auto-drafted statement. Some relate to registration, refunds, composition, late filing or a proposed demand of tax. Each has its own form, reply route and time limit. Understanding which notice you have received, what the department is actually alleging and what evidence answers it is the first and most important step.",
  "Taxvio's CA-assisted team handles the whole process. We analyse your notice, identify the section and issue, reconcile your data, draft a reasoned reply, upload it with the supporting documents and follow the case until it is closed, including personal hearings where needed. You receive a written quote before we begin, and we tell you honestly if a reply is not needed or if the better course is to pay and close the matter.",
];

const FEATURES = [
  { title: "Notice analysis", note: "We study the notice, identify the form, the section invoked, the period and the exact allegation, and tell you the time you have to respond and what is at stake." },
  { title: "Reply drafting", note: "We reconcile your records and draft a reasoned reply that answers each point with facts, working papers and the relevant provisions, in the format the portal expects." },
  { title: "Document submission", note: "We organise and upload the supporting documents, such as invoices, ledgers, bank statements and reconciliations, and confirm that the reply is filed correctly." },
  { title: "Case follow-up", note: "We track the matter on the portal, attend to further queries, help with personal hearings and advise on next steps, including payment or appeal if required." },
];

const BENEFITS = [
  { icon: "⏰", t: "Reply on time", d: "We track the window from the day you share the notice so no deadline is missed." },
  { icon: "🔍", t: "Understand the real issue", d: "Notices are often written in general terms; we pin down what is actually being alleged." },
  { icon: "📑", t: "Evidence-backed replies", d: "A reply with working papers and documents is far more persuasive than a general denial." },
  { icon: "🧮", t: "Know your exposure", d: "We tell you the likely tax, interest and penalty position so you can decide with facts." },
  { icon: "🤝", t: "One point of contact", d: "We handle the portal, the officer and the paperwork so you can run your business." },
  { icon: "🛡️", t: "Fix the root cause", d: "We point out process gaps so the same notice does not come back next year." },
];

const IDEAL = [
  { icon: "📨", t: "Businesses with a notice", d: "Any registered taxpayer who has received a notice, intimation or query on the GST portal." },
  { icon: "🧾", t: "Mismatch cases", d: "Taxpayers with differences between returns, credit statements and books." },
  { icon: "⚠️", t: "Late or missing filings", d: "Businesses with pending returns or registration-related notices." },
];

type Case = { id: string; label: string; icon: string; form: string; t: string; d: string };

const CASES: Case[] = [
  { id: "scrutiny", label: "Notice on discrepancies in my returns", icon: "📊", form: "ASMT-10", t: "Scrutiny of returns", d: "The officer has found differences in your returns and asks for an explanation. The reply is generally filed in a prescribed form within a stated period, commonly about 30 days, and can be extended on request." },
  { id: "scn", label: "Show cause notice proposing tax, interest and penalty", icon: "⚖️", form: "DRC-01 / SCN", t: "Show cause notice", d: "This is a proposal to demand tax, with interest and penalty. A reply, and in some cases payment within the permitted period, can reduce or avoid penalty. Time limits are strict." },
  { id: "itc", label: "Intimation about ITC mismatch or tax difference", icon: "💳", form: "DRC-01B / 01C", t: "Return mismatch intimation", d: "The system has flagged a difference between returns or in credit claimed. You generally have to explain, correct or pay within the period stated in the intimation." },
  { id: "reg", label: "Notice about my registration", icon: "🪪", form: "REG-03 / REG-17", t: "Registration notice", d: "The officer seeks clarification or proposes cancellation. The reply window is short, so quick action matters. Cancelled registrations can sometimes be revoked." },
  { id: "return", label: "Notice for not filing returns", icon: "📅", form: "GSTR-3A", t: "Default in return filing", d: "A reminder to file pending returns. Filing within the period stated, with late fee, can close it; ignoring it can lead to an assessment on the department's estimate." },
  { id: "refund", label: "Notice on my refund application", icon: "💸", form: "RFD-08", t: "Refund-related notice", d: "The officer proposes to reject or reduce a refund. A reasoned reply with documents is needed within the period stated." },
];

const DOC_SETS: Record<string, { label: string; docs: string[] }> = {
  notice: {
    label: "The notice",
    docs: [
      "Copy of the GST notice with its reference number",
      "Date of the notice and the reply deadline stated",
      "Any earlier notices or replies on the same matter",
      "Portal login access or authorisation letter",
      "Any personal hearing intimation",
    ],
  },
  returns: {
    label: "Returns & ledgers",
    docs: [
      "GSTR-1 and GSTR-3B for the period in the notice",
      "Annual return and reconciliation, if filed",
      "Auto-drafted credit statements (GSTR-2A / 2B)",
      "Electronic cash and credit ledger statements",
      "Challans of tax paid",
    ],
  },
  support: {
    label: "Supporting documents",
    docs: [
      "Sales and purchase invoices relevant to the issue",
      "Books of accounts, ledgers and bank statements",
      "Contracts, e-way bills or transport records, if relevant",
      "Reconciliation statements, if already prepared",
      "Explanations or correspondence with suppliers or customers",
    ],
  },
};

const CYCLE = [
  { t: "Read & classify", d: "We identify the form, section, period and the allegation, and note the reply date." },
  { t: "Gather & reconcile", d: "We collect returns, ledgers and records and reconcile them against the points raised." },
  { t: "Decide the position", d: "We advise whether to explain, correct and pay, or contest, with the likely exposure." },
  { t: "Draft & file the reply", d: "We prepare a reasoned reply with annexures and file it on the portal on time." },
  { t: "Follow up & close", d: "We track the case, handle hearings and further queries until the matter is closed." },
];

const STEPS = [
  { t: "Share your notice", d: "You send us the notice and portal access or authorisation. We note the reply deadline straight away." },
  { t: "Analyse the notice", d: "We identify the form, section and issue and give you a plain-language summary and a plan." },
  { t: "Collect records & reconcile", d: "We gather your returns, ledgers and documents and reconcile them against the points in the notice." },
  { t: "Agree the position", d: "We discuss whether to correct and pay, explain, or contest, and what the exposure looks like." },
  { t: "Draft & submit the reply", d: "After your approval, we file the reply with supporting documents in the required form." },
  { t: "Follow-up & hearings", d: "We track the case, attend to queries and support you at any personal hearing until it is closed." },
];

const MISTAKES = [
  { t: "Ignoring the notice", d: "Silence can lead to an order based on the department's figures, with tax, interest and penalty." },
  { t: "Missing the reply deadline", d: "Reply windows are short; ask for more time early rather than after the date has passed." },
  { t: "Replying without evidence", d: "A general denial rarely works. Every point needs invoices, ledgers or reconciliations." },
  { t: "Replying to the wrong issue", d: "Answering what you assume instead of what the notice alleges can weaken your case." },
  { t: "Paying without understanding", d: "Paying the demand without checking it may close the matter but also admit liability that was not due." },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GSTNoticeReplyClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
          <Deadline />
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
      @keyframes nr-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes nr-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .nr-aurora { animation: nr-aurora 14s ease-in-out infinite; }
      .nr-float { animation: nr-float 7s ease-in-out infinite; }
      .nr-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .nr-reveal.nr-in { opacity: 1; transform: none; }
      .nr-hide-scroll::-webkit-scrollbar { display: none; }
      .nr-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .nr-aurora, .nr-float { animation: none !important; }
        .nr-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`nr-reveal ${shown ? "nr-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Covers", v: "All GST notices" },
    { k: "Support", v: "Till closure" },
    { k: "Support", v: "Till closure" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="nr-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="nr-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">GST Notice Reply & Compliance</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            📨 GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST Notice Reply & Compliance{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Accurate, On Time, CA-Reviewed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Expert assistance in drafting and filing replies to GST notices and departmental queries — analysed, drafted and followed up by a CA-led team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#planner" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Notice Types
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
          <div className="nr-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your notice, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample status view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Notice analysed", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Records reconciled", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Reply drafted", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Acknowledgement", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Case followed up", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto nr-hide-scroll">
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
      <Heading label="Overview" title="What Is GST Notice Reply & Compliance?" />
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
      <Heading label="Benefits" title="Why Professional GST Notice Reply & Compliance Pays Off" />
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
      <Heading label="What's Included" title="What You Get With GST Notice Reply & Compliance" />
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

/** Which notice */
function Planner() {
  const [sel, setSel] = useState<string | null>(null);
  const cur = CASES.find((c) => c.id === sel);
  return (
    <section id="planner" className="scroll-mt-40">
      <Heading label="Notice Types" title="Which GST Notice Have You Received?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          The reply route, the time limit and the risk differ for each type of notice. Choose the one closest to yours for an
          indication. Always check the form number and the dates on your actual notice.
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
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${on ? "bg-white/20" : "bg-sky-100 text-[#00416a]"}`}>{c.form}</span>
                </button>
              );
            })}
          </div>
          {cur && (
            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-5">
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">What it usually means</p>
              <p className="font-extrabold text-[#00416a] text-lg">{cur.t} <span className="text-sm font-semibold text-gray-500">({cur.form})</span></p>
              <p className="text-sm text-gray-700 mt-1">{cur.d}</p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">Share my notice →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. Forms, time limits and consequences depend on the section invoked and current law; our CA confirms your case.</p>
        </div>
      </Reveal>
    </section>
  );
}

/** Reply deadline tracker */
function Deadline() {
  const [noticeDate, setNoticeDate] = useState("");
  const [days, setDays] = useState(30);
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
    <section id="deadline" className="scroll-mt-40">
      <Heading label="Reply Tracker" title="How Much Time Do You Have to Reply?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Every notice states a time to respond, and that date matters more than anything else. Enter the date on your notice
          and the number of days it gives you to see your reply date. If more time is needed, an extension can often be
          requested, but it should be asked for before the date passes.
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
                {info.diff < 0 ? `The date passed ${Math.abs(info.diff)} day${Math.abs(info.diff) === 1 ? "" : "s"} ago. Contact us immediately; depending on the stage, a late reply or a request for time may still be possible.` : info.diff === 0 ? "Due today. Reach out now." : `${info.diff} day${info.diff === 1 ? "" : "s"} left.`}
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

/** Exposure estimator */
function Gap() {
  const [tax, setTax] = useState(200000);
  const [months, setMonths] = useState(6);
  const [pen, setPen] = useState(10);

  const r = useMemo(() => {
    const t = Math.max(0, tax);
    const interest = Math.round(t * 0.18 * (Math.max(0, months) / 12));
    const penalty = Math.round(t * (Math.max(0, pen) / 100));
    return { interest, penalty, withPen: t + interest + penalty, noPen: t + interest };
  }, [tax, months, pen]);

  const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
  const Field = ({ label, v, set }: { label: string; v: number; set: (n: number) => void }) => (
    <label className="block">
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      <input type="number" min={0} value={v} onChange={(e) => set(+e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
    </label>
  );

  return (
    <section id="gap" className="scroll-mt-40">
      <Heading label="Exposure Estimate" title="What Could a GST Demand Cost You?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          If a notice proposes a demand, three things stack up: the tax itself, interest from the date it should have been paid,
          and a penalty. In some cases, paying the tax and interest within the permitted period can avoid or reduce the penalty.
          Use this to see how the pieces add up. Real figures depend on the section invoked and the facts.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            <Field label="Tax proposed in the notice (₹)" v={tax} set={setTax} />
            <Field label="Months since the tax was due" v={months} set={setMonths} />
            <Field label="Penalty assumed (% of tax)" v={pen} set={setPen} />
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-sky-50 border border-sky-100 p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/70">Interest (18% a year)</p>
              <p className="text-2xl font-extrabold text-[#00416a]">{inr(r.interest)}</p>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-amber-700">Penalty (if imposed)</p>
              <p className="text-2xl font-extrabold text-amber-900">{inr(r.penalty)}</p>
            </div>
            <div className="rounded-2xl bg-[#00416a] text-white p-4">
              <p className="text-xs uppercase tracking-widest text-sky-200 font-bold">Indicative total</p>
              <p className="text-2xl font-extrabold">{inr(r.withPen)}</p>
              <p className="text-sm text-sky-100 mt-1">Without penalty: {inr(r.noPen)}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl bg-sky-50 px-5 py-4 text-sm text-[#00416a]">
            <span className="flex-1 font-medium">We tell you the likely position before you decide to reply, pay or contest.</span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">Review my notice →</button>
          </div>
          <p className="mt-4 text-xs text-gray-400">A rough illustration only. Interest, penalty rates and any relief depend on the section, facts and current law.</p>
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
      <Heading label="Documents" title="Documents Required for GST Notice Reply" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          We need the notice itself, your returns and ledgers for the period, and the documents that support your position. Tick off what you have in each group.
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
      <Heading label="Pitfalls" title="GST Notice Mistakes That Cost Businesses Money" />
      <Reveal>
        <h3 className="font-extrabold text-[#00416a] text-xl mb-4">How we handle your notice</h3>
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
          Related: <Link href="/serviceslist/gst/gst-audit" className="font-semibold text-[#00416a] hover:underline">GST audit assistance</Link>, <Link href="/serviceslist/gst/gst-itc-reconciliation" className="font-semibold text-[#00416a] hover:underline">ITC reconciliation</Link>, <Link href="/serviceslist/gst/gst-return" className="font-semibold text-[#00416a] hover:underline">GST return filing</Link> and all <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link>.
        </p>
      </Reveal>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-40">
      <Heading label="Process" title="How Our GST Notice Reply & Compliance Works" />
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
              Our fee depends on the size of your stock and asset list, whether earlier returns are pending and how many registrations are involved. You receive a written quote before we start. Any tax, late fee or interest payable to the government is separate.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does it take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reply deadlines are fixed by the notice, so we start analysis the day you share it. The time to prepare depends on the data volume and the issue, and we confirm a plan once we have read the notice.</p>
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
      <Heading label="FAQs" title="GST Notice Reply & Compliance — Frequently Asked Questions" />
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
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gst-notice-reply").slice(0, 6);
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
        <div className="nr-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Face your GST notice with confidence</h3>
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
          <div className="nr-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Received a GST notice?</h3>
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