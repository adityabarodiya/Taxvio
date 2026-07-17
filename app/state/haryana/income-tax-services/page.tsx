// app/state/haryana/income-tax-services/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  CheckCircle, Globe, Calculator,
} from "lucide-react";
import { HARYANA_AREAS, HARYANA_REGIONS, slugifyArea } from "@/data/haryana-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Income Tax Return Filing & ITR Services Across Haryana | Taxvio",
  description:
    "Taxvio provides expert ITR filing for salaried, proprietors, firms & companies; TDS/TCS returns; income tax audit; income tax scrutiny reply; 12A/80G registration; PAN/TAN; and Form 15G/15H across 200+ areas in Haryana — Gurgaon, Faridabad, Ambala, Karnal, Panipat, Sonipat & more. CA-assisted, 100% online, starting ₹699.",
  keywords: [
    "income tax return filing Haryana",
    "ITR filing Haryana areas",
    "income tax consultant Haryana",
    "TDS return filing Haryana",
    "income tax audit Haryana",
    "PAN card Haryana",
    "TAN application Haryana",
    "12A 80G registration Haryana",
    "income tax scrutiny notice Haryana",
    "Taxvio Haryana income tax",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/haryana/income-tax-services" },
  openGraph: {
    title: "Income Tax Services Across 200+ Haryana Areas | Taxvio",
    description: "Expert ITR filing, TDS/TCS returns, income tax audit, scrutiny reply & 12A/80G across all Haryana areas — CA-assisted, from ₹699.",
    url: "https://www.taxvio.in/state/haryana/income-tax-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Services Across Haryana | Taxvio",
    description: "ITR filing, TDS returns, audit & scrutiny reply across 200+ Haryana areas — from ₹699.",
  },
  robots: { index: true, follow: true },
};

/* ─── Service Quick List ─────────────────────────────────────────────────── */
const IT_SERVICES_QUICK = [
  { label: "ITR — Salaried",          price: "₹699",   icon: "👤", desc: "Form 16 based filing" },
  { label: "ITR — Proprietor",        price: "₹1,999", icon: "🏪", desc: "Business income ITR" },
  { label: "ITR — Firm / LLP",        price: "₹2,999", icon: "🤝", desc: "Partnership & LLP" },
  { label: "Quarterly TDS Return",    price: "₹1,499", icon: "📊", desc: "24Q / 26Q / 27Q" },
  { label: "Income Tax Audit",        price: "₹4,999", icon: "🔍", desc: "Sec. 44AB / 44AD" },
  { label: "Scrutiny & Notice Reply", price: "₹2,499", icon: "⚖️", desc: "143(1)/143(2)/148" },
];

/* ─── SEO Sections ──────────────────────────────────────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "Income Tax Return Filing Services Across Haryana",
    body: `Haryana has one of India's most diverse taxpayer bases — spanning corporate executives and IT professionals in Gurgaon's Cyber City and DLF corridors, manufacturing unit owners in Faridabad and Manesar's industrial townships, textile and carpet traders in Panipat and Karnal, agricultural and grain traders across the state's extensive mandi network, and a rapidly growing freelance and startup economy concentrated in the NCR belt. Income tax compliance needs across Haryana vary significantly by sector and location — a senior executive in Golf Course Road has very different filing requirements from a textile manufacturer in Panipat or a consultant in Ambala.

Taxvio provides comprehensive income tax return filing across all 200+ areas of Haryana — from Tier-1 corporate and industrial hubs like Gurgaon, Faridabad, and Ambala, to rapidly growing cities like Panipat, Karnal, Sonipat, and Rohtak, down to emerging towns like Bahadurgarh, Rewari, Jhajjar, and Mahendragarh. Our CA team handles every ITR category — ITR-1/ITR-2 for salaried individuals, ITR-3/ITR-4 for proprietors and professionals, ITR-5 for firms and LLPs, and ITR-6/ITR-7 for companies and trusts — with deep familiarity of Haryana's specific income tax ward and circle jurisdictions across all 22 districts.`,
  },
  {
    heading: "TDS Compliance, Tax Audit & Scrutiny Defence for Haryana Businesses",
    body: `Haryana's industrial and manufacturing economy — particularly concentrated in automobile components (Manesar, Dharuhera), textiles (Panipat), steel and engineering goods (Faridabad), and IT services (Gurgaon) — generates an enormous volume of TDS obligations. Every employer with salaried staff, every manufacturing unit paying contractors, and every business making specified payments above notified thresholds must deduct TDS and file quarterly returns. With Haryana housing a high density of TAN holders across corporate offices, industrial units, and trading firms, accurate quarterly TDS/TCS filing (Form 24Q, 26Q, 27Q, 27EQ) is one of the most frequent and high-stakes compliance obligations our Haryana clients face.

Taxvio's tax audit service covers Haryana businesses crossing the Section 44AB thresholds — turnover above ₹1 crore (₹10 crore for 95%+ digital transactions) for business, or ₹50 lakh gross receipts for professionals — handling the complete audit, Form 3CD preparation across all 41 clauses, and timely e-filing. For Haryana taxpayers facing income tax scrutiny — Section 143(1) intimations, 143(2) detailed scrutiny, or 148 reassessment notices — our team provides structured notice analysis, documented replies, and personal representation before the jurisdictional Assessing Officer across Gurgaon, Faridabad, Ambala, Hisar, and other Haryana commissionerates.`,
  },
  {
    heading: "Why Haryana Taxpayers Across Every District Choose Taxvio",
    body: `Haryana's income tax landscape spans an extraordinary range of taxpayer profiles — corporate executives in Gurgaon's multinational corridor, manufacturing entrepreneurs in Faridabad's industrial belt, textile traders in Panipat's wholesale markets, agricultural commission agents in Karnal and Ambala's grain mandis, and freelance IT professionals and consultants in the NCR's expanding startup ecosystem. Each segment has distinct deduction opportunities, compliance triggers, and risk areas that a one-size-fits-all approach to ITR filing simply misses.

Taxvio's CA team has filed returns and handled notices for clients across nearly every Haryana income tax ward — from the Gurgaon Commissionerate to the Ambala and Hisar divisions — giving us practical familiarity with local Assessing Officer query patterns and processing timelines. Our WhatsApp-first model means a salaried employee in Rohtak and a manufacturing unit owner in Manesar receive the exact same CA-quality, same-day response, with transparent upfront pricing and zero office visits required for any of our 13 income tax services.`,
  },
];

const TIER1_AREAS = HARYANA_AREAS.filter((c) => c.tier === 1);
const TIER2_AREAS = HARYANA_AREAS.filter((c) => c.tier === 2);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Haryana Areas — Income Tax Services | Taxvio",
  numberOfItems: HARYANA_AREAS.length,
  itemListElement: HARYANA_AREAS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — Income Tax Services`,
    url: `https://www.taxvio.in/state/haryana/income-tax-services/${slugifyArea(c.name)}`,
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function MajorAreaCard({ name, district, region }: { name: string; district: string; region: string }) {
  return (
    <Link href={`/state/haryana/income-tax-services/${slugifyArea(name)}`}
      aria-label={`Income tax services in ${name}, Haryana`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
      <div className="relative p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">🏭</span>
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
    <Link href={`/state/haryana/income-tax-services/${slugifyArea(name)}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150">
      <MapPin size={9} className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors" />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function HaryanaIncomeTaxIndexPage() {
  return (
    <>
      <Script id="haryana-it-schema" type="application/ld+json"
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
                <li className="text-white/70 font-medium">Income Tax Services — Haryana</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Haryana · 200+ Areas · Income Tax Only · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Income Tax Services
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Across Every Haryana Area
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert <strong className="text-white">ITR filing</strong>,{" "}
                  <strong className="text-white">TDS / TCS returns</strong>, tax audit, scrutiny reply,
                  12A/80G, PAN/TAN, and Form 15G/15H across{" "}
                  <strong className="text-white">{HARYANA_AREAS.length}+</strong> Haryana cities and towns.
                  CA-assisted, starting <strong className="text-sky-300">₹699</strong>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { val: `${HARYANA_AREAS.length}+`, label: "Haryana Areas Covered", icon: Globe },
                    { val: "4,800+", label: "Haryana Businesses Served", icon: Users },
                    { val: "₹699", label: "Starting Price", icon: TrendingUp },
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
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20income%20tax%20help%20in%20Haryana."
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

              {/* Right service grid */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">Income tax services in every Haryana area</p>
                <div className="grid grid-cols-2 gap-3">
                  {IT_SERVICES_QUICK.map(({ label, price, icon, desc }) => (
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
                { icon: Star,       label: "4.9★ Rating" },
                { icon: Zap,        label: "Same-Day Response" },
                { icon: Shield,     label: "100% Secure" },
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

        {/* ════════ MAJOR AREAS ════════ */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">Major Industrial & Corporate Hubs</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">Income Tax Services in Key Haryana Cities</h2>
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
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">Emerging Cities & Towns</p>
                <h2 className="text-xl font-extrabold text-gray-800">ITR Filing in Haryana Industrial & Commercial Areas</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_AREAS.slice(0, 30).map((c) => (
                <Link key={c.name} href={`/state/haryana/income-tax-services/${slugifyArea(c.name)}`}
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
                All Haryana Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Income Tax Services — All Haryana Areas by Region
              </h2>
            </div>
            <div className="space-y-4">
              {Object.entries(HARYANA_REGIONS).map(([region]) => {
                const regionAreas = HARYANA_AREAS.filter((c) => c.region === region);
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

        {/* ════════ IT SERVICES GRID ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Income Tax Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                All Income Tax Services Available Across Every Haryana Area
              </h2>
              <p className="text-gray-500 mt-2 text-sm">Every service below is available across all {HARYANA_AREAS.length}+ Haryana areas — 100% online, CA-assisted.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                { title:"PAN Card Application", price:"₹299", href:"/serviceslist/income-tax/pan-card", icon:"🪪", color:"bg-gray-50 border-gray-100",
                  points:["New PAN application (Form 49A)", "Correction & reprint", "Name, DOB & address update", "PAN status tracking"] },
                { title:"TAN Application", price:"₹999", href:"/serviceslist/income-tax/tan-application", icon:"🔢", color:"bg-orange-50 border-orange-100",
                  points:["New TAN for businesses & employers", "Correction in existing TAN", "Allotment tracking", "TDS/TCS compliance guidance"] },
                { title:"ITR — Salaried Individual", price:"₹699", href:"/serviceslist/income-tax/itr-salaried", icon:"👤", color:"bg-blue-50 border-blue-100",
                  points:["ITR-1 / ITR-2 with Form 16", "Deduction & exemption optimisation", "Old vs new regime comparison", "E-filing with acknowledgement"] },
                { title:"ITR — Proprietor", price:"₹1,999", href:"/serviceslist/income-tax/itr-proprietor", icon:"🏪", color:"bg-emerald-50 border-emerald-100",
                  points:["Business income computation", "P&L and balance sheet prep", "Tax saving advisory", "ITR filing & verification"] },
                { title:"ITR — Firm / LLP", price:"₹2,999", href:"/serviceslist/income-tax/itr-firm-llp", icon:"🤝", color:"bg-violet-50 border-violet-100",
                  points:["Firm / LLP income computation", "Partner capital & profit sharing", "Tax audit coordination", "ITR-5 filing & verification"] },
                { title:"ITR — Trust / Company", price:"₹3,499", href:"/serviceslist/income-tax/itr-trust-company", icon:"🏢", color:"bg-amber-50 border-amber-100",
                  points:["ITR-6 for Pvt Ltd / Public Ltd", "ITR-7 for trusts & NGOs", "Audit coordination support", "Notice handling assistance"] },
                { title:"Quarterly TDS Return", price:"₹1,499", href:"/serviceslist/income-tax/quarterly-tds", icon:"📊", color:"bg-teal-50 border-teal-100",
                  points:["Form 24Q / 26Q / 27Q filing", "TDS computation & challan reconciliation", "Deductee detail accuracy", "TDS certificate guidance"] },
                { title:"Quarterly TCS Return", price:"₹1,499", href:"/serviceslist/income-tax/quarterly-tcs", icon:"🧾", color:"bg-rose-50 border-rose-100",
                  points:["TCS computation under 206C", "Form 27EQ quarterly filing", "Challan reconciliation", "Compliance support"] },
                { title:"Income Tax Audit", price:"₹4,999", href:"/serviceslist/income-tax/income-tax-audit", icon:"🔍", color:"bg-indigo-50 border-indigo-100",
                  points:["Audit applicability assessment", "Document preparation", "Form 3CA/3CB-3CD filing", "Department coordination"] },
                { title:"IT Scrutiny & Notice Reply", price:"₹2,499", href:"/serviceslist/income-tax/income-tax-scrutiny", icon:"⚖️", color:"bg-rose-50 border-rose-100",
                  points:["Notice analysis & reply drafting", "143(1)/143(2)/148 handling", "Online & offline representation", "Assessment closure support"] },
                { title:"12A Application", price:"₹3,999", href:"/serviceslist/income-tax/12a-application", icon:"🤝", color:"bg-sky-50 border-sky-100",
                  points:["Eligibility evaluation", "Document preparation", "Form 10A online filing", "Registration follow-up"] },
                { title:"80G Application", price:"₹3,999", href:"/serviceslist/income-tax/80g-application", icon:"💚", color:"bg-emerald-50 border-emerald-100",
                  points:["Eligibility assessment", "Application preparation", "Online filing on portal", "Approval follow-up"] },
                { title:"Form 15G / 15H", price:"₹199", href:"/serviceslist/income-tax/15g-15h", icon:"📋", color:"bg-gray-50 border-gray-100",
                  points:["Eligibility verification", "Form preparation & filing", "Submission guidance to bank/FD", "Compliance confirmation"] },
              ].map(({ title, price, href, icon, color, points }) => (
                <Link key={title} href={href}
                  className={`group relative flex flex-col p-5 bg-white border ${color.split(" ")[1]} rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.05]"
                    style={{ background: "linear-gradient(135deg,#00416a,#0ea5e9)" }} />
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${color} border flex items-center justify-center text-xl shrink-0`}>{icon}</div>
                    <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#00416a] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors mb-1">{title}</h3>
                  <span className="text-[11px] font-bold text-[#00416a] bg-blue-50 px-2.5 py-0.5 rounded-full self-start mb-3">{price}</span>
                  <ul className="space-y-1.5 mt-auto">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-[11px] text-gray-500">
                        <CheckCircle size={10} className="text-emerald-500 shrink-0 mt-0.5" />{p}
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
              <h2 className="text-2xl font-extrabold text-white">All Haryana Areas — Income Tax Services</h2>
              <p className="text-white/55 text-sm mt-2">Click your area for dedicated ITR filing, TDS returns & tax compliance services</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {HARYANA_AREAS.map((c, i) => (
                <Link key={`${c.name}-${i}`}
                  href={`/state/haryana/income-tax-services/${slugifyArea(c.name)}`}
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
                    ITR Filing & Tax Services — Wherever You Are in Haryana
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day WhatsApp response. Our CA team serves every Haryana area — Gurgaon to Mahendragarh. Starting ₹699.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20income%20tax%20help%20in%20Haryana."
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