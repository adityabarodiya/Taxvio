// app/state/gujarat/roc/page.tsx
// app/state/gujarat/roc/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  Globe, CheckCircle, Building2, Briefcase, Award, Clock,
} from "lucide-react";
import { GJ_CITIES, GJ_REGIONS, slugifyCity } from "@/data/gj-cites";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "ROC Services — Company & LLP Registration Across Gujarat | Taxvio",
  description:
    "Professional ROC services across 500+ cities in Gujarat — Private Limited company incorporation, LLP registration, OPC, Section 8, annual MCA compliance, director changes, company name modification, capital restructuring, and voluntary closure. CA & CS assisted, 100% online, starting ₹3,999.",
  keywords: [
    "ROC services Gujarat",
    "company registration Ahmedabad",
    "private limited company Surat",
    "LLP registration Vadodara",
    "OPC registration Gujarat",
    "annual ROC compliance Rajkot",
    "director appointment Gujarat",
    "company name change Gandhinagar",
    "MCA filing Gujarat",
    "Taxvio Gujarat ROC",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/gujarat/roc" },
  openGraph: {
    title: "ROC Services Across 500+ Gujarat Cities | Taxvio",
    description:
      "Expert company formation, LLP registration, annual ROC compliance & MCA services across all Gujarat cities — CA & CS assisted, from ₹3,999.",
    url: "https://www.taxvio.in/state/gujarat/roc",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROC Services Across Gujarat | Taxvio",
    description: "Company registration, LLP, OPC, annual ROC compliance across 500+ Gujarat cities — from ₹3,999.",
  },
  robots: { index: true, follow: true },
};

/* ─── Services ──────────────────────────────────────────────────────────────── */
const ROC_SERVICES = [
  { label: "Pvt Ltd Formation",      price: "₹8,999",  icon: "🏢", desc: "Inc. PAN & TAN" },
  { label: "LLP Registration",       price: "₹5,999",  icon: "🏛️", desc: "Inc. agreement" },
  { label: "OPC Registration",       price: "₹4,999",  icon: "👤", desc: "Solo entrepreneur" },
  { label: "Section 8 Company",      price: "₹8,999",  icon: "🤝", desc: "NGO / Charity" },
  { label: "Annual ROC Compliance",  price: "₹8,999",  icon: "📋", desc: "AOC-4 & MGT-7" },
  { label: "Director Change",        price: "₹2,999",  icon: "👔", desc: "Appointment / Resignation" },
  { label: "Name Change",            price: "₹2,999",  icon: "✏️", desc: "MCA approval" },
  { label: "Capital Increase",       price: "₹2,499",  icon: "📈", desc: "Authorised capital" },
  { label: "Company Closure",        price: "₹7,999",  icon: "🔒", desc: "Strike-off STK-2" },
];

const SEO_SECTIONS = [
  {
    heading: "ROC & Company Incorporation Services Across Gujarat",
    body: `Gujarat stands as India's premier industrial and entrepreneurial state, home to Ahmedabad's thriving startup ecosystem, Surat's diamond and textile manufacturing excellence, Vadodara's petrochemical and pharmaceutical industries, Rajkot's engineering and auto-parts manufacturing clusters, Gandhinagar's administrative and IT infrastructure, and Jamnagar's world-class refinery operations. From the Special Investment Regions (SIRs) across the state to the vibrant MSME sector in every district, Gujarat's business landscape demands robust corporate structures and meticulous regulatory compliance.

Whether you're launching a fintech startup in Ahmedabad's GIFT City, establishing a manufacturing unit in Vapi's industrial belt, registering an export house in Mundra SEZ, incorporating a pharmaceutical company in Vadodara's pharma cluster, or setting up a logistics firm serving Kandla Port, proper company registration through the Ministry of Corporate Affairs (MCA) and Registrar of Companies (RoC Gujarat) is the cornerstone of your business legitimacy, investor confidence, and long-term growth trajectory.

Taxvio delivers comprehensive end-to-end ROC services across all ${GJ_CITIES.length}+ cities and industrial towns in Gujarat — from major commercial centers like Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, and Bhavnagar to emerging industrial hubs like Ankleshwar, Vapi, Bharuch, Morbi, Junagadh, and Mehsana, and smaller manufacturing towns across every Gujarat district. Our experienced CA and CS team handles all corporate entities — Private Limited companies, Limited Liability Partnerships (LLPs), One Person Companies (OPCs), and Section 8 non-profit companies — alongside complete post-incorporation compliance management, corporate restructuring, director governance, and voluntary company dissolution.`,
  },
  {
    heading: "Annual ROC Compliance & MCA Filing Services for Gujarat Companies",
    body: `Every registered company in Gujarat — whether a bootstrapped startup in Ahmedabad's CEPT University incubator or a Section 8 educational trust in Gandhinagar — must maintain strict annual compliance with the Registrar of Companies (RoC Gujarat, with jurisdiction covering the entire state from the RoC office in Ahmedabad). The mandatory annual filings include Form AOC-4 (audited financial statements comprising balance sheet, profit & loss account, cash flow statement, and comprehensive Directors' Report with statutory disclosures) and Form MGT-7 / MGT-7A (Annual Return detailing shareholding pattern, director information, meeting details, and changes during the year) — both required to be filed within 60 days from the date of the Annual General Meeting.

For Limited Liability Partnerships registered in Gujarat, annual compliance involves filing Form 11 (Annual Return) by 30th May and Form 8 (Statement of Account & Solvency certified by designated partners) by 30th October each financial year. Non-compliance with these statutory deadlines attracts automatic additional fees of ₹100 per day per form from the MCA portal, and persistent defaults can result in the company being marked as 'Non-compliant' under Section 164(2) leading to director disqualification, or the entity being struck off under Section 248 of the Companies Act 2013, resulting in loss of corporate identity and severe restrictions on promoters for future business activities.

Taxvio's Gujarat ROC compliance team provides full-cycle annual filing support for companies and LLPs across the state — coordinating with your statutory auditor for timely audit completion, preparing comprehensive financial statements in XBRL format as per Schedule III of the Companies Act, drafting detailed Directors' Reports covering business overview, financial performance analysis, CSR disclosures (if applicable), risk management framework, internal control systems, and corporate governance compliance, filing AOC-4 and MGT-7 on the MCA-21 portal with complete accuracy, and arranging Class-3 digital signature certificate (DSC) support for all authorized signatories across every Gujarat city — ensuring zero penalties and uninterrupted business continuity.`,
  },
  {
    heading: "Why Gujarat Entrepreneurs Choose Taxvio for ROC & Corporate Compliance",
    body: `Gujarat's entrepreneurial DNA spans across incredibly diverse sectors — Ahmedabad's pharmaceuticals, chemicals, and textile manufacturing alongside emerging fintech and SaaS startups; Surat's diamond cutting & polishing industry employing over 10 lakh workers and textile powerhouses exporting globally; Vadodara's petrochemical refineries, chemical plants, and pharmaceutical R&D centers; Rajkot's diesel engine manufacturing, auto-parts production, and foundry clusters; Gandhinagar's IT parks, government infrastructure projects, and administrative service providers; Jamnagar's world's largest single-location refinery and port-based logistics; Morbi's ceramic tile manufacturing contributing 70% of India's production; Vapi and Ankleshwar's concentrated chemical industrial estates; and countless MSME units across every taluka manufacturing everything from agro-processing equipment to precision engineering components.

Each of these sectors has unique corporate structuring requirements — IT services companies require ESOP frameworks and investor-friendly cap tables for Series A funding rounds; manufacturing units need robust compliance for environmental clearances, factory licenses, and GST input credit optimization; pharmaceutical companies must maintain drug licensing and GMP certifications alongside corporate filings; export houses require IEC codes, EPCG scheme benefits, and SEZ registration coordination; and family-owned businesses transitioning from partnerships to corporate structures need succession planning, shareholder agreements, and tax-efficient capital structures.

Taxvio's ROC service delivery model is purpose-built for Gujarat's fast-paced business environment — our WhatsApp-first communication ensures instant CA/CS connectivity whether you're operating from Ahmedabad's CG Road business district or a manufacturing unit in Ankleshwar's GIDC estate; our digital-first documentation process eliminates the need for physical visits to CA offices, enabling entrepreneurs to focus on business growth while we handle complete MCA compliance; our transparent fixed-fee pricing with zero hidden consultation charges provides cost predictability critical for startup budgeting; and our deep understanding of Gujarat's industrial landscape — from GIFT City's IFSC regulations to Dholera SIR's infrastructure incentives — ensures contextually relevant corporate structuring advice that aligns with your business goals, investor expectations, and regulatory obligations. Whether you're a first-generation entrepreneur registering your maiden company or a serial founder incorporating your fifth venture, Taxvio delivers the same CA-quality, personalized ROC compliance service to every Gujarat business — from Kutch to Dang district.`,
  },
];

const TIER1_CITIES = GJ_CITIES.filter((c) => c.tier === 1);
const TIER2_CITIES = GJ_CITIES.filter((c) => c.tier === 2).slice(0, 18);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Gujarat Cities — ROC Services | Taxvio",
  numberOfItems: GJ_CITIES.length,
  itemListElement: GJ_CITIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — ROC & Company Registration Services`,
    url: `https://www.taxvio.in/state/gujarat/roc/${slugifyCity(c.name)}`,
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
      href={`/state/gujarat/roc/${slugifyCity(name)}`}
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
      href={`/state/gujarat/roc/${slugifyCity(name)}`}
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
export default function GujaratROCIndexPage() {
  return (
    <>
      <Script
        id="gj-roc-schema"
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

          <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">
                  ROC Services — Gujarat
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Gujarat · {GJ_CITIES.length}+ Cities · ROC & MCA · 100% Online
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Company Registration &
                  <span className="block mt-2 bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    ROC Services in Gujarat
                  </span>
                </h1>

                <p className="mt-6 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Professional{" "}
                  <strong className="text-white">
                    Private Limited company formation
                  </strong>
                  ,{" "}
                  <strong className="text-white">LLP & OPC registration</strong>
                  , Section 8 NGO incorporation, annual MCA compliance, director appointments, capital restructuring &amp;
                  company closure — across all{" "}
                  <strong className="text-white">{GJ_CITIES.length}+</strong> Gujarat
                  cities including Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar. CA & CS assisted from{" "}
                  <strong className="text-blue-300">₹3,999</strong>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    {
                      val: `${GJ_CITIES.length}+`,
                      label: "Gujarat Cities",
                      icon: Globe,
                    },
                    {
                      val: "15,000+",
                      label: "Companies Formed",
                      icon: Building2,
                    },
                    { 
                      val: "₹3,999", 
                      label: "Starting Price", 
                      icon: TrendingUp 
                    },
                  ].map(({ val, label, icon: Icon }) => (
                    <div
                      key={label}
                      className="text-center rounded-2xl py-4 px-3"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <Icon size={15} className="text-blue-300 mx-auto mb-2" />
                      <p className="text-2xl font-extrabold text-white leading-tight">{val}</p>
                      <p className="text-[10px] text-white/50 mt-1 leading-tight font-medium">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20ROC%20services%20in%20Gujarat."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-8 py-4 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={17} /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-[#1a3c5e] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right — service grid */}
              <div className="hidden lg:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-5">
                  All ROC services across Gujarat
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {ROC_SERVICES.map(({ label, price, icon, desc }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.13)",
                      }}
                    >
                      <span className="text-2xl shrink-0">{icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white/90 truncate">
                          {label}
                        </p>
                        <p className="text-xs text-blue-300 font-semibold mt-0.5">
                          {price} · {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-white/30 text-center leading-relaxed">
                  100% online · No office visit required · CA & CS certified compliance
                </p>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
              {[
                { icon: BadgeCheck, label: "ICAI Certified CAs" },
                { icon: Star, label: "4.9★ Client Rating" },
                { icon: Zap, label: "Same-Day Response" },
                { icon: Shield, label: "MCA Compliant" },
                { icon: Award, label: "15,000+ Companies" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-white/55 text-xs font-medium"
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
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-9 rounded-full bg-gradient-to-b from-[#1a3c5e] to-blue-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#1a3c5e]">
                  Major Commercial Hubs
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                  ROC Services in Gujarat's Key Cities
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
        <section className="py-14 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-400 to-indigo-600" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                  District Headquarters & Industrial Centers
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  Company Registration in Gujarat District Towns
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_CITIES.map((c) => (
                <Link
                  key={c.name}
                  href={`/state/gujarat/roc/${slugifyCity(c.name)}`}
                  className="group flex items-center gap-3 p-4 bg-[#f5f8fd] border border-[#dce8f5] rounded-xl hover:border-[#1a3c5e]/30 hover:shadow-md hover:bg-white transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1a3c5e]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a3c5e] transition-all">
                    <MapPin
                      size={14}
                      className="text-[#1a3c5e] group-hover:text-white transition-all"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-gray-800 group-hover:text-[#1a3c5e] transition truncate">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate mt-0.5">
                      {c.district}
                    </p>
                  </div>
                  <ArrowRight
                    size={12}
                    className="ml-auto shrink-0 text-gray-300 group-hover:text-[#1a3c5e] transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ALL CITIES BY REGION ════════ */}
        <section className="py-20 bg-[#f5f8fd]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3c5e] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                Complete Gujarat Coverage
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a3c5e] mt-5">
                ROC Services — All Gujarat Cities by Region
              </h2>
              <p className="text-gray-500 mt-3 text-sm max-w-2xl mx-auto">
                Professional company registration and MCA compliance services available across every city and industrial town in Gujarat
              </p>
            </div>
            <div className="space-y-5">
              {Object.entries(GJ_REGIONS).map(([region]) => {
                const regionCities = GJ_CITIES.filter(
                  (c) => c.region === region
                );
                if (regionCities.length === 0) return null;
                return (
                  <div
                    key={region}
                    className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-[#1a3c5e] to-[#2563a8] px-6 py-4 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin
                          size={14}
                          className="text-blue-300 shrink-0"
                        />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-3 py-1">
                        {regionCities.length} cities
                      </span>
                    </div>
                    <div className="bg-white px-4 py-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a3c5e] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                Complete ROC Services
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a3c5e] mt-5">
                All ROC & MCA Services for Gujarat Businesses
              </h2>
              <p className="text-gray-500 mt-3 text-sm max-w-3xl mx-auto leading-relaxed">
                Every service below is available across all {GJ_CITIES.length}+ Gujarat cities — 100% online process, CA & CS professionally assisted, transparent fixed pricing
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Private Limited Company Formation",
                  price: "₹8,999",
                  href: "/serviceslist/roc/private-limited-formation",
                  icon: "🏢",
                  color: "bg-blue-50 border-blue-100",
                  points: [
                    "Name approval via SPICe+ / RUN",
                    "MOA & AOA professional drafting",
                    "Certificate of Incorporation from RoC",
                    "PAN, TAN & DSC included in package",
                  ],
                },
                {
                  title: "LLP Registration",
                  price: "₹5,999",
                  href: "/serviceslist/roc/llp-formation",
                  icon: "🏛️",
                  color: "bg-violet-50 border-violet-100",
                  points: [
                    "Name reservation via LLP-RUN form",
                    "LLP agreement professionally drafted",
                    "Certificate of Incorporation",
                    "DPIN & DSC for designated partners",
                  ],
                },
                {
                  title: "One Person Company (OPC) Registration",
                  price: "₹4,999",
                  href: "/serviceslist/roc/opc-formation",
                  icon: "👤",
                  color: "bg-emerald-50 border-emerald-100",
                  points: [
                    "Perfect for solo entrepreneurs",
                    "Nominee director appointment support",
                    "MOA & AOA drafting & filing",
                    "Complete incorporation certificate",
                  ],
                },
                {
                  title: "Section 8 Company Registration",
                  price: "₹8,999",
                  href: "/serviceslist/roc/section-8-company",
                  icon: "🤝",
                  color: "bg-amber-50 border-amber-100",
                  points: [
                    "For NGOs & non-profit institutions",
                    "Section 8 licence from RoC Gujarat",
                    "MOA & AOA for charitable purposes",
                    "12A & 80G registration guidance",
                  ],
                },
                {
                  title: "Annual ROC Compliance Filing",
                  price: "₹8,999",
                  href: "/serviceslist/roc/annual-roc-compliance",
                  icon: "📋",
                  color: "bg-teal-50 border-teal-100",
                  points: [
                    "AOC-4 — financial statements filing",
                    "MGT-7 / MGT-7A — comprehensive annual return",
                    "LLP Form 11 & Form 8 filing",
                    "Directors' Report professional preparation",
                  ],
                },
                {
                  title: "Director Appointment / Resignation",
                  price: "₹2,999",
                  href: "/serviceslist/roc/director-appointment-resignation",
                  icon: "👔",
                  color: "bg-rose-50 border-rose-100",
                  points: [
                    "DIR-12 e-filing with MCA portal",
                    "Board resolution professional drafting",
                    "DIN application & DSC coordination",
                    "Complete MCA approval tracking",
                  ],
                },
                {
                  title: "Company Name Change",
                  price: "₹2,999",
                  href: "/serviceslist/roc/company-name-change",
                  icon: "✏️",
                  color: "bg-indigo-50 border-indigo-100",
                  points: [
                    "Name availability verification via RUN",
                    "RUN form and INC-24 e-filing",
                    "MOA & AOA alteration filing",
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
                    "SH-7 form professional filing",
                    "MOA capital clause alteration",
                    "Board & EGM resolution drafting",
                    "Updated capital structure certificate",
                  ],
                },
                {
                  title: "Company Closure / Strike Off",
                  price: "₹7,999",
                  href: "/serviceslist/roc/company-closure",
                  icon: "🔒",
                  color: "bg-gray-50 border-gray-100",
                  points: [
                    "STK-2 e-filing for voluntary strike-off",
                    "NIL return filing if mandated",
                    "Complete documentation & affidavit",
                    "Closure confirmation from RoC",
                  ],
                },
              ].map(({ title, price, href, icon, color, points }) => (
                <Link
                  key={title}
                  href={href}
                  className={`group relative flex flex-col p-6 bg-white border ${
                    color.split(" ")[1]
                  } rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
                >
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-[50px] opacity-[0.05]"
                    style={{
                      background: "linear-gradient(135deg,#1a3c5e,#2563a8)",
                    }}
                  />
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${color} border flex items-center justify-center text-2xl shrink-0`}
                    >
                      {icon}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-[#1a3c5e] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight
                        size={14}
                        className="text-gray-300 group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#1a3c5e] transition-colors mb-2 leading-tight">
                    {title}
                  </h3>
                  <span className="text-xs font-bold text-[#1a3c5e] bg-blue-50 px-3 py-1 rounded-full self-start mb-4">
                    {price}
                  </span>
                  <ul className="space-y-2 mt-auto">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed"
                      >
                        <CheckCircle
                          size={11}
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
          <div className="max-w-5xl mx-auto px-6 space-y-14">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-6">
                <div className="w-1.5 rounded-full bg-gradient-to-b from-[#1a3c5e] to-blue-400 shrink-0 mt-1.5" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3c5e] mb-5 leading-tight">
                    {heading}
                  </h2>
                  <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                    {body.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ CTA BANNER ════════ */}
        <section className="py-16 px-6 bg-[#f5f8fd]">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-[#1a3c5e] rounded-3xl overflow-hidden p-12 md:p-16 text-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a3c5e] to-[#091e33]" />
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-400/10 blur-[100px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex-1 text-center lg:text-left">
                  <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                    <Zap size={12} className="text-blue-300" /> Ready to Register Your Company?
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                    Professional ROC Services Across All Gujarat Cities
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    Whether you're in Ahmedabad's startup hub, Surat's diamond district, Vadodara's chemical cluster, or any industrial town across Gujarat — our CA & CS team delivers the same expert ROC compliance service. 100% online. Same-day WhatsApp response. Starting ₹3,999.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20ROC%20services%20in%20Gujarat."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-[#1a3c5e] text-sm font-bold shadow-2xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={17} /> WhatsApp Us Now
                  </a>
                  <a
                    href="tel:918937980366"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 text-white px-8 py-4 text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    <Phone size={17} /> Call Expert
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