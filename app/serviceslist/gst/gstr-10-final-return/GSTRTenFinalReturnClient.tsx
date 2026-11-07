"use client";

// app/serviceslist/gst/gstr-10-final-return/GSTRTenFinalReturnClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GSTR-10 Final Return Filing";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "planner", label: "Who Must File" },
  { id: "included", label: "What's Included" },
  { id: "deadline", label: "Due Date" },
  { id: "gap", label: "ITC Reversal" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "mistakes", label: "Pitfalls" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "Cancelling a GST registration is not the end of your GST obligations. When a business shuts down, merges, changes its constitution or simply stops needing registration, the registration can be cancelled on the taxpayer's request or by the department. But the law still expects a last statement from you. This is the GSTR-10, the final return, and it closes the books on your GST account.",
  "GSTR-10 reports the stock and capital goods you held on the date of cancellation, the input tax credit that must be reversed on them, and any tax still payable. The idea is simple: credit was allowed on the assumption that you would use the goods in a taxable business. Once registration ends, credit on closing stock and capital goods generally has to be paid back. The calculation is where most mistakes happen, because the rules for stock and for capital goods are different and need valuation and dates.",
  "Taxvio's CA-assisted team prepares and files your GSTR-10 from start to finish. We value your closing stock, compute the ITC reversal on inputs, finished goods and capital goods, reconcile outstanding liabilities, prepare and file the return, and give you the acknowledgement. We also check that all earlier returns are filed so that nothing is left hanging after cancellation. You receive a written quote before we begin.",
];

const FEATURES = [
  { title: "Closing stock valuation", note: "We list the inputs, semi-finished and finished goods and capital goods held on the cancellation date, and value them in line with your invoices and records." },
  { title: "ITC reversal computation", note: "We compute the credit to be reversed on stock and capital goods, using the prescribed method, and tell you the amount payable before we file." },
  { title: "GSTR-10 preparation & filing", note: "We prepare the return with the cancellation details, stock and liability statements and file it on the GST portal with the required verification." },
  { title: "Acknowledgement support", note: "We obtain and share the acknowledgement, confirm that the liability is paid and advise on closing compliance such as pending returns and record retention." },
];

const BENEFITS = [
  { icon: "🔒", t: "Close your GST account properly", d: "A filed GSTR-10 ends your return obligations and avoids open items after cancellation." },
  { icon: "⚖️", t: "Avoid late fees and notices", d: "Filing within the time limit avoids late fees, and a correct return avoids later demands." },
  { icon: "🧮", t: "Correct ITC reversal", d: "Stock and capital goods are treated differently; getting the formula right avoids over- or under-payment." },
  { icon: "📋", t: "Pending returns cleared", d: "We check that all earlier returns are filed, since they must be complete before the final return." },
  { icon: "🛡️", t: "Protection from later scrutiny", d: "A documented final position gives you a clear answer if the department asks questions later." },
  { icon: "😌", t: "A clean exit", d: "You close the business, or the registration, with the paperwork done." },
];

const IDEAL = [
  { icon: "🚪", t: "Cancelled registrations", d: "Businesses whose GST registration has been cancelled at their request or by the department." },
  { icon: "🏪", t: "Closed proprietorships & firms", d: "Owners who have closed or merged a business and need to complete GST formalities." },
  { icon: "🔄", t: "Restructured businesses", d: "Entities that changed their constitution and surrendered the earlier registration." },
];

type Case = { id: string; label: string; icon: string; t: string; d: string };

const CASES: Case[] = [
  { id: "regular", label: "Regular taxpayer — registration cancelled", icon: "🧾", t: "GSTR-10 is generally required", d: "A regular taxpayer whose registration is cancelled must furnish a final return, reporting stock and capital goods and any ITC reversal or tax payable." },
  { id: "suomotu", label: "Registration cancelled by the officer (not by me)", icon: "🏛️", t: "Still generally required", d: "Even where the department cancels the registration, the final return is generally required. If cancellation was wrongly done, revocation may also be possible." },
  { id: "composition", label: "Composition taxpayer", icon: "📉", t: "Check with a CA", d: "Composition taxpayers also file a final return in many cases, but the treatment of credit is different since they do not claim ITC. Our CA confirms your position." },
  { id: "tds", label: "TDS / TCS deductor, ISD or non-resident taxpayer", icon: "🌐", t: "Generally not required", d: "Persons in categories such as tax deductors, collectors, input service distributors and non-resident taxable persons are generally exempt from filing GSTR-10. Confirm your case." },
  { id: "none", label: "I just stopped trading but did not cancel", icon: "⏸️", t: "Cancel first", d: "GSTR-10 follows cancellation. Until the registration is cancelled, regular returns, including nil returns, must still be filed. Apply for cancellation first." },
];

const DOC_SETS: Record<string, { label: string; docs: string[] }> = {
  cancel: {
    label: "Cancellation",
    docs: [
      "GSTIN and portal login access",
      "Cancellation order (REG-19) with date",
      "Application for cancellation (REG-16), if filed by you",
      "Proof of closure or change of constitution, if any",
      "Authorised signatory details",
    ],
  },
  stock: {
    label: "Stock & assets",
    docs: [
      "Closing stock details as on the cancellation date",
      "Purchase invoices of stock held",
      "Capital goods list with invoice dates and values",
      "Details of goods disposed of before cancellation",
      "Valuation basis or market value support",
    ],
  },
  books: {
    label: "Books & returns",
    docs: [
      "Books of accounts up to the cancellation date",
      "All filed returns (GSTR-1, GSTR-3B) up to cancellation",
      "ITC ledger and cash ledger statements",
      "Details of pending liabilities or notices",
      "Annual return of the last year, if applicable",
    ],
  },
};

const CYCLE = [
  { t: "Confirm cancellation date", d: "We check the order date and the effective date, which drive both the due date and the stock position." },
  { t: "Clear pending returns", d: "All regular returns up to the cancellation date must be filed before the final return." },
  { t: "Value stock & capital goods", d: "We prepare the stock statement and capital goods list with invoice dates and ITC taken." },
  { t: "Compute the reversal", d: "We calculate the credit to be reversed and the tax payable, and share it with you for approval." },
  { t: "File GSTR-10 & pay", d: "We file, pay the liability and share the acknowledgement." },
];

const STEPS = [
  { t: "Review your cancellation", d: "We confirm the cancellation order, its date and the due date for the final return." },
  { t: "Collect documents", d: "You share the documents on this page. We pull portal data to cross-check your returns and ledgers." },
  { t: "Prepare stock and asset statement", d: "We prepare the closing stock and capital goods statement with ITC details." },
  { t: "Compute ITC reversal & liability", d: "We calculate the amount payable and explain how we arrived at it." },
  { t: "File GSTR-10", d: "After your approval, we file the return with the required verification and pay the liability." },
  { t: "Acknowledge & close out", d: "You receive the acknowledgement and a checklist for record retention and any remaining compliances." },
];

const MISTAKES = [
  { t: "Missing the three-month limit", d: "The final return has a time limit from the cancellation. Late filing attracts a late fee for every day of delay." },
  { t: "Leaving earlier returns pending", d: "Unfiled regular returns up to the cancellation date can block or complicate the final return." },
  { t: "Ignoring capital goods", d: "Credit on machinery, computers and equipment must be considered, with the prescribed reduction for age." },
  { t: "Under-valuing stock", d: "Stock should be valued reasonably against invoices and market value; shortcuts can lead to a demand." },
  { t: "Assuming cancellation ended everything", d: "Liabilities and notices for the period before cancellation can continue after it is cancelled." },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GSTRTenFinalReturnClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
      @keyframes ft-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes ft-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .ft-aurora { animation: ft-aurora 14s ease-in-out infinite; }
      .ft-float { animation: ft-float 7s ease-in-out infinite; }
      .ft-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .ft-reveal.ft-in { opacity: 1; transform: none; }
      .ft-hide-scroll::-webkit-scrollbar { display: none; }
      .ft-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .ft-aurora, .ft-float { animation: none !important; }
        .ft-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`ft-reveal ${shown ? "ft-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Form", v: "GSTR-10" },
    { k: "Filed", v: "After cancellation" },
    { k: "Filed", v: "After cancellation" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="ft-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="ft-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">GSTR-10 Final Return Filing</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            🔒 GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GSTR-10 Final Return Filing{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Accurate, On Time, CA-Reviewed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            File the mandatory final return after GST cancellation, with closing stock valuation and ITC reversal worked out correctly by a CA-led team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#planner" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Who Must File
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
          <div className="ft-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your final return, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample status view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Cancellation confirmed", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Stock valued", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "ITC reversal computed", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Acknowledgement", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto ft-hide-scroll">
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
      <Heading label="Overview" title="What Is GSTR-10 Final Return Filing?" />
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
      <Heading label="Benefits" title="Why Professional GSTR-10 Final Return Filing Pays Off" />
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
      <Heading label="What's Included" title="What You Get With GSTR-10 Final Return Filing" />
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

/** Who must file */
function Planner() {
  const [sel, setSel] = useState<string | null>(null);
  const cur = CASES.find((c) => c.id === sel);
  return (
    <section id="planner" className="scroll-mt-40">
      <Heading label="Who Must File" title="Do You Need to File GSTR-10?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          GSTR-10 is required after a registration is cancelled, but not everyone files it. Pick the option closest to your
          situation for an indication.
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
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">Confirm with a CA →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. Requirements depend on your registration type and current rules; our CA confirms your case.</p>
        </div>
      </Reveal>
    </section>
  );
}

/** Due date tracker */
function Deadline() {
  const [cancelDate, setCancelDate] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setToday(d);
  }, []);

  const info = useMemo(() => {
    if (!today) return null;
    const dates = [cancelDate, orderDate]
      .filter(Boolean)
      .map((s) => new Date(s + "T00:00:00"))
      .filter((d) => !isNaN(d.getTime()));
    if (!dates.length) return null;
    const base = new Date(Math.max(...dates.map((d) => d.getTime())));
    const due = new Date(base);
    due.setMonth(due.getMonth() + 3);
    const diff = Math.round((due.getTime() - today.getTime()) / 86400000);
    return { due, diff };
  }, [cancelDate, orderDate, today]);

  const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  return (
    <section id="deadline" className="scroll-mt-40">
      <Heading label="Due Date" title="When Is Your GSTR-10 Due?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          The final return is generally due within three months of the date of cancellation or the date of the cancellation
          order, whichever is later. Enter both dates to see an indicative due date.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Effective date of cancellation</span>
              <input type="date" value={cancelDate} onChange={(e) => setCancelDate(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Date of cancellation order</span>
              <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
            </label>
          </div>
          {info && (
            <div className={`mt-5 rounded-2xl border p-5 ${info.diff < 0 ? "bg-red-50 border-red-200" : info.diff <= 15 ? "bg-amber-50 border-amber-200" : "bg-emerald-50 border-emerald-200"}`}>
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">Indicative due date</p>
              <p className="text-xl font-extrabold text-[#00416a]">{fmt(info.due)}</p>
              <p className="text-sm text-gray-700 mt-1">
                {info.diff < 0 ? `This date passed ${Math.abs(info.diff)} day${Math.abs(info.diff) === 1 ? "" : "s"} ago. A late fee may apply; file as soon as possible.` : info.diff === 0 ? "Due today." : `${info.diff} day${info.diff === 1 ? "" : "s"} left.`}
              </p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">File my GSTR-10 →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. The due date and late fee follow current law and any notified extensions; our CA confirms yours.</p>
        </div>
      </Reveal>
    </section>
  );
}

/** ITC reversal on closing stock and capital goods */
function Gap() {
  const [stockItc, setStockItc] = useState(80000);
  const [capItc, setCapItc] = useState(120000);
  const [quarters, setQuarters] = useState(6);
  const [capMarketTax, setCapMarketTax] = useState(60000);
  const [stockMarketTax, setStockMarketTax] = useState(70000);

  const r = useMemo(() => {
    const s = Math.max(0, stockItc), c = Math.max(0, capItc), q = Math.max(0, Math.ceil(quarters));
    const capReduced = Math.max(0, Math.round(c * (1 - 0.05 * q)));
    const stockRev = Math.max(s, Math.max(0, stockMarketTax));
    const capRev = Math.max(capReduced, Math.max(0, capMarketTax));
    return { capReduced, stockRev, capRev, total: stockRev + capRev };
  }, [stockItc, capItc, quarters, capMarketTax, stockMarketTax]);

  const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
  const Field = ({ label, v, set }: { label: string; v: number; set: (n: number) => void }) => (
    <label className="block">
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      <input type="number" min={0} value={v} onChange={(e) => set(+e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
    </label>
  );

  return (
    <section id="gap" className="scroll-mt-40">
      <Heading label="ITC Reversal" title="Estimate the ITC You May Have to Reverse" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          On cancellation, credit on inputs, finished goods and capital goods held is generally reversed. For stock, the
          higher of the credit taken and the tax on the market value is typically payable. For capital goods, the credit is
          reduced by a fixed percentage for each quarter of use, and the higher of that and the tax on market value is
          typically payable. This shows how the two interact.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <Field label="ITC taken on stock held (₹)" v={stockItc} set={setStockItc} />
            <Field label="Tax on market value of stock (₹)" v={stockMarketTax} set={setStockMarketTax} />
            <Field label="ITC taken on capital goods (₹)" v={capItc} set={setCapItc} />
            <Field label="Quarters since capital goods invoice" v={quarters} set={setQuarters} />
            <Field label="Tax on market value of capital goods (₹)" v={capMarketTax} set={setCapMarketTax} />
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-sky-50 border border-sky-100 p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/70">Stock reversal</p>
              <p className="text-2xl font-extrabold text-[#00416a]">{inr(r.stockRev)}</p>
            </div>
            <div className="rounded-2xl bg-sky-50 border border-sky-100 p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/70">Capital goods reversal</p>
              <p className="text-2xl font-extrabold text-[#00416a]">{inr(r.capRev)}</p>
              <p className="text-sm text-gray-600 mt-1">After age reduction: {inr(r.capReduced)}</p>
            </div>
            <div className="rounded-2xl bg-[#00416a] text-white p-4">
              <p className="text-xs uppercase tracking-widest text-sky-200 font-bold">Indicative total</p>
              <p className="text-2xl font-extrabold">{inr(r.total)}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl bg-sky-50 px-5 py-4 text-sm text-[#00416a]">
            <span className="flex-1 font-medium">We compute this item by item from your invoices and tell you the exact figure before filing.</span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">Get my exact figure →</button>
          </div>
          <p className="mt-4 text-xs text-gray-400">Simplified illustration only (assumes a 5% reduction per quarter or part). The actual method, rates and valuation follow the law and your facts.</p>
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
      <Heading label="Documents" title="Documents Required for GSTR-10" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          We need your cancellation details, closing stock and capital goods records, and your books and returns up to the cancellation date. Tick off what you have.
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
      <Heading label="Pitfalls" title="GSTR-10 Mistakes That Cost Businesses Money" />
      <Reveal>
        <h3 className="font-extrabold text-[#00416a] text-xl mb-4">How your final return comes together</h3>
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
          Related: <Link href="/serviceslist/gst/gst-registration" className="font-semibold text-[#00416a] hover:underline">GST registration</Link>, <Link href="/serviceslist/gst/gst-return" className="font-semibold text-[#00416a] hover:underline">GST return filing</Link> and all <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link>.
        </p>
      </Reveal>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-40">
      <Heading label="Process" title="How Our GSTR-10 Final Return Filing Works" />
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
              Once your documents and stock details are ready, the return can usually be prepared quickly. Pending returns or a missed due date can add time, so start early. We confirm a plan before we begin.
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
      <Heading label="FAQs" title="GSTR-10 Final Return Filing — Frequently Asked Questions" />
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
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gstr-10-final-return").slice(0, 6);
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
        <div className="ft-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Close your GST account properly</h3>
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
          <div className="ft-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to file your final GST return?</h3>
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