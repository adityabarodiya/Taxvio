// app/serviceslist/gst/gst-itc-reconciliation/GSTITCReconciliationClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Input Tax Credit (ITC) Reconciliation - GSTR-2B Matching & Compliance",
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
    "Professional GST Input Tax Credit (ITC) reconciliation services. Systematic matching of GSTR-2B with purchase register, vendor-wise mismatch identification, ITC eligibility review, reversal advisory, reclaim support. Monthly reconciliation reports, automated matching, notice prevention. Ideal for manufacturers, traders, businesses with high purchase volumes. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "GST ITC Reconciliation & Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
      maxPrice: "14999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GSTR-2B and why is ITC reconciliation important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSTR-2B is an auto-populated statement of Input Tax Credit (ITC) available to a taxpayer, generated from the GSTR-1 and GSTR-5 filed by suppliers. It shows the ITC that is eligible to be claimed in a tax period. ITC reconciliation is critical because you can only claim ITC that appears in GSTR-2B — any mismatch between your purchase books and GSTR-2B results in ITC denial, GST notices, interest, and penalty.",
      },
    },
    {
      "@type": "Question",
      name: "What are common reasons for ITC mismatch between books and GSTR-2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common reasons include: suppliers not filing GSTR-1 on time, errors in supplier's GSTR-1 (wrong GSTIN, invoice number, or amount), purchases from unregistered dealers, ineligible ITC claimed (blocked credits under Section 17(5)), import purchases not reflected in GSTR-2B, reverse charge purchases booked incorrectly, and duplicate or cancelled invoices not adjusted.",
      },
    },
    {
      "@type": "Question",
      name: "Can I claim ITC if it's not appearing in GSTR-2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. As per Rule 36(4) from 1 January 2022, you can claim ITC ONLY to the extent it is reflected in GSTR-2B. If ITC is missing from GSTR-2B due to supplier non-filing, you must contact the supplier to file GSTR-1 and wait for the next month's GSTR-2B. Claiming ITC not appearing in GSTR-2B will trigger automated notice under Section 61 and demand under Section 73/74.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTITCReconciliationClient() {
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
          ⚠️ ITC Mismatch = GST Notice — Reconcile GSTR-2B Monthly & Claim Maximum Eligible Credit
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
              <span className="text-white">GST ITC Reconciliation</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🔍 ITC Matching & Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Input Tax
                  <br />
                  <span className="text-[#7ecbf0]">Credit (ITC)</span>
                  <br />
                  Reconciliation
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Claiming <strong className="text-white">Input Tax Credit</strong>{" "}
                  that doesn't match{" "}
                  <strong className="text-white">GSTR-2B</strong>? You'll face{" "}
                  <strong className="text-white">automated GST notices</strong>,
                  demand for reversal, interest @ 18%, and penalty. From Jan 2022,
                  you can claim ITC{" "}
                  <strong className="text-white">ONLY</strong> if it appears in
                  GSTR-2B. <strong className="text-white">Taxvio</strong> provides
                  systematic monthly reconciliation — GSTR-2B vs. purchase register
                  matching, vendor-wise mismatch identification, eligibility review,
                  reversal advisory, and reclaim support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Start Reconciliation — ₹2,999 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20ITC%20Reconciliation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ GSTR-2B Matching",
                    "✅ Vendor Mismatch Reports",
                    "✅ ITC Eligibility Review",
                    "✅ Monthly Automation",
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
                    ["📊", "GSTR-2B is auto-generated from suppliers' GSTR-1"],
                    ["🔒", "ITC claim limited to GSTR-2B (Rule 36(4))"],
                    ["📅", "Monthly reconciliation mandatory"],
                    ["⚠️", "Mismatch = Notice + Demand + Interest"],
                    ["🔄", "Reversal in Table 4(B)(2) of GSTR-3B"],
                    ["🚀", "Reconciliation fee: ₹2,999/month onwards"],
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
              { number: "500+", label: "Businesses Served", icon: "✅" },
              { number: "₹50 Cr+", label: "ITC Reconciled", icon: "💰" },
              { number: "Monthly", label: "Automated Matching", icon: "🔄" },
              { number: "₹2,999", label: "Starting Fee", icon: "📊" },
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
              "✔ Automated Matching",
              "✔ Vendor-Wise Reports",
              "✔ Eligibility Audit",
              "✔ Notice Prevention",
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
          {/* WHAT IS ITC RECONCILIATION */}
          <section id="what-is-reconciliation">
            <SectionLabel text="Understanding ITC Reconciliation" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is GST Input Tax Credit (ITC) Reconciliation?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>ITC Reconciliation</strong> is the process of matching
                  the <strong>Input Tax Credit</strong> claimed in your books of
                  accounts (purchase register) with the ITC available in{" "}
                  <strong>GSTR-2B</strong> (auto-populated statement of eligible
                  ITC from suppliers' GSTR-1 and GSTR-5).
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    📋 What is GSTR-2B?
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Auto-populated monthly statement generated by GST system",
                      "Compiled from all GSTR-1 and GSTR-5 filed by your suppliers",
                      "Shows ITC available for you to claim in a tax period",
                      "Generated on 12th of next month (e.g., for July, GSTR-2B generated on 12 August)",
                      "Replaces the earlier GSTR-2A (which was dynamic)",
                      "GSTR-2B is STATIC — does not change after generation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    ⚠️ Rule 36(4) — The ITC Limit
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    From <strong>1 January 2022</strong>, as per amended Rule
                    36(4), a registered person can avail Input Tax Credit{" "}
                    <strong>ONLY to the extent</strong> of the ITC reflected in
                    GSTR-2B (or GSTR-2A for the same tax period).
                  </p>
                  <p className="text-sm font-bold text-orange-700">
                    Translation: If your supplier didn't file GSTR-1 or filed it
                    with errors, and your purchase invoice doesn't appear in
                    GSTR-2B, you CANNOT claim that ITC — even if you have a valid
                    tax invoice.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  Why ITC Reconciliation is Critical
                </p>
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    🚨 Consequences of ITC Mismatch
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Automated notice under Section 61 (mismatch between GSTR-3B and GSTR-2B)",
                      "Demand for reversal of excess ITC claimed (Table 4(B)(2) of GSTR-3B)",
                      "Interest @ 18% per annum on wrongly claimed ITC from the date of claim",
                      "Penalty under Section 122/125 (₹10,000 or 10% of tax amount)",
                      "If suppression with intent to evade tax, penalty up to 100% of tax",
                      "ITC denial = higher cash GST liability in next month",
                      "Audit and scrutiny risk increases significantly",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-bold text-[#00416a]">
                  The Reconciliation Workflow
                </p>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    ✅ Monthly Reconciliation Steps
                  </p>
                  <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                    <li>
                      Download GSTR-2B from GST portal (available on 12th of next
                      month)
                    </li>
                    <li>
                      Extract purchase data from your accounting software / books
                    </li>
                    <li>
                      Match invoice-wise: GSTIN, invoice number, date, taxable
                      value, IGST/CGST/SGST amounts
                    </li>
                    <li>
                      Identify mismatches: invoices in books but not in GSTR-2B
                      (and vice versa)
                    </li>
                    <li>
                      Classify mismatches by reason (supplier non-filing, errors,
                      ineligible ITC, etc.)
                    </li>
                    <li>Contact vendors for correction / follow-up on filing</li>
                    <li>
                      Reverse ineligible ITC in Table 4(B)(2) of GSTR-3B for the
                      month
                    </li>
                    <li>
                      Reclaim ITC in subsequent months when it appears in GSTR-2B
                    </li>
                    <li>Maintain reconciliation report for audit trail</li>
                  </ol>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  provides automated monthly ITC reconciliation, vendor mismatch
                  reports, and complete compliance support for businesses across
                  Uttar Pradesh, Noida, Delhi NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* COMMON MISMATCHES */}
          <section id="common-mismatches">
            <SectionLabel text="Mismatch Scenarios" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common ITC Mismatches Between Books & GSTR-2B
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Understanding WHY mismatches occur helps you prevent them and take
              corrective action faster.
            </p>

            <div className="space-y-6">
              {[
                {
                  mismatch: "Supplier Not Filed GSTR-1",
                  icon: "❌",
                  reason:
                    "Your supplier purchased goods/services from you but did not file their GSTR-1 on time (or at all). Since GSTR-2B is populated from supplier's GSTR-1, if supplier didn't file, your invoice won't appear in GSTR-2B.",
                  impact:
                    "You cannot claim ITC on that invoice in the current month. It will appear in next month's GSTR-2B IF supplier files late GSTR-1.",
                  solution:
                    "Contact supplier immediately, request GSTR-1 filing. Once filed, ITC will reflect in next month's GSTR-2B. Claim ITC in that month via Table 4(A) and simultaneously reverse in Table 4(B)(2) if already claimed.",
                },
                {
                  mismatch: "Error in Supplier's GSTR-1 (Wrong GSTIN / Invoice Details)",
                  icon: "📝",
                  reason:
                    "Supplier filed GSTR-1 but entered wrong details — your GSTIN incorrect (typo), invoice number mismatch, invoice date wrong, taxable value or tax amount incorrect.",
                  impact:
                    "Invoice appears in supplier's GSTR-1 but doesn't get mapped to your GSTIN in GSTR-2B. System fails to match and excludes ITC.",
                  solution:
                    "Provide supplier with correct invoice copy. Supplier must file GSTR-1 amendment (via FORM GSTR-1A or in next month's GSTR-1). ITC will appear in subsequent GSTR-2B.",
                },
                {
                  mismatch: "Purchase from Unregistered Dealer / Composition Dealer",
                  icon: "🚫",
                  reason:
                    "You purchased from a supplier who is unregistered under GST or is under composition scheme (composition dealers cannot issue tax invoices and cannot charge GST separately).",
                  impact:
                    "No ITC is available. The purchase will NOT appear in GSTR-2B. If you wrongly claimed ITC in books, you must reverse it.",
                  solution:
                    "Identify unregistered / composition suppliers in your vendor master. Do not claim ITC on such purchases. For unregistered suppliers, pay GST under Reverse Charge Mechanism (RCM) if applicable under Section 9(4).",
                },
                {
                  mismatch: "Blocked Credit Under Section 17(5)",
                  icon: "🔒",
                  reason:
                    "You purchased goods/services that are specifically BLOCKED from ITC eligibility under Section 17(5) — motor vehicles (except specific business use), food & beverages, outdoor catering, beauty treatment, health services, membership of clubs, travel benefits to employees, works contract for immovable property (other than plant & machinery), etc.",
                  impact:
                    "Even if invoice appears in GSTR-2B, ITC is NOT eligible. Claiming it will trigger notice during audit.",
                  solution:
                    "Identify blocked credits in purchase register. Do not claim ITC on such invoices. If already claimed, reverse via Table 4(B)(2).",
                },
                {
                  mismatch: "Import Purchases (Bill of Entry)",
                  icon: "🌍",
                  reason:
                    "You imported goods and paid IGST at the time of customs clearance (Bill of Entry). Import ITC appears in ICEGATE system but does NOT appear in GSTR-2B (GSTR-2B only shows supplier invoices from GSTR-1/GSTR-5).",
                  impact:
                    "ITC on imports is fully eligible, but the reconciliation tool will show it as a mismatch if you're only comparing with GSTR-2B.",
                  solution:
                    "Download ICEGATE data separately. Claim import ITC as per Bill of Entry details. Maintain separate reconciliation for import ITC vs. domestic supplier ITC.",
                },
                {
                  mismatch: "Reverse Charge Purchases (RCM)",
                  icon: "🔄",
                  reason:
                    "You purchased goods/services from unregistered suppliers or specified services under RCM (advocate, GTA, etc.). You paid GST under reverse charge. RCM purchases appear in GSTR-3B Table 4(A)(3) but NOT in GSTR-2B.",
                  impact:
                    "ITC on RCM is eligible but will not appear in GSTR-2B. Reconciliation mismatch if not handled separately.",
                  solution:
                    "Maintain separate register for RCM purchases. Claim ITC as per self-invoice / payment challan. Exclude from GSTR-2B reconciliation or tag separately.",
                },
                {
                  mismatch: "Credit/Debit Notes Not Adjusted",
                  icon: "📋",
                  reason:
                    "Supplier issued credit note (for sales return, discount) or debit note (for additional charges) and reported it in GSTR-1. However, you didn't adjust corresponding ITC in your books.",
                  impact:
                    "GSTR-2B shows net ITC after credit/debit note adjustment, but your books show original invoice ITC. Mismatch occurs.",
                  solution:
                    "Reconcile credit/debit notes separately. Adjust ITC in books as per credit notes (reduce ITC) and debit notes (increase ITC). Ensure booking in the same month as supplier's GSTR-1.",
                },
                {
                  mismatch: "Timing Difference (Invoice Booked in Different Month)",
                  icon: "📅",
                  reason:
                    "Supplier issued invoice on 28 Feb and filed GSTR-1 in Feb. But you received and booked the invoice on 2 March in your books. GSTR-2B for Feb shows the invoice, but your purchase register shows it in March.",
                  impact:
                    "Month-wise mismatch. ITC claimed in March but available in Feb GSTR-2B (or vice versa).",
                  solution:
                    "Adopt accrual-based accounting — book invoices in the same month as invoice date (not receipt date). Or, track timing differences separately and adjust in reconciliation.",
                },
              ].map((item) => (
                <details
                  key={item.mismatch}
                  className="group border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#00416a] transition"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      {item.mismatch}
                    </span>
                    <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 border-t">
                    <div className="grid md:grid-cols-3 gap-6 pt-5">
                      <div>
                        <p className="font-bold text-blue-700 mb-2 text-sm">
                          🔍 Reason
                        </p>
                        <p className="text-xs text-gray-600">{item.reason}</p>
                      </div>
                      <div>
                        <p className="font-bold text-orange-700 mb-2 text-sm">
                          ⚠️ Impact
                        </p>
                        <p className="text-xs text-gray-600">{item.impact}</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-700 mb-2 text-sm">
                          ✅ Solution
                        </p>
                        <p className="text-xs text-gray-600">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* RECONCILIATION PROCESS */}
          <section id="process">
            <SectionLabel text="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How Taxvio Performs ITC Reconciliation
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                We use a combination of automated tools and manual expert review to
                ensure 100% accurate ITC reconciliation every month.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Download GSTR-2B & Extract Purchase Data",
                    description:
                      "We download your GSTR-2B from the GST portal (available on 12th of next month) and export it to Excel/CSV. Simultaneously, we extract purchase data from your Tally/SAP/Zoho Books/QuickBooks or manual Excel registers. We ensure consistent date format, GSTIN format, and tax amount fields for accurate matching.",
                    duration: "1 day",
                  },
                  {
                    step: 2,
                    title: "Automated Invoice Matching (GSTIN + Invoice No + Amount)",
                    description:
                      "Using our proprietary Excel-based reconciliation tool (or GST software like ClearTax, Zoho GST, Masters India), we perform automated matching based on: Supplier GSTIN, Invoice number, Invoice date, Taxable value, IGST/CGST/SGST/Cess amounts. Matched invoices are tagged as 'Reconciled'. Unmatched invoices are flagged for manual review.",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Mismatch Classification & Root Cause Analysis",
                    description:
                      "We classify all unmatched invoices into categories: (a) Present in Books but NOT in GSTR-2B (supplier non-filing, errors, blocked credit), (b) Present in GSTR-2B but NOT in Books (purchase not recorded, duplicate entry in GSTR-2B), (c) Amount Mismatch (partial invoice, credit note adjustment, tax rate error). We identify the root cause for each mismatch.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "Vendor-Wise Mismatch Report Generation",
                    description:
                      "We generate vendor-wise reports showing: Total ITC in books vs. GSTR-2B, Invoice-wise mismatch details, Reason for mismatch, Action required (contact vendor / reverse ITC / wait for next month). This report is shared with you for vendor follow-up.",
                    duration: "1 day",
                  },
                  {
                    step: 5,
                    title: "ITC Eligibility Review (Section 17(5) Compliance)",
                    description:
                      "We review ALL claimed ITC for eligibility under Section 16 and Section 17(5). We identify blocked credits (motor vehicles not used for business, employee welfare, etc.), ineligible credits (purchases for exempt supplies, personal use), and time-barred ITC (claimed after expiry of September of next FY or annual return filing, whichever is earlier).",
                    duration: "1-2 days",
                  },
                  {
                    step: 6,
                    title: "Reversal Computation & GSTR-3B Table 4(B)(2) Entry",
                    description:
                      "We compute exact ITC to be reversed in the current month's GSTR-3B under Table 4(B)(2) — 'ITC reversed as per rules 38, 42 & 43 of CGST Rules and section 17(5)'. We provide the reversal amount breakup (IGST/CGST/SGST) and reason-wise bifurcation for your records.",
                    duration: "1 day",
                  },
                  {
                    step: 7,
                    title: "Reclaim Strategy for Future Months",
                    description:
                      "For ITC that is currently not available in GSTR-2B but will appear in future (supplier late filing), we track and mark for reclaim. We maintain a 'Pending ITC Tracker' and help you claim it via Table 4(A) when it reflects in subsequent GSTR-2B. We ensure you don't lose eligible ITC due to procedural delays.",
                    duration: "Ongoing tracking",
                  },
                  {
                    step: 8,
                    title: "Monthly Reconciliation Report & MIS",
                    description:
                      "We prepare a comprehensive monthly ITC reconciliation report containing: Summary (total ITC as per books, GSTR-2B, matched, unmatched, reversed), Vendor-wise mismatch details, Reason-wise analysis, Action taken / pending, Trend analysis (current month vs. previous months). This report is shared in Excel + PDF format for management review and audit trail.",
                    duration: "1 day (by 18th of month)",
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
                  Total Turnaround
                </p>
                <p className="text-sm text-gray-700">
                  <strong>8-10 working days from GSTR-2B availability</strong>{" "}
                  (12th of month) to final reconciliation report delivery (by 18th
                  of month) — giving you sufficient time to file GSTR-3B by 20th.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for ITC Reconciliation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  From Your End
                </p>
                <ul className="space-y-3">
                  {[
                    "GSTIN and GST portal login credentials",
                    "Purchase register / purchase book for the month (Excel / Tally export)",
                    "Purchase invoices (scanned copies for verification if needed)",
                    "Credit note / debit note register (if any)",
                    "Details of blocked credits (motor vehicles, welfare expenses, etc.)",
                    "Import Bill of Entry details (if applicable)",
                    "RCM purchase register (if applicable)",
                    "Previous month's reconciliation report (for continuity)",
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
                  We Will Download
                </p>
                <ul className="space-y-3">
                  {[
                    "GSTR-2B for the tax period (from GST portal)",
                    "GSTR-2A (for cross-verification if GSTR-2B has issues)",
                    "GSTR-3B filed for previous months (to track reversals)",
                    "GSTR-1 of your business (to cross-check against your sales for completeness)",
                    "ICEGATE data (if you have imports)",
                    "Vendor GSTR-1 filing status (to identify non-filers)",
                    "Any GST notices or communications from department",
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

          {/* BENEFITS */}
          <section id="benefits">
            <SectionLabel text="Why Reconcile ITC" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Benefits of Monthly ITC Reconciliation
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🚨",
                  title: "Prevent GST Notices & Demands",
                  desc: "Automated GST system compares your GSTR-3B with GSTR-2B monthly. Mismatches trigger Section 61 notices. Reconciliation ensures 100% match, avoiding notices, demands, interest, and penalty.",
                },
                {
                  icon: "💰",
                  title: "Maximize Eligible ITC Claim",
                  desc: "Many businesses UNDER-CLAIM ITC due to fear of mismatch. Reconciliation identifies ALL eligible ITC in GSTR-2B that you can legally claim, improving cash flow and reducing tax liability.",
                },
                {
                  icon: "🔍",
                  title: "Identify Vendor Non-Compliance Early",
                  desc: "Reconciliation reveals which suppliers are not filing GSTR-1 on time or filing with errors. You can take corrective action (vendor follow-up, payment withholding) BEFORE the issue escalates.",
                },
                {
                  icon: "📊",
                  title: "Clean Books & Audit Readiness",
                  desc: "Monthly reconciliation ensures your books match government data. During GST audit or annual audit, you have ready reports showing ITC claimed is fully compliant with GSTR-2B.",
                },
                {
                  icon: "⏱️",
                  title: "Timely Reversal & Reclaim",
                  desc: "Reversal of ineligible ITC in Table 4(B)(2) is mandatory. Reconciliation ensures you reverse ONLY what is truly ineligible and reclaim it when it becomes available in future GSTR-2B.",
                },
                {
                  icon: "📈",
                  title: "Improved Vendor Management",
                  desc: "Vendor-wise mismatch reports help you evaluate supplier compliance. You can rate vendors, negotiate payment terms based on GST filing discipline, and reduce business risk.",
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2 text-sm">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's GST ITC Reconciliation Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From one-time cleanup to ongoing monthly automation — we provide ITC
              reconciliation solutions tailored to your business size.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔍",
                  title: "One-Time ITC Reconciliation (Backlog Cleanup)",
                  desc: "For businesses that haven't reconciled ITC for several months or years. We perform historical reconciliation for up to 12 months, identify all mismatches, compute reversals, and prepare rectification plan.",
                  price: "₹9,999 (3 months) / ₹14,999 (6-12 months)",
                },
                {
                  icon: "📅",
                  title: "Monthly ITC Reconciliation (Basic)",
                  desc: "GSTR-2B vs. purchase register matching, mismatch identification, vendor-wise report, reversal computation. Suitable for businesses with <500 purchase invoices/month.",
                  price: "₹2,999/month",
                },
                {
                  icon: "🚀",
                  title: "Monthly ITC Reconciliation (Advanced)",
                  desc: "Everything in Basic + ITC eligibility audit (Section 17(5) compliance), import ITC reconciliation, RCM tracking, credit/debit note adjustment, reclaim tracker. For 500-2000 invoices/month.",
                  price: "₹5,999/month",
                },
                {
                  icon: "💼",
                  title: "Enterprise ITC Reconciliation (Automated)",
                  desc: "Fully automated reconciliation using GST software (ClearTax, Zoho GST, Masters India). Real-time mismatch alerts, vendor portal for supplier follow-up, dedicated reconciliation manager. For 2000+ invoices/month.",
                  price: "₹9,999/month",
                },
                {
                  icon: "📊",
                  title: "ITC Eligibility Audit (Section 17(5) Review)",
                  desc: "Standalone service to review all ITC claimed in the last 12 months and identify blocked credits under Section 17(5). Includes reversal computation and GSTR-3B correction guidance.",
                  price: "₹7,999 (one-time)",
                },
                {
                  icon: "🔄",
                  title: "Vendor Follow-Up & Reconciliation Support",
                  desc: "We contact your vendors on your behalf (via email/phone) to request GSTR-1 filing corrections. We provide them with discrepancy reports and track resolution until ITC appears in your GSTR-2B.",
                  price: "₹1,999/month (add-on)",
                },
                {
                  icon: "📋",
                  title: "GSTR-9C ITC Reconciliation (Annual)",
                  desc: "For businesses with turnover >₹5 crore required to file GSTR-9C (annual reconciliation statement certified by CA). We perform detailed ITC reconciliation between books and GSTR-2B/GSTR-3B for the entire FY.",
                  price: "₹14,999/year",
                },
                {
                  icon: "📨",
                  title: "ITC Mismatch Notice Response",
                  desc: "If you've received a notice under Section 61 or Section 73/74 for ITC mismatch, we prepare detailed response with reconciliation workings, supporting documents, and justification for discrepancies.",
                  price: "₹4,999/notice",
                },
                {
                  icon: "💻",
                  title: "ITC Reconciliation Software Setup & Training",
                  desc: "We set up GST reconciliation software (ClearTax, Zoho GST, etc.) for your business, configure vendor mapping, and train your accounts team on daily reconciliation workflow.",
                  price: "₹9,999 (one-time)",
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
                📦 Annual Reconciliation Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic Annual",
                    price: "₹29,999/year",
                    includes: [
                      "12 monthly reconciliations",
                      "Vendor-wise mismatch reports",
                      "Reversal computation",
                      "Email support",
                    ],
                  },
                  {
                    package: "Standard Annual",
                    price: "₹59,999/year",
                    includes: [
                      "Everything in Basic",
                      "ITC eligibility audit (quarterly)",
                      "Vendor follow-up support",
                      "GSTR-9C reconciliation included",
                      "Priority support",
                    ],
                  },
                  {
                    package: "Enterprise Annual",
                    price: "₹99,999/year",
                    includes: [
                      "Everything in Standard",
                      "Automated software setup",
                      "Dedicated reconciliation manager",
                      "Real-time alerts",
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
              Real Stories from Our ITC Reconciliation Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Manish Agarwal (Manufacturing)",
                  location: "Muzaffarnagar",
                  text: "We had 8 months of ITC backlog with mismatches totaling ₹12 lakh. Taxvio did complete reconciliation, identified ₹9.5 lakh eligible ITC, helped us reverse ₹2.5 lakh ineligible, and cleared all notices. We now reconcile monthly without fail.",
                },
                {
                  name: "Sneha Traders Pvt. Ltd.",
                  location: "Noida",
                  text: "Our vendors were not filing GSTR-1 on time, and we were sitting on ₹4.8 lakh pending ITC. Taxvio's vendor follow-up service contacted all 47 vendors, got their GSTR-1 filed, and we reclaimed full ITC in 3 months. Excellent proactive support!",
                },
                {
                  name: "Rajesh Industries",
                  location: "Meerut",
                  text: "Received Section 61 notice for ₹18 lakh ITC mismatch. Taxvio prepared complete reconciliation with invoice-wise workings, identified supplier errors, and drafted reply. Notice was dropped with zero demand. Their expertise saved us from a huge tax liability.",
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
              GST ITC Reconciliation Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GST ITC reconciliation for manufacturers, traders, and
              businesses across <strong>Noida</strong>, <strong>Delhi NCR</strong>,{" "}
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
                  title: "GST Return Filing",
                  icon: "📊",
                  link: "/serviceslist/gst/gst-return-filing",
                  desc: "Monthly GSTR-1, GSTR-3B filing.",
                },
                {
                  title: "GST Annual Return (GSTR-9)",
                  icon: "📋",
                  link: "/serviceslist/gst/gstr-9-filing",
                  desc: "Annual reconciliation statement.",
                },
                {
                  title: "GST Audit (GSTR-9C)",
                  icon: "🔍",
                  link: "/serviceslist/gst/gst-audit",
                  desc: "Turnover >₹5 Cr audit.",
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
                    Prevent ITC Notices & Maximize Credit
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Start Monthly ITC Reconciliation Today
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't let ITC mismatches trigger GST notices and demands.
                    Taxvio provides automated GSTR-2B vs. books matching,
                    vendor-wise mismatch reports, ITC eligibility audit, and
                    complete compliance support. Starting ₹2,999/month. Protect
                    your ITC and improve cash flow.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Start Now — ₹2,999/mo
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20ITC%20Reconciliation"
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
      q: "Is GSTR-2B mandatory for claiming ITC?",
      a: "Yes. Since 1 January 2022, as per amended Rule 36(4), you can claim ITC ONLY to the extent it is reflected in your GSTR-2B (or GSTR-2A for the same tax period). This is a strict legal restriction. Any ITC claimed beyond what is shown in GSTR-2B will trigger automated notice under Section 61 and demand for reversal under Section 73/74.",
    },
    {
      q: "How often should I reconcile ITC?",
      a: "ITC reconciliation should be done MONTHLY before filing GSTR-3B (due by 20th of next month). GSTR-2B is generated on 12th of the next month, so you have 8 days (12th to 20th) to reconcile, identify mismatches, and reverse ineligible ITC in Table 4(B)(2) of GSTR-3B. Annual reconciliation (GSTR-9/GSTR-9C) is mandatory at year-end, but monthly reconciliation prevents year-end surprises.",
    },
    {
      q: "Can I claim ITC in a future month if it's missing from current month's GSTR-2B?",
      a: "Yes. If ITC is not appearing in GSTR-2B due to supplier's late filing of GSTR-1, you can claim it in any FUTURE month when it reflects in GSTR-2B — subject to the time limit under Section 16(4): you can claim ITC up to the due date of filing GSTR-3B for September of the next financial year OR the date of filing annual return (GSTR-9), whichever is earlier. For example, for FY 2023-24 purchases, you can claim ITC until 20 October 2024 (GSTR-3B for Sep 2024) or until the date you file GSTR-9 for FY 2023-24, whichever is earlier.",
    },
    {
      q: "What is the penalty for claiming excess ITC not in GSTR-2B?",
      a: "Claiming ITC not appearing in GSTR-2B is treated as wrongful availment of credit. Consequences include: (1) Demand under Section 73 (within 3 years from due date of annual return) or Section 74 (within 5 years if suppression/fraud), (2) Interest @ 18% per annum from the date of wrongful claim, (3) Penalty under Section 122/125 — minimum ₹10,000 or 10% of tax amount (whichever is higher), (4) If willful suppression with intent to evade tax, penalty can be up to 100% of tax amount.",
    },
    {
      q: "Can I reverse ITC in one month and reclaim it in the next month?",
      a: "Yes. If you reverse ITC in Table 4(B)(2) of GSTR-3B for month 'X' (because it was not in GSTR-2B), and it subsequently appears in GSTR-2B of month 'X+1' (due to supplier filing late GSTR-1), you can reclaim that ITC in month 'X+1' via Table 4(A) — 'ITC available (whether in full or part)'. The net effect in electronic credit ledger will be: reversal in month X, reclaim in month X+1 — resulting in zero loss of ITC (subject to time limits).",
    },
    {
      q: "Do I need to reconcile ITC for imports and RCM purchases?",
      a: "Yes, but the process is different. Import ITC (Bill of Entry) does NOT appear in GSTR-2B — it is auto-populated in your electronic credit ledger from ICEGATE system. You should reconcile import ITC separately by downloading ICEGATE data. Similarly, RCM (Reverse Charge Mechanism) purchases are self-invoiced by you and reported in GSTR-3B Table 4(A)(3) — they do NOT appear in GSTR-2B. Maintain separate reconciliation for RCM purchases against your RCM register.",
    },
    {
      q: "Can Taxvio contact my vendors to get GSTR-1 filed?",
      a: "Yes. As part of our Vendor Follow-Up & Reconciliation Support service (₹1,999/month add-on), we contact your vendors on your behalf via email or phone. We provide them with discrepancy reports showing missing invoices, errors in GSTR-1, and request timely filing/correction. We track vendor responses and update you on resolution status. This significantly improves ITC recovery rates and reduces your follow-up workload.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GST ITC Reconciliation
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