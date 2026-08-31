// app/serviceslist/income-tax/tds-certificate/TDSCertificateClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TDS Certificate Generation - Form 16 and Form 16A",
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
    "Professional preparation, validation and issuance support for Form 16 and Form 16A TDS certificates. Services include TRACES assistance, correction support and bulk certificate generation for employers and businesses.",
  serviceType: "TDS Certificate Generation and Issuance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "999",
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
      name: "What is Form 16?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 16 is the annual TDS certificate issued by an employer to a salaried employee. It contains salary details, deductions, taxable income, TDS deducted and TDS deposited during the financial year. Form 16 helps employees file their income tax returns.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 16A?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 16A is a quarterly TDS certificate issued for tax deducted on income other than salary, such as professional fees, contractor payments, rent, interest and commission. It is generally issued after the relevant TDS statement has been processed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the due date for issuing Form 16?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 16 is generally required to be issued by the employer to the employee by 31 May following the end of the financial year, subject to applicable income-tax rules and notifications.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if Form 16 has incorrect information?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The deductor should identify the error, file a correction statement where required, and generate the corrected certificate after the correction is processed. Taxvio can assist with reconciliation, correction filing and certificate validation.",
      },
    },
  ],
};

export default function TDSCertificateClient() {
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
          className="bg-amber-500 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          📄 Form 16 Issuance Reminder: Employers Generally Need to Issue Form 16
          by 31 May — Avoid Employee Complaints, TDS Mismatches and Filing Delays
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
              <span className="text-white">TDS Certificate</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📑 Form 16 & Form 16A Services
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  TDS Certificate
                  <br />
                  <span className="text-[#7ecbf0]">
                    Form 16 & Form 16A
                  </span>
                  <br />
                  Generation
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Issue accurate and compliant TDS certificates for employees,
                  vendors, contractors and professionals. Taxvio helps employers
                  and businesses with <strong className="text-white">Form 16</strong>,
                  <strong className="text-white"> Form 16A</strong>, TRACES
                  downloads, certificate validation, correction support and bulk
                  certificate generation after proper TDS reconciliation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Generate TDS Certificates — ₹999 →
                  </Link>

                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    📞 Free TDS Consultation
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Form 16 Generation",
                    "✅ Form 16A Preparation",
                    "✅ TRACES Assistance",
                    "✅ Bulk Certificates",
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
                    ["📄", "Form 16 for salary income"],
                    ["📑", "Form 16A for non-salary income"],
                    ["📅", "Form 16 generally due by 31 May"],
                    ["🔄", "Quarterly Form 16A issuance"],
                    ["✅", "TRACES-based certificate support"],
                    ["💰", "Starting ₹999"],
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
              { number: "25,000+", label: "Certificates Prepared", icon: "📄" },
              { number: "₹999", label: "Starting Fee", icon: "💰" },
              { number: "100%", label: "Certificate Validation", icon: "✅" },
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
              "✔ TAN-Based Compliance",
              "✔ TRACES Assistance",
              "✔ Deductee PAN Validation",
              "✔ Bulk Certificate Support",
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
          {/* INTRODUCTION */}
          <section id="what-is-tds-certificate">
            <SectionLabel text="Understanding TDS Certificates" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Are Form 16 and Form 16A?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A <strong>TDS certificate</strong> is an official document
                  issued by a deductor to a deductee confirming the amount of tax
                  deducted at source and deposited with the Government. It allows
                  the recipient to claim credit for TDS while filing an income tax
                  return.
                </p>

                <p>
                  <strong>Form 16</strong> is the annual TDS certificate issued
                  by an employer to an employee for tax deducted from salary.
                  It includes salary income, exemptions, deductions, taxable
                  income, tax liability, TDS deducted and other relevant payroll
                  details.
                </p>

                <p>
                  <strong>Form 16A</strong> is issued for TDS deducted on income
                  other than salary. It is commonly issued to vendors,
                  contractors, consultants, professionals, landlords, lenders and
                  other recipients.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Accurate certificates are important because employees and
                  vendors use them for ITR filing, loan applications, visa
                  applications, financial records and tax-credit reconciliation.
                  Incorrect PAN, amount, assessment year or challan information
                  can result in TDS mismatch and refund delays.
                </p>

                <p>
                  Taxvio helps employers and businesses prepare, validate and
                  issue certificates after reconciling TDS returns, challans,
                  deductee details and Form 26AS/Annual Information Statement
                  information.
                </p>

                <p>
                  Our team supports businesses in Khatauli, Muzaffarnagar, Meerut,
                  Delhi NCR, Noida, Mumbai and across India through a structured
                  online process.
                </p>
              </div>
            </div>
          </section>

          {/* FORM 16 VS 16A */}
          <section id="form-16-vs-form-16a">
            <SectionLabel text="Certificate Comparison" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Form 16 vs Form 16A — Key Differences
            </h2>

            <div className="overflow-x-auto rounded-2xl border shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    {[
                      "Particular",
                      "Form 16",
                      "Form 16A",
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
                      "Applicable Income",
                      "Salary income",
                      "Income other than salary",
                    ],
                    [
                      "Common Recipient",
                      "Employees",
                      "Vendors, professionals, contractors and landlords",
                    ],
                    [
                      "Frequency",
                      "Annual",
                      "Quarterly",
                    ],
                    [
                      "Issued By",
                      "Employer",
                      "Deductor making non-salary payment",
                    ],
                    [
                      "Common Examples",
                      "Salary and employment benefits",
                      "Professional fees, interest, rent, commission and contracts",
                    ],
                    [
                      "Source",
                      "Employer payroll and TDS statement",
                      "Quarterly TDS statement processed through TRACES",
                    ],
                    [
                      "Used For",
                      "ITR filing, loan and visa documentation",
                      "TDS credit claim and income-tax compliance",
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
                      <td className="px-5 py-4 text-gray-700">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* DUE DATES */}
          <section id="due-dates">
            <SectionLabel text="Important Timelines" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Form 16 and Form 16A Issuance Deadlines
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              Timely issuance of TDS certificates helps employees and vendors
              reconcile their tax credits and file accurate income tax returns.
              Applicable deadlines may depend on the relevant financial year,
              TDS statement processing and government notifications.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">
                  Form 16
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Form 16 is generally issued by the employer by{" "}
                  <strong>31 May following the end of the financial year</strong>.
                  It should be generated using accurate salary data and processed
                  TDS statement information.
                </p>
              </div>

              <div className="bg-cyan-50 border-2 border-cyan-200 rounded-3xl p-8">
                <div className="text-3xl mb-3">📑</div>
                <h3 className="text-2xl font-bold text-cyan-800 mb-3">
                  Form 16A
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Form 16A is issued quarterly after the relevant TDS statement
                  is filed and processed. It is generally required within{" "}
                  <strong>15 days from the due date of the relevant TDS
                  statement</strong>, subject to applicable rules.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Important:</strong> Form 16 and Form 16A should be issued
                only after verifying the deductee PAN, TDS amount, challan details,
                assessment year and certificate information. If a TDS statement
                contains an error, a correction statement may be required before
                generating a corrected certificate.
              </p>
            </div>
          </section>

          {/* BENEFITS */}
          <section id="benefits">
            <SectionLabel text="Why Choose Professional Support" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Benefits of Professional TDS Certificate Preparation
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "✅",
                  title: "Accurate Tax Credit",
                  desc: "Correct TDS certificates help employees and vendors claim the right tax credit in their income tax returns.",
                },
                {
                  icon: "🔍",
                  title: "Error Identification",
                  desc: "We review PAN, TAN, challan, amount, assessment year and deductee information before certificate issuance.",
                },
                {
                  icon: "📊",
                  title: "TDS Reconciliation",
                  desc: "TDS returns, challans and deductee-level records are reconciled to reduce Form 26AS and AIS mismatches.",
                },
                {
                  icon: "👥",
                  title: "Bulk Processing",
                  desc: "Suitable for companies and employers issuing certificates to multiple employees, vendors and contractors.",
                },
                {
                  icon: "🔄",
                  title: "Correction Support",
                  desc: "Assistance with identifying incorrect certificates and coordinating correction statements where required.",
                },
                {
                  icon: "📁",
                  title: "Organised Records",
                  desc: "Maintain properly named, year-wise and deductee-wise certificate records for internal compliance and audits.",
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
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Required Information" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for TDS Certificate Generation
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl">
              We prepare a customised checklist depending on whether you require
              Form 16, Form 16A, correction support or bulk certificate
              generation.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Employer / Deductor Details
                </p>

                <ul className="space-y-3">
                  {[
                    "TAN and PAN of the deductor",
                    "Filed quarterly TDS return acknowledgements",
                    "TDS challan payment proofs",
                    "Salary register or payment ledger",
                    "Deductee-wise TDS working",
                    "Assessment year and financial year details",
                    "TRACES login and statement processing details",
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
                  Employee / Vendor Details
                </p>

                <ul className="space-y-3">
                  {[
                    "Deductee name as per PAN records",
                    "Correct PAN of each employee or vendor",
                    "Address and contact details",
                    "Salary or payment details",
                    "TDS deducted and deposited",
                    "Bank or payment transaction records",
                    "Previous certificate details, if correction is required",
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

          {/* PROCESS */}
          <section id="our-process">
            <SectionLabel text="How We Work" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's 6-Step TDS Certificate Process
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl">
              Our process is designed to reduce certificate errors, improve
              deductee communication and ensure that Form 16 and Form 16A are
              issued with properly reconciled information.
            </p>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Requirement Review",
                    desc: "We understand whether you need annual Form 16, quarterly Form 16A, corrected certificates or bulk certificate generation for employees and vendors.",
                  },
                  {
                    step: "02",
                    title: "Data and Document Collection",
                    desc: "We collect TAN, filed TDS statements, challan details, deductee PAN information, payroll records and payment ledgers required for certificate preparation.",
                  },
                  {
                    step: "03",
                    title: "TDS Reconciliation",
                    desc: "Deductee-level deductions are compared with challans, statement acknowledgements and available TRACES records to identify mismatches before certificate generation.",
                  },
                  {
                    step: "04",
                    title: "Certificate Preparation",
                    desc: "Form 16 or Form 16A information is prepared using the applicable financial year, assessment year, deductee details, TDS amounts and certificate requirements.",
                  },
                  {
                    step: "05",
                    title: "Validation and Review",
                    desc: "Our team checks PAN, TAN, name, amount, dates, challan information and other certificate fields before final issuance or download.",
                  },
                  {
                    step: "06",
                    title: "Issuance and Record Keeping",
                    desc: "Final certificates are shared in an organised format. We also help maintain employee-wise or vendor-wise records for future reference, audits and correction requirements.",
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

          {/* COMMON ERRORS */}
          <section
            id="common-errors"
            className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="Error Prevention" />

            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Common Form 16 and Form 16A Errors
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              Even small data errors can prevent employees or vendors from
              receiving TDS credit. We help identify and address common issues
              before certificates are issued.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Incorrect PAN",
                  desc: "A wrong or invalid PAN can prevent TDS credit from appearing in the deductee's tax statement.",
                },
                {
                  title: "Name Mismatch",
                  desc: "The deductee name should be checked against PAN records to avoid identity and credit issues.",
                },
                {
                  title: "TDS Amount Difference",
                  desc: "Differences between payroll or payment records and filed TDS statements may cause certificate disputes.",
                },
                {
                  title: "Incorrect Assessment Year",
                  desc: "The financial year and assessment year must be correctly selected while preparing the certificate.",
                },
                {
                  title: "Challan Mismatch",
                  desc: "Incorrect challan details, booking status or unmatched payments can affect certificate generation.",
                },
                {
                  title: "Unprocessed TDS Statement",
                  desc: "Form 16A may not be available until the relevant quarterly TDS statement is successfully processed.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-red-100 rounded-xl p-5"
                >
                  <p className="font-bold text-red-600 text-sm mb-1">
                    ⚠️ {item.title}
                  </p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FEE CALCULATOR */}
          <FeeCalculator />

          {/* WHO NEEDS SERVICE */}
          <section id="ideal-for">
            <SectionLabel text="Ideal For" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Needs Form 16 and Form 16A Services?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏢",
                  title: "Private Employers",
                  desc: "Companies issuing annual Form 16 to salaried employees after payroll and TDS reconciliation.",
                },
                {
                  icon: "👥",
                  title: "Growing Businesses",
                  desc: "Businesses making payments to multiple vendors, contractors, professionals or consultants.",
                },
                {
                  icon: "💼",
                  title: "Startups",
                  desc: "Startups establishing payroll, TDS records and employee certificate processes for the first time.",
                },
                {
                  icon: "🏭",
                  title: "Manufacturers",
                  desc: "Manufacturing businesses making contractor, rent, professional and interest payments.",
                },
                {
                  icon: "🏠",
                  title: "Property Owners",
                  desc: "Businesses or persons deducting TDS on rent payments where Form 16A is applicable.",
                },
                {
                  icon: "📊",
                  title: "Payroll Agencies",
                  desc: "Payroll and accounting service providers requiring reliable bulk certificate support.",
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
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Trusted by Employers and Businesses
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Aarav Technologies",
                  location: "Noida",
                  text: "Taxvio helped us prepare and validate Form 16 for our entire team. The process was organised and employee queries reduced significantly.",
                },
                {
                  name: "Shree Balaji Traders",
                  location: "Muzaffarnagar",
                  text: "We needed Form 16A for multiple vendors. Taxvio reconciled our TDS details and provided the certificates in a clear vendor-wise format.",
                },
                {
                  name: "Nexgen Services Pvt. Ltd.",
                  location: "Meerut",
                  text: "Their team identified a PAN mismatch before issuing certificates and guided us through the correction process. Very useful compliance support.",
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
              TDS Certificate Services Across India
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, Uttar
              Pradesh</strong> and provides Form 16, Form 16A and TDS certificate
              services to employers, companies, businesses and payroll teams in
              <strong> Meerut</strong>, <strong>Noida</strong>,{" "}
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
                  title: "TDS Return Filing",
                  icon: "📊",
                  link: "/serviceslist/income-tax/tds-return",
                  desc: "Quarterly TDS return preparation and filing.",
                },
                {
                  title: "TDS Notice Response",
                  icon: "📨",
                  link: "/serviceslist/income-tax/tds-notice",
                  desc: "Support for TDS defaults and notices.",
                },
                {
                  title: "Salary ITR Filing",
                  icon: "💼",
                  link: "/serviceslist/income-tax/itr-salary",
                  desc: "Income tax return filing for employees.",
                },
                {
                  title: "Payroll Compliance",
                  icon: "👥",
                  link: "/serviceslist/income-tax/payroll-compliance",
                  desc: "Payroll and employee compliance support.",
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
                    Simplify Your TDS Compliance
                  </p>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Generate Accurate Form 16 & Form 16A
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    Give your employees and vendors accurate tax certificates
                    without the stress of manual reconciliation. Taxvio handles
                    preparation, validation, correction support and bulk issuance
                    for businesses across India. Starting ₹999.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Generate Certificates — ₹999
                  </Link>

                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    📞 Talk to an Expert
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
      value: "form16-small",
      label: "Form 16 — Small Employer",
      fee: 999,
      description:
        "Preparation and validation of Form 16 for a small number of employees.",
    },
    {
      value: "form16-bulk",
      label: "Form 16 — Bulk Generation",
      fee: 2999,
      description:
        "Bulk Form 16 preparation and employee-wise certificate organisation.",
    },
    {
      value: "form16a",
      label: "Form 16A — Quarterly Certificates",
      fee: 1499,
      description:
        "Preparation and validation support for quarterly non-salary TDS certificates.",
    },
    {
      value: "form16a-bulk",
      label: "Form 16A — Bulk Vendor Certificates",
      fee: 3499,
      description:
        "Bulk certificate support for vendors, contractors and professionals.",
    },
    {
      value: "validation",
      label: "Certificate Validation & Reconciliation",
      fee: 999,
      description:
        "Checking PAN, TAN, challan, TDS amount and certificate details.",
    },
    {
      value: "correction",
      label: "TDS Certificate Correction Support",
      fee: 1999,
      description:
        "Identification of errors and assistance with correction statement requirements.",
    },
    {
      value: "traces",
      label: "TRACES Download Assistance",
      fee: 1499,
      description:
        "Support with TRACES login, request generation, download and certificate records.",
    },
    {
      value: "annual",
      label: "Annual TDS Compliance Package",
      fee: 9999,
      description:
        "Annual TDS return, certificate, reconciliation and compliance support.",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your TDS Certificate Fee
      </h2>

      <p className="text-gray-600 mb-8 max-w-xl">
        Select the certificate or support service you need for an estimated
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
              * Fees depend on the number of employees/vendors, data quality,
              correction requirements and certificate volume. Government
              charges, if applicable, are separate. GST applicable.
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
      q: "What is the difference between Form 16 and Form 16A?",
      a: "Form 16 is an annual TDS certificate issued by an employer for tax deducted from salary. Form 16A is a quarterly TDS certificate issued for tax deducted on non-salary payments such as professional fees, commission, interest, rent and contractor payments.",
    },
    {
      q: "Who is responsible for issuing Form 16?",
      a: "The employer who deducts tax from salary is responsible for issuing Form 16 to the employee after complying with the applicable TDS statement and certificate requirements.",
    },
    {
      q: "When should Form 16 generally be issued?",
      a: "Form 16 is generally issued by 31 May following the end of the financial year. The exact requirement should be checked with the applicable income-tax rules and notifications for the relevant year.",
    },
    {
      q: "When is Form 16A issued?",
      a: "Form 16A is issued quarterly for non-salary TDS. It is generally required within 15 days from the due date of the relevant TDS statement, subject to the statement being filed and processed and applicable rules.",
    },
    {
      q: "Can Form 16 be prepared manually?",
      a: "The underlying salary and TDS information may be prepared using payroll records, but the certificate should comply with the applicable prescribed format and certificate-generation requirements. Taxvio helps with data review, reconciliation and issuance support.",
    },
    {
      q: "What if the employee's PAN is incorrect in Form 16?",
      a: "The deductor should verify the PAN and identify whether a correction statement is required. After the relevant correction is processed, a corrected certificate may be generated or downloaded as applicable.",
    },
    {
      q: "Can Form 16A be issued without filing a TDS return?",
      a: "Form 16A is generally generated after the relevant TDS statement is filed and processed. If the statement is not filed or has unresolved defaults, certificate generation may be delayed or affected.",
    },
    {
      q: "Do employees need Form 16 to file an ITR?",
      a: "Form 16 is useful for preparing an accurate salary ITR, but employees may also use salary records, Form 26AS, AIS and other supporting documents. Form 16 should be reconciled with the employee's tax records before filing.",
    },
    {
      q: "Do you provide bulk Form 16 and Form 16A support?",
      a: "Yes. Taxvio provides bulk preparation, validation, organisation and issuance support for employers and businesses with multiple employees, vendors, contractors or other deductees.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — TDS Certificates
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