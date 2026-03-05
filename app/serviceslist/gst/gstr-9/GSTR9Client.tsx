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
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GSTR-9 Annual Return filing.")}`;
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

// Late fee caps per CBIC notification
const FEE_CAPS = [
  { label:"Up to ₹5 Crore", cap:50,   max:"₹50/day (₹25 CGST + ₹25 SGST) — Max ₹2,000",    maxVal:2000  },
  { label:"₹5–20 Crore",    cap:100,  max:"₹100/day (₹50 CGST + ₹50 SGST) — Max ₹5,000",    maxVal:5000  },
  { label:"Above ₹20 Crore",cap:200,  max:"₹200/day (₹100 CGST + ₹100 SGST) — Max ₹10,000", maxVal:10000 },
];

const TABLES = [
  { table:"Table 4",  title:"Details of Outward Supplies",         desc:"Consolidated B2B, B2C, export, NIL/exempt, and nil-rated outward supplies for the full financial year — reconciled with GSTR-1." },
  { table:"Table 5",  title:"Outward Supplies on Which Tax is Not Payable", desc:"Nil-rated, exempted, and non-GST outward supplies declared in GSTR-1 across the year — reconciled with books." },
  { table:"Table 6",  title:"Details of ITC Availed",              desc:"ITC claimed via GSTR-3B across the year — inputs, input services, capital goods — compared with GSTR-2B availability." },
  { table:"Table 7",  title:"Details of ITC Reversed",             desc:"ITC reversed under Rules 37, 38, 42, 43, 44, and Section 17(5) during the year — cross-checked against GSTR-3B reversals." },
  { table:"Table 8",  title:"Other ITC Related Information",        desc:"ITC as per GSTR-2A/2B vs ITC claimed in GSTR-3B vs ITC eligible — gap analysis and reconciliation mandatory." },
  { table:"Table 9",  title:"Tax Paid",                            desc:"CGST, SGST, IGST, Cess paid via Cash and Credit Ledger across all GSTR-3B filings during the year — GSTR-9 to reconcile." },
  { table:"Table 10/11", title:"Supplies / ITC Adjustments (April Amendments)", desc:"Amendments to prior year supplies and ITC declared in April–September of the following year — captured in GSTR-9." },
  { table:"Table 15", title:"Demands, Refunds & Late Fees",         desc:"Outstanding demands, refunds claimed/received, and late fees paid during the year — sourced from GST portal records." },
  { table:"Table 16", title:"Supplies from Composition Dealers / ECOs", desc:"Inward supplies from composition dealers and supplies made through e-commerce operators — separately disclosed." },
  { table:"Table 17/18", title:"HSN-wise Summary",                 desc:"HSN-wise outward and inward supply summary — required for turnover above ₹5 crore (mandatory from FY 2021-22 onwards)." },
];

const RECONCILIATION_POINTS = [
  { point:"GSTR-1 vs GSTR-3B Turnover",   risk:"High",   desc:"Sales declared in GSTR-1 (supply-wise) vs tax paid in GSTR-3B (aggregate). Any mismatch triggers ASMT-10 scrutiny notice." },
  { point:"GSTR-3B ITC vs GSTR-2B ITC",   risk:"High",   desc:"ITC claimed in GSTR-3B vs ITC available in GSTR-2B auto-populated statement. Excess claim must be reversed with interest." },
  { point:"Books Turnover vs GST Turnover", risk:"Medium", desc:"Total turnover in audited P&L vs aggregate turnover reported in GST returns. Differences require explanation in GSTR-9C (if applicable)." },
  { point:"ITC on Exempt / Personal Use",  risk:"High",   desc:"ITC claimed on purchases used for exempt supplies or personal use under Section 17(5) must be reversed — often missed in monthly returns." },
  { point:"RCM Liability Declaration",     risk:"Medium", desc:"Reverse Charge Mechanism (RCM) liability on purchases from unregistered suppliers and notified services — must be declared in GSTR-9." },
  { point:"April–September Amendments",   risk:"Low",    desc:"Amendments to FY sales/ITC declared in April–September returns of the next FY are captured in Tables 10 & 11 of GSTR-9." },
];

const STEPS = [
  { n:"01", title:"Document Collection",
    desc:"Taxvio collects all 12 months of GSTR-1, GSTR-3B, GSTR-2B, purchase register, sales register, audited financial statements, ITC reversal records, and RCM liability details for the financial year." },
  { n:"02", title:"GSTR-1 vs GSTR-3B Turnover Reconciliation",
    desc:"Month-wise reconciliation of outward supply turnover between GSTR-1 and GSTR-3B. Differences identified — genuine invoice amendments, rounding differences, or reporting errors — are categorised and addressed." },
  { n:"03", title:"ITC Reconciliation (GSTR-3B vs GSTR-2B vs Books)",
    desc:"ITC claimed in GSTR-3B is compared against GSTR-2B auto-populated credit and books of account. Excess ITC (if any) is reversed. Unclaimed ITC from prior periods (FY cutoff) is identified for advisory." },
  { n:"04", title:"HSN-wise Summary Preparation",
    desc:"HSN/SAC-wise outward supply summary (Table 17) and inward supply summary (Table 18) prepared from GSTR-1 and purchase data. Mandatory for businesses with turnover above ₹5 crore." },
  { n:"05", title:"GSTR-9 Draft Preparation",
    desc:"All 18 tables of GSTR-9 are populated based on reconciled data. Draft GSTR-9 is prepared and shared with you for review — showing differences from auto-populated GST portal data." },
  { n:"06", title:"Filing & Confirmation",
    desc:"After your approval, GSTR-9 is filed on the GST portal using DSC or EVC. ARN is generated. GSTR-9C (reconciliation statement) is prepared separately if your turnover exceeds ₹5 crore." },
];

const FAQS = [
  {
    q: "Who is required to file GSTR-9 and is it mandatory for all GST taxpayers?",
    a: "GSTR-9 (GST Annual Return) must be filed by every regular GST-registered taxpayer — including manufacturers, traders, and service providers — with aggregate annual turnover exceeding ₹2 crore. As per CBIC Notification No. 10/2024-CT, GSTR-9 is optional (not mandatory) for taxpayers with aggregate turnover up to ₹2 crore for FY 2023-24 onwards — though filing is advisable for reconciliation purposes. The following categories are exempt from GSTR-9 regardless of turnover: Composition scheme taxpayers (they file GSTR-9A, which is currently suspended), Input Service Distributors (ISDs), Non-resident taxable persons, Casual taxable persons, and persons paying TDS under Section 51 or TCS under Section 52. GSTR-9C (self-certified reconciliation statement) is required for taxpayers with turnover exceeding ₹5 crore — as per CBIC Notification No. 30/2021-CT, self-certification replaced the earlier CA/CMA certification from FY 2020-21 onwards.",
  },
  {
    q: "What is the due date and late fee for GSTR-9?",
    a: "The statutory due date for GSTR-9 is 31st December of the year following the financial year — so GSTR-9 for FY 2024-25 is due by 31 December 2025. CBIC typically extends this deadline through notifications. Late fee for GSTR-9 is ₹200 per day of delay (₹100 CGST + ₹100 SGST) subject to turnover-based caps as per Section 47 of the CGST Act: For taxpayers with turnover up to ₹5 crore: ₹50 per day (₹25 CGST + ₹25 SGST), capped at ₹2,000 (₹1,000 CGST + ₹1,000 SGST); For taxpayers with turnover ₹5 crore to ₹20 crore: ₹100 per day, capped at ₹5,000; For taxpayers with turnover above ₹20 crore: ₹200 per day, capped at ₹10,000. CBIC has periodically issued amnesty notifications reducing or waiving GSTR-9 late fees for earlier financial years — Taxvio tracks such notifications and advises on applicable waivers.",
  },
  {
    q: "What is the difference between GSTR-9 and GSTR-9C?",
    a: "GSTR-9 is the annual return — a consolidation of all monthly/quarterly GST returns (GSTR-1 and GSTR-3B) filed during the financial year. It summarises outward supplies, ITC availed, ITC reversed, tax paid, and other compliance details for the full year. GSTR-9C is the Annual Reconciliation Statement — a statement reconciling the figures in GSTR-9 with the audited financial statements (P&L and Balance Sheet). GSTR-9C highlights the differences between GST-reported turnover and book turnover, and between GST-declared ITC and books ITC, with reasons for each difference. GSTR-9C is required only for taxpayers with aggregate turnover exceeding ₹5 crore in the financial year. From FY 2020-21 onwards, GSTR-9C is self-certified by the taxpayer (not certified by a CA or CMA — though a CA typically prepares it). GSTR-9 must be filed before GSTR-9C can be submitted. Taxvio prepares and files both GSTR-9 and GSTR-9C as part of the annual compliance service.",
  },
  {
    q: "What reconciliation mismatches commonly arise in GSTR-9 and how are they resolved?",
    a: "The most common GSTR-9 reconciliation mismatches are: (1) GSTR-1 vs GSTR-3B turnover difference — invoices declared in GSTR-1 but tax paid in a different period in GSTR-3B, or vice versa. Resolution: the difference is explained in GSTR-9 Table 9 or 10, and any unpaid tax is discharged via DRC-03. (2) ITC claimed in GSTR-3B vs GSTR-2B — ITC claimed on invoices not reflected in GSTR-2B (supplier not filed). Resolution: GSTR-9 Table 8 shows the gap; excess ITC availed vs GSTR-2B may require reversal with 18% interest. (3) Books turnover vs GST turnover — differences due to advances, credit notes, or accounting treatment. Resolution: differences reconciled in GSTR-9C with reason codes. (4) Missed ITC reversals — ITC on exempt supplies or Section 17(5) items not reversed in GSTR-3B. Resolution: reverse in GSTR-9 Table 7 or via DRC-03. Taxvio's reconciliation process identifies all these mismatches systematically before GSTR-9 is filed, minimising audit exposure.",
  },
  {
    q: "Can I make corrections in GSTR-9 for errors in monthly returns filed during the year?",
    a: "GSTR-9 allows limited corrections and adjustments for the financial year. Specifically: Additional outward supplies not declared in GSTR-1 during the year can be reported in GSTR-9 Tables 10 and 4 — however, the additional tax must be paid before filing. ITC not claimed in GSTR-3B during the year but eligible can be claimed in GSTR-9 Table 6H (ITC availed but not availed in GSTR-3B) — subject to the annual ITC availment deadline of November 30th of the following year (as per Section 16(4)). Errors in HSN-wise summary can be corrected in GSTR-9 Tables 17/18. However, GSTR-9 cannot be used to revise or amend individual GSTR-1 or GSTR-3B returns — those must be amended through the amendment functionality in subsequent period returns. Also important: GSTR-9 cannot be revised after filing — once submitted, it is final. This makes it critical to get the GSTR-9 right before filing, which is why Taxvio shares a detailed draft for client review before submission.",
  },
  {
    q: "What happens if GSTR-9 is not filed — can the GST department take action?",
    a: "Yes — non-filing of GSTR-9 (for those required to file) has serious consequences beyond the late fee. Firstly, the late fee accrues daily until filing — ₹200/day (turnover-dependent cap applies). Secondly, GSTR-9 non-filing is visible to the GST department and may trigger scrutiny under Section 61 or inspection under Section 67. Thirdly, without GSTR-9, the annual reconciliation between GST returns and books is not formally completed — making the taxpayer vulnerable to demands based on GSTR-1 vs GSTR-3B mismatches that would otherwise have been explained in GSTR-9. Fourthly, non-filing of GSTR-9 for a GSTIN can affect the taxpayer's GST compliance rating — which impacts the ability to transact with compliance-focused buyers who verify their supplier's filing history. For taxpayers with turnover above ₹5 crore, non-filing of GSTR-9C (in addition to GSTR-9) attracts an additional late fee of ₹200 per day. Taxvio recommends filing GSTR-9 for all regular taxpayers — even those below the ₹2 crore optional threshold — as it completes the annual compliance record.",
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
  name: "GSTR-9 Annual Return Filing India",
  serviceType: "GST Annual Return Filing",
  description:
    "CA-assisted GSTR-9 and GSTR-9C filing — annual reconciliation, GSTR-1 vs GSTR-3B turnover matching, ITC vs GSTR-2B reconciliation, HSN-wise summary, late fee minimisation. Starting ₹2,999. Pan India.",
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
    price: "2999",
    priceCurrency: "INR",
    description: "GSTR-9 annual return filing with reconciliation. Starting ₹2,999.",
  },
};

export default function GSTR9Client() {
  const [faqOpen, setFaqOpen]     = useState<number | null>(null);
  const [slab, setSlab]           = useState(0);          // 0 = ≤5Cr, 1 = 5-20Cr, 2 = >20Cr
  const [days, setDays]           = useState<string>("");

  const selected = FEE_CAPS[slab];
  const numDays  = Math.max(0, parseInt(days) || 0);
  const lateFee  = Math.min(numDays * selected.cap, selected.maxVal);

  return (
    <>
      <Script id="gstr9-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gstr9-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GSTR-9 Annual Return Filing India" itemScope itemType="https://schema.org/Service">
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
                <li className="text-white font-medium">GSTR-9 Annual Return</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    Due: 31 December — Late Fee ₹200/day
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GSTR-9 Annual Return —
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      GST Annual Reconciliation &amp; Filing
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    CA-assisted GSTR-9 filing with full annual reconciliation — GSTR-1 vs GSTR-3B
                    turnover matching, ITC vs GSTR-2B reconciliation, HSN-wise summary, and
                    GSTR-9C preparation for businesses above ₹5 crore. Starting at{" "}
                    <strong className="text-white">₹2,999</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> File GSTR-9 on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ GSTR-1 vs 3B Reconciliation", "✅ ITC vs GSTR-2B", "✅ HSN Summary", "✅ GSTR-9C Included (>₹5Cr)"].map(tx => (
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
                      <p className="font-bold text-white text-lg">GSTR-9 — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon:"₹",  label:"Starting Fee",          val:"₹2,999" },
                        { icon:"📅", label:"Due Date",              val:"31 December (each year)" },
                        { icon:"⚠️", label:"Late Fee",              val:"₹200/day (turnover-capped)" },
                        { icon:"📊", label:"Mandatory From",        val:">₹2 Crore turnover" },
                        { icon:"📋", label:"GSTR-9C Required",      val:">₹5 Crore (self-certified)" },
                        { icon:"🔄", label:"Covers",                val:"All 12 months of the FY" },
                      ].map(({ icon, label, val }) => (
                        <div key={label} className="flex justify-between items-center text-sm">
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>{icon} {label}</span>
                          <span className="font-bold text-white text-right">{val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 pb-6">
                      <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition hover:scale-105">
                        File GSTR-9 Now — ₹2,999 →
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
            <span>Monthly returns overdue?{" "}
              <Link href="/serviceslist/gst/gst-return" className="text-[#00416a] font-bold underline underline-offset-2">File GST Returns</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Got a GST notice?{" "}
              <Link href="/serviceslist/gst/gst-notice-reply" className="text-[#00416a] font-bold underline underline-offset-2">Reply to GST Notice</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Need GST Registration?{" "}
              <Link href="/serviceslist/gst/gst-registration" className="text-[#00416a] font-bold underline underline-offset-2">Register here</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is GSTR-9">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GSTR-9 — GST Annual Return and Who Must File It?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GSTR-9</strong> is the <strong>Annual Return</strong> mandated under
                  <strong> Section 44 of the CGST Act, 2017</strong> that every regular GST-registered
                  taxpayer must file for each financial year. It is a comprehensive consolidation of all
                  outward supplies, inward supplies, Input Tax Credit (ITC) availed and reversed, tax
                  payments, demands, refunds, and other compliance details reported across all 12 months
                  of GSTR-1 and GSTR-3B returns during the year. Unlike monthly or quarterly returns,
                  GSTR-9 looks at the entire financial year as a single unit — making it an annual
                  self-audit of GST compliance.
                </p>
                <p>
                  As per <strong>CBIC Notification No. 10/2024-Central Tax</strong>, GSTR-9 is optional
                  for taxpayers with aggregate annual turnover up to <strong>₹2 crore</strong> for FY
                  2023-24. For taxpayers above ₹2 crore, GSTR-9 is mandatory and must be filed by
                  <strong> 31 December</strong> of the following financial year. <strong>GSTR-9C</strong>
                  (the Annual Reconciliation Statement) is additionally required for taxpayers with
                  turnover exceeding <strong>₹5 crore</strong> — it reconciles the GSTR-9 figures with
                  audited financial statements. Since FY 2020-21, GSTR-9C is self-certified by the
                  taxpayer (CA/CMA certification is no longer mandatory, though professional preparation
                  remains essential).
                </p>
                <p>
                  The importance of GSTR-9 goes beyond mere compliance. Because it consolidates an
                  entire year of GST data, it serves as the <strong>reference document for any GST
                  audit or scrutiny</strong> initiated for that financial year. If the annual return
                  contains mismatches with monthly returns, or if the ITC claimed does not reconcile
                  with GSTR-2B, the department&apos;s automated risk system flags the taxpayer for
                  scrutiny notices (ASMT-10) or demand notices (DRC-01). A carefully prepared and
                  reconciled GSTR-9 is the single most effective tool to reduce the taxpayer&apos;s GST
                  litigation risk for that financial year.
                </p>
                <p>
                  Entities <strong>exempt from GSTR-9</strong> include composition scheme taxpayers
                  (GSTR-9A, currently suspended), Input Service Distributors, non-resident taxable
                  persons, casual taxable persons, and persons paying TDS under Section 51 or TCS
                  under Section 52. All others registered as regular taxpayers with turnover above
                  ₹2 crore must file GSTR-9 — and Taxvio recommends filing even for those below ₹2
                  crore to complete the annual compliance record and avoid future scrutiny exposure.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ LATE FEE CALCULATOR ══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="GSTR-9 Late Fee Calculator">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Calculator
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GSTR-9 Late Fee Calculator — Based on Your Turnover Slab
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  Late fee varies by annual turnover. Select your slab and enter delay days.
                </p>
              </motion.div>

              <motion.div variants={scaleIn}
                className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden max-w-2xl mx-auto">
                {/* Slab selector */}
                <div className="p-6 border-b border-gray-100">
                  <p className="text-sm font-bold text-gray-700 mb-3">Select your Annual Turnover Slab:</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {FEE_CAPS.map((f, i) => (
                      <button key={f.label} onClick={() => setSlab(i)}
                        className="flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all border-2"
                        style={{
                          background: slab === i ? "#00416a" : "white",
                          color: slab === i ? "white" : "#00416a",
                          borderColor: slab === i ? "#00416a" : "#e5e7eb",
                        }}>
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-4">{selected.max}</p>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Enter number of days delayed:
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={days}
                    onChange={e => setDays(e.target.value)}
                    placeholder="e.g. 30"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:border-[#00416a] mb-5"
                  />

                  <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg,#00416a,#002b45)" }}>
                    <p className="text-white text-sm mb-1">Estimated Late Fee:</p>
                    <p className="text-4xl font-extrabold text-white">
                      ₹{lateFee.toLocaleString("en-IN")}
                    </p>
                    {numDays > 0 && (
                      <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                        {numDays} days × ₹{selected.cap}/day = ₹{(numDays * selected.cap).toLocaleString("en-IN")}
                        {numDays * selected.cap > selected.maxVal && ` (capped at ₹${selected.maxVal.toLocaleString("en-IN")})`}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800">
                      This is an estimate. CBIC may issue amnesty notifications reducing late fees
                      for prior years. Taxvio checks applicable waivers before filing.
                    </p>
                  </div>

                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition hover:scale-105 text-sm">
                    <MessageCircle size={16} /> WhatsApp — Minimise Your Late Fee
                  </a>
                </div>
              </motion.div>

              {/* Fee slab table */}
              <motion.div variants={fadeUp} className="mt-6 overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "#00416a" }}>
                      <th className="text-left px-5 py-3 text-white font-semibold">Annual Turnover</th>
                      <th className="text-left px-5 py-3 text-white font-semibold">Late Fee Per Day</th>
                      <th className="text-left px-5 py-3 text-white font-semibold">Maximum Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { range:"Up to ₹5 Crore",   fee:"₹50/day (₹25 CGST + ₹25 SGST)",   cap:"₹2,000 (₹1,000 CGST + ₹1,000 SGST)" },
                      { range:"₹5–20 Crore",       fee:"₹100/day (₹50 CGST + ₹50 SGST)",  cap:"₹5,000 (₹2,500 CGST + ₹2,500 SGST)" },
                      { range:"Above ₹20 Crore",   fee:"₹200/day (₹100 CGST + ₹100 SGST)",cap:"₹10,000 (₹5,000 CGST + ₹5,000 SGST)" },
                    ].map(({ range, fee, cap }, i) => (
                      <tr key={range} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3 font-semibold text-gray-800">{range}</td>
                        <td className="px-5 py-3 text-gray-700">{fee}</td>
                        <td className="px-5 py-3 text-gray-700">{cap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ GSTR-9 TABLE BREAKDOWN ════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="GSTR-9 Table Structure">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Table Structure
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GSTR-9 Table-by-Table Breakdown — What Goes Where
                </h2>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
                {TABLES.map(({ table, title, desc }) => (
                  <motion.div key={table} variants={scaleIn}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-extrabold text-white bg-[#00416a] rounded-lg px-2 py-1 shrink-0">{table}</span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">{title}</p>
                        <p className="text-gray-600 text-xs mt-1 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — Reconciliation ════════════════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="GSTR-9 Reconciliation">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                Why GSTR-9 Reconciliation is the Most Critical Step — and What Taxvio Checks
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  The term &quot;annual return&quot; understates what GSTR-9 actually requires: it demands a
                  full <strong>annual reconciliation</strong> — a systematic comparison of data from three
                  different sources (GSTR-1, GSTR-3B, and books of accounts / GSTR-2B) to identify and
                  explain every difference before filing. The GST department&apos;s analytics system
                  (<strong>DGARM</strong>) performs its own automated reconciliation of your GSTR-9 data
                  against your monthly returns — and any unexplained mismatch in turnover, ITC, or tax
                  payment automatically generates a risk score that can trigger scrutiny notices.
                </p>
                <p>
                  The most consequential reconciliation in GSTR-9 is the <strong>ITC reconciliation in
                  Table 8</strong> — comparing ITC as per GSTR-2B (what was auto-populated from supplier
                  filings) vs ITC availed in GSTR-3B (what was actually claimed). If GSTR-3B ITC exceeds
                  GSTR-2B ITC, the excess must be reviewed — it may represent ITC claimed on invoices
                  where the supplier did not file GSTR-1, or ITC claimed on ineligible items under
                  Section 17(5). Under <strong>Section 16(2)(aa)</strong> (effective from FY 2021-22
                  onwards), ITC is available only to the extent reflected in GSTR-2B — making this
                  reconciliation both legally mandated and financially significant.
                </p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {RECONCILIATION_POINTS.map(({ point, risk, desc }) => (
                  <motion.div key={point} variants={fadeUp}
                    className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-bold text-gray-800 text-sm">{point}</p>
                        <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${
                          risk === "High" ? "bg-red-100 text-red-700" :
                          risk === "Medium" ? "bg-amber-100 text-amber-700" :
                          "bg-green-100 text-green-700"
                        }`}>{risk} Risk</span>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PROCESS ══════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="GSTR-9 Filing Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GSTR-9 Filing Process — 6 Steps to Reconciled Annual Return
                </h2>
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
        <section className="py-16" style={{ background: "#00416a" }} aria-label="GSTR-9 Filing Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                GSTR-9 Filing Fee
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Includes full reconciliation. GSTR-9C charged separately for turnover above ₹5 crore.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan: "Up to ₹5 Crore Turnover", price: "₹2,999", highlight: false,
                  items: ["GSTR-9 filing", "GSTR-1 vs GSTR-3B reconciliation", "ITC vs GSTR-2B reconciliation", "HSN-wise summary (Table 17/18)", "Late fee advisory"],
                },
                {
                  plan: "₹5–20 Crore (with GSTR-9C)", price: "₹4,999", highlight: true,
                  items: ["Everything in Basic plan", "GSTR-9C self-certified reconciliation", "Books vs GST turnover match", "ITC books vs GSTR-9 analysis", "Auditor coordination support"],
                },
                {
                  plan: "Above ₹20 Crore", price: "₹7,999", highlight: false,
                  items: ["Everything in GSTR-9C plan", "Multi-GSTIN reconciliation", "Complex ITC reversal workings", "Demand pre-assessment review", "Audit readiness report"],
                },
              ].map(({ plan, price, highlight, items }) => (
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
        <section className="py-20 bg-white" aria-label="GSTR-9 FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-gray-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GSTR-9 Annual Return
                </h2>
                <p className="text-gray-500 mt-2 text-sm">Have questions? WhatsApp us — we reply within 15 minutes.</p>
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
              <h2 className="text-2xl font-extrabold text-[#00416a]">Related GST Services by Taxvio</h2>
              <p className="text-gray-500 text-sm mt-2">Complete annual and monthly GST compliance support</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title:"GST Return Filing",       href:"/serviceslist/gst/gst-return",       desc:"Monthly GSTR-1 & GSTR-3B — ₹499/month" },
                { title:"GST Notice Reply",         href:"/serviceslist/gst/gst-notice-reply", desc:"ASMT-10, DRC-01, SCN reply — ₹1,999" },
                { title:"GST Audit Assistance",     href:"/serviceslist/gst/gst-audit",        desc:"Section 65/66 audit support — ₹3,999" },
                { title:"GST Registration",         href:"/serviceslist/gst/gst-registration", desc:"New GSTIN in 3–7 days — ₹1,499" },
                { title:"GST Refund",               href:"/serviceslist/gst/gst-refund",       desc:"ITC refund & export refund — ₹2,499" },
                { title:"GST LUT Filing",           href:"/serviceslist/gst/gst-lut",          desc:"Export without IGST — ₹999/year" },
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
              <Zap size={14} className="text-yellow-400" /> Due 31 December — ₹200/day late fee accruing
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              File GSTR-9 with Full Annual Reconciliation
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              GSTR-1 vs GSTR-3B reconciliation, ITC vs GSTR-2B matching, HSN-wise summary, GSTR-9C
              for turnover above ₹5 crore. CA-assisted. Starting ₹2,999. Pan India.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — File GSTR-9 Now
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
              <span className="flex items-center gap-1.5"><Clock size={13} />Filed Before Deadline</span>
              <span className="flex items-center gap-1.5"><FileText size={13} />GSTR-9C Included (₹5Cr)</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — File GSTR-9 Today
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