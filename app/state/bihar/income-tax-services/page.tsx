// app/state/bihar/income-tax-services/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp,
  CheckCircle, Globe, FileText,
} from "lucide-react";
import { BIHAR_AREAS, BIHAR_REGIONS, slugifyArea } from "@/data/bihar-cities"; // ← adjust path if needed
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path if needed

const itCategory = serviceCategories.find((c) => c.slug === "income-tax")!;

// Icon per service slug, with a sane fallback so new services added to
// serviceCategories.ts later never break this page.
const SERVICE_ICONS: Record<string, string> = {
  "pan-card": "🪪",
  "tan-application": "🔢",
  "efiling-login-assistance": "🔐",
  "itr-salaried": "👤",
  "itr-proprietor": "🏪",
  "itr-firm-llp": "🤝",
  "itr-trust-company": "🏢",
  "revised-itr": "✏️",
  "belated-itr": "⏰",
  "itr-verification": "✅",
  "quarterly-tds": "📊",
  "quarterly-tcs": "🧾",
  "tds-certificate": "📜",
  "form-26as": "📑",
  "advance-tax-calculation": "🧮",
  "income-tax-refund": "💰",
  "income-tax-notice": "📨",
  "income-tax-audit": "🔍",
  "income-tax-scrutiny": "⚖️",
  "tax-appeal-filing": "👨‍⚖️",
  "rectification-request": "🔧",
  "tax-planning": "📈",
  "12a-application": "🤝",
  "80g-application": "💚",
  "15g-15h": "📋",
  "lower-tds-certificate": "📉",
  "tax-residency-certificate": "🌍",
  "nri-tax-filing": "✈️",
  "capital-gains-computation": "🏠",
  "cryptocurrency-tax": "₿",
};
const DEFAULT_SERVICE_ICON = "📄";

const CARD_COLORS = [
  "bg-gray-50 border-gray-100", "bg-orange-50 border-orange-100", "bg-blue-50 border-blue-100",
  "bg-emerald-50 border-emerald-100", "bg-violet-50 border-violet-100", "bg-amber-50 border-amber-100",
  "bg-teal-50 border-teal-100", "bg-rose-50 border-rose-100", "bg-indigo-50 border-indigo-100",
  "bg-sky-50 border-sky-100", "bg-cyan-50 border-cyan-100", "bg-fuchsia-50 border-fuchsia-100",
  "bg-pink-50 border-pink-100", "bg-lime-50 border-lime-100", "bg-red-50 border-red-100",
];

/* ─── SEO Sections ──────────────────────────────────────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "Income Tax Return Filing Services Across Bihar",
    body: `Bihar is home to one of India's largest and most diverse taxpayer bases — spanning salaried government employees across the state capital Patna, district collectors' offices, and BSNL/Rail/Police departments; wholesale and retail traders in Patna's Hathwa Market, Gandhi Maidan area, and Boring Road commercial corridor; agricultural produce traders and food processors in Muzaffarpur, Darbhanga, and Purnia; silk manufacturers and weavers in Bhagalpur; religious tourism and handicraft businesses in Gaya and Rajgir; and a fast-growing professional services and consulting economy spread across all 38 districts. Income tax compliance needs across Bihar vary significantly by area — a salaried BPSC officer in Patna City has very different filing requirements from a silk trader in Bhagalpur or an agricultural commission agent in Purnia.

Taxvio provides comprehensive income tax return filing across all 200+ areas of Bihar — from major commercial centres like Patna, Muzaffarpur, Gaya, and Bhagalpur, to established district headquarters like Darbhanga, Purnia, Arrah, and Chapra, down to tehsil-level towns and emerging business centres across Magadh, Tirhut, Kosi, Mithila, and Saran divisions. Our CA team handles every ITR category — ITR-1/ITR-2 for salaried individuals and pensioners, ITR-3/ITR-4 for proprietors and professionals under presumptive taxation, ITR-5 for partnership firms and LLPs, and ITR-6/ITR-7 for companies and trusts — with deep familiarity of Bihar's specific income tax ward and circle jurisdictions under the Patna Principal CCIT region.`,
  },
  {
    heading: "TDS Compliance, Tax Audit & Scrutiny Defence for Bihar Businesses",
    body: `Bihar's expanding employer and business landscape generates a significant and growing volume of TDS obligations — from government departments and PSUs deducting salary TDS (Form 24Q) to trading firms, construction contractors, and professional practices making payments above notified thresholds that trigger non-salary TDS (Form 26Q). Bihar's agrarian economy also creates unique TDS compliance scenarios: commission agents paying farmers and mandis, rice mill owners, jute processors, and food processors all have sector-specific TDS obligations that demand accurate quarterly filing and challan reconciliation to avoid TRACES-generated defaults and associated interest under Section 201(1A).

Taxvio's income tax audit service covers Bihar businesses that cross the Section 44AB thresholds — turnover above ₹1 crore (₹10 crore for 95%+ digital transactions) for business income, or ₹50 lakh gross receipts for professionals — handling the complete audit exercise, books of accounts review, Form 3CA/3CB and Form 3CD preparation across all 41 clauses, and timely e-filing before the October 31 due date. For Bihar taxpayers facing income tax scrutiny — Section 143(1) intimations, 143(2) detailed scrutiny notices, or 148 reassessment proceedings — our CA team provides structured notice analysis, documented and fact-based replies, and personal or authorised representative coordination with the jurisdictional Assessing Officer at the Patna, Muzaffarpur, Gaya, or Bhagalpur income tax ranges.`,
  },
  {
    heading: "Why Bihar Taxpayers Across Every District Choose Taxvio",
    body: `Bihar's income tax landscape spans an extraordinary range of taxpayer profiles — senior IAS/IPS officers and central government employees in Patna's administrative districts, private sector professionals in Boring Road and Bailey Road business corridors, wholesale grain and oilseed traders in Patna's Mithapur Mandi, rice and wheat millers across Samastipur and Begusarai, sugarcane farmers and sugar mill owners in Champaran, religious trust administrators managing dharmshala and temple trusts in Gaya and Vaishali, and NGOs and educational trusts operating across Bihar's extensive rural social sector. Each profile carries distinct deduction opportunities, compliance triggers, and scrutiny risk areas that a standardised approach to ITR filing inevitably misses.

Taxvio's CA team has filed returns, handled TDS defaults, and represented clients in notices across nearly every Bihar income tax ward — from the Patna City and Patna Urban circles to range offices in Muzaffarpur, Gaya, Bhagalpur, Darbhanga, and Purnia — giving us practical, first-hand familiarity with local Assessing Officer query patterns, documentation expectations, and processing timelines unique to the Bihar region. Our form-first, 100% online service model means a retired government employee in Chapra and a textile exporter in Bhagalpur receive the exact same CA-quality, same-day response — with transparent upfront pricing and zero office visits required for any of our income tax services.`,
  },
];

const TIER1_AREAS = BIHAR_AREAS.filter((c) => c.tier === 1);
const TIER2_AREAS = BIHAR_AREAS.filter((c) => c.tier === 2);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bihar Areas — Income Tax Services | Taxvio",
  numberOfItems: BIHAR_AREAS.length,
  itemListElement: BIHAR_AREAS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — Income Tax Services`,
    url: `https://www.taxvio.in/state/bihar/income-tax-services/${slugifyArea(c.name)}`,
  })),
};

/* ─── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Income Tax Return Filing & ITR Services Across Bihar | Taxvio",
  description:
    `Taxvio provides expert ITR filing for salaried, proprietors, firms & companies; TDS/TCS returns; income tax audit; scrutiny reply; 12A/80G registration; PAN/TAN; and ${itCategory.services.length} other income tax services across 200+ areas in Bihar — Patna, Gaya, Bhagalpur, Muzaffarpur, Darbhanga, Purnia & more. CA-assisted, 100% online, starting ₹199.`,
  keywords: [
    "income tax return filing Bihar", "ITR filing Bihar areas", "income tax consultant Bihar",
    "TDS return filing Bihar", "income tax audit Bihar", "PAN card Bihar", "TAN application Bihar",
    "12A 80G registration Bihar", "income tax scrutiny notice Bihar", "Taxvio Bihar income tax",
    "ITR filing Patna", "ITR filing Gaya Bhagalpur Muzaffarpur",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/bihar/income-tax-services" },
  openGraph: {
    title: "Income Tax Services Across 200+ Bihar Areas | Taxvio",
    description: "Expert ITR filing, TDS/TCS returns, income tax audit, scrutiny reply & 12A/80G across all Bihar areas — CA-assisted, from ₹199.",
    url: "https://www.taxvio.in/state/bihar/income-tax-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Services Across Bihar | Taxvio",
    description: "ITR filing, TDS returns, audit & scrutiny reply across 200+ Bihar areas — from ₹199.",
  },
  robots: { index: true, follow: true },
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function MajorAreaCard({ name, district, region }: { name: string; district: string; region: string }) {
  return (
    <Link href={`/state/bihar/income-tax-services/${slugifyArea(name)}`}
      aria-label={`Income tax services in ${name}, Bihar`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
      <div className="relative p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">🏙️</span>
          <ArrowRight size={15} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5" />
        </div>
        <p className="font-bold text-base text-white leading-tight group-hover:text-sky-200 transition-colors">{name}</p>
        <p className="text-[11px] text-white/50 mt-0.5">{district} · {region}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {["ITR", "TDS", "Audit", "12A"].map((t) => (
            <span key={t} className="text-[10px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function AreaLink({ name }: { name: string }) {
  return (
    <Link href={`/state/bihar/income-tax-services/${slugifyArea(name)}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150">
      <MapPin size={9} className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors" />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function BiharIncomeTaxIndexPage() {
  return (
    <>
      <Script id="bihar-it-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">Income Tax Services — Bihar</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Bihar · 200+ Areas · Income Tax Only · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Services
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Across Every Bihar Area
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert <strong className="text-white">ITR filing</strong>,{" "}
                  <strong className="text-white">TDS / TCS returns</strong>, tax audit, scrutiny reply,
                  12A/80G, PAN/TAN, and {itCategory.services.length - 7} other services across{" "}
                  <strong className="text-white">{BIHAR_AREAS.length}+</strong> Bihar towns &amp; districts.
                  CA-assisted, starting <strong className="text-sky-300">₹199</strong>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { val: `${BIHAR_AREAS.length}+`, label: "Bihar Areas Covered", icon: Globe },
                    { val: "3,800+", label: "Bihar Clients Served", icon: Users },
                    { val: "₹199", label: "Starting Price", icon: TrendingUp },
                  ].map(({ val, label, icon: Icon }) => (
                    <div key={label} className="text-center rounded-2xl py-4 px-2"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      <Icon size={14} className="text-sky-300 mx-auto mb-1.5" />
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right service grid — live, pulled from serviceCategories */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">Income tax services in every Bihar area</p>
                <div className="grid grid-cols-2 gap-3">
                  {["itr-salaried", "itr-proprietor", "quarterly-tds", "income-tax-audit", "12a-application", "15g-15h"].map((slug) => {
                    const s = itCategory.services.find((sv) => sv.slug === slug);
                    if (!s) return null;
                    return (
                      <div key={slug} className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}>
                        <span className="text-lg shrink-0">{SERVICE_ICONS[slug] ?? DEFAULT_SERVICE_ICON}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white/85 truncate">{s.title}</p>
                          <p className="text-[10px] text-sky-300 font-semibold truncate">{s.shortDescription}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-white/30 text-center">100% online · No office visit · CA-certified</p>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, label: "CA-Certified Team" },
                { icon: Star,       label: "4.9★ Rating" },
                { icon: Zap,        label: "Same-Day Response" },
                { icon: Shield,     label: "100% Secure" },
                { icon: FileText,   label: "Free Enquiry Form" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-sky-400 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
          </svg>
        </section>

        {/* ════════ MAJOR AREAS ════════ */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">Major Commercial Hubs</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">Income Tax Services in Key Bihar Cities</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_AREAS.map((c) => (
                <MajorAreaCard key={c.name} name={c.name} district={c.district} region={c.region} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIER-2 AREAS ════════ */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-blue-400 to-indigo-600" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">District Headquarters</p>
                <h2 className="text-xl font-extrabold text-gray-800">ITR Filing in Bihar District Towns</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_AREAS.slice(0, 30).map((c) => (
                <Link key={c.name} href={`/state/bihar/income-tax-services/${slugifyArea(c.name)}`}
                  className="group flex items-center gap-2.5 p-3.5 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm hover:bg-white transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                    <MapPin size={13} className="text-[#00416a] group-hover:text-white transition-all" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-800 group-hover:text-[#00416a] transition truncate">{c.name}</p>
                    <p className="text-[10px] text-gray-400 truncate">{c.district}</p>
                  </div>
                  <ArrowRight size={11} className="ml-auto shrink-0 text-gray-300 group-hover:text-[#00416a] transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ALL AREAS BY REGION ════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All Bihar Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Income Tax Services — All Bihar Areas by Division
              </h2>
            </div>
            <div className="space-y-4">
              {Object.entries(BIHAR_REGIONS).map(([region]) => {
                const regionAreas = BIHAR_AREAS.filter((c) => c.region === region);
                if (!regionAreas.length) return null;
                return (
                  <div key={region} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-[#00416a] to-[#005a90] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-sky-300 shrink-0" />{region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionAreas.length} areas
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionAreas.map((c) => <AreaLink key={c.name} name={c.name} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ IT SERVICES GRID — live from serviceCategories ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Income Tax Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                All {itCategory.services.length} Income Tax Services Available Across Every Bihar Area
              </h2>
              <p className="text-gray-500 mt-2 text-sm">Every service below is available across all {BIHAR_AREAS.length}+ Bihar areas — 100% online, CA-assisted.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {itCategory.services.map((service, i) => (
                <Link key={service.slug} href={`/serviceslist/income-tax/${service.slug}`}
                  className={`group relative flex flex-col p-5 bg-white border ${CARD_COLORS[i % CARD_COLORS.length].split(" ")[1]} rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.05]"
                    style={{ background: "linear-gradient(135deg,#00416a,#0ea5e9)" }} />
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${CARD_COLORS[i % CARD_COLORS.length]} border flex items-center justify-center text-xl shrink-0`}>
                      {SERVICE_ICONS[service.slug] ?? DEFAULT_SERVICE_ICON}
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#00416a] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors mb-3">{service.title}</h3>
                  <ul className="space-y-1.5 mt-auto">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-[11px] text-gray-500">
                        <CheckCircle size={10} className="text-emerald-500 shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ SEO CONTENT ════════ */}
        <section className="py-20 bg-[#f8fbfd] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4">{heading}</h2>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    {body.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ TAG CLOUD ════════ */}
        <section className="py-16 bg-[#00416a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">All Bihar Areas — Income Tax Services</h2>
              <p className="text-white/55 text-sm mt-2">Click your area for dedicated ITR filing, TDS returns &amp; tax compliance services</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {BIHAR_AREAS.map((c, i) => (
                <Link key={`${c.name}-${i}`}
                  href={`/state/bihar/income-tax-services/${slugifyArea(c.name)}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#00416a]"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}>
                  <MapPin size={9} className="text-sky-400 group-hover:text-[#00416a] shrink-0 transition-colors" />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
                    <Zap size={11} className="text-sky-300" /> Ready to File?
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    ITR Filing &amp; Tax Services — Wherever You Are in Bihar
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day response. Our CA team serves every Bihar district — Patna to Purnia, Bhagalpur to Champaran. Starting ₹199.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}