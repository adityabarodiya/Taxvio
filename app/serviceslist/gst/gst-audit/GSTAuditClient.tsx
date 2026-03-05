"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle, Search,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST Audit Assistance.")}`;
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

const AUDIT_TYPES = [
  {
    icon: "🏛",
    name: "Departmental Audit (Section 65)",
    badge: "Most Common",
    badgeColor: "#2563eb",
    desc: "Conducted by a Commissioner or authorised GST officer at the taxpayer's business premises or in the department's office. Officers examine books of accounts, invoices, returns, and ITC claims. Notice in Form ADT-01 is issued at least 15 days prior. The audit must be completed within 3 months (extendable to 6 months).",
    trigger: "Selected based on risk parameters, turnover thresholds, or specific intelligence",
    outcome: "Audit report in ADT-04; demand notices under Section 73/74 if discrepancies found",
  },
  {
    icon: "👨‍⚖️",
    name: "Special Audit (Section 66)",
    badge: "High Stakes",
    badgeColor: "#dc2626",
    desc: "Ordered by the Deputy/Assistant Commissioner of GST with prior approval of the Commissioner when, during scrutiny or enquiry, it is felt that the value of taxable supply or ITC availed is not within normal limits. Audit is conducted by a nominated Chartered Accountant or Cost Accountant — not a department officer.",
    trigger: "Complex cases — large ITC discrepancies, transfer pricing issues, unusual valuations",
    outcome: "Special audit report within 90 days; costs borne by the department",
  },
  {
    icon: "📋",
    name: "Annual Return Scrutiny (GSTR-9 / 9C)",
    badge: "Preventive",
    badgeColor: "#059669",
    desc: "While not technically an 'audit', the annual return (GSTR-9) and reconciliation statement (GSTR-9C) filed by taxpayers above ₹5 crore serve as a self-audit mechanism. Discrepancies between GSTR-9C and audited financials frequently trigger departmental scrutiny under Section 61 or full audit under Section 65.",
    trigger: "Mismatches between GSTR-9C and GSTR-3B filings, unexplained ITC reversals",
    outcome: "Scrutiny notices under Section 61; potential escalation to departmental audit",
  },
  {
    icon: "🔍",
    name: "Scrutiny of Returns (Section 61)",
    badge: "Notice Stage",
    badgeColor: "#7c3aed",
    desc: "A pre-audit examination where the GST officer scrutinises filed returns for apparent discrepancies — such as differences between GSTR-1 and GSTR-3B, mismatch between GSTR-2A and claimed ITC, or unusual patterns. The officer issues notice in Form ASMT-10 for taxpayer's explanation.",
    trigger: "Automated system-generated alerts, GSTR-1 vs GSTR-3B mismatches, ITC anomalies",
    outcome: "ASMT-10 notice; taxpayer files ASMT-11 reply; may escalate to audit under Section 65",
  },
];

const DOCUMENTS = [
  { label: "GST Returns (All Years)",          sub: "GSTR-1, GSTR-3B, GSTR-9, GSTR-9C for all periods under audit" },
  { label: "Sales & Purchase Register",         sub: "Month-wise register showing all outward and inward supplies" },
  { label: "ITC Reconciliation Workings",       sub: "GSTR-2B vs books reconciliation for each month" },
  { label: "Audited Financial Statements",      sub: "P&L account, Balance Sheet, Trial Balance for relevant years" },
  { label: "All B2B & B2C Invoices",            sub: "Tax invoices, credit notes, debit notes for audit period" },
  { label: "E-Way Bills Register",              sub: "E-way bills generated and corresponding invoices" },
  { label: "Bank Statements",                   sub: "All business bank accounts for audit period" },
  { label: "Import / Export Documents",         sub: "Bill of entry, shipping bill, ICEGATE data if applicable" },
];

const RISK_TRIGGERS = [
  { risk: "GSTR-1 vs GSTR-3B Mismatch",         severity: "High",   color: "#dc2626", desc: "Declared outward supplies in GSTR-1 differ from summary in GSTR-3B — signals under-reporting or data error." },
  { risk: "Excess ITC vs GSTR-2B",               severity: "High",   color: "#dc2626", desc: "ITC claimed in GSTR-3B exceeds GSTR-2B auto-populated credit — non-compliant suppliers or fictitious claims." },
  { risk: "Turnover Suppression",                severity: "High",   color: "#dc2626", desc: "GST turnover lower than income tax / ROC filings — automated cross-verification by CBIC AI systems." },
  { risk: "Large ITC Reversals in GSTR-9",       severity: "Medium", color: "#ea580c", desc: "Significant ITC reversed in annual return compared to monthly claims — triggers reconciliation queries." },
  { risk: "High Cash Payments vs ITC Credits",   severity: "Medium", color: "#ea580c", desc: "Taxpayer pays most GST in cash despite being eligible for ITC — suggests ITC leakage or mismatch." },
  { risk: "Frequent Nil Returns + Refund Claims", severity: "Medium", color: "#ea580c", desc: "Pattern of nil GSTR-3B filings combined with refund applications attracts specific risk-based selection." },
  { risk: "Non-filing / Late Filing History",    severity: "Low",    color: "#2563eb", desc: "History of delayed or missed returns increases risk-based selection probability for departmental audit." },
];

const STEPS = [
  { n: "01", title: "Audit Notice Review",          desc: "Taxvio reviews the audit notice (ADT-01 or Section 66 order), identifies the audit period, scope, and specific areas of concern flagged by the department." },
  { n: "02", title: "Data Gathering & Compilation", desc: "We collect all relevant GST returns, invoices, ITC reconciliations, e-way bills, bank statements, and financial statements for the audit period." },
  { n: "03", title: "Pre-Audit Reconciliation",     desc: "Full reconciliation of GSTR-1 vs GSTR-3B, GSTR-2B vs ITC claimed, GSTR-9 vs audited financials — all discrepancies identified and addressed before the audit." },
  { n: "04", title: "Audit Preparation Brief",      desc: "Our CA prepares a comprehensive audit brief with explanations for each potential discrepancy area, supporting documents organised, and anticipated officer queries addressed." },
  { n: "05", title: "Representation During Audit",  desc: "Taxvio's CA represents you at the departmental audit — appearing before the GST officer, submitting documents, responding to queries, and presenting reconciliation workings." },
  { n: "06", title: "Demand Dispute (if any)",      desc: "If the audit results in a demand notice under Section 73/74, Taxvio prepares a detailed reply, files pre-SCN (Show Cause Notice) submissions, and represents at personal hearing." },
];

const FAQS = [
  {
    q: "What is GST audit under Section 65 and how is it triggered?",
    a: "Section 65 of the CGST Act empowers the Commissioner of GST or any officer authorised by them to conduct an audit of any registered person. A Section 65 audit is a departmental audit where GST officers examine the taxpayer's books of accounts, invoices, GST returns, ITC claims, and payment records to verify correctness of tax liability reported. Before initiating the audit, a notice in Form ADT-01 must be issued at least 15 working days in advance, specifying the period to be audited and the place and time of audit. The audit must be completed within 3 months from the date of commencement (extendable by a further 3 months with the approval of the Commissioner). Triggers for Section 65 audit include risk-based selection by CBIC's automated systems, mismatches between GSTR-1 and GSTR-3B, excess ITC claims, turnover discrepancies between GST and income tax filings, and intelligence inputs.",
  },
  {
    q: "What is a GST Special Audit under Section 66?",
    a: "A Special Audit under Section 66 is ordered by the Deputy/Assistant Commissioner of GST with prior approval of the Commissioner when, during any scrutiny, enquiry, investigation, or other proceedings, it appears that the value of taxable supplies declared or the ITC availed is not within normal limits, and such examination cannot be done through departmental resources. In a Special Audit, the department nominates a Chartered Accountant or Cost Accountant (not a department officer) to conduct the audit. The nominated CA must submit the audit report within 90 days (extendable). All expenses of the Special Audit — including the CA's fees — are borne by the GST department, not the taxpayer. Special Audits are typically reserved for complex, high-value cases involving intricate financial structures.",
  },
  {
    q: "What documents do I need to submit during a GST audit?",
    a: "During a GST departmental audit under Section 65, you are required to produce the following records and documents: all GST returns filed (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C) for the audit period; tax invoices, credit notes, debit notes, and bill of supply; purchase invoices and bills of entry (for imports); input tax credit working and GSTR-2B reconciliation; e-way bills generated and received; bank statements for all business accounts; audited financial statements (P&L, Balance Sheet, Trial Balance); stock registers and inventory records; job work records if applicable; and contract documents for services. Under Section 35 of the CGST Act, every registered person must maintain all records and retain them for 72 months (6 years) from the due date of filing the annual return for the relevant year.",
  },
  {
    q: "What happens if discrepancies are found during GST audit?",
    a: "If the GST audit under Section 65 or 66 reveals discrepancies — such as underpaid tax, excess ITC claimed, incorrect valuations, or unexplained transactions — the following sequence typically occurs: First, the audit team issues an audit report in Form ADT-04 communicating findings. The taxpayer is given an opportunity to pay the differential tax and interest voluntarily. If they do not, the department issues a pre-Show Cause Notice (pre-SCN) for taxpayer's response. If unresolved, a formal Show Cause Notice (SCN) under Section 73 (for non-fraud cases) or Section 74 (for fraud/wilful misstatement) is issued. A personal hearing is offered before finalising the demand. Penalty under Section 73 is 10% of the tax amount (or ₹10,000 minimum); under Section 74, it is 100% of the tax amount (fraud cases). Taxvio handles the entire audit findings response, pre-SCN submission, and personal hearing representation.",
  },
  {
    q: "What is the difference between GST audit under Section 65 and scrutiny under Section 61?",
    a: "Scrutiny of returns under Section 61 and audit under Section 65 are distinct proceedings with different scope and consequences. Section 61 scrutiny is a desk-based examination of filed GST returns — the officer issues Form ASMT-10 when automated systems detect discrepancies (e.g. GSTR-1 vs GSTR-3B mismatch, ITC anomalies). The taxpayer responds via Form ASMT-11. It is primarily return-level and does not involve physical inspection of books. Section 65 audit, by contrast, is a full examination of books of accounts, invoices, and underlying records — typically conducted at the taxpayer's premises or the department's office. Section 61 scrutiny often serves as a precursor to Section 65 audit if the taxpayer's ASMT-11 reply is not satisfactory. Both require professional handling — Taxvio covers both Section 61 (notice reply) and Section 65 (audit representation) as part of its GST audit assistance services.",
  },
  {
    q: "How long does GST audit take and can it be extended?",
    a: "A Section 65 departmental audit must be completed within 3 months from the date of commencement — the date on which the officer formally begins examination of books after the notice period. This period can be extended by the Commissioner for a further 3 months, taking the maximum total period to 6 months, if sufficient cause is shown. A Section 66 special audit must be completed by the nominated CA within 90 days from the date of direction, extendable by a further 90 days. The audit is considered 'commenced' on the date when the ADT-01 notice is served and the officer begins examining records — not the notice issuance date. For practical purposes, most Section 65 audits involving medium-complexity businesses are completed within 2–4 months.",
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
  name: "GST Audit Assistance India",
  serviceType: "GST Audit Assistance",
  description:
    "Expert GST audit assistance — Section 65 departmental audit, Section 66 special audit, ASMT-10 scrutiny reply, ITC reconciliation, audit representation and demand dispute. Starting ₹3,999. CA-assisted, pan India.",
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
    price: "3999",
    priceCurrency: "INR",
    description: "GST Audit Assistance — starting ₹3,999 including pre-audit reconciliation and representation.",
  },
};

export default function GSTAuditClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <>
      <Script id="gst-audit-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-audit-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GST Audit Assistance Services India" itemScope itemType="https://schema.org/Service">
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
                <li className="text-white font-medium">GST Audit Assistance</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    Received GST Audit Notice? Act Within 15 Days
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GST Audit Assistance —
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      Section 65 &amp; 66 Support
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    Expert CA assistance for GST departmental audits (Section 65), special audits
                    (Section 66), return scrutiny (Section 61 / ASMT-10), ITC reconciliation,
                    pre-audit preparation, and demand dispute representation. Starting at{" "}
                    <strong className="text-white">₹3,999</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> Get Audit Help on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ Section 65 & 66", "✅ Pre-Audit Reconciliation", "✅ Personal Hearing", "✅ Demand Reply"].map(tx => (
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
                      <p className="font-bold text-white text-lg">GST Audit Assistance — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon: "₹",  label: "Starting Fee",                val: "₹3,999" },
                        { icon: "⚖️", label: "Section 65 (Departmental)",   val: "Notice ADT-01 — 15 days" },
                        { icon: "👨‍⚖️", label: "Section 66 (Special Audit)", val: "90-day CA audit report" },
                        { icon: "📋", label: "Section 61 (Scrutiny)",       val: "ASMT-10 notice reply" },
                        { icon: "⏱", label: "Audit Completion",            val: "3–6 months (Sec. 65)" },
                        { icon: "🗺", label: "Coverage",                    val: "Pan India — All States" },
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
                        Get Audit Assistance — ₹3,999 →
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
            <span>Filing Returns?{" "}
              <Link href="/serviceslist/gst/gst-return" className="text-[#00416a] font-bold underline underline-offset-2">File GST Returns</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Annual Return?{" "}
              <Link href="/serviceslist/gst/gstr-9" className="text-[#00416a] font-bold underline underline-offset-2">File GSTR-9</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Got a notice?{" "}
              <Link href="/serviceslist/gst/gst-notice-reply" className="text-[#00416a] font-bold underline underline-offset-2">Reply to GST Notice</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 — What is GST Audit ═════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is GST Audit">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GST Audit and When Can the Department Audit Your Business?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A <strong>GST audit</strong> is a formal examination of a registered taxpayer&apos;s books
                  of accounts, invoices, GST returns, ITC claims, and payment records conducted by the
                  GST department to verify whether the taxpayer has correctly reported taxable turnover,
                  claimed Input Tax Credit within permissible limits, applied the correct GST rate, and
                  paid the applicable tax liability. GST audits are empowered under <strong>Sections 65
                  and 66 of the Central Goods and Services Tax Act, 2017</strong> and are a key enforcement
                  tool of the Central Board of Indirect Taxes and Customs (CBIC).
                </p>
                <p>
                  GST audit selection is no longer purely random — the CBIC uses an <strong>automated
                  risk-based selection system</strong> that cross-verifies data across multiple databases:
                  GSTR-1 vs GSTR-3B filings, GSTR-2B vs ITC claimed, GST turnover vs income tax Form
                  26AS and ITR filings, e-way bill data vs invoice data, and import/export records from
                  ICEGATE. Any significant discrepancy in these cross-verifications can trigger automated
                  selection for scrutiny under Section 61 (which issues an ASMT-10 notice) or escalation
                  to a full departmental audit under Section 65.
                </p>
                <p>
                  The <strong>consequences of a GST audit finding</strong> can be severe. If the audit
                  establishes short payment of tax due to genuine error or oversight, the demand is raised
                  under <strong>Section 73</strong> with a penalty of 10% of tax (minimum ₹10,000) plus
                  18% per annum interest. If the audit establishes tax evasion, fraudulent ITC claims,
                  or wilful misstatement, the demand is raised under <strong>Section 74</strong> with a
                  penalty of 100% of the tax evaded, plus interest. In the most serious fraud cases,
                  the department can initiate prosecution under Section 132 with criminal penalties.
                </p>
                <p>
                  Receiving a GST audit notice — whether ADT-01 (Section 65), an order under Section
                  66, or an ASMT-10 (Section 61 scrutiny) — is a time-sensitive situation. The ADT-01
                  notice under Section 65 gives the taxpayer a minimum of 15 working days&apos; advance
                  notice before the audit commences. Using this window to conduct a thorough
                  <strong> pre-audit reconciliation</strong>, identify and address discrepancies
                  proactively, organise all supporting documents, and prepare responses to anticipated
                  officer queries can significantly reduce the risk of a demand order. Taxvio&apos;s GST
                  audit assistance service begins the moment you receive the notice.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ AUDIT TYPES GRID ════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Types of GST Audit">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Audit Types
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Types of GST Audit — Section 65, Section 66 &amp; Scrutiny
                </h2>
                <p className="text-gray-600 mt-2 text-sm max-w-2xl mx-auto">
                  Each type of GST audit has a different legal basis, trigger, scope, and outcome.
                  Taxvio handles all four — from pre-audit prep to personal hearing representation.
                </p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-5">
                {AUDIT_TYPES.map(({ icon, name, badge, badgeColor, desc, trigger, outcome }) => (
                  <motion.div key={name} variants={scaleIn}
                    className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{icon}</span>
                      <span className="text-xs font-bold rounded-full px-2 py-1 text-white"
                        style={{ background: badgeColor }}>
                        {badge}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-[#00416a] mb-2">{name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="space-y-2 text-xs border-t border-gray-100 pt-3">
                      <div className="flex gap-2">
                        <span className="text-gray-400 shrink-0 font-semibold">Trigger:</span>
                        <span className="text-gray-700">{trigger}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-gray-400 shrink-0 font-semibold">Outcome:</span>
                        <span className="text-orange-700 font-medium">{outcome}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ AUDIT TIMELINE ══════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="GST Audit Timeline">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a]">
                  GST Departmental Audit Timeline — Section 65
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  From notice to final audit report — each stage has legal timelines. Taxvio manages every step.
                </p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { step: "01", title: "ADT-01 Notice Issued",        time: "D+0",       color: "#00416a", desc: "Audit notice issued — specifies audit period and date of commencement." },
                  { step: "02", title: "Pre-Audit Preparation",       time: "D+1 to D+15", color: "#2563eb", desc: "15-day window to reconcile data, organise documents, and prepare responses." },
                  { step: "03", title: "Audit Commencement",          time: "D+15",      color: "#ea580c", desc: "Officers examine books, invoices, returns, and ITC records. Taxvio represents you." },
                  { step: "04", title: "Audit Report (ADT-04)",       time: "D+15 to D+105", color: "#7c3aed", desc: "Audit completed within 3 months (90 days) of commencement. ADT-04 issued." },
                  { step: "05", title: "Voluntary Payment Option",    time: "Post ADT-04", color: "#059669", desc: "Taxpayer can voluntarily pay differential tax + interest before SCN to reduce penalty to 15%." },
                  { step: "06", title: "Pre-SCN Consultation",        time: "Before SCN", color: "#0891b2", desc: "Taxvio prepares pre-SCN reply presenting taxpayer's position to the department." },
                  { step: "07", title: "Show Cause Notice (SCN)",     time: "If unresolved", color: "#dc2626", desc: "SCN under Section 73/74 issued. Taxvio files formal reply and requests personal hearing." },
                  { step: "08", title: "Personal Hearing & Order",    time: "Final stage", color: "#00416a", desc: "Taxvio represents at personal hearing. Adjudication order passed. Appeals possible if needed." },
                ].map(({ step, title, time, color, desc }) => (
                  <motion.div key={step} variants={scaleIn}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs text-white mb-3"
                      style={{ background: color }}>
                      {step}
                    </div>
                    <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
                    <p className="text-xs font-semibold mb-2" style={{ color }}>{time}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — ITC Reconciliation & Risk ═════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="ITC Reconciliation for GST Audit">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                ITC Reconciliation, Common Audit Triggers &amp; How to Prepare
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The most common reason for GST audits — and the most significant source of demands
                  arising from audits — is <strong>Input Tax Credit (ITC) discrepancy</strong>. The CBIC&apos;s
                  DGARM (Directorate General of Analytics and Risk Management) uses advanced data analytics
                  to identify taxpayers where ITC claimed in GSTR-3B significantly exceeds ITC appearing
                  in GSTR-2B, where ITC claims appear disproportionate to the sector or turnover profile,
                  or where specific high-risk ITC categories (construction services, exempt supplies,
                  blocked credits under Section 17(5)) appear to have been incorrectly claimed.
                </p>
                <p>
                  <strong>Section 17(5) of the CGST Act</strong> specifies categories of ITC that are
                  blocked — meaning they cannot be claimed even though GST has been paid. These include
                  motor vehicles (for non-specified uses), food and beverages, outdoor catering, beauty
                  treatment, membership of clubs and gyms, works contract services for immovable property
                  (not plant/machinery), and goods/services for personal consumption. Incorrect ITC claims
                  on blocked categories are a frequent audit trigger and carry a 100% penalty under
                  Section 74 if treated as fraudulent.
                </p>
                <p>
                  <strong>Cross-verification with Form 26AS and AIS</strong> (Annual Information Statement)
                  is another growing trigger. CBIC has integrated its database with the income tax system
                  — if a business declares ₹2 crore turnover in GST returns but ₹5 crore appears in
                  Form 26AS from customer TDS deductions and bank credits, the discrepancy is automatically
                  flagged. Similarly, import data from ICEGATE is cross-verified with GSTR-3B to detect
                  under-reported supplies.
                </p>
                <p>
                  Taxvio&apos;s pre-audit preparation service includes a comprehensive <strong>GST health check</strong>:
                  full reconciliation of GSTR-1 vs GSTR-3B for each month of the audit period, GSTR-2B vs
                  books ITC reconciliation, identification of any Section 17(5) blocked credit claimed
                  incorrectly, turnover reconciliation with audited financials and Form 26AS, and e-way
                  bill to invoice mapping. Where genuine errors are identified, we advise on voluntary
                  payment (which reduces the Section 73 penalty from 10% to nil if paid within 30 days
                  of audit commencement) before the audit officer raises a formal demand.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ RISK TRIGGERS TABLE ═════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="GST Audit Risk Triggers">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Risk Assessment
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Common GST Audit Triggers — Is Your Business at Risk?
                </h2>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {RISK_TRIGGERS.map(({ risk, severity, color, desc }) => (
                  <motion.div key={risk} variants={scaleIn}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <AlertCircle size={16} style={{ color }} />
                      <span className="text-[10px] font-bold rounded-full px-2 py-0.5 text-white"
                        style={{ background: color }}>
                        {severity} Risk
                      </span>
                    </div>
                    <p className="font-bold text-gray-800 text-sm mb-1">{risk}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4">
                <AlertCircle size={22} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-800">Is your business showing any of these triggers?</p>
                  <p className="text-red-700 text-sm mt-1">A proactive GST health check can identify and resolve issues before the department does. Taxvio&apos;s audit readiness review identifies risk areas, reconciles data, and prepares your compliance position — before you receive a notice.</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 bg-[#00416a] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#002b45] transition">
                    Book Audit Readiness Review <ArrowRight size={12} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ DOCUMENTS ════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Documents for GST Audit">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Document Checklist
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Documents Required for GST Audit
                </h2>
                <p className="text-gray-600 mt-2 text-sm max-w-xl mx-auto">
                  Under Section 35 of the CGST Act, all records must be retained for 72 months (6 years)
                  from the due date of the relevant annual return. Taxvio helps compile and organise all records.
                </p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {DOCUMENTS.map(({ label, sub }) => (
                  <motion.div key={label} variants={scaleIn}
                    className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-all duration-200">
                    <FileText size={16} className="text-[#00416a] shrink-0 mt-0.5" />
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
        <section className="py-20 bg-white" aria-label="GST Audit Assistance Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Our Process
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  How Taxvio Handles Your GST Audit — 6 Stages
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  From notice to resolution — complete CA representation at every stage.
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
          aria-label="GST Audit Assistance Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                GST Audit Assistance Fee — No Hidden Charges
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                All plans include CA representation. Complex multi-year audits quoted separately.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan: "Scrutiny Reply (Section 61)", price: "₹1,999", highlight: false,
                  items: ["ASMT-10 notice analysis", "ASMT-11 reply drafting", "GSTR-1 vs GSTR-3B reconciliation", "ITC mismatch explanation", "WhatsApp support"],
                },
                {
                  plan: "Departmental Audit (Section 65)", price: "₹3,999", highlight: true,
                  items: ["ADT-01 notice review", "Pre-audit reconciliation", "Full document compilation", "CA representation during audit", "Demand reply / pre-SCN submission"],
                },
                {
                  plan: "Special Audit + Demand Defence", price: "₹7,999", highlight: false,
                  items: ["Section 66 special audit handling", "Full ITC health check", "Show Cause Notice (SCN) reply", "Personal hearing representation", "First appellate (GST officer) if needed"],
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
        <section className="py-20 bg-white" aria-label="GST Audit FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-gray-50 px-3 py-1 rounded-full border border-blue-100">
                  FAQ
                </span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GST Audit
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                  Got a GST audit notice? WhatsApp us now — we respond within 15 minutes.
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
        <section className="py-16 bg-gray-50" aria-label="Related GST Services">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-[#00416a]">Related GST Services by Taxvio</h2>
              <p className="text-gray-500 text-sm mt-2">Complete GST compliance and dispute resolution support</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "GST Notice Reply",       href: "/serviceslist/gst/gst-notice-reply",  desc: "ASMT-10, DRC-01, SCN reply — ₹1,999" },
                { title: "GSTR-9 Annual Return",   href: "/serviceslist/gst/gstr-9",            desc: "Annual reconciliation & filing — ₹2,999" },
                { title: "GST Return Filing",      href: "/serviceslist/gst/gst-return",        desc: "Monthly GSTR-1 & GSTR-3B — ₹499/month" },
                { title: "GST Refund",             href: "/serviceslist/gst/gst-refund",        desc: "Export & inverted duty refund — ₹2,499" },
                { title: "GST Registration",       href: "/serviceslist/gst/gst-registration",  desc: "New GSTIN in 3–7 days — ₹1,499" },
                { title: "GST E-Invoicing",        href: "/serviceslist/gst/gst-e-invoicing",   desc: "IRN, QR code & ERP setup — ₹1,999" },
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
              <Zap size={14} className="text-yellow-400" /> Act within 15 days of receiving ADT-01 notice
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Got a GST Audit Notice? Get Expert Help Now
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg"
              style={{ color: "rgba(255,255,255,0.72)" }}>
              CA-assisted GST audit support — Section 65 departmental audit, Section 66 special audit,
              ASMT-10 scrutiny reply, ITC reconciliation, demand dispute, and personal hearing
              representation. Starting ₹3,999. 100% online. Pan India.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Get Audit Help
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
              <span className="flex items-center gap-1.5"><Clock size={13} /> Fast Response</span>
              <span className="flex items-center gap-1.5"><Search size={13} /> Pre-Audit Reconciliation</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — GST Audit Help
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