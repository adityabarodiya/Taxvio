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
} from "lucide-react";
import bg1 from "../public/service/bg1.png";
import type { Variants } from "framer-motion";

// ─── JSON-LD structured data ─────────────────────────────────────────────────
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
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "GST Registration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Income Tax Return Filing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "GST Return Filing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Company Registration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "TDS Return Filing" },
      },
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
    href: "/gst",
    count: "11 Services",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: FileText,
    title: "Income Tax",
    desc: "ITR filing for individuals, proprietors, firms, LLPs, and companies. TDS/TCS returns, tax audit, scrutiny, 12A/80G, Form 15G/15H, and PAN/TAN services.",
    href: "/income-tax",
    count: "14 Services",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Building2,
    title: "Company Registration",
    desc: "Pvt Ltd, LLP, OPC, and Section 8 company formation with complete ROC compliance, annual returns, director changes, and company closure services.",
    href: "/roc",
    count: "9 Services",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "FSSAI License",
    desc: "Basic, State, and Central FSSAI food license registration, annual return filing, license renewal, modification, and FSSAI notice reply services.",
    href: "/fssai",
    count: "6 Services",
    color: "from-orange-500 to-amber-600",
  },
];

const STATS = [
  { value: "12,000+", label: "Returns Filed", icon: FileText },
  { value: "4,800+", label: "Businesses Served", icon: Building2 },
  { value: "₹2.4 Cr+", label: "Tax Saved for Clients", icon: TrendingUp },
  { value: "4.9★", label: "Average Rating", icon: Star },
];

const WHY_TAXVIO = [
  "Expert CA & Legal Team",
  "100% Online — No Office Visit Needed",
  "Affordable & Transparent Pricing",
  "GST, Income Tax & ROC Under One Roof",
  "Timely Filing & Deadline Reminders",
  "All India Coverage — Including Tier-2 Cities",
  "Confidential & Secure Document Handling",
  "Dedicated Support via Call & WhatsApp",
];

const GST_SERVICES = [
  {
    name: "GST Registration",
    href: "serviceslist/gst/gst-registration",
    desc: "GSTIN in 3–7 days",
  },
  {
    name: "GST Return Filing",
    href: "serviceslist/gst/gst-return",
    desc: "GSTR-1, 3B, QRMP",
  },
  {
    name: "GST Refund",
    href: "serviceslist/gst/gst-refund",
    desc: "Export & ITC refunds",
  },
  {
    name: "GST Annual Return",
    href: "serviceslist/gst/gstr-9",
    desc: "GSTR-9 filing",
  },
  {
    name: "GST Cancellation",
    href: "serviceslist/gst/gst-cancellation",
    desc: "Surrender GSTIN",
  },
  {
    name: "GST LUT Filing",
    href: "serviceslist/gst/gst-lut",
    desc: "Export without IGST",
  },
  {
    name: "GST Amendment",
    href: "serviceslist/gst/gst-amendment",
    desc: "Update details",
  },
  {
    name: "GST Notice Reply",
    href: "serviceslist/gst/gst-notice-reply",
    desc: "Departmental queries",
  },
  {
    name: "GST E-Invoicing",
    href: "serviceslist/gst/gst-e-invoicing",
    desc: "IRN & compliance",
  },
  {
    name: "GST Audit",
    href: "serviceslist/gst/gst-audit",
    desc: "Audit assistance",
  },
  {
    name: "GSTIN Verification",
    href: "serviceslist/gst/gst-search",
    desc: "Vendor check",
  },
];

const ITR_SERVICES = [
  {
    name: "ITR – Salaried",
    href: "serviceslist/income-tax/itr-salaried",
    desc: "Form 16 based filing",
  },
  {
    name: "ITR – Proprietor",
    href: "serviceslist/income-tax/itr-proprietor",
    desc: "Business income ITR",
  },
  { name: "ITR – Firm / LLP", href: "serviceslist", desc: "Partnership ITR" },
  {
    name: "ITR – Company / Trust",
    href: "serviceslist/income-tax/itr-trust-company",
    desc: "Corporate ITR-6/7",
  },
  {
    name: "TDS Return (24Q/26Q)",
    href: "serviceslist/income-tax/quarterly-tds",
    desc: "Quarterly TDS",
  },
  {
    name: "TCS Return",
    href: "serviceslist/income-tax/quarterly-tcs",
    desc: "Form 27EQ",
  },
  {
    name: "Tax Audit (44AB)",
    href: "serviceslist/income-tax/income-tax-audit",
    desc: "Form 3CA/3CB/3CD",
  },
  {
    name: "Income Tax Scrutiny",
    href: "serviceslist/income-tax/income-tax-scrutiny",
    desc: "Notice handling",
  },
  {
    name: "12A Registration",
    href: "serviceslist/income-tax/12a-application",
    desc: "Trust exemption",
  },
  {
    name: "80G Approval",
    href: "serviceslist/income-tax/80g-application",
    desc: "Donor deduction",
  },
  {
    name: "Form 15G / 15H",
    href: "serviceslist/income-tax/15g-15h",
    desc: "Stop TDS on FD",
  },
  {
    name: "PAN Card",
    href: "serviceslist/income-tax/pan-card",
    desc: "New / correction",
  },
  {
    name: "TAN Application",
    href: "serviceslist/income-tax/tan-application",
    desc: "For TDS deductors",
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
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};
// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

export default function Landing() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Taxvio, I want to enquire about GST, Income Tax and Company Registration services.",
    );
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <>
      <Head>
        <title>
          Taxvio | GST Registration, Income Tax Filing & Company Registration
          Services in India
        </title>
        <meta
          name="description"
          content="Taxvio offers professional GST registration, GSTR-1, GSTR-3B filing, income tax return filing for individuals and businesses, company registration, TDS returns, tax audit, 12A/80G, FSSAI license, and ROC compliance services across India. Starting ₹499."
        />
        <meta
          name="keywords"
          content="GST registration India, income tax return filing, company registration India, GST return filing, TDS return filing, tax audit India, ITR filing salaried, GST notice reply, 12A 80G registration, FSSAI license, Taxvio"
        />
        <link rel="canonical" href="https://www.taxvio.in" />
        <meta
          property="og:title"
          content="Taxvio | GST, Income Tax & Company Registration Services"
        />
        <meta
          property="og:description"
          content="End-to-end GST, income tax, company registration and compliance services for businesses across India. Starting ₹499."
        />
        <meta property="og:url" content="https://www.taxvio.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.taxvio.in/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Taxvio | GST, Income Tax & Company Registration"
        />
        <meta
          name="twitter:description"
          content="Professional GST, ITR, TDS, and ROC compliance services pan-India. Starting ₹499."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 font-sans">
        {/* ════════════ HERO ════════════ */}
        <section
          className="relative overflow-hidden bg-[#00416a] text-white min-h-[90vh] flex items-center"
          aria-label="Taxvio — GST, Income Tax & Company Registration Services"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          {/* Deep gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />

          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

          <div className="relative w-full mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT — text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="z-10"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                Trusted Online Tax &amp; Compliance Consultancy — India
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-white"
                itemProp="name"
              >
                GST, Income Tax &amp; Company Registration Services
                <span className="block mt-3 text-sky-300">
                  for Businesses Across India
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-white/80 text-base md:text-lg leading-relaxed"
                itemProp="description"
              >
                Taxvio provides complete online{" "}
                <strong className="text-white">GST registration</strong>,{" "}
                <strong className="text-white">income tax return filing</strong>
                , company registration, TDS/TCS returns, tax audit under Section
                44AB, FSSAI license, and ROC compliance — serving individuals,
                startups, and businesses across India. Starting at just ₹499.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 w-full max-w-sm"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                >
                  Free Consultation
                  <ArrowRight size={15} className="shrink-0" />
                </Link>
                <Link
                  href="/serviceslist"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/60 bg-transparent px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                >
                  View All Services
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 grid grid-cols-2 gap-3"
              >
                {[
                  { label: "GST Registration", price: "from ₹999" },
                  { label: "ITR Filing", price: "from ₹499" },
                  { label: "Company Formation", price: "from ₹6,999" },
                  { label: "TDS Returns", price: "from ₹999" },
                ].map(({ label, price }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-lg px-3 py-2"
                  >
                    <CheckCircle
                      size={14}
                      className="text-green-400 shrink-0"
                    />
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">
                        {label}
                      </p>
                      <p className="text-white/50 text-[11px]">{price}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              className="hidden md:flex items-center justify-center z-10"
            >
              <div className="relative w-full max-w-lg">
                {/* Glow behind image */}
                <div className="absolute inset-0 rounded-3xl bg-sky-400/10 blur-2xl scale-110" />
                <Image
                  src={bg1}
                  alt="Online GST registration, income tax filing, and company registration services in India — Taxvio"
                  priority
                  className="relative w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════ STATS ════════════ */}
        <section
          className="bg-[#00416a] text-white py-12"
          ref={statsRef}
          aria-label="Taxvio at a glance"
        >
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                initial="hidden"
                animate={statsInView ? "visible" : "hidden"}
                variants={scaleIn}
                className="flex flex-col items-center gap-2"
              >
                <Icon size={28} className="text-[#7dd3fc]" />
                <p className="text-2xl md:text-3xl font-extrabold">{value}</p>
                <p className="text-sm text-white/70">{label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════ ABOUT ════════════ */}
        <motion.section
          className="py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          aria-label="About Taxvio — Online Tax Consultancy"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={scaleIn}>
              <Image
                src={bg1}
                alt="Taxvio team — expert CA and legal professionals providing online tax and compliance services across India"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div variants={stagger}>
              <motion.span
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full"
              >
                About Taxvio
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4 leading-tight"
                itemProp="name"
              >
                India's Trusted Online Tax &amp; Compliance Partner
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-5 space-y-4 text-gray-600 leading-relaxed"
                itemProp="description"
              >
                <p>
                  <strong className="text-gray-800">Taxvio</strong> is an online
                  tax and legal consultancy headquartered in Khatauli,
                  Muzaffarnagar, Uttar Pradesh, providing professional{" "}
                  <strong>GST registration</strong>,{" "}
                  <strong>income tax return filing</strong>,{" "}
                  <strong>TDS/TCS return filing</strong>,{" "}
                  <strong>company registration</strong>, and{" "}
                  <strong>FSSAI license</strong> services to businesses and
                  individuals across India.
                </p>
                <p>
                  Our CA-led expert team handles everything — from{" "}
                  <strong>GST return filing</strong> and{" "}
                  <strong>tax audit under Section 44AB</strong> to{" "}
                  <strong>income tax scrutiny notice replies</strong>,{" "}
                  <strong>Section 12A/80G trust registration</strong>, and{" "}
                  <strong>ROC annual compliance</strong> for private limited
                  companies and LLPs. Every service is delivered 100% online —
                  no office visit required.
                </p>
                <p>
                  Whether you're a first-time entrepreneur needing{" "}
                  <strong>GST registration</strong>, a salaried employee filing{" "}
                  <strong>ITR with Form 16</strong>, or an NGO applying for{" "}
                  <strong>80G approval</strong>, Taxvio provides accurate,
                  affordable, and timely compliance support — with dedicated CA
                  assistance and WhatsApp-based communication throughout.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#002b45] transition"
                >
                  Talk to Our Expert <ArrowRight size={15} />
                </Link>
                <Link
                  href="/serviceslist"
                  className="inline-flex items-center gap-2 border border-[#00416a] text-[#00416a] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ════════════ SERVICE CATEGORIES ════════════ */}
        <section
          className="py-20 bg-gray-50"
          aria-label="GST, Income Tax, Company Registration and FSSAI Services"
        >
          <motion.div
            className="max-w-6xl mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4">
                Complete GST, Income Tax &amp; Compliance Services
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Taxvio offers 40+ professional tax and compliance services for
                individuals, startups, SMEs, and large enterprises — all
                delivered online across India.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES_HIGHLIGHT.map(
                ({ icon: Icon, title, desc, href, count, color }) => (
                  <motion.div key={title} variants={fadeUp}>
                    <Link
                      href={href}
                      className="group flex gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div
                        className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}
                      >
                        <Icon size={26} className="text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#00416a] transition">
                            {title}
                          </h3>
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                            {count}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {desc}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-3 text-[#00416a] text-sm font-semibold group-hover:gap-2 transition-all">
                          View All Services <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </section>

        {/* ════════════ GST SERVICES LIST ════════════ */}
        <section
          className="py-20 bg-white"
          aria-label="GST Services India — Full List"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  GST
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  All GST Services — Registration, Returns, Refunds &amp; More
                </h2>
                <p className="text-gray-600 mt-2 max-w-3xl">
                  From GST registration and monthly GSTR-3B filing to annual
                  GSTR-9, export LUT, e-invoicing, and GST notice replies —
                  Taxvio handles every aspect of GST compliance for businesses
                  of all sizes across India.
                </p>
              </motion.div>
              <motion.div
                variants={stagger}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
              >
                {GST_SERVICES.map(({ name, href, desc }) => (
                  <motion.div key={name} variants={fadeUp}>
                    <Link
                      href={href}
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-[#00416a] hover:bg-blue-50 transition group"
                    >
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-[#00416a] text-sm">
                          {name}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-1 transition-all"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════ INCOME TAX SERVICES LIST ════════════ */}
        <section
          className="py-20 bg-gray-50"
          aria-label="Income Tax Services India — Full List"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Income Tax
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  All Income Tax Services — ITR, TDS, Audit &amp; Compliance
                </h2>
                <p className="text-gray-600 mt-2 max-w-3xl">
                  Taxvio's income tax services cover ITR filing for individuals
                  and businesses, TDS/TCS returns, income tax audit under
                  Section 44AB, scrutiny notice handling, trust registrations
                  (12A/80G), and Form 15G/15H for all eligible taxpayers across
                  India.
                </p>
              </motion.div>
              <motion.div
                variants={stagger}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
              >
                {ITR_SERVICES.map(({ name, href, desc }) => (
                  <motion.div key={name} variants={fadeUp}>
                    <Link
                      href={href}
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-[#00416a] hover:bg-blue-50 transition group"
                    >
                      <div>
                        <p className="font-semibold text-gray-800 group-hover:text-[#00416a] text-sm">
                          {name}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-1 transition-all"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════ WHY TAXVIO ════════════ */}
        <motion.section
          className="py-20 bg-[#f2f7fb]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          aria-label="Why Choose Taxvio for GST and Income Tax Services"
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                Why Taxvio
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00416a] mt-4">
                Why 4,800+ Businesses Trust Taxvio for Tax &amp; Compliance
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                From first-time GST registrations to complex tax audit and
                scrutiny representation, Taxvio delivers expert, affordable, and
                100% online compliance services that give businesses peace of
                mind.
              </p>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {WHY_TAXVIO.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-500 shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.section>

        {/* ════════════ FAQ ════════════ */}
        <section
          className="py-20 bg-white"
          aria-label="Frequently Asked Questions — GST and Income Tax Services"
        >
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  FAQ
                </span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 mt-3">
                  Answers to the most common questions about Taxvio's GST,
                  Income Tax, and Company Registration services.
                </p>
              </motion.div>
              <motion.div
                variants={stagger}
                className="space-y-3"
                itemScope
                itemType="https://schema.org/FAQPage"
              >
                {FAQS.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="border border-gray-100 rounded-xl overflow-hidden"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <button
                      className="w-full text-left p-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      aria-expanded={faqOpen === i}
                    >
                      <span itemProp="name">{f.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#00416a] transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {faqOpen === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          itemScope
                          itemType="https://schema.org/Answer"
                        >
                          <p
                            className="px-5 pb-5 text-gray-600 leading-relaxed text-sm"
                            itemProp="text"
                          >
                            {f.a}
                          </p>
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
        <section
          className="py-20 bg-gradient-to-r from-[#00416a] to-[#002b45]"
          aria-label="Contact Taxvio — Free Tax Consultation"
        >
          <motion.div
            className="max-w-4xl mx-auto px-6 text-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm mb-6"
            >
              <Users size={14} /> 4,800+ Businesses Served Across India
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-extrabold leading-tight"
            >
              Talk to Our GST &amp; Income Tax Experts — Free Consultation
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-white/75 max-w-2xl mx-auto leading-relaxed"
            >
              Get professional <strong>GST registration</strong>,{" "}
              <strong>income tax return filing</strong>,{" "}
              <strong>company registration</strong>, and{" "}
              <strong>TDS compliance</strong> support anywhere in India. Our
              CA-led team is available on call and WhatsApp.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
  <button
    onClick={handleCall}
    aria-label="Call Taxvio now"
    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-[0.97] transition-all duration-200 min-h-[52px]"
  >
    <Phone size={16} className="shrink-0" />
    Call Now
  </button>
  <button
    onClick={handleWhatsApp}
    aria-label="WhatsApp Taxvio"
    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/60 bg-transparent px-8 py-4 text-sm font-bold text-white hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all duration-200 min-h-[52px]"
  >
    <MessageCircle size={16} className="shrink-0" />
    WhatsApp Us
  </button>
  <Link
    href="/contact"
    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/15 border border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/25 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
  >
    Free Consultation
    <ArrowRight size={15} className="shrink-0" />
  </Link>
</motion.div>
            <motion.p variants={fadeUp} className="mt-8 text-white/50 text-sm">
              Serving Khatauli, Muzaffarnagar, Meerut, Delhi NCR and all of
              India online
            </motion.p>
          </motion.div>
        </section>
      </main>
    </>
  );
}
