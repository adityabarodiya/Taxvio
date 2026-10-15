"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Income Tax Notice Response and Resolution Services",
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
    "Professional income tax notice handling services including notice analysis, response drafting, documentation, online and offline representation, demand resolution and appeal assistance for all types of IT notices under Sections 143(1), 143(3), 142(1), 148, 156 and others.",
  serviceType: "Income Tax Notice Response and Representation",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "1999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "1999",
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
      name: "What should I do if I receive an income tax notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you receive an income tax notice, do not panic. Read the notice carefully to understand the section, issue raised and response deadline. Gather all relevant documents (ITR, Form 26AS, supporting proofs) and consult a tax professional immediately. Ignoring a notice can lead to ex-parte assessment, demand orders and penalties.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Section 143(1) notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 143(1) notice is an intimation sent by CPC after processing your ITR. It may show adjustments made by the department due to mathematical errors, TDS mismatches, incorrect claims or other discrepancies. You can respond by accepting the adjustment or filing a rectification request if the adjustment is incorrect.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Section 143(3) scrutiny notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 143(3) notice is issued when your ITR is selected for detailed scrutiny assessment. The Assessing Officer may ask for additional documents, explanations and evidence to verify income, deductions and claims. It requires detailed response, documentation and often personal or CA representation before the AO.",
      },
    },
    {
      "@type": "Question",
      name: "Can I handle an income tax notice myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While you can respond to simple notices (like Section 143(1) intimations) yourself, complex notices involving scrutiny (143(3)), reassessment (148), demand (156) or penalties require professional assistance. A CA or tax consultant can ensure proper documentation, legal compliance and effective representation to minimize tax liability and penalties.",
      },
    },
  ],
};

export default function IncomeTaxNoticeClient() {
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
          ⚠️ Received an Income Tax Notice? Respond Within Deadline to Avoid
          Ex-Parte Assessment, Demand Orders & Penalties — Get Expert Help Now
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
              <span className="text-white">Income Tax Notice</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📨 Notice Response & Resolution
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Income Tax
                  <br />
                  <span className="text-[#7ecbf0]">Notice Response</span>
                  <br />
                  & Resolution
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Received an income tax notice under{" "}
                  <strong className="text-white">Section 143(1), 143(3), 148,
                  156</strong> or any other provision? Don't panic. Taxvio
                  provides <strong className="text-white">expert notice
                  analysis</strong>, professional response drafting, complete
                  documentation, online and offline representation and effective
                  demand resolution — protecting you from{" "}
                  <strong className="text-white">ex-parte assessments,
                  penalties and interest charges</strong> across India.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get Notice Response — ₹1,999 →
                  </Link>

                  
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ All Notice Types",
                    "✅ Response Drafting",
                    "✅ Documentation",
                    "✅ Representation",
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
                    ["⚠️", "Time-sensitive — respond promptly"],
                    ["📋", "All notice types handled"],
                    ["👨‍💼", "CA representation included"],
                    ["💻", "Online/offline hearings"],
                    ["⚖️", "Appeal & rectification support"],
                    ["💰", "Starting ₹1,999"],
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
              { number: "5,000+", label: "Notices Handled", icon: "📨" },
              { number: "₹1,999", label: "Starting Fee", icon: "💰" },
              { number: "92%", label: "Success Rate", icon: "✅" },
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
              "✔ Expert Analysis",
              "✔ Legal Response Drafting",
              "✔ Complete Documentation",
              "✔ AO Representation",
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
          {/* WHAT IS INCOME TAX NOTICE */}
          <section id="what-is-notice">
            <SectionLabel text="Understanding Notices" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is an Income Tax Notice and Why Is It Issued?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  An <strong>income tax notice</strong> is an official
                  communication from the Income Tax Department seeking
                  clarification, additional information, or informing you of
                  discrepancies in your ITR, tax payments, or compliance. Notices
                  are issued under various sections of the Income Tax Act for
                  different purposes — ranging from simple intimations to detailed
                  scrutiny assessments.
                </p>

                <p>
                  Notices are sent via registered post to your mailing address,
                  uploaded on your e-filing portal account, or sent via email.
                  Each notice specifies the <strong>section under which it is
                  issued</strong>, the <strong>reason for issuance</strong>, the{" "}
                  <strong>documents required</strong>, and the{" "}
                  <strong>deadline for response</strong>.
                </p>

                <p>
                  <strong>Ignoring a notice</strong> can lead to serious
                  consequences — ex-parte assessment (assessment without your
                  participation), demand orders, interest charges, penalties,
                  prosecution, and even attachment of bank accounts or property in
                  extreme cases.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Common reasons for notice issuance include TDS/TCS mismatches
                  with Form 26AS, income discrepancies detected through Annual
                  Information Statement (AIS), non-filing or late filing of ITR,
                  unexplained high-value transactions, incorrect claims of
                  deductions or exemptions, and random selection for scrutiny
                  assessment.
                </p>

                <p>
                  Each notice type requires a specific response approach, supporting
                  documentation, and often representation before the Assessing
                  Officer (AO). Professional assistance ensures legally sound
                  responses, proper documentation, and effective representation to
                  minimize tax liability, interest, and penalties.
                </p>

                <p>
                  Taxvio provides complete income tax notice handling services —
                  from initial analysis and response drafting to documentation,
                  representation, and appeal assistance — across India including
                  Khatauli, Muzaffarnagar, Meerut, Noida, Delhi NCR, and Mumbai.
                </p>
              </div>
            </div>
          </section>

          {/* TYPES OF NOTICES */}
          <section id="types-of-notices">
            <SectionLabel text="Notice Categories" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Types of Income Tax Notices
            </h2>

            <p className="text-gray-600 mb-10 max-w-3xl">
              The Income Tax Department issues various types of notices under
              different sections. Here are the most common ones and what they mean.
            </p>

            <div className="space-y-6">
              {[
                {
                  section: "Section 143(1)",
                  title: "Intimation After Processing ITR",
                  severity: "Low",
                  color: "blue",
                  description:
                    "Sent by CPC after processing your ITR. It shows adjustments made by the department due to mathematical errors, TDS mismatches, incorrect claims, or disallowance of certain deductions. You can accept the adjustment or file a rectification request under Section 154 if you disagree.",
                  action:
                    "Review intimation carefully, compare with your filed ITR, verify adjustments, and file rectification if needed within the time limit.",
                },
                {
                  section: "Section 143(2)",
                  title: "Notice for Scrutiny Assessment",
                  severity: "Medium",
                  color: "orange",
                  description:
                    "Issued when your case is selected for detailed scrutiny assessment. This is the first notice in the scrutiny process, informing you that your ITR will be examined in detail by the Assessing Officer. Must be issued within 3 months from the end of the financial year in which ITR is filed.",
                  action:
                    "Acknowledge receipt, prepare all supporting documents, and be ready for detailed assessment proceedings under Section 143(3).",
                },
                {
                  section: "Section 143(3)",
                  title: "Assessment Order After Scrutiny",
                  severity: "High",
                  color: "red",
                  description:
                    "This is the final assessment order passed by the AO after scrutiny. It may confirm your ITR, make additions/disallowances, or determine higher tax liability. The order includes detailed reasoning, computation of income, and demand (if any). Appeal can be filed if you disagree.",
                  action:
                    "Review assessment order carefully, verify additions and disallowances, calculate appeal rights, and file appeal before CIT(A) within 30 days if needed.",
                },
                {
                  section: "Section 142(1)",
                  title: "Notice for Information/Documents",
                  severity: "Medium",
                  color: "amber",
                  description:
                    "Issued by the AO during assessment proceedings to seek additional information, documents, explanations, or evidence. The notice specifies documents required and response deadline (typically 15-30 days). Failure to comply can result in ex-parte assessment.",
                  action:
                    "Gather requested documents, prepare detailed explanations, and submit response within the deadline. Request extension if needed.",
                },
                {
                  section: "Section 148",
                  title: "Notice for Reassessment",
                  severity: "High",
                  color: "red",
                  description:
                    "Issued when the AO has reason to believe that income has escaped assessment (i.e., you under-reported income or claimed incorrect deductions). Reassessment can be initiated within 3-10 years depending on the escaped income amount. Requires filing return in response.",
                  action:
                    "Understand the reasons for reassessment, gather supporting documents, file return of income in response, and prepare for detailed assessment proceedings.",
                },
                {
                  section: "Section 156",
                  title: "Demand Notice",
                  severity: "High",
                  color: "red",
                  description:
                    "Issued after assessment order when tax, interest, or penalty is payable. The demand notice specifies the amount due, due date for payment, and consequences of non-payment. Interest continues to accrue until payment. Bank accounts can be attached if demand is not paid.",
                  action:
                    "Verify demand calculation, pay demand if correct, file appeal if incorrect, or request installment payment if unable to pay in lump sum.",
                },
                {
                  section: "Section 139(9)",
                  title: "Defective Return Notice",
                  severity: "Medium",
                  color: "amber",
                  description:
                    "Issued when your filed ITR is incomplete, has missing information, incorrect schedules, calculation errors, or lacks required annexures. The notice gives 15 days to rectify the defect. If not rectified, the return is treated as invalid (not filed).",
                  action:
                    "Identify defects mentioned in notice, prepare corrections, file response on e-filing portal, or file revised ITR if necessary within deadline.",
                },
                {
                  section: "Section 245",
                  title: "Intimation of Refund Adjustment",
                  severity: "Low",
                  color: "blue",
                  description:
                    "Sent when your refund is adjusted against outstanding tax demand from previous years. The notice shows the adjustment details, demand year, and remaining refund (if any). No action needed unless you disagree with the demand being adjusted.",
                  action:
                    "Verify the outstanding demand, check if adjustment is correct, file appeal against original demand if disputed.",
                },
                {
                  section: "Section 271",
                  title: "Penalty Notice",
                  severity: "High",
                  color: "red",
                  description:
                    "Issued for concealment of income, furnishing inaccurate particulars, failure to file ITR, failure to comply with notices, or other violations. Penalty can range from ₹10,000 to 300% of tax sought to be evaded depending on the offense. Show-cause notice is issued before penalty levy.",
                  action:
                    "Respond to show-cause notice with detailed explanations and evidence, demonstrate reasonable cause for default, and contest penalty levy.",
                },
              ].map((notice) => (
                <div
                  key={notice.section}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#00416a] text-white font-bold text-sm px-3 py-1 rounded-full">
                      {notice.section}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase px-2 py-1 rounded-full bg-${notice.color}-100 text-${notice.color}-700`}
                    >
                      Severity: {notice.severity}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#00416a] mb-3">
                    {notice.title}
                  </h3>

                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      <strong>What It Means:</strong> {notice.description}
                    </p>
                    <p className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <strong className="text-[#00416a]">
                        Recommended Action:
                      </strong>{" "}
                      {notice.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WHY YOU NEED PROFESSIONAL HELP */}
          <section id="why-professional-help">
            <SectionLabel text="Why Expert Assistance" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Why You Need Professional Help for Income Tax Notices
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚖️",
                  title: "Legal & Technical Complexity",
                  desc: "Income tax laws are complex and frequently amended. A professional understands legal provisions, case laws, judicial precedents and technical requirements for effective response.",
                },
                {
                  icon: "📋",
                  title: "Proper Documentation",
                  desc: "Notices require specific documents, evidence, and supporting proofs. Missing or incorrect documentation can weaken your case. Professionals ensure complete, organized and legally compliant documentation.",
                },
                {
                  icon: "✍️",
                  title: "Legally Sound Response",
                  desc: "Response to notices must be precise, legally correct, and persuasive. Poorly drafted responses can be used against you in assessment proceedings. Professional drafting protects your interests.",
                },
                {
                  icon: "👨‍💼",
                  title: "Effective Representation",
                  desc: "Personal appearances before the Assessing Officer require knowledge of assessment procedures, questioning techniques and negotiation skills. CA representation ensures professional handling.",
                },
                {
                  icon: "💰",
                  title: "Minimize Tax Liability",
                  desc: "Professionals can identify legitimate deductions, exemptions, and defenses you may have missed, helping to minimize additional tax, interest, and penalties.",
                },
                {
                  icon: "⏱️",
                  title: "Time & Stress Savings",
                  desc: "Handling notices involves research, documentation, multiple follow-ups and hearings. Professional assistance saves time, reduces stress and allows you to focus on your work/business.",
                },
                {
                  icon: "🛡️",
                  title: "Avoid Costly Mistakes",
                  desc: "Incorrect responses, missed deadlines, or procedural errors can result in ex-parte assessments, heavy demands and loss of appeal rights. Professional help avoids costly mistakes.",
                },
                {
                  icon: "📊",
                  title: "Strategic Planning",
                  desc: "Professionals analyze your overall tax position, plan response strategy, identify weak areas, and prepare for potential future notices or appeals.",
                },
                {
                  icon: "🔄",
                  title: "Appeal & Rectification Support",
                  desc: "If assessment order is unfavorable, professionals can file appeals before CIT(A), ITAT, or file rectification applications under Section 154 for errors apparent on record.",
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

          {/* CONSEQUENCES OF IGNORING */}
          <section
            id="consequences"
            className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="Risk of Ignoring" />

            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Serious Consequences of Ignoring Income Tax Notices
            </h2>

            <p className="text-gray-700 mb-8 max-w-3xl">
              Many taxpayers mistakenly ignore notices thinking they will go away
              or are not serious. This is a costly mistake with severe financial
              and legal consequences.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  consequence: "Ex-Parte Assessment",
                  impact:
                    "If you don't respond to scrutiny notices, the AO will pass an assessment order without your participation, often resulting in much higher tax demand than justified.",
                },
                {
                  consequence: "Heavy Demand Orders",
                  impact:
                    "Ex-parte assessments typically disallow most deductions and exemptions, add undisclosed income, and impose best judgment assessment leading to lakhs or crores in tax demand.",
                },
                {
                  consequence: "Interest Charges",
                  impact:
                    "Interest under Sections 234A, 234B, 234C accrues at 1% per month on unpaid tax, significantly increasing your liability over time.",
                },
                {
                  consequence: "Penalties Under Section 271",
                  impact:
                    "Penalties ranging from 50% to 300% of tax sought to be evaded can be levied for concealment of income or furnishing inaccurate particulars.",
                },
                {
                  consequence: "Loss of Appeal Rights",
                  impact:
                    "Missing response deadlines or assessment order timelines can result in loss of your right to file appeals, making unfavorable orders final.",
                },
                {
                  consequence: "Bank Account Attachment",
                  impact:
                    "If demand is not paid, the department can attach your bank accounts under Section 226(3), freezing your funds until demand is cleared.",
                },
                {
                  consequence: "Property Attachment",
                  impact:
                    "The department can attach movable and immovable property under Section 281B for recovery of unpaid tax demand.",
                },
                {
                  consequence: "Prosecution Under Section 276C",
                  impact:
                    "Willful attempt to evade tax can lead to prosecution with imprisonment from 6 months to 7 years and heavy fines.",
                },
                {
                  consequence: "Credit & Reputation Damage",
                  impact:
                    "Outstanding tax demands and litigation can affect your credit score, loan eligibility, business reputation, and professional standing.",
                },
              ].map((item) => (
                <div
                  key={item.consequence}
                  className="bg-white border border-red-100 rounded-xl p-5"
                >
                  <p className="font-bold text-red-600 text-sm mb-2">
                    ⚠️ {item.consequence}
                  </p>
                  <p className="text-sm text-gray-600">{item.impact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="What You Need" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Income Tax Notice Response
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl">
              Document requirements vary based on notice type and issues raised.
              Here's a comprehensive checklist covering most notice scenarios.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Basic Documents (All Notices)
                </p>

                <ul className="space-y-3">
                  {[
                    "Copy of the income tax notice received",
                    "PAN card",
                    "Aadhaar card",
                    "Filed ITR for the assessment year in question",
                    "ITR acknowledgement (ITR-V)",
                    "Form 26AS for the relevant year",
                    "Assessment orders (if any from previous years)",
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
                  Supporting Documents (Issue-Specific)
                </p>

                <ul className="space-y-3">
                  {[
                    "Salary slips, Form 16, salary certificates",
                    "Bank statements for all accounts",
                    "Investment proofs (Section 80C, 80D, etc.)",
                    "TDS certificates (Form 16A from deductors)",
                    "Capital gains computation worksheets",
                    "Property sale agreements, registry documents",
                    "Business books of accounts, P&L, Balance Sheet",
                    "Loan documents, interest certificates",
                    "Rent receipts, rental agreements",
                    "Medical bills, insurance premium receipts",
                    "Donation receipts (for Section 80G claims)",
                    "Any other relevant financial documents",
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
              Taxvio's Notice Response Process
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl">
              Our structured, professional approach ensures timely, legally sound
              and effective response to all types of income tax notices.
            </p>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Notice Review & Analysis",
                    desc: "We carefully review the notice, identify the section, understand issues raised, verify facts, check timelines, and assess the severity and potential tax impact.",
                  },
                  {
                    step: "02",
                    title: "Document Collection & Verification",
                    desc: "We collect all required documents from you, verify their accuracy and completeness, identify gaps or missing information, and obtain additional documents if needed.",
                  },
                  {
                    step: "03",
                    title: "Legal Research & Strategy Planning",
                    desc: "We research applicable legal provisions, case laws, circulars and judicial precedents. We plan response strategy, identify defenses, and prepare arguments supporting your position.",
                  },
                  {
                    step: "04",
                    title: "Response Drafting & Documentation",
                    desc: "We prepare a legally sound, detailed and persuasive written response addressing all issues raised. We organize supporting documents in proper format with index and cross-references.",
                  },
                  {
                    step: "05",
                    title: "Filing & Submission",
                    desc: "We file the response on the e-filing portal or submit physically to the AO's office as required. We obtain and preserve acknowledgment of submission and track receipt.",
                  },
                  {
                    step: "06",
                    title: "Representation & Follow-Up",
                    desc: "Our CA represents you before the Assessing Officer during personal hearings, presents arguments, negotiates assessment, and ensures your interests are protected. We follow up until final order is received.",
                  },
                  {
                    step: "07",
                    title: "Assessment Order Review & Appeal",
                    desc: "We review the final assessment order, verify additions/disallowances, calculate tax demand, and file appeal before CIT(A) or rectification under Section 154 if the order is unfavorable or contains errors.",
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
                  text: "Received Section 143(2) scrutiny notice for FY 2021-22. Taxvio handled everything — documentation, response drafting and personal representation. Final assessment had minimal additions. Excellent service.",
                },
                {
                  name: "Priya Sharma",
                  location: "Muzaffarnagar",
                  text: "Got Section 148 reassessment notice after 5 years. Was very worried. Taxvio team analyzed the case, prepared detailed response with supporting evidence and successfully contested reassessment. Very professional.",
                },
                {
                  name: "Amit Verma",
                  location: "Noida",
                  text: "Section 156 demand notice for ₹8 lakh. Taxvio identified errors in assessment order, filed appeal and got demand reduced to ₹1.2 lakh. Saved me lakhs in tax and interest. Highly recommended.",
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
              Income Tax Notice Services Across India
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, Uttar
              Pradesh</strong> and provides income tax notice response,
              documentation, representation and appeal services to individuals and
              businesses in <strong>Meerut</strong>, <strong>Noida</strong>,{" "}
              <strong>Delhi NCR</strong>, <strong>Ghaziabad</strong>,{" "}
              <strong>Mumbai</strong> and across India through online and offline
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
                  title: "Income Tax Scrutiny",
                  icon: "🔍",
                  link: "/serviceslist/income-tax/income-tax-scrutiny",
                  desc: "Complete scrutiny assessment support and representation.",
                },
                {
                  title: "ITR Filing — Business",
                  icon: "🏢",
                  link: "/serviceslist/income-tax/itr-business",
                  desc: "Income tax return filing for businesses and professionals.",
                },
                {
                  title: "Tax Planning",
                  icon: "📊",
                  link: "/serviceslist/income-tax/tax-planning",
                  desc: "Strategic tax planning to minimize liability.",
                },
                {
                  title: "Form 26AS Analysis",
                  icon: "📋",
                  link: "/serviceslist/income-tax/form-26as",
                  desc: "Tax credit verification and TDS reconciliation.",
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
                    Don't Face the Tax Department Alone
                  </p>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get Expert Help for Your Income Tax Notice
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    Received a tax notice? Don't ignore it. Taxvio provides expert
                    analysis, professional response drafting, complete
                    documentation and effective representation to protect you from
                    ex-parte assessments, heavy demands and penalties. Starting
                    ₹1,999.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get Notice Help — ₹1,999
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
      value: "143-1-intimation",
      label: "Section 143(1) Intimation Response",
      fee: 1999,
      description:
        "Review intimation, file rectification request if needed, and follow up with CPC.",
    },
    {
      value: "139-9-defective",
      label: "Defective Return Rectification (Section 139(9))",
      fee: 1499,
      description:
        "Identify defects, prepare corrections and file response within deadline.",
    },
    {
      value: "142-1-information",
      label: "Section 142(1) Information Notice",
      fee: 2999,
      description:
        "Gather documents, prepare detailed response and submit to AO.",
    },
    {
      value: "143-2-scrutiny",
      label: "Section 143(2) & 143(3) Scrutiny Assessment",
      fee: 9999,
      description:
        "Complete scrutiny support — documentation, response, representation and appeal (if needed).",
    },
    {
      value: "148-reassessment",
      label: "Section 148 Reassessment Notice",
      fee: 12999,
      description:
        "Challenge reassessment grounds, file return in response, and represent in reassessment proceedings.",
    },
    {
      value: "156-demand",
      label: "Section 156 Demand Notice & Appeal",
      fee: 4999,
      description:
        "Verify demand, file appeal before CIT(A), and represent for demand reduction/cancellation.",
    },
    {
      value: "271-penalty",
      label: "Section 271 Penalty Notice Response",
      fee: 5999,
      description:
        "Respond to show-cause notice, contest penalty levy and represent before AO.",
    },
    {
      value: "comprehensive",
      label: "Comprehensive Notice Handling (Multiple Notices)",
      fee: 19999,
      description:
        "End-to-end handling of complex cases with multiple notices, years or proceedings.",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Notice Response Fee
      </h2>

      <p className="text-gray-600 mb-8 max-w-xl">
        Select the type of notice you received for an estimated professional fee.
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
              * Fees depend on case complexity, tax years involved, amount at
              stake, number of hearings and appeal requirements. No government fees
              for notice response. GST applicable.
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
            Select a notice type above to see an estimated fee.
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
      q: "What is the difference between Section 143(1) and Section 143(3)?",
      a: "Section 143(1) is a summary processing notice/intimation sent by CPC after processing your ITR, showing adjustments made. Section 143(3) is a detailed scrutiny assessment order passed by the Assessing Officer after examining your ITR in detail, asking questions and reviewing documents. 143(3) is more serious and requires professional representation.",
    },
    {
      q: "How much time do I have to respond to an income tax notice?",
      a: "Response time varies by notice type. Section 143(1) intimations can be responded to via rectification request within 4 years from year-end. Section 142(1) notices typically give 15-30 days. Section 143(2) gives time for filing response and personal hearing. Section 148 gives 30 days for filing return. Always check the notice for specific deadline.",
    },
    {
      q: "Can I get an extension to respond to a notice?",
      a: "Yes. You can request extension by filing an application with the Assessing Officer explaining reasons for delay and requesting additional time. Extensions are typically granted for reasonable causes like illness, business travel, difficulty in gathering documents etc. However, it's best to respond within original deadline.",
    },
    {
      q: "What happens if the assessment order is unfavorable?",
      a: "If the assessment order under Section 143(3) or demand under Section 156 is unfavorable, you have the right to file an appeal before the Commissioner of Income Tax (Appeals) — CIT(A) — within 30 days of receipt of order. The appeal can challenge additions, disallowances and demand. Further appeals to ITAT, High Court and Supreme Court are also available.",
    },
    {
      q: "Do I have to pay the demand immediately?",
      a: "You should pay the demand within the due date mentioned in the demand notice to avoid further interest. However, if you are filing an appeal, you can request a stay of demand from CIT(A) by filing a stay petition. If stay is granted, you need to pay only a portion (typically 20%) of the demand until the appeal is decided.",
    },
    {
      q: "What is the difference between scrutiny and reassessment?",
      a: "Scrutiny (Section 143(3)) is a detailed examination of your ITR within normal assessment timelines (within 12-21 months of filing ITR). Reassessment (Section 148) is reopening of assessment even after it was completed or accepted, based on information that income has escaped assessment. Reassessment can be done within 3-10 years depending on escaped income amount.",
    },
    {
      q: "Can I handle a simple notice myself without CA help?",
      a: "For simple Section 143(1) intimations where you agree with the adjustment or need to file a basic rectification request, you may handle it yourself. However, for scrutiny (143(3)), reassessment (148), penalty (271) or demand (156) notices, professional assistance is highly recommended to protect your interests and minimize liability.",
    },
    {
      q: "How long does scrutiny assessment take?",
      a: "Scrutiny assessment typically takes 6-18 months from the date of issue of Section 143(2) notice, depending on complexity, number of hearings, AO's workload and your response time. The AO must pass the final assessment order within the time limit prescribed by law (usually by end of 2nd AY from the year in which ITR is filed).",
    },
    {
      q: "What if I disagree with the reassessment notice itself?",
      a: "You can challenge the reopening of assessment (Section 148 notice) by filing objections before the AO explaining why reassessment is not justified. If objections are rejected, you can file a writ petition in High Court challenging the validity of reassessment proceedings. Professional legal help is essential for such challenges.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Income Tax Notices
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