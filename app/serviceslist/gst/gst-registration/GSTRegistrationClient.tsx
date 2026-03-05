"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST Registration.")}`;
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

const ELIGIBILITY = [
  { type: "Goods Supplier — General State",        rule: "Annual aggregate turnover > ₹40 lakh" },
  { type: "Service Provider — General State",      rule: "Annual aggregate turnover > ₹20 lakh" },
  { type: "Any Business — Special Category State", rule: "Turnover > ₹10 lakh (NE states, J&K, Uttarakhand)" },
  { type: "Inter-State Supplier of Goods",         rule: "Mandatory regardless of turnover" },
  { type: "E-Commerce Operator / Seller",          rule: "Mandatory regardless of turnover" },
  { type: "Casual Taxable Person",                 rule: "Mandatory regardless of turnover" },
  { type: "Reverse Charge Mechanism (RCM) Payer",  rule: "Mandatory regardless of turnover" },
  { type: "Importer / Exporter of Goods or Services", rule: "Mandatory regardless of turnover" },
];

const DOCUMENTS = [
  { label: "PAN Card",                sub: "Of proprietor / company / LLP / firm" },
  { label: "Aadhaar Card",            sub: "Of proprietor / all partners / directors" },
  { label: "Business Address Proof",  sub: "Electricity bill / rent agreement / NOC" },
  { label: "Bank Account Proof",      sub: "Cancelled cheque or passbook / bank statement" },
  { label: "Photograph",              sub: "Proprietor / authorised signatory (passport size)" },
  { label: "Constitution Proof",      sub: "Partnership deed / COI / MOA & AOA for companies" },
  { label: "Authorisation Letter",    sub: "For authorised signatory — companies & LLPs" },
  { label: "DSC (Digital Signature)", sub: "Mandatory for companies and LLPs" },
];

const STEPS = [
  { n: "01", title: "Share Your Documents",
    desc: "Send PAN, Aadhaar, address proof, and bank details to Taxvio via WhatsApp or email. Our team will confirm the exact documents needed for your business type." },
  { n: "02", title: "CA Prepares Application",
    desc: "Our Chartered Accountant fills Form REG-01 on the GST portal, verifies every detail for accuracy, and prepares all supporting documents in the required format." },
  { n: "03", title: "Aadhaar OTP / DSC Authentication",
    desc: "You complete Aadhaar-based biometric authentication via OTP. For companies and LLPs, DSC (Digital Signature Certificate) e-signing is mandatory instead of Aadhaar OTP." },
  { n: "04", title: "Application Filed — ARN Generated",
    desc: "Application submitted on the GST portal. An ARN (Application Reference Number) is generated immediately as formal acknowledgement of submission." },
  { n: "05", title: "GST Officer Review",
    desc: "The assigned GST officer reviews the application within 3–7 working days. If a REG-03 query notice is issued seeking additional documents, Taxvio prepares and files the REG-04 response." },
  { n: "06", title: "GSTIN Certificate Issued",
    desc: "GSTIN allotted and Form REG-06 (GST Registration Certificate) issued. Your business is officially GST-registered and ready to collect tax and claim ITC." },
];

const FEES = [
  {
    plan: "New GST Registration", price: "₹999", highlight: false,
    items: [
      "Form REG-01 preparation & filing",
      "Aadhaar OTP coordination",
      "ARN generation & status tracking",
      "GSTIN certificate delivery",
      "1 officer query (REG-03) response",
    ],
  },
  {
    plan: "Registration + First Month Returns", price: "₹1,499", highlight: true,
    items: [
      "Complete GST registration",
      "GSTR-1 filing (first month)",
      "GSTR-3B filing (first month)",
      "ITC Electronic Credit Ledger setup",
      "WhatsApp priority support",
    ],
  },
  {
    plan: "Annual GST Compliance Package", price: "₹7,999/yr", highlight: false,
    items: [
      "GST registration included",
      "12 months GSTR-1 + GSTR-3B",
      "GSTR-9 annual return filing",
      "LUT filing for exporters",
      "Unlimited query & notice support",
    ],
  },
];

const FAQS = [
  {
    q: "What is the government fee for GST registration?",
    a: "There is zero government fee for GST registration in India. The GST Common Portal (gst.gov.in) does not charge any government fee for obtaining a GSTIN. The professional fee you pay Taxvio (starting ₹1,499) covers CA assistance — document verification, Form REG-01 preparation and filing, Aadhaar OTP coordination, ARN tracking, officer query (REG-03/REG-04) handling, and GSTIN certificate delivery.",
  },
  {
    q: "How long does GST registration take?",
    a: "If Aadhaar-based authentication is successfully completed by the applicant, the system automatically allots GSTIN within 3 working days without requiring officer intervention. If the GST officer initiates review and issues a REG-03 notice seeking additional documents or clarification, registration is completed within 7 working days of the applicant filing the REG-04 response. Taxvio tracks the application status and handles all officer queries promptly.",
  },
  {
    q: "Can I apply for GST registration without a shop or physical office?",
    a: "Yes. Home addresses and rented residential or commercial premises are fully acceptable as the principal place of business for GST registration. For own property, provide an electricity bill or municipal tax receipt in the business owner's name. For rented premises, provide the rent agreement along with a No-Objection Certificate (NOC) from the property owner. There is no requirement for a commercial office space.",
  },
  {
    q: "Is GST registration mandatory for freelancers and individual consultants?",
    a: "GST registration is mandatory for freelancers, consultants, and independent professionals whose aggregate annual turnover from services exceeds ₹20 lakh (₹10 lakh in special category states). Below this threshold, registration is voluntary but often beneficial for claiming ITC on business expenses. However, if you provide services to clients in other states (inter-state supplies) or operate through digital platforms or aggregators, registration is mandatory regardless of your turnover.",
  },
  {
    q: "What is the GST Composition Scheme and is it right for my business?",
    a: "The Composition Scheme (Section 10 of CGST Act) allows small taxpayers with annual turnover up to ₹1.5 crore (₹75 lakh for special category states) to pay GST at flat reduced rates: 1% for traders, 2% for manufacturers, 5% for restaurant and food service businesses, and 6% for eligible service providers (with a turnover cap of ₹50 lakh). Key restrictions: Composition dealers cannot charge or collect GST from customers, cannot claim Input Tax Credit, and cannot make inter-state outward supplies. Their compliance burden is much lighter — only a quarterly payment challan (CMP-08) and an annual return (GSTR-4). This scheme suits small local businesses with mostly B2C customers and low input costs.",
  },
  {
    q: "What is the penalty for not registering under GST when liable?",
    a: "Under Section 122 of the CGST Act, failure to register when required attracts a penalty equal to 100% of the tax amount due (minimum ₹10,000 even if the tax amount is lower). Interest accrues at 18% per annum on all unpaid GST from the original due date. In cases of wilful, deliberate tax evasion involving amounts exceeding ₹5 crore, Section 132 provides for criminal prosecution with potential imprisonment up to 5 years and a fine.",
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
  name: "GST Registration India",
  serviceType: "GST Registration",
  description:
    "CA-assisted GST registration for all business types in India. Zero government fee. GSTIN in 3–7 working days. Starting ₹1,499.",
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
    price: "999",
    priceCurrency: "INR",
    description: "New GST Registration — GSTIN in 3–7 working days, zero government fee.",
  },
};

export default function GSTRegistrationClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [bizType, setBizType] = useState("goods");
  const [turnover, setTurnover] = useState("");

  const thresh = bizType === "services" ? 20 : bizType === "special" ? 10 : 40;
  const t = parseFloat(turnover) || 0;
  const mustRegister = t > 0 && t >= thresh;
  const optional = t > 0 && t < thresh;

  return (
    <>
      <Script id="gst-reg-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-reg-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GST Registration in India" itemScope itemType="https://schema.org/Service">
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
                <li className="text-white font-medium">GST Registration</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Left copy */}
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    GSTIN Issued in 3–7 Working Days
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GST Registration in India
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      Get Your GSTIN Online
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    Professional GST registration for proprietors, partnerships, LLPs, private limited
                    companies, e-commerce sellers, and exporters. CA-assisted, 100% online, starting at{" "}
                    <strong className="text-white">₹1,499</strong>. Zero government fee.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> Register on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ Zero Govt Fee", "✅ All Business Types", "✅ Composition Option", "✅ ARN Tracking"].map(tx => (
                      <span key={tx} className="text-sm rounded-full px-3 py-1"
                        style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                        {tx}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Right — Quick facts card */}
                <motion.div variants={scaleIn}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="px-6 py-4"
                      style={{ background: "rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <p className="font-bold text-white text-lg">GST Registration — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon: "₹",  label: "Professional Fee",  val: "Starting ₹999" },
                        { icon: "⏱", label: "Processing Time",   val: "3–7 Working Days" },
                        { icon: "🏛", label: "Govt Fee",          val: "Zero (Nil)" },
                        { icon: "📋", label: "Form Required",     val: "REG-01 on GST Portal" },
                        { icon: "🗺", label: "Coverage",          val: "Pan India — All States" },
                        { icon: "✍", label: "Authentication",    val: "Aadhaar OTP / DSC" },
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
                        Start Registration — ₹999 →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 1 — What is GST Registration ════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is GST Registration">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GST Registration and Why is it Mandatory?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GST registration</strong> is the process through which a business or individual
                  supplier obtains a unique <strong>15-digit Goods and Services Tax Identification Number
                  (GSTIN)</strong> from the Government of India via the GST Common Portal (gst.gov.in). The
                  GSTIN is the business&apos;s legal identity under the GST framework — it authorises the business
                  to collect GST from customers, claim <strong>Input Tax Credit (ITC)</strong> on purchases and
                  expenses, and file statutory returns with the Central Board of Indirect Taxes and Customs
                  (CBIC).
                </p>
                <p>
                  Under <strong>Section 22 of the Central Goods and Services Tax Act, 2017</strong>, registration
                  is compulsory for every supplier whose aggregate annual turnover in a financial year exceeds the
                  prescribed threshold — ₹40 lakh for suppliers of goods (general category states), ₹20 lakh for
                  service providers (general category states), and ₹10 lakh for businesses operating in special
                  category states including Manipur, Mizoram, Nagaland, Tripura, Uttarakhand, Sikkim, Himachal
                  Pradesh, and Jammu &amp; Kashmir. Beyond turnover, <strong>Section 24 of the CGST Act</strong>
                  mandates registration for certain categories of suppliers regardless of turnover — including
                  inter-state suppliers, e-commerce operators and sellers, casual taxable persons, non-resident
                  taxable persons, and businesses paying tax under the reverse charge mechanism (RCM).
                </p>
                <p>
                  Operating a business liable for GST without valid registration is a serious legal offence.
                  Under <strong>Section 122 of the CGST Act</strong>, the penalty for failure to register is
                  100% of the tax amount due (with a minimum penalty of ₹10,000 even if the tax liability is
                  lower). Interest on unpaid GST accrues at <strong>18% per annum</strong> from the date it
                  was originally due. In cases of deliberate, wilful evasion involving amounts exceeding ₹5
                  crore, <strong>Section 132</strong> provides for criminal prosecution and imprisonment up to
                  5 years. Beyond legal compliance, a GSTIN is practically essential — major B2B buyers,
                  government e-procurement portals (GeM), e-commerce marketplaces (Amazon, Flipkart, Meesho),
                  and banks (for current account opening) require GSTIN verification before transacting.
                </p>
                <p>
                  The most significant financial benefit of registration is access to the <strong>Input Tax
                  Credit mechanism</strong>. Once registered, a business can offset GST paid on business
                  inputs — raw materials, stock, capital goods, services like freight, rent, and professional
                  fees — against the GST it collects on sales. This eliminates the cascading tax-on-tax effect
                  and directly reduces your net GST payable. For businesses with substantial purchase costs,
                  ITC claims often reduce effective tax outgo by 40–70%, making the cost of registration
                  and compliance a fraction of the savings.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ ELIGIBILITY + CALCULATOR ══════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="GST Registration Eligibility">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Who Must Register
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST Registration Eligibility — Threshold Limits &amp; Mandatory Categories
                </h2>
                <p className="text-gray-600 mt-3 text-sm max-w-2xl mx-auto">
                  All categories listed below are required to obtain GST registration. Failure to register
                  when liable attracts penalties under Section 122 of the CGST Act.
                </p>
              </motion.div>

              {/* Table */}
              <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
                <table className="w-full text-sm" aria-label="GST registration eligibility by category">
                  <thead>
                    <tr style={{ background: "#00416a" }}>
                      <th className="text-left px-5 py-4 text-white font-semibold">Business / Supplier Category</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Registration Trigger</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ELIGIBILITY.map(({ type, rule }, i) => (
                      <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3.5 font-semibold text-gray-800">{type}</td>
                        <td className="px-5 py-3.5 text-gray-600">{rule}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>

              {/* Live eligibility checker */}
              <motion.div variants={scaleIn}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-7">
                <h3 className="text-base font-extrabold text-[#00416a] mb-5 flex items-center gap-2">
                  <Zap size={18} className="text-yellow-500" />
                  Quick Eligibility Checker — Do You Need to Register for GST?
                </h3>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Type of Supply / Business
                    </label>
                    <select value={bizType} onChange={e => setBizType(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a] bg-white text-gray-700">
                      <option value="goods">Goods Supplier — General State</option>
                      <option value="services">Service Provider — General State</option>
                      <option value="special">Any Business — Special Category State</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Expected Annual Turnover (₹ Lakhs)
                    </label>
                    <input type="number" value={turnover} onChange={e => setTurnover(e.target.value)}
                      placeholder="e.g. 25"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a] placeholder:text-gray-400" />
                  </div>
                </div>
                {(mustRegister || optional) && (
                  <div className={`rounded-xl p-4 flex items-start gap-3 ${mustRegister ? "bg-red-50 border border-red-200" : "bg-green-50 border border-green-200"}`}>
                    {mustRegister
                      ? <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                      : <CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" />}
                    <div>
                      <p className={`font-bold text-sm ${mustRegister ? "text-red-700" : "text-green-700"}`}>
                        {mustRegister
                          ? `GST Registration is MANDATORY (threshold: ₹${thresh} lakh)`
                          : `Registration is currently optional (your turnover is below ₹${thresh} lakh)`}
                      </p>
                      <p className="text-xs mt-1 text-gray-600">
                        {mustRegister
                          ? "Register immediately to avoid a penalty of 100% of unpaid tax (minimum ₹10,000) under Section 122 of the CGST Act."
                          : "Voluntary registration is recommended — it enables you to claim ITC, build credibility with B2B buyers, and sell on major e-commerce platforms."}
                      </p>
                      <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 bg-[#00416a] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#002b45] transition">
                        {mustRegister ? "Register Now — ₹1,499" : "Register Voluntarily — ₹1,499"}
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — Types of Registration ══════════════════════════ */}
        <section className="py-20 bg-white" aria-label="Types of GST Registration">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                Types of GST Registration in India — Regular, Composition, Casual &amp; More
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The GST framework recognises several distinct registration types, each designed for different
                  categories of taxpayers. Choosing the correct type at the outset is critical because it
                  determines your applicable GST rates, ITC eligibility, invoice format, return filing frequency,
                  and overall compliance obligations. Switching from one scheme to another — for example, from
                  Composition to Regular — requires filing Form CMP-04 and involves a transition of your ITC
                  position, so making the right choice initially saves significant complexity later.
                </p>
                <p>
                  <strong>Regular GST Registration</strong> is the default and most common form for businesses
                  across India. Regular taxpayers issue GST-compliant tax invoices, charge GST at applicable
                  rates (5%, 12%, 18%, 28%) to customers, file GSTR-1 to report outward supplies, and file
                  GSTR-3B to declare net GST liability and make tax payments. They are fully entitled to claim
                  Input Tax Credit on all business inputs subject to restrictions under Section 17 of the CGST
                  Act. Regular registration is the appropriate choice for all B2B businesses, exporters,
                  manufacturers, traders with significant input costs, and anyone whose buyers need a GST invoice
                  to claim their own ITC.
                </p>
                <p>
                  The <strong>Composition Scheme (Section 10 of CGST Act)</strong> is available to suppliers
                  with aggregate annual turnover up to ₹1.5 crore (₹75 lakh for special category states;
                  ₹50 lakh for eligible service providers under the amendment). Flat reduced tax rates apply:
                  1% for traders, 2% for manufacturers, 5% for restaurant and food service businesses, and
                  6% for eligible service providers. Key restrictions: Composition dealers cannot issue tax
                  invoices (only bills of supply), cannot collect GST from customers, cannot claim ITC, and
                  cannot make inter-state outward supplies of goods. Compliance is significantly lighter —
                  only a quarterly payment challan (CMP-08) and an annual return (GSTR-4). This is the right
                  choice for small local retailers, manufacturers, and service providers with predominantly
                  B2C customers and minimal input costs.
                </p>
                <p>
                  <strong>Casual Taxable Person (CTP)</strong> registration under Section 27 applies to
                  businesses making temporary taxable supplies in a state where they have no fixed place of
                  business — for example, a business exhibiting products at a trade fair or exhibition in another
                  state. CTP registration is valid for a maximum of 90 days (extendable on application), requires
                  an advance deposit of estimated GST liability at the time of filing the application, and must
                  be obtained before the first supply is made in that state.
                </p>
                <p>
                  <strong>E-Commerce sellers</strong> — individuals and businesses selling goods or services
                  through marketplace platforms including Amazon, Flipkart, Myntra, Meesho, Swiggy, and Zomato —
                  must obtain GST registration regardless of their annual turnover. These platforms are required
                  under Section 52 of the CGST Act to collect TCS (Tax Collected at Source) at 1% of net value
                  of taxable supplies before disbursing sales proceeds to sellers. A valid GSTIN is also a
                  mandatory prerequisite for seller onboarding on every major e-commerce platform.
                </p>
                <p>
                  <strong>Input Service Distributor (ISD)</strong> registration allows a head office or corporate
                  headquarters that receives invoices for common input services — such as enterprise software
                  licences, group insurance, rent for shared premises, or centralised professional services —
                  to distribute the ITC proportionately across its branches through Form GSTR-6. ISD registration
                  is a separate registration from regular GST registration and is particularly relevant for
                  multi-location businesses with centralised procurement functions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ DOCUMENTS ════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Documents for GST Registration">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Document Checklist
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Documents Required for GST Registration in India
                </h2>
                <p className="text-gray-600 mt-2 text-sm max-w-xl mx-auto">
                  Taxvio will confirm the exact documents for your business type and state. Keep
                  these ready to speed up your registration.
                </p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {DOCUMENTS.map(({ label, sub }) => (
                  <motion.div key={label} variants={scaleIn}
                    className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-all duration-200">
                    <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PROCESS ══════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="GST Registration Process Steps">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST Registration Process — 6 Steps to Your GSTIN
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  100% online. No office visit. Share documents on WhatsApp — we handle the rest.
                </p>
              </motion.div>
              <div className="space-y-5">
                {STEPS.map(({ n, title, desc }) => (
                  <motion.div key={n} variants={fadeUp} className="flex gap-5 items-start">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm text-white shrink-0 shadow-md"
                      style={{ background: "#00416a" }}>
                      {n}
                    </div>
                    <div className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl p-5">
                      <p className="font-bold text-gray-800">{title}</p>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ PRICING ══════════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#00416a" }}
          aria-label="GST Registration Fee Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                GST Registration Fee — No Hidden Charges
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Zero government fee for GST registration in India. You pay only for expert CA assistance.
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

        {/* ══ SEO BLOCK 3 — Post-registration compliance ════════════════════ */}
        <section className="py-20 bg-white" aria-label="GST Compliance after Registration">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                After GST Registration — Returns, ITC Claims &amp; Ongoing Compliance
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Obtaining your GSTIN is only the first milestone. Every GST-registered regular taxpayer
                  has ongoing statutory compliance obligations that must be met each month or quarter to
                  avoid penalties and protect ITC entitlements.
                </p>
                <p>
                  <strong>GSTR-1</strong> (outward supply return) must be filed by the 11th of the following
                  month for monthly filers. Businesses with aggregate turnover up to ₹5 crore who opt for the
                  <strong> QRMP (Quarterly Return Monthly Payment) scheme</strong> file GSTR-1 quarterly
                  by the 13th of the month following the quarter, with an optional Invoice Filing Facility
                  (IFF) for months 1 and 2 of each quarter. <strong>GSTR-3B</strong> (summary return with
                  tax payment) is due by the 20th of the following month for most taxpayers (22nd/24th for
                  QRMP quarterly filers, varying by state). Missing either return attracts a late fee of
                  ₹50 per day (₹20 per day for nil returns) plus 18% per annum interest on any unpaid GST.
                </p>
                <p>
                  <strong>ITC reconciliation with GSTR-2B</strong> is a critical monthly discipline. GSTR-2B
                  is an auto-populated statement reflecting ITC available based on your suppliers&apos; GSTR-1
                  filings. Under Rule 36(4) of the CGST Rules, ITC claims beyond GSTR-2B are capped at 5%
                  of eligible credit appearing therein — meaning a supplier who fails to file GSTR-1 directly
                  reduces your claimable ITC. Taxvio&apos;s return filing service includes automated supplier
                  compliance monitoring and monthly ITC mismatch analysis to protect your credit entitlements.
                </p>
                <p>
                  For businesses with aggregate annual turnover exceeding ₹2 crore, <strong>GSTR-9</strong>
                  (annual return) must be filed by 31 December each year. Businesses above ₹5 crore must
                  additionally file <strong>GSTR-9C</strong> — a reconciliation statement audited and
                  certified by a Chartered Accountant. Exporters must file their <strong>LUT (Letter of
                  Undertaking under Rule 96A)</strong> at the start of each financial year to export without
                  upfront payment of IGST. And businesses with aggregate turnover exceeding ₹5 crore must
                  implement <strong>e-invoicing</strong> — generating an IRN (Invoice Reference Number) and
                  QR code for every B2B invoice via the Invoice Registration Portal (IRP) before the invoice
                  is issued to the buyer.
                </p>
                <p>
                  Taxvio provides the complete GST compliance lifecycle in a single, affordable package:
                  registration → monthly GSTR-1 and GSTR-3B → GSTR-9 annual return → ITC reconciliation
                  → LUT filing → GST refund claims → notice replies → e-invoicing setup. Our goal is to make
                  GST compliance invisible to you — so you can focus entirely on running your business.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="GST Registration FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  FAQ
                </span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GST Registration
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                  Still have questions? WhatsApp us — we reply within 15 minutes.
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
              <h2 className="text-2xl font-extrabold text-[#00416a]">After Registration — What You&apos;ll Need Next</h2>
              <p className="text-gray-500 text-sm mt-2">
                Services our CA team provides once your GSTIN is active
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "GST Return Filing",    href: "/serviceslist/gst/gst-return",        desc: "Monthly GSTR-1 & GSTR-3B — from ₹499/month" },
                { title: "GST LUT Filing",        href: "/serviceslist/gst/gst-lut",           desc: "Annual LUT for zero-rated exports — ₹999" },
                { title: "GSTR-9 Annual Return",  href: "/serviceslist/gst/gstr-9",            desc: "Annual reconciliation & GSTR-9 filing — ₹2,999" },
                { title: "GST E-Invoicing Setup", href: "/serviceslist/gst/gst-e-invoicing",   desc: "IRN, QR code & ERP integration — ₹1,999" },
                { title: "GST Refund Claim",      href: "/serviceslist/gst/gst-refund",        desc: "Export & inverted duty refund filing — ₹2,499" },
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
              <Zap size={14} className="text-yellow-400" /> GSTIN ready in 3–7 working days
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Register for GST Today — Start Claiming ITC
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg"
              style={{ color: "rgba(255,255,255,0.72)" }}>
              CA-assisted GST registration starting at ₹1,499. Zero government fee.
              100% online. All business types covered — proprietors, companies, LLPs,
              e-commerce sellers, and exporters.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Register Now
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
              <span className="flex items-center gap-1.5"><Clock size={13} /> 3–7 Day Delivery</span>
              <span className="flex items-center gap-1.5"><FileText size={13} /> All States Covered</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — Register for GST
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