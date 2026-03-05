"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle, QrCode,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST E-Invoicing setup.")}`;
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

const APPLICABILITY = [
  { phase: "Phase 1", date: "Oct 2020",   threshold: "₹500 Crore+",  who: "Large corporates, PSUs, banks" },
  { phase: "Phase 2", date: "Jan 2021",   threshold: "₹100 Crore+",  who: "Mid-large businesses" },
  { phase: "Phase 3", date: "Apr 2021",   threshold: "₹50 Crore+",   who: "Growing mid-size businesses" },
  { phase: "Phase 4", date: "Apr 2022",   threshold: "₹20 Crore+",   who: "SMEs and MSMEs" },
  { phase: "Phase 5", date: "Oct 2022",   threshold: "₹10 Crore+",   who: "Small businesses and traders" },
  { phase: "Phase 6", date: "Aug 2023",   threshold: "₹5 Crore+",    who: "All applicable B2B suppliers — current threshold" },
];

const SUPPLY_TYPES = [
  { type: "B2B Invoices",            mandatory: true,  note: "All invoices to GST-registered buyers — mandatory" },
  { type: "B2B Credit Notes",        mandatory: true,  note: "Credit notes issued to registered buyers — mandatory" },
  { type: "B2B Debit Notes",         mandatory: true,  note: "Debit notes to registered buyers — mandatory" },
  { type: "Export Invoices",         mandatory: true,  note: "Supplies to SEZ / exports with / without IGST" },
  { type: "Reverse Charge (RCM)",    mandatory: true,  note: "Supplies attracting reverse charge mechanism" },
  { type: "B2C Invoices",            mandatory: false, note: "Not mandatory — though e-invoice format can be used" },
  { type: "Nil-rated / Exempt",      mandatory: false, note: "Exempt supplies — not required under e-invoicing" },
  { type: "Financial Credit Notes",  mandatory: false, note: "Non-GST credit notes (discounts) — not covered" },
];

const EXEMPT_ENTITIES = [
  "Banking, Insurance, and Financial Institutions",
  "Goods Transport Agencies (GTA)",
  "Passenger Transportation Services",
  "Admission to Cinemas / Multiplex (ticketing)",
  "Special Economic Zone (SEZ) Units",
  "Government Departments & Local Authorities",
];

const STEPS = [
  { n:"01", title:"Applicability Assessment",
    desc:"Taxvio reviews your aggregate annual turnover across all GSTINs to confirm e-invoicing applicability, effective date, and the specific supply categories that require IRN generation." },
  { n:"02", title:"IRP Registration",
    desc:"Your GSTIN is registered on the Invoice Registration Portal (IRP) — available at einvoice1.gst.gov.in. API credentials (Client ID and Client Secret) are generated for system integration." },
  { n:"03", title:"ERP / Software Integration",
    desc:"Taxvio coordinates integration of your accounting software (Tally, Zoho Books, Busy, Marg, SAP, or any ERP) with the IRP using the GST System API or a pre-certified GSP (GST Suvidha Provider)." },
  { n:"04", title:"Invoice Format Validation",
    desc:"All mandatory JSON fields required by the IRP schema are verified — GSTIN, HSN, invoice value, tax details, buyer information, and supply type. Test invoices validated on sandbox before go-live." },
  { n:"05", title:"IRN + QR Code Go-Live",
    desc:"Production environment activated. Every B2B invoice now auto-generates an IRN and signed QR code from the IRP before being issued to the buyer. IRN data auto-populates GSTR-1." },
  { n:"06", title:"Compliance Monitoring",
    desc:"Taxvio monitors IRN generation logs monthly, flags any failed or cancelled IRNs, and ensures GSTR-1 auto-population from e-invoice data is reconciling correctly with GSTR-3B." },
];

const FAQS = [
  {
    q: "What is GST E-Invoicing and who must comply?",
    a: "GST E-Invoicing (Electronic Invoicing) is a mandatory system under which specified GST-registered taxpayers must authenticate every B2B invoice through the Invoice Registration Portal (IRP) before issuing it to the buyer. The IRP validates the invoice data, assigns a unique 64-character Invoice Reference Number (IRN), and embeds a digitally signed QR code. As per CBIC Notification No. 10/2023-CT dated 10 May 2023, e-invoicing is mandatory for all registered persons with aggregate annual turnover exceeding ₹5 crore in any preceding financial year from 1 August 2023. The turnover threshold applies across all GSTINs registered under the same PAN.",
  },
  {
    q: "What is an IRN (Invoice Reference Number) and what happens if I don't generate one?",
    a: "An IRN (Invoice Reference Number) is a unique 64-character hash generated by the IRP (Invoice Registration Portal) after successfully validating an e-invoice. The IRN is derived from the GSTIN, invoice number, financial year, and document type — making each IRN unique. Without a valid IRN and QR code, a B2B invoice is not a valid GST document for an applicable taxpayer. The penalty for failure to generate IRN where mandatory is ₹10,000 per invoice under Section 122 of the CGST Act (or 100% of the tax involved, whichever is higher). Additionally, the buyer cannot claim ITC on an invoice without a valid IRN, which can seriously damage business relationships.",
  },
  {
    q: "Which supply types require e-invoice and which are exempt?",
    a: "E-invoicing is mandatory for B2B invoices (invoices to GST-registered buyers), B2B credit notes, B2B debit notes, export invoices (including SEZ supplies), and supplies attracting reverse charge mechanism (RCM). E-invoicing is not required for B2C invoices (supplies to unregistered buyers), nil-rated or exempt supplies, non-GST financial credit notes (discounts unrelated to original supply), and invoices from exempted entity categories such as banking companies, insurance companies, goods transport agencies (GTAs), passenger transport services, and SEZ units. However, SEZ developers (as opposed to SEZ units) are required to generate e-invoices.",
  },
  {
    q: "Can I cancel an e-invoice after generating IRN?",
    a: "Yes, an e-invoice can be cancelled on the IRP portal within 24 hours of IRN generation — but only if the associated e-way bill has not been generated. After the 24-hour cancellation window closes, the IRN cannot be cancelled on the IRP. If an invoice needs to be reversed after 24 hours, a credit note (with its own IRN) must be issued. Partial cancellation of an e-invoice is not permitted — it must be either fully active or fully cancelled. Cancelled IRNs are reported in GSTR-1 as cancelled documents. Taxvio's monitoring service tracks cancelled IRNs and ensures GSTR-1 reconciliation is updated accordingly.",
  },
  {
    q: "How does e-invoicing auto-populate GSTR-1?",
    a: "Once an IRN is successfully generated, the IRP pushes the validated invoice data directly to the taxpayer's GSTR-1 in real time. This auto-populates the relevant GSTR-1 tables — Table 4A (B2B supplies), Table 6A (exports), Table 9B (credit/debit notes), and others — based on the supply type. The IRP-auto-populated data appears in GSTR-1 under the 'e-Invoice' section and cannot be edited by the taxpayer (only added to). This significantly reduces manual data entry for B2B invoices and eliminates GSTR-1 vs e-invoice mismatches. The buyer's GSTR-2B is also populated automatically, making ITC claims for the buyer seamless.",
  },
  {
    q: "What software or ERP is compatible with GST e-invoicing?",
    a: "Most major Indian accounting and ERP systems now support GST e-invoicing natively through built-in IRP API integration: Tally Prime (Release 1.1.3+), Zoho Books, Busy Accounting Software, Marg ERP, Miracle Accounting, QuickBooks India, SAP Business One, Oracle NetSuite, and Microsoft Dynamics. For businesses using custom or legacy ERP systems, integration is achieved via a GST Suvidha Provider (GSP) — a GSTN-certified middleware that handles the IRP API calls. Taxvio supports integration across all major platforms and coordinates with GSPs for custom solutions. For very small businesses, invoices can also be generated directly on the IRP web portal without any software integration.",
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
  name: "GST E-Invoicing Setup India",
  serviceType: "GST E-Invoicing",
  description:
    "Complete GST e-invoicing setup — IRP registration, IRN generation, QR code compliance, ERP/API integration, Tally/Zoho/Busy integration. Starting ₹1,999. CA-assisted, pan India.",
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
    description: "GST E-Invoicing setup — IRP registration, ERP integration, IRN go-live. Starting ₹1,999.",
  },
};

export default function GSTEInvoicingClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <>
      <Script id="gst-einvoice-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-einvoice-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GST E-Invoicing Setup Services India" itemScope itemType="https://schema.org/Service">
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
                <li className="text-white font-medium">GST E-Invoicing</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                    Mandatory for Businesses with Turnover &gt; ₹5 Crore
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GST E-Invoicing
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      IRN, QR Code &amp; ERP Integration
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    Complete GST e-invoicing setup — IRP registration, IRN generation, QR code
                    embedding, Tally/Zoho/Busy/SAP integration, and ongoing compliance monitoring.
                    Starting at <strong className="text-white">₹1,999</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> Setup on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ IRP Registration", "✅ ERP/API Integration", "✅ IRN + QR Code", "✅ GSTR-1 Auto-Pop"].map(tx => (
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
                      <p className="font-bold text-white text-lg">GST E-Invoicing — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon: "₹",  label: "Starting Fee",         val: "₹1,999" },
                        { icon: "📊", label: "Turnover Threshold",   val: "> ₹5 Crore (Aug 2023)" },
                        { icon: "🔗", label: "Portal",               val: "einvoice1.gst.gov.in (IRP)" },
                        { icon: "🔢", label: "IRN Format",           val: "64-character unique hash" },
                        { icon: "⚠️", label: "Non-Compliance Penalty", val: "₹10,000 per invoice" },
                        { icon: "🗺", label: "Coverage",              val: "Pan India — All States" },
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
                        Start E-Invoicing Setup — ₹1,999 →
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
            <span>Annual Return?{" "}
              <Link href="/serviceslist/gst/gstr-9" className="text-[#00416a] font-bold underline underline-offset-2">File GSTR-9</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 — What is E-Invoicing ═══════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is GST E-Invoicing">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GST E-Invoicing and Why Was it Introduced?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GST E-Invoicing</strong> is a mandatory electronic invoicing system introduced
                  by the Government of India under which specified GST-registered taxpayers must authenticate
                  every B2B invoice, credit note, and debit note through the <strong>Invoice Registration
                  Portal (IRP)</strong> — available at einvoice1.gst.gov.in — before issuing it to the buyer.
                  The IRP validates the invoice data against a standard JSON schema, generates a unique
                  <strong> 64-character Invoice Reference Number (IRN)</strong>, and embeds a
                  <strong> digitally signed QR code</strong> containing key invoice details. This entire
                  process typically completes in under 2 seconds via API.
                </p>
                <p>
                  E-Invoicing was introduced by the CBIC (Central Board of Indirect Taxes and Customs)
                  primarily to <strong>eliminate fake invoice fraud</strong> — a systematic problem in the
                  pre-e-invoice era where fictitious invoices were used to claim fraudulent Input Tax Credit.
                  Since every IRN is registered on the government portal before the invoice is issued, it
                  is impossible to fabricate a fake invoice with a valid IRN. The system also <strong>
                  auto-populates GSTR-1</strong> in real time — IRP pushes invoice data directly to the
                  taxpayer&apos;s GSTR-1, eliminating manual data entry for e-invoiced transactions and
                  ensuring buyers receive ITC credit in their GSTR-2B without delay.
                </p>
                <p>
                  As per <strong>CBIC Notification No. 10/2023-CT dated 10 May 2023</strong>, e-invoicing
                  is currently mandatory for all registered persons with <strong>aggregate annual turnover
                  exceeding ₹5 crore</strong> in any preceding financial year, effective from 1 August 2023.
                  The ₹5 crore threshold is calculated as aggregate turnover across all GSTINs registered
                  under the same PAN at the national level — not per-state or per-GSTIN. If your total
                  turnover across all registrations exceeds ₹5 crore, every GSTIN under your PAN must
                  generate e-invoices for applicable supplies.
                </p>
                <p>
                  The threshold has been progressively lowered since the system&apos;s launch in October 2020
                  (starting from ₹500 crore), and the government has signalled intent to eventually extend
                  it to all B2B taxpayers. Businesses approaching the ₹5 crore threshold should plan their
                  e-invoicing setup in advance rather than rushing to comply after crossing it — as the
                  IRP registration, ERP integration, and staff training take time to complete properly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ APPLICABILITY ROLLOUT TABLE ══════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="E-Invoicing Applicability Phases">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Applicability
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST E-Invoicing Rollout — Phase-wise Applicability
                </h2>
                <p className="text-gray-600 mt-2 text-sm max-w-2xl mx-auto">
                  E-invoicing has been extended progressively since 2020. The current threshold is ₹5 crore.
                  Further reduction is expected.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm" aria-label="GST e-invoicing applicability phases">
                  <thead>
                    <tr style={{ background: "#00416a" }}>
                      <th className="text-left px-5 py-4 text-white font-semibold">Phase</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Effective Date</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Turnover Threshold</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Applicable To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {APPLICABILITY.map(({ phase, date, threshold, who }, i) => (
                      <tr key={phase}
                        className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${i === APPLICABILITY.length - 1 ? "border-l-4 border-green-500" : ""}`}>
                        <td className="px-5 py-3.5 font-bold text-[#00416a]">{phase}</td>
                        <td className="px-5 py-3.5 text-gray-700">{date}</td>
                        <td className={`px-5 py-3.5 font-bold ${i === APPLICABILITY.length - 1 ? "text-green-700" : "text-gray-800"}`}>
                          {threshold} {i === APPLICABILITY.length - 1 && <span className="ml-2 text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5">Current</span>}
                        </td>
                        <td className="px-5 py-3.5 text-gray-600">{who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <motion.div variants={fadeUp}
                className="mt-5 bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle size={17} className="text-orange-500 shrink-0 mt-0.5" />
                <p className="text-orange-800 text-sm">
                  <strong>Threshold calculated on PAN level:</strong> If aggregate turnover across all your
                  GSTINs (same PAN, all states) exceeds ₹5 crore in any prior financial year, all your
                  GSTINs must generate e-invoices — even if individual GSTIN turnover is below ₹5 crore.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SUPPLY TYPES TABLE ═══════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="Which Invoices Need E-Invoicing">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a]">
                  Which Invoices Require E-Invoicing — and Which Are Exempt?
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "#00416a" }}>
                      <th className="text-left px-5 py-4 text-white font-semibold">Invoice / Document Type</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">E-Invoice Required?</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SUPPLY_TYPES.map(({ type, mandatory, note }, i) => (
                      <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3.5 font-semibold text-gray-800">{type}</td>
                        <td className="px-5 py-3.5">
                          <span className={`inline-flex items-center gap-1 text-xs font-bold rounded-full px-2.5 py-1 ${mandatory ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                            {mandatory ? "✅ Mandatory" : "❌ Not Required"}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-gray-600 text-xs">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>

              {/* Exempt entities */}
              <motion.div variants={fadeUp}>
                <h3 className="font-extrabold text-[#00416a] mb-4 text-base">Entity Categories Exempt from E-Invoicing</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {EXEMPT_ENTITIES.map(e => (
                    <div key={e} className="flex items-start gap-2 bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <AlertCircle size={14} className="text-orange-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{e}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ E-INVOICE WORKFLOW ═══════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="GST E-Invoice Workflow">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Workflow
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST E-Invoice Generation Workflow — Step by Step
                </h2>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { n:"01", icon:"🧾", title:"Invoice in ERP",      desc:"Invoice created in Tally / Zoho / SAP / custom ERP with all required fields" },
                  { n:"02", icon:"📤", title:"Push to IRP via API", desc:"ERP pushes invoice JSON payload to IRP (einvoice1.gst.gov.in) via GSTN API" },
                  { n:"03", icon:"✅", title:"IRP Validation",      desc:"IRP validates schema, checks duplicate IRN, verifies GSTINs and HSN" },
                  { n:"04", icon:"🔢", title:"IRN Generated",       desc:"IRP generates unique 64-char IRN hash and digitally signs the payload" },
                  { n:"05", icon:"📱", title:"QR Code Embedded",    desc:"Signed QR code with key invoice data printed on final invoice issued to buyer" },
                  { n:"06", icon:"📊", title:"GSTR-1 Auto-Filled",  desc:"IRP pushes invoice data to GSTR-1 and buyer's GSTR-2B — no manual entry needed" },
                ].map(({ n, icon, title, desc }) => (
                  <motion.div key={n} variants={scaleIn}
                    className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <div className="text-2xl mb-2">{icon}</div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-xs text-white mx-auto mb-3"
                      style={{ background: "#00416a" }}>
                      {n}
                    </div>
                    <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — IRN, QR Code, Cancellation ════════════════════ */}
        <section className="py-20 bg-white" aria-label="IRN QR Code and E-Invoice Cancellation">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                IRN, QR Code, E-Invoice Cancellation &amp; GSTR-1 Auto-Population
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The <strong>Invoice Reference Number (IRN)</strong> is a 64-character SHA-256 hash
                  generated by the IRP from a combination of the supplier&apos;s GSTIN, the invoice number,
                  the financial year, and the document type. Because the IRN is derived from these specific
                  identifiers, each IRN is mathematically unique — the same invoice number from the same
                  supplier in the same financial year will always produce the same IRN, making duplicate
                  invoice fraud technically impossible. The IRP maintains a 24-hour duplicate check log,
                  rejecting any IRN generation attempt for an already-registered GSTIN-invoice number-year
                  combination.
                </p>
                <p>
                  The <strong>QR code</strong> embedded on e-invoices contains the digitally signed
                  payload including the IRN, supplier GSTIN, buyer GSTIN, invoice date, invoice value,
                  number of line items, main HSN code, and a unique link for real-time verification.
                  The QR code is signed by the IRP using the government&apos;s digital certificate, making
                  it cryptographically verifiable. Buyers and auditors can scan the QR code to instantly
                  verify the invoice&apos;s authenticity against the IRP database — without needing to log
                  in to the GST portal.
                </p>
                <p>
                  <strong>E-invoice cancellation</strong> is permitted only within <strong>24 hours</strong>
                  of IRN generation, and only if no e-way bill has been generated against the IRN. After
                  the 24-hour window, the IRN is locked and cannot be cancelled on the IRP — a
                  <strong> credit note with its own IRN</strong> must be issued instead to reverse the
                  original supply. Partial cancellation is not permitted; the invoice must be fully
                  cancelled. Taxvio&apos;s compliance monitoring service tracks open IRNs, pending
                  cancellations, and credit note issuance to ensure GSTR-1 reconciliation is accurate.
                </p>
                <p>
                  The most significant operational benefit of e-invoicing is <strong>GSTR-1
                  auto-population</strong>. Once an IRN is generated, the IRP immediately pushes the
                  invoice data to the relevant GSTR-1 table — Table 4A for regular B2B supplies, Table
                  6A for exports, Table 9B for credit/debit notes. This eliminates manual data entry for
                  e-invoiced transactions (often 80–90% of B2B transaction volume), dramatically reduces
                  GSTR-1 filing time, and virtually eliminates GSTR-1 errors for e-invoiced supplies.
                  The buyer&apos;s GSTR-2B is simultaneously populated, making ITC claims instant and
                  reducing ITC reconciliation effort for the buyer.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PENALTY SECTION ══════════════════════════════════════════════ */}
        <section className="py-12 bg-red-50 border-y border-red-100" aria-label="E-Invoicing Penalties">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="flex items-start gap-5">
              <AlertCircle size={28} className="text-red-500 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-extrabold text-red-800 mb-2">
                  Penalty for Not Generating E-Invoice Where Mandatory
                </h2>
                <p className="text-red-700 text-sm leading-relaxed mb-3">
                  Under <strong>Section 122 of the CGST Act</strong>, failure to generate an e-invoice
                  (IRN) for applicable B2B supplies attracts a penalty of <strong>₹10,000 per invoice</strong>
                  (or 100% of the tax amount on that invoice, whichever is higher). A B2B invoice issued
                  without a valid IRN is treated as an <strong>invalid tax invoice</strong> — meaning the
                  buyer cannot claim ITC on it, which can seriously damage buyer relationships and result
                  in the buyer switching to compliant suppliers. Additionally, the absence of IRN data in
                  GSTR-1 creates reconciliation mismatches that can trigger ASMT-10 scrutiny notices.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition hover:scale-105">
                  <Zap size={14} /> Set Up E-Invoicing Now — ₹1,999
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ DOCUMENTS ════════════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="Documents for E-Invoicing Setup">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  What We Need
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Information Required to Set Up E-Invoicing
                </h2>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "GSTIN &amp; Login Credentials",    sub: "GST portal username and password for IRP registration" },
                  { label: "Accounting Software Details",  sub: "Name and version — Tally, Zoho, Busy, SAP, custom ERP" },
                  { label: "Annual Turnover Confirmation",  sub: "To confirm applicability threshold across all GSTINs (same PAN)" },
                  { label: "HSN / SAC Codes",               sub: "All product/service HSN codes used in B2B invoices" },
                  { label: "IT / Technical Contact",        sub: "Person who manages ERP/accounting software for API setup" },
                  { label: "Existing Invoice Format",       sub: "Sample invoice PDF/Excel — to ensure QR code and IRN are embedded" },
                  { label: "E-Way Bill Portal Access",      sub: "EWB login if e-way bills are linked to e-invoices in your process" },
                  { label: "List of GSTINs (if multi-state)", sub: "All GSTINs under same PAN if business has multiple state registrations" },
                ].map(({ label, sub }) => (
                  <motion.div key={label} variants={scaleIn}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-all">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm" dangerouslySetInnerHTML={{ __html: label }} />
                      <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PROCESS ══════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="E-Invoicing Setup Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  How We Do It
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  E-Invoicing Setup Process — 6 Steps to IRN Go-Live
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  From applicability check to live IRN generation — Taxvio manages the entire setup.
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

        {/* ══ PRICING ══════════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#00416a" }} aria-label="E-Invoicing Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                E-Invoicing Setup Fee — No Hidden Charges
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                One-time setup fee. Includes IRP registration, ERP integration, test invoices, and go-live.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan: "Basic Setup", price: "₹1,999", highlight: false,
                  items: ["IRP registration", "API credentials setup", "Tally / Zoho / Busy integration", "5 test invoice validation", "Go-live support"],
                },
                {
                  plan: "Full Integration", price: "₹3,999", highlight: true,
                  items: ["Everything in Basic", "Custom ERP / SAP integration", "GSP (Suvidha Provider) setup", "Invoice format QR embedding", "3-month compliance monitoring"],
                },
                {
                  plan: "Annual Compliance Bundle", price: "₹8,999/yr", highlight: false,
                  items: ["E-invoicing setup included", "Monthly IRN log review", "Failed IRN troubleshooting", "GSTR-1 auto-population check", "Unlimited support queries"],
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
        <section className="py-20 bg-white" aria-label="GST E-Invoicing FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-gray-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GST E-Invoicing
                </h2>
                <p className="text-gray-500 mt-2 text-sm">Have more questions? WhatsApp us — we reply within 15 minutes.</p>
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
              <p className="text-gray-500 text-sm mt-2">Complete GST compliance support — registration to annual returns</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "GST Registration",     href: "/serviceslist/gst/gst-registration",  desc: "New GSTIN in 3–7 days — ₹1,499" },
                { title: "GST Return Filing",     href: "/serviceslist/gst/gst-return",        desc: "Monthly GSTR-1 & GSTR-3B — ₹499/month" },
                { title: "GSTR-9 Annual Return",  href: "/serviceslist/gst/gstr-9",            desc: "Annual reconciliation & filing — ₹2,999" },
                { title: "GST LUT Filing",        href: "/serviceslist/gst/gst-lut",           desc: "Zero-rated export LUT — ₹999/year" },
                { title: "GST Notice Reply",      href: "/serviceslist/gst/gst-notice-reply",  desc: "ASMT-10, DRC-01, SCN reply — ₹1,999" },
                { title: "GST Refund",            href: "/serviceslist/gst/gst-refund",        desc: "Export & inverted duty refund — ₹2,499" },
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
              <QrCode size={14} className="text-yellow-400" /> Penalty: ₹10,000 per invoice without IRN
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white">
              Set Up GST E-Invoicing Before the Next Invoice
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              IRP registration, ERP integration, IRN + QR code go-live, and monthly compliance monitoring.
              Starting ₹1,999. 100% online. Tally, Zoho, Busy, SAP — all platforms supported.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Start Setup
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
              <span className="flex items-center gap-1.5"><Clock size={13} /> Quick Setup</span>
              <span className="flex items-center gap-1.5"><FileText size={13} /> All ERPs Supported</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — Setup E-Invoicing
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