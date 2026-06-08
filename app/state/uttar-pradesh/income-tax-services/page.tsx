// app/state/uttar-pradesh/income-tax-services/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  Globe, CheckCircle, Receipt, Calculator, Building2,
} from "lucide-react";
import { UP_CITIES, UP_REGIONS, slugifyCity } from "@/data/up-gst-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Income Tax Return Filing & Tax Services Across Uttar Pradesh | Taxvio",
  description:
    "Taxvio provides expert ITR filing for salaried, proprietors, firms, LLPs & companies, TDS/TCS returns, tax audit, 12A/80G registration, and income tax scrutiny services across 800+ cities in Uttar Pradesh. CA-assisted, 100% online, starting ₹499.",
  keywords: [
    "income tax return filing Uttar Pradesh",
    "ITR filing UP cities",
    "income tax consultant UP",
    "TDS return filing UP",
    "tax audit UP",
    "PAN card UP",
    "12A 80G registration UP",
    "ITR Noida Lucknow Agra Kanpur Varanasi",
    "online income tax filing UP",
    "Taxvio UP income tax",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/uttar-pradesh/income-tax-services" },
  openGraph: {
    title: "Income Tax Services Across 800+ UP Cities | Taxvio",
    description: "Expert ITR filing, TDS returns, tax audit & 12A/80G across all UP cities — CA-assisted, from ₹499.",
    url: "https://www.taxvio.in/state/uttar-pradesh/income-tax-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Services Across UP | Taxvio",
    description: "ITR filing, TDS returns, tax audit across 800+ UP cities — from ₹499.",
  },
  robots: { index: true, follow: true },
};

/* ─── Services ──────────────────────────────────────────────────────────────── */
const IT_SERVICES = [
  { label: "ITR – Salaried", price: "₹499", icon: "💼", desc: "Form 16 based filing" },
  { label: "ITR – Proprietor", price: "₹1,499", icon: "🏪", desc: "Business income ITR" },
  { label: "ITR – Firm / LLP", price: "₹2,499", icon: "🏛️", desc: "Partnership & LLP" },
  { label: "ITR – Company", price: "₹3,499", icon: "🏢", desc: "Pvt Ltd / Trust ITR" },
  { label: "Quarterly TDS Return", price: "₹999", icon: "📊", desc: "24Q / 26Q / 27Q" },
  { label: "Tax Audit", price: "₹4,999", icon: "🔍", desc: "Sec. 44AB compliance" },
  { label: "12A / 80G Registration", price: "₹3,999", icon: "🤝", desc: "NGO / Trust exemption" },
  { label: "IT Scrutiny Reply", price: "₹2,499", icon: "⚖️", desc: "143(1)/143(2)/148" },
];

const SEO_SECTIONS = [
  {
    heading: "Income Tax Return Filing Services Across Uttar Pradesh",
    body: `Uttar Pradesh is home to over 2.5 crore individual taxpayers, hundreds of thousands of business entities, and a vast salaried workforce spread across government departments, private sector companies, educational institutions, and PSUs. Accurate and timely income tax return filing is not just a legal obligation — it builds financial credibility, enables loan eligibility, facilitates visa processing, and protects taxpayers from penalties and scrutiny.

Taxvio provides comprehensive ITR filing services across all 800+ cities and towns in UP — from metro centres like Noida, Lucknow, Kanpur, Agra, Varanasi, Meerut, and Prayagraj to district towns like Muzaffarnagar, Bareilly, Moradabad, Aligarh, and Gorakhpur, and smaller tehsil towns like Khatauli, Nakur, Dhampur, and Rasra. Our CA team handles all ITR forms — ITR-1 and ITR-2 for salaried individuals, ITR-3 and ITR-4 for proprietors and professionals, ITR-5 for firms and LLPs, and ITR-6 and ITR-7 for companies and trusts.`,
  },
  {
    heading: "TDS / TCS Return Filing and Tax Audit Services in UP",
    body: `Every employer, company, and business entity in Uttar Pradesh that deducts tax at source (TDS) must file quarterly TDS returns — Form 24Q for salary TDS, Form 26Q for non-salary payments, and Form 27Q for payments to non-residents. With over 5 lakh TAN holders in UP alone, quarterly TDS compliance is one of the most widespread obligations in the state.

Taxvio's TDS filing service for UP businesses covers complete challan reconciliation with Form 26AS, accurate deductee detail entry, TRACES-compliant XML generation, and NSDL/TIN portal submission — with a dedicated correction (Conso) request process for any mismatches. For businesses liable to income tax audit under Section 44AB (turnover above ₹1 crore for business or ₹50 lakh for profession), our CA team handles complete audit, Form 3CA-3CD / 3CB-3CD preparation, and e-filing on the income tax portal before the due date.`,
  },
  {
    heading: "Why UP Taxpayers Trust Taxvio for Income Tax Compliance",
    body: `Uttar Pradesh's taxpayer base spans an enormous variety of income sources and industries — government employees in Lucknow's secretariat belt, IT professionals in Noida and Greater Noida's tech parks, traders and manufacturers in Kanpur's leather and textile industries, carpet exporters in Bhadohi, brassware traders in Moradabad, sugar mill workers in western UP, and crores of small farmers and agricultural traders across the state.

Taxvio's CA team has deep expertise in UP-specific tax scenarios: agricultural income treatment (exempt + non-agricultural income computation for UP farmers), HRA exemption for employees in tier-2 UP cities where actual rent differs from metro assumptions, presumptive taxation under Section 44ADA for UP-based professionals, MSME business income under 44AD, and capital gains from UP property transactions under Sections 54 and 54F. Our WhatsApp-first model ensures every UP taxpayer — whether in Noida or the remotest UP tehsil — gets the same CA-quality, personalised tax filing service.`,
  },
];

const TIER1_CITIES = UP_CITIES.filter((c) => c.tier === 1);
const TIER2_CITIES = UP_CITIES.filter((c) => c.tier === 2);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "UP Cities — Income Tax Services | Taxvio",
  numberOfItems: UP_CITIES.length,
  itemListElement: UP_CITIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — Income Tax Services`,
    url: `https://www.taxvio.in/state/uttar-pradesh/income-tax-services/${slugifyCity(c.name)}`,
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function MajorCityCard({ name, district, region }: { name: string; district: string; region: string }) {
  return (
    <Link href={`/state/uttar-pradesh/income-tax-services/${slugifyCity(name)}`}
      aria-label={`Income tax services in ${name}`}
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
        <p className="text-[11px] text-white/50 mt-0.5">{district} District · {region}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {["ITR", "TDS", "Audit", "12A"].map((t) => (
            <span key={t} className="text-[10px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CityLink({ name, district }: { name: string; district: string }) {
  return (
    <Link href={`/state/uttar-pradesh/income-tax-services/${slugifyCity(name)}`}
      aria-label={`Income tax services in ${name}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150">
      <MapPin size={9} className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors" />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function UPIncomeTaxIndexPage() {
  return (
    <>
      <Script id="up-it-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

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
                <li className="text-white/70 font-medium">Income Tax Services — Uttar Pradesh</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Uttar Pradesh · 800+ Cities · Income Tax Only · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Services
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Across Uttar Pradesh Cities
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert <strong className="text-white">ITR filing</strong>,{" "}
                  <strong className="text-white">TDS / TCS returns</strong>, tax audit, 12A/80G,
                  income tax scrutiny, PAN/TAN — across all{" "}
                  <strong className="text-white">{UP_CITIES.length}+</strong> UP cities.
                  CA-assisted, starting <strong className="text-sky-300">₹499</strong>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { val: `${UP_CITIES.length}+`, label: "UP Cities Covered", icon: Globe },
                    { val: "12,000+", label: "Returns Filed", icon: FileText },
                    { val: "₹499", label: "Starting Price", icon: TrendingUp },
                  ].map(({ val, label, icon: Icon }) => (
                    <div key={label} className="text-center rounded-2xl py-4 px-2"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      <Icon size={14} className="text-sky-300 mx-auto mb-1.5" />
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20income%20tax%20help%20in%20UP."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right — service grid */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">Income tax services in every UP city</p>
                <div className="grid grid-cols-2 gap-3">
                  {IT_SERVICES.map(({ label, price, icon, desc }) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}>
                      <span className="text-lg shrink-0">{icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white/85 truncate">{label}</p>
                        <p className="text-[10px] text-sky-300 font-semibold">{price} · {desc}</p>
                      </div>
                    </div>
                  ))}
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
                { icon: Star, label: "4.9★ Rating" },
                { icon: Zap, label: "Same-Day Response" },
                { icon: Shield, label: "100% Secure" },
                { icon: MessageCircle, label: "WhatsApp Support" },
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

        {/* ════════ MAJOR CITIES ════════ */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">Major Cities</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">Income Tax Services in Key UP Cities</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_CITIES.map((c) => (
                <MajorCityCard key={c.name} name={c.name} district={c.district} region={c.region} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIER-2 CITIES ════════ */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-blue-400 to-indigo-600" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">District HQs & Mid-Sized Cities</p>
                <h2 className="text-xl font-extrabold text-gray-800">ITR Filing in UP District Towns</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_CITIES.map((c) => (
                <Link key={c.name} href={`/state/uttar-pradesh/income-tax-services/${slugifyCity(c.name)}`}
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

        {/* ════════ ALL CITIES BY REGION ════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All UP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Income Tax Services — All Uttar Pradesh Cities by Region
              </h2>
            </div>
            <div className="space-y-4">
              {Object.entries(UP_REGIONS).map(([region]) => {
                const regionCities = UP_CITIES.filter((c) => c.region === region);
                if (regionCities.length === 0) return null;
                return (
                  <div key={region} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-[#00416a] to-[#005a90] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-sky-300 shrink-0" />{region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionCities.length} cities
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionCities.map((c) => (
                        <CityLink key={c.name} name={c.name} district={c.district} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ IT SERVICES GRID ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Income Tax Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                All Income Tax Services Available Across Every UP City
              </h2>
              <p className="text-gray-500 mt-2 text-sm">Every service below is available across all {UP_CITIES.length}+ UP cities — 100% online, CA-assisted.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  title: "ITR – Salaried Individual", price: "₹499",
                  href: "/serviceslist/income-tax/itr-salaried",
                  icon: "💼", color: "bg-blue-50 border-blue-100",
                  points: ["ITR-1 / ITR-2 filing with Form 16", "HRA, LTA & 80C deduction optimization", "Old vs new tax regime comparison", "Salary from multiple employers handled"],
                },
                {
                  title: "ITR – Proprietor / Freelancer", price: "₹1,499",
                  href: "/serviceslist/income-tax/itr-proprietor",
                  icon: "🏪", color: "bg-emerald-50 border-emerald-100",
                  points: ["ITR-3 / ITR-4 with business income", "Presumptive taxation under 44AD / 44ADA", "P&L and balance sheet preparation", "GST turnover reconciliation"],
                },
                {
                  title: "ITR – Partnership Firm / LLP", price: "₹2,499",
                  href: "/serviceslist/income-tax/itr-firm-llp",
                  icon: "🏛️", color: "bg-violet-50 border-violet-100",
                  points: ["ITR-5 for firms and LLPs", "Partner capital account & profit sharing", "Tax audit coordination if required", "Depreciation and deduction schedule"],
                },
                {
                  title: "ITR – Company / Trust / NGO", price: "₹3,499",
                  href: "/serviceslist/income-tax/itr-trust-company",
                  icon: "🏢", color: "bg-amber-50 border-amber-100",
                  points: ["ITR-6 for Pvt Ltd / public companies", "ITR-7 for trusts and Section 8 companies", "MAT / AMT computation", "Audit coordination and Form 3CA-3CD"],
                },
                {
                  title: "Quarterly TDS Return", price: "₹999",
                  href: "/serviceslist/income-tax/quarterly-tds",
                  icon: "📊", color: "bg-teal-50 border-teal-100",
                  points: ["Form 24Q (salary TDS) filing", "Form 26Q (non-salary) filing", "Form 27Q (NRI payments) filing", "TRACES 26AS reconciliation"],
                },
                {
                  title: "Quarterly TCS Return", price: "₹999",
                  href: "/serviceslist/income-tax/quarterly-tcs",
                  icon: "🧾", color: "bg-rose-50 border-rose-100",
                  points: ["TCS on goods u/s 206C", "Form 27EQ quarterly filing", "Challan reconciliation", "TCS certificate (Form 27D) issuance"],
                },
                {
                  title: "Income Tax Audit (Sec. 44AB)", price: "₹4,999",
                  href: "/serviceslist/income-tax/income-tax-audit",
                  icon: "🔍", color: "bg-indigo-50 border-indigo-100",
                  points: ["Audit for business turnover > ₹1Cr", "Audit for professionals > ₹50L", "Form 3CA-3CD / 3CB-3CD", "Tax audit report e-filing by due date"],
                },
                {
                  title: "IT Scrutiny & Notice Reply", price: "₹2,499",
                  href: "/serviceslist/income-tax/income-tax-scrutiny",
                  icon: "⚖️", color: "bg-rose-50 border-rose-100",
                  points: ["Sec. 143(1) intimation response", "Sec. 143(2) / 148 reassessment reply", "Financial assessment representation", "Written submissions & personal hearing"],
                },
                {
                  title: "12A & 80G Registration", price: "₹3,999",
                  href: "/serviceslist/income-tax/12a-application",
                  icon: "🤝", color: "bg-sky-50 border-sky-100",
                  points: ["12A registration for trusts / NGOs", "80G donation deduction registration", "Form 10A online filing", "FCRA compliance guidance"],
                },
                {
                  title: "PAN Card Application", price: "₹199",
                  href: "/serviceslist/income-tax/pan-card",
                  icon: "🪪", color: "bg-gray-50 border-gray-100",
                  points: ["New PAN application (Form 49A)", "PAN correction & demographic update", "PAN reissue / reprint", "Aadhaar-PAN linking support"],
                },
                {
                  title: "TAN Application", price: "₹499",
                  href: "/serviceslist/income-tax/tan-application",
                  icon: "🔢", color: "bg-orange-50 border-orange-100",
                  points: ["New TAN for employers & companies", "TAN correction application", "TAN allotment tracking", "TDS compliance setup guidance"],
                },
                {
                  title: "Form 15G / 15H", price: "₹199",
                  href: "/serviceslist/income-tax/15g-15h",
                  icon: "📋", color: "bg-emerald-50 border-emerald-100",
                  points: ["Form 15G for individuals < 60 yrs", "Form 15H for senior citizens ≥ 60 yrs", "Submission guidance to bank / FD", "Eligibility verification before filing"],
                },
              ].map(({ title, price, href, icon, color, points }) => (
                <Link key={title} href={href}
                  className={`group relative flex flex-col p-5 bg-white border ${color.split(" ")[1]} rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.05]"
                    style={{ background: "linear-gradient(135deg,#00416a,#0ea5e9)" }} />
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${color} border flex items-center justify-center text-xl shrink-0`}>
                      {icon}
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#00416a] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors mb-1">{title}</h3>
                  <span className="text-[11px] font-bold text-[#00416a] bg-blue-50 px-2.5 py-0.5 rounded-full self-start mb-3">{price}</span>
                  <ul className="space-y-1.5 mt-auto">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-[11px] text-gray-500">
                        <CheckCircle size={10} className="text-emerald-500 shrink-0 mt-0.5" />
                        {p}
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
              <h2 className="text-2xl font-extrabold text-white">All UP Cities — Income Tax Services</h2>
              <p className="text-white/55 text-sm mt-2">Click your city for dedicated ITR filing, TDS returns & tax compliance services</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {UP_CITIES.map((c, i) => (
                <Link key={`${c.name}-${i}`}
                  href={`/state/uttar-pradesh/income-tax-services/${slugifyCity(c.name)}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#00416a]"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}>
                  <MapPin size={9} className="text-sky-400 group-hover:text-[#00416a] shrink-0 transition-colors" />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA BANNER ════════ */}
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
                    ITR Filing & Tax Services — Wherever You Are in UP
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day WhatsApp response. Our CA team serves every UP city — from Noida & Lucknow to the smallest tehsil town. Starting ₹499.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20income%20tax%20help%20in%20UP."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <a href="tel:918937980366"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all">
                    <Phone size={16} /> Call Now
                  </a>
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
