"use client";

// app/serviceslist/roc/llp-formation/Llpformationclient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "LLP Registration";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "included", label: "What's Included" },
  { id: "compare", label: "Compare" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "fees", label: "Timeline & Fees" },
  { id: "compliance", label: "Annual Compliance" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "A Limited Liability Partnership (LLP) combines the flexibility of a partnership with the protection of limited liability. It is registered under the LLP Act, 2008, and is a separate legal entity: it can own property, enter contracts and sue or be sued in its own name. Partners are not personally liable for the LLP's debts beyond their agreed contribution, and are not liable for the wrongful acts of other partners, although each partner remains responsible for their own actions.",
  "That balance makes the LLP a popular choice for professionals such as chartered accountants, lawyers, architects and consultants, and for small and family businesses that want credibility and liability protection without the heavier compliance of a private limited company. There is no minimum capital requirement, no cap on the number of partners, and the internal rules are set by a private LLP agreement instead of rigid statutory articles.",
  "Registration is filed online with the Ministry of Corporate Affairs through the FiLLiP form. Small mistakes — a name that conflicts with an existing entity or trademark, a loosely drafted LLP agreement, or registered-office papers that do not match — are what usually bring queries from the Registrar. Taxvio's CA-assisted team handles name reservation, LLP agreement drafting, filing and the incorporation certificate, and tells you clearly what must be filed after registration.",
];

const BENEFITS = [
  { icon: "🛡️", t: "Limited liability", d: "Partners' personal assets are protected beyond their contribution. Liability for the LLP's debts is limited to the LLP's own assets." },
  { icon: "🏛️", t: "Separate legal entity", d: "The LLP holds assets and contracts in its own name and continues even when partners change." },
  { icon: "🧾", t: "Lighter compliance", d: "No board meetings or AGMs are required. Annual filings are fewer than for a company." },
  { icon: "💸", t: "Tax-efficient structure", d: "The LLP is taxed as a firm, and the partners' share of profit is not taxed again in their hands." },
  { icon: "🤝", t: "Flexible internal rules", d: "Profit sharing, roles and exit terms are set by the partners in their LLP agreement." },
  { icon: "♾️", t: "No limit on partners", d: "There is no upper limit on partners, so the firm can grow its partnership without restructuring." },
];

const FEATURES = [
  { title: "Name reservation", note: "We check availability against existing LLPs, companies and trademarks, then reserve a compliant name ending in “LLP” so the filing is not rejected on naming grounds." },
  { title: "LLP agreement drafting", note: "We draft an agreement tailored to your partners: contributions, profit-sharing ratio, roles of designated partners, decision-making, admission, retirement and exit." },
  { title: "Incorporation certificate", note: "On approval the Registrar issues your Certificate of Incorporation with the LLP Identification Number (LLPIN), the legal proof that your LLP exists." },
];

const IDEAL = [
  { icon: "👩‍⚖️", t: "Professionals", d: "Chartered accountants, lawyers, architects, consultants and other professionals commonly practise through an LLP to gain a firm identity and liability protection." },
  { icon: "🏪", t: "Small businesses", d: "Family businesses and small trading or service firms get a credible structure with lighter compliance than a company." },
  { icon: "🔄", t: "Converting firms", d: "Existing partnership firms often convert to an LLP to add limited liability without rebuilding the business." },
  { icon: "🌐", t: "Joint ventures", d: "Two or more parties who want to share profits and control under their own terms can use an LLP agreement as the rulebook." },
];

const DOCS = [
  "PAN & Aadhaar of all partners",
  "Passport-size photograph of each partner",
  "Email ID and mobile number of each partner",
  "Address proof of partners (bank statement / utility bill)",
  "Registered office proof (recent electricity or utility bill)",
  "Rent agreement + owner's NOC (if premises are rented)",
  "2 proposed LLP names, in order of preference",
  "Contribution amount and profit-sharing ratio of each partner",
];

const STEPS = [
  { t: "Structure & partner check", d: "We confirm an LLP suits your plan and settle the partners. At least two designated partners are needed, and at least one must be resident in India." },
  { t: "Digital signatures & DIN", d: "Designated partners obtain Digital Signature Certificates (DSC) and a Director Identification Number (DIN) where not already held." },
  { t: "Name reservation", d: "We shortlist names, check them against existing LLPs, companies and trademarks, and reserve the one that fits MCA naming guidelines." },
  { t: "File FiLLiP with the MCA", d: "The incorporation form is filed with partner details, registered-office proof and consents, along with linked applications such as PAN and TAN." },
  { t: "Incorporation certificate", d: "If the Registrar raises a query, we respond right away. On approval you receive the Certificate of Incorporation with your LLPIN." },
  { t: "LLP agreement filing", d: "The finalised LLP agreement is signed on stamp paper as required in your state and filed with the Registrar within 30 days of incorporation." },
];

const COMPLIANCE = [
  { when: "Within 30 days", t: "LLP agreement (Form 3)", d: "File the signed LLP agreement with the Registrar within 30 days of incorporation. Changes later are filed on the prescribed form." },
  { when: "30 May", t: "Annual return (Form 11)", d: "Filed every year, generally within 60 days of the financial year-end, whether or not the LLP did business." },
  { when: "30 October", t: "Statement of account (Form 8)", d: "A statement of account and solvency, generally due within 30 days of the end of six months from year-end." },
  { when: "As per limits", t: "Tax audit & ITR", d: "An LLP files its income tax return each year. An audit applies when turnover or contribution crosses the prescribed limits." },
  { when: "Each year", t: "DIN KYC", d: "Designated partners complete DIN KYC every year to keep their DIN active." },
  { when: "Within 30 days", t: "Change of partners (Form 4)", d: "Admission, retirement or any change in partners or details must be reported within the prescribed time." },
];

const MISTAKES = [
  { t: "Relying on the default LLP agreement", d: "Without a tailored agreement, the LLP Act's default rules apply, which rarely match how partners actually want to share profits and make decisions." },
  { t: "Missing the 30-day agreement filing", d: "The LLP agreement must be filed within 30 days of incorporation. Late filing means additional fees." },
  { t: "Treating a dormant LLP as exempt", d: "Form 11 and Form 8 are mandatory even with zero turnover, and late fees run per day." },
  { t: "Picking a name that conflicts", d: "Names too similar to existing entities or trademarks are rejected, costing time and fees." },
  { t: "Unclear partner roles", d: "Vague roles and exit terms cause disputes. Define designated partners, authority and exit clearly in the agreement." },
];

const COMPARE_ROWS = [
  { k: "Legal status", llp: "Separate legal entity", pvt: "Separate legal entity", part: "Not a separate entity", prop: "Same as the owner" },
  { k: "Liability", llp: "Limited to contribution", pvt: "Limited to shares", part: "Unlimited", prop: "Unlimited" },
  { k: "Minimum members", llp: "2 partners", pvt: "2 directors, 2 shareholders", part: "2 partners", prop: "1 owner" },
  { k: "Equity fundraising", llp: "Limited (no shares)", pvt: "Best suited", part: "Not possible", prop: "Not possible" },
  { k: "Compliance load", llp: "Moderate", pvt: "Higher", part: "Low", prop: "Lowest" },
  { k: "Audit", llp: "Only above prescribed limits", pvt: "Statutory audit required", part: "Only if tax audit applies", prop: "Only if tax audit applies" },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function LlpFormationClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
    <main className="bg-slate-50 text-gray-800 overflow-x-hidden">
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
      @keyframes ll-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes ll-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .ll-aurora { animation: ll-aurora 14s ease-in-out infinite; }
      .ll-float { animation: ll-float 7s ease-in-out infinite; }
      .ll-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .ll-reveal.ll-in { opacity: 1; transform: none; }
      .ll-hide-scroll::-webkit-scrollbar { display: none; }
      .ll-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .ll-aurora, .ll-float { animation: none !important; }
        .ll-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`ll-reveal ${shown ? "ll-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Minimum", v: "2 designated partners" },
    { k: "Capital", v: "No minimum required" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="ll-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="ll-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">LLP Registration</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            🤝 LLP Incorporation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            LLP Registration{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Limited Liability, Light Compliance
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Professional LLP registration services with MCA compliance and documentation support — name reservation, LLP
            agreement drafting and your incorporation certificate, all reviewed by a CA.
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
          <div className="ll-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your LLP, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample progress view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Name reservation", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "LLP agreement drafting", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "FiLLiP filing", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Incorporation certificate", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Agreement filing (30 days)", s: "Next", c: "bg-sky-100 text-sky-700" },
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
    <div className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3">
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto ll-hide-scroll">
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
    <section id="overview" className="scroll-mt-28">
      <Heading label="Overview" title="What Is a Limited Liability Partnership (LLP)?" />
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
    <section id="benefits" className="scroll-mt-28">
      <Heading label="Benefits" title="Why Choose an LLP?" />
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
    <section id="included" className="scroll-mt-28">
      <Heading label="What's Included" title="What You Get With LLP Registration" />
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

/** Profit-share splitter + comparison table */
function Compare() {
  const [profit, setProfit] = useState(1000000);
  const [shares, setShares] = useState<number[]>([50, 50]);
  const total = shares.reduce((a, b) => a + b, 0);
  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <section id="compare" className="scroll-mt-28">
      <Heading label="Compare" title="LLP vs Private Limited vs Partnership vs Proprietorship" />

      <Reveal>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm mb-8">
          <p className="font-bold text-[#00416a] mb-1">🧮 Profit-share splitter</p>
          <p className="text-sm text-gray-500 mb-5">See how an illustrative profit would be divided under your planned ratio. Your final ratio is set in the LLP agreement.</p>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Illustrative annual profit</label>
          <input
            type="number"
            min={0}
            value={profit}
            onChange={(e) => setProfit(Math.max(0, Number(e.target.value) || 0))}
            className="w-full sm:w-72 rounded-xl border border-gray-300 px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#00416a]/15 focus:border-[#00416a]"
          />
          <div className="mt-5 space-y-3">
            {shares.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-24 text-sm font-semibold text-[#00416a]">Partner {i + 1}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={s}
                  onChange={(e) => setShares((arr) => arr.map((v, j) => (j === i ? Number(e.target.value) : v)))}
                  className="flex-1 accent-[#00416a]"
                />
                <span className="w-12 text-right text-sm font-bold tabular-nums">{s}%</span>
                <span className="w-28 text-right text-sm font-extrabold text-[#00416a] tabular-nums">{fmt((profit * s) / 100)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShares((a) => (a.length < 5 ? [...a, 0] : a))}
              className="text-sm font-semibold text-[#00416a] border border-[#00416a]/25 px-3 py-1.5 rounded-lg hover:bg-[#00416a]/5 transition"
            >
              + Add partner
            </button>
            {shares.length > 2 && (
              <button
                onClick={() => setShares((a) => a.slice(0, -1))}
                className="text-sm font-semibold text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition"
              >
                − Remove
              </button>
            )}
            <span className={`text-sm font-bold ml-auto ${total === 100 ? "text-emerald-600" : "text-amber-600"}`}>
              Total: {total}% {total === 100 ? "✓" : "(should add up to 100%)"}
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg bg-white">
          <table className="min-w-[760px] w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="px-4 py-4 bg-gray-50 rounded-tl-3xl" />
                <th className="px-4 py-4 text-left font-extrabold text-white bg-gradient-to-br from-[#00416a] to-[#0a6aa8]">LLP</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50">Private Limited</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50">Partnership</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50 rounded-tr-3xl">Proprietorship</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r.k} className="group">
                  <td className="px-4 py-3.5 font-bold text-gray-800 border-t border-gray-100 group-hover:bg-gray-50">{r.k}</td>
                  <td className="px-4 py-3.5 font-semibold text-[#00416a] bg-sky-50/70 border-t border-[#00416a]/10">{r.llp}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.pvt}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.part}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.prop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Planning to raise investor equity? A <Link href="/serviceslist/roc/private-limited-formation" className="font-semibold text-[#00416a] hover:underline">private limited company</Link> is usually the better fit.
        </p>
      </Reveal>
    </section>
  );
}

function Who() {
  return (
    <section id="who" className="scroll-mt-28">
      <Heading label="Who It's For" title="Is an LLP the Right Structure for You?" />
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
    <section id="documents" className="scroll-mt-28">
      <Heading label="Documents" title="Documents Required for LLP Registration" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Partners&apos; identity and address proofs, plus proof of the registered office, form the core of the file. Keep clear
          colour scans ready; a utility bill used as address proof should be recent, and rented or shared premises need the
          owner&apos;s NOC. Foreign partners need passport-based documents, which we will guide you on.
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
    <section id="process" className="scroll-mt-28">
      <Heading label="Process" title="How LLP Registration Works, Step by Step" />
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
    <section id="fees" className="scroll-mt-28">
      <Heading label="Timeline & Fees" title="Timeline, Cost & Mistakes to Avoid" />
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Reveal>
          <div className="h-full bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does it take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Timelines depend mainly on how complete your documents are and how quickly the Registrar processes the application.
              When documents are in order and the name is accepted at the first attempt, registration is usually completed in
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
              The total has two parts: Taxvio&apos;s professional fee and government charges. Government costs — MCA filing fees
              and stamp duty on the LLP agreement — vary with the partners&apos; contribution and your state, so they cannot be
              quoted accurately without those details. You receive a written, itemised quote before we start, with no add-ons
              introduced once the work is underway.
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
    <section id="compliance" className="scroll-mt-28">
      <Heading label="Annual Compliance" title="LLP Compliance Calendar After Registration" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Registration is the beginning of your compliance, not the end. These are the recurring and event-based filings an LLP
          carries. Dates follow current MCA rules and may be extended by notification; our team confirms the applicable due
          dates for your LLP.
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
    <section id="faqs" className="scroll-mt-28">
      <Heading label="FAQs" title="LLP Registration — Frequently Asked Questions" />
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
  const items = (roc?.services ?? []).filter((s) => s.slug !== "llp-formation").slice(0, 6);
  if (!items.length) return null;
  return (
    <section className="scroll-mt-28">
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
    <div className="sticky top-24 space-y-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white p-6 shadow-xl">
        <div className="ll-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Register your LLP with a CA</h3>
          <p className="text-sm text-sky-100/85 leading-relaxed mb-5">Tell us about your partners and plan — a CA from our team will call you back with a clear process and a fixed quote.</p>
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
          <div className="ll-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to register your LLP?</h3>
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