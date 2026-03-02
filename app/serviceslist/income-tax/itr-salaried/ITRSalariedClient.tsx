"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ITR Filing for Salaried Individuals",
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
    "Professional ITR filing services for salaried employees in Khatauli and across India. Old vs New tax regime comparison, maximum deductions, and timely submission.",
  serviceType: "Income Tax Return Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "499",
      maxPrice: "1999",
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
      name: "Is ITR filing mandatory for salaried employees in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ITR filing is mandatory for salaried individuals whose gross total income exceeds the basic exemption limit (₹2.5 lakh under old regime, ₹3 lakh under new regime for FY 2024-25). Filing is also compulsory if TDS has been deducted and you wish to claim a refund, or if income from other sources like house property, capital gains or freelance work is also present.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ITR filing deadline for salaried individuals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The due date for filing ITR for salaried individuals (non-audit cases) is 31st July of the relevant Assessment Year. For FY 2025-26, the deadline is 31st July 2026. Late filing attracts a penalty of up to ₹5,000 under Section 234F.",
      },
    },
    {
      "@type": "Question",
      name: "Which ITR form should a salaried employee use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ITR-1 (Sahaj) is applicable for salaried individuals with income from salary, one house property, and other sources up to ₹50 lakh. ITR-2 is applicable if capital gains are involved or more than one house property exists.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for ITR filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 16 from employer, Form 26AS / AIS / TIS from Income Tax portal, bank statements, investment proof for 80C (LIC, PPF, ELSS), health insurance premium for 80D, home loan certificate for 80EE/24(b), rent receipts for HRA exemption, and Aadhaar/PAN card.",
      },
    },
    {
      "@type": "Question",
      name: "Which tax regime is better — Old or New?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your deductions. If your total eligible deductions (80C, 80D, HRA, LTA, home loan interest) exceed ₹3.75 lakh, the old regime is typically more beneficial. For those with fewer investments, the new regime with lower slab rates is usually advantageous.",
      },
    },
  ],
};

export default function ITRSalariedClient() {
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

        {/* HERO */}
        <section
          className="bg-gradient-to-r from-[#00416a] to-[#002b45] text-white py-24"
          aria-label="ITR Filing Hero Section"
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumb for SEO */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
              <ol className="flex gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white font-medium">
                  ITR Filing for Salaried
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ITR Filing for Salaried Individuals in India – FY 2025-26
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Professional income tax return (ITR) filing for salaried employees
              with maximum deductions, accurate regime selection, and guaranteed
              compliance. Serving Khatauli, Muzaffarnagar, Meerut and all of
              India online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="File my income tax return now"
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
              <span>✅ 2,000+ Returns Filed</span>
              <span>✅ CA-Assisted Service</span>
              <span>✅ 100% Online & Secure</span>
              <span>✅ Maximum Refund Guaranteed</span>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* ── INTRO ── */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Complete Guide to ITR Filing for Salaried Employees (FY 2025-26 / AY 2026-27)
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              Filing your <strong>Income Tax Return (ITR)</strong> is not just a
              legal obligation — it is a financial advantage. For salaried
              individuals in India, ITR filing is mandatory when gross total
              income exceeds the basic exemption limit. But beyond compliance,
              filing your return on time enables you to <strong>claim TDS
              refunds</strong>, obtain home loans and credit cards effortlessly,
              apply for visas, and establish a verifiable income history for
              future financial transactions.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              Even if your employer has already deducted Tax Deducted at Source
              (TDS) and deposited it with the government, you are still required
              to file a return if your income surpasses the threshold. TDS
              deducted is often based on approximate calculations by the
              employer. Filing your ITR allows the Income Tax Department to
              reconcile the exact tax liability — and if excess tax has been
              deducted, you receive a <strong>refund directly to your bank
              account</strong>.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong> is a trusted tax compliance firm based in
              Khatauli, Uttar Pradesh, providing professional ITR filing services
              to salaried employees across Muzaffarnagar, Meerut, Saharanpur,
              Delhi NCR and pan-India via our secure online platform. Our
              CA-assisted process ensures accurate return preparation, regime
              optimisation, and e-filing within the due date.
            </p>

            {/* ── WHO SHOULD FILE ── */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Who Must File an ITR — Salaried Individuals
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Under the Income Tax Act, 1961, filing ITR is compulsory for
              salaried individuals in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                Gross total income exceeds ₹2,50,000 (old regime) or ₹3,00,000
                (new regime) before deductions.
              </li>
              <li>
                TDS has been deducted and you want to claim a refund.
              </li>
              <li>
                Income includes salary + house property rent, capital gains
                (stocks, mutual funds, property sale), or freelance earnings.
              </li>
              <li>
                You hold foreign assets or have foreign income.
              </li>
              <li>
                You deposited more than ₹1 crore in bank accounts, spent over
                ₹2 lakh on foreign travel, or paid electricity bills exceeding
                ₹1 lakh during the year.
              </li>
              <li>
                Visa, home loan, or credit card application requires ITR
                acknowledgement.
              </li>
            </ul>

            {/* ── WHICH FORM ── */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Which ITR Form Should Salaried Employees File?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Choosing the correct ITR form is critical to avoid defective return
              notices. Salaried individuals can use:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>ITR-1 (Sahaj)</strong> — For income from salary/pension,
                one house property, and other sources (interest, etc.) with total
                income up to ₹50 lakh. This is the most common form for
                straightforward salaried cases.
              </li>
              <li>
                <strong>ITR-2</strong> — For those who also have capital gains
                from selling shares, mutual funds, or property; more than one
                house property; or income from foreign sources.
              </li>
              <li>
                <strong>ITR-3</strong> — If salary income is accompanied by
                business or professional income (e.g., freelance income on top
                of a regular salary).
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              At Taxvio, our experts assess your complete income profile to
              identify the correct form, preventing rejections and scrutiny
              notices from the Income Tax Department.
            </p>
          </article>

          {/* ── REGIME COMPARISON ── */}
          <RegimeComparison />

          {/* ── DEDUCTIONS SECTION ── */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Key Deductions Available to Salaried Employees (Old Regime)
            </h2>
            <p className="mb-5 leading-relaxed text-gray-700">
              The old tax regime allows salaried individuals to significantly
              reduce their taxable income through various deductions and
              exemptions under the Income Tax Act. The most important ones
              include:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Section 80C (up to ₹1.5 lakh)</strong> — Life insurance
                premiums (LIC), Employee Provident Fund (EPF), Public Provident
                Fund (PPF), ELSS mutual funds, National Savings Certificate
                (NSC), home loan principal repayment, tuition fees.
              </li>
              <li>
                <strong>Section 80D (up to ₹25,000 / ₹50,000)</strong> — Health
                insurance premiums for self, spouse, children and parents. Senior
                citizen parents get an enhanced limit of ₹50,000.
              </li>
              <li>
                <strong>HRA Exemption</strong> — House Rent Allowance received
                from employer can be partially or fully exempt based on actual
                rent paid, salary, and city of residence.
              </li>
              <li>
                <strong>Standard Deduction (₹50,000)</strong> — Available to all
                salaried employees without any proof, reducing gross salary
                income directly.
              </li>
              <li>
                <strong>Section 24(b) — Home Loan Interest</strong> — Up to
                ₹2 lakh deduction on interest paid on home loan for
                self-occupied property.
              </li>
              <li>
                <strong>Section 80E</strong> — Interest on education loan for
                higher studies (no upper limit for 8 years).
              </li>
              <li>
                <strong>LTA (Leave Travel Allowance)</strong> — Tax exemption on
                travel expenses for domestic travel with family (twice in a block
                of 4 years).
              </li>
            </ul>
          </article>

          {/* ── WORKFLOW ── */}
          <WorkflowSection />

          {/* ── DOCUMENTS ── */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Documents Required for ITR Filing
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              To ensure a smooth and accurate ITR filing experience, keep the
              following documents handy before initiating the process:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>Form 16 (Part A & Part B) issued by your employer</li>
              <li>
                Form 26AS, Annual Information Statement (AIS), and Taxpayer
                Information Summary (TIS) from the Income Tax portal
              </li>
              <li>Bank account statements for the full financial year</li>
              <li>
                Investment proofs: LIC premium receipts, PPF passbook, ELSS
                statement
              </li>
              <li>Health insurance premium receipt (for 80D claim)</li>
              <li>
                Home loan interest certificate and principal repayment
                certificate from bank (for 24(b) and 80C)
              </li>
              <li>Rent receipts and landlord PAN (for HRA exemption)</li>
              <li>Capital gains statement from broker (if shares/MF sold)</li>
              <li>PAN card and Aadhaar card linked to PAN</li>
              <li>Bank account details (account number and IFSC) for refund</li>
            </ul>
          </article>

          {/* ── CALCULATOR ── */}
          <ITRCalculator />

          {/* ── PENALTY SECTION ── */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Consequences of Not Filing ITR on Time
            </h2>
            <p className="mb-5 leading-relaxed text-gray-700">
              Missing the ITR filing deadline has serious financial and legal
              consequences that many salaried employees underestimate:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Penalty under Section 234F</strong> — ₹5,000 late filing
                fee (₹1,000 if total income is below ₹5 lakh).
              </li>
              <li>
                <strong>Interest under Section 234A</strong> — 1% per month on
                the outstanding tax amount for each month of delay.
              </li>
              <li>
                <strong>Loss of carry-forward benefit</strong> — Losses under
                capital gains or business income cannot be carried forward if ITR
                is filed after the due date.
              </li>
              <li>
                <strong>Delayed refund</strong> — Late filing means delayed
                processing and interest on refund may be reduced.
              </li>
              <li>
                <strong>Income Tax Notice</strong> — Non-filers may receive
                notices under Section 142(1) or 148 for income escaping
                assessment.
              </li>
            </ul>
          </article>

          {/* ── TESTIMONIALS ── */}
          <Testimonials />

          {/* ── FAQ ── */}
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
      ⏳ ITR Filing Deadline 31st July 2026 —{" "}
      {daysLeft !== null ? `${daysLeft} Days Left` : "Act Now"}. Avoid ₹5,000 Penalty!
    </div>
  );
}

/* ================= REGIME COMPARISON ================= */
function RegimeComparison() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Old vs New Tax Regime — Which Is Better for You in FY 2025-26?
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Since FY 2023-24, the <strong>New Tax Regime is the default</strong>{" "}
        regime. However, salaried individuals can still opt for the Old Regime
        at the time of ITR filing if it results in lower tax. Here is a detailed
        comparison:
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Old vs New Tax Regime Comparison Table"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">
                Particular
              </th>
              <th className="p-4 text-left" scope="col">
                Old Regime
              </th>
              <th className="p-4 text-left" scope="col">
                New Regime (Default)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Standard Deduction", "₹50,000", "₹75,000 (from FY 2024-25)"],
              ["80C Deduction (LIC, PPF, ELSS)", "Up to ₹1.5 lakh", "Not available"],
              ["80D (Health Insurance)", "Up to ₹25,000–₹1 lakh", "Not available"],
              ["HRA Exemption", "Available", "Not available"],
              ["Home Loan Interest 24(b)", "Up to ₹2 lakh", "Not available (let-out only)"],
              ["Tax Slab Rates", "Higher (5%–30%)", "Lower (5%–30% with more slabs)"],
              ["Rebate u/s 87A", "Up to ₹12,500 (income ≤ ₹5L)", "Up to ₹25,000 (income ≤ ₹7L)"],
              ["Best For", "High deductions & investments", "Minimal investments, simplicity"],
            ].map(([particular, old, newR], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-medium text-gray-700">{particular}</td>
                <td className="p-4 text-gray-600">{old}</td>
                <td className="p-4 text-gray-600">{newR}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * Our tax experts compare both regimes for every client to ensure you
        pay the least possible tax legally. Book a free consultation to find out
        which regime benefits you.
      </p>
    </>
  );
}

/* ================= WORKFLOW ================= */
function WorkflowSection() {
  const steps = [
    {
      title: "1. Document Collection & Review",
      desc: "We collect Form 16, Form 26AS/AIS, investment proofs, bank statements, and all other income details. Our checklist ensures nothing is missed.",
    },
    {
      title: "2. Tax Regime Evaluation",
      desc: "We compute your tax liability under both Old and New Tax Regimes using your actual data, and recommend the one that minimises your tax.",
    },
    {
      title: "3. Accurate Tax Computation",
      desc: "Taxable income is calculated after applying all eligible deductions — 80C, 80D, HRA, Standard Deduction, home loan interest, and more.",
    },
    {
      title: "4. ITR Preparation & Quality Check",
      desc: "Your return is prepared in the appropriate ITR form (ITR-1 or ITR-2) and internally reviewed for accuracy before submission.",
    },
    {
      title: "5. e-Filing & E-Verification",
      desc: "The return is filed on the official Income Tax e-filing portal. We assist with e-verification via Aadhaar OTP, net banking, or DSC.",
    },
    {
      title: "6. Refund Tracking & Compliance Support",
      desc: "Post-filing, we track your refund status and provide support in case of any notice, rectification request, or intimation under Section 143(1).",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our ITR Filing Process — Simple, Transparent & Compliant
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        Taxvio follows a structured, end-to-end ITR filing workflow designed to
        maximise your refund and minimise compliance risk. Here is exactly how we
        file your income tax return:
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
  const [income, setIncome] = useState(0);
  const [fee, setFee] = useState(499);

  useEffect(() => {
    if (income <= 500000) setFee(499);
    else if (income <= 1000000) setFee(999);
    else setFee(1999);
  }, [income]);

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        ITR Filing Fee Calculator
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Our fees are transparent and based on your annual income. Use the
        calculator below to get an instant estimate:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="ITR Fee Calculator"
      >
        <label
          htmlFor="income-input"
          className="block font-semibold text-gray-700 mb-2"
        >
          Enter Your Annual Gross Income (₹)
        </label>
        <input
          id="income-input"
          type="number"
          placeholder="e.g. 750000"
          className="border p-3 rounded-xl w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#00416a]"
          onChange={(e) => setIncome(Number(e.target.value))}
          aria-describedby="fee-output"
        />
        <p
          id="fee-output"
          className="text-lg font-semibold text-[#00416a]"
          aria-live="polite"
        >
          Estimated ITR Filing Fee:{" "}
          <span className="text-2xl">₹{fee}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          * Inclusive of CA review, e-filing, and e-verification support. GST
          extra as applicable.
        </p>
      </div>
    </>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      location: "Khatauli",
      rating: 5,
      text: "Taxvio filed my ITR within 24 hours of sharing my Form 16. Smooth, professional, and completely hassle-free.",
    },
    {
      name: "Priya Verma",
      location: "Muzaffarnagar",
      rating: 5,
      text: "I had TDS deducted in excess by my employer. Taxvio identified the exact refund amount and I received it within 3 weeks.",
    },
    {
      name: "Amit Gupta",
      location: "Meerut",
      rating: 5,
      text: "Transparent fees, quick turnaround, and great follow-up. Switched from another CA and the experience is far better.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted by Salaried Professionals Across India
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
      q: "Is ITR filing mandatory for salaried employees in India?",
      a: "Yes. ITR filing is mandatory if your gross total income exceeds ₹2.5 lakh (old regime) or ₹3 lakh (new regime). Even if TDS is deducted by your employer, you must file to claim a refund, carry forward losses, or meet compliance requirements for loans and visas.",
    },
    {
      q: "Which ITR form should a salaried employee use?",
      a: "Most salaried individuals with income up to ₹50 lakh from salary, one house property, and savings interest should file ITR-1 (Sahaj). ITR-2 is required if you have capital gains from stocks or mutual funds, more than one property, or foreign income/assets.",
    },
    {
      q: "What is the last date for ITR filing for FY 2025-26?",
      a: "The due date for salaried individuals (non-audit cases) for FY 2025-26 (AY 2026-27) is 31st July 2026. Late filing attracts a penalty of ₹5,000 (₹1,000 for income below ₹5 lakh) plus interest under Section 234A.",
    },
    {
      q: "What documents are needed for ITR filing?",
      a: "You need Form 16 from your employer, Form 26AS/AIS/TIS from the income tax portal, bank statements, investment proofs (LIC, PPF, ELSS), health insurance premium receipts, home loan certificate, rent receipts (for HRA), and capital gains statements if applicable.",
    },
    {
      q: "Which tax regime is better — old or new?",
      a: "It depends on your deductions. If your eligible deductions (80C, 80D, HRA, home loan interest) total more than ₹3.75 lakh, the old regime usually saves more tax. For those with fewer deductions or who want simplicity, the new regime is beneficial. Our experts compute both and recommend the best option for you.",
    },
    {
      q: "How long does it take to get an ITR refund?",
      a: "After e-filing and e-verification, the Income Tax Department typically processes refunds within 15–45 days if your return is filed before the due date and no discrepancies are found. Pre-validated bank account with correct IFSC speeds up the credit.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — ITR Filing for Salaried Individuals
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
              <span className="text-[#00416a] text-xl ml-4">
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
            File Your ITR for FY 2025-26 Before 31st July 2026
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Avoid penalties, maximise your refund, and stay 100% compliant.
            Taxvio's CA-assisted ITR filing starts at just ₹499. Serving
            Khatauli, Muzaffarnagar, Meerut and all of India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email for a free document checklist
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Start ITR filing with Taxvio"
            >
              Start ITR Filing — ₹499 Onwards
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