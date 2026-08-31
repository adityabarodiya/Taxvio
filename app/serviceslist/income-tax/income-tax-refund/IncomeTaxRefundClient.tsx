"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Income Tax Refund Status Tracking and Processing Services",
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
    "Professional income tax refund status tracking, claim assistance, defective return rectification, reissue request support, CPC follow-up and grievance resolution for delayed or pending refunds.",
  serviceType: "Income Tax Refund Tracking and Processing Support",
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
      name: "How long does it take to receive an income tax refund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Income tax refunds are typically processed within 20–45 days of successful ITR e-verification. However, delays can occur due to defective returns, bank account issues, pending verification, TDS mismatches or CPC processing backlogs.",
      },
    },
    {
      "@type": "Question",
      name: "How can I check my income tax refund status?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can check refund status on the Income Tax e-filing portal under 'View Returns / Forms' or through the NSDL refund status portal by entering your PAN and assessment year. The status shows whether the refund is under process, approved, paid or has issues.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if my income tax refund is delayed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your refund is delayed beyond 60 days, check for defective return notices, verify bank account pre-validation, confirm ITR e-verification, and file a grievance on the e-filing portal or contact CPC Bangalore. Taxvio provides complete follow-up and resolution support.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get interest on delayed income tax refunds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Interest under Section 244A is payable at 0.5% per month (6% per annum) from 1st April of the assessment year till the date of refund grant. Interest is calculated automatically and credited along with the refund.",
      },
    },
  ],
};

export default function IncomeTaxRefundClient() {
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
          className="bg-green-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          💰 Refund Pending for Over 60 Days? Get Expert CPC Follow-Up and
          Expedite Your Income Tax Refund Today
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
              <span className="text-white">Income Tax Refund</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  💰 Refund Tracking & Processing
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Income Tax
                  <br />
                  <span className="text-[#7ecbf0]">Refund Status</span>
                  <br />
                  & Processing
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Waiting for your income tax refund for months?{" "}
                  <strong className="text-white">Refund delays</strong> can occur
                  due to defective returns, bank account issues, verification
                  pending or CPC processing backlogs. Taxvio provides{" "}
                  <strong className="text-white">professional refund tracking</strong>,
                  claim assistance, defective return rectification, reissue
                  requests and proactive CPC follow-up to expedite your refund
                  across India.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Track My Refund — ₹499 →
                  </Link>

                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    📞 Free Refund Check
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Status Tracking",
                    "✅ Defective Return Fix",
                    "✅ CPC Follow-Up",
                    "✅ Reissue Support",
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
                    ["⏱️", "Normal processing: 20–45 days"],
                    ["📊", "Track on e-filing portal"],
                    ["💳", "Direct bank credit"],
                    ["📈", "Interest @ 6% p.a. on delay"],
                    ["✅", "Expert CPC follow-up"],
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
              { number: "20,000+", label: "Refunds Tracked", icon: "📊" },
              { number: "₹499", label: "Starting Fee", icon: "💰" },
              { number: "95%", label: "Success Rate", icon: "✅" },
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
              "✔ Real-Time Tracking",
              "✔ Defect Resolution",
              "✔ CPC Communication",
              "✔ Grievance Filing",
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
          {/* WHAT IS INCOME TAX REFUND */}
          <section id="what-is-refund">
            <SectionLabel text="Understanding Refunds" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is an Income Tax Refund and How Is It Processed?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  An <strong>income tax refund</strong> is the amount returned by
                  the Income Tax Department when your total tax paid (TDS, TCS,
                  advance tax, self-assessment tax) exceeds your actual tax
                  liability for the financial year. The refund is claimed through
                  your Income Tax Return (ITR) and processed by the{" "}
                  <strong>Centralized Processing Centre (CPC), Bangalore</strong>.
                </p>

                <p>
                  After you file and <strong>e-verify your ITR</strong>, CPC
                  processes the return, verifies income details, TDS credits,
                  deductions claimed, and tax computations. If everything is in
                  order and excess tax is confirmed, the refund is approved and
                  credited directly to your pre-validated bank account.
                </p>

                <p>
                  The normal processing time is <strong>20–45 days</strong> from
                  ITR e-verification. However, delays can occur due to defective
                  returns, bank account validation issues, TDS mismatches,
                  scrutiny selection, or high processing volumes at CPC.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Refunds are credited with <strong>interest under Section
                  244A</strong> at <strong>0.5% per month (6% per annum)</strong>{" "}
                  if the delay exceeds the normal processing period. Interest is
                  calculated from 1st April of the assessment year to the date of
                  refund grant.
                </p>

                <p>
                  Common reasons for refund delays include defective return
                  notices (Section 139(9)), incorrect or non-validated bank
                  accounts, pending ITR verification, TDS credit mismatches with
                  Form 26AS, scrutiny assessment under Section 143(3), and
                  technical issues at CPC.
                </p>

                <p>
                  Taxvio helps taxpayers track refund status, identify and resolve
                  issues, rectify defective returns, pre-validate bank accounts,
                  file grievances, and follow up proactively with CPC to expedite
                  refund processing across India — Khatauli, Muzaffarnagar, Meerut,
                  Noida, Delhi NCR and Mumbai.
                </p>
              </div>
            </div>
          </section>

          {/* HOW TO CHECK REFUND STATUS */}
          <section id="check-status">
            <SectionLabel text="Track Your Refund" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Check Income Tax Refund Status Online
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              You can track your income tax refund status through multiple online
              portals. Here are the step-by-step methods.
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
                    Returns</strong> → <strong>View Filed Returns</strong>.
                  </li>
                  <li>
                    Select the relevant <strong>Assessment Year</strong>.
                  </li>
                  <li>
                    Click on the <strong>Acknowledgement Number</strong> to view
                    details.
                  </li>
                  <li>
                    Check <strong>Refund Status</strong> — it will show "Refund
                    Paid", "Refund Under Process", "Refund Failed" or other
                    status.
                  </li>
                  <li>
                    If paid, the refund amount, date of credit and mode will be
                    displayed.
                  </li>
                </ol>
              </div>

              <div className="bg-cyan-50 border-2 border-cyan-200 rounded-3xl p-8">
                <div className="text-3xl mb-4">🔍</div>

                <h3 className="text-2xl font-bold text-cyan-800 mb-4">
                  Method 2: NSDL Refund Status Portal
                </h3>

                <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                  <li>
                    Visit{" "}
                    <strong>
                      https://tin.tin.nsdl.com/oltas/refundstatuslogin.html
                    </strong>
                  </li>
                  <li>
                    Enter your <strong>PAN</strong>.
                  </li>
                  <li>
                    Select <strong>Assessment Year</strong>.
                  </li>
                  <li>
                    Enter the <strong>Captcha code</strong>.
                  </li>
                  <li>
                    Click <strong>Submit</strong>.
                  </li>
                  <li>
                    The portal will display refund status — whether approved,
                    paid, pending or failed.
                  </li>
                  <li>
                    This portal does not require login and can be accessed by
                    anyone with PAN.
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Note:</strong> Refund status is updated periodically. If
                your ITR was filed recently, wait 7–10 days before checking
                status. If no status is shown or status is stuck for over 60 days,
                professional follow-up may be required.
              </p>
            </div>
          </section>

          {/* REFUND STATUS TYPES */}
          <section id="status-types">
            <SectionLabel text="Status Meanings" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Understanding Different Refund Status Messages
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  status: "Refund Paid",
                  icon: "✅",
                  color: "green",
                  meaning:
                    "Refund has been successfully credited to your bank account. Check your bank statement for the credit entry.",
                },
                {
                  status: "Refund Under Process",
                  icon: "⏳",
                  color: "blue",
                  meaning:
                    "Your ITR is being processed at CPC. Refund will be credited once processing is complete. Normal timeline: 20–45 days.",
                },
                {
                  status: "Refund Approved",
                  icon: "✔️",
                  color: "cyan",
                  meaning:
                    "Refund has been approved by CPC and sent for payment. It will be credited to your bank within 2–7 working days.",
                },
                {
                  status: "Refund Failed",
                  icon: "❌",
                  color: "red",
                  meaning:
                    "Refund credit failed due to incorrect bank account details, account closed, or bank rejection. File a reissue request.",
                },
                {
                  status: "Defective Return",
                  icon: "⚠️",
                  color: "amber",
                  meaning:
                    "Your return has been marked defective under Section 139(9). You must rectify the defect within 15 days or refund will not be processed.",
                },
                {
                  status: "Pending Verification",
                  icon: "📨",
                  color: "purple",
                  meaning:
                    "ITR has not been e-verified within 30 days. Complete verification immediately to start refund processing.",
                },
                {
                  status: "Scrutiny Selected",
                  icon: "🔍",
                  color: "orange",
                  meaning:
                    "Your case has been selected for assessment under Section 143(3). Refund may be delayed until assessment is completed.",
                },
                {
                  status: "Refund Adjusted",
                  icon: "⚖️",
                  color: "gray",
                  meaning:
                    "Part or all of your refund has been adjusted against outstanding tax demand from previous years. Balance (if any) will be refunded.",
                },
                {
                  status: "Reissue Pending",
                  icon: "🔄",
                  color: "indigo",
                  meaning:
                    "You have filed a refund reissue request. CPC will process the request and credit the refund to the updated bank account.",
                },
              ].map((item) => (
                <div
                  key={item.status}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className={`text-xs font-bold uppercase px-2 py-1 rounded-full bg-${item.color}-100 text-${item.color}-700`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* COMMON REFUND DELAYS */}
          <section
            id="common-delays"
            className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="Delay Reasons" />

            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Common Reasons for Income Tax Refund Delays
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              Refund delays can occur due to various technical, compliance and
              procedural issues. Understanding the cause helps in faster
              resolution.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  reason: "Defective Return (Section 139(9))",
                  cause:
                    "Missing information, incorrect schedules, calculation errors, or incomplete annexures.",
                  solution:
                    "Rectify the defect by responding to the defect notice within 15 days on the e-filing portal. File a revised return if needed.",
                },
                {
                  reason: "ITR Not E-Verified",
                  cause:
                    "ITR filed but not verified within 30 days via Aadhaar OTP, EVC or physical ITR-V.",
                  solution:
                    "Complete e-verification immediately. If the 30-day window has passed, file a revised return and verify it.",
                },
                {
                  reason: "Bank Account Not Pre-Validated",
                  cause:
                    "Bank account used for refund is not pre-validated on the e-filing portal or validation failed.",
                  solution:
                    "Pre-validate bank account through the e-filing portal. Wait for penny-drop validation (₹1 deposit) and retry.",
                },
                {
                  reason: "Incorrect Bank Account Details",
                  cause:
                    "Wrong account number, IFSC code, or account holder name mismatch with PAN records.",
                  solution:
                    "File a refund reissue request with correct bank details. Update account on the e-filing portal and wait for re-credit.",
                },
                {
                  reason: "TDS / Tax Credit Mismatch",
                  cause:
                    "TDS claimed in ITR does not match Form 26AS or deductors have not filed TDS statements.",
                  solution:
                    "Reconcile with Form 26AS, contact deductors for correction statements, and file a revised ITR if necessary.",
                },
                {
                  reason: "Scrutiny Assessment Under Section 143(3)",
                  cause:
                    "Case selected for detailed scrutiny. Refund is withheld until assessment is completed.",
                  solution:
                    "Respond to assessment notices promptly, provide required documents, and cooperate with the assessing officer.",
                },
                {
                  reason: "Outstanding Tax Demand",
                  cause:
                    "Unpaid tax demand from previous assessment years. Refund is adjusted against the demand.",
                  solution:
                    "Clear outstanding demands or file an appeal if the demand is disputed. Remaining refund (if any) will be released.",
                },
                {
                  reason: "Technical Issues at CPC",
                  cause:
                    "Processing delays due to high volumes, system errors, or database issues at CPC Bangalore.",
                  solution:
                    "File a grievance on the e-filing portal, contact CPC helpline, or seek professional follow-up assistance.",
                },
              ].map((item) => (
                <div
                  key={item.reason}
                  className="bg-white border border-red-100 rounded-2xl p-5"
                >
                  <p className="font-bold text-red-600 text-sm mb-2">
                    ⚠️ {item.reason}
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

          {/* HOW TO FILE GRIEVANCE */}
          <section id="file-grievance">
            <SectionLabel text="Escalation Process" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to File a Grievance for Delayed Refund
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              If your refund is delayed beyond 60 days and there are no defect
              notices or pending actions, you can file a grievance through the
              Income Tax e-filing portal.
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">
                Step-by-Step Grievance Filing Process
              </h3>

              <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
                <li>
                  Log in to the Income Tax e-filing portal{" "}
                  <strong>https://eportal.incometax.gov.in</strong>
                </li>

                <li>
                  Navigate to <strong>Services</strong> → <strong>Grievance
                  (E-Nivaran)</strong>
                </li>

                <li>
                  Click <strong>Lodge Grievance</strong>
                </li>

                <li>
                  Select <strong>Grievance Category:</strong> Refund Related
                </li>

                <li>
                  Select <strong>Sub-Category:</strong> Non-receipt of Refund
                </li>

                <li>
                  Select <strong>Assessment Year</strong> for which refund is
                  pending
                </li>

                <li>
                  Enter <strong>ITR Acknowledgement Number</strong>
                </li>

                <li>
                  Describe the issue in detail — mention dates, status,
                  verification, bank account validation and any actions taken
                </li>

                <li>
                  Attach supporting documents (ITR acknowledgement, bank account
                  proof, screenshots)
                </li>

                <li>
                  Submit the grievance and note the <strong>Grievance Reference
                  Number</strong>
                </li>

                <li>
                  CPC will respond within <strong>15–30 days</strong>. Track
                  status under Grievance section
                </li>

                <li>
                  If not resolved, escalate to the jurisdictional{" "}
                  <strong>Aayakar Seva Kendra (ASK)</strong> or Income Tax
                  Ombudsman
                </li>
              </ol>

              <div className="mt-6 bg-white border border-purple-200 rounded-xl p-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Important:</strong> Keep all communication records,
                  screenshots, grievance reference numbers and response emails.
                  Professional assistance can significantly speed up grievance
                  resolution and CPC communication.
                </p>
              </div>
            </div>
          </section>

          {/* REFUND REISSUE */}
          <section id="refund-reissue">
            <SectionLabel text="Reissue Request" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Request Refund Reissue
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl">
              If your refund credit failed due to incorrect bank account details,
              you can request a refund reissue through the e-filing portal.
            </p>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6">
                Refund Reissue Request Process
              </h3>

              <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
                <li>
                  Log in to the Income Tax e-filing portal
                </li>

                <li>
                  Go to <strong>Services</strong> → <strong>Refund
                  Reissue</strong>
                </li>

                <li>
                  Select <strong>Assessment Year</strong> and{" "}
                  <strong>Acknowledgement Number</strong>
                </li>

                <li>
                  Select reason for reissue: Incorrect account number, account
                  closed, bank rejection, etc.
                </li>

                <li>
                  Enter <strong>correct bank account details</strong> (account
                  number, IFSC, account type)
                </li>

                <li>
                  Ensure the bank account is <strong>pre-validated</strong> on
                  the e-filing portal
                </li>

                <li>
                  Upload supporting documents (cancelled cheque, bank statement,
                  passbook front page)
                </li>

                <li>
                  Submit the request
                </li>

                <li>
                  CPC will process the reissue request within <strong>30–45
                  days</strong> and credit refund to the new account
                </li>

                <li>
                  Track reissue status under <strong>View Refund Reissue
                  Status</strong>
                </li>
              </ol>

              <div className="mt-6 bg-white border border-indigo-200 rounded-xl p-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> Refund reissue is only possible if the
                  original refund credit failed. If the refund was successfully
                  credited to a wrong account, you must contact your bank or file
                  a grievance with CPC.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="What You Need" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Refund Tracking & Follow-Up
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Status Tracking & Basic Follow-Up
                </p>

                <ul className="space-y-3">
                  {[
                    "PAN card",
                    "ITR acknowledgement number",
                    "Assessment year details",
                    "E-filing portal login credentials",
                    "Bank account details (for refund credit)",
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
                  For Defect Rectification / Reissue / Grievance
                </p>

                <ul className="space-y-3">
                  {[
                    "Filed ITR copy (XML or PDF)",
                    "Form 26AS for the assessment year",
                    "Defective return notice (if received)",
                    "Assessment order (if scrutiny was done)",
                    "Bank account proof (cancelled cheque, statement, passbook)",
                    "Communication from CPC or Income Tax Department",
                    "Previous year ITR (for comparison)",
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
              Taxvio's Refund Tracking & Processing Support
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured approach ensures proactive tracking, timely issue
              resolution and effective CPC communication to expedite your refund.
            </p>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Refund Status Check",
                    desc: "We check your refund status on the e-filing portal and NSDL portal, identify current status (under process, failed, paid, defective) and determine the cause of delay.",
                  },
                  {
                    step: "02",
                    title: "Issue Identification",
                    desc: "We review your ITR, Form 26AS, bank account details, verification status and any notices received to pinpoint the exact reason for refund delay or failure.",
                  },
                  {
                    step: "03",
                    title: "Defective Return Rectification",
                    desc: "If your return is marked defective, we identify the defect, prepare the necessary corrections, file response on the e-filing portal and ensure compliance within the 15-day deadline.",
                  },
                  {
                    step: "04",
                    title: "Bank Account Pre-Validation",
                    desc: "We verify your bank account pre-validation status, assist with validation if pending, and update correct account details for refund credit.",
                  },
                  {
                    step: "05",
                    title: "Grievance Filing & CPC Follow-Up",
                    desc: "If refund is delayed beyond 60 days, we file a detailed grievance on the e-filing portal, track grievance status, and follow up with CPC via email and phone for expedited resolution.",
                  },
                  {
                    step: "06",
                    title: "Reissue Request & Final Resolution",
                    desc: "For failed refund credits, we file refund reissue requests with correct bank details, monitor reissue status, and ensure refund is credited successfully. We provide confirmation and interest calculation.",
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
              Real Stories from Satisfied Clients
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Suresh Agarwal",
                  location: "Khatauli",
                  text: "My refund was stuck for 6 months due to bank account validation issue. Taxvio identified the problem, helped me pre-validate the account and filed reissue request. Received refund in 3 weeks.",
                },
                {
                  name: "Neha Sharma",
                  location: "Muzaffarnagar",
                  text: "Received defective return notice and was confused. Taxvio team rectified the defect, responded to CPC and my refund was processed within 30 days. Very professional service.",
                },
                {
                  name: "Vikram Singh",
                  location: "Noida",
                  text: "Refund was pending for over a year. Taxvio filed a detailed grievance, followed up with CPC, and I received my refund with interest. Highly recommend for delayed refund cases.",
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
              Income Tax Refund Services Across India
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, Uttar
              Pradesh</strong> and provides income tax refund tracking, claim
              assistance, defective return rectification and CPC follow-up to
              taxpayers in <strong>Meerut</strong>, <strong>Noida</strong>,{" "}
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
                  title: "ITR Filing — Salary",
                  icon: "💼",
                  link: "/serviceslist/income-tax/itr-salary",
                  desc: "Annual income tax return filing for salaried individuals.",
                },
                {
                  title: "Form 26AS Analysis",
                  icon: "📊",
                  link: "/serviceslist/income-tax/form-26as",
                  desc: "Tax credit verification and TDS reconciliation.",
                },
                {
                  title: "Income Tax Notice",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Response to tax department notices and scrutiny.",
                },
                {
                  title: "Revised ITR Filing",
                  icon: "🔄",
                  link: "/serviceslist/income-tax/revised-itr",
                  desc: "Correct errors in already filed returns.",
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
                    Get Your Refund Faster
                  </p>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Track & Expedite Your Income Tax Refund
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't wait months for your refund. Taxvio provides expert
                    tracking, defect resolution, CPC follow-up and grievance
                    filing to expedite your income tax refund. Get your money back
                    with interest. Starting ₹499.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Track Refund — ₹499
                  </Link>

                  <Link
                    href="tel:+918937980366"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    📞 Free Refund Check
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
      value: "status-check",
      label: "Refund Status Check & Tracking",
      fee: 499,
      description:
        "Basic refund status tracking on e-filing and NSDL portals with status explanation.",
    },
    {
      value: "defect-rectification",
      label: "Defective Return Rectification",
      fee: 999,
      description:
        "Identify defects, prepare corrections and file response to CPC within deadline.",
    },
    {
      value: "bank-validation",
      label: "Bank Account Pre-Validation Support",
      fee: 499,
      description:
        "Assist with bank account pre-validation and update correct details on e-filing portal.",
    },
    {
      value: "grievance-filing",
      label: "Grievance Filing & CPC Follow-Up",
      fee: 1499,
      description:
        "File detailed grievance, track status and follow up with CPC for delayed refunds.",
    },
    {
      value: "reissue-request",
      label: "Refund Reissue Request",
      fee: 999,
      description:
        "File reissue request with correct bank details and track reissue status.",
    },
    {
      value: "comprehensive",
      label: "Comprehensive Refund Resolution",
      fee: 2999,
      description:
        "Complete service — tracking, defect fix, bank validation, grievance filing, CPC follow-up and final resolution.",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Refund Service Fee
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
              * Fees depend on case complexity, delay duration, number of
              assessment years and escalation requirements. No government fees for
              refund processing. GST applicable.
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
      q: "How long does it normally take to receive an income tax refund?",
      a: "Income tax refunds are typically processed and credited within 20–45 days of successful ITR e-verification. However, processing times may vary based on CPC workload, ITR complexity and verification of tax credits.",
    },
    {
      q: "Can I track my refund status without logging into the e-filing portal?",
      a: "Yes. You can track refund status on the NSDL refund status portal (https://tin.tin.nsdl.com/oltas/refundstatuslogin.html) by entering your PAN and assessment year without login.",
    },
    {
      q: "What is Section 244A interest on refunds?",
      a: "Section 244A provides for interest at 0.5% per month (6% per annum) on income tax refunds if there is a delay in processing beyond the normal timeline. Interest is calculated from 1st April of the assessment year to the date of refund grant and is paid automatically with the refund.",
    },
    {
      q: "My refund failed. What should I do?",
      a: "If refund credit failed, check the reason on the e-filing portal. Common causes are incorrect bank account details, account closed, or bank rejection. File a refund reissue request with correct pre-validated bank account details.",
    },
    {
      q: "Can I change my bank account after filing ITR for refund?",
      a: "If refund has not been processed yet, you can update bank account on the e-filing portal under 'Profile Settings'. Ensure the new account is pre-validated. If refund was already issued to wrong account, file a reissue request or grievance.",
    },
    {
      q: "What is a defective return and how does it affect refund?",
      a: "A return is marked defective under Section 139(9) if it has missing information, incorrect schedules, calculation errors or incomplete annexures. Refund processing is paused until the defect is rectified. You must respond to the defect notice within 15 days.",
    },
    {
      q: "How do I pre-validate my bank account for refund?",
      a: "Log in to the e-filing portal → My Profile → Bank Accounts → Add Bank Account → Enter account details → Submit. The system will validate via penny drop (₹1 deposit). Once validated, the account can be used for refund credit.",
    },
    {
      q: "What if my refund is adjusted against outstanding demand?",
      a: "If you have unpaid tax demand from previous years, CPC may adjust your current year refund against that demand. The adjustment details will be mentioned in the refund intimation. Pay the outstanding demand or file an appeal if disputed.",
    },
    {
      q: "Can Taxvio help if my refund is delayed for multiple years?",
      a: "Yes. We handle complex cases involving multiple assessment years, long-pending refunds, scrutiny cases and repeated grievances. We provide end-to-end resolution including CPC escalation and Income Tax Ombudsman representation.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Income Tax Refund
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