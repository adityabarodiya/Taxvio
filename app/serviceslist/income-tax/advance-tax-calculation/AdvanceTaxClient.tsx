// app/serviceslist/income-tax/advance-tax-calculation/AdvanceTaxClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Advance Tax Calculation and Payment Services",
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
    "Professional advance tax calculation, installment planning, challan generation, payment assistance and due date reminders for self-employed individuals, business owners and professionals to avoid Section 234B and 234C interest penalties.",
  serviceType: "Advance Tax Calculation and Payment Support",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "999",
      maxPrice: "4999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is advance tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Advance tax is the income tax paid during the financial year in installments instead of a lump sum at the end. It is applicable when tax liability exceeds ₹10,000 in a financial year. It must be paid in four installments by specified due dates.",
      },
    },
    {
      "@type": "Question",
      name: "What are the advance tax due dates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The advance tax due dates are: 15% by 15 June, 45% by 15 September, 75% by 15 December, and 100% by 15 March of the financial year. Missing these deadlines attracts interest under Section 234B and 234C.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for not paying advance tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failure to pay advance tax attracts interest under Section 234B (1% per month on shortfall from the due date until filing date) and Section 234C (1% per month on installment-wise shortfall). These interest charges are calculated automatically during ITR filing.",
      },
    },
    {
      "@type": "Question",
      name: "Who is required to pay advance tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Advance tax is required for self-employed individuals, business owners, professionals, freelancers, and anyone whose tax liability exceeds ₹10,000 after TDS. Salaried individuals whose employer deducts adequate TDS are generally exempt.",
      },
    },
  ],
};

export default function AdvanceTaxClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <InquiryForm />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* URGENCY BANNER */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⏰ Advance Tax Due: Next Deadline 15 March — Pay On Time to Avoid
          Section 234B & 234C Interest Penalties (1% Per Month)
        </div>

        {/* HERO */}
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
              <span className="text-white">Advance Tax Calculation</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  💰 Advance Tax Services
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Advance Tax
                  <br />
                  <span className="text-[#7ecbf0]">Calculation &</span>
                  <br />
                  Payment
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Pay advance tax on time and avoid costly{" "}
                  <strong className="text-white">interest penalties</strong>{" "}
                  under Section 234B and 234C (1% per month). Taxvio provides
                  professional tax liability estimation, quarterly installment
                  calculation, challan generation, payment guidance and{" "}
                  <strong className="text-white">automated due date
                  reminders</strong> for self-employed, businesses and
                  professionals across India.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Calculate Advance Tax — ₹999 →
                  </Link>

                  
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Tax Liability Estimation",
                    "✅ Installment Calculation",
                    "✅ Challan Generation",
                    "✅ Due Date Reminders",
                  ].map((text) => (
                    <span
                      key={text}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Key Facts
                </p>

                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["⚖️", "Applicable if tax > ₹10,000"],
                    ["📅", "4 installments per year"],
                    ["💰", "1% monthly interest on default"],
                    ["🔢", "15%, 45%, 75%, 100% payment"],
                    ["📋", "Challan 280 for payment"],
                    ["💼", "Starting ₹999"],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-3">
                      <span>{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                number: "15,000+",
                label: "Advance Tax Calculations",
                icon: "📊",
              },
              { number: "₹999", label: "Starting Fee", icon: "💰" },
              {
                number: "100%",
                label: "Penalty Avoidance",
                icon: "✅",
              },
              { number: "PAN India", label: "Service Coverage", icon: "🗺️" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {item.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BADGES */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ Accurate Liability Calculation",
              "✔ Quarterly Reminders",
              "✔ Challan 280 Assistance",
              "✔ Interest Penalty Avoidance",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* MAIN CONTENT */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* WHAT IS ADVANCE TAX */}
          <section id="what-is-advance-tax">
            <SectionLabel text="Understanding Advance Tax" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Advance Tax and Why Is It Mandatory?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Advance tax</strong> is income tax paid during the
                  financial year in quarterly installments instead of a lump sum
                  payment at the year-end. It is based on the principle of{" "}
                  <strong>"pay as you earn"</strong> and applies to all taxpayers
                  whose estimated tax liability exceeds <strong>₹10,000</strong>{" "}
                  in a financial year after accounting for TDS.
                </p>

                <p>
                  The Income Tax Act mandates advance tax payment in four
                  installments on or before <strong>15 June, 15 September, 15
                  December and 15 March</strong> of the financial year. Each
                  installment must be a specified percentage of the total
                  estimated tax liability.
                </p>

                <p>
                  Failure to pay advance tax on time attracts interest penalties
                  under <strong>Section 234B</strong> (for overall shortfall) and{" "}
                  <strong>Section 234C</strong> (for installment-wise shortfall)
                  at <strong>1% per month</strong> or part thereof.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Advance tax is applicable to self-employed individuals, business
                  owners, professionals (doctors, lawyers, consultants),
                  freelancers, investors with capital gains, and anyone with
                  income not subject to adequate TDS.
                </p>

                <p>
                  <strong>Salaried individuals</strong> whose employer deducts TDS
                  adequately to cover their tax liability are generally not
                  required to pay advance tax. However, if they have additional
                  income from house property, capital gains, or other sources,
                  advance tax may apply.
                </p>

                <p>
                  Taxvio helps individuals and businesses accurately estimate tax
                  liability, calculate installments, generate Challan 280, make
                  payments and track due dates across India — Khatauli,
                  Muzaffarnagar, Meerut, Noida, Delhi NCR and Mumbai.
                </p>
              </div>
            </div>
          </section>

          {/* DUE DATES & INSTALLMENTS */}
          <section id="due-dates">
            <SectionLabel text="Critical Deadlines" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Advance Tax Due Dates and Installment Percentages
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              Advance tax must be paid in four installments during the financial
              year. Here are the due dates and cumulative percentages of total tax
              liability to be paid by each date.
            </p>

            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {[
                      "Installment",
                      "Due Date",
                      "Cumulative %",
                      "Installment %",
                      "Example (₹1,00,000 tax)",
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="px-5 py-4 text-left font-semibold"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {[
                    [
                      "1st Installment",
                      "On or before 15 June",
                      "15%",
                      "15%",
                      "₹15,000",
                    ],
                    [
                      "2nd Installment",
                      "On or before 15 September",
                      "45%",
                      "30%",
                      "₹30,000",
                    ],
                    [
                      "3rd Installment",
                      "On or before 15 December",
                      "75%",
                      "30%",
                      "₹30,000",
                    ],
                    [
                      "4th Installment",
                      "On or before 15 March",
                      "100%",
                      "25%",
                      "₹25,000",
                    ],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-5 py-4 font-bold text-gray-800">
                        {row[0]}
                      </td>
                      <td className="px-5 py-4 text-gray-700">{row[1]}</td>
                      <td className="px-5 py-4 font-bold text-[#00416a]">
                        {row[2]}
                      </td>
                      <td className="px-5 py-4 text-gray-700">{row[3]}</td>
                      <td className="px-5 py-4 text-gray-700">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Important Note:</strong> The percentages shown are
                cumulative. For example, by 15 September, you must have paid 45%
                of your total tax liability (15% in June + 30% in September). If
                15 June, 15 September, 15 December or 15 March falls on a holiday,
                the due date is the next working day.
              </p>
            </div>
          </section>

          {/* WHO MUST PAY */}
          <section id="who-must-pay">
            <SectionLabel text="Applicability" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Is Required to Pay Advance Tax?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💼",
                  title: "Self-Employed & Freelancers",
                  desc: "Consultants, freelancers, contractors and gig workers whose income is not subject to TDS or where TDS is insufficient.",
                },
                {
                  icon: "🏢",
                  title: "Business Owners",
                  desc: "Proprietorships, partnerships, LLPs and companies with business income and estimated tax liability exceeding ₹10,000.",
                },
                {
                  icon: "👨‍⚕️",
                  title: "Professionals (Doctors, Lawyers, CAs)",
                  desc: "Professionals receiving fees where clients may not deduct TDS or TDS is lower than actual tax liability.",
                },
                {
                  icon: "📈",
                  title: "Investors with Capital Gains",
                  desc: "Individuals earning capital gains from sale of shares, mutual funds, property or other assets during the financial year.",
                },
                {
                  icon: "🏠",
                  title: "Rental Income Recipients",
                  desc: "Individuals earning rental income from house property where TDS is not deducted or is insufficient to cover tax liability.",
                },
                {
                  icon: "💰",
                  title: "Salaried with Additional Income",
                  desc: "Salaried individuals with other income sources (rent, interest, capital gains) where employer TDS does not cover total tax liability.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Exemption:</strong> Senior citizens (age 60 years or
                above) who do not have income from business or profession are
                exempt from paying advance tax. However, they must pay any tax due
                before filing their ITR.
              </p>
            </div>
          </section>

          {/* INTEREST PENALTIES */}
          <section
            id="interest-penalties"
            className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="Penalty Structure" />

            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Interest Penalties for Late or Short Payment of Advance Tax
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              Missing advance tax deadlines or paying less than required attracts
              automatic interest charges under Section 234B and Section 234C. These
              are calculated during ITR filing and added to your tax liability.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 text-red-700 font-bold text-sm px-3 py-1 rounded-full">
                    Section 234B
                  </div>
                </div>

                <h3 className="text-xl font-bold text-red-800 mb-3">
                  Interest on Default in Payment of Advance Tax
                </h3>

                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>Applicable When:</strong> Total advance tax paid
                    during the year is less than 90% of the assessed tax.
                  </p>

                  <p>
                    <strong>Interest Rate:</strong> 1% per month or part of month.
                  </p>

                  <p>
                    <strong>Period:</strong> From 1st April of the assessment year
                    (next FY) till the date of determination of income (ITR filing
                    date).
                  </p>

                  <p>
                    <strong>Calculation Base:</strong> Shortfall amount (assessed
                    tax - advance tax paid).
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-red-900 mb-2">
                      📌 Example:
                    </p>
                    <p className="text-xs">
                      Total tax liability: ₹1,00,000 | Advance tax paid:
                      ₹70,000 | ITR filed: 31 July
                      <br />
                      <strong>Interest 234B:</strong> (₹1,00,000 - ₹70,000) ×
                      1% × 4 months (Apr-Jul) ={" "}
                      <strong className="text-red-700">₹1,200</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 text-red-700 font-bold text-sm px-3 py-1 rounded-full">
                    Section 234C
                  </div>
                </div>

                <h3 className="text-xl font-bold text-red-800 mb-3">
                  Interest for Deferment of Advance Tax Installments
                </h3>

                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>Applicable When:</strong> Advance tax paid by any
                    installment due date is less than the required percentage of
                    assessed tax.
                  </p>

                  <p>
                    <strong>Interest Rate:</strong> 1% per month or part of month.
                  </p>

                  <p>
                    <strong>Period:</strong> Calculated installment-wise from each
                    due date till the next installment date or 31st March,
                    whichever is earlier.
                  </p>

                  <p>
                    <strong>Calculation Base:</strong> Installment-wise shortfall.
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-red-900 mb-2">
                      📌 Example:
                    </p>
                    <p className="text-xs">
                      Total tax: ₹1,00,000 | Required by 15 Sep: ₹45,000 | Paid:
                      ₹30,000
                      <br />
                      <strong>Shortfall:</strong> ₹15,000
                      <br />
                      <strong>Interest 234C:</strong> ₹15,000 × 1% × 3 months
                      (Sep-Dec) ={" "}
                      <strong className="text-red-700">₹450</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white border border-red-200 rounded-xl p-5">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Total Interest:</strong> Section 234B and 234C can apply
                simultaneously. The total interest burden can significantly
                increase if advance tax is not paid or is paid late. Proper
                planning and timely payment are essential.
              </p>
            </div>
          </section>

          {/* HOW TO CALCULATE */}
          <section id="how-to-calculate">
            <SectionLabel text="Calculation Method" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Calculate Advance Tax Liability
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              Advance tax calculation involves estimating your total income,
              computing tax liability, deducting TDS and dividing the balance into
              installments. Here's the step-by-step process.
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <ol className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Estimate Total Income for the Financial Year",
                    desc: "Sum up all sources — salary (if not fully covered by TDS), business income, professional fees, capital gains, house property income, interest income and other sources. Use previous year's ITR, current year projections, and actual receipts till date.",
                  },
                  {
                    step: "2",
                    title: "Calculate Gross Total Income",
                    desc: "Add all income heads. Deduct losses (if any) under the same head or from other heads as per Income Tax Act provisions (e.g., house property loss from other income).",
                  },
                  {
                    step: "3",
                    title: "Claim Deductions Under Chapter VI-A",
                    desc: "Deduct eligible deductions — Section 80C (PPF, ELSS, LIC, tuition fees), 80D (health insurance), 80G (donations), NPS (80CCD(1B)), home loan interest under 24(b), standard deduction (for salary) and other applicable deductions.",
                  },
                  {
                    step: "4",
                    title: "Compute Taxable Income",
                    desc: "Gross Total Income - Total Deductions = Taxable Income. Round off to nearest ₹10 as per Income Tax rounding rules.",
                  },
                  {
                    step: "5",
                    title: "Apply Tax Slabs and Calculate Tax",
                    desc: "Apply the applicable income tax slab rates (old regime or new regime) to taxable income. Add surcharge (if applicable) and Health & Education Cess (4% on tax + surcharge).",
                  },
                  {
                    step: "6",
                    title: "Deduct TDS and Other Tax Credits",
                    desc: "Subtract TDS already deducted by employers/clients, TCS collected, and any relief under Section 89 or 90/91 (foreign tax credit). The balance is your advance tax liability.",
                  },
                  {
                    step: "7",
                    title: "Divide Into Installments",
                    desc: "If advance tax liability exceeds ₹10,000, divide as per the installment schedule: 15% by 15 June, 30% by 15 Sep, 30% by 15 Dec, 25% by 15 March (cumulative: 15%, 45%, 75%, 100%).",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="bg-[#00416a] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-[#00416a] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Pro Tip:</strong> Advance tax is based on estimated
                income. If your income increases or decreases during the year, you
                can adjust subsequent installments accordingly. However, ensure
                total payments meet the 90% threshold by March 15 to avoid Section
                234B interest.
              </p>
            </div>
          </section>

          {/* HOW TO PAY */}
          <section id="how-to-pay">
            <SectionLabel text="Payment Process" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Pay Advance Tax Online
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              Advance tax is paid online through the Income Tax e-payment portal
              using Challan 280. Here's the step-by-step process.
            </p>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-cyan-800 mb-6">
                Step-by-Step Payment Guide
              </h3>

              <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
                <li>
                  Visit the Income Tax e-payment portal:{" "}
                  <strong className="text-cyan-700">
                    https://onlineservices.tin.egov-nsdl.com/etaxnew/tdsnontds.jsp
                  </strong>
                </li>

                <li>
                  Select <strong>Challan 280</strong> (Income Tax on Companies /
                  Income Tax Other Than Companies).
                </li>

                <li>
                  Select <strong>Tax Applicable:</strong> (0021) Income Tax (Other
                  than Companies).
                </li>

                <li>
                  Select <strong>Type of Payment:</strong> (100) Advance Tax.
                </li>

                <li>
                  Enter your <strong>PAN</strong>, assessment year, address,
                  email and mobile number.
                </li>

                <li>
                  Enter the <strong>amount</strong> you want to pay (installment
                  amount).
                </li>

                <li>
                  Select <strong>Mode of Payment:</strong> Net Banking / Debit
                  Card / NEFT/RTGS.
                </li>

                <li>
                  Click <strong>Proceed</strong> and complete payment through your
                  bank.
                </li>

                <li>
                  After successful payment, download the{" "}
                  <strong>challan counterfoil</strong> showing BSR code, challan
                  serial number, date and amount.
                </li>

                <li>
                  Verify payment reflection in{" "}
                  <strong>Form 26AS / AIS</strong> within 7–10 days.
                </li>
              </ol>

              <div className="mt-6 bg-white border border-cyan-200 rounded-xl p-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Important:</strong> Keep the challan counterfoil safe.
                  You will need the BSR code and serial number while filing ITR to
                  claim credit for advance tax paid. If payment does not reflect in
                  Form 26AS, you can manually enter challan details in your ITR.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="What You Need" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Advance Tax Calculation
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Tax Liability Calculation
                </p>

                <ul className="space-y-3">
                  {[
                    "PAN card",
                    "Previous year ITR acknowledgement",
                    "Salary slips / salary certificate (if applicable)",
                    "Business income and expense records",
                    "Professional receipts and fee details",
                    "Capital gains computation (property / stock sale)",
                    "House property rent receipts or rental agreement",
                    "Interest certificates (FD, savings account, bonds)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-[#00416a] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-blue-50 text-blue-700">
                  For Deduction Claims & Installment Planning
                </p>

                <ul className="space-y-3">
                  {[
                    "Investment proofs (PPF, ELSS, LIC, NSC) for Section 80C",
                    "Health insurance premium receipts for Section 80D",
                    "Home loan interest certificate for Section 24(b)",
                    "Donation receipts for Section 80G",
                    "NPS contribution statements for Section 80CCD(1B)",
                    "Form 16 / 16A (TDS certificates from employers/clients)",
                    "Estimated income and expense projections for current FY",
                    "Bank account details for challan payment",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-blue-600 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* OUR PROCESS */}
          <section id="our-process">
            <SectionLabel text="How We Help" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's Advance Tax Calculation Process
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured approach ensures accurate liability calculation,
              optimal installment planning and timely payment reminders to avoid
              interest penalties.
            </p>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Income & Document Review",
                    desc: "We collect and review your income documents, previous year ITR, salary details, business records, capital gains, rental income and investment proofs.",
                  },
                  {
                    step: "02",
                    title: "Tax Liability Estimation",
                    desc: "We estimate your total income for the current FY, apply applicable deductions (80C, 80D, etc.), compute taxable income and calculate tax using old or new regime (whichever is beneficial).",
                  },
                  {
                    step: "03",
                    title: "TDS Adjustment & Net Liability",
                    desc: "We deduct TDS already paid (from Form 16/16A and estimated future TDS) to arrive at your net advance tax liability.",
                  },
                  {
                    step: "04",
                    title: "Installment Calculation",
                    desc: "If liability exceeds ₹10,000, we calculate the exact amount to be paid in each installment (15%, 45%, 75%, 100%) and provide you with a payment schedule.",
                  },
                  {
                    step: "05",
                    title: "Challan Generation & Payment Assistance",
                    desc: "We prepare Challan 280 with all required details and guide you through the online payment process. We can also make payments on your behalf with authorization.",
                  },
                  {
                    step: "06",
                    title: "Payment Verification & Due Date Reminders",
                    desc: "We verify payment reflection in Form 26AS/AIS and maintain your challan records. We send automated reminders before each installment due date.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="relative md:pl-16 flex gap-6 items-start"
                  >
                    <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm z-10 border-4 border-white shadow-md">
                      {index + 1}
                    </div>

                    <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1">
                      <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">
                        Step {item.step}
                      </span>
                      <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FEE CALCULATOR */}
          <FeeCalculator />

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Our Clients
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Kumar",
                  location: "Khatauli",
                  text: "I run a small business and was confused about advance tax. Taxvio calculated my liability, sent me reminders for all 4 installments, and helped me avoid penalties. Very professional service.",
                },
                {
                  name: "Dr. Priya Sharma",
                  location: "Muzaffarnagar",
                  text: "As a doctor with clinic income, I was paying hefty interest penalties every year. Taxvio helped me plan advance tax properly and saved me ₹25,000 in interest charges this year.",
                },
                {
                  name: "Amit Verma",
                  location: "Noida",
                  text: "Sold property and had huge capital gains. Taxvio calculated my advance tax accurately, helped me pay in installments, and ensured I had no interest burden during ITR filing.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">
                    "{item.text}"
                  </p>

                  <p className="font-bold text-[#00416a]">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Our Reach" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Advance Tax Calculation Services Across India
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, Uttar
              Pradesh</strong> and provides advance tax calculation, installment
              planning, challan generation and payment assistance to self-employed
              individuals, businesses and professionals in{" "}
              <strong>Meerut</strong>, <strong>Noida</strong>,{" "}
              <strong>Delhi NCR</strong>, <strong>Ghaziabad</strong>,{" "}
              <strong>Mumbai</strong> and across India through online support.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Meerut",
                "Noida",
                "Delhi NCR",
                "Mumbai",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition"
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
              Related Income Tax Services
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "ITR Filing — Business",
                  icon: "🏢",
                  link: "/serviceslist/income-tax/itr-business",
                  desc: "Income tax return filing for business and professionals.",
                },
                {
                  title: "Tax Planning",
                  icon: "📊",
                  link: "/serviceslist/income-tax/tax-planning",
                  desc: "Strategic planning to minimize tax liability.",
                },
                {
                  title: "Form 26AS Analysis",
                  icon: "📋",
                  link: "/serviceslist/income-tax/form-26as",
                  desc: "Verify tax credits and TDS verification.",
                },
                {
                  title: "Income Tax Notice",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Response to tax department notices and scrutiny.",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
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
                    Avoid Interest Penalties
                  </p>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Calculate & Pay Advance Tax On Time
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't lose money to avoidable interest penalties. Taxvio
                    provides accurate advance tax calculation, installment
                    planning, challan generation and automated reminders. Save
                    thousands in Section 234B and 234C interest. Starting ₹999.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Calculate Now — ₹999
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

/* ─────────────────────────────────────────────
   FEE CALCULATOR
───────────────────────────────────────────── */

function FeeCalculator() {
  const [selected, setSelected] = useState("");
  const [fee, setFee] = useState<number | null>(null);
  const [description, setDescription] = useState("");

  const services = [
    {
      value: "basic-calculation",
      label: "Basic Advance Tax Calculation",
      fee: 999,
      description:
        "Tax liability estimation and installment calculation for simple income sources.",
    },
    {
      value: "comprehensive",
      label: "Comprehensive Tax Planning",
      fee: 1999,
      description:
        "Detailed calculation with deduction optimization, installment planning and payment assistance.",
    },
    {
      value: "business-professional",
      label: "Business / Professional Income",
      fee: 2999,
      description:
        "Advance tax calculation for business owners and professionals with multiple income sources.",
    },
    {
      value: "capital-gains",
      label: "Capital Gains Advance Tax",
      fee: 1499,
      description:
        "Calculation for property sale, stock sale or mutual fund capital gains.",
    },
    {
      value: "payment-assistance",
      label: "Challan Generation & Payment Support",
      fee: 499,
      description:
        "Challan 280 preparation and online payment guidance (per installment).",
    },
    {
      value: "annual-package",
      label: "Annual Advance Tax Package",
      fee: 4999,
      description:
        "Complete service — calculation, all 4 installments, reminders, payment assistance and ITR filing support.",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Advance Tax Service Fee
      </h2>

      <p className="text-gray-600 mb-8 max-w-xl">
        Select the service you need for an estimated professional fee.
      </p>

      <div className="bg-gray-50 border rounded-3xl p-8">
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {services.map((service) => (
            <button
              key={service.value}
              onClick={() => {
                setSelected(service.value);
                setFee(service.fee);
                setDescription(service.description);
              }}
              className={`text-left p-4 rounded-xl border transition text-sm ${
                selected === service.value
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"
              }`}
            >
              <span className="font-semibold block mb-1">
                {service.label}
              </span>
              <span
                className={`text-xs ${
                  selected === service.value
                    ? "text-gray-200"
                    : "text-gray-500"
                }`}
              >
                ₹{service.fee.toLocaleString("en-IN")} onwards
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

            <p className="text-sm text-gray-500 mt-1">{description}</p>

            <p className="text-xs text-gray-400 mt-3">
              * Fees depend on income complexity, number of sources, deduction
              optimization and payment assistance requirements. No government fees
              for advance tax calculation. GST applicable.
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

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is advance tax and who needs to pay it?",
      a: "Advance tax is income tax paid during the financial year in quarterly installments. It is required for anyone whose tax liability exceeds ₹10,000 after TDS. This includes self-employed, business owners, professionals, freelancers, and salaried individuals with additional income (capital gains, rental income, etc.).",
    },
    {
      q: "What are the advance tax due dates for FY 2024-25?",
      a: "The advance tax due dates are: 15% by 15 June 2024, 45% cumulative by 15 September 2024, 75% cumulative by 15 December 2024, and 100% by 15 March 2025. These dates apply every financial year.",
    },
    {
      q: "What happens if I don't pay advance tax?",
      a: "Failure to pay advance tax attracts interest under Section 234B (1% per month on overall shortfall from 1st April of AY till ITR filing) and Section 234C (1% per month on installment-wise shortfall). This can add thousands of rupees to your tax liability.",
    },
    {
      q: "Can I pay advance tax in a lump sum instead of installments?",
      a: "Yes, you can pay the entire advance tax in one installment. However, if you pay late (e.g., paying 100% in March instead of following the installment schedule), you will still attract Section 234C interest for deferment of installments.",
    },
    {
      q: "How do I pay advance tax online?",
      a: "Advance tax is paid through the Income Tax e-payment portal using Challan 280. Select 'Advance Tax' as payment type, enter your PAN, assessment year and amount, choose net banking/debit card, complete payment and download the challan counterfoil.",
    },
    {
      q: "Can salaried employees pay advance tax?",
      a: "Salaried employees whose employer deducts adequate TDS are generally not required to pay advance tax. However, if they have additional income (rental, capital gains, interest) where tax liability after TDS exceeds ₹10,000, advance tax is required.",
    },
    {
      q: "Is advance tax calculated on gross income or net income?",
      a: "Advance tax is calculated on taxable income, which is gross total income minus all eligible deductions (80C, 80D, 80G, standard deduction, etc.). Tax slabs are then applied to taxable income, and TDS is deducted to arrive at advance tax liability.",
    },
    {
      q: "What if I overpay advance tax?",
      a: "If you pay more advance tax than your final tax liability, the excess amount will be refunded to you when you file your ITR. The department will process the refund along with applicable interest under Section 244A (if refund is delayed).",
    },
    {
      q: "Can advance tax be revised if income changes during the year?",
      a: "Yes. Advance tax is based on estimated income. If your income increases or decreases during the year, you can adjust subsequent installments. However, ensure you pay at least 90% of final tax liability by 15th March to avoid Section 234B interest.",
    },
    {
      q: "Do senior citizens need to pay advance tax?",
      a: "Senior citizens (60 years and above) without business or professional income are exempt from paying advance tax. However, they must pay the entire tax due before filing ITR to avoid default interest.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Advance Tax
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border rounded-2xl overflow-hidden"
            open={open === index}
            onToggle={(event) => {
              const isOpen = (event.target as HTMLDetailsElement).open;
              setOpen(isOpen ? index : null);
            }}
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{faq.q}</span>

              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                +
              </span>
            </summary>

            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SHARED COMPONENT
───────────────────────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}