"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITR Filing for Companies & Trusts",
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
    "Professional ITR-6 filing for private limited and public companies, and ITR-7 filing for trusts, NGOs, Section 8 companies, and charitable institutions in India. Tax audit, MAT, 12A/80G exemptions, and full compliance. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Return Filing for Companies and Trusts",
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

// ─── FAQPage structured data ──────────────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which ITR form should a private limited company file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A private limited company, public limited company, or OPC must file ITR-6, unless it claims exemption under Section 11 (income of religious or charitable trusts). ITR-6 is mandatory for all domestic companies and foreign companies operating in India.",
      },
    },
    {
      "@type": "Question",
      name: "Which ITR form should a trust or NGO file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trusts, NGOs, Section 8 companies, political parties, research associations, and other entities claiming exemption under Sections 10, 11, or 12 of the Income Tax Act must file ITR-7. Registration under Section 12A/12AB and approval under Section 80G are prerequisites for availing tax exemptions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the income tax rate for a private limited company in FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Domestic companies can opt for 22% tax rate under Section 115BAA (no MAT applicable) or the regular rate of 30%. New manufacturing companies incorporated after Oct 1, 2019 can opt for 15% under Section 115BAB. Surcharge and 4% cess apply additionally.",
      },
    },
    {
      "@type": "Question",
      name: "What is MAT (Minimum Alternate Tax) for companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MAT under Section 115JB is applicable when a company's regular income tax is less than 15% of its book profit. In such cases, the company must pay 15% of book profit as tax. Companies opting for Section 115BAA concessional rate are exempt from MAT.",
      },
    },
    {
      "@type": "Question",
      name: "Is tax audit mandatory for companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, tax audit under Section 44AB is mandatory for all companies (regardless of turnover) since companies are always required to get their accounts audited. Additionally, a statutory audit under the Companies Act is separately mandatory for all registered companies.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ITR filing due date for companies and trusts for FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For companies liable to tax audit, the ITR-6 due date is 31st October 2026 and the audit report must be filed by 30th September 2026. For trusts and NGOs filing ITR-7, the due date is 31st October 2026 if audit is applicable, or 31st July 2026 if not.",
      },
    },
  ],
};

export default function ITRTrustCompanyClient() {
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
          aria-label="ITR Filing for Companies and Trusts Hero"
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
                <li aria-current="page" className="text-white font-medium">ITR for Companies & Trusts</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ITR Filing for Companies & Trusts in India — FY 2025-26
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Expert ITR-6 filing for private limited companies, public
              companies & OPCs, and ITR-7 filing for trusts, NGOs, Section 8
              companies & charitable institutions. MAT compliance, 12A/80G
              exemptions, tax audit (Form 3CA/3CD), and complete Income Tax Act
              compliance. Serving Khatauli, Muzaffarnagar and pan-India.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="File ITR for my company or trust"
              >
                File Company / Trust ITR Now
              </Link>
              <Link
                href="#faq"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                View FAQs
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ ITR-6 & ITR-7 Expert Filing</span>
              <span>✅ MAT / AMT Computation</span>
              <span>✅ 12A / 80G Trust Compliance</span>
              <span>✅ Tax Audit Support (3CA/3CD)</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Complete Guide to ITR Filing for Companies & Trusts (FY 2025-26 / AY 2026-27)
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              Companies and trusts are among the most complex categories of
              taxpayers in India. Unlike individuals or proprietors, a{" "}
              <strong>private limited company, public limited company, or
              One Person Company (OPC)</strong> is a separate legal entity
              entirely distinct from its shareholders and directors. It has its
              own PAN, files its own income tax return, and pays tax at rates
              prescribed specifically for companies under the Income Tax Act,
              1961. All companies — whether profit-making or loss-making —{" "}
              <strong>must file ITR-6 every year</strong> without exception.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              <strong>Trusts, NGOs, and charitable institutions</strong> operate
              under an entirely different taxation framework. Entities registered
              under Section 12A/12AB of the Income Tax Act and approved under
              Section 80G can claim near-complete exemption from income tax on
              income applied for charitable or religious purposes. However, this
              exemption is conditional on strict compliance requirements —
              including annual ITR-7 filing, maintenance of accounts, and
              adherence to application-of-income rules. Non-compliance results
              in cancellation of registration and full taxation of accumulated
              corpus.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
              provides end-to-end ITR filing services for companies and trusts
              across Uttar Pradesh and pan-India through our secure online
              platform. Our CA-assisted team handles ITR-6, ITR-7, statutory
              audit coordination, MAT computation, 12A/80G compliance, and
              all associated income tax filings.
            </p>

            {/* ITR-6 SECTION */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              ITR-6 — Income Tax Return for Companies
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              <strong>ITR-6</strong> is the prescribed form for all domestic and
              foreign companies registered under the Companies Act, 2013 or
              earlier acts — except those claiming exemption under Section 11
              (charitable/religious trusts). ITR-6 is an elaborate form that
              requires:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Audited Balance Sheet and Profit & Loss Account</li>
              <li>Schedule of fixed assets and depreciation (Income Tax Act rates)</li>
              <li>Details of all related party transactions</li>
              <li>MAT (Minimum Alternate Tax) computation under Section 115JB</li>
              <li>Details of brought-forward losses, unabsorbed depreciation, and MAT credit</li>
              <li>Director details, shareholding pattern, and subsidiary information</li>
              <li>Tax audit report linkage (Form 3CA/3CD mandatory for all companies)</li>
              <li>Details of international / domestic transfer pricing transactions (if applicable)</li>
              <li>Dividend distribution details and TDS compliance summary</li>
            </ul>

            {/* WHO FILES ITR-7 */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              ITR-7 — Income Tax Return for Trusts, NGOs & Exempt Entities
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              <strong>ITR-7</strong> must be filed by entities that are required
              to furnish a return under Sections 139(4A), 139(4B), 139(4C), or
              139(4D) of the Income Tax Act. These include:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Charitable & Religious Trusts</strong> — Public trusts
                registered under Section 12A/12AB claiming exemption under
                Section 11 and 12.
              </li>
              <li>
                <strong>Section 8 Companies</strong> — Non-profit companies
                (formerly Section 25 companies) registered under the Companies
                Act for charitable purposes.
              </li>
              <li>
                <strong>NGOs & Societies</strong> — Societies registered under
                the Societies Registration Act claiming tax exemption.
              </li>
              <li>
                <strong>Political Parties</strong> — Registered political
                parties filing under Section 139(4B).
              </li>
              <li>
                <strong>Research Associations, Educational Institutions &
                Hospitals</strong> — Entities approved under Section 10(23C)
                for income tax exemption.
              </li>
              <li>
                <strong>Mutual Funds & Securitisation Trusts</strong> — Entities
                filing under Section 139(4D).
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              ITR-7 requires detailed reporting of income received, income
              applied for charitable purposes, accumulation of income under
              Section 11(2), investment of funds, and compliance with the
              application-of-income mandate. Failure to apply at least{" "}
              <strong>85% of income</strong> for charitable purposes — or to
              accumulate the balance with proper Form 9A/10 filings — results
              in the unapplied income becoming fully taxable.
            </p>
          </article>

          {/* TAX RATE TABLE */}
          <TaxRateTable />

          {/* TRUST EXEMPTION SECTION */}
          <TrustExemptionSection />

          {/* DEDUCTIONS & COMPLIANCE */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Business Deductions & Expenses for Companies (ITR-6)
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Companies can claim all legitimate business expenses as deductions
              against gross income. Key deductions include:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Depreciation under Income Tax Act</strong> — Block-wise
                depreciation on plant & machinery, computers, vehicles,
                furniture, and buildings at prescribed IT Act rates (separate
                from Companies Act rates used in books).
              </li>
              <li>
                <strong>Employee Costs</strong> — Salaries, PF, ESI, gratuity
                provisions (within limits), and employee welfare expenses.
              </li>
              <li>
                <strong>Director Remuneration</strong> — Managerial remuneration
                paid to directors, subject to Companies Act limits and disclosure
                requirements in ITR-6.
              </li>
              <li>
                <strong>Interest on Business Borrowings</strong> — Interest paid
                on loans, debentures, and working capital facilities. Thin
                capitalisation rules (Section 94B) may limit deductions for
                companies with significant foreign borrowings.
              </li>
              <li>
                <strong>R&D Expenditure</strong> — Companies can claim 100%
                deduction on revenue expenditure incurred on in-house R&D
                facilities approved by DSIR (Section 35).
              </li>
              <li>
                <strong>CSR Expenditure</strong> — Note: CSR spending under
                Section 135 of the Companies Act is generally not deductible
                under Section 37(1) of the Income Tax Act. This is a common
                error in company ITRs.
              </li>
              <li>
                <strong>Brought-Forward Losses & Unabsorbed Depreciation</strong> — Companies
                can carry forward business losses for 8 years and unabsorbed
                depreciation indefinitely, subject to continuity-of-ownership
                conditions under Section 79.
              </li>
            </ul>

            {/* TAX AUDIT FOR COMPANIES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Tax Audit & Statutory Audit — Mandatory for All Companies
            </h2>
            <p className="mb-5 leading-relaxed text-gray-700">
              Companies in India are subject to two mandatory audits every year:
            </p>
            <ul className="list-disc pl-6 mb-5 text-gray-700 space-y-2">
              <li>
                <strong>Statutory Audit under Companies Act</strong> — Mandatory
                for all registered companies regardless of turnover. The
                statutory auditor must be a practicing CA appointed by
                shareholders in the AGM. Audited financial statements form the
                basis for ITR-6 preparation.
              </li>
              <li>
                <strong>Tax Audit under Section 44AB</strong> — Mandatory for
                all companies since companies are always required to maintain
                and audit accounts. The tax audit report in Form 3CA/3CD must
                be filed on the Income Tax portal before the ITR due date.
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              Taxvio coordinates with your statutory auditor to obtain the
              audited financials and then prepares the tax audit report and
              ITR-6 in parallel — ensuring both are filed well before the
              October deadline. For trusts requiring audit under Section 12A/12AB,
              we similarly coordinate audit completion and ITR-7 preparation.
            </p>
          </article>

          {/* WORKFLOW */}
          <WorkflowSection />

          {/* DOCUMENTS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Documents Required for Company / Trust ITR Filing
            </h2>

            <p className="mb-3 font-semibold text-gray-700">For Companies (ITR-6):</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Audited Balance Sheet, P&L Account, and Notes to Accounts</li>
              <li>Depreciation schedule (both Companies Act and Income Tax Act)</li>
              <li>Tax audit report (Form 3CA/3CD) — if separately filed</li>
              <li>Form 26AS and AIS for the company's PAN</li>
              <li>TDS certificates received (Form 16A from clients/banks)</li>
              <li>Advance tax payment challans (Form 280)</li>
              <li>MAT computation worksheet (book profit reconciliation)</li>
              <li>Previous year's ITR acknowledgement and MAT credit details</li>
              <li>Director DIN details and their remuneration details</li>
              <li>GST returns — GSTR-1, GSTR-3B, GSTR-9</li>
              <li>DSC (Digital Signature Certificate) of authorised signatory</li>
            </ul>

            <p className="mb-3 font-semibold text-gray-700">For Trusts / NGOs (ITR-7):</p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>12A / 12AB registration certificate from Income Tax Department</li>
              <li>80G approval certificate (if applicable)</li>
              <li>Audited accounts — Receipt & Payment account, Income & Expenditure account, Balance Sheet</li>
              <li>Details of income received (donations, grants, interest) and its source</li>
              <li>Details of income applied for charitable purposes with supporting bills</li>
              <li>Form 9A (if income not applied but intention to apply in next year)</li>
              <li>Form 10 (if income accumulated under Section 11(2) for specific purpose)</li>
              <li>Form 10B / 10BB audit report (mandatory for trusts with income above ₹5 lakh)</li>
              <li>FCRA registration (if foreign donations received)</li>
              <li>Form 26AS and AIS for the trust PAN</li>
            </ul>

            {/* CONSEQUENCES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Consequences of Non-Compliance for Companies & Trusts
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Companies and trusts face the most severe consequences for
              non-compliance among all taxpayer categories:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Penalty under Section 234F</strong> — ₹5,000 late
                filing fee for ITR filed after the due date.
              </li>
              <li>
                <strong>Interest under Sections 234A, 234B & 234C</strong> — 1%
                per month on outstanding tax from due date, for shortfall in
                advance tax, and for deferment of advance tax instalments.
              </li>
              <li>
                <strong>Penalty under Section 271B</strong> — Failure to file
                tax audit report: 0.5% of turnover or ₹1.5 lakh, whichever is
                lower.
              </li>
              <li>
                <strong>MAT credit lapse</strong> — MAT credit (excess MAT
                paid over regular tax) is available for carry-forward for 15
                years. Delayed or incorrect ITR filing can result in MAT credit
                not being recorded properly, leading to permanent loss.
              </li>
              <li>
                <strong>Trust registration cancellation</strong> — For trusts,
                failure to file ITR-7 or violation of application-of-income
                rules can lead to cancellation of 12A/12AB registration by the
                Principal Commissioner, making the entire corpus and income
                taxable. This is effectively an existential threat to the trust.
              </li>
              <li>
                <strong>Prosecution risk for companies</strong> — Persistent
                non-filing of ITR by a company can trigger prosecution under
                Section 276CC, with potential imprisonment for directors.
              </li>
            </ul>
          </article>

          {/* CALCULATOR */}
          <ITRCalculator />

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
    const deadline = new Date("October 31, 2026").getTime();
    const today = new Date().getTime();
    setDaysLeft(Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div
      className="bg-red-600 text-white text-center py-3 font-semibold text-sm"
      role="alert"
      aria-live="polite"
    >
      ⏳ Company / Trust ITR Deadline — 31st October 2026 (Audit Cases) &nbsp;|&nbsp;
      Tax Audit Report by 30th Sept 2026 &nbsp;|&nbsp;{" "}
      {daysLeft !== null ? `${daysLeft} Days Left` : "Act Now"}
    </div>
  );
}

/* ================= TAX RATE TABLE ================= */
function TaxRateTable() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Income Tax Rate for Companies — FY 2025-26
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Companies have multiple tax rate options under the Income Tax Act. The
        choice of regime significantly affects tax liability — and once opted,
        the concessional regime cannot be withdrawn:
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Income Tax Rate for Companies FY 2025-26"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Regime / Section</th>
              <th className="p-4 text-left" scope="col">Applicable To</th>
              <th className="p-4 text-left" scope="col">Tax Rate</th>
              <th className="p-4 text-left" scope="col">MAT Applicable?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Regular Rate (Section 115A)", "All domestic companies (default)", "30%", "Yes — 15% of book profit"],
              ["Section 115BAA (Concessional)", "Domestic companies (irrevocable option)", "22%", "No — MAT not applicable"],
              ["Section 115BAB (New Mfg. Co.)", "New manufacturing companies post Oct 1, 2019", "15%", "No — MAT not applicable"],
              ["Foreign Companies", "Foreign companies with India operations", "40%", "Yes"],
              ["Surcharge (income ₹1–10 Cr)", "All companies", "7%", "—"],
              ["Surcharge (income > ₹10 Cr)", "All companies", "12%", "—"],
              ["Health & Education Cess", "All companies", "4%", "—"],
              ["Effective Rate (115BAA + cess)", "Domestic companies (concessional)", "25.17%", "No MAT"],
            ].map(([regime, applicable, rate, mat], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-medium text-gray-700">{regime}</td>
                <td className="p-4 text-gray-600">{applicable}</td>
                <td className="p-4 font-semibold text-[#00416a]">{rate}</td>
                <td className="p-4 text-gray-600">{mat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * Advance tax is mandatory for companies in four instalments: 15% by
        June 15, 45% by September 15, 75% by December 15, and 100% by March 15.
        Shortfall attracts interest under Sections 234B and 234C.
      </p>
    </>
  );
}

/* ================= TRUST EXEMPTION SECTION ================= */
function TrustExemptionSection() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Tax Exemption Framework for Trusts & NGOs — 12A, 12AB & 80G
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Charitable and religious trusts in India operate under a special
        exemption framework that requires active compliance to maintain
        tax-free status:
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Trust and NGO Tax Exemption Framework"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Section</th>
              <th className="p-4 text-left" scope="col">Purpose</th>
              <th className="p-4 text-left" scope="col">Benefit</th>
              <th className="p-4 text-left" scope="col">Renewal</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Section 12A / 12AB", "Registration of charitable / religious trust", "Income applied for charitable purposes is exempt from tax", "Re-registration required every 5 years under 12AB"],
              ["Section 80G", "Approval for donor deductions", "Donors can claim 50%–100% deduction on donations made", "Renewal every 5 years"],
              ["Section 10(23C)", "Approved educational institutions, hospitals, funds", "Complete income tax exemption", "Separate approval required"],
              ["Section 11 & 12", "Actual income exemption clauses", "85% of income applied for charitable purpose = exempt", "Ongoing compliance required"],
              ["Form 10B / 10BB", "Audit report for trusts", "Mandatory for trusts with income > ₹5 lakh", "Filed annually with ITR-7"],
              ["Form 9A / Form 10", "Accumulation of income", "Allows deferral of application of income by 1 year (9A) or up to 5 years (10)", "Filed before ITR due date"],
            ].map(([section, purpose, benefit, renewal], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-semibold text-[#00416a]">{section}</td>
                <td className="p-4 text-gray-600">{purpose}</td>
                <td className="p-4 text-gray-600">{benefit}</td>
                <td className="p-4 text-gray-600">{renewal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * Trusts that miss the 85% application-of-income threshold and do not
        file Form 9A or Form 10 before the ITR due date will have the
        unapplied income taxed at the maximum marginal rate (30%+). Our team
        tracks these deadlines proactively for every trust client.
      </p>
    </>
  );
}

/* ================= WORKFLOW ================= */
function WorkflowSection() {
  const steps = [
    {
      title: "1. Entity Assessment & Applicable Form Identification",
      desc: "We assess whether ITR-6 (company) or ITR-7 (trust/NGO) applies, verify registration status (12A/12AB/80G for trusts), and identify any special tax regime elections (115BAA/115BAB for companies).",
    },
    {
      title: "2. Audited Financials Review & MAT Computation",
      desc: "For companies, we review audited financials, reconcile book profit for MAT computation under Section 115JB, and identify MAT credit available from previous years.",
    },
    {
      title: "3. Tax Audit Coordination (Form 3CA/3CD)",
      desc: "We coordinate with the statutory auditor to obtain the tax audit report, prepare Form 3CA/3CD schedules, and ensure upload on the Income Tax portal before 30th September.",
    },
    {
      title: "4. Trust Income Application Review (ITR-7 cases)",
      desc: "For trusts, we verify that at least 85% of income has been applied for charitable purposes, prepare Form 9A / Form 10 for accumulation if needed, and file Form 10B / 10BB audit report.",
    },
    {
      title: "5. ITR Preparation & Internal Quality Review",
      desc: "Complete ITR-6 or ITR-7 preparation including all schedules, loss carry-forward details, advance tax reconciliation, and audit report linkage. Internal review to prevent defective return notices.",
    },
    {
      title: "6. e-Filing via DSC & Post-Filing Compliance Support",
      desc: "Companies file ITR-6 using the MD / CEO's DSC. Trusts file ITR-7 using the trustee's DSC or EVC. Post-filing, we track intimations under Section 143(1) and assist with rectification if needed.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our ITR Filing Process for Companies & Trusts
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        ITR-6 and ITR-7 are among the most complex returns in the Indian income
        tax system. Taxvio follows a structured, end-to-end workflow to ensure
        complete accuracy and deadline compliance:
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
function ITRCalculator() {
  const [entityType, setEntityType] = useState<"company" | "trust">("company");
  const [turnover, setTurnover] = useState(0);
  const [fee, setFee] = useState(4999);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (entityType === "company") {
      if (turnover <= 10000000) {
        setFee(4999);
        setLabel("ITR-6 — Small Company (Turnover ≤ ₹1 Cr)");
      } else if (turnover <= 100000000) {
        setFee(7999);
        setLabel("ITR-6 — Mid-size Company with Tax Audit (Form 3CA/3CD)");
      } else {
        setFee(14999);
        setLabel("ITR-6 — Large Company with Tax Audit + MAT + Transfer Pricing");
      }
    } else {
      if (turnover <= 500000) {
        setFee(2999);
        setLabel("ITR-7 — Small Trust / NGO (Income ≤ ₹5 Lakh, No Audit)");
      } else if (turnover <= 5000000) {
        setFee(4999);
        setLabel("ITR-7 — Trust / NGO with Form 10B Audit Report");
      } else {
        setFee(7999);
        setLabel("ITR-7 — Large Trust / Section 8 Company with Complex Compliance");
      }
    }
  }, [entityType, turnover]);

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Estimate Your Company / Trust ITR Filing Fee
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Our fees depend on entity type and the complexity of the return. Select
        your entity type and enter your annual turnover / income:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="Company Trust ITR Fee Calculator"
      >
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setEntityType("company")}
            className={`px-6 py-2 rounded-xl font-semibold transition ${
              entityType === "company"
                ? "bg-[#00416a] text-white"
                : "border border-[#00416a] text-[#00416a] hover:bg-gray-100"
            }`}
            aria-pressed={entityType === "company"}
          >
            Company (ITR-6)
          </button>
          <button
            onClick={() => setEntityType("trust")}
            className={`px-6 py-2 rounded-xl font-semibold transition ${
              entityType === "trust"
                ? "bg-[#00416a] text-white"
                : "border border-[#00416a] text-[#00416a] hover:bg-gray-100"
            }`}
            aria-pressed={entityType === "trust"}
          >
            Trust / NGO (ITR-7)
          </button>
        </div>

        <label
          htmlFor="turnover-input"
          className="block font-semibold text-gray-700 mb-2"
        >
          {entityType === "company"
            ? "Enter Annual Turnover of Company (₹)"
            : "Enter Annual Income / Receipts of Trust (₹)"}
        </label>
        <input
          id="turnover-input"
          type="number"
          placeholder={entityType === "company" ? "e.g. 25000000" : "e.g. 2000000"}
          className="border p-3 rounded-xl w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#00416a]"
          onChange={(e) => setTurnover(Number(e.target.value))}
          aria-describedby="fee-output"
        />
        <p
          id="fee-output"
          className="text-lg font-semibold text-[#00416a]"
          aria-live="polite"
        >
          Estimated Filing Fee:{" "}
          <span className="text-2xl">₹{fee.toLocaleString("en-IN")}</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
        <p className="text-sm text-gray-400 mt-2">
          * Inclusive of ITR preparation and e-filing. Tax audit coordination,
          DSC charges, transfer pricing documentation, and Form 10B/10BB fees
          are additional where applicable. GST extra.
        </p>
      </div>
    </>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    {
      name: "Rajshree Enterprises Pvt. Ltd.",
      location: "Khatauli",
      rating: 5,
      text: "Taxvio handled our company's ITR-6 with tax audit seamlessly. MAT computation was accurate and the return was filed well before the October deadline.",
    },
    {
      name: "Shri Ram Charitable Trust",
      location: "Muzaffarnagar",
      rating: 5,
      text: "Our 12A trust ITR-7 was filed on time with correct income application workings. Taxvio also helped us renew our 80G approval without any issues.",
    },
    {
      name: "Innovate Tech Solutions Pvt. Ltd.",
      location: "Meerut",
      rating: 5,
      text: "We switched to the 115BAA concessional tax regime with Taxvio's guidance — saving significant tax. The ITR-6 filing was error-free and timely.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted by Companies & Trusts Across India
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
      q: "Which ITR form should a private limited company file?",
      a: "All private limited companies, public limited companies, and OPCs must file ITR-6, regardless of turnover or profit/loss. The only exception is a company claiming exemption under Section 11 (charitable/religious trusts), which must file ITR-7 instead.",
    },
    {
      q: "Which ITR form should a trust or NGO file?",
      a: "Trusts registered under Section 12A/12AB, NGOs, Section 8 companies, political parties, educational institutions claiming 10(23C) exemption, and research associations must file ITR-7. This form requires detailed reporting of income received and income applied for charitable purposes.",
    },
    {
      q: "What is the income tax rate for a private limited company in FY 2025-26?",
      a: "Domestic companies have multiple options: 30% (regular rate with MAT at 15% of book profit), 22% under Section 115BAA (no MAT, irrevocable), or 15% under Section 115BAB for new manufacturing companies. The effective rates after surcharge and cess are 31.2%, 25.17%, and 17.01% respectively.",
    },
    {
      q: "What is MAT and when does it apply to companies?",
      a: "MAT (Minimum Alternate Tax) under Section 115JB applies when a company's regular income tax liability is less than 15% of its book profit. The company must then pay 15% of book profit as tax. The excess MAT paid over regular tax becomes MAT credit, which can be carried forward for 15 years. Companies opting for Section 115BAA are exempt from MAT.",
    },
    {
      q: "What happens if a trust does not apply 85% of income for charitable purposes?",
      a: "If a trust does not apply at least 85% of its income for charitable or religious purposes in the same year, the unapplied amount becomes taxable at the maximum marginal rate (30%+). The trust can avoid this by filing Form 9A (to extend application deadline by one year) or Form 10 (to accumulate income for a specific purpose for up to 5 years) — both must be filed before the ITR due date.",
    },
    {
      q: "What is the ITR due date for companies and trusts for FY 2025-26?",
      a: "For companies and trusts liable to tax audit (all companies, and trusts with income above ₹5 lakh), the ITR due date is 31st October 2026. The tax audit report must be filed by 30th September 2026. For trusts not liable to audit (income ≤ ₹5 lakh), the due date is 31st July 2026.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions for Companies and Trusts">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — ITR Filing for Companies & Trusts
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
            File Your Company / Trust ITR for FY 2025-26 Before Deadline
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Avoid penalties, protect MAT credit, maintain 12A/80G registration,
            and stay 100% compliant. Taxvio's CA-assisted ITR-6 & ITR-7 filing
            starts at ₹2,999. Serving Khatauli, Muzaffarnagar, Meerut and all
            of India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email for a free compliance checklist
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Start ITR-6 or ITR-7 filing with Taxvio"
            >
              Start Filing — ₹2,999 Onwards
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
      <Footar/>
    </section>
  );
}