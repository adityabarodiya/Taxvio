// app/state/bihar/roc/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  CheckCircle, Globe, Building2,
} from "lucide-react";
import { BIHAR_AREAS, BIHAR_REGIONS, slugifyArea } from "@/data/bihar-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Company Registration & ROC Compliance Services Across Bihar | Taxvio",
  description:
    "Taxvio provides expert Private Limited, LLP, OPC & Section 8 Company formation; annual ROC compliance (AOC-4, MGT-7); director appointment/resignation; company name change; authorised capital increase; and company closure/strike-off across 200+ areas in Bihar — Patna, Gaya, Bhagalpur, Muzaffarpur, Darbhanga, Purnia & more. CA-assisted, 100% online, starting ₹3,999.",
  keywords: [
    "company registration Bihar",
    "private limited company Bihar areas",
    "LLP registration Bihar",
    "ROC compliance Bihar",
    "OPC registration Bihar",
    "Section 8 company Bihar",
    "annual ROC filing AOC-4 MGT-7 Bihar",
    "company name change Bihar",
    "company strike off Bihar",
    "Taxvio Bihar ROC",
    "company registration Patna",
    "ROC Patna Bihar",
    "private limited Gaya Bhagalpur Muzaffarpur",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/bihar/roc" },
  openGraph: {
    title: "ROC & Company Registration Services Across 200+ Bihar Areas | Taxvio",
    description:
      "Expert company formation, annual ROC compliance, director changes & company closure across all Bihar areas — CA-assisted, from ₹3,999.",
    url: "https://www.taxvio.in/state/bihar/roc",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROC & Company Registration Across Bihar | Taxvio",
    description:
      "Company formation, LLP, OPC, annual ROC compliance across 200+ Bihar areas — from ₹3,999.",
  },
  robots: { index: true, follow: true },
};

/* ─── Service Quick List ─────────────────────────────────────────────────── */
const ROC_SERVICES_QUICK = [
  { label: "Pvt Ltd Formation",     price: "₹7,999",  icon: "🏢", desc: "Inc. in 7–10 days" },
  { label: "LLP Registration",      price: "₹6,999",  icon: "🤝", desc: "With LLP agreement" },
  { label: "OPC Registration",      price: "₹6,999",  icon: "👤", desc: "Solo entrepreneur" },
  { label: "Section 8 Company",     price: "₹10,999", icon: "💚", desc: "NGO / non-profit" },
  { label: "Annual ROC Compliance", price: "₹4,999",  icon: "📅", desc: "AOC-4 & MGT-7" },
  { label: "Company Closure",       price: "₹5,999",  icon: "🔒", desc: "STK-2 strike off" },
];

/* ─── SEO Sections ──────────────────────────────────────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "Company Registration Services Across Bihar",
    body: `Bihar's corporate landscape has expanded significantly over the past decade — driven by agri-processing entrepreneurs formalising operations in Muzaffarpur, Darbhanga, and Samastipur; food and FMCG manufacturing companies incorporating in and around Patna's Phulwarisharif and Hajipur industrial areas; silk and textile businesses converting decade-old proprietorships into Private Limited structures in Bhagalpur; construction and infrastructure companies registering in Patna's Boring Road and Bailey Road commercial corridors; and a rising wave of edtech, coaching, and consulting startups incorporating across the state. Whatever the structure — Private Limited, LLP, OPC, or Section 8 non-profit — every entity incorporated by a Bihar-based promoter with a Bihar registered office falls under the jurisdiction of the Registrar of Companies, Patna (RoC Patna), which oversees corporate registrations across Bihar and Jharkhand.

Taxvio handles complete company formation across all 200+ areas of Bihar — from Tier-1 commercial hubs like Patna, Muzaffarpur, Gaya, and Bhagalpur, to established district headquarters like Darbhanga, Purnia, Arrah, and Chapra, down to tehsil-level commercial centres across Magadh, Tirhut, Kosi, Mithila, and Saran divisions. Our MCA-registered CA team manages the complete SPICe+ incorporation process — name reservation through the RUN (Reserve Unique Name) portal, DIN and DSC procurement, MOA/AOA drafting with appropriate object clauses, and simultaneous PAN/TAN application — typically completing standard Private Limited and OPC incorporations within 7–10 working days of DSC readiness.`,
  },
  {
    heading: "Annual ROC Compliance and Corporate Maintenance for Bihar Companies",
    body: `Every company and LLP registered through RoC Patna carries recurring annual compliance obligations that continue for the entity's entire operational life. For Private Limited Companies and OPCs incorporated in Bihar, these mandatory filings include AOC-4 (financial statements) due within 30 days of the Annual General Meeting, and MGT-7 or MGT-7A (annual return) due within 60 days of the AGM — with the AGM itself required to be held within 6 months of the financial year end (i.e., by September 30 for March-end companies). Additionally, DIN KYC (DIR-3 KYC) must be completed for every director holding a DIN by September 30 each year, failing which the DIN gets deactivated — a frequently overlooked compliance that catches Bihar business owners off guard. LLPs registered in Bihar face a parallel compliance calendar: Form 11 (annual return) must be filed by May 30, and Form 8 (statement of accounts and solvency) must be filed by October 30.

Given that RoC Patna serves a jurisdiction with a high concentration of newly incorporated small companies that may lack dedicated finance teams, missed annual ROC deadlines — and the resulting escalating additional fees, MCA disqualification proceedings under Section 164(2), and ACTIVE-to-INACTIVE status changes on the MCA portal — are among the most common compliance crises Bihar businesses bring to Taxvio. Our annual ROC compliance service for Bihar companies covers complete financial statement preparation, board meeting and AGM minute drafting, AOC-4 and MGT-7/MGT-7A filing, DIN KYC for all directors, and equivalent LLP Form 11 and Form 8 management — keeping every client company's RoC Patna record consistently ACTIVE.`,
  },
  {
    heading: "Why Bihar Businesses Across Every District Choose Taxvio",
    body: `Bihar's company formation activity spans a remarkable range of business models and sectors — agri-processing entrepreneurs incorporating in Muzaffarpur's litchi belt and Samastipur's grain markets, construction companies formalising operations in Patna's rapidly expanding real estate sector, silk manufacturers and exporters registering Private Limiteds in Bhagalpur to access export finance, coaching and education companies incorporating in Patna's Boring Road and Kankarbagh educational districts, healthcare clinics and diagnostic centres registering across all 38 districts, and NGOs and welfare foundations pursuing Section 8 registration to access CSR funding and government scheme benefits. Each segment interacts with RoC Patna's specific processes differently, and familiarity with the office's name-approval objection patterns, SPICe+ filing requirements, and Director Identification Number processing timelines materially reduces resubmission cycles and incorporation delays.

Taxvio's ROC team has filed incorporation applications and annual compliance documents with RoC Patna for clients across nearly every Bihar district — from the Patna urban and Patna Sahib commercial belts to district commercial centres in Muzaffarpur, Gaya, Bhagalpur, Darbhanga, and Purnia. Our WhatsApp-first service model ensures that an agri-processor incorporating in Muzaffarpur's Mithan Patti area and a tech startup incorporating in Patna's IT hub at Dak Bungalow receive the exact same CA-quality, same-day response — with transparent, all-inclusive pricing and zero office visits required for any of our nine ROC services.`,
  },
];

/* ─── Derived area lists ─────────────────────────────────────────────────── */
const TIER1_AREAS = BIHAR_AREAS.filter((c) => c.tier === 1);
const TIER2_AREAS = BIHAR_AREAS.filter((c) => c.tier === 2);

/* ─── Schema ─────────────────────────────────────────────────────────────── */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bihar Areas — ROC & Company Registration Services | Taxvio",
  numberOfItems: BIHAR_AREAS.length,
  itemListElement: BIHAR_AREAS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — ROC Services`,
    url: `https://www.taxvio.in/state/bihar/roc/${slugifyArea(c.name)}`,
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function MajorAreaCard({
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
      href={`/state/bihar/roc/${slugifyArea(name)}`}
      aria-label={`ROC services in ${name}, Bihar`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
      <div className="relative p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">🏙️</span>
          <ArrowRight
            size={15}
            className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5"
          />
        </div>
        <p className="font-bold text-base text-white leading-tight group-hover:text-sky-200 transition-colors">
          {name}
        </p>
        <p className="text-[11px] text-white/50 mt-0.5">
          {district} · {region}
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {["Pvt Ltd", "LLP", "OPC", "ROC"].map((t) => (
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

function AreaLink({ name }: { name: string }) {
  return (
    <Link
      href={`/state/bihar/roc/${slugifyArea(name)}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150"
    >
      <MapPin
        size={9}
        className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors"
      />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function BiharROCIndexPage() {
  return (
    <>
      <Script
        id="bihar-roc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
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
                "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">
                  ROC &amp; Company Registration — Bihar
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* Live badge */}
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Bihar · 200+ Areas · ROC / MCA · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  Company Registration &amp; ROC Services
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Across Every Bihar Area
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert{" "}
                  <strong className="text-white">
                    Private Limited, LLP &amp; OPC formation
                  </strong>
                  , annual ROC compliance (AOC-4, MGT-7), director changes,
                  company name change, authorised capital increase &amp; company
                  closure across{" "}
                  <strong className="text-white">{BIHAR_AREAS.length}+</strong>{" "}
                  Bihar towns &amp; districts. CA-assisted, starting{" "}
                  <strong className="text-sky-300">₹3,999</strong>.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    {
                      val: `${BIHAR_AREAS.length}+`,
                      label: "Bihar Areas Covered",
                      icon: Globe,
                    },
                    {
                      val: "1,800+",
                      label: "Companies Formed",
                      icon: Building2,
                    },
                    {
                      val: "₹3,999",
                      label: "Starting Price",
                      icon: TrendingUp,
                    },
                  ].map(({ val, label, icon: Icon }) => (
                    <div
                      key={label}
                      className="text-center rounded-2xl py-4 px-2"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <Icon
                        size={14}
                        className="text-sky-300 mx-auto mb-1.5"
                      />
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20ROC%20help%20in%20Bihar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right service grid */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">
                  ROC services in every Bihar area
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {ROC_SERVICES_QUICK.map(({ label, price, icon, desc }) => (
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
                        <p className="text-[10px] text-sky-300 font-semibold">
                          {price} · {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/30 text-center">
                  100% online · No office visit · CA-certified
                </p>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck,    label: "MCA-Registered CAs" },
                { icon: Star,          label: "4.9★ Rating" },
                { icon: Zap,           label: "Same-Day Response" },
                { icon: Shield,        label: "100% Secure" },
                { icon: MessageCircle, label: "WhatsApp Support" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-sky-400 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f8fbfd"
            />
          </svg>
        </section>

        {/* ════════ MAJOR AREAS ════════ */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">
                  Major Commercial Hubs
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  ROC Services in Key Bihar Cities
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_AREAS.map((c) => (
                <MajorAreaCard
                  key={c.name}
                  name={c.name}
                  district={c.district}
                  region={c.region}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIER-2 AREAS ════════ */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-violet-400 to-purple-600" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-violet-600">
                  District Headquarters
                </p>
                <h2 className="text-xl font-extrabold text-gray-800">
                  Company Registration in Bihar District Towns
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_AREAS.slice(0, 30).map((c) => (
                <Link
                  key={c.name}
                  href={`/state/bihar/roc/${slugifyArea(c.name)}`}
                  className="group flex items-center gap-2.5 p-3.5 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm hover:bg-white transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                    <MapPin
                      size={13}
                      className="text-[#00416a] group-hover:text-white transition-all"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-800 group-hover:text-[#00416a] transition truncate">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate">
                      {c.district}
                    </p>
                  </div>
                  <ArrowRight
                    size={11}
                    className="ml-auto shrink-0 text-gray-300 group-hover:text-[#00416a] transition-all"
                  />
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
                ROC Services — All Bihar Areas by Division
              </h2>
            </div>
            <div className="space-y-4">
              {Object.entries(BIHAR_REGIONS).map(([region]) => {
                const regionAreas = BIHAR_AREAS.filter(
                  (c) => c.region === region
                );
                if (!regionAreas.length) return null;
                return (
                  <div
                    key={region}
                    className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-[#00416a] to-[#005a90] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin
                          size={13}
                          className="text-sky-300 shrink-0"
                        />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionAreas.length} areas
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionAreas.map((c) => (
                        <AreaLink key={c.name} name={c.name} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ SERVICES GRID ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                ROC Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                All ROC Services Available Across Every Bihar Area
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Every service below is available across all {BIHAR_AREAS.length}
                + Bihar areas — 100% online, CA-assisted.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  title: "Private Limited Company Formation",
                  price: "₹7,999",
                  href: "/serviceslist/roc/private-limited-formation",
                  icon: "🏢",
                  color: "bg-blue-50 border-blue-100",
                  points: [
                    "Name approval & MOA/AOA drafting",
                    "SPICe+ filing — DIN, DSC, PAN/TAN",
                    "Certificate of Incorporation in 7–10 days",
                    "RoC Patna jurisdiction",
                  ],
                },
                {
                  title: "LLP Registration",
                  price: "₹6,999",
                  href: "/serviceslist/roc/llp-formation",
                  icon: "🤝",
                  color: "bg-violet-50 border-violet-100",
                  points: [
                    "Name reservation on MCA portal",
                    "LLP agreement drafting",
                    "DPIN & DSC for designated partners",
                    "Incorporation certificate issuance",
                  ],
                },
                {
                  title: "OPC Registration",
                  price: "₹6,999",
                  href: "/serviceslist/roc/opc-formation",
                  icon: "👤",
                  color: "bg-emerald-50 border-emerald-100",
                  points: [
                    "Single-member company structure",
                    "MOA & AOA drafting for OPC",
                    "Nominee director consent (INC-3)",
                    "Incorporation certificate",
                  ],
                },
                {
                  title: "Section 8 Company Registration",
                  price: "₹10,999",
                  href: "/serviceslist/roc/section-8-company",
                  icon: "💚",
                  color: "bg-teal-50 border-teal-100",
                  points: [
                    "Name approval & object clause drafting",
                    "MOA & AOA for non-profit objectives",
                    "Section 8 licence application",
                    "No minimum capital requirement",
                  ],
                },
                {
                  title: "Annual ROC Compliance",
                  price: "₹4,999",
                  href: "/serviceslist/roc/annual-roc-compliance",
                  icon: "📅",
                  color: "bg-amber-50 border-amber-100",
                  points: [
                    "AOC-4 (financial statements) filing",
                    "MGT-7 / MGT-7A (annual return) filing",
                    "LLP Form 11 & Form 8",
                    "Board & AGM minute drafting",
                  ],
                },
                {
                  title: "Director Appointment / Resignation",
                  price: "₹2,499",
                  href: "/serviceslist/roc/director-appointment-resignation",
                  icon: "🔄",
                  color: "bg-sky-50 border-sky-100",
                  points: [
                    "DIR-12 filing within 30 days",
                    "Board resolution drafting",
                    "DIN application for new directors",
                    "MCA approval tracking",
                  ],
                },
                {
                  title: "Company Name Change",
                  price: "₹4,999",
                  href: "/serviceslist/roc/company-name-change",
                  icon: "✏️",
                  color: "bg-rose-50 border-rose-100",
                  points: [
                    "Name availability check (RUN)",
                    "EGM special resolution & MGT-14",
                    "MOA & AOA alteration (INC-24)",
                    "Fresh Certificate of Incorporation",
                  ],
                },
                {
                  title: "Increase Authorised Capital",
                  price: "₹3,499",
                  href: "/serviceslist/roc/authorized-capital-increase",
                  icon: "📈",
                  color: "bg-indigo-50 border-indigo-100",
                  points: [
                    "SH-7 filing with RoC Patna",
                    "MOA alteration (Capital Clause)",
                    "Board & EGM resolution drafting",
                    "Updated capital structure",
                  ],
                },
                {
                  title: "Company Closure / Strike Off",
                  price: "₹5,999",
                  href: "/serviceslist/roc/company-closure",
                  icon: "🔒",
                  color: "bg-gray-50 border-gray-100",
                  points: [
                    "STK-2 (Fast Track Exit) filing",
                    "Statement of accounts — nil liabilities",
                    "Indemnity bond & affidavit prep",
                    "Closure certificate from RoC Patna",
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
                      background: "linear-gradient(135deg,#00416a,#0ea5e9)",
                    }}
                  />
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${color} border flex items-center justify-center text-xl shrink-0`}
                    >
                      {icon}
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#00416a] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight
                        size={13}
                        className="text-gray-300 group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors mb-1">
                    {title}
                  </h3>
                  <span className="text-[11px] font-bold text-[#00416a] bg-blue-50 px-2.5 py-0.5 rounded-full self-start mb-3">
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
        <section className="py-20 bg-[#f8fbfd] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4">
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
        <section className="py-16 bg-[#00416a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">
                All Bihar Areas — ROC &amp; Company Registration
              </h2>
              <p className="text-white/55 text-sm mt-2">
                Click your area for dedicated company formation &amp; ROC
                compliance services
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {BIHAR_AREAS.map((c, i) => (
                <Link
                  key={`${c.name}-${i}`}
                  href={`/state/bihar/roc/${slugifyArea(c.name)}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#00416a]"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.80)",
                  }}
                >
                  <MapPin
                    size={9}
                    className="text-sky-400 group-hover:text-[#00416a] shrink-0 transition-colors"
                  />
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
                    <Zap size={11} className="text-sky-300" /> Ready to
                    Incorporate?
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    Company Registration &amp; ROC — Wherever You Are in Bihar
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day WhatsApp response. Our CA team serves
                    every Bihar district — Patna to Purnia, Bhagalpur to
                    Champaran. Private Ltd, LLP, OPC, annual ROC compliance
                    starting ₹3,999.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20ROC%20help%20in%20Bihar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
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