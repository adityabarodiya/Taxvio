import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import bg1 from "../../public/service/bg1.png";
import logo from "@/public/tv2.png";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  CheckCircle, ArrowRight, Shield, Zap, Users, Star,
  FileText, Building2, TrendingUp, Clock, Phone, MessageCircle, MapPin,
} from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "About Taxvio — India's Trusted GST, Income Tax & Compliance Experts",
  description:
    "Taxvio is a CA-led online tax consultancy providing GST registration, income tax return filing, company registration, TDS compliance, FSSAI license, and ROC services across India. Learn about our team, mission, and values.",
  keywords: [
    "about Taxvio", "GST consultancy India", "CA tax firm India",
    "income tax filing India", "company registration consultancy",
    "online tax services India", "Taxvio Muzaffarnagar",
  ],
  alternates: { canonical: "https://www.taxvio.in/about" },
  openGraph: {
    title: "About Taxvio — GST, Income Tax & Compliance Experts",
    description: "CA-led tax consultancy providing GST, ITR, ROC and compliance services across India — 100% online, starting ₹499.",
    url: "https://www.taxvio.in/about",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og-about.jpg", width: 1200, height: 630 }],
  },
};

/* ─── JSON-LD ──────────────────────────────────────────────────────────────── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  logo: "https://www.taxvio.in/logo.png",
  image: "https://www.taxvio.in/og-about.jpg",
  description:
    "Taxvio is a CA-led online tax and compliance consultancy providing GST registration, income tax filing, company registration, TDS returns, FSSAI license, and ROC compliance services across India.",
  foundingDate: "2020",
  areaServed: "India",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khatauli",
    addressLocality: "Muzaffarnagar",
    addressRegion: "Uttar Pradesh",
    postalCode: "251201",
    addressCountry: "IN",
  },
  telephone: "+918937980366",
  email: "support@taxvio.in",
  priceRange: "₹499 - ₹19999",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2400" },
  sameAs: ["https://www.taxvio.in"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.taxvio.in/about" },
  ],
};

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const STATS = [
  { value: "4,800+", label: "Businesses Served", icon: Building2 },
  { value: "12,000+", label: "Returns Filed", icon: FileText },
  { value: "₹2.4 Cr+", label: "Tax Saved for Clients", icon: TrendingUp },
  { value: "4.9★", label: "Average Client Rating", icon: Star },
];

const WHY_CARDS = [
  { icon: Users, title: "Expert CA & Legal Team", desc: "Every engagement at Taxvio is led by practising Chartered Accountants and legal professionals — not junior data-entry staff. Our CA team has deep subject-matter expertise across GST law, Income Tax Act, CGST/SGST provisions, and Companies Act compliance." },
  { icon: Zap, title: "100% Online — No Office Visit", desc: "Taxvio operates on a WhatsApp-first, document-upload model. Clients across India — from Delhi NCR to Coimbatore — can share documents, get expert advice, and track filings entirely online without stepping into an office." },
  { icon: Shield, title: "100% Secure & Confidential", desc: "We maintain strict document confidentiality protocols. Client financials, Aadhaar, PAN, and business data are handled with the same security standards as top-tier CA firms — never shared with third parties." },
  { icon: Clock, title: "Deadline-First Compliance", desc: "Late filing penalties, interest under Section 50 of CGST Act, and income tax interest under Section 234B/234C are entirely avoidable. Our proactive deadline management ensures every return and ROC filing is submitted on time." },
];

const SERVICES_LIST = [
  { label: "GST Registration", href: "/serviceslist/gst/gst-registration" },
  { label: "GST Return Filing (GSTR-1, 3B, 9)", href: "/serviceslist/gst/gst-return" },
  { label: "GST Refund & LUT Filing", href: "/serviceslist/gst/gst-refund" },
  { label: "GST Notice Reply & Audit", href: "/serviceslist/gst/gst-notice-reply" },
  { label: "ITR Filing — Salaried & Business", href: "/serviceslist/income-tax/itr-salaried" },
  { label: "TDS Return Filing (24Q, 26Q)", href: "/serviceslist/income-tax/quarterly-tds" },
  { label: "Income Tax Scrutiny Notice", href: "/serviceslist/income-tax/income-tax-scrutiny" },
  { label: "12A / 80G Registration", href: "/serviceslist/income-tax/12a-application" },
  { label: "Private Limited Company Registration", href: "/serviceslist/roc/private-limited-formation" },
  { label: "LLP & OPC Registration", href: "/serviceslist/roc/llp-formation" },
  { label: "Annual ROC Compliance", href: "/serviceslist/roc/annual-roc-compliance" },
  { label: "FSSAI Registration & Renewal", href: "/serviceslist/fssai/fssai-registration" },
];

const TESTIMONIALS = [
  { text: "Taxvio handled our GST registration and monthly return filing flawlessly. The CA team is extremely professional and responds within minutes on WhatsApp.", name: "Rajesh Kumar", role: "Trader, Meerut" },
  { text: "I was nervous about my income tax scrutiny notice but Taxvio's team handled everything — explained clearly, filed the reply, and the notice was closed without any demand.", name: "Priya Singh", role: "Salaried Professional, Delhi NCR" },
  { text: "Company registration done in just 6 days. Complete process handled online. Couldn't have been smoother.", name: "Amit Verma", role: "Startup Founder, Noida" },
];

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I want to know more about your services.")}`;

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function About() {
  return (
    <>
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-white text-gray-800" itemScope itemType="https://schema.org/AboutPage">

        {/* ════════ HERO ════════ */}
        <section
          aria-label="About Taxvio — India's Trusted Tax & Compliance Consultancy"
          className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
        >
          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />
          {/* Diagonal cut */}
          <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
            style={{ background: "linear-gradient(to bottom right,transparent 49.9%,#fff 50%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-28">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/45"
                itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <Link href="/" itemProp="item" className="hover:text-white/80 transition"><span itemProp="name">Home</span></Link>
                  <meta itemProp="position" content="1" />
                </li>
                <span className="text-white/25">›</span>
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <span itemProp="name" className="text-white/75">About Us</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left — Text */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  CA-Led · Pan India · Trusted by 4,800+ Businesses
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white" itemProp="name">
                  India's Trusted GST &amp;
                  <span className="block mt-2 text-sky-300">Tax Compliance Experts</span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed" itemProp="description">
                  Taxvio is a CA-led online tax and compliance consultancy headquartered in <strong className="text-white">Khatauli, Muzaffarnagar, Uttar Pradesh</strong> — providing expert <strong className="text-white">GST registration</strong>, <strong className="text-white">income tax return filing</strong>, company registration, TDS compliance, FSSAI license, and ROC services to businesses and individuals across India. Starting at just ₹499.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    Speak to an Expert <ArrowRight size={15} className="shrink-0" />
                  </Link>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp Us
                  </a>
                </div>

                {/* Rating pill */}
                <div className="mt-7 inline-flex items-center gap-3 rounded-xl px-5 py-3"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-white text-sm font-bold">4.9 / 5</p>
                  <span className="text-white/40 text-xs">·</span>
                  <p className="text-white/60 text-xs">2,400+ client reviews</p>
                </div>
              </div>

              {/* Right — Image */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 rounded-3xl blur-2xl scale-110"
                    style={{ background: "radial-gradient(circle,rgba(56,189,248,0.15) 0%,transparent 70%)" }} />
                  <Image src={bg1} alt="Taxvio CA team — professional GST and income tax experts across India" priority
                    className="relative w-full h-auto object-contain drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ STATS ════════ */}
        <section className="bg-[#00416a] py-10" aria-label="Taxvio key statistics">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon size={24} className="text-sky-300" />
                <p className="text-2xl md:text-3xl font-extrabold text-white">{value}</p>
                <p className="text-xs text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ WHO WE ARE ════════ */}
        <section className="py-24 bg-white" aria-label="Who is Taxvio — About the company">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 rounded-3xl bg-blue-50" />
                <div className="absolute -inset-2 rounded-2xl border border-blue-100" />
                <Image src={logo} alt="Taxvio — Professional GST and Tax Consultancy Logo" priority
                  className="relative w-full h-auto p-6" />
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Who We Are
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4 leading-snug">
                A CA-Led Tax Consultancy Built for India's Businesses
              </h2>

              <div className="mt-5 space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-gray-800">Taxvio</strong> was founded with a clear mandate — to make professional tax and compliance services accessible, affordable, and stress-free for every Indian business, regardless of size or location. Headquartered in Khatauli, Muzaffarnagar, Uttar Pradesh, we serve clients 100% online across all states — from Delhi NCR and Mumbai to tier-2 and tier-3 cities that are historically underserved by quality tax professionals.
                </p>
                <p>
                  Our team comprises practising <strong className="text-gray-800">Chartered Accountants, Company Secretaries, and legal advisors</strong> with deep expertise in GST law (CGST Act, 2017), Income Tax Act, 1961, Companies Act, 2013, and FSSAI regulations. We handle the full compliance lifecycle — from new business registration and return filing to notice replies, audits, and appellate proceedings.
                </p>
                <p>
                  We believe that regulatory compliance should be a business enabler, not a burden. Our structured processes, WhatsApp-first communication model, and transparent pricing ensure that clients always know what's happening with their compliance — without the jargon, the delays, or the surprises.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {["CA-Led Team", "100% Online", "Transparent Pricing", "Pan India Coverage"].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#00416a]/7 text-[#00416a] px-3 py-1.5 rounded-full">
                    <CheckCircle size={11} className="text-green-500" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ MISSION & VISION ════════ */}
        <section className="py-20 bg-gray-50" aria-label="Taxvio mission and vision">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            {[
              {
                label: "Our Mission",
                icon: "🎯",
                accent: "from-[#00416a] to-[#0077b6]",
                text: "To deliver ethical, accurate, and technology-driven tax and compliance solutions that empower Indian businesses to grow with confidence. We aim to be the most trusted CA-quality compliance partner for startups, MSMEs, and enterprises — available to every business, in every city, at every stage of their growth.",
              },
              {
                label: "Our Vision",
                icon: "🔭",
                accent: "from-violet-600 to-purple-700",
                text: "To become India's leading online tax and compliance platform — combining CA expertise with digital efficiency — so that no business in India — metro or tier-3 — ever has to navigate complex tax laws alone. We envision a future where complete GST and income tax compliance is as simple as sending a WhatsApp message.",
              },
            ].map(({ label, icon, accent, text }) => (
              <div key={label} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className={`bg-gradient-to-r ${accent} px-7 py-5`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{icon}</span>
                    <h2 className="text-white font-extrabold text-xl">{label}</h2>
                  </div>
                </div>
                <p className="px-7 py-6 text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ SEO CONTENT — WHAT WE DO ════════ */}
        <section className="py-20 bg-white" aria-label="Taxvio services — GST Income Tax Company Registration">
          <div className="max-w-4xl mx-auto px-6 space-y-10">

            <div className="text-center mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                What We Do
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Complete Tax &amp; Compliance Services — 40+ Offerings Under One Roof
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
              <p>
                Taxvio provides end-to-end <strong>GST compliance services</strong> — from new <strong>GST registration</strong> to monthly and quarterly return filing (GSTR-1, GSTR-3B), GST annual return (GSTR-9 and GSTR-9C), export LUT filing, GST refund applications, e-invoicing setup, GST audit assistance under Sections 65 and 66, and GST notice/SCN reply services. Our CA team ensures accurate ITC reconciliation (GSTR-2B vs books), zero mismatches, and timely filing for businesses of all turnover sizes across India.
              </p>
              <p>
                For <strong>income tax compliance</strong>, Taxvio covers ITR filing for salaried individuals (ITR-1, ITR-2), proprietors and freelancers (ITR-3, ITR-4), partnership firms and LLPs, and corporate entities including private limited companies, public companies, and trusts (ITR-5, ITR-6, ITR-7). Beyond return filing, we handle TDS return filing (Form 24Q for salary TDS, 26Q for non-salary, 27Q for non-resident payments), TCS return filing, income tax audit under Section 44AB, scrutiny notice replies under Sections 143(1), 143(2), and 148, and 12A/80G registration for NGOs and charitable trusts. Form 15G/15H filing for senior citizens and low-income individuals, and PAN/TAN applications, complete our income tax service suite.
              </p>
              <p>
                Taxvio's <strong>company registration and ROC compliance</strong> services cover the full lifecycle of incorporated entities — from Private Limited Company, LLP, OPC, and Section 8 company registration through the MCA portal, to annual ROC filings (AOC-4 financial statements and MGT-7 annual return for companies; Form 11 and Form 8 for LLPs), director appointment and resignation (DIR-12), increase in authorised share capital (SH-7), company name change, and company strike-off/closure proceedings. For food businesses, Taxvio handles <strong>FSSAI registration</strong> (Basic, State, and Central license), renewal, modification, annual return filing, and FSSAI notice replies.
              </p>
              <p>
                What sets Taxvio apart is not just the breadth of services — it is the <strong>CA-quality execution at every level</strong>. Unlike platforms that use junior staff for high-stakes filings, every Taxvio engagement is reviewed by a practising CA. Our clients receive the same expert-level compliance support that was previously accessible only to large businesses with in-house finance teams or expensive retainer CA firms — now available to every MSME, startup, and individual taxpayer across India, starting at ₹499.
              </p>
            </div>

            {/* Services quick-link grid */}
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {SERVICES_LIST.map(({ label, href }) => (
                <Link key={label} href={href}
                  className="group flex items-center justify-between gap-3 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl hover:border-[#00416a]/20 hover:bg-blue-50 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle size={13} className="text-green-500 shrink-0" />
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-[#00416a] transition">{label}</span>
                  </div>
                  <ArrowRight size={13} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/serviceslist"
                className="inline-flex items-center gap-2 text-[#00416a] text-sm font-bold hover:underline">
                View all 40+ services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ WHY CHOOSE US ════════ */}
        <section className="py-20 bg-gray-50" aria-label="Why choose Taxvio for GST and income tax services">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00416a] bg-white border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why 4,800+ Businesses Trust Taxvio
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
                We combine the rigour of a top-tier CA firm with the speed and accessibility of a digital-first service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {WHY_CARDS.map(({ icon: Icon, title, desc }) => (
                <div key={title}
                  className="flex items-start gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-[#00416a]/8 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#00416a]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-800 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional trust points */}
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "GST, Income Tax & ROC under one roof",
                "Affordable & transparent pricing",
                "All India coverage — metro & tier-3",
                "Dedicated WhatsApp support channel",
              ].map(point => (
                <div key={point}
                  className="flex items-center gap-2.5 p-4 bg-white border border-gray-100 rounded-xl text-sm font-medium text-gray-700 shadow-sm">
                  <CheckCircle size={15} className="text-green-500 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ INDUSTRIES WE SERVE ════════ */}
        <section className="py-20 bg-white" aria-label="Industries and client types served by Taxvio">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  Who We Serve
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4 leading-snug">
                  Serving Startups, MSMEs &amp; Enterprises Across India
                </h2>
                <div className="mt-5 space-y-3 text-gray-600 text-sm leading-relaxed">
                  <p>
                    India's business ecosystem spans solo freelancers, partnership traders, first-generation entrepreneurs, manufacturing MSMEs, e-commerce sellers, professional service firms, and large corporates — each with distinct compliance requirements. Taxvio's service architecture is designed to serve all of them.
                  </p>
                  <p>
                    For <strong className="text-gray-800">salaried individuals and freelancers</strong>, we simplify ITR filing, Form 15G/15H submissions, and capital gains reporting. For <strong className="text-gray-800">traders and manufacturers</strong>, we handle complete GST compliance — registration, monthly filings, e-way bills, and annual reconciliation. For <strong className="text-gray-800">startups and growing businesses</strong>, we provide company incorporation, annual ROC compliance, and tax structuring advisory. For <strong className="text-gray-800">NGOs and charitable trusts</strong>, we manage 12A/80G registration and annual compliance.
                  </p>
                  <p>
                    Whether you operate in the wholesale markets of <strong className="text-gray-800">Delhi and Meerut</strong>, the textile clusters of <strong className="text-gray-800">Surat and Ludhiana</strong>, the IT corridors of <strong className="text-gray-800">Bangalore and Hyderabad</strong>, or emerging business hubs in <strong className="text-gray-800">Dehradun, Patna, and Ranchi</strong> — Taxvio delivers the same CA-quality compliance support, 100% online.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🛒", label: "Traders & Retailers" },
                  { icon: "🏭", label: "Manufacturers" },
                  { icon: "💻", label: "IT & Freelancers" },
                  { icon: "🏗", label: "Construction Firms" },
                  { icon: "🍽", label: "Restaurants & F&B" },
                  { icon: "🚀", label: "Startups & Founders" },
                  { icon: "🏥", label: "Healthcare & Clinics" },
                  { icon: "🏛", label: "NGOs & Trusts" },
                ].map(({ icon, label }) => (
                  <div key={label}
                    className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-[#00416a]/20 hover:bg-blue-50 transition-all duration-200">
                    <span className="text-xl shrink-0">{icon}</span>
                    <span className="text-sm font-semibold text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ TESTIMONIALS ════════ */}
        <section className="py-20 bg-gray-50" aria-label="Client reviews and testimonials — Taxvio">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00416a] bg-white border border-blue-100 px-3 py-1 rounded-full">
                Client Reviews
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map(({ text, name, role }) => (
                <div key={name}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  itemScope itemType="https://schema.org/Review">
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed" itemProp="reviewBody">"{text}"</p>
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-800 text-sm" itemProp="author">{name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ LOCATION ════════ */}
        <section className="py-16 bg-white border-t border-gray-100" aria-label="Taxvio office location and contact">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Find Us
              </span>
              <h2 className="text-2xl font-extrabold text-[#00416a] mt-4">
                Headquartered in Muzaffarnagar, Serving All of India
              </h2>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-md">
                Taxvio is based in Khatauli, Muzaffarnagar, Uttar Pradesh. Our 100% online model means clients across every state — from Jammu to Kerala — receive the same expert, timely service without any geographical barrier.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { icon: MapPin, text: "Khatauli, Muzaffarnagar, Uttar Pradesh — 251201" },
                  { icon: Phone, text: "+91 89379 80366", href: "tel:+918937980366" },
                  { icon: MessageCircle, text: "support@taxvio.in", href: "mailto:support@taxvio.in" },
                  { icon: Clock, text: "Mon – Sat · 9:00 AM – 7:00 PM IST" },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-gray-600">
                    <Icon size={15} className="text-[#00416a] shrink-0" />
                    {href ? <a href={href} className="hover:text-[#00416a] transition font-medium">{text}</a> : <span>{text}</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#00416a] hover:bg-[#003050] px-6 py-4 text-white text-sm font-bold shadow-md active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                Free Consultation <ArrowRight size={15} className="shrink-0" />
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-6 py-4 text-white text-sm font-bold shadow-md active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <MessageCircle size={15} className="shrink-0" /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-20 bg-gradient-to-r from-[#00416a] to-[#002b45]" aria-label="Contact Taxvio for free consultation">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <Users size={12} /> 4,800+ Businesses Served Across India
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Simplify Your Tax &amp; Compliance?
            </h2>
            <p className="mt-4 text-white/65 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Get professional GST, income tax, company registration, and compliance support — anywhere in India. Our CA-led team is on WhatsApp and call, ready to help from day one.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                Free Consultation <ArrowRight size={15} className="shrink-0" />
              </Link>
              <Link href="/serviceslist"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/40 bg-transparent px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                View All Services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/40">
              {["✅ CA-Assisted", "✅ Transparent Pricing", "✅ Pan India Coverage", "✅ WhatsApp Support"].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}