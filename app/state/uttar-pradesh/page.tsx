// app/state/uttar-pradesh/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  Globe, CheckCircle, Building2, Receipt, Landmark, Calculator,
  ChevronRight,
} from "lucide-react";
import { UP_CITIES, UP_REGIONS, slugifyCity } from "@/data/up-gst-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "GST, Income Tax, ROC & FSSAI Services in Uttar Pradesh | Taxvio",
  description:
    "Taxvio offers CA-assisted GST registration & filing, income tax return filing, company registration & ROC compliance, and FSSAI food license across all 75 districts and 800+ cities of Uttar Pradesh — 100% online, starting ₹499.",
  keywords: [
    "GST registration Uttar Pradesh",
    "income tax filing UP",
    "company registration UP",
    "FSSAI license UP",
    "CA services Uttar Pradesh",
    "GST return filing UP",
    "ROC compliance UP",
    "ITR filing UP",
    "online CA UP",
    "Taxvio Uttar Pradesh",
    "tax consultant UP",
    "business compliance Uttar Pradesh",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/uttar-pradesh" },
  openGraph: {
    title: "GST, Income Tax, ROC & FSSAI Services in Uttar Pradesh | Taxvio",
    description:
      "CA-assisted GST, income tax, company registration & FSSAI services across 800+ UP cities — 100% online, starting ₹499.",
    url: "https://www.taxvio.in/state/uttar-pradesh",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST, Income Tax, ROC & FSSAI Services in Uttar Pradesh | Taxvio",
    description: "GST, Income Tax, ROC & FSSAI services across 800+ UP cities — from ₹499.",
  },
  robots: { index: true, follow: true },
};

/* ─── Service Hub Data ─────────────────────────────────────────────────────── */
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
    services: [
      "GST Registration",
      "GSTR-1 / GSTR-3B Filing",
      "GSTR-9 Annual Return",
      "GST LUT Filing",
      "Notice Reply",
      "GST Refund",
    ],
    description:
      "Get your GSTIN in 3–5 working days and stay fully compliant with monthly, quarterly, and annual GST return filing — CA-managed, end-to-end.",
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
    services: [
      "ITR – Salaried / Proprietor",
      "ITR – Firm / LLP / Company",
      "TDS / TCS Return Filing",
      "Tax Audit (Sec. 44AB)",
      "12A / 80G Registration",
      "PAN / TAN Application",
    ],
    description:
      "File accurate income tax returns for individuals, firms, LLPs, and companies across all UP income tax circles — with CA review and e-filing in 24–48 hours.",
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
    services: [
      "Private Limited Formation",
      "LLP / OPC Registration",
      "Section 8 Company",
      "Annual ROC Compliance",
      "Director Changes",
      "Company Closure",
    ],
    description:
      "Register your Private Limited Company, LLP, or OPC under RoC Kanpur jurisdiction with complete post-incorporation compliance managed by our CA & CS team.",
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
    services: [
      "FSSAI Basic Registration",
      "FSSAI State License",
      "FSSAI Central License",
      "FSSAI Renewal",
      "License Modification",
      "Annual Return (Form D-1)",
    ],
    description:
      "Obtain your FSSAI food license or registration for restaurants, cloud kitchens, manufacturers, and traders across UP — with UTFDB-aware filing by our food compliance team.",
  },
];

/* ─── SEO Sections — 300+ words, AI Overview optimised ────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "GST Services in Uttar Pradesh — Registration, Filing & Compliance",
    body: `Uttar Pradesh is one of India's largest GST contributor states, with millions of registered taxpayers spanning manufacturing, trading, services, agriculture-processing, and exports. Every business with an annual turnover exceeding ₹40 lakh (goods) or ₹20 lakh (services) is legally required to obtain a GSTIN and file regular GST returns — including GSTR-1 (outward supply), GSTR-3B (monthly summary), and GSTR-9 (annual return).

Taxvio provides end-to-end GST services across all 75 districts and 800+ cities of Uttar Pradesh, from new GST registration to ongoing return filing, GST LUT filing for exporters, notice reply management, and refund applications. Our CA team handles the complete GST lifecycle so UP businesses — whether a textile trader in Surat Road Kanpur, a dairy processor in Muzaffarnagar, a software company in Noida, or a restaurant in Varanasi — remain fully compliant without ever visiting a GST office.

Key Taxvio GST services in UP: GST Registration (3–5 working days), GSTR-1 / GSTR-3B monthly filing, GSTR-9 & GSTR-9C annual return, GST LUT filing for zero-rated exports, composition scheme registration, GST notice reply, and refund applications. All services are delivered 100% online via WhatsApp-first workflows, with transparent pricing starting at ₹499.`,
  },
  {
    heading: "Income Tax Services in Uttar Pradesh — ITR Filing, TDS & Tax Audit",
    body: `Uttar Pradesh is home to over 2.5 crore income tax filers — salaried employees, business owners, professionals, agriculturalists with non-farm income, and corporate entities. Filing an accurate and timely Income Tax Return (ITR) is mandatory for individuals earning above the basic exemption limit and for all companies, LLPs, and firms regardless of income. TDS/TCS return filing (Form 24Q, 26Q, 27Q, 27EQ) is a monthly and quarterly obligation for employers and businesses making specified payments.

Taxvio's income tax services cover every UP taxpayer profile: ITR-1 through ITR-7 for individuals, HUFs, firms, LLPs, and companies; quarterly TDS return filing; tax audit under Section 44AB; Form 15CA/CB for foreign remittances; 12A and 80G registrations for NGOs and trusts; PAN and TAN applications; and advance tax computation and challan management.

Our CA team is familiar with the income tax ward and circle structure across major UP cities — Lucknow, Kanpur, Agra, Varanasi, Allahabad, Meerut, Noida, and Ghaziabad — ensuring returns are filed in the correct jurisdiction and scrutiny notices are responded to accurately and on time. ITR filing for salaried individuals starts at ₹499; business ITR and tax audit pricing is transparent and quoted upfront.`,
  },
  {
    heading: "Company Registration & ROC Compliance in Uttar Pradesh",
    body: `All companies and LLPs registered in Uttar Pradesh fall under the jurisdiction of the Registrar of Companies (RoC), Kanpur — one of India's busiest RoC offices, given UP's enormous business formation activity. Properly incorporating a business entity and maintaining annual ROC compliance is critical: non-compliance attracts heavy penalties, director disqualification, and striking-off notices from the MCA.

Taxvio handles the complete company registration and ROC compliance lifecycle for UP businesses: Private Limited Company (Pvt Ltd) incorporation, Limited Liability Partnership (LLP) registration, One Person Company (OPC) formation, Section 8 non-profit company registration, and Nidhi Company formation. Post-incorporation, we manage all mandatory annual filings — AOC-4 (financial statements), MGT-7 / MGT-7A (annual return), DIR-3 KYC, DPT-3, MSME-1, and INC-20A for newly incorporated companies.

Our CA and CS team understands RoC Kanpur's processing timelines and MCA portal workflows, ensuring your company name approval, DIN allotment, and certificate of incorporation are obtained as quickly as possible — typically 7–12 working days for a standard Pvt Ltd incorporation. Company registration in UP starts at ₹2,999 inclusive of all government fees for basic incorporations.`,
  },
  {
    heading: "FSSAI Food License in Uttar Pradesh — Registration, License & Renewal",
    body: `Uttar Pradesh has one of India's largest food economies — from sugarcane processing and dairy production in western UP to the thriving restaurant, street food, and packaged food industries across every district. Under the Food Safety and Standards Act, 2006, every food business operator (FBO) — including restaurants, cloud kitchens, dhabas, food manufacturers, traders, importers, e-commerce food sellers, and home-based food businesses — must obtain a valid FSSAI license or registration before commencing operations.

There are three categories of FSSAI authorisation in UP: Basic Registration (turnover up to ₹12 lakh, issued by state authority), State License (turnover ₹12 lakh to ₹20 crore or multi-district operations, issued by UTFDB — the UP food safety regulator), and Central License (turnover above ₹20 crore, import/export, or central government establishments, issued by FSSAI HQ).

Taxvio manages the complete FSSAI process for UP food businesses: new registrations and licenses, annual renewals (FSSAI licenses must be renewed before expiry to avoid penalty), license modifications for changes in address, product category or FBO type, and annual return filing (Form D-1, due by 31 May each year). Our team is well-versed in UTFDB's inspection norms and documentation requirements, ensuring your FSSAI application is prepared correctly the first time. FSSAI Basic Registration starts at ₹1,499; State and Central License pricing is available upfront on our FSSAI services page.`,
  },
  {
    heading: "Why Taxvio is Uttar Pradesh's Trusted Tax & Compliance Partner",
    body: `Headquartered in Khatauli, Muzaffarnagar, Taxvio was built specifically to serve the diversity of Uttar Pradesh's business landscape — from Noida's IT and startup corridor to the leather and textile industries of Kanpur and Bareilly, the carpet exports of Bhadohi, the brassware trade of Moradabad, the glass manufacturing of Firozabad, the agricultural and dairy economy of western UP, and the tourism and handicraft economy of Agra and Varanasi.

What makes Taxvio different from a generic online compliance portal? Every service is handled by a qualified CA (Chartered Accountant) or CS (Company Secretary) — not just software automation. Our team brings UP-specific expertise: knowledge of RoC Kanpur processing patterns, UTFDB's FSSAI inspection norms, income tax ward structures across all major UP cities, and GST jurisdictional nuances relevant to UP's dominant industries.

Taxvio's 100% online, WhatsApp-first delivery model means a trader in Rasra or Nakur gets the exact same CA-quality service as a startup founder in Noida Sector 62 — without travel, without office queues, and without waiting days for a callback. Our pricing is fully transparent, starting at ₹499, with every quote shared upfront before work begins.

To date, Taxvio has filed over 12,000 GST and income tax returns, formed more than 2,400 companies and LLPs, and processed over 3,200 FSSAI license applications for businesses across all 75 districts of Uttar Pradesh — maintaining a 4.9-star average rating from over 2,400 verified client reviews.`,
  },
];

/* ─── FAQ Data — AI Overview optimised ────────────────────────────────────── */
const FAQS = [
  {
    q: "What is the cost of GST registration in Uttar Pradesh?",
    a: "GST registration in Uttar Pradesh through Taxvio starts at ₹499 (professional fees). Government fees for GST registration are nil — the GST portal charges no fee. Your GSTIN is typically issued within 3–5 working days of submitting complete documents.",
  },
  {
    q: "Which RoC jurisdiction covers Uttar Pradesh companies?",
    a: "All companies and LLPs registered in Uttar Pradesh fall under the Registrar of Companies (RoC), Kanpur. This includes Private Limited Companies, OPCs, LLPs, Section 8 companies, and Nidhi companies incorporated anywhere in UP.",
  },
  {
    q: "What type of FSSAI license does a restaurant in UP need?",
    a: "A restaurant in Uttar Pradesh with annual turnover up to ₹12 lakh needs FSSAI Basic Registration. Turnover between ₹12 lakh and ₹20 crore requires an FSSAI State License issued by UTFDB (Uttar Pradesh's food safety authority). Above ₹20 crore requires a Central License from FSSAI HQ.",
  },
  {
    q: "Can I file my income tax return online from any city in UP?",
    a: "Yes. Taxvio provides 100% online ITR filing for all UP cities — simply share your Form 16, bank statements, and documents on WhatsApp. Our CA team handles everything from return preparation and CA review to e-filing and acknowledgement, regardless of your UP location.",
  },
  {
    q: "How long does company registration take in Uttar Pradesh?",
    a: "A Private Limited Company incorporation under RoC Kanpur typically takes 7–12 working days from document submission to Certificate of Incorporation, subject to MCA portal processing times. Taxvio's CA & CS team manages the entire process — DSC, DIN, name approval, MOA/AOA drafting, and CIN issuance.",
  },
  {
    q: "Does Taxvio serve smaller UP towns and tehsils, not just big cities?",
    a: "Yes. Taxvio's 100% online delivery model serves every city, town, and tehsil across all 75 districts of Uttar Pradesh — from metro cities like Noida and Lucknow to small tehsil towns like Khatauli, Nakur, Rasra, and Tilhar. No physical office visit is needed at any stage.",
  },
];

const TIER1_CITIES = UP_CITIES.filter((c) => c.tier === 1);

/* ─── Schema Markup ────────────────────────────────────────────────────────── */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Taxvio Uttar Pradesh — GST, Income Tax, ROC & FSSAI Service Hubs",
  numberOfItems: SERVICE_HUBS.length,
  itemListElement: SERVICE_HUBS.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://www.taxvio.in${s.href}`,
    description: s.description,
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
    "Taxvio provides CA-assisted GST registration & filing, income tax return filing, company registration & ROC compliance, and FSSAI food license services across 800+ cities in Uttar Pradesh.",
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
  priceRange: "₹499 - ₹9,999",
  openingHours: "Mo-Sa 09:00-19:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "UP Tax & Compliance Services",
    itemListElement: SERVICE_HUBS.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `https://www.taxvio.in${s.href}` },
      price: s.price.replace("₹", ""),
      priceCurrency: "INR",
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Uttar Pradesh", item: "https://www.taxvio.in/state/uttar-pradesh" },
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

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function ServiceHubCard({ hub }: { hub: (typeof SERVICE_HUBS)[number] }) {
  return (
    <Link
      href={hub.href}
      aria-label={`${hub.title} in Uttar Pradesh — Taxvio`}
      className="group relative bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className={`bg-gradient-to-r ${hub.gradient} p-6 relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
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
        <div
          className={`inline-flex items-center gap-1.5 text-[11px] font-bold ${hub.text} ${hub.bg} px-2.5 py-1 rounded-full self-start mb-3`}
        >
          <TrendingUp size={10} /> {hub.stat}
        </div>

        {/* Short description — helps AI overview pick up service context */}
        <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{hub.description}</p>

        <ul className="space-y-1.5 mb-4 flex-1">
          {hub.services.map((s) => (
            <li key={s} className="flex items-start gap-1.5 text-xs text-gray-600">
              <CheckCircle size={11} className="text-emerald-500 shrink-0 mt-0.5" /> {s}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs font-bold text-[#00416a] group-hover:underline">
            Explore {hub.title}
          </span>
          <ArrowRight
            size={14}
            className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all"
          />
        </div>
      </div>
    </Link>
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
      href={`/city/${slugifyCity(name)}`}
      aria-label={`GST, Income Tax, ROC & FSSAI services in ${name}, ${district}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
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
          {district} District · {region}
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {["GST", "ITR", "ROC", "FSSAI"].map((t) => (
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
      href={`/city/${slugifyCity(name)}`}
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
        <div className="w-7 h-7 rounded-lg bg-[#00416a] flex items-center justify-center shrink-0 mt-0.5">
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
export default function UttarPradeshPillarPage() {
  return (
    <>
      <Script
        id="up-pillar-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="up-pillar-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="up-pillar-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="up-pillar-faq"
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

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <ChevronRight size={12} className="text-white/30" />
                <li className="text-white/70 font-medium">Uttar Pradesh</li>
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
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                75 Districts · 800+ Cities · 4 Services · 100% Online
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Tax & Compliance Services
                <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                  Across Uttar Pradesh
                </span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Taxvio is Uttar Pradesh's CA-assisted compliance partner for{" "}
                <strong className="text-white">GST registration &amp; return filing</strong>,{" "}
                <strong className="text-white">income tax return filing</strong>,{" "}
                <strong className="text-white">company registration &amp; ROC compliance</strong>, and{" "}
                <strong className="text-white">FSSAI food license</strong> — across all{" "}
                <strong className="text-white">{UP_CITIES.length}+ cities</strong> in Uttar Pradesh.
                100% online, starting{" "}
                <strong className="text-sky-300">₹499</strong>.
              </p>

              {/* Stats */}
              <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {[
                  { val: "75",                      label: "UP Districts Covered",  icon: Globe      },
                  { val: `${UP_CITIES.length}+`,    label: "Cities Served",         icon: MapPin     },
                  { val: "4,800+",                  label: "Businesses Served",     icon: Users      },
                  { val: "₹499",                    label: "Starting Price",        icon: TrendingUp },
                ].map(({ val, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="text-center rounded-2xl py-4 px-2"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Icon size={14} className="text-sky-300 mx-auto mb-1.5" />
                    <p className="text-xl font-extrabold text-white">{val}</p>
                    <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20help%20with%20tax%20services%20in%20Uttar%20Pradesh."
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
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck,    label: "CA-Certified Team"   },
                { icon: Star,          label: "4.9★ Rating"         },
                { icon: Zap,           label: "Same-Day Response"   },
                { icon: Shield,        label: "100% Secure"         },
                { icon: MessageCircle, label: "WhatsApp Support"    },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/55 text-xs">
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

        {/* ════════════ SERVICE HUBS ════════════ */}
        <section className="py-20 bg-[#f8fbfd]" aria-label="Service Hubs">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Four Service Pillars
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                GST · Income Tax · ROC · FSSAI — One Platform for All of UP
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Explore each service hub for city-specific pricing, timelines, and CA-assisted filing
                across all 75 districts of Uttar Pradesh.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICE_HUBS.map((hub) => (
                <ServiceHubCard key={hub.key} hub={hub} />
              ))}
            </div>

            {/* Quick service nav — internal linking signal */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {SERVICE_HUBS.map((hub) => (
                <Link
                  key={hub.key}
                  href={hub.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00416a] bg-white border border-[#deeef7] hover:border-[#00416a]/40 hover:bg-[#00416a]/5 px-4 py-2 rounded-full shadow-sm transition-all"
                >
                  {hub.icon} {hub.title} in UP <ArrowRight size={11} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ MAJOR CITIES ════════════ */}
        <section className="py-16 bg-white border-y border-gray-100" aria-label="Major cities in Uttar Pradesh">
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
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">
                    Headquartered in Muzaffarnagar, UP
                  </p>
                  <h2 className="text-xl font-extrabold text-gray-800">Local Roots, Statewide Reach</h2>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-blue-200 rounded-2xl px-4 py-2.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700">
                  Same-day WhatsApp consultation available
                </span>
              </div>
            </div>
            <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm mt-6 max-w-3xl">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#00416a] mb-1">
                    Khatauli, Muzaffarnagar — Western UP
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Taxvio is headquartered in Khatauli, Muzaffarnagar, Uttar Pradesh — giving us
                    first-hand understanding of western UP's dairy, sugar, and textile economy
                    alongside our 100% online service model that reaches every district across the
                    state, from the NCR belt to Purvanchal and Bundelkhand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SEO CONTENT ════════════ */}
        <section className="py-20 bg-white border-b border-gray-100" aria-label="About Taxvio UP services">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400 shrink-0 mt-1" />
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
        <section className="py-20 bg-[#f8fbfd] border-b border-gray-100" aria-label="Why choose Taxvio">
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
                {
                  icon: Users,
                  title: "One CA Team, Four Domains",
                  desc: "GST, Income Tax, ROC, and FSSAI under a single coordinated team — no more juggling multiple consultants for related compliance needs.",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — Every UP City",
                  desc: "Share documents on WhatsApp from anywhere in Uttar Pradesh — Noida to Sonbhadra. No office visits, ever.",
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: Landmark,
                  title: "UP-Specific Jurisdiction Expertise",
                  desc: "We know RoC Kanpur's processing patterns, UTFDB's FSSAI inspection norms, and AO ward structures across all UP income tax circles.",
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: Shield,
                  title: "100% Secure & Confidential",
                  desc: "Strict document confidentiality protocols across all four service lines — your business data stays protected.",
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹499",
                  desc: "No hidden fees across any service. Clear, upfront pricing for GST, income tax, ROC, and FSSAI — quoted before we start.",
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: Building2,
                  title: "All 75 Districts Covered",
                  desc: "From Noida's tech parks to Sonbhadra's industrial belt — our digital-first model means no UP location is out of reach.",
                  color: "bg-sky-100 text-sky-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-5 bg-white border border-[#deeef7] rounded-2xl hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
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

        {/* ════════════ FAQ ════════════ */}
        <section className="py-20 bg-white border-b border-gray-100" aria-label="Frequently asked questions">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Frequently Asked Questions — Tax &amp; Compliance in UP
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Quick answers to the most common questions about GST, income tax, company registration,
                and FSSAI services in Uttar Pradesh.
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
        <section className="py-20 bg-[#f8fbfd]" aria-label="All Uttar Pradesh cities by region">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All UP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Browse All Uttar Pradesh Cities by Region
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Every city below links to its dedicated Taxvio service page — GST registration, income
                tax filing, ROC compliance, and FSSAI food license.
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
                    <div className="bg-gradient-to-r from-[#00416a] to-[#005a90] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-sky-300 shrink-0" />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
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
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                  <Zap size={11} className="text-sky-300" /> Ready to Get Started?
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Your Compliance Partner — Anywhere in Uttar Pradesh
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  GST registration &amp; filing, income tax returns, company registration &amp; ROC
                  compliance, and FSSAI food license — all delivered 100% online for businesses across
                  all 75 UP districts. CA-assisted, same-day WhatsApp response. Starting ₹499.
                </p>

                {/* Service links in CTA */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {SERVICE_HUBS.map((hub) => (
                    <Link
                      key={hub.key}
                      href={hub.href}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
                    >
                      {hub.icon} {hub.title}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20help%20with%20tax%20services%20in%20Uttar%20Pradesh."
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