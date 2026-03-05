"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle, XCircle,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I received a GST notice and need urgent help.")}`;
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

const NOTICE_TYPES = [
  {
    form: "ASMT-10",
    title: "Scrutiny of Returns",
    section: "Section 61 CGST Act",
    badge: "Most Common",
    badgeColor: "#2563eb",
    urgency: "30 days to respond",
    urgencyColor: "#ea580c",
    trigger: "Automated system detects discrepancy — GSTR-1 vs GSTR-3B mismatch, excess ITC vs GSTR-2B, or unusual return patterns.",
    reply: "ASMT-11",
    consequence: "If unsatisfactory: assessment order passed ex-parte under Section 62. If no reply: best judgment assessment.",
    docs: ["ITC reconciliation working", "GSTR-1 vs GSTR-3B comparison", "Supplier invoices / GSTR-2B", "Explanation for each discrepancy"],
  },
  {
    form: "DRC-01",
    title: "Demand Notice",
    section: "Section 73 / 74 CGST Act",
    badge: "High Stakes",
    badgeColor: "#dc2626",
    urgency: "30 days to pay or reply",
    urgencyColor: "#dc2626",
    trigger: "Tax officer determines tax is short paid, ITC wrongly availed, or tax evaded. Issued after audit, scrutiny, or investigation.",
    reply: "DRC-03 (payment) or written reply",
    consequence: "Non-response leads to confirmed demand order (DRC-07) — GSTIN may be attached, bank accounts frozen, or recovery initiated.",
    docs: ["All GST returns for demand period", "ITC register and reconciliation", "Purchase invoices matching ITC claims", "Business explanation for alleged discrepancy"],
  },
  {
    form: "REG-17",
    title: "Cancellation Show Cause Notice",
    section: "Section 29(2) CGST Act",
    badge: "Act Immediately",
    badgeColor: "#7c3aed",
    urgency: "7 working days to respond",
    urgencyColor: "#dc2626",
    trigger: "Non-filing of returns for 6 consecutive months (monthly) or 3 consecutive quarters (QRMP). Registration obtained by fraud.",
    reply: "REG-18 (reply to SCN)",
    consequence: "If no reply or unsatisfactory reply: REG-19 cancellation order issued. GSTIN becomes cancelled — buyer ITC on your invoices blocked.",
    docs: ["All pending returns filed before reply", "Reason for non-filing with supporting docs", "Proof of business continuity", "Undertaking to file future returns timely"],
  },
  {
    form: "DRC-01A",
    title: "Pre-SCN Intimation",
    section: "Section 73/74 CGST Act",
    badge: "Opportunity to Settle",
    badgeColor: "#059669",
    urgency: "Respond before SCN is issued",
    urgencyColor: "#059669",
    trigger: "Issued before formal Show Cause Notice — gives taxpayer an opportunity to voluntarily pay dues to avoid penalty escalation.",
    reply: "DRC-01A Part B (voluntary payment or reply)",
    consequence: "If dues paid voluntarily via DRC-03 within 30 days: penalty reduced to nil (Section 73) or 25% (Section 74). No penalty if paid before SCN.",
    docs: ["Liability calculation review", "DRC-03 payment challan if paying", "Written explanation if disputing liability", "Supporting invoices and return data"],
  },
  {
    form: "SCN (ADT-04 / General)",
    title: "Show Cause Notice — Post Audit",
    section: "Section 73 / 74 / 130 CGST Act",
    badge: "Formal Legal Notice",
    badgeColor: "#b45309",
    urgency: "As per notice (typically 30 days)",
    urgencyColor: "#dc2626",
    trigger: "Issued after departmental audit (Section 65), special audit (Section 66), or investigation. Demands explanation for specific tax shortfall.",
    reply: "Formal written reply + personal hearing request",
    consequence: "If unsatisfactory: adjudication order with full demand + 10% penalty (Section 73) or 100% penalty (Section 74 for fraud). Appealable to First Appellate Authority.",
    docs: ["Audit report (ADT-04) if available", "Books of accounts for demand period", "ITC reconciliation and reversal workings", "Legal argument and supporting case law"],
  },
  {
    form: "CMP-05",
    title: "Composition Scheme Show Cause",
    section: "Section 10 CGST Act",
    badge: "Scheme Cancellation Risk",
    badgeColor: "#0891b2",
    urgency: "15 days to respond",
    urgencyColor: "#ea580c",
    trigger: "Turnover exceeded composition scheme limit, or taxpayer found making inter-state or non-eligible supplies while registered under composition.",
    reply: "CMP-06 (reply to show cause)",
    consequence: "If scheme cancelled: taxpayer moved to regular scheme, IGST on inter-state supplies becomes payable from date of cancellation.",
    docs: ["Turnover calculation for all periods", "Proof of eligible composition supplies", "State-wise supply breakup", "Rectification undertaking if applicable"],
  },
];

const CONSEQUENCES = [
  { risk: "Ex-Parte Assessment Order",   desc: "If no reply to ASMT-10 within 30 days, officer passes best judgment assessment under Section 62 — demand confirmed without your input." },
  { risk: "DRC-07 Confirmed Demand",     desc: "Ignoring DRC-01 leads to a confirmed demand order. GST department can then initiate recovery — attaching your bank accounts or property." },
  { risk: "GSTIN Cancellation",          desc: "REG-17 notice without reply results in REG-19 cancellation. Your buyers lose ITC on your invoices — severe business relationship damage." },
  { risk: "100% Penalty for Fraud",      desc: "Section 74 notices (fraud/wilful misstatement) carry 100% penalty on the tax demand. Non-response worsens the outcome significantly." },
  { risk: "ITC Reversal + Interest",     desc: "Demand notices often include ITC reversal with 18% per annum interest — making delayed response financially very costly." },
  { risk: "Section 132 Prosecution",     desc: "In serious fraud cases, ignoring notices can escalate to criminal prosecution under Section 132 of the CGST Act." },
];

const STEPS = [
  { n:"01", title:"Notice Analysis",
    desc:"Taxvio reviews the notice — identifying the notice type (ASMT-10, DRC-01, REG-17, SCN), the section under which it is issued, the specific allegations or discrepancies mentioned, the reply deadline, and the available remedy." },
  { n:"02", title:"Data & Document Gathering",
    desc:"All relevant GST returns (GSTR-1, GSTR-3B, GSTR-2B), purchase/sale invoices, ITC reconciliation, books of accounts, and any prior correspondence with the department are collected for the notice period." },
  { n:"03", title:"Reconciliation & Root Cause Analysis",
    desc:"Taxvio reconciles GST returns against books to identify the actual source of the discrepancy — GSTR-1 vs GSTR-3B difference, ITC mismatch, rounding difference, or genuine liability. Each item in the notice is addressed point by point." },
  { n:"04", title:"Reply Drafting",
    desc:"A professional legal reply is drafted — citing relevant sections of the CGST Act, applicable CBIC circulars, and GST Council decisions — with clear explanations and supporting evidence for each allegation in the notice." },
  { n:"05", title:"Review & Approval",
    desc:"The draft reply is shared with you for review on WhatsApp. Corrections and additions are incorporated. Final reply is prepared with all annexures (reconciliation statements, invoice copies, computation sheets)." },
  { n:"06", title:"Filing on GST Portal + Personal Hearing",
    desc:"Reply is filed on the GST portal before the deadline. If a personal hearing is required, Taxvio's CA represents you before the GST officer — presenting the reply, responding to queries, and working toward a favourable order." },
];

const DOCS = [
  { label:"Copy of GST Notice",             sub:"Original notice document — notice number, date, and all attachments" },
  { label:"GST Returns for Notice Period",   sub:"GSTR-1, GSTR-3B, GSTR-2B for all months/quarters mentioned in notice" },
  { label:"Purchase & Sales Ledger",         sub:"Books of account entries matching the GST return period under scrutiny" },
  { label:"All Tax Invoices",                sub:"B2B purchase invoices for ITC claimed; sales invoices for outward supplies" },
  { label:"ITC Reconciliation Workings",     sub:"GSTR-2B vs books ITC comparison — showing matching and unmatched credits" },
  { label:"Previous Correspondence",         sub:"Any earlier notices, responses, or orders from the department on related issues" },
  { label:"E-Way Bills (if applicable)",     sub:"E-way bill register for the period — to reconcile against invoice data if demanded" },
  { label:"Bank Statements",                 sub:"For cross-verification of sale proceeds and payment of tax if required by notice" },
];

const FAQS = [
  {
    q: "What is an ASMT-10 notice and how do I respond to it?",
    a: "ASMT-10 is a scrutiny notice issued by the GST officer under Section 61 of the CGST Act when the automated system or manual review detects discrepancies in your filed returns. Common triggers include: GSTR-1 vs GSTR-3B mismatch (different outward supply values), ITC claimed in GSTR-3B exceeding GSTR-2B auto-populated credit, turnover in GST returns differing from Form 26AS or income tax returns, or unusual patterns like zero-liability returns combined with large ITC claims. The taxpayer must respond in Form ASMT-11 within 30 days of receipt of ASMT-10, explaining the discrepancy with supporting documents. If the officer is satisfied, no further action is taken. If unsatisfied, an assessment order under Section 62 is passed. Taxvio prepares the ASMT-11 response with point-by-point reconciliation of each discrepancy mentioned in the ASMT-10.",
  },
  {
    q: "What is DRC-01 and what happens if I don't respond?",
    a: "DRC-01 is a demand notice (Show Cause Notice) issued under Section 73 or Section 74 of the CGST Act when the GST officer determines that tax has been short paid, not paid, or Input Tax Credit has been wrongly availed or utilised. Section 73 applies to cases of genuine error or negligence (10% penalty); Section 74 applies to cases of fraud, wilful misstatement, or suppression of facts (100% penalty). Upon receiving DRC-01, the taxpayer has 30 days to either pay the demand via DRC-03 (with interest, and penalty reduced if paid voluntarily) or file a written reply disputing the demand. If no response is filed within 30 days, the officer issues a confirmed demand order in DRC-07 — which carries the full penalty and interest. The department can then initiate recovery proceedings — attaching bank accounts, property, or initiating prosecution under Section 132 for serious cases.",
  },
  {
    q: "What is REG-17 notice and can my GST registration be cancelled if I ignore it?",
    a: "REG-17 is a Show Cause Notice issued by the GST officer before cancelling a taxpayer's GST registration suo motu under Section 29(2) of the CGST Act. It is most commonly issued when a taxpayer has not filed GST returns for 6 consecutive months (monthly filers) or 3 consecutive quarters (QRMP scheme filers). The notice asks the taxpayer to show cause — explain why their GST registration should not be cancelled. The taxpayer must respond in Form REG-18 within 7 working days. If the reply is satisfactory, the officer drops the notice. If no reply is filed or the reply is unsatisfactory, the officer issues a cancellation order in Form REG-19 — permanently cancelling the GSTIN. Once cancelled, buyers cannot claim ITC on your invoices, and your business is effectively paralysed for GST purposes. Taxvio treats REG-17 as the highest-urgency notice type — we typically file all pending returns and submit the REG-18 reply within 2–3 days.",
  },
  {
    q: "What is a GST Show Cause Notice (SCN) and how does it differ from DRC-01?",
    a: "A GST Show Cause Notice (SCN) is a formal notice requiring the taxpayer to explain why a specific tax demand, penalty, or action (such as registration cancellation or ITC reversal) should not be imposed. DRC-01 is a specific type of SCN issued for tax demand under Section 73 or 74 — it is the most common type. Other SCNs can be issued under Section 130 (confiscation), Section 122 (general penalty), or after a departmental audit (ADT-04 followed by SCN). The key difference is that DRC-01 specifically triggers the demand proceedings timeline and penalty provisions of Sections 73/74, while general SCNs may relate to different violations. All GST SCNs must be responded to professionally — failing to respond or providing an inadequate reply results in an adverse ex-parte order that is much harder to challenge in appellate proceedings.",
  },
  {
    q: "What is DRC-01A and why is it important to respond before the SCN is issued?",
    a: "DRC-01A is a pre-SCN intimation — a communication issued under Section 73(5) or 74(5) of the CGST Act informing the taxpayer of the proposed demand before the formal Show Cause Notice (DRC-01) is issued. Its purpose is to give the taxpayer an opportunity to review the proposed liability and pay voluntarily — if the taxpayer pays the full demand + interest via DRC-03 within 30 days of DRC-01A, the penalty under Section 73 is reduced to nil (zero penalty). For Section 74 cases, paying at this stage reduces the penalty from 100% to 25% of the tax demanded. This is the most financially advantageous stage to resolve a GST demand — and why DRC-01A should never be ignored. Taxvio analyses every DRC-01A to determine whether the proposed liability is correct, and advises on whether to pay (for savings on penalty) or dispute (if the proposed liability is wrong).",
  },
  {
    q: "Can I represent myself in a GST personal hearing or do I need a CA?",
    a: "GST proceedings are quasi-judicial in nature — personal hearings before a GST officer or adjudicating authority are formal legal proceedings where you have a right to be heard before any adverse order is passed. While you can technically represent yourself, it is strongly advisable to have a qualified CA or GST advocate represent you for the following reasons: GST officers expect structured legal arguments citing specific sections, CBIC circulars, and judicial precedents; an unrepresented taxpayer often fails to place the complete record before the officer, leading to adverse orders; professional representatives know which arguments are accepted at the officer level vs. which require appellate forums; and a poor personal hearing outcome creates adverse findings that make first appellate proceedings more difficult. Taxvio's CA team attends personal hearings, prepares hearing notes in advance, and ensures the complete reconciliation and legal submission is before the officer before the hearing date.",
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
  name: "GST Notice Reply India",
  serviceType: "GST Notice Reply",
  description:
    "CA-assisted GST notice reply services — ASMT-10 (ASMT-11), DRC-01, REG-17 (REG-18), DRC-01A, Show Cause Notice, personal hearing representation. Starting ₹1,999. Pan India.",
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
    price: "1999",
    priceCurrency: "INR",
    description: "GST notice reply — ASMT-10, DRC-01, REG-17, SCN — starting ₹1,999.",
  },
};

export default function GSTNoticeReplyClient() {
  const [faqOpen, setFaqOpen]   = useState<number | null>(null);
  const [openNotice, setOpenNotice] = useState<number | null>(null);

  return (
    <>
      <Script id="gst-notice-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-notice-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GST Notice Reply Services India" itemScope itemType="https://schema.org/Service">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "26px 26px",
          }} />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(239,68,68,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
            <nav className="text-sm mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
                <li><Link href="/serviceslist/gst" className="hover:text-white transition">GST Services</Link></li>
                <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
                <li className="text-white font-medium">GST Notice Reply</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.4)" }}>
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    Received a GST Notice? Reply Within the Deadline — Act Now
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GST Notice Reply —
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      ASMT-10, DRC-01, REG-17 &amp; SCN
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    CA-assisted GST notice reply — professional legal drafting, ITC reconciliation,
                    and personal hearing representation. Starting at{" "}
                    <strong className="text-white">₹1,999</strong>. Reply filed before your deadline.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> WhatsApp — Get Urgent Help
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ ASMT-10 Reply", "✅ DRC-01 Response", "✅ REG-17 / REG-18", "✅ Personal Hearing"].map(tx => (
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
                      style={{ background: "rgba(239,68,68,0.15)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <p className="font-bold text-white text-lg flex items-center gap-2">
                        <AlertCircle size={18} className="text-red-400" /> Notice Deadlines — Act Fast
                      </p>
                    </div>
                    <div className="p-6 space-y-3">
                      {[
                        { form:"ASMT-10", deadline:"30 days",          urgency:"high" },
                        { form:"DRC-01",  deadline:"30 days to pay/reply", urgency:"high" },
                        { form:"DRC-01A", deadline:"30 days (pre-SCN)", urgency:"medium" },
                        { form:"REG-17",  deadline:"7 working days",    urgency:"critical" },
                        { form:"SCN",     deadline:"As stated in notice", urgency:"high" },
                        { form:"CMP-05",  deadline:"15 days",           urgency:"medium" },
                      ].map(({ form, deadline, urgency }) => (
                        <div key={form} className="flex justify-between items-center text-sm">
                          <span className="font-mono font-bold text-white">{form}</span>
                          <span className={`text-xs font-bold rounded-full px-2.5 py-1 ${
                            urgency === "critical" ? "bg-red-500/30 text-red-300" :
                            urgency === "high" ? "bg-orange-500/30 text-orange-300" :
                            "bg-yellow-500/20 text-yellow-300"
                          }`}>{deadline}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 pb-6">
                      <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="block w-full text-center bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold transition hover:scale-105">
                        Get Urgent Notice Help →
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
            <span>Got a GST audit notice?{" "}
              <Link href="/serviceslist/gst/gst-audit" className="text-[#00416a] font-bold underline underline-offset-2">GST Audit Assistance</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>File pending returns?{" "}
              <Link href="/serviceslist/gst/gst-return" className="text-[#00416a] font-bold underline underline-offset-2">File GST Returns</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>GSTIN cancelled?{" "}
              <Link href="/serviceslist/gst/gst-cancellation" className="text-[#00416a] font-bold underline underline-offset-2">Apply for Revocation</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is a GST Notice">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is a GST Notice and Why Do Taxpayers Receive Them?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A <strong>GST notice</strong> is a formal written communication issued by the GST
                  department to a registered taxpayer requiring a response — either an explanation,
                  additional information, payment of tax, or appearance before an officer. GST notices
                  are issued under specific sections of the <strong>Central Goods and Services Tax
                  (CGST) Act, 2017</strong> and the corresponding State GST Acts. Each notice type has
                  a prescribed response form, a specific deadline, and specific consequences for
                  non-compliance.
                </p>
                <p>
                  The GST department&apos;s risk-based selection system — operated by the <strong>DGARM
                  (Directorate General of Analytics and Risk Management)</strong> — uses advanced data
                  analytics to cross-verify taxpayer data across multiple databases: GSTR-1 vs GSTR-3B
                  (supply declared vs tax paid), GSTR-2B vs ITC claimed (credit available vs credit taken),
                  GST turnover vs income tax Form 26AS and ITR turnover, e-way bill data vs invoice data,
                  and ICEGATE import/export data. Any significant mismatch triggers an automated alert
                  that results in the issuance of a scrutiny notice (ASMT-10) or a pre-demand
                  communication (DRC-01A).
                </p>
                <p>
                  Notices can also arise from <strong>departmental audits under Section 65</strong>
                  (conducted by GST officers at the taxpayer&apos;s premises), <strong>special audits
                  under Section 66</strong> (conducted by a nominated CA/CMA), field inspections under
                  Section 67, intelligence inputs from informers, or information shared by other tax
                  authorities (Income Tax, Customs, SFIO). Understanding which trigger resulted in the
                  notice is essential for preparing an effective reply — and Taxvio&apos;s first step in
                  every case is a root-cause analysis before drafting begins.
                </p>
                <p>
                  The most critical rule in GST notice management: <strong>never ignore a notice and
                  never miss the deadline</strong>. GST notices are legal communications — failure to
                  respond or providing an inadequate reply leads to ex-parte orders (passed without your
                  input) that impose the maximum penalty and full tax demand. These orders are much harder
                  and more expensive to challenge in appeal than a properly defended first-stage response.
                  The cheapest and fastest resolution is always at the notice stage — not at the
                  adjudication or appellate stage.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ NOTICE TYPE ACCORDIONS ═══════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Types of GST Notices">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Notice Types
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  6 Types of GST Notices — Triggers, Deadlines &amp; Consequences
                </h2>
                <p className="text-gray-600 mt-2 text-sm">Click any notice to see triggers, reply form, and consequence of non-response.</p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {NOTICE_TYPES.map((n, i) => (
                  <motion.div key={n.form} variants={fadeUp}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenNotice(openNotice === i ? null : i)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className="font-mono font-extrabold text-[#00416a] text-base shrink-0">{n.form}</span>
                        <div className="min-w-0">
                          <span className="font-bold text-gray-800 text-sm">{n.title}</span>
                          <span className="text-xs text-gray-500 ml-2 hidden sm:inline">{n.section}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-bold rounded-full px-2.5 py-1 text-white hidden sm:inline"
                          style={{ background: n.badgeColor }}>{n.badge}</span>
                        <span className="text-xs font-bold rounded-full px-2.5 py-1"
                          style={{ background: "#fef2f2", color: n.urgencyColor }}>{n.urgency}</span>
                        <ChevronDown size={16} className={`text-[#00416a] transition-transform duration-300 ${openNotice === i ? "rotate-180" : ""}`} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {openNotice === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-gray-100">
                          <div className="px-6 py-5 grid sm:grid-cols-2 gap-5">
                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">What Triggers It</p>
                              <p className="text-sm text-gray-700">{n.trigger}</p>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Reply Form</p>
                              <p className="text-sm font-mono font-bold text-[#00416a]">{n.reply}</p>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-3 mb-1">Consequence of No Reply</p>
                              <p className="text-sm text-red-700">{n.consequence}</p>
                            </div>
                            <div className="sm:col-span-2">
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Key Documents Needed</p>
                              <div className="flex flex-wrap gap-2">
                                {n.docs.map(d => (
                                  <span key={d} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1">{d}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="px-6 pb-5">
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition hover:scale-105">
                              <MessageCircle size={13} /> Get Help with {n.form} Reply
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ CONSEQUENCES ══════════════════════════════════════════════════ */}
        <section className="py-16 bg-red-50 border-y border-red-100" aria-label="Consequences of Ignoring GST Notice">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-red-800">
                  What Happens If You Ignore a GST Notice?
                </h2>
                <p className="text-red-700 text-sm mt-2">6 serious consequences of missing the reply deadline.</p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {CONSEQUENCES.map(({ risk, desc }) => (
                  <motion.div key={risk} variants={scaleIn}
                    className="bg-white border border-red-200 rounded-2xl p-5 flex items-start gap-3">
                    <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-800 text-sm">{risk}</p>
                      <p className="text-red-700 text-xs mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="text-center mt-8">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:scale-105 transition-all">
                  <Zap size={18} /> Get Urgent Notice Help — Don&apos;t Miss the Deadline
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — Drafting & Hearing ════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="GST Notice Reply Drafting and Hearing">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What Makes a Good GST Notice Reply — and Why Legal Drafting Matters
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A GST notice reply is not a simple email — it is a formal legal submission that becomes
                  part of the official record in a quasi-judicial proceeding. The quality of the reply
                  determines not just the immediate outcome (whether the officer accepts or rejects it)
                  but also the strength of your position in any subsequent appeal to the <strong>First
                  Appellate Authority, GST Appellate Tribunal (GSTAT)</strong>, or High Court. An
                  inadequate reply that misses key legal arguments cannot easily be supplemented at
                  the appellate stage — appellate authorities are reluctant to admit new defences that
                  were available at the adjudicating stage but not raised.
                </p>
                <p>
                  A proper GST notice reply must: (1) address every specific point raised in the notice —
                  not just the ones that are easy to answer; (2) cite the relevant sections of the CGST
                  Act, IGST Act, and CGST Rules that support the taxpayer&apos;s position; (3) reference
                  applicable <strong>CBIC Circulars and Notifications</strong> that clarify the law on
                  the disputed point; (4) cite relevant <strong>GST Council decisions and judicial
                  precedents</strong> from the GST Appellate Authority or High Courts; (5) include a
                  complete reconciliation statement addressing the specific discrepancy mentioned — not
                  just a general statement that returns are correct; and (6) attach all supporting
                  evidence as numbered annexures that are clearly referenced in the reply text.
                </p>
                <p>
                  For notices where a <strong>personal hearing</strong> is requested (which is the right
                  of every taxpayer under Section 75(4) of the CGST Act), the oral submissions before
                  the officer are as important as the written reply. The hearing is an opportunity to
                  clarify, supplement the reply, and address the officer&apos;s specific concerns before
                  an adverse order is passed. Taxvio&apos;s CA team prepares a <strong>hearing note</strong>
                  — a point-by-point argument document — before every personal hearing, ensuring no
                  critical issue is missed in the oral submission.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ DOCUMENTS ════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Documents for GST Notice Reply">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Document Checklist
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Documents Needed to Reply to a GST Notice
                </h2>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {DOCS.map(({ label, sub }) => (
                  <motion.div key={label} variants={scaleIn}
                    className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-all">
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
        <section className="py-20 bg-white" aria-label="GST Notice Reply Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST Notice Reply Process — 6 Steps to a Filed Response
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  WhatsApp us your notice — reply drafted and filed well before your deadline.
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
        <section className="py-16" style={{ background: "#00416a" }} aria-label="GST Notice Reply Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                GST Notice Reply Fee
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Fixed fee per notice. Personal hearing charged separately per hearing date.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan: "Scrutiny Reply", price: "₹1,999", highlight: false,
                  items: ["ASMT-10 notice analysis", "ASMT-11 reply drafting", "GSTR-1 vs GSTR-3B reconciliation", "ITC mismatch explanation", "Filed before deadline"],
                },
                {
                  plan: "Demand / SCN Reply", price: "₹3,499", highlight: true,
                  items: ["DRC-01 / DRC-01A / REG-17 / SCN", "Full ITC reconciliation workings", "Legal drafting with case law", "Pre-SCN payment advisory (DRC-03)", "Personal hearing preparation"],
                },
                {
                  plan: "Full Adjudication Support", price: "₹6,999", highlight: false,
                  items: ["Everything in Demand Reply plan", "Personal hearing representation", "Post-hearing submissions", "First appellate preparation (if needed)", "Unlimited query support"],
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
        <section className="py-20 bg-white" aria-label="GST Notice Reply FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-gray-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GST Notice Reply
                </h2>
                <p className="text-gray-500 mt-2 text-sm">WhatsApp us your notice — we reply within 15 minutes.</p>
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
              <p className="text-gray-500 text-sm mt-2">Complete GST compliance and dispute resolution support</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title:"GST Audit Assistance",   href:"/serviceslist/gst/gst-audit",        desc:"Section 65/66 audit support — ₹3,999" },
                { title:"GST Return Filing",       href:"/serviceslist/gst/gst-return",       desc:"Monthly GSTR-1 & GSTR-3B — ₹499/month" },
                { title:"GSTR-9 Annual Return",    href:"/serviceslist/gst/gstr-9",           desc:"Annual reconciliation & filing — ₹2,999" },
                { title:"GST Cancellation",        href:"/serviceslist/gst/gst-cancellation", desc:"REG-16 cancellation + GSTR-10 — ₹1,499" },
                { title:"GST Registration",        href:"/serviceslist/gst/gst-registration", desc:"New GSTIN in 3–7 days — ₹1,499" },
                { title:"GST Refund",              href:"/serviceslist/gst/gst-refund",       desc:"ITC refund, export refund — ₹2,499" },
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
            style={{ background: "radial-gradient(circle,rgba(239,68,68,0.1) 0%,transparent 70%)" }} />
          <motion.div className="relative max-w-3xl mx-auto px-6 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 text-white"
              style={{ background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.35)" }}>
              <AlertCircle size={14} className="text-red-400" /> Don&apos;t miss the deadline — ex-parte orders are irreversible
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Got a GST Notice? Reply Before the Deadline
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              ASMT-10, DRC-01, REG-17, SCN, DRC-01A — Taxvio drafts and files your reply with full
              legal arguments, ITC reconciliation, and personal hearing support. Starting ₹1,999.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Urgent Notice Help
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
              <span className="flex items-center gap-1.5"><Clock size={13} />Reply Before Deadline</span>
              <span className="flex items-center gap-1.5"><FileText size={13} />Legal Drafting Included</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            🚨 WhatsApp — Reply to GST Notice Now
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