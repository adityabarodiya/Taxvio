// app/serviceslist/gst/gst-appeal-filing/GSTAppealFilingClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Appeal Filing Services - Appellate Authority Representation",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  description:
    "Professional GST appeal filing services before the First Appellate Authority (Commissioner Appeals) under Section 107 of CGST Act. Expert assistance in impugned order analysis, grounds of appeal preparation, Form GST APL-01 drafting and filing, pre-deposit computation and payment, stay application (if required), personal hearing representation, and order tracking. Comprehensive appeal support for adverse assessment orders, demand orders, penalty orders, refund rejection, input tax credit denial, and registration/cancellation disputes. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "GST Appeal Filing & Appellate Representation",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "9999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "9999",
      maxPrice: "49999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GST appeal and when can it be filed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST appeal is a legal remedy available to taxpayers who are aggrieved by any order passed by a GST officer (Proper Officer, Adjudicating Authority). It is filed before the First Appellate Authority (Commissioner of GST - Appeals) under Section 107 of the CGST Act. Appeals can be filed against: Assessment orders, Demand orders (tax, interest, penalty), Penalty orders, Refund rejection orders, Input Tax Credit (ITC) denial/reversal orders, Registration rejection/cancellation orders, SCN (Show Cause Notice) adjudication orders. The appeal must be filed within 3 months from the date of communication of the order (extendable by 1 month on sufficient cause).",
      },
    },
    {
      "@type": "Question",
      name: "What is the time limit to file a GST appeal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The statutory time limit to file a GST appeal (Form GST APL-01) is 3 MONTHS from the date of communication of the impugned order (the order you want to challenge). This deadline is STRICT. However, if you have a genuine reason for delay (e.g., not receiving the order on time, medical emergency, natural calamity), you can file a condonation of delay application and the Appellate Authority MAY extend the deadline by an ADDITIONAL 1 MONTH (total 4 months maximum). Beyond 4 months, appeal filing is NOT allowed — the order becomes final and binding.",
      },
    },
    {
      "@type": "Question",
      name: "What is pre-deposit and how much must be paid before filing appeal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-deposit is a MANDATORY payment that must be made BEFORE filing a GST appeal. As per Section 107(6) of CGST Act, the appellant must deposit: (1) For disputed tax demand: 10% of the REMAINING tax amount in dispute (after adjusting any tax already paid), OR ₹25 crore, whichever is LOWER, (2) For penalty/interest/fee disputes: No pre-deposit required (can file appeal directly). Example: If demand order is for ₹50 lakh tax + ₹10 lakh penalty, and you have already paid ₹5 lakh tax, pre-deposit = 10% of (₹50 lakh - ₹5 lakh) = ₹4.5 lakh. The pre-deposit must be paid via Form DRC-03 (challan) and proof attached with APL-01.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTAppealFilingClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⏰ GST Demand Order Received? File Appeal Within 3 Months — Protect Your Rights
        </div>

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link href="/serviceslist" className="hover:text-white transition">
                Services
              </Link>
              <span>/</span>
              <Link
                href="/serviceslist/gst"
                className="hover:text-white transition"
              >
                GST Services
              </Link>
              <span>/</span>
              <span className="text-white">GST Appeal Filing</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  ⚖️ Legal Remedy & Relief
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Appeal Filing
                  <br />
                  <span className="text-[#7ecbf0]">Expert Service</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Received an{" "}
                  <strong className="text-white">
                    adverse GST demand order, penalty order, or refund rejection
                  </strong>
                  ? You have the{" "}
                  <strong className="text-white">legal right to appeal</strong>{" "}
                  before the{" "}
                  <strong className="text-white">
                    First Appellate Authority (Commissioner Appeals)
                  </strong>{" "}
                  under{" "}
                  <strong className="text-white">Section 107 of CGST Act</strong>{" "}
                  within{" "}
                  <strong className="text-white">3 months of the order</strong>.
                  Filing a strong appeal with proper{" "}
                  <strong className="text-white">
                    grounds of appeal, supporting evidence, and legal arguments
                  </strong>{" "}
                  can result in{" "}
                  <strong className="text-white">
                    demand reduction, penalty waiver, or complete relief
                  </strong>
                  . <strong className="text-white">Taxvio</strong> provides
                  end-to-end GST appeal services — order analysis, APL-01 drafting,
                  pre-deposit computation, filing, and hearing representation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File Appeal Now — ₹9,999 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20Appeal%20Filing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 3-Month Deadline Compliance",
                    "✅ Pre-Deposit Optimization",
                    "✅ Expert Hearing Representation",
                    "✅ CA & Advocate Support",
                  ].map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Quick Facts
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["⏰", "File within 3 months of order date"],
                    ["📋", "Form GST APL-01 on GST portal"],
                    ["💰", "Pre-deposit: 10% of disputed tax"],
                    ["⚖️", "First Appellate Authority hearing"],
                    ["🚫", "Beyond 4 months = No appeal"],
                    ["🚀", "Appeal fee: ₹9,999 onwards"],
                  ].map(([icon, text]) => (
                    <li key={text as string} className="flex items-start gap-3">
                      <span className="text-base">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "150+", label: "Appeals Filed", icon: "✅" },
              { number: "3 Months", label: "Statutory Deadline", icon: "⏰" },
              { number: "75%", label: "Success Rate", icon: "📊" },
              { number: "₹9,999", label: "Starting Fee", icon: "💰" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {s.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ CA & Advocate Team",
              "✔ Legal Research Support",
              "✔ Deadline Tracking",
              "✔ Personal Hearing Representation",
            ].map((t) => (
              <div
                key={t}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* WHAT IS GST APPEAL */}
          <section id="what-is-appeal">
            <SectionLabel text="Understanding GST Appeal" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is GST Appeal Under Section 107?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>GST Appeal</strong> is a legal remedy available to any
                  person{" "}
                  <strong>
                    aggrieved by any decision or order passed by a GST officer
                  </strong>{" "}
                  (Proper Officer, Adjudicating Authority, Commissioner). It is
                  filed before the{" "}
                  <strong>First Appellate Authority</strong> under{" "}
                  <strong>Section 107 of the CGST Act, 2017</strong>.
                </p>
                <p>
                  The First Appellate Authority is typically the{" "}
                  <strong>
                    Commissioner of GST (Appeals) or Joint/Additional Commissioner
                    (Appeals)
                  </strong>{" "}
                  depending on the jurisdictional pecuniary limits set by the state
                  government.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    ⚖️ Orders Against Which Appeal Can Be Filed
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    You can file an appeal against the following types of orders:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-6">
                    {[
                      "Assessment orders (best judgment assessment, provisional assessment finalization)",
                      "Demand orders (tax demand with interest and penalty under Section 73/74)",
                      "Penalty orders (standalone penalty orders under Section 122, 125, 129)",
                      "Refund rejection orders (refund claim rejection or partial sanction)",
                      "Input Tax Credit (ITC) denial/reversal orders",
                      "Registration rejection orders (new registration application rejected)",
                      "Registration cancellation orders (suo-moto cancellation by department)",
                      "Revocation rejection orders (REG-21 revocation application rejected)",
                      "SCN adjudication orders (orders passed after adjudicating Show Cause Notice)",
                      "Any other decision/order that adversely affects the taxpayer's rights",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    💰 Pre-Deposit Requirement (Section 107(6))
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Before filing an appeal, you MUST deposit a certain amount as
                    "pre-deposit" (mandatory partial payment):
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-green-200">
                    <p className="font-bold text-green-700 text-sm mb-2">
                      📊 Pre-Deposit Formula
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p>
                        <strong>
                          For Disputed Tax (CGST/SGST/IGST) Amount:
                        </strong>
                        <br />
                        Pre-deposit = 10% of the REMAINING disputed tax amount
                        (after adjusting any tax already paid)
                        <br />
                        Subject to maximum of <strong>₹25 crore</strong>
                      </p>
                      <p>
                        <strong>For Penalty, Interest, or Fee Disputes:</strong>
                        <br />
                        NO pre-deposit required (can file appeal directly)
                      </p>
                      <div className="bg-green-50 rounded-lg p-3 mt-2">
                        <p className="font-bold text-green-800 mb-1">
                          💡 Example
                        </p>
                        <p>
                          Demand order: ₹50 lakh (tax) + ₹10 lakh (interest) +
                          ₹15 lakh (penalty)
                          <br />
                          Already paid: ₹5 lakh (tax)
                          <br />
                          <strong>Pre-deposit calculation:</strong>
                          <br />
                          Remaining disputed tax = ₹50 lakh - ₹5 lakh = ₹45 lakh
                          <br />
                          Pre-deposit = 10% of ₹45 lakh = <strong>₹4.5 lakh</strong>
                          <br />
                          (No pre-deposit for interest/penalty portion)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  Time Limit to File Appeal
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    ⏰ 3-Month Deadline (Statutory Limit)
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Appeal must be filed within{" "}
                    <strong>3 months from the date of communication</strong> of
                    the order you want to challenge (the "impugned order").
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-orange-200 mb-4">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      📅 How to Calculate Deadline
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      "Date of communication" means the date on which the order is
                      served on you (typically via email to your registered email
                      ID on GST portal or physical service at registered address).
                    </p>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="font-bold text-orange-800 mb-1 text-xs">
                        💡 Example
                      </p>
                      <p className="text-xs text-gray-600">
                        Order date: 15th January 2024
                        <br />
                        Order served to you (email/physical): 20th January 2024
                        <br />
                        3-month deadline: <strong>20th April 2024</strong>
                        <br />
                        If you file on or before 20th April 2024, appeal is
                        admitted (within time)
                        <br />
                        If you file on 21st April 2024 or later, appeal is
                        time-barred (unless delay is condoned)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📝 Condonation of Delay (Additional 1 Month)
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    If you miss the 3-month deadline due to{" "}
                    <strong>sufficient cause</strong> (genuine reason), you can
                    apply for <strong>condonation of delay</strong> and the
                    Appellate Authority MAY extend the deadline by{" "}
                    <strong>1 additional month</strong> (total 4 months maximum).
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-purple-200">
                    <p className="font-bold text-purple-700 text-sm mb-2">
                      ✅ Valid Reasons for Condonation
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      {[
                        "Order was not received/served on time (proof required)",
                        "Medical emergency or prolonged illness (medical certificate)",
                        "Death in family or personal crisis",
                        "Natural calamity (floods, earthquake affecting your area)",
                        "Technical issues with GST portal (screenshot/proof)",
                        "Bonafide mistake or error (with explanation)",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Note:</strong> Condonation is at the discretion of the
                    Appellate Authority. Beyond 4 months, appeal is ABSOLUTELY
                    TIME-BARRED and will be rejected on limitation grounds.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    🚫 What Happens If You Don't File Appeal
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "The impugned order becomes FINAL and BINDING — you cannot challenge it later",
                      "Tax demand, penalty, and interest become legally enforceable",
                      "GST department can initiate recovery proceedings (bank attachment, property attachment)",
                      "Your GSTIN may be suspended or cancelled for non-payment of demand",
                      "You lose the right to seek relief — demand must be paid in full",
                      "Only option left: File writ petition in High Court (expensive and time-consuming)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in GST appeal filing — deadline tracking, APL-01
                  drafting, pre-deposit optimization, hearing representation, and
                  order compliance across Uttar Pradesh, Noida, Delhi NCR, and
                  pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* APPEAL FILING PROCESS */}
          <section id="filing-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to File GST Appeal (Form APL-01)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                GST appeal is filed on the GST portal via{" "}
                <strong>Form GST APL-01</strong>. Here's the complete process:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Download & Analyze the Impugned Order",
                    description:
                      "Obtain a copy of the order you want to challenge (impugned order): Log in to GST portal → Services → User Services → View Additional Notices/Orders → Download the order (usually in Form GST DRC-07 for demand, Form GST REG-19 for cancellation, etc.). Read the order carefully: Identify the disputed tax/penalty amount, Understand the grounds/reasons given by the officer for the demand/penalty, Note the date of communication (starting date for 3-month deadline), Identify factual and legal errors/misinterpretations in the order. Taxvio conducts a detailed legal analysis and prepares a case summary highlighting appeal grounds.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Preparation of Grounds of Appeal",
                    description:
                      "Grounds of appeal are the REASONS why you believe the impugned order is wrong and should be set aside. This is the MOST CRITICAL part of the appeal. We prepare detailed grounds covering: (1) Factual Errors: Officer misunderstood facts, relied on incorrect data, ignored evidence submitted by you. (2) Legal Errors: Order violates provisions of CGST Act/Rules, wrong interpretation of law, precedent judgments ignored. (3) Procedural Violations: Principles of natural justice violated (no opportunity to be heard), SCN not properly served, order passed beyond limitation period. (4) Miscalculation: Demand amount wrongly calculated, interest/penalty computation errors. Each ground is supported by: Relevant CGST Act sections, GST Rules, Notifications, Circulars, Case laws (High Court/Supreme Court judgments), Supporting documentary evidence. We draft grounds in legal language with proper citations for maximum impact.",
                    duration: "3-5 days",
                  },
                  {
                    step: 3,
                    title: "Computation & Payment of Pre-Deposit (if applicable)",
                    description:
                      "If your appeal involves disputed tax demand, you MUST pay 10% pre-deposit BEFORE filing APL-01. Calculate pre-deposit: Identify total disputed tax amount from impugned order. Deduct any tax already paid (check electronic credit ledger and DRC-03 challans). Pre-deposit = 10% of (Total disputed tax - Already paid tax). Pay pre-deposit via Form DRC-03 challan: Log in to GST portal → Services → Payments → Create Challan → Select 'Others' → Select 'APL-01 (Pre-deposit for filing appeal)' → Enter amount separately for CGST, SGST/IGST. Make payment via net banking/NEFT/RTGS. Download challan and payment receipt (CIN - Challan Identification Number). Note: If appeal is only against penalty/interest/fee (no tax dispute), pre-deposit is NOT required.",
                    duration: "1 day",
                  },
                  {
                    step: 4,
                    title: "Compilation of Supporting Documents & Evidence",
                    description:
                      "Prepare a comprehensive set of supporting documents to substantiate your grounds of appeal: (1) Copy of impugned order (order being challenged), (2) Copy of Show Cause Notice (SCN) if any, (3) Copy of your reply to SCN (if submitted), (4) All GST returns filed (GSTR-1, GSTR-3B for the disputed period), (5) Invoices, purchase bills, stock registers, ledgers (if ITC or valuation is disputed), (6) Bank statements (if payment/receipt is disputed), (7) Correspondence with GST department (emails, letters), (8) Pre-deposit challan (DRC-03 payment proof), (9) Relevant case laws (printed copies of judgments cited in grounds), (10) Any other evidence supporting your case. All documents should be properly indexed, numbered, and paginated for easy reference during hearing.",
                    duration: "2-3 days",
                  },
                  {
                    step: 5,
                    title: "Online Filing of Form GST APL-01",
                    description:
                      "Log in to GST portal → Services → User Services → My Applications → New Application → APL-01 (Appeal to Appellate Authority). Fill Form APL-01: Part I - Appellant Details: GSTIN, Name, Address, Email, Mobile (auto-populated). Part II - Details of Impugned Order: Order number, Order date, Date of communication, Name and designation of officer who passed the order, Nature of order (Assessment/Demand/Penalty/Refund Rejection, etc.). Part III - Grounds of Appeal: Paste detailed grounds prepared in Step 2 (or upload as PDF attachment). Part IV - Relief Sought: Specify what relief you are seeking (e.g., 'Set aside the impugned order', 'Reduce demand to NIL', 'Condone delay and admit appeal'). Part V - Details of Pre-Deposit: Enter pre-deposit amount paid (CGST, SGST/IGST separately), DRC-03 challan number, date, and CIN. Part VI - Condonation of Delay (if filing after 3 months): Select 'Yes' and provide detailed reasons for delay with supporting documents. Part VII - Verification: Declare that information provided is true and correct. Upload Attachments: Impugned order PDF, SCN & reply PDFs, Supporting documents (invoices, returns, bank statements, etc.), Pre-deposit challan, Case laws cited. Maximum file size per attachment: 5 MB (use PDF format). Submit with DSC (Digital Signature Certificate) or EVC (Aadhaar-based OTP).",
                    duration: "1 day",
                  },
                  {
                    step: 6,
                    title: "Acknowledgment & ARN Generation",
                    description:
                      "Upon successful submission, GST portal generates an ARN (Application Reference Number) for your appeal. Example: AA270120240012345. Download acknowledgment (Form GST APL-02) from portal. The acknowledgment contains: ARN, Date of filing, Details of appellant, Impugned order details, Pre-deposit amount. Save ARN for all future correspondence and tracking.",
                    duration: "Immediate",
                  },
                  {
                    step: 7,
                    title: "Scrutiny by Appellate Authority (within 7 days)",
                    description:
                      "The Appellate Authority (Commissioner Appeals) scrutinizes the appeal within 7 days to check: Whether appeal is filed within time limit (3 months or 4 months if delay condoned). Whether required pre-deposit has been paid. Whether all mandatory fields in APL-01 are filled. If scrutiny is successful, appeal is ADMITTED and an appeal number is assigned. If defects are found, the Authority issues Form GST APL-03 (deficiency memo) asking you to rectify defects within 7 days. We respond to APL-03 promptly with rectified documents.",
                    duration: "7 days (by Authority)",
                  },
                  {
                    step: 8,
                    title: "Personal Hearing Notice (Form GST APL-04)",
                    description:
                      "After admission, the Appellate Authority issues Form GST APL-04 (Notice for Personal Hearing) specifying: Date, time, and venue of hearing (physical or virtual via video conferencing). Issues to be discussed during hearing. You (or your authorized representative - CA/Advocate) must appear for the hearing. We prepare: Written synopsis (summary of case and grounds), Compilation of key documents for reference during hearing, Legal arguments and citations ready for oral submission.",
                    duration: "15-30 days post-admission",
                  },
                  {
                    step: 9,
                    title: "Personal Hearing & Oral Arguments",
                    description:
                      "On the hearing date, our CA/Advocate appears before the Appellate Authority (Commissioner Appeals). During hearing: Present your case orally, highlighting key grounds of appeal. Answer questions/queries raised by the Authority. Submit additional documents if requested. Argue legal points citing case laws and statutory provisions. Request adjournment if more time is needed (valid reasons required). The Authority may ask for written submissions or additional evidence — we submit within the given deadline. Multiple hearings may be scheduled if the case is complex.",
                    duration: "1-3 hearings (each 30-60 mins)",
                  },
                  {
                    step: 10,
                    title: "Appellate Order (Form GST APL-05)",
                    description:
                      "After hearing all parties and reviewing evidence, the Appellate Authority passes the final order in Form GST APL-05 (Order-in-Appeal). The order can: (a) Allow the appeal (set aside impugned order — full relief), (b) Partially allow the appeal (reduce demand/penalty — partial relief), (c) Dismiss the appeal (uphold impugned order — no relief), (d) Remand the matter back to original officer for fresh adjudication (if procedural violations found). The order is uploaded on GST portal and sent to your registered email. Download the order from: Services → User Services → View Additional Notices/Orders. Taxvio analyzes the order and advises on: Compliance if appeal is dismissed (pay balance demand), or Filing second appeal to GST Appellate Tribunal if still aggrieved.",
                    duration: "Within 1 year of filing (as per Section 107)",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-green-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-green-300 rounded-2xl p-6">
                <p className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Total Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>7-10 days from order analysis to APL-01 filing</strong>{" "}
                  (if all documents are ready and pre-deposit paid). Appellate
                  Authority must pass order within{" "}
                  <strong>1 year from the date of filing</strong> (as per Section
                  107(11)). Typical timeline:{" "}
                  <strong>6-12 months for order</strong> depending on case
                  complexity and hearing schedule.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for GST Appeal Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Copy of impugned order (order being challenged)",
                    "Copy of Show Cause Notice (SCN) if any",
                    "Copy of your reply to SCN (if submitted)",
                    "GSTIN and registration certificate",
                    "GST returns for disputed period (GSTR-1, GSTR-3B, GSTR-9 if applicable)",
                    "Pre-deposit payment challan (Form DRC-03) — if tax demand is disputed",
                    "Electronic credit ledger statement (showing tax already paid, if any)",
                    "GST portal login credentials (for APL-01 filing)",
                    "Authorized representative details (CA/Advocate name, membership number) if not filing yourself",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-gray-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-gray-100 text-gray-700">
                  Supporting Documents (As Applicable)
                </p>
                <ul className="space-y-3">
                  {[
                    "Tax invoices (if supply value or ITC is disputed)",
                    "Purchase bills/invoices (if ITC claim is disputed)",
                    "Stock register, ledgers, books of accounts (if valuation is disputed)",
                    "Bank statements (if receipt/payment is disputed)",
                    "E-way bills, transport documents (if transit/movement is disputed)",
                    "Correspondence with GST department (emails, letters, notices)",
                    "Previous orders (if case has history of earlier proceedings)",
                    "Relevant case laws (printed copies of High Court/Supreme Court judgments cited)",
                    "CA certificate (if financial data/computation is involved)",
                    "Condonation of delay documents (medical certificate, FIR, etc. if filing after 3 months)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-gray-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Avoid These Errors" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Mistakes in GST Appeal Filing
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                GST appeal errors can lead to rejection, dismissal, or loss of
                relief. Here are critical mistakes to avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Missing the 3-Month Deadline",
                    icon: "⏰",
                    problem:
                      "Filing appeal after 3 months without valid condonation of delay application. Appeal is rejected as time-barred, and impugned order becomes final.",
                    solution:
                      "Set calendar reminders immediately upon receiving the order. Track deadline from 'date of communication' (not order date). If delay is unavoidable, file condonation application with valid documentary proof (medical certificate, etc.) BEFORE the 4-month outer limit.",
                  },
                  {
                    mistake: "Incorrect Pre-Deposit Calculation",
                    icon: "💰",
                    problem:
                      "Paying less than 10% pre-deposit due to wrong calculation (not deducting already paid tax, including penalty in pre-deposit, etc.). Appeal is rejected for non-compliance with Section 107(6).",
                    solution:
                      "Pre-deposit = 10% of (Total disputed TAX - Already paid tax). DO NOT include penalty/interest in pre-deposit calculation (they are not subject to pre-deposit). Cross-verify with electronic credit ledger and DRC-03 challans. Consult CA/expert for accurate computation.",
                  },
                  {
                    mistake: "Weak or Vague Grounds of Appeal",
                    icon: "📝",
                    problem:
                      "Grounds are too general ('The order is wrong', 'Demand is unjustified') without specific factual/legal arguments. Appellate Authority dismisses appeal for lack of merit.",
                    solution:
                      "Prepare DETAILED grounds citing: Specific errors in impugned order (factual, legal, procedural), Relevant CGST Act sections and Rules violated, Case laws supporting your position, Documentary evidence contradicting officer's findings. Each ground should be a separate paragraph with citations. Hire experienced CA/Advocate for drafting.",
                  },
                  {
                    mistake: "Not Uploading Supporting Documents",
                    icon: "📎",
                    problem:
                      "Filing APL-01 without attaching supporting evidence (invoices, returns, case laws). Appellate Authority has no basis to verify your claims and dismisses appeal.",
                    solution:
                      "Upload ALL relevant documents as attachments in APL-01. Prepare a document index (list of all attachments with page numbers). Ensure file size is <5 MB per attachment (compress if needed). Carry physical copies of all documents to personal hearing for quick reference.",
                  },
                  {
                    mistake: "Not Appearing for Personal Hearing",
                    icon: "👔",
                    problem:
                      "Ignoring APL-04 (hearing notice) or not appearing on hearing date. Appeal is decided EX-PARTE (without hearing your side), usually resulting in dismissal.",
                    solution:
                      "ALWAYS appear for personal hearing (yourself or through authorized CA/Advocate). If unable to attend due to genuine reason, file adjournment application BEFORE the hearing date. Prepare thoroughly for hearing — written synopsis, documents, legal arguments ready. Multiple hearings may be scheduled — attend all of them.",
                  },
                  {
                    mistake: "Filing Appeal Without Paying Pre-Deposit",
                    icon: "💵",
                    problem:
                      "Attempting to file APL-01 without paying 10% pre-deposit (for tax disputes). Portal allows submission but appeal is rejected during scrutiny for non-compliance with Section 107(6).",
                    solution:
                      "ALWAYS pay pre-deposit FIRST via DRC-03 challan. Obtain CIN (Challan Identification Number). Enter pre-deposit details in APL-01 (CIN, date, amount). Attach challan copy as proof. Only then submit APL-01. Without pre-deposit, appeal has ZERO chance of admission.",
                  },
                ].map((item) => (
                  <div
                    key={item.mistake}
                    className="bg-white rounded-2xl p-6 border border-red-200"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-3xl">{item.icon}</div>
                      <h3 className="font-bold text-red-700 text-lg">
                        {item.mistake}
                      </h3>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-3">
                      <p className="font-bold text-red-600 text-xs mb-2">
                        ⚠️ Problem
                      </p>
                      <p className="text-xs text-gray-700">{item.problem}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <p className="font-bold text-green-700 text-xs mb-2">
                        ✅ Solution
                      </p>
                      <p className="text-xs text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's GST Appeal Filing Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From order analysis to hearing representation — we handle every
              aspect of your GST appeal with legal precision and strategic
              arguments.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📋",
                  title: "Order Analysis & Feasibility Opinion",
                  desc: "Detailed review of impugned order to identify errors (factual, legal, procedural). Feasibility assessment of success chances, alternative remedies. Written opinion on whether to appeal or settle.",
                  price: "₹2,999",
                },
                {
                  icon: "⚖️",
                  title: "Complete Appeal Filing (Standard)",
                  desc: "Drafting of detailed grounds of appeal with legal citations and case laws. Pre-deposit computation and payment assistance. Form APL-01 filing with all supporting documents. Acknowledgment (APL-02) download and ARN tracking.",
                  price: "₹9,999",
                },
                {
                  icon: "💰",
                  title: "Pre-Deposit Optimization & Payment",
                  desc: "Accurate computation of 10% pre-deposit (considering already paid tax, deductions). Challan generation (DRC-03), payment processing, and CIN documentation. Strategy to minimize pre-deposit liability.",
                  price: "₹1,999",
                },
                {
                  icon: "📝",
                  title: "Grounds of Appeal Drafting (Legal Research)",
                  desc: "Comprehensive legal research and case law analysis. Drafting of strong grounds covering all factual, legal, and procedural errors. Citation of relevant CGST Act sections, Rules, Notifications, Circulars, and High Court/Supreme Court judgments.",
                  price: "₹4,999",
                },
                {
                  icon: "📨",
                  title: "Response to Deficiency Memo (APL-03)",
                  desc: "If Appellate Authority issues APL-03 pointing defects in appeal, we draft detailed response, submit rectified documents, and ensure appeal is admitted without delay.",
                  price: "₹1,999",
                },
                {
                  icon: "👔",
                  title: "Personal Hearing Representation",
                  desc: "Appearance before Appellate Authority (Commissioner Appeals) on your behalf. Preparation of written synopsis, oral arguments, answering Authority's queries, submission of additional documents if requested.",
                  price: "₹7,999/hearing",
                },
                {
                  icon: "📊",
                  title: "Complex/High-Value Appeal (>₹25 Lakh Demand)",
                  desc: "For cases involving large tax demands, multiple legal issues, or complex facts. Includes: Senior CA + Advocate representation, detailed evidence compilation, multiple hearings support, post-order compliance.",
                  price: "₹49,999",
                },
                {
                  icon: "🔄",
                  title: "Second Appeal (to GST Appellate Tribunal)",
                  desc: "If First Appellate Authority's order is still adverse, we file second appeal to GST Appellate Tribunal (GSTAT) under Section 112. Includes tribunal appeal drafting, pre-deposit (if applicable), and hearing representation.",
                  price: "₹29,999",
                },
                {
                  icon: "📄",
                  title: "Stay Application (to Stay Recovery Pending Appeal)",
                  desc: "If you cannot pay remaining demand immediately, we file stay application requesting Authority to stay recovery proceedings during appeal pendency. Includes drafting stay application and arguing financial hardship.",
                  price: "₹4,999",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <p className="text-lg font-bold text-[#00416a]">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <p className="font-bold text-green-800 mb-3">
                📦 Complete Appeal Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic (Up to ₹5 Lakh Demand)",
                    price: "₹9,999",
                    includes: [
                      "Order analysis & grounds",
                      "APL-01 filing",
                      "Pre-deposit assistance",
                      "1 hearing representation",
                      "Email support",
                    ],
                  },
                  {
                    package: "Standard (₹5-25 Lakh Demand)",
                    price: "₹19,999",
                    includes: [
                      "Everything in Basic",
                      "Legal research & citations",
                      "APL-03 deficiency response",
                      "Up to 3 hearings",
                      "Priority support",
                    ],
                  },
                  {
                    package: "Premium (>₹25 Lakh Demand)",
                    price: "₹49,999",
                    includes: [
                      "Everything in Standard",
                      "Senior CA + Advocate team",
                      "Stay application support",
                      "Unlimited hearings",
                      "WhatsApp + call support",
                    ],
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.package}
                    className="bg-white rounded-xl p-5 border border-green-300"
                  >
                    <p className="font-bold text-green-800 mb-1">{pkg.package}</p>
                    <p className="text-2xl font-extrabold text-[#00416a] mb-3">
                      {pkg.price}
                    </p>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-green-600 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Our Appeal Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sharma Industries",
                  location: "Muzaffarnagar",
                  text: "Received a ₹15 lakh demand order for alleged ITC mismatch. Taxvio analyzed the order, found multiple calculation errors, drafted strong appeal with case laws, and represented us at 2 hearings. Appellate Authority set aside the entire demand! Saved our business.",
                },
                {
                  name: "Gupta Traders Pvt. Ltd.",
                  location: "Noida",
                  text: "Our GST refund of ₹8 lakh was rejected without proper reasoning. Taxvio filed appeal highlighting procedural violations, submitted all supporting invoices, and argued effectively at hearing. Commissioner allowed the appeal and ordered refund sanctioning within 30 days. Excellent service!",
                },
                {
                  name: "Rajesh Manufacturing",
                  location: "Meerut",
                  text: "We missed the 3-month appeal deadline by 10 days due to medical emergency. Taxvio filed condonation of delay application with medical certificate, drafted detailed grounds, and convinced the Authority to condone delay. Appeal was admitted and eventually allowed with 50% demand reduction.",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">
                    "{r.text}"
                  </p>
                  <p className="font-bold text-[#00416a]">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Our Reach" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              GST Appeal Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GST appeal filing (APL-01 drafting, pre-deposit computation,
              hearing representation) for businesses across <strong>Noida</strong>,{" "}
              <strong>Delhi NCR</strong>, <strong>Meerut</strong>,{" "}
              <strong>Ghaziabad</strong>, <strong>Mumbai</strong>, and pan-India
              online.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Noida",
                "Delhi NCR",
                "Meerut",
                "Mumbai",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default"
                >
                  📍 {city}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* RELATED SERVICES */}
          <section id="related-services">
            <SectionLabel text="Explore More" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Related GST Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "GST Notice Response",
                  icon: "📨",
                  link: "/serviceslist/gst/gst-notice-response",
                  desc: "Expert response to GST SCN and notices.",
                },
                {
                  title: "GST Audit",
                  icon: "🔍",
                  link: "/serviceslist/gst/gst-audit",
                  desc: "Comprehensive GST compliance audit.",
                },
                {
                  title: "GST Litigation Support",
                  icon: "⚖️",
                  link: "/serviceslist/gst/gst-litigation",
                  desc: "High Court/Tribunal litigation support.",
                },
                {
                  title: "GST Refund",
                  icon: "💰",
                  link: "/serviceslist/gst/gst-refund",
                  desc: "GST refund claim filing and follow-up.",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                  <span className="text-sm text-[#00416a] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Challenge Unjust Orders Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File GST Appeal & Fight for Your Rights
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't let adverse GST orders become final — file appeal within
                    3 months and seek legal relief. Taxvio provides complete GST
                    appeal services — order analysis, APL-01 drafting, pre-deposit
                    computation, hearing representation, and expert legal arguments.
                    Starting ₹9,999. Protect your business from unjust demands and
                    penalties.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File Appeal — ₹9,999
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20Appeal%20Filing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footar />
      </main>
    </>
  );
}

/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I file appeal if I have not paid the full demand amount?",
      a: "YES, you can file appeal without paying the full demand. You only need to pay the MANDATORY 10% pre-deposit (for tax disputes) as per Section 107(6). The remaining 90% demand is STAYED (suspended) during appeal pendency — you don't have to pay it until the appeal is decided. If the Appellate Authority allows your appeal, the remaining demand is set aside (you don't pay at all). If appeal is dismissed, you must pay the remaining demand + interest for the delay period.",
    },
    {
      q: "What is the success rate of GST appeals?",
      a: "Success rate varies based on case merits, quality of grounds, and supporting evidence. Industry estimates suggest: 60-70% success rate for appeals with strong factual/documentary evidence (e.g., ITC supported by invoices, returns), 40-50% success rate for legal interpretation disputes (debatable provisions), 80-90% success rate for procedural violation cases (SCN not served, no opportunity to be heard). Taxvio's appeal success rate is approximately 75% across all cases due to detailed legal research, strong drafting, and experienced hearing representation.",
    },
    {
      q: "Can I withdraw my appeal after filing?",
      a: "Yes, you can withdraw your appeal at ANY stage before the Appellate Authority passes the final order. Process: File a withdrawal application (simple letter format) stating reasons for withdrawal. The Authority will pass an order allowing withdrawal. After withdrawal, the impugned order (original demand/penalty order) becomes final and binding — you must pay the full demand. Withdrawal is usually done when: You have settled the dispute with department, Decided to pay demand and avoid litigation costs, Realized that appeal has weak grounds and likely to be dismissed.",
    },
    {
      q: "What happens if the Appellate Authority dismisses my appeal?",
      a: "If the First Appellate Authority dismisses your appeal (upholds the impugned order), you have TWO options: (1) Pay the remaining demand (90% balance + interest) and close the matter, OR (2) File SECOND APPEAL to GST Appellate Tribunal (GSTAT) under Section 112 within 3 months of the order. Second appeal also requires pre-deposit (usually 20% of disputed tax for Tribunal). If Tribunal also dismisses, you can file writ petition in High Court (complex and expensive). Taxvio provides second appeal filing and Tribunal representation services.",
    },
    {
      q: "Can the Appellate Authority increase the demand beyond what was in the original order?",
      a: "NO. As per settled legal principle, the Appellate Authority CANNOT enhance (increase) the demand beyond what was ordered by the original officer. The Authority can: (a) Allow appeal and reduce/set aside demand (full/partial relief), (b) Dismiss appeal and confirm original demand (no relief), (c) Remand matter back to original officer for fresh adjudication. But the Authority CANNOT increase tax/penalty beyond the impugned order amount. This is called the 'principle against enhancement' — protects appellants from being worse off by filing appeal.",
    },
    {
      q: "How long does it take for the Appellate Authority to pass the order?",
      a: "As per Section 107(11) of CGST Act, the Appellate Authority is required to pass the order within ONE YEAR from the date of filing of the appeal. In practice: Simple cases (clear facts, single issue): 6-8 months. Complex cases (multiple legal issues, high volume of documents): 10-12 months. Cases with multiple hearings/adjournments: 12-18 months. Unfortunately, there is NO penalty on the Authority for delay beyond 1 year, so some cases may take longer. Taxvio tracks your case progress and follows up regularly with the Authority's office.",
    },
    {
      q: "Can Taxvio represent me at the personal hearing before the Appellate Authority?",
      a: "Yes. As part of our Personal Hearing Representation service (₹7,999/hearing), our experienced CA/Advocate will appear before the Appellate Authority (Commissioner Appeals) on your behalf. We prepare: Written synopsis (summary of case and grounds), Compilation of key documents for ready reference, Legal arguments and citation of case laws, Responses to Authority's queries. You need to provide us with a simple Authorization Letter or Form GST APL-01 should mention our CA/Advocate as your authorized representative. We handle both physical hearings (at GST Commissionerate office) and virtual hearings (via video conferencing).",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GST Appeal Filing
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group border rounded-2xl overflow-hidden"
            open={open === i}
            onToggle={(e) =>
              setOpen((e.target as HTMLDetailsElement).open ? i : null)
            }
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{f.q}</span>
              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─── SHARED ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}