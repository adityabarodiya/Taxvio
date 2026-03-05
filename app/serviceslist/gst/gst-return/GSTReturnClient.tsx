"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle, Calculator,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST Return Filing.")}`;
const DARK = { background: "linear-gradient(135deg,#00416a 0%,#003257 55%,#001e36 100%)" };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const RETURNS = [
  {
    name: "GSTR-1",
    badge: "Monthly / Quarterly",
    badgeColor: "#2563eb",
    icon: "📤",
    desc: "Outward Supplies Return — reports all B2B and B2C sales, debit/credit notes, and exports. Auto-populates buyers' GSTR-2B for ITC claims.",
    due: "11th of next month (monthly) | 13th after quarter (QRMP)",
    who: "All regular taxpayers",
    lateFee: "₹50/day (₹20 nil return)",
  },
  {
    name: "GSTR-3B",
    badge: "Monthly / Quarterly",
    badgeColor: "#2563eb",
    icon: "📊",
    desc: "Summary self-declaration return — declares aggregate outward supplies, ITC claimed, and net GST liability. Tax payment is made along with GSTR-3B filing.",
    due: "20th of next month (monthly) | 22nd–24th after quarter (QRMP)",
    who: "All regular taxpayers",
    lateFee: "₹50/day + 18% p.a. interest on unpaid tax",
  },
  {
    name: "GSTR-9",
    badge: "Annual",
    badgeColor: "#dc2626",
    icon: "📁",
    desc: "Annual Return — reconciles all monthly/quarterly GSTR-1 and GSTR-3B data filed during the financial year. Mandatory for turnover above ₹2 crore.",
    due: "31st December following the financial year",
    who: "Regular taxpayers with turnover > ₹2 crore",
    lateFee: "₹200/day (max 0.25% of turnover)",
  },
  {
    name: "GSTR-9C",
    badge: "Annual Audit",
    badgeColor: "#7c3aed",
    icon: "📑",
    desc: "Reconciliation Statement — CA-certified statement reconciling audited financial accounts with GSTR-9. Mandatory for taxpayers with aggregate turnover above ₹5 crore.",
    due: "31st December following the financial year",
    who: "Taxpayers with turnover > ₹5 crore",
    lateFee: "Same as GSTR-9 — ₹200/day",
  },
  {
    name: "GSTR-4",
    badge: "Composition Annual",
    badgeColor: "#059669",
    icon: "🧾",
    desc: "Annual return for Composition Scheme taxpayers — summarises annual turnover, tax paid (CMP-08 challans), and inward supplies. Simple one-page form.",
    due: "30th April following the financial year",
    who: "Composition scheme taxpayers",
    lateFee: "₹50/day (max ₹2,000)",
  },
  {
    name: "CMP-08",
    badge: "Quarterly (Composition)",
    badgeColor: "#059669",
    icon: "💳",
    desc: "Quarterly challan-cum-statement for Composition taxpayers to declare self-assessed tax liability and make payment. Not a full return — just a tax payment statement.",
    due: "18th of month following quarter",
    who: "Composition scheme taxpayers",
    lateFee: "₹50/day (max ₹2,000)",
  },
];

const DUE_DATES = [
  { form: "GSTR-1 (Monthly)",   who: "Regular taxpayers — monthly",          due: "11th of next month",              fee: "₹50/day (max ₹5,000)" },
  { form: "GSTR-1 (QRMP)",      who: "Taxpayers using QRMP scheme",          due: "13th after quarter end",          fee: "₹50/day (max ₹5,000)" },
  { form: "GSTR-3B (Monthly)",  who: "Regular taxpayers — monthly",          due: "20th of next month",              fee: "₹50/day + 18% p.a. interest" },
  { form: "GSTR-3B (QRMP)",     who: "QRMP — staggered by state",            due: "22nd / 24th after quarter end",   fee: "₹50/day + 18% p.a. interest" },
  { form: "CMP-08",             who: "Composition taxpayers",                due: "18th after each quarter",         fee: "₹50/day (max ₹2,000)" },
  { form: "GSTR-4 (Annual)",    who: "Composition taxpayers",                due: "30th April (next FY)",            fee: "₹50/day (max ₹2,000)" },
  { form: "GSTR-9 (Annual)",    who: "Turnover > ₹2 crore",                 due: "31st December (next FY)",         fee: "₹200/day (max 0.25% of TO)" },
  { form: "GSTR-9C (Audit)",    who: "Turnover > ₹5 crore",                 due: "31st December (next FY)",         fee: "₹200/day (max 0.25% of TO)" },
  { form: "GSTR-10 (Final)",    who: "Cancelled registration",               due: "3 months from cancellation",     fee: "₹200/day (max ₹10,000)" },
];

const STEPS = [
  { n: "01", title: "Share Sales & Purchase Data",    desc: "Send your sales invoices, purchase bills, and bank statements for the month via WhatsApp or email — or give access to Tally/Zoho." },
  { n: "02", title: "Data Reconciliation",            desc: "Our CA team reconciles your sales data with GSTR-2B to verify ITC eligibility, identify mismatches, and ensure clean data before filing." },
  { n: "03", title: "ITC Optimisation",               desc: "We review all eligible input tax credits — purchases, expenses, capital goods — and maximise your ITC claim within Rule 36(4) limits." },
  { n: "04", title: "GSTR-1 Preparation & Filing",   desc: "All invoices uploaded and GSTR-1 filed on the GST portal by the 11th (or 13th for QRMP), ensuring your buyers' GSTR-2B is populated correctly." },
  { n: "05", title: "GSTR-3B Preparation & Filing",  desc: "Net GST liability computed after ITC set-off. GSTR-3B filed and tax paid via Electronic Cash/Credit Ledger by the 20th of the following month." },
  { n: "06", title: "Confirmation Shared",            desc: "Filing acknowledgement (ARN) shared with you on WhatsApp. Monthly compliance dashboard updated — you're done until next month." },
];

const FEES = [
  {
    plan: "Basic Return Filing", price: "₹499/month", highlight: false,
    items: ["GSTR-1 monthly filing", "GSTR-3B monthly filing", "Up to 50 invoices/month", "ARN acknowledgement delivery", "Email/WhatsApp support"],
  },
  {
    plan: "Professional Package", price: "₹999/month", highlight: true,
    items: ["GSTR-1 + GSTR-3B filing", "Up to 200 invoices/month", "GSTR-2B ITC reconciliation", "Supplier mismatch follow-up", "Priority WhatsApp support"],
  },
  {
    plan: "Annual Compliance Bundle", price: "₹8,999/yr", highlight: false,
    items: ["12 months GSTR-1 + GSTR-3B", "GSTR-9 annual return", "GSTR-2B reconciliation", "QRMP scheme management", "Nil return filing included"],
  },
];

const FAQS = [
  {
    q: "What is the late fee for not filing GSTR-3B on time?",
    a: "The late fee for GSTR-3B is ₹50 per day (₹25 under CGST + ₹25 under SGST) for returns where there is tax liability. For nil returns (no sales in the period), the late fee is ₹20 per day (₹10 CGST + ₹10 SGST). The maximum late fee is capped at ₹5,000 for most categories. In addition to late fees, interest at 18% per annum is charged on any unpaid tax liability from the original due date until the date of payment.",
  },
  {
    q: "What is the difference between GSTR-1 and GSTR-3B?",
    a: "GSTR-1 is the outward supply return where a taxpayer reports all sales invoices (B2B, B2C, exports, credit notes, debit notes) in detail. It is a data statement, not a payment return — no tax is paid with GSTR-1. GSTR-3B is the summary self-declaration return where the taxpayer declares aggregate outward supplies, total ITC claimed, and net GST payable, and makes the actual tax payment. GSTR-1 data auto-populates the buyer's GSTR-2B for ITC eligibility, while GSTR-3B data is the basis for the tax department's demand calculations. Both must be filed every month for most regular taxpayers.",
  },
  {
    q: "What is the QRMP scheme and who should opt for it?",
    a: "The QRMP (Quarterly Return Monthly Payment) scheme is designed for taxpayers with aggregate annual turnover up to ₹5 crore. Under QRMP, the taxpayer files GSTR-1 and GSTR-3B quarterly (instead of monthly), but still makes monthly tax payments via a challan (PMT-06) in months 1 and 2 of each quarter using either a fixed sum method (35% of previous quarter's tax) or a self-assessed method. In months 1 and 2, taxpayers can also use the IFF (Invoice Filing Facility) to upload selective B2B invoices so buyers can claim ITC in time. QRMP significantly reduces filing frequency (from 24 returns per year to 8) while keeping tax payments current.",
  },
  {
    q: "What is GSTR-2B and why does it matter for ITC claims?",
    a: "GSTR-2B is an auto-generated, static Input Tax Credit statement generated on the 14th of every month. It reflects all ITC available to a taxpayer based on GSTR-1 and GSTR-5/6 filings by their suppliers during the relevant period. Under Rule 36(4) of the CGST Rules, a taxpayer can claim ITC in GSTR-3B only up to 105% of the ITC reflected in GSTR-2B — meaning any ITC from suppliers who have not filed their GSTR-1 is restricted. If your supplier does not file GSTR-1, your ITC entitlement is blocked until they file. This makes supplier compliance monitoring — which Taxvio provides — a critical part of monthly GST return management.",
  },
  {
    q: "Is GSTR-9 (Annual Return) mandatory for all GST-registered businesses?",
    a: "GSTR-9 (Annual Return) is mandatory for regular taxpayers with aggregate annual turnover exceeding ₹2 crore. For taxpayers with turnover up to ₹2 crore, GSTR-9 filing is optional (exemption granted by CBIC notification). Businesses with turnover above ₹5 crore must also file GSTR-9C — a reconciliation statement audited and certified by a Chartered Accountant — along with GSTR-9. Both are due by 31 December following the financial year. The annual return reconciles all GST data reported across GSTR-1 and GSTR-3B during the year and is a key document for departmental scrutiny and audits.",
  },
  {
    q: "What happens if GSTR-1 is filed but GSTR-3B is not filed?",
    a: "GSTR-1 and GSTR-3B are two independent mandatory returns. Filing GSTR-1 alone does not constitute full compliance — GSTR-3B must also be filed and tax must be paid. If GSTR-3B is not filed, the tax department can initiate scrutiny proceedings under Section 61 of the CGST Act based on the data in GSTR-1. Additionally, failure to pay tax shown in GSTR-1 through GSTR-3B attracts interest at 18% per annum and can lead to demand notices under Section 73 or Section 74. The e-way bill generation facility may also be blocked if returns are overdue.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Return Filing India",
  serviceType: "GST Return Filing",
  description:
    "Professional GST return filing services — GSTR-1, GSTR-3B, GSTR-9, GSTR-9C, QRMP management, ITC reconciliation. Starting ₹499/month. CA-assisted, pan India.",
  provider: {
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: "+918937980366",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  areaServed: "India",
  offers: {
    "@type": "Offer",
    price: "499",
    priceCurrency: "INR",
    description: "Monthly GST return filing (GSTR-1 + GSTR-3B) starting ₹499/month.",
  },
};

export default function GSTReturnClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [delayDays, setDelayDays] = useState("");
  const [returnType, setReturnType] = useState("regular");

  const days = parseInt(delayDays) || 0;
  const ratePerDay = returnType === "nil" ? 20 : 50;
  const maxFee = returnType === "annual" ? 20000 : 5000;
  const lateFee = Math.min(days * ratePerDay, maxFee);
  const interest18 = returnType !== "nil" && days > 0
    ? `+ 18% p.a. interest on unpaid tax (approx ₹${Math.round((days / 365) * 0.18 * 10000)} per ₹10,000 of tax)`
    : "";

  return (
    <>
      <Script id="gst-return-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-return-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GST Return Filing Services India" itemScope itemType="https://schema.org/Service">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "26px 26px",
          }} />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.1) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
                <li><Link href="/serviceslist/gst" className="hover:text-white transition">GST Services</Link></li>
                <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
                <li className="text-white font-medium">GST Return Filing</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    GSTR-1 &amp; GSTR-3B Filed Before Due Date — Every Month
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GST Return Filing
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      GSTR-1, GSTR-3B &amp; Annual Returns
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    Accurate, on-time GST return filing for traders, manufacturers, service providers,
                    e-commerce sellers, and exporters. ITC reconciliation, QRMP management, and GSTR-9
                    annual returns. CA-assisted, starting at{" "}
                    <strong className="text-white">₹499/month</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> File Returns on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ ITC Reconciliation", "✅ QRMP Managed", "✅ Nil Returns", "✅ GSTR-9 Included"].map(tx => (
                      <span key={tx} className="text-sm rounded-full px-3 py-1"
                        style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                        {tx}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Right card */}
                <motion.div variants={scaleIn}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="px-6 py-4"
                      style={{ background: "rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <p className="font-bold text-white text-lg">GST Return Filing — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon: "₹",  label: "Starting Fee",        val: "₹499/month" },
                        { icon: "📅", label: "GSTR-1 Due Date",     val: "11th of next month" },
                        { icon: "📅", label: "GSTR-3B Due Date",    val: "20th of next month" },
                        { icon: "📅", label: "GSTR-9 Due Date",     val: "31st December" },
                        { icon: "⚠️", label: "Late Fee",             val: "₹50/day + 18% p.a." },
                        { icon: "🗺", label: "Coverage",             val: "Pan India — All States" },
                      ].map(({ icon, label, val }) => (
                        <div key={label} className="flex justify-between items-center text-sm">
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>{icon} {label}</span>
                          <span className="font-bold text-white">{val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 pb-6">
                      <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition hover:scale-105">
                        Start Filing — ₹499/month →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ INTERNAL LINK ═══════════════════════════════════════════════ */}
        <div className="bg-blue-50 border-y border-blue-100 py-4">
          <p className="text-center text-sm text-gray-700 max-w-3xl mx-auto px-6">
            Not registered under GST yet?{" "}
            <Link href="/serviceslist/gst/gst-registration"
              className="text-[#00416a] font-bold underline underline-offset-2 hover:text-[#002b45]">
              Apply for GST Registration here
            </Link>{" "}
            before filing your returns — registration is mandatory before filing can begin.
          </p>
        </div>

        {/* ══ SEO BLOCK 1 — What is GST Return Filing ══════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is GST Return Filing">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GST Return Filing and Who Must File?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GST return filing</strong> is the process by which every GST-registered taxpayer
                  periodically reports their business transactions — outward supplies (sales), inward supplies
                  (purchases), Input Tax Credit (ITC) claimed, and net tax liability — to the Government of India
                  through the GST Common Portal (gst.gov.in). Returns are statutory filings mandated under the
                  <strong> Central Goods and Services Tax Act, 2017</strong>, and must be filed even if there
                  are no transactions in a given period (nil returns).
                </p>
                <p>
                  Every business or individual holding a valid GSTIN is required to file GST returns. The
                  specific returns to be filed and their frequency depend on the taxpayer&apos;s annual aggregate
                  turnover, type of registration (regular or composition), and nature of supplies. For most
                  regular taxpayers — traders, manufacturers, service providers, exporters, and e-commerce
                  sellers — the primary monthly compliance consists of <strong>GSTR-1</strong> (outward supply
                  return, due 11th) and <strong>GSTR-3B</strong> (summary return with tax payment, due 20th).
                  Together, these two returns form the core of monthly GST compliance.
                </p>
                <p>
                  Filing GST returns on time is not merely a legal formality — it has direct and significant
                  financial consequences. <strong>GSTR-1 data auto-populates your buyers&apos; GSTR-2B</strong>,
                  which is the basis on which they can claim Input Tax Credit on purchases made from you. If you
                  fail to file GSTR-1 on time, your buyers cannot claim ITC on your invoices, which can damage
                  business relationships and result in your buyers switching to GST-compliant suppliers. Conversely,
                  your own ITC claims are dependent on your suppliers filing their GSTR-1 — creating a
                  compliance chain where every link matters.
                </p>
                <p>
                  Late or non-filing of returns attracts <strong>late fees of ₹50 per day</strong> (₹20 for nil
                  returns) plus <strong>interest at 18% per annum</strong> on unpaid tax liability. Persistent
                  non-filing leads to blocking of e-way bill generation (which halts goods movement),
                  suspension of GSTIN, cancellation of registration, and issuance of demand notices under
                  Sections 73 and 74 of the CGST Act.
                </p>
                <p>
                  Beyond avoidance of penalties, timely and accurate GST return filing is essential for accessing
                  business credit. Banks and NBFCs increasingly use GST return data (particularly GSTR-3B and
                  GSTR-1 filings over 6–12 months) as a proxy for business turnover when evaluating working
                  capital loans, business loans, and MSME credit facilities. Consistent, timely filing builds a
                  strong GST compliance track record that directly supports your credit profile.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ RETURNS GRID ════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Types of GST Returns">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Return Types
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Types of GST Returns — GSTR-1, GSTR-3B, GSTR-9 &amp; More
                </h2>
                <p className="text-gray-600 mt-2 text-sm max-w-2xl mx-auto">
                  Each GST return serves a distinct purpose. Filing the right returns on time protects
                  your ITC, avoids penalties, and keeps your GSTIN active.
                </p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {RETURNS.map(({ name, badge, badgeColor, icon, desc, due, who, lateFee: lf }) => (
                  <motion.div key={name} variants={scaleIn}
                    className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{icon}</span>
                      <span className="text-xs font-bold rounded-full px-2 py-1 text-white"
                        style={{ background: badgeColor }}>
                        {badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-[#00416a] mb-2">{name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex gap-2">
                        <span className="text-gray-400 shrink-0">📅 Due:</span>
                        <span className="text-gray-700 font-medium">{due}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-gray-400 shrink-0">👤 Who:</span>
                        <span className="text-gray-700 font-medium">{who}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-gray-400 shrink-0">⚠️ Late fee:</span>
                        <span className="text-red-600 font-semibold">{lf}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ DUE DATE TABLE ══════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="GST Return Due Dates 2025">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Compliance Calendar
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST Return Due Dates 2025 — Complete Schedule
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm" aria-label="GST return due dates table">
                  <thead>
                    <tr style={{ background: "#00416a" }}>
                      <th className="text-left px-5 py-4 text-white font-semibold">Return / Form</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Who Files</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Due Date</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Late Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DUE_DATES.map(({ form, who, due, fee }, i) => (
                      <tr key={form} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3.5 font-bold text-[#00416a]">{form}</td>
                        <td className="px-5 py-3.5 text-gray-600">{who}</td>
                        <td className="px-5 py-3.5 font-semibold text-gray-800">{due}</td>
                        <td className="px-5 py-3.5 text-red-600 font-semibold">{fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-gray-400 px-5 py-3">
                  * Due dates are subject to extension notifications by CBIC. Always verify on gst.gov.in.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ LATE FEE CALCULATOR ═════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="GST Late Fee Calculator">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Free Tool
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST Late Fee Calculator — Estimate Your Penalty Instantly
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  GST late fee is charged at ₹50/day for regular returns and ₹20/day for nil returns.
                  Interest at 18% p.a. applies additionally on any unpaid tax.
                </p>
              </motion.div>

              <motion.div variants={scaleIn}
                className="bg-white border border-gray-100 rounded-2xl shadow-md p-8 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#00416a" }}>
                    <Calculator size={18} className="text-white" />
                  </div>
                  <p className="font-extrabold text-[#00416a] text-lg">GST Late Fee Calculator</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Return Type
                    </label>
                    <select value={returnType} onChange={e => setReturnType(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a] bg-white text-gray-700">
                      <option value="regular">Regular Return (Tax Liability)</option>
                      <option value="nil">Nil Return (No Sales)</option>
                      <option value="annual">Annual Return (GSTR-9)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Days of Delay
                    </label>
                    <input type="number" value={delayDays} onChange={e => setDelayDays(e.target.value)}
                      placeholder="e.g. 15"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a] placeholder:text-gray-400"
                      min="0" />
                  </div>
                </div>

                {delayDays && days > 0 && (
                  <div className="rounded-xl p-5 bg-red-50 border border-red-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-bold text-red-700 mb-2">Estimated Penalty</p>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Late fee ({days} days × ₹{ratePerDay}/day)</span>
                            <span className="font-bold text-red-600">₹{(days * ratePerDay).toLocaleString()}</span>
                          </div>
                          {days * ratePerDay > maxFee && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Capped at maximum</span>
                              <span className="font-bold text-red-600">₹{maxFee.toLocaleString()}</span>
                            </div>
                          )}
                          <div className="border-t border-red-200 pt-2 flex justify-between">
                            <span className="font-bold text-gray-700">Total Late Fee Payable</span>
                            <span className="font-extrabold text-red-700 text-lg">₹{lateFee.toLocaleString()}</span>
                          </div>
                          {interest18 && (
                            <p className="text-xs text-orange-600 mt-2">⚠️ {interest18}</p>
                          )}
                        </div>
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-4 bg-[#00416a] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#002b45] transition">
                          File Now to Stop Late Fees <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {(!delayDays || days === 0) && (
                  <div className="rounded-xl p-4 bg-green-50 border border-green-200 flex items-center gap-3">
                    <CheckCircle size={18} className="text-green-500 shrink-0" />
                    <p className="text-green-700 text-sm font-medium">
                      Enter delay days above to calculate your estimated late fee instantly.
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — ITC & GSTR-2B ════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="ITC Reconciliation and GSTR-2B">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                ITC Reconciliation, GSTR-2B &amp; Why It Matters for Your Business
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  One of the most financially significant — and frequently mishandled — aspects of GST return
                  filing is <strong>Input Tax Credit (ITC) reconciliation</strong>. ITC is the mechanism that
                  allows a GST-registered business to reduce its output tax liability by the GST already paid
                  on its inputs (purchases, services, freight, rent, professional fees, and other business
                  expenses). For most businesses, ITC represents a significant reduction in the effective
                  tax burden — often 30–70% of gross output tax depending on the industry and supply chain.
                </p>
                <p>
                  Under the GST system, a taxpayer&apos;s ITC entitlement is determined by
                  <strong> GSTR-2B</strong> — an auto-generated, static monthly statement available on the
                  GST portal by the 14th of each month. GSTR-2B aggregates all ITC from your suppliers&apos;
                  GSTR-1 filings, GSTR-5 (non-resident taxpayers), GSTR-6 (Input Service Distributors), and
                  GSTR-8 (e-commerce operators). Critically, under <strong>Rule 36(4) of the CGST Rules</strong>,
                  ITC claimed in GSTR-3B cannot exceed 105% of the ITC reflected in GSTR-2B. Any ITC from
                  suppliers who have not filed their GSTR-1 is fully blocked until they do.
                </p>
                <p>
                  This creates a practical challenge: if a supplier delays or skips filing GSTR-1, your ITC
                  on their invoices is blocked, increasing your net tax payable for the month. Over the course
                  of a financial year, unclaimed or blocked ITC can represent lakhs of rupees in additional
                  cash outflow. Taxvio&apos;s return filing service includes monthly <strong>GSTR-2B vs books
                  reconciliation</strong> — we identify every mismatch, follow up with non-compliant suppliers,
                  and ensure your ITC claims are maximised within permitted limits.
                </p>
                <p>
                  Beyond monthly ITC claims, accurate reconciliation is essential for the annual GSTR-9 return.
                  The GSTR-9 requires taxpayers to reconcile all ITC claimed in GSTR-3B filings during the year
                  with GSTR-2A/2B data, declare any excess ITC claimed (which must be reversed with interest),
                  and report unclaimed eligible ITC. Errors in annual reconciliation attract scrutiny under
                  Section 61 of the CGST Act and can result in demand notices under Sections 73 and 74.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PROCESS ══════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="GST Return Filing Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Our GST Return Filing Process — 6 Steps Every Month
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  100% online. No office visit. We handle data, reconciliation, filing, and confirmation.
                </p>
              </motion.div>
              <div className="space-y-5">
                {STEPS.map(({ n, title, desc }) => (
                  <motion.div key={n} variants={fadeUp} className="flex gap-5 items-start">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm text-white shrink-0 shadow-md"
                      style={{ background: "#00416a" }}>
                      {n}
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5">
                      <p className="font-bold text-gray-800">{title}</p>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 3 — QRMP, e-way bills, e-invoicing ════════════════ */}
        <section className="py-20 bg-white" aria-label="QRMP Scheme and Advanced GST Compliance">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                QRMP Scheme, E-Way Bills &amp; E-Invoicing — Advanced GST Compliance
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For businesses with aggregate annual turnover up to ₹5 crore, the <strong>QRMP (Quarterly
                  Return Monthly Payment) scheme</strong> — introduced by the CBIC in January 2021 — offers
                  a significantly reduced compliance burden. Under QRMP, GSTR-1 and GSTR-3B are filed
                  quarterly (just 4 times per year for each return, compared to 12 times under the monthly
                  scheme). However, tax must still be paid monthly — either by a fixed sum method (35% of
                  the tax paid in the same quarter of the previous year) or a self-assessment method based
                  on actual sales for the month. The quarterly GSTR-3B replaces the monthly filing and is
                  due on the 22nd (for states in Category 1) or 24th (for Category 2 states) of the month
                  following the quarter end.
                </p>
                <p>
                  The <strong>Invoice Filing Facility (IFF)</strong> — available in months 1 and 2 of each
                  quarter for QRMP filers — allows selective upload of B2B invoices to ensure that buyers
                  receive ITC credit in GSTR-2B without waiting for the quarterly GSTR-1. This is critical
                  for maintaining buyer relationships with GST-registered customers who claim ITC monthly.
                  Taxvio manages IFF uploads as part of the QRMP compliance service at no additional charge.
                </p>
                <p>
                  <strong>E-way bills</strong> (generated on the e-way bill portal for consignments of goods
                  above ₹50,000 in value) are directly linked to GST compliance. Under Rule 138E of the CGST
                  Rules, e-way bill generation is blocked for taxpayers who have not filed GSTR-3B for two or
                  more consecutive months (or one quarter for QRMP filers). This effectively halts all goods
                  movement for non-compliant businesses — a significant operational disruption. Keeping
                  returns filed on time is therefore not just a compliance matter but a business continuity
                  requirement for any business that moves goods.
                </p>
                <p>
                  <strong>E-invoicing</strong> became mandatory for businesses with aggregate turnover above
                  ₹5 crore from 1 August 2023 (as per CBIC Notification No. 10/2023). Under the e-invoicing
                  system, every B2B invoice must be reported to the <strong>Invoice Registration Portal
                  (IRP)</strong> in real time — before being issued to the buyer — to obtain a unique
                  <strong> IRN (Invoice Reference Number)</strong> and QR code. The IRP pushes the invoice
                  data directly to the taxpayer&apos;s GSTR-1, eliminating manual data entry for e-invoiced
                  transactions. Taxvio provides IRP API integration with Tally, Zoho Books, Busy, and other
                  accounting software as part of the e-invoicing setup service.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PRICING ══════════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#00416a" }}
          aria-label="GST Return Filing Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                GST Return Filing Fee — No Hidden Charges
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Flat monthly fee. No per-invoice charges. ITC reconciliation included from Professional plan.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {FEES.map(({ plan, price, highlight, items }) => (
                <div key={plan} className="rounded-2xl p-6 flex flex-col"
                  style={{
                    background: highlight ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
                    border: highlight ? "2px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.15)",
                  }}>
                  {highlight && (
                    <span className="text-[10px] font-bold text-[#00416a] bg-white rounded-full px-3 py-0.5 self-start mb-3 uppercase tracking-wide">
                      Most Popular
                    </span>
                  )}
                  <p className="text-white font-bold text-base mb-1">{plan}</p>
                  <p className="text-3xl font-extrabold text-white mb-4">{price}</p>
                  <ul className="space-y-2 flex-1">
                    {items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm"
                        style={{ color: "rgba(255,255,255,0.82)" }}>
                        <CheckCircle size={14} className="text-green-400 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="mt-6 block text-center py-3 rounded-xl font-bold text-sm transition hover:scale-105"
                    style={{
                      background: highlight ? "#fff" : "rgba(255,255,255,0.15)",
                      color: highlight ? "#00416a" : "#fff",
                    }}>
                    Get Started →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="GST Return Filing FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  FAQ
                </span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GST Return Filing
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                  Have more questions? WhatsApp us — we reply within 15 minutes.
                </p>
              </motion.div>
              <motion.div variants={stagger} className="space-y-3">
                {FAQS.map((f, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
                    itemScope itemType="https://schema.org/Question">
                    <button
                      className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      aria-expanded={faqOpen === i}>
                      <span itemProp="name">{f.q}</span>
                      <ChevronDown size={18}
                        className={`text-[#00416a] shrink-0 ml-4 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {faqOpen === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          itemScope itemType="https://schema.org/Answer">
                          <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed" itemProp="text">
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

        {/* ══ RELATED SERVICES ═════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="Related GST Services">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-[#00416a]">Complete Your GST Compliance</h2>
              <p className="text-gray-500 text-sm mt-2">Other GST services you may need alongside return filing</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "GST Registration",     href: "/serviceslist/gst/gst-registration",  desc: "New GSTIN in 3–7 days — ₹1,499" },
                { title: "GST LUT Filing",        href: "/serviceslist/gst/gst-lut",           desc: "Zero-rated exports without IGST — ₹999" },
                { title: "GSTR-9 Annual Return",  href: "/serviceslist/gst/gstr-9",            desc: "Annual reconciliation & filing — ₹2,999" },
                { title: "GST E-Invoicing",       href: "/serviceslist/gst/gst-e-invoicing",   desc: "IRN, QR code & ERP setup — ₹1,999" },
                { title: "GST Refund",            href: "/serviceslist/gst/gst-refund",        desc: "Export & inverted duty refund — ₹2,499" },
                { title: "GST Notice Reply",      href: "/serviceslist/gst/gst-notice-reply",  desc: "ASMT-10, DRC-01, SCN reply — ₹1,999" },
              ].map(({ title, href, desc }) => (
                <Link key={title} href={href}
                  className="group flex items-start gap-3 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <ArrowRight size={16} className="text-[#00416a] shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <p className="font-bold text-gray-800 text-sm group-hover:text-[#00416a] transition">{title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ════════════════════════════════════════════════════ */}
        <section className="py-20 relative overflow-hidden" style={DARK}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.1) 0%,transparent 70%)" }} />
          <motion.div className="relative max-w-3xl mx-auto px-6 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Zap size={14} className="text-yellow-400" /> Returns filed before due date — every month
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              File GST Returns on Time — Protect Your ITC
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg"
              style={{ color: "rgba(255,255,255,0.72)" }}>
              CA-assisted GSTR-1 &amp; GSTR-3B filing from ₹499/month. ITC reconciliation, QRMP
              management, and GSTR-9 annual return included in packages. 100% online, pan India.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Start Filing
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                <Phone size={20} /> Free Consultation
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-5 text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              <span className="flex items-center gap-1.5"><Shield size={13} /> 100% Confidential</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} /> CA-Assisted</span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> Filed Before Due Date</span>
              <span className="flex items-center gap-1.5"><FileText size={13} /> ITC Maximised</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — File GST Returns
          </a>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#00416a] px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            Free Consultation
          </Link>
        </div>

        <Footar />
      </main>
    </>
  );
}