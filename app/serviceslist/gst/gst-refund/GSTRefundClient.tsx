"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle,
  Banknote, TrendingUp, Globe, RefreshCw,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST Refund application.")}`;
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

const REFUND_TYPES = [
  {
    icon: "🚢",
    title: "Export Refund — ITC on Inputs (LUT Route)",
    section: "Section 54(3) CGST Act",
    badge: "Most Common for Exporters",
    badgeColor: "#2563eb",
    who: "GST-registered exporters who file LUT and export without paying IGST",
    formula: "Refund = Net ITC × (Turnover of zero-rated supplies / Adjusted total turnover)",
    cap: "Capped at the formula-based amount — not actual ITC balance",
    deadline: "2 years from the 'relevant date' (date of export / date of foreign exchange receipt for services)",
    form: "RFD-01",
    docs: ["Shipping bills / bills of export", "Export invoices", "GSTR-1 (Table 6A)", "GSTR-3B", "FIRC / bank realisation certificate (services)", "ITC register and computation"],
  },
  {
    icon: "✈️",
    title: "Export Refund — IGST Paid Route",
    section: "Section 16(3)(b) IGST Act",
    badge: "Auto-processed via ICEGATE",
    badgeColor: "#059669",
    who: "Exporters who paid IGST on export invoices (without LUT) and want IGST refunded",
    formula: "Refund = IGST paid on export invoices matched with shipping bill data in ICEGATE",
    cap: "Full IGST paid on exports — no formula cap",
    deadline: "2 years from date of export",
    form: "No RFD-01 needed — auto-processed via GSTR-1 & ICEGATE integration",
    docs: ["Shipping bill with IGST details", "Export invoices", "GSTR-1 (Table 6A with IGST column filled)", "GSTR-3B (IGST liability discharged)"],
  },
  {
    icon: "🔄",
    title: "Inverted Duty Structure Refund",
    section: "Section 54(3)(ii) CGST Act",
    badge: "Manufacturing & Trading",
    badgeColor: "#7c3aed",
    who: "Businesses where GST rate on inputs is higher than GST rate on output supplies — ITC accumulates and cannot be utilised",
    formula: "Refund = Net ITC × (Turnover of inverted rated supplies / Adjusted total turnover) − tax paid on inverted rated supplies",
    cap: "Refund of ITC on inputs only — not on input services or capital goods",
    deadline: "2 years from the end of the tax period for which refund is claimed",
    form: "RFD-01",
    docs: ["Input invoices with higher GST rate", "Output invoices with lower GST rate", "GSTR-3B for claim period", "ITC accumulation computation", "Statement 1A (inverted duty workings)"],
  },
  {
    icon: "💰",
    title: "Excess Cash Ledger Refund",
    section: "Section 54(1) CGST Act",
    badge: "Overpayment Recovery",
    badgeColor: "#ea580c",
    who: "Taxpayers who have paid more GST (CGST, SGST, IGST) than their actual liability — excess sits in Electronic Cash Ledger",
    formula: "Refund = Excess amount in Cash Ledger after adjusting all liabilities for the period",
    cap: "Full excess cash balance — no formula restriction",
    deadline: "2 years from date of payment of excess tax",
    form: "RFD-01",
    docs: ["Payment challans (PMT-06)", "GSTR-3B returns for the period", "Cash ledger statement", "Liability computation showing excess"],
  },
  {
    icon: "🏭",
    title: "Refund on Cancelled Registration",
    section: "Section 54 CGST Act",
    badge: "Post Cancellation",
    badgeColor: "#b45309",
    who: "Taxpayers whose GST registration has been cancelled — cash balance remaining in Electronic Cash Ledger after filing GSTR-10",
    formula: "Refund = Cash Ledger balance after GSTR-10 ITC reversal and final liability settlement",
    cap: "Only cash ledger balance — ITC credit ledger balance lapses on cancellation",
    deadline: "2 years from date of GSTR-10 filing",
    form: "RFD-01",
    docs: ["GSTR-10 (filed final return)", "Cancellation order REG-19", "Cash ledger statement post-cancellation", "Bank account details for refund credit"],
  },
  {
    icon: "🌐",
    title: "SEZ Unit / Developer Supply Refund",
    section: "Section 16(3) IGST Act",
    badge: "SEZ Suppliers",
    badgeColor: "#0891b2",
    who: "Registered businesses supplying goods or services to SEZ units or SEZ developers (treated as zero-rated supplies)",
    formula: "Same as export refund — Net ITC × (SEZ supply turnover / Adjusted total turnover)",
    cap: "Formula-based cap applies; refund of ITC on inputs used in SEZ supplies",
    deadline: "2 years from relevant date of SEZ supply",
    form: "RFD-01 (with endorsement from Specified Officer of SEZ)",
    docs: ["Tax invoice to SEZ unit", "Endorsement from SEZ Specified Officer confirming goods/services received", "LUT (if supplying without IGST)", "ITC computation for SEZ supplies"],
  },
];

const REJECTION_REASONS = [
  { reason: "GSTR-1 / GSTR-3B Not Filed",         fix: "All returns for the refund claim period must be filed before RFD-01 submission. Taxvio files all pending returns first." },
  { reason: "Shipping Bill Data Mismatch (IGST Route)", fix: "Invoice value, GSTIN, and HSN in GSTR-1 must match ICEGATE shipping bill data exactly. Taxvio validates before filing." },
  { reason: "Refund Formula Miscalculation",        fix: "Inverted duty and LUT route refunds use specific formulas — errors in turnover figures cause rejection. Taxvio computes precisely." },
  { reason: "Deficiency Memo (RFD-03) Not Replied", fix: "If officer issues RFD-03 deficiency memo, taxpayer must resubmit corrected application within 2 years. Taxvio tracks and responds." },
  { reason: "Input Service / Capital Goods ITC Included (Inverted Duty)", fix: "Inverted duty refund covers ITC on inputs only — not input services or capital goods. Taxvio segments correctly." },
  { reason: "FIRC Not Available for Service Export",  fix: "Foreign Inward Remittance Certificate or BRC needed for service export refund. Taxvio advises on bank document collection." },
];

const PROCESS_STEPS = [
  { n:"01", title:"Refund Category Assessment",
    desc:"Taxvio identifies which refund type applies — LUT export, IGST-paid export, inverted duty, excess cash, SEZ supply, or post-cancellation. Each category has different formula, documents, and relevant date for the 2-year deadline." },
  { n:"02", title:"Turnover & ITC Computation",
    desc:"For formula-based refunds (LUT route, inverted duty, SEZ), Taxvio computes net ITC, zero-rated turnover, and adjusted total turnover as per Rule 89 of the CGST Rules — the most common source of error in DIY refund applications." },
  { n:"03", title:"Return Filing Verification",
    desc:"All GSTR-1 and GSTR-3B for the refund period are verified — export tables (Table 6A), ITC tables (Table 4), and tax payment rows. Missing or incorrect return data is corrected before RFD-01 is filed." },
  { n:"04", title:"Document Compilation",
    desc:"All supporting documents are compiled — shipping bills, export invoices, FIRC/BRC for service exports, endorsement from SEZ Specified Officer, input invoices for ITC, payment challans, bank statements." },
  { n:"05", title:"RFD-01 Filing on GST Portal",
    desc:"Refund application in Form RFD-01 is filed with the correct statement (Statement 3, 3A, 5A, etc. depending on refund type) and all supporting documents uploaded. ARN generated on filing." },
  { n:"06", title:"RFD-03 / Officer Query Response",
    desc:"If the GST officer issues a deficiency memo (RFD-03) or query, Taxvio prepares and files the response with corrected documentation. Taxvio tracks the application status and follows up for timely sanction and bank credit." },
];

const FAQS = [
  {
    q: "What are the different types of GST refund and who is eligible for each?",
    a: "There are six main categories of GST refund: (1) Export refund via LUT route — exporters who file LUT and export without IGST claim accumulated ITC refund on inputs via RFD-01, computed using the formula in Rule 89(4) of the CGST Rules; (2) Export refund via IGST-paid route — exporters who pay IGST on invoices and get auto-refund via ICEGATE-GSTR-1 integration, no RFD-01 needed; (3) Inverted duty structure refund — businesses where input GST rate exceeds output GST rate (e.g., buying goods at 18% GST and selling at 5% GST) accumulate ITC that cannot be offset, refundable via Section 54(3)(ii); (4) Excess cash ledger refund — taxpayers who overpaid GST (more than actual liability) can claim excess via RFD-01; (5) Post-cancellation cash refund — cancelled GSTINs can claim cash ledger balance after GSTR-10 filing via RFD-01; (6) SEZ supplier refund — businesses supplying to SEZ units/developers claim ITC refund on inputs used in SEZ supplies.",
  },
  {
    q: "What is the time limit for filing a GST refund application?",
    a: "Under Section 54(1) of the CGST Act, a GST refund application must be filed within 2 years from the 'relevant date' — which varies by refund type: For export of goods: 2 years from the date on which the ship/aircraft departed India (date of export); For export of services: 2 years from the date of receipt of convertible foreign exchange (FIRC date); For inverted duty structure: 2 years from the end of the financial year in which the refund claim arose; For excess cash payment: 2 years from the date of payment of the excess tax; For SEZ supplies: 2 years from the date of supply to SEZ. Missing the 2-year deadline is fatal — late refund applications are not accepted by the GST portal. Taxvio tracks refund eligibility and proactively reminds clients of upcoming deadlines.",
  },
  {
    q: "How is the GST refund amount calculated for exporters on the LUT route?",
    a: "For exporters filing LUT (exporting without paying IGST), the refund is of accumulated ITC on inputs — not the IGST on exports. The refund amount is calculated using the formula in Rule 89(4) of the CGST Rules: Refund Amount = (Net ITC × Turnover of zero-rated supplies) / Adjusted total turnover. Where: Net ITC = Total ITC availed during the period minus ITC reversed (for the refund period); Turnover of zero-rated supplies = export turnover (FOB value of goods + foreign exchange received for services); Adjusted total turnover = total turnover minus exempt supplies, nil-rated supplies, and turnover already refunded. The refund cannot exceed the formula-computed amount even if the actual ITC balance is higher. This formula computation is the most common source of error in self-filed refund applications — Taxvio prepares the exact computation as per Rule 89(4) to maximise your eligible refund.",
  },
  {
    q: "What is an inverted duty structure refund and who can claim it?",
    a: "An inverted duty structure exists when the GST rate on inputs (purchases) is higher than the GST rate on output supplies (sales). Because the ITC earned on high-GST inputs exceeds the output tax liability on low-GST sales, ITC accumulates in the Electronic Credit Ledger and cannot be utilised — it just keeps growing. Section 54(3)(ii) of the CGST Act allows refund of such unutilised ITC on inputs (not input services or capital goods). Common industries affected: fabric sellers (5% output GST, 12% input GST on yarn), certain food processors, footwear (5% output, 12% input on components), and fertiliser dealers. The refund formula under Rule 89(5) is: Refund = Net ITC × (Turnover of inverted-rated supplies × Applicable rate of refund / Adjusted total turnover) minus tax paid on inverted supplies at the concessional rate. Taxvio computes the exact eligible refund amount and segments ITC correctly between inputs (eligible) and input services/capital goods (not eligible).",
  },
  {
    q: "What is a deficiency memo (RFD-03) and how does it affect my refund?",
    a: "An RFD-03 is a deficiency memo issued by the GST officer when the refund application (RFD-01) has incomplete documents, incorrect computation, or other deficiencies that prevent processing. Upon receiving RFD-03, the original refund application (RFD-01) is effectively invalidated — the taxpayer must resubmit a fresh, corrected application. The critical point: the 2-year time limit still applies to the resubmission — so if RFD-03 is received close to the 2-year deadline, the taxpayer may have very little time to resubmit. The GST portal currently does not allow amendment of a submitted RFD-01; a new application must be filed. Common reasons for RFD-03: GSTR-1/3B data not matching refund application data, shipping bill data mismatch for IGST-route refunds, incorrect formula computation, missing endorsement from SEZ Specified Officer, FIRC/BRC not uploaded for service exports. Taxvio pre-validates all these points before filing RFD-01, significantly reducing RFD-03 risk.",
  },
  {
    q: "How long does GST refund processing take and what happens after RFD-01 is filed?",
    a: "The statutory timeline for GST refund processing under Section 54 of the CGST Act is: Within 15 days of filing RFD-01: An acknowledgement (RFD-02) is issued if documents are complete, or a deficiency memo (RFD-03) is issued if there are gaps. Within 60 days of RFD-02 acknowledgement: The officer must issue a refund sanction order (RFD-06) for the admitted amount. If the officer fails to sanction within 60 days, interest at 6% per annum is payable by the department on the delayed amount (Section 56 CGST Act). Within a few days of RFD-06: Refund amount is electronically credited directly to the bank account registered on the GST portal. In practice, timelines depend heavily on the officer's workload and the completeness of the application. Export IGST-route refunds are largely auto-processed through ICEGATE and are generally faster (often 2–4 weeks). LUT-route ITC refunds and inverted duty refunds typically take 45–90 days in practice. Taxvio actively follows up with the jurisdictional refund processing officer to expedite sanctioning.",
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
  name: "GST Refund Application India",
  serviceType: "GST Refund Filing",
  description:
    "CA-assisted GST refund filing — export refund (LUT & IGST route), inverted duty structure, excess cash ledger, SEZ supply, post-cancellation. RFD-01 filing, Rule 89 computation, RFD-03 response. Starting ₹2,499. Pan India.",
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
    price: "2499",
    priceCurrency: "INR",
    description: "GST refund application — RFD-01, Rule 89 computation, export refund, inverted duty. Starting ₹2,499.",
  },
};

export default function GSTRefundClient() {
  const [faqOpen, setFaqOpen]     = useState<number | null>(null);
  const [openType, setOpenType]   = useState<number | null>(0);

  return (
    <>
      <Script id="gst-refund-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-refund-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GST Refund Application Services India" itemScope itemType="https://schema.org/Service">
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
                <li className="text-white font-medium">GST Refund</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    2-Year Deadline — Don&apos;t Let Your Refund Lapse
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GST Refund Application —
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      Export, Inverted Duty &amp; ITC Refund
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    CA-assisted GST refund filing — export refund (LUT &amp; IGST route), inverted duty
                    structure, excess cash ledger, SEZ supplier, and post-cancellation refund.
                    Rule 89 computation, RFD-01 filing, officer query handling. Starting at{" "}
                    <strong className="text-white">₹2,499</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> Apply for Refund on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ Export Refund (LUT + IGST)", "✅ Inverted Duty", "✅ Rule 89 Computation", "✅ RFD-03 Response"].map(tx => (
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
                      <p className="font-bold text-white text-lg">GST Refund — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon:"₹",  label:"Starting Fee",         val:"₹2,499" },
                        { icon:"📋", label:"Form",                 val:"RFD-01 on GST Portal" },
                        { icon:"⏱", label:"Statutory Timeline",   val:"60 days from RFD-02" },
                        { icon:"📅", label:"Filing Deadline",      val:"2 years from relevant date" },
                        { icon:"💰", label:"Interest on Delay",    val:"6% p.a. if not sanctioned in 60 days" },
                        { icon:"🗺", label:"Coverage",             val:"Pan India — All Refund Types" },
                      ].map(({ icon, label, val }) => (
                        <div key={label} className="flex justify-between items-center text-sm">
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>{icon} {label}</span>
                          <span className="font-bold text-white text-right max-w-[55%]">{val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 pb-6">
                      <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition hover:scale-105">
                        Start Refund Application — ₹2,499 →
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
            <span>File GST Returns?{" "}
              <Link href="/serviceslist/gst/gst-return" className="text-[#00416a] font-bold underline underline-offset-2">File GST Returns</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>File LUT for exports?{" "}
              <Link href="/serviceslist/gst/gst-lut" className="text-[#00416a] font-bold underline underline-offset-2">GST LUT Filing</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is GST Refund">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GST Refund and Who is Eligible to Claim It?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GST refund</strong> is the process by which a GST-registered taxpayer
                  recovers from the government an amount of GST that was either overpaid, accumulated
                  without the possibility of utilisation, or paid on supplies that were subsequently
                  treated as zero-rated (exports). The legal framework for GST refunds is provided under
                  <strong> Section 54 of the CGST Act, 2017</strong> read with <strong>Rules 89 to 96A
                  of the CGST Rules, 2017</strong>. The refund application is filed in <strong>Form
                  RFD-01</strong> on the GST Common Portal, supported by specific statements and
                  documents depending on the refund category.
                </p>
                <p>
                  GST refunds are critical for <strong>working capital management</strong> — especially
                  for exporters. Under the GST regime, inputs (raw materials, packaging, freight, etc.)
                  carry GST which is paid to suppliers. When a business exports goods or services, the
                  export is zero-rated — no output GST is collected. This creates an ITC surplus that
                  cannot be utilised against domestic tax liabilities if the business primarily exports.
                  The government&apos;s refund mechanism under Section 54 ensures this surplus ITC is
                  returned to the exporter — but only if the application is filed correctly, within the
                  2-year deadline, with the right supporting documents and accurate formula computation.
                </p>
                <p>
                  The <strong>2-year filing deadline</strong> under Section 54(1) is the most critical
                  constraint in GST refunds. Unlike income tax refunds which can be claimed through
                  revised returns, GST refund applications cannot be filed after 2 years from the
                  &quot;relevant date&quot; — and the relevant date differs for each refund type (date of export
                  for goods, date of FIRC for services, end of financial year for inverted duty, date of
                  payment for excess cash). <strong>Lapsed refunds cannot be recovered</strong> — the
                  entitlement permanently expires. Taxvio proactively identifies refund eligibility and
                  ensures applications are filed well within the 2-year window.
                </p>
                <p>
                  A common source of refund rejection is the <strong>formula-based calculation error</strong>.
                  For LUT-route export refunds and inverted duty refunds, the eligible amount is not simply
                  the ITC balance — it is computed using specific formulas under <strong>Rule 89(4) and
                  Rule 89(5)</strong> of the CGST Rules respectively. These formulas involve adjusted total
                  turnover, zero-rated/inverted turnover, and net ITC — all of which must be extracted from
                  the correct periods and reported accurately. Errors in these computations result in either
                  a deficiency memo (RFD-03) or a partial sanction — both of which require additional time
                  and effort to resolve. Taxvio prepares the Rule 89 computation precisely, maximising the
                  eligible refund amount in the first application itself.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ REFUND TYPES ACCORDION ═══════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Types of GST Refund">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Refund Types
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  6 Types of GST Refund — Eligibility, Formula &amp; Documents
                </h2>
                <p className="text-gray-600 mt-2 text-sm">Click any type to see who qualifies, how the amount is computed, and what documents are required.</p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {REFUND_TYPES.map((r, i) => (
                  <motion.div key={r.title} variants={fadeUp}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenType(openType === i ? null : i)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className="text-2xl shrink-0">{r.icon}</span>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-800 text-sm leading-snug">{r.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{r.section}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold rounded-full px-2.5 py-1 text-white hidden sm:inline"
                          style={{ background: r.badgeColor }}>{r.badge}</span>
                        <ChevronDown size={16}
                          className={`text-[#00416a] transition-transform duration-300 ${openType === i ? "rotate-180" : ""}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openType === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-gray-100">
                          <div className="px-6 py-5 space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">Who Can Claim</p>
                                <p className="text-sm text-gray-700">{r.who}</p>
                              </div>
                              <div>
                                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">Filing Deadline</p>
                                <p className="text-sm text-gray-700">{r.deadline}</p>
                                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-3 mb-1">Form</p>
                                <p className="text-sm font-mono font-bold text-[#00416a]">{r.form}</p>
                              </div>
                            </div>
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                              <p className="text-[11px] text-blue-600 font-bold uppercase tracking-widest mb-1">Refund Formula / Basis</p>
                              <p className="text-sm text-blue-800 font-medium">{r.formula}</p>
                              {r.cap && <p className="text-xs text-blue-600 mt-1 italic">{r.cap}</p>}
                            </div>
                            <div>
                              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-2">Key Documents Required</p>
                              <div className="flex flex-wrap gap-2">
                                {r.docs.map(d => (
                                  <span key={d} className="text-xs bg-gray-100 text-gray-700 rounded-full px-3 py-1">{d}</span>
                                ))}
                              </div>
                            </div>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition hover:scale-105">
                              <MessageCircle size={13} /> Apply for This Refund
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

        {/* ══ REFUND PROCESSING TIMELINE ═══════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="GST Refund Timeline">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Processing Timeline
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST Refund Processing — Statutory Timeline
                </h2>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { n:"01", label:"RFD-01 Filed",          time:"Day 1",        desc:"Refund application submitted on GST portal with all documents. ARN generated instantly.", color:"#00416a" },
                  { n:"02", label:"RFD-02 Acknowledgement",time:"Within 15 days",desc:"Application acknowledged or RFD-03 deficiency memo issued if documents incomplete.", color:"#2563eb" },
                  { n:"03", label:"Officer Verification",  time:"15–45 days",   desc:"GST officer verifies documents, cross-checks returns, may issue query or provisional refund.", color:"#7c3aed" },
                  { n:"04", label:"RFD-06 Sanction Order", time:"Within 60 days",desc:"Refund sanction order issued for approved amount. Partial sanction possible if disputed.", color:"#059669" },
                  { n:"05", label:"Bank Credit",           time:"3–5 days later",desc:"Refund amount credited directly to the GST-registered bank account. Interest if delayed beyond 60 days.", color:"#16a34a" },
                ].map(({ n, label, time, desc, color }) => (
                  <motion.div key={n} variants={scaleIn}
                    className="text-center bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center font-extrabold text-white text-sm shadow-md mb-3"
                      style={{ background: color }}>
                      {n}
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{label}</p>
                    <p className="text-xs font-semibold mt-1" style={{ color }}>{time}</p>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}
                className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-3">
                <Zap size={18} className="text-green-600 shrink-0 mt-0.5" />
                <p className="text-green-800 text-sm">
                  <strong>Interest on delay:</strong> If the GST officer fails to sanction the refund
                  within 60 days of RFD-02 acknowledgement, the department must pay <strong>interest at
                  6% per annum</strong> on the delayed amount under Section 56 of the CGST Act.
                  Taxvio tracks the 60-day window and escalates if sanctioning is delayed.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — Rule 89, RFD-03 ═══════════════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="Rule 89 Refund Computation and RFD-03">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                Rule 89 Refund Computation, RFD-03 Deficiency Memo &amp; Common Rejection Reasons
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  The single most critical technical aspect of GST refund filing is the <strong>Rule 89
                  refund computation</strong>. For export refunds on the LUT route (Rule 89(4)) and inverted
                  duty structure refunds (Rule 89(5)), the eligible refund is not your full ITC balance —
                  it is a formula-computed amount that can be significantly lower if the computation
                  parameters are incorrect. The formula uses <strong>Adjusted Total Turnover</strong> —
                  a specific definition under Rule 89(4) that excludes exempt supplies, supplies taxed
                  at nil rate, and turnover on which refund has already been granted in earlier periods.
                  Errors in defining or computing adjusted total turnover lead to either under-claiming
                  (leaving money with the government) or over-claiming (triggering RFD-03 or partial
                  sanction).
                </p>
                <p>
                  For <strong>IGST-route export refunds</strong>, the refund is auto-processed through
                  the GST–ICEGATE integration — no RFD-01 is needed. However, the auto-refund process
                  has its own failure points: the GSTIN and invoice number in GSTR-1 must exactly match
                  the shipping bill data filed at customs (ICEGATE). A single character mismatch — in
                  invoice number format, GSTIN, or taxable value — causes the shipping bill record to
                  remain in <strong>&quot;SB005&quot; error status</strong> in ICEGATE, blocking the auto-refund.
                  Taxvio validates GSTR-1 export data against ICEGATE shipping bill data before filing
                  to prevent this issue.
                </p>
              </motion.div>

              {/* Rejection reasons */}
              <motion.div variants={stagger} className="space-y-3">
                {REJECTION_REASONS.map(({ reason, fix }) => (
                  <motion.div key={reason} variants={fadeUp}
                    className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
                    <AlertCircle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{reason}</p>
                      <p className="text-gray-600 text-xs mt-1 leading-relaxed">{fix}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PROCESS ══════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="GST Refund Application Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST Refund Application Process — 6 Steps to Bank Credit
                </h2>
              </motion.div>
              <div className="space-y-5">
                {PROCESS_STEPS.map(({ n, title, desc }) => (
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
        <section className="py-16" style={{ background: "#00416a" }} aria-label="GST Refund Filing Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                GST Refund Filing Fee
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Per refund application. RFD-03 response included. Follow-up support included.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan: "Excess Cash / Simple Refund", price: "₹1,499", highlight: false,
                  items: ["Excess cash ledger refund (RFD-01)", "Post-cancellation cash refund", "Advance tax refund", "Basic document compilation", "Follow-up with officer"],
                },
                {
                  plan: "Export / Inverted Duty Refund", price: "₹2,499", highlight: true,
                  items: ["LUT route ITC refund (Rule 89(4))", "IGST-paid route export refund", "Inverted duty refund (Rule 89(5))", "SEZ supplier refund", "ICEGATE data validation", "RFD-03 response if needed"],
                },
                {
                  plan: "Exporter Annual Bundle", price: "₹8,999/year", highlight: false,
                  items: ["Quarterly refund applications (4/year)", "Annual LUT filing included", "GSTR-1 export table reconciliation", "ICEGATE shipping bill validation", "Unlimited RFD-03 responses"],
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
        <section className="py-20 bg-white" aria-label="GST Refund FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-gray-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GST Refund
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
              <h2 className="text-2xl font-extrabold text-[#00416a]">Related GST Services for Exporters</h2>
              <p className="text-gray-500 text-sm mt-2">Complete export compliance support — registration to refund</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title:"GST LUT Filing",          href:"/serviceslist/gst/gst-lut",          desc:"Export without IGST — Form RFD-11 — ₹999/year" },
                { title:"GST Return Filing",        href:"/serviceslist/gst/gst-return",       desc:"GSTR-1 Table 6A exports + GSTR-3B — ₹499/month" },
                { title:"GSTR-9 Annual Return",     href:"/serviceslist/gst/gstr-9",           desc:"Annual reconciliation & filing — ₹2,999" },
                { title:"GST Registration",         href:"/serviceslist/gst/gst-registration", desc:"New GSTIN in 3–7 days — ₹1,499" },
                { title:"GST E-Invoicing",          href:"/serviceslist/gst/gst-e-invoicing",  desc:"IRN, QR code & ERP setup — ₹1,999" },
                { title:"GST Notice Reply",         href:"/serviceslist/gst/gst-notice-reply", desc:"RFD-03 / ASMT-10 / DRC-01 reply — ₹1,999" },
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
              <Clock size={14} className="text-yellow-400" /> 2-year deadline — don&apos;t let your refund lapse
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Claim Your GST Refund — Don&apos;t Leave Money with the Government
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              Export refund, inverted duty structure, excess cash ledger, SEZ supplier — Taxvio files your
              RFD-01 with exact Rule 89 computation and handles RFD-03 responses. Starting ₹2,499.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Apply for Refund
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
              <span className="flex items-center gap-1.5"><FileText size={13} />Rule 89 Computation</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — Start Refund Application
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