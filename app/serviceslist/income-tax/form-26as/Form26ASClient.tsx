"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Form 26AS Download and Analysis Services",
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
    "Professional Form 26AS download assistance, TDS and TCS credit verification, mismatch identification, reconciliation guidance and tax credit analysis for accurate ITR filing and refund claims.",
  serviceType: "Form 26AS Download and Tax Credit Verification",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "499",
      maxPrice: "2999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Form 26AS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 26AS is an annual consolidated tax statement showing TDS, TCS, advance tax, self-assessment tax, refunds and other tax-related information for a taxpayer. It is available on the Income Tax e-filing portal and TRACES.",
      },
    },
    {
      "@type": "Question",
      name: "How do I download Form 26AS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 26AS can be downloaded from the Income Tax e-filing portal by logging in with your PAN and password or using net banking credentials. It is also accessible through TRACES for registered users.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Form 26AS important for ITR filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 26AS contains all TDS and TCS credits claimed by deductors. Verifying Form 26AS before filing ITR ensures you claim correct tax credits, avoid mismatches and prevent notices or refund delays.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if there is a mismatch in Form 26AS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If TDS shown in your records does not match Form 26AS, contact the deductor to verify, file a correction statement if needed, or report the issue through the grievance mechanism. Taxvio provides mismatch identification and reconciliation support.",
      },
    },
  ],
};

export default function Form26ASClient() {
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
          className="bg-blue-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          📊 Verify Your Form 26AS Before ITR Filing — Mismatches Can Delay
          Refunds and Trigger Tax Notices
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
              <span className="text-white">Form 26AS</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📊 Form 26AS Services
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Form 26AS
                  <br />
                  <span className="text-[#7ecbf0]">Download & Analysis</span>
                  <br />
                  Service
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Form 26AS is your complete annual tax statement showing all
                  TDS, TCS, advance tax, refunds and other tax credits. Accurate
                  verification is essential before ITR filing to avoid{" "}
                  <strong className="text-white">refund delays</strong>,{" "}
                  <strong className="text-white">tax notices</strong> and{" "}
                  <strong className="text-white">credit mismatches</strong>.
                  Taxvio provides download assistance, detailed analysis, TDS/TCS
                  verification, mismatch identification and complete reconciliation
                  support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get Form 26AS Analysis — ₹499 →
                  </Link>

                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 26AS Download Support",
                    "✅ TDS/TCS Verification",
                    "✅ Mismatch Detection",
                    "✅ Reconciliation Guidance",
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
                    ["📋", "Annual consolidated tax statement"],
                    ["🔍", "Shows TDS, TCS and tax payments"],
                    ["✅", "Essential for ITR filing"],
                    ["🌐", "Available on e-filing portal"],
                    ["🔄", "Updated regularly by tax department"],
                    ["💰", "Starting ₹499"],
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
              { number: "50,000+", label: "Form 26AS Analyzed", icon: "📊" },
              { number: "₹499", label: "Starting Fee", icon: "💰" },
              { number: "100%", label: "Accuracy Verification", icon: "✅" },
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
              "✔ E-Filing Portal Access",
              "✔ TRACES Support",
              "✔ Detailed Analysis Report",
              "✔ Mismatch Resolution",
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
          {/* WHAT IS FORM 26AS */}
          <section id="what-is-form-26as">
            <SectionLabel text="Understanding Form 26AS" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Form 26AS and Why Is It Important?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Form 26AS</strong> is an annual consolidated tax
                  statement that provides a complete summary of tax-related
                  information for a taxpayer's PAN. It is maintained by the Income
                  Tax Department and shows TDS deducted by employers and other
                  deductors, TCS collected by sellers, advance tax and
                  self-assessment tax paid, refunds received, tax demands, and
                  high-value transaction information.
                </p>

                <p>
                  Form 26AS is accessible through the{" "}
                  <strong>Income Tax e-filing portal</strong> and{" "}
                  <strong>TRACES</strong>. It is updated regularly as deductors
                  file TDS statements and taxpayers make payments. All ITR filers
                  should verify Form 26AS before filing to ensure TDS and other
                  tax credits are correctly claimed.
                </p>

                <p>
                  Mismatches between Form 26AS and your ITR can lead to notices,
                  delayed refunds, interest charges, and disputes with the Income
                  Tax Department.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Form 26AS contains multiple parts showing different categories
                  of information, such as salary TDS, non-salary TDS, TCS, advance
                  tax, refunds, tax demands, AIR (Annual Information Return)
                  transactions, and tax paid on behalf of the taxpayer by third
                  parties.
                </p>

                <p>
                  Taxvio helps individuals and businesses download Form 26AS,
                  analyze all sections, identify discrepancies, verify TDS and TCS
                  credits, reconcile payment and deduction records, and provide
                  guidance on correction or compliance steps.
                </p>

                <p>
                  We serve clients in Khatauli, Muzaffarnagar, Meerut, Noida,
                  Delhi NCR, Mumbai and across India through secure online
                  processes.
                </p>
              </div>
            </div>
          </section>

          {/* PARTS OF FORM 26AS */}
          <section id="parts-of-26as">
            <SectionLabel text="Form 26AS Sections" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Understanding the Parts of Form 26AS
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              Form 26AS is divided into multiple parts covering various tax
              credits, payments and transactions. Here's what each section
              contains.
            </p>

            <div className="space-y-5">
              {[
                {
                  part: "Part A",
                  title: "TDS Deducted by Deductors (Other Than Salary)",
                  desc: "Shows TDS deducted on professional fees, rent, interest, commission, contracts and other non-salary income. Includes deductor TAN, name, amount paid, TDS deducted, deposit date and challan details.",
                },
                {
                  part: "Part A1",
                  title: "TDS Deducted on Salary Income",
                  desc: "Contains employer-wise details of salary TDS, including employer TAN, name, gross salary paid, total TDS deducted and deposit information.",
                },
                {
                  part: "Part B",
                  title: "TDS Deducted on Sale of Immovable Property (Section 194-IA)",
                  desc: "Shows TDS deducted by buyers on property purchase transactions where TDS is deducted under Section 194-IA.",
                },
                {
                  part: "Part C",
                  title: "TCS (Tax Collected at Source)",
                  desc: "Details of TCS collected by sellers on goods, scrap, and other specified transactions, along with collector information and collection dates.",
                },
                {
                  part: "Part D",
                  title: "Advance Tax and Self-Assessment Tax Paid",
                  desc: "Shows advance tax and self-assessment tax paid by the taxpayer directly, including challan details, BSR code and payment dates.",
                },
                {
                  part: "Part E",
                  title: "Refund Received During the Year",
                  desc: "Details of income tax refunds received, including refund amount, mode of receipt and date of credit.",
                },
                {
                  part: "Part F",
                  title: "Tax Deducted/Collected and Paid by Regular/Informal Assessees",
                  desc: "Shows details where TDS/TCS was paid on behalf of the taxpayer by third parties or other entities.",
                },
                {
                  part: "Part G",
                  title: "AIR (Annual Information Return) Transactions",
                  desc: "High-value transactions reported by third parties, such as purchase of immovable property, shares, mutual funds, fixed deposits, credit card payments and other specified financial transactions.",
                },
              ].map((item) => (
                <div
                  key={item.part}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#00416a] transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00416a] text-white font-bold text-sm px-3 py-1 rounded-full flex-shrink-0">
                      {item.part}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-[#00416a] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HOW TO DOWNLOAD */}
          <section id="how-to-download">
            <SectionLabel text="Download Guide" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Download Form 26AS
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              Form 26AS can be downloaded from the Income Tax e-filing portal or
              through TRACES. Here are the step-by-step methods.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8">
                <div className="text-3xl mb-4">🌐</div>

                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  Method 1: Income Tax E-Filing Portal
                </h3>

                <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                  <li>
                    Log in to{" "}
                    <strong>https://eportal.incometax.gov.in</strong> using your
                    PAN and password.
                  </li>
                  <li>
                    Navigate to <strong>e-File</strong> → <strong>Income Tax
                    Returns</strong> → <strong>View Form 26AS (Tax Credit)</strong>.
                  </li>
                  <li>
                    Select the relevant <strong>Assessment Year</strong> and
                    view format (HTML or PDF).
                  </li>
                  <li>
                    Click <strong>View/Download</strong> to open or save the
                    statement.
                  </li>
                  <li>
                    The PDF is password-protected. Use your{" "}
                    <strong>date of birth (DDMMYYYY format)</strong> or{" "}
                    <strong>PAN in lowercase</strong> as the password.
                  </li>
                </ol>
              </div>

              <div className="bg-cyan-50 border-2 border-cyan-200 rounded-3xl p-8">
                <div className="text-3xl mb-4">🔐</div>

                <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                  Method 2: Through Net Banking
                </h3>

                <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                  <li>
                    Log in to your bank's net banking portal (supported banks
                    only).
                  </li>
                  <li>
                    Navigate to <strong>Tax Services</strong> or{" "}
                    <strong>Value Added Services</strong>.
                  </li>
                  <li>
                    Select <strong>View Form 26AS</strong>.
                  </li>
                  <li>
                    Enter your PAN and view or download the statement.
                  </li>
                  <li>
                    This method provides quick access without e-filing portal
                    login.
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Note:</strong> Form 26AS is updated regularly as TDS
                statements are filed and processed. Always download the latest
                version before ITR filing. If you face login or access issues,
                Taxvio provides download assistance.
              </p>
            </div>
          </section>

          {/* WHY VERIFICATION IS IMPORTANT */}
          <section id="why-verify">
            <SectionLabel text="Importance of Verification" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Why You Must Verify Form 26AS Before ITR Filing
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "✅",
                  title: "Claim Correct TDS Credit",
                  desc: "Ensure all TDS deducted by employers and other deductors is properly reflected and claimed in your ITR.",
                },
                {
                  icon: "🚫",
                  title: "Avoid Refund Delays",
                  desc: "Mismatches between Form 26AS and ITR can delay refund processing or result in reduced refund amounts.",
                },
                {
                  icon: "📨",
                  title: "Prevent Tax Notices",
                  desc: "The Income Tax Department compares ITR with Form 26AS. Discrepancies trigger notices under Section 143(1) or scrutiny under 143(3).",
                },
                {
                  icon: "🔍",
                  title: "Identify Missing TDS",
                  desc: "Detect TDS deducted by employers or vendors but not deposited or reported in TDS statements.",
                },
                {
                  icon: "💰",
                  title: "Reconcile Advance Tax",
                  desc: "Verify advance tax and self-assessment tax payments are correctly recorded before filing ITR.",
                },
                {
                  icon: "📊",
                  title: "Check High-Value Transactions",
                  desc: "Review Part G (AIR) to ensure all reported high-value transactions match your records and are disclosed in ITR if required.",
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

          {/* COMMON MISMATCHES */}
          <section
            id="common-mismatches"
            className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="Mismatch Scenarios" />

            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Common Form 26AS Mismatches and How to Resolve Them
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              Mismatches are common and can usually be resolved by contacting the
              deductor, checking statement filing status, or filing correction
              statements. Here are frequent issues and solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  issue: "TDS Not Reflected in Form 26AS",
                  cause:
                    "Deductor has not filed the TDS statement or statement is under processing.",
                  solution:
                    "Contact the deductor, verify filing status on TRACES, wait for processing, or obtain a manual TDS certificate (Form 16/16A) and attach to ITR.",
                },
                {
                  issue: "Lower TDS Amount Shown",
                  cause:
                    "Incorrect amount reported in TDS statement by the deductor.",
                  solution:
                    "Request the deductor to file a correction statement. Reconcile with Form 16/16A and update ITR accordingly.",
                },
                {
                  issue: "Wrong PAN Mentioned",
                  cause:
                    "Deductor entered incorrect PAN in the TDS statement.",
                  solution:
                    "Ask the deductor to file a correction statement with the correct PAN. Obtain corrected Form 16/16A after processing.",
                },
                {
                  issue: "Duplicate TDS Entry",
                  cause:
                    "Same TDS reported multiple times due to filing errors or duplicate statements.",
                  solution:
                    "Deductor should file a correction statement to cancel duplicate entries. Claim TDS only once in ITR.",
                },
                {
                  issue: "TDS Deducted but Not Deposited",
                  cause:
                    "Deductor deducted TDS but failed to deposit it with the government.",
                  solution:
                    "This is a serious compliance issue. You cannot claim the credit. Report the deductor through the income tax grievance portal or consult a CA.",
                },
                {
                  issue: "Advance Tax Not Reflected",
                  cause:
                    "Incorrect challan details, BSR code mismatch, or PAN entry error during payment.",
                  solution:
                    "Verify challan counterfoil, match BSR code and serial number, request CPC correction if needed, or attach challan proof to ITR.",
                },
              ].map((item) => (
                <div
                  key={item.issue}
                  className="bg-white border border-red-100 rounded-2xl p-5"
                >
                  <p className="font-bold text-red-600 text-sm mb-2">
                    ⚠️ {item.issue}
                  </p>

                  <div className="space-y-2 text-xs text-gray-700">
                    <p>
                      <strong>Cause:</strong> {item.cause}
                    </p>
                    <p>
                      <strong>Solution:</strong> {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* OUR SERVICE PROCESS */}
          <section id="our-process">
            <SectionLabel text="How We Help" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's Form 26AS Analysis Process
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured approach ensures complete verification, accurate
              reconciliation and timely resolution of discrepancies before ITR
              filing.
            </p>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Download Assistance",
                    desc: "We help you download Form 26AS from the e-filing portal or TRACES using your credentials or through secure screen-sharing sessions.",
                  },
                  {
                    step: "02",
                    title: "Comprehensive Review",
                    desc: "Our team reviews all parts — Part A, A1, B, C, D, E, F and G — to identify TDS, TCS, advance tax, refunds and high-value transactions.",
                  },
                  {
                    step: "03",
                    title: "TDS/TCS Verification",
                    desc: "We cross-check TDS amounts with Form 16, Form 16A, salary slips, payment records and vendor statements to identify discrepancies.",
                  },
                  {
                    step: "04",
                    title: "Mismatch Identification",
                    desc: "Any mismatch in PAN, TAN, amount, date, or missing entries is flagged with detailed notes on possible causes and impact.",
                  },
                  {
                    step: "05",
                    title: "Reconciliation Guidance",
                    desc: "We provide step-by-step guidance on contacting deductors, requesting correction statements, verifying challan details, or filing grievances.",
                  },
                  {
                    step: "06",
                    title: "Analysis Report & ITR Support",
                    desc: "A detailed analysis report is prepared showing verified TDS, TCS, advance tax and recommendations for ITR filing. We assist with ITR preparation if required.",
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

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="What You Need" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Form 26AS Analysis
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Download & Basic Analysis
                </p>

                <ul className="space-y-3">
                  {[
                    "PAN card",
                    "Income Tax e-filing portal login credentials (or net banking)",
                    "Date of birth (for PDF password)",
                    "Assessment year details",
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
                  For Detailed Reconciliation
                </p>

                <ul className="space-y-3">
                  {[
                    "Form 16 and Form 16A from all deductors",
                    "Salary slips and payment records",
                    "TDS/TCS certificates from vendors or buyers",
                    "Advance tax and self-assessment tax challan proofs",
                    "Previous year ITR acknowledgement",
                    "Bank statements showing tax payments",
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

          {/* FEE CALCULATOR */}
          <FeeCalculator />

          {/* WHO NEEDS THIS SERVICE */}
          <section id="ideal-for">
            <SectionLabel text="Ideal For" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Who Needs Form 26AS Analysis Services?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💼",
                  title: "Salaried Employees",
                  desc: "Employees wanting to verify employer TDS before ITR filing and ensure correct refund claims.",
                },
                {
                  icon: "👨‍💼",
                  title: "Professionals & Freelancers",
                  desc: "Consultants, doctors, lawyers and freelancers receiving payments with TDS deductions from multiple clients.",
                },
                {
                  icon: "🏢",
                  title: "Business Owners",
                  desc: "Businesses verifying TDS, TCS and advance tax before filing ITR-3, ITR-4 or ITR-5.",
                },
                {
                  icon: "🏠",
                  title: "Property Sellers",
                  desc: "Individuals who sold property and want to verify buyer TDS deduction under Section 194-IA.",
                },
                {
                  icon: "📊",
                  title: "Investors",
                  desc: "Investors checking TDS on interest income, dividends and capital gains before ITR filing.",
                },
                {
                  icon: "👥",
                  title: "Anyone Facing TDS Issues",
                  desc: "Taxpayers who received lower refunds, got demand notices, or suspect TDS mismatch in previous years.",
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
              Real Stories from Satisfied Clients
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rohit Sharma",
                  location: "Khatauli",
                  text: "My employer's TDS was not showing in Form 26AS. Taxvio identified the issue, contacted the employer, and helped me file ITR with manual Form 16 attachment. Refund received successfully.",
                },
                {
                  name: "Priya Gupta",
                  location: "Muzaffarnagar",
                  text: "I had TDS from 3 different clients and was confused about reconciliation. Taxvio analyzed my Form 26AS, verified all entries and prepared my ITR accurately. Very professional service.",
                },
                {
                  name: "Aditya Verma",
                  location: "Noida",
                  text: "Sold property and was worried about TDS verification. Taxvio checked Form 26AS Part B, confirmed buyer TDS deposit, and helped me claim correct credit in ITR-2. Highly recommended.",
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
              Form 26AS Analysis Services Across India
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, Uttar
              Pradesh</strong> and provides Form 26AS download, analysis, TDS
              verification and reconciliation services to individuals and
              businesses in <strong>Meerut</strong>, <strong>Noida</strong>,{" "}
              <strong>Delhi NCR</strong>, <strong>Ghaziabad</strong>,{" "}
              <strong>Mumbai</strong> and across India through secure online
              support.
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
                  title: "ITR Filing — Salary",
                  icon: "💼",
                  link: "/serviceslist/income-tax/itr-salary",
                  desc: "Annual income tax return filing for salaried individuals.",
                },
                {
                  title: "TDS Return Filing",
                  icon: "📊",
                  link: "/serviceslist/income-tax/tds-return",
                  desc: "Quarterly TDS return preparation and filing.",
                },
                {
                  title: "Income Tax Notice",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Response and resolution for tax department notices.",
                },
                {
                  title: "Tax Planning",
                  icon: "📈",
                  link: "/serviceslist/income-tax/tax-planning",
                  desc: "Strategic planning to minimize tax liability.",
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
                    Verify Your Tax Credits
                  </p>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get Your Form 26AS Analyzed Today
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't risk refund delays or tax notices due to TDS mismatches.
                    Taxvio provides complete Form 26AS download, analysis,
                    verification and reconciliation support for accurate ITR
                    filing. Starting ₹499.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get Analysis — ₹499
                  </Link>

                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    📞 Free Consultation
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
      value: "download",
      label: "Form 26AS Download Assistance",
      fee: 299,
      description:
        "Help with downloading Form 26AS from e-filing portal or TRACES.",
    },
    {
      value: "basic-analysis",
      label: "Basic Form 26AS Review",
      fee: 499,
      description:
        "Review of all parts of Form 26AS and identification of TDS, TCS and tax credits.",
    },
    {
      value: "verification",
      label: "TDS/TCS Verification",
      fee: 999,
      description:
        "Cross-verification of TDS amounts with Form 16, 16A and payment records.",
    },
    {
      value: "reconciliation",
      label: "Complete Reconciliation",
      fee: 1499,
      description:
        "Detailed reconciliation with salary slips, vendor statements and tax payments.",
    },
    {
      value: "mismatch-resolution",
      label: "Mismatch Resolution Support",
      fee: 1999,
      description:
        "Identification of mismatches and guidance on correction steps and deductor contact.",
    },
    {
      value: "itr-support",
      label: "26AS Analysis + ITR Filing",
      fee: 2999,
      description:
        "Complete Form 26AS analysis with ITR preparation and filing support.",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Form 26AS Analysis Fee
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
              * Fees may vary based on complexity, number of deductors, mismatch
              volume and reconciliation requirements. No government fees
              applicable. GST extra.
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
      q: "What is Form 26AS?",
      a: "Form 26AS is an annual consolidated tax statement that shows all TDS, TCS, advance tax, self-assessment tax, refunds and other tax-related information for a taxpayer's PAN. It is maintained by the Income Tax Department and accessible through the e-filing portal and TRACES.",
    },
    {
      q: "How often is Form 26AS updated?",
      a: "Form 26AS is updated regularly as TDS statements are filed and processed by deductors and as taxpayers make advance tax or self-assessment tax payments. It is advisable to download the latest version before ITR filing.",
    },
    {
      q: "Is Form 26AS the same as AIS (Annual Information Statement)?",
      a: "No. Form 26AS primarily shows TDS, TCS and tax payments. AIS (Annual Information Statement) is a more comprehensive statement showing financial transactions, income information and high-value transactions reported by third parties. Both should be verified before ITR filing.",
    },
    {
      q: "What if my TDS is not showing in Form 26AS?",
      a: "If TDS deducted by your employer or other deductor is not reflected, it may be because the TDS statement has not been filed or is under processing. Contact the deductor, verify filing status, and use manual TDS certificates (Form 16/16A) as supporting documents in your ITR.",
    },
    {
      q: "Can I claim TDS that is not shown in Form 26AS?",
      a: "You can claim TDS using manual TDS certificates (Form 16/16A) if it is not reflected in Form 26AS, but you should attach the certificates to your ITR and be prepared to provide proof if the department raises a query.",
    },
    {
      q: "How do I correct mismatches in Form 26AS?",
      a: "Mismatches can be corrected by requesting the deductor to file a correction statement. After the correction is processed, the updated information will reflect in Form 26AS. In some cases, you may need to file a grievance through the income tax portal.",
    },
    {
      q: "Do I need Form 26AS if I am filing ITR-1?",
      a: "Yes. Even for ITR-1 (salary income), Form 26AS is essential to verify employer TDS, advance tax payments and ensure correct refund calculation. Always cross-check Form 26AS with Form 16 before filing.",
    },
    {
      q: "How far back can I view Form 26AS?",
      a: "Form 26AS is typically available for the current assessment year and previous years. The exact availability depends on the Income Tax Department's records, but generally, you can view at least the last 5–7 years.",
    },
    {
      q: "Is Taxvio's Form 26AS analysis service secure?",
      a: "Yes. We follow strict confidentiality and data security protocols. We access Form 26AS only with your explicit consent and through secure methods. All client information is kept confidential and is not shared with third parties.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Form 26AS
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