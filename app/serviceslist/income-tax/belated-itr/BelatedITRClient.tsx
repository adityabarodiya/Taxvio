// app/serviceslist/income-tax/belated-itr/BelatedITRClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Belated Income Tax Return Filing - Section 139(4)",
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
    "Professional belated ITR filing services under Section 139(4) of the Income Tax Act for returns filed after the July 31st due date. Complete support including late fee calculation, interest computation under Section 234A, penalty mitigation, and e-filing. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Belated Income Tax Return Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "1499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "1499",
      maxPrice: "7999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a belated income tax return under Section 139(4)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A belated return under Section 139(4) is an income tax return filed after the original due date of July 31st (or October 31st for audit cases). It can be filed until December 31st of the assessment year and attracts a late fee under Section 234F and interest under Section 234A on any unpaid tax.",
      },
    },
    {
      "@type": "Question",
      name: "What is the deadline for filing a belated ITR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The deadline for filing a belated return is December 31st of the assessment year. For FY 2025-26 (AY 2026-27), the belated ITR deadline is December 31, 2025. Filing after this date is not permitted under Section 139(4).",
      },
    },
    {
      "@type": "Question",
      name: "What is the late fee for filing belated ITR under Section 234F?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If filed after July 31 but before December 31 of the same calendar year, the late fee is ₹5,000 (₹1,000 if total income is below ₹5 lakh). If filed between January 1 and December 31 of the next year, the late fee is ₹10,000 (₹1,000 if total income is below ₹5 lakh).",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function BelatedITRClient() {
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
          🚨 Missed the July 31 Deadline? File Belated ITR Before December 31 —
          Late Fee ₹5,000–₹10,000 + Interest on Unpaid Tax
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
                href="/serviceslist/income-tax"
                className="hover:text-white transition"
              >
                Income Tax
              </Link>
              <span>/</span>
              <span className="text-white">Belated ITR Filing</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  ⏰ Belated ITR Filing — Section 139(4)
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Belated ITR
                  <br />
                  <span className="text-[#7ecbf0]">Filing Service</span>
                  <br />
                  U/s 139(4)
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Missed the <strong className="text-white">July 31st ITR
                  deadline</strong>? You can still file a{" "}
                  <strong className="text-white">belated return under Section
                  139(4)</strong> until December 31st of the assessment year —
                  but it comes with a late fee of{" "}
                  <strong className="text-white">₹5,000–₹10,000</strong> and
                  interest on unpaid tax. Taxvio's CA-supervised team ensures
                  accurate filing, correct penalty calculation, and complete
                  compliance — protecting you from future notices and
                  additional penalties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File Belated ITR — ₹1,499 Onwards →
                  </Link>
                  
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Late Fee Calculation",
                    "✅ Interest Computation",
                    "✅ Penalty Mitigation",
                    "✅ E-Filing & Verification",
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
                  Key Facts
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["⚖️", "Governed by Section 139(4), IT Act"],
                    ["📅", "File by Dec 31 of assessment year"],
                    ["💰", "Late fee: ₹5,000–₹10,000"],
                    ["📈", "Interest @ 1% per month (Section 234A)"],
                    ["🚫", "No carry forward of losses allowed"],
                    ["⏱️", "Processing in 3–7 working days"],
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
              { number: "10,000+", label: "Belated ITRs Filed", icon: "📝" },
              { number: "₹1,499", label: "Starting Fee", icon: "💰" },
              { number: "Dec 31", label: "Last Date to File", icon: "📅" },
              { number: "PAN India", label: "Service Coverage", icon: "🗺️" },
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
              "✔ CA-Supervised Filing",
              "✔ Accurate Penalty Calculation",
              "✔ Interest Computation Included",
              "✔ Notice Response Support",
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
          {/* WHAT IS BELATED ITR */}
          <section id="what-is-belated-itr">
            <SectionLabel text="Understanding Belated Returns" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is a Belated Income Tax Return Under Section 139(4)?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A <strong>belated income tax return</strong> under{" "}
                  <strong>Section 139(4)</strong> of the Income Tax Act, 1961 is
                  a return filed after the statutory due date has passed. For
                  most individual taxpayers, the due date is{" "}
                  <strong>July 31st</strong> of the assessment year. For
                  taxpayers requiring tax audit (businesses, professionals with
                  turnover/receipts exceeding specified limits), the due date is{" "}
                  <strong>October 31st</strong>.
                </p>
                <p>
                  If you miss these deadlines, you can still file your return as
                  a belated return — but only until{" "}
                  <strong>December 31st of the assessment year</strong>. This
                  window provides a second chance to comply, but it comes at a
                  cost: a mandatory late fee under{" "}
                  <strong>Section 234F</strong> and interest on any unpaid tax
                  under <strong>Section 234A</strong>.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  While a belated return allows you to fulfill your tax
                  obligations and claim refunds (if any), it comes with{" "}
                  <strong>significant restrictions</strong>: you{" "}
                  <strong>cannot carry forward losses</strong> to subsequent
                  years (except house property loss), and certain deductions may
                  be disallowed. The return is otherwise treated as valid for
                  assessment purposes.
                </p>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  provides comprehensive belated ITR filing services — from
                  penalty calculation and interest computation to return
                  preparation, e-filing, and post-filing compliance support —
                  across Uttar Pradesh and pan-India. Our CA-supervised team
                  ensures you file correctly before the December 31st deadline.
                </p>
              </div>
            </div>
          </section>

          {/* DEADLINE & PENALTIES */}
          <section id="deadline-penalties">
            <SectionLabel text="Critical Information" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Deadline, Late Fee & Interest for Belated ITR
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Understanding the financial implications of late filing is
              essential. Here's a complete breakdown of deadlines, late fees, and
              interest charges.
            </p>

            {/* Deadline Table */}
            <div className="mb-10 overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Taxpayer Category", "Original Due Date", "Belated Return Deadline"].map(
                      (h) => (
                        <th key={h} className="px-5 py-4 text-left font-semibold">
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    [
                      "Individuals (Salary, House Property, Other Sources)",
                      "July 31 of AY",
                      "December 31 of AY",
                    ],
                    [
                      "Individuals with Capital Gains",
                      "July 31 of AY",
                      "December 31 of AY",
                    ],
                    [
                      "Business / Profession (No Audit Required)",
                      "August 31 of AY",
                      "December 31 of AY",
                    ],
                    [
                      "Business / Profession (Tax Audit Required)",
                      "October 31 of AY",
                      "December 31 of AY",
                    ],
                    [
                      "Companies (All)",
                      "October 31 of AY",
                      "December 31 of AY",
                    ],
                    [
                      "Partners in Firms (Individual Partners)",
                      "August 31 of AY",
                      "December 31 of AY",
                    ],
                  ].map(([category, original, belated], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-800">
                        {category}
                      </td>
                      <td className="px-5 py-4 text-gray-700">{original}</td>
                      <td className="px-5 py-4 font-bold text-[#00416a]">
                        {belated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Late Fee Section 234F */}
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10 mb-10">
              <h3 className="text-2xl font-bold text-red-700 mb-6">
                💰 Late Fee Under Section 234F
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-red-100">
                  <p className="font-bold text-red-800 mb-3">
                    If Total Income ≤ ₹5 Lakh
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Filed after July 31 but before Dec 31 (same year)</span>
                      <span className="font-bold text-red-600">₹1,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Filed between Jan 1 and Dec 31 (next year)</span>
                      <span className="font-bold text-red-600">₹1,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-red-100">
                  <p className="font-bold text-red-800 mb-3">
                    If Total Income &gt; ₹5 Lakh
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Filed after July 31 but before Dec 31 (same year)</span>
                      <span className="font-bold text-red-600">₹5,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Filed between Jan 1 and Dec 31 (next year)</span>
                      <span className="font-bold text-red-600">₹10,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-white border border-red-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-red-900 mb-1">
                  📌 Example:
                </p>
                <p className="text-sm text-gray-700">
                  For <strong>FY 2025-26 (AY 2026-27)</strong>: If your total
                  income is ₹8 lakh and you file on August 15, 2026, late fee is{" "}
                  <strong className="text-red-700">₹5,000</strong>. If you file
                  on January 20, 2027, late fee is{" "}
                  <strong className="text-red-700">₹10,000</strong>.
                </p>
              </div>
            </div>

            {/* Interest Section 234A */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                📈 Interest Under Section 234A
              </h3>
              <div className="space-y-5">
                <div className="bg-white rounded-2xl p-6 border border-blue-100">
                  <p className="font-bold text-blue-800 mb-2">Interest Rate</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Interest is charged at <strong>1% per month</strong> (or part
                    of month) on the amount of tax that should have been paid by
                    the original due date but was not paid.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-blue-100">
                  <p className="font-bold text-blue-800 mb-2">Period of Interest</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Interest is calculated from the day immediately following the
                    original due date (July 31 / October 31) to the date of actual
                    filing of the belated return.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-blue-100">
                  <p className="font-bold text-blue-800 mb-2">
                    Tax on Which Interest Is Charged
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Interest is levied on the tax determined under the return (i.e.,
                    total tax liability) minus advance tax paid and TDS/TCS
                    credits. If no tax is payable or you have excess TDS, no
                    interest is charged.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-1">
                      📌 Example:
                    </p>
                    <p className="text-sm text-gray-700">
                      Tax liability: ₹50,000 | TDS: ₹20,000 | Due date: July 31,
                      2024 | Filed: November 15, 2024 (3.5 months late) <br />
                      <strong>Interest:</strong> (₹50,000 - ₹20,000) × 1% × 4
                      months = <strong className="text-blue-700">₹1,200</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RESTRICTIONS */}
          <section id="restrictions" className="bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-12">
            <SectionLabel text="Important Limitations" />
            <h2 className="text-3xl font-bold text-amber-800 mb-4">
              Restrictions & Disadvantages of Filing Belated ITR
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              While a belated return allows you to comply and avoid prosecution,
              it comes with significant restrictions that can impact your tax
              planning for subsequent years.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "🚫",
                  title: "No Loss Carry Forward",
                  desc: "Business loss, capital loss, and losses under any head (except house property loss under Section 71B) cannot be carried forward to subsequent years if the return is filed belatedly.",
                },
                {
                  icon: "💸",
                  title: "Late Fee Payment",
                  desc: "Mandatory late fee of ₹1,000–₹10,000 under Section 234F must be paid along with tax before filing. This is non-refundable and non-adjustable.",
                },
                {
                  icon: "📈",
                  title: "Interest on Tax Due",
                  desc: "Interest at 1% per month under Section 234A on unpaid tax from the original due date to the filing date — significantly increasing effective tax liability.",
                },
                {
                  icon: "🏦",
                  title: "Refund Delays",
                  desc: "Belated returns are often subject to higher scrutiny and processing delays. Refunds (if any) may take longer compared to timely filed returns.",
                },
                {
                  icon: "🔍",
                  title: "Increased Scrutiny Risk",
                  desc: "Late filing flags your return for potential scrutiny. The assessing officer may issue notices seeking explanations for the delay and income verification.",
                },
                {
                  icon: "⚖️",
                  title: "Penalty Risk for Concealment",
                  desc: "If the delay is deemed an attempt to conceal income or evade tax, penalty under Section 270A (50%–200% of tax on under-reported income) can be levied.",
                },
                {
                  icon: "📋",
                  title: "No Revision for Certain Claims",
                  desc: "Some deductions and exemptions have specific filing requirements. Belated filing may disqualify you from claiming them, and you cannot revise a belated return to claim them.",
                },
                {
                  icon: "🔒",
                  title: "Impact on Credit & Visa",
                  desc: "ITR is required for loan applications, visa processing, and credit assessments. Belated filing may be viewed negatively, affecting approval timelines and creditworthiness.",
                },
                {
                  icon: "⏰",
                  title: "No Extension Beyond Dec 31",
                  desc: "The December 31st deadline is absolute. Missing it means you cannot file at all under Section 139(4), and you may face prosecution for non-filing.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-amber-100 rounded-xl p-5"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-bold text-amber-800 text-sm mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* WHO SHOULD FILE */}
          <section id="who-should-file">
            <SectionLabel text="Ideal For" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Should File a Belated ITR?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💼",
                  title: "Salaried Individuals",
                  desc: "Missed the July 31 deadline due to job change, relocation, or lack of awareness. Need ITR for loan application or visa processing.",
                },
                {
                  icon: "🏢",
                  title: "Business Owners",
                  desc: "Could not file on time due to delayed accounts finalization, auditor unavailability, or business cash flow issues.",
                },
                {
                  icon: "👨‍💼",
                  title: "Professionals & Freelancers",
                  desc: "Missed deadline due to client payment delays, GST compliance workload, or incorrect income estimation.",
                },
                {
                  icon: "🏠",
                  title: "Property Sellers",
                  desc: "Sold property during the FY and missed filing due to complex capital gains calculation or lack of tax advisor.",
                },
                {
                  icon: "📈",
                  title: "Investors (Stocks, MFs)",
                  desc: "Capital gains from stock or mutual fund transactions not filed on time due to brokerage statement delays or calculation complexity.",
                },
                {
                  icon: "👴",
                  title: "Senior Citizens",
                  desc: "Missed deadline due to health issues, lack of technical knowledge, or family support unavailability.",
                },
                {
                  icon: "🎓",
                  title: "First-Time Filers",
                  desc: "Started earning in the FY, unaware of tax filing requirements, and realized late that ITR is mandatory.",
                },
                {
                  icon: "🌍",
                  title: "NRIs",
                  desc: "Non-resident Indians with India-sourced income who missed deadline due to time zone differences or document access issues.",
                },
                {
                  icon: "🏦",
                  title: "Refund Claimants",
                  desc: "Have excess TDS or advance tax and want to claim refund even after missing the original deadline.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="Paperwork Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Filing Belated ITR
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              The document requirements are the same as for a timely filed return,
              but accuracy is critical to avoid further delays or notices.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory for All Belated Returns
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card copy",
                    "Aadhaar card copy",
                    "Form 26AS (Annual Tax Statement) from e-filing portal",
                    "AIS (Annual Information Statement) from e-filing portal",
                    "Form 16 (for salaried individuals) from employer(s)",
                    "Bank account statements for all accounts",
                    "Salary slips / salary certificate for the entire FY",
                    "Details of advance tax / self-assessment tax paid (if any)",
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

              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-blue-50 text-blue-700">
                  Additional Documents (Based on Income Type)
                </p>
                <ul className="space-y-3">
                  {[
                    "Investment proofs for Section 80C, 80D, 80G deductions",
                    "Home loan interest certificate (for housing loan deduction)",
                    "Rent receipts / HRA proof (if claiming HRA exemption)",
                    "Form 16A / TDS certificates for income other than salary",
                    "Capital gains computation (property sale, stock/MF sale)",
                    "P&L statement and balance sheet (for business/profession)",
                    "Tax audit report (if applicable — Form 3CB/3CD)",
                    "GST returns (for business income verification)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="our-process">
            <SectionLabel text="How We Work" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's 6-Step Belated ITR Filing Process
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured process ensures accurate penalty calculation, complete
              documentation, and timely e-filing — minimising your financial
              burden and compliance risk.
            </p>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Initial Consultation & Penalty Assessment",
                    desc: "We review your income sources, filing timeline, and tax payment history to calculate the exact late fee (Section 234F) and interest (Section 234A) payable. We provide you with a detailed penalty estimate before proceeding.",
                  },
                  {
                    step: "02",
                    title: "Document Collection & Verification",
                    desc: "We collect all required documents — Form 16, 26AS, AIS, investment proofs, bank statements, TDS certificates, and capital gains worksheets. Each document is verified for accuracy and completeness to prevent processing delays.",
                  },
                  {
                    step: "03",
                    title: "Return Preparation & Tax Computation",
                    desc: "We prepare the ITR in the applicable form (ITR-1/2/3/4), accurately reporting all income, claiming eligible deductions (subject to belated filing restrictions), and computing final tax liability including late fee and interest.",
                  },
                  {
                    step: "04",
                    title: "Tax & Penalty Payment",
                    desc: "We help you pay the total tax due (if any) plus late fee via challan 280 on the e-payment portal. We ensure payment is credited to your PAN before filing the return — as unpaid late fee will cause return rejection.",
                  },
                  {
                    step: "05",
                    title: "E-Filing & Verification",
                    desc: "The belated return is filed on the Income Tax e-filing portal with all required schedules and attachments. We download the acknowledgment and guide you through verification via Aadhaar OTP, EVC, or physical ITR-V submission.",
                  },
                  {
                    step: "06",
                    title: "Processing Tracking & Notice Support",
                    desc: "We monitor processing status on the CPC portal and notify you when processed. If the department raises any notice (defective return, income mismatch, assessment), we provide complete response and representation support.",
                  },
                ].map((step, i) => (
                  <div
                    key={step.step}
                    className="relative md:pl-16 flex gap-6 items-start"
                  >
                    <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm flex-shrink-0 z-10 border-4 border-white shadow-md">
                      {i + 1}
                    </div>
                    <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1">
                      <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">
                        Step {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FEE CALCULATOR */}
          <FeeCalculator />

          {/* BELATED VS REVISED */}
          <section id="belated-vs-revised">
            <SectionLabel text="Key Difference" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Belated Return vs Revised Return — What's the Difference?
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Many taxpayers confuse belated returns with revised returns. Here's a
              clear comparison to help you understand which applies to your
              situation.
            </p>
            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {["Aspect", "Belated Return (Section 139(4))", "Revised Return (Section 139(5))"].map(
                      (h) => (
                        <th key={h} className="px-5 py-4 text-left font-semibold">
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    [
                      "When Filed",
                      "When no return was filed by the original due date",
                      "When an error/omission is found in an already filed return",
                    ],
                    [
                      "Original Return Needed",
                      "No — this IS the first return being filed",
                      "Yes — you must have filed an original return first",
                    ],
                    [
                      "Deadline",
                      "December 31 of the assessment year",
                      "December 31 of AY or before assessment completion",
                    ],
                    [
                      "Late Fee (Section 234F)",
                      "Yes — ₹1,000 to ₹10,000",
                      "No — late fee is only for belated returns",
                    ],
                    [
                      "Interest (Section 234A)",
                      "Yes — 1% per month on unpaid tax",
                      "Yes — if additional tax is payable after revision",
                    ],
                    [
                      "Loss Carry Forward",
                      "Not allowed (except house property loss)",
                      "Allowed — if original return was filed on time",
                    ],
                    [
                      "Number of Times",
                      "Only once (first filing after due date)",
                      "Multiple times — can revise repeatedly before deadline",
                    ],
                    [
                      "Purpose",
                      "First-time compliance after missing deadline",
                      "Correcting errors in an already filed return",
                    ],
                  ].map(([aspect, belated, revised], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-bold text-gray-800">
                        {aspect}
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-xs">
                        {belated}
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-xs">
                        {revised}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Taxpayers Who Filed Belated ITR
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Suresh Agarwal",
                  location: "Khatauli",
                  text: "I missed the July deadline due to family emergency. Taxvio calculated my penalty, filed my belated ITR within 2 days, and I got my refund in 3 weeks. Very efficient service.",
                },
                {
                  name: "Neha Gupta",
                  location: "Muzaffarnagar",
                  text: "Forgot to file ITR for FY 2022-23 completely. Taxvio helped me file a belated return, paid the late fee, and avoided any notice. Great support throughout.",
                },
                {
                  name: "Vikram Singh",
                  location: "Meerut",
                  text: "My business audit was delayed, and I missed the October deadline. Taxvio's team filed my belated ITR-3 with accurate interest calculation. Highly professional.",
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
              Belated ITR Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides belated ITR filing services for individuals, businesses, and
              professionals across <strong>Noida</strong>,{" "}
              <strong>Delhi NCR</strong>, <strong>Meerut</strong>,{" "}
              <strong>Ghaziabad</strong>, <strong>Mumbai</strong>, and pan-India
              online.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Khatauli", "Muzaffarnagar", "Noida", "Delhi NCR", "Meerut", "Mumbai"].map(
                (city) => (
                  <div
                    key={city}
                    className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default"
                  >
                    📍 {city}
                  </div>
                )
              )}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* RELATED SERVICES */}
          <section id="related-services">
            <SectionLabel text="Explore More" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Related Income Tax Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Revised ITR Filing",
                  icon: "🔄",
                  link: "/serviceslist/income-tax/revised-itr",
                  desc: "Correct errors in already filed returns.",
                },
                {
                  title: "ITR Filing — Salary",
                  icon: "💼",
                  link: "/serviceslist/income-tax/itr-salary",
                  desc: "File timely ITR for salaried individuals.",
                },
                {
                  title: "Income Tax Notice",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Response to scrutiny and demand notices.",
                },
                {
                  title: "Tax Planning",
                  icon: "📊",
                  link: "/serviceslist/income-tax/tax-planning",
                  desc: "Plan ahead to avoid late filing next year.",
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
                    File Before It's Too Late
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File Belated ITR Before December 31st
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Missed the deadline? Don't wait — file your belated ITR now to
                    avoid prosecution, claim your refund, and stay compliant.
                    Taxvio's CA-supervised team handles everything — penalty
                    calculation, interest computation, and e-filing. Starting
                    ₹1,499.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File Belated ITR — ₹1,499 Onwards
                  </Link>
                  
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

function FeeCalculator() {
  const [selected, setSelected] = useState<string>("");
  const [fee, setFee] = useState<number | null>(null);
  const [desc, setDesc] = useState("");

  const services = [
    {
      value: "itr1",
      label: "ITR-1 Belated (Salary Income)",
      fee: 1499,
      desc: "Belated filing for salaried individuals with simple income structure",
    },
    {
      value: "itr2",
      label: "ITR-2 Belated (Capital Gains / Multiple Sources)",
      fee: 2499,
      desc: "Belated filing for capital gains, house property, or multiple income sources",
    },
    {
      value: "itr3",
      label: "ITR-3 Belated (Business / Profession)",
      fee: 3999,
      desc: "Belated filing for business income, professional income, or partnership",
    },
    {
      value: "itr4",
      label: "ITR-4 Belated (Presumptive Taxation)",
      fee: 2999,
      desc: "Belated filing for businesses under presumptive taxation (44AD/44ADA/44AE)",
    },
    {
      value: "penalty_calc",
      label: "Penalty & Interest Calculation Only",
      fee: 499,
      desc: "Standalone service for calculating exact late fee and interest payable",
    },
    {
      value: "urgent",
      label: "Urgent Belated Filing (24–48 Hours)",
      fee: 5999,
      desc: "Express processing for deadline-critical situations — filed within 1–2 days",
    },
    {
      value: "multiple_years",
      label: "Belated ITR for Multiple Years",
      fee: 7999,
      desc: "Filing belated returns for 2+ assessment years together (per year pricing)",
    },
    {
      value: "nri",
      label: "NRI Belated ITR Filing",
      fee: 4999,
      desc: "Belated filing for non-residents with India-sourced income",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Belated ITR Filing Fee
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl">
        Select the type of return you need to file for an instant professional fee
        estimate.
      </p>

      <div className="bg-gray-50 border rounded-3xl p-8">
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {services.map((s) => (
            <button
              key={s.value}
              onClick={() => {
                setSelected(s.value);
                setFee(s.fee);
                setDesc(s.desc);
              }}
              className={`text-left p-4 rounded-xl border transition text-sm ${
                selected === s.value
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"
              }`}
            >
              <span className="font-semibold block mb-1">{s.label}</span>
              <span
                className={`text-xs ${
                  selected === s.value ? "text-gray-200" : "text-gray-500"
                }`}
              >
                ₹{s.fee.toLocaleString("en-IN")} onwards
              </span>
            </button>
          ))}
        </div>

        {fee !== null ? (
          <div className="border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Professional Fee:{" "}
              <span className="text-3xl font-extrabold">
                ₹{fee.toLocaleString("en-IN")}
              </span>{" "}
              onwards
            </p>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-amber-900 mb-2">
                💰 Additional Government Charges (Paid Separately):
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>
                  • <strong>Late Fee (Section 234F):</strong> ₹1,000–₹10,000
                  (based on income & filing month)
                </li>
                <li>
                  • <strong>Interest (Section 234A):</strong> 1% per month on
                  unpaid tax from due date
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              * Professional fees above cover return preparation, penalty
              calculation, interest computation, tax payment assistance & e-filing.
              GST applicable.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition"
            >
              Get Started — Contact Us →
            </Link>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">
            Select a service above to see an estimated fee.
          </p>
        )}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the last date to file a belated ITR for FY 2025-26?",
      a: "For FY 2025-26 (AY 2026-27), the last date to file a belated ITR under Section 139(4) is December 31, 2025. Filing after this date is not permitted, and you may face prosecution for non-filing under Section 276CC.",
    },
    {
      q: "Can I carry forward losses if I file a belated return?",
      a: "No. If you file a belated return, you cannot carry forward business losses, capital losses, or losses under any head of income (except house property loss under Section 71B) to subsequent assessment years. This is a significant disadvantage and a strong reason to file on time.",
    },
    {
      q: "Will I get a refund if I file a belated ITR?",
      a: "Yes, you can claim a refund even if you file a belated return, provided you have excess TDS or advance tax. However, refund processing may be slower, and the department may issue notices for verification. No interest is paid on refunds for belated returns.",
    },
    {
      q: "Can I file a belated return if I was not required to file originally?",
      a: "If your total income for the FY was below the basic exemption limit and you were not otherwise required to file (no foreign assets, directorship, etc.), you are not mandated to file a belated return. However, filing is beneficial if you want to claim TDS refund or need ITR for loan/visa purposes.",
    },
    {
      q: "What happens if I don't file a belated return before December 31?",
      a: "If you miss the December 31 deadline, you cannot file a return under Section 139(4). The only option is an updated return under Section 139(8A) (introduced in Budget 2022), which can be filed up to 24 months from the end of the AY but comes with additional tax and cannot reduce tax liability. Additionally, you may face prosecution under Section 276CC for wilful non-filing.",
    },
    {
      q: "Can I revise a belated return?",
      a: "Yes, a belated return can be revised under Section 139(5) to correct errors or omissions, subject to the same deadline — December 31 of the assessment year or before completion of assessment, whichever is earlier. Multiple revisions are allowed.",
    },
    {
      q: "Is penalty and interest automatically calculated when filing belated ITR?",
      a: "The late fee under Section 234F is calculated automatically by the e-filing portal and must be paid before filing. Interest under Section 234A is computed by the CPC after processing and is demanded separately. However, taxpayers should self-calculate and pay anticipated interest to avoid notices.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Belated ITR Filing
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