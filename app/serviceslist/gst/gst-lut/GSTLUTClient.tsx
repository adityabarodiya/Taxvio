"use client";

// app/serviceslist/gst/gst-lut/GSTLUTClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GST LUT Filing";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "planner", label: "Export Route Finder" },
  { id: "included", label: "What's Included" },
  { id: "validity", label: "Timing & Validity" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "mistakes", label: "Pitfalls" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "Exports of goods and services are treated as zero-rated supplies under GST. That means no tax is ultimately borne on the export, but there is a practical question: do you pay IGST on the export and then claim a refund, or do you export without paying IGST in the first place? Most exporters prefer the second route because it keeps working capital free. To use it, you must furnish a Letter of Undertaking (LUT) on the GST portal.",
  "A Letter of Undertaking is a declaration to the department, filed online in the prescribed form, that you will export within the prescribed time and comply with the conditions of the law. Once your LUT is accepted, you can issue export invoices without charging IGST, while still being eligible to claim a refund of input tax credit that accumulates on your purchases. The facility is generally available to registered exporters who meet the eligibility conditions, and it is typically furnished for each financial year.",
  "Taxvio's CA-assisted team takes care of the whole process. We check your eligibility, prepare the undertaking correctly, file it on the GST portal, follow up on the acknowledgement and remind you to renew it for the next financial year. You get a fixed quote before we begin, and we make sure the LUT is in place before your first export invoice, because that is where most exporters go wrong.",
];

const FEATURES = [
  { title: "Eligibility check", note: "We confirm that you are a registered person who can furnish an LUT, and check for conditions, such as past prosecution for tax offences above the prescribed amount, that would make you ineligible." },
  { title: "LUT preparation", note: "We prepare the undertaking with the correct details, financial year and signatory, and check that it matches your registration records." },
  { title: "Online filing", note: "We file the LUT on the GST portal on your behalf, using the registered authorised signatory, and confirm that it is submitted correctly." },
  { title: "Acknowledgement support", note: "We obtain and share the acknowledgement, guide you on referencing the LUT on export invoices, and help if the portal raises a query." },
];

const BENEFITS = [
  { icon: "💸", t: "Export without paying IGST", d: "Issue export invoices without IGST, so you do not block funds waiting for a refund." },
  { icon: "🔄", t: "Refund of accumulated credit", d: "Input tax credit that builds up on your purchases can still be claimed as a refund, subject to the rules." },
  { icon: "📈", t: "Better cash flow", d: "Money stays in your business instead of being locked up with the government after each shipment." },
  { icon: "🧾", t: "Cleaner export invoices", d: "Invoices correctly state the LUT, which avoids queries from customs, banks and buyers." },
  { icon: "⏰", t: "Never miss renewal", d: "We track the financial-year renewal so your next export is never held up." },
  { icon: "⚖️", t: "Stay compliant", d: "Exporting without a valid LUT can mean IGST liability with interest, which is avoidable." },
];

const IDEAL = [
  { icon: "🚢", t: "Goods exporters", d: "Manufacturers, traders and merchant exporters shipping goods out of India." },
  { icon: "💻", t: "Service exporters", d: "IT, consulting, design and other service providers billing overseas clients." },
  { icon: "🏭", t: "SEZ suppliers", d: "Businesses supplying to Special Economic Zone units or developers without IGST." },
];

type Route = { id: string; label: string; icon: string; docs: string[]; note: string };

const ROUTES: Route[] = [
  { id: "goods", label: "Goods exporter", icon: "🚢", docs: ["GSTIN and portal login access", "PAN of the business", "Importer-Exporter Code (IEC)", "Previous LUT acknowledgement, if any", "Authorised signatory details"], note: "Goods exports generally need an IEC along with GST registration for shipping and refund processes." },
  { id: "services", label: "Service exporter", icon: "💻", docs: ["GSTIN and portal login access", "PAN of the business", "Previous LUT acknowledgement, if any", "Sample export invoice or agreement with overseas client", "Authorised signatory details"], note: "Service exports must meet the conditions for export of services, including payment in convertible foreign exchange or permitted INR." },
  { id: "sez", label: "Supply to SEZ", icon: "🏭", docs: ["GSTIN and portal login access", "PAN of the business", "SEZ unit or developer details and approval", "Previous LUT acknowledgement, if any", "Authorised signatory details"], note: "Supplies to an SEZ unit or developer for authorised operations can also be made under LUT." },
];

const STEPS = [
  { t: "Eligibility consultation", d: "We understand what you export, where and how often, and confirm that you can furnish an LUT and which form applies." },
  { t: "Collect details & documents", d: "You share your GSTIN, PAN and details of any previous LUT. We check them against your registration records." },
  { t: "Prepare the undertaking", d: "We prepare the LUT for the correct financial year with the right signatory and declarations, and share it with you for approval." },
  { t: "File on the GST portal", d: "We file the LUT using your registered credentials or digital signature, as required, and confirm the submission." },
  { t: "Acknowledgement & invoice guidance", d: "You receive the acknowledgement and a note on how to mention the LUT on export invoices." },
  { t: "Renewal reminder", d: "We note the financial-year validity and remind you before the next April so exports continue without a break." },
];

const MISTAKES = [
  { t: "Exporting before the LUT is accepted", d: "An export made without a valid LUT can attract IGST liability with interest, which is avoidable with timely filing." },
  { t: "Forgetting annual renewal", d: "An LUT is generally furnished for each financial year, so a new one is needed as the year changes." },
  { t: "Wrong details or signatory", d: "Mismatches in name, GSTIN or signatory can lead to rejection or later queries." },
  { t: "Not mentioning the LUT on invoices", d: "Export invoices should reference the LUT, or banks and customs may raise questions." },
  { t: "Ignoring eligibility conditions", d: "Certain past tax offences can make a person ineligible; check before you plan exports around an LUT." },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GSTLUTClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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
          <Validity />
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
      @keyframes lt-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes lt-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .lt-aurora { animation: lt-aurora 14s ease-in-out infinite; }
      .lt-float { animation: lt-float 7s ease-in-out infinite; }
      .lt-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .lt-reveal.lt-in { opacity: 1; transform: none; }
      .lt-hide-scroll::-webkit-scrollbar { display: none; }
      .lt-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .lt-aurora, .lt-float { animation: none !important; }
        .lt-reveal { opacity: 1; transform: none; transition: none; }
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
    <div ref={ref} className={`lt-reveal ${shown ? "lt-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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
    { k: "For", v: "Goods & services" },
    { k: "Valid for", v: "Financial year" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="lt-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="lt-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
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
            <span className="text-white">GST LUT Filing</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            🚢 GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST LUT Filing{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Accurate, On Time, CA-Reviewed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Filing of Letter of Undertaking (LUT) for exporters to supply goods or services without payment of IGST — prepared and filed by a CA-led team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#planner" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Find My Route
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
          <div className="lt-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your LUT, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample status view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Eligibility checked", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "LUT prepared", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Filed on GST portal", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Acknowledgement", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Renewal reminder set", s: "Next", c: "bg-sky-100 text-sky-700" },
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
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto lt-hide-scroll">
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
      <Heading label="Overview" title="What Is GST LUT Filing?" />
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
      <Heading label="Benefits" title="Why Professional GST LUT Filing Pays Off" />
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
      <Heading label="What's Included" title="What You Get With GST LUT Filing" />
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
      <Heading label="Who It's For" title="Who Needs a GST LUT" />
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

type Supply = "goods" | "services" | "sez" | "domestic";

/** LUT vs pay-IGST route finder */
function Planner() {
  const [supply, setSupply] = useState<Supply | null>(null);
  const [barred, setBarred] = useState<boolean | null>(null);
  const [cash, setCash] = useState<boolean | null>(null);

  const result = useMemo(() => {
    if (!supply || barred === null || cash === null) return null;
    if (supply === "domestic") return { tone: "optional", t: "An LUT is not relevant for domestic supplies", d: "LUT applies to exports and supplies to SEZ units or developers. Domestic sales are taxed under the normal CGST/SGST or IGST rules." };
    if (barred) return { tone: "maybe", t: "You may not be eligible for an LUT", d: "Certain past prosecution for tax offences can bar the LUT route. You may need to furnish a bond or pay IGST and claim a refund. Our CA will check your position." };
    if (cash) return { tone: "must", t: "An LUT is likely the right route", d: "Furnishing an LUT lets you export without paying IGST, keeping your working capital free, while you can still claim a refund of accumulated input tax credit." };
    return { tone: "optional", t: "LUT is still usually worth having", d: "You may choose to pay IGST and claim a refund, but that blocks funds until the refund is granted. Most exporters prefer an LUT; we can talk through your case." };
  }, [supply, barred, cash]);

  const Opt = ({ on, set, label }: { on: boolean; set: () => void; label: string }) => (
    <button onClick={set} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${on ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}>{label}</button>
  );
  const tone = result?.tone === "must" ? "bg-emerald-50 border-emerald-200" : result?.tone === "maybe" ? "bg-amber-50 border-amber-200" : "bg-sky-50 border-sky-100";

  return (
    <section id="planner" className="scroll-mt-40">
      <Heading label="Export Route Finder" title="LUT or Pay IGST? Find Your Route in 20 Seconds" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Exporters have two broad options: export under an LUT without paying IGST, or pay IGST and claim a refund later.
          Answer three quick questions for an indication. Our CA confirms the right route for your business.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">What do you supply?</p>
              <div className="flex flex-wrap gap-2">
                <Opt on={supply === "goods"} set={() => setSupply("goods")} label="Export goods" />
                <Opt on={supply === "services"} set={() => setSupply("services")} label="Export services" />
                <Opt on={supply === "sez"} set={() => setSupply("sez")} label="Supply to SEZ" />
                <Opt on={supply === "domestic"} set={() => setSupply("domestic")} label="Only domestic" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Have you been prosecuted for a tax offence above the prescribed amount?</p>
              <div className="flex gap-2"><Opt on={barred === true} set={() => setBarred(true)} label="Yes / not sure" /><Opt on={barred === false} set={() => setBarred(false)} label="No" /></div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Do you want to avoid locking up cash in IGST?</p>
              <div className="flex gap-2"><Opt on={cash === true} set={() => setCash(true)} label="Yes" /><Opt on={cash === false} set={() => setCash(false)} label="Not a concern" /></div>
            </div>
          </div>
          {result && (
            <div className={`mt-6 rounded-2xl border p-5 ${tone}`}>
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">Indication</p>
              <p className="font-extrabold text-[#00416a] text-lg">{result.t}</p>
              <p className="text-sm text-gray-600 mt-1">{result.d}</p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">Confirm with a CA →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. Eligibility conditions are set by law and notification and are confirmed by our CA.</p>
        </div>
      </Reveal>
    </section>
  );
}

/** LUT timing & financial-year validity */
function Validity() {
  const [exportDate, setExportDate] = useState("");
  const [lutDate, setLutDate] = useState("");

  const fyOf = (s: string) => {
    const d = new Date(s + "T00:00:00");
    if (isNaN(d.getTime())) return null;
    const y = d.getMonth() >= 3 ? d.getFullYear() : d.getFullYear() - 1;
    return { y, label: `${y}-${String(y + 1).slice(2)}`, end: `31 Mar ${y + 1}` };
  };

  const info = useMemo(() => {
    const e = exportDate ? fyOf(exportDate) : null;
    if (!e) return null;
    if (!lutDate) return { tone: "info", t: `File your LUT for FY ${e.label} before this export`, d: `An LUT is generally furnished for a financial year, so one for FY ${e.label} would be valid until ${e.end}. File it before issuing the export invoice without IGST.` };
    const l = fyOf(lutDate);
    if (!l) return null;
    if (l.y !== e.y) return { tone: "bad", t: "This LUT may not cover your export", d: `Your LUT is for FY ${l.label} but the export falls in FY ${e.label}. A fresh LUT for FY ${e.label} would be needed.` };
    if (new Date(lutDate) > new Date(exportDate)) return { tone: "bad", t: "LUT filed after the export", d: "The export was made before the LUT was filed, which can create IGST liability with interest. Speak to our CA about how to regularise." };
    return { tone: "good", t: "Your LUT appears to be in time", d: `The LUT was filed before the export and falls in the same financial year (FY ${e.label}), valid until ${e.end}.` };
  }, [exportDate, lutDate]);

  const cls = info?.tone === "good" ? "bg-emerald-50 border-emerald-200" : info?.tone === "bad" ? "bg-red-50 border-red-200" : "bg-sky-50 border-sky-100";

  return (
    <section id="validity" className="scroll-mt-40">
      <Heading label="Timing & Validity" title="Is Your LUT Filed in Time? Check the Dates" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          The most common LUT problem is timing: exporting before the LUT is in place, or carrying over last year&apos;s LUT
          into a new financial year. Enter your dates to check. An LUT is generally furnished for a financial year, which runs
          from 1 April to 31 March.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Date of export invoice</span>
              <input type="date" value={exportDate} onChange={(e) => setExportDate(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Date your LUT was filed (optional)</span>
              <input type="date" value={lutDate} onChange={(e) => setLutDate(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
            </label>
          </div>
          {info && (
            <div className={`mt-5 rounded-2xl border p-5 ${cls}`}>
              <p className="text-xs uppercase tracking-widest text-[#00416a]/60 font-bold mb-1">Indication</p>
              <p className="font-extrabold text-[#00416a] text-lg">{info.t}</p>
              <p className="text-sm text-gray-700 mt-1">{info.d}</p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">File my LUT →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. Validity and conditions follow current GST rules; our CA confirms your position.</p>
        </div>
      </Reveal>
    </section>
  );
}

function Documents() {
  const [tab, setTab] = useState(ROUTES[0].id);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const cur = ROUTES.find((c) => c.id === tab) ?? ROUTES[0];
  const done = cur.docs.filter((d) => checked[tab + d]).length;
  const pct = Math.round((done / cur.docs.length) * 100);

  return (
    <section id="documents" className="scroll-mt-40">
      <Heading label="Documents" title="Documents Required for GST LUT Filing" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          The core requirements are your GSTIN, PAN and details of any previous LUT. Choose your type of export for the full checklist.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-4" role="tablist">
            {ROUTES.map((c) => (
              <button key={c.id} role="tab" aria-selected={tab === c.id} onClick={() => setTab(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${tab === c.id ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}>
                {c.icon} {c.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-4">{cur.note}</p>
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-[#00416a]">Your document checklist</p>
            <p className="text-sm font-semibold text-gray-500 tabular-nums">{done}/{cur.docs.length} ready</p>
          </div>
          <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden mb-5">
            <div className="h-full rounded-full bg-gradient-to-r from-[#00416a] to-emerald-500 transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <ul className="space-y-2.5">
            {cur.docs.map((d) => {
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
            <span className="flex-1 font-medium">{pct === 100 ? "🎉 You have everything on the list." : "Missing something? We'll tell you the easiest way to get it."}</span>
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
      <Heading label="Pitfalls" title="Common GST LUT Mistakes to Avoid" />
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
          Also see <Link href="/serviceslist/gst/gst-return" className="font-semibold text-[#00416a] hover:underline">GST return filing</Link> and all <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link> for export refunds and compliance.
        </p>
      </Reveal>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-40">
      <Heading label="Process" title="How Our GST LUT Filing Works" />
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
              There is generally no government fee for furnishing an LUT on the portal. Our professional fee depends on your type of export and whether you need several years or renewals, and you receive a written quote before we start.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does it take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Once documents are in order, filing is typically quick. Timelines for acknowledgement depend on the portal and any query raised, and we track it for you. File before your first export of the year.
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
      <Heading label="FAQs" title="GST LUT — Frequently Asked Questions" />
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
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gst-lut").slice(0, 6);
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
        <div className="lt-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Start exporting without IGST</h3>
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
          <div className="lt-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Ready to file your GST LUT?</h3>
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