// app/state/madhya-pradesh/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  Globe, CheckCircle, Building2, ClipboardList, Receipt,
  Calculator, Briefcase, ShieldCheck, ChevronRight,
} from "lucide-react";
import { MP_CITIES, MP_REGIONS, slugifyCity } from "@/data/mp-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "GST, Income Tax, FSSAI, ROC Services Across Madhya Pradesh | Taxvio",
  description:
    "Taxvio provides expert GST registration & return filing, income tax & ITR, FSSAI food license, and ROC company registration services across 400+ cities in Madhya Pradesh — CA & CS assisted, 100% online, starting ₹499.",
  keywords: [
    "GST registration Madhya Pradesh",
    "income tax filing MP",
    "FSSAI license MP",
    "company registration MP",
    "ROC services Bhopal",
    "ITR filing Indore",
    "GST return MP",
    "food license Madhya Pradesh",
    "CA services MP",
    "Taxvio Madhya Pradesh",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/state/madhya-pradesh",
  },
  openGraph: {
    title: "Tax & Compliance Services Across 400+ MP Cities | Taxvio",
    description:
      "GST, Income Tax, FSSAI & ROC services across all Madhya Pradesh cities — CA & CS assisted, starting ₹499.",
    url: "https://www.taxvio.in/state/madhya-pradesh",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Compliance Services Across MP | Taxvio",
    description:
      "GST, ITR, FSSAI & company registration across 400+ MP cities — starting ₹499.",
  },
  robots: { index: true, follow: true },
};

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const SERVICE_CATEGORIES = [
  {
    slug: "gst-services",
    label: "GST Services",
    icon: "🧾",
    color: "from-blue-600 to-indigo-700",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    accentText: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-700",
    startingPrice: "₹499",
    tagline: "Registration, Returns & Compliance",
    description:
      "GST registration, GSTR-1, GSTR-3B, annual return (GSTR-9), GST refund, LUT filing, e-invoicing, notice reply and audit assistance — across all MP cities.",
    services: [
      { slug: "gst-registration",   label: "GST Registration" },
      { slug: "gst-return",         label: "GST Return Filing" },
      { slug: "gst-refund",         label: "GST Refund" },
      { slug: "gst-cancellation",   label: "GST Cancellation" },
      { slug: "gst-amendment",      label: "GST Amendment" },
      { slug: "gst-lut",            label: "LUT Filing" },
      { slug: "gstr-9",             label: "GSTR-9 Annual Return" },
      { slug: "gst-notice-reply",   label: "GST Notice Reply" },
      { slug: "gst-audit",          label: "GST Audit" },
      { slug: "gst-e-invoicing",    label: "E-Invoicing" },
      { slug: "gst-for-e-commerce", label: "GST for E-Commerce" },
      { slug: "gst-for-freelancers",label: "GST for Freelancers" },
    ],
  },
  {
    slug: "income-tax-services",
    label: "Income Tax",
    icon: "💼",
    color: "from-sky-600 to-blue-700",
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-100",
    accentText: "text-sky-700",
    badgeColor: "bg-sky-100 text-sky-700",
    startingPrice: "₹499",
    tagline: "ITR Filing, TDS & Tax Compliance",
    description:
      "ITR filing for salaried, proprietors, firms, LLPs & companies; quarterly TDS/TCS returns; tax audit; 12A/80G registration; PAN/TAN; and income tax scrutiny reply — across all MP cities.",
    services: [
      { slug: "itr-salaried",         label: "ITR – Salaried" },
      { slug: "itr-proprietor",       label: "ITR – Proprietor" },
      { slug: "itr-firm-llp",         label: "ITR – Firm / LLP" },
      { slug: "itr-trust-company",    label: "ITR – Company / Trust" },
      { slug: "quarterly-tds",        label: "TDS Returns" },
      { slug: "quarterly-tcs",        label: "TCS Returns" },
      { slug: "income-tax-audit",     label: "Tax Audit (Sec. 44AB)" },
      { slug: "income-tax-scrutiny",  label: "IT Scrutiny Reply" },
      { slug: "12a-application",      label: "12A Registration" },
      { slug: "80g-application",      label: "80G Registration" },
      { slug: "pan-card",             label: "PAN Card" },
      { slug: "tan-application",      label: "TAN Application" },
      { slug: "15g-15h",              label: "Form 15G / 15H" },
    ],
  },
  {
    slug: "fssai",
    label: "FSSAI Services",
    icon: "🍽️",
    color: "from-green-600 to-emerald-700",
    accentBg: "bg-green-50",
    accentBorder: "border-green-100",
    accentText: "text-green-700",
    badgeColor: "bg-green-100 text-green-700",
    startingPrice: "₹999",
    tagline: "Food License Registration & Compliance",
    description:
      "FSSAI Basic, State & Central food license registration, renewal, modification, annual return (Form D-1), notice reply, and license verification — for restaurants, manufacturers and food businesses across all MP cities.",
    services: [
      { slug: "fssai-registration",  label: "FSSAI Registration" },
      { slug: "fssai-renewal",       label: "License Renewal" },
      { slug: "fssai-modification",  label: "License Modification" },
      { slug: "fssai-annual-return", label: "Annual Return Filing" },
      { slug: "fssai-notice-reply",  label: "Notice Reply" },
      { slug: "fssai-search",        label: "License Verification" },
    ],
  },
  {
    slug: "roc-services",
    label: "ROC & Company Registration",
    icon: "🏢",
    color: "from-violet-600 to-purple-700",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-100",
    accentText: "text-violet-700",
    badgeColor: "bg-violet-100 text-violet-700",
    startingPrice: "₹1,999",
    tagline: "Company Formation & MCA Compliance",
    description:
      "Private Limited company formation, LLP & OPC registration, Section 8, annual ROC compliance (AOC-4, MGT-7), director changes, company name change, authorised capital increase, and company closure — across all MP cities.",
    services: [
      { slug: "private-limited-formation",      label: "Private Limited Company" },
      { slug: "llp-formation",                  label: "LLP Registration" },
      { slug: "opc-formation",                  label: "OPC Registration" },
      { slug: "section-8-company",              label: "Section 8 Company" },
      { slug: "annual-roc-compliance",          label: "Annual ROC Compliance" },
      { slug: "director-appointment-resignation",label: "Director Change" },
      { slug: "company-name-change",            label: "Company Name Change" },
      { slug: "authorized-capital-increase",    label: "Capital Increase" },
      { slug: "company-closure",                label: "Company Closure" },
    ],
  },
];

const TIER1_CITIES = MP_CITIES.filter((c) => c.tier === 1);
const TIER2_CITIES = MP_CITIES.filter((c) => c.tier === 2);

const SEO_SECTIONS = [
  {
    heading: "Comprehensive Tax & Compliance Services Across Madhya Pradesh",
    body: `Madhya Pradesh — India's second-largest state by area and home to over 8.5 crore people — has one of the most diverse business landscapes in central India. From Indore's thriving startup and financial services ecosystem to Bhopal's administrative and IT corridor, from Jabalpur's defence and educational institutions to Gwalior's historic trade networks, from Ujjain's pilgrimage economy to the MSME clusters in Ratlam, Mandsaur, Dewas, Katni, and Chhindwara — businesses across all 55 MP districts need expert, accessible, and affordable tax and compliance support.

Taxvio provides the full spectrum of business compliance services across 400+ cities and towns in Madhya Pradesh — GST registration and monthly/quarterly return filing, income tax return (ITR) filing for all entity types, FSSAI food license registration and renewal, and ROC company registration and post-incorporation compliance. Our CA, CS, and compliance expert team operates 100% online through a WhatsApp-first model — ensuring that every business owner, professional, and entrepreneur in MP, from the largest manufacturer in Pithampur to the smallest food vendor in Dindori, gets the same expert-quality service without needing to travel to a consultant's office.`,
  },
  {
    heading: "GST Compliance & Income Tax Filing in Madhya Pradesh",
    body: `GST compliance in Madhya Pradesh covers over 12 lakh registered taxpayers across all sectors — traders, manufacturers, service providers, e-commerce sellers, exporters, and professionals. Every GST-registered business must file GSTR-1 and GSTR-3B monthly or quarterly (under QRMP), reconcile their Input Tax Credit with GSTR-2B, file the annual return GSTR-9, and maintain proper books of accounts for GST audit under Section 65/66. Taxvio's GST team manages end-to-end GST compliance for MP businesses — from initial registration to annual return and GST notice reply.

Income tax compliance in Madhya Pradesh spans salaried government and private sector employees, proprietors and self-employed professionals, partnership firms, LLPs, Private Limited companies, and trusts — each with distinct ITR forms, deduction possibilities, and audit requirements. Taxvio's income tax team handles ITR-1 through ITR-7, quarterly TDS/TCS returns (24Q, 26Q, 27Q, 27EQ), tax audit under Section 44AB, 12A/80G registration for MP trusts and NGOs, PAN and TAN applications, and income tax scrutiny replies — for taxpayers across all 55 MP districts and 400+ cities.`,
  },
  {
    heading: "FSSAI Food Licenses & ROC Company Registration in MP",
    body: `Every food business operator in Madhya Pradesh — from the largest soya processing plant in Indore to the smallest street food vendor in Khajuraho — must hold a valid FSSAI registration or license under the Food Safety and Standards Act, 2006. Taxvio handles all FSSAI compliance categories across MP: Basic Registration for petty food businesses (turnover below ₹12 lakh), State License for mid-sized restaurants, manufacturers, and traders (₹12 lakh–₹20 crore), and Central License for large-scale processors, importers, and multi-state food operators (above ₹20 crore). Annual return (Form D-1) filing, license renewal, modification, and FSSAI notice replies are also handled for all MP food businesses.

For businesses registering new companies or LLPs in Madhya Pradesh, all company registrations fall under the jurisdiction of the Registrar of Companies (RoC), Gwalior. Taxvio's ROC team handles the complete formation process for Private Limited companies, LLPs, OPCs, and Section 8 non-profit companies — including SPICe+ filing, MOA/AOA drafting, DIN/DSC issuance, and post-formation annual compliance (AOC-4, MGT-7, Form 11, Form 8). Event-based filings including director changes (DIR-12), company name change (INC-24), authorised capital increase (SH-7), and voluntary company strike-off (STK-2) are also handled for MP companies.`,
  },
];

/* ─── JSON-LD ─────────────────────────────────────────────────────────────── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  telephone: "+918937980366",
  email: "support@taxvio.in",
  description:
    "Taxvio provides GST, income tax, FSSAI, and ROC company registration services across 400+ cities in Madhya Pradesh.",
  areaServed: [
    {
      "@type": "State",
      name: "Madhya Pradesh",
      containedInPlace: { "@type": "Country", name: "India" },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khatauli",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2400",
  },
  priceRange: "₹499 - ₹9999",
  openingHours: "Mo-Sa 09:00-19:00",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Madhya Pradesh Services", item: "https://www.taxvio.in/state/madhya-pradesh" },
  ],
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tax & Compliance Services in Madhya Pradesh | Taxvio",
  numberOfItems: SERVICE_CATEGORIES.length,
  itemListElement: SERVICE_CATEGORIES.map((cat, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: cat.label,
    url: `https://www.taxvio.in/state/madhya-pradesh/${cat.slug}`,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Taxvio provide in Madhya Pradesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taxvio provides GST registration & return filing, income tax return (ITR) filing, FSSAI food license registration & renewal, and ROC company registration & annual compliance across 400+ cities in Madhya Pradesh. All services are delivered 100% online with CA & CS assistance.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities in Madhya Pradesh does Taxvio serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taxvio serves all 400+ cities and towns in Madhya Pradesh — from major cities like Bhopal, Indore, Jabalpur, Gwalior, and Ujjain to all 55 district headquarters and smaller tehsil towns across all 10 administrative divisions of MP.",
      },
    },
    {
      "@type": "Question",
      name: "Is Taxvio's service available online for MP businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Taxvio operates 100% online through a WhatsApp-first model. MP business owners can share documents on WhatsApp, get CA & CS consultation, and receive completed filings without any office visit. Services start from ₹499.",
      },
    },
  ],
};

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function MPPillarPage() {
  const PHONE = "918937980366";
  const WA =
    "https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20compliance%20services%20in%20Madhya%20Pradesh.";

  return (
    <>
      <Script
        id="lb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="bc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="sl-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#f7f8fc] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#0f172a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0c1a36]" />
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(139,92,246,0.10) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(59,130,246,0.08) 0%,transparent 65%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/45">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <span className="text-white/25">›</span>
                <li className="text-white/70 font-semibold">
                  Madhya Pradesh — All Services
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-14 items-center">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.09)",
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shrink-0" />
                  Madhya Pradesh · {MP_CITIES.length}+ Cities · 4 Service Categories · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Tax &amp; Compliance Services
                  <span className="block mt-2 bg-gradient-to-r from-violet-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                    Across Madhya Pradesh
                  </span>
                </h1>

                <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
                  Expert{" "}
                  <strong className="text-white">GST registration &amp; returns</strong>,{" "}
                  <strong className="text-white">ITR filing &amp; TDS</strong>,{" "}
                  <strong className="text-white">FSSAI food license</strong>, and{" "}
                  <strong className="text-white">ROC company registration</strong> — across all{" "}
                  <strong className="text-white">{MP_CITIES.length}+</strong> cities in
                  Madhya Pradesh. CA &amp; CS assisted, 100% online, starting{" "}
                  <strong className="text-violet-300">₹499</strong>.
                </p>

                {/* Category quick-links */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/state/madhya-pradesh/${cat.slug}`}
                      className="group flex flex-col items-center gap-2 rounded-2xl p-4 text-center transition-all hover:-translate-y-0.5 hover:bg-white/10"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <p className="text-[11px] font-bold text-white/75 leading-tight">
                        {cat.label}
                      </p>
                      <span className="text-[10px] text-violet-300 font-semibold">
                        from {cat.startingPrice}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-4 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#0f172a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-7 py-4 text-white text-sm font-bold hover:bg-white/10 hover:border-white/60 active:scale-[0.97] transition-all"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </div>

              {/* Right — stats panel */}
              <div
                className="hidden md:flex flex-col gap-4 rounded-3xl p-6"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  Madhya Pradesh Service Hub
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: `${MP_CITIES.length}+`, label: "MP Cities Covered",    icon: Globe },
                    { val: "4",                    label: "Service Categories",    icon: ClipboardList },
                    { val: "30+",                  label: "Individual Services",   icon: FileText },
                    { val: "20,000+",              label: "Clients Served",        icon: Users },
                    { val: "₹499",                 label: "Starting Price",        icon: IndianRupee },
                    { val: "4.9★",                 label: "Average Rating",        icon: Star },
                  ].map(({ val, label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1.5 rounded-2xl p-4"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Icon size={14} className="text-violet-300" />
                      <p className="text-xl font-extrabold text-white leading-tight">
                        {val}
                      </p>
                      <p className="text-[10px] text-white/45 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-1 rounded-2xl px-4 py-3 flex items-center gap-3"
                  style={{
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.25)",
                  }}
                >
                  <ShieldCheck size={20} className="text-violet-300 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">
                      100% Online · No Office Visit
                    </p>
                    <p className="text-[10px] text-white/45 mt-0.5">
                      CA &amp; CS certified · WhatsApp-first delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/[0.07]">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, label: "CA & CS Certified Team" },
                { icon: Star,        label: "4.9★ Rating" },
                { icon: Zap,         label: "Same-Day Response" },
                { icon: Shield,      label: "100% Online & Secure" },
                { icon: MessageCircle, label: "WhatsApp Support" },
                { icon: Globe,       label: `${MP_CITIES.length}+ MP Cities` },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-white/45 text-xs"
                >
                  <Icon size={12} className="text-violet-400 shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f7f8fc"
            />
          </svg>
        </section>

        {/* ════════ SERVICE CATEGORY CARDS ════════ */}
        <section className="py-20 bg-[#f7f8fc]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                All Service Categories
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mt-4">
                What Taxvio Offers Across Madhya Pradesh
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-2xl mx-auto">
                Every service below is available across all {MP_CITIES.length}+ MP cities — 100% online, CA &amp; CS assisted. Click any category to explore city-specific pages.
              </p>
            </div>

            <div className="space-y-8">
              {SERVICE_CATEGORIES.map((cat) => (
                <div
                  key={cat.slug}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${cat.color} p-6 md:p-8`}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center text-3xl shrink-0">
                          {cat.icon}
                        </div>
                        <div>
                          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                            {cat.tagline}
                          </p>
                          <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                            {cat.label}
                          </h2>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="bg-white/20 border border-white/25 rounded-xl px-4 py-2 text-center">
                          <p className="text-[10px] text-white/60 font-bold uppercase tracking-wide">
                            Starting
                          </p>
                          <p className="text-white font-extrabold text-xl leading-tight">
                            {cat.startingPrice}
                          </p>
                        </div>
                        <Link
                          href={`/state/madhya-pradesh/${cat.slug}`}
                          className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 rounded-xl px-4 py-2.5 text-white text-xs font-bold transition-all"
                        >
                          All Cities <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-3xl">
                      {cat.description}
                    </p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-6">
                      {cat.services.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/serviceslist/${
                            cat.slug === "gst-services"
                              ? "gst"
                              : cat.slug === "income-tax-services"
                              ? "income-tax"
                              : cat.slug === "fssai"
                              ? "fssai"
                              : "roc"
                          }/${svc.slug}`}
                          className={`group flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold border ${cat.accentBg} ${cat.accentBorder} ${cat.accentText} hover:shadow-sm hover:-translate-y-0.5 transition-all`}
                        >
                          <CheckCircle size={9} className="shrink-0 opacity-70" />
                          <span className="truncate">{svc.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Major Cities Quick Links */}
                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                        {cat.label} in Major MP Cities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {TIER1_CITIES.slice(0, 10).map((c) => (
                          <Link
                            key={c.name}
                            href={`/state/madhya-pradesh/${cat.slug}/${slugifyCity(c.name)}`}
                            className={`inline-flex items-center gap-1 rounded-full border ${cat.accentBorder} ${cat.accentBg} px-3 py-1 text-[11px] font-semibold ${cat.accentText} hover:shadow-sm transition-all`}
                          >
                            <MapPin size={8} className="shrink-0 opacity-60" />
                            {c.name}
                          </Link>
                        ))}
                        <Link
                          href={`/state/madhya-pradesh/${cat.slug}`}
                          className={`inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-semibold text-gray-500 hover:border-gray-300 hover:shadow-sm transition-all`}
                        >
                          +{MP_CITIES.length - 10} more cities
                          <ChevronRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ALL MAJOR CITIES ════════ */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#0f172a] to-violet-500" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-700">
                  District Headquarters
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  All Services in Key MP Cities
                </h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER1_CITIES.map((c) => (
                <div
                  key={c.name}
                  className="group rounded-2xl border border-gray-100 bg-[#f7f8fc] hover:border-indigo-200 hover:bg-white hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="px-4 pt-4 pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold text-sm text-gray-800 group-hover:text-[#0f172a]">
                          {c.name}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          {c.district} District
                        </p>
                      </div>
                      <span className="text-lg">🏙️</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICE_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/state/madhya-pradesh/${cat.slug}/${slugifyCity(c.name)}`}
                          className={`flex items-center gap-1 rounded-lg px-2 py-1.5 text-[10px] font-semibold ${cat.accentBg} ${cat.accentText} hover:opacity-80 transition-opacity`}
                        >
                          <span>{cat.icon}</span>
                          <span className="truncate">
                            {cat.label === "ROC & Company Registration"
                              ? "ROC"
                              : cat.label === "Income Tax"
                              ? "Income Tax"
                              : cat.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIER-2 CITIES ════════ */}
        <section className="py-14 bg-[#f7f8fc] border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-indigo-500 to-violet-600" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-600">
                  Major Towns & Sub-Divisional Centres
                </p>
                <h2 className="text-xl font-extrabold text-gray-800">
                  Services in MP District Towns
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_CITIES.map((c) => (
                <div
                  key={c.name}
                  className="group rounded-xl border border-gray-100 bg-white hover:border-indigo-200 hover:shadow-sm transition-all p-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin
                      size={11}
                      className="text-indigo-400 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-gray-800 truncate">
                        {c.name}
                      </p>
                      <p className="text-[10px] text-gray-400 truncate">
                        {c.district}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/state/madhya-pradesh/${cat.slug}/${slugifyCity(c.name)}`}
                        title={`${cat.label} in ${c.name}`}
                        className="text-lg hover:scale-110 transition-transform"
                      >
                        {cat.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ALL CITIES BY REGION ════════ */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                Full MP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mt-4">
                All Services — Every Madhya Pradesh City by Division
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
                    <div className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-violet-300 shrink-0" />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionCities.length} cities
                      </span>
                    </div>
                    <div className="px-3 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {regionCities.map((c) => (
                        <div key={c.name} className="py-1.5 px-2">
                          <p className="text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                            <MapPin size={8} className="text-gray-300 shrink-0" />
                            {c.name}
                          </p>
                          <div className="flex gap-1.5 flex-wrap">
                            {SERVICE_CATEGORIES.map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/state/madhya-pradesh/${cat.slug}/${slugifyCity(c.name)}`}
                                title={`${cat.label} in ${c.name}`}
                                className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${cat.accentBg} ${cat.accentText} hover:opacity-75 transition-opacity`}
                              >
                                {cat.icon}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ WHY TAXVIO ════════ */}
        <section className="py-20 bg-[#f7f8fc] border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] mt-4">
                Why Madhya Pradesh Businesses Choose Taxvio
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "CA & CS Certified Team",
                  desc: "Every filing — whether GST return, ITR, FSSAI application, or ROC form — is handled by practising Chartered Accountants and Company Secretaries. Real professional sign-off on every compliance task.",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Zap,
                  title: "100% Online — No Office Visit",
                  desc: "Share documents on WhatsApp from anywhere in MP. We handle the entire compliance process — preparation, filing, approval tracking — and deliver certificates digitally without any physical visits.",
                  color: "bg-violet-100 text-violet-700",
                },
                {
                  icon: Globe,
                  title: `${MP_CITIES.length}+ MP Cities Covered`,
                  desc: "From Bhopal and Indore to the smallest tehsil town in Dindori or Alirajpur — every MP city and town is served. No city is too small, no business too early-stage for Taxvio.",
                  color: "bg-emerald-100 text-emerald-700",
                },
                {
                  icon: ClipboardList,
                  title: "One Stop for All Compliance",
                  desc: "GST, Income Tax, FSSAI, and ROC — all under one roof. No need to engage separate consultants for different compliance needs. Taxvio's team handles your complete compliance calendar.",
                  color: "bg-amber-100 text-amber-700",
                },
                {
                  icon: CheckCircle,
                  title: "Transparent Pricing from ₹499",
                  desc: "No surprise fees, no consultation charges. All professional fees, government fees, and documentation costs are disclosed upfront before we start — so MP business owners know exactly what they pay.",
                  color: "bg-teal-100 text-teal-700",
                },
                {
                  icon: MapPin,
                  title: "MP Business Landscape Expertise",
                  desc: "We understand MP's diverse sectors — soya processors in Indore, marble traders in Katni, pharma in Dewas, tribal food producers in Balaghat, pilgrimage economy in Ujjain — and tailor compliance accordingly.",
                  color: "bg-rose-100 text-rose-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ SEO CONTENT ════════ */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#0f172a] to-violet-500 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-4">
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

        {/* ════════ FAQ ════════ */}
        <section className="py-16 bg-[#f7f8fc] border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-2xl font-extrabold text-[#0f172a] mt-3">
                Frequently Asked Questions — MP Services
              </h2>
            </div>
            <div
              className="space-y-3"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {[
                {
                  q: "What services does Taxvio provide in Madhya Pradesh?",
                  a: `Taxvio provides four main categories of services across ${MP_CITIES.length}+ cities in Madhya Pradesh: GST registration and return filing (GSTR-1, GSTR-3B, GSTR-9, GST refund, LUT, notice reply); Income Tax services (ITR filing for salaried, proprietors, firms, companies; TDS/TCS returns; tax audit; 12A/80G; PAN/TAN); FSSAI food license (Basic, State, Central registration, renewal, modification, annual return); and ROC services (Private Limited, LLP, OPC, Section 8 formation; annual compliance; director changes; company closure). All services are 100% online, CA & CS assisted.`,
                },
                {
                  q: "Is GST registration mandatory for businesses in Madhya Pradesh?",
                  a: "GST registration is mandatory for businesses in Madhya Pradesh whose annual turnover exceeds ₹40 lakh (for goods suppliers) or ₹20 lakh (for service providers). Inter-state suppliers, e-commerce sellers, and businesses registered under special categories must register regardless of turnover. Taxvio handles GST registration for all business types across all MP cities.",
                },
                {
                  q: "Which Registrar of Companies has jurisdiction over MP companies?",
                  a: "The Registrar of Companies (RoC), Gwalior has jurisdiction over all companies registered in Madhya Pradesh. Annual filings (AOC-4, MGT-7), event-based filings (DIR-12, SH-7, INC-24, STK-2), and company inquiries are handled through the MCA portal under RoC Gwalior's jurisdiction. Taxvio's ROC team is experienced with all MP company filings under this jurisdiction.",
                },
                {
                  q: "Is FSSAI registration required for home food businesses in MP?",
                  a: "Yes — any person carrying on a food business in Madhya Pradesh, including home bakers, home cooks supplying food through Zomato/Swiggy, cottage food producers, and home-based food manufacturers, must obtain at minimum a Basic FSSAI Registration. The ₹100/year government fee Basic Registration applies to petty food businesses with annual turnover below ₹12 lakh. Taxvio handles FSSAI registration for home-based food businesses across all MP cities.",
                },
                {
                  q: "Can I get all my compliance done through Taxvio without visiting an office?",
                  a: "Yes — Taxvio operates 100% online through a WhatsApp-first delivery model. MP business owners share documents on WhatsApp, receive CA/CS consultation remotely, approve draft filings before submission, and receive completed filing certificates digitally. There is no requirement for in-person visits for any of Taxvio's services across Madhya Pradesh.",
                },
              ].map((f) => (
                <div
                  key={f.q}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <div className="px-5 py-4 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText size={11} className="text-indigo-600" />
                    </span>
                    <div>
                      <p
                        className="text-sm font-semibold text-gray-800"
                        itemProp="name"
                      >
                        {f.q}
                      </p>
                      <div itemScope itemType="https://schema.org/Answer">
                        <p
                          className="text-xs text-gray-600 mt-2 leading-relaxed"
                          itemProp="text"
                        >
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TAG CLOUD — ALL CITIES ════════ */}
        <section className="py-16 bg-[#0f172a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">
                All Madhya Pradesh Cities — Tax &amp; Compliance Services
              </h2>
              <p className="text-white/50 text-sm mt-2">
                Click any city to explore GST, Income Tax, FSSAI &amp; ROC
                services near you
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {MP_CITIES.map((c, i) => (
                <div key={`${c.name}-${i}`} className="group relative">
                  <button
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    <MapPin size={8} className="text-violet-400 shrink-0" />
                    {c.name}
                  </button>
                  {/* Hover dropdown */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col gap-1 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 z-10 min-w-[140px]">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/state/madhya-pradesh/${cat.slug}/${slugifyCity(c.name)}`}
                        className={`flex items-center gap-2 text-[11px] font-semibold px-2 py-1.5 rounded-lg ${cat.accentBg} ${cat.accentText} hover:opacity-80 transition-opacity whitespace-nowrap`}
                      >
                        <span>{cat.icon}</span>
                        {cat.label === "ROC & Company Registration"
                          ? "ROC"
                          : cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-white/30 text-xs mt-6">
              Hover over any city to see available services
            </p>
          </div>
        </section>

        {/* ════════ CTA BANNER ════════ */}
        <section className="py-16 px-6 bg-[#f7f8fc]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#0f172a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0c1a36]" />
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
                style={{ background: "rgba(139,92,246,0.12)" }}
              />
              <div
                className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-[80px] pointer-events-none"
                style={{ background: "rgba(59,130,246,0.08)" }}
              />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <Zap size={11} className="text-violet-300" />
                  Serving {MP_CITIES.length}+ cities across Madhya Pradesh
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  All Your Compliance Needs — One Platform, All MP
                </h2>
                <p className="mt-4 text-white/65 max-w-xl mx-auto text-sm leading-relaxed">
                  GST, Income Tax, FSSAI food license, and ROC company registration — all delivered online for businesses across every city and town in Madhya Pradesh. CA &amp; CS assisted. Starting ₹499.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#0f172a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white/60 active:scale-[0.97] transition-all"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>

                {/* Category CTA grid */}
                <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/state/madhya-pradesh/${cat.slug}`}
                      className="group flex flex-col items-center gap-2 rounded-2xl p-4 transition-all hover:bg-white/10"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <p className="text-xs font-bold text-white/70 text-center leading-tight group-hover:text-white transition-colors">
                        {cat.label}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] text-violet-300 font-semibold">
                        Explore <ArrowRight size={9} />
                      </span>
                    </Link>
                  ))}
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