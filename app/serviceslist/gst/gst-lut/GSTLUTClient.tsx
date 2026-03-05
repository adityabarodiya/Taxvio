"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle,
  TrendingUp, Globe, Banknote,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST LUT filing.")}`;
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

const BENEFITS = [
  {
    icon: <Banknote size={20} className="text-[#00416a]" />,
    title: "No Working Capital Blockage",
    desc: "Export without paying IGST upfront — your working capital stays in the business, not locked in a refund queue with the government.",
  },
  {
    icon: <TrendingUp size={20} className="text-[#00416a]" />,
    title: "Eliminate Refund Delays",
    desc: "GST refunds on IGST-paid exports often take 3–6 months. LUT removes the need for refund entirely — no tax paid, no refund needed.",
  },
  {
    icon: <Globe size={20} className="text-[#00416a]" />,
    title: "Cover All Zero-Rated Supplies",
    desc: "One LUT covers all export of goods, export of services, and supplies to SEZ units and SEZ developers — across all supply categories.",
  },
  {
    icon: <CheckCircle size={20} className="text-[#00416a]" />,
    title: "Valid for Full Financial Year",
    desc: "A single LUT filed for a financial year is valid for all exports made during that year — April to March. No per-shipment paperwork.",
  },
  {
    icon: <Shield size={20} className="text-[#00416a]" />,
    title: "No Bank Guarantee Required",
    desc: "Unlike a bond, LUT requires no bank guarantee or surety. Any eligible GST-registered exporter can file LUT — no collateral needed.",
  },
  {
    icon: <Clock size={20} className="text-[#00416a]" />,
    title: "Faster Export Processing",
    desc: "With LUT in place, customs clearance and shipping are not delayed by IGST payment verification — export operations move faster.",
  },
];

const COMPARISON = [
  { basis: "Bank Guarantee / Surety",  lut: "Not required",                           bond: "Required — typically 15% of estimated IGST" },
  { basis: "Who Can Use",              lut: "All eligible exporters (no prosecution)", bond: "Exporters prosecuted for tax offences >₹2.5Cr" },
  { basis: "Validity",                 lut: "One financial year (Apr–Mar)",            bond: "Until export obligation / undertaking is fulfilled" },
  { basis: "Filing Method",            lut: "Online — Form RFD-11 on GST portal",      bond: "Physical bond submitted to jurisdictional officer" },
  { basis: "Financial Impact",         lut: "Zero cash outflow — no IGST paid",        bond: "Bank guarantee blocks funds; premium cost added" },
  { basis: "Renewal",                  lut: "Annual — file fresh RFD-11 each FY",      bond: "Case-by-case renewal based on export obligation" },
  { basis: "Processing",               lut: "Instant ARN on filing — no officer approval", bond: "Manual processing by jurisdictional GST officer" },
];

const ELIGIBLE = [
  { who: "Goods Exporters",             note: "All registered exporters of physical goods — direct exports under shipping bill" },
  { who: "Service Exporters",           note: "IT/software services, consulting, professional services exported to foreign clients" },
  { who: "SEZ Unit Suppliers",          note: "Businesses supplying goods or services to Special Economic Zone units" },
  { who: "SEZ Developer Suppliers",     note: "Businesses supplying to SEZ developers for authorised operations" },
  { who: "Deemed Export Suppliers",     note: "Certain supplies treated as exports under Section 147 CGST Act" },
  { who: "Merchant Exporters",          note: "Businesses purchasing goods from manufacturers for export — eligible for LUT" },
];

const NOT_ELIGIBLE = [
  "Taxpayer convicted of an offence under CGST/IGST Act with tax amount exceeding ₹2.5 crore",
  "Taxpayer who has been prosecuted for tax evasion (bond required instead of LUT)",
  "Casual taxable persons and non-resident taxable persons",
];

const STEPS = [
  { n:"01", title:"Eligibility Confirmation",
    desc:"Taxvio confirms your eligibility for LUT filing — verifying your GST registration status, export activity, and absence of prosecution history that would require a bond instead." },
  { n:"02", title:"Authorized Signatory Details",
    desc:"Details of the authorised signatory (name, designation, Aadhaar, PAN) who will sign the LUT undertaking are collected. The signatory must be authorised on the GST portal." },
  { n:"03", title:"RFD-11 Form Preparation",
    desc:"Taxvio prepares the LUT application in Form RFD-11 on the GST portal — selecting the correct financial year, entering export details, and attaching the required declaration." },
  { n:"04", title:"DSC / EVC Signing & Filing",
    desc:"The RFD-11 form is e-signed using the authorised signatory's DSC (Digital Signature Certificate) or Aadhaar-based EVC and submitted on the GST Common Portal." },
  { n:"05", title:"ARN Generated — LUT Active",
    desc:"Upon successful submission, an Application Reference Number (ARN) is instantly generated. The LUT is active from this moment — no officer approval needed. Export can begin immediately." },
  { n:"06", title:"LUT Reference Shared",
    desc:"Taxvio shares the ARN and LUT acknowledgment on WhatsApp. The LUT reference number must be quoted on all export invoices and shipping bills during the financial year." },
];

const COMPLIANCE = [
  { point: "Quote LUT Reference on Export Invoices",
    detail: "Every export invoice must mention the LUT/Bond ARN number. Without this reference, the invoice may not be accepted as a valid zero-rated supply document by customs." },
  { point: "File GSTR-1 with Export Tables Correctly",
    detail: "Export supplies must be reported in Table 6A (exports) of GSTR-1 with correct shipping bill details, port code, and the 'Without Payment of Tax (LUT/Bond)' option selected." },
  { point: "Complete Export Within LUT Timelines",
    detail: "Goods export: must be completed within 3 months of invoice date. Services export: foreign exchange must be received within 1 year of invoice date. Delays require extension applications." },
  { point: "Renew LUT Every Financial Year",
    desc: "LUT is valid only for the financial year it was filed. For exports in a new financial year (from April 1), a fresh RFD-11 must be filed — ideally in March before the new FY begins." },
  { point: "ITC Refund on Inputs (if applicable)",
    detail: "With LUT, you can claim refund of accumulated ITC on inputs used in exported goods/services via RFD-01. This is separate from LUT — Taxvio assists with ITC refund applications." },
];

const FAQS = [
  {
    q: "What is GST LUT and who must file it?",
    a: "GST LUT (Letter of Undertaking) is a declaration filed in Form RFD-11 on the GST portal by a registered exporter, allowing them to supply goods or services as zero-rated supplies without payment of Integrated GST (IGST). Under Section 16 of the IGST Act, zero-rated supplies (exports and SEZ supplies) can be made either (a) with payment of IGST and subsequent refund claim, or (b) without payment of IGST under a valid LUT or Bond. Option (b) — using LUT — is the preferred choice for most exporters as it avoids the working capital blockage and refund delay associated with paying and reclaiming IGST. Every GST-registered exporter who wants to export without paying IGST must file LUT. The LUT must be filed for each financial year — a LUT filed in FY 2024-25 is not valid for exports made from April 1, 2025 (FY 2025-26). There is no fee charged by the GST government for filing LUT.",
  },
  {
    q: "When should I file LUT for a new financial year — and what happens if I export without LUT?",
    a: "LUT should ideally be filed before April 1 of each new financial year so that exports from the very first day of the new FY are covered. In practice, you can file LUT at any time during the financial year — and it will be valid from the date of filing. However, any exports made before the LUT is filed (and before it becomes active) are technically not covered under the LUT for that year. If you export goods or services without a valid LUT (and without paying IGST), the supply is not treated as a valid zero-rated supply — IGST becomes payable on such exports retroactively along with interest under Section 50 of the CGST Act. The GST department may issue demand notices for the IGST on such exports. Taxvio strongly recommends filing LUT at least 2–3 days before the first export of each financial year.",
  },
  {
    q: "What is the difference between LUT and Bond under GST?",
    a: "Both LUT (Letter of Undertaking) and Bond are legal mechanisms for exporting without paying IGST upfront under Rule 96A of the CGST Rules, 2017. The key difference is who can use each: LUT is available to all registered exporters except those who have been prosecuted for tax offences with tax involved exceeding ₹2.5 crore — it requires no bank guarantee or surety, is filed entirely online in Form RFD-11, and becomes active instantly on filing. A Bond, by contrast, is required for exporters who have been prosecuted for tax evasion — it must be accompanied by a bank guarantee (typically 15% of the estimated IGST on the proposed export) and is submitted physically to the jurisdictional GST officer. For the vast majority of exporters, LUT is the appropriate mechanism — bonds are the exception, not the rule.",
  },
  {
    q: "What exports are covered under a single GST LUT?",
    a: "A single LUT filed for a financial year covers all zero-rated supplies made during that year: direct exports of goods (including merchant exports), export of services (IT, professional, consulting, etc. to foreign clients), supplies of goods or services to Special Economic Zone (SEZ) units and SEZ developers, and deemed exports under Section 147 of the CGST Act. The LUT covers all these supply categories across all states and all GSTINs under the same PAN — there is no need to file a separate LUT for each GSTIN if multiple registrations exist under the same PAN. However, the LUT must be filed on the specific GSTIN that will issue the export invoice. If you export from multiple GSTINs, a separate LUT must be filed for each GSTIN.",
  },
  {
    q: "What are the timelines for completing exports after filing LUT?",
    a: "Under Rule 96A(1) of the CGST Rules, 2017, once LUT is filed: for export of goods, the goods must be exported within 3 months from the date of the export invoice. If goods are not exported within 3 months, IGST becomes payable on such supplies along with 18% per annum interest from the invoice date. For export of services, the foreign exchange (payment in convertible foreign currency) must be received within 1 year from the date of the invoice. If foreign exchange is not received within 1 year, the supply is treated as a domestic supply and IGST becomes payable. If export timelines cannot be met due to genuine reasons (port congestion, buyer delay, force majeure), an extension can be applied for from the jurisdictional Commissioner before the deadline — Taxvio assists with such extension applications.",
  },
  {
    q: "Can I claim ITC refund on inputs even after filing LUT?",
    a: "Yes — filing LUT (exporting without paying IGST) and claiming ITC refund on inputs are two separate and independent processes. After filing LUT and exporting without IGST, you can still claim a refund of the accumulated Input Tax Credit on inputs, input services, and capital goods used in the production or supply of zero-rated goods/services. This refund is claimed by filing Form RFD-01 on the GST portal within 2 years of the relevant date (typically the date of export or date of receipt of foreign exchange for services). The refund under the LUT route is capped at the lower of: actual ITC accumulated on inputs used for zero-rated supplies, or the formula-based refund (Net ITC × Turnover of zero-rated supplies / Adjusted total turnover). Taxvio assists with ITC refund applications for exporters as a separate service.",
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
  name: "GST LUT Filing India",
  serviceType: "GST LUT Filing",
  description:
    "CA-assisted GST LUT (Letter of Undertaking) filing in Form RFD-11. Export goods and services without paying IGST. Annual renewal, SEZ supplies, export compliance. Starting ₹999/year. Pan India.",
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
    description: "GST LUT filing — Form RFD-11, annual, covering all exports and SEZ supplies. ₹999/year.",
  },
};

export default function GSTLUTClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <>
      <Script id="gst-lut-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-lut-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GST LUT Filing Services India" itemScope itemType="https://schema.org/Service">
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
                <li className="text-white font-medium">GST LUT Filing</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    File Before April 1 — Valid for Full Financial Year
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GST LUT Filing —
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      Export Without Paying IGST
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    CA-assisted Letter of Undertaking (LUT) filing in <strong className="text-white">Form
                    RFD-11</strong> — covers export of goods, export of services, and supplies to SEZ
                    units. No bank guarantee. No working capital blockage. Starting at{" "}
                    <strong className="text-white">₹999/year</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> File LUT on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ Form RFD-11", "✅ No Bank Guarantee", "✅ SEZ Supplies Covered", "✅ Instant ARN"].map(tx => (
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
                      <p className="font-bold text-white text-lg">GST LUT — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon:"₹",  label:"Fee",                      val:"₹999 / year" },
                        { icon:"📋", label:"Form",                     val:"RFD-11 (GST Portal)" },
                        { icon:"📅", label:"Validity",                 val:"One financial year (Apr–Mar)" },
                        { icon:"⚡", label:"Processing",               val:"Instant ARN — no officer approval" },
                        { icon:"🏭", label:"Covers",                   val:"Exports + SEZ supplies" },
                        { icon:"🏦", label:"Bank Guarantee",           val:"Not required" },
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
                        File GST LUT — ₹999 →
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
            <span>Filing returns?{" "}
              <Link href="/serviceslist/gst/gst-return" className="text-[#00416a] font-bold underline underline-offset-2">File GST Returns</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Claim ITC refund?{" "}
              <Link href="/serviceslist/gst/gst-refund" className="text-[#00416a] font-bold underline underline-offset-2">Apply for GST Refund</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is GST LUT">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GST LUT (Letter of Undertaking) and Why Do Exporters Need It?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GST LUT (Letter of Undertaking)</strong> is a legally binding undertaking filed
                  by a registered exporter in <strong>Form RFD-11</strong> on the GST Common Portal,
                  allowing them to supply goods or services as <strong>zero-rated supplies</strong> without
                  paying Integrated GST (IGST). The legal basis for LUT is <strong>Section 16(3)(a) of the
                  IGST Act, 2017</strong> read with <strong>Rule 96A of the CGST Rules, 2017</strong>.
                  Under Section 16, all exports of goods and services, and supplies to SEZ units and SEZ
                  developers, are treated as zero-rated supplies — meaning GST rate is effectively 0% on
                  the final output, though inputs continue to carry GST credit.
                </p>
                <p>
                  For zero-rated supplies, a registered exporter has two options: (a) pay IGST on the
                  export invoice and then claim a refund of the IGST paid from the GST department; or (b)
                  file an LUT and export without paying any IGST at all. <strong>Option (b) — the LUT
                  route — is strongly preferred</strong> by virtually all exporters because Option (a)
                  requires paying IGST upfront (blocking working capital) and then waiting 3–6 months
                  (sometimes longer) for the GST department to process and disburse the refund. With LUT,
                  the working capital that would have been tied up in the IGST refund queue stays available
                  in the business — a critical advantage for export-intensive businesses operating on
                  thin margins with high invoice volumes.
                </p>
                <p>
                  The LUT is filed <strong>once per financial year</strong> (April to March) and covers all
                  exports and SEZ supplies made during that year. Filing is entirely online on the GST
                  portal — Form RFD-11 — and upon submission, an <strong>Application Reference Number
                  (ARN)</strong> is generated instantly. No officer approval is required; the LUT becomes
                  active the moment the ARN is generated. The ARN must be quoted on all export invoices
                  issued under the LUT during that financial year. Taxvio ensures the LUT is filed
                  accurately, on time (ideally before April 1 each year), and that the ARN reference is
                  correctly incorporated into your export invoice template.
                </p>
                <p>
                  A frequently misunderstood point is that LUT does <strong>not</strong> mean you forgo
                  Input Tax Credit on inputs used in exported goods or services. You can still accumulate
                  ITC on purchases (raw materials, inputs, input services) and claim a refund of the
                  accumulated ITC separately via Form RFD-01 within 2 years. This is the ITC refund on
                  the LUT route — separate from the IGST refund on the non-LUT route. Taxvio assists with
                  both LUT filing and subsequent ITC refund applications for exporters.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ BENEFITS GRID ════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Benefits of GST LUT">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Why File LUT
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  6 Key Benefits of Filing GST LUT for Exporters
                </h2>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {BENEFITS.map(({ icon, title, desc }) => (
                  <motion.div key={title} variants={scaleIn}
                    className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      {icon}
                    </div>
                    <h3 className="font-extrabold text-gray-800 text-sm mb-2">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ ELIGIBLE PERSONS ═════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="Who Can File GST LUT">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a]">
                  Who Can File GST LUT — and Who Cannot?
                </h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Eligible */}
                <motion.div variants={fadeUp}>
                  <h3 className="font-extrabold text-green-700 mb-4 flex items-center gap-2 text-base">
                    <CheckCircle size={18} className="text-green-500" /> Eligible for LUT
                  </h3>
                  <div className="space-y-3">
                    {ELIGIBLE.map(({ who, note }) => (
                      <div key={who} className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-start gap-3">
                        <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-gray-800 text-sm">{who}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                {/* Not eligible */}
                <motion.div variants={fadeUp}>
                  <h3 className="font-extrabold text-red-700 mb-4 flex items-center gap-2 text-base">
                    <AlertCircle size={18} className="text-red-500" /> Not Eligible (Bond Required)
                  </h3>
                  <div className="space-y-3 mb-6">
                    {NOT_ELIGIBLE.map((item) => (
                      <div key={item} className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-3">
                        <AlertCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                    <p className="text-sm font-bold text-amber-800 mb-1">Prosecution history check</p>
                    <p className="text-xs text-amber-700">
                      If you are unsure whether any past GST offence affects your LUT eligibility,
                      Taxvio confirms eligibility before filing — avoiding rejection and advising
                      on bond requirements if applicable.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ LUT vs BOND TABLE ════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="LUT vs Bond Comparison">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Comparison
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST LUT vs Bond — Why LUT is Always Better
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm" aria-label="LUT vs Bond comparison table">
                  <thead>
                    <tr style={{ background: "#00416a" }}>
                      <th className="text-left px-5 py-4 text-white font-semibold">Parameter</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">LUT (Letter of Undertaking)</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Bond</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map(({ basis, lut, bond }, i) => (
                      <tr key={basis} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3.5 font-semibold text-gray-800">{basis}</td>
                        <td className="px-5 py-3.5 text-green-700 font-medium">{lut}</td>
                        <td className="px-5 py-3.5 text-orange-700">{bond}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — Compliance & Timelines ════════════════════════ */}
        <section className="py-20 bg-white" aria-label="LUT Compliance Obligations">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                LUT Compliance — Export Timelines, GSTR-1 Reporting &amp; Annual Renewal
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Filing an LUT is just the first step — there are specific compliance obligations that
                  exporters must fulfil to remain validly covered under the LUT throughout the year.
                  Failure to comply with these obligations can result in the exports being treated as
                  taxable domestic supplies, triggering IGST demands with 18% per annum interest.
                </p>
                <p>
                  The most time-critical obligation is the <strong>export completion timeline</strong>.
                  Under Rule 96A(1) of the CGST Rules, goods must be physically exported (customs cleared
                  and goods leaving India) within <strong>3 months</strong> of the export invoice date.
                  For services, foreign exchange payment must be received within <strong>1 year</strong>
                  of the service invoice date. If these timelines are not met, the exporter must pay IGST
                  on the invoiced value plus 18% per annum interest — unless an extension is obtained
                  from the jurisdictional Commissioner for sufficient cause.
                </p>
                <p>
                  For <strong>GSTR-1 reporting</strong>, all export invoices made under LUT must be
                  reported in <strong>Table 6A</strong> (exports without payment of tax) of GSTR-1 — with
                  the shipping bill number, port code, and export date for goods exports; and with the
                  foreign exchange receipt details for service exports. If invoices are incorrectly placed
                  in Table 4A (B2B domestic supplies) instead of Table 6A, ITC will be blocked for the
                  buyer and refund claims will be rejected. Taxvio reconciles GSTR-1 export tables
                  monthly as part of the return filing service to prevent such mismatches.
                </p>
              </motion.div>
            </motion.div>

            {/* Compliance cards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger} className="mt-8 space-y-4">
              {COMPLIANCE.map(({ point, detail }) => (
                <motion.div key={point} variants={fadeUp}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
                  <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{point}</p>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">{detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ DOCUMENTS ════════════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Documents for GST LUT Filing">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  What We Need
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Documents Required for GST LUT Filing
                </h2>
                <p className="text-gray-600 mt-2 text-sm">Minimal documentation — LUT is the simplest GST compliance filing.</p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label:"GST Login Credentials",          sub:"Username and password for the GST portal account" },
                  { label:"GSTIN of the Exporter",          sub:"The specific GSTIN from which export invoices will be issued" },
                  { label:"Authorized Signatory Details",   sub:"Name, designation, PAN, Aadhaar of the signatory listed on GST portal" },
                  { label:"Financial Year Selection",       sub:"The FY for which LUT is being filed (e.g. 2025–26)" },
                  { label:"DSC or Aadhaar OTP",             sub:"For e-signing the RFD-11 form on the GST portal" },
                  { label:"Export History (if any)",        sub:"Details of past exports for declaring in RFD-11 (name of foreign buyer / SEZ unit)" },
                ].map(({ label, sub }) => (
                  <motion.div key={label} variants={scaleIn}
                    className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-all">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
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
        <section className="py-20 bg-white" aria-label="GST LUT Filing Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST LUT Filing Process — 6 Steps, Done Same Day
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  Share your GST credentials and export details on WhatsApp — ARN delivered same day.
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
        <section className="py-16" style={{ background: "#00416a" }} aria-label="GST LUT Filing Pricing">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                GST LUT Filing Fee
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Annual filing. ITC refund application charged separately.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan:"LUT Filing Only", price:"₹999/year", highlight: false,
                  items:["RFD-11 filing on GST portal","Eligibility confirmation","Authorised signatory setup","ARN delivered same day","Export invoice format guidance"],
                },
                {
                  plan:"LUT + GST Return Filing", price:"₹1,499/month", highlight: true,
                  items:["LUT filing included (first year)","Monthly GSTR-1 (Table 6A — exports)","Monthly GSTR-3B filing","ITC reconciliation included","Annual LUT renewal reminder"],
                },
                {
                  plan:"Exporter Compliance Bundle", price:"₹9,999/year", highlight: false,
                  items:["Annual LUT filing included","12 months GSTR-1 + GSTR-3B","GSTR-9 annual return","ITC refund application (RFD-01)","Export advisory support"],
                },
              ].map(({ plan, price, highlight, items }) => (
                <div key={plan} className="rounded-2xl p-6 flex flex-col"
                  style={{
                    background: highlight ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
                    border: highlight ? "2px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.15)",
                  }}>
                  {highlight && (
                    <span className="text-[10px] font-bold text-[#00416a] bg-white rounded-full px-3 py-0.5 self-start mb-3 uppercase tracking-wide">
                      Best Value
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
        <section className="py-20 bg-white" aria-label="GST LUT FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-gray-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GST LUT Filing
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
              <h2 className="text-2xl font-extrabold text-[#00416a]">Other GST Services for Exporters</h2>
              <p className="text-gray-500 text-sm mt-2">Complete export compliance support — from registration to refund</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title:"GST Registration",      href:"/serviceslist/gst/gst-registration", desc:"New GSTIN in 3–7 days — ₹1,499" },
                { title:"GST Return Filing",      href:"/serviceslist/gst/gst-return",       desc:"GSTR-1 Table 6A exports + GSTR-3B — ₹499/month" },
                { title:"GST Refund",             href:"/serviceslist/gst/gst-refund",       desc:"ITC refund (RFD-01) for exporters — ₹2,499" },
                { title:"GSTR-9 Annual Return",   href:"/serviceslist/gst/gstr-9",           desc:"Annual reconciliation & filing — ₹2,999" },
                { title:"GST E-Invoicing",        href:"/serviceslist/gst/gst-e-invoicing",  desc:"IRN, QR code & ERP setup — ₹1,999" },
                { title:"GST Notice Reply",       href:"/serviceslist/gst/gst-notice-reply", desc:"ASMT-10, DRC-01, SCN reply — ₹1,999" },
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
              <Zap size={14} className="text-yellow-400" /> File before April 1 — export from day one of new FY
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              File LUT &amp; Export Without Paying IGST
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              Form RFD-11 filing — covering goods exports, service exports, and SEZ supplies. No bank
              guarantee. Instant ARN. Starting ₹999/year. CA-assisted. 100% online. Pan India.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — File LUT Now
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
              <span className="flex items-center gap-1.5"><Clock size={13} />Same Day ARN</span>
              <span className="flex items-center gap-1.5"><FileText size={13} />All Export Types</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — File GST LUT Today
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