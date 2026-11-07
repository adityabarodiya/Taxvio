"use client";

// app/serviceslist/gst/gst-for-freelancer/GstForFreelancerClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GST for Freelancers & Independent Professionals";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "planner", label: "Your Clients" },
  { id: "included", label: "What's Included" },
  { id: "gap", label: "GST Calculator" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "mistakes", label: "Pitfalls" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "Freelancing has changed how professionals earn. A developer in a small town can bill a client in another country, a designer can work with agencies in three cities, and a consultant can run a practice from a laptop. But GST does not care how modern the work is. Once your income crosses the registration threshold, or the way you earn requires registration, you must register, issue proper tax invoices, file returns and keep records like any other business.",
  "The freelancer's situation is different from a trader's in three ways. First, services are taxed under a specific code, called the SAC, and the tax rate depends on what you do. Second, billing foreign clients is generally treated as an export of services, which is zero-rated. That means you can serve overseas clients without charging GST, provided you file a Letter of Undertaking (LUT) and meet the conditions for an export. Third, many of your business tools, such as a laptop, software subscriptions and a co-working seat, carry GST that you may be able to claim back as input tax credit, while some foreign subscriptions bring reverse charge into play.",
  "Taxvio's CA-assisted team sets all of this up for you end to end. We register you for GST, identify the right SAC code, prepare compliant invoice formats for Indian and foreign clients, file your LUT for zero-rated billing, handle your monthly or quarterly returns, check ITC on the tools you buy and review reverse charge on foreign subscriptions. If a notice or a mismatch arrives, we help you respond. You receive a written quote before we begin.",
];

const FEATURES = [
  { title: "GST registration for freelancers", note: "We assess whether you need to register now, prepare your documents and file the application, with address proof arrangements that work for home-based freelancers." },
  { title: "LUT filing (Form RFD-11) for foreign clients", note: "We file the Letter of Undertaking so that you can bill overseas clients without paying IGST, and remind you to renew it each financial year." },
  { title: "Zero-rated export invoice setup", note: "We prepare invoice templates for foreign clients with the correct details, LUT reference and wording, so your invoices stand up to bank and department scrutiny." },
  { title: "SAC code identification & invoice format", note: "We identify the right service code and tax rate for your work and set up invoices that carry all the details the law requires." },
  { title: "Monthly GSTR-1 & GSTR-3B filing", note: "We file your returns on time, including nil returns, with correct treatment of export and domestic invoices." },
  { title: "ITC on laptop, software & business tools", note: "We review the GST on your business purchases and help you claim input tax credit where it is available and your records support it." },
  { title: "QRMP scheme advisory", note: "We advise whether quarterly filing with monthly payment suits you, which can reduce the number of filings for smaller freelancers." },
  { title: "RCM review for foreign subscriptions", note: "We check whether reverse charge applies to services you buy from foreign providers and how to account for it correctly." },
  { title: "GST notice & mismatch support", note: "If you get a notice on export proceeds, mismatches or credit, we reconcile and prepare a reasoned reply." },
];

const BENEFITS = [
  { icon: "🌍", t: "Bill foreign clients cleanly", d: "A valid LUT and a correct export invoice let you invoice overseas clients without charging GST." },
  { icon: "🧾", t: "Look professional", d: "A GSTIN and proper tax invoices help you win larger Indian clients who need input credit." },
  { icon: "💳", t: "Claim credit on tools", d: "GST paid on a laptop, software and workspace can often be set off against your tax or refunded." },
  { icon: "⏰", t: "Never miss a due date", d: "A fixed calendar keeps your returns on time, even when there was no income that month." },
  { icon: "🔄", t: "Refund of unused credit", d: "Exporters can claim a refund of accumulated input tax credit, subject to the rules." },
  { icon: "😌", t: "Stay compliant, stay focused", d: "We handle the paperwork so you can concentrate on clients and delivery." },
];

const IDEAL = [
  { icon: "💻", t: "Tech & creative freelancers", d: "Developers, designers, UI/UX professionals, writers and marketers." },
  { icon: "💼", t: "Independent professionals", d: "Consultants, chartered accountants, lawyers and other practising professionals." },
  { icon: "🌐", t: "Freelancers billing abroad", d: "Anyone paid by overseas clients directly or through platforms." },
];

type Case = { id: string; label: string; icon: string; t: string; d: string };

const CASES: Case[] = [
  { id: "indbiz", label: "Indian businesses (companies, firms)", icon: "🏢", t: "Domestic business clients", d: "Once registered, you charge GST at the rate for your service on tax invoices. Business clients usually claim it as credit, so many prefer GST-registered freelancers." },
  { id: "indind", label: "Indian individuals / small clients", icon: "🧑", t: "Domestic individual clients", d: "GST applies on your invoice at the applicable rate once you are registered. Below the registration threshold, you may not need to charge it." },
  { id: "foreign", label: "Foreign clients, paid in foreign currency", icon: "🌍", t: "Export of services", d: "Services to a client outside India, with payment in convertible foreign exchange and other conditions met, are generally zero-rated. File an LUT to invoice without IGST." },
  { id: "platform", label: "Upwork / Fiverr / Toptal-style platforms", icon: "🛰️", t: "Platform billing", d: "Treatment depends on who the actual recipient is and how the platform invoices. We check the facts and set up the right invoice flow." },
  { id: "mixed", label: "A mix of Indian and foreign clients", icon: "🔀", t: "Mixed billing", d: "You issue GST invoices to Indian clients and zero-rated export invoices to foreign clients, and report both correctly in GSTR-1 and GSTR-3B." },
];

const DOC_SETS: Record<string, { label: string; docs: string[] }> = {
  reg: {
    label: "For registration",
    docs: [
      "PAN card",
      "Aadhaar card (mobile-linked)",
      "Photograph of proprietor",
      "Business address proof (home address is acceptable with proof)",
      "Bank account details",
    ],
  },
  export: {
    label: "LUT & foreign billing",
    docs: [
      "GSTIN and portal access",
      "Previous LUT acknowledgement (if renewal)",
      "Agreements or work orders with foreign clients",
      "FIRC / FIRA for past export invoices (if any)",
      "Sample invoices issued to foreign clients",
    ],
  },
  monthly: {
    label: "Monthly compliance",
    docs: [
      "Invoices issued in the month (domestic and export)",
      "Bank statement showing receipts",
      "Purchase bills for laptop, software and tools",
      "Details of foreign subscriptions paid",
      "Previous GSTR-1 and GSTR-3B, if registered",
    ],
  },
};

const CYCLE = [
  { t: "Share invoices & receipts", d: "You send the month's invoices, bank receipts and business purchase bills." },
  { t: "Classify income", d: "We separate domestic taxable invoices from zero-rated exports and check the SAC and rate." },
  { t: "Check credit & RCM", d: "We review GST on your purchases and any reverse charge on foreign subscriptions." },
  { t: "File GSTR-1 & GSTR-3B", d: "After your approval we file on time, including nil returns, or under the quarterly option." },
  { t: "Report & remind", d: "You get a short summary, the tax payable, and reminders including LUT renewal." },
];

const STEPS = [
  { t: "Free consultation", d: "We learn what you do, who your clients are and how you are paid, and confirm whether you need to register and how." },
  { t: "Documents & registration", d: "You share the documents on this page. We file your GST registration and track it to the GSTIN." },
  { t: "SAC code & invoice setup", d: "We identify the right service code and set up invoice templates for Indian and foreign clients." },
  { t: "LUT filing", d: "We file your LUT before your first zero-rated invoice of the financial year and share the acknowledgement." },
  { t: "Monthly or quarterly returns", d: "We file your returns on the agreed schedule and review credit and reverse charge." },
  { t: "Ongoing advice", d: "We guide you as your income grows, including threshold changes, refunds and notice support." },
];

const MISTAKES = [
  { t: "Billing foreign clients before filing the LUT", d: "An export invoice without a valid LUT can mean IGST liability with interest; file before you invoice." },
  { t: "Not registering when you should", d: "Crossing the threshold or meeting a registration trigger without registering can lead to tax, interest and penalty." },
  { t: "Wrong SAC code or tax rate", d: "Using the wrong code can mean under- or over-charging GST and later notices." },
  { t: "Missing export conditions", d: "For zero-rating, conditions such as the recipient's location and receipt of payment in foreign exchange matter." },
  { t: "Ignoring reverse charge on foreign tools", d: "Paying for foreign services without checking reverse charge can lead to unreported liability." },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GstForFreelancerClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
      @keyframes fl-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes fl-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .fl-aurora { animation: fl-aurora 14s ease-in-out infinite; }
      .fl-float { animation: fl-float 7s ease-in-out infinite; }
      .fl-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubfl-bezier(.22,1,.36,1), transform .7s cubfl-bezier(.22,1,.36,1); }
      .fl-reveal.fl-in { opacity: 1; transform: none; }
      .fl-hide-scroll::-webkit-scrollbar { display: none; }
      .fl-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .fl-aurora, .fl-float { animation: none !important; }
        .fl-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`fl-reveal ${shown ? "fl-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Covers", v: "Registration · LUT · Returns" },
    { k: "Clients", v: "India & abroad" },
    { k: "Clients", v: "India & abroad" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="fl-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="fl-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">GST for Freelancers & Independent Professionals</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            💻 GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST for Freelancers & Independent Professionals{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Accurate, On Time, CA-Reviewed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            End-to-end GST setup for developers, designers, consultants and content creators — registration, LUT for foreign client billing, SAC mapping, returns, ITC and RCM compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#planner" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Your Clients
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
          <div className="fl-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your freelancer GST, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample status view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "GSTIN registered", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "LUT filed", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Invoices set up", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Acknowledgement", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Next due dates shared", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto fl-hide-scroll">
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
      <Heading label="Overview" title="What Is GST for Freelancers & Independent Professionals?" />
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
      <Heading label="Benefits" title="Why Professional GST for Freelancers & Independent Professionals Pays Off" />
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
      <Heading label="What's Included" title="What You Get With GST for Freelancers & Independent Professionals" />
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

/** Who are your clients */
function Planner() {
  const [sel, setSel] = useState<string | null>(null);
  const cur = CASES.find((c) => c.id === sel);
  return (
    <section id="planner" className="scroll-mt-40">
      <Heading label="Your Clients" title="How Does GST Apply to Your Freelance Work?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          The GST treatment of your income depends on who pays you. Pick your main type of client to see what usually
          applies and how we would set up your invoicing.
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
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">What usually applies</p>
              <p className="font-extrabold text-[#00416a] text-lg">{cur.t}</p>
              <p className="text-sm text-gray-700 mt-1">{cur.d}</p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">Get a plan for my work →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. Treatment depends on the facts, conditions and current rules; our CA confirms your case.</p>
        </div>
      </Reveal>
    </section>
  );
}

/** Freelancer GST position calculator */
function Gap() {
  const [dom, setDom] = useState(300000);
  const [exp, setExp] = useState(500000);
  const [rate, setRate] = useState(18);
  const [itc, setItc] = useState(25000);

  const r = useMemo(() => {
    const d = Math.max(0, dom), e = Math.max(0, exp), i = Math.max(0, itc), p = Math.max(0, rate) / 100;
    const out = Math.round(d * p);
    const wouldHave = Math.round(e * p);
    const net = out - i;
    return { out, wouldHave, net };
  }, [dom, exp, rate, itc]);

  const inr = (n: number) => (n < 0 ? "-₹" : "₹") + Math.abs(n).toLocaleString("en-IN");
  const Field = ({ label, v, set, step }: { label: string; v: number; set: (n: number) => void; step?: number }) => (
    <label className="block">
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      <input type="number" min={0} step={step ?? 1} value={v} onChange={(e) => set(+e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
    </label>
  );

  return (
    <section id="gap" className="scroll-mt-40">
      <Heading label="GST Calculator" title="What Would Your GST Position Look Like?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Enter a typical month or quarter of billing. Domestic invoices carry GST; exports under an LUT are zero-rated; and GST
          paid on your business tools can reduce what you pay. This is a rough illustration of how the pieces interact.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <Field label="Billing to Indian clients (₹)" v={dom} set={setDom} />
            <Field label="Billing to foreign clients under LUT (₹)" v={exp} set={setExp} />
            <Field label="GST rate on your service (%)" v={rate} set={setRate} step={0.5} />
            <Field label="GST paid on laptop, software, tools (₹)" v={itc} set={setItc} />
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-sky-50 border border-sky-100 p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/70">GST on Indian invoices</p>
              <p className="text-2xl font-extrabold text-[#00416a]">{inr(r.out)}</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-700">IGST avoided on exports</p>
              <p className="text-2xl font-extrabold text-emerald-900">{inr(r.wouldHave)}</p>
              <p className="text-sm text-gray-600 mt-1">Zero-rated with a valid LUT.</p>
            </div>
            <div className={`rounded-2xl border p-4 ${r.net > 0 ? "bg-[#00416a] text-white border-[#00416a]" : "bg-amber-50 border-amber-200"}`}>
              <p className={`text-xs uppercase tracking-widest font-bold ${r.net > 0 ? "text-sky-200" : "text-amber-700"}`}>{r.net >= 0 ? "Indicative net payable" : "Credit left over"}</p>
              <p className={`text-2xl font-extrabold ${r.net > 0 ? "" : "text-amber-900"}`}>{inr(Math.abs(r.net))}</p>
              <p className={`text-sm mt-1 ${r.net > 0 ? "text-sky-100" : "text-gray-600"}`}>{r.net >= 0 ? "After setting off credit." : "May carry forward or be claimed as a refund, subject to rules."}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl bg-sky-50 px-5 py-4 text-sm text-[#00416a]">
            <span className="flex-1 font-medium">We map your SAC code, rate and credit eligibility so your actual numbers are right.</span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">Check my numbers →</button>
          </div>
          <p className="mt-4 text-xs text-gray-400">A simplified illustration, not a computation. Eligibility of credit, rates and conditions for zero-rating depend on your facts and current rules.</p>
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
      <Heading label="Documents" title="Documents Required for Freelancer GST" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Registration needs your identity, address and bank details. Foreign billing needs LUT and client details. Monthly compliance needs your invoices and receipts. Tick off what you have.
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
      <Heading label="Pitfalls" title="Freelancer GST Mistakes That Cost Money" />
      <Reveal>
        <h3 className="font-extrabold text-[#00416a] text-xl mb-4">Your monthly freelancer GST cycle</h3>
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
          Related: <Link href="/serviceslist/gst/gst-registration" className="font-semibold text-[#00416a] hover:underline">GST registration</Link>, <Link href="/serviceslist/gst/gst-lut" className="font-semibold text-[#00416a] hover:underline">GST LUT filing</Link>, <Link href="/serviceslist/gst/gst-return" className="font-semibold text-[#00416a] hover:underline">GST return filing</Link> and all <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link>.
        </p>
      </Reveal>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-40">
      <Heading label="Process" title="How Our GST for Freelancers & Independent Professionals Works" />
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
              Our fee depends on whether you need registration, LUT, monthly or quarterly filing and how many invoices you issue. You receive a written quote before we start, with no add-ons introduced later.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does it take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Once documents are in order, registration and LUT are typically quick, and monthly filing runs ahead of due dates when we get your invoices on time. We confirm a plan before we begin.
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
      <Heading label="FAQs" title="GST for Freelancers & Independent Professionals — Frequently Asked Questions" />
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
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gst-for-freelancer").slice(0, 6);
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
        <div className="fl-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Freelance with GST confidence</h3>
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
          <div className="fl-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to sort out your freelancer GST?</h3>
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