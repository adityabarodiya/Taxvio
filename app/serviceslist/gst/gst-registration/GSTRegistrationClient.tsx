"use client";

// app/serviceslist/gst/gst-registration/GSTRegistrationClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GST Registration";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Do I Need GST?" },
  { id: "types", label: "Types" },
  { id: "included", label: "What's Included" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "fees", label: "Timeline & Fees" },
  { id: "after", label: "After GSTIN" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "Goods and Services Tax (GST) is the single indirect tax that replaced most earlier central and state taxes in India. Once your business is registered, you receive a 15-digit Goods and Services Tax Identification Number (GSTIN), which allows you to collect GST from customers, issue tax invoices, claim input tax credit on your purchases and sell across state lines and on online marketplaces. For a growing business, GST registration is less a formality than a licence to operate credibly.",
  "Registration is filed online on the GST portal using Form GST REG-01. It involves identity and address documents, bank details, a description of your business activity with the right HSN or SAC codes, and verification through Aadhaar authentication. It sounds simple, but a mismatch between names on your PAN, Aadhaar and bank records, a weak address proof, or an incorrectly described business activity are common reasons for queries and delays from the tax officer.",
  "Taxvio's CA-assisted team handles GST registration from the first question to your GSTIN. We assess whether you are required to register or whether voluntary registration makes sense, choose the right registration type, prepare and check every document, file the application, respond to officer queries and guide you on what to do after the GSTIN is issued. You get a fixed quote before we begin and a single point of contact throughout.",
];

const TYPES = [
  { icon: "🧾", t: "Regular registration", d: "The standard registration for most businesses. You collect GST, claim input tax credit and file regular returns." },
  { icon: "📉", t: "Composition scheme", d: "For eligible small taxpayers who prefer a low fixed tax rate on turnover and simpler compliance, without input tax credit." },
  { icon: "🙋", t: "Voluntary registration", d: "Taken by businesses below the threshold that want input tax credit, wider customers or marketplace access." },
  { icon: "🛒", t: "E-commerce sellers", d: "Sellers on online marketplaces generally need GST registration regardless of turnover, with some exceptions." },
  { icon: "🏕️", t: "Casual & non-resident taxable persons", d: "Temporary registrations for businesses that supply in a state occasionally, or for foreign persons with no fixed place in India." },
  { icon: "🏷️", t: "TDS / TCS registrations", d: "Required for entities that must deduct or collect tax at source under GST, such as certain government bodies and e-commerce operators." },
];

const FEATURES = [
  { title: "GST eligibility consultation", note: "We review your turnover, nature of supply, states of operation and sales channels to confirm whether registration is mandatory, advisable or optional, and which type fits." },
  { title: "Document preparation & filing", note: "We check your PAN, Aadhaar, address and bank documents for consistency, prepare the application with the right business description and codes, and file it on the GST portal." },
  { title: "GSTIN allotment support", note: "We track the application, handle Aadhaar authentication and any officer query or clarification, and follow it until your GSTIN is allotted." },
  { title: "Post-registration guidance", note: "After approval we explain invoicing rules, GSTIN display, bank-detail updates and your return calendar, so you start compliant." },
];

const BENEFITS = [
  { icon: "💳", t: "Claim input tax credit", d: "Offset the GST you pay on purchases against the GST you collect, lowering your effective tax cost." },
  { icon: "🌍", t: "Sell across states", d: "A GSTIN lets you supply goods inter-state and expand beyond your home market without barriers." },
  { icon: "🛍️", t: "Marketplace access", d: "Sell on Amazon, Flipkart and other platforms that need a GST registration to onboard sellers." },
  { icon: "🏢", t: "Win bigger customers", d: "Companies and large buyers prefer vendors with a GSTIN, because they need input tax credit on their purchases." },
  { icon: "🏦", t: "Easier credit & tenders", d: "GST records support loan applications and tender eligibility, and show that your business is formally registered." },
  { icon: "⚖️", t: "Stay legally compliant", d: "Registering on time avoids penalties and interest on past supplies and builds a clean compliance history." },
];

const IDEAL = [
  { icon: "🏪", t: "Small & medium businesses", d: "Shops, manufacturers and distributors crossing the threshold or supplying to other businesses." },
  { icon: "🚀", t: "Startups & entrepreneurs", d: "New ventures that need a GSTIN to invoice customers, claim credit and open marketplace accounts." },
  { icon: "💻", t: "Traders & service providers", d: "Traders, freelancers, agencies and consultants who bill clients and want to claim input tax credit." },
];

const DOC_SETS: Record<string, { label: string; docs: string[] }> = {
  prop: {
    label: "Proprietorship",
    docs: [
      "PAN card of the proprietor",
      "Aadhaar card of the proprietor",
      "Photograph of the proprietor",
      "Business address proof (electricity bill / rent agreement + NOC)",
      "Bank account details (cancelled cheque / statement)",
    ],
  },
  firm: {
    label: "Partnership / LLP",
    docs: [
      "PAN card of the firm / LLP",
      "Partnership deed or LLP agreement",
      "PAN & Aadhaar of all partners",
      "Photographs of partners / designated partners",
      "Business address proof (electricity bill / rent agreement + NOC)",
      "Bank account details (cancelled cheque / statement)",
      "Authorisation letter for the authorised signatory",
    ],
  },
  company: {
    label: "Company",
    docs: [
      "PAN card of the company",
      "Certificate of Incorporation, MOA & AOA",
      "PAN & Aadhaar of directors",
      "Photographs of directors",
      "Business address proof (electricity bill / rent agreement + NOC)",
      "Bank account details (cancelled cheque / statement)",
      "Board resolution for the authorised signatory",
      "Digital Signature Certificate (DSC) of the signatory",
    ],
  },
};

const STEPS = [
  { t: "Free eligibility consultation", d: "We understand your business, turnover, states of operation and sales channels, and confirm whether registration is mandatory or voluntary and which type suits you." },
  { t: "Document collection & check", d: "You share the documents on this page. We verify that names, addresses and bank details match across records, since mismatches are a leading cause of queries." },
  { t: "Prepare the application", d: "We prepare Form GST REG-01 with the correct business description, HSN or SAC codes, principal and additional places of business, and authorised signatory details." },
  { t: "File & authenticate", d: "We file the application on the GST portal. You complete Aadhaar authentication through the OTP or link sent to your registered mobile." },
  { t: "Track & respond to queries", d: "We follow the Application Reference Number (ARN) and reply on your behalf if the officer asks for clarification or additional documents." },
  { t: "GSTIN issued & handover", d: "You receive your GST registration certificate and GSTIN, along with a clear checklist of what to do next." },
];

const AFTER = [
  { when: "Within 30 days", t: "Add bank account details", d: "Furnish your bank account details on the portal within the prescribed period, or before filing your first return if earlier." },
  { when: "From day one", t: "Issue compliant tax invoices", d: "Use proper tax invoices with your GSTIN, correct HSN or SAC codes and the right tax rate for every sale." },
  { when: "Display", t: "Show your GSTIN", d: "Display your GSTIN and trade name at the place of business, and mention additional places of business on the certificate." },
  { when: "Every period", t: "File GST returns", d: "File GSTR-1 and GSTR-3B (or the quarterly option where eligible) on time, even if there are no sales in the period." },
  { when: "Monthly", t: "Reconcile input tax credit", d: "Match your purchase invoices against your auto-drafted statement so you claim only the credit that is available." },
  { when: "As needed", t: "Amend registration details", d: "Update changes in address, partners, business activity or additional places of business through the prescribed amendment process." },
];

const REJECTIONS = [
  { t: "Name mismatch across records", d: "Differences in spelling between PAN, Aadhaar and bank records commonly trigger a query or a failed authentication." },
  { t: "Weak or inconsistent address proof", d: "Old utility bills, missing NOC for rented premises or mismatched addresses are a frequent reason for rejection." },
  { t: "Incorrect business activity or codes", d: "Describing your activity wrongly, or choosing wrong HSN or SAC codes, leads to the wrong tax rate and later notices." },
  { t: "Failed Aadhaar authentication", d: "Authentication must be completed promptly. If it is skipped or fails, the application may require physical verification." },
  { t: "Ignoring officer notices", d: "A query from the officer has a short reply window. An unanswered notice can lead to rejection of the application." },
];

const REG_COMPARE = [
  { k: "Who it suits", reg: "Most businesses", comp: "Eligible small taxpayers", vol: "Below-threshold businesses" },
  { k: "Input tax credit", reg: "Available", comp: "Not available", vol: "Available" },
  { k: "Inter-state supply of goods", reg: "Allowed", comp: "Not allowed", vol: "Allowed" },
  { k: "Tax payable", reg: "On value added, at applicable rates", comp: "Low fixed rate on turnover", vol: "On value added, at applicable rates" },
  { k: "Returns", reg: "Regular, more detailed", comp: "Simplified", vol: "Regular, more detailed" },
  { k: "Charge GST to customers", reg: "Yes", comp: "No", vol: "Yes" },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GSTRegistrationClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
          <Eligibility />
          <Types />
          <Included />
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
      @keyframes gr-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes gr-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .gr-aurora { animation: gr-aurora 14s ease-in-out infinite; }
      .gr-float { animation: gr-float 7s ease-in-out infinite; }
      .gr-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .gr-reveal.gr-in { opacity: 1; transform: none; }
      .gr-hide-scroll::-webkit-scrollbar { display: none; }
      .gr-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .gr-aurora, .gr-float { animation: none !important; }
        .gr-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`gr-reveal ${shown ? "gr-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Govt. fee", v: "No portal fee" },
    { k: "Typical time", v: "≈ 3–7 working days" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="gr-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="gr-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">GST Registration</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            🧾 GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST Registration Online{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Quick, Hassle-Free, CA-Assisted
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            End-to-end GST registration services including eligibility assessment, documentation and approval support —
            reviewed by a Chartered Accountant before filing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#eligibility" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Do I Need GST?
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
          <div className="gr-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your GST registration, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample progress view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Eligibility consultation", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Documents verified", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Application filed (ARN)", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Aadhaar authentication", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "GSTIN allotted", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto gr-hide-scroll">
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
      <Heading label="Overview" title="What Is GST Registration?" />
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
      <Heading label="Benefits" title="Why Register for GST?" />
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

type Supply = "goods" | "services" | "both";
type Band = "lt20" | "mid" | "gt40";

/** "Do I need GST?" checker */
function Eligibility() {
  const [supply, setSupply] = useState<Supply | null>(null);
  const [band, setBand] = useState<Band | null>(null);
  const [interstate, setInterstate] = useState<boolean | null>(null);
  const [ecom, setEcom] = useState<boolean | null>(null);
  const [special, setSpecial] = useState<boolean | null>(null);

  const result = useMemo(() => {
    if (!supply || !band || interstate === null || ecom === null || special === null) return null;
    const goods = supply !== "services";
    if (special) return { tone: "must", t: "Registration is likely mandatory", d: "TDS/TCS deductors, casual or non-resident taxable persons, and those liable under reverse charge generally must register irrespective of turnover." };
    if (ecom) return { tone: "must", t: "Registration is likely mandatory", d: "Selling through an e-commerce operator generally requires registration irrespective of turnover, with limited exceptions." };
    if (interstate && goods) return { tone: "must", t: "Registration is likely mandatory", d: "Inter-state supply of goods generally requires registration irrespective of turnover." };
    if (band === "gt40") return { tone: "must", t: "Registration is likely mandatory", d: "Your turnover appears to be above the usual threshold for both goods and services." };
    if (band === "mid" && supply !== "goods") return { tone: "must", t: "Registration is likely mandatory", d: "Service providers (and mixed suppliers) generally must register once turnover crosses ₹20 lakh." };
    if (band === "mid") return { tone: "maybe", t: "Possibly not mandatory — check your state", d: "For goods, the usual limit is ₹40 lakh, but it is ₹20 lakh in some states. Voluntary registration may still help." };
    return { tone: "optional", t: "Not mandatory on turnover alone", d: "You appear to be below the thresholds. Voluntary registration can still help you claim input tax credit, sell to larger buyers or use marketplaces." };
  }, [supply, band, interstate, ecom, special]);

  const Opt = ({ on, set, label }: { on: boolean; set: () => void; label: string }) => (
    <button
      onClick={set}
      className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
        on ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"
      }`}
    >
      {label}
    </button>
  );

  const tone = result?.tone === "must" ? "bg-emerald-50 border-emerald-200" : result?.tone === "maybe" ? "bg-amber-50 border-amber-200" : "bg-sky-50 border-sky-100";

  return (
    <section id="eligibility" className="scroll-mt-40">
      <Heading label="Do I Need GST?" title="Who Needs GST Registration? Check in 30 Seconds" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          GST registration is mandatory when your aggregate turnover crosses the threshold — generally ₹40 lakh for suppliers
          of goods (₹20 lakh in some states) and ₹20 lakh for suppliers of services (₹10 lakh in special category states).
          Some businesses must register regardless of turnover. Answer the questions below for a quick indication.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">What do you mainly supply?</p>
              <div className="flex flex-wrap gap-2">
                <Opt on={supply === "goods"} set={() => setSupply("goods")} label="Goods" />
                <Opt on={supply === "services"} set={() => setSupply("services")} label="Services" />
                <Opt on={supply === "both"} set={() => setSupply("both")} label="Both" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Expected annual turnover</p>
              <div className="flex flex-wrap gap-2">
                <Opt on={band === "lt20"} set={() => setBand("lt20")} label="Below ₹20 lakh" />
                <Opt on={band === "mid"} set={() => setBand("mid")} label="₹20–40 lakh" />
                <Opt on={band === "gt40"} set={() => setBand("gt40")} label="Above ₹40 lakh" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Do you sell goods to other states?</p>
              <div className="flex gap-2"><Opt on={interstate === true} set={() => setInterstate(true)} label="Yes" /><Opt on={interstate === false} set={() => setInterstate(false)} label="No" /></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Do you sell through e-commerce platforms?</p>
              <div className="flex gap-2"><Opt on={ecom === true} set={() => setEcom(true)} label="Yes" /><Opt on={ecom === false} set={() => setEcom(false)} label="No" /></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Are you a TDS/TCS deductor, casual or non-resident taxable person, or liable under reverse charge?</p>
              <div className="flex gap-2"><Opt on={special === true} set={() => setSpecial(true)} label="Yes" /><Opt on={special === false} set={() => setSpecial(false)} label="No / not sure" /></div>
            </div>
          </div>

          {result && (
            <div className={`mt-6 rounded-2xl border p-5 ${tone}`}>
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">Indication</p>
              <p className="font-extrabold text-[#00416a] text-lg">{result.t}</p>
              <p className="text-sm text-gray-600 mt-1">{result.d}</p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">
                Confirm with a CA →
              </button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">A quick indication only — limits vary by state and change by notification. A CA will confirm your position.</p>
        </div>
      </Reveal>
    </section>
  );
}

function Types() {
  return (
    <section id="types" className="scroll-mt-40">
      <Heading label="Types" title="Types of GST Registration" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {TYPES.map((t, i) => (
          <Reveal key={t.t} delay={i * 60}>
            <div className="group h-full bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center text-xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-transform">{t.icon}</div>
              <h3 className="font-bold text-[#00416a] mb-1">{t.t}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="font-extrabold text-[#00416a] text-xl mb-4">Regular vs Composition vs Voluntary</h3>
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg bg-white">
          <table className="min-w-[700px] w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="px-4 py-4 bg-gray-50 rounded-tl-3xl" />
                <th className="px-4 py-4 text-left font-extrabold text-white bg-gradient-to-br from-[#00416a] to-[#0a6aa8]">Regular</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50">Composition</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50 rounded-tr-3xl">Voluntary</th>
              </tr>
            </thead>
            <tbody>
              {REG_COMPARE.map((r) => (
                <tr key={r.k} className="group">
                  <td className="px-4 py-3.5 font-bold text-gray-800 border-t border-gray-100 group-hover:bg-gray-50">{r.k}</td>
                  <td className="px-4 py-3.5 font-semibold text-[#00416a] bg-sky-50/70 border-t border-[#00416a]/10">{r.reg}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.comp}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.vol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">Composition eligibility and rates are set by notification and change over time; our CA team confirms the current rules for you.</p>
      </Reveal>
    </section>
  );
}

function Included() {
  return (
    <section id="included" className="scroll-mt-40">
      <Heading label="What's Included" title="What You Get With GST Registration" />
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
      <Heading label="Who It's For" title="Who We Help With GST Registration" />
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

function Documents() {
  const keys = Object.keys(DOC_SETS);
  const [tab, setTab] = useState(keys[0]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const set = DOC_SETS[tab];
  const done = set.docs.filter((d) => checked[tab + d]).length;
  const pct = Math.round((done / set.docs.length) * 100);

  return (
    <section id="documents" className="scroll-mt-40">
      <Heading label="Documents" title="Documents Required for GST Registration" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Choose your business type to see the exact checklist. Names on your PAN, Aadhaar and bank records should match, and
          address proof should be recent. If your premises are rented, you will need the rent agreement and the owner&apos;s NOC.
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
      <Heading label="Process" title="How GST Registration Works, Step by Step" />
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
      <Heading label="Timeline & Fees" title="Timeline, Cost & Why Applications Get Rejected" />
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Reveal>
          <div className="h-full bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does it take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              When documents are complete and Aadhaar authentication succeeds, GST registration is often granted within roughly
              three to seven working days. If the tax officer raises a query or a physical verification is needed, it can take
              longer. We prepare the file carefully, track the application and respond to any query on your behalf.
            </p>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="h-full bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">💰</p>
            <h3 className="font-bold text-[#00416a] mb-2">What does it cost?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              There is no government fee for GST registration on the portal. The cost is Taxvio&apos;s professional fee, which
              depends on your constitution, the number of places of business and the complexity of your case. You receive a
              written, itemised quote before we start, with no add-ons introduced once the work is underway.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal><h3 className="font-extrabold text-[#00416a] text-xl mb-4">Why applications get queried or rejected</h3></Reveal>
      <div className="space-y-3">
        {REJECTIONS.map((m, i) => (
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
      <Heading label="After GSTIN" title="Your Post-Registration GST Checklist" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Getting the GSTIN is the start of your GST journey. These are the steps that follow, and the ones most often missed by
          first-time registrants. Rules and dates follow current GST law and may change by notification; our team confirms
          what applies to your business. Not registering when you should is costly — operating without a required registration
          can attract a penalty, along with tax and interest on past supplies.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {AFTER.map((c, i) => (
          <Reveal key={c.t} delay={i * 60}>
            <div className="h-full bg-white border border-gray-200 border-l-4 border-l-[#00416a] rounded-2xl p-5 hover:shadow-lg transition-all">
              <span className="inline-block text-[11px] font-bold text-[#00416a] uppercase tracking-wide bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full mb-2">{c.when}</span>
              <h3 className="font-bold text-[#00416a] mb-1.5">{c.t}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-6 text-sm text-gray-500">
          Need help after registration? Browse our <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link> for return filing, refunds and notice replies.
        </p>
      </Reveal>
    </section>
  );
}

function FAQs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="scroll-mt-40">
      <Heading label="FAQs" title="GST Registration — Frequently Asked Questions" />
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
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gst-registration").slice(0, 6);
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
        <div className="gr-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Get your GSTIN with a CA</h3>
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
          <div className="gr-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to get your GST registration?</h3>
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