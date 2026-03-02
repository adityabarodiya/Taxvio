"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Quarterly TDS Return Filing Services",
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
    "Professional quarterly TDS return filing services in India. Form 24Q, 26Q, 27Q, 27EQ filing, TDS challan reconciliation, Form 16/16A generation, and correction statements. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "TDS Return Filing",
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

// ─── FAQPage structured data ──────────────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TDS and who is required to deduct it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TDS (Tax Deducted at Source) is a mechanism under the Income Tax Act where the payer deducts tax at the time of making specified payments such as salary, rent, professional fees, contractor payments, interest, and commission. Any person or entity making these payments above the specified threshold is required to deduct TDS — including companies, firms, proprietors, and individuals liable to audit.",
      },
    },
    {
      "@type": "Question",
      name: "What are the due dates for quarterly TDS return filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TDS returns must be filed quarterly: Q1 (April–June) by 31st July, Q2 (July–September) by 31st October, Q3 (October–December) by 31st January, and Q4 (January–March) by 31st May. The due date for government deductors is 15th July, 15th October, 15th January, and 15th May respectively.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for late TDS return filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late filing of TDS returns attracts a mandatory fee of ₹200 per day under Section 234E from the due date until the return is filed — subject to a maximum of the TDS amount. Additionally, the Assessing Officer can levy a penalty of ₹10,000 to ₹1,00,000 under Section 271H for failure to file TDS returns.",
      },
    },
    {
      "@type": "Question",
      name: "What forms are used for TDS return filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 24Q is used for TDS on salary payments. Form 26Q is used for TDS on non-salary payments to residents (rent, professional fees, contractor, interest, commission etc.). Form 27Q is used for TDS on payments to non-residents. Form 27EQ is used for TCS (Tax Collected at Source).",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 16 and Form 16A?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 16 is the TDS certificate issued by employers to employees for TDS deducted on salary income. It consists of Part A (TDS deducted and deposited details) and Part B (salary computation and deductions). Form 16A is the TDS certificate issued for non-salary payments like rent, professional fees, and interest.",
      },
    },
    {
      "@type": "Question",
      name: "Can TDS returns be revised after filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. TDS returns can be corrected by filing a correction statement (revised return) on the TRACES portal. Corrections can be made for wrong PAN, incorrect challan details, wrong TDS amounts, or addition/deletion of deductee entries. Timely correction prevents mismatch notices to deductees whose Form 26AS is affected.",
      },
    },
  ],
};

export default function QuarterlyTDSClient() {
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
        <DeadlineBanner />

        {/* ── HERO ── */}
        <section
          className="bg-gradient-to-r from-[#00416a] to-[#002b45] text-white py-24"
          aria-label="Quarterly TDS Return Filing Hero"
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
                  Quarterly TDS Filing
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quarterly TDS Return Filing Services in India — FY 2025-26
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Accurate and timely quarterly TDS return filing for businesses,
              companies, firms, and proprietors. Form 24Q, 26Q, 27Q & 27EQ
              filing, challan reconciliation, Form 16/16A generation, TRACES
              correction statements, and complete TDS compliance. Serving
              Khatauli, Muzaffarnagar and pan-India online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="File my TDS return now"
              >
                File TDS Return Now
              </Link>
              <Link
                href="#due-dates"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                View Due Dates
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ Form 24Q, 26Q, 27Q & 27EQ</span>
              <span>✅ Form 16 / 16A Generation</span>
              <span>✅ TRACES Correction Statements</span>
              <span>✅ Challan Reconciliation</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Complete Guide to Quarterly TDS Return Filing (FY 2025-26)
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              Tax Deducted at Source (TDS) is one of the most important
              compliance obligations under the Indian Income Tax Act, 1961. Any
              person or entity making specified payments — such as{" "}
              <strong>salary, rent, professional fees, contractor payments,
              commission, interest, or dividends</strong> — above the prescribed
              threshold is required to deduct TDS at the applicable rate and
              deposit it with the government. But deducting and depositing TDS
              is only the first step. Every deductor must also{" "}
              <strong>file quarterly TDS returns</strong> reporting all
              deductions made during the quarter — and failure to do so attracts
              mandatory penalties.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              TDS returns serve a critical function in India's tax ecosystem.
              They populate the{" "}
              <strong>Form 26AS and Annual Information Statement (AIS)</strong>{" "}
              of every deductee — ensuring that the tax credit for the amount
              deducted is reflected in the deductee's income tax account.
              Errors, delays, or non-filing of TDS returns directly impact
              deductees — resulting in mismatch notices, inability to claim TDS
              credit while filing their own ITR, and refund delays. This makes
              accurate and timely TDS return filing not just a legal requirement
              but a responsibility towards employees, vendors, and other
              deductees.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
              provides end-to-end quarterly TDS compliance services for
              businesses, companies, firms, and proprietors across Uttar Pradesh
              and pan-India. Our expert team handles TDS computation,
              challan payment guidance, quarterly return filing (Form 24Q, 26Q,
              27Q, 27EQ), Form 16/16A generation, TRACES correction statements,
              and TDS notice resolution.
            </p>

            {/* WHO MUST DEDUCT */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Who Is Required to Deduct TDS and File TDS Returns?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              The obligation to deduct TDS and file quarterly returns applies to
              a wide range of payers — not just large companies. The following
              entities are mandatorily required to obtain a TAN (Tax Deduction
              Account Number) and comply with TDS provisions:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Companies</strong> (private limited, public limited,
                OPC) — on salary, contractor payments, rent, professional fees,
                interest, dividends, and all other specified payments.
              </li>
              <li>
                <strong>Partnership Firms & LLPs</strong> — on all payments
                above TDS thresholds.
              </li>
              <li>
                <strong>Proprietors liable to tax audit</strong> — on
                professional fees, contractor payments, rent exceeding ₹2.4 lakh
                per year, and other specified payments.
              </li>
              <li>
                <strong>Central & State Government offices</strong> — on all
                payments including salary and contractor bills.
              </li>
              <li>
                <strong>Trusts, NGOs & Section 8 Companies</strong> — on
                salary paid to employees and other applicable payments.
              </li>
              <li>
                <strong>Individuals & HUFs liable to audit</strong> — on
                professional fees, contractor payments, and rent exceeding the
                threshold.
              </li>
            </ul>

            {/* TDS FORMS */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              TDS Return Forms — Which Form to File and When
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Different TDS return forms are prescribed for different types of
              payments. Filing the wrong form — or missing a form — is a common
              compliance error. Here is a complete breakdown:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-3">
              <li>
                <strong>Form 24Q</strong> — Filed for TDS deducted on{" "}
                <strong>salary payments</strong> to employees. Includes
                employee-wise salary details, deductions claimed (80C, HRA
                etc.), and tax computation. Q4's Form 24Q (Annexure II) forms
                the basis for issuing Form 16 to employees.
              </li>
              <li>
                <strong>Form 26Q</strong> — Filed for TDS on all{" "}
                <strong>non-salary payments to residents</strong> — professional
                fees (194J), contractor payments (194C), rent (194I), interest
                (194A), commission (194H), dividends (194), lottery winnings
                (194B), and more. This is the most widely filed TDS return form.
              </li>
              <li>
                <strong>Form 27Q</strong> — Filed for TDS on{" "}
                <strong>payments to non-residents and foreign companies</strong>{" "}
                — including fees for technical services, royalties, interest,
                and other income with India-source nexus. Applicable where
                DTAA (Double Tax Avoidance Agreement) provisions may also need
                consideration.
              </li>
              <li>
                <strong>Form 27EQ</strong> — Filed for{" "}
                <strong>TCS (Tax Collected at Source)</strong> — applicable on
                collection from buyers of specified goods (scrap, tendu leaves,
                alcohol) and on high-value transactions like foreign remittances
                under LRS (Section 206C).
              </li>
            </ul>
          </article>

          {/* DUE DATES TABLE */}
          <DueDatesTable />

          {/* TDS RATES */}
          <TDSRatesSection />

          {/* PROCESS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              TDS Compliance Process — From Deduction to Return Filing
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              TDS compliance involves multiple steps that must be completed in
              the correct sequence every quarter to avoid penalties and
              deductee mismatches:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Step 1 — Obtain TAN</strong> — Tax Deduction Account
                Number is mandatory before making any TDS-applicable payment.
                TAN is applied via Form 49B at an NSDL facilitation centre or
                online.
              </li>
              <li>
                <strong>Step 2 — Deduct TDS at the Correct Rate</strong> — TDS
                must be deducted at the rate prescribed under the relevant
                section at the time of payment or credit, whichever is earlier.
                If the deductee does not furnish PAN, TDS must be deducted at
                the higher of the prescribed rate or 20% under Section 206AA.
              </li>
              <li>
                <strong>Step 3 — Deposit TDS Challan</strong> — TDS deducted
                must be deposited with the government using Challan 281 by the
                7th of the following month (for March deductions: by 30th April).
                Late deposit attracts interest at 1.5% per month under Section
                201(1A).
              </li>
              <li>
                <strong>Step 4 — File Quarterly TDS Return</strong> — After
                depositing all challans for the quarter, the TDS return (24Q /
                26Q / 27Q / 27EQ) must be filed on the TRACES / TIN-NSDL portal
                by the prescribed due date.
              </li>
              <li>
                <strong>Step 5 — Generate & Issue Form 16 / 16A</strong> — After
                successful return filing, Form 16 (for salary) and Form 16A
                (for non-salary) must be downloaded from TRACES and issued to
                deductees within the prescribed time — enabling them to claim
                TDS credit in their own ITR.
              </li>
            </ul>

            {/* PENALTIES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              TDS Penalties & Interest — What You Risk by Non-Compliance
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              TDS non-compliance is one of the most penalised areas under the
              Income Tax Act. Here is a complete overview of the financial
              consequences:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Section 201(1A) — Interest on Late TDS Deposit</strong> — 1%
                per month (or part of month) for failure to deduct TDS, and
                1.5% per month for failure to deposit TDS after deduction.
                Calculated from the date of deduction / due date to actual
                deposit date.
              </li>
              <li>
                <strong>Section 234E — Late Filing Fee</strong> — A mandatory
                fee of <strong>₹200 per day</strong> from the due date of return
                until the date of actual filing, subject to a maximum equal to
                the TDS amount for that quarter. This is not a penalty that can
                be waived — it is automatically calculated and must be paid
                before the return can be filed.
              </li>
              <li>
                <strong>Section 271H — Penalty for Non-Filing</strong> — If a
                TDS return is not filed within one year of the due date, the
                Assessing Officer can levy a penalty between{" "}
                <strong>₹10,000 and ₹1,00,000</strong>. This is in addition to
                the Section 234E late fee.
              </li>
              <li>
                <strong>Section 40(a)(ia) — Disallowance of Expenses</strong> — If
                TDS is not deducted or deposited on payments like professional
                fees, contractor charges, or rent, <strong>30% of the
                expense</strong> is disallowed as a deduction in the payer's
                income tax computation — significantly increasing taxable income.
              </li>
              <li>
                <strong>Section 276B — Prosecution</strong> — Wilful failure to
                deposit TDS with the government after deduction can result in
                criminal prosecution with imprisonment of 3 months to 7 years
                plus fine. This is among the most serious consequences in Indian
                tax law.
              </li>
            </ul>

            {/* FORM 16 / 16A */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Form 16 & Form 16A — Generation, Issuance & Due Dates
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              After filing TDS returns, deductors must generate and issue TDS
              certificates to deductees:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Form 16 (Salary TDS Certificate)</strong> — Must be
                issued by employers to employees by <strong>15th June</strong>{" "}
                of the assessment year. It consists of Part A (downloaded from
                TRACES — TDS deducted and deposited quarter-wise) and Part B
                (salary breakup, exemptions, deductions — prepared by employer).
                Employees cannot file their ITR-1 / ITR-2 accurately without
                Form 16.
              </li>
              <li>
                <strong>Form 16A (Non-Salary TDS Certificate)</strong> — Must be
                issued to deductees (vendors, professionals, landlords etc.)
                within <strong>15 days</strong> of the due date of the
                respective quarterly TDS return. Form 16A is downloaded directly
                from TRACES using the deductor's login and is digitally signed.
              </li>
              <li>
                <strong>Form 16B (TDS on Property Sale)</strong> — Issued by
                property buyer to seller for TDS deducted under Section 194IA
                on purchase of immovable property exceeding ₹50 lakh. Must be
                generated from TRACES within 15 days of challan deposit.
              </li>
              <li>
                <strong>Form 16C (TDS on Rent)</strong> — Issued by tenant
                (individual/HUF) to landlord for TDS deducted under Section
                194IB on monthly rent exceeding ₹50,000. Generated from TRACES.
              </li>
            </ul>

            {/* TRACES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              TRACES — TDS Correction Statements & Common Errors
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              TRACES (TDS Reconciliation Analysis and Correction Enabling
              System) is the Income Tax Department's portal for TDS compliance.
              Common errors that require correction statements include:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Wrong PAN of deductee</strong> — Results in TDS credit
                not appearing in the deductee's Form 26AS. Most common and
                critical error.
              </li>
              <li>
                <strong>Incorrect challan details</strong> — Wrong BSR code,
                challan serial number, or deposit date causes challan-to-return
                mismatch.
              </li>
              <li>
                <strong>Wrong TDS amount</strong> — Overstated or understated
                TDS amounts that need correction.
              </li>
              <li>
                <strong>Missing deductee entries</strong> — Payments made but
                deductee entries not included in the original return.
              </li>
              <li>
                <strong>Wrong section code</strong> — TDS deducted under an
                incorrect section (e.g., 194J instead of 194C).
              </li>
            </ul>
          </article>

          {/* WORKFLOW */}
          <WorkflowSection />

          {/* CALCULATOR */}
          <TDSFeeCalculator />

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

/* ================= DEADLINE BANNER ================= */
function DeadlineBanner() {
  const [nextDeadline, setNextDeadline] = useState<{
    label: string;
    daysLeft: number;
  } | null>(null);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const deadlines = [
      { label: "Q1 TDS Return (Apr–Jun)", date: new Date(`July 31, ${year}`) },
      { label: "Q2 TDS Return (Jul–Sep)", date: new Date(`October 31, ${year}`) },
      { label: "Q3 TDS Return (Oct–Dec)", date: new Date(`January 31, ${year + 1}`) },
      { label: "Q4 TDS Return (Jan–Mar)", date: new Date(`May 31, ${year + 1}`) },
    ];
    const upcoming = deadlines.find((d) => d.date.getTime() > today.getTime());
    if (upcoming) {
      const daysLeft = Math.ceil(
        (upcoming.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      setNextDeadline({ label: upcoming.label, daysLeft });
    }
  }, []);

  return (
    <div
      className="bg-red-600 text-white text-center py-3 font-semibold text-sm"
      role="alert"
      aria-live="polite"
    >
      ⏳ Next TDS Return Deadline:{" "}
      {nextDeadline
        ? `${nextDeadline.label} — ${nextDeadline.daysLeft} Days Left`
        : "File On Time to Avoid ₹200/Day Penalty"}
      &nbsp;|&nbsp; Late filing: ₹200/day under Section 234E
    </div>
  );
}

/* ================= DUE DATES TABLE ================= */
function DueDatesTable() {
  return (
    <section id="due-dates" aria-label="TDS Return Filing Due Dates">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Quarterly TDS Return Due Dates — FY 2025-26
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        TDS returns must be filed every quarter. Missing even one quarter
        attracts a late filing fee of ₹200 per day automatically under Section
        234E. Here are all quarterly due dates for FY 2025-26:
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Quarterly TDS Return Due Dates FY 2025-26"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Quarter</th>
              <th className="p-4 text-left" scope="col">Period</th>
              <th className="p-4 text-left" scope="col">Due Date (Non-Govt)</th>
              <th className="p-4 text-left" scope="col">Due Date (Govt)</th>
              <th className="p-4 text-left" scope="col">Form 16A Issuance</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Q1", "April – June 2025", "31st July 2025", "15th July 2025", "By 15th August 2025"],
              ["Q2", "July – September 2025", "31st October 2025", "15th October 2025", "By 15th November 2025"],
              ["Q3", "October – December 2025", "31st January 2026", "15th January 2026", "By 15th February 2026"],
              ["Q4", "January – March 2026", "31st May 2026", "15th May 2026", "Form 16 by 15th June 2026"],
            ].map(([q, period, nonGovt, govt, form16], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-semibold text-[#00416a]">{q}</td>
                <td className="p-4 text-gray-600">{period}</td>
                <td className="p-4 font-medium text-gray-700">{nonGovt}</td>
                <td className="p-4 text-gray-600">{govt}</td>
                <td className="p-4 text-gray-600">{form16}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * TDS challan deposit is due by the 7th of the following month (30th
        April for March deductions). Late deposit attracts interest at 1.5% per
        month under Section 201(1A). Ensure challans are deposited before
        filing the return.
      </p>
    </section>
  );
}

/* ================= TDS RATES SECTION ================= */
function TDSRatesSection() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-4 mb-4">
        Key TDS Rates Under Common Sections — FY 2025-26
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        TDS rates vary based on the nature of payment and the residential status
        of the deductee. Here are the most commonly applicable TDS sections and
        rates for FY 2025-26:
      </p>

      <div className="overflow-x-auto mb-16">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="TDS Rates Under Common Sections FY 2025-26"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Section</th>
              <th className="p-4 text-left" scope="col">Nature of Payment</th>
              <th className="p-4 text-left" scope="col">Threshold</th>
              <th className="p-4 text-left" scope="col">TDS Rate</th>
              <th className="p-4 text-left" scope="col">Return Form</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["192", "Salary to employees", "Basic exemption limit", "Slab rate", "24Q"],
              ["192A", "Premature PF withdrawal", "₹50,000", "10%", "26Q"],
              ["194A", "Interest (other than securities)", "₹50,000 (bank) / ₹5,000 (others)", "10%", "26Q"],
              ["194B / 194BB", "Lottery / Horse race winnings", "₹10,000", "30%", "26Q"],
              ["194C", "Contractor / Sub-contractor payments", "₹30,000 (single) / ₹1,00,000 (aggregate)", "1% (individual) / 2% (company)", "26Q"],
              ["194D", "Insurance commission", "₹15,000", "5%", "26Q"],
              ["194H", "Commission / Brokerage", "₹15,000", "5%", "26Q"],
              ["194I(a)", "Rent — Plant, Machinery & Equipment", "₹2,40,000 p.a.", "2%", "26Q"],
              ["194I(b)", "Rent — Land, Building & Furniture", "₹2,40,000 p.a.", "10%", "26Q"],
              ["194IA", "Purchase of immovable property", "₹50,00,000", "1%", "26QB"],
              ["194IB", "Rent by individual/HUF (monthly > ₹50,000)", "₹50,000 per month", "5%", "26QC"],
              ["194J", "Professional / Technical fees", "₹30,000", "10% (professional) / 2% (technical)", "26Q"],
              ["194Q", "Purchase of goods", "₹50,00,000 aggregate", "0.1%", "26Q"],
              ["206C(1H)", "TCS on sale of goods", "₹50,00,000 aggregate", "0.1%", "27EQ"],
              ["206C(1G)", "TCS on foreign remittance (LRS)", "₹7,00,000 per year", "5% / 0.5%", "27EQ"],
            ].map(([section, nature, threshold, rate, form], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-semibold text-[#00416a] whitespace-nowrap">{section}</td>
                <td className="p-4 text-gray-700">{nature}</td>
                <td className="p-4 text-gray-600">{threshold}</td>
                <td className="p-4 font-medium text-gray-700">{rate}</td>
                <td className="p-4 text-gray-600">{form}</td>
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
      title: "1. TAN Verification & Payment Data Collection",
      desc: "We verify your active TAN, collect payment data for the quarter (salary register, vendor payment details, rent, professional fees), and cross-check with bank statements to ensure no payment is missed.",
    },
    {
      title: "2. TDS Computation & Section Mapping",
      desc: "Each payment is mapped to the correct TDS section (192, 194C, 194J, 194I etc.), threshold checked, and TDS amount computed at the applicable rate. PAN of each deductee is verified.",
    },
    {
      title: "3. Challan Verification & Reconciliation",
      desc: "All TDS challans deposited during the quarter are verified against bank statements and reconciled with TRACES. BSR codes, challan serial numbers, and deposit dates are confirmed.",
    },
    {
      title: "4. TDS Return Preparation (24Q / 26Q / 27Q / 27EQ)",
      desc: "The return file is prepared in FVU (File Validation Utility) format with all deductee entries, challan details, and section-wise breakup. File is validated for errors before upload.",
    },
    {
      title: "5. Filing on TRACES / TIN-NSDL Portal",
      desc: "The validated TDS return file is uploaded on the TRACES / TIN-NSDL portal before the quarterly due date. Acknowledgement (Token Number) is saved as proof of filing.",
    },
    {
      title: "6. Form 16 / 16A Generation & Issuance",
      desc: "After successful filing, Form 16 (salary) and Form 16A (non-salary) are downloaded from TRACES and issued to deductees within the prescribed timeline — enabling them to claim TDS credit in their ITR.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our Quarterly TDS Filing Process — End to End
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        Taxvio handles your complete quarterly TDS compliance from data
        collection to Form 16 issuance — so you never miss a deadline or
        receive a notice:
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
function TDSFeeCalculator() {
  const [employees, setEmployees] = useState(0);
  const [vendors, setVendors] = useState(0);
  const [fee, setFee] = useState(999);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const total = employees + vendors;
    if (total <= 10) {
      setFee(999);
      setLabel("Basic — Up to 10 deductee entries per quarter");
    } else if (total <= 50) {
      setFee(1999);
      setLabel("Standard — Up to 50 deductee entries per quarter");
    } else if (total <= 200) {
      setFee(2999);
      setLabel("Business — Up to 200 deductee entries per quarter");
    } else {
      setFee(4999);
      setLabel("Enterprise — 200+ deductee entries per quarter");
    }
  }, [employees, vendors]);

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Estimate Your Quarterly TDS Filing Fee
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Our TDS filing fees depend on the number of deductee entries per
        quarter. Enter the approximate number of employees and vendors:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="TDS Return Filing Fee Calculator"
      >
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <label
              htmlFor="employees-input"
              className="block font-semibold text-gray-700 mb-2"
            >
              Number of Employees (Form 24Q)
            </label>
            <input
              id="employees-input"
              type="number"
              placeholder="e.g. 15"
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#00416a]"
              onChange={(e) => setEmployees(Number(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor="vendors-input"
              className="block font-semibold text-gray-700 mb-2"
            >
              Number of Vendors / Deductees (Form 26Q)
            </label>
            <input
              id="vendors-input"
              type="number"
              placeholder="e.g. 20"
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#00416a]"
              onChange={(e) => setVendors(Number(e.target.value))}
            />
          </div>
        </div>

        <p
          className="text-lg font-semibold text-[#00416a]"
          aria-live="polite"
        >
          Estimated Fee Per Quarter:{" "}
          <span className="text-2xl">₹{fee.toLocaleString("en-IN")}</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
        <p className="text-sm text-gray-400 mt-2">
          * Per quarter, per return type. Annual TDS compliance (all 4 quarters)
          available at a discounted rate. Form 16 / 16A generation and TRACES
          correction statements charged separately. GST extra.
        </p>
      </div>
    </>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    {
      name: "Agarwal Traders Pvt. Ltd.",
      location: "Khatauli",
      rating: 5,
      text: "Taxvio files all our quarterly TDS returns — 24Q and 26Q — on time every quarter. Zero notices, zero penalties in two years. Highly reliable.",
    },
    {
      name: "Meena Construction Co.",
      location: "Muzaffarnagar",
      rating: 5,
      text: "We had multiple challan mismatches from previous filings. Taxvio filed correction statements on TRACES and resolved all deductee complaints within a week.",
    },
    {
      name: "Dr. Sharma's Clinic",
      location: "Meerut",
      rating: 5,
      text: "As a professional with staff and vendors, TDS was confusing. Taxvio handles everything quarterly and issues Form 16A to my vendors on time.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted for TDS Compliance Across India
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
      q: "What is TDS and who is required to deduct and file TDS returns?",
      a: "TDS (Tax Deducted at Source) is a mechanism where the payer deducts tax at the time of making specified payments. Any person or entity making payments like salary, rent, professional fees, contractor payments, interest, or commission above prescribed thresholds must deduct TDS, deposit it with the government, and file quarterly TDS returns. This includes companies, firms, proprietors liable to audit, government offices, and trusts.",
    },
    {
      q: "What are the due dates for quarterly TDS return filing in FY 2025-26?",
      a: "Q1 (Apr–Jun): 31st July 2025 | Q2 (Jul–Sep): 31st October 2025 | Q3 (Oct–Dec): 31st January 2026 | Q4 (Jan–Mar): 31st May 2026. Government deductors have earlier dates (15th of the respective month). TDS challans must be deposited by the 7th of the following month.",
    },
    {
      q: "What is the penalty for late TDS return filing?",
      a: "Section 234E mandates a fee of ₹200 per day from the due date until filing — capped at the TDS amount for that quarter. This is mandatory and cannot be waived. Additionally, Section 271H allows the Assessing Officer to levy ₹10,000 to ₹1,00,000 if the return is not filed within one year of the due date.",
    },
    {
      q: "What is the difference between Form 24Q and Form 26Q?",
      a: "Form 24Q is filed for TDS deducted on salary payments to employees — it includes employee-wise salary details and forms the basis for Form 16. Form 26Q is filed for TDS on all non-salary payments to residents — contractor payments (194C), professional fees (194J), rent (194I), interest (194A), commission (194H), and others.",
    },
    {
      q: "What happens if TDS is deducted but not deposited to the government?",
      a: "If TDS is deducted from a payment but not deposited with the government, the deductor is treated as an 'assessee in default' under Section 201. This attracts interest at 1.5% per month under Section 201(1A) from the date of deduction to the date of deposit. Additionally, Section 276B prescribes criminal prosecution with imprisonment of 3 months to 7 years for wilful failure to deposit TDS.",
    },
    {
      q: "Can TDS returns be corrected after filing?",
      a: "Yes. Correction statements can be filed on the TRACES portal to correct wrong PAN of deductees, incorrect challan details, wrong TDS amounts, missing entries, or incorrect section codes. Corrections are critical because errors in TDS returns directly affect the deductee's Form 26AS and their ability to claim TDS credit while filing their own ITR.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions about TDS Return Filing">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — Quarterly TDS Return Filing
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
            Never Miss a TDS Deadline Again — Outsource to Taxvio
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Avoid ₹200/day penalty, protect your deductees' TDS credit, and
            stay 100% compliant every quarter. Taxvio's managed TDS compliance
            service starts at just ₹999 per quarter. Serving Khatauli,
            Muzaffarnagar, Meerut and all of India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email for a free TDS compliance audit
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Start quarterly TDS filing with Taxvio"
            >
              Start TDS Filing — ₹999/Quarter
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
            >
              Get Free TDS Audit
            </Link>
          </div>
        </div>
      </div>
      <Footar/>
    </section>
  );
}