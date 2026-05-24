import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  ArrowRight, CheckCircle, Building2, FileText, Shield,
  Users, Zap, Clock, ChevronRight, Star, Phone, MessageCircle,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "ROC Compliance & Company Registration Services in India | Taxvio",
  description:
    "Expert ROC compliance services — Private Limited Company formation, LLP registration, OPC, Section 8, annual ROC returns, director filings & company closure. CA-assisted, 100% online, starting ₹2,999.",
  keywords: [
    "ROC compliance India",
    "private limited company registration India",
    "LLP registration",
    "OPC registration",
    "Section 8 company registration",
    "annual ROC filing",
    "director appointment ROC",
    "company strike off India",
    "ROC annual return filing",
    "MCA compliance services",
    "company registration online India",
    "Taxvio ROC services",
  ],
  alternates: { canonical: "https://www.taxvio.in/serviceslist/roc" },
  openGraph: {
    title: "ROC Compliance & Company Registration | Taxvio",
    description:
      "Complete ROC compliance — company formation, annual returns, director filings & closure. CA-assisted, 100% online.",
    url: "https://www.taxvio.in/serviceslist/roc",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og-roc.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROC Compliance & Company Registration | Taxvio",
    description: "Expert ROC & MCA compliance services — 100% online, CA-assisted.",
  },
  robots: { index: true, follow: true },
};

/* ─── Services ──────────────────────────────────────────────────────────────── */
const ROC_SERVICES = [
  {
    slug: "private-limited-formation",
    title: "Private Limited Company Formation",
    price: "₹6,999",
    time: "7–10 days",
    icon: "🏛",
    badge: "Most Popular",
    badgeColor: "bg-emerald-500",
    shortDescription:
      "Complete incorporation services for private limited companies including name approval, MOA/AOA drafting, DIN/DSC, and MCA filing.",
    features: [
      "Name approval via RUN",
      "MOA & AOA drafting",
      "DIN & DSC processing",
      "Certificate of Incorporation",
      "PAN & TAN application",
    ],
    idealFor: ["Startups", "Growing businesses", "Investor-backed ventures"],
  },
  {
    slug: "llp-formation",
    title: "LLP Registration",
    price: "₹5,999",
    time: "7–10 days",
    icon: "🤝",
    badge: null,
    badgeColor: "",
    shortDescription:
      "Professional LLP registration with MCA compliance — name reservation, LLP agreement drafting, and incorporation certificate.",
    features: [
      "Name reservation",
      "LLP agreement drafting",
      "DPIN processing",
      "Incorporation certificate",
      "PAN & TAN application",
    ],
    idealFor: ["Professionals", "Small businesses", "Partnerships"],
  },
  {
    slug: "opc-formation",
    title: "One Person Company (OPC) Registration",
    price: "₹4,999",
    time: "7–10 days",
    icon: "👤",
    badge: "Solo Founders",
    badgeColor: "bg-violet-500",
    shortDescription:
      "OPC registration for solo entrepreneurs — limited liability with single-person ownership and complete MCA compliance.",
    features: [
      "Name approval",
      "MOA & AOA drafting",
      "Nominee director arrangement",
      "Certificate of Incorporation",
      "PAN & TAN application",
    ],
    idealFor: ["Solo entrepreneurs", "Freelancers scaling up"],
  },
  {
    slug: "section-8-company",
    title: "Section 8 Company Registration",
    price: "₹9,999",
    time: "15–20 days",
    icon: "🌱",
    badge: "NGO / Non-Profit",
    badgeColor: "bg-teal-500",
    shortDescription:
      "Formation of non-profit Section 8 companies for charitable, educational, and social objectives with MCA licence.",
    features: [
      "Name approval",
      "MOA & AOA drafting",
      "Section 8 licence application",
      "Certificate of Incorporation",
      "12A/80G eligibility guidance",
    ],
    idealFor: ["NGOs", "Charitable institutions", "Social enterprises"],
  },
  {
    slug: "annual-roc-compliance",
    title: "Annual ROC Compliance",
    price: "₹3,999",
    time: "On due date",
    icon: "📋",
    badge: "Recurring",
    badgeColor: "bg-sky-500",
    shortDescription:
      "Timely filing of annual ROC returns — AOC-4, MGT-7 for companies and Form 11, Form 8 for LLPs — with penalty-free compliance.",
    features: [
      "AOC-4 (financial statements)",
      "MGT-7 / MGT-7A (annual return)",
      "LLP Form 11 & Form 8",
      "Board resolution drafting",
      "Deadline reminders",
    ],
    idealFor: ["Private limited companies", "OPCs", "LLPs"],
  },
  {
    slug: "director-appointment-resignation",
    title: "Director Appointment / Resignation",
    price: "₹2,999",
    time: "3–5 days",
    icon: "👔",
    badge: null,
    badgeColor: "",
    shortDescription:
      "ROC filing for director appointment and resignation — DIR-12 filing, board resolution drafting, and MCA approval tracking.",
    features: [
      "DIR-12 filing",
      "Board resolution drafting",
      "DIN verification",
      "MCA approval tracking",
      "Digital acknowledgement",
    ],
    idealFor: ["Private limited companies", "OPCs"],
  },
  {
    slug: "company-name-change",
    title: "Company Name Change",
    price: "₹4,999",
    time: "10–15 days",
    icon: "✏️",
    badge: null,
    badgeColor: "",
    shortDescription:
      "End-to-end ROC compliance for changing your company name — RUN filing, MOA/AOA alteration, and updated CoI.",
    features: [
      "Name availability check",
      "RUN form filing",
      "Special resolution drafting",
      "MOA & AOA alteration",
      "Updated Certificate of Incorporation",
    ],
    idealFor: ["Companies rebranding", "Post-merger entities"],
  },
  {
    slug: "authorized-capital-increase",
    title: "Increase in Authorized Share Capital",
    price: "₹3,999",
    time: "5–7 days",
    icon: "📈",
    badge: null,
    badgeColor: "",
    shortDescription:
      "ROC filing for increasing authorized share capital — SH-7 filing, MOA alteration, and capital structure update.",
    features: [
      "SH-7 filing",
      "Special resolution drafting",
      "MOA alteration",
      "Capital structure update",
      "MCA confirmation",
    ],
    idealFor: ["Growing companies", "Pre-fundraise entities"],
  },
  {
    slug: "company-closure",
    title: "Company Closure / Strike Off",
    price: "₹7,999",
    time: "60–90 days",
    icon: "🔒",
    badge: null,
    badgeColor: "",
    shortDescription:
      "Professional company closure and strike-off under Section 248 — STK-2 filing, document preparation, and closure certificate.",
    features: [
      "STK-2 form filing",
      "Affidavit & indemnity bond drafting",
      "Statement of accounts preparation",
      "MCA filing & tracking",
      "Closure certificate",
    ],
    idealFor: ["Inactive companies", "Dormant entities"],
  },
];

/* ─── Why Choose section ────────────────────────────────────────────────────── */
const WHY_POINTS = [
  {
    icon: Users,
    title: "CA & CS Assisted",
    desc: "Every ROC filing is handled by qualified Chartered Accountants and Company Secretaries — not untrained data-entry staff.",
  },
  {
    icon: Zap,
    title: "100% Online Process",
    desc: "Submit documents via WhatsApp or email. We handle MCA filing, DSC usage, and approval tracking end-to-end.",
  },
  {
    icon: Shield,
    title: "Zero Penalty Guarantee",
    desc: "Proactive deadline tracking and timely filing ensure your entity is never penalised for late or missed ROC compliance.",
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    desc: "We draft MOA, AOA, board resolutions, affidavits, and all ancillary documents — you only sign where needed.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most ROC filings are processed within 3–10 working days. We keep you updated at every step via WhatsApp.",
  },
  {
    icon: Building2,
    title: "Post-Incorporation Support",
    desc: "We don't disappear after incorporation. Annual compliance, amendments, and ROC notices are all handled under one roof.",
  },
];

/* ─── FAQ ───────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is the minimum number of directors required for a Private Limited Company?",
    a: "A Private Limited Company requires a minimum of 2 directors and can have up to 15. At least one director must be an Indian resident (present in India for at least 182 days in the previous calendar year).",
  },
  {
    q: "What is the difference between a Private Limited Company and an LLP?",
    a: "A Private Limited Company is a separate legal entity with shareholders and directors, governed by the Companies Act 2013. An LLP (Limited Liability Partnership) is governed by the LLP Act 2008, with partners who have limited liability. Companies are better suited for investor funding; LLPs offer lower compliance burden and are ideal for professionals and service businesses.",
  },
  {
    q: "Is annual ROC compliance mandatory for all companies?",
    a: "Yes. Every registered Private Limited Company, OPC, and LLP must file annual returns with the ROC irrespective of whether it conducted business or not. Non-filing attracts penalties of ₹100 per day per form, plus directors may be disqualified under Section 164(2) for non-filing of annual returns for three consecutive years.",
  },
  {
    q: "What is the due date for annual ROC filings?",
    a: "For Private Limited Companies: AOC-4 (financial statements) is due within 30 days of the AGM, and MGT-7 (annual return) is due within 60 days of the AGM. The AGM must be held within 6 months of the financial year end (i.e., by 30 September). For LLPs: Form 11 is due by 30 May and Form 8 by 30 October each year.",
  },
  {
    q: "Can I register an OPC if I am already a director in another company?",
    a: "Yes, you can be a director in other companies and still be the sole member of an OPC. However, a person can be a member in only one OPC at a time. The OPC must convert to a Private Limited Company once its paid-up capital crosses ₹50 lakh or annual turnover crosses ₹2 crore.",
  },
  {
    q: "How long does company incorporation take with Taxvio?",
    a: "Typically 7–10 working days from the date all documents are submitted. This includes name approval (RUN/SPICe+), DIN/DSC processing, MCA verification, and issuance of the Certificate of Incorporation. Complex cases with name objections or address issues may take slightly longer.",
  },
  {
    q: "What documents are required for Private Limited Company registration?",
    a: "You need PAN and Aadhaar of all directors, passport-size photographs, proof of registered office (utility bill not older than 2 months + NOC from owner if rented), and DSC (Digital Signature Certificate) of all directors. Taxvio assists in obtaining DSC as part of the incorporation package.",
  },
  {
    q: "How is a Section 8 Company different from a Trust or Society?",
    a: "A Section 8 Company is incorporated under the Companies Act 2013 and regulated by MCA — making it the most structured and credible form for non-profits. Trusts and Societies are regulated by state-level laws, which vary across states. Section 8 companies are preferred by FCRA-eligible organisations, CSR recipients, and those seeking 12A/80G exemptions.",
  },
];

/* ─── Schema ────────────────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio — ROC Compliance & Company Registration",
  url: "https://www.taxvio.in/serviceslist/roc",
  telephone: "+918937980366",
  description:
    "Expert ROC compliance services — Private Limited Company formation, LLP registration, OPC, Section 8, annual ROC returns, director filings & company closure. CA-assisted, 100% online.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khatauli",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ROC Compliance Services",
    itemListElement: ROC_SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
      price: s.price.replace("₹", "").replace(",", ""),
      priceCurrency: "INR",
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
    { "@type": "ListItem", position: 3, name: "ROC Compliance", item: "https://www.taxvio.in/serviceslist/roc" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function ROCPillarPage() {
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with ROC compliance / company registration.")}`;

  return (
    <>
      <Script id="roc-svc-schema"   type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="roc-bc-schema"    type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="roc-faq-schema"   type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ════════════ HERO ════════════ */}
        <section
          aria-label="ROC Compliance and Company Registration Services — Taxvio"
          className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
        >
          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          {/* Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />
          {/* Diagonal cut */}
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: "linear-gradient(to bottom right,transparent 49.9%,#f9fafb 50%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-28">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45"
                itemScope itemType="https://schema.org/BreadcrumbList">
                {[
                  { href: "/", label: "Home" },
                  { href: "/serviceslist", label: "Services" },
                  { href: null, label: "ROC Compliance" },
                ].map(({ href, label }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5">
                    {href
                      ? <Link href={href} className="hover:text-white/80 transition">{label}</Link>
                      : <span className="text-white/75 font-medium">{label}</span>}
                    {i < arr.length - 1 && <ChevronRight size={12} className="text-white/25" />}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  CA & CS Assisted · 100% Online · Starting ₹2,999
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  ROC Compliance &amp;
                  <span className="block mt-2 text-sky-300">Company Registration Services</span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  From <strong className="text-white">incorporating your company</strong> to{" "}
                  <strong className="text-white">annual ROC returns</strong>, director filings, share capital
                  changes, and company closure — Taxvio's CA & CS team handles every MCA compliance requirement,
                  100% online. No office visit needed.
                </p>

                {/* Trust pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["✅ CA & CS Assisted", "🔒 100% Secure", "⚡ Fast Processing", "📋 All MCA Forms"].map(t => (
                    <span key={t} className="text-xs font-semibold rounded-full px-3 py-1.5"
                      style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right — Quick stats card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}>
                <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <p className="font-bold text-white text-sm">ROC Services Overview</p>
                  <p className="text-xs text-white/50 mt-0.5">All handled 100% online</p>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { label: "Company Formation", count: "3 types" },
                    { label: "Annual Compliance", count: "Companies & LLPs" },
                    { label: "Director Filings", count: "DIR-12 & more" },
                    { label: "Capital Changes", count: "SH-7 filing" },
                    { label: "Company Closure", count: "STK-2 filing" },
                  ].map(({ label, count }) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-white/70">
                        <CheckCircle size={13} className="text-sky-400 shrink-0" /> {label}
                      </span>
                      <span className="font-bold text-white text-xs">{count}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-5">
                  <div className="rounded-xl px-4 py-3 flex items-center justify-between"
                    style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <div>
                      <p className="text-white text-xs font-bold">Starting Price</p>
                      <p className="text-sky-300 text-lg font-extrabold">₹2,999</p>
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

        {/* ════════════ STATS STRIP ════════════ */}
        <section className="bg-[#00416a] py-8" aria-label="Taxvio ROC service statistics">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "1,200+", label: "Companies Incorporated" },
              { val: "4,800+", label: "Businesses Served" },
              { val: "4.9★", label: "Average Rating" },
              { val: "₹2,999", label: "Starting Price" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
                <p className="text-xs text-white/55 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ SERVICE CARDS ════════════ */}
        <section className="py-20 bg-gray-50" aria-label="ROC Compliance Services — All Services">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Complete ROC &amp; MCA Compliance Services
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Every service below is handled end-to-end by our CA & CS team — 100% online, no office visit required.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ROC_SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/serviceslist/roc/${service.slug}`}
                  aria-label={`${service.title} — Taxvio`}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#00416a]/20 transition-all duration-250 flex flex-col"
                  itemScope itemType="https://schema.org/Service"
                >
                  <meta itemProp="provider" content="Taxvio" />

                  {/* Hover accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-[#00416a] to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge */}
                  {service.badge && (
                    <span className={`absolute top-4 right-4 text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>

                  <h3 className="text-sm font-extrabold text-gray-800 group-hover:text-[#00416a] transition-colors leading-snug mb-1" itemProp="name">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[11px] text-gray-500">
                        <CheckCircle size={10} className="text-green-500 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400">Starting from</p>
                      <p className="text-base font-extrabold text-[#00416a]">{service.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400">Est. time</p>
                      <p className="text-xs font-bold text-gray-600">{service.time}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#00416a] opacity-0 group-hover:opacity-100 transition-opacity">
                    Get Started <ArrowRight size={11} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ WHY TAXVIO ════════════ */}
        <section className="py-20 bg-white" aria-label="Why choose Taxvio for ROC compliance">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why 1,200+ Businesses Choose Taxvio for ROC Compliance
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
                Same quality as a top-tier law firm — at startup-friendly pricing. Always 100% online.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
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

        {/* ════════════ SEO PILLAR CONTENT ════════════ */}
        <section className="py-20 bg-gray-50" aria-label="About ROC Compliance in India — Detailed Guide">
          <div className="max-w-4xl mx-auto px-6 space-y-14">

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                What is ROC Compliance in India?
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  The <strong>Registrar of Companies (ROC)</strong> is a government authority under the Ministry of Corporate Affairs (MCA) responsible for administering the Companies Act 2013 and the Limited Liability Partnership Act 2008 in India. Every business entity incorporated under these Acts — whether a Private Limited Company, OPC, LLP, or Section 8 Company — must adhere to a set of statutory obligations known as <strong>ROC compliance</strong>.
                </p>
                <p>
                  ROC compliance encompasses two broad categories: <strong>incorporation-related filings</strong> (one-time, at the time of company formation) and <strong>ongoing annual and event-based filings</strong> (recurring obligations throughout the life of the entity). Failure to comply with ROC requirements attracts heavy financial penalties — ₹100 per day per form — and in serious cases, directors may face disqualification, and the company may be struck off the register.
                </p>
                <p>
                  Taxvio's ROC compliance services cover the entire lifecycle of a company — from name reservation and incorporation to annual return filing, director changes, share capital amendments, and ultimately closure — ensuring your entity remains legally compliant at every stage.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                Private Limited Company Registration in India — Complete Guide
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  A <strong>Private Limited Company (Pvt Ltd)</strong> is the most popular business structure for startups and growing businesses in India. Incorporated under the Companies Act 2013, it offers the twin advantages of <em>limited liability</em> (shareholders' personal assets are protected) and a <em>separate legal identity</em> (the company can own property, enter contracts, and sue or be sued independently of its owners).
                </p>
                <p>
                  To incorporate a Private Limited Company, you need a minimum of 2 directors (at least one must be an Indian resident), a minimum of 2 shareholders, a registered office address in India, and Digital Signature Certificates (DSC) for all directors. The process is entirely online through the MCA's SPICe+ portal and typically takes 7–10 working days.
                </p>
                <p>
                  The <strong>SPICe+ form</strong> (Simplified Proforma for Incorporating Company Electronically Plus) combines multiple applications — company name reservation, DIN allotment, PAN/TAN, EPFO/ESIC registration, and bank account opening — into a single integrated form, significantly reducing the time and effort involved in incorporation. Taxvio handles the entire SPICe+ workflow end-to-end, from drafting the MOA and AOA to tracking MCA approval and delivering the Certificate of Incorporation.
                </p>
                <p>
                  <strong>Post-incorporation compliance</strong> for a Private Limited Company includes: holding a minimum of 4 board meetings annually (with proper notice and minutes), maintaining statutory registers (Register of Members, Directors, Charges, etc.), conducting an Annual General Meeting (AGM) within 6 months of the financial year end, and filing AOC-4 and MGT-7 annually with the ROC.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                LLP Registration — When to Choose an LLP Over a Pvt Ltd
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  A <strong>Limited Liability Partnership (LLP)</strong> combines the operational flexibility of a traditional partnership with the limited liability protection of a company. Governed by the LLP Act 2008, an LLP is a separate legal entity, meaning partners are not personally liable for the debts of the LLP beyond their agreed contribution.
                </p>
                <p>
                  LLPs are particularly suited for <strong>professional service firms</strong> (CA firms, law firms, consulting practices, architects), <strong>small-to-medium service businesses</strong>, and <strong>joint ventures between established entities</strong>. Compared to a Private Limited Company, an LLP has lower annual compliance requirements — no mandatory AGM, no mandatory audit below ₹40 lakh turnover, and simpler annual filings (Form 11 and Form 8).
                </p>
                <p>
                  However, LLPs are <strong>not suitable for businesses seeking venture capital or angel investment</strong> — investors strongly prefer the equity structure of a Private Limited Company. If external fundraising is a near-term goal, incorporating as a Pvt Ltd is the recommended route.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                Annual ROC Compliance — Key Deadlines and Penalties
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  Annual ROC compliance is a non-negotiable obligation for every registered company and LLP. Missing these deadlines has serious consequences — not just financial penalties but also <strong>director disqualification</strong> under Section 164(2) of the Companies Act for companies that fail to file annual returns for three consecutive years.
                </p>

                {/* Deadlines table */}
                <div className="overflow-x-auto rounded-xl border border-gray-200 mt-4">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="px-4 py-3 text-left font-bold">Form</th>
                        <th className="px-4 py-3 text-left font-bold">Entity</th>
                        <th className="px-4 py-3 text-left font-bold">Purpose</th>
                        <th className="px-4 py-3 text-left font-bold">Due Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { form: "AOC-4", entity: "Company", purpose: "Financial statements", due: "Within 30 days of AGM" },
                        { form: "MGT-7 / MGT-7A", entity: "Company", purpose: "Annual return", due: "Within 60 days of AGM" },
                        { form: "Form 11", entity: "LLP", purpose: "Annual return", due: "30 May" },
                        { form: "Form 8", entity: "LLP", purpose: "Statement of accounts", due: "30 October" },
                        { form: "ADT-1", entity: "Company", purpose: "Auditor appointment", due: "Within 15 days of AGM" },
                      ].map(({ form, entity, purpose, due }) => (
                        <tr key={form} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 font-bold text-[#00416a]">{form}</td>
                          <td className="px-4 py-3 text-gray-700">{entity}</td>
                          <td className="px-4 py-3 text-gray-600">{purpose}</td>
                          <td className="px-4 py-3 text-gray-700 font-medium">{due}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-3">
                  The <strong>penalty for late filing</strong> is ₹100 per day per form — with no upper cap for most forms. A company that files both AOC-4 and MGT-7 six months late could face penalties of ₹36,000 (₹100 × 180 days × 2 forms) per year. Taxvio's proactive compliance calendar and reminder system ensures you never miss a deadline.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                One Person Company (OPC) — The Solo Entrepreneur's Choice
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  The <strong>One Person Company (OPC)</strong>, introduced by the Companies Act 2013, allows a single individual to form a corporate entity with limited liability. Unlike a sole proprietorship, an OPC is a separate legal entity — the founder is not personally liable for business debts, and the company can own assets, enter contracts, and accept bank credit in its own name.
                </p>
                <p>
                  An OPC requires a minimum of one director (who is also the sole member) and a nominee director (who takes over if the founder becomes incapacitated). There is no minimum paid-up capital requirement. An OPC must convert to a Private Limited Company once its paid-up capital exceeds ₹50 lakh or its annual average turnover exceeds ₹2 crore in three consecutive years.
                </p>
                <p>
                  OPCs enjoy relatively lighter compliance requirements compared to Private Limited Companies — for instance, an OPC with turnover below ₹2 crore is not required to hold an AGM or prepare a cash flow statement. However, annual ROC filings (AOC-4, MGT-7A) are still mandatory.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                Section 8 Company — The Most Credible Non-Profit Structure
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  A <strong>Section 8 Company</strong> is a non-profit entity incorporated under the Companies Act 2013 with the objective of promoting commerce, art, science, sports, education, research, social welfare, religion, charity, or protection of the environment. Unlike a Trust or Society, a Section 8 Company is regulated by MCA — making it the most structured and credible form for NGOs and non-profits.
                </p>
                <p>
                  Key advantages of a Section 8 Company include: <em>higher credibility</em> due to MCA oversight; eligibility for <strong>FCRA registration</strong> (required to receive foreign contributions); eligibility for <strong>CSR funding</strong> from corporates under Section 135; and straightforward access to <strong>12A and 80G exemptions</strong> under the Income Tax Act (which provide tax exemptions to the organisation and tax deductions to donors).
                </p>
                <p>
                  Section 8 Companies must not distribute profits — all income must be used exclusively for the stated objectives. If profits are distributed, the Central Government can revoke the Section 8 licence and convert the entity into a regular company, with significant penal consequences.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                Company Closure (Strike Off) — Closing an Inactive Company Legally
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  Many companies incorporated with good intentions become dormant when business plans change — but simply stopping operations does not dissolve a company. An unaddressed inactive company continues to attract annual filing obligations and penalties. The correct legal route is to apply for <strong>voluntary strike off under Section 248 of the Companies Act 2013</strong>.
                </p>
                <p>
                  The strike-off process involves filing STK-2 with the ROC along with supporting documents: a statement of accounts showing nil liabilities, an affidavit from all directors, an indemnity bond, and a special resolution (or consent of 75% of shareholders). Once accepted, the ROC publishes a notice in the Official Gazette, and if no objections are received within 30 days, the company is officially struck off the register and ceases to exist as a legal entity.
                </p>
                <p>
                  <strong>Important:</strong> A company that has not filed its annual returns for two or more years or has outstanding dues to the government cannot apply for voluntary strike off until those defaults are rectified. Taxvio assists in clearing pending filings and preparing the complete documentation package for a smooth closure process.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ════════════ HOW IT WORKS ════════════ */}
        <section className="py-20 bg-white" aria-label="How Taxvio ROC compliance process works">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                How It Works — ROC Services with Taxvio
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Share Documents", desc: "Send your PAN, Aadhaar, address proof, and other required documents via WhatsApp or email." },
                { step: "02", title: "Expert Review", desc: "Our CA & CS team reviews your documents, prepares all MCA forms, and drafts required resolutions." },
                { step: "03", title: "Filing & Tracking", desc: "We file on MCA, track approval status, and handle any queries raised by the ROC." },
                { step: "04", title: "Delivery", desc: "Receive your Certificate of Incorporation, acknowledgements, or approval — directly on WhatsApp." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center text-white font-extrabold text-sm mb-4">
                    {step}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ FAQ ════════════ */}
        <section className="py-20 bg-gray-50" aria-label="ROC Compliance FAQs">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                FAQs
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Frequently Asked Questions — ROC &amp; Company Registration
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                  itemScope itemType="https://schema.org/Question">
                  <h3 className="font-bold text-gray-800 text-sm mb-3 flex items-start gap-3" itemProp="name">
                    <span className="w-5 h-5 rounded-full bg-[#00416a] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">Q</span>
                    {q}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-600 text-xs leading-relaxed pl-8" itemProp="text">{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ RELATED SERVICES CROSS-LINKS ════════════ */}
        <section className="py-14 bg-white border-t border-gray-100" aria-label="Related compliance services">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-[#00416a]" />
              <h2 className="text-lg font-extrabold text-gray-800">Related Compliance Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "GST Registration", desc: "Mandatory for companies with turnover > threshold", href: "/serviceslist/gst/gst-registration", icon: "🧾" },
                { title: "Income Tax Filing", desc: "ITR filing for companies, LLPs & proprietors", href: "/serviceslist/income-tax/itr-proprietor", icon: "💼" },
                { title: "TDS Return Filing", desc: "24Q, 26Q quarterly TDS compliance", href: "/serviceslist/income-tax/quarterly-tds", icon: "📊" },
                { title: "12A / 80G Registration", desc: "Tax exemptions for Section 8 companies & NGOs", href: "/serviceslist/income-tax/12a-application", icon: "🌱" },
              ].map(({ title, desc, href, icon }) => (
                <Link key={title} href={href}
                  className="group flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200">
                  <span className="text-xl shrink-0">{icon}</span>
                  <div>
                    <p className="font-bold text-gray-800 text-xs group-hover:text-[#00416a] transition">{title}</p>
                    <p className="text-gray-500 text-[11px] mt-0.5 leading-snug">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ FINAL CTA ════════════ */}
        <section className="py-20 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] relative overflow-hidden"
          aria-label="Contact Taxvio for ROC compliance and company registration">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)" }} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              CA & CS Assisted · 100% Online · Same-Day WhatsApp Response
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Register Your Company
              <span className="block mt-1 text-sky-300">or File ROC Compliance?</span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Private Limited Company, LLP, OPC, Section 8, annual ROC returns, director changes, share capital increase, company closure — all handled end-to-end by our CA & CS team. Starting ₹2,999. 100% online, no office visit needed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <Link href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                Free Consultation <ArrowRight size={15} />
              </Link>
              <a href={`tel:${PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <Phone size={15} /> Call Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/40">
              <span className="flex items-center gap-1.5"><Shield size={12} /> 100% Confidential</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={12} /> CA & CS Assisted</span>
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