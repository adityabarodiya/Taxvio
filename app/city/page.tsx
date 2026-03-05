import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import { MapPin, ArrowRight, CheckCircle, Building2, FileText, Shield, Users, Zap } from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "GST Registration & Income Tax Services Across India | Cities We Serve | Taxvio",
  description:
    "Taxvio provides expert GST registration, income tax return filing, company registration & ROC compliance across 28+ major Indian cities. 100% online, CA-assisted, starting ₹499.",
  keywords: [
    "GST registration India city wise",
    "income tax consultant India",
    "GST services Delhi Mumbai Bangalore",
    "online tax filing India",
    "ROC compliance pan India",
    "Taxvio cities",
  ],
  alternates: { canonical: "https://www.taxvio.in/city" },
  openGraph: {
    title: "GST & Income Tax Services Across India | Cities We Serve | Taxvio",
    description: "Expert GST, Income Tax & ROC services across 28+ Indian cities — 100% online, CA-assisted.",
    url: "https://www.taxvio.in/city",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og-cities.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST & Tax Services Across India | Taxvio",
    description: "Expert GST, ITR & company compliance services — pan India, 100% online.",
  },
  robots: { index: true, follow: true },
};

/* ─── Cities Data ──────────────────────────────────────────────────────────── */
const TIER1 = [
  { name: "Delhi", tag: "Capital Region" },
  { name: "Mumbai", tag: "Financial Hub" },
  { name: "Bangalore", tag: "Tech Capital" },
  { name: "Hyderabad", tag: "HITEC City" },
  { name: "Chennai", tag: "South Gateway" },
  { name: "Kolkata", tag: "East India Hub" },
  { name: "Pune", tag: "IT & Auto" },
  { name: "Ahmedabad", tag: "Trade Center" },
];

const TIER2 = [
  { name: "Noida", tag: "NCR" },
  { name: "Greater Noida", tag: "NCR" },
  { name: "Ghaziabad", tag: "NCR" },
  { name: "Gurgaon", tag: "NCR" },
  { name: "Faridabad", tag: "NCR" },
  { name: "Jaipur", tag: "Rajasthan" },
  { name: "Lucknow", tag: "UP Capital" },
  { name: "Chandigarh", tag: "Punjab & Haryana" },
  { name: "Indore", tag: "MP" },
  { name: "Bhopal", tag: "MP Capital" },
  { name: "Surat", tag: "Gujarat" },
  { name: "Kanpur", tag: "UP" },
  { name: "Patna", tag: "Bihar Capital" },
  { name: "Dehradun", tag: "Uttarakhand" },
  { name: "Ranchi", tag: "Jharkhand" },
  { name: "Nagpur", tag: "Maharashtra" },
  { name: "Visakhapatnam", tag: "AP" },
];

const LOCAL = [
  { name: "Meerut", tag: "UP" },
  { name: "Muzaffarnagar", tag: "UP" },
  { name: "Khatauli", tag: "UP" },
];

function slugify(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

/* ─── Services we provide per city ────────────────────────────────────────── */
const CITY_SERVICES = [
  { label: "GST Registration", href: "/serviceslist/gst/gst-registration", icon: "🧾" },
  { label: "GST Return Filing", href: "/serviceslist/gst/gst-return", icon: "📄" },
  { label: "Income Tax Filing", href: "/serviceslist/income-tax/itr-salaried", icon: "💼" },
  { label: "Company Registration", href: "/serviceslist/roc/private-limited-formation", icon: "🏛" },
  { label: "FSSAI License", href: "/serviceslist/fssai/fssai-registration", icon: "🥗" },
  { label: "TDS Return Filing", href: "/serviceslist/income-tax/quarterly-tds", icon: "📊" },
];

/* ─── SEO Q&A blocks ───────────────────────────────────────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "GST Registration & Return Filing Services Across India",
    body: `GST registration is mandatory for businesses exceeding the prescribed annual turnover threshold, businesses engaged in interstate supply, e-commerce operators, and certain notified service categories. Taxvio's expert team handles end-to-end GST registration — from eligibility assessment and document preparation to GSTIN allotment — across all 28+ cities we serve.

Beyond registration, our monthly and quarterly GST return filing service covers GSTR-1, GSTR-3B, GSTR-9 (annual return), LUT filing for exporters, GST refund applications, and e-invoicing compliance. Our CA-assisted service ensures accurate reconciliation, timely filing, and zero penalties — for retailers, manufacturers, service providers, and e-commerce businesses alike.`,
  },
  {
    heading: "Income Tax Return Filing for Individuals & Businesses",
    body: `Filing Income Tax Returns accurately and on time is a legal obligation and a financial discipline. Taxvio provides comprehensive ITR filing services for salaried employees (ITR-1, ITR-2), proprietors and freelancers (ITR-3, ITR-4), partnership firms and LLPs, private limited companies and trusts — across all cities we serve.

Our CA team optimises deductions under Sections 80C, 80D, 10(14), HRA exemptions, and capital gains treatment — ensuring you pay only what is legally due. TDS return filing (Form 24Q, 26Q, 27Q), tax audit under Section 44AB, income tax scrutiny notice replies, and 12A/80G registration for NGOs are also available pan-India through Taxvio.`,
  },
  {
    heading: "Company Registration & ROC Compliance — All India",
    body: `Taxvio handles complete company and LLP formation through the Ministry of Corporate Affairs (MCA) portal — including Private Limited Company, One Person Company (OPC), Limited Liability Partnership (LLP), and Section 8 (non-profit) company registration. Our services cover name availability check, DIN & DSC processing, MOA/AOA drafting, Certificate of Incorporation, and PAN/TAN application.

For incorporated entities, we manage ongoing ROC compliance: annual filing of AOC-4 (financial statements) and MGT-7 (annual return) for companies; Form 11 and Form 8 for LLPs; director appointment and resignation (DIR-12); changes in authorised share capital (SH-7); and company closure/strike-off proceedings.`,
  },
  {
    heading: "Why Taxvio Serves Businesses in 28+ Cities",
    body: `India's GST, income tax, and corporate compliance landscape varies across states — with state-specific GST offices, jurisdictions, and local compliance nuances. Taxvio's city-specific service pages are designed to help businesses in each city find exactly the tax and compliance support they need, with pricing, timelines, and document requirements relevant to their region.

Whether you are a startup in Bangalore's tech corridor, a trader in Delhi's wholesale market, a manufacturer in Surat's textile belt, or a professional in Hyderabad's HITEC City — Taxvio delivers the same CA-quality compliance support, 100% online, without the need for an office visit. Our WhatsApp-first communication model means you can share documents, track progress, and get expert answers from any city in India.`,
  },
];

/* ─── Schema ───────────────────────────────────────────────────────────────── */
const allCities = [...TIER1, ...TIER2, ...LOCAL];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Indian Cities Served by Taxvio — GST & Tax Services",
  description: "Taxvio provides GST registration, income tax filing, company registration, and ROC compliance services across 28+ Indian cities.",
  numberOfItems: allCities.length,
  itemListElement: allCities.map((city, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${city.name} — GST & Tax Services`,
    url: `https://www.taxvio.in/city/${slugify(city.name)}`,
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  telephone: "+918937980366",
  areaServed: allCities.map((c) => ({ "@type": "City", name: c.name })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khatauli",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tax & Compliance Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Registration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Income Tax Return Filing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Company Registration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ROC Compliance" } },
    ],
  },
};

/* ─── City Card Component ──────────────────────────────────────────────────── */
function CityCard({ name, tag, featured = false }: { name: string; tag: string; featured?: boolean }) {
  return (
    <Link
      href={`/city/${slugify(name)}`}
      aria-label={`GST and tax services in ${name}`}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
        ${featured
          ? "bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg"
          : "bg-white border border-gray-100 text-gray-800 hover:border-[#00416a]/30 shadow-sm"
        }`}
    >
      {/* Subtle pattern overlay for featured */}
      {featured && (
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
      )}

      <div className="relative p-5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-200
            ${featured ? "bg-white/15" : "bg-[#00416a]/8"}`}>
            <MapPin size={16} className={featured ? "text-sky-300" : "text-[#00416a]"} />
          </div>
          <div>
            <p className={`font-bold text-sm leading-tight ${featured ? "text-white" : "text-gray-800 group-hover:text-[#00416a]"} transition-colors`}>
              {name}
            </p>
            <span className={`text-[11px] font-medium mt-0.5 inline-block rounded-full px-2 py-0.5
              ${featured ? "bg-white/15 text-white/80" : "bg-gray-100 text-gray-500"}`}>
              {tag}
            </span>
          </div>
        </div>
        <ArrowRight size={14}
          className={`shrink-0 mt-1 group-hover:translate-x-1 transition-all duration-200
            ${featured ? "text-white/60 group-hover:text-white" : "text-gray-300 group-hover:text-[#00416a]"}`} />
      </div>

      {/* Mini service tags */}
      <div className={`px-5 pb-4 flex flex-wrap gap-1`}>
        {["GST", "ITR", "ROC"].map(tag => (
          <span key={tag}
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full
              ${featured ? "bg-white/10 text-white/70" : "bg-[#00416a]/6 text-[#00416a]"}`}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

/* ─── Page Component ───────────────────────────────────────────────────────── */
export default function CityIndexPage() {
  return (
    <>
      <Script id="city-list-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Script id="city-org-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <main className="bg-white text-gray-800" itemScope itemType="https://schema.org/WebPage">

        {/* ════════ HERO ════════ */}
        <section
          aria-label="GST and Tax Services Across India — City Index"
          className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
        >
          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />

          {/* Diagonal accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: "linear-gradient(to bottom right,transparent 49.9%,#f9fafb 50%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50"
                itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <Link href="/" itemProp="item" className="hover:text-white transition"><span itemProp="name">Home</span></Link>
                  <meta itemProp="position" content="1" />
                </li>
                <span className="text-white/30">›</span>
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <span itemProp="name" className="text-white/70">Cities We Serve</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left — Text */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Pan India · 100% Online · CA-Assisted
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white" itemProp="name">
                  GST &amp; Tax Services
                  <span className="block mt-2 text-sky-300">Across 28+ Indian Cities</span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-lg" itemProp="description">
                  Taxvio provides professional <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">income tax return filing</strong>, company registration, ROC
                  compliance, FSSAI license, and TDS returns — 100% online, across India. Starting at{" "}
                  <strong className="text-white">₹499</strong>.
                </p>

                {/* Quick stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { val: "28+", label: "Cities Covered" },
                    { val: "4,800+", label: "Businesses Served" },
                    { val: "₹499", label: "Starting Price" },
                  ].map(({ val, label }) => (
                    <div key={label} className="text-center rounded-xl py-3 px-2"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[11px] text-white/55 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    Free Consultation <ArrowRight size={15} className="shrink-0" />
                  </Link>
                  <Link href="/serviceslist"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Right — Services we offer (visual pill grid) */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4">Services available in every city</p>
                <div className="grid grid-cols-2 gap-3">
                  {CITY_SERVICES.map(({ label, href, icon }) => (
                    <Link key={label} href={href}
                      className="group flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}>
                      <span className="text-xl shrink-0">{icon}</span>
                      <span className="text-sm font-semibold text-white/85 group-hover:text-white transition">{label}</span>
                      <ArrowRight size={12} className="ml-auto shrink-0 text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/35 text-center">Available 100% online · No office visit needed</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ TIER 1 — METRO CITIES ════════ */}
        <section className="py-16 bg-gray-50" aria-label="GST and Tax Services in Metro Cities">
          <div className="max-w-6xl mx-auto px-6">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-[#00416a]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]">Metro Cities</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  GST &amp; Tax Services in Major Indian Cities
                </h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1.map((city) => (
                <CityCard key={city.name} name={city.name} tag={city.tag} featured={true} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIER 2 — MAJOR CITIES ════════ */}
        <section className="py-16 bg-white" aria-label="GST and Tax Services in Tier-2 Cities">
          <div className="max-w-6xl mx-auto px-6">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-sky-500" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-600">Tier-2 Cities</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  GST &amp; Compliance Services in Growing Business Hubs
                </h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER2.map((city) => (
                <CityCard key={city.name} name={city.name} tag={city.tag} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ LOCAL — HOME REGION ════════ */}
        <section className="py-12 bg-blue-50 border-y border-blue-100" aria-label="Taxvio Home Region — Muzaffarnagar">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full bg-emerald-500" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Home Region</p>
                <h2 className="text-xl font-extrabold text-gray-800">Headquartered in Muzaffarnagar, UP</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-xl">
              {LOCAL.map((city) => (
                <CityCard key={city.name} name={city.name} tag={city.tag} />
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-600 max-w-xl">
              Taxvio is headquartered in <strong>Khatauli, Muzaffarnagar, Uttar Pradesh</strong>.
              Clients in Meerut, Muzaffarnagar, Shamli, Saharanpur, and surrounding districts
              can reach us instantly via WhatsApp or call for same-day consultation.
            </p>
          </div>
        </section>

        {/* ════════ WHY CHOOSE TAXVIO ════════ */}
        <section className="py-20 bg-white" aria-label="Why Choose Taxvio for Tax Services">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why 4,800+ Businesses Across India Choose Taxvio
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Same CA-quality service whether you're in Delhi NCR or a tier-3 city — always 100% online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users, title: "Expert CA & Legal Team", desc: "Every service handled by practising Chartered Accountants — not just data entry operators." },
                { icon: Zap, title: "100% Online — No Office Visit", desc: "Share documents on WhatsApp or email. Track your filing status in real-time. Zero office visits." },
                { icon: Shield, title: "100% Secure & Confidential", desc: "Strict document confidentiality protocols. Your data is never shared with third parties." },
                { icon: FileText, title: "GST, ITR & ROC Under One Roof", desc: "One team covers GST, income tax, TDS, company compliance, and FSSAI — reducing coordination overhead." },
                { icon: CheckCircle, title: "Transparent Pricing from ₹499", desc: "No hidden fees. Clear pricing for every service. Pay only when you're satisfied with the scope." },
                { icon: Building2, title: "All India Coverage", desc: "Metro cities to tier-3 towns — our digital-first model means location is never a barrier." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title}
                  className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-[#00416a]/8 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#00416a]" />
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

        {/* ════════ SEO CONTENT SECTIONS ════════ */}
        <section className="bg-gray-50 py-20" aria-label="About Taxvio Services — GST Income Tax Company Registration">
          <div className="max-w-4xl mx-auto px-6 space-y-14">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading}>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                  {heading}
                </h2>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  {body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ SERVICES QUICK GRID ════════ */}
        <section className="py-20 bg-white" aria-label="Services available in all cities">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a]">
                Services Available in Every City We Serve
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Every service below is available to clients across all 28+ cities — 100% online.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "GST Registration", href: "/serviceslist/gst/gst-registration", desc: "GSTIN in 3–7 working days — ₹1,499" },
                { title: "GST Return Filing", href: "/serviceslist/gst/gst-return", desc: "GSTR-1, GSTR-3B, GSTR-9 — ₹499/month" },
                { title: "GST Refund", href: "/serviceslist/gst/gst-refund", desc: "Export & ITC refunds — ₹2,499" },
                { title: "ITR Filing – Salaried", href: "/serviceslist/income-tax/itr-salaried", desc: "Form 16 based ITR — ₹499" },
                { title: "ITR Filing – Business", href: "/serviceslist/income-tax/itr-proprietor", desc: "Proprietor & firm ITR — ₹1,999" },
                { title: "Company Registration", href: "/serviceslist/roc/private-limited-formation", desc: "Pvt Ltd incorporation — ₹6,999" },
                { title: "LLP Registration", href: "/serviceslist/roc/llp-formation", desc: "LLP with MCA compliance — ₹5,999" },
                { title: "TDS Return Filing", href: "/serviceslist/income-tax/quarterly-tds", desc: "24Q / 26Q quarterly — ₹999" },
                { title: "FSSAI Registration", href: "/serviceslist/fssai/fssai-registration", desc: "Food license — ₹1,499" },
                { title: "GST Notice Reply", href: "/serviceslist/gst/gst-notice-reply", desc: "ASMT-10 & DRC-01 — ₹1,999" },
                { title: "12A / 80G Registration", href: "/serviceslist/income-tax/12a-application", desc: "NGO & trust exemption — ₹4,999" },
                { title: "Annual ROC Compliance", href: "/serviceslist/roc/annual-roc-compliance", desc: "AOC-4 & MGT-7 filing — ₹3,999" },
              ].map(({ title, href, desc }) => (
                <Link key={title} href={href}
                  className="group flex items-start justify-between gap-3 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200">
                  <div>
                    <p className="font-bold text-gray-800 text-sm group-hover:text-[#00416a] transition">{title}</p>
                    <p className="text-gray-500 text-xs mt-1">{desc}</p>
                  </div>
                  <ArrowRight size={14} className="shrink-0 mt-0.5 text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ COMPLETE CITY LIST (SEO linkbuilding) ════════ */}
        <section className="py-16 bg-[#00416a]" aria-label="Complete list of cities served by Taxvio">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">All Cities — GST &amp; Tax Services</h2>
              <p className="text-white/60 text-sm mt-2">
                Click your city to see GST, income tax, and compliance services available near you
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3" itemScope itemType="https://schema.org/ItemList">
              {allCities.map((city, i) => (
                <Link
                  key={city.name}
                  href={`/city/${slugify(city.name)}`}
                  aria-label={`GST and tax services in ${city.name}`}
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.85)" }}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <meta itemProp="position" content={String(i + 1)} />
                  <meta itemProp="name" content={city.name} />
                  <MapPin size={12} className="text-sky-400 shrink-0" />
                  <span itemProp="item">{city.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-20 bg-gradient-to-r from-[#00416a] to-[#002b45]"
          aria-label="Contact Taxvio for free tax consultation">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Ready to Get Started?
              </h2>
              <p className="text-white/65 text-sm mt-2 max-w-md">
                GST registration, ITR filing, company registration — wherever you are in India.
                100% online, same-day response on WhatsApp.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-white/50 text-xs">
                {["✅ CA-Assisted", "✅ Transparent Pricing", "✅ Pan India Coverage", "✅ WhatsApp Support"].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20help%20with%20tax%20services."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                💬 WhatsApp Us
              </a>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}