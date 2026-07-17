// app/state/uttar-pradesh/fssai-services/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, CheckCircle,
  Globe, Building2, Landmark, FileText, RefreshCw,
  AlertCircle, Search, ChevronRight, Clock, IndianRupee,
} from "lucide-react";
import { UP_CITIES, UP_REGIONS, slugifyCity } from "@/data/up-gst-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "FSSAI Registration & Food License Services in Uttar Pradesh | Taxvio",
  description:
    "Taxvio provides CA-assisted FSSAI Basic Registration, State License, Central License, renewal, modification, annual return filing and notice reply across all 75 districts and 800+ cities of Uttar Pradesh — 100% online, starting ₹1,499.",
  keywords: [
    "FSSAI registration Uttar Pradesh",
    "FSSAI license UP",
    "food license UP",
    "FSSAI State License UP",
    "FSSAI Central License UP",
    "FSSAI renewal UP",
    "FSSAI annual return UP",
    "UTFDB food license UP",
    "food business registration UP",
    "FSSAI consultant Uttar Pradesh",
    "online FSSAI UP",
    "Taxvio FSSAI UP",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/uttar-pradesh/fssai-services" },
  openGraph: {
    title: "FSSAI Registration & Food License Services in Uttar Pradesh | Taxvio",
    description:
      "FSSAI Basic, State & Central License, renewal, modification & annual return across 800+ UP cities — 100% online, starting ₹1,499.",
    url: "https://www.taxvio.in/state/uttar-pradesh/fssai-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FSSAI Registration & Food License in Uttar Pradesh | Taxvio",
    description: "FSSAI Basic, State & Central License across 800+ UP cities — from ₹1,499.",
  },
  robots: { index: true, follow: true },
};

/* ─── FSSAI Services ────────────────────────────────────────────────────────── */
const FSSAI_SERVICES = [
  {
    slug: "fssai-registration",
    title: "FSSAI Registration",
    subtitle: "Basic / State / Central License",
    href: "#fssai-registration",
    icon: "🥗",
    gradient: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-700",
    price: "₹1,499",
    timeline: "7–15 Working Days",
    features: [
      "Eligibility assessment (Basic / State / Central)",
      "FSSAI Basic Registration (turnover ≤ ₹12 lakh)",
      "FSSAI State License (₹12 lakh – ₹20 crore)",
      "FSSAI Central License (₹20 crore+ / import-export)",
      "Document preparation & portal submission",
      "Approval tracking with UTFDB / FSSAI HQ",
    ],
  },
  {
    slug: "fssai-renewal",
    title: "FSSAI License Renewal",
    subtitle: "Timely Renewal — Avoid Penalties",
    href: "#fssai-renewal",
    icon: "🔄",
    gradient: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-700",
    price: "₹999",
    timeline: "5–10 Working Days",
    features: [
      "Renewal eligibility & expiry check",
      "Document update for renewal filing",
      "Online renewal application filing",
      "Validity extension confirmation",
      "FSSAI penalty avoidance guidance",
      "Pre-expiry reminders for UP businesses",
    ],
  },
  {
    slug: "fssai-modification",
    title: "FSSAI License Modification",
    subtitle: "Update License Details",
    href: "#fssai-modification",
    icon: "✏️",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-700",
    price: "₹999",
    timeline: "7–14 Working Days",
    features: [
      "Core field modification (address, FBO type)",
      "Non-core field update (product category, area)",
      "Document upload & verification",
      "UTFDB / FSSAI officer coordination",
      "Approval tracking to completion",
      "Updated license certificate delivery",
    ],
  },
  {
    slug: "fssai-annual-return",
    title: "FSSAI Annual Return Filing",
    subtitle: "Form D-1 — Due 31st May",
    href: "#fssai-annual-return",
    icon: "📅",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    price: "₹1,499",
    timeline: "Before 31st May",
    features: [
      "Form D-1 annual return preparation",
      "Production & sales data compilation",
      "Online filing on FoSCoS portal",
      "Compliance verification & penalty guidance",
      "Applicable for manufacturers & importers",
      "Multi-year filing for delayed returns",
    ],
  },
  {
    slug: "fssai-notice-reply",
    title: "FSSAI Notice Reply",
    subtitle: "Notice & Compliance Support",
    href: "#fssai-notice-reply",
    icon: "⚖️",
    gradient: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-700",
    price: "₹1,999",
    timeline: "Within Notice Deadline",
    features: [
      "Notice analysis & root cause identification",
      "Detailed reply drafting with evidence",
      "Supporting document preparation",
      "UTFDB / FSSAI department coordination",
      "Personal hearing representation",
      "Penalty reduction & waiver guidance",
    ],
  },
  {
    slug: "fssai-search",
    title: "FSSAI License Verification",
    subtitle: "Search & Verify FSSAI License",
    href: "#fssai-search",
    icon: "🔍",
    gradient: "from-slate-500 to-gray-600",
    bg: "bg-gray-50",
    border: "border-gray-100",
    text: "text-gray-700",
    price: "₹499",
    timeline: "Same Day",
    features: [
      "FSSAI license number verification",
      "Business name & address cross-check",
      "License validity & category status",
      "Fraud prevention for vendor onboarding",
      "Bulk verification for supply chain",
      "Official FoSCoS portal-based check",
    ],
  },
];

/* ─── SEO Sections — 300+ words, AI Overview optimised ────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "FSSAI Registration & Food License in Uttar Pradesh — Complete Guide",
    body: `Uttar Pradesh is one of India's largest food economies — home to sugarcane processing, dairy production, wheat milling, rice processing, packaged food manufacturing, restaurant chains, street food vendors, cloud kitchens, food importers and exporters, and one of the world's largest agricultural commodity trading networks. Under the Food Safety and Standards Act, 2006 (FSSA), every food business operator (FBO) in Uttar Pradesh — regardless of size, sector, or turnover — must obtain a valid FSSAI authorisation before commencing operations. Operating a food business without FSSAI registration is a punishable offence under Section 63 of the FSSA, attracting imprisonment up to six months and fines up to ₹5 lakh.

FSSAI authorisation in Uttar Pradesh comes in three categories. FSSAI Basic Registration (Form A) is for small food businesses with annual turnover up to ₹12 lakh — including petty food manufacturers, small retailers, hawkers, home-based food businesses, and temporary stall operators. The FSSAI State License (Form B) applies to food businesses with turnover between ₹12 lakh and ₹20 crore, or those operating in multiple UP districts under a single entity — including mid-size restaurants, food processors, dairy units, and distributors. The FSSAI Central License is required for businesses with turnover above ₹20 crore, food importers and exporters, centrally licensed hotel chains, e-commerce food operators, and any entity manufacturing products under Central Government schemes.

In Uttar Pradesh, State Licenses and Basic Registrations are issued by UTFDB — the Uttar Pradesh Technical Food and Drug Board — which is the state's designated food safety authority operating under the Food Safety and Standards Authority of India. UTFDB manages food safety inspections, license approval, renewal, and enforcement across all 75 UP districts. Understanding UTFDB's documentation requirements, inspection patterns, and approval timelines is critical for smooth FSSAI licensing in UP — and is where Taxvio's local expertise makes a significant difference.

Taxvio provides complete FSSAI services across all 75 districts and 800+ cities of Uttar Pradesh — from eligibility assessment and license category determination through document preparation, online filing on the FoSCoS (Food Safety Compliance System) portal, officer coordination, and final license certificate delivery. All services are 100% online with transparent pricing starting at ₹1,499.`,
  },
  {
    heading: "Who Needs FSSAI License in Uttar Pradesh — Eligibility by Business Type",
    body: `Every food business operator in Uttar Pradesh needs FSSAI authorisation, but the category — Basic Registration, State License, or Central License — depends on annual turnover, type of business activity, and operational footprint. Getting the category right from the start is essential: applying for Basic Registration when a State License is required exposes UP businesses to UTFDB enforcement action, while over-applying for a Central License when a State License suffices leads to unnecessary compliance burden and cost.

Restaurants, dhabas, cloud kitchens, fast-food outlets, and caterers in Uttar Pradesh with annual turnover up to ₹12 lakh need FSSAI Basic Registration. Those with turnover above ₹12 lakh and up to ₹20 crore — which covers the vast majority of mid-size UP restaurants, hotel kitchens, QSR chains, and catering businesses — need an FSSAI State License from UTFDB. Restaurant chains with turnover above ₹20 crore require a Central License.

Food manufacturers in Uttar Pradesh — including dairy processors, sugar mills, rice mills, flour mills, oil extraction units, bakeries, confectionery makers, and snacks manufacturers — fall under the State License category for turnover up to ₹20 crore, and Central License above that threshold. Food storage businesses, including cold storage operators and warehousing entities dealing in food articles, also require FSSAI licensing based on capacity and turnover.

Grocery stores, kirana shops, supermarkets, and food retailers in Uttar Pradesh need registration or license based on their annual turnover. E-commerce food platforms and aggregators (Swiggy, Zomato partners in UP) need FSSAI registration regardless of turnover. Food importers, exporters, and businesses selling food products across state borders require a Central License from FSSAI HQ, New Delhi.

Taxvio's FSSAI eligibility assessment service helps UP food businesses determine the correct license category, avoid common misclassification errors, and ensure UTFDB applications are prepared with all required documents — avoiding the deficiency memos and application rejections that delay food business launch.`,
  },
  {
    heading: "FSSAI Annual Return, Renewal & Modification — Ongoing Compliance for UP Food Businesses",
    body: `Obtaining an FSSAI license is only the beginning of food compliance in Uttar Pradesh. Ongoing compliance obligations include annual return filing, timely license renewal, and modification when business details change — all of which attract significant penalties if missed or handled incorrectly.

FSSAI Annual Return (Form D-1) must be filed by all licensed food manufacturers and importers in Uttar Pradesh by 31st May every year, covering the previous financial year's production quantities, sales, and raw material consumption. Late filing attracts a penalty of ₹100 per day under the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011. Petty food retailers and Basic Registration holders are generally exempt, but State and Central License holders in UP — including dairy processors, flour mills, packaged food manufacturers, and importers — must file without fail.

FSSAI License Renewal must be applied for before the license expiry date — FSSAI licenses are valid for 1 to 5 years depending on the period chosen at the time of application. Failing to renew before expiry results in the license becoming void, requiring a fresh application rather than a renewal, which is a longer and more expensive process. UTFDB is increasingly strict about renewal compliance for UP businesses, and operating with an expired license attracts the same penalty as operating without a license.

FSSAI License Modification is required whenever material details of the food business change — including change of business address, addition of a new food product category, change in FBO name, change in business constitution (proprietor to partnership, for example), or addition of a new manufacturing unit. Core field modifications (address, FBO type) require UTFDB approval; non-core field modifications (product additions within the same category) are faster. Failure to update the FSSAI license when business details change is a compliance violation that can be flagged during UTFDB inspections.

Taxvio manages the complete ongoing FSSAI compliance lifecycle for UP food businesses — annual return filing, pre-expiry renewal reminders and applications, and modification support — so your FSSAI license always reflects your current business reality and remains in good standing with UTFDB and FSSAI.`,
  },
];

/* ─── FAQ Data ─────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What type of FSSAI license does a restaurant in Uttar Pradesh need?",
    a: "A restaurant in Uttar Pradesh with annual turnover up to ₹12 lakh needs FSSAI Basic Registration. Turnover between ₹12 lakh and ₹20 crore requires an FSSAI State License issued by UTFDB (UP's food safety authority). Turnover above ₹20 crore requires a Central License from FSSAI HQ, New Delhi.",
  },
  {
    q: "Who issues FSSAI licenses in Uttar Pradesh?",
    a: "In Uttar Pradesh, FSSAI Basic Registrations and State Licenses are issued by UTFDB — the Uttar Pradesh Technical Food and Drug Board, which is UP's state-designated food safety authority. FSSAI Central Licenses are issued by FSSAI Headquarters in New Delhi for businesses with turnover above ₹20 crore or those involved in import/export.",
  },
  {
    q: "What is the cost of FSSAI registration in Uttar Pradesh?",
    a: "FSSAI Basic Registration government fee is ₹100 for 1–5 years. FSSAI State License government fee ranges from ₹2,000 to ₹5,000 depending on license duration and business type. Taxvio's professional fee for FSSAI Basic Registration starts at ₹1,499; State License from ₹2,499 — with transparent upfront pricing and no hidden charges.",
  },
  {
    q: "When is FSSAI Annual Return due for UP food businesses?",
    a: "FSSAI Annual Return (Form D-1) is due by 31st May every year for the previous financial year. It is mandatory for all licensed food manufacturers and importers in Uttar Pradesh holding State or Central FSSAI licenses. Late filing attracts a penalty of ₹100 per day.",
  },
  {
    q: "Can I apply for FSSAI license online from any city in UP?",
    a: "Yes. All FSSAI applications in Uttar Pradesh — Basic Registration, State License, Central License, renewal, and modification — are filed on the FoSCoS (Food Safety Compliance System) portal. Taxvio provides 100% online FSSAI services across all UP cities — share documents on WhatsApp and our team handles the entire filing process.",
  },
  {
    q: "What happens if I operate without FSSAI registration in UP?",
    a: "Operating a food business in Uttar Pradesh without FSSAI registration is an offence under Section 63 of the Food Safety and Standards Act, 2006. Penalties include imprisonment up to 6 months and/or fines up to ₹5 lakh. UTFDB food safety officers conduct regular inspections and can seal premises, seize food stocks, and initiate prosecution for non-compliant UP food businesses.",
  },
];

const TIER1_CITIES = UP_CITIES.filter((c) => c.tier === 1);

/* ─── Schema Markup ─────────────────────────────────────────────────────────── */
const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "FSSAI Services in Uttar Pradesh — Taxvio",
  numberOfItems: FSSAI_SERVICES.length,
  itemListElement: FSSAI_SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://www.taxvio.in/state/uttar-pradesh/fssai-services${s.href}`,
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  telephone: "+918937980366",
  email: "support@taxvio.in",
  description:
    "Taxvio provides FSSAI Basic Registration, State License, Central License, renewal, modification, annual return filing, and notice reply services across 800+ cities in Uttar Pradesh.",
  areaServed: {
    "@type": "State",
    name: "Uttar Pradesh",
    containedInPlace: { "@type": "Country", name: "India" },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khatauli",
    addressRegion: "Uttar Pradesh",
    postalCode: "251201",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2400",
  },
  priceRange: "₹1,499 - ₹9,999",
  openingHours: "Mo-Sa 09:00-19:00",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Uttar Pradesh", item: "https://www.taxvio.in/state/uttar-pradesh" },
    { "@type": "ListItem", position: 3, name: "FSSAI Services", item: "https://www.taxvio.in/state/uttar-pradesh/fssai-services" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────────── */
function ServiceCard({ svc }: { svc: (typeof FSSAI_SERVICES)[number] }) {
  return (
    <div
      id={svc.slug}
      className="group bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className={`bg-gradient-to-r ${svc.gradient} p-6 relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative flex items-center justify-between">
          <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center text-3xl">
            {svc.icon}
          </div>
          <div className="bg-white/20 border border-white/25 rounded-xl px-3 py-1.5 text-center">
            <p className="text-[9px] text-white/60 font-bold uppercase tracking-wide">From</p>
            <p className="text-white font-extrabold text-base leading-tight">{svc.price}</p>
          </div>
        </div>
        <h3 className="relative text-xl font-extrabold text-white mt-4 leading-tight">{svc.title}</h3>
        <p className="relative text-white/70 text-xs mt-1">{svc.subtitle}</p>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div
          className={`inline-flex items-center gap-1.5 text-[11px] font-bold ${svc.text} ${svc.bg} px-2.5 py-1 rounded-full self-start mb-3`}
        >
          <Clock size={10} /> {svc.timeline}
        </div>
        <ul className="space-y-1.5 mb-4 flex-1">
          {svc.features.map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
              <CheckCircle size={11} className="text-emerald-500 shrink-0 mt-0.5" /> {f}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs font-bold text-[#00416a] group-hover:underline">
            Learn More
          </span>
          <ArrowRight
            size={14}
            className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

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
      href={`/state/uttar-pradesh/fssai-services/${slugifyCity(name)}`}
      aria-label={`FSSAI food license services in ${name}, ${district}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-orange-400/20 blur-2xl pointer-events-none" />
      <div className="relative p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">🥗</span>
          <ArrowRight
            size={15}
            className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5"
          />
        </div>
        <p className="font-bold text-base text-white leading-tight group-hover:text-orange-200 transition-colors">
          {name}
        </p>
        <p className="text-[11px] text-white/50 mt-0.5">
          {district} District · {region}
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {["Basic", "State", "Central", "Renewal"].map((t) => (
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

function CityLink({ name }: { name: string }) {
  return (
    <Link
      href={`/state/uttar-pradesh/fssai-services/${slugifyCity(name)}`}
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

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 p-5">
        <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-white text-[10px] font-extrabold">{index + 1}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800 leading-snug mb-2">{q}</p>
          <p className="text-xs text-gray-500 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function UPFSSAIHubPage() {
  return (
    <>
      <Script
        id="up-fssai-servicelist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Script
        id="up-fssai-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="up-fssai-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="up-fssai-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════════ HERO ════════════ */}
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
            style={{ background: "radial-gradient(circle,rgba(251,146,60,0.12) 0%,transparent 65%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <ChevronRight size={12} className="text-white/30" />
                <li><Link href="/state/uttar-pradesh" className="hover:text-white transition">Uttar Pradesh</Link></li>
                <ChevronRight size={12} className="text-white/30" />
                <li className="text-white/70 font-medium">FSSAI Services</li>
              </ol>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
                75 Districts · 800+ Cities · 6 FSSAI Services · 100% Online
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                FSSAI Food License in
                <span className="block mt-2 bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                  Uttar Pradesh
                </span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                CA-assisted{" "}
                <strong className="text-white">FSSAI Basic Registration</strong>,{" "}
                <strong className="text-white">State License</strong>,{" "}
                <strong className="text-white">Central License</strong>, renewal, modification,
                annual return filing, and notice reply — across all{" "}
                <strong className="text-white">{UP_CITIES.length}+ cities</strong> in Uttar Pradesh.
                100% online, starting{" "}
                <strong className="text-orange-300">₹1,499</strong>.
              </p>

              {/* Stats */}
              <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {[
                  { val: "75",    label: "UP Districts Covered", icon: Globe      },
                  { val: `${UP_CITIES.length}+`, label: "Cities Served", icon: MapPin },
                  { val: "3,200+", label: "Licenses Filed",      icon: TrendingUp },
                  { val: "₹1,499", label: "Starting Price",      icon: IndianRupee },
                ].map(({ val, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="text-center rounded-2xl py-4 px-2"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Icon size={14} className="text-orange-300 mx-auto mb-1.5" />
                    <p className="text-xl font-extrabold text-white">{val}</p>
                    <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20FSSAI%20food%20license%20help%20in%20Uttar%20Pradesh."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all"
                >
                  <MessageCircle size={16} /> WhatsApp for FSSAI Help
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                >
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck,    label: "UTFDB-Aware Filing"    },
                { icon: Star,          label: "4.9★ Rating"           },
                { icon: Zap,           label: "7–15 Day License"      },
                { icon: Shield,        label: "100% Secure"           },
                { icon: MessageCircle, label: "WhatsApp Support"      },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-orange-400 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
          </svg>
        </section>

        {/* ════════════ STATS RIBBON ════════════ */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "7–15",   label: "Days for License",    icon: Zap          },
              { val: "4.9★",   label: "Average Rating",      icon: Star         },
              { val: "₹1,499", label: "Starting Price",      icon: IndianRupee  },
              { val: "100%",   label: "Online Process",      icon: Globe        },
            ].map(({ val, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-orange-50 border border-orange-100 text-center hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Icon size={15} className="text-orange-600" />
                </div>
                <p className="text-xl font-extrabold text-[#00416a]">{val}</p>
                <p className="text-[11px] text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ SERVICE CARDS ════════════ */}
        <section className="py-20 bg-[#f8fbfd]" aria-label="FSSAI services in Uttar Pradesh">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                Six FSSAI Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Complete FSSAI Compliance — One Platform for All of UP
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                From first-time FSSAI registration to annual return filing — every food compliance
                service your UP business needs, managed by our expert team.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FSSAI_SERVICES.map((svc) => (
                <ServiceCard key={svc.slug} svc={svc} />
              ))}
            </div>

            {/* Quick city nav */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {TIER1_CITIES.slice(0, 8).map((c) => (
                <Link
                  key={c.name}
                  href={`/state/uttar-pradesh/fssai-services/${slugifyCity(c.name)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00416a] bg-white border border-[#deeef7] hover:border-orange-200 hover:bg-orange-50 px-4 py-2 rounded-full shadow-sm transition-all"
                >
                  🥗 FSSAI in {c.name} <ArrowRight size={11} />
                </Link>
              ))}
              <Link
                href="#cities"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 hover:bg-orange-100 px-4 py-2 rounded-full shadow-sm transition-all"
              >
                View All Cities <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════ MAJOR CITIES ════════════ */}
        <section className="py-16 bg-white border-y border-gray-100" aria-label="FSSAI services in major UP cities">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-orange-500 to-amber-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-orange-600">Major Cities</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  FSSAI Food License in Key Uttar Pradesh Cities
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

        {/* ════════════ SEO CONTENT ════════════ */}
        <section className="py-20 bg-white border-b border-gray-100" aria-label="FSSAI compliance guide UP">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-orange-500 to-amber-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4">{heading}</h2>
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

        {/* ════════════ WHY TAXVIO ════════════ */}
        <section className="py-20 bg-[#f8fbfd] border-b border-gray-100" aria-label="Why choose Taxvio for FSSAI">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why UP Food Businesses Trust Taxvio for FSSAI
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Landmark,
                  title: "UTFDB-Aware Filing",
                  desc: "We understand UTFDB's documentation requirements, inspection norms, and approval workflows — ensuring your UP FSSAI application is prepared correctly the first time.",
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — Every UP City",
                  desc: "Share documents on WhatsApp from anywhere in Uttar Pradesh — Noida to Sonbhadra. Our team handles FoSCoS portal filing, officer coordination, and certificate delivery.",
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: FileText,
                  title: "All Six FSSAI Services",
                  desc: "Registration, renewal, modification, annual return, notice reply, and license verification — complete FSSAI lifecycle management under one team for UP food businesses.",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: AlertCircle,
                  title: "Proactive Renewal Reminders",
                  desc: "We track FSSAI license expiry for all UP clients and send pre-expiry alerts — ensuring you never operate with an expired license or face UTFDB enforcement action.",
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: Shield,
                  title: "Transparent Pricing from ₹1,499",
                  desc: "No hidden fees. Clear upfront pricing for every FSSAI service — government fee and professional fee both quoted before we begin work for your UP food business.",
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: Building2,
                  title: "All 75 UP Districts Covered",
                  desc: "From Noida's restaurant corridor to Gorakhpur's food processing belt — our digital-first model covers every district in Uttar Pradesh without office visits.",
                  color: "bg-sky-100 text-sky-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-5 bg-white border border-[#deeef7] rounded-2xl hover:border-orange-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
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

        {/* ════════════ PROCESS STEPS ════════════ */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-3">
                How to Get FSSAI License in Uttar Pradesh
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Share Documents",
                  desc: "Send PAN, Aadhaar, business address proof, food product list, and other required documents on WhatsApp.",
                },
                {
                  step: "02",
                  title: "Eligibility Assessment",
                  desc: "Our team determines the correct FSSAI category (Basic / State / Central) and reviews all documents within 24 hours.",
                },
                {
                  step: "03",
                  title: "FoSCoS Filing",
                  desc: "We prepare and submit your FSSAI application on the FoSCoS portal, handle UTFDB officer queries, and track approval.",
                },
                {
                  step: "04",
                  title: "License Received",
                  desc: "FSSAI license certificate issued in 7–15 working days. We brief you on renewal obligations and ongoing compliance.",
                },
              ].map(({ step, title, desc }, i, arr) => (
                <div
                  key={step}
                  className="relative p-5 bg-[#f8fbfd] rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white text-sm font-extrabold flex items-center justify-center mb-3">
                    {step}
                  </div>
                  <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  {i < arr.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="absolute -right-3 top-1/2 -translate-y-1/2 text-orange-400 hidden md:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ FAQ ════════════ */}
        <section className="py-20 bg-[#f8fbfd] border-b border-gray-100" aria-label="FSSAI FAQ UP">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Frequently Asked Questions — FSSAI in Uttar Pradesh
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Quick answers to the most common FSSAI food license questions for Uttar Pradesh
                food businesses.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ ALL CITIES BY REGION ════════════ */}
        <section id="cities" className="py-20 bg-white" aria-label="FSSAI services all UP cities">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                All UP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                FSSAI Food License Across All Uttar Pradesh Cities
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Every city below links to its dedicated FSSAI service page — Basic Registration,
                State License, Central License, renewal, and modification.
              </p>
            </div>
            <div className="space-y-4">
              {Object.entries(UP_REGIONS).map(([region]) => {
                const regionCities = UP_CITIES.filter((c) => c.region === region);
                if (!regionCities.length) return null;
                return (
                  <div
                    key={region}
                    className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-orange-100 shrink-0" />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/70 bg-white/15 rounded-full px-2.5 py-0.5">
                        {regionCities.length} cities
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionCities.map((c) => (
                        <CityLink key={c.name} name={c.name} />
                      ))}
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
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-orange-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-amber-400/10 blur-[60px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                  <Zap size={11} className="text-orange-300" /> Ready to Get Your FSSAI License?
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get FSSAI Food License — Anywhere in Uttar Pradesh
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  Basic Registration, State License, Central License, renewal, modification,
                  annual return filing, and notice reply — all delivered 100% online for food
                  businesses across all 75 UP districts. CA-assisted, same-day WhatsApp response.
                  Starting ₹1,499.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {FSSAI_SERVICES.map((svc) => (
                    <a
                      key={svc.slug}
                      href={svc.href}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
                    >
                      {svc.icon} {svc.title}
                    </a>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20FSSAI%20food%20license%20help%20in%20Uttar%20Pradesh."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                  <a
                    href="tel:918937980366"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
                <p className="mt-6 text-white/40 text-xs">
                  FSSAI Basic Registration · State License · Central License · Renewal · Annual Return · 75 Districts · 100% Online
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

