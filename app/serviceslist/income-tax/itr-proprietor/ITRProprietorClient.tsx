"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITR Filing for Proprietors & Self-Employed Individuals",
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
    "Professional ITR-3 / ITR-4 filing services for proprietors, freelancers, and self-employed individuals in Khatauli and across India. Presumptive taxation under 44AD & 44ADA, books of accounts, audit support, and maximum deductions.",
  serviceType: "Income Tax Return Filing for Business",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "1499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "1499",
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
      name: "Which ITR form should a proprietor or self-employed person file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A proprietor or self-employed individual should file ITR-3 if they maintain regular books of accounts, or ITR-4 (Sugam) if they opt for presumptive taxation under Section 44AD (business) or 44ADA (professionals). The correct form depends on turnover, nature of business, and whether a tax audit is applicable.",
      },
    },
    {
      "@type": "Question",
      name: "What is presumptive taxation under Section 44AD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 44AD allows eligible small businesses with turnover up to ₹3 crore (digital receipts up to ₹3 crore; cash limit ₹2 crore) to declare 8% of turnover (6% for digital receipts) as profit without maintaining detailed books of accounts. This significantly reduces compliance burden for small proprietors.",
      },
    },
    {
      "@type": "Question",
      name: "Is tax audit mandatory for proprietors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, tax audit under Section 44AB is mandatory if business turnover exceeds ₹1 crore (₹10 crore if 95% transactions are digital) or professional receipts exceed ₹50 lakh. Audit must be conducted by a practicing Chartered Accountant and the audit report (Form 3CB/3CD) must be filed before the ITR due date.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ITR filing due date for proprietors for FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For proprietors not liable to tax audit, the due date is 31st July 2026. For those liable to tax audit under Section 44AB, the extended due date is 31st October 2026, and the audit report must be filed by 30th September 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Can a proprietor claim business expenses as deductions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under regular business taxation (ITR-3), proprietors can claim all legitimate business expenses including rent, salaries, electricity, telephone, travel, depreciation on assets, insurance, advertisement, and professional fees as deductions from gross business income. Only net profit is taxable.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for proprietor ITR filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key documents include: GST returns (GSTR-1, GSTR-3B), business bank statements, purchase and sales invoices, expense bills, rent agreement, loan account statements, TDS certificates (Form 26AS/AIS), investment proofs (80C, 80D), and balance sheet & P&L account if books are maintained.",
      },
    },
  ],
};

export default function ITRProprietorClient() {
  return (
    <>
      {/* Inject JSON-LD structured data */}
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
          aria-label="ITR Filing for Proprietors Hero Section"
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
              <ol className="flex gap-2">
                <li>
                  <Link href="/" className="hover:text-white">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-white">Services</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/income-tax" className="hover:text-white">Income Tax</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white font-medium">
                  ITR for Proprietors
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ITR Filing for Proprietors & Self-Employed in India — FY 2025-26
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Expert ITR-3 and ITR-4 filing for sole proprietors, freelancers,
              traders, and self-employed professionals. Presumptive tax under
              44AD & 44ADA, books of accounts, tax audit, and maximum
              deductions. Serving Khatauli, Muzaffarnagar and all of India
              online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="File my business income tax return now"
              >
                File My ITR Now
              </Link>
              <Link
                href="#faq"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                View FAQs
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ ITR-3 & ITR-4 Expert Filing</span>
              <span>✅ CA-Assisted Service</span>
              <span>✅ Tax Audit Support</span>
              <span>✅ GST + Income Tax Together</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Income Tax Return Filing for Sole Proprietors & Self-Employed — Complete Guide (FY 2025-26 / AY 2026-27)
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              As a sole proprietor, freelancer, trader, or self-employed
              professional in India, your income tax obligations are more
              complex than those of a salaried employee. A proprietorship is not
              a separate legal entity — the owner and the business are treated
              as one for tax purposes. This means your{" "}
              <strong>business income, salary, rental income, and capital
              gains</strong> are all consolidated and taxed under your individual
              PAN as per the applicable income tax slabs.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              Filing ITR accurately is critical for proprietors because it
              serves multiple purposes beyond mere compliance. It establishes
              your <strong>business income proof</strong> for bank loans and
              overdraft facilities, enables you to carry forward business losses
              to offset future profits, allows you to claim deductions for all
              legitimate business expenses, and protects you from scrutiny
              notices from the Income Tax Department.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
              provides end-to-end ITR filing services for proprietors and
              self-employed individuals across Uttar Pradesh and pan-India
              through our secure online platform. Whether you are a small trader,
              a doctor, a consultant, a contractor, or a digital freelancer —
              our CA-assisted service ensures accurate return preparation,
              optimum tax planning, and on-time filing.
            </p>

            {/* WHO SHOULD FILE */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Who Is a Sole Proprietor for Income Tax Purposes?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Under the Income Tax Act, a sole proprietorship has no separate
              tax identity. All income and losses of the business are reported
              in the proprietor's individual ITR. The following individuals must
              file under proprietorship / business income category:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Traders & Shopkeepers</strong> — Retail, wholesale, or
                online sellers running their business under their own name or a
                trade name.
              </li>
              <li>
                <strong>Professionals</strong> — Doctors, lawyers, chartered
                accountants, architects, engineers, consultants providing
                professional services independently.
              </li>
              <li>
                <strong>Freelancers & Digital Entrepreneurs</strong> — Content
                creators, graphic designers, IT consultants, web developers,
                social media managers earning from clients in India or abroad.
              </li>
              <li>
                <strong>Commission Agents & Contractors</strong> — Individuals
                earning commission income or executing contracts in their own
                name.
              </li>
              <li>
                <strong>Service Providers</strong> — Transporters, event
                managers, photographers, tutors, and any individual running an
                unregistered service business.
              </li>
            </ul>

            {/* ITR FORM SECTION */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Which ITR Form Should Proprietors & Self-Employed File?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Choosing the wrong ITR form results in a defective return notice.
              Two forms apply to proprietors:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-3">
              <li>
                <strong>ITR-4 (Sugam)</strong> — For proprietors and
                professionals who opt for <strong>presumptive taxation</strong>{" "}
                under Section 44AD (business), 44ADA (professionals), or 44AE
                (transport). Turnover must be within the prescribed limits and
                the taxpayer must not be liable to audit. This is the simplest
                option for small businesses.
              </li>
              <li>
                <strong>ITR-3</strong> — For proprietors who maintain regular
                books of accounts, have turnover exceeding presumptive limits,
                or are liable to tax audit under Section 44AB. ITR-3 requires a
                detailed balance sheet, profit & loss account, and audit report
                (if applicable).
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              If a proprietor also has salary income, house property income, or
              capital gains alongside business income, all such income is
              consolidated and reported in ITR-3. Taxvio's experts assess your
              complete income profile to select the correct form and avoid
              compliance risk.
            </p>
          </article>

          {/* PRESUMPTIVE TAX SECTION */}
          <PresumptiveTaxSection />

          {/* DEDUCTIONS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Business Expenses & Deductions Claimable by Proprietors (ITR-3)
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Proprietors filing ITR-3 with regular books of accounts can claim
              all genuine business expenditure as deductions against gross
              business receipts. The net profit after these deductions is the
              taxable business income:
            </p>
            <ul className="list-disc pl-6 mb-5 text-gray-700 space-y-2">
              <li>
                <strong>Rent & Utilities</strong> — Office or shop rent,
                electricity, water, internet, and telephone bills directly
                related to the business.
              </li>
              <li>
                <strong>Staff Salaries & Wages</strong> — Salaries, wages,
                bonus, and EPF contributions paid to employees of the
                proprietorship.
              </li>
              <li>
                <strong>Depreciation on Assets</strong> — Depreciation on
                computers, machinery, vehicles, furniture used for business as
                per Income Tax Act rates.
              </li>
              <li>
                <strong>Purchases & Stock</strong> — Cost of goods purchased for
                resale or raw materials used in manufacturing or services.
              </li>
              <li>
                <strong>Professional & Consultation Fees</strong> — Fees paid to
                CAs, lawyers, tax consultants, and other professionals.
              </li>
              <li>
                <strong>Advertising & Marketing</strong> — Expenses on
                advertisements, printing, promotions, and digital marketing.
              </li>
              <li>
                <strong>Interest on Business Loans</strong> — Interest paid on
                loans taken for business purposes is fully deductible.
              </li>
              <li>
                <strong>Insurance Premium</strong> — Premium paid for business
                asset insurance or trade credit insurance.
              </li>
              <li>
                <strong>Travel & Conveyance</strong> — Business travel expenses
                including fuel, cab fares, and lodging for business purposes.
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              Additionally, proprietors can claim personal deductions under{" "}
              <strong>Section 80C</strong> (up to ₹1.5 lakh), <strong>80D</strong>{" "}
              (health insurance), <strong>80E</strong> (education loan interest),
              and the standard deductions available to individuals — just like
              salaried employees — since all income is taxed in the individual's
              hands.
            </p>

            {/* TAX AUDIT */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Tax Audit Under Section 44AB — When Is It Mandatory?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              A <strong>tax audit</strong> under Section 44AB must be conducted
              by a practicing Chartered Accountant in the following cases:
            </p>
            <ul className="list-disc pl-6 mb-5 text-gray-700 space-y-2">
              <li>
                <strong>Business turnover exceeds ₹1 crore</strong> in the
                financial year (threshold raised to ₹10 crore if 95% of receipts
                and payments are digital/non-cash).
              </li>
              <li>
                <strong>Professional receipts exceed ₹50 lakh</strong> (for
                doctors, lawyers, CAs, architects, engineers, and other
                specified professions).
              </li>
              <li>
                The proprietor opts out of presumptive taxation (44AD/44ADA)
                and declares profit lower than the prescribed presumptive rate.
              </li>
              <li>
                Business has incurred a loss and the proprietor wishes to carry
                it forward.
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              Failure to get accounts audited when required attracts a penalty
              of 0.5% of turnover or ₹1.5 lakh — whichever is lower — under
              Section 271B. Taxvio provides complete <strong>tax audit
              support</strong>, including preparation of books, Form 3CB/3CD
              preparation, and coordination with the auditor.
            </p>
          </article>

          {/* WORKFLOW */}
          <WorkflowSection />

          {/* DOCUMENTS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Documents Required for Proprietor ITR Filing
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Gathering the right documents before initiating the ITR filing
              process saves time and prevents errors. Here is a comprehensive
              checklist for proprietors:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>GST registration certificate and all GST returns (GSTR-1, GSTR-3B, GSTR-9)</li>
              <li>Business current account and savings account bank statements for the full year</li>
              <li>Purchase invoices, sales invoices, and expense bills</li>
              <li>Rent agreement for office or shop (if claimed as deduction)</li>
              <li>Loan account statements and interest certificates for business loans</li>
              <li>TDS certificates — Form 26AS, Annual Information Statement (AIS), TIS from Income Tax portal</li>
              <li>Depreciation schedule for business assets (computers, vehicles, machinery)</li>
              <li>Investment proofs — LIC, PPF, ELSS for Section 80C deduction</li>
              <li>Health insurance premium receipt for Section 80D</li>
              <li>Capital gains statement if shares, mutual funds, or property were sold</li>
              <li>Balance Sheet and Profit & Loss Account (if books of accounts are maintained)</li>
              <li>PAN card, Aadhaar card linked to PAN, and pre-validated bank account for refund</li>
            </ul>

            {/* CONSEQUENCES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Consequences of Late or Non-Filing for Proprietors
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Proprietors face higher stakes with delayed filing compared to
              salaried employees, because business losses can only be carried
              forward if the ITR is filed on time. Here are the key
              consequences:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Penalty under Section 234F</strong> — ₹5,000 late filing
                fee (₹1,000 if total income is below ₹5 lakh).
              </li>
              <li>
                <strong>Interest under Section 234A & 234B</strong> — 1% per
                month on outstanding tax liability from due date, and for
                shortfall in advance tax.
              </li>
              <li>
                <strong>Loss of business loss carry-forward</strong> — Business
                losses for FY 2025-26 cannot be carried forward to future years
                if ITR is filed after the due date, resulting in higher tax
                liability in subsequent years.
              </li>
              <li>
                <strong>Scrutiny notices & survey risk</strong> — Non-filers or
                late filers with GST turnover are frequently selected for
                scrutiny, since the IT Department can cross-verify turnover via
                GSTN data.
              </li>
              <li>
                <strong>Penalty under Section 271B</strong> — For failure to get
                accounts audited when required: 0.5% of turnover or ₹1.5 lakh,
                whichever is lower.
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
      ⏳ ITR Filing Deadline — Non-Audit: 31st July 2026 | Tax Audit: 31st Oct
      2026 &nbsp;|&nbsp;{" "}
      {daysLeft !== null ? `${daysLeft} Days Left` : "Act Now"}. Avoid ₹5,000
      Penalty!
    </div>
  );
}

/* ================= PRESUMPTIVE TAX SECTION ================= */
function PresumptiveTaxSection() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Presumptive Taxation — Section 44AD, 44ADA & 44AE Explained
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        The Income Tax Act offers a significant compliance relief for small
        proprietors and professionals through <strong>presumptive taxation
        schemes</strong>. Under these schemes, you do not need to maintain
        detailed books of accounts — instead, a fixed percentage of turnover is
        deemed to be your profit.
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Presumptive Taxation Schemes Comparison"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Section</th>
              <th className="p-4 text-left" scope="col">Applicable To</th>
              <th className="p-4 text-left" scope="col">Turnover Limit</th>
              <th className="p-4 text-left" scope="col">Deemed Profit %</th>
              <th className="p-4 text-left" scope="col">ITR Form</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["44AD", "Eligible small businesses (traders, contractors, etc.)", "Up to ₹3 crore (digital); ₹2 crore (cash)", "8% (cash) / 6% (digital receipts)", "ITR-4"],
              ["44ADA", "Specified professionals (doctors, lawyers, CAs, architects, engineers, etc.)", "Up to ₹75 lakh (digital); ₹50 lakh (cash)", "50% of gross receipts", "ITR-4"],
              ["44AE", "Goods carriage vehicle owners (up to 10 vehicles)", "No specific turnover limit", "₹1,000 per ton per month per vehicle", "ITR-4"],
              ["Regular Taxation", "Businesses / professionals exceeding above limits or opting out", "No limit", "Actual profit (books required)", "ITR-3"],
            ].map(([section, applicable, limit, profit, form], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-semibold text-[#00416a]">{section}</td>
                <td className="p-4 text-gray-600">{applicable}</td>
                <td className="p-4 text-gray-600">{limit}</td>
                <td className="p-4 text-gray-600">{profit}</td>
                <td className="p-4 text-gray-600">{form}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * If a proprietor opts out of presumptive taxation after availing it for
        a year, they cannot re-enter the scheme for the next 5 years. Our experts
        help you decide whether presumptive or regular taxation is more
        beneficial based on your actual expenses and profit margins.
      </p>
    </>
  );
}

/* ================= WORKFLOW ================= */
function WorkflowSection() {
  const steps = [
    {
      title: "1. Business Income Assessment",
      desc: "We review your GST returns, bank statements, and invoices to determine gross turnover, nature of income, and applicable ITR form (ITR-3 or ITR-4).",
    },
    {
      title: "2. Tax Regime & Scheme Evaluation",
      desc: "We compare presumptive taxation (44AD/44ADA) vs regular taxation to identify the scheme that minimises your tax liability while keeping compliance simple.",
    },
    {
      title: "3. Books of Accounts & P&L Preparation",
      desc: "For ITR-3 filers, we assist in preparing or reviewing the balance sheet, profit & loss account, and depreciation schedule as per the Income Tax Act.",
    },
    {
      title: "4. Tax Audit Coordination (if applicable)",
      desc: "For businesses requiring audit under Section 44AB, we coordinate with the auditor, prepare Form 3CB/3CD, and ensure the audit report is filed before the deadline.",
    },
    {
      title: "5. ITR Preparation & Quality Review",
      desc: "Your return is prepared with all income heads, deductions, and schedules accurately filled. A pre-submission review is done to prevent defective return notices.",
    },
    {
      title: "6. e-Filing, Verification & Advance Tax Planning",
      desc: "Return is filed on the Income Tax e-filing portal. We assist with e-verification and also provide advance tax computation to avoid interest under 234B/234C next year.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our ITR Filing Process for Proprietors — Step by Step
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        Filing business income tax returns involves more steps than salaried
        ITR. Taxvio follows a structured workflow to ensure accuracy, compliance,
        and maximum tax efficiency for every proprietor client:
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

/* ================= ITR FEE CALCULATOR ================= */
function ITRCalculator() {
  const [turnover, setTurnover] = useState(0);
  const [fee, setFee] = useState(1499);
  const [label, setLabel] = useState("ITR-4 (Presumptive)");

  useEffect(() => {
    if (turnover <= 2000000) {
      setFee(1499);
      setLabel("ITR-4 — Presumptive Taxation (44AD/44ADA)");
    } else if (turnover <= 10000000) {
      setFee(2999);
      setLabel("ITR-3 — Regular Books of Accounts");
    } else {
      setFee(4999);
      setLabel("ITR-3 with Tax Audit (Section 44AB)");
    }
  }, [turnover]);

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Estimate Your ITR Filing Fee — Proprietors & Businesses
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Our fees depend on your business turnover and the complexity of the
        return. Enter your approximate annual turnover to get an instant
        estimate:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="Proprietor ITR Fee Calculator"
      >
        <label
          htmlFor="turnover-input"
          className="block font-semibold text-gray-700 mb-2"
        >
          Enter Annual Business Turnover / Gross Receipts (₹)
        </label>
        <input
          id="turnover-input"
          type="number"
          placeholder="e.g. 5000000"
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
          * Inclusive of CA review, ITR preparation, and e-filing. GST extra as
          applicable. Tax audit fees are additional for cases requiring audit
          under 44AB.
        </p>
      </div>
    </>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    {
      name: "Vikram Agarwal",
      location: "Khatauli",
      rating: 5,
      text: "I run a wholesale grocery business. Taxvio handled my ITR-4 under 44AD seamlessly — no hassle of maintaining accounts, everything done in 2 days.",
    },
    {
      name: "Dr. Neha Sharma",
      location: "Muzaffarnagar",
      rating: 5,
      text: "As a doctor with private practice, I was confused about 44ADA. Taxvio explained everything clearly and filed my ITR with optimum tax saving.",
    },
    {
      name: "Suresh Yadav",
      location: "Meerut",
      rating: 5,
      text: "My turnover exceeded ₹1 crore this year and audit was required. Taxvio managed the entire audit and ITR filing professionally and on time.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted by Proprietors & Business Owners Across India
      </h2>

      <div
        className="grid md:grid-cols-3 gap-6 mb-16"
        itemScope
        itemType="https://schema.org/ItemList"
      >
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
            <p
              className="mb-4 text-gray-700 italic"
              itemProp="reviewBody"
            >
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
      q: "Which ITR form should a proprietor or self-employed person file?",
      a: "Proprietors opting for presumptive taxation (turnover within 44AD/44ADA limits) should file ITR-4 (Sugam). Those maintaining regular books of accounts, having turnover exceeding presumptive limits, or liable to tax audit must file ITR-3. If you also have capital gains or salary income alongside business income, ITR-3 is required.",
    },
    {
      q: "What is presumptive taxation under Section 44AD for businesses?",
      a: "Section 44AD allows eligible small businesses with turnover up to ₹3 crore (digital) or ₹2 crore (cash) to declare 6% or 8% of turnover as profit respectively — without maintaining detailed books. This simplifies compliance significantly. However, opting out after one year locks you out for 5 years.",
    },
    {
      q: "What is the Section 44ADA limit for professionals in FY 2025-26?",
      a: "For FY 2025-26, specified professionals (doctors, lawyers, CAs, architects, engineers, interior designers, technical consultants, etc.) with gross receipts up to ₹75 lakh (if 95% receipts are digital) or ₹50 lakh (cash) can opt for 44ADA and declare 50% of receipts as profit.",
    },
    {
      q: "Is tax audit mandatory for my proprietorship?",
      a: "Tax audit under Section 44AB is mandatory if your business turnover exceeds ₹1 crore (₹10 crore for 95% digital transactions) or professional receipts exceed ₹50 lakh. It is also required if you opt out of presumptive taxation and declare lower profit. The audit report must be filed before ITR, with the audit deadline being 30th September.",
    },
    {
      q: "What is the ITR filing due date for proprietors for FY 2025-26?",
      a: "For proprietors not liable to tax audit, the ITR due date is 31st July 2026. For those requiring tax audit under Section 44AB, the extended due date is 31st October 2026. Filing after these dates attracts penalty under Section 234F (up to ₹5,000) plus interest under 234A.",
    },
    {
      q: "Can I carry forward business loss if I miss the ITR deadline?",
      a: "No. Business losses (other than loss from house property and unabsorbed depreciation) cannot be carried forward to future years if the ITR is filed after the due date. This is one of the most costly consequences of late filing for proprietors, as the ability to offset future profits is permanently lost for that year.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions for Proprietors">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — ITR Filing for Proprietors & Self-Employed
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
            File Your Proprietorship ITR for FY 2025-26 On Time
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Avoid penalties, protect your carry-forward losses, and stay
            100% compliant. Taxvio's CA-assisted proprietor ITR filing starts
            at just ₹1,499. Serving Khatauli, Muzaffarnagar, Meerut and all of
            India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email for a free document checklist
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Start proprietor ITR filing with Taxvio"
            >
              Start ITR Filing — ₹1,499 Onwards
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
    </section>
  );
}