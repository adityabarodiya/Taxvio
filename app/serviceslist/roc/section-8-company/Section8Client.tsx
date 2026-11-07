"use client";

// app/serviceslist/roc/section-8-company/Section8Client.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "Section 8 Company Registration";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "included", label: "What's Included" },
  { id: "compare", label: "Compare" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "fees", label: "Timeline & Fees" },
  { id: "after", label: "After Registration" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "A Section 8 company is a non-profit company incorporated under Section 8 of the Companies Act, 2013. It is meant for organisations whose purpose is to promote commerce, art, science, sports, education, research, social welfare, religion, charity, protection of the environment or a similar object. Unlike an ordinary company, it applies its profits and income to promoting those objects and does not pay dividends to its members. It is a separate legal entity, so it can own property, receive funds, employ people and sign contracts in its own name.",
  "For many NGOs and charitable institutions, a Section 8 company is the most credible structure available. It operates under the oversight of the Ministry of Corporate Affairs, keeps proper accounts, files annual returns and is audited, and that discipline is exactly what corporate funders, grant-making bodies and institutional donors look for. Many organisations choose it specifically because they plan to raise money from companies under CSR programmes or from large donors.",
  "The path to registration is different from an ordinary private limited company, because the MCA first issues a licence confirming that the proposed company meets the conditions of Section 8. The objects statement, the draft MOA and AOA, and the estimated income and expenditure all need to be consistent. Taxvio's CA-assisted team prepares the complete file — name approval, MOA and AOA drafting and the Section 8 licence application — and tells you clearly what to do after incorporation to unlock tax exemptions and donor benefits.",
];

const BENEFITS = [
  { icon: "🏛️", t: "Separate legal entity", d: "The organisation owns property, signs contracts and receives funds in its own name, independent of its founders." },
  { icon: "🤝", t: "Strong donor credibility", d: "Regulated, audited and publicly registered — which institutional donors and corporate funders generally prefer." },
  { icon: "🛡️", t: "Limited liability", d: "Members' liability is limited, so personal assets are separate from the organisation's obligations." },
  { icon: "🏢", t: "CSR & grant readiness", d: "With the right registrations, a Section 8 company can be eligible to receive CSR funds and institutional grants." },
  { icon: "🏷️", t: "Name without “Limited”", d: "A Section 8 company may omit “Limited” or “Private Limited” from its name, giving a charitable identity such as “Foundation”." },
  { icon: "♾️", t: "Perpetual succession", d: "The organisation continues even when directors or members change, so the mission outlives its founders." },
];

const FEATURES = [
  { title: "Name approval", note: "We check the proposed name against existing companies, LLPs and trademarks and suggest names that fit the nature of your organisation and MCA naming guidelines." },
  { title: "MOA & AOA drafting", note: "We draft the Memorandum and Articles with a clear objects clause, a no-dividend clause and the provisions the MCA expects from a Section 8 company." },
  { title: "License under Section 8", note: "We prepare and file the Section 8 licence application with the supporting statement of objects and estimated income and expenditure, and follow it up with the Registrar." },
];

const IDEAL = [
  { icon: "🌱", t: "NGOs", d: "Non-governmental organisations working in education, health, livelihood, environment or community development that want a formal and credible structure." },
  { icon: "🏫", t: "Charitable institutions", d: "Schools, foundations and charitable bodies that want to receive donations and grants and operate transparently." },
  { icon: "🏆", t: "Associations & chambers", d: "Trade bodies, sports associations, clubs and professional chambers that promote an industry or activity without distributing profit." },
  { icon: "🔬", t: "Research & cultural bodies", d: "Organisations promoting science, research, art or culture that need a structure suited to grants and institutional partnerships." },
];

const DOCS = [
  "PAN & Aadhaar of all directors",
  "Passport-size photograph of each director",
  "Email ID and mobile number of each director",
  "Address proof of directors (bank statement / utility bill)",
  "Registered office proof (recent electricity or utility bill)",
  "Rent agreement + owner's NOC (if premises are rented)",
  "2–3 proposed names, in order of preference",
  "Statement of proposed objects and activities",
  "Estimated income & expenditure for the next three years",
];

const STEPS = [
  { t: "Objects & structure check", d: "We understand your mission and confirm that a Section 8 company suits it. We settle the directors and members and the activities the organisation will carry out." },
  { t: "Digital signatures & name reservation", d: "Directors obtain Digital Signature Certificates (DSC). We then shortlist and reserve a suitable name, checking it against existing entities and trademarks first." },
  { t: "Draft MOA, AOA & licence documents", d: "We prepare the Memorandum, Articles, the statement of objects, estimated income and expenditure and the required declarations, written to satisfy the Section 8 conditions." },
  { t: "File the Section 8 licence application", d: "The incorporation filing and the Section 8 licence application are submitted to the MCA with director details and registered-office proof." },
  { t: "Respond to Registrar queries", d: "Licence applications often draw clarifications. We respond promptly and amend documents where required so the file keeps moving." },
  { t: "Licence, Certificate & handover", d: "On approval you receive the Section 8 licence and the Certificate of Incorporation. We then share a checklist for tax registrations and first-year compliance." },
];

const AFTER = [
  { when: "Within 30 days", t: "Auditor appointment (ADT-1)", d: "The first statutory auditor is generally appointed within 30 days of incorporation and notified to the ROC." },
  { when: "After incorporation", t: "Section 12A registration", d: "Apply for registration under Section 12A of the Income Tax Act so that the organisation's income can be treated as exempt, subject to conditions." },
  { when: "After incorporation", t: "Section 80G approval", d: "80G approval lets donors claim a deduction for their donations, which helps fundraising. It is applied for separately from incorporation." },
  { when: "If applicable", t: "CSR-1 & FCRA", d: "To receive corporate CSR funds, register on the CSR-1 form; to receive foreign contributions, FCRA registration or prior permission is required." },
  { when: "Every year", t: "Annual filings & AGM", d: "Financial statements (AOC-4), annual return (MGT-7), an AGM, director KYC and a statutory audit are due every year." },
  { when: "Every year", t: "Income tax return", d: "File the organisation's income tax return and keep proper records to support its claimed exemptions." },
];

const MISTAKES = [
  { t: "Vague or overly broad objects", d: "A loosely worded objects clause invites queries. State charitable objects clearly and specifically." },
  { t: "Assuming incorporation gives tax exemption", d: "Exemption and donor deductions require separate 12A and 80G registrations after incorporation." },
  { t: "Distributing surplus to members", d: "Surplus must be applied to the objects. Paying dividends or personal benefits can put the licence at risk." },
  { t: "Ignoring annual compliance", d: "Filings, AGM and audit are mandatory even when activity is low. Prolonged default can lead to action against the company and its directors." },
  { t: "Inconsistent projections", d: "The estimated income and expenditure must match the stated activities. Inconsistencies commonly trigger queries on the licence application." },
];

const COMPARE_ROWS = [
  { k: "Governing law", s8: "Companies Act, 2013", trust: "Indian Trusts Act / state laws", soc: "Societies Registration Act / state laws" },
  { k: "Regulator", s8: "MCA / Registrar of Companies", trust: "Sub-registrar / charity authorities", soc: "Registrar of Societies" },
  { k: "Level of oversight", s8: "Higher", trust: "Lower", soc: "Moderate" },
  { k: "Annual filings", s8: "ROC filings + audit", trust: "Mainly tax filings", soc: "Annual list/returns to Registrar" },
  { k: "Donor & CSR credibility", s8: "Generally strongest", trust: "Good", soc: "Good" },
  { k: "Setup effort", s8: "Higher (licence needed)", trust: "Lowest", soc: "Moderate" },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function Section8Client({ faqs }: { faqs: { q: string; a: string }[] }) {
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
      @keyframes s8-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes s8-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .s8-aurora { animation: s8-aurora 14s ease-in-out infinite; }
      .s8-float { animation: s8-float 7s ease-in-out infinite; }
      .s8-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .s8-reveal.s8-in { opacity: 1; transform: none; }
      .s8-hide-scroll::-webkit-scrollbar { display: none; }
      .s8-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .s8-aurora, .s8-float { animation: none !important; }
        .s8-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`s8-reveal ${shown ? "s8-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "Type", v: "Non-profit company" },
    { k: "Needs", v: "Section 8 licence" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="s8-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="s8-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">Section 8 Company</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            🌱 NGO &amp; Non-Profit Company
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            Section 8 Company Registration{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Build Your NGO on a Credible Foundation
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Formation of non-profit Section 8 companies for charitable and social objectives — name approval, MOA &amp; AOA
            drafting and the Section 8 licence, all reviewed by a CA.
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
          <div className="s8-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your NGO, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample progress view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Name approval", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "MOA, AOA & objects statement", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Section 8 licence application", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Certificate of Incorporation", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "12A & 80G registration", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto s8-hide-scroll">
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
      <Heading label="Overview" title="What Is a Section 8 Company?" />
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
      <Heading label="Benefits" title="Why Choose a Section 8 Company for Your NGO?" />
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
      <Heading label="What's Included" title="What You Get With Section 8 Registration" />
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

/** NGO structure picker + comparison table */
function Compare() {
  const [donors, setDonors] = useState<"corp" | "small" | null>(null);
  const [oversight, setOversight] = useState<"ok" | "light" | null>(null);
  const [scale, setScale] = useState<"big" | "local" | null>(null);

  const result = useMemo(() => {
    if (!donors || !oversight || !scale) return null;
    if (donors === "corp" && oversight === "ok") return { t: "Section 8 Company", d: "If you want corporate CSR funders and institutional credibility and accept stronger regulation, a Section 8 company is usually the best fit." };
    if (oversight === "light" && scale === "local") return { t: "Trust", d: "A local organisation that wants the lightest setup and compliance often starts with a trust." };
    if (scale === "local") return { t: "Society or Trust", d: "A membership-based body, or a local initiative with fewer regulatory demands, can work well as a society or a trust." };
    return { t: "Section 8 Company or Society", d: "A larger organisation can choose between a society and a Section 8 company, depending on donor expectations and the oversight it can manage." };
  }, [donors, oversight, scale]);

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
      <Heading label="Compare" title="Section 8 Company vs Trust vs Society" />

      <Reveal>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm mb-8">
          <p className="font-bold text-[#00416a] mb-4">🧭 Which NGO structure fits you? Three quick questions</p>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Who will fund your work?</p>
              <div className="flex flex-wrap gap-2"><Opt value="corp" current={donors} set={setDonors} label="Corporates / large donors" /><Opt value="small" current={donors} set={setDonors} label="Individuals / local donors" /></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">How much regulation are you comfortable with?</p>
              <div className="flex flex-wrap gap-2"><Opt value="ok" current={oversight} set={setOversight} label="Strong oversight is fine" /><Opt value="light" current={oversight} set={setOversight} label="Prefer lighter compliance" /></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">What is the planned scale?</p>
              <div className="flex flex-wrap gap-2"><Opt value="big" current={scale} set={setScale} label="State / national" /><Opt value="local" current={scale} set={setScale} label="Local / community" /></div>
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
          <p className="mt-4 text-xs text-gray-400">A starting guide only — your mission, funding sources and state laws decide the final choice.</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg bg-white">
          <table className="min-w-[700px] w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="px-4 py-4 bg-gray-50 rounded-tl-3xl" />
                <th className="px-4 py-4 text-left font-extrabold text-white bg-gradient-to-br from-[#00416a] to-[#0a6aa8]">Section 8 Company</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50">Trust</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-600 bg-gray-50 rounded-tr-3xl">Society</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r.k} className="group">
                  <td className="px-4 py-3.5 font-bold text-gray-800 border-t border-gray-100 group-hover:bg-gray-50">{r.k}</td>
                  <td className="px-4 py-3.5 font-semibold text-[#00416a] bg-sky-50/70 border-t border-[#00416a]/10">{r.s8}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.trust}</td>
                  <td className="px-4 py-3.5 text-gray-600 border-t border-gray-100 group-hover:bg-gray-50">{r.soc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Rules for trusts and societies vary by state, so treat this table as a general guide and confirm with your CA.
        </p>
      </Reveal>
    </section>
  );
}

function Who() {
  return (
    <section id="who" className="scroll-mt-40">
      <Heading label="Who It's For" title="Is a Section 8 Company Right for You?" />
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
      <Heading label="Documents" title="Documents Required for Section 8 Company Registration" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Directors&apos; identity and address proofs, proof of the registered office, and a clear statement of your objects
          and projected income and expenditure form the core of the file. Keep clear colour scans ready; a utility bill used
          as address proof should be recent, and rented premises need the owner&apos;s NOC.
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
      <Heading label="Process" title="How Section 8 Company Registration Works, Step by Step" />
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
              Section 8 registration usually takes longer than an ordinary company, because a licence application is reviewed
              before incorporation. Timelines depend on the completeness of documents, the consistency of the objects and
              projections, and the Registrar&apos;s review. Clarifications can add time, which is why we prepare a careful,
              consistent file before filing.
            </p>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="h-full bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">💰</p>
            <h3 className="font-bold text-[#00416a] mb-2">What does it cost?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The total has two parts: Taxvio&apos;s professional fee and government charges. Government costs — MCA filing fees and
              stamp duty — vary with your authorised capital and state, so they cannot be quoted accurately without those
              details. You receive a written, itemised quote before we start, with no add-ons introduced once the work is
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
      <Heading label="After Registration" title="Tax Registrations & Compliance for Your NGO" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Incorporation is the beginning, not the end. To claim tax exemptions, accept donations with deductions and qualify for
          CSR funds, a Section 8 company needs further registrations — and then recurring filings every year. Rules and dates
          follow current law and may change; our team confirms what applies to your organisation.
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
    </section>
  );
}

function FAQs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="scroll-mt-40">
      <Heading label="FAQs" title="Section 8 Company — Frequently Asked Questions" />
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
  const items = (roc?.services ?? []).filter((s) => s.slug !== "section-8-company").slice(0, 6);
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
        <div className="s8-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Register your NGO with a CA</h3>
          <p className="text-sm text-sky-100/85 leading-relaxed mb-5">Tell us your mission — a CA from our team will call you back with a clear process and a fixed quote.</p>
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
          <div className="s8-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to register your Section 8 company?</h3>
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