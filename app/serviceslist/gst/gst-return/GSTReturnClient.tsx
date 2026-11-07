"use client";

// app/serviceslist/gst/gst-return/GSTReturnClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GST Return Filing";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "returns", label: "Which Returns" },
  { id: "included", label: "What's Included" },
  { id: "penalty", label: "Late Fee Estimator" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "reconcile", label: "Reconciliation" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "Once you hold a GSTIN, filing GST returns becomes a recurring duty, not a one-time task. Every registered taxpayer must report sales, purchases, tax collected and input tax credit to the GST portal at regular intervals. The returns are small in number but unforgiving in detail: a wrong invoice, a missed due date or a mismatch with your supplier's data can mean late fees, interest, blocked credit or a notice from the department.",
  "For most regular taxpayers the core filings are GSTR-1, which lists your outward supplies invoice by invoice, and GSTR-3B, the summary return in which you declare liability, claim input tax credit and pay the tax. Composition taxpayers, e-commerce operators, TDS deductors and annual filers each have their own forms and dates. Even a business with no sales in a month still has to file a nil return.",
  "Taxvio's CA-assisted team takes this off your plate. We prepare and file GSTR-1 and GSTR-3B, reconcile your purchase invoices against the auto-drafted statement, calculate late fee and interest where a deadline was missed, and monitor your compliance calendar so nothing slips. You get a fixed quote before we begin and one point of contact for every period.",
];

const FEATURES = [
  { title: "GSTR-1, GSTR-3B filing", note: "We prepare and file your outward supplies return and your summary return, checking tax rates, HSN or SAC codes, place of supply and totals before submission." },
  { title: "Invoice reconciliation", note: "We match your purchase records against the auto-drafted input tax credit statement, so you claim only the credit that is available and spot supplier mismatches early." },
  { title: "Late fee & interest guidance", note: "If a due date was missed, we calculate the late fee and interest, explain how to regularise and help you avoid further accumulation." },
  { title: "Compliance monitoring", note: "We track due dates, portal status and pending returns for your registration, and remind you ahead of each deadline." },
];

const BENEFITS = [
  { icon: "⏰", t: "Never miss a due date", d: "A tracked calendar and early reminders keep every return on time, avoiding daily late fees and interest." },
  { icon: "💳", t: "Protect your input credit", d: "Reconciliation makes sure the credit you claim is supported, so it is not reversed or questioned later." },
  { icon: "🧮", t: "Accurate figures", d: "Rates, codes and totals are checked by a CA before filing, because a filed GSTR-3B generally cannot be revised." },
  { icon: "📬", t: "Fewer notices", d: "Clean, consistent returns reduce mismatches that trigger departmental notices and queries." },
  { icon: "🔔", t: "Early warning on issues", d: "Supplier non-filing, credit gaps and portal flags are raised with you before they become costly." },
  { icon: "🏦", t: "A clean GST record", d: "A regular filing history supports loans, tenders and big-customer onboarding, which often ask for it." },
];

const IDEAL = [
  { icon: "🏭", t: "Registered GST businesses", d: "Any business holding a GSTIN that needs dependable monthly or quarterly filing." },
  { icon: "🧰", t: "Traders & manufacturers", d: "High-invoice businesses where reconciliation and correct credit claims save real money." },
  { icon: "💼", t: "Service providers", d: "Consultants, agencies and freelancers who want returns handled so they can focus on clients." },
];

const RETURNS = [
  { form: "GSTR-1", what: "Outward supplies (sales) details", who: "Regular taxpayers", due: "Generally 11th of next month; quarterly filers file after the quarter" },
  { form: "GSTR-3B", what: "Summary return and tax payment", who: "Regular taxpayers", due: "Generally 20th of next month; quarterly (QRMP) dates differ by state" },
  { form: "CMP-08", what: "Quarterly tax payment statement", who: "Composition taxpayers", due: "Generally 18th after the quarter" },
  { form: "GSTR-4", what: "Annual return", who: "Composition taxpayers", due: "Generally 30 April after the financial year" },
  { form: "GSTR-9", what: "Annual return", who: "Regular taxpayers (subject to turnover rules)", due: "Generally 31 December after the financial year" },
  { form: "GSTR-9C", what: "Reconciliation statement", who: "Taxpayers above the prescribed turnover", due: "With the annual return, as notified" },
];

const DOC_SETS: Record<string, { label: string; docs: string[] }> = {
  sales: {
    label: "Sales",
    docs: [
      "GSTIN and portal login access",
      "All sales / tax invoices for the period",
      "Credit and debit notes issued",
      "Export or SEZ supply documents, if any",
      "E-commerce sales reports, if you sell on marketplaces",
    ],
  },
  purchases: {
    label: "Purchases",
    docs: [
      "Purchase invoices and bills with GST",
      "Credit and debit notes received",
      "Import documents (bill of entry), if any",
      "Expense bills on which you claim credit",
      "Your own purchase register / accounting export",
    ],
  },
  other: {
    label: "Payments & bank",
    docs: [
      "Bank statements for the period",
      "Previous period's GSTR-3B and challans",
      "Details of any pending notices or demands",
      "Opening credit balance, if you are switching to us",
      "Composition / QRMP option status, if applicable",
    ],
  },
};

const STEPS = [
  { t: "Onboarding & portal review", d: "We review your registration, filing frequency, opted scheme and any pending returns or notices, and agree the calendar with you." },
  { t: "Share your records", d: "Each period you send sales and purchase invoices, notes and bank statements, or exports from your accounting software." },
  { t: "Data check & reconciliation", d: "We check invoice data, rates and codes, and reconcile your purchases with the auto-drafted credit statement." },
  { t: "Prepare & share a summary", d: "You receive a short summary of sales, tax payable and credit available, so there are no surprises before filing." },
  { t: "File & pay", d: "After your confirmation we file GSTR-1 and GSTR-3B and guide you through the tax payment, with the challan shared for your records." },
  { t: "Acknowledgement & next due dates", d: "You get the filing acknowledgements and a note of the next deadlines and any action items." },
];

const RECON = [
  { t: "Match purchases to GSTR-2B", d: "Compare each purchase invoice with the auto-drafted statement to confirm the supplier has reported it." },
  { t: "Chase supplier mismatches", d: "Where a supplier has not filed, we flag it so you can follow up before the credit is at risk." },
  { t: "Check eligibility of credit", d: "Not every GST paid on purchases is claimable; we apply the rules and block credit that is ineligible." },
  { t: "Reconcile books with returns", d: "Totals in your books are matched with the returns filed, so annual filings later are clean." },
  { t: "Fix errors in the right period", d: "Where a correction is needed, we use the permitted amendment route within the time limits." },
];

const MISTAKES = [
  { t: "Filing nil when there were sales", d: "Skipping or under-reporting invoices can lead to demand notices, tax and interest." },
  { t: "Claiming credit not shown in GSTR-2B", d: "Credit without matching supplier data is a common reason for reversal and interest." },
  { t: "Wrong tax rate or HSN code", d: "Using the wrong rate understates or overstates tax and invites questions later." },
  { t: "Paying tax late but filing on time", d: "Interest runs on the unpaid tax from the due date even if the return was filed in time." },
  { t: "Ignoring portal notices", d: "Reminders and notices have reply windows; silence can escalate the matter." },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GSTReturnClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
          <Returns />
          <Included />
          <Who />
          <Penalty />
          <Documents />
          <Process />
          <Reconcile />
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
      @keyframes rt-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes rt-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .rt-aurora { animation: rt-aurora 14s ease-in-out infinite; }
      .rt-float { animation: rt-float 7s ease-in-out infinite; }
      .rt-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .rt-reveal.rt-in { opacity: 1; transform: none; }
      .rt-hide-scroll::-webkit-scrollbar { display: none; }
      .rt-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .rt-aurora, .rt-float { animation: none !important; }
        .rt-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`rt-reveal ${shown ? "rt-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Cadence", v: "Monthly / quarterly" },
    { k: "Forms", v: "GSTR-1 · GSTR-3B" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="rt-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="rt-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">GST Return Filing</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            📑 GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST Return Filing{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Accurate, On Time, CA-Reviewed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Monthly and quarterly GST return filing with invoice reconciliation, late fee guidance and compliance monitoring —
            so you never miss a deadline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#penalty" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Estimate Late Fee
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
          <div className="rt-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your monthly GST cycle</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample status view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Records received", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Reconciled with GSTR-2B", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "GSTR-1 filed", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "GSTR-3B & tax paid", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Acknowledgements shared", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto rt-hide-scroll">
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
      <Heading label="Overview" title="What Is GST Return Filing?" />
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
      <Heading label="Benefits" title="Why Professional GST Return Filing Pays Off" />
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

function Returns() {
  const [sel, setSel] = useState<number | null>(null);
  return (
    <section id="returns" className="scroll-mt-40">
      <Heading label="Which Returns" title="GST Returns You May Need to File" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          The returns you file depend on your registration type and filing option. Regular taxpayers file GSTR-1 and GSTR-3B,
          composition taxpayers file CMP-08 and an annual return, and most registrants also file an annual return. Tap a form
          for its purpose. Due dates below are the general ones; the government extends or changes them by notification, so our
          team confirms the current dates for your registration.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {RETURNS.map((r, i) => {
            const on = sel === i;
            return (
              <button
                key={r.form}
                onClick={() => setSel(on ? null : i)}
                aria-expanded={on}
                className={`text-left rounded-2xl border p-4 transition-all duration-300 ${on ? "bg-[#00416a] text-white border-[#00416a] shadow-xl shadow-[#00416a]/20" : "bg-white border-gray-200 hover:border-[#00416a]/40 hover:shadow-lg"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-extrabold">{r.form}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${on ? "bg-white/15 text-white" : "bg-sky-50 text-[#00416a]"}`}>{r.who}</span>
                </div>
                <p className={`text-sm mt-1 ${on ? "text-sky-100" : "text-gray-600"}`}>{r.what}</p>
                <div className={`grid transition-all duration-300 ${on ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-xs uppercase tracking-widest text-sky-200/80 font-bold">Due</p>
                    <p className="text-sm">{r.due}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

function Included() {
  return (
    <section id="included" className="scroll-mt-40">
      <Heading label="What's Included" title="What You Get With GST Return Filing" />
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
      <Heading label="Who It's For" title="Who We File GST Returns For" />
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

/** Indicative late fee + interest estimator */
function Penalty() {
  const [days, setDays] = useState(30);
  const [nil, setNil] = useState(false);
  const [tax, setTax] = useState(50000);

  const { fee, interest } = useMemo(() => {
    const d = Math.max(0, days);
    const perDay = nil ? 20 : 50; // combined CGST+SGST, indicative
    const fee = d * perDay;
    const interest = nil ? 0 : Math.round(Math.max(0, tax) * 0.18 * (d / 365));
    return { fee, interest };
  }, [days, nil, tax]);

  const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

  return (
    <section id="penalty" className="scroll-mt-40">
      <Heading label="Late Fee Estimator" title="What Does a Missed GST Return Cost?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Delay is expensive in GST. A late fee runs every day after the due date, and interest is charged on any tax paid late.
          Use this indicator to see how fast it adds up. It is a rough estimate for a GSTR-3B before any caps or relief
          notifications; the exact amount depends on the return, turnover and current rules, which our CA will confirm.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Days late: <b className="text-[#00416a]">{days}</b></span>
              <input type="range" min={0} max={180} value={days} onChange={(e) => setDays(+e.target.value)} className="w-full mt-2 accent-[#00416a]" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Tax paid late (₹)</span>
              <input
                type="number"
                min={0}
                value={tax}
                disabled={nil}
                onChange={(e) => setTax(+e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a] disabled:bg-gray-100"
              />
            </label>
          </div>
          <div className="flex gap-2 mb-5">
            {[{ v: false, l: "Return with tax" }, { v: true, l: "Nil return" }].map((o) => (
              <button
                key={o.l}
                onClick={() => setNil(o.v)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${nil === o.v ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}
              >
                {o.l}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
              <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">Late fee</p>
              <p className="text-2xl font-extrabold text-amber-900">{inr(fee)}</p>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
              <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">Interest</p>
              <p className="text-2xl font-extrabold text-amber-900">{inr(interest)}</p>
            </div>
            <div className="rounded-2xl bg-[#00416a] text-white p-4">
              <p className="text-xs uppercase tracking-widest text-sky-200 font-bold">Indicative total</p>
              <p className="text-2xl font-extrabold">{inr(fee + interest)}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl bg-sky-50 px-5 py-4 text-sm text-[#00416a]">
            <span className="flex-1 font-medium">Already behind? We prepare the backlog and tell you the exact total before we start.</span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">Regularise now →</button>
          </div>
          <p className="mt-4 text-xs text-gray-400">Indicative only: assumes ₹50/day (₹20/day for nil) and 18% annual interest, with no caps. Rates and caps change by notification.</p>
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
      <Heading label="Documents" title="Documents Required for GST Return Filing" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          We need your GSTIN along with your sales and purchase invoices and bank statements for each period. If you use
          accounting software, an export is enough. Tick off what you have in each group.
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
      <Heading label="Process" title="How Our GST Return Filing Works" />
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
              Our fee depends on your filing frequency, the number of invoices and whether you need reconciliation or backlog work.
              You receive a written quote before we start, with no add-ons introduced later. Late fees and interest, where
              applicable, are payable to the government and are shown separately.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">🔁</p>
            <h3 className="font-bold text-[#00416a] mb-2">Monthly or quarterly?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Eligible taxpayers can opt for the quarterly return scheme with monthly payment of tax. It reduces the number
              of filings but does not remove the duty to pay tax each month. We advise which option fits your business.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Reconcile() {
  return (
    <section id="reconcile" className="scroll-mt-40">
      <Heading label="Reconciliation" title="Reconciliation, Credit Checks & Common Mistakes" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Most GST problems come from mismatches, not from the return itself. Reconciling your records with the auto-drafted
          credit statement before filing is the single most effective way to protect your input tax credit and avoid
          notices. This is what our team checks every period.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {RECON.map((c, i) => (
          <Reveal key={c.t} delay={i * 60}>
            <div className="h-full bg-white border border-gray-200 border-l-4 border-l-[#00416a] rounded-2xl p-5 hover:shadow-lg transition-all">
              <span className="inline-block text-[11px] font-bold text-[#00416a] uppercase tracking-wide bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full mb-2">Step {i + 1}</span>
              <h3 className="font-bold text-[#00416a] mb-1.5">{c.t}</h3>
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
          Need to register first? See <Link href="/serviceslist/gst/gst-registration" className="font-semibold text-[#00416a] hover:underline">GST registration</Link> or browse all <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link>.
        </p>
      </Reveal>
    </section>
  );
}

function FAQs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="scroll-mt-40">
      <Heading label="FAQs" title="GST Return Filing — Frequently Asked Questions" />
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
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gst-return").slice(0, 6);
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
        <div className="rt-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">File on time, every time</h3>
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
          <div className="rt-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to put your GST returns on autopilot?</h3>
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