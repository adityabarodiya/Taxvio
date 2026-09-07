// app/serviceslist/gst/gstr-10-final-return/GSTRTenFinalReturnClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GSTR-10 Final Return Filing - GST Cancellation Closing Return",
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
    "Professional GSTR-10 final return filing services after GST registration cancellation. Expert assistance in closing stock valuation, ITC reversal computation, liability reconciliation, and GSTR-10 preparation. Mandatory compliance within 3 months of cancellation order or date of cancellation order, whichever is later. Ideal for closed businesses, cancelled proprietorships, and firms completing GST closure formalities. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "GST Final Return Filing & Compliance Closure",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
      maxPrice: "9999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GSTR-10 and when is it mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSTR-10 is the final GST return that MUST be filed by every registered taxpayer whose GST registration has been cancelled or surrendered. It is a one-time return containing details of closing stock, input tax credit (ITC) reversal, and final tax liabilities as on the date of cancellation. It must be filed within 3 months from the date of cancellation order or the date of cancellation order, whichever is later. It is mandatory irrespective of business turnover or type of cancellation (voluntary or suo-moto).",
      },
    },
    {
      "@type": "Question",
      name: "What is the deadline for filing GSTR-10?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSTR-10 must be filed within 3 months from the date of cancellation order or the effective date of cancellation, whichever is later. For example, if your cancellation order is dated 15th January 2024 with effective cancellation date 31st December 2023, you have 3 months from 15th January 2024 (i.e., till 15th April 2024) to file GSTR-10. Late filing attracts penalty and interest on unpaid tax liability.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't file GSTR-10?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-filing of GSTR-10 is a legal violation under GST law. Consequences include: (1) Late fee of ₹100 per day (₹50 CGST + ₹50 SGST) up to a maximum of ₹5,000, (2) Interest at 18% per annum on unpaid tax liability from due date till payment, (3) Legal notices and recovery proceedings by GST department, (4) Difficulty in obtaining GST cancellation completion certificate, (5) ITC reversal liability remains outstanding against you, (6) Penalty and prosecution under Section 122 of CGST Act for willful non-compliance.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTRTenFinalReturnClient() {
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
          className="bg-orange-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⏰ GST Cancelled? File GSTR-10 Final Return Within 3 Months — Avoid Penalty & Legal Action
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
              <span className="text-white">GSTR-10 Final Return</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📋 GST Closure Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GSTR-10 Final Return
                  <br />
                  <span className="text-[#7ecbf0]">Filing Service</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Your <strong className="text-white">GST registration</strong>{" "}
                  has been cancelled? Filing{" "}
                  <strong className="text-white">GSTR-10 (Final Return)</strong>{" "}
                  is <strong className="text-white">MANDATORY</strong> within{" "}
                  <strong className="text-white">3 months</strong> of the
                  cancellation order to legally close your GST compliance. This
                  return includes{" "}
                  <strong className="text-white">closing stock valuation</strong>,{" "}
                  <strong className="text-white">ITC reversal computation</strong>,
                  and{" "}
                  <strong className="text-white">
                    final liability reconciliation
                  </strong>
                  . Non-filing attracts penalty, interest, and legal action.{" "}
                  <strong className="text-white">Taxvio</strong> handles complete
                  GSTR-10 preparation — stock accounting, ITC calculation,
                  liability settlement, and online filing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File GSTR-10 Now — ₹2,999 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GSTR-10%20Final%20Return%20Filing"
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
                    "✅ Closing Stock Valuation",
                    "✅ ITC Reversal Computation",
                    "✅ Expert CA Assistance",
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
                    ["⏰", "Due within 3 months of cancellation"],
                    ["📋", "Mandatory for all cancelled GSTINs"],
                    ["📦", "Includes closing stock details"],
                    ["💰", "ITC reversal computation required"],
                    ["🚫", "Penalty ₹100/day for late filing"],
                    ["🚀", "Filing fee: ₹2,999 onwards"],
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
              { number: "500+", label: "GSTR-10 Returns Filed", icon: "✅" },
              { number: "3 Months", label: "Filing Deadline", icon: "⏰" },
              { number: "100%", label: "Compliance Rate", icon: "📊" },
              { number: "₹2,999", label: "Starting Fee", icon: "💰" },
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
              "✔ Stock Valuation Experts",
              "✔ ITC Reversal Accuracy",
              "✔ Deadline Tracking",
              "✔ CA Certified Filing",
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
          {/* WHAT IS GSTR-10 */}
          <section id="what-is-gstr10">
            <SectionLabel text="Understanding GSTR-10" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is GSTR-10 Final Return?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>GSTR-10</strong> is the{" "}
                  <strong>Final Return</strong> that MUST be filed by every
                  registered taxpayer whose{" "}
                  <strong>GST registration has been cancelled</strong> or
                  surrendered — whether voluntarily (you applied for cancellation)
                  or suo-moto (cancelled by the department).
                </p>
                <p>
                  It is a <strong>one-time, closing return</strong> that captures:
                </p>
                <ul className="space-y-2 ml-6">
                  {[
                    "Details of closing stock (finished goods, raw materials, work-in-progress) held as on the date of cancellation",
                    "Input Tax Credit (ITC) availed on closing stock that needs to be REVERSED and paid back to the government",
                    "Any other liabilities (pending tax, interest, penalty) outstanding at the time of cancellation",
                    "Details of capital goods (machinery, equipment) on which ITC was claimed earlier",
                    "Reconciliation of all GST compliance obligations before final closure",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-[#00416a] font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    📋 Why GSTR-10 Is Mandatory
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    GSTR-10 ensures that you have paid back all{" "}
                    <strong>ITC (Input Tax Credit)</strong> that you claimed on
                    stock and capital goods that are now outside the GST system
                    (since your GSTIN is cancelled). The government wants to
                    recover this credit to prevent tax evasion.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-blue-200">
                    <p className="font-bold text-blue-700 text-sm mb-2">
                      💡 Example
                    </p>
                    <p className="text-xs text-gray-600">
                      You purchased raw materials worth ₹10 lakh (GST ₹1.8 lakh)
                      and claimed ITC of ₹1.8 lakh. Now your GST is cancelled and
                      you still have ₹5 lakh worth of raw materials in stock. You
                      must <strong>reverse ITC</strong> proportionate to the
                      closing stock value (approximately ₹90,000) and pay it back
                      via GSTR-10.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  When GSTR-10 Must Be Filed
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    ⏰ Filing Deadline
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    GSTR-10 must be filed within{" "}
                    <strong>3 months from the date of cancellation order</strong>{" "}
                    OR the <strong>effective date of cancellation</strong>,
                    whichever is <strong>later</strong>.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-orange-200 mb-4">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      📅 Date Calculation Examples
                    </p>
                    <div className="space-y-3 text-xs text-gray-700">
                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="font-bold text-orange-800 mb-1">
                          Scenario 1: Voluntary Cancellation
                        </p>
                        <p>
                          • You applied for cancellation on{" "}
                          <strong>1st Jan 2024</strong>
                          <br />
                          • Cancellation order issued on{" "}
                          <strong>15th Jan 2024</strong>
                          <br />
                          • Effective date of cancellation:{" "}
                          <strong>31st Dec 2023</strong>
                          <br />• GSTR-10 due date:{" "}
                          <strong>15th April 2024</strong> (3 months from order
                          date, which is later than effective date)
                        </p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="font-bold text-orange-800 mb-1">
                          Scenario 2: Suo-Moto Cancellation
                        </p>
                        <p>
                          • Department cancelled on{" "}
                          <strong>10th Feb 2024</strong>
                          <br />
                          • Effective date of cancellation:{" "}
                          <strong>10th Feb 2024</strong> (same date)
                          <br />• GSTR-10 due date:{" "}
                          <strong>10th May 2024</strong> (3 months from
                          cancellation date)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    🚫 Penalty for Non-Filing or Late Filing
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Late fee: ₹100 per day (₹50 CGST + ₹50 SGST) from due date till filing, subject to maximum of ₹5,000",
                      "Interest: 18% per annum on unpaid tax liability (ITC reversal amount) from due date till payment",
                      "Legal notices and recovery proceedings by GST department for outstanding liability",
                      "Difficulty in obtaining GST cancellation completion certificate",
                      "Penalty under Section 122 of CGST Act for willful non-compliance (up to ₹25,000)",
                      "Prosecution under Section 132 for deliberate suppression or false information",
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
                  specializes in GSTR-10 final return filing — closing stock
                  valuation, ITC reversal computation, liability reconciliation,
                  and online submission across Uttar Pradesh, Noida, Delhi NCR,
                  Mumbai, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* COMPONENTS OF GSTR-10 */}
          <section id="components">
            <SectionLabel text="What's Included" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Key Components of GSTR-10 Return
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              GSTR-10 is a comprehensive return covering all aspects of your
              business closure under GST. Here's what you need to report:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  component: "Details of Closing Stock (Table 5)",
                  icon: "📦",
                  desc: "Itemized list of ALL goods (finished goods, raw materials, semi-finished goods, consumables) held in stock as on the date of cancellation. This includes stock at your premises, godowns, job-workers' premises, or in transit.",
                  whatToReport: [
                    "Description and HSN code of each item",
                    "Quantity and unit of measurement",
                    "Taxable value (purchase cost + proportionate expenses)",
                    "Rate of tax (CGST, SGST/UTGST, IGST, Cess)",
                    "Total tax payable on closing stock",
                  ],
                  calculation:
                    "Tax payable = (Closing stock value) × (Applicable GST rate) × (Percentage of ITC claimed on such stock)",
                },
                {
                  component: "ITC Reversal on Inputs in Stock (Table 6)",
                  icon: "💰",
                  desc: "Input Tax Credit (ITC) that you had claimed earlier on raw materials, consumables, and other inputs that are now part of closing stock must be REVERSED and paid back to the government.",
                  whatToReport: [
                    "ITC claimed on inputs held in stock",
                    "ITC claimed on inputs contained in semi-finished/finished goods in stock",
                    "Common/Apportioned ITC on closing stock",
                    "Total ITC to be reversed (paid back)",
                  ],
                  calculation:
                    "ITC Reversal = (ITC claimed on purchases) × (Closing stock value ÷ Total purchases value)",
                },
                {
                  component: "ITC Reversal on Capital Goods (Table 7)",
                  icon: "🏭",
                  desc: "If you claimed ITC on capital goods (machinery, equipment, furniture, computers) that are still with you at the time of cancellation, you must reverse ITC proportionate to the remaining useful life.",
                  whatToReport: [
                    "Details of all capital goods (description, invoice date, value)",
                    "ITC claimed on each capital good",
                    "Number of months/quarters lapsed since purchase",
                    "Remaining useful life (as per GST law, capital goods depreciate over 60 months or 20 quarters)",
                    "ITC to be reversed (proportionate to remaining life)",
                  ],
                  calculation:
                    "ITC Reversal on Capital Goods = (ITC claimed) × (Remaining quarters ÷ 20 quarters). Example: If ITC claimed is ₹50,000 and 8 quarters have lapsed, reversal = ₹50,000 × (12/20) = ₹30,000",
                },
                {
                  component: "Tax Payable and Payment (Table 8 & 9)",
                  icon: "💵",
                  desc: "After computing ITC reversal on inputs, capital goods, and closing stock, you must PAY the total liability via the GST portal using electronic cash ledger (payment via challan).",
                  whatToReport: [
                    "Total tax liability (sum of Tables 5, 6, 7)",
                    "Break-up: CGST, SGST/UTGST, IGST, Cess",
                    "Payment details (challan number, date, amount paid)",
                    "Interest and late fee (if filing after due date)",
                  ],
                  calculation:
                    "Total Payment = ITC Reversal on Stock + ITC Reversal on Capital Goods + Tax on Closing Stock + Interest + Late Fee",
                },
                {
                  component: "Exempted, Nil-Rated & Non-GST Supplies (Table 10)",
                  icon: "📋",
                  desc: "Details of any exempt supplies, nil-rated supplies, or non-GST supplies made during the period between last return filed and date of cancellation.",
                  whatToReport: [
                    "Inter-state exempted supplies",
                    "Intra-state exempted supplies",
                    "Nil-rated supplies",
                    "Non-GST supplies (outside GST scope)",
                  ],
                  calculation: "Reporting only — no tax payable on these items.",
                },
                {
                  component: "Declaration & Verification (Table 13)",
                  icon: "✅",
                  desc: "Final declaration confirming that all information provided in GSTR-10 is true and correct to the best of your knowledge. Signed by authorized signatory (proprietor, partner, director, or authorized representative).",
                  whatToReport: [
                    "Name and designation of signatory",
                    "Place of signing",
                    "Date of submission",
                    "Digital signature or EVC (Electronic Verification Code)",
                  ],
                  calculation: "No calculation — declaration and submission only.",
                },
              ].map((item) => (
                <div
                  key={item.component}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-800 mb-2">
                        {item.component}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-purple-200 mb-3">
                    <p className="font-bold text-purple-800 text-xs mb-2">
                      📝 What to Report
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      {item.whatToReport.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-0.5">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-3 border border-purple-300">
                    <p className="font-bold text-purple-700 text-xs mb-1">
                      🧮 Calculation
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      {item.calculation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FILING PROCESS */}
          <section id="filing-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to File GSTR-10 Final Return
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Filing GSTR-10 requires accurate stock accounting, ITC computation,
                and liability reconciliation. Here's the complete process:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Verify Cancellation Order & Due Date",
                    description:
                      "Log in to GST portal → Services → Registration → View Additional Notices/Orders → Download cancellation order (Form GST REG-19 or REG-08). Note the 'Date of Cancellation Order' and 'Effective Date of Cancellation'. Calculate GSTR-10 due date: 3 months from the later of these two dates. Taxvio verifies the exact due date and remaining time to avoid late filing penalty.",
                    duration: "1 day",
                  },
                  {
                    step: 2,
                    title: "Physical Stock Verification (Stock Taking)",
                    description:
                      "Conduct physical verification of all goods in stock as on the date of cancellation: Finished goods ready for sale, Raw materials and consumables, Work-in-progress (semi-finished goods), Packing materials, Stock at godowns or job-workers' premises, Goods in transit. Prepare a detailed stock register with item description, HSN code, quantity, unit, and purchase cost. This is the foundation of GSTR-10.",
                    duration: "2-3 days (depending on stock volume)",
                  },
                  {
                    step: 3,
                    title: "Closing Stock Valuation (Table 5)",
                    description:
                      "Determine the taxable value of each stock item. Valuation method: Cost of purchase + proportionate inward freight, handling, and insurance costs (excluding GST). Do NOT include profit margin — only cost price. Multiply quantity × cost per unit for each item. Apply applicable GST rate (5%, 12%, 18%, 28%) based on HSN code. Compute tax payable on closing stock = Stock value × GST rate. We use accounting software and GST rate databases to ensure accuracy.",
                    duration: "2-4 days",
                  },
                  {
                    step: 4,
                    title: "ITC Reversal Computation — Inputs in Stock (Table 6)",
                    description:
                      "Extract all purchase invoices from the date of GST registration till cancellation date. Identify ITC claimed on raw materials, consumables, and inputs. Determine which of these inputs are still in stock (not yet sold or consumed). Formula: ITC to be reversed = (ITC claimed on inputs) × (Closing stock value of inputs ÷ Total purchase value of inputs). Example: Total purchases ₹50 lakh (ITC ₹9 lakh). Closing stock ₹10 lakh. ITC reversal = ₹9 lakh × (10/50) = ₹1.8 lakh. We automate this calculation using your purchase register and GSTR-2A/2B data.",
                    duration: "3-5 days (depending on transaction volume)",
                  },
                  {
                    step: 5,
                    title: "ITC Reversal on Capital Goods (Table 7)",
                    description:
                      "List all capital goods (machinery, equipment, furniture, computers, vehicles used for business) on which ITC was claimed. For each item: Note the date of purchase and ITC claimed. Calculate the number of quarters completed since purchase. Remaining useful life = 20 quarters (5 years as per GST law) – quarters completed. ITC reversal = (ITC claimed) × (Remaining quarters ÷ 20). Example: Machinery purchased on 1st April 2022, ITC ₹2 lakh. Cancellation date 31st Dec 2023 (7 quarters completed). Reversal = ₹2 lakh × (13/20) = ₹1.3 lakh. We maintain a capital goods register for accurate computation.",
                    duration: "1-2 days",
                  },
                  {
                    step: 6,
                    title:
                      "Computation of Total Tax Liability (Tables 5, 6, 7 + Interest + Late Fee)",
                    description:
                      "Sum up all components: (1) Tax on closing stock (Table 5), (2) ITC reversal on inputs (Table 6), (3) ITC reversal on capital goods (Table 7), (4) Interest on delayed payment (if filing after due date): 18% p.a. on total tax liability from due date to payment date, (5) Late fee: ₹100/day (max ₹5,000) if filing after due date. We prepare a detailed liability summary with break-up of CGST, SGST/UTGST, IGST, and Cess.",
                    duration: "1 day",
                  },
                  {
                    step: 7,
                    title: "Payment of Tax Liability via Electronic Cash Ledger",
                    description:
                      "Before filing GSTR-10, you MUST pay the total tax liability. Log in to GST portal → Services → Payments → Create Challan (PMT-06). Enter amount to be paid (CGST, SGST/IGST, Cess separately). Make payment via net banking, debit/credit card, or NEFT/RTGS. Download challan and payment receipt (CIN – Challan Identification Number). The paid amount is credited to your electronic cash ledger. Taxvio assists in challan generation and payment verification.",
                    duration: "1 day",
                  },
                  {
                    step: 8,
                    title: "Online Filing of GSTR-10 on GST Portal",
                    description:
                      "Log in to GST portal → Services → Returns → Final Return (GSTR-10). Enter all details: Table 5 (Closing stock), Table 6 (ITC reversal on inputs), Table 7 (ITC reversal on capital goods), Table 8 (Tax payable from electronic cash ledger), Table 9 (Payment of tax), Table 10 (Exempt/Nil-rated supplies if any), Table 13 (Verification and declaration). Upload supporting documents (stock register, valuation certificates, capital goods register). Submit with DSC (Digital Signature Certificate) or EVC (Aadhaar-based OTP). Download filed GSTR-10 acknowledgment and save for records.",
                    duration: "1 day",
                  },
                  {
                    step: 9,
                    title:
                      "Post-Filing — Obtain Cancellation Completion Certificate",
                    description:
                      "After successful GSTR-10 filing, your GST compliance closure is complete. You can now request a Cancellation Completion Certificate from the GST department (if required for bank closure, company strike-off, etc.). The department verifies GSTR-10 and issues the certificate. We track the status and download the certificate for your records.",
                    duration: "7-15 days (by department)",
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
                    10-15 days from stock verification to GSTR-10 filing
                  </strong>{" "}
                  (depending on stock volume and accounting complexity). Must be
                  completed within 3 months of cancellation order to avoid penalty.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for GSTR-10 Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "GSTIN (cancelled registration number)",
                    "GST cancellation order copy (Form GST REG-19 or REG-08)",
                    "Closing stock register (as on cancellation date)",
                    "Purchase register (all inward supplies from registration to cancellation)",
                    "Sales register (all outward supplies from last return to cancellation)",
                    "Capital goods register (machinery, equipment with ITC details)",
                    "Books of accounts (trading account, profit & loss, balance sheet)",
                    "Bank statements (for payment verification)",
                    "GST portal login credentials (username and password)",
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
                    "Stock valuation certificate (if stock value > ₹10 lakh, CA certification recommended)",
                    "Job-work challans (if stock held at job-worker's premises)",
                    "Consignment stock details (if stock held at customer's premises)",
                    "GSTR-2A/2B (for ITC verification and reconciliation)",
                    "GSTR-1 (last filed return for sales cross-checking)",
                    "GSTR-3B (last filed return for ITC and liability cross-checking)",
                    "Invoices for capital goods purchases (machinery, equipment)",
                    "Depreciation schedule (for capital goods ITC reversal calculation)",
                    "PAN card and Aadhaar of authorized signatory",
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
              Common Mistakes in GSTR-10 Filing
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                GSTR-10 errors can lead to notices, penalty, and prolonged
                compliance closure. Here are critical mistakes to avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Incorrect Closing Stock Valuation",
                    icon: "📦",
                    problem:
                      "Using selling price instead of cost price for stock valuation, or including GST in the value (which should be excluded).",
                    solution:
                      "Use only COST PRICE (purchase cost + proportionate expenses, excluding GST). Example: If you purchased goods at ₹100 + ₹18 GST = ₹118, the stock value for GSTR-10 is ₹100 only.",
                  },
                  {
                    mistake: "Missing Stock at Job-Worker or Godown",
                    icon: "🏭",
                    problem:
                      "Not including stock held at job-worker's premises, consignment stock at customer's premises, or stock in transit in the closing stock declaration.",
                    solution:
                      "Conduct a comprehensive stock verification across ALL locations — your premises, godowns, job-workers, customer locations, and in-transit goods. Include all stock in Table 5.",
                  },
                  {
                    mistake: "Incorrect ITC Reversal Calculation",
                    icon: "💰",
                    problem:
                      "Using wrong formula for ITC reversal, or not considering the proportion of closing stock to total purchases, leading to under-payment or over-payment of ITC.",
                    solution:
                      "Use the correct formula: ITC Reversal = (ITC claimed on inputs) × (Closing stock value ÷ Total purchase value). Cross-check with GSTR-2A/2B to verify ITC claimed. Taxvio uses automated reconciliation tools for accuracy.",
                  },
                  {
                    mistake: "Ignoring Capital Goods ITC Reversal",
                    icon: "🛠️",
                    problem:
                      "Many taxpayers forget to reverse ITC on capital goods (machinery, equipment) assuming it's only for inputs. This leads to under-payment and department scrutiny.",
                    solution:
                      "Maintain a separate capital goods register with purchase date, ITC claimed, and quarters lapsed. Reverse ITC as per the 20-quarter depreciation rule (Rule 44 of CGST Rules).",
                  },
                  {
                    mistake: "Filing GSTR-10 Without Paying Tax Liability",
                    icon: "💵",
                    problem:
                      "Attempting to file GSTR-10 without first paying the computed tax liability via electronic cash ledger. The system will NOT allow submission.",
                    solution:
                      "ALWAYS pay the total liability (ITC reversal amount) via PMT-06 challan BEFORE filing GSTR-10. The portal deducts the payment from your electronic cash ledger during filing.",
                  },
                  {
                    mistake: "Missing the 3-Month Filing Deadline",
                    icon: "⏰",
                    problem:
                      "Taxpayers often confuse the cancellation date with the order date, or simply miss the 3-month deadline, leading to late fee and interest.",
                    solution:
                      "Calculate the due date correctly: 3 months from the LATER of (a) cancellation order date or (b) effective cancellation date. Set reminders. Taxvio provides deadline tracking and alerts.",
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
              Taxvio's GSTR-10 Filing Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From stock valuation to online filing — we handle every aspect of
              your GSTR-10 compliance with CA-level accuracy.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "⏰",
                  title: "Deadline Verification & Compliance Check",
                  desc: "We download your cancellation order, verify the exact GSTR-10 due date (3 months from order/cancellation date, whichever is later), and check if filing is still within deadline or penalty-applicable.",
                  price: "₹499",
                },
                {
                  icon: "📋",
                  title: "Complete GSTR-10 Filing (Standard)",
                  desc: "Closing stock verification and valuation (up to 50 SKUs), ITC reversal computation on inputs and capital goods, tax liability calculation, payment assistance, and online GSTR-10 filing with acknowledgment.",
                  price: "₹2,999",
                },
                {
                  icon: "📦",
                  title: "Physical Stock Verification & Valuation",
                  desc: "On-site or remote stock verification (finished goods, raw materials, WIP), preparation of detailed stock register with HSN codes, cost-based valuation as per GST rules, and stock valuation certificate (if required).",
                  price: "₹1,999",
                },
                {
                  icon: "💰",
                  title: "ITC Reversal Computation (Inputs & Capital Goods)",
                  desc: "Analysis of all purchase invoices and GSTR-2A/2B, identification of ITC claimed on inputs in stock, capital goods ITC reversal as per 20-quarter rule, and detailed ITC reversal report with supporting calculations.",
                  price: "₹1,499",
                },
                {
                  icon: "💵",
                  title: "Tax Payment Assistance (PMT-06 Challan)",
                  desc: "Computation of total tax liability (CGST, SGST/IGST, Cess), challan generation (PMT-06) on GST portal, payment processing via net banking/card, and payment receipt download and verification.",
                  price: "₹999",
                },
                {
                  icon: "🏭",
                  title: "Complex GSTR-10 (High Stock Volume)",
                  desc: "For businesses with large stock volume (>100 SKUs), multiple locations, job-work, or complex ITC scenarios. Includes detailed reconciliation, CA certification of stock valuation, and comprehensive documentation.",
                  price: "₹7,999",
                },
                {
                  icon: "📨",
                  title: "Late Filing (After Deadline) + Penalty Computation",
                  desc: "If you've missed the 3-month deadline, we file GSTR-10 with late fee and interest computation, prepare justification for delayed filing, and liaise with department to minimize penalty.",
                  price: "₹4,999",
                },
                {
                  icon: "📊",
                  title: "Post-Filing Notice Response (if any)",
                  desc: "If the GST department issues notice after GSTR-10 filing (seeking clarification on stock value, ITC reversal), we draft detailed reply, submit supporting documents, and represent you at hearings.",
                  price: "₹2,999",
                },
                {
                  icon: "✅",
                  title: "Cancellation Completion Certificate Support",
                  desc: "After GSTR-10 filing, we help you obtain the GST Cancellation Completion Certificate from the department (required for bank closure, company strike-off, etc.). Includes application drafting and follow-up.",
                  price: "₹1,499",
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
                📦 Complete GSTR-10 Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic (Small Business)",
                    price: "₹2,999",
                    includes: [
                      "Stock valuation (up to 50 SKUs)",
                      "ITC reversal computation",
                      "GSTR-10 filing",
                      "Payment assistance",
                      "Email support",
                    ],
                  },
                  {
                    package: "Standard (Medium Business)",
                    price: "₹5,999",
                    includes: [
                      "Stock valuation (up to 100 SKUs)",
                      "Capital goods ITC reversal",
                      "Multi-location stock reconciliation",
                      "GSTR-10 filing + acknowledgment",
                      "Priority support",
                    ],
                  },
                  {
                    package: "Premium (Large/Complex)",
                    price: "₹9,999",
                    includes: [
                      "Unlimited SKUs + multi-location",
                      "Job-work stock reconciliation",
                      "CA-certified valuation report",
                      "Notice response support",
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
              Real Stories from Our GSTR-10 Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sharma Enterprises",
                  location: "Muzaffarnagar",
                  text: "Closed my business in December 2023 and had no idea about GSTR-10. Taxvio reminded me in February 2024 (within deadline), conducted full stock verification, computed ITC reversal on ₹8 lakh stock, and filed GSTR-10 in 10 days. Saved me from penalty!",
                },
                {
                  name: "Gupta Traders Pvt. Ltd.",
                  location: "Noida",
                  text: "Had closing stock of ₹25 lakh across 3 godowns. Taxvio team visited all locations, verified stock physically, prepared valuation report, and filed GSTR-10 with 100% accuracy. Their capital goods ITC reversal computation was exceptional.",
                },
                {
                  name: "Rajesh Manufacturing",
                  location: "Meerut",
                  text: "I missed the GSTR-10 deadline by 2 months and received a notice from GST department. Taxvio immediately filed the return with late fee and interest computation, drafted a detailed reply to the notice, and got the matter settled. Highly professional!",
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
              GSTR-10 Final Return Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GSTR-10 final return filing (closing stock valuation, ITC
              reversal, liability reconciliation) for businesses across{" "}
              <strong>Noida</strong>, <strong>Delhi NCR</strong>,{" "}
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
                  title: "GST Cancellation",
                  icon: "❌",
                  link: "/serviceslist/gst/gst-cancellation",
                  desc: "Voluntary GST cancellation (REG-16) filing.",
                },
                {
                  title: "GST Revocation",
                  icon: "🔄",
                  link: "/serviceslist/gst/gst-revocation",
                  desc: "Restore cancelled GSTIN via REG-21.",
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
                  desc: "Expert response to GST notices and SCNs.",
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
                    Complete Your GST Closure Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File GSTR-10 Final Return Now
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't risk penalty and legal action — file your GSTR-10 within
                    3 months of GST cancellation. Taxvio provides complete stock
                    valuation, ITC reversal computation, payment assistance, and
                    online filing. Starting ₹2,999. Close your GST compliance
                    legally and permanently.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Start Now — ₹2,999
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GSTR-10%20Final%20Return%20Filing"
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
      q: "Can I file GSTR-10 if I have already filed GST cancellation application but it's not yet approved?",
      a: "No. GSTR-10 can only be filed AFTER your GST registration is officially cancelled and you have received the cancellation order (Form GST REG-19 or REG-08). The 3-month deadline starts from the date of this cancellation order. If your cancellation is still pending approval, you must wait for the order and then file GSTR-10.",
    },
    {
      q: "Is CA certification mandatory for GSTR-10 filing?",
      a: "No, CA certification is NOT legally mandatory for GSTR-10 filing. However, it is HIGHLY RECOMMENDED if: (1) Your closing stock value exceeds ₹10 lakh, (2) You have complex ITC scenarios (multiple locations, job-work), (3) You want to avoid department scrutiny and notices. A CA-certified stock valuation report adds credibility and reduces the chances of department questioning your return.",
    },
    {
      q: "What if I don't have any closing stock — do I still need to file GSTR-10?",
      a: "YES. GSTR-10 is MANDATORY for all cancelled GSTINs, even if you have ZERO closing stock. In such cases, you will file a NIL GSTR-10, reporting zero values in all tables. This legally confirms to the department that you have no stock, no ITC liability, and no pending tax obligations. Not filing GSTR-10 (even if NIL) attracts penalty and late fee.",
    },
    {
      q: "Can I revise or correct GSTR-10 after filing?",
      a: "No. Once GSTR-10 is filed, it CANNOT be revised or amended. This is because GSTR-10 is a FINAL return marking the closure of your GST registration. If you made an error in GSTR-10, you will need to: (1) File a rectification application with the GST department explaining the error, (2) Pay any additional tax liability (if error resulted in short payment), or (3) Seek department's approval for correction. Prevention is better than cure — get expert assistance to file GSTR-10 accurately the first time.",
    },
    {
      q: "If my cancellation is effective from 31st December 2023, which date's stock should I report in GSTR-10?",
      a: "You must report closing stock as on the EFFECTIVE DATE OF CANCELLATION, which is 31st December 2023 in your case. Even if you received the cancellation order on 15th January 2024, the stock valuation date is 31st December 2023. Conduct stock verification and valuation as on this specific date and report it in GSTR-10.",
    },
    {
      q: "How is ITC reversal calculated if I purchased goods at different rates (5%, 12%, 18%)?",
      a: "ITC reversal must be calculated SEPARATELY for each GST rate category. Formula: For 5% rate goods: ITC reversal = (ITC claimed on 5% rate purchases) × (Closing stock value of 5% rate goods ÷ Total purchase value of 5% rate goods). Repeat for 12%, 18%, 28%, and Cess categories separately. The total ITC reversal is the sum of all categories. Taxvio uses automated tools to handle multi-rate ITC calculations accurately.",
    },
    {
      q: "Can Taxvio handle GSTR-10 for businesses with stock at multiple locations (godowns, branches)?",
      a: "Yes. As part of our Premium GSTR-10 package (₹9,999), we conduct multi-location stock verification — either physically (if locations are in our serviceable area) or remotely (via video verification and client coordination). We consolidate stock data from all locations, prepare a unified valuation report, and file GSTR-10 with comprehensive documentation. We have handled GSTR-10 for businesses with up to 15 locations across India.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GSTR-10 Final Return
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