// app/serviceslist/roc/dpt-3-filing/DPT3FilingClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DPT-3 Return of Deposits Filing Services - FY 2025-26 MCA Compliance",
  provider: {
    "@type": "ProfessionalService",
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
    "Professional DPT-3 filing services for Return of Deposits under Companies Act 2013 including outstanding loans disclosure, deposits not classified as deposits, director/shareholder loan reporting, auditor certificate coordination, MCA e-filing, and FY 2025-26 compliance. Complete end-to-end DPT-3 preparation for private limited companies, public limited companies, OPCs, and section 8 companies. Expert ROC filing, loan ledger compilation, and statutory compliance support. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "DPT-3 ROC Filing & Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
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
      name: "What is DPT-3 form and who needs to file it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DPT-3 is a RETURN OF DEPOSITS form that must be filed annually with the Ministry of Corporate Affairs (MCA) by ALL companies registered under the Companies Act, 2013 (except government companies and banking companies). Purpose: To disclose outstanding money received by the company that is NOT classified as 'deposits' under Companies Act. This includes: (1) Loans from directors, (2) Loans from shareholders, (3) Loans from relatives of directors, (4) Unsecured loans from banks/NBFCs, (5) Advance from customers, (6) Security deposits, (7) Inter-corporate loans. Filing Deadline: 30th June every year (for previous financial year). Example: For FY 2024-25 (ended 31st March 2025), DPT-3 must be filed by 30th June 2025. Penalty for late filing: ₹100 per day (company) + ₹100 per day (each officer in default).",
      },
    },
    {
      "@type": "Question",
      name: "What is the due date for DPT-3 filing for FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DPT-3 Filing Timeline for FY 2025-26: (1) Financial Year: 1st April 2025 to 31st March 2026. (2) Audit Completion: By 30th September 2026 (for companies requiring audit). (3) DPT-3 Filing Deadline: 30th June 2027 (within 3 months of financial year end). IMPORTANT: DPT-3 is filed AFTER financial year ends, based on audited financial statements. For FY 2024-25 (already ended 31st March 2025): DPT-3 deadline is 30th June 2025. If you missed this deadline, file immediately with additional fees (late filing penalty applies). Taxvio helps with both current year filing and belated filing with penalty calculation.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for DPT-3 filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Documents Required for DPT-3 Filing: (1) Audited Financial Statements (Balance Sheet, Profit & Loss Account, Cash Flow Statement) for the relevant financial year. (2) Loan Ledgers showing all outstanding loans from directors, shareholders, relatives, banks, NBFCs, etc. (3) Deposit Ledgers (if company has accepted any deposits). (4) Auditor's Certificate in Form DPT-3 (mandatory - auditor must certify the accuracy of information). (5) Board Resolution approving DPT-3 filing (passed in board meeting). (6) List of outstanding loans with details: lender name, PAN, amount, interest rate, date of loan, repayment terms. (7) Previous year DPT-3 acknowledgment (for reference). (8) Company CIN, PAN, and registered office address details. (9) Digital Signature Certificate (DSC) of authorized director for e-filing. Taxvio coordinates with your auditor for certificate and compiles all loan/deposit data from your financial statements.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function DPT3FilingClient() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

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
          ⚠️ DPT-3 Filing Deadline: 30th June 2026 for FY 2025-26 — File Now to Avoid Penalties!
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
                href="/serviceslist/roc"
                className="hover:text-white transition"
              >
                ROC Services
              </Link>
              <span>/</span>
              <span className="text-white">DPT-3 Filing</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📋 Annual ROC Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  DPT-3 Return of
                  <br />
                  <span className="text-[#7ecbf0]">Deposits Filing</span>
                  <br />
                  FY 2025-26 Compliance
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  File your{" "}
                  <strong className="text-white">
                    DPT-3 Return of Deposits
                  </strong>{" "}
                  accurately and on time with{" "}
                  <strong className="text-white">Taxvio's expert ROC filing</strong>{" "}
                  services. DPT-3 is{" "}
                  <strong className="text-white">
                    MANDATORY annual filing
                  </strong>{" "}
                  under{" "}
                  <strong className="text-white">
                    Section 73-76 of Companies Act, 2013
                  </strong>{" "}
                  and{" "}
                  <strong className="text-white">
                    Companies (Acceptance of Deposits) Rules, 2014
                  </strong>
                  . All companies (Private Ltd, Public Ltd, OPC) must disclose{" "}
                  <strong className="text-white">
                    outstanding loans, advances, and money received NOT classified as deposits
                  </strong>{" "}
                  including{" "}
                  <strong className="text-white">
                    director loans, shareholder loans, bank loans, NBFC borrowings
                  </strong>
                  . Filing deadline is{" "}
                  <strong className="text-white">30th June every year</strong>.{" "}
                  <strong className="text-white">Taxvio</strong> provides
                  end-to-end DPT-3 compliance —{" "}
                  <strong className="text-white">
                    applicability assessment, loan ledger compilation, auditor certificate coordination, DPT-3 form preparation, MCA e-filing, and penalty calculation for belated filing
                  </strong>
                  . Ensure{" "}
                  <strong className="text-white">100% ROC compliance</strong>{" "}
                  in <strong className="text-white">3-5 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File DPT-3 Now — ₹4,999 →
                  </Link>
                  <Link
                    href="#process"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    How It Works ↓
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 3-5 Days Filing",
                    "✅ Auditor Certificate Included",
                    "✅ MCA E-Filing",
                    "✅ Penalty Calculation",
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
                    ["📅", "Due date: 30th June every year"],
                    ["🏢", "All companies (except govt/banking)"],
                    ["💰", "Starting fee: ₹4,999"],
                    ["⏰", "Processing time: 3-5 days"],
                    ["📊", "MCA ROC compliance"],
                    ["✍️", "Auditor certificate required"],
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
              { number: "500+", label: "DPT-3 Filings Completed", icon: "📋" },
              { number: "3-5 Days", label: "Average Processing Time", icon: "⏰" },
              { number: "₹4,999", label: "Starting Fee", icon: "💼" },
              { number: "100%", label: "MCA Compliance Rate", icon: "✅" },
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
              "✔ MCA Registered Agents",
              "✔ CA & CS Team Support",
              "✔ Auditor Certificate Coordination",
              "✔ Penalty-Free Filing",
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
          {/* WHAT IS DPT-3 */}
          <section id="what-is-dpt3">
            <SectionLabel text="Understanding DPT-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What is DPT-3 Return of Deposits Form?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>DPT-3</strong> is a{" "}
                  <strong>RETURN OF DEPOSITS</strong> form that must be filed{" "}
                  <strong>annually</strong> with the{" "}
                  <strong>Ministry of Corporate Affairs (MCA)</strong> by{" "}
                  <strong>ALL companies</strong> registered under the{" "}
                  <strong>Companies Act, 2013</strong> (except government companies and banking companies).
                </p>
                <p>
                  The PRIMARY PURPOSE of DPT-3 is to{" "}
                  <strong>
                    disclose outstanding money received by the company that is NOT classified as 'deposits'
                  </strong>{" "}
                  under the Companies Act. This includes various types of borrowings and advances that companies receive in the normal course of business.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    📋 What Must Be Disclosed in DPT-3?
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Loans from Directors",
                        desc: "Any unsecured loan taken from directors of the company (with or without interest). Must disclose director name, PAN, loan amount, interest rate.",
                      },
                      {
                        title: "Loans from Shareholders",
                        desc: "Money received from shareholders beyond their share capital contribution. Includes loans from relatives of directors.",
                      },
                      {
                        title: "Bank Loans & NBFC Borrowings",
                        desc: "All loans from scheduled banks, cooperative banks, and NBFCs (even though these are exempt from deposit rules, must be disclosed in DPT-3).",
                      },
                      {
                        title: "Advances from Customers",
                        desc: "Money received from customers as advance for goods/services to be delivered in future (not yet earned as revenue).",
                      },
                      {
                        title: "Security Deposits",
                        desc: "Deposits received from employees, vendors, or other parties as security for contracts, leases, or services.",
                      },
                      {
                        title: "Inter-Corporate Loans",
                        desc: "Loans received from other companies (related or unrelated) under Section 186 of Companies Act.",
                      },
                      {
                        title: "Unsecured Loans",
                        desc: "Any unsecured borrowing from individuals, firms, or entities that doesn't qualify as 'deposit' under Companies (Acceptance of Deposits) Rules, 2014.",
                      },
                      {
                        title: "Exempted Deposits",
                        desc: "Money that would normally be classified as deposit but is exempted under Rule 2(1)(c) of Deposits Rules (e.g., loans from banks, government, etc.).",
                      },
                    ].map((item) => (
                      <li key={item.title} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-blue-700 text-sm mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    ✅ Who Must File DPT-3? (Applicability)
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Companies REQUIRED to File DPT-3
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Private Limited Companies</strong> (all types)
                        </li>
                        <li>
                          • <strong>Public Limited Companies</strong> (listed & unlisted)
                        </li>
                        <li>
                          • <strong>One Person Companies (OPC)</strong>
                        </li>
                        <li>
                          • <strong>Section 8 Companies</strong> (if they have outstanding loans)
                        </li>
                        <li>
                          • <strong>Foreign Companies</strong> operating in India
                        </li>
                        <li>
                          • <strong>Small Companies</strong> (as per Companies Act definition)
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Companies EXEMPTED from DPT-3 Filing
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Government Companies</strong> (owned by Central/State Govt)
                        </li>
                        <li>
                          • <strong>Banking Companies</strong> (regulated by RBI)
                        </li>
                        <li>
                          • <strong>NBFCs registered with RBI</strong> (if they don't accept public deposits)
                        </li>
                        <li>
                          • <strong>Companies with ZERO outstanding loans/advances</strong> (nil return still recommended)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ DPT-3 Filing Timeline & Deadlines
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Financial Year</th>
                          <th className="p-2 text-left">Year End</th>
                          <th className="p-2 text-left">DPT-3 Due Date</th>
                          <th className="p-2 text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            fy: "FY 2023-24",
                            end: "31 Mar 2024",
                            due: "30 Jun 2024",
                            status: "Passed",
                          },
                          {
                            fy: "FY 2024-25",
                            end: "31 Mar 2025",
                            due: "30 Jun 2025",
                            status: "Passed",
                          },
                          {
                            fy: "FY 2025-26",
                            end: "31 Mar 2026",
                            due: "30 Jun 2026",
                            status: "Passed",
                          },
                          {
                            fy: "FY 2026-27",
                            end: "31 Mar 2027",
                            due: "30 Jun 2027",
                            status: "Upcoming",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.fy}</td>
                            <td className="p-2 text-gray-600">{row.end}</td>
                            <td className="p-2 text-gray-600">{row.due}</td>
                            <td className="p-2">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-bold ${
                                  row.status === "Current"
                                    ? "bg-green-100 text-green-700"
                                    : row.status === "Upcoming"
                                    ? "bg-blue-100 text-blue-700"
                                    : row.status === "Passed"
                                    ? "bg-gray-100 text-gray-600"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                              >
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Note:</strong> DPT-3 is filed AFTER financial year ends, based on audited financial statements. Filing deadline is 30th June (within 3 months of FY end).
                  </p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Penalties for Late DPT-3 Filing
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Company Penalty",
                        desc: "₹100 per day from due date until actual filing date. Maximum penalty can go up to ₹5 lakh depending on delay period.",
                      },
                      {
                        title: "Officer in Default Penalty",
                        desc: "Every officer in default (directors, CFO, company secretary) is liable for ₹100 per day. Maximum penalty up to ₹1 lakh per officer.",
                      },
                      {
                        title: "Additional MCA Fees",
                        desc: "MCA charges additional fees for belated filing based on delay period: (1) Up to 30 days: 2x normal fee, (2) 30-60 days: 4x normal fee, (3) 60-90 days: 6x normal fee, (4) 90-180 days: 10x normal fee, (5) Beyond 180 days: 12x normal fee.",
                      },
                      {
                        title: "Prosecution Risk",
                        desc: "Continued non-compliance can lead to prosecution of directors under Section 450 of Companies Act. Repeated defaults may attract stricter action from ROC.",
                      },
                      {
                        title: "Credit Rating Impact",
                        desc: "Late ROC filings negatively impact company's credit rating, bank loan approvals, and vendor trust. Compliance history is checked during due diligence.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-orange-700 text-sm mb-1">
                          ✓ {item.title}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Common DPT-3 Filing Mistakes
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Not filing DPT-3 when company has ZERO outstanding loans (NIL return still recommended for compliance record)",
                      "Incorrect classification of loans (treating exempted borrowings as deposits or vice versa)",
                      "Missing auditor certificate (DPT-3 requires mandatory auditor certification)",
                      "Wrong financial year selection in MCA form (selecting current year instead of previous year)",
                      "Not disclosing loans from directors/shareholders (most common error)",
                      "Incorrect PAN details of lenders (causes MCA rejection)",
                      "Filing after deadline without calculating additional fees (leads to defective filing)",
                      "Not keeping supporting documents (loan agreements, board resolutions, ledger proofs)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <p className="font-bold text-yellow-800 mb-3">
                    🎯 Why File DPT-3 on Time?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Timely DPT-3 filing ensures:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {[
                      "Avoid daily penalties (₹100/day for company + ₹100/day per officer)",
                      "Maintain clean ROC compliance record (important for loans, investments, valuations)",
                      "Prevent director disqualification (repeated defaults can lead to DIN deactivation)",
                      "Ensure smooth annual filing (MGT-7, AOC-4) without compliance issues",
                      "Build trust with banks, investors, and regulatory authorities",
                      "Avoid prosecution risk under Companies Act, 2013",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FILING PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              DPT-3 Filing Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete MCA filing process for DPT-3 Return of Deposits — from data compilation to e-filing acknowledgment:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Applicability Assessment & Data Collection",
                    description:
                      "First, determine if your company needs to file DPT-3. Taxvio conducts APPLICABILITY ASSESSMENT: (1) Check company type (Private Ltd, Public Ltd, OPC, Section 8). (2) Verify if company has any outstanding loans, advances, or borrowings as of 31st March 2026 (for FY 2025-26). (3) Identify types of borrowings: director loans, shareholder loans, bank loans, NBFC borrowings, customer advances, security deposits, inter-corporate loans. (4) Determine if any borrowings are exempted under Deposits Rules. (5) Calculate total outstanding amount for each category. Documents collected: (a) Audited Balance Sheet as of 31st March 2026, (b) Loan ledgers from accounting software, (c) Bank loan statements, (d) Director loan agreements (if any), (e) Shareholder loan records, (f) Previous year DPT-3 acknowledgment (for reference). Taxvio provides DATA COLLECTION TEMPLATE to organize all loan information systematically.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Loan & Deposit Ledger Compilation",
                    description:
                      "Compile detailed ledger of all outstanding loans and borrowings. For EACH loan/borrowing, capture: (1) Lender name (individual/company/bank/NBFC), (2) Lender PAN (mandatory for individuals and companies), (3) Lender category (director, shareholder, relative, bank, NBFC, customer, etc.), (4) Loan amount outstanding as of 31st March 2026, (5) Date of loan sanction/disbursement, (6) Interest rate (if applicable), (7) Repayment terms (EMI, lump sum, on-demand), (8) Security/collateral (if any), (9) Purpose of loan (working capital, business expansion, etc.), (10) Whether loan is secured or unsecured. Example ledger format: | Lender Name | PAN | Category | Amount | Interest | Date | |-------------|-----|----------|--------|----------|------| | Rajesh Kumar (Director) | ABCPK1234A | Director | ₹5,00,000 | 12% | 15-Jan-2025 | | HDFC Bank | - | Bank | ₹20,00,000 | 10% | 01-Apr-2025 | | ABC Pvt Ltd | AABCA5678B | Inter-corporate | ₹10,00,000 | 11% | 10-Feb-2025 | Taxvio compiles this data from your financial statements and accounting records into MCA-compatible format.",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Auditor Certificate Coordination (Form DPT-3)",
                    description:
                      "DPT-3 filing REQUIRES mandatory auditor certificate. The company's statutory auditor must certify that: (1) Information provided in DPT-3 is accurate and complete, (2) Outstanding loans/borrowings are correctly classified (deposit vs non-deposit), (3) Company has complied with Companies (Acceptance of Deposits) Rules, 2014, (4) No deposits are outstanding beyond permitted limits, (5) All disclosures are as per audited financial statements. Process: (1) Taxvio coordinates with your statutory auditor (or provides auditor if you don't have one). (2) Share compiled loan ledger and financial statements with auditor. (3) Auditor reviews data and verifies against books of accounts. (4) Auditor issues certificate in prescribed format (attached with DPT-3 form). (5) Certificate is digitally signed by auditor using DSC. Auditor fee: Typically ₹2,000-5,000 for DPT-3 certificate (included in Taxvio Complete package). IMPORTANT: Without auditor certificate, DPT-3 form cannot be filed on MCA portal. Taxvio ensures timely certificate procurement to avoid filing delays.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "Board Resolution for DPT-3 Filing",
                    description:
                      "Before filing DPT-3, company must pass BOARD RESOLUTION authorizing the filing. Board Meeting Requirements: (1) Convene board meeting (physical or video conferencing). (2) Agenda: 'Approval of DPT-3 Return of Deposits for FY 2025-26'. (3) Present compiled loan ledger and auditor certificate to directors. (4) Directors review and approve the information to be filed. (5) Pass resolution: 'RESOLVED THAT pursuant to Section 73-76 of Companies Act, 2013 and Companies (Acceptance of Deposits) Rules, 2014, the Board hereby approves the filing of Form DPT-3 for FY 2025-26 disclosing outstanding loans and borrowings as of 31st March 2026. RESOLVED FURTHER THAT [Director Name] be and is hereby authorized to sign and file Form DPT-3 on MCA portal and do all such acts and things as may be necessary to give effect to this resolution.' (6) Prepare Minutes of Board Meeting. (7) File Form MGT-14 with ROC within 30 days (if required based on company type). Taxvio provides BOARD RESOLUTION TEMPLATE and MINUTES FORMAT for DPT-3 approval. For small companies, resolution can be passed via circulation (without physical meeting).",
                    duration: "1 day",
                  },
                  {
                    step: 5,
                    title: "DPT-3 Form Preparation & Data Entry",
                    description:
                      "Prepare Form DPT-3 on MCA portal with accurate information. Form DPT-3 contains following sections: (1) Corporate Identity Number (CIN) of the company. (2) Financial Year for which return is filed (e.g., 2025-26). (3) Date of Balance Sheet (31st March 2026). (4) Outstanding deposits (if any): Amount, number of depositors, interest rate, maturity details. (5) Outstanding money NOT classified as deposits (THIS IS THE MAIN SECTION): (a) Loans from banks, (b) Loans from NBFCs, (c) Loans from directors, (d) Loans from shareholders, (e) Loans from relatives of directors, (f) Inter-corporate loans, (g) Advances from customers, (h) Security deposits, (i) Any other borrowings. (6) Details of each lender: Name, PAN, address, amount, interest rate, date of loan, repayment terms. (7) Total outstanding amount (sum of all categories). (8) Auditor certificate attachment (mandatory). (9) Board resolution attachment (if applicable). (10) Declaration by director/company secretary that information is true and correct. Taxvio prepares DPT-3 form with ERROR-FREE data entry, ensuring all fields are correctly filled as per MCA requirements. Form is reviewed by CA/CS before final submission.",
                    duration: "1 day",
                  },
                  {
                    step: 6,
                    title: "MCA E-Filing & Payment of Fees",
                    description:
                      "File Form DPT-3 on MCA portal (www.mca.gov.in). E-Filing Process: (1) Login to MCA portal using company credentials. (2) Navigate to 'MCA Services' → 'e-Filing' → 'Form DPT-3'. (3) Upload pre-filled DPT-3 form (prepared in Step 5). (4) Attach auditor certificate (PDF, digitally signed). (5) Attach board resolution (PDF, if applicable). (6) Attach supporting documents (loan ledgers, bank statements, etc. — optional but recommended). (7) Verify all information in preview mode. (8) Calculate filing fees based on company's authorized capital: (a) Up to ₹1 lakh: ₹200, (b) ₹1-5 lakh: ₹300, (c) ₹5-25 lakh: ₹400, (d) ₹25 lakh-1 crore: ₹500, (e) Above ₹1 crore: ₹600. (9) Pay fees online via net banking, credit/debit card, or NEFT/RTGS. (10) If filing after 30th June deadline, additional fees apply (2x to 12x based on delay period). (11) Digitally sign form using DSC of authorized director (Class 2 or Class 3 DSC). (12) Submit form to MCA. (13) Receive SRN (Service Request Number) as acknowledgment of submission. Taxvio handles entire e-filing process including fee calculation, payment, and DSC signing. You just need to provide documents and approvals.",
                    duration: "1 day",
                  },
                  {
                    step: 7,
                    title: "MCA Processing & Acknowledgment",
                    description:
                      "After submission, MCA processes DPT-3 form. Processing Timeline: (1) Immediate: SRN generated and email confirmation sent to registered email ID of company and authorized director. (2) Within 24-48 hours: Form goes for MCA scrutiny (automated + manual check). (3) If no defects: Form is APPROVED and final acknowledgment (Form DPT-3 acknowledgment) is generated. (4) If defects found: MCA issues DEFECT LETTER listing errors/missing information. Company has 15 days to rectify defects and resubmit. (5) After defect rectification: Form is re-processed and approved (if all defects are fixed). Download Final Acknowledgment: (1) Login to MCA portal. (2) Go to 'MCA Services' → 'Document Related Services' → 'View Public Documents' or 'Track Payment Status'. (3) Enter SRN number. (4) Download approved DPT-3 form with MCA stamp and approval date. (5) Save acknowledgment for future reference (required for annual filings, audits, due diligence). IMPORTANT: Keep DPT-3 acknowledgment safely — it's PROOF of compliance and may be required during bank loan processing, investor due diligence, ROC inspections, or statutory audits. Taxvio monitors filing status and ensures approval without defects. If MCA raises queries, we handle rectification promptly.",
                    duration: "2-3 days (MCA processing)",
                  },
                  {
                    step: 8,
                    title: "Post-Filing Compliance & Record Keeping",
                    description:
                      "After DPT-3 filing is complete, maintain proper records for future reference. Post-Filing Requirements: (1) Save DPT-3 acknowledgment (PDF) in company records. (2) Update compliance calendar for next year's DPT-3 filing (30th June 2027 for FY 2026-27). (3) Maintain loan ledgers and supporting documents for minimum 8 years (as per Companies Act record-keeping requirements). (4) Inform auditor about DPT-3 filing (for next year's audit planning). (5) Update board about compliance completion (in next board meeting). (6) If company has deposits (not just loans), ensure ongoing deposit compliance: (a) Maintain deposit reserve account (20% of deposits maturing during year), (b) File DPT-1 (if accepting fresh deposits), (c) Renew deposit insurance (if applicable), (d) Monitor deposit maturity schedule. (7) For next financial year: Start collecting loan data from April 2026 onwards (don't wait until March 2027). Taxvio provides COMPLIANCE CALENDAR with all ROC filing deadlines including DPT-3, MGT-7, AOC-4, ADT-1, etc. We also send REMINDERS 60 days before next DPT-3 deadline to ensure timely filing.",
                    duration: "Ongoing",
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
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {item.description}
                      </p>
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
                  <strong>3-5 working days</strong> from document submission to MCA
                  acknowledgment. Breakdown: Data collection (1-2 days) + Ledger
                  compilation (1-2 days) + Auditor certificate (2-3 days) + Board
                  resolution (1 day) + Form preparation (1 day) + MCA e-filing &
                  approval (2-3 days).{" "}
                  <strong>Taxvio handles entire process</strong> — you just provide
                  documents and approvals.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for DPT-3 Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Audited Balance Sheet as of 31st March (for relevant FY)",
                    "Audited Profit & Loss Account for the financial year",
                    "Complete Loan Ledgers (all outstanding borrowings)",
                    "Auditor's Certificate in DPT-3 format (digitally signed)",
                    "Board Resolution approving DPT-3 filing",
                    "Company CIN and PAN details",
                    "Registered office address proof",
                    "Digital Signature Certificate (DSC) of authorized director",
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
                  Supporting Documents (Recommended)
                </p>
                <ul className="space-y-3">
                  {[
                    "Bank loan statements/sanction letters",
                    "Director loan agreements (if applicable)",
                    "Shareholder loan records",
                    "Inter-corporate loan agreements",
                    "Customer advance ledgers",
                    "Security deposit records",
                    "Previous year DPT-3 acknowledgment (for reference)",
                    "List of lenders with PAN details (name, PAN, amount, interest rate)",
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

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <p className="font-bold text-blue-800 mb-3">
                📝 Additional Information Required
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Financial year for which DPT-3 is being filed (e.g., 2025-26)",
                  "Date of balance sheet (typically 31st March)",
                  "Total outstanding loan amount (category-wise breakdown)",
                  "Number of lenders (directors, shareholders, banks, others)",
                  "Whether company has any deposits (yes/no)",
                  "If deposits exist: amount, number of depositors, interest rate",
                  "Authorized signatory details (director name, DIN, email, mobile)",
                  "MCA portal login credentials (for e-filing)",
                  "Contact details of statutory auditor (for certificate coordination)",
                  "Any previous DPT-3 filing history (first-time or recurring)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Critical Errors to Avoid" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Mistakes in DPT-3 Filing
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                DPT-3 filing has specific compliance requirements — avoid these critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Not Filing DPT-3 When Company Has Zero Loans",
                    icon: "📋",
                    problem:
                      "Many companies think DPT-3 is only required if they have outstanding loans. WRONG! While DPT-3 is technically for disclosing outstanding money, it's HIGHLY RECOMMENDED to file NIL DPT-3 even if company has zero loans. Why? (1) Creates compliance record with MCA, (2) Shows proactive compliance culture, (3) Avoids confusion during ROC inspections, (4) Prevents notices from MCA asking 'why didn't you file DPT-3?'. If company has zero outstanding loans, file DPT-3 with NIL values in all fields.",
                    solution:
                      "FILE DPT-3 EVERY YEAR regardless of loan status. If zero loans: Enter '0' in all outstanding amount fields. Attach auditor certificate stating 'No outstanding loans/borrowings as of balance sheet date'. File before 30th June deadline. This creates clean compliance trail. Taxvio recommends NIL filing for all companies (even dormant companies) to maintain perfect ROC record.",
                  },
                  {
                    mistake: "Missing Auditor Certificate",
                    icon: "✍️",
                    problem:
                      "DPT-3 form REQUIRES mandatory auditor certificate. Without it, MCA portal won't accept the form. Common scenarios: (1) Company doesn't have statutory auditor (delay in auditor appointment), (2) Auditor is unavailable/unresponsive, (3) Auditor refuses to certify (due to discrepancies in books), (4) Company tries to file without certificate (form gets rejected). Result: Filing delayed, penalty accumulates (₹100/day), compliance deadline missed.",
                    solution:
                      "Coordinate with auditor WELL BEFORE deadline (start 30 days prior to 30th June). If you don't have auditor, Taxvio can connect you with empanelled CAs for DPT-3 certification (₹2,000-5,000 fee). Ensure books of accounts are up-to-date before approaching auditor. Provide complete loan ledger to auditor for verification. Get certificate digitally signed (mandatory for MCA e-filing). Taxvio's Complete package includes auditor certificate coordination — we handle entire process.",
                  },
                  {
                    mistake: "Wrong Financial Year Selection",
                    icon: "📅",
                    problem:
                      "Selecting WRONG financial year in DPT-3 form. Example: Filing in June 2026 but selecting FY 2025-26 instead of FY 2024-25. DPT-3 is filed for PREVIOUS financial year (already ended). Common confusion: (1) Company thinks DPT-3 is for current year (wrong), (2) Company files for FY that hasn't ended yet (wrong), (3) Company selects assessment year instead of financial year (wrong). MCA rejects forms with incorrect FY selection.",
                    solution:
                      "DPT-3 filing rule: File in June 2026 for FY 2025-26 (ended 31st March 2026). Formula: Filing Year - 1 = Financial Year. Example: (1) June 2025 filing → FY 2024-25, (2) June 2026 filing → FY 2025-26, (3) June 2027 filing → FY 2026-27. Taxvio pre-fills correct financial year in DPT-3 form. We verify balance sheet date matches selected FY. Double-check before submission.",
                  },
                  {
                    mistake: "Incorrect Lender PAN Details",
                    icon: "🆔",
                    problem:
                      "Entering WRONG PAN details of lenders (directors, shareholders, companies). MCA validates PAN against Income Tax database. If PAN is incorrect: (1) Form gets defective status, (2) MCA sends defect letter, (3) Company has 15 days to rectify, (4) If not rectified, form is rejected, (5) Must re-file with correct PAN (pay fees again). Common errors: Typo in PAN, old PAN (before name change), PAN of company instead of individual director, missing PAN for lenders above ₹50,000.",
                    solution:
                      "Verify PAN of EVERY lender before filing. For individuals: Cross-check with PAN card. For companies: Verify CIN and PAN from MCA portal. For banks/NBFCs: PAN not required (use bank code). Maintain lender database with updated PAN details. Taxvio validates all PANs against official records before form submission. We flag any discrepancies for your confirmation.",
                  },
                  {
                    mistake: "Not Disclosing Director/Shareholder Loans",
                    icon: "👥",
                    problem:
                      "Most COMMON mistake in DPT-3 filing. Companies disclose bank loans but HIDE director loans or shareholder loans. Why? Directors think personal loans to company are 'private arrangement' and don't need disclosure. WRONG! Section 73-76 requires disclosure of ALL outstanding money including: (1) Loans from directors (even interest-free), (2) Loans from shareholders, (3) Loans from relatives of directors, (4) Any money received from related parties. If hidden and discovered during ROC inspection: Penalty up to ₹25 lakh + director prosecution.",
                    solution:
                      "Disclose ALL loans regardless of source. Even if loan is from director's personal savings, interest-free, and repaid during year — if it was outstanding on 31st March (balance sheet date), it MUST be disclosed in DPT-3. Taxvio reviews related party transactions from financial statements to ensure no director/shareholder loans are missed. We cross-verify with balance sheet notes on related party disclosures.",
                  },
                  {
                    mistake: "Filing After Deadline Without Additional Fees",
                    icon: "💰",
                    problem:
                      "Missing 30th June deadline and filing DPT-3 without paying ADDITIONAL FEES. MCA charges additional fees for belated filing: (1) Up to 30 days late: 2x normal fee, (2) 30-60 days: 4x fee, (3) 60-90 days: 6x fee, (4) 90-180 days: 10x fee, (5) Beyond 180 days: 12x fee. If company pays only normal fee (not additional fee), form is rejected. Company must re-file with correct fees (losing first payment).",
                    solution:
                      "Calculate additional fees BEFORE filing if deadline is missed. Example: Normal fee = ₹400. If 45 days late (30-60 day slab): Additional fee = 4x = ₹1,600. Total payable = ₹2,000. MCA portal auto-calculates additional fees based on delay days. Verify calculated fee before payment. Taxvio calculates exact additional fees and informs you before filing. We ensure correct payment to avoid rejection.",
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
            <SectionLabel text="Our Packages" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              DPT-3 Filing Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive DPT-3 filing packages for FY 2025-26 compliance:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹4,999",
                  popular: false,
                  features: [
                    "Applicability assessment (whether DPT-3 is required)",
                    "Loan & deposit data compilation from financial statements",
                    "DPT-3 form preparation (data entry)",
                    "MCA e-filing with normal fees",
                    "SRN generation and tracking",
                    "Filing acknowledgment download",
                    "Email support",
                  ],
                  limitations: [
                    "Auditor certificate NOT included (arrange separately)",
                    "Board resolution NOT included",
                    "No belated filing support",
                    "No compliance calendar",
                  ],
                  ideal:
                    "Companies with simple loan structure and existing auditor",
                },
                {
                  name: "Standard",
                  price: "₹7,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "Auditor certificate coordination (fee included up to ₹3,000)",
                    "Board resolution drafting & template",
                    "Loan ledger compilation (up to 10 lenders)",
                    "PAN verification of all lenders",
                    "Belated filing support (additional fees calculated)",
                    "Defect rectification (if MCA raises queries)",
                    "Priority support (WhatsApp + email)",
                  ],
                  limitations: ["Complex loan structures (10+ lenders) charged extra"],
                  ideal:
                    "Most private limited companies with director/shareholder loans",
                },
                {
                  name: "Complete",
                  price: "₹14,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Unlimited lender compilation (no cap on number of lenders)",
                    "Complex loan structure handling (banks, NBFCs, directors, shareholders, inter-corporate)",
                    "Previous year DPT-3 review (for consistency)",
                    "Compliance calendar for next year (DPT-3 + MGT-7 + AOC-4)",
                    "60-day reminder for next year filing",
                    "ROC notice response support (if any)",
                    "Dedicated CA + CS team",
                    "First year annual compliance consultation (free)",
                  ],
                  limitations: [],
                  ideal:
                    "Companies with complex borrowings or multiple lenders",
                },
              ].map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative border-2 rounded-3xl p-8 ${
                    pkg.popular
                      ? "border-[#00416a] shadow-2xl scale-105"
                      : "border-gray-200 shadow-lg"
                  } bg-white`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00416a] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#00416a] mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-4xl font-extrabold text-gray-800 mb-1">
                      {pkg.price}
                    </p>
                    <p className="text-sm text-gray-500">One-time fee per FY</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">
                      Included Services
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-green-600 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.limitations.length > 0 && (
                    <div className="mb-6 bg-gray-50 rounded-xl p-4">
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                        Not Included
                      </p>
                      <ul className="space-y-1">
                        {pkg.limitations.map((limit) => (
                          <li
                            key={limit}
                            className="flex items-start gap-2 text-xs text-gray-500"
                          >
                            <span className="text-red-400 mt-0.5">✗</span>
                            {limit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6 bg-blue-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-blue-700 mb-1">
                      Ideal For
                    </p>
                    <p className="text-xs text-gray-600">{pkg.ideal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-xl font-bold transition ${
                      pkg.popular
                        ? "bg-[#00416a] text-white hover:bg-[#002b45]"
                        : "bg-gray-100 text-[#00416a] hover:bg-gray-200"
                    }`}
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
              <p className="font-bold text-purple-800 mb-4">
                💼 Add-On Services (Optional)
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    service: "Belated Filing (30-60 days late)",
                    price: "+₹2,000",
                    desc: "Additional fee handling & penalty calculation",
                  },
                  {
                    service: "Defect Rectification",
                    price: "+₹3,000",
                    desc: "If MCA raises queries after filing",
                  },
                  {
                    service: "ROC Notice Response",
                    price: "₹9,999",
                    desc: "Reply to MCA/ROC notices on DPT-3",
                  },
                  {
                    service: "Additional Auditor Certificate",
                    price: "₹3,000",
                    desc: "For companies without existing auditor",
                  },
                  {
                    service: "Loan Ledger Digitization",
                    price: "₹5,000",
                    desc: "Convert physical records to digital format",
                  },
                  {
                    service: "Compliance Calendar (Annual)",
                    price: "₹2,999/year",
                    desc: "All ROC filing deadlines with reminders",
                  },
                ].map((addon) => (
                  <div
                    key={addon.service}
                    className="bg-white rounded-xl p-4 border border-purple-200"
                  >
                    <p className="font-bold text-purple-700 text-sm mb-1">
                      {addon.service}
                    </p>
                    <p className="text-2xl font-extrabold text-[#00416a] mb-2">
                      {addon.price}
                    </p>
                    <p className="text-xs text-gray-600">{addon.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Success Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              What Our DPT-3 Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Amit Verma, Director",
                  company: "Verma Technologies Pvt Ltd",
                  location: "Noida, UP",
                  text: "We had director loans of ₹15 lakh and were confused about DPT-3 filing. Taxvio handled everything — from auditor certificate to MCA filing. They even caught an error in our loan ledger that could have caused MCA rejection. Filed 10 days before deadline, zero penalties. Excellent service!",
                },
                {
                  name: "Sneha Kapoor, CFO",
                  company: "Kapra Retail Pvt Ltd",
                  location: "Delhi NCR",
                  text: "We missed the DPT-3 deadline by 45 days and were worried about penalties. Taxvio calculated exact additional fees, coordinated with our auditor, and filed within 3 days. Their Standard package (₹7,999) was worth it — saved us from ROC notices and potential prosecution. Highly professional team!",
                },
                {
                  name: "Rajesh Kumar, Proprietor",
                  company: "Kumar Industries (converted to Pvt Ltd)",
                  location: "Meerut, UP",
                  text: "First year after converting to Private Limited, we didn't know about DPT-3. Taxvio educated us on applicability, compiled loan data from our CA, and filed NIL DPT-3 (we had no loans). Now we have clean compliance record. Their Complete package includes next year reminders — very thoughtful!",
                },
              ].map((testimonial, i) => (
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
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-[#00416a]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Service Locations" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              DPT-3 Filing Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides online DPT-3 filing services for companies across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote filing with digital
              document submission, auditor coordination, and MCA e-filing.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Meerut",
                "Noida",
                "Delhi NCR",
                "Mumbai",
                "Pune",
                "Ahmedabad",
                "Surat",
                "Ghaziabad",
                "Gurgaon",
                "Lucknow",
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
            <SectionLabel text="Related Services" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Other ROC & Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Annual ROC Filing",
                  icon: "📊",
                  link: "/serviceslist/roc/annual-filing",
                  desc: "MGT-7, AOC-4, ADT-1 compliance",
                },
                {
                  title: "Nidhi Company Registration",
                  icon: "🏦",
                  link: "/serviceslist/roc/nidhi-company-registration",
                  desc: "Mutual benefit society incorporation",
                },
                {
                  title: "NBFC Registration",
                  icon: "🏦",
                  link: "/serviceslist/roc/nbfc-registration",
                  desc: "RBI-registered NBFC incorporation",
                },
                {
                  title: "Company Incorporation",
                  icon: "🏢",
                  link: "/serviceslist/roc/company-registration",
                  desc: "Private/Public Ltd company setup",
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                  <span className="text-sm text-[#00416a] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </section>
              <InquiryFormButton />
          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Ensure ROC Compliance
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File DPT-3 Before 30th June — Avoid Penalties
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get expert DPT-3 filing services for FY 2025-26. Complete
                    compliance with auditor certificate, loan ledger compilation,
                    MCA e-filing, and penalty-free submission. Starting ₹4,999
                    with dedicated CA & CS team. File now before deadline!
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File DPT-3 Now — ₹4,999
                  </Link>
                  <Link
                    href="#our-services"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    View Packages
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

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is DPT-3 filing mandatory if my company has no outstanding loans?",
      a: "While DPT-3 is technically for disclosing outstanding loans/deposits, it's HIGHLY RECOMMENDED to file NIL DPT-3 even if your company has zero loans. Why? (1) Creates compliance record with MCA, (2) Shows proactive compliance culture, (3) Avoids confusion during ROC inspections, (4) Prevents MCA notices asking 'why didn't you file?'. Many companies get ROC notices for non-filing even with zero loans. Filing NIL DPT-3 takes same effort as regular filing and costs same fees. Taxvio recommends ALL companies file DPT-3 annually regardless of loan status. For NIL filing: Enter '0' in all outstanding amount fields, attach auditor certificate stating 'No outstanding loans as of balance sheet date', file before 30th June deadline.",
    },
    {
      q: "What is the penalty for late DPT-3 filing?",
      a: "Penalty for late DPT-3 filing has TWO components: (1) DAILY PENALTY: ₹100 per day from due date (30th June) until actual filing date. This applies to BOTH company (₹100/day) AND every officer in default (₹100/day per director). Maximum penalty can go up to ₹5 lakh for company and ₹1 lakh per officer. (2) ADDITIONAL MCA FEES: MCA charges additional fees for belated filing based on delay period: (a) Up to 30 days late: 2x normal filing fee, (b) 30-60 days: 4x fee, (c) 60-90 days: 6x fee, (d) 90-180 days: 10x fee, (e) Beyond 180 days: 12x fee. Example: If normal fee is ₹400 and you file 45 days late, additional fee = 4x = ₹1,600. Total payable = ₹2,000. MCA portal auto-calculates additional fees during e-filing. Taxvio calculates exact penalty before filing so you know total cost.",
    },
    {
      q: "Do I need auditor certificate for DPT-3 filing?",
      a: "YES. Auditor certificate is MANDATORY for DPT-3 filing. Without it, MCA portal won't accept the form. Requirements: (1) Certificate must be from company's statutory auditor (CA), (2) Certificate must be in prescribed format (attached with DPT-3 form), (3) Certificate must be digitally signed by auditor using DSC, (4) Auditor must certify accuracy of information and compliance with Deposits Rules. Auditor fee: Typically ₹2,000-5,000 for DPT-3 certificate (varies by CA and company size). If you don't have statutory auditor: Taxvio can connect you with empanelled CAs for DPT-3 certification (fee included in Standard & Complete packages). IMPORTANT: Start auditor coordination 30 days before deadline — don't wait until last week (auditors are busy in June).",
    },
    {
      q: "Can I file DPT-3 myself on MCA portal?",
      a: "YES, you can file DPT-3 yourself IF you have: (1) MCA portal login credentials (company registered email/mobile), (2) Digital Signature Certificate (DSC) of authorized director (Class 2 or Class 3), (3) Complete loan ledger data in MCA-compatible format, (4) Auditor certificate (digitally signed), (5) Board resolution approving filing, (6) Knowledge of MCA e-filing process. However, we DON'T recommend self-filing because: (1) High risk of errors (wrong data entry causes MCA rejection), (2) Auditor certificate coordination is time-consuming, (3) Additional fee calculation is complex (if filing late), (4) Defect rectification requires expertise (if MCA raises queries), (5) Time-consuming (10-15 hours for first-time filers). Taxvio's Basic package (₹4,999) handles entire filing — you just provide documents. Saves time, avoids errors, ensures approval.",
    },
    {
      q: "What loans must be disclosed in DPT-3?",
      a: "DPT-3 requires disclosure of ALL outstanding money received by company that is NOT classified as 'deposits' under Companies Act. This includes: (1) Loans from directors (with or without interest), (2) Loans from shareholders, (3) Loans from relatives of directors, (4) Bank loans (all scheduled banks, cooperative banks), (5) NBFC borrowings, (6) Inter-corporate loans (from other companies), (7) Advances from customers (for goods/services to be delivered), (8) Security deposits (from employees, vendors, tenants), (9) Unsecured loans from individuals/firms, (10) Any other borrowings exempted from deposit rules. IMPORTANT: Even if loan is interest-free, from director's personal savings, or repaid during year — if it was OUTSTANDING on 31st March (balance sheet date), it MUST be disclosed. Taxvio reviews your balance sheet notes on 'Related Party Transactions' and 'Borrowings' to ensure no loans are missed.",
    },
    {
      q: "What is the due date for DPT-3 filing?",
      a: "DPT-3 filing deadline is 30th JUNE every year (for previous financial year). Timeline: (1) Financial Year: 1st April to 31st March. (2) Balance Sheet Date: 31st March. (3) DPT-3 Filing Deadline: 30th June (within 3 months of FY end). Examples: (a) FY 2024-25 (ended 31 Mar 2025) → DPT-3 due by 30 Jun 2025. (b) FY 2025-26 (ended 31 Mar 2026) → DPT-3 due by 30 Jun 2026. (c) FY 2026-27 (ended 31 Mar 2027) → DPT-3 due by 30 Jun 2027. IMPORTANT: DPT-3 is filed AFTER financial year ends, based on AUDITED financial statements. So you need audited balance sheet before filing. If audit is delayed, file DPT-3 as soon as audit is complete (but before 30th June to avoid penalties). Taxvio sends reminders 60 days before deadline (start April) to ensure timely filing.",
    },
    {
      q: "What happens if DPT-3 form is rejected by MCA?",
      a: "If MCA rejects DPT-3 form, you receive DEFECT LETTER listing errors. Common defects: (1) Incorrect PAN details of lenders, (2) Wrong financial year selection, (3) Missing auditor certificate, (4) Data mismatch with financial statements, (5) Incorrect fee payment, (6) DSC signature issues. Process after rejection: (1) MCA sends defect letter to registered email (within 24-48 hours of submission). (2) Company has 15 DAYS to rectify defects and resubmit. (3) No additional fee for defect rectification (if done within 15 days). (4) If defects not rectified in 15 days: Form is treated as NOT FILED, company must file fresh DPT-3 with full fees + additional fees (if deadline crossed). Taxvio monitors filing status daily. If MCA raises queries, we handle rectification immediately (included in Standard & Complete packages). We ensure error-free filing to avoid rejections.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — DPT-3 Filing
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