"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Income Tax Audit Services under Section 44AB",
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
    "Professional income tax audit services under Section 44AB in India. Form 3CA, 3CB, 3CD preparation for businesses, professionals, firms, and companies. Tax audit report filing, books of accounts review, and complete compliance. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Audit under Section 44AB",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
      maxPrice: "19999",
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
      name: "What is a tax audit under Section 44AB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A tax audit under Section 44AB of the Income Tax Act requires eligible taxpayers to get their accounts audited by a practicing Chartered Accountant. The auditor examines books of accounts, verifies income and expenditure, checks compliance with various provisions, and submits a report in Form 3CA/3CB along with Form 3CD (a detailed statement of particulars). The audit report must be filed on the Income Tax portal before the due date.",
      },
    },
    {
      "@type": "Question",
      name: "Who is liable for income tax audit under Section 44AB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax audit is mandatory for: (1) Businesses with total turnover exceeding ₹1 crore (₹10 crore if 95% transactions are digital/non-cash); (2) Professionals with gross receipts exceeding ₹50 lakh; (3) Persons opting out of presumptive taxation under Section 44AD, 44ADA, or 44AE and declaring income lower than the prescribed presumptive rate; (4) All companies (since companies are always required to audit accounts); (5) Cooperative societies with income above exemption limit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the due date for tax audit report filing for FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tax audit report (Form 3CA/3CB along with Form 3CD) must be filed on the Income Tax e-filing portal by 30th September 2026 for FY 2025-26. The ITR for taxpayers liable to audit must be filed by 31st October 2026. Failure to file the audit report by 30th September attracts penalty under Section 271B.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Form 3CA and Form 3CB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 3CA is used when the taxpayer is already required to get accounts audited under any other law (e.g., companies audited under Companies Act, cooperative societies). Form 3CB is used when the taxpayer is required to get accounts audited only under Section 44AB (most proprietors, firms, and LLPs). Both forms are filed together with the detailed Form 3CD statement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for not getting accounts audited under Section 44AB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Section 271B, failure to get accounts audited or failure to furnish the audit report by the due date attracts a penalty of 0.5% of total sales, turnover, or gross receipts — subject to a maximum of ₹1,50,000. This penalty can be avoided only if the taxpayer can prove reasonable cause for the failure.",
      },
    },
    {
      "@type": "Question",
      name: "What are the key clauses in Form 3CD that need careful attention?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 3CD has 44 clauses covering: method of accounting, valuation of closing stock, amounts inadmissible under Section 40(a), payments to specified persons under 40A(2)(b), depreciation under IT Act, deductions under Chapter VI-A, tax audit adjustments, related party transactions, MSME payments, TDS compliance summary, and deemed dividend under Section 2(22)(e). Each clause must be accurately reported to avoid scrutiny.",
      },
    },
  ],
};

export default function IncomeTaxAuditClient() {
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
          aria-label="Income Tax Audit Hero"
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
                  Income Tax Audit
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Income Tax Audit Services Under Section 44AB — FY 2025-26
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Professional tax audit services for businesses, professionals,
              firms, LLPs, and companies liable under Section 44AB. Form
              3CA/3CB and Form 3CD preparation, books of accounts review, TDS
              compliance verification, and timely audit report filing. Serving
              Khatauli, Muzaffarnagar and pan-India online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="Start my tax audit process"
              >
                Start Tax Audit Now
              </Link>
              <Link
                href="#form3cd"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                View Form 3CD Clauses
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ Form 3CA / 3CB / 3CD Filing</span>
              <span>✅ CA-Conducted Audit</span>
              <span>✅ Books of Accounts Review</span>
              <span>✅ Section 44AB Compliance</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Complete Guide to Income Tax Audit Under Section 44AB (FY 2025-26)
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              An <strong>income tax audit under Section 44AB</strong> of the
              Income Tax Act, 1961 is a mandatory examination of a taxpayer's
              books of accounts by a practicing Chartered Accountant when
              prescribed turnover or receipt thresholds are crossed. Unlike a
              statutory audit under the Companies Act (which is primarily for
              stakeholder protection), a tax audit is specifically designed to
              verify the correctness of income and expenditure reported in the
              income tax return, ensure compliance with various provisions of
              the Income Tax Act, and enable the Income Tax Department to assess
              the taxpayer's returns accurately.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              The tax audit culminates in two key documents:{" "}
              <strong>Form 3CA or Form 3CB</strong> (the auditor's main report)
              and <strong>Form 3CD</strong> (a comprehensive statement of
              particulars with 44 detailed clauses covering every aspect of the
              taxpayer's financial and tax compliance). These documents are
              uploaded on the Income Tax e-filing portal by the Chartered
              Accountant and must be filed before{" "}
              <strong>30th September</strong> of the assessment year — failing
              which a penalty of up to <strong>₹1.5 lakh</strong> is levied
              under Section 271B.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
              provides end-to-end income tax audit services for proprietors,
              partnership firms, LLPs, and companies across Uttar Pradesh and
              pan-India. Our CA-led team handles books of accounts review,
              preparation of Form 3CA/3CB and Form 3CD, coordination with
              management for clause-wise data, and timely upload on the Income
              Tax portal — ensuring full compliance before the September
              deadline.
            </p>

            {/* WHO IS LIABLE */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Who Is Liable for Tax Audit Under Section 44AB — FY 2025-26
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Tax audit liability arises in the following situations. It is
              important to note that crossing a single qualifying criterion
              makes audit mandatory — there is no discretion:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Business Turnover Exceeds ₹1 Crore</strong> — Any
                person carrying on business whose total turnover, gross receipts,
                or total sales exceeds ₹1 crore in the financial year is liable
                to audit under Section 44AB(a). This threshold applies to
                proprietors, firms, LLPs, and companies alike.
              </li>
              <li>
                <strong>Enhanced Limit — ₹10 Crore (Digital Business)</strong> — The
                threshold is raised to <strong>₹10 crore</strong> if aggregate
                cash receipts during the year do not exceed 5% of total receipts
                AND aggregate cash payments do not exceed 5% of total payments
                (i.e., 95%+ of transactions are digital/banking). This relief
                is available to all business taxpayers meeting the digital
                condition.
              </li>
              <li>
                <strong>Professional Receipts Exceed ₹50 Lakh</strong> — Any
                person carrying on a profession (doctor, lawyer, CA, architect,
                engineer, interior designer, technical consultant, film artist,
                authorised representative, or other specified profession) whose
                gross receipts exceed ₹50 lakh in the financial year is liable
                under Section 44AB(b).
              </li>
              <li>
                <strong>Opting Out of Presumptive Taxation (44AD)</strong> — A
                person eligible for presumptive taxation under Section 44AD who
                declares profit lower than 8%/6% of turnover is required to
                maintain books of accounts and get them audited, regardless of
                turnover level.
              </li>
              <li>
                <strong>Opting Out of Presumptive Taxation (44ADA)</strong> — A
                professional opting for 44ADA who declares income lower than
                50% of gross receipts must maintain books and get them audited.
              </li>
              <li>
                <strong>Opting Out of Presumptive Taxation (44AE)</strong> — A
                goods carriage operator who declares income lower than the
                prescribed per-vehicle amount must get accounts audited.
              </li>
              <li>
                <strong>All Companies</strong> — Companies are always required
                to get their accounts audited — both under the Companies Act
                (statutory audit) and under Section 44AB (tax audit). There is
                no turnover threshold for companies.
              </li>
              <li>
                <strong>Cooperative Societies</strong> — Cooperative societies
                whose income exceeds the basic exemption limit and are not
                subject to audit under any cooperative society law are required
                to get tax audit done.
              </li>
            </ul>
          </article>

          {/* THRESHOLD TABLE */}
          <ThresholdTable />

          {/* FORMS SECTION */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Form 3CA vs Form 3CB — Which Applies to You?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Two separate audit report forms are prescribed under Section 44AB,
              and using the wrong one is a common compliance error:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-3">
              <li>
                <strong>Form 3CA</strong> — Used when the taxpayer is already
                required to have their accounts audited under any law other
                than the Income Tax Act — for example, a company audited under
                the Companies Act 2013, or a cooperative society audited under
                a state cooperative societies act. In this case, the tax auditor
                relies on the statutory auditor's report and supplements it with
                the Form 3CD statement.
              </li>
              <li>
                <strong>Form 3CB</strong> — Used when the taxpayer is required
                to have accounts audited <em>only</em> under Section 44AB —
                that is, proprietors, partnership firms, LLPs, and HUFs whose
                audit obligation arises solely from crossing the Section 44AB
                thresholds and who are not subject to audit under any other
                statute. The tax auditor independently examines and certifies
                the accounts.
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              Both Form 3CA and Form 3CB are accompanied by{" "}
              <strong>Form 3CD</strong> — the detailed statement of particulars
              that contains 44 clauses of information about the taxpayer's
              financial and tax compliance. Form 3CD is the most scrutinised
              document in a tax audit and must be completed with absolute
              precision.
            </p>
          </article>

          {/* FORM 3CD CLAUSES */}
          <Form3CDSection />

          {/* BOOKS OF ACCOUNTS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Books of Accounts — What Must Be Maintained for Tax Audit
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Section 44AA prescribes the books of accounts that must be
              maintained by persons liable to tax audit. Inadequate or missing
              books of accounts is a common reason for audit delays and
              scrutiny:
            </p>
            <ul className="list-disc pl-6 mb-5 text-gray-700 space-y-2">
              <li>
                <strong>Cash Book</strong> — Day-to-day record of all cash
                receipts and payments. Every cash transaction must be entered
                on the date it occurs.
              </li>
              <li>
                <strong>Journal</strong> — Record of all non-cash transactions
                including credit sales, credit purchases, expenses accrued, and
                adjusting entries.
              </li>
              <li>
                <strong>Ledger</strong> — Consolidated account-wise summary of
                all transactions — individual party accounts, expense heads,
                income heads, asset accounts, and liability accounts.
              </li>
              <li>
                <strong>Carbon copies of bills</strong> — Copies of all bills
                issued to customers exceeding ₹25, and bills received from
                suppliers, duly preserved.
              </li>
              <li>
                <strong>Original bills/vouchers for expenses</strong> — Supporting
                bills and vouchers for all expenditure claimed as deductions.
              </li>
              <li>
                <strong>Stock register</strong> — Detailed record of opening
                stock, purchases, sales, and closing stock (item-wise, with
                rates) for businesses dealing in goods.
              </li>
              <li>
                <strong>Fixed Asset Register</strong> — Record of all capital
                assets with purchase date, cost, depreciation rate, WDV (Written
                Down Value), and disposal details.
              </li>
              <li>
                <strong>Bank Passbook / Bank Statements</strong> — All bank
                accounts must be reconciled with books. Bank reconciliation
                statements are examined during audit.
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              Books of accounts must be preserved for{" "}
              <strong>6 years from the end of the relevant assessment
              year</strong> (or 8 years for cases where assessments are pending
              or reassessment notices are received). Taxvio helps clients set
              up and maintain accounting systems that are audit-ready throughout
              the year — not just at year end.
            </p>

            {/* PENALTIES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Penalties for Non-Compliance with Section 44AB
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Non-compliance with tax audit requirements has serious financial
              consequences:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Section 271B — Penalty for Failure to Audit</strong> — 0.5%
                of total turnover/gross receipts, subject to a maximum of{" "}
                <strong>₹1,50,000</strong>. Levied when audit is not conducted
                or audit report is not filed by 30th September.
              </li>
              <li>
                <strong>Section 271A — Failure to Maintain Books</strong> — If
                books of accounts are not maintained as required under Section
                44AA, a penalty of <strong>₹25,000</strong> can be levied.
              </li>
              <li>
                <strong>ITR filing delayed</strong> — Since ITR (for audit
                cases) cannot be filed until the audit report is uploaded, delay
                in audit directly delays ITR, triggering Section 234F penalty
                (₹5,000) and Section 234A interest on outstanding tax.
              </li>
              <li>
                <strong>Disallowances during assessment</strong> — Inaccurate
                reporting in Form 3CD clauses (especially 40(a), 40A(2)(b),
                MSME payments, TDS compliance) is a primary trigger for
                additions and disallowances during scrutiny assessment — often
                resulting in tax demands far exceeding the original liability.
              </li>
              <li>
                <strong>Prosecution under Section 276CC</strong> — Persistent
                non-filing, combined with false reporting in Form 3CD, can
                escalate to prosecution proceedings.
              </li>
            </ul>
          </article>

          {/* WORKFLOW */}
          <WorkflowSection />

          {/* DOCUMENTS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Documents Required for Income Tax Audit
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Preparing these documents before the audit engagement saves
              significant time and ensures a smooth, accurate Form 3CD
              completion:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>Complete books of accounts — cash book, journal, ledger, stock register, fixed asset register</li>
              <li>Bank statements for all accounts (current, savings, OD, CC) for the full FY</li>
              <li>Bank reconciliation statements for all accounts</li>
              <li>All purchase invoices, sales invoices, and expense vouchers with supporting bills</li>
              <li>GST returns — GSTR-1, GSTR-3B, GSTR-9 reconciled with books of accounts</li>
              <li>TDS / TCS challans and Form 26AS / AIS of the taxpayer's PAN</li>
              <li>Loan account statements — term loans, CC limits, OD facilities</li>
              <li>Fixed asset purchase invoices and disposal documents</li>
              <li>Partnership deed / LLP agreement / Memorandum of Association (for firms, LLPs, companies)</li>
              <li>Statutory audit report (for companies) — Form 3CA requires the statutory auditor's report</li>
              <li>Previous year's Form 3CD — for comparison of opening figures and prior year disclosures</li>
              <li>MSME / Udyam registration certificates of suppliers (for Section 43B(h) compliance)</li>
              <li>Related party transaction details — list of specified persons under Section 40A(2)(b)</li>
              <li>Depreciation schedule (IT Act rates) for all asset blocks</li>
            </ul>
          </article>

          {/* CALCULATOR */}
          <AuditFeeCalculator />

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
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const deadline = new Date("September 30, 2026").getTime();
    const today = new Date().getTime();
    setDaysLeft(Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div
      className="bg-red-600 text-white text-center py-3 font-semibold text-sm"
      role="alert"
      aria-live="polite"
    >
      ⏳ Tax Audit Report Deadline — 30th September 2026 &nbsp;|&nbsp;{" "}
      ITR for Audit Cases — 31st October 2026 &nbsp;|&nbsp;{" "}
      {daysLeft !== null ? `${daysLeft} Days Left` : "Act Now"}. Penalty up to
      ₹1.5 Lakh Under Section 271B!
    </div>
  );
}

/* ================= THRESHOLD TABLE ================= */
function ThresholdTable() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Tax Audit Threshold Limits — Section 44AB (FY 2025-26)
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        The following table summarises all tax audit threshold conditions for
        FY 2025-26 (AY 2026-27). Review your category carefully — audit
        liability can arise even at low turnover if presumptive taxation is
        opted out:
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Tax Audit Threshold Limits under Section 44AB"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Category</th>
              <th className="p-4 text-left" scope="col">Applicable Section</th>
              <th className="p-4 text-left" scope="col">Threshold / Condition</th>
              <th className="p-4 text-left" scope="col">Audit Form</th>
              <th className="p-4 text-left" scope="col">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Business (general)", "44AB(a)", "Turnover > ₹1 crore", "Form 3CB + 3CD", "30th Sept 2026"],
              ["Business (digital — 95% non-cash)", "44AB(a) proviso", "Turnover > ₹10 crore", "Form 3CB + 3CD", "30th Sept 2026"],
              ["Profession", "44AB(b)", "Gross receipts > ₹50 lakh", "Form 3CB + 3CD", "30th Sept 2026"],
              ["Presumptive — 44AD opt-out", "44AB(e)", "Profit declared < 6%/8%; any turnover", "Form 3CB + 3CD", "30th Sept 2026"],
              ["Presumptive — 44ADA opt-out", "44AB(e)", "Profit declared < 50% of receipts; any amount", "Form 3CB + 3CD", "30th Sept 2026"],
              ["Companies (all)", "44AB(a)/(d)", "No threshold — all companies", "Form 3CA + 3CD", "30th Sept 2026"],
              ["Cooperative Societies", "44AB(d)", "Income above basic exemption, no other audit", "Form 3CB + 3CD", "30th Sept 2026"],
              ["LLPs — IT Act audit", "44AB(a)", "Turnover > ₹1 crore (or > ₹10 Cr digital)", "Form 3CB + 3CD", "30th Sept 2026"],
              ["LLPs — LLP Act audit", "LLP Act 2008", "Turnover > ₹40L or capital > ₹25L", "Separate LLP audit", "30th Oct 2026"],
            ].map(([category, section, threshold, form, deadline], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-medium text-gray-700">{category}</td>
                <td className="p-4 text-[#00416a] font-semibold">{section}</td>
                <td className="p-4 text-gray-600">{threshold}</td>
                <td className="p-4 text-gray-600">{form}</td>
                <td className="p-4 font-medium text-gray-700">{deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * A taxpayer who was liable to audit in the preceding year and opted
        for presumptive taxation under 44AD in the current year is still
        subject to certain compliance requirements. Our experts assess each
        client's specific situation to determine exact audit applicability.
      </p>
    </>
  );
}

/* ================= FORM 3CD CLAUSES ================= */
function Form3CDSection() {
  const clauses = [
    {
      group: "Business & Accounting Information (Clauses 1–12)",
      items: [
        "Basic information — name, address, PAN, nature of business, and whether accounts are maintained on mercantile or cash basis (Clause 1–8)",
        "Method of accounting and effect of change in method (Clause 11)",
        "Valuation of closing stock — method used and deviation from standard practice (Clause 12)",
      ],
    },
    {
      group: "Income & Turnover Disclosures (Clauses 13–16)",
      items: [
        "Amounts not credited to P&L but required under the Act — Section 28 deemed profits, Section 41 recoveries (Clause 13)",
        "Particulars of depreciation admissible under Section 32 — asset block wise (Clause 18)",
        "Scientific research deduction under Section 35 (Clause 19)",
      ],
    },
    {
      group: "Disallowances & Inadmissible Expenses (Clauses 17–27)",
      items: [
        "Amounts inadmissible under Section 40(a) — TDS not deducted/deposited on payments, payments to non-residents without TDS (Clause 21)",
        "Payments to related parties under Section 40A(2)(b) — transactions with directors, relatives, and associated enterprises at above-market rates (Clause 23)",
        "Cash payments exceeding ₹10,000 per day under Section 40A(3) — disallowance of cash expenses (Clause 22)",
        "MSME payments under Section 43B(h) — amounts owed to MSME suppliers for more than 45 days (Clause 26)",
        "Deferred revenue expenditure and preliminary expenses (Clause 24)",
      ],
    },
    {
      group: "TDS & TCS Compliance (Clause 34)",
      items: [
        "Complete summary of TDS deducted, deposited, and any shortfall or delayed deposit — section-wise (Clause 34a)",
        "TCS collected and deposited — section-wise summary (Clause 34b)",
        "Interest paid under Sections 201(1A) and 206C(7) for delayed TDS/TCS deposit (Clause 34c)",
      ],
    },
    {
      group: "Other Key Disclosures (Clauses 28–44)",
      items: [
        "Deductions under Chapter VI-A (80C, 80D, 80G, 80JJAA etc.) claimed in the return (Clause 19A)",
        "Brought-forward losses being set off — section and assessment year wise (Clause 42)",
        "Deemed dividend under Section 2(22)(e) — loans and advances to shareholders (Clause 36)",
        "International transactions under Transfer Pricing — whether TP audit under Section 92E is also required (Clause 30)",
        "Speculative transactions in shares and commodities (Clause 15)",
        "Details of contributions received from employees — PF, ESI, etc. and whether deposited timely (Clause 20)",
      ],
    },
  ];

  return (
    <section id="form3cd" aria-label="Form 3CD Clauses Overview">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Form 3CD — Key Clauses & What Auditors Verify
      </h2>
      <p className="mb-8 leading-relaxed text-gray-700">
        Form 3CD is a 44-clause statement of particulars that forms the core
        of every tax audit report. It is extensively reviewed by the Income Tax
        Department during scrutiny assessments. Here are the most critical
        clause groups that require careful attention:
      </p>

      <div className="space-y-6 mb-16">
        {clauses.map((group, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-[#00416a] mb-3">
              {group.group}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= WORKFLOW ================= */
function WorkflowSection() {
  const steps = [
    {
      title: "1. Audit Applicability Assessment",
      desc: "We assess whether Section 44AB audit is triggered — by turnover, professional receipts, or presumptive taxation opt-out. We also check the digital transaction ratio to determine if the ₹10 crore enhanced limit applies.",
    },
    {
      title: "2. Books of Accounts Review & Gap Analysis",
      desc: "Complete review of the taxpayer's books — cash book, journal, ledger, stock register, bank reconciliation, and fixed asset register. Any missing records, reconciliation gaps, or accounting errors are identified and corrected before audit.",
    },
    {
      title: "3. GST-to-Books Reconciliation",
      desc: "Turnover as per books of accounts is reconciled with GSTR-1 / GSTR-3B / GSTR-9. Any discrepancies between GST returns and income tax books are identified and explained — this is a key risk area in current scrutiny assessments.",
    },
    {
      title: "4. TDS / TCS Compliance Verification (Clause 34)",
      desc: "Complete TDS deducted vs deposited reconciliation. All payments subject to TDS are checked for correct deduction and timely deposit. Shortfalls are flagged for rectification before reporting in Form 3CD Clause 34.",
    },
    {
      title: "5. Form 3CD Clause-by-Clause Completion",
      desc: "All 44 clauses of Form 3CD are completed in detail — disallowances under 40(a), 40A, cash payment violations under 40A(3), MSME payment status under 43B(h), depreciation schedules, related party transactions, and Chapter VI-A deductions.",
    },
    {
      title: "6. Form 3CA / 3CB Preparation & Portal Upload",
      desc: "Form 3CA (for company/statutory audit cases) or Form 3CB (for other cases) is prepared and signed by the practicing CA. The complete audit package (3CA/3CB + 3CD) is uploaded on the Income Tax portal before 30th September and acknowledgement is preserved.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our Tax Audit Process — From Books Review to Portal Upload
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        A tax audit is not just a compliance formality — it is a detailed
        examination that directly affects the taxpayer's ITR. Taxvio follows a
        structured, thorough process to ensure every clause of Form 3CD is
        accurately completed and filed well before the September deadline:
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
function AuditFeeCalculator() {
  const [entityType, setEntityType] = useState<string>("proprietor");
  const [turnover, setTurnover] = useState(0);
  const [fee, setFee] = useState(4999);
  const [label, setLabel] = useState("");

  const entities = [
    { value: "proprietor", label: "Proprietor / Individual" },
    { value: "firm", label: "Partnership Firm / LLP" },
    { value: "company", label: "Private Limited / OPC" },
  ];

  useEffect(() => {
    if (entityType === "proprietor") {
      if (turnover <= 10000000) { setFee(4999); setLabel("Tax Audit — Proprietor (Turnover ≤ ₹1 Cr)"); }
      else if (turnover <= 50000000) { setFee(7999); setLabel("Tax Audit — Proprietor (Turnover ₹1–5 Cr)"); }
      else { setFee(12999); setLabel("Tax Audit — Proprietor (Turnover > ₹5 Cr)"); }
    } else if (entityType === "firm") {
      if (turnover <= 10000000) { setFee(5999); setLabel("Tax Audit — Firm / LLP (Turnover ≤ ₹1 Cr)"); }
      else if (turnover <= 50000000) { setFee(9999); setLabel("Tax Audit — Firm / LLP (Turnover ₹1–5 Cr)"); }
      else { setFee(14999); setLabel("Tax Audit — Firm / LLP (Turnover > ₹5 Cr)"); }
    } else {
      if (turnover <= 10000000) { setFee(7999); setLabel("Tax Audit — Company (Turnover ≤ ₹1 Cr)"); }
      else if (turnover <= 100000000) { setFee(12999); setLabel("Tax Audit — Company (Turnover ₹1–10 Cr)"); }
      else { setFee(19999); setLabel("Tax Audit — Company (Turnover > ₹10 Cr)"); }
    }
  }, [entityType, turnover]);

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Estimate Your Tax Audit Fee
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Our tax audit fees depend on entity type and turnover. Select your
        entity and enter annual turnover / gross receipts:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="Tax Audit Fee Calculator"
      >
        <p className="font-semibold text-gray-700 mb-3">Select Entity Type:</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {entities.map((e) => (
            <button
              key={e.value}
              onClick={() => setEntityType(e.value)}
              className={`px-5 py-2 rounded-xl font-semibold transition border ${
                entityType === e.value
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#00416a]"
              }`}
              aria-pressed={entityType === e.value}
            >
              {e.label}
            </button>
          ))}
        </div>

        <label
          htmlFor="turnover-audit"
          className="block font-semibold text-gray-700 mb-2"
        >
          Annual Turnover / Gross Receipts (₹)
        </label>
        <input
          id="turnover-audit"
          type="number"
          placeholder="e.g. 15000000"
          className="border p-3 rounded-xl w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#00416a]"
          onChange={(e) => setTurnover(Number(e.target.value))}
          aria-describedby="audit-fee-output"
        />

        <p
          id="audit-fee-output"
          className="text-lg font-semibold text-[#00416a]"
          aria-live="polite"
        >
          Estimated Tax Audit Fee:{" "}
          <span className="text-2xl">₹{fee.toLocaleString("en-IN")}</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
        <p className="text-sm text-gray-400 mt-2">
          * Inclusive of books review, Form 3CA/3CB & 3CD preparation, and
          portal upload. ITR filing fees are additional. Transfer pricing
          documentation (if Section 92E applies) charged separately. GST extra.
        </p>
      </div>
    </>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Traders",
      location: "Khatauli",
      rating: 5,
      text: "Our turnover crossed ₹1 crore for the first time. Taxvio guided us through the full tax audit process — books preparation, Form 3CD, and portal upload — all done before September end.",
    },
    {
      name: "Sharma & Associates LLP",
      location: "Muzaffarnagar",
      rating: 5,
      text: "Complex audit with multiple partner remuneration and TDS compliance issues. Taxvio identified and corrected gaps in our TDS before reporting in Clause 34 — no disallowances in assessment.",
    },
    {
      name: "Tech Solutions Pvt. Ltd.",
      location: "Meerut",
      rating: 5,
      text: "Company audit including GST reconciliation with books. Taxvio completed the full audit — statutory and tax — before the September deadline. Highly professional team.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted for Tax Audit Compliance Across India
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
      q: "What is an income tax audit under Section 44AB?",
      a: "A tax audit under Section 44AB requires eligible taxpayers to get their books of accounts examined by a practicing Chartered Accountant. The CA submits Form 3CA or 3CB (the audit report) along with Form 3CD (a 44-clause detailed statement of particulars) on the Income Tax portal. The audit verifies the correctness of income, checks TDS compliance, identifies disallowable expenses, and ensures the ITR is filed accurately.",
    },
    {
      q: "Who is required to get a tax audit done for FY 2025-26?",
      a: "Tax audit is mandatory for: businesses with turnover > ₹1 crore (or > ₹10 crore if 95%+ transactions are digital); professionals with gross receipts > ₹50 lakh; persons opting out of presumptive taxation (44AD/44ADA) and declaring lower profit; all companies (regardless of turnover); and cooperative societies above the basic exemption limit.",
    },
    {
      q: "What is the due date for tax audit report filing?",
      a: "The tax audit report (Form 3CA/3CB + Form 3CD) must be uploaded on the Income Tax portal by 30th September 2026 for FY 2025-26. The ITR for audit-liable taxpayers must be filed by 31st October 2026. Late audit report attracts penalty under Section 271B (up to ₹1.5 lakh). Late ITR attracts 234F penalty and 234A interest.",
    },
    {
      q: "What is the difference between Form 3CA and Form 3CB?",
      a: "Form 3CA is used by taxpayers already required to get accounts audited under another law — primarily companies (audited under Companies Act) and cooperative societies. Form 3CB is used by taxpayers whose only audit obligation is under Section 44AB — proprietors, firms, LLPs, and HUFs. Both are filed along with the same Form 3CD statement.",
    },
    {
      q: "What is Form 3CD and why is it important?",
      a: "Form 3CD is a 44-clause statement of particulars that is the most detailed document in a tax audit. It covers disallowances under Section 40(a) (TDS failures), 40A(2)(b) (related party transactions), 40A(3) (cash payment violations), 43B(h) (MSME payments), depreciation schedules, TDS compliance summary (Clause 34), brought-forward losses, and Chapter VI-A deductions. Errors in Form 3CD are a primary trigger for scrutiny assessments and tax additions.",
    },
    {
      q: "What is the penalty for not getting tax audit done?",
      a: "Under Section 271B, failure to conduct tax audit or failure to file the audit report by 30th September attracts a penalty of 0.5% of total turnover/gross receipts — maximum ₹1,50,000. Under Section 271A, failure to maintain required books of accounts attracts ₹25,000. Additionally, delayed ITR due to audit delay attracts Section 234F (₹5,000) and Section 234A interest.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions about Income Tax Audit">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — Income Tax Audit Under Section 44AB
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
            Complete Your Tax Audit Before 30th September 2026
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Avoid ₹1.5 lakh Section 271B penalty, prevent scrutiny additions
            from Form 3CD errors, and stay 100% compliant. Taxvio's CA-led tax
            audit service starts at ₹4,999. Serving Khatauli, Muzaffarnagar,
            Meerut and all of India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email for a free audit applicability check
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Start income tax audit with Taxvio"
            >
              Start Tax Audit — ₹4,999 Onwards
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
            >
              Free Audit Applicability Check
            </Link>
          </div>
        </div>
      </div>
      <Footar/>
    </section>
  );
}   