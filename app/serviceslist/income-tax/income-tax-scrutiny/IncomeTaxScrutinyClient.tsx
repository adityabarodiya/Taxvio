"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Income Tax Scrutiny & Notice Handling Services",
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
    "Professional income tax scrutiny assessment and notice handling services in India. Response to notices under Section 143(1), 143(2), 148, 142(1), 156, 271, and faceless assessment. Representing taxpayers before Income Tax Assessing Officers. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Scrutiny & Notice Response",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "1999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "1999",
      maxPrice: "14999",
    },
  },
};

// ─── FAQPage structured data ──────────────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Section 143(1) income tax notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 143(1) is an intimation — not a scrutiny notice — sent by the Income Tax Department after processing the ITR. It informs the taxpayer whether the return has been accepted as filed, or whether there is a demand (tax payable) or a refund due. Common reasons for demand in 143(1) include TDS mismatch with Form 26AS, arithmetic errors, or disallowance of deductions not matching Form 16.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Section 143(2) scrutiny notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 143(2) is a formal scrutiny notice issued by the Assessing Officer when the ITR is selected for detailed examination. It requires the taxpayer to produce books of accounts, documents, and information to verify the correctness of income, deductions, and tax liability reported in the ITR. A 143(2) notice must be responded to with full documentation within the stipulated time.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Section 148 notice for income escaping assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 148 is a reassessment notice issued when the Assessing Officer has reason to believe that income has escaped assessment — i.e., income was not reported or was under-reported in the original ITR. It can be issued up to 3 years from the end of the relevant assessment year (or 10 years for cases involving large income or foreign assets). The taxpayer must file a fresh ITR in response.",
      },
    },
    {
      "@type": "Question",
      name: "What is faceless assessment and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Faceless Assessment under Section 144B eliminates face-to-face interaction between taxpayers and Assessing Officers. All notices, responses, and hearings are conducted digitally through the Income Tax portal. Cases are assigned to AOs at random locations — not the taxpayer's jurisdiction. All communications must be submitted electronically with proper documentation through the portal.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do immediately after receiving an income tax notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, do not ignore the notice — even a 143(1) intimation with no demand should be reviewed. Identify the notice type (section number), check the due date for response, collect all relevant documents, and engage a tax professional. Missing the response deadline escalates the case to best judgement assessment under Section 144, resulting in large tax additions.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file an appeal if I disagree with the scrutiny assessment order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you disagree with the assessment order (passed under Section 143(3) or 144), you can file an appeal before the Commissioner of Income Tax (Appeals) — CIT(A) — within 30 days of receiving the order. If the CIT(A) order is adverse, further appeal can be filed before the Income Tax Appellate Tribunal (ITAT). Taxvio assists with appeal preparation and representation at all levels.",
      },
    },
  ],
};

export default function IncomeTaxScrutinyClient() {
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

      <main className="bg-white text-gray-800">
        <UrgencyBanner />

        {/* ── HERO ── */}
        <section
          className="bg-gradient-to-r from-[#00416a] to-[#002b45] text-white py-24"
          aria-label="Income Tax Scrutiny & Notice Handling Hero"
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
              <ol className="flex gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/income-tax" className="hover:text-white">Income Tax</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white font-medium">
                  Scrutiny & Notice Handling
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Income Tax Scrutiny Assessment & Notice Handling Services — India
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Expert response to income tax notices under Section 143(1),
              143(2), 148, 142(1), 156, 245, and 271. Faceless assessment
              representation, scrutiny documentation, appeal filing before
              CIT(A) and ITAT. Don't ignore your notice — act immediately.
              Serving Khatauli, Muzaffarnagar and pan-India online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="Get help with income tax notice now"
              >
                Get Notice Help Now
              </Link>
              <Link
                href="#notice-types"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                Identify Your Notice
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ All Notice Types Handled</span>
              <span>✅ Faceless Assessment Support</span>
              <span>✅ CIT(A) & ITAT Appeals</span>
              <span>✅ CA + Legal Expert Team</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Income Tax Scrutiny & Notice Handling — Complete Guide
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              Receiving an income tax notice is one of the most stressful
              experiences for any taxpayer — individual, proprietor, firm, or
              company. However, <strong>a notice is not always a cause for
              panic</strong>. Many income tax notices are routine communications
              that require a prompt, well-documented response. What truly
              escalates a notice into a serious tax demand is either{" "}
              <strong>ignoring the notice</strong> or responding without proper
              documentation and legal grounding.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              The Income Tax Department issues notices under multiple sections
              of the Income Tax Act — each with a different purpose, different
              required response, and a specific deadline. A{" "}
              <strong>Section 143(1) intimation</strong> after ITR processing
              is very different from a{" "}
              <strong>Section 143(2) scrutiny notice</strong> or a{" "}
              <strong>Section 148 reassessment notice</strong>. Responding to
              each requires a tailored approach — the right documents, correct
              legal arguments, and timely submission through the Income Tax
              portal.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              Since 2021, the Income Tax Department has implemented{" "}
              <strong>Faceless Assessment under Section 144B</strong> — all
              scrutiny proceedings, notices, and orders are now conducted
              digitally without face-to-face meetings. This has made professional
              representation more important than ever, as every response is
              permanently on record and forms the basis for the final assessment
              order.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
              provides comprehensive income tax notice handling and scrutiny
              assessment representation services for individuals, proprietors,
              firms, LLPs, and companies across Uttar Pradesh and pan-India.
              Our CA and legal expert team handles notice review, document
              preparation, portal submission, AO representation, and appeal
              filing before CIT(A) and ITAT.
            </p>

            {/* WHY NOTICES ARE ISSUED */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Why Does the Income Tax Department Issue Scrutiny Notices?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              ITR scrutiny is triggered by specific risk parameters built into
              the Department's AI-driven risk assessment systems. Understanding
              why your return was selected helps prepare a stronger response:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>TDS / Form 26AS mismatch</strong> — Income reported in
                ITR does not match TDS credits in Form 26AS or AIS. This is the
                most common trigger for 143(1) demands and 143(2) scrutiny.
              </li>
              <li>
                <strong>High-value transactions not reported</strong> — SFT
                (Statement of Financial Transactions) data from banks, registrars,
                and mutual funds showing large transactions (property purchases,
                cash deposits, share sales, FD interest) that are not reflected
                in the ITR.
              </li>
              <li>
                <strong>Sudden income drop or large loss</strong> — Significant
                reduction in declared income compared to previous years, or
                large business losses that reduce tax to zero.
              </li>
              <li>
                <strong>Large deductions / exemptions claimed</strong> — HRA
                exemptions, 80C/80D deductions, or capital gain exemptions
                (54/54F) that appear disproportionate to declared income.
              </li>
              <li>
                <strong>Cash deposits during demonetisation or high cash
                sales</strong> — Large cash deposits or cash-heavy businesses
                attract scrutiny for unreported income.
              </li>
              <li>
                <strong>GST turnover vs ITR turnover mismatch</strong> — The
                Department cross-verifies GSTR-1/GSTR-3B turnover with ITR
                business income. Any unexplained gap triggers notices.
              </li>
              <li>
                <strong>Foreign assets or foreign income</strong> — Any foreign
                bank accounts, investments, or income not disclosed in ITR
                Schedule FA triggers high-priority scrutiny.
              </li>
              <li>
                <strong>Random computer-based selection</strong> — A small
                percentage of returns are selected for scrutiny at random by
                CASS (Computer Aided Scrutiny Selection) even without specific
                risk flags.
              </li>
            </ul>
          </article>

          {/* NOTICE TYPES TABLE */}
          <NoticeTypesSection />

          {/* FACELESS ASSESSMENT */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Faceless Assessment Under Section 144B — How It Works
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Introduced in 2020 and made mandatory for all scrutiny cases,
              Faceless Assessment is a complete digital process:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Random case assignment</strong> — Once a return is
                selected for scrutiny under Section 143(2), it is assigned to
                an Assessing Officer (AO) in a National Faceless Assessment
                Centre (NFAC) at a location different from the taxpayer's
                jurisdiction. The taxpayer never meets the AO in person.
              </li>
              <li>
                <strong>Digital notice and response</strong> — All notices,
                questionnaires, show-cause notices (SCN), and draft assessment
                orders are served through the Income Tax e-filing portal. All
                responses, documents, and submissions must be uploaded digitally.
              </li>
              <li>
                <strong>Peer review of draft orders</strong> — Before issuing
                a final assessment order, the draft is reviewed by a separate
                Review Unit and Technical Unit to ensure accuracy and
                consistency.
              </li>
              <li>
                <strong>Personal hearing via video conference</strong> — If a
                taxpayer requests a personal hearing, it is conducted via video
                conference — not in person. The request must be made explicitly
                through the portal.
              </li>
              <li>
                <strong>Final assessment order</strong> — The final order under
                Section 143(3) is passed and served digitally. If there are
                additions and tax demands, a demand notice under Section 156 is
                issued simultaneously.
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              In faceless assessment, the quality of your written response and
              supporting documentation is everything — there is no opportunity
              to explain verbally. This makes professional representation
              critical. Taxvio prepares structured, comprehensive written
              responses for every query raised during faceless proceedings.
            </p>

            {/* SCRUTINY PROCESS */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              The Scrutiny Assessment Process — From Notice to Order
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Understanding the full scrutiny timeline helps you respond
              correctly at each stage:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Stage 1 — Section 143(2) Notice</strong> — Issued
                within 6 months from the end of the assessment year in which
                the ITR was filed (e.g., for AY 2024-25 return, notice can be
                issued up to 30th September 2025). Requires taxpayer to appear
                or submit documents.
              </li>
              <li>
                <strong>Stage 2 — Section 142(1) Questionnaire</strong> — The
                AO issues a questionnaire seeking specific information —
                source of income, investments, expenses, bank account
                reconciliation, party-wise details. Each question must be
                answered with supporting documents.
              </li>
              <li>
                <strong>Stage 3 — Show Cause Notice (SCN)</strong> — If the
                AO proposes additions to income or disallowances, a draft
                assessment order with a Show Cause Notice is issued before
                finalising the order. The taxpayer has an opportunity to contest
                the proposed additions.
              </li>
              <li>
                <strong>Stage 4 — Final Assessment Order (Section 143(3)
                or 144)</strong> — The AO passes the final order. If the
                taxpayer cooperated, order is under 143(3) (regular assessment).
                If the taxpayer did not respond, order is passed ex-parte under
                Section 144 (best judgement assessment) with large additions.
              </li>
              <li>
                <strong>Stage 5 — Section 156 Demand Notice</strong> — If the
                assessment order results in a tax demand, a demand notice under
                Section 156 is issued simultaneously, specifying the amount and
                due date for payment.
              </li>
              <li>
                <strong>Stage 6 — Appeal to CIT(A)</strong> — If the taxpayer
                disagrees with the order, an appeal can be filed before the
                Commissioner of Income Tax (Appeals) within 30 days of
                receiving the order. Stay of demand can also be requested.
              </li>
            </ul>
          </article>

          {/* PENALTY NOTICES */}
          <PenaltyNoticesSection />

          {/* APPEAL SECTION */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Income Tax Appeals — CIT(A) and ITAT
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              If you disagree with an assessment order, penalty order, or any
              other order of the Assessing Officer, you have the right to
              appeal through India's structured income tax appellate hierarchy:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-3">
              <li>
                <strong>Commissioner of Income Tax (Appeals) — CIT(A) /
                JCIT(A)</strong> — First appellate authority. Appeal must be
                filed in Form 35 within <strong>30 days</strong> of receiving
                the order. Filing fee ranges from ₹250 to ₹1,000 based on
                income. The CIT(A) can confirm, modify, or delete additions made
                by the AO. Since 2023, faceless appeal proceedings are also
                conducted digitally.
              </li>
              <li>
                <strong>Income Tax Appellate Tribunal (ITAT)</strong> — Second
                appellate authority. Appeal against CIT(A) order must be filed
                in Form 36 within <strong>60 days</strong>. ITAT is a quasijudicial body — proceedings are more formal. Tribunal's
                decisions are binding on the AO and CIT(A) for the taxpayer.
                Tax effect threshold of ₹50 lakh applies for Department appeals
                to ITAT (Department does not appeal small-amount cases).
              </li>
              <li>
                <strong>High Court</strong> — Appeal on substantial questions
                of law can be filed before the relevant High Court under Section
                260A within <strong>120 days</strong> of ITAT order.
              </li>
              <li>
                <strong>Stay of Demand During Appeal</strong> — While an appeal
                is pending, the taxpayer can request stay of demand (suspension
                of the tax demand) before the AO or CIT(A). Typically, 20% of
                the disputed demand must be paid as a precondition for stay.
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              Taxvio assists with the complete appeal process — drafting the
              grounds of appeal, preparing the paper book with supporting
              judgements and documents, filing the appeal, and representing the
              taxpayer at CIT(A) hearings. For ITAT matters, we coordinate
              with senior tax advocates.
            </p>

            {/* COMMON MISTAKES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Common Mistakes Taxpayers Make When Handling Notices
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              These mistakes consistently turn manageable notices into large
              tax demands — avoid them at all costs:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Ignoring the notice</strong> — The single most
                dangerous mistake. Even a 143(1) intimation ignored for too
                long can become a demand enforced through bank attachment or
                salary deduction.
              </li>
              <li>
                <strong>Responding late</strong> — Missing the response deadline
                in a 143(2) or 142(1) notice results in the AO passing a best
                judgement assessment under Section 144 — estimating income
                arbitrarily and raising massive demands.
              </li>
              <li>
                <strong>Submitting incomplete documentation</strong> — Partially
                responding to a questionnaire leaves open issues that the AO
                can use to make additions. Every query must be answered with
                supporting evidence.
              </li>
              <li>
                <strong>Not verifying 26AS / AIS before responding</strong> — All
                income, transactions, and TDS credits reported in the Department's
                database (AIS) must be reconciled before submitting a response.
                Contradictions between your response and AIS data are used as
                evidence of concealment.
              </li>
              <li>
                <strong>Paying disputed demand without appeal</strong> — Paying
                a tax demand raised through scrutiny without filing an appeal
                is treated as acceptance of the assessment. Always file an
                appeal if the additions are unjustified.
              </li>
              <li>
                <strong>Not preserving books of accounts</strong> — During
                scrutiny, the AO can require production of books up to 6 years
                old. Missing books result in best judgement assessment and
                Section 271A penalty.
              </li>
            </ul>
          </article>

          {/* WORKFLOW */}
          <WorkflowSection />

          {/* CALCULATOR */}
          <ScrutinyFeeCalculator />

          {/* TESTIMONIALS */}
          <Testimonials />

          {/* FAQ */}
          <FAQSection />
        </section>

        <PremiumCTA />
      </main>
    </>
  );
}

/* ================= URGENCY BANNER ================= */
function UrgencyBanner() {
  return (
    <div
      className="bg-red-600 text-white text-center py-3 font-semibold text-sm"
      role="alert"
    >
      ⚠️ Received a Tax Notice? Do NOT Ignore It — Missing the Response
      Deadline Leads to Best Judgement Assessment & Large Tax Demands. Act
      Today.
    </div>
  );
}

/* ================= NOTICE TYPES TABLE ================= */
function NoticeTypesSection() {
  return (
    <section id="notice-types" aria-label="Income Tax Notice Types">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Types of Income Tax Notices — Section-Wise Guide
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Every income tax notice has a specific section number that tells you
        exactly what the Department wants and how urgently you must respond.
        Here is a complete guide to all major notice types:
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Income Tax Notice Types and Response Guide"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Section</th>
              <th className="p-4 text-left" scope="col">Notice Type</th>
              <th className="p-4 text-left" scope="col">What It Means</th>
              <th className="p-4 text-left" scope="col">Response Required</th>
              <th className="p-4 text-left" scope="col">Urgency</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "143(1)",
                "Intimation after ITR processing",
                "ITR processed — demand raised, refund due, or accepted as filed",
                "Pay demand / accept refund / file rectification if error",
                "Medium",
              ],
              [
                "143(2)",
                "Scrutiny notice",
                "ITR selected for detailed examination by AO",
                "Produce books, documents, and answer questionnaire",
                "High",
              ],
              [
                "142(1)",
                "Pre-assessment enquiry",
                "AO requires specific information or documents before completing assessment",
                "Furnish information and documents within time given",
                "High",
              ],
              [
                "148",
                "Reassessment — income escaping",
                "AO believes income was not reported or under-reported in original ITR",
                "File fresh ITR and respond with complete documentation",
                "Very High",
              ],
              [
                "148A",
                "Pre-reassessment show cause",
                "Show cause before issuing 148 reassessment — AO must give opportunity",
                "Submit explanation with evidence why reassessment is not warranted",
                "Very High",
              ],
              [
                "156",
                "Tax demand notice",
                "Tax, interest, or penalty is payable following assessment order",
                "Pay demand or file appeal within 30 days",
                "Very High",
              ],
              [
                "245",
                "Adjustment of refund against demand",
                "Department proposes to adjust pending refund against outstanding demand",
                "Accept or object within 30 days — objection must be filed on portal",
                "Medium",
              ],
              [
                "139(9)",
                "Defective return notice",
                "ITR filed is incomplete or contains errors making it defective",
                "Correct and re-file ITR within 15 days",
                "Medium",
              ],
              [
                "131",
                "Summons",
                "AO summoning taxpayer or third party to attend or produce documents",
                "Attend personally or produce required documents on specified date",
                "Very High",
              ],
              [
                "271(1)(c)",
                "Penalty notice — concealment",
                "Penalty for concealment of income or furnishing inaccurate particulars",
                "Submit reply contesting penalty with evidence of bona fide disclosure",
                "High",
              ],
              [
                "270A",
                "Penalty — under-reporting",
                "Penalty for under-reporting or misreporting income (200% of tax on misreported income)",
                "Contest by proving income reported correctly or reasonable cause",
                "High",
              ],
            ].map(([section, type, meaning, response, urgency], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-semibold text-[#00416a] whitespace-nowrap">
                  Sec {section}
                </td>
                <td className="p-4 font-medium text-gray-700">{type}</td>
                <td className="p-4 text-gray-600 text-sm">{meaning}</td>
                <td className="p-4 text-gray-600 text-sm">{response}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      urgency === "Very High"
                        ? "bg-red-100 text-red-700"
                        : urgency === "High"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {urgency}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * All notices now arrive on your registered email and are available on
        the Income Tax e-filing portal under "Pending Actions → e-Proceedings".
        Ensure your email ID and mobile number are updated on the portal to
        receive notices on time.
      </p>
    </section>
  );
}

/* ================= PENALTY NOTICES SECTION ================= */
function PenaltyNoticesSection() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Penalty & Prosecution Notices — Rates & Defence
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        If the scrutiny assessment results in additions to income, the AO may
        initiate separate penalty proceedings. Here are the key penalty
        provisions and what can be done to contest them:
      </p>

      <div className="overflow-x-auto mb-16">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Income Tax Penalty Provisions"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Section</th>
              <th className="p-4 text-left" scope="col">Offence</th>
              <th className="p-4 text-left" scope="col">Penalty Rate</th>
              <th className="p-4 text-left" scope="col">Defence / Mitigation</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "270A",
                "Under-reporting of income",
                "50% of tax on under-reported income",
                "Show income was reported correctly or difference is due to disputed legal interpretation",
              ],
              [
                "270A",
                "Misreporting of income",
                "200% of tax on misreported income",
                "Prove disclosure was bona fide and there was no intention to misreport",
              ],
              [
                "271(1)(c)",
                "Concealment or inaccurate particulars (pre-AY 2017-18 cases)",
                "100%–300% of tax on concealed income",
                "Prove bona fide disclosure and that concealment was not deliberate",
              ],
              [
                "271B",
                "Failure to get accounts audited / file audit report",
                "0.5% of turnover — max ₹1.5 lakh",
                "Prove reasonable cause (illness, natural disaster, etc.)",
              ],
              [
                "271F",
                "Failure to file ITR (pre-2018)",
                "₹5,000 flat",
                "Section 234F now applicable for recent years — no separate 271F",
              ],
              [
                "272A",
                "Failure to comply with notices / summons",
                "₹10,000 per default (continuing)",
                "Show notice was not properly served or compliance was made subsequently",
              ],
              [
                "276C",
                "Wilful attempt to evade tax",
                "Prosecution — 6 months to 7 years imprisonment + fine",
                "Prove no wilful intent — distinguish from bonafide error or disputed interpretation",
              ],
              [
                "276CC",
                "Wilful failure to furnish ITR",
                "Prosecution — 3 months to 3 years (tax < ₹25L) or up to 7 years (tax > ₹25L)",
                "Prove failure was not wilful — late but filed before prosecution initiated",
              ],
            ].map(([section, offence, penalty, defence], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-semibold text-[#00416a] whitespace-nowrap">
                  Sec {section}
                </td>
                <td className="p-4 text-gray-700 text-sm">{offence}</td>
                <td className="p-4 font-medium text-red-600 text-sm">{penalty}</td>
                <td className="p-4 text-gray-600 text-sm">{defence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ================= WORKFLOW ================= */
function WorkflowSection() {
  const steps = [
    {
      title: "1. Notice Review & Urgency Assessment",
      desc: "We review your notice — identify the section, assessment year involved, nature of query, and response deadline. We immediately classify urgency and advise on the exact documents needed.",
    },
    {
      title: "2. AIS / Form 26AS Reconciliation",
      desc: "We cross-verify all income, TDS credits, high-value transactions, and financial data in your AIS and Form 26AS against your ITR and books of accounts — identifying all mismatches that triggered the notice.",
    },
    {
      title: "3. Document Collection & Response Preparation",
      desc: "We collect all required documents — bank statements, purchase and sale invoices, TDS certificates, loan statements, investment proofs — and prepare a comprehensive, legally sound written response for each query raised.",
    },
    {
      title: "4. Portal Submission & Acknowledgement",
      desc: "The complete response with all supporting documents is submitted through the Income Tax e-filing portal under e-Proceedings within the deadline. Submission acknowledgement is preserved as proof of compliance.",
    },
    {
      title: "5. Show Cause Notice (SCN) Response",
      desc: "If the AO issues a Show Cause Notice before passing the assessment order, we prepare a detailed reply contesting proposed additions — citing relevant case laws, judicial precedents, and correct legal interpretation.",
    },
    {
      title: "6. Appeal Filing & Representation (if needed)",
      desc: "If the final order has unjustified additions, we file an appeal in Form 35 before CIT(A) within 30 days — drafting detailed grounds of appeal, preparing the paper book, and representing at CIT(A) hearings.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our Notice Handling & Scrutiny Response Process
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        Taxvio follows a structured, deadline-driven process to ensure every
        notice is responded to with full documentation and legal precision —
        minimising additions and protecting your tax position:
      </p>

      <div className="relative border-l-4 border-[#00416a] pl-8 space-y-10 mb-16">
        {steps.map((s, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-11 top-1 w-6 h-6 bg-[#00416a] rounded-full border-4 border-white" />
            <h3 className="text-xl font-semibold text-[#00416a]">{s.title}</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ================= FEE CALCULATOR ================= */
function ScrutinyFeeCalculator() {
  const [noticeType, setNoticeType] = useState<string>("");
  const [fee, setFee] = useState<number | null>(null);
  const [label, setLabel] = useState("");

  const noticeOptions = [
    { value: "143_1", label: "Section 143(1) — Intimation / Demand", fee: 1999, desc: "AIS reconciliation + rectification or response filing" },
    { value: "139_9", label: "Section 139(9) — Defective Return", fee: 1499, desc: "ITR correction and refiling within 15 days" },
    { value: "245", label: "Section 245 — Refund Adjustment", fee: 1999, desc: "Objection filing or verification of outstanding demand" },
    { value: "143_2", label: "Section 143(2) — Scrutiny Notice", fee: 4999, desc: "Full scrutiny response — documents, questionnaire, portal submission" },
    { value: "142_1", label: "Section 142(1) — Pre-Assessment Enquiry", fee: 3999, desc: "Detailed query response with supporting documentation" },
    { value: "148", label: "Section 148 — Reassessment Notice", fee: 7999, desc: "Fresh ITR filing + complete reassessment representation" },
    { value: "271", label: "Section 271 / 270A — Penalty Notice", fee: 5999, desc: "Penalty contest reply with legal grounds and precedents" },
    { value: "appeal", label: "CIT(A) Appeal Filing", fee: 9999, desc: "Grounds of appeal, paper book, CIT(A) representation" },
    { value: "itat", label: "ITAT Appeal", fee: 14999, desc: "ITAT appeal drafting + coordination with senior advocate" },
  ];

  const handleSelect = (option: { value: string; label: string; fee: number; desc: string }) => {
    setNoticeType(option.value);
    setFee(option.fee);
    setLabel(option.desc);
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Estimate Your Notice Handling Fee
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Select the type of notice you received for an instant fee estimate:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="Income Tax Notice Handling Fee Calculator"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {noticeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt)}
              className={`text-left p-4 rounded-xl border transition text-sm ${
                noticeType === opt.value
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#00416a]"
              }`}
              aria-pressed={noticeType === opt.value}
            >
              <span className="font-semibold block mb-1">{opt.label}</span>
              <span className={`text-xs ${noticeType === opt.value ? "text-gray-200" : "text-gray-500"}`}>
                Starting ₹{opt.fee.toLocaleString("en-IN")}
              </span>
            </button>
          ))}
        </div>

        {fee !== null && (
          <div className="border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Fee:{" "}
              <span className="text-2xl">₹{fee.toLocaleString("en-IN")}</span>{" "}
              onwards
            </p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
            <p className="text-sm text-gray-400 mt-2">
              * Fees vary based on complexity, number of assessment years
              involved, and volume of documentation. GST extra.
            </p>
          </div>
        )}

        {fee === null && (
          <p className="text-gray-500 text-sm">
            Select a notice type above to see an estimated fee.
          </p>
        )}
      </div>
    </>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    {
      name: "Sanjeev Agarwal",
      location: "Khatauli",
      rating: 5,
      text: "Received a Section 143(2) scrutiny notice for AY 2022-23. Taxvio prepared a thorough response with all documents. The AO accepted our reply and passed the order without any additions.",
    },
    {
      name: "Priya Constructions Pvt. Ltd.",
      location: "Muzaffarnagar",
      rating: 5,
      text: "We had a Section 148 reassessment notice for cash deposits. Taxvio handled the entire process — fresh ITR, detailed response, and portal submissions — demand reduced to nil.",
    },
    {
      name: "Ramesh & Co. Partnership Firm",
      location: "Meerut",
      rating: 5,
      text: "Our GST vs ITR turnover mismatch triggered a 143(2) notice. Taxvio reconciled our books, prepared a reconciliation statement, and the scrutiny was closed without additions.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted for Notice Resolution Across India
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="border p-6 rounded-xl shadow hover:shadow-lg transition"
            itemScope
            itemType="https://schema.org/Review"
          >
            <div className="flex mb-3" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }).map((_, j) => (
                <span key={j} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="mb-4 text-gray-700 italic" itemProp="reviewBody">
              "{r.text}"
            </p>
            <h4
              className="font-semibold text-[#00416a]"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">{r.name}</span>
            </h4>
            <p className="text-sm text-gray-500">{r.location}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ================= FAQ ================= */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What should I do immediately after receiving an income tax notice?",
      a: "Do not ignore it. Identify the section number on the notice (e.g., 143(1), 143(2), 148). Check the response deadline carefully — most notices give 15–30 days. Log in to the Income Tax portal (incometax.gov.in) under 'Pending Actions → e-Proceedings' to see the full notice and deadline. Then engage a tax professional immediately to review the notice, gather required documents, and prepare a complete response.",
    },
    {
      q: "What is the difference between Section 143(1) and Section 143(2)?",
      a: "Section 143(1) is an automated intimation after ITR processing — it either accepts the return, raises a demand (due to TDS mismatch, arithmetic error, or deduction disallowance), or confirms a refund. It is not a scrutiny. Section 143(2) is a formal scrutiny notice issued by an Assessing Officer for detailed examination of the ITR — requiring books, documents, and explanations to verify the correctness of income and deductions reported.",
    },
    {
      q: "What is a Section 148 reassessment notice?",
      a: "Section 148 is issued when the AO has 'reason to believe' that income chargeable to tax has escaped assessment — i.e., income was under-reported or not reported in the original ITR. Before issuing 148, the AO must now issue a Section 148A notice giving the taxpayer an opportunity to explain. Reassessment can go back up to 3 years (or 10 years for large income/foreign assets). The taxpayer must file a fresh ITR in response.",
    },
    {
      q: "What is faceless assessment and do I still need a CA?",
      a: "Faceless Assessment under Section 144B means all scrutiny proceedings are conducted digitally — no face-to-face meetings with the AO. All notices, responses, and hearings happen through the Income Tax portal. Professional representation is even more important in faceless assessment because every written response and document submitted becomes the permanent record — there's no opportunity to verbally clarify. A well-prepared written response can mean the difference between nil additions and large demands.",
    },
    {
      q: "Can I appeal if I disagree with the assessment order?",
      a: "Yes. If the assessment order (Section 143(3) or 144) contains unjustified additions, you can file an appeal before CIT(A) within 30 days of receiving the order in Form 35. If CIT(A) order is adverse, further appeal to ITAT is available within 60 days. During pending appeal, you can request a stay on 20% of the disputed demand. Taxvio assists with the complete appeal process including drafting grounds of appeal and representation.",
    },
    {
      q: "What is the penalty for under-reporting of income?",
      a: "Under Section 270A, under-reporting of income (honest error or wrong deduction claim) attracts penalty at 50% of the tax payable on the under-reported income. Misreporting (deliberate concealment, false documents, bogus claims) attracts 200% penalty. These penalties are separate from the tax and interest on the additions. A proper response during scrutiny proceedings can prevent both the addition and the resulting penalty.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions about Income Tax Scrutiny">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — Income Tax Scrutiny & Notice Handling
      </h2>

      <div className="space-y-4 mb-16">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden"
            itemScope
            itemType="https://schema.org/Question"
          >
            <button
              className="w-full text-left p-5 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span itemProp="name">{f.q}</span>
              <span className="text-[#00416a] text-xl ml-4 shrink-0">
                {open === i ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              className={`px-5 text-gray-600 leading-relaxed transition-all duration-300 ${
                open === i ? "max-h-96 pb-5" : "max-h-0 overflow-hidden"
              }`}
              itemScope
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= CTA ================= */
function PremiumCTA() {
  return (
    <section className="mt-16 mb-0" aria-label="Call to Action">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#00416a] to-[#002b45] rounded-3xl shadow-2xl px-8 py-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Received a Tax Notice? Act Now — Don't Wait
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Every day of delay increases your risk of large tax additions.
            Taxvio's expert CA and legal team handles all notice types —
            143(1), 143(2), 148, penalty, and appeals. Service starts at
            ₹1,999. Serving Khatauli, Muzaffarnagar, Meerut and all of India
            online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today with your notice details | 📧 Email your notice for a free review
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Get immediate help with income tax notice"
            >
              Get Immediate Notice Help
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
            >
              Free Notice Review
            </Link>
          </div>
        </div>
      </div>
      <Footar/>
    </section>
  );
}