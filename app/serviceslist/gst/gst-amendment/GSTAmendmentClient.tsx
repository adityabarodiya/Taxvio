"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle, RefreshCw,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "8937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST Amendment.")}`;
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

const CORE_FIELDS = [
  { field: "Legal / Trade Name Change",       note: "Requires PAN-linked name update + officer approval" },
  { field: "Principal Place of Business",     note: "New address proof + NOC from owner if rented" },
  { field: "Additional Place of Business",    note: "Adding or removing any branch premises" },
  { field: "Addition of Partner / Director",  note: "New partner's PAN, Aadhaar, photo, consent letter" },
  { field: "Removal of Partner / Director",   note: "Board resolution / consent of remaining partners" },
  { field: "Change in Business Constitution", note: "E.g. proprietorship to partnership, LLP conversion" },
];

const NON_CORE_FIELDS = [
  { field: "Bank Account Details",      note: "New cancelled cheque or bank statement" },
  { field: "Email Address",             note: "OTP verification on new email required" },
  { field: "Mobile Number",             note: "OTP verification on new mobile required" },
  { field: "Authorised Signatory",      note: "New signatory's Aadhaar, PAN, photograph" },
  { field: "Nature of Business (HSN)",  note: "Updated product/service description" },
  { field: "Flat / Building / Street",  note: "Minor address corrections within same premises" },
];

const COMPARISON = [
  { basis: "Officer Approval Required",  core: "Yes — GST officer reviews",             noncore: "No — auto-approved" },
  { basis: "Processing Time",            core: "7–15 working days",                     noncore: "Instant on submission" },
  { basis: "Notice Possible (REG-03)",   core: "Yes — officer may seek clarification",  noncore: "Not applicable" },
  { basis: "DSC / EVC Required",         core: "Yes — mandatory",                       noncore: "Yes — mandatory" },
  { basis: "Form Used",                  core: "REG-14 (Amendment Application)",        noncore: "REG-14 (Amendment Application)" },
  { basis: "Effect Date",                core: "From date of change (not filing date)", noncore: "From date of filing" },
];

const DOCUMENTS = [
  { label: "GST Login Credentials",         sub: "Portal username and password for filing REG-14" },
  { label: "Proof of New Address",           sub: "Electricity bill / rent agreement + NOC (for address change)" },
  { label: "Updated Partnership Deed / Board Resolution", sub: "For change in partners, directors, or constitution" },
  { label: "New Partner / Director KYC",    sub: "PAN, Aadhaar, photograph of incoming partner/director" },
  { label: "Cancelled Cheque / Bank Statement", sub: "For bank account detail update" },
  { label: "DSC or Aadhaar OTP",            sub: "For e-signing the REG-14 amendment application" },
  { label: "NOC from Property Owner",       sub: "If new principal place of business is rented" },
  { label: "Authorised Signatory Details",  sub: "New signatory's PAN, Aadhaar, photo, consent letter" },
];

const STEPS = [
  { n: "01", title: "Identify Amendment Type",          desc: "Share what needs to be changed. Taxvio's CA team determines whether it is a core or non-core amendment and confirms the documents required." },
  { n: "02", title: "Document Collection",              desc: "Send supporting documents — address proof, board resolution, KYC, or bank statement — via WhatsApp or email based on amendment type." },
  { n: "03", title: "REG-14 Application Preparation",   desc: "Our CA team prepares the amendment application (Form REG-14) with all required details and supporting attachments." },
  { n: "04", title: "DSC / EVC Signing",                desc: "Application is e-signed using your DSC or Aadhaar-based EVC authentication before submission on the GST portal." },
  { n: "05", title: "Submission & Tracking",            desc: "REG-14 filed on the portal. For non-core: instantly approved. For core: tracked through officer review; Taxvio handles any REG-03 query notice." },
  { n: "06", title: "Updated Certificate Delivered",    desc: "Amended GST registration certificate (REG-15) issued and delivered to you on WhatsApp. Your GSTIN records now reflect the updated information." },
];

const FAQS = [
  {
    q: "What is GST amendment and when is it required?",
    a: "GST amendment is the process of updating or modifying details in an existing GST registration using Form REG-14 on the GST portal. It is required whenever there is a change in any registered information — such as business name, principal place of business, bank account, authorised signatory, addition or removal of partners/directors, or change in contact details. Under Rule 19 of the CGST Rules, 2017, a registered taxpayer must apply for an amendment within 15 days of the occurrence of any change in the registered particulars. Failure to update details promptly can lead to compliance discrepancies, mismatch in GSTIN records, and potential penalties under Section 122 of the CGST Act.",
  },
  {
    q: "What is the difference between core and non-core GST amendment?",
    a: "Under the CGST Rules, amendments are classified into core and non-core categories. Core amendments involve changes to fundamental registration details — such as legal or trade name, principal place of business address, additional places of business, addition or removal of partners or directors, or a change in business constitution (e.g. proprietorship converting to a partnership). Core amendments require approval by the GST officer and may take 7–15 working days; the officer may issue a REG-03 notice for additional documents. Non-core amendments cover peripheral details like bank account numbers, email address, mobile number, authorised signatory details, and minor address corrections. Non-core amendments are auto-approved immediately upon submission — no officer review is required.",
  },
  {
    q: "How long does GST amendment take to process?",
    a: "The processing time depends on the amendment type. Non-core amendments (bank account, email, mobile, authorised signatory) are auto-approved instantly upon successful submission of Form REG-14 — no officer intervention is required. Core amendments (name change, address change, addition/removal of partners) are reviewed by a GST officer. If the application is complete and all documents are in order, approval is typically granted within 7 working days. If the officer issues a REG-03 notice for additional information, the applicant must respond within 15 working days; if the response is satisfactory, approval is granted within 7 days of the response. Total timeline for core amendments with an officer query can be up to 15 working days.",
  },
  {
    q: "Can I change my business name in GST registration?",
    a: "Yes, you can change your trade name in GST registration. However, the legal name in GST registration is linked to your PAN — so if your legal name (as on PAN) has changed, the PAN itself must first be updated with the Income Tax Department before the GST registration can reflect the new legal name. Once PAN records are updated, Form REG-14 can be filed to update the legal name in GST. If you only want to change your trade name (the name under which you conduct business, which is different from the legal entity name), this can be done directly through a core amendment via REG-14.",
  },
  {
    q: "What is Form REG-14 and REG-15?",
    a: "Form REG-14 is the application form used to apply for any amendment (core or non-core) in GST registration details. It is filed on the GST Common Portal under Services > Registration > Amendment of Registration. Upon submission, an ARN (Application Reference Number) is generated as acknowledgement. Form REG-15 is the amended GST registration certificate issued by the GST officer after approving a core amendment application. For non-core amendments that are auto-approved, the updated registration certificate is available immediately for download from the GST portal. REG-15 serves as the official updated proof of GST registration incorporating the amended details.",
  },
  {
    q: "What happens if I miss the 15-day deadline to apply for GST amendment?",
    a: "Under Rule 19(1) of the CGST Rules, 2017, a registered taxpayer is required to apply for an amendment within 15 days of the occurrence of any change in registered particulars. While the GST portal technically allows late filing of REG-14 (there is no hard system block after 15 days), filing beyond the 15-day window creates a compliance gap. If the GST department conducts an audit or scrutiny and finds that registered particulars were not updated in time, it can treat this as a contravention under Section 122(1) of the CGST Act, which attracts a penalty of ₹10,000 or the equivalent of tax evaded (whichever is higher). Taxvio recommends filing the amendment as soon as the change occurs.",
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
  name: "GST Amendment India",
  serviceType: "GST Amendment",
  description:
    "Professional GST amendment services — core and non-core amendments via Form REG-14. Business name, address, bank account, partner/director updates. Starting ₹799. CA-assisted, pan India.",
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
    price: "799",
    priceCurrency: "INR",
    description: "GST Amendment — core and non-core, starting ₹799.",
  },
};

export default function GSTAmendmentClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [tab, setTab] = useState<"core" | "noncore">("core");

  return (
    <>
      <Script id="gst-amendment-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="gst-amendment-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="GST Amendment Services India" itemScope itemType="https://schema.org/Service">
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
                <li className="text-white font-medium">GST Amendment</li>
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
                    Non-Core Amendments Approved Instantly
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    GST Amendment —
                    <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                      Update GST Registration Details
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    CA-assisted GST amendment for business name, address, bank account, authorised
                    signatory, partners/directors, and all core &amp; non-core fields. 100% online,
                    starting at <strong className="text-white">₹799</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> Amend on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ Core & Non-Core", "✅ Form REG-14", "✅ REG-03 Reply Included", "✅ All States"].map(tx => (
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
                      <p className="font-bold text-white text-lg">GST Amendment — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon: "₹",  label: "Professional Fee",        val: "Starting ₹799" },
                        { icon: "⚡", label: "Non-Core Processing",     val: "Instant (auto-approved)" },
                        { icon: "⏱", label: "Core Processing",         val: "7–15 Working Days" },
                        { icon: "📋", label: "Form Used",               val: "REG-14 (GST Portal)" },
                        { icon: "📄", label: "Amended Certificate",     val: "Form REG-15" },
                        { icon: "⏰", label: "Filing Deadline",         val: "Within 15 days of change" },
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
                        Start Amendment — ₹799 →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ INTERNAL LINKS BANNER ════════════════════════════════════════ */}
        <div className="bg-blue-50 border-y border-blue-100 py-4">
          <p className="text-center text-sm text-gray-700 max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>Need GST Registration?{" "}
              <Link href="/serviceslist/gst/gst-registration" className="text-[#00416a] font-bold underline underline-offset-2">Register here</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Need to file returns?{" "}
              <Link href="/serviceslist/gst/gst-return" className="text-[#00416a] font-bold underline underline-offset-2">File GST Returns</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Want to cancel GSTIN?{" "}
              <Link href="/serviceslist/gst/gst-cancellation" className="text-[#00416a] font-bold underline underline-offset-2">Cancel GST Registration</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 — What is GST Amendment ═════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is GST Amendment">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                What is GST Amendment and When is it Required?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>GST amendment</strong> is the process by which a registered taxpayer updates or
                  modifies details in their existing GST registration on the GST Common Portal (gst.gov.in)
                  by filing <strong>Form REG-14</strong>. Under <strong>Rule 19 of the CGST Rules, 2017</strong>,
                  every registered person is legally required to apply for an amendment within
                  <strong> 15 days</strong> of any change occurring in the information furnished at the time
                  of registration or in any subsequent amendment. Failure to update GST registration details
                  within the prescribed timeline is a contravention under Section 122 of the CGST Act and
                  can attract a penalty of ₹10,000 or the tax equivalent, whichever is higher.
                </p>
                <p>
                  GST amendment becomes necessary in a wide range of business scenarios: when a business
                  relocates its office or warehouse (principal place of business change), when a new
                  partner or director joins the firm, when a partner retires or a director is removed from
                  the board, when the business trades under a different trade name, when the company&apos;s bank
                  account changes, or simply when the authorised signatory&apos;s mobile number or email address
                  changes. Each of these requires a specific amendment in the GST registration records to
                  ensure that official GST correspondence, notices, refunds, and ITC credits reach the
                  correct address and the right person.
                </p>
                <p>
                  It is important to note that GST registration details and PAN details are interlinked — the
                  <strong> legal name</strong> in GST registration is derived directly from the PAN database.
                  If your legal business name has changed (for example, due to a court order, company name
                  change with the Registrar of Companies, or a change in the proprietor&apos;s name on their PAN),
                  the <strong>PAN records must first be updated with the Income Tax Department</strong> before
                  the corresponding change can be effected in GST registration. Trade name changes (which
                  are separate from the legal entity name) can be made directly through the GST portal.
                </p>
                <p>
                  The GST amendment framework divides all possible changes into two categories —
                  <strong> core amendments</strong> (which require GST officer approval) and
                  <strong> non-core amendments</strong> (which are auto-approved immediately). Understanding
                  which category your change falls into is critical, as it determines the documents required,
                  the processing timeline, and whether an officer query notice (REG-03) is a possibility.
                  Taxvio&apos;s CA team assesses your amendment requirement, confirms the category, and handles
                  the entire process — from document preparation to REG-14 filing and REG-15 certificate delivery.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ CORE vs NON-CORE TABS ════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50" aria-label="Core and Non-Core GST Amendment Fields">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  Amendment Types
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Core vs Non-Core GST Amendment — What Can Be Changed
                </h2>
                <p className="text-gray-600 mt-2 text-sm max-w-2xl mx-auto">
                  All GST amendments use the same Form REG-14 but have very different approval timelines
                  and requirements depending on whether the field is core or non-core.
                </p>
              </motion.div>

              {/* Tab switcher */}
              <motion.div variants={fadeUp} className="flex gap-3 justify-center mb-8">
                {(["core", "noncore"] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className="px-6 py-2.5 rounded-xl font-bold text-sm transition-all"
                    style={{
                      background: tab === t ? "#00416a" : "white",
                      color: tab === t ? "white" : "#00416a",
                      border: "2px solid #00416a",
                    }}>
                    {t === "core" ? "⚠️ Core Amendment" : "✅ Non-Core Amendment"}
                  </button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                {tab === "core" && (
                  <motion.div key="core"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}>
                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-5 flex items-start gap-3">
                      <AlertCircle size={18} className="text-orange-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-orange-800 text-sm">Core Amendment — Officer Approval Required</p>
                        <p className="text-orange-700 text-xs mt-1">
                          Processing time: 7–15 working days. Officer may issue REG-03 notice for additional documents.
                          Taxvio handles all notices as part of the service.
                        </p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {CORE_FIELDS.map(({ field, note }) => (
                        <div key={field} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-all">
                          <RefreshCw size={16} className="text-orange-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-800 text-sm">{field}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {tab === "noncore" && (
                  <motion.div key="noncore"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}>
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-5 flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-green-800 text-sm">Non-Core Amendment — Auto-Approved Instantly</p>
                        <p className="text-green-700 text-xs mt-1">
                          No officer review required. Amendment takes effect immediately upon submission of REG-14.
                          Updated GST certificate downloadable right away.
                        </p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {NON_CORE_FIELDS.map(({ field, note }) => (
                        <div key={field} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-all">
                          <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-gray-800 text-sm">{field}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{note}</p>
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

        {/* ══ COMPARISON TABLE ════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="Core vs Non-Core Amendment Comparison">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a]">
                  Core vs Non-Core Amendment — Detailed Comparison
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm" aria-label="GST amendment comparison table">
                  <thead>
                    <tr style={{ background: "#00416a" }}>
                      <th className="text-left px-5 py-4 text-white font-semibold">Parameter</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Core Amendment</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Non-Core Amendment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map(({ basis, core, noncore }, i) => (
                      <tr key={basis} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3.5 font-semibold text-gray-800">{basis}</td>
                        <td className="px-5 py-3.5 text-orange-700 font-medium">{core}</td>
                        <td className="px-5 py-3.5 text-green-700 font-medium">{noncore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — Rule 19, timeline, penalty ═════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="GST Amendment Rules and Penalties">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-[#00416a] mb-5">
                GST Amendment Rules — Timeline, Officer Process &amp; Consequences of Non-Update
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The legal framework for GST amendments is governed by <strong>Rule 19 of the CGST Rules,
                  2017</strong>, read with <strong>Section 28 of the CGST Act, 2017</strong>. Section 28
                  empowers the proper GST officer to approve amendments to registration information based
                  on the taxpayer&apos;s application or suo motu (on their own initiative) if incorrect information
                  is discovered during audit or scrutiny. Rule 19 operationalises this by specifying the
                  timeline, form (REG-14), and procedure.
                </p>
                <p>
                  For <strong>core amendments</strong>, once Form REG-14 is submitted, the GST officer has
                  15 working days to process the application. If the officer needs additional information,
                  they issue a <strong>Form REG-03</strong> notice (similar to the one issued during initial
                  registration). The taxpayer (or Taxvio on their behalf) must respond with
                  <strong> Form REG-04</strong> within 15 working days of receiving REG-03. If the officer
                  is satisfied, an <strong>order in Form REG-15</strong> is passed approving the amendment
                  and a new registration certificate is issued. If the officer rejects the application,
                  a rejection order in Form REG-05 is issued with reasons — which can be challenged before
                  the appellate authority.
                </p>
                <p>
                  One commonly overlooked scenario is when a change in registered particulars occurs and
                  the taxpayer does not file REG-14 at all — either due to lack of awareness or because
                  they consider the change minor. This creates a <strong>mismatch between actual business
                  operations and GST registration records</strong>. If the GST department identifies this
                  discrepancy during an inspection under Section 67, audit under Section 65, or scrutiny
                  of returns under Section 61, it is treated as furnishing incorrect information in the
                  registration application — a contravention under Section 122(1)(xi), attracting a penalty
                  of ₹10,000 (or the equivalent of tax, whichever is higher) for each contravention.
                </p>
                <p>
                  A particularly important compliance requirement is the <strong>timely update of bank
                  account details</strong> in GST registration. All GST refunds — whether export refunds,
                  inverted duty structure refunds, or excess cash ledger refunds — are processed by the
                  CBIC directly to the bank account registered in the GST portal. If the bank account
                  details are outdated or incorrect, refunds will fail, and the re-credit process
                  (requiring manual intervention and correspondence with the GST department) can take
                  several months. Updating bank account details is a non-core amendment — it is auto-approved
                  instantly via REG-14.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ DOCUMENTS ════════════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="Documents for GST Amendment">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                  Document Checklist
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  Documents Required for GST Amendment
                </h2>
                <p className="text-gray-600 mt-2 text-sm max-w-xl mx-auto">
                  Documents vary by amendment type. Taxvio confirms the exact list after reviewing
                  your specific change. These are the common documents across amendment types.
                </p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {DOCUMENTS.map(({ label, sub }) => (
                  <motion.div key={label} variants={scaleIn}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-all duration-200">
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
        <section className="py-20 bg-gray-50" aria-label="GST Amendment Process Steps">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                  GST Amendment Process — 6 Steps to Updated Registration
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  100% online. No office visit. Send your documents on WhatsApp — we file REG-14 and deliver REG-15.
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
        <section className="py-16" style={{ background: "#00416a" }}
          aria-label="GST Amendment Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                GST Amendment Fee — No Hidden Charges
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Flat fee per amendment. REG-03 officer query response included at no extra charge.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan: "Non-Core Amendment", price: "₹799", highlight: false,
                  items: ["Bank account update", "Email / mobile change", "Authorised signatory update", "HSN / nature of business change", "Instant approval — no wait"],
                },
                {
                  plan: "Core Amendment", price: "₹1,499", highlight: true,
                  items: ["Business name / address change", "Partner / director addition or removal", "Principal place of business", "REG-03 officer notice reply", "REG-15 certificate delivery"],
                },
                {
                  plan: "Combined Amendment Bundle", price: "₹1,999", highlight: false,
                  items: ["Core + non-core amendments", "Unlimited fields in one filing", "Full document preparation", "Priority processing", "WhatsApp support throughout"],
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
        <section className="py-20 bg-white" aria-label="GST Amendment FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-gray-50 px-3 py-1 rounded-full border border-blue-100">
                  FAQ
                </span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                  Frequently Asked Questions — GST Amendment
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
        <section className="py-16 bg-gray-50" aria-label="Related GST Services">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-[#00416a]">Other GST Services by Taxvio</h2>
              <p className="text-gray-500 text-sm mt-2">Full GST lifecycle support — from registration to compliance</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "GST Registration",       href: "/serviceslist/gst/gst-registration",  desc: "New GSTIN in 3–7 days — ₹1,499" },
                { title: "GST Return Filing",       href: "/serviceslist/gst/gst-return",        desc: "Monthly GSTR-1 & GSTR-3B — ₹499/month" },
                { title: "GST Cancellation",        href: "/serviceslist/gst/gst-cancellation",  desc: "Voluntary GSTIN cancellation — ₹1,499" },
                { title: "GST Notice Reply",        href: "/serviceslist/gst/gst-notice-reply",  desc: "ASMT-10, DRC-01, SCN reply — ₹1,999" },
                { title: "GSTR-9 Annual Return",    href: "/serviceslist/gst/gstr-9",            desc: "Annual reconciliation & filing — ₹2,999" },
                { title: "GST Refund",              href: "/serviceslist/gst/gst-refund",        desc: "Export & inverted duty refund — ₹2,499" },
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
              <Zap size={14} className="text-yellow-400" /> Non-core amendments approved instantly
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Update Your GST Details — File within 15 Days
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg"
              style={{ color: "rgba(255,255,255,0.72)" }}>
              CA-assisted GST amendment for all field types — core and non-core. Starting ₹799.
              100% online. REG-03 officer query handling included.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Amend Now
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
              <span className="flex items-center gap-1.5"><Clock size={13} /> Fast Processing</span>
              <span className="flex items-center gap-1.5"><FileText size={13} /> REG-15 Certificate</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#001e36", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — Start GST Amendment
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