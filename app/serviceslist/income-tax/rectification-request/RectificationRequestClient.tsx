"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rectification Request Services - Section 154",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  },
  description:
    "Professional rectification request filing services under Section 154 of the Income Tax Act for correcting clerical errors, calculation mistakes, arithmetical errors, wrong TDS credits and errors apparent on record in assessment orders, intimations and other tax department communications.",
  serviceType: "Income Tax Rectification Request Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "1499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "1499",
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
      name: "What is Section 154 rectification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 154 allows taxpayers or the Income Tax Department to request rectification of mistakes apparent from the record in any order passed by tax authorities. This includes clerical errors, arithmetical mistakes, accidental slips and errors apparent on record that do not require detailed investigation or re-examination of facts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the time limit for filing a rectification request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A rectification request under Section 154 can be filed within 4 years from the end of the financial year in which the order sought to be rectified was passed. For example, for an order passed in FY 2023-24, rectification can be requested until 31 March 2028.",
      },
    },
    {
      "@type": "Question",
      name: "What types of errors can be rectified under Section 154?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Errors that can be rectified include arithmetical or clerical mistakes, wrong TDS credit entries, incorrect calculation of income or tax, accidental omissions, errors in recording facts available on record, wrong application of tax rates, and any other mistake apparent from the record that does not require interpretation of law or re-examination of facts.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a fee for filing a rectification request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There is no government fee or charge for filing a rectification request under Section 154. However, professional fees for preparation, drafting and follow-up assistance may apply.",
      },
    },
  ],
};

export default function RectificationRequestClient() {
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

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* URGENCY BANNER */}
        <div
          className="bg-blue-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⏰ Found an Error in Your Assessment Order? File Rectification Request
          Within 4 Years to Correct Mistakes and Get Refund
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
              <span className="text-white">Rectification Request</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  ✏️ Section 154 Rectification
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Rectification
                  <br />
                  <span className="text-[#7ecbf0]">Request Service</span>
                  <br />
                  Section 154
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Discovered a{" "}
                  <strong className="text-white">clerical error, calculation
                  mistake or wrong TDS credit</strong> in your income tax
                  assessment order or intimation? Section 154 gives you the right
                  to request rectification of{" "}
                  <strong className="text-white">mistakes apparent from the
                  record</strong> — without filing a full appeal. Taxvio provides
                  expert error identification, professional application drafting,
                  complete documentation and proactive follow-up across India.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File Rectification — ₹1,499 →
                  </Link>

                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    📞 Free Error Check
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Error Identification",
                    "✅ Application Drafting",
                    "✅ Documentation",
                    "✅ Department Follow-Up",
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
                  Quick Facts
                </p>

                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["⏰", "4-year time limit from order year-end"],
                    ["✏️", "For errors apparent on record"],
                    ["💰", "No government fee"],
                    ["📋", "Simple application process"],
                    ["🔄", "No need for full appeal"],
                    ["💼", "Starting ₹1,499"],
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
                number: "3,000+",
                label: "Rectifications Filed",
                icon: "✏️",
              },
              { number: "₹1,499", label: "Starting Fee", icon: "💰" },
              { number: "90%", label: "Success Rate", icon: "✅" },
              { number: "All India", label: "Service Coverage", icon: "🇮🇳" },
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
              "✔ Error Analysis",
              "✔ Application Drafting",
              "✔ Supporting Proofs",
              "✔ AO Follow-Up",
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
          {/* WHAT IS SECTION 154 */}
          <section id="what-is-section-154">
            <SectionLabel text="Understanding Section 154" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Section 154 Rectification and When Can You Use It?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Section 154</strong> of the Income Tax Act provides a
                  simple, cost-free mechanism to correct{" "}
                  <strong>mistakes apparent from the record</strong> in any order
                  passed by income tax authorities. Unlike appeals which require
                  legal arguments and formal hearings, rectification requests
                  address straightforward errors that can be verified from the
                  documents already on record.
                </p>

                <p>
                  "Mistakes apparent from the record" typically include{" "}
                  <strong>arithmetical errors</strong>, <strong>clerical
                  mistakes</strong>, <strong>accidental slips</strong>,{" "}
                  <strong>wrong TDS credits</strong>, incorrect tax rate
                  application, calculation errors in total income or tax, and
                  errors in recording facts that are clearly evident from the
                  available documents.
                </p>

                <p>
                  The key requirement is that the error must be{" "}
                  <strong>obvious and self-evident</strong>. It should not require
                  detailed investigation, interpretation of law, or re-examination
                  of evidence. If the correction requires a debatable legal
                  interpretation or factual inquiry, it is not covered under
                  Section 154 and an appeal must be filed instead.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Section 154 rectification can be requested by either the{" "}
                  <strong>taxpayer</strong> or the{" "}
                  <strong>Assessing Officer</strong>. If the mistake is brought to
                  the AO's notice by the taxpayer, the AO must pass a
                  rectification order within <strong>6 months</strong> from the
                  end of the month in which the rectification application is
                  received.
                </p>

                <p>
                  The time limit for filing a rectification request is{" "}
                  <strong>4 years from the end of the financial year</strong> in
                  which the order sought to be rectified was passed. For example,
                  an order passed in FY 2023-24 can be rectified until 31 March
                  2028.
                </p>

                <p>
                  Taxvio provides complete Section 154 rectification services
                  across India — error identification, legal analysis, application
                  drafting, supporting document compilation, online/offline filing
                  and proactive follow-up with the Assessing Officer until
                  rectification order is received.
                </p>
              </div>
            </div>
          </section>

          {/* TYPES OF ERRORS */}
          <section id="types-of-errors">
            <SectionLabel text="Rectifiable Errors" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Types of Errors That Can Be Rectified Under Section 154
            </h2>

            <p className="text-gray-600 mb-10 max-w-3xl">
              Not all errors can be rectified under Section 154. Here are the most
              common types of mistakes that qualify for rectification.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🧮",
                  error: "Arithmetical Errors",
                  examples: [
                    "Wrong addition or subtraction in income calculation",
                    "Incorrect multiplication of tax rates",
                    "Errors in totaling various income heads",
                    "Wrong calculation of depreciation amount",
                  ],
                },
                {
                  icon: "✏️",
                  error: "Clerical Mistakes",
                  examples: [
                    "Typographical errors in names, amounts or dates",
                    "Wrong PAN mentioned in the order",
                    "Incorrect assessment year recorded",
                    "Transposition of digits in income or tax amount",
                  ],
                },
                {
                  icon: "💳",
                  error: "Wrong TDS/TCS Credits",
                  examples: [
                    "TDS shown in Form 26AS not given credit",
                    "TDS amount incorrectly recorded",
                    "Duplicate TDS credit or missing TDS entry",
                    "Wrong financial year TDS claimed",
                  ],
                },
                {
                  icon: "📊",
                  error: "Incorrect Tax Rate Application",
                  examples: [
                    "Wrong tax slab applied to income",
                    "Surcharge calculated incorrectly",
                    "Health & Education Cess not applied or wrongly applied",
                    "Senior citizen/super senior citizen rate not applied",
                  ],
                },
                {
                  icon: "📋",
                  error: "Omission of Facts on Record",
                  examples: [
                    "Exemption claimed but not considered despite documents",
                    "Deduction evidence on file but ignored in calculation",
                    "Double counting of same income",
                    "Income shown in wrong assessment year",
                  ],
                },
                {
                  icon: "🏦",
                  error: "Bank Account Errors",
                  examples: [
                    "Wrong bank account used for refund credit",
                    "Refund sent to closed account",
                    "Bank account number misrecorded",
                    "IFSC code error in refund processing",
                  ],
                },
                {
                  icon: "📈",
                  error: "Interest Calculation Errors",
                  examples: [
                    "Wrong calculation of interest u/s 234A, 234B, 234C",
                    "Interest calculated for wrong period",
                    "Interest on refund u/s 244A wrongly computed",
                    "Duplicate interest levy",
                  ],
                },
                {
                  icon: "💰",
                  error: "Refund Calculation Mistakes",
                  examples: [
                    "Excess tax paid not refunded",
                    "Refund amount wrongly calculated",
                    "Self-assessment tax payment not considered",
                    "Advance tax credit omitted",
                  ],
                },
                {
                  icon: "🔢",
                  error: "Income Classification Errors",
                  examples: [
                    "Income shown under wrong head (salary vs business)",
                    "Long-term capital gains shown as short-term",
                    "Exempt income wrongly added to taxable income",
                    "Agricultural income wrongly taxed",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.error}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-3 text-sm">
                    {item.error}
                  </h3>
                  <ul className="space-y-1">
                    {item.examples.map((ex, i) => (
                      <li key={i} className="text-xs text-gray-600 flex gap-2">
                        <span className="text-[#00416a]">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* WHAT CANNOT BE RECTIFIED */}
          <section
            id="cannot-rectify"
            className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="Limitations" />

            <h2 className="text-3xl font-bold text-red-700 mb-4">
              What Cannot Be Rectified Under Section 154
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              Section 154 is meant only for obvious errors. The following types of
              issues cannot be corrected through rectification and require filing
              a full appeal.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  issue: "Legal Interpretation Disputes",
                  why: "If the issue involves interpretation of legal provisions, debatable questions of law, or different views on applicability of sections, it requires an appeal, not rectification.",
                },
                {
                  issue: "Re-examination of Facts",
                  why: "Rectification cannot be used to re-examine evidence, reconsider submissions or reassess factual findings made by the AO during assessment.",
                },
                {
                  issue: "Change of Opinion",
                  why: "If you want to challenge the AO's opinion, judgment or conclusion (even if you disagree), rectification is not the remedy — you must file an appeal.",
                },
                {
                  issue: "New Claims or Deductions",
                  why: "Rectification cannot be used to claim new deductions, exemptions or income adjustments that were not claimed in the original return or assessment.",
                },
                {
                  issue: "Evidence Not on Record",
                  why: "If the correction requires introduction of new evidence or documents that were not part of the original assessment record, Section 154 does not apply.",
                },
                {
                  issue: "Contentious Additions",
                  why: "Additions made by the AO based on their interpretation, even if you disagree, cannot be removed via rectification unless there is a clear arithmetical or clerical error.",
                },
              ].map((item) => (
                <div
                  key={item.issue}
                  className="bg-white border border-red-100 rounded-xl p-5"
                >
                  <p className="font-bold text-red-600 text-sm mb-2">
                    ❌ {item.issue}
                  </p>
                  <p className="text-sm text-gray-600">{item.why}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white border border-red-200 rounded-xl p-5">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-red-700">Important:</strong> If your
                rectification request is rejected because the AO determines it
                requires legal interpretation or factual re-examination, you can
                file an appeal against the assessment order within the appeal time
                limit (30 days from receipt of order).
              </p>
            </div>
          </section>

          {/* TIME LIMITS */}
          <section id="time-limits">
            <SectionLabel text="Deadlines" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Time Limits for Section 154 Rectification
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8">
                <div className="text-3xl mb-4">⏰</div>

                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  For Filing Rectification Request
                </h3>

                <div className="space-y-4 text-sm text-gray-700">
                  <p>
                    A rectification request can be filed{" "}
                    <strong>within 4 years from the end of the financial
                    year</strong> in which the order sought to be rectified was
                    passed.
                  </p>

                  <div className="bg-white border border-blue-200 rounded-xl p-4">
                    <p className="font-semibold text-blue-900 mb-2">
                      📌 Example:
                    </p>
                    <p className="text-xs">
                      Assessment order passed: 15 December 2023 (FY 2023-24)
                      <br />
                      <strong>Rectification deadline:</strong> 31 March 2028
                    </p>
                  </div>

                  <p>
                    This is a liberal time limit, giving taxpayers ample
                    opportunity to identify and correct errors. However, it's
                    best to file rectification as soon as the error is discovered
                    to expedite refund or correction.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-50 border-2 border-cyan-200 rounded-3xl p-8">
                <div className="text-3xl mb-4">📅</div>

                <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                  For AO to Pass Rectification Order
                </h3>

                <div className="space-y-4 text-sm text-gray-700">
                  <p>
                    Once a rectification application is filed, the Assessing
                    Officer must pass a rectification order{" "}
                    <strong>within 6 months from the end of the month</strong> in
                    which the application was received.
                  </p>

                  <div className="bg-white border border-cyan-200 rounded-xl p-4">
                    <p className="font-semibold text-cyan-900 mb-2">
                      📌 Example:
                    </p>
                    <p className="text-xs">
                      Rectification application filed: 10 June 2024
                      <br />
                      <strong>AO must pass order by:</strong> 31 December 2024
                    </p>
                  </div>

                  <p>
                    If the AO does not pass the rectification order within 6
                    months, the taxpayer can file a grievance or follow up with
                    higher authorities. Professional assistance ensures timely
                    follow-up and expedites processing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="Required Documentation" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Rectification Request
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Basic Documents (All Requests)
                </p>

                <ul className="space-y-3">
                  {[
                    "Copy of the order containing the error (assessment order, intimation u/s 143(1), etc.)",
                    "PAN card",
                    "Filed ITR for the relevant assessment year",
                    "ITR acknowledgement (ITR-V)",
                    "Clear identification and description of the error",
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
                  Supporting Documents (Error-Specific)
                </p>

                <ul className="space-y-3">
                  {[
                    "Form 26AS (for TDS credit errors)",
                    "TDS certificates (Form 16/16A) showing correct TDS",
                    "Bank statements (for refund credit errors)",
                    "Calculation worksheets showing correct computation",
                    "Deduction/exemption proofs (if claimed but not considered)",
                    "Previous correspondence with the AO (if any)",
                    "Comparative statement (old vs corrected computation)",
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
              Taxvio's Rectification Request Process
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured approach ensures accurate error identification,
              legally sound application drafting and timely rectification order.
            </p>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Error Identification & Analysis",
                    desc: "We carefully review the assessment order, intimation or other document, identify the error, verify it against source documents (ITR, Form 26AS, certificates) and assess whether it qualifies for Section 154 rectification.",
                  },
                  {
                    step: "02",
                    title: "Supporting Document Collection",
                    desc: "We collect all documents proving the error — Form 26AS, TDS certificates, bank statements, calculation worksheets, exemption proofs and any other relevant evidence.",
                  },
                  {
                    step: "03",
                    title: "Rectification Application Drafting",
                    desc: "We prepare a clear, concise rectification application under Section 154, precisely describing the error, pointing to the exact location in the order, and explaining the correct position with supporting references.",
                  },
                  {
                    step: "04",
                    title: "Comparative Computation Preparation",
                    desc: "We prepare a comparative statement showing the incorrect computation in the order and the correct computation after rectification, making the error obvious and easy for the AO to verify.",
                  },
                  {
                    step: "05",
                    title: "Filing & Acknowledgment",
                    desc: "We file the rectification application with the concerned Assessing Officer (online via e-filing portal or physically), obtain acknowledgment and note the application reference number for tracking.",
                  },
                  {
                    step: "06",
                    title: "Follow-Up & Rectification Order",
                    desc: "We proactively follow up with the AO, respond to any queries or clarifications sought, and ensure the rectification order is passed within the 6-month timeline. We notify you immediately upon receipt of the rectification order.",
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
            <SectionLabel text="Client Success Stories" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Rectification Success Stories from Across India
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Suresh Patel",
                  location: "Ahmedabad, Gujarat",
                  text: "₹45,000 TDS credit missing in my Section 143(1) intimation. Taxvio filed rectification with Form 26AS proof. Rectification order received in 3 weeks and refund credited. Simple and effective.",
                },
                {
                  name: "Anjali Reddy",
                  location: "Hyderabad, Telangana",
                  text: "Wrong tax slab applied — I was charged at 30% instead of 20%. Taxvio identified the error, filed rectification and got ₹28,000 excess tax refunded. Very professional team.",
                },
                {
                  name: "Ramesh Industries",
                  location: "Pune, Maharashtra",
                  text: "Depreciation calculation error resulted in ₹1.2 lakh excess tax. Taxvio's detailed rectification application with comparative worksheet got it corrected within 2 months. Highly recommend.",
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

          {/* NATIONWIDE SEO */}
          <section id="cities-served">
            <SectionLabel text="Nationwide Service" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Rectification Request Services Across India
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio provides professional Section 154 rectification request
              services across all major cities and states in India — helping
              taxpayers correct assessment order errors nationwide.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Mumbai",
                "Delhi",
                "Bangalore",
                "Chennai",
                "Kolkata",
                "Hyderabad",
                "Pune",
                "Ahmedabad",
                "Surat",
                "Jaipur",
                "Lucknow",
                "Kanpur",
                "Nagpur",
                "Indore",
                "Thane",
                "Bhopal",
                "Visakhapatnam",
                "Patna",
                "Vadodara",
                "Ghaziabad",
                "Ludhiana",
                "Agra",
                "Nashik",
                "Faridabad",
                "Meerut",
                "Rajkot",
                "Varanasi",
                "Srinagar",
                "Aurangabad",
                "Dhanbad",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-3 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition"
                >
                  📍 {city}
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600 text-sm text-center">
              + All other cities and towns across India through online support
            </p>
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
                  title: "Income Tax Notice Response",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Expert handling of all types of income tax notices.",
                },
                {
                  title: "Tax Appeal Filing",
                  icon: "⚖️",
                  link: "/serviceslist/income-tax/tax-appeal-filing",
                  desc: "CIT(A), ITAT and High Court appeal filing.",
                },
                {
                  title: "Revised ITR Filing",
                  icon: "🔄",
                  link: "/serviceslist/income-tax/revised-itr",
                  desc: "Correct errors in already filed returns.",
                },
                {
                  title: "Income Tax Refund",
                  icon: "💰",
                  link: "/serviceslist/income-tax/income-tax-refund",
                  desc: "Refund tracking and expediting services.",
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
                    Correct Errors Quickly
                  </p>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File Your Rectification Request Today
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    Found a clerical error, calculation mistake or wrong TDS credit
                    in your assessment order? Don't let it cost you money. Taxvio
                    provides expert Section 154 rectification request services —
                    error identification, application drafting, documentation and AO
                    follow-up across India. Starting ₹1,499.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File Rectification — ₹1,499
                  </Link>

                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    📞 Free Error Check
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
      value: "simple-error",
      label: "Simple Clerical/Arithmetical Error",
      fee: 1499,
      description:
        "Rectification for straightforward clerical or calculation errors with clear supporting documents.",
    },
    {
      value: "tds-credit",
      label: "TDS/TCS Credit Correction",
      fee: 1999,
      description:
        "Rectification for missing or incorrect TDS/TCS credits with Form 26AS reconciliation.",
    },
    {
      value: "refund-error",
      label: "Refund Calculation Error",
      fee: 2499,
      description:
        "Rectification for incorrect refund calculation, bank account errors or refund credit issues.",
    },
    {
      value: "multiple-errors",
      label: "Multiple Errors in Same Order",
      fee: 2999,
      description:
        "Rectification addressing multiple errors (TDS, calculation, classification) in one application.",
    },
    {
      value: "143-1-intimation",
      label: "Section 143(1) Intimation Error",
      fee: 1999,
      description:
        "Rectification of errors in CPC processing intimation under Section 143(1).",
    },
    {
      value: "assessment-order",
      label: "Assessment Order Error (Section 143(3))",
      fee: 3499,
      description:
        "Rectification of errors in detailed assessment order passed by Assessing Officer.",
    },
    {
      value: "penalty-order",
      label: "Penalty Order Rectification",
      fee: 2999,
      description:
        "Rectification of clerical or calculation errors in penalty orders.",
    },
    {
      value: "urgent",
      label: "Urgent Rectification (Priority Processing)",
      fee: 4999,
      description:
        "Expedited rectification request with same-day drafting and filing with priority follow-up.",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Rectification Request Fee
      </h2>

      <p className="text-gray-600 mb-8 max-w-xl">
        Select the type of error you need to rectify for an estimated
        professional fee.
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
              * Fees depend on error complexity, number of errors, supporting
              documentation required and follow-up effort needed. No government
              fees for Section 154 rectification. GST applicable.
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
            Select an error type above to see an estimated fee.
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
      q: "What is the difference between rectification and revised return?",
      a: "Rectification (Section 154) is used to correct errors in orders passed by tax authorities (assessment orders, intimations, etc.). Revised return (Section 139(5)) is filed by the taxpayer to correct errors in their own filed ITR. If the error is in your ITR, file revised return. If the error is in the department's order/intimation, file rectification request.",
    },
    {
      q: "Can I file rectification request online?",
      a: "Yes. Rectification requests can be filed online through the Income Tax e-filing portal under 'Rectification Request' section. You can also file physically by submitting application to the concerned Assessing Officer's office. Online filing is faster and provides tracking facility.",
    },
    {
      q: "How long does it take to get a rectification order?",
      a: "The Assessing Officer must pass the rectification order within 6 months from the end of the month in which the application is received. In practice, simple clerical errors are often rectified within 2-8 weeks. Complex cases may take longer. Professional follow-up expedites processing.",
    },
    {
      q: "What if my rectification request is rejected?",
      a: "If the AO rejects your rectification request, you will receive a rejection order stating reasons. If you disagree with the rejection, you can file an appeal against the original assessment order (not against the rectification rejection) before CIT(A) if still within the 30-day appeal deadline.",
    },
    {
      q: "Can I file multiple rectification requests for the same order?",
      a: "Yes. You can file multiple rectification requests for different errors in the same order. Each request should clearly identify the specific error being addressed. There is no limit on the number of rectification requests, as long as they are filed within the 4-year time limit.",
    },
    {
      q: "Will filing rectification extend the appeal deadline?",
      a: "No. Filing a rectification request does not extend or suspend the 30-day appeal deadline. If you are unsure whether the issue qualifies for rectification or requires an appeal, it's safer to file an appeal within 30 days to protect your rights, and simultaneously file rectification for obvious errors.",
    },
    {
      q: "Can the AO reject rectification and increase my tax liability instead?",
      a: "Generally, rectification proceedings are meant to correct errors in favor of or against the taxpayer. However, if while examining your rectification request the AO discovers another error that increases your tax liability, they can rectify that as well. This is why rectification requests must be carefully drafted.",
    },
    {
      q: "Is professional help necessary for simple rectification requests?",
      a: "For very simple and obvious errors (like typographical mistakes in name or amount), you may file rectification yourself. However, for errors involving TDS credits, tax calculations, legal interpretation or multiple errors, professional assistance ensures legally sound drafting, proper documentation and effective follow-up for faster resolution.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Rectification Requests
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