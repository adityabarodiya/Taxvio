"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITR Filing for Partnership Firms & LLPs",
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
    "Professional ITR-5 filing for partnership firms and LLPs in India. Flat 30% tax rate, partner remuneration, interest deductions, tax audit under 44AB, and full compliance. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax Return Filing for Firms & LLPs",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
      maxPrice: "7999",
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
      name: "Which ITR form should a partnership firm or LLP file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partnership firms and LLPs must file ITR-5. This form covers income from business or profession, capital gains, house property, and other sources for entities other than individuals, HUFs, and companies. ITR-5 is mandatory — firms cannot file ITR-3 or any other form.",
      },
    },
    {
      "@type": "Question",
      name: "What is the income tax rate for a partnership firm or LLP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partnership firms and LLPs are taxed at a flat rate of 30% on net income, plus surcharge (12% if income exceeds ₹1 crore) and Health & Education Cess of 4%. Unlike individuals, there are no basic exemption limits or slab rates for firms and LLPs.",
      },
    },
    {
      "@type": "Question",
      name: "Is tax audit mandatory for partnership firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, tax audit under Section 44AB is mandatory for a partnership firm or LLP if total turnover exceeds ₹1 crore (₹10 crore if 95% transactions are digital). For professional firms (CA, law, medical), audit is required if gross receipts exceed ₹50 lakh. The audit report in Form 3CA/3CD must be filed before the ITR due date.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ITR filing due date for firms and LLPs for FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For partnership firms and LLPs not liable to tax audit, the ITR due date is 31st July 2026. For those liable to tax audit under Section 44AB, the extended due date is 31st October 2026. The audit report must be submitted by 30th September 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Can a partnership firm deduct partner's remuneration and interest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Section 40(b), a partnership firm can deduct partner remuneration (salary, bonus, commission) and interest on capital — subject to prescribed limits. Remuneration is deductible up to ₹3 lakh or 90% of book profit (first ₹3 lakh), and 60% thereafter. Interest is deductible at up to 12% per annum on capital contributed.",
      },
    },
    {
      "@type": "Question",
      name: "Are partners taxed on their share of firm profit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Under Section 10(2A), the partner's share of profit from a firm that has been taxed at the firm level is completely exempt in the partner's individual hands. However, remuneration and interest received from the firm are taxable as business income in the partner's personal ITR.",
      },
    },
  ],
};

export default function ITRFirmLLPClient() {
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
          aria-label="ITR Filing for Firms and LLPs Hero"
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
                <li aria-current="page" className="text-white font-medium">ITR for Firms & LLPs</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ITR Filing for Partnership Firms & LLPs in India — FY 2025-26
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Professional ITR-5 filing for partnership firms and Limited
              Liability Partnerships. Partner remuneration deductions, Section
              40(b) compliance, tax audit under 44AB, and full Income Tax Act
              compliance. Serving Khatauli, Muzaffarnagar and pan-India online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="File ITR for my firm or LLP"
              >
                File Firm / LLP ITR Now
              </Link>
              <Link
                href="#faq"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                View FAQs
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ ITR-5 Expert Filing</span>
              <span>✅ Section 40(b) Compliance</span>
              <span>✅ Tax Audit Support (3CA/3CD)</span>
              <span>✅ CA-Assisted & 100% Online</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Complete Guide to Income Tax Return Filing for Partnership Firms & LLPs (FY 2025-26 / AY 2026-27)
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              Partnership firms and Limited Liability Partnerships (LLPs)
              registered under the Indian Partnership Act, 1932 or the LLP Act,
              2008 are treated as separate taxable entities under the Income Tax
              Act, 1961. Unlike proprietorships — where business income is taxed
              in the hands of the individual owner — a firm or LLP pays tax on
              its own net income at a{" "}
              <strong>flat rate of 30%</strong> plus applicable surcharge and
              cess, irrespective of how much profit it earns.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              Filing ITR for a firm or LLP is mandatory regardless of whether
              there is taxable income or a loss. Annual return filing is
              essential for maintaining the legal standing of the firm, claiming
              deductions on partner remuneration and interest, carrying forward
              business losses, responding to GST and income tax notices, and
              accessing credit facilities from banks and financial institutions.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong> is a trusted tax compliance firm in
              Khatauli, Uttar Pradesh, offering comprehensive ITR-5 filing
              services for partnership firms and LLPs across Muzaffarnagar,
              Meerut, Saharanpur, Delhi NCR, and all of India via our secure
              online platform. Our CA-assisted service covers return preparation,
              Section 40(b) compliance, books of accounts review, tax audit
              coordination, and timely e-filing.
            </p>

            {/* FIRM VS LLP */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Partnership Firm vs LLP — Key Differences for Income Tax
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              While both partnership firms and LLPs file ITR-5 and are taxed at
              the same flat 30% rate, there are important structural differences
              that affect tax planning and compliance:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Legal Structure</strong> — A traditional partnership
                firm is governed by the Indian Partnership Act, 1932, with
                partners having unlimited personal liability. An LLP under the
                LLP Act, 2008 provides limited liability protection to partners,
                shielding personal assets from business debts.
              </li>
              <li>
                <strong>Audit Requirements</strong> — LLPs with turnover
                exceeding ₹40 lakh or capital contribution exceeding ₹25 lakh
                must mandatorily get their accounts audited under the LLP Act
                (in addition to any income tax audit under 44AB). Traditional
                partnership firms are only subject to income tax audit thresholds.
              </li>
              <li>
                <strong>ROC Compliance</strong> — LLPs must file annual returns
                (Form 11 and Form 8) with the Registrar of Companies (MCA).
                Traditional partnership firms have no such ROC obligation.
              </li>
              <li>
                <strong>Partner Remuneration</strong> — Both firms and LLPs can
                claim deduction on partner remuneration under Section 40(b),
                provided it is authorised by the partnership deed / LLP
                agreement and within prescribed limits.
              </li>
            </ul>

            {/* WHICH ITR FORM */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Which ITR Form Do Firms and LLPs File? — ITR-5 Explained
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Partnership firms and LLPs must file <strong>ITR-5</strong> — the
              form applicable to persons other than individuals, HUFs, and
              companies. ITR-5 covers:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Income from business or profession (including business losses)</li>
              <li>Income from house property (if firm owns property)</li>
              <li>Capital gains on sale of assets, shares, or property</li>
              <li>Income from other sources (interest on FD, etc.)</li>
              <li>Partner remuneration and interest deduction under Section 40(b)</li>
              <li>Depreciation on business assets under the Income Tax Act</li>
              <li>Details of partners, their profit-sharing ratios, and capital accounts</li>
              <li>Balance Sheet and Profit & Loss Account of the firm</li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              ITR-5 is a detailed return and requires careful preparation.
              Errors in Section 40(b) limits, partner details, or audit report
              linkage frequently lead to defective return notices and scrutiny.
              Taxvio's CA-assisted service ensures error-free ITR-5 preparation
              and filing.
            </p>
          </article>

          {/* TAX RATE TABLE */}
          <TaxRateTable />

          {/* SECTION 40B */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Section 40(b) — Partner Remuneration & Interest Deduction
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              One of the most important — and most misunderstood — aspects of
              firm taxation is the deduction available under{" "}
              <strong>Section 40(b)</strong> of the Income Tax Act. This section
              allows a partnership firm or LLP to claim deductions for:
            </p>
            <ul className="list-disc pl-6 mb-5 text-gray-700 space-y-2">
              <li>
                <strong>Interest on Partner's Capital</strong> — Deductible at
                up to <strong>12% per annum</strong> on the capital contributed
                by each partner, provided it is authorised by the partnership
                deed. Interest exceeding 12% is disallowed and added back to
                taxable income.
              </li>
              <li>
                <strong>Partner Remuneration (Salary / Bonus / Commission)</strong> — Deductible
                only if authorised in the partnership deed and within the
                following limits based on book profit:
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li>On first ₹3,00,000 of book profit (or if loss): ₹1,50,000 or 90% of book profit, whichever is higher</li>
                  <li>On balance book profit above ₹3,00,000: 60% of such balance</li>
                </ul>
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              Any remuneration or interest paid beyond these limits is
              disallowed as a deduction for the firm but is still taxable in
              the partner's individual ITR. Correct computation of Section 40(b)
              limits is critical — overclaiming leads to additions during
              scrutiny assessment. Taxvio calculates and documents these
              deductions precisely to ensure full compliance.
            </p>

            {/* DEDUCTIONS */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Other Business Deductions Available to Firms & LLPs
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Beyond partner remuneration and interest, firms and LLPs can
              claim all legitimate business expenses as deductions against gross
              income:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>Rent paid for office, factory, or shop premises</li>
              <li>Staff salaries, PF contributions, and employee benefits</li>
              <li>Depreciation on plant, machinery, vehicles, computers, and furniture</li>
              <li>Electricity, internet, telephone, and other utility bills</li>
              <li>Professional fees paid to CAs, lawyers, and consultants</li>
              <li>Advertisement, marketing, and business development expenses</li>
              <li>Interest on term loans and working capital loans from banks</li>
              <li>Travelling and conveyance expenses for business purposes</li>
              <li>Repairs and maintenance of business assets</li>
              <li>Insurance premiums for business assets and stock</li>
              <li>GST paid on business expenses (to the extent not credited as input tax credit)</li>
            </ul>
          </article>

          {/* TAX AUDIT */}
          <TaxAuditSection />

          {/* WORKFLOW */}
          <WorkflowSection />

          {/* DOCUMENTS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Documents Required for Firm / LLP ITR Filing
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Preparing these documents in advance ensures a smooth, accurate,
              and timely ITR-5 filing:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>Partnership Deed / LLP Agreement (including remuneration and interest clauses)</li>
              <li>Audited or unaudited Balance Sheet and Profit & Loss Account for FY 2025-26</li>
              <li>GST returns — GSTR-1, GSTR-3B, and GSTR-9 (annual return)</li>
              <li>Business current account bank statements for the full financial year</li>
              <li>TDS certificates — Form 26AS and Annual Information Statement (AIS) for the firm's PAN</li>
              <li>Purchase invoices, sales invoices, and expense vouchers</li>
              <li>Depreciation schedule for all fixed assets</li>
              <li>Loan account statements and interest certificates from banks/NBFCs</li>
              <li>Partner capital account statements and profit-sharing ratio details</li>
              <li>Tax Audit Report in Form 3CA/3CD (if audit is applicable)</li>
              <li>PAN card of the firm, DSC of designated partner (for e-verification)</li>
              <li>MCA filings — Form 11 and Form 8 (for LLPs)</li>
            </ul>

            {/* CONSEQUENCES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Consequences of Non-Filing or Late Filing for Firms & LLPs
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Firms and LLPs face severe financial and legal consequences for
              missing ITR deadlines, which are often more impactful than for
              individual taxpayers:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Penalty under Section 234F</strong> — ₹5,000 late
                filing fee for returns filed after the due date.
              </li>
              <li>
                <strong>Interest under Section 234A & 234B</strong> — 1% per
                month on outstanding tax from the due date, and for shortfall
                in advance tax payments.
              </li>
              <li>
                <strong>Loss of business loss carry-forward</strong> — Firm
                losses cannot be carried forward to offset future years' profits
                if the return is filed late.
              </li>
              <li>
                <strong>Penalty under Section 271B</strong> — For failure to
                get accounts audited when required: 0.5% of turnover or
                ₹1.5 lakh, whichever is lower.
              </li>
              <li>
                <strong>Disallowance of partner remuneration & interest</strong> — If
                Section 40(b) limits are not correctly computed or the
                partnership deed lacks the required clauses, the entire
                remuneration and interest deduction can be disallowed during
                assessment, significantly increasing tax liability.
              </li>
              <li>
                <strong>MCA penalties for LLPs</strong> — Late filing of Form
                11 / Form 8 with ROC attracts additional penalties under the
                LLP Act, separate from income tax consequences.
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
    const deadline = new Date("July 31, 2026").getTime();
    const today = new Date().getTime();
    setDaysLeft(Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div
      className="bg-red-600 text-white text-center py-3 font-semibold text-sm"
      role="alert"
      aria-live="polite"
    >
      ⏳ Firm / LLP ITR Deadline — Non-Audit: 31st July 2026 | Tax Audit: 31st
      Oct 2026 &nbsp;|&nbsp;{" "}
      {daysLeft !== null ? `${daysLeft} Days Left` : "Act Now"}. Avoid ₹5,000
      Penalty!
    </div>
  );
}

/* ================= TAX RATE TABLE ================= */
function TaxRateTable() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Income Tax Rate for Partnership Firms & LLPs — FY 2025-26
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Unlike individuals who are taxed at progressive slab rates, firms and
        LLPs are taxed at a flat rate. Here is the complete tax rate structure
        applicable for FY 2025-26 (AY 2026-27):
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Income Tax Rate for Firms and LLPs FY 2025-26"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Component</th>
              <th className="p-4 text-left" scope="col">Rate</th>
              <th className="p-4 text-left" scope="col">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Income Tax", "30%", "Flat rate on net taxable income — no basic exemption limit"],
              ["Surcharge", "12%", "Applicable if total income exceeds ₹1 crore"],
              ["Health & Education Cess", "4%", "On Income Tax + Surcharge"],
              ["Effective Tax Rate (income ≤ ₹1 Cr)", "31.2%", "30% + 4% cess"],
              ["Effective Tax Rate (income > ₹1 Cr)", "34.944%", "30% + 12% surcharge + 4% cess"],
              ["AMT (Alternate Minimum Tax)", "18.5%", "Applicable if regular tax < 18.5% of adjusted total income — rare for most firms"],
              ["Partner's Share of Profit (Section 10(2A))", "Exempt", "Firm's profit taxed at firm level; partner's share is tax-free in their individual ITR"],
              ["Partner Remuneration & Interest", "Taxable", "Taxed as business income in partner's individual ITR at applicable slab rates"],
            ].map(([component, rate, remarks], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-medium text-gray-700">{component}</td>
                <td className="p-4 font-semibold text-[#00416a]">{rate}</td>
                <td className="p-4 text-gray-600">{remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * Advance tax is mandatory for firms if estimated tax liability exceeds
        ₹10,000 in a financial year. Failure to pay advance tax on time attracts
        interest under Sections 234B and 234C.
      </p>
    </>
  );
}

/* ================= TAX AUDIT SECTION ================= */
function TaxAuditSection() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Tax Audit Under Section 44AB for Firms & LLPs
      </h2>
      <p className="mb-5 leading-relaxed text-gray-700">
        Tax audit is one of the most critical compliance obligations for
        partnership firms and LLPs with significant turnover. Here is everything
        you need to know:
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Tax Audit Threshold for Firms and LLPs"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Category</th>
              <th className="p-4 text-left" scope="col">Audit Threshold</th>
              <th className="p-4 text-left" scope="col">Audit Form</th>
              <th className="p-4 text-left" scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Business Firm / LLP (cash transactions)", "Turnover > ₹1 crore", "Form 3CA + 3CD", "30th Sept 2026"],
              ["Business Firm / LLP (95% digital transactions)", "Turnover > ₹10 crore", "Form 3CA + 3CD", "30th Sept 2026"],
              ["Professional Firm (CA, Law, Medical, etc.)", "Gross receipts > ₹50 lakh", "Form 3CA + 3CD", "30th Sept 2026"],
              ["LLP Statutory Audit (LLP Act)", "Turnover > ₹40L or capital > ₹25L", "Separate audit under LLP Act", "Filing with MCA by 30th Oct"],
            ].map(([category, threshold, form, due], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-medium text-gray-700">{category}</td>
                <td className="p-4 text-gray-600">{threshold}</td>
                <td className="p-4 text-gray-600">{form}</td>
                <td className="p-4 text-gray-600">{due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 leading-relaxed">
        Taxvio provides complete tax audit support — including books of accounts
        review, preparation of audit schedules, Form 3CA/3CD drafting, and
        liaison with the auditing CA. We ensure audit reports are filed well
        before the deadline so your ITR-5 can be submitted on time.
      </p>
    </>
  );
}

/* ================= WORKFLOW ================= */
function WorkflowSection() {
  const steps = [
    {
      title: "1. Partnership Deed / LLP Agreement Review",
      desc: "We review the deed for authorisation of partner remuneration, interest on capital, and profit-sharing ratios — ensuring Section 40(b) deductions are fully justified and defensible.",
    },
    {
      title: "2. Books of Accounts & Financials Review",
      desc: "We review or assist in preparation of the Balance Sheet, Profit & Loss Account, partner capital accounts, and depreciation schedule as per Income Tax Act requirements.",
    },
    {
      title: "3. Section 40(b) Computation",
      desc: "Precise computation of allowable partner remuneration based on book profit and interest on capital within the 12% per annum limit — preventing disallowances during assessment.",
    },
    {
      title: "4. Tax Audit Coordination (if applicable)",
      desc: "For firms liable to audit under Section 44AB, we coordinate with the auditing CA, prepare Form 3CA/3CD schedules, and ensure timely upload of the audit report before 30th September.",
    },
    {
      title: "5. ITR-5 Preparation & Quality Check",
      desc: "Complete ITR-5 preparation covering all income heads, schedules, partner details, and audit report linkage. Internal review is done to prevent defective return notices.",
    },
    {
      title: "6. e-Filing, DSC Verification & Advance Tax Planning",
      desc: "ITR-5 is filed via the Income Tax e-filing portal using the firm's DSC (Digital Signature Certificate). We also plan advance tax for FY 2026-27 to avoid interest under 234B/234C.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our ITR-5 Filing Process for Firms & LLPs
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        Taxvio follows a structured, compliance-focused workflow to ensure
        accurate and timely ITR-5 filing for every partnership firm and LLP
        client:
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
  const [turnover, setTurnover] = useState(0);
  const [fee, setFee] = useState(2999);
  const [label, setLabel] = useState("ITR-5 — No Tax Audit Required");

  useEffect(() => {
    if (turnover <= 10000000) {
      setFee(2999);
      setLabel("ITR-5 — No Tax Audit Required (Turnover ≤ ₹1 Cr or digital ≤ ₹10 Cr)");
    } else if (turnover <= 50000000) {
      setFee(5999);
      setLabel("ITR-5 with Tax Audit — Section 44AB (Form 3CA/3CD)");
    } else {
      setFee(7999);
      setLabel("ITR-5 with Tax Audit + Complex Financials / LLP Statutory Audit");
    }
  }, [turnover]);

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Estimate Your Firm / LLP ITR Filing Fee
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Our ITR-5 filing fees depend on your annual turnover and whether a tax
        audit is required. Enter your approximate annual turnover:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="Firm LLP ITR Fee Calculator"
      >
        <label
          htmlFor="turnover-input"
          className="block font-semibold text-gray-700 mb-2"
        >
          Enter Annual Turnover / Gross Receipts of Firm or LLP (₹)
        </label>
        <input
          id="turnover-input"
          type="number"
          placeholder="e.g. 15000000"
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
          * Inclusive of ITR-5 preparation, Section 40(b) computation, and
          e-filing. Tax audit fees and DSC charges are additional where
          applicable. GST extra.
        </p>
      </div>
    </>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    {
      name: "Rakesh Bansal & Partners",
      location: "Khatauli",
      rating: 5,
      text: "Our trading firm's ITR-5 was filed accurately with correct 40(b) computations. Taxvio saved us from a potential disallowance that could have cost us lakhs.",
    },
    {
      name: "Sharma & Verma LLP",
      location: "Muzaffarnagar",
      rating: 5,
      text: "Tax audit and ITR-5 both handled seamlessly. The team coordinated with our CA for the audit report and filed the return well before the October deadline.",
    },
    {
      name: "Gupta Brothers Partnership",
      location: "Meerut",
      rating: 5,
      text: "We had complex capital gains from property sale along with business income. Taxvio handled everything correctly — no notices, no stress.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted by Partnership Firms & LLPs Across India
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
      q: "Which ITR form should a partnership firm or LLP file?",
      a: "Partnership firms and LLPs must file ITR-5 — not ITR-3 or any other form. ITR-5 covers all income heads applicable to firms including business income, capital gains, house property income, and other sources. It also includes schedules for partner details, Section 40(b) deductions, and audit report linkage.",
    },
    {
      q: "What is the income tax rate for a firm or LLP in FY 2025-26?",
      a: "Firms and LLPs are taxed at a flat 30% on net taxable income. A 12% surcharge applies if income exceeds ₹1 crore. Health & Education Cess of 4% is applied on income tax plus surcharge. The effective tax rate is 31.2% for income up to ₹1 crore and 34.944% for income above ₹1 crore.",
    },
    {
      q: "What are the Section 40(b) limits for partner remuneration?",
      a: "Under Section 40(b), partner remuneration is deductible subject to: ₹1,50,000 or 90% of book profit (whichever is higher) on the first ₹3 lakh of book profit, and 60% of balance book profit above ₹3 lakh. Interest on partner's capital is deductible at up to 12% per annum. Both must be authorised by the partnership deed.",
    },
    {
      q: "Is a partner's share of profit taxable in their personal ITR?",
      a: "No. Under Section 10(2A), a partner's share of profit from a registered firm (that has been taxed at 30% at the firm level) is completely exempt in the partner's individual income tax return. However, remuneration and interest received from the firm are taxable as business income in the partner's personal ITR.",
    },
    {
      q: "When is tax audit mandatory for a firm or LLP?",
      a: "Tax audit under Section 44AB is mandatory when business turnover exceeds ₹1 crore (or ₹10 crore for 95% digital transactions) or professional receipts exceed ₹50 lakh. For LLPs, a separate statutory audit under the LLP Act is required if turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh.",
    },
    {
      q: "What is the ITR filing deadline for firms and LLPs for FY 2025-26?",
      a: "For firms not liable to tax audit, the ITR-5 due date is 31st July 2026. For firms liable to audit under Section 44AB, the extended due date is 31st October 2026. The tax audit report (Form 3CA/3CD) must be filed by 30th September 2026. Late filing attracts penalty under Section 234F (up to ₹5,000) plus interest under Section 234A.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions for Firms and LLPs">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — ITR-5 Filing for Partnership Firms & LLPs
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
            File Your Firm / LLP ITR-5 for FY 2025-26 On Time
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Avoid penalties, protect your carry-forward losses, and ensure
            100% Section 40(b) compliance. Taxvio's CA-assisted ITR-5 filing
            starts at just ₹2,999. Serving Khatauli, Muzaffarnagar, Meerut and
            all of India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email for a free document checklist
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Start ITR-5 filing for firm or LLP with Taxvio"
            >
              Start ITR-5 Filing — ₹2,999 Onwards
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