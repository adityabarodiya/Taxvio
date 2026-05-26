"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Shield,
  Clock,
  Users,
  TrendingUp,
  FileText,
  Building2,
  Receipt,
  ChevronDown,
  BadgeCheck,
  Landmark,
  Zap,
  Globe,
  Lock,
  HeartHandshake,
  CalendarCheck,
  Award,
} from "lucide-react";
import bg1 from "../public/service/bg1.png";
import type { Variants } from "framer-motion";

// ─── JSON-LD structured data ──────────────────────────────────────────────────
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  logo: "https://www.taxvio.in/logo.png",
  description:
    "Taxvio is a trusted online tax and legal consultancy providing GST registration, income tax filing, company registration, TDS compliance, and business compliance services across India.",
  areaServed: "India",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khatauli",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  telephone: "+918937980366",
  priceRange: "₹499 - ₹19999",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2400",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tax & Compliance Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Registration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Income Tax Return Filing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Return Filing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Company Registration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "TDS Return Filing" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What GST services does Taxvio provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taxvio provides end-to-end GST services including GST registration, monthly and quarterly GSTR-1 and GSTR-3B return filing, GST refund applications, GST annual return (GSTR-9), GST cancellation, GST amendment, LUT filing for exporters, e-invoicing setup, GST audit assistance, and GST notice reply services across India.",
      },
    },
    {
      "@type": "Question",
      name: "How can I file income tax return online through Taxvio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taxvio offers online income tax return filing for salaried individuals, proprietors, partnership firms, LLPs, companies, and trusts. You can upload your documents online and our expert CA team will prepare and file your ITR with maximum deductions and 100% accuracy. Services start from ₹499.",
      },
    },
    {
      "@type": "Question",
      name: "Does Taxvio provide company registration services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Taxvio provides complete company registration services including Private Limited Company, LLP, One Person Company (OPC), and Section 8 Company registration through the MCA portal. We also handle annual ROC compliance, director changes, and company closure.",
      },
    },
    {
      "@type": "Question",
      name: "Can Taxvio handle GST notices and income tax scrutiny?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Taxvio's expert team handles GST notices, departmental queries, income tax scrutiny assessments, Section 143(1)/143(2)/148 notices, and appeal filings before CIT(A). Our CA-assisted team prepares comprehensive responses and represents clients in faceless assessment proceedings.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Taxvio serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taxvio is headquartered in Khatauli, Muzaffarnagar, Uttar Pradesh and provides 100% online services to clients across all states in India including Delhi NCR, Mumbai, Bangalore, Kolkata, Chennai, Hyderabad, Pune, and all tier-2 and tier-3 cities.",
      },
    },
  ],
};

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE_NUMBER = "918937980366";

const SERVICES_HIGHLIGHT = [
  {
    icon: Receipt,
    title: "GST Services",
    desc: "Registration, GSTR-1, GSTR-3B, GSTR-9, LUT filing, e-invoicing, refunds, and notice replies for all GST-registered businesses across India.",
    href: "/serviceslist/gst",
    count: "11 Services",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
  },
  {
    icon: FileText,
    title: "Income Tax",
    desc: "ITR filing for individuals, proprietors, firms, LLPs, and companies. TDS/TCS returns, tax audit, scrutiny, 12A/80G, Form 15G/15H, and PAN/TAN services.",
    href: "/serviceslist/income-tax",
    count: "14 Services",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    icon: Building2,
    title: "Company Registration",
    desc: "Pvt Ltd, LLP, OPC, and Section 8 company formation with complete ROC compliance, annual returns, director changes, and company closure services.",
    href: "/serviceslist/roc",
    count: "9 Services",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
  {
    icon: Shield,
    title: "FSSAI License",
    desc: "Basic, State, and Central FSSAI food license registration, annual return filing, license renewal, modification, and FSSAI notice reply services.",
    href: "/serviceslist/fssai",
    count: "6 Services",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
  },
];

const STATS = [
  { value: "12,000+", label: "Returns Filed", icon: FileText, suffix: "" },
  { value: "4,800+", label: "Businesses Served", icon: Building2, suffix: "" },
  { value: "₹2.4 Cr+", label: "Tax Saved for Clients", icon: TrendingUp, suffix: "" },
  { value: "4.9★", label: "Average Rating", icon: Star, suffix: "" },
];

const WHY_TAXVIO = [
  { text: "Expert CA & Legal Team", icon: Award },
  { text: "100% Online — No Office Visit Needed", icon: Globe },
  { text: "Affordable & Transparent Pricing", icon: BadgeCheck },
  { text: "GST, Income Tax & ROC Under One Roof", icon: Landmark },
  { text: "Timely Filing & Deadline Reminders", icon: CalendarCheck },
  { text: "All India Coverage — Including Tier-2 Cities", icon: Users },
  { text: "Confidential & Secure Document Handling", icon: Lock },
  { text: "Dedicated Support via Call & WhatsApp", icon: HeartHandshake },
];

const GST_SERVICES = [
  { name: "GST Registration", href: "serviceslist/gst/gst-registration", desc: "GSTIN in 3–7 days" },
  { name: "GST Return Filing", href: "serviceslist/gst/gst-return", desc: "GSTR-1, 3B, QRMP" },
  { name: "GST Refund", href: "serviceslist/gst/gst-refund", desc: "Export & ITC refunds" },
  { name: "GST Annual Return", href: "serviceslist/gst/gstr-9", desc: "GSTR-9 filing" },
  { name: "GST Cancellation", href: "serviceslist/gst/gst-cancellation", desc: "Surrender GSTIN" },
  { name: "GST LUT Filing", href: "serviceslist/gst/gst-lut", desc: "Export without IGST" },
  { name: "GST Amendment", href: "serviceslist/gst/gst-amendment", desc: "Update details" },
  { name: "GST Notice Reply", href: "serviceslist/gst/gst-notice-reply", desc: "Departmental queries" },
  { name: "GST E-Invoicing", href: "serviceslist/gst/gst-e-invoicing", desc: "IRN & compliance" },
  { name: "GST Audit", href: "serviceslist/gst/gst-audit", desc: "Audit assistance" },
  { name: "GSTIN Verification", href: "serviceslist/gst/gst-search", desc: "Vendor check" },
];

const ITR_SERVICES = [
  { name: "ITR – Salaried", href: "serviceslist/income-tax/itr-salaried", desc: "Form 16 based filing" },
  { name: "ITR – Proprietor", href: "serviceslist/income-tax/itr-proprietor", desc: "Business income ITR" },
  { name: "ITR – Firm / LLP", href: "serviceslist", desc: "Partnership ITR" },
  { name: "ITR – Company / Trust", href: "serviceslist/income-tax/itr-trust-company", desc: "Corporate ITR-6/7" },
  { name: "TDS Return (24Q/26Q)", href: "serviceslist/income-tax/quarterly-tds", desc: "Quarterly TDS" },
  { name: "TCS Return", href: "serviceslist/income-tax/quarterly-tcs", desc: "Form 27EQ" },
  { name: "Tax Audit (44AB)", href: "serviceslist/income-tax/income-tax-audit", desc: "Form 3CA/3CB/3CD" },
  { name: "Income Tax Scrutiny", href: "serviceslist/income-tax/income-tax-scrutiny", desc: "Notice handling" },
  { name: "12A Registration", href: "serviceslist/income-tax/12a-application", desc: "Trust exemption" },
  { name: "80G Approval", href: "serviceslist/income-tax/80g-application", desc: "Donor deduction" },
  { name: "Form 15G / 15H", href: "serviceslist/income-tax/15g-15h", desc: "Stop TDS on FD" },
  { name: "PAN Card", href: "serviceslist/income-tax/pan-card", desc: "New / correction" },
  { name: "TAN Application", href: "serviceslist/income-tax/tan-application", desc: "For TDS deductors" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Share Your Requirements",
    desc: "Contact us via WhatsApp, call, or our online form. Tell us which service you need — GST registration, ITR filing, company registration, or any other compliance requirement.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Upload Your Documents",
    desc: "Our team sends you a simple checklist. Upload your documents securely via WhatsApp or email. No physical visits required — everything is handled 100% online.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Expert Review & Filing",
    desc: "Our CA-led team reviews your documents, prepares your application or return with 100% accuracy, and files it with the relevant authority — GST portal, Income Tax portal, or MCA.",
    icon: BadgeCheck,
  },
  {
    step: "04",
    title: "Done — Get Your Acknowledgement",
    desc: "Receive your ARN, GSTIN, ITR acknowledgement, or company certificate directly. We also handle follow-ups, corrections, and any departmental queries at no extra cost.",
    icon: Award,
  },
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Small Business Owner, Delhi",
    text: "Taxvio handled our GST registration and monthly return filing with complete professionalism. The team is responsive on WhatsApp and never misses a filing deadline. Highly recommended for any business owner.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Salaried Professional, Bangalore",
    text: "I used Taxvio for my ITR filing with capital gains from mutual funds and property sale. They maximized my deductions and filed accurately within 24 hours. The pricing is very reasonable compared to local CAs.",
    rating: 5,
  },
  {
    name: "Amit Gupta",
    role: "Startup Founder, Noida",
    text: "We incorporated our Private Limited company and set up GST through Taxvio. The entire process was smooth, online, and completed faster than expected. Now they handle all our ROC compliance too.",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "What GST services does Taxvio provide?",
    a: "Taxvio provides end-to-end GST services including GST registration, monthly and quarterly GSTR-1 and GSTR-3B return filing, GST refund applications, GST annual return (GSTR-9), GST cancellation, LUT filing for exporters, e-invoicing setup, GST audit assistance, and GST notice reply services pan-India.",
  },
  {
    q: "How can I file my income tax return online through Taxvio?",
    a: "Simply upload your documents (Form 16, bank statements, investment proofs) through WhatsApp or email. Our CA team prepares and files your ITR within 24–48 hours with maximum deductions. Services are available for salaried individuals, proprietors, firms, LLPs, and companies.",
  },
  {
    q: "Does Taxvio provide company registration services?",
    a: "Yes. We handle complete company formation — Private Limited, LLP, OPC, and Section 8 (NGO) — through the MCA portal. We also manage ongoing ROC compliance including annual returns, director changes, capital increase, and company closure.",
  },
  {
    q: "Can Taxvio help with GST notices and income tax scrutiny?",
    a: "Absolutely. Our expert team handles all types of GST and income tax notices — Section 143(1), 143(2), 148, GST SCN — with comprehensive written responses, AIS reconciliation, and representation in faceless assessment proceedings.",
  },
  {
    q: "What areas does Taxvio serve?",
    a: "Taxvio is based in Khatauli, Muzaffarnagar, Uttar Pradesh and serves clients 100% online across all states in India including Delhi NCR, Mumbai, Bangalore, Kolkata, Chennai, Hyderabad, Pune, and all tier-2 and tier-3 cities.",
  },
  {
    q: "How much does GST registration cost at Taxvio?",
    a: "GST registration at Taxvio starts from ₹999 including government fees. The process typically takes 3–7 working days after document submission. We also provide post-registration support for GSTR-1 and GSTR-3B filing from ₹499/month.",
  },
  {
    q: "Can Taxvio file ITR for freelancers and consultants?",
    a: "Yes. Taxvio files ITR for freelancers, independent consultants, and self-employed professionals under ITR-3 or ITR-4 (Presumptive Taxation Scheme). We also handle TDS reconciliation, advance tax computation, and Form 26AS/AIS mismatch resolution.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};
const slideRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Landing() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"gst" | "itr">("gst");
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const handleCall = () => { window.location.href = `tel:${PHONE_NUMBER}`; };
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello Taxvio, I want to enquire about GST, Income Tax and Company Registration services.");
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <>
      <Head>
        <title>Taxvio | GST Registration, Income Tax Filing & Company Registration Services in India</title>
        <meta name="description" content="Taxvio offers professional GST registration, GSTR-1, GSTR-3B filing, income tax return filing for individuals and businesses, company registration, TDS returns, tax audit, 12A/80G, FSSAI license, and ROC compliance services across India. Starting ₹499." />
        <meta name="keywords" content="GST registration India, income tax return filing, company registration India, GST return filing, TDS return filing, tax audit India, ITR filing salaried, GST notice reply, 12A 80G registration, FSSAI license, Taxvio" />
        <link rel="canonical" href="https://www.taxvio.in" />
        <meta property="og:title" content="Taxvio | GST, Income Tax & Company Registration Services" />
        <meta property="og:description" content="End-to-end GST, income tax, company registration and compliance services for businesses across India. Starting ₹499." />
        <meta property="og:url" content="https://www.taxvio.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.taxvio.in/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 font-sans">

        {/* ════════════ HERO ════════════ */}
        <section
          className="relative overflow-hidden bg-[#00416a] text-white min-h-[92vh] flex items-center"
          aria-label="Taxvio — GST, Income Tax & Company Registration Services"
          itemScope itemType="https://schema.org/WebPage"
        >
          {/* Multi-layer gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />

          {/* Decorative grid lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />

          {/* Glow blobs */}
          <div className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px] rounded-full bg-sky-400/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[60px] pointer-events-none" />

          <div className="relative w-full mx-auto max-w-6xl px-6 py-28 md:py-36 grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="z-10">
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                Trusted Online Tax & Compliance Consultancy — India
              </motion.span>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-[3.2rem] font-extrabold leading-[1.12] tracking-tight text-white" itemProp="name">
                GST, Income Tax &amp; Company Registration
                <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                  Services Across India
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-white/80 text-base md:text-lg leading-relaxed" itemProp="description">
                Taxvio delivers complete online <strong className="text-white">GST registration</strong>, <strong className="text-white">income tax return filing</strong>, company registration, TDS/TCS returns, tax audit under Section 44AB, FSSAI license, and ROC compliance — serving individuals, startups, and businesses pan-India. Starting at just <strong className="text-sky-300">₹499</strong>.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 w-full max-w-sm">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                  Free Consultation <ArrowRight size={15} className="shrink-0" />
                </Link>
                <Link href="/serviceslist" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/50 bg-white/5 backdrop-blur-sm px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                  View All 40+ Services
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-3">
                {[
                  { label: "GST Registration", price: "from ₹999", icon: "🏢" },
                  { label: "ITR Filing", price: "from ₹499", icon: "📄" },
                  { label: "Company Formation", price: "from ₹6,999", icon: "🏛️" },
                  { label: "TDS Returns", price: "from ₹999", icon: "📊" },
                ].map(({ label, price, icon }) => (
                  <div key={label} className="flex items-center gap-2.5 bg-white/8 border border-white/12 rounded-xl px-3 py-2.5 backdrop-blur-sm hover:bg-white/12 transition">
                    <span className="text-lg shrink-0">{icon}</span>
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">{label}</p>
                      <p className="text-sky-300 text-[11px] font-medium mt-0.5">{price}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="hidden md:flex items-center justify-center z-10"
            >
              <div className="relative w-full max-w-lg">
                {/* Decorative ring */}
                <div className="absolute inset-[-16px] rounded-[40px] border border-white/10" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400/15 to-teal-400/10 blur-2xl scale-110" />

                {/* Floating badge — top right */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-2xl z-20 flex items-center gap-2.5"
                >
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium">Filing Complete</p>
                    <p className="text-xs font-bold text-gray-800">GSTR-3B Submitted</p>
                  </div>
                </motion.div>

                {/* Floating badge — bottom left */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-5 -left-5 bg-[#00416a] rounded-2xl px-4 py-3 shadow-2xl z-20 flex items-center gap-2.5"
                >
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Star size={16} className="text-yellow-300 fill-yellow-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/70 font-medium">Client Rating</p>
                    <p className="text-xs font-bold text-white">4.9 / 5.0 ⭐</p>
                  </div>
                </motion.div>

                <Image
                  src={bg1}
                  alt="Online GST registration, income tax filing, and company registration services in India — Taxvio"
                  priority
                  className="relative w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60L1440 60L1440 30C1200 60 900 0 720 20C540 40 240 60 0 30L0 60Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ════════════ STATS RIBBON ════════════ */}
        <section className="bg-white py-10 border-b border-gray-100" ref={statsRef} aria-label="Taxvio at a glance">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                initial="hidden"
                animate={statsInView ? "visible" : "hidden"}
                variants={scaleIn}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#f2f8fc] border border-[#deeef7] text-center hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center">
                  <Icon size={20} className="text-[#00416a]" />
                </div>
                <p className="text-2xl md:text-3xl font-extrabold text-[#00416a]">{value}</p>
                <p className="text-xs text-gray-500 font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════ ABOUT + SEO CONTENT ════════════ */}
        <motion.section
          className="py-24 bg-white"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          aria-label="About Taxvio — India's Trusted Online Tax Consultancy"
          itemScope itemType="https://schema.org/AboutPage"
        >
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={scaleIn} className="relative">
              {/* Decorative bg accent */}
              <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-[#00416a]/5 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-sky-400/10 blur-xl pointer-events-none" />
              <Image
                src={bg1}
                alt="Taxvio CA expert team providing online tax and compliance services across India"
                className="relative rounded-3xl shadow-2xl border border-gray-100"
              />
              {/* Trust badge overlay */}
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center shrink-0">
                  <BadgeCheck size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Verified CA Team</p>
                  <p className="text-sm font-bold text-[#00416a]">ICAI Certified Experts</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger}>
              <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                About Taxvio
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4 leading-tight" itemProp="name">
                India's Trusted Online Tax &amp; Compliance Partner
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-5 space-y-4 text-gray-600 leading-relaxed text-[15px]" itemProp="description">
                <p>
                  <strong className="text-gray-800">Taxvio</strong> is a leading online tax and legal consultancy headquartered in Khatauli, Muzaffarnagar, Uttar Pradesh. We specialize in <strong>GST registration</strong>, <strong>income tax return filing</strong>, <strong>TDS/TCS return filing</strong>, <strong>company registration</strong>, and <strong>FSSAI license</strong> services — delivering professional compliance support to businesses, startups, individuals, and NGOs across all states in India.
                </p>
                <p>
                  Our CA-led expert team handles the complete compliance lifecycle — from <strong>GST return filing</strong> (GSTR-1, GSTR-3B, GSTR-9) and <strong>tax audit under Section 44AB</strong> to <strong>income tax scrutiny notice replies</strong>, <strong>Section 12A/80G trust registration</strong>, and <strong>ROC annual compliance</strong> for private limited companies and LLPs. Every service is delivered 100% online — no office visit required, no paperwork hassle.
                </p>
                <p>
                  Taxvio was built on one belief: <em>expert CA support should be accessible and affordable for every Indian business</em> — not just large corporations. Whether you're a first-time entrepreneur needing <strong>GST registration</strong>, a salaried employee filing <strong>ITR with Form 16</strong>, or an exporter applying for <strong>LUT filing</strong> to export without IGST payment — Taxvio is your one-stop online compliance partner.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#002b45] transition shadow-lg shadow-[#00416a]/20">
                  Talk to Our Expert <ArrowRight size={15} />
                </Link>
                <Link href="/serviceslist" className="inline-flex items-center gap-2 border border-[#00416a] text-[#00416a] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
                  View All Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ════════════ SEO CONTENT BLOCK — GST GUIDE ════════════ */}
        <section className="py-20 bg-[#f8fbfd] border-y border-gray-100" aria-label="Complete Guide to GST Services in India">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  GST Compliance Guide
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4">
                  Everything You Need to Know About GST in India
                </h2>
                <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
                  A comprehensive guide to GST registration, return filing, compliance obligations, and how Taxvio simplifies GST for businesses of all sizes across India.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Who Needs GST Registration?",
                    icon: "📋",
                    content: "GST registration is mandatory for businesses with annual turnover exceeding ₹40 lakh (₹20 lakh for service providers, ₹10 lakh for special category states). Additionally, businesses engaged in inter-state supply of goods/services, e-commerce sellers, casual taxable persons, non-resident taxable persons, and those liable to pay tax under reverse charge mechanism must register for GST regardless of their turnover. Exporters and importers also require GST registration to claim ITC and file LUT for zero-rated exports.",
                  },
                  {
                    title: "GST Return Filing Obligations",
                    icon: "📅",
                    content: "Every GST-registered business must file regular returns: GSTR-1 (outward supply details — monthly or quarterly under QRMP), GSTR-3B (monthly summary return with tax payment), GSTR-9 (annual return), and GSTR-9C (reconciliation statement for turnover above ₹5 crore). Non-filing attracts late fees of ₹50/day (₹20/day for nil returns) plus 18% interest on outstanding tax liability. Taxvio's expert team ensures 100% timely filing, ITC reconciliation, and GSTR-2A/2B matching to avoid demand notices.",
                  },
                  {
                    title: "GST Notice & Audit Assistance",
                    icon: "🛡️",
                    content: "GST authorities issue Show Cause Notices (SCN) for discrepancies in returns, excess ITC claims, non-payment of taxes, or mismatches identified through ASMT-10. Taxvio's CA team provides comprehensive GST notice reply services — analyzing the notice, preparing a detailed written response with supporting documents, and representing you in departmental proceedings. We also assist with GST audit under Section 65/66, GST refund applications for exporters and inverted duty structure, and GST appeal filing before the Appellate Authority.",
                  },
                ].map(({ title, icon, content }) => (
                  <motion.div key={title} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl mb-4">{icon}</div>
                    <h3 className="text-lg font-bold text-[#00416a] mb-3">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════ SERVICE CATEGORIES ════════════ */}
        <section className="py-20 bg-white" aria-label="GST, Income Tax, Company Registration and FSSAI Services">
          <motion.div className="max-w-6xl mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4">
                Complete Tax &amp; Compliance Services
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Taxvio offers 40+ professional tax and compliance services for individuals, startups, SMEs, and large enterprises — all delivered online across India.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES_HIGHLIGHT.map(({ icon: Icon, title, desc, href, count, color, bg }) => (
                <motion.div key={title} variants={fadeUp}>
                  <Link href={href} className={`group relative flex gap-5 p-6 ${bg} border border-transparent rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                    {/* Subtle corner accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[60px] bg-gradient-to-br ${color} opacity-5`} />
                    <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#00416a] transition">{title}</h3>
                        <span className="text-xs text-gray-400 bg-white px-2 py-0.5 rounded-full border border-gray-200 shrink-0">{count}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                      <span className="inline-flex items-center gap-1 mt-3 text-[#00416a] text-sm font-semibold group-hover:gap-2 transition-all">
                        View All Services <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ════════════ TABBED SERVICES LIST ════════════ */}
        <section className="py-20 bg-gray-50" aria-label="GST and Income Tax Services India — Full List">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  All Services
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Browse All GST &amp; Income Tax Services
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                  From GST registration to income tax audit — find every compliance service you need under one roof.
                </p>
              </motion.div>

              {/* Tab switcher */}
              <motion.div variants={fadeUp} className="flex gap-2 justify-center mb-8">
                {[
                  { key: "gst", label: "GST Services", icon: Receipt },
                  { key: "itr", label: "Income Tax Services", icon: FileText },
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as "gst" | "itr")}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      activeTab === key
                        ? "bg-[#00416a] text-white shadow-lg shadow-[#00416a]/20"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-[#00416a] hover:text-[#00416a]"
                    }`}
                  >
                    <Icon size={15} />
                    {label}
                  </button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
                >
                  {(activeTab === "gst" ? GST_SERVICES : ITR_SERVICES).map(({ name, href, desc }) => (
                    <Link
                      key={name}
                      href={href}
                      className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-[#00416a] hover:bg-blue-50 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-[#00416a] text-sm transition">{name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#00416a] flex items-center justify-center transition-all duration-200 shrink-0 ml-3">
                        <ArrowRight size={13} className="text-gray-300 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ════════════ HOW IT WORKS ════════════ */}
        <section className="py-24 bg-white" aria-label="How Taxvio Works — 4 Simple Steps">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4">
                  Get Your Tax Work Done in 4 Simple Steps
                </h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                  Taxvio's streamlined online process makes GST registration, ITR filing, and company registration fast, accurate, and completely paperless.
                </p>
              </motion.div>

              <div className="relative grid md:grid-cols-4 gap-8">
                {/* Connector line (desktop) */}
                <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#00416a]/20 to-transparent" />

                {HOW_IT_WORKS.map(({ step, title, desc, icon: Icon }, i) => (
                  <motion.div key={step} variants={fadeUp} className="flex flex-col items-center text-center relative">
                    <div className="relative mb-5">
                      <div className="w-16 h-16 rounded-2xl bg-[#00416a] flex items-center justify-center shadow-xl shadow-[#00416a]/25 z-10 relative">
                        <Icon size={24} className="text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-sky-400 text-white text-[10px] font-extrabold flex items-center justify-center shadow-md">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#00416a] text-base mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════ SEO CONTENT BLOCK — INCOME TAX GUIDE ════════════ */}
        <section className="py-20 bg-[#f2f8fc]" aria-label="Income Tax Return Filing Guide — Taxvio">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-12 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  ITR Filing Guide
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4">
                  Income Tax Return Filing in India — Everything Explained
                </h2>
                <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
                  Understand ITR filing deadlines, applicable forms, and why professional CA-assisted filing with Taxvio maximizes your refunds and minimizes scrutiny risk.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeUp} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[#00416a] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <FileText size={16} className="text-[#00416a]" />
                    </span>
                    Which ITR Form Do You Need?
                  </h3>
                  <div className="space-y-3">
                    {[
                      { form: "ITR-1 (Sahaj)", for: "Salaried individuals with income up to ₹50 lakh, one house property, and other sources" },
                      { form: "ITR-2", for: "Individuals/HUF with capital gains, more than one house property, or foreign income" },
                      { form: "ITR-3", for: "Individuals/HUF having income from business or profession (including freelancers)" },
                      { form: "ITR-4 (Sugam)", for: "Individuals/HUF/Firms under presumptive taxation scheme (44AD/44ADA/44AE)" },
                      { form: "ITR-5", for: "Partnership firms, LLPs, AOPs, BOIs" },
                      { form: "ITR-6", for: "Companies other than claiming exemption under Section 11" },
                      { form: "ITR-7", for: "Trusts, political parties, institutions claiming exemption under 12A/80G" },
                    ].map(({ form, for: desc }) => (
                      <div key={form} className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                        <span className="text-xs font-bold text-[#00416a] bg-blue-100 px-2 py-0.5 rounded-lg shrink-0 mt-0.5 h-fit">{form}</span>
                        <p className="text-xs text-gray-600">{desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-5">
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-[#00416a] mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                        <CalendarCheck size={16} className="text-green-600" />
                      </span>
                      ITR Filing Deadlines
                    </h3>
                    <div className="space-y-2.5">
                      {[
                        { deadline: "July 31", desc: "Individuals, HUF, firms not liable to tax audit" },
                        { deadline: "October 31", desc: "Businesses liable to tax audit under Section 44AB" },
                        { deadline: "November 30", desc: "Transfer pricing reports (Section 92E)" },
                        { deadline: "December 31", desc: "Belated return filing for the financial year" },
                      ].map(({ deadline, desc }) => (
                        <div key={deadline} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                          <span className="text-xs font-bold text-white bg-[#00416a] px-2.5 py-1 rounded-lg shrink-0">{deadline}</span>
                          <p className="text-sm text-gray-600">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#00416a] rounded-2xl p-7 text-white">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <TrendingUp size={18} className="text-sky-300" />
                      Why CA-Assisted ITR Filing?
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "Maximum deductions under 80C, 80D, 80G, HRA, LTA",
                        "Correct ITR form selection to avoid defective returns",
                        "AIS/TIS reconciliation to prevent mismatch notices",
                        "Capital gains tax optimization (LTCG/STCG)",
                        "Business income, depreciation & presumptive tax planning",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                          <CheckCircle size={14} className="text-green-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════ WHY TAXVIO ════════════ */}
        <motion.section
          className="py-20 bg-white"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          aria-label="Why Choose Taxvio for GST and Income Tax Services"
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Why Taxvio
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4">
                Why 4,800+ Businesses Trust Taxvio
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Affordable pricing, expert CA team, and 100% online service delivery make Taxvio the preferred compliance partner for businesses across India.
              </p>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {WHY_TAXVIO.map(({ text, icon: Icon }) => (
                <motion.li key={text} variants={fadeUp} className="flex items-start gap-4 p-5 bg-[#f8fbfd] rounded-2xl border border-[#deeef7] hover:border-[#00416a]/30 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all duration-200">
                    <Icon size={18} className="text-[#00416a] group-hover:text-white transition-all duration-200" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm leading-relaxed mt-1">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.section>

        {/* ════════════ TESTIMONIALS ════════════ */}
        <section className="py-20 bg-gray-50 border-y border-gray-100" aria-label="Client Testimonials — Taxvio Reviews">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-gray-200">
                  Client Reviews
                </span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  What Our Clients Say
                </h2>
                <p className="text-gray-600 mt-3">Rated 4.9★ by 2,400+ businesses and individuals across India.</p>
              </motion.div>

              <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
                {TESTIMONIALS.map(({ name, role, text, rating }) => (
                  <motion.div key={name} variants={scaleIn} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="flex mb-3">
                      {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">"{text}"</p>
                    <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                      <div className="w-9 h-9 rounded-full bg-[#00416a] flex items-center justify-center shrink-0 text-white text-sm font-bold">
                        {name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{name}</p>
                        <p className="text-xs text-gray-400">{role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════ SEO CONTENT — COMPANY REGISTRATION ════════════ */}
        <section className="py-20 bg-white" aria-label="Company Registration Services in India — Taxvio">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Company Registration
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#00416a] mt-4 leading-tight">
                    Register Your Company in India — Pvt Ltd, LLP, OPC &amp; NGO
                  </h2>
                  <p className="text-gray-600 mt-4 leading-relaxed text-[15px]">
                    Starting a business in India requires choosing the right legal structure. Taxvio provides complete company registration services through the Ministry of Corporate Affairs (MCA) portal — from Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) to Certificate of Incorporation (COI) and post-incorporation compliance.
                  </p>
                  <p className="text-gray-600 mt-4 leading-relaxed text-[15px]">
                    Our CA and CS team handles <strong>Private Limited Company registration</strong> (ideal for startups seeking funding), <strong>LLP formation</strong> (for professional partnerships with limited liability), <strong>One Person Company (OPC)</strong> registration (for solo entrepreneurs), and <strong>Section 8 Company registration</strong> for NGOs and non-profit organizations. All registrations are completed within 7–10 working days, 100% online.
                  </p>
                  <Link href="/serviceslist/roc" className="inline-flex items-center gap-2 mt-6 bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#002b45] transition shadow-lg shadow-[#00416a]/20">
                    Explore Company Services <ArrowRight size={15} />
                  </Link>
                </div>

                <div className="space-y-3">
                  {[
                    { type: "Private Limited Company", price: "from ₹6,999", features: ["Limited liability for shareholders", "Easy fundraising & investor-friendly", "Separate legal entity status", "Perpetual succession"], ideal: "Startups & growing businesses" },
                    { type: "LLP (Limited Liability Partnership)", price: "from ₹5,999", features: ["Flexible management structure", "Lower compliance burden vs Pvt Ltd", "Partners have limited liability", "No minimum capital required"], ideal: "Professional firms & consultancies" },
                    { type: "One Person Company (OPC)", price: "from ₹5,499", features: ["Single founder structure", "Limited liability protection", "Separate legal entity", "Easier conversion to Pvt Ltd"], ideal: "Solo entrepreneurs" },
                  ].map(({ type, price, features, ideal }) => (
                    <div key={type} className="p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:border-[#00416a]/30 hover:bg-blue-50/40 transition-all duration-200">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-gray-800 text-sm">{type}</h3>
                          <p className="text-xs text-gray-400 mt-0.5">Ideal for: {ideal}</p>
                        </div>
                        <span className="text-xs font-bold text-[#00416a] bg-blue-100 px-2.5 py-1 rounded-lg shrink-0">{price}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {features.map((f) => (
                          <span key={f} className="text-[11px] text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded-full">{f}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════ FAQ ════════════ */}
        <section className="py-20 bg-gray-50" aria-label="Frequently Asked Questions — GST and Income Tax Services">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-gray-200">
                  FAQ
                </span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Frequently Asked Questions</h2>
                <p className="text-gray-600 mt-3">Answers to the most common questions about Taxvio's GST, Income Tax, and Company Registration services.</p>
              </motion.div>
              <motion.div variants={stagger} className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                {FAQS.map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className={`border rounded-2xl overflow-hidden transition-all duration-200 ${faqOpen === i ? "border-[#00416a]/30 shadow-md" : "border-gray-200"}`} itemScope itemType="https://schema.org/Question">
                    <button
                      className="w-full text-left p-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      aria-expanded={faqOpen === i}
                    >
                      <span className="text-sm pr-4" itemProp="name">{f.q}</span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${faqOpen === i ? "bg-[#00416a] rotate-180" : "bg-gray-100"}`}>
                        <ChevronDown size={15} className={faqOpen === i ? "text-white" : "text-gray-500"} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {faqOpen === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          itemScope itemType="https://schema.org/Answer"
                        >
                          <p className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4" itemProp="text">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════ CONTACT CTA ════════════ */}
        <section className="py-24 bg-[#00416a] relative overflow-hidden" aria-label="Contact Taxvio — Free Tax Consultation">
          {/* Background accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

          <motion.div
            className="relative max-w-4xl mx-auto px-6 text-center text-white"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm mb-6 backdrop-blur-sm">
              <Users size={14} /> 4,800+ Businesses Served Across India
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold leading-tight">
              Get Expert GST, Income Tax &amp; Compliance Support — Anywhere in India
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-white/75 max-w-2xl mx-auto leading-relaxed text-[15px]">
              Whether you need <strong className="text-white">GST registration</strong>, <strong className="text-white">ITR filing</strong>, <strong className="text-white">company registration</strong>, <strong className="text-white">TDS compliance</strong>, or <strong className="text-white">notice handling</strong> — our CA-led team is available on call and WhatsApp with affordable, transparent pricing and 100% online service delivery.
            </motion.p>

            {/* Trust indicators */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                { label: "12,000+ Returns Filed", icon: FileText },
                { label: "4.9★ Rated", icon: Star },
                { label: "100% Online", icon: Globe },
                { label: "CA-Certified Team", icon: BadgeCheck },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                  <Icon size={12} className="text-sky-300" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleCall}
                aria-label="Call Taxvio now"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 hover:shadow-2xl active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                <Phone size={16} className="shrink-0" /> Call Now
              </button>
              <button
                onClick={handleWhatsApp}
                aria-label="WhatsApp Taxvio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/60 bg-transparent px-8 py-4 text-sm font-bold text-white hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                <MessageCircle size={16} className="shrink-0" /> WhatsApp Us
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/15 border border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/25 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                Free Consultation <ArrowRight size={15} className="shrink-0" />
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-8 text-white/40 text-xs">
              Serving Khatauli, Muzaffarnagar, Meerut, Delhi NCR and all states of India — 100% Online
            </motion.p>
          </motion.div>
        </section>
      </main>
    </>
  );
}