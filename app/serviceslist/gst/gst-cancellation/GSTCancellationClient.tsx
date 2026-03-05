"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle, XCircle, RefreshCw,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA_CANCEL = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST Cancellation.")}`;
const WA_REVOKE = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST Revocation.")}`;
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

const CANCELLATION_TYPES = [
  {
    icon: "🙋",
    type: "Voluntary Cancellation",
    section: "Section 29(1) CGST Act",
    badge: "Most Common",
    badgeColor: "#2563eb",
    triggers: [
      "Business permanently discontinued or closed down",
      "Turnover fell below ₹20 lakh (₹10 lakh for special category states) and registration was not compulsory",
      "Registered voluntarily but no longer wish to continue",
      "Business transferred, amalgamated, merged, demerged, or leased",
      "Change in business constitution requiring new registration",
    ],
    form: "REG-16",
    timeline: "30–45 working days",
    note: "Taxpayer must file GSTR-10 (final return) within 3 months of cancellation effective date.",
  },
  {
    icon: "⚖️",
    type: "Suo Motu / Compulsory Cancellation",
    section: "Section 29(2) CGST Act",
    badge: "Initiated by Department",
    badgeColor: "#dc2626",
    triggers: [
      "Non-filing of returns for 6 consecutive months (monthly filers)",
      "Non-filing of 3 consecutive quarterly returns (QRMP scheme)",
      "Registration obtained by fraud, misstatement, or suppression of facts",
      "GSTIN holder violates provisions of anti-profiteering rules",
      "Business not commenced within 6 months of voluntary registration",
    ],
    form: "REG-17 (SCN) → REG-19 (Cancellation Order)",
    timeline: "After Show Cause Notice process",
    note: "Taxpayer is given Show Cause Notice in REG-17 with opportunity to respond before REG-19 cancellation order.",
  },
  {
    icon: "🔄",
    type: "Cancellation on Transfer / Merger",
    section: "Section 29(1)(c) CGST Act",
    badge: "Business Restructuring",
    badgeColor: "#7c3aed",
    triggers: [
      "Merger of two or more registered entities",
      "Demerger — part of business transferred to another entity",
      "Full business transfer as a going concern",
      "Death of proprietor — business transferred to legal heir",
      "Business leased or transferred to a new registrant",
    ],
    form: "REG-16",
    timeline: "30–45 working days",
    note: "Transferee must obtain new GSTIN before old registration is cancelled. Transfer of ITC balance may be required.",
  },
];

const COMPARISON = [
  { basis: "Meaning",       cancel: "Permanent surrender/closure of GSTIN",            revoke: "Restoration of a cancelled GSTIN" },
  { basis: "Who Initiates", cancel: "Taxpayer (voluntary) or department (suo motu)",    revoke: "Only the taxpayer — not the department" },
  { basis: "Trigger",       cancel: "Business closure, merger, non-compliance, fraud",  revoke: "Only available when cancelled by department under Section 29(2)" },
  { basis: "Form Used",     cancel: "REG-16 (taxpayer) / REG-19 (department)",          revoke: "REG-21 (Application for Revocation)" },
  { basis: "Time Limit",    cancel: "Anytime — no deadline for voluntary cancellation", revoke: "Within 90 days of cancellation order (Section 30)" },
  { basis: "Pending Returns", cancel: "All pending returns must be filed before REG-16", revoke: "All pending returns + tax + interest + penalty must be paid before REG-21" },
  { basis: "Final Return",  cancel: "GSTR-10 must be filed within 3 months of cancellation", revoke: "If revoked, GSTR-10 not required — regular filing resumes" },
  { basis: "Outcome",       cancel: "GSTIN permanently deactivated — no further filing", revoke: "GSTIN restored — all compliance obligations resume" },
];

const CANCELLATION_DOCS = [
  { label: "GST Login Credentials",         sub: "Username and password for REG-16 filing on GST portal" },
  { label: "Reason for Cancellation",       sub: "Written reason with supporting evidence (closure, merger, turnover drop)" },
  { label: "Business Closure Proof",        sub: "If discontinued — no objection from partners / board resolution / deed" },
  { label: "Details of Stock on Hand",      sub: "Closing stock details — ITC reversal on remaining stock is mandatory" },
  { label: "All Pending GST Returns",       sub: "All GSTR-1 and GSTR-3B must be filed before REG-16 application" },
  { label: "Transfer Documents (if merger)", sub: "Merger agreement / demerger deed / business transfer agreement" },
  { label: "DSC or Aadhaar OTP",            sub: "For e-signing the REG-16 cancellation application" },
];

const REVOCATION_DOCS = [
  { label: "All Pending Returns Filed",      sub: "Every overdue GSTR-1 and GSTR-3B for all periods must be filed" },
  { label: "Tax + Interest + Penalty Paid",  sub: "Full outstanding tax liability with 18% p.a. interest and applicable penalty" },
  { label: "REG-21 Application Reason",      sub: "Reason for revocation with supporting explanation of earlier non-compliance" },
  { label: "Cancellation Order (REG-19)",    sub: "Copy of the original department cancellation order to be referenced" },
  { label: "DSC or Aadhaar OTP",             sub: "For e-signing the revocation application on GST portal" },
];

const CANCEL_STEPS = [
  { n:"01", title:"Pending Returns Check",    desc:"Before filing REG-16, all GSTR-1, GSTR-3B, and annual returns for the cancellation period must be filed. Taxvio reviews and clears all pending returns first." },
  { n:"02", title:"ITC Reversal Calculation", desc:"ITC on closing stock, capital goods, and inputs on which credit was taken must be reversed in the final GSTR-3B. Taxvio calculates the exact reversal amount under Rule 44." },
  { n:"03", title:"REG-16 Preparation",       desc:"Taxvio prepares the REG-16 cancellation application — reason, effective date, closing stock details, and last filed return information — for your review and approval." },
  { n:"04", title:"DSC / EVC Signing & Filing", desc:"REG-16 is e-signed using your DSC or Aadhaar OTP and filed on the GST portal. ARN (Acknowledgement Reference Number) is generated and shared." },
  { n:"05", title:"Officer Review & Order",   desc:"GST officer processes the application. If queries arise, Taxvio responds promptly. Cancellation order (REG-19) is typically issued within 30 days." },
  { n:"06", title:"GSTR-10 Final Return",     desc:"After cancellation, GSTR-10 (final return) must be filed within 3 months of the cancellation effective date. Taxvio prepares and files GSTR-10 as part of the service." },
];

const REVOKE_STEPS = [
  { n:"01", title:"Eligibility Assessment",   desc:"Revocation is only available for suo motu cancellations by the department under Section 29(2). Taxvio confirms eligibility and the 90-day application window from the REG-19 order date." },
  { n:"02", title:"Pending Returns Filing",   desc:"Every single overdue return (GSTR-1, GSTR-3B, and annual returns) for all periods must be filed before REG-21 can be submitted. Taxvio prepares and files all pending returns." },
  { n:"03", title:"Tax + Interest + Penalty Payment", desc:"All outstanding tax dues, 18% per annum interest on delayed payments, and applicable penalties must be cleared. Taxvio provides the exact liability calculation." },
  { n:"04", title:"REG-21 Application Filing", desc:"Revocation application in Form REG-21 is filed on the GST portal with the reason for revocation, confirmation of returns filed, and payment proof." },
  { n:"05", title:"Officer Review",           desc:"GST officer reviews REG-21 within 30 days. If satisfied, revocation is approved via Form REG-22. If queries arise (REG-03), Taxvio prepares and files the REG-04 response." },
  { n:"06", title:"GSTIN Restored — REG-22", desc:"Upon approval, the department issues Form REG-22 — the revocation order. GSTIN is restored to Active status. Regular GST compliance resumes immediately." },
];

const FAQS = [
  {
    q: "When should I cancel my GST registration voluntarily?",
    a: "You should apply for voluntary GST cancellation under Section 29(1) of the CGST Act when: (1) Your business is permanently discontinued or closed; (2) Your aggregate annual turnover has fallen below the GST registration threshold (₹20 lakh for regular states, ₹10 lakh for special category states) and your registration was not mandatory (e.g. you had registered voluntarily); (3) Your business has been fully transferred, merged into another entity, or demerged; (4) The constitution of your business has changed requiring a new GSTIN (e.g. proprietorship converting to company). There is no penalty or fee for voluntary cancellation. However, before filing Form REG-16, all pending GST returns must be cleared, and ITC on remaining closing stock must be reversed in the final GSTR-3B under Rule 44 of the CGST Rules.",
  },
  {
    q: "What is compulsory/suo motu GST cancellation and when does the department cancel a GSTIN?",
    a: "Compulsory or suo motu cancellation under Section 29(2) of the CGST Act is initiated by the GST officer (not the taxpayer) when specific violations are detected. The primary triggers are: (1) Non-filing of GST returns for 6 consecutive months (monthly filers under regular scheme); (2) Non-filing of 3 consecutive quarterly returns (under QRMP scheme); (3) Voluntary registrant who has not commenced business within 6 months of registration; (4) Registration obtained by fraud, misstatement, or suppression of material facts. Before passing a suo motu cancellation order, the department must issue a Show Cause Notice in Form REG-17, giving the taxpayer an opportunity to be heard. The taxpayer must respond within 7 working days. If the officer is not satisfied, a cancellation order in Form REG-19 is passed.",
  },
  {
    q: "What is GSTR-10 and when must it be filed after GST cancellation?",
    a: "GSTR-10 is the final GST return that every taxpayer must file after their GST registration is cancelled or surrendered. It must be filed within 3 months from the date of the cancellation order or the effective date of cancellation, whichever is later. GSTR-10 requires declaration of: closing stock of inputs, semi-finished goods, and finished goods; capital goods on which ITC was availed; and the ITC reversal amount (tax payable on such closing stock under Rule 44). Failure to file GSTR-10 within the 3-month deadline attracts a late fee of ₹200 per day (₹100 CGST + ₹100 SGST) with a maximum of ₹10,000. Non-filing of GSTR-10 also blocks the GST portal — preventing the cancelled taxpayer from accessing any GST-related services for that GSTIN. Taxvio files GSTR-10 as part of the cancellation service.",
  },
  {
    q: "What is GST revocation and what is the time limit to apply?",
    a: "GST revocation is the process of restoring a GSTIN that was cancelled by the department (suo motu) under Section 29(2) of the CGST Act. As per Section 30 of the CGST Act (amended by the Finance Act 2023), a taxpayer whose registration has been cancelled by the department can apply for revocation within 90 days of the cancellation order in Form REG-21. Note that revocation is only available for departmental (suo motu) cancellations — not for voluntary cancellations filed by the taxpayer under Section 29(1). Before filing REG-21, the taxpayer must have: (1) Filed all pending GST returns for all periods; (2) Paid all outstanding tax, interest (18% p.a.), and penalty. If the 90-day window is missed, an extension can be applied for — up to a further 180 days — with approval from the Additional/Joint Commissioner, providing sufficient reasons.",
  },
  {
    q: "Can I re-register under GST after voluntary cancellation?",
    a: "Yes, a person whose GST registration has been voluntarily cancelled can re-register under GST at any time if their turnover subsequently exceeds the registration threshold (₹20 lakh / ₹40 lakh depending on supply type and state), or if they voluntarily wish to register again. There is no restriction or cooling-off period after voluntary cancellation — a fresh REG-01 registration application can be filed at any time. However, if GST registration was cancelled due to fraud or misstatement under Section 29(2)(e), the department may scrutinise any fresh registration application from the same PAN more carefully. Taxvio assists with both the cancellation of the old GSTIN and the fresh registration process if and when re-registration is required.",
  },
  {
    q: "What happens to pending ITC and cash balance after GST cancellation?",
    a: "After GST cancellation, any Input Tax Credit (ITC) remaining in the Electronic Credit Ledger and any cash balance in the Electronic Cash Ledger must be utilised or dealt with as follows: (1) ITC on closing stock of inputs, semi-finished goods, finished goods, and capital goods must be reversed — the taxpayer must pay an amount equal to the ITC availed on such goods (or the tax on the transaction value of such goods, whichever is higher) via GSTR-10; (2) The net ITC balance remaining in the Electronic Credit Ledger after the above reversal cannot be refunded and will be lapsed upon cancellation — this is an important financial consideration before cancelling; (3) Cash balance in the Electronic Cash Ledger can be claimed as a refund by filing Form RFD-01 within 2 years. Taxvio calculates the exact ITC reversal under Rule 44, ensures GSTR-10 reflects the correct amount, and files the cash ledger refund application if required.",
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
  name: "GST Cancellation and Revocation India",
  serviceType: "GST Cancellation",
  description:
    "CA-assisted GST cancellation (REG-16) and revocation (REG-21) services. Voluntary cancellation, suo motu cancellation response, GSTR-10 final return, ITC reversal calculation. Starting ₹1,499. Pan India.",
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
    price: "1499",
    priceCurrency: "INR",
    description: "GST Cancellation — REG-16 filing, ITC reversal, GSTR-10. Starting ₹1,499.",
  },
};

export default function GSTCancellationClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [tab, setTab] = useState<"cancel" | "revoke">("cancel");

  return (
    <>
      <Script id="gst-cancel-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-cancel-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GST Cancellation and Revocation Services India"
          itemScope itemType="https://schema.org/Service">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "26px 26px",
          }} />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.1) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
            <nav className="text-sm mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
                <li><Link href="/serviceslist/gst" className="hover:text-white transition">GST Services</Link></li>
                <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
                <li className="text-white font-medium">GST Cancellation</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    Revocation: Apply Within 90 Days of Cancellation Order
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GST Cancellation
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      &amp; Revocation Services
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    CA-assisted voluntary GST cancellation (REG-16), suo motu cancellation response,
                    GSTR-10 final return, ITC reversal calculation, and revocation of cancelled GSTIN
                    (REG-21). Starting at <strong className="text-white">₹1,499</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA_CANCEL} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> Cancel GSTIN on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ REG-16 Filing", "✅ GSTR-10 Final Return", "✅ ITC Reversal", "✅ REG-21 Revocation"].map(tx => (
                      <span key={tx} className="text-sm rounded-full px-3 py-1"
                        style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                        {tx}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Quick facts card */}
                <motion.div variants={scaleIn}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="px-6 py-4"
                      style={{ background: "rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <p className="font-bold text-white text-lg">GST Cancellation — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon: "₹",  label: "Starting Fee",           val: "₹1,499" },
                        { icon: "📋", label: "Cancellation Form",      val: "REG-16 (voluntary)" },
                        { icon: "⏱", label: "Processing Time",        val: "30–45 working days" },
                        { icon: "📄", label: "Final Return",           val: "GSTR-10 within 3 months" },
                        { icon: "🔄", label: "Revocation Form",        val: "REG-21 — within 90 days" },
                        { icon: "🗺", label: "Coverage",               val: "Pan India — All States" },
                      ].map(({ icon, label, val }) => (
                        <div key={label} className="flex justify-between items-center text-sm">
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>{icon} {label}</span>
                          <span className="font-bold text-white">{val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 pb-6 flex flex-col gap-2">
                      <a href={WA_CANCEL} target="_blank" rel="noopener noreferrer"
                        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition hover:scale-105">
                        Cancel GSTIN — ₹1,499 →
                      </a>
                      <a href={WA_REVOKE} target="_blank" rel="noopener noreferrer"
                        className="block w-full text-center text-white py-2.5 rounded-xl font-bold transition hover:bg-white/10 text-sm"
                        style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
                        Revoke Cancelled GSTIN →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ INTERNAL LINKS ═══════════════════════════════════════════════ */}
        <div className="bg-blue-50 border-y border-blue-100 py-4">
          <p className="text-center text-sm text-gray-700 max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>Need GST Registration?{" "}
              <Link href="/serviceslist/gst/gst-registration" className="text-[#00416a] font-bold underline underline-offset-2">Register here</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>File pending returns?{" "}
              <Link href="/serviceslist/gst/gst-return" className="text-[#00416a] font-bold underline underline-offset-2">File GST Returns</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Got a GST notice?{" "}
              <Link href="/serviceslist/gst/gst-notice-reply" className="text-[#00416a] font-bold underline underline-offset-2">Reply to GST Notice</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 — What is GST Cancellation ══════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is GST Cancellation">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GST Cancellation and When is it Required?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GST cancellation</strong> is the legal process of surrendering or closing a GST
                  registration under <strong>Section 29 of the CGST Act, 2017</strong>. Once a GSTIN is
                  cancelled, the taxpayer is no longer required to collect GST on outward supplies, file
                  monthly or quarterly GST returns, or maintain GST records going forward. However,
                  cancellation does not extinguish any existing tax liability or pending return obligations
                  from the period when the GSTIN was active — all past dues must be cleared before and after
                  cancellation.
                </p>
                <p>
                  The GST cancellation process is governed by <strong>Rules 20 and 22 of the CGST Rules,
                  2017</strong>. For voluntary cancellations, the taxpayer files <strong>Form REG-16</strong>
                  on the GST portal specifying the reason for cancellation, the effective date, details of
                  closing stock, and confirmation that all pending returns have been filed. The application
                  is processed by a GST officer who may approve it or seek clarification. Upon approval,
                  a <strong>cancellation order in Form REG-19</strong> is issued by the department.
                </p>
                <p>
                  A critical obligation after GST cancellation is the filing of <strong>GSTR-10 (Final
                  Return)</strong> within 3 months of the cancellation effective date. GSTR-10 requires
                  declaration of all closing stock — inputs, semi-finished goods, finished goods, and
                  capital goods — on which Input Tax Credit was availed. Under <strong>Rule 44 of the
                  CGST Rules</strong>, the taxpayer must reverse ITC on such closing stock, paying an
                  amount equal to the ITC originally availed (or the tax on the current transaction value,
                  whichever is higher). Failure to file GSTR-10 within 3 months attracts a late fee of
                  ₹200 per day (maximum ₹10,000) and blocks all GST portal access for that GSTIN.
                </p>
                <p>
                  Another important consideration is the treatment of <strong>balance in the Electronic
                  Credit Ledger (ITC balance)</strong> after cancellation. ITC remaining in the credit
                  ledger after the required reversals cannot be refunded and lapses on cancellation. Only
                  the cash balance in the Electronic Cash Ledger can be claimed as a refund via Form
                  RFD-01 within 2 years. This makes it essential to plan the cancellation timing
                  strategically — using or reversing maximum ITC before filing REG-16 — and Taxvio&apos;s
                  CA team provides this advisory as part of the cancellation service.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ CANCELLATION TYPES CARDS ═════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Types of GST Cancellation">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Cancellation Types
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  3 Types of GST Cancellation — Voluntary, Compulsory &amp; Transfer
                </h2>
              </motion.div>
              <motion.div variants={stagger} className="grid md:grid-cols-3 gap-5">
                {CANCELLATION_TYPES.map(({ icon, type, section, badge, badgeColor, triggers, form, timeline, note }) => (
                  <motion.div key={type} variants={scaleIn}
                    className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{icon}</span>
                      <span className="text-[10px] font-bold rounded-full px-2.5 py-1 text-white"
                        style={{ background: badgeColor }}>{badge}</span>
                    </div>
                    <h3 className="font-extrabold text-[#00416a] text-base mb-1">{type}</h3>
                    <p className="text-xs text-gray-500 mb-3 font-medium">{section}</p>
                    <ul className="space-y-1.5 mb-4">
                      {triggers.map(t => (
                        <li key={t} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-[#00416a] shrink-0 mt-0.5">•</span> {t}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-100 pt-3 space-y-1.5 text-xs">
                      <div className="flex gap-2">
                        <span className="text-gray-400 font-semibold shrink-0">Form:</span>
                        <span className="text-gray-700 font-mono">{form}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-gray-400 font-semibold shrink-0">Timeline:</span>
                        <span className="text-gray-700">{timeline}</span>
                      </div>
                    </div>
                    <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg p-2.5">
                      <p className="text-xs text-amber-800">{note}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PROCESS TABS (Cancel / Revoke) ═══════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="GST Cancellation and Revocation Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Step-by-Step Process
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  How Taxvio Handles Your GST Cancellation or Revocation
                </h2>
              </motion.div>

              {/* Tab switcher */}
              <motion.div variants={fadeUp} className="flex gap-3 justify-center mb-8">
                {(["cancel", "revoke"] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all"
                    style={{
                      background: tab === t ? "#00416a" : "white",
                      color: tab === t ? "white" : "#00416a",
                      border: "2px solid #00416a",
                    }}>
                    {t === "cancel" ? <><XCircle size={15} /> Cancellation Process</> : <><RefreshCw size={15} /> Revocation Process</>}
                  </button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                {tab === "cancel" && (
                  <motion.div key="cancel"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}>
                    <div className="space-y-4">
                      {CANCEL_STEPS.map(({ n, title, desc }) => (
                        <div key={n} className="flex gap-5 items-start">
                          <div className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm text-white shrink-0 shadow-md"
                            style={{ background: "#00416a" }}>{n}</div>
                          <div className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl p-5">
                            <p className="font-bold text-gray-800">{title}</p>
                            <p className="text-gray-600 text-sm mt-1 leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {tab === "revoke" && (
                  <motion.div key="revoke"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}>
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
                      <AlertCircle size={17} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-red-800 text-sm">
                        <strong>90-day deadline:</strong> REG-21 revocation must be filed within 90 days
                        of the department&apos;s cancellation order (REG-19). Missing this window requires
                        extension approval from Additional / Joint Commissioner. Act immediately.
                      </p>
                    </div>
                    <div className="space-y-4">
                      {REVOKE_STEPS.map(({ n, title, desc }) => (
                        <div key={n} className="flex gap-5 items-start">
                          <div className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm text-white shrink-0 shadow-md"
                            style={{ background: "#dc2626" }}>{n}</div>
                          <div className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl p-5">
                            <p className="font-bold text-gray-800">{title}</p>
                            <p className="text-gray-600 text-sm mt-1 leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — Revocation ══════════════════════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="GST Revocation Explained">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                GST Revocation — Restoring a Cancelled GSTIN Before the 90-Day Window Closes
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GST revocation</strong> under <strong>Section 30 of the CGST Act</strong> is
                  the only legal remedy available to a business whose GSTIN was cancelled by the GST
                  department (suo motu) under Section 29(2) — typically for non-filing of returns. Revocation
                  restores the GSTIN to Active status, allowing the business to resume GST-compliant
                  operations, issue valid tax invoices, and allow buyers to claim ITC on future supplies.
                </p>
                <p>
                  As amended by the <strong>Finance Act 2023</strong>, the deadline to file Form REG-21
                  (revocation application) is <strong>90 days</strong> from the date of the cancellation
                  order (REG-19). Previously this was 30 days — the extended 90-day window gives businesses
                  more time to clear pending returns and pay dues before applying. If the 90-day window is
                  missed, the taxpayer can apply for a further extension of up to <strong>180 additional
                  days</strong> with approval from the Additional or Joint Commissioner of GST, providing
                  sufficient cause. Beyond the extended period, the only option is fresh registration.
                </p>
                <p>
                  Before a revocation application (REG-21) will be accepted by the portal, <strong>all
                  pending GST returns must be filed</strong> — every overdue GSTR-1 and GSTR-3B for all
                  periods from the date of last filing to the cancellation date. Additionally, <strong>all
                  outstanding tax, interest at 18% per annum, and applicable penalties</strong> must be
                  paid in full. The portal enforces these preconditions — REG-21 cannot be submitted unless
                  all returns are filed and all dues are settled. This can be a significant financial
                  burden, especially for businesses with multiple years of non-filing, and Taxvio helps
                  plan the phased clearance of arrears most cost-efficiently.
                </p>
                <p>
                  Once REG-21 is submitted, the GST officer reviews the application within 30 days. If
                  satisfied, a <strong>revocation order in Form REG-22</strong> is issued and the GSTIN
                  is restored. If the officer requires clarification, a notice in Form REG-03 is issued
                  and the taxpayer (or Taxvio on their behalf) must respond in Form REG-04 within 7
                  working days. Upon revocation, all regular GST compliance obligations — monthly or
                  quarterly return filing, ITC reconciliation, and annual GSTR-9 — resume immediately
                  from the revocation effective date.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ COMPARISON TABLE ═════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="GST Cancellation vs Revocation">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a]">
                  GST Cancellation vs Revocation — Detailed Comparison
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm" aria-label="GST cancellation vs revocation comparison">
                  <thead>
                    <tr style={{ background: "#00416a" }}>
                      <th className="text-left px-5 py-4 text-white font-semibold">Parameter</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">GST Cancellation</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">GST Revocation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map(({ basis, cancel, revoke }, i) => (
                      <tr key={basis} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3.5 font-semibold text-gray-800">{basis}</td>
                        <td className="px-5 py-3.5 text-gray-700">{cancel}</td>
                        <td className="px-5 py-3.5 text-gray-700">{revoke}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ DOCUMENTS TABS ═══════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Documents for GST Cancellation and Revocation">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Document Checklist
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Documents Required
                </h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Cancellation docs */}
                <div>
                  <h3 className="font-extrabold text-[#00416a] mb-4 flex items-center gap-2">
                    <XCircle size={18} className="text-red-500" /> For GST Cancellation (REG-16)
                  </h3>
                  <div className="space-y-3">
                    {CANCELLATION_DOCS.map(({ label, sub }) => (
                      <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                        <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{label}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Revocation docs */}
                <div>
                  <h3 className="font-extrabold text-[#00416a] mb-4 flex items-center gap-2">
                    <RefreshCw size={18} className="text-blue-500" /> For GST Revocation (REG-21)
                  </h3>
                  <div className="space-y-3">
                    {REVOCATION_DOCS.map(({ label, sub }) => (
                      <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                        <CheckCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{label}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-800">
                      <strong>90-day time limit:</strong> REG-21 must be filed within 90 days of
                      the cancellation order. Extensions available from Addl. / Joint Commissioner
                      for up to 180 additional days on sufficient cause.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ PRICING ══════════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#00416a" }} aria-label="GST Cancellation Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                GST Cancellation &amp; Revocation Fee
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                All plans include GSTR-10 filing. Pending return filing charged separately per return.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan: "Voluntary Cancellation", price: "₹1,499", highlight: false,
                  items: ["REG-16 application filing", "ITC reversal calculation (Rule 44)", "GSTR-10 final return", "Officer query reply if any", "Cancellation order (REG-19) delivery"],
                },
                {
                  plan: "Cancellation + Revocation", price: "₹2,999", highlight: true,
                  items: ["Everything in Voluntary plan", "REG-21 revocation application", "Pending return filing advisory", "Officer query / REG-03 reply", "REG-22 restoration confirmation"],
                },
                {
                  plan: "Suo Motu + Arrear Clearance", price: "₹4,999", highlight: false,
                  items: ["Departmental cancellation handling", "All pending returns filing (up to 12)", "Tax + interest calculation", "REG-21 + REG-03 reply", "GSTIN restoration end-to-end"],
                },
              ].map(({ plan, price, highlight, items }) => (
                <div key={plan} className="rounded-2xl p-6 flex flex-col"
                  style={{
                    background: highlight ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
                    border: highlight ? "2px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.15)",
                  }}>
                  {highlight && (
                    <span className="text-[10px] font-bold text-[#00416a] bg-white rounded-full px-3 py-0.5 self-start mb-3 uppercase tracking-wide">
                      Most Common
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
                  <a href={WA_CANCEL} target="_blank" rel="noopener noreferrer"
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
        <section className="py-20 bg-white" aria-label="GST Cancellation FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-gray-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GST Cancellation &amp; Revocation
                </h2>
                <p className="text-gray-500 mt-2 text-sm">Have more questions? WhatsApp us — we reply within 15 minutes.</p>
              </motion.div>
              <motion.div variants={stagger} className="space-y-3">
                {FAQS.map((f, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="border border-gray-200 rounded-2xl overflow-hidden"
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
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                          className="overflow-hidden" itemScope itemType="https://schema.org/Answer">
                          <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed" itemProp="text">{f.a}</p>
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
        <section className="py-16 bg-gray-50" aria-label="Related GST Services">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-[#00416a]">Other GST Services by Taxvio</h2>
              <p className="text-gray-500 text-sm mt-2">Complete GST lifecycle support — from registration to closure</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "GST Registration",     href: "/serviceslist/gst/gst-registration",  desc: "New GSTIN in 3–7 days — ₹1,499" },
                { title: "GST Return Filing",     href: "/serviceslist/gst/gst-return",        desc: "Monthly GSTR-1 & GSTR-3B — ₹499/month" },
                { title: "GST Notice Reply",      href: "/serviceslist/gst/gst-notice-reply",  desc: "ASMT-10, DRC-01, SCN reply — ₹1,999" },
                { title: "GST Amendment",         href: "/serviceslist/gst/gst-amendment",     desc: "Update GSTIN details, REG-14 — ₹799" },
                { title: "GSTR-9 Annual Return",  href: "/serviceslist/gst/gstr-9",            desc: "Annual reconciliation & filing — ₹2,999" },
                { title: "GST Audit Assistance",  href: "/serviceslist/gst/gst-audit",         desc: "Section 65/66 audit support — ₹3,999" },
              ].map(({ title, href, desc }) => (
                <Link key={title} href={href}
                  className="group flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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
              <Zap size={14} className="text-yellow-400" /> Revocation deadline: 90 days from cancellation order
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Cancel Your GSTIN or Restore It — We Handle Everything
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              Voluntary cancellation, compulsory cancellation response, GSTR-10 final return, ITC
              reversal, and revocation (REG-21). CA-assisted. Starting ₹1,499. 100% online. Pan India.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA_CANCEL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Cancel GSTIN
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                <Phone size={20} /> Free Consultation
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-5 text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              <span className="flex items-center gap-1.5"><Shield size={13} />100% Confidential</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} />CA-Assisted</span>
              <span className="flex items-center gap-1.5"><Clock size={13} />Fast Processing</span>
              <span className="flex items-center gap-1.5"><FileText size={13} />GSTR-10 Included</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA_CANCEL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — Cancel / Revoke GSTIN
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