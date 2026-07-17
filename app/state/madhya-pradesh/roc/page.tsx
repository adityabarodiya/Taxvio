// app/state/madhya-pradesh/roc/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  Globe, CheckCircle, Building2, Briefcase,
} from "lucide-react";
import { MP_CITIES, MP_REGIONS, slugifyCity } from "@/data/mp-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "ROC Services — Company & LLP Registration Across Madhya Pradesh | Taxvio",
  description:
    "Taxvio provides expert ROC services across 400+ cities in Madhya Pradesh — Private Limited company formation, LLP registration, OPC, Section 8, annual ROC compliance, director changes, company name change, authorized capital increase, and company closure. CA-assisted, 100% online, starting ₹1,999.",
  keywords: [
    "ROC services Madhya Pradesh",
    "company registration MP",
    "private limited company Bhopal",
    "LLP registration Indore",
    "OPC registration MP",
    "annual ROC compliance MP",
    "director appointment MP",
    "company name change MP",
    "MCA filing MP",
    "Taxvio MP ROC",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/madhya-pradesh/roc" },
  openGraph: {
    title: "ROC Services Across 400+ MP Cities | Taxvio",
    description:
      "Expert company formation, LLP registration, annual ROC compliance & more across all MP cities — CA-assisted, from ₹1,999.",
    url: "https://www.taxvio.in/state/madhya-pradesh/roc",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROC Services Across MP | Taxvio",
    description: "Company registration, LLP, OPC, annual ROC compliance across 400+ MP cities — from ₹1,999.",
  },
  robots: { index: true, follow: true },
};

/* ─── Services ──────────────────────────────────────────────────────────────── */
const ROC_SERVICES = [
  { label: "Pvt Ltd Formation",      price: "₹4,999",  icon: "🏢", desc: "Inc. PAN & TAN" },
  { label: "LLP Registration",       price: "₹3,999",  icon: "🏛️", desc: "Inc. agreement" },
  { label: "OPC Registration",       price: "₹2,999",  icon: "👤", desc: "Solo entrepreneur" },
  { label: "Section 8 Company",      price: "₹5,999",  icon: "🤝", desc: "NGO / Charity" },
  { label: "Annual ROC Compliance",  price: "₹2,999",  icon: "📋", desc: "AOC-4 & MGT-7" },
  { label: "Director Change",        price: "₹1,999",  icon: "👔", desc: "Appointment / Resignation" },
  { label: "Name Change",            price: "₹2,999",  icon: "✏️", desc: "MCA approval" },
  { label: "Capital Increase",       price: "₹2,499",  icon: "📈", desc: "Authorised capital" },
  { label: "Company Closure",        price: "₹3,999",  icon: "🔒", desc: "Strike-off STK-2" },
];

const SEO_SECTIONS = [
  {
    heading: "ROC & Company Registration Services Across Madhya Pradesh",
    body: `Madhya Pradesh is one of India's fastest-growing states for business incorporation, with a thriving entrepreneurial ecosystem spanning Bhopal's administrative and IT sector, Indore's financial and manufacturing hub, Jabalpur's defence and educational institutions, Gwalior's trade corridors, Ujjain's pilgrimage economy, and hundreds of MSME clusters across the state's 55 districts. Whether you are a startup founder in Indore's startup village, a professional setting up a consulting firm in Bhopal, or a trader in Ratlam formalising operations into a Private Limited company, proper company registration through the Ministry of Corporate Affairs (MCA) is your first step toward legal identity, investor readiness, and statutory compliance.

Taxvio provides end-to-end ROC services across all 400+ cities and towns in Madhya Pradesh — from metro centres like Bhopal, Indore, Jabalpur, Gwalior, and Ujjain to district towns like Sagar, Rewa, Satna, Chhindwara, and Khandwa, and smaller tehsil towns across every MP division. Our CA and CS team handles all entity types — Private Limited companies, LLPs, One Person Companies (OPCs), Section 8 non-profit companies — along with ongoing post-incorporation compliance, director changes, capital restructuring, and voluntary company closure.`,
  },
  {
    heading: "Annual ROC Compliance & Post-Incorporation Services in MP",
    body: `Every company incorporated in Madhya Pradesh — whether a Private Limited company in Indore or a Section 8 NGO in Jabalpur — must file annual ROC returns with the Registrar of Companies, Gwalior (which has jurisdiction over all MP-registered companies). The key annual filings include Form AOC-4 (financial statements: balance sheet, P&L account, and Directors' Report) and Form MGT-7 / MGT-7A (Annual Return), both of which must be filed within 60 and 60 days respectively of the Annual General Meeting. LLPs must file Form 11 (Annual Return) by May 30 and Form 8 (Statement of Account & Solvency) by October 30 each year.

Non-filing of annual returns attracts additional fees of ₹100 per day per form — plus the company and its directors may be struck off under Section 248 of the Companies Act or disqualified under Section 164(2) for consecutive defaults. Taxvio's MP ROC compliance team manages the complete annual filing cycle for companies and LLPs — preparing financial statements with the statutory auditor, drafting the Directors' Report and Corporate Governance disclosures, filing AOC-4 and MGT-7 on the MCA portal, and providing digital signature support for all authorised signatories.`,
  },
  {
    heading: "Why MP Businesses Trust Taxvio for ROC & MCA Compliance",
    body: `Madhya Pradesh's business landscape spans a remarkable diversity of sectors — Pithampur's auto ancillary and pharmaceutical manufacturers near Indore, Mandideep's industrial estates near Bhopal, Jabalpur's engineering and ordnance sector, Dewas's pharmaceutical and chemical cluster, Katni's cement and marble industry, Balaghat's manganese mining operations, and agricultural commodity traders spread across every MP district. Each sector has its own corporate structuring requirements, tax implications, and compliance timelines.

Taxvio's ROC service team understands MP-specific corporate structures — advising Indore-based startups on ESOP issuances and investor-ready cap tables, helping Bhopal professional service firms choose between LLP (for tax efficiency) and Private Limited (for investment capability), guiding MP NGOs on Section 8 company formation versus trust registration, and assisting family-owned businesses in Ujjain and Gwalior on corporate conversion from proprietorship to Private Limited. Our WhatsApp-first model ensures that every business owner in MP — from Indore's tech park to the remotest tehsil town in Dindori — gets the same CA-quality, personalised ROC compliance service without needing to travel to a CA's office.`,
  },
];

const TIER1_CITIES = MP_CITIES.filter((c) => c.tier === 1);
const TIER2_CITIES = MP_CITIES.filter((c) => c.tier === 2);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MP Cities — ROC Services | Taxvio",
  numberOfItems: MP_CITIES.length,
  itemListElement: MP_CITIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — ROC & Company Registration Services`,
    url: `https://www.taxvio.in/state/madhya-pradesh/roc/${slugifyCity(c.name)}`,
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function MajorCityCard({
  name,
  district,
  region,
}: {
  name: string;
  district: string;
  region: string;
}) {
  return (
    <Link
      href={`/state/madhya-pradesh/roc/${slugifyCity(name)}`}
      aria-label={`ROC services in ${name}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a3c5e] to-[#2563a8] text-white border border-[#1e4d8c] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-blue-400/20 blur-2xl pointer-events-none" />
      <div className="relative p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">🏙️</span>
          <ArrowRight
            size={15}
            className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5"
          />
        </div>
        <p className="font-bold text-base text-white leading-tight group-hover:text-blue-200 transition-colors">
          {name}
        </p>
        <p className="text-[11px] text-white/50 mt-0.5">
          {district} District · {region}
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {["Pvt Ltd", "LLP", "OPC", "Compliance"].map((t) => (
            <span
              key={t}
              className="text-[10px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CityLink({ name, district }: { name: string; district: string }) {
  return (
    <Link
      href={`/state/madhya-pradesh/roc/${slugifyCity(name)}`}
      aria-label={`ROC services in ${name}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#1a3c5e] hover:bg-[#1a3c5e]/5 transition-all duration-150"
    >
      <MapPin
        size={9}
        className="text-gray-300 group-hover:text-[#1a3c5e] shrink-0 transition-colors"
      />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function MPROCIndexPage() {
  return (
    <>
      <Script
        id="mp-roc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="bg-[#f5f8fd] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#1a3c5e] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3c5e] via-[#12304f] to-[#091e33]" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(96,165,250,0.12) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(52,211,153,0.08) 0%,transparent 65%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">
                  ROC Services — Madhya Pradesh
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Madhya Pradesh · 400+ Cities · ROC & MCA · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  ROC & Company Registration
                  <span className="block mt-2 bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
                    Across Madhya Pradesh Cities
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert{" "}
                  <strong className="text-white">
                    Private Limited company formation
                  </strong>
                  ,{" "}
                  <strong className="text-white">LLP & OPC registration</strong>
                  , Section 8, annual ROC compliance, director changes &amp;
                  company closure — across all{" "}
                  <strong className="text-white">{MP_CITIES.length}+</strong> MP
                  cities. CA-assisted, starting{" "}
                  <strong className="text-blue-300">₹1,999</strong>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    {
                      val: `${MP_CITIES.length}+`,
                      label: "MP Cities Covered",
                      icon: Globe,
                    },
                    {
                      val: "8,000+",
                      label: "Companies Formed",
                      icon: Building2,
                    },
                    { val: "₹1,999", label: "Starting Price", icon: TrendingUp },
                  ].map(({ val, label, icon: Icon }) => (
                    <div
                      key={label}
                      className="text-center rounded-2xl py-4 px-2"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <Icon size={14} className="text-blue-300 mx-auto mb-1.5" />
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20ROC%20services%20in%20MP."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#1a3c5e] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right — service grid */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">
                  ROC services in every MP city
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {ROC_SERVICES.map(({ label, price, icon, desc }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.13)",
                      }}
                    >
                      <span className="text-lg shrink-0">{icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white/85 truncate">
                          {label}
                        </p>
                        <p className="text-[10px] text-blue-300 font-semibold">
                          {price} · {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/30 text-center">
                  100% online · No office visit · CA & CS certified
                </p>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, label: "CA & CS Team" },
                { icon: Star, label: "4.9★ Rating" },
                { icon: Zap, label: "Same-Day Response" },
                { icon: Shield, label: "MCA-Compliant" },
                { icon: MessageCircle, label: "WhatsApp Support" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-blue-400 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f5f8fd"
            />
          </svg>
        </section>

        {/* ════════ MAJOR CITIES ════════ */}
        <section className="py-16 bg-[#f5f8fd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#1a3c5e] to-blue-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#1a3c5e]">
                  Major Cities
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  ROC Services in Key MP Cities
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_CITIES.map((c) => (
                <MajorCityCard
                  key={c.name}
                  name={c.name}
                  district={c.district}
                  region={c.region}
                />
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
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                  District HQs & Mid-Sized Cities
                </p>
                <h2 className="text-xl font-extrabold text-gray-800">
                  Company Registration in MP District Towns
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_CITIES.map((c) => (
                <Link
                  key={c.name}
                  href={`/state/madhya-pradesh/roc/${slugifyCity(c.name)}`}
                  className="group flex items-center gap-2.5 p-3.5 bg-[#f5f8fd] border border-[#dce8f5] rounded-xl hover:border-[#1a3c5e]/30 hover:shadow-sm hover:bg-white transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1a3c5e]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a3c5e] transition-all">
                    <MapPin
                      size={13}
                      className="text-[#1a3c5e] group-hover:text-white transition-all"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-800 group-hover:text-[#1a3c5e] transition truncate">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate">
                      {c.district}
                    </p>
                  </div>
                  <ArrowRight
                    size={11}
                    className="ml-auto shrink-0 text-gray-300 group-hover:text-[#1a3c5e] transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ALL CITIES BY REGION ════════ */}
        <section className="py-20 bg-[#f5f8fd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3c5e] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All MP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3c5e] mt-4">
                ROC Services — All Madhya Pradesh Cities by Division
              </h2>
            </div>
            <div className="space-y-4">
              {Object.entries(MP_REGIONS).map(([region]) => {
                const regionCities = MP_CITIES.filter(
                  (c) => c.region === region
                );
                if (regionCities.length === 0) return null;
                return (
                  <div
                    key={region}
                    className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-[#1a3c5e] to-[#2563a8] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin
                          size={13}
                          className="text-blue-300 shrink-0"
                        />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionCities.length} cities
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionCities.map((c) => (
                        <CityLink
                          key={c.name}
                          name={c.name}
                          district={c.district}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ ROC SERVICES GRID ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3c5e] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                ROC Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3c5e] mt-4">
                All ROC & MCA Services Available Across Every MP City
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Every service below is available across all {MP_CITIES.length}+
                MP cities — 100% online, CA & CS assisted.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  title: "Private Limited Company Formation",
                  price: "₹4,999",
                  href: "/serviceslist/roc/private-limited-formation",
                  icon: "🏢",
                  color: "bg-blue-50 border-blue-100",
                  points: [
                    "Name approval via RUN / SPICe+",
                    "MOA & AOA drafting and filing",
                    "Certificate of Incorporation",
                    "PAN & TAN application included",
                  ],
                },
                {
                  title: "LLP Registration",
                  price: "₹3,999",
                  href: "/serviceslist/roc/llp-formation",
                  icon: "🏛️",
                  color: "bg-violet-50 border-violet-100",
                  points: [
                    "Name reservation via LLP-RUN",
                    "LLP agreement drafting",
                    "Incorporation certificate",
                    "DPIN & DSC for partners",
                  ],
                },
                {
                  title: "One Person Company (OPC) Registration",
                  price: "₹2,999",
                  href: "/serviceslist/roc/opc-formation",
                  icon: "👤",
                  color: "bg-emerald-50 border-emerald-100",
                  points: [
                    "Ideal for solo entrepreneurs",
                    "Nominee director appointment",
                    "MOA & AOA drafting",
                    "Incorporation certificate",
                  ],
                },
                {
                  title: "Section 8 Company Registration",
                  price: "₹5,999",
                  href: "/serviceslist/roc/section-8-company",
                  icon: "🤝",
                  color: "bg-amber-50 border-amber-100",
                  points: [
                    "For NGOs & charitable institutions",
                    "Section 8 licence from RoC",
                    "MOA & AOA for charitable objects",
                    "12A & 80G application guidance",
                  ],
                },
                {
                  title: "Annual ROC Compliance",
                  price: "₹2,999",
                  href: "/serviceslist/roc/annual-roc-compliance",
                  icon: "📋",
                  color: "bg-teal-50 border-teal-100",
                  points: [
                    "AOC-4 — financial statements filing",
                    "MGT-7 / MGT-7A — annual return",
                    "LLP Form 11 & Form 8",
                    "Directors' Report preparation",
                  ],
                },
                {
                  title: "Director Appointment / Resignation",
                  price: "₹1,999",
                  href: "/serviceslist/roc/director-appointment-resignation",
                  icon: "👔",
                  color: "bg-rose-50 border-rose-100",
                  points: [
                    "DIR-12 filing with MCA",
                    "Board resolution drafting",
                    "DIN & DSC assistance",
                    "MCA approval tracking",
                  ],
                },
                {
                  title: "Company Name Change",
                  price: "₹2,999",
                  href: "/serviceslist/roc/company-name-change",
                  icon: "✏️",
                  color: "bg-indigo-50 border-indigo-100",
                  points: [
                    "Name availability check",
                    "RUN form and INC-24 filing",
                    "MOA & AOA alteration",
                    "Fresh Certificate of Incorporation",
                  ],
                },
                {
                  title: "Increase in Authorised Share Capital",
                  price: "₹2,499",
                  href: "/serviceslist/roc/authorized-capital-increase",
                  icon: "📈",
                  color: "bg-sky-50 border-sky-100",
                  points: [
                    "SH-7 form filing with RoC",
                    "MOA alteration (Capital clause)",
                    "Board & EGM resolution drafting",
                    "Capital structure certificate",
                  ],
                },
                {
                  title: "Company Closure / Strike Off",
                  price: "₹3,999",
                  href: "/serviceslist/roc/company-closure",
                  icon: "🔒",
                  color: "bg-gray-50 border-gray-100",
                  points: [
                    "STK-2 filing for strike-off",
                    "NIL return filing if required",
                    "Document preparation & affidavit",
                    "Closure confirmation from RoC",
                  ],
                },
              ].map(({ title, price, href, icon, color, points }) => (
                <Link
                  key={title}
                  href={href}
                  className={`group relative flex flex-col p-5 bg-white border ${
                    color.split(" ")[1]
                  } rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.05]"
                    style={{
                      background: "linear-gradient(135deg,#1a3c5e,#2563a8)",
                    }}
                  />
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${color} border flex items-center justify-center text-xl shrink-0`}
                    >
                      {icon}
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#1a3c5e] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight
                        size={13}
                        className="text-gray-300 group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#1a3c5e] transition-colors mb-1">
                    {title}
                  </h3>
                  <span className="text-[11px] font-bold text-[#1a3c5e] bg-blue-50 px-2.5 py-0.5 rounded-full self-start mb-3">
                    {price}
                  </span>
                  <ul className="space-y-1.5 mt-auto">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-1.5 text-[11px] text-gray-500"
                      >
                        <CheckCircle
                          size={10}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
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
        <section className="py-20 bg-[#f5f8fd] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#1a3c5e] to-blue-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a3c5e] mb-4">
                    {heading}
                  </h2>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    {body.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ TAG CLOUD ════════ */}
        <section className="py-16 bg-[#1a3c5e]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">
                All MP Cities — ROC & Company Registration Services
              </h2>
              <p className="text-white/55 text-sm mt-2">
                Click your city for dedicated company formation, LLP, OPC &
                ROC compliance services
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {MP_CITIES.map((c, i) => (
                <Link
                  key={`${c.name}-${i}`}
                  href={`/state/madhya-pradesh/roc/${slugifyCity(c.name)}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#1a3c5e]"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.80)",
                  }}
                >
                  <MapPin
                    size={9}
                    className="text-blue-400 group-hover:text-[#1a3c5e] shrink-0 transition-colors"
                  />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA BANNER ════════ */}
        <section className="py-16 px-6 bg-[#f5f8fd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#1a3c5e] rounded-3xl overflow-hidden p-10 md:p-14 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a3c5e] to-[#091e33]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-400/10 blur-[80px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
                    <Zap size={11} className="text-blue-300" /> Ready to
                    Incorporate?
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    Company Registration & ROC Compliance — Wherever You Are in
                    MP
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day WhatsApp response. Our CA & CS team
                    serves every MP city — from Bhopal &amp; Indore to the
                    smallest tehsil town. Starting ₹1,999.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20ROC%20services%20in%20MP."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#1a3c5e] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <a
                    href="tel:918937980366"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
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