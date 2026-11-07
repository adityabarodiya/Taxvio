"use client";

// app/serviceslist/roc/private-limited-formation/Privatelimitedclient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "Private Limited Company Formation";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "included", label: "What's Included" },
  { id: "compare", label: "Compare" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "fees", label: "Timeline & Fees" },
  { id: "after", label: "After Incorporation" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "A private limited company is the most widely chosen structure for Indian startups and growing businesses, and for good reason. It is a separate legal entity, so the company can own property, sign contracts and sue or be sued in its own name. Shareholders' liability is limited to the unpaid amount on their shares, which keeps personal assets separate from business risk. It also signals credibility to banks, investors, vendors and large customers in a way a proprietorship rarely does.",
  "Incorporation is handled online through the Ministry of Corporate Affairs using the integrated SPICe+ form, which combines name reservation, DIN allotment for directors, and applications for PAN, TAN and other registrations in a single filing. The process is fully digital, but it is unforgiving of small errors: a name that conflicts with an existing company or trademark, a weakly drafted objects clause, or registered-office documents that don't match are the usual reasons applications come back with queries.",
  "Taxvio's CA-assisted team manages the entire sequence for you — from checking name availability and drafting the MOA and AOA to filing SPICe+ and delivering your Certificate of Incorporation with PAN and TAN. You get a single point of contact, a fixed quote before we begin, and a clear list of what happens after incorporation, so your first compliance deadlines never surprise you.",
];

const BENEFITS = [
  { icon: "🛡️", t: "Limited liability", d: "Your personal assets are separate from the company's debts. Shareholders risk only the unpaid amount on their shares." },
  { icon: "🏛️", t: "Separate legal identity", d: "The company owns assets, signs contracts and continues to exist even if directors or shareholders change." },
  { icon: "📈", t: "Easier to raise funds", d: "Equity can be issued to angels, venture funds and strategic investors, and shares can be transferred cleanly." },
  { icon: "🏦", t: "Better banking & credit", d: "Banks, NBFCs and large customers generally treat a registered company as a more credible counterparty." },
  { icon: "♾️", t: "Perpetual succession", d: "The business does not end with the death or exit of a founder. Ownership moves through share transfer." },
  { icon: "🤝", t: "Team-friendly", d: "You can reward employees and co-founders with ESOPs and structured shareholding when the business grows." },
];

const FEATURES = [
  { title: "Name approval", note: "We check availability against existing company names and trademarks, then propose names that match MCA naming guidelines so the reservation is not rejected." },
  { title: "MOA & AOA drafting", note: "The Memorandum defines what the company may do; the Articles define how it is run. We draft an objects clause broad enough to cover future expansion, so you avoid an amendment later." },
  { title: "Certificate of Incorporation", note: "On approval the ROC issues your Certificate of Incorporation with the Corporate Identity Number (CIN), the legal proof that your company exists." },
  { title: "PAN & TAN application", note: "PAN and TAN are applied for together with incorporation, so you can open the bank account and deduct tax at source without a separate application." },
];

const IDEAL = [
  { icon: "🚀", t: "Startups", d: "Investors and funds generally prefer — and often require — a private limited structure, because shares can be issued and transferred cleanly." },
  { icon: "📈", t: "Growing businesses", d: "If your proprietorship or partnership is scaling, a company gives you limited liability, perpetual succession and easier access to bank credit." },
  { icon: "💻", t: "Professionals & agencies", d: "Founders of consultancies, software and service firms often incorporate to contract with larger clients who prefer dealing with a company." },
  { icon: "🌏", t: "Businesses with foreign links", d: "Companies expecting foreign investors or overseas clients often choose this structure, subject to FEMA and foreign investment rules." },
];

const DOCS = [
  "PAN & Aadhaar of all directors",
  "Passport-size photograph of each director",
  "Email ID and mobile number of each director",
  "Address proof of directors (bank statement / utility bill)",
  "Registered office proof (recent electricity or utility bill)",
  "Rent agreement + owner's NOC (if premises are rented)",
  "2–3 proposed company names, in order of preference",
  "Details of shareholders and their proposed shareholding",
];

const STEPS = [
  { t: "Eligibility & structure check", d: "We confirm a private limited company suits your plan and settle the number of directors and shareholders. At least two of each are required (they can be the same people), and at least one director must be resident in India." },
  { t: "Digital signatures & name reservation", d: "Directors obtain Digital Signature Certificates (DSC). We then shortlist and reserve the name through SPICe+ Part A, checking it against existing companies and trademarks first." },
  { t: "Draft MOA, AOA & declarations", d: "We prepare the Memorandum, Articles and the subscriber and director declarations, with an objects clause written for your actual business." },
  { t: "File SPICe+ with the MCA", d: "The integrated form is filed with registered-office proof and director details, requesting DIN, PAN, TAN and other linked registrations in the same submission." },
  { t: "Resolve queries, receive the Certificate", d: "If the Registrar raises a query, we respond immediately. On approval you receive the Certificate of Incorporation, CIN, PAN and TAN." },
  { t: "Post-incorporation handover", d: "We give you a checklist and calendar for the first-year filings — bank account, auditor appointment, commencement declaration and statutory registers — and can handle them for you." },
];

const AFTER = [
  { t: "Open the company bank account", d: "Use the Certificate of Incorporation, PAN and board resolution. Subscribers should then pay in their share capital." },
  { t: "Appoint the first auditor (ADT-1)", d: "The first statutory auditor is generally appointed within 30 days of incorporation and notified to the ROC through Form ADT-1." },
  { t: "Commencement of business (INC-20A)", d: "A company with share capital must file a declaration of commencement of business within 180 days of incorporation, before starting operations or exercising borrowing powers." },
  { t: "Statutory registers & share certificates", d: "Hold the first board meeting, maintain the statutory registers and issue share certificates to subscribers within the prescribed time." },
  { t: "Tax & other registrations", d: "Register for GST when your turnover or business model requires it, and consider Udyam/MSME, professional tax and PF/ESI as applicable." },
  { t: "Annual compliance", d: "Every year: financial statements (AOC-4), annual return (MGT-7 / MGT-7A), director KYC (DIR-3 KYC), a statutory audit and the company's income tax return." },
];

const MISTAKES = [
  { t: "Choosing a name before checking conflicts", d: "A name too similar to an existing company or registered trademark is rejected, costing both time and fees." },
  { t: "A narrow objects clause", d: "Writing only today's activity forces an amendment whenever the business expands into a new line." },
  { t: "Registered-office paperwork mismatches", d: "Outdated utility bills or a missing owner NOC are the commonest reasons for a query." },
  { t: "Assuming a dormant company needs no filings", d: "Annual filings are mandatory even with zero turnover; late fees run daily and prolonged default risks strike-off." },
  { t: "Informal shareholding", d: "Vague understandings between founders cause disputes later. Agree on shareholding and roles before filing, and document them." },
];

const COMPARE_ROWS = [
  { k: "Legal status", pvt: "Separate legal entity", llp: "Separate legal entity", opc: "Separate legal entity", prop: "Same as the owner" },
  { k: "Minimum members", pvt: "2 directors, 2 shareholders", llp: "2 partners", opc: "1 director/member + nominee", prop: "1 owner" },
  { k: "Liability", pvt: "Limited to shares", llp: "Limited to contribution", opc: "Limited to shares", prop: "Unlimited" },
  { k: "Equity fundraising", pvt: "Best suited", llp: "Limited", opc: "Limited", prop: "Not possible" },
  { k: "Compliance load", pvt: "Higher", llp: "Moderate", opc: "Moderate–higher", prop: "Lowest" },
  { k: "Audit", pvt: "Statutory audit required", llp: "Only above prescribed limits", opc: "Statutory audit required", prop: "Only if tax audit applies" },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function PrivateLimitedClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
          <Included />
          <Compare />
          <Who />
          <Documents />
          <Process />
          <Fees />
          <After />
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
      @keyframes pl-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes pl-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .pl-aurora { animation: pl-aurora 14s ease-in-out infinite; }
      .pl-float { animation: pl-float 7s ease-in-out infinite; }
      .pl-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .pl-reveal.pl-in { opacity: 1; transform: none; }
      .pl-hide-scroll::-webkit-scrollbar { display: none; }
      .pl-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .pl-aurora, .pl-float { animation: none !important; }
        .pl-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`pl-reveal ${shown ? "pl-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Minimum", v: "2 directors, 2 shareholders" },
    { k: "Capital", v: "No minimum required" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="pl-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pl-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">Private Limited Formation</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            🏢 Company Incorporation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            Private Limited Company Registration{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Done Right, Online
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Complete incorporation services for private limited companies including documentation and MCA filing —
            name approval, MOA &amp; AOA, Certificate of Incorporation, PAN &amp; TAN, all reviewed by a CA.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#process" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              See How It Works
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
          <div className="pl-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your incorporation, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample progress view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Name approval", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "MOA & AOA drafting", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "SPICe+ filing", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Certificate of Incorporation", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "PAN & TAN", s: "Next", c: "bg-sky-100 text-sky-700" },
              ].map((r) => (
                <li key={r.t} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm">
                  <span className="flex-1 font-semibold">{r.t}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${r.c}`}>{r.s}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-[#00416a] text-white px-4 py-3 text-sm flex items-center gap-3">
              <span className="text-xl">👨‍💼</span>
              <span><b>CA-reviewed</b> before every submission</span>
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto pl-hide-scroll">
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
      <Heading label="Overview" title="What Is a Private Limited Company?" />
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
    <section id="benefits" className="scroll-mt-40">
      <Heading label="Benefits" title="Why Founders Choose a Private Limited Company" />
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
      <Heading label="What's Included" title="What You Get With Private Limited Formation" />
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

/** Interactive picker + comparison table */
function Compare() {
  const [funding, setFunding] = useState<"yes" | "no" | null>(null);
  const [owners, setOwners] = useState<"one" | "many" | null>(null);
  const [liability, setLiability] = useState<"yes" | "no" | null>(null);

  const result = useMemo(() => {
    if (!funding || !owners || !liability) return null;
    if (funding === "yes") return { t: "Private Limited Company", d: "Equity funding is easiest through a private limited company, with clean share issue and transfer." };
    if (owners === "one" && liability === "yes") return { t: "One Person Company (or Private Limited)", d: "A sole founder who wants limited liability can consider an OPC, or a private limited company with a second director/shareholder." };
    if (owners === "one") return { t: "Proprietorship", d: "A single owner not seeking liability protection or funding can start lighter, and upgrade later as the business grows." };
    if (liability === "yes") return { t: "Private Limited Company or LLP", d: "Both give limited liability. A private limited company suits scaling and investors; an LLP suits lighter compliance for professional or family firms." };
    return { t: "LLP or Partnership", d: "Multiple owners without funding plans can often run with lighter compliance, though liability protection matters." };
  }, [funding, owners, liability]);

  const Opt = <T extends string,>({ value, current, set, label }: { value: T; current: T | null; set: (v: T) => void; label: string }) => (
    <button
      onClick={() => set(value)}
      className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
        current === value ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="compare" className="scroll-mt-40">
      <Heading label="Compare" title="Private Limited vs LLP vs OPC vs Proprietorship" />

      <Reveal>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm mb-8">
          <p className="font-bold text-[#00416a] mb-4">🧭 Not sure? Answer three quick questions</p>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Do you plan to raise equity funding from investors?</p>
              <div className="flex gap-2"><Opt value="yes" current={funding} set={setFunding} label="Yes" /><Opt value="no" current={funding} set={setFunding} label="No / not yet" /></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">How many owners will the business have?</p>
              <div className="flex gap-2"><Opt value="one" current={owners} set={setOwners} label="Just me" /><Opt value="many" current={owners} set={setOwners} label="Two or more" /></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Do you want your personal assets protected from business debts?</p>
              <div className="flex gap-2"><Opt value="yes" current={liability} set={setLiability} label="Yes" /><Opt value="no" current={liability} set={setLiability} label="Not a priority" /></div>
            </div>
          </div>
          {result && (
            <div className="mt-5 rounded-2xl bg-sky-50 border border-sky-100 p-4">
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">Likely fit</p>
              <p className="font-extrabold text-[#00416a] text-lg">{result.t}</p>
              <p className="text-sm text-gray-600 mt-1">{result.d}</p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">
                Confirm with a CA →
              </button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">A starting guide only — your tax, funding and liability position decide the final choice.</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg bg-white">
          <table className="min-w-[760px] w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="px-4 py-4 bg-gray-50 rounded-tl-3xl" />
                <th className="px-4 py-4 text-left font-extrabold text-white bg-gradient-to-br from-[#00416a] to-[#0a6aa8]">Private Limited</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50">LLP</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50">OPC</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50 rounded-tr-3xl">Proprietorship</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r.k} className="group">
                  <td className="px-4 py-3.5 font-bold text-gray-800 border-t border-gray-100 group-hover:bg-gray-50">{r.k}</td>
                  <td className="px-4 py-3.5 font-semibold text-[#00416a] bg-sky-50/70 border-t border-[#00416a]/10">{r.pvt}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.llp}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.opc}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.prop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}

function Who() {
  return (
    <section id="who" className="scroll-mt-40">
      <Heading label="Who It's For" title="Is Private Limited the Right Structure for You?" />
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

function Documents() {
  const [checked, setChecked] = useState<boolean[]>(() => DOCS.map(() => false));
  const done = checked.filter(Boolean).length;
  const pct = Math.round((done / DOCS.length) * 100);
  return (
    <section id="documents" className="scroll-mt-40">
      <Heading label="Documents" title="Documents Required for Private Limited Registration" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Directors&apos; identity and address proofs, plus proof of the registered office, form the core of the file. Keep clear
          colour scans ready; a utility bill used as address proof should be recent, and rented or shared premises need the
          owner&apos;s NOC. Foreign directors need passport-based documents, which we will guide you on.
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
      <Heading label="Process" title="How Private Limited Registration Works, Step by Step" />
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

function Fees() {
  return (
    <section id="fees" className="scroll-mt-40">
      <Heading label="Timeline & Fees" title="Timeline, Cost & Mistakes to Avoid" />
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Reveal>
          <div className="h-full bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does it take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Timelines depend mainly on how complete your documents are and how quickly the Registrar processes the application.
              When documents are in order and the name is accepted at the first attempt, incorporation is usually completed in
              roughly one to two weeks. Name objections or queries add time, which is why we check the name and paperwork
              carefully before filing.
            </p>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="h-full bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">💰</p>
            <h3 className="font-bold text-[#00416a] mb-2">What does it cost?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The total has two parts: Taxvio&apos;s professional fee and government charges. Government costs — MCA filing fees and
              stamp duty — vary with your authorised share capital and your state, so they cannot be quoted accurately without
              those details. You receive a written, itemised quote before we start, with no add-ons introduced once the work is
              underway.
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

function After() {
  return (
    <section id="after" className="scroll-mt-40">
      <Heading label="After Incorporation" title="Your First-Year Compliance Checklist" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Getting the Certificate of Incorporation is the beginning, not the end. These are the steps that follow — and the ones
          most often missed by first-time founders. Dates and forms follow current MCA rules; our team confirms the applicable
          timelines for your company.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {AFTER.map((a, i) => (
          <Reveal key={a.t} delay={i * 60}>
            <div className="h-full bg-white border border-gray-200 border-l-4 border-l-[#00416a] rounded-2xl p-5 hover:shadow-lg transition-all">
              <h3 className="font-bold text-[#00416a] mb-1.5">{a.t}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{a.d}</p>
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
      <Heading label="FAQs" title="Private Limited Registration — Frequently Asked Questions" />
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
  const items = (roc?.services ?? []).filter((s) => s.slug !== "private-limited-formation").slice(0, 6);
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
        <div className="pl-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Register your company with a CA</h3>
          <p className="text-sm text-sky-100/85 leading-relaxed mb-5">Tell us your plan — a CA from our team will call you back with a clear process and a fixed quote.</p>
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
          <div className="pl-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to register your private limited company?</h3>
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