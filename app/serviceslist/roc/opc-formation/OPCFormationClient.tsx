"use client";

// app/serviceslist/roc/opc-formation/OPCFormationClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "One Person Company (OPC) Registration";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "included", label: "What's Included" },
  { id: "compare", label: "Compare" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "fees", label: "Timeline & Fees" },
  { id: "compliance", label: "Compliance" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "A One Person Company (OPC) lets a solo entrepreneur run a business through a registered company without needing a partner or a second shareholder. It was introduced by the Companies Act, 2013, and it is a separate legal entity: it can own property, sign contracts and sue or be sued in its own name. The founder is the only member and director, and their liability is limited to the amount unpaid on their shares, which keeps personal assets apart from business risk.",
  "For many solo founders this is the middle path between a proprietorship and a private limited company. A proprietorship is simple, but it exposes your personal assets and often looks less credible to banks and larger customers. A private limited company needs at least two directors and two shareholders. An OPC gives you the company identity and limited liability while you stay in full control, with some relaxations from the heavier requirements that apply to other companies.",
  "Because there is only one member, every OPC must name a nominee in its Memorandum, who takes over if the founder dies or becomes incapacitated. Details like the nominee's consent, the choice of name and the objects clause need to be right the first time. Taxvio's CA-assisted team handles name approval, MOA and AOA drafting, filing and the incorporation certificate, and gives you a clear list of what must be filed after registration.",
];

const BENEFITS = [
  { icon: "🛡️", t: "Limited liability", d: "Your personal assets stay separate from the company's debts and obligations." },
  { icon: "🏛️", t: "Separate legal identity", d: "The OPC owns assets and signs contracts in its own name, independent of you." },
  { icon: "👤", t: "Full control", d: "You are the sole member and director, so decisions stay with you without a partner or co-shareholder." },
  { icon: "🏦", t: "Credibility with banks & clients", d: "A registered company is usually taken more seriously by lenders and larger customers than a proprietorship." },
  { icon: "♾️", t: "Continuity through a nominee", d: "The nominee named in the MOA ensures the company continues if something happens to the founder." },
  { icon: "🪜", t: "A path to grow", d: "When you are ready for partners or investors, an OPC can be converted into a private limited company." },
];

const FEATURES = [
  { title: "Name approval", note: "We check the proposed name against existing companies, LLPs and trademarks, and propose names that follow MCA guidelines. OPC names carry the suffix “(OPC) Private Limited”." },
  { title: "MOA & AOA drafting", note: "We draft the Memorandum and Articles with an objects clause broad enough for future growth, and record the nominee as the law requires." },
  { title: "Incorporation certificate", note: "On approval the Registrar issues your Certificate of Incorporation with the Corporate Identity Number (CIN), the legal proof that your OPC exists." },
];

const IDEAL = [
  { icon: "🧑‍💻", t: "Solo entrepreneurs", d: "Founders running a business on their own who want limited liability and a company identity without bringing in a partner." },
  { icon: "🎯", t: "Freelancers & consultants", d: "Independent professionals who contract with larger clients and prefer to deal under a company name." },
  { icon: "🏪", t: "Small traders & service providers", d: "Growing proprietors who want to separate personal assets from business risk and build credibility with banks." },
  { icon: "🧪", t: "Founders testing an idea", d: "People who want to start formally now and convert to a private limited company when they add partners or investors." },
];

const DOCS = [
  "PAN & Aadhaar of the director (sole member)",
  "Passport-size photograph of the director",
  "Email ID and mobile number of the director",
  "Address proof of the director (bank statement / utility bill)",
  "Registered office proof (recent electricity or utility bill)",
  "Rent agreement + owner's NOC (if premises are rented)",
  "Nominee's PAN, Aadhaar, address proof and written consent",
  "2–3 proposed company names, in order of preference",
];

const STEPS = [
  { t: "Eligibility & nominee check", d: "We confirm you meet the eligibility conditions for an OPC and help you choose a nominee. The nominee must consent in writing." },
  { t: "Digital signature & name reservation", d: "You obtain a Digital Signature Certificate (DSC). We then shortlist and reserve a compliant name through the MCA, checking it against existing entities and trademarks first." },
  { t: "Draft MOA, AOA & declarations", d: "We prepare the Memorandum, Articles and the declarations, naming the nominee and writing an objects clause for your actual business." },
  { t: "File SPICe+ with the MCA", d: "The integrated incorporation form is filed with registered-office proof and director details, with linked applications such as DIN, PAN and TAN." },
  { t: "Resolve queries, receive the Certificate", d: "If the Registrar raises a query, we respond right away. On approval you receive the Certificate of Incorporation and CIN." },
  { t: "Post-incorporation handover", d: "We give you a checklist and calendar for first-year filings — auditor appointment, commencement declaration, bank account and annual returns — and can handle them for you." },
];

const COMPLIANCE = [
  { when: "Within 30 days", t: "Auditor appointment (ADT-1)", d: "The first statutory auditor is generally appointed within 30 days of incorporation and notified to the ROC." },
  { when: "Within 180 days", t: "Commencement of business (INC-20A)", d: "A company with share capital files a declaration of commencement of business before starting operations." },
  { when: "Every year", t: "Financial statements (AOC-4)", d: "Annual financial statements are filed with the ROC every year, even if the OPC had no business." },
  { when: "Every year", t: "Annual return (MGT-7A)", d: "OPCs file a simplified annual return. An OPC is exempt from holding an AGM." },
  { when: "Every year", t: "Director KYC (DIR-3 KYC)", d: "The director completes KYC annually to keep the DIN active." },
  { when: "As needed", t: "Change of nominee", d: "If you wish to replace the nominee, the change is filed with the Registrar on the prescribed form." },
];

const MISTAKES = [
  { t: "Skipping the nominee's consent", d: "A nominee must give written consent before incorporation. Missing or mismatched consent is a common reason for a query." },
  { t: "Assuming an OPC can have co-founders", d: "An OPC can have only one member. If you plan to add partners soon, a private limited company or LLP may suit you better from day one." },
  { t: "Treating a dormant OPC as exempt", d: "Annual filings and the audit are mandatory even with zero turnover, and late fees run daily." },
  { t: "A narrow objects clause", d: "Writing only today's activity forces an amendment whenever the business expands into a new line." },
  { t: "Registered-office paperwork mismatches", d: "Outdated utility bills or a missing owner NOC are the commonest reasons for a query." },
];

const COMPARE_ROWS = [
  { k: "Legal status", opc: "Separate legal entity", pvt: "Separate legal entity", prop: "Same as the owner", llp: "Separate legal entity" },
  { k: "Owners", opc: "1 member + nominee", pvt: "2 directors, 2 shareholders", prop: "1 owner", llp: "2 partners" },
  { k: "Liability", opc: "Limited to shares", pvt: "Limited to shares", prop: "Unlimited", llp: "Limited to contribution" },
  { k: "Equity fundraising", opc: "Not as an OPC", pvt: "Best suited", prop: "Not possible", llp: "Limited" },
  { k: "AGM requirement", opc: "Exempt", pvt: "Required", prop: "Not applicable", llp: "Not applicable" },
  { k: "Compliance load", opc: "Moderate", pvt: "Higher", prop: "Lowest", llp: "Moderate" },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function OPCFormationClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
          <Compliance />
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
      @keyframes op-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes op-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .op-aurora { animation: op-aurora 14s ease-in-out infinite; }
      .op-float { animation: op-float 7s ease-in-out infinite; }
      .op-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .op-reveal.op-in { opacity: 1; transform: none; }
      .op-hide-scroll::-webkit-scrollbar { display: none; }
      .op-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .op-aurora, .op-float { animation: none !important; }
        .op-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`op-reveal ${shown ? "op-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Members", v: "1 member + nominee" },
    { k: "Capital", v: "No minimum required" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="op-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="op-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">OPC Registration</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            👤 Solo Founder Company
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            One Person Company (OPC) Registration{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Your Business, Your Company
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            OPC registration services for solo entrepreneurs with complete MCA compliance — name approval, MOA &amp; AOA
            drafting and your incorporation certificate, all reviewed by a CA.
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
          <div className="op-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your OPC, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample progress view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Name approval", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "MOA, AOA & nominee consent", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "SPICe+ filing", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Incorporation certificate", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Auditor appointment", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto op-hide-scroll">
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
      <Heading label="Overview" title="What Is a One Person Company (OPC)?" />
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
      <Heading label="Benefits" title="Why Solo Founders Choose an OPC" />
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
      <Heading label="What's Included" title="What You Get With OPC Registration" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

/** Structure picker + comparison table */
function Compare() {
  const [partners, setPartners] = useState<"solo" | "soon" | null>(null);
  const [funding, setFunding] = useState<"yes" | "no" | null>(null);
  const [risk, setRisk] = useState<"yes" | "no" | null>(null);

  const result = useMemo(() => {
    if (!partners || !funding || !risk) return null;
    if (funding === "yes") return { t: "Private Limited Company", d: "If you expect investor equity, a private limited company supports clean share issue and transfer from day one." };
    if (partners === "soon") return { t: "Private Limited Company or LLP", d: "If partners are joining soon, an OPC would need conversion. Starting as a private limited company or LLP can save a step." };
    if (risk === "yes") return { t: "One Person Company (OPC)", d: "A solo founder who wants limited liability and a company identity, without partners or investors, is the classic OPC case." };
    return { t: "Proprietorship (to start) or OPC", d: "If liability protection is not a priority yet, a proprietorship is the lightest start. You can move to an OPC later." };
  }, [partners, funding, risk]);

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
      <Heading label="Compare" title="OPC vs Private Limited vs Proprietorship vs LLP" />

      <Reveal>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm mb-8">
          <p className="font-bold text-[#00416a] mb-4">🧭 Is an OPC right for you? Three quick questions</p>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Will you run the business alone?</p>
              <div className="flex gap-2"><Opt value="solo" current={partners} set={setPartners} label="Yes, just me" /><Opt value="soon" current={partners} set={setPartners} label="Partners joining soon" /></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Do you plan to raise equity funding from investors?</p>
              <div className="flex gap-2"><Opt value="yes" current={funding} set={setFunding} label="Yes" /><Opt value="no" current={funding} set={setFunding} label="No / not yet" /></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Do you want your personal assets protected from business debts?</p>
              <div className="flex gap-2"><Opt value="yes" current={risk} set={setRisk} label="Yes" /><Opt value="no" current={risk} set={setRisk} label="Not a priority" /></div>
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
                <th className="px-4 py-4 text-left font-extrabold text-white bg-gradient-to-br from-[#00416a] to-[#0a6aa8]">OPC</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50">Private Limited</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50">Proprietorship</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50 rounded-tr-3xl">LLP</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r.k} className="group">
                  <td className="px-4 py-3.5 font-bold text-gray-800 border-t border-gray-100 group-hover:bg-gray-50">{r.k}</td>
                  <td className="px-4 py-3.5 font-semibold text-[#00416a] bg-sky-50/70 border-t border-[#00416a]/10">{r.opc}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.pvt}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.prop}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.llp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          See also: <Link href="/serviceslist/roc/private-limited-formation" className="font-semibold text-[#00416a] hover:underline">Private Limited Formation</Link> ·{" "}
          <Link href="/serviceslist/roc/llp-formation" className="font-semibold text-[#00416a] hover:underline">LLP Registration</Link>
        </p>
      </Reveal>
    </section>
  );
}

function Who() {
  return (
    <section id="who" className="scroll-mt-40">
      <Heading label="Who It's For" title="Is an OPC the Right Structure for You?" />
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
      <Heading label="Documents" title="Documents Required for OPC Registration" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          The director&apos;s identity and address proofs, proof of the registered office, and the nominee&apos;s details with
          written consent form the core of the file. Keep clear colour scans ready; a utility bill used as address proof
          should be recent, and rented premises need the owner&apos;s NOC.
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
      <Heading label="Process" title="How OPC Registration Works, Step by Step" />
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
              When documents are in order and the name is accepted at the first attempt, registration is usually completed in
              roughly one to two weeks. Name objections or queries add time, which is why we check the name, nominee consent and
              paperwork carefully before filing.
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

function Compliance() {
  return (
    <section id="compliance" className="scroll-mt-40">
      <Heading label="Compliance" title="OPC Compliance After Registration" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Getting the Certificate of Incorporation is the beginning, not the end. These are the recurring and event-based
          filings an OPC carries. Dates follow current MCA rules and may change by notification; our team confirms the
          applicable timelines for your company.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {COMPLIANCE.map((c, i) => (
          <Reveal key={c.t} delay={i * 60}>
            <div className="h-full bg-white border border-gray-200 border-l-4 border-l-[#00416a] rounded-2xl p-5 hover:shadow-lg transition-all">
              <span className="inline-block text-[11px] font-bold text-[#00416a] uppercase tracking-wide bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full mb-2">{c.when}</span>
              <h3 className="font-bold text-[#00416a] mb-1.5">{c.t}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.d}</p>
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
      <Heading label="FAQs" title="OPC Registration — Frequently Asked Questions" />
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
  const items = (roc?.services ?? []).filter((s) => s.slug !== "opc-formation").slice(0, 6);
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
        <div className="op-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Register your OPC with a CA</h3>
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
          <div className="op-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to register your One Person Company?</h3>
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