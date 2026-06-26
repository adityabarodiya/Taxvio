// app/state/uttar-pradesh/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  Globe, CheckCircle, Building2, Receipt, Landmark, Calculator,
} from "lucide-react";
import { UP_CITIES, UP_REGIONS, slugifyCity } from "@/data/up-gst-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Taxvio Uttar Pradesh — GST, Income Tax, ROC & FSSAI Services Across 800+ Cities",
  description:
    "Taxvio is Uttar Pradesh's CA-assisted tax & compliance partner — GST registration & return filing, income tax return filing, company registration & ROC compliance, and FSSAI food license across 800+ cities and all 75 districts of UP. 100% online, starting ₹499.",
  keywords: [
    "Taxvio Uttar Pradesh",
    "tax services UP",
    "GST income tax ROC FSSAI UP",
    "CA services Uttar Pradesh",
    "business compliance UP",
    "company registration UP",
    "GST registration UP cities",
    "ITR filing UP",
    "FSSAI license UP",
    "online CA UP",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/uttar-pradesh" },
  openGraph: {
    title: "Taxvio Uttar Pradesh — GST, Income Tax, ROC & FSSAI Services",
    description: "CA-assisted GST, income tax, company registration & FSSAI services across 800+ UP cities — 100% online, starting ₹499.",
    url: "https://www.taxvio.in/state/uttar-pradesh",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxvio Uttar Pradesh — All Tax & Compliance Services",
    description: "GST, Income Tax, ROC & FSSAI services across 800+ UP cities — from ₹499.",
  },
  robots: { index: true, follow: true },
};

/* ─── Service Hub Data ───────────────────────────────────────────────────── */
const SERVICE_HUBS = [
  {
    key: "gst",
    title: "GST Services",
    subtitle: "Registration, Returns & Compliance",
    href: "/state/uttar-pradesh/gst-services",
    icon: "🧾",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    price: "₹499",
    stat: "12,000+ Returns Filed",
    services: ["GST Registration", "GSTR-1 / GSTR-3B Filing", "GSTR-9 Annual Return", "GST LUT Filing", "Notice Reply", "GST Refund"],
  },
  {
    key: "income-tax",
    title: "Income Tax Services",
    subtitle: "ITR Filing, TDS & Tax Audit",
    href: "/state/uttar-pradesh/income-tax-services",
    icon: "💼",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    price: "₹499",
    stat: "2.5 Cr+ UP Taxpayers",
    services: ["ITR – Salaried / Proprietor", "ITR – Firm / LLP / Company", "TDS / TCS Return Filing", "Tax Audit (Sec. 44AB)", "12A / 80G Registration", "PAN / TAN Application"],
  },
  {
    key: "roc",
    title: "Company Registration & ROC",
    subtitle: "Formation & Annual Compliance",
    href: "/state/uttar-pradesh/roc-services",
    icon: "🏢",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-700",
    price: "₹2,999",
    stat: "2,400+ Companies Formed",
    services: ["Private Limited Formation", "LLP / OPC Registration", "Section 8 Company", "Annual ROC Compliance", "Director Changes", "Company Closure"],
  },
  {
    key: "fssai",
    title: "FSSAI Food License",
    subtitle: "Registration, License & Renewal",
    href: "/state/uttar-pradesh/fssai-services",
    icon: "🥗",
    gradient: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-700",
    price: "₹1,499",
    stat: "3,200+ Licenses Filed",
    services: ["FSSAI Basic Registration", "FSSAI State License", "FSSAI Central License", "FSSAI Renewal", "License Modification", "Annual Return (Form D-1)"],
  },
];

/* ─── SEO Sections ──────────────────────────────────────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "Taxvio — Uttar Pradesh's CA-Assisted Compliance Partner",
    body: `Uttar Pradesh is India's most populous state and one of its most economically diverse — spanning the IT and manufacturing corridors of Noida and Greater Noida, the historic trade and tourism economy of Agra and Varanasi, the leather and textile industries of Kanpur and Bareilly, the state administrative and services hub of Lucknow, the carpet exports of Bhadohi, the brassware trade of Moradabad, the glass manufacturing of Firozabad, and a vast agricultural and dairy economy spread across western, central, and eastern UP. With over 75 districts and thousands of cities, towns, and tehsils, UP's businesses face a uniquely varied set of tax, regulatory, and compliance requirements.

Taxvio was built to serve exactly this diversity — offering CA-assisted GST, Income Tax, Company Registration (ROC), and FSSAI Food License services across every corner of Uttar Pradesh, from metro cities like Noida and Lucknow to district headquarters like Muzaffarnagar, Bareilly, and Gorakhpur, down to small tehsil towns like Khatauli, Nakur, and Rasra. Our 100% online, WhatsApp-first service model means a trader in a small UP town gets the exact same CA-quality compliance support as a startup in Noida's tech corridor — without ever needing to visit an office.`,
  },
  {
    heading: "Four Pillars of Compliance — One Platform for All of UP",
    body: `Every business in Uttar Pradesh — regardless of size, sector, or location — typically needs support across four interconnected compliance domains: GST registration and return filing for indirect tax compliance; Income Tax return filing, TDS/TCS returns, and tax audit for direct tax compliance; Company Registration and ongoing ROC compliance for corporate legal structure; and FSSAI Food License for businesses in the food sector — one of UP's largest economic segments.

Taxvio brings all four service pillars under one roof, eliminating the need for UP businesses to coordinate between multiple CAs, company secretaries, and food safety consultants. Our integrated approach means that when we incorporate your Private Limited Company in Noida or Kanpur, we simultaneously handle GST registration, PAN/TAN application, and — if you're a food business — FSSAI registration, so your entity is fully operational and compliant from Day 1, not weeks or months later after chasing multiple service providers.`,
  },
  {
    heading: "Why Uttar Pradesh Businesses Trust Taxvio",
    body: `Headquartered in Khatauli, Muzaffarnagar, Taxvio understands Uttar Pradesh's business landscape from the ground up — the seasonal cash-flow patterns of agricultural trading, the GST nuances of textile and dairy processing common across western UP, the ROC jurisdiction quirks of RoC Kanpur (which governs all UP-incorporated companies), the UTFDB food safety inspection patterns relevant to FSSAI licensing, and the income tax scrutiny trends that UP's diverse taxpayer base commonly encounters.

Our CA team has filed over 12,000 GST and income tax returns, formed more than 2,400 companies and LLPs, and processed over 3,200 FSSAI license applications for businesses across all of Uttar Pradesh's 75 districts. Every service is backed by transparent, upfront pricing starting at ₹499, same-day WhatsApp response, and a 4.9-star average client rating — making Taxvio the trusted compliance partner for thousands of UP businesses, from solo entrepreneurs and home-based food sellers to multi-crore manufacturing companies and exporters.`,
  },
];

const TIER1_CITIES = UP_CITIES.filter((c) => c.tier === 1);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Taxvio Uttar Pradesh — Service Hubs",
  numberOfItems: SERVICE_HUBS.length,
  itemListElement: SERVICE_HUBS.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://www.taxvio.in${s.href}`,
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  telephone: "+918937980366",
  email: "support@taxvio.in",
  description: "Taxvio provides GST, Income Tax, ROC company registration, and FSSAI food license services across 800+ cities in Uttar Pradesh.",
  areaServed: { "@type": "State", name: "Uttar Pradesh", containedInPlace: { "@type": "Country", name: "India" } },
  address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2400" },
  priceRange: "₹499 - ₹9,999",
  openingHours: "Mo-Sa 09:00-19:00",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Uttar Pradesh", item: "https://www.taxvio.in/state/uttar-pradesh" },
  ],
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function ServiceHubCard({ hub }: { hub: typeof SERVICE_HUBS[number] }) {
  return (
    <Link href={hub.href}
      aria-label={`${hub.title} in Uttar Pradesh`}
      className="group relative bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col">
      <div className={`bg-gradient-to-r ${hub.gradient} p-6 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "16px 16px" }} />
        <div className="relative flex items-center justify-between">
          <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center text-3xl">
            {hub.icon}
          </div>
          <div className="bg-white/20 border border-white/25 rounded-xl px-3 py-1.5 text-center">
            <p className="text-[9px] text-white/60 font-bold uppercase tracking-wide">From</p>
            <p className="text-white font-extrabold text-base leading-tight">{hub.price}</p>
          </div>
        </div>
        <h3 className="relative text-xl font-extrabold text-white mt-4 leading-tight">{hub.title}</h3>
        <p className="relative text-white/70 text-xs mt-1">{hub.subtitle}</p>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold ${hub.text} ${hub.bg} px-2.5 py-1 rounded-full self-start mb-3`}>
          <TrendingUp size={10} /> {hub.stat}
        </div>
        <ul className="space-y-1.5 mb-4 flex-1">
          {hub.services.map((s) => (
            <li key={s} className="flex items-start gap-1.5 text-xs text-gray-600">
              <CheckCircle size={11} className="text-emerald-500 shrink-0 mt-0.5" /> {s}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs font-bold text-[#00416a] group-hover:underline">Explore {hub.title}</span>
          <ArrowRight size={14} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}

function MajorCityCard({ name, district, region }: { name: string; district: string; region: string }) {
  return (
    <Link href={`/city/${slugifyCity(name)}`}
      aria-label={`Tax services in ${name}`}
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
          {["GST", "ITR", "ROC", "FSSAI"].map((t) => (
            <span key={t} className="text-[10px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CityLink({ name }: { name: string }) {
  return (
    <Link href={`/city/${slugifyCity(name)}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150">
      <MapPin size={9} className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors" />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function UttarPradeshPillarPage() {
  return (
    <>
      <Script id="up-pillar-itemlist" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Script id="up-pillar-org" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="up-pillar-breadcrumb" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════════ HERO ════════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">Uttar Pradesh</li>
              </ol>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                75 Districts · 800+ Cities · 4 Services · 100% Online
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Taxvio in Uttar Pradesh
                <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                  GST · Income Tax · ROC · FSSAI
                </span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Your single CA-assisted partner for <strong className="text-white">GST registration &amp; filing</strong>,{" "}
                <strong className="text-white">income tax returns</strong>, <strong className="text-white">company
                registration &amp; ROC compliance</strong>, and <strong className="text-white">FSSAI food license</strong> —
                across all <strong className="text-white">{UP_CITIES.length}+ cities</strong> in Uttar Pradesh. 100% online,
                starting <strong className="text-sky-300">₹499</strong>.
              </p>

              {/* Stats */}
              <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {[
                  { val: "75",     label: "UP Districts Covered", icon: Globe       },
                  { val: `${UP_CITIES.length}+`, label: "Cities Served", icon: MapPin },
                  { val: "4,800+", label: "Businesses Served",     icon: Users       },
                  { val: "₹499",   label: "Starting Price",        icon: TrendingUp  },
                ].map(({ val, label, icon: Icon }) => (
                  <div key={label} className="text-center rounded-2xl py-4 px-2"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <Icon size={14} className="text-sky-300 mx-auto mb-1.5" />
                    <p className="text-xl font-extrabold text-white">{val}</p>
                    <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20help%20in%20Uttar%20Pradesh."
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

        {/* ════════════ SERVICE HUBS ════════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Four Service Pillars
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Everything Your UP Business Needs, in One Place
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Explore each service hub for city-specific pricing, timelines, and CA-assisted filing across Uttar Pradesh.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICE_HUBS.map((hub) => (
                <ServiceHubCard key={hub.key} hub={hub} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ MAJOR CITIES ════════════ */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">Major Cities</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  All Services in Key Uttar Pradesh Cities
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_CITIES.map((c) => (
                <MajorCityCard key={c.name} name={c.name} district={c.district} region={c.region} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ HOME REGION HIGHLIGHT ════════════ */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-[#eef6fc] border-b border-blue-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">Headquartered in Muzaffarnagar, UP</p>
                  <h2 className="text-xl font-extrabold text-gray-800">Local Roots, Statewide Reach</h2>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-blue-200 rounded-2xl px-4 py-2.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700">Same-day WhatsApp consultation available</span>
              </div>
            </div>
            <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm mt-6 max-w-3xl">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#00416a] mb-1">Khatauli, Muzaffarnagar — Western UP</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Taxvio is headquartered in Khatauli, Muzaffarnagar, Uttar Pradesh — giving us first-hand
                    understanding of western UP's dairy, sugar, and textile economy alongside our 100% online
                    service model that reaches every district across the state, from the NCR belt to Purvanchal
                    and Bundelkhand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SEO CONTENT ════════════ */}
        <section className="py-20 bg-white border-b border-gray-100">
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

        {/* ════════════ WHY TAXVIO ════════════ */}
        <section className="py-20 bg-[#f8fbfd] border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why 4,800+ Uttar Pradesh Businesses Trust Taxvio
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users,       title: "One CA Team, Four Domains",      desc: "GST, Income Tax, ROC, and FSSAI under a single coordinated team — no more juggling multiple consultants for related compliance needs.", color: "bg-blue-100 text-blue-700" },
                { icon: Zap,         title: "100% Online — Every UP City",     desc: "Share documents on WhatsApp from anywhere in Uttar Pradesh — Noida to Sonbhadra. No office visits, ever.", color: "bg-emerald-100 text-emerald-700" },
                { icon: Landmark,    title: "UP-Specific Jurisdiction Expertise", desc: "We know RoC Kanpur's processing patterns, UTFDB's inspection norms, and the AO ward structures across all UP income tax circles.", color: "bg-violet-100 text-violet-700" },
                { icon: Shield,      title: "100% Secure & Confidential",     desc: "Strict document confidentiality protocols across all four service lines — your business data stays protected.", color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹499",  desc: "No hidden fees across any service. Clear, upfront pricing for GST, income tax, ROC, and FSSAI — quoted before we start.", color: "bg-teal-100 text-teal-700" },
                { icon: Building2,   title: "All 75 Districts Covered",      desc: "From Noida's tech parks to Sonbhadra's industrial belt — our digital-first model means no UP location is out of reach.", color: "bg-sky-100 text-sky-700" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="group flex items-start gap-4 p-5 bg-white border border-[#deeef7] rounded-2xl hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ ALL CITIES BY REGION ════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All UP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Browse All Uttar Pradesh Cities by Region
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Every city below links to its dedicated Taxvio service page — GST, income tax, ROC, and FSSAI compliance.
              </p>
            </div>
            <div className="space-y-4">
              {Object.entries(UP_REGIONS).map(([region]) => {
                const regionCities = UP_CITIES.filter((c) => c.region === region);
                if (!regionCities.length) return null;
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
                      {regionCities.map((c) => <CityLink key={c.name} name={c.name} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════ CTA BANNER ════════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                  <Zap size={11} className="text-sky-300" /> Ready to Get Started?
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Your Compliance Partner — Anywhere in Uttar Pradesh
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  GST, Income Tax, Company Registration, and FSSAI — all delivered 100% online for businesses
                  across all 75 UP districts. CA-assisted, same-day WhatsApp response. Starting ₹499.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20help%20in%20Uttar%20Pradesh."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                  <a href="tel:918937980366"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all">
                    <Phone size={15} /> Call Now
                  </a>
                </div>
                <p className="mt-6 text-white/40 text-xs">
                  GST Registration · Income Tax Filing · Company Registration · FSSAI License · 75 Districts · 100% Online
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}