// app/serviceslist/gst/gst-revocation/GSTRevocationClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Registration Revocation - REG-21 Application & Cancellation Restoration",
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
    "Professional GST registration revocation services. Expert assistance in filing Form GST REG-21 to restore cancelled GST registration (suo-moto cancellation by department). Cancellation order review, revocation application drafting, pending return clearance, department liaison, adjudication support. Ideal for businesses with suspended/cancelled GSTIN seeking to resume operations. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "GST Registration Revocation & Restoration",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
      maxPrice: "19999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GST registration revocation and when is it needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST registration revocation is the process of restoring a cancelled GST registration through Form GST REG-21. It is needed when your GSTIN has been cancelled suo-moto (by the department) due to non-filing of returns, non-payment of tax, or other compliance defaults. Revocation can be applied for within 30 days of the cancellation order if it was suo-moto, or within 90 days if you cancelled it yourself but want it restored.",
      },
    },
    {
      "@type": "Question",
      name: "What is the time limit to apply for GST revocation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For suo-moto cancellation (cancelled by the department), you have 30 days from the date of service of the cancellation order to file REG-21 for revocation. For voluntary cancellation (you applied for cancellation), you can apply for revocation within 90 days of the cancellation order. After these deadlines, you must apply for fresh GST registration — revocation is not possible.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my revocation application is rejected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the GST officer (proper officer) rejects your revocation application via Form GST REG-05 (notice) or REG-19 (rejection order), you can: (1) File an appeal before the Appellate Authority within 3 months of the rejection order, or (2) Apply for fresh GST registration (if revocation deadline has passed). Taxvio provides complete appeal support and fresh registration assistance.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTRevocationClient() {
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
      <InquiryForm /> 
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⏰ GST Cancelled? Apply for Revocation Within 30 Days — Restore Your GSTIN & Resume Business
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
              <span className="text-white">GST Revocation</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🔄 GSTIN Restoration Support
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Registration
                  <br />
                  <span className="text-[#7ecbf0]">Revocation</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Your <strong className="text-white">GST registration</strong>{" "}
                  cancelled by the department for{" "}
                  <strong className="text-white">non-filing of returns</strong> or{" "}
                  <strong className="text-white">non-payment of tax</strong>? You
                  have only{" "}
                  <strong className="text-white">30 days from the cancellation order</strong>{" "}
                  to file <strong className="text-white">Form REG-21</strong> for
                  revocation and restore your GSTIN. Missing this deadline means
                  you'll need fresh registration — losing all past compliance
                  history and ITC. <strong className="text-white">Taxvio</strong>{" "}
                  provides complete revocation support — cancellation order review,
                  REG-21 drafting, pending return clearance, and department
                  follow-up.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File Revocation — ₹4,999 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20Registration%20Revocation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 30-Day Deadline Compliance",
                    "✅ REG-21 Expert Drafting",
                    "✅ Pending Returns Clearance",
                    "✅ Department Liaison",
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
                    ["⏰", "30-day deadline for suo-moto cancellation"],
                    ["📋", "Form REG-21 application required"],
                    ["🔍", "Proper officer reviews within 30 days"],
                    ["✅", "Clear pending returns before revocation"],
                    ["🚫", "Post-deadline = Fresh registration only"],
                    ["🚀", "Revocation fee: ₹4,999 onwards"],
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
              { number: "200+", label: "Revocations Processed", icon: "✅" },
              { number: "30 Days", label: "Suo-Moto Deadline", icon: "⏰" },
              { number: "90%", label: "Success Rate", icon: "📊" },
              { number: "₹4,999", label: "Starting Fee", icon: "💰" },
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
              "✔ Deadline Tracking",
              "✔ REG-21 Experts",
              "✔ Department Liaison",
              "✔ Return Clearance Support",
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
          {/* WHAT IS REVOCATION */}
          <section id="what-is-revocation">
            <SectionLabel text="Understanding Revocation" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is GST Registration Revocation?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>GST Registration Revocation</strong> is the process of
                  restoring a cancelled GST registration (GSTIN) by filing{" "}
                  <strong>Form GST REG-21</strong> (Application for Revocation of
                  Cancellation of Registration) with the GST department.
                </p>
                <p>
                  When your GST registration is{" "}
                  <strong>cancelled by the department</strong> (suo-moto
                  cancellation) due to non-compliance — such as non-filing of
                  returns for 6 months, non-payment of tax, or violation of GST
                  rules — your GSTIN becomes inactive. This means:
                </p>
                <ul className="space-y-2 ml-6">
                  {[
                    "You cannot issue GST invoices or collect tax from customers",
                    "Your suppliers cannot claim ITC on supplies made to you",
                    "You cannot file GST returns or claim Input Tax Credit",
                    "Your business operations face legal and commercial disruption",
                    "You lose access to the GST portal and all compliance tools",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-red-600 font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🔄 Revocation vs. Fresh Registration
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="font-bold text-blue-700 mb-2">
                        ✅ Revocation (REG-21)
                      </p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Restores same old GSTIN</li>
                        <li>• Retains past compliance history</li>
                        <li>• ITC carried forward</li>
                        <li>• Faster (if approved)</li>
                        <li>• 30/90-day deadline</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-orange-700 mb-2">
                        🆕 Fresh Registration
                      </p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• New GSTIN issued</li>
                        <li>• Past history lost</li>
                        <li>• Old ITC forfeited</li>
                        <li>• Longer process (7-15 days)</li>
                        <li>• No deadline restriction</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  Types of Cancellation & Revocation Deadlines
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    ⏰ Suo-Moto Cancellation (By Department)
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Department cancels your GSTIN due to non-filing of returns,
                    non-payment, or other violations. Cancellation order issued via{" "}
                    <strong>Form GST REG-19</strong> or <strong>REG-08</strong>.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-orange-200">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      Revocation Deadline
                    </p>
                    <p className="text-xs text-gray-600">
                      <strong>30 days</strong> from the date of service of the
                      cancellation order (as per Section 29(2) of CGST Act).
                      After 30 days, revocation is NOT allowed — you must apply
                      for fresh registration.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    ✅ Voluntary Cancellation (By You)
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    You applied for GST cancellation yourself via{" "}
                    <strong>Form GST REG-16</strong> (e.g., business closure,
                    turnover below threshold). Department approved and issued
                    cancellation order.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-green-200">
                    <p className="font-bold text-green-700 text-sm mb-2">
                      Revocation Deadline
                    </p>
                    <p className="text-xs text-gray-600">
                      <strong>90 days</strong> from the date of the cancellation
                      order (as per Section 29(2) proviso). Used when you want to
                      resume business or made a mistake in applying for
                      cancellation.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    🚫 What Happens After Deadline Expires
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Revocation application (REG-21) will be automatically REJECTED by the system",
                      "You MUST apply for fresh GST registration (REG-01)",
                      "New GSTIN will be issued — old GSTIN permanently cancelled",
                      "All past compliance data, ITC balance, and history LOST",
                      "Cannot claim old ITC or link old invoices to new GSTIN",
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
                  specializes in GST revocation applications — deadline tracking,
                  REG-21 drafting, pending return clearance, and complete
                  department liaison across Uttar Pradesh, Noida, Delhi NCR, and
                  pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* REASONS FOR CANCELLATION */}
          <section id="cancellation-reasons">
            <SectionLabel text="Why GST Gets Cancelled" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Reasons for Suo-Moto Cancellation by Department
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Understanding WHY your GSTIN was cancelled helps in preparing a
              strong revocation application and addressing the root cause.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  reason: "Non-Filing of GST Returns (6+ Months)",
                  icon: "📅",
                  desc: "If you fail to file GSTR-1 and GSTR-3B for 6 consecutive months or more, the department issues a show-cause notice (SCN) via Form GST REG-17. If you don't respond, GSTIN is cancelled suo-moto.",
                  example:
                    "Last return filed: March 2023. No returns from April to September 2023 → SCN in October 2023 → No response → Cancellation in November 2023.",
                },
                {
                  reason: "Non-Payment of Tax / Outstanding Dues",
                  icon: "💰",
                  desc: "If you have filed returns but not paid the tax liability shown in GSTR-3B for multiple months, and department's recovery efforts fail, GSTIN may be cancelled.",
                  example:
                    "Tax liability ₹5 lakh pending for 8 months → Recovery notice ignored → GSTIN cancelled.",
                },
                {
                  reason: "Violation of GST Provisions",
                  icon: "⚖️",
                  desc: "Issuing fake invoices, claiming bogus ITC, suppressing turnover, or other fraudulent activities detected during audit/investigation lead to immediate cancellation.",
                  example:
                    "GST audit reveals fake ITC claims of ₹15 lakh → GSTIN suspended immediately → Cancellation after investigation.",
                },
                {
                  reason: "Voluntary Application for Cancellation",
                  icon: "✅",
                  desc: "You applied for GST cancellation yourself (business closure, turnover below ₹40 lakh, composition scheme migration) via REG-16. Department approved and issued cancellation order.",
                  example:
                    "Business closed in March 2023 → Applied REG-16 in April 2023 → Cancellation approved in May 2023.",
                },
                {
                  reason: "Incorrect/Fake Information in Registration",
                  icon: "📝",
                  desc: "If the department finds that GST registration was obtained using fake documents, wrong address, or fraudulent information, GSTIN is cancelled retrospectively.",
                  example:
                    "Verification reveals business address is fake/non-existent → GSTIN cancelled with retrospective effect.",
                },
                {
                  reason: "Contravention of Composition Scheme Rules",
                  icon: "🚫",
                  desc: "Composition taxpayers making inter-state supply, e-commerce sales, or supplying exempt goods are disqualified from composition. If violations continue, GSTIN cancelled.",
                  example:
                    "Composition dealer sold on Amazon (not allowed) → SCN → GSTIN cancelled.",
                },
              ].map((item) => (
                <div
                  key={item.reason}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-800 mb-2">
                        {item.reason}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-purple-200">
                    <p className="font-bold text-purple-800 text-xs mb-2">
                      💡 Example
                    </p>
                    <p className="text-xs text-gray-600">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* REVOCATION PROCESS */}
          <section id="revocation-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Apply for GST Registration Revocation (REG-21)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Time is critical — you have only 30 days (suo-moto) or 90 days
                (voluntary). Here's the complete process:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Download Cancellation Order & Verify Deadline",
                    description:
                      "Log in to GST portal → Services → Registration → View Additional Notices/Orders. Download Form GST REG-19 or REG-08 (cancellation order). Check the 'Date of Service of Order' — this is the START date for calculating 30/90-day deadline. Taxvio verifies the exact deadline and remaining time.",
                    duration: "1 day",
                  },
                  {
                    step: 2,
                    title: "Root Cause Analysis & Rectification Plan",
                    description:
                      "We analyze WHY the GSTIN was cancelled: Non-filing → We prepare a plan to file all pending returns before revocation. Non-payment → We compute outstanding tax liability and arrange payment. Violation → We prepare justification and corrective action documentation. Voluntary cancellation → We draft a business resumption plan.",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Clearance of Pending Returns (Mandatory)",
                    description:
                      "Before filing REG-21, you MUST file all pending GSTR-1 and GSTR-3B returns and pay all outstanding tax, interest, and penalty. The department will NOT approve revocation if returns are still pending. We file all backlog returns, compute tax liability, and facilitate payment via DRC-03 challan.",
                    duration: "3-7 days (depending on backlog)",
                  },
                  {
                    step: 4,
                    title: "Preparation of Form GST REG-21 (Revocation Application)",
                    description:
                      "We draft a detailed revocation application in Form GST REG-21 containing: GSTIN and business details, Cancellation order reference number, Reason for revocation (why cancellation should be revoked), Supporting documents (proof of return filing, tax payment, business continuity), Undertaking to comply with GST provisions going forward. We attach: Proof of payment of all dues (challan copies), Pending return acknowledgments, Business premises proof (if address disputed), Affidavit/undertaking on letterhead.",
                    duration: "1-2 days",
                  },
                  {
                    step: 5,
                    title: "Filing of REG-21 on GST Portal",
                    description:
                      "We log in to GST portal → Services → Registration → Application for Revocation of Cancelled Registration. Upload REG-21 application with all attachments (PDF format, max 5MB per file). Submit and obtain Application Reference Number (ARN). Download acknowledgment for record.",
                    duration: "1 day",
                  },
                  {
                    step: 6,
                    title: "Proper Officer Review & Show-Cause Notice (if any)",
                    description:
                      "The proper officer (GST officer handling your jurisdiction) reviews the REG-21 application within 30 days. Officer may issue Form GST REG-05 (notice seeking clarification/additional documents). We respond to REG-05 within 7 days with detailed reply and supporting evidence.",
                    duration: "30 days (by department)",
                  },
                  {
                    step: 7,
                    title: "Personal Hearing (if Required)",
                    description:
                      "If the officer is not satisfied with written submissions, they may call for a personal hearing. Taxvio's GST experts represent you at the hearing (virtual or physical), present your case, submit additional documents, and argue for revocation approval.",
                    duration: "As scheduled by officer",
                  },
                  {
                    step: 8,
                    title: "Revocation Order (REG-22) / Rejection Order (REG-19)",
                    description:
                      "If satisfied, the officer issues Form GST REG-22 (Order of Revocation of Cancellation of Registration) — your GSTIN is RESTORED with immediate effect. If rejected, Form GST REG-19 (Order of Rejection of Application for Revocation) is issued with reasons. We track the order on portal and download for your records.",
                    duration: "Within 30 days of REG-21 filing",
                  },
                  {
                    step: 9,
                    title: "Post-Revocation Compliance & ITC Restoration",
                    description:
                      "Once GSTIN is restored, your GST portal access is reactivated. We help you: Update business profile (if needed), Resume filing monthly returns (GSTR-1, GSTR-3B), Reclaim suspended ITC (if any), Issue tax invoices and collect GST from customers, Notify suppliers and customers of GSTIN restoration.",
                    duration: "Immediate",
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
                  <strong>
                    5-7 days from deadline verification to REG-21 filing
                  </strong>{" "}
                  (if all pending returns cleared). Department's decision within{" "}
                  <strong>30 days of REG-21 filing</strong>. Total process: 35-40
                  days if approved.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for GST Revocation Application
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "GSTIN (cancelled registration number)",
                    "Cancellation order copy (Form GST REG-19/REG-08)",
                    "PAN card of proprietor/partners/directors",
                    "Aadhaar card of authorized signatory",
                    "Address proof of business premises (electricity bill, rent agreement, NOC)",
                    "All pending return acknowledgments (GSTR-1, GSTR-3B filed)",
                    "Proof of tax payment (DRC-03 challan for outstanding dues)",
                    "GST portal login credentials",
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
                    "Affidavit/undertaking on business letterhead stating reasons for revocation",
                    "Business continuity proof (purchase/sales invoices, bank statements)",
                    "Rectification evidence (if cancellation was due to address/document issues)",
                    "Proprietor/director identification proof (if changed since registration)",
                    "Board resolution (for companies/LLPs) authorizing revocation application",
                    "Reply to show-cause notice (Form GST REG-17) if previously issued",
                    "Previous correspondence with GST department (emails, notices)",
                    "CA certificate (if financial irregularities were cited for cancellation)",
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

          {/* REJECTION SCENARIOS */}
          <section id="rejection">
            <SectionLabel text="If Revocation Is Rejected" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              What to Do If REG-21 Application Is Rejected
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                If the proper officer rejects your revocation application via Form
                GST REG-19 (Order of Rejection), you have TWO options:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-red-200">
                  <h3 className="font-bold text-red-700 mb-3 text-lg">
                    Option 1: File Appeal
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    You can appeal against the rejection order before the{" "}
                    <strong>Appellate Authority</strong> (First Appellate
                    Authority under GST) within{" "}
                    <strong>3 months from the date of communication</strong> of
                    the rejection order.
                  </p>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-4">
                    <p className="font-bold text-red-600 text-xs mb-2">
                      📋 Appeal Process
                    </p>
                    <ol className="space-y-2 text-xs text-gray-700 list-decimal list-inside">
                      <li>
                        File Form GST APL-01 (appeal memorandum) on GST portal
                      </li>
                      <li>
                        Pay 10% of disputed tax amount (if tax demand is involved)
                      </li>
                      <li>
                        Submit detailed grounds of appeal and supporting documents
                      </li>
                      <li>
                        Appellate Authority hears the case and passes order within
                        1 year
                      </li>
                      <li>
                        If appeal is allowed, GSTIN is restored as per order
                      </li>
                    </ol>
                  </div>
                  <p className="text-xs text-gray-600">
                    <strong>Taxvio Assistance:</strong> We draft appeal
                    memorandum, compile evidence, represent you at hearing, and
                    handle complete appellate proceedings.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-red-200">
                  <h3 className="font-bold text-orange-700 mb-3 text-lg">
                    Option 2: Apply for Fresh Registration
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    If the revocation deadline has passed OR if the rejection is
                    due to serious violations (fake invoices, fraud), your only
                    option is to apply for <strong>fresh GST registration</strong>{" "}
                    via Form GST REG-01.
                  </p>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 mb-4">
                    <p className="font-bold text-orange-600 text-xs mb-2">
                      ⚠️ Implications
                    </p>
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">→</span>
                        New GSTIN will be issued (old GSTIN lost forever)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">→</span>
                        All past compliance history and ITC balance FORFEITED
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">→</span>
                        Cannot link old invoices or claim old ITC
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">→</span>
                        Fresh registration process takes 7-15 days
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">→</span>
                        Must notify all suppliers/customers of new GSTIN
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-600">
                    <strong>Taxvio Assistance:</strong> We handle complete fresh
                    registration — REG-01 filing, document compilation, ARN
                    tracking, and GSTIN issuance — minimizing business disruption.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-white border-2 border-red-300 rounded-2xl p-6">
                <p className="font-bold text-red-800 mb-2">
                  💡 Taxvio's Recommendation
                </p>
                <p className="text-sm text-gray-700">
                  If rejection is due to <strong>procedural lapses</strong> (e.g.,
                  insufficient documents, minor non-compliance), file appeal
                  immediately. If rejection is due to{" "}
                  <strong>fraud or serious violation</strong>, fresh registration
                  is often the faster and safer route. We provide strategic
                  advisory based on the specific rejection reasons.
                </p>
              </div>
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's GST Revocation Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From deadline verification to complete department liaison — we handle
              every step of the revocation process.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "⏰",
                  title: "Deadline Verification & Eligibility Check",
                  desc: "We download your cancellation order, verify exact deadline (30/90 days), check if revocation is still possible, and assess eligibility based on cancellation reasons.",
                  price: "₹999",
                },
                {
                  icon: "📋",
                  title: "Complete REG-21 Application Filing",
                  desc: "Preparation of Form GST REG-21 with detailed justification, compilation of supporting documents, online filing on GST portal, ARN tracking, and acknowledgment download.",
                  price: "₹4,999",
                },
                {
                  icon: "📊",
                  title: "Pending Return Clearance (Backlog Filing)",
                  desc: "Filing of all pending GSTR-1 and GSTR-3B returns (mandatory before revocation). Includes data compilation, tax computation, late fee calculation, and online submission.",
                  price: "₹1,499/return",
                },
                {
                  icon: "💰",
                  title: "Outstanding Tax Payment & DRC-03 Challan",
                  desc: "Computation of total outstanding tax liability (tax + interest + penalty), payment facilitation via DRC-03 challan, and payment proof documentation for REG-21.",
                  price: "₹1,999",
                },
                {
                  icon: "📨",
                  title: "Response to REG-05 Notice (Show-Cause Notice)",
                  desc: "If officer issues Form GST REG-05 seeking clarification or additional documents, we draft detailed reply, submit supporting evidence, and argue for revocation approval.",
                  price: "₹2,999",
                },
                {
                  icon: "👔",
                  title: "Personal Hearing Representation",
                  desc: "If officer calls for personal hearing, our GST experts represent you (virtual or in-person), present your case, submit documents, and argue for GSTIN restoration.",
                  price: "₹4,999",
                },
                {
                  icon: "📨",
                  title: "Appeal Filing (If Revocation Rejected)",
                  desc: "Drafting and filing Form GST APL-01 (appeal) before Appellate Authority. Includes grounds of appeal, evidence compilation, hearing representation, and order tracking.",
                  price: "₹9,999",
                },
                {
                  icon: "🆕",
                  title: "Fresh GST Registration (Post-Deadline)",
                  desc: "If revocation deadline has passed or application rejected, we file fresh REG-01 application. Includes complete documentation, ARN tracking, and new GSTIN issuance support.",
                  price: "₹2,999",
                },
                {
                  icon: "🔄",
                  title: "Post-Revocation Compliance Setup",
                  desc: "After GSTIN restoration, we reactivate portal access, update business profile, file first post-restoration returns, and notify suppliers/customers of GSTIN restoration.",
                  price: "₹1,999",
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
                📦 Complete Revocation Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic Revocation",
                    price: "₹9,999",
                    includes: [
                      "Deadline verification",
                      "REG-21 filing",
                      "Up to 3 pending returns",
                      "Tax payment support",
                      "Email support",
                    ],
                  },
                  {
                    package: "Standard (with Follow-Up)",
                    price: "₹14,999",
                    includes: [
                      "Everything in Basic",
                      "REG-05 notice response",
                      "Up to 6 pending returns",
                      "Department liaison",
                      "Priority support",
                    ],
                  },
                  {
                    package: "Premium (Complete)",
                    price: "₹19,999",
                    includes: [
                      "Everything in Standard",
                      "Personal hearing representation",
                      "Unlimited pending returns",
                      "Appeal filing (if rejected)",
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
              Real Stories from Our Revocation Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Vikram Enterprises",
                  location: "Muzaffarnagar",
                  text: "Our GSTIN was cancelled for non-filing of 8 months' returns. Taxvio verified we had only 12 days left for revocation. They filed all pending returns in 5 days, prepared REG-21, and got our GSTIN restored in 28 days. Saved our business!",
                },
                {
                  name: "Anita Traders Pvt. Ltd.",
                  location: "Meerut",
                  text: "Received cancellation order but didn't know about 30-day deadline. Taxvio immediately filed REG-21 on Day 25 with all compliance clearances. Officer approved revocation in 20 days. Their deadline tracking and urgency handling was exceptional.",
                },
                {
                  name: "Rajesh Industries",
                  location: "Noida",
                  text: "Our revocation was initially rejected due to insufficient documents. Taxvio filed appeal (APL-01) with complete evidence and CA certificate. Appellate Authority allowed our appeal and GSTIN was restored after 6 months. Worth every penny!",
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
              GST Revocation Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GST registration revocation (REG-21 filing) for businesses
              across <strong>Noida</strong>, <strong>Delhi NCR</strong>,{" "}
              <strong>Meerut</strong>, <strong>Ghaziabad</strong>,{" "}
              <strong>Mumbai</strong>, and pan-India online.
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
                  title: "GST Registration",
                  icon: "📝",
                  link: "/serviceslist/gst/gst-registration",
                  desc: "Fresh GST registration for new businesses.",
                },
                {
                  title: "GST Cancellation",
                  icon: "❌",
                  link: "/serviceslist/gst/gst-cancellation",
                  desc: "Voluntary GST cancellation (REG-16).",
                },
                {
                  title: "GST Return Filing",
                  icon: "📊",
                  link: "/serviceslist/gst/gst-return-filing",
                  desc: "Monthly GSTR-1, GSTR-3B filing.",
                },
                {
                  title: "GST Notice Response",
                  icon: "📨",
                  link: "/serviceslist/gst/gst-notice-response",
                  desc: "Expert response to GST notices.",
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
                    Restore Your GSTIN Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File GST Revocation Application Now
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't lose your GSTIN permanently — apply for revocation within
                    30 days of cancellation. Taxvio provides complete REG-21
                    filing, pending return clearance, department liaison, and
                    hearing representation. Starting ₹4,999. Restore your business
                    operations immediately.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Start Now — ₹4,999
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20Registration%20Revocation"
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
      q: "Can I file REG-21 after the 30-day deadline?",
      a: "No. The 30-day deadline (for suo-moto cancellation) is ABSOLUTE — it's a legal time limit under Section 29(2) of the CGST Act. After 30 days, the GST portal will NOT accept REG-21 application, and the system will automatically reject it. Your only option then is to apply for fresh GST registration (REG-01), which results in a new GSTIN and loss of all past compliance data and ITC.",
    },
    {
      q: "Is it mandatory to clear all pending returns before filing REG-21?",
      a: "Yes, it is HIGHLY ADVISABLE and practically mandatory. While Rule 23 of CGST Rules does not explicitly state this as a legal requirement, in practice, the proper officer will NOT approve revocation if pending returns are not filed. The officer will issue Form GST REG-05 (notice) asking you to file pending returns and pay outstanding tax. If you don't comply, revocation will be rejected. Taxvio files all pending returns BEFORE submitting REG-21 to avoid rejection.",
    },
    {
      q: "Can I get my old GSTIN restored if I voluntarily cancelled it 6 months ago?",
      a: "No. The 90-day deadline for revocation of voluntary cancellation cannot be extended. If 6 months have passed since the cancellation order, revocation is not possible. You must apply for fresh GST registration. However, if your business circumstances justify it, you can file an appeal before the Appellate Authority explaining extraordinary circumstances (e.g., medical emergency, force majeure) and request restoration on equitable grounds — but success is not guaranteed.",
    },
    {
      q: "What is the fee for filing REG-21?",
      a: "There is NO government fee for filing Form GST REG-21 — it is a free service provided by the GST department. You only pay professional fees to consultants like Taxvio (starting ₹4,999) for preparing the application, compiling documents, filing pending returns, and handling department correspondence. However, you must pay any outstanding tax, interest, and late fees before revocation approval.",
    },
    {
      q: "How long does it take for the department to approve revocation?",
      a: "As per Rule 23(3) of CGST Rules, the proper officer must dispose of the revocation application within 30 days of receipt of the application. In practice, if all pending compliances are cleared and documents are in order, approval is usually granted within 15-25 days. If the officer issues REG-05 (notice), it may take 30-45 days. If a personal hearing is called, it can extend to 45-60 days.",
    },
    {
      q: "Can Taxvio represent me at the personal hearing before the GST officer?",
      a: "Yes. As part of our Personal Hearing Representation service (₹4,999), our GST experts will attend the hearing on your behalf (with proper authorization via Form GST REG-11 or power of attorney). We present your case, submit documents, answer officer's questions, and argue for revocation approval. We handle both virtual hearings (via video conferencing) and in-person hearings at the GST office.",
    },
    {
      q: "If my revocation is approved, will I get back my old ITC balance?",
      a: "Yes. If your GSTIN is restored via revocation (Form GST REG-22), your electronic credit ledger (ITC balance) is REINSTATED as it was on the date of cancellation — subject to verification by the officer. However, if you apply for fresh registration (new GSTIN), the old ITC is PERMANENTLY LOST and cannot be transferred to the new GSTIN. This is a major reason to apply for revocation within the deadline.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GST Revocation
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