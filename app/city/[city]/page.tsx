import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import { serviceCategories } from "@/data/serviceCategories";
import type { Metadata } from "next";
import { MapPin, ArrowRight, CheckCircle, Phone, MessageCircle, Shield, Zap, Users, Star, Clock } from "lucide-react";

/* ─── City Slugs ─────────────────────────────────────────────────────────── */
const cities = [
  "delhi","noida","greater-noida","ghaziabad","gurgaon","faridabad","meerut",
  "muzaffarnagar","khatauli","shamli","saharanpur","moradabad","bareilly",
  "aligarh","mathura","agra","lucknow","kanpur","varanasi","prayagraj",
  "jaipur","kota","ajmer","udaipur","bikaner",
  "chandigarh","ambala","panipat","karnal","ludhiana","jalandhar","amritsar",
  "dehradun","haridwar","roorkee","haldwani",
  "mumbai","pune","nagpur","nashik","aurangabad",
  "ahmedabad","surat","vadodara","rajkot",
  "indore","bhopal","gwalior","jabalpur",
  "bengaluru","chennai","hyderabad","coimbatore","madurai",
  "vijayawada","visakhapatnam",
  "kolkata","howrah","durgapur","asansol",
  "patna","gaya","ranchi","jamshedpur",
  "raipur","bilaspur","bhubaneswar","cuttack",
];

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function formatCityName(slug: string | undefined) {
  if (!slug) return "City";
  return slug.split("-").filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function slugify(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

/* ─── Category Icon Map ───────────────────────────────────────────────────── */
const CATEGORY_META: Record<string, { icon: string; color: string; bg: string; border: string; accent: string }> = {
  gst:          { icon: "🧾", color: "from-emerald-500 to-teal-600",    bg: "bg-emerald-50",  border: "border-emerald-100", accent: "#059669" },
  fssai:        { icon: "🥗", color: "from-orange-500 to-amber-600",    bg: "bg-orange-50",   border: "border-orange-100",  accent: "#d97706" },
  "income-tax": { icon: "💼", color: "from-blue-500 to-indigo-600",     bg: "bg-blue-50",     border: "border-blue-100",    accent: "#2563eb" },
  roc:          { icon: "🏛",  color: "from-violet-500 to-purple-600",  bg: "bg-violet-50",   border: "border-violet-100",  accent: "#7c3aed" },
};

const DEFAULT_META = { icon: "📄", color: "from-gray-400 to-gray-600", bg: "bg-gray-50", border: "border-gray-100", accent: "#6b7280" };

/* ─── Static Params ──────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return cities.map(city => ({ city }));
}

/* ─── SEO Metadata ───────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);
  return {
    title: `GST Registration, Income Tax Filing & Company Registration in ${cityName} | Taxvio`,
    description: `Taxvio provides expert GST registration, GSTR-1 & GSTR-3B filing, income tax return filing, company registration, TDS returns, FSSAI license and ROC compliance in ${cityName}. CA-assisted, 100% online, starting ₹499.`,
    keywords: [
      `GST registration ${cityName}`,
      `income tax filing ${cityName}`,
      `company registration ${cityName}`,
      `tax consultant ${cityName}`,
      `ROC compliance ${cityName}`,
      `FSSAI license ${cityName}`,
      `TDS return filing ${cityName}`,
      `GST return filing ${cityName}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/city/${city}` },
    openGraph: {
      title: `GST & Tax Services in ${cityName} | Taxvio`,
      description: `Professional GST, ITR, company registration & compliance services in ${cityName} — 100% online, starting ₹499.`,
      url: `https://www.taxvio.in/city/${city}`,
      siteName: "Taxvio",
      type: "website",
      images: [{ url: "https://www.taxvio.in/og-city.jpg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: `GST & Tax Services in ${cityName} | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default async function CityServicesPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityName = formatCityName(city);
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need tax and compliance services in ${cityName}.`)}`;

  /* JSON-LD Schemas */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: "+918937980366",
    email: "support@taxvio.in",
    description: `Taxvio provides GST registration, income tax filing, company registration, TDS returns, FSSAI license and ROC compliance services in ${cityName}.`,
    areaServed: [{ "@type": "City", name: cityName }],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2400" },
    priceRange: "₹499 - ₹19999",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "Cities", item: "https://www.taxvio.in/city" },
      { "@type": "ListItem", position: 3, name: `${cityName}`, item: `https://www.taxvio.in/city/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Tax & Compliance Services in ${cityName}`,
    numberOfItems: serviceCategories.reduce((acc, c) => acc + c.services.length, 0),
    itemListElement: serviceCategories.flatMap((cat, ci) =>
      cat.services.map((svc, si) => ({
        "@type": "ListItem",
        position: ci * 100 + si + 1,
        name: `${svc.title} in ${cityName}`,
        url: `https://www.taxvio.in/contact`,
      }))
    ),
  };

  /* Nearby cities (same index neighbours) */
  const cityIndex = cities.indexOf(city);
  const nearbyCities = [
    ...cities.slice(Math.max(0, cityIndex - 3), cityIndex),
    ...cities.slice(cityIndex + 1, cityIndex + 4),
  ].slice(0, 6);

  return (
    <>
      <Script id="lb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="sl-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ════════ HERO ════════ */}
        <section
          aria-label={`GST and Tax Services in ${cityName}`}
          className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
          itemScope itemType="https://schema.org/Service"
        >
          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />
          {/* Diagonal bottom cut */}
          <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{ background: "linear-gradient(to bottom right,transparent 49.9%,#f9fafb 50%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45"
                itemScope itemType="https://schema.org/BreadcrumbList">
                {[
                  { href: "/", label: "Home", pos: 1 },
                  { href: "/city", label: "Cities", pos: 2 },
                  { href: null, label: cityName, pos: 3 },
                ].map(({ href, label, pos }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5"
                    itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                    <meta itemProp="position" content={String(pos)} />
                    {href ? (
                      <Link href={href} itemProp="item" className="hover:text-white/80 transition">
                        <span itemProp="name">{label}</span>
                      </Link>
                    ) : (
                      <span className="text-white/75 font-medium" itemProp="name">{label}</span>
                    )}
                    {i < arr.length - 1 && <span className="text-white/25">›</span>}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-10 items-start">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <MapPin size={12} className="text-sky-400" />
                  {cityName}, India · 100% Online · CA-Assisted
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white" itemProp="name">
                  GST, Income Tax &amp; Company
                  <span className="block mt-2 text-sky-300">Services in {cityName}</span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl" itemProp="description">
                  Expert <strong className="text-white">GST registration</strong>, <strong className="text-white">income tax return filing</strong>,
                  company registration, TDS compliance, FSSAI license, and ROC services in {cityName} — delivered 100% online by CA professionals. Starting ₹499.
                </p>

                {/* Trust badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: "✅", text: "CA-Assisted" },
                    { icon: "🔒", text: "100% Secure" },
                    { icon: "⚡", text: "Fast Processing" },
                    { icon: "🇮🇳", text: "Pan India Service" },
                  ].map(({ icon, text }) => (
                    <span key={text} className="text-xs font-semibold rounded-full px-3 py-1.5"
                      style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                      {icon} {text}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    Free Consultation <ArrowRight size={15} className="shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Right — Quick info card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}>
                <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <p className="font-bold text-white">Services in {cityName}</p>
                  <p className="text-xs text-white/50 mt-0.5">All delivered 100% online</p>
                </div>
                <div className="p-5 space-y-3">
                  {serviceCategories.map((cat) => {
                    const meta = CATEGORY_META[cat.slug] || DEFAULT_META;
                    return (
                      <div key={cat.slug} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.70)" }}>
                          <span>{meta.icon}</span> {cat.category}
                        </span>
                        <span className="font-bold text-white text-xs">{cat.services.length} services</span>
                      </div>
                    );
                  })}
                </div>
                <div className="px-5 pb-5">
                  <div className="flex items-center justify-between rounded-xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <div>
                      <p className="text-white text-xs font-bold">Starting Price</p>
                      <p className="text-sky-300 text-lg font-extrabold">₹499</p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star size={13} className="fill-amber-400" />
                      <span className="text-white font-bold text-sm">4.9</span>
                      <span className="text-white/40 text-xs">(2,400+)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ STATS STRIP ════════ */}
        <section className="bg-[#00416a] py-8" aria-label="Taxvio service statistics">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "12,000+", label: "Returns Filed" },
              { val: "4,800+", label: "Businesses Served" },
              { val: "4.9★", label: "Average Rating" },
              { val: "₹499", label: "Starting Price" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
                <p className="text-xs text-white/55 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ SERVICE CATEGORIES ════════ */}
        <section className="py-20 bg-gray-50" aria-label={`All tax and compliance services in ${cityName}`}>
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            {serviceCategories.map((category) => {
              const meta = CATEGORY_META[category.slug] || DEFAULT_META;
              return (
                <div key={category.slug} id={category.slug}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-xl shadow-md shrink-0`}>
                      {meta.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a]" itemProp="name">
                        {category.category} Services in {cityName}
                      </h2>
                      <p className="text-sm text-gray-500 mt-0.5">{category.description}</p>
                    </div>
                    <span className="hidden sm:block text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${meta.accent}15`, color: meta.accent }}>
                      {category.services.length} Services
                    </span>
                  </div>

                  {/* Service Cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.services.map((service) => (
                      <Link
                        key={service.slug}
                        href="/contact"
                        aria-label={`${service.title} in ${cityName} — Taxvio`}
                        className="group relative bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 transition-all duration-250 flex flex-col"
                        itemScope itemType="https://schema.org/Service"
                      >
                        <meta itemProp="areaServed" content={cityName} />
                        <meta itemProp="provider" content="Taxvio" />

                        {/* Top accent line */}
                        <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${meta.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-9 h-9 rounded-xl ${meta.bg} ${meta.border} border flex items-center justify-center text-base shrink-0`}>
                            {meta.icon}
                          </div>
                          <ArrowRight size={14}
                            className="text-gray-200 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
                        </div>

                        <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors leading-snug mb-2" itemProp="name">
                          {service.title} in {cityName}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-3">
                          {service.shortDescription}
                        </p>

                        {/* Features peek */}
                        {service.features.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-50">
                            <p className="flex items-center gap-1.5 text-[11px] text-gray-400">
                              <CheckCircle size={10} className="text-green-500 shrink-0" />
                              {service.features[0]}
                            </p>
                            {service.features[1] && (
                              <p className="flex items-center gap-1.5 text-[11px] text-gray-400 mt-1">
                                <CheckCircle size={10} className="text-green-500 shrink-0" />
                                {service.features[1]}
                              </p>
                            )}
                          </div>
                        )}

                        <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#00416a] opacity-0 group-hover:opacity-100 transition-opacity">
                            Get Started →
                          </span>
                          <span className="text-[10px] text-gray-300">Taxvio · {cityName}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ════════ WHY TAXVIO ════════ */}
        <section className="py-20 bg-white" aria-label={`Why choose Taxvio for tax services in ${cityName}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why Businesses in {cityName} Choose Taxvio
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
                Same CA-quality service as a top-tier firm — at startup-friendly prices. 100% online.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users, title: "Expert CA & Legal Team", desc: `Every service for businesses in ${cityName} is handled by practising Chartered Accountants — not just data entry operators.` },
                { icon: Zap, title: "100% Online — No Office Visit", desc: `Share documents on WhatsApp or email from anywhere in ${cityName}. Track filing status in real-time.` },
                { icon: Shield, title: "100% Secure & Confidential", desc: "Strict document confidentiality protocols. Your business data is never shared with third parties." },
                { icon: CheckCircle, title: "Transparent Pricing from ₹499", desc: "No hidden charges. Clear upfront pricing for every service. Pay only when you know the full scope." },
                { icon: Clock, title: "Fast Processing & Reminders", desc: "Timely filing with proactive deadline reminders — zero penalties for late GST returns or ITR." },
                { icon: MapPin, title: `Pan India · Serving ${cityName}`, desc: `Our 100% online model means ${cityName} businesses get metro-city quality tax services at accessible prices.` },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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

        {/* ════════ SEO TEXT BLOCK ════════ */}
        <section className="py-20 bg-gray-50" aria-label={`About GST and tax services in ${cityName}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-10">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4">
                  GST Registration &amp; Return Filing Services in {cityName}
                </h2>
                <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                  <p>
                    GST registration in {cityName} is mandatory for businesses with annual turnover exceeding the prescribed threshold, businesses engaged in interstate supply, e-commerce sellers, and certain notified service categories under the CGST Act. Taxvio's expert CA team handles end-to-end <strong>GST registration in {cityName}</strong> — from eligibility assessment and document preparation to GSTIN allotment — typically within 3–7 working days.
                  </p>
                  <p>
                    Beyond registration, Taxvio provides monthly and quarterly <strong>GST return filing in {cityName}</strong> covering GSTR-1, GSTR-3B, GSTR-9 (annual return), GST LUT filing for exporters, GST refund applications, e-invoicing compliance, and GST audit assistance. Our reconciliation-first approach ensures zero mismatches and accurate ITC claims for all businesses in {cityName}.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4">
                  Income Tax Return Filing in {cityName}
                </h2>
                <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                  <p>
                    Taxvio provides comprehensive <strong>income tax return filing in {cityName}</strong> for salaried employees, freelancers, proprietors, partnership firms, LLPs, private limited companies, and trusts. Our CA team optimises deductions under Sections 80C, 80D, HRA exemption, and capital gains provisions — ensuring you pay only what is legally due.
                  </p>
                  <p>
                    For businesses in {cityName}, we additionally offer TDS return filing (Form 24Q, 26Q, 27Q), income tax audit under Section 44AB, scrutiny notice replies under Sections 143(1)/143(2)/148, and 12A/80G registration for NGOs and charitable trusts. All services are delivered 100% online — no office visit to {cityName} required.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4">
                  Company Registration &amp; ROC Compliance in {cityName}
                </h2>
                <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                  <p>
                    Taxvio handles complete <strong>company registration in {cityName}</strong> — Private Limited Company, One Person Company (OPC), Limited Liability Partnership (LLP), and Section 8 (non-profit) company — through the MCA portal. Services include name approval, DIN & DSC processing, MOA/AOA drafting, Certificate of Incorporation, and PAN/TAN application.
                  </p>
                  <p>
                    For incorporated entities in {cityName}, our annual ROC compliance service covers AOC-4 and MGT-7 filing for companies, Form 11 and Form 8 for LLPs, director appointment/resignation (DIR-12), share capital changes (SH-7), and company closure proceedings — ensuring your {cityName}-registered entity remains legally compliant year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ NEARBY CITIES ════════ */}
        {nearbyCities.length > 0 && (
          <section className="py-14 bg-white border-t border-gray-100" aria-label="Tax services in nearby cities">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-[#00416a]" />
                <h2 className="text-lg font-extrabold text-gray-800">
                  Tax Services in Nearby Cities
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {nearbyCities.map((nearCity) => (
                  <Link key={nearCity} href={`/city/${nearCity}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] transition-all duration-200">
                    <MapPin size={12} className="text-[#00416a] shrink-0" />
                    {formatCityName(nearCity)}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════ FINAL CTA ════════ */}
        <section className="py-20 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] relative overflow-hidden"
          aria-label={`Contact Taxvio for tax services in ${cityName}`}>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)" }} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <MapPin size={12} className="text-sky-400" /> Serving businesses in {cityName} — 100% online
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Get Expert Tax &amp; Compliance Help
              <span className="block mt-1 text-sky-300">in {cityName} Today</span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              GST registration, income tax filing, company incorporation, TDS compliance, FSSAI license, and ROC compliance — all delivered online for businesses in {cityName}. Starting ₹499. CA-assisted, same-day WhatsApp response.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <MessageCircle size={16} className="shrink-0" /> WhatsApp Us
              </a>
              <Link href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                Free Consultation <ArrowRight size={15} className="shrink-0" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <Phone size={15} className="shrink-0" /> Call Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/40">
              <span className="flex items-center gap-1.5"><Shield size={12} /> 100% Confidential</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={12} /> CA-Assisted</span>
              <span className="flex items-center gap-1.5"><Zap size={12} /> Fast Processing</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> Mon–Sat · 9 AM–7 PM</span>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}