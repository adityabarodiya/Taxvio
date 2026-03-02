"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Form 15G and Form 15H Filing Services",
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
    "Professional Form 15G and Form 15H filing services in India. Stop TDS deduction on interest income from FD, RD, savings accounts, and other sources. Eligibility check, declaration filing, and annual renewal. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Form 15G 15H TDS Exemption Declaration",
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
      name: "What is Form 15G?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 15G is a self-declaration form filed by resident individuals below 60 years of age, HUFs, and trusts to request the payer (bank, company, post office) not to deduct TDS on specified income such as interest on fixed deposits, recurring deposits, and savings accounts. The declarant certifies that their total income is below the basic exemption limit and hence no TDS should be deducted.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 15H?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 15H is a self-declaration form filed by resident senior citizens aged 60 years or above to request non-deduction of TDS on interest income. Unlike Form 15G, Form 15H only requires that the tax calculated on total income is nil — there is no requirement that total income be below the basic exemption limit. This makes 15H easier for senior citizens with income above the basic exemption but having nil tax due to deductions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Form 15G and Form 15H?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 15G is for individuals below 60 years, HUFs, and trusts. Their total income must not exceed the basic exemption limit (₹2.5 lakh). Form 15H is exclusively for senior citizens aged 60 or above. For 15H, the requirement is only that tax on total income is nil — income can exceed the basic exemption limit if deductions bring tax to zero. Both forms are valid for one financial year and must be renewed annually.",
      },
    },
    {
      "@type": "Question",
      name: "Where can Form 15G and 15H be submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 15G and 15H can be submitted to banks (for FD/RD/savings interest), post offices (for NSC, time deposits), companies paying dividends or interest on debentures, employers (for EPF withdrawals before 5 years), insurance companies (for maturity proceeds), and any other payer required to deduct TDS under Sections 194A, 194, 194EE, and similar provisions.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I file a false Form 15G or 15H?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Filing a false or incorrect Form 15G / 15H — i.e., submitting the declaration when your actual total income exceeds the basic exemption limit or tax on income is not nil — is a criminal offence under Section 277 of the Income Tax Act. It is punishable with imprisonment of 3 months to 3 years, along with a fine. Always verify eligibility before filing.",
      },
    },
    {
      "@type": "Question",
      name: "When should Form 15G or 15H be submitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 15G and 15H should be submitted at the beginning of each financial year (April) to the payer — before any interest income is credited or TDS is deducted. If submitted mid-year, TDS already deducted cannot be reversed by the payer; it can only be claimed as a refund while filing the ITR. Annual renewal is mandatory — a form submitted in FY 2025-26 is not valid for FY 2026-27.",
      },
    },
  ],
};

export default function Form15G15HClient() {
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
          aria-label="Form 15G 15H Filing Hero"
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
                  Form 15G / 15H
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Form 15G &amp; Form 15H Filing — Stop TDS on Interest Income in India
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Avoid unnecessary TDS deduction on FD interest, RD interest,
              savings account interest, EPF withdrawals, and dividend income.
              Expert Form 15G (individuals below 60) and Form 15H (senior
              citizens 60+) eligibility check and declaration filing. Serving
              Khatauli, Muzaffarnagar and pan-India online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="File Form 15G or 15H now"
              >
                File 15G / 15H Now
              </Link>
              <Link
                href="#eligibility"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                Check Eligibility
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ Form 15G for Below 60 Years</span>
              <span>✅ Form 15H for Senior Citizens (60+)</span>
              <span>✅ All Banks &amp; Post Offices</span>
              <span>✅ Annual Renewal Support</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Complete Guide to Form 15G &amp; Form 15H — FY 2025-26
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              Every financial year, millions of bank depositors, senior
              citizens, and small investors in India have TDS deducted on their
              interest income — even when their total income is below the taxable
              limit. Banks, post offices, and other financial institutions are
              required to deduct <strong>TDS at 10%</strong> (or 20% if PAN is
              not linked) on interest income exceeding ₹40,000 per year (₹50,000
              for senior citizens) under Section 194A of the Income Tax Act.
              This TDS deduction reduces the net interest credited to the
              depositor's account — even though the depositor may owe zero tax
              on that income.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              The solution is <strong>Form 15G</strong> (for individuals below
              60 years and HUFs) and <strong>Form 15H</strong> (for senior
              citizens aged 60 and above) — self-declaration forms that inform
              the payer that the depositor's total income does not attract any
              income tax, and therefore TDS should not be deducted. When a valid
              Form 15G or 15H is submitted at the beginning of the financial
              year, the payer is legally obligated not to deduct TDS on the
              specified income — ensuring the full interest amount is credited
              to the depositor.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
              assists individuals, senior citizens, and HUFs in filing Form 15G
              and Form 15H correctly — verifying eligibility, computing total
              estimated income, and submitting declarations to banks, post
              offices, and other payers. We also provide annual renewal
              reminders and multi-bank consolidation for clients with deposits
              across multiple institutions.
            </p>

            {/* WHAT IS 15G */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4" id="eligibility">
              What Is Form 15G — Eligibility &amp; Conditions
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Form 15G is a self-declaration under Sections 197A(1) and
              197A(1A) of the Income Tax Act. The following conditions must all
              be satisfied to file Form 15G:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Age condition</strong> — The declarant must be a
                resident individual below 60 years of age, an HUF, or a trust
                or AOP (Association of Persons). Individuals aged 60 and above
                must use Form 15H instead.
              </li>
              <li>
                <strong>Total income condition</strong> — The declarant's total
                income for the financial year (from all sources — salary,
                interest, rent, business, capital gains) must not exceed the
                basic exemption limit of{" "}
                <strong>₹2.5 lakh (under old tax regime)</strong> or the
                applicable exemption limit. Under the new tax regime, the basic
                exemption is ₹3 lakh.
              </li>
              <li>
                <strong>Tax on total income must be nil</strong> — Even if total
                income slightly exceeds the basic exemption due to deductions,
                if the tax computed on total income (after all deductions) is
                nil, the condition is satisfied.
              </li>
              <li>
                <strong>Resident status</strong> — Only resident individuals
                and HUFs can file Form 15G. Non-residents (NRIs) cannot file
                Form 15G and must apply for lower deduction under Section 197
                through a different process.
              </li>
              <li>
                <strong>Annual renewal</strong> — Form 15G is valid only for
                the financial year in which it is submitted. A fresh declaration
                must be filed at the start of every new financial year (April).
              </li>
            </ul>

            {/* WHAT IS 15H */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              What Is Form 15H — Senior Citizen TDS Exemption
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Form 15H is a self-declaration under Section 197A(1C) exclusively
              for senior citizens. It has a more relaxed eligibility condition
              compared to Form 15G:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Age condition</strong> — The declarant must be a
                resident individual aged <strong>60 years or above</strong> at
                any time during the financial year. Super senior citizens (80+)
                also use Form 15H.
              </li>
              <li>
                <strong>Tax on total income must be nil</strong> — Unlike Form
                15G, there is no requirement that total income be below the
                basic exemption limit. A senior citizen with total income of
                ₹7 lakh can still file Form 15H if their tax liability is nil
                after deductions (e.g., 80C, 80D, standard deduction under
                new regime).
              </li>
              <li>
                <strong>Wider applicability</strong> — Senior citizens with
                pension income, interest income, and rental income can often
                file Form 15H even with total income above ₹5–6 lakh, as long
                as deductions bring tax to zero.
              </li>
              <li>
                <strong>Resident status</strong> — Must be a resident
                individual. NRI senior citizens cannot file Form 15H.
              </li>
              <li>
                <strong>Annual renewal</strong> — Like Form 15G, Form 15H must
                be renewed every financial year.
              </li>
            </ul>

            {/* WHERE TO SUBMIT */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Where Can Form 15G / 15H Be Submitted?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Form 15G and 15H can be submitted to any person required to
              deduct TDS on specified income. Common situations include:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Banks</strong> — For TDS on FD interest, RD interest,
                savings account interest (Section 194A). Each bank branch where
                FDs are held needs a separate declaration. Many banks now accept
                15G/15H online through net banking or mobile app.
              </li>
              <li>
                <strong>Post Offices</strong> — For interest on Post Office
                Time Deposits, Senior Citizens Savings Scheme (SCSS), Monthly
                Income Scheme (MIS), and National Savings Certificates (NSC).
              </li>
              <li>
                <strong>Companies / NBFCs</strong> — For TDS on interest paid
                on company fixed deposits and NCD (Non-Convertible Debentures)
                interest (Section 194A).
              </li>
              <li>
                <strong>EPFO / Employer</strong> — For TDS on EPF withdrawals
                before completing 5 years of service (Section 192A). Form 15G
                can prevent TDS on premature EPF withdrawal if the withdrawal
                amount exceeds ₹50,000 and the member's income is below the
                exemption limit.
              </li>
              <li>
                <strong>Insurance Companies</strong> — For TDS on life
                insurance maturity proceeds (Section 194DA) where premium paid
                exceeded 10%/20% of sum assured.
              </li>
              <li>
                <strong>Mutual Funds</strong> — For TDS on dividends paid by
                mutual funds (Section 194K) exceeding ₹5,000 per year.
              </li>
              <li>
                <strong>Rental income payers</strong> — Individuals (not
                subject to audit) paying rent exceeding ₹50,000 per month under
                Section 194IB can receive Form 15G/15H from landlords. However,
                this provision has limited practical application.
              </li>
            </ul>
          </article>

          {/* COMPARISON TABLE */}
          <ComparisonTable />

          {/* TDS THRESHOLD TABLE */}
          <TDSThresholdTable />

          {/* IMPORTANT RULES */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Critical Rules for Filing Form 15G / 15H — Avoid These Mistakes
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Incorrect filing of Form 15G / 15H is one of the most common tax
              compliance errors. Here are the critical rules every declarant
              must follow:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Estimate total income from ALL sources</strong> — Many
                declarants only consider FD interest while filing 15G, ignoring
                salary, rent, or other income. Total income must include all
                sources — salary, pension, business, rental, capital gains, and
                interest from all FDs across all banks. If consolidated total
                income exceeds the exemption limit, Form 15G is not eligible.
              </li>
              <li>
                <strong>Submit before first interest credit</strong> — The
                declaration must be submitted at the start of the financial year
                (April 1). If submitted mid-year, TDS already deducted by the
                bank cannot be reversed; it can only be claimed as a refund in
                the ITR. There is no mechanism for banks to refund TDS already
                deducted.
              </li>
              <li>
                <strong>Submit to every bank / every branch</strong> — A single
                Form 15G submitted to one bank does not protect FDs in other
                banks. A separate declaration must be submitted to each
                institution and in many cases each branch where income is earned.
              </li>
              <li>
                <strong>Aggregate all interest income</strong> — In Part I of
                Form 15G, the declarant must mention the estimated income from
                the particular payer AND the aggregate estimated income from all
                sources. This total is what must be below the basic exemption
                limit.
              </li>
              <li>
                <strong>Annual renewal is mandatory</strong> — A Form 15G/15H
                submitted in April 2025 (for FY 2025-26) does not automatically
                carry forward to FY 2026-27. A fresh declaration is required
                every April.
              </li>
              <li>
                <strong>Payer must report to Income Tax Department</strong> — Banks
                and other payers who receive Form 15G/15H are required to report
                the declarations quarterly to the Income Tax Department. The
                Department cross-verifies these with the declarant's ITR.
                False declarations are prosecutable.
              </li>
            </ul>

            {/* CONSEQUENCES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Consequences of Filing False Form 15G / 15H
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Form 15G and 15H are legal declarations — filing them when
              ineligible is a criminal offence under the Income Tax Act:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Section 277 — Prosecution</strong> — Knowingly making
                a false statement in any declaration (including Form 15G/15H)
                is punishable with imprisonment of{" "}
                <strong>3 months to 3 years</strong> and a fine. If the tax
                evaded exceeds ₹25 lakh, imprisonment can extend to{" "}
                <strong>7 years</strong>.
              </li>
              <li>
                <strong>TDS demand on payer</strong> — If the Income Tax
                Department discovers that TDS was not deducted due to a false
                Form 15G/15H, the payer (bank) is treated as an assessee in
                default and is liable for the TDS not deducted along with
                interest under Section 201(1A).
              </li>
              <li>
                <strong>Interest and penalty on declarant</strong> — The
                declarant whose income exceeded eligibility will face demand for
                income tax on interest income, along with interest under
                Sections 234B and 234C for non-payment of advance tax.
              </li>
              <li>
                <strong>ITR scrutiny</strong> — AIS and Form 26AS data from
                banks is cross-verified by the Department with ITR filings.
                Large interest income reported by banks but not in the ITR — due
                to false 15G filing — is a primary trigger for scrutiny notices
                under Section 143(2).
              </li>
            </ul>
          </article>

          {/* HOW TO FILE */}
          <HowToFileSection />

          {/* CALCULATOR */}
          <EligibilityChecker />

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
  const [month, setMonth] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    // Remind to submit at start of FY (April) or before each interest credit quarter
    const fyStart = new Date(`April 1, ${today.getFullYear()}`);
    if (today < fyStart) {
      setMonth("File Before 1st April to Avoid TDS for Full Year");
    } else {
      const daysIntoFY = Math.floor(
        (today.getTime() - fyStart.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (daysIntoFY <= 90) {
        setMonth("File Now — Q1 Interest Credit Approaching");
      } else {
        setMonth("TDS May Already Be Deducted — File Now for Remaining Year");
      }
    }
  }, []);

  return (
    <div
      className="bg-amber-600 text-white text-center py-3 font-semibold text-sm"
      role="alert"
      aria-live="polite"
    >
      ⏰ {month} &nbsp;|&nbsp; File Form 15G / 15H at the Start of Every
      Financial Year to Prevent TDS on FD &amp; Interest Income
    </div>
  );
}

/* ================= COMPARISON TABLE ================= */
function ComparisonTable() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Form 15G vs Form 15H — Side-by-Side Comparison
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Understanding the exact difference between the two forms prevents
        filing the wrong form — which results in TDS still being deducted:
      </p>

      <div className="overflow-x-auto mb-16">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Form 15G vs Form 15H Comparison"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Parameter</th>
              <th className="p-4 text-left" scope="col">Form 15G</th>
              <th className="p-4 text-left" scope="col">Form 15H</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Who can file",
                "Resident individual below 60 years, HUF, Trust, AOP",
                "Resident individual aged 60 years or above (including super seniors 80+)",
              ],
              [
                "Age requirement",
                "Below 60 at any time during the FY",
                "60 or above at any time during the FY",
              ],
              [
                "Income condition",
                "Total income must NOT exceed basic exemption limit (₹2.5L / ₹3L new regime)",
                "Tax on total income must be Nil — income can be above basic exemption",
              ],
              [
                "Can NRI file?",
                "No — only resident individuals and HUFs",
                "No — only resident individuals",
              ],
              [
                "Section under IT Act",
                "Section 197A(1) and 197A(1A)",
                "Section 197A(1C)",
              ],
              [
                "Applicable TDS sections",
                "Section 194A (interest), 194 (dividend), 194EE (NSS), 192A (EPF), 194K (MF dividend)",
                "Section 194A (interest), 194 (dividend), 194EE (NSS), 194K (MF dividend)",
              ],
              [
                "Validity period",
                "One financial year — must renew every April",
                "One financial year — must renew every April",
              ],
              [
                "Penalty for false filing",
                "Section 277 — imprisonment 3 months to 3 years (up to 7 years if > ₹25L)",
                "Section 277 — imprisonment 3 months to 3 years (up to 7 years if > ₹25L)",
              ],
            ].map(([param, form15g, form15h], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-semibold text-gray-700">{param}</td>
                <td className="p-4 text-gray-600 text-sm">{form15g}</td>
                <td className="p-4 text-gray-600 text-sm">{form15h}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ================= TDS THRESHOLD TABLE ================= */
function TDSThresholdTable() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-4 mb-4">
        TDS Thresholds on Interest Income — When Is 15G / 15H Required?
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        TDS on interest income is triggered when the interest amount crosses
        prescribed limits. Here are the key thresholds where Form 15G / 15H
        becomes essential to prevent TDS:
      </p>

      <div className="overflow-x-auto mb-16">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="TDS Thresholds on Interest Income"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Income Type</th>
              <th className="p-4 text-left" scope="col">Section</th>
              <th className="p-4 text-left" scope="col">TDS Threshold (Non-Senior)</th>
              <th className="p-4 text-left" scope="col">TDS Threshold (Senior 60+)</th>
              <th className="p-4 text-left" scope="col">TDS Rate</th>
              <th className="p-4 text-left" scope="col">Form Required</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["FD / RD Interest — Bank", "194A", "₹40,000 per bank per FY", "₹50,000 per bank per FY", "10% (20% no PAN)", "15G / 15H"],
              ["FD Interest — Post Office", "194A", "₹40,000 per FY", "₹50,000 per FY", "10%", "15G / 15H"],
              ["FD Interest — Company / NBFC", "194A", "₹5,000 per FY", "₹5,000 per FY", "10%", "15G / 15H"],
              ["Dividend — MF / Stocks", "194 / 194K", "₹5,000 per FY", "₹5,000 per FY", "10%", "15G / 15H"],
              ["NSS / PPF Withdrawal", "194EE", "₹2,500 per FY", "₹2,500 per FY", "10%", "15G (No 15H for 194EE)"],
              ["EPF Withdrawal (< 5 years)", "192A", "₹50,000", "₹50,000", "10%", "15G only"],
              ["LIC / Insurance Maturity", "194DA", "₹1,00,000 per FY", "₹1,00,000 per FY", "5%", "15G / 15H"],
              ["SCSS / MIS — Post Office Interest", "194A", "₹40,000 per FY", "₹50,000 per FY", "10%", "15H (for 60+)"],
            ].map(([income, section, nonSenior, senior, rate, form], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-medium text-gray-700">{income}</td>
                <td className="p-4 text-[#00416a] font-semibold">{section}</td>
                <td className="p-4 text-gray-600">{nonSenior}</td>
                <td className="p-4 text-gray-600">{senior}</td>
                <td className="p-4 font-medium text-red-600">{rate}</td>
                <td className="p-4 text-gray-600 font-medium">{form}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ================= HOW TO FILE ================= */
function HowToFileSection() {
  const steps = [
    {
      title: "1. Eligibility Verification",
      desc: "We calculate your estimated total income for the financial year from all sources — salary/pension, interest from all FDs and savings accounts, rental income, capital gains, and other income. For 15G, we verify total income is below the basic exemption. For 15H, we verify tax on total income is nil after applicable deductions.",
    },
    {
      title: "2. Income Estimation Across All FDs",
      desc: "We compile estimated interest income from all FDs, RDs, savings accounts, and other interest-bearing instruments across all banks and financial institutions. This consolidated estimate goes into Part I of the declaration form.",
    },
    {
      title: "3. Form Preparation (15G or 15H)",
      desc: "We prepare the Form 15G (for individuals below 60 and HUFs) or Form 15H (for senior citizens 60+) with accurate details — PAN, estimated total income, income from the specific payer, and previous year's Form 15G/15H details.",
    },
    {
      title: "4. Submission to All Payers",
      desc: "The completed forms are submitted to each bank branch, post office, company, EPFO, or other payer where income is earned. Many banks now accept online submission through net banking — we guide clients through the process.",
    },
    {
      title: "5. Annual Renewal Reminder",
      desc: "Form 15G/15H validity expires on 31st March every year. We send renewal reminders in March to all clients and assist with fresh declarations for the new financial year before the first interest credit in April.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        How to File Form 15G / 15H — Our Process
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        Taxvio handles the complete Form 15G / 15H process — from eligibility
        check to multi-bank submission and annual renewal:
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

/* ================= ELIGIBILITY CHECKER ================= */
function EligibilityChecker() {
  const [age, setAge] = useState<number | null>(null);
  const [totalIncome, setTotalIncome] = useState<number | null>(null);
  const [taxOnIncome, setTaxOnIncome] = useState<string>("");
  const [result, setResult] = useState<{
    eligible: boolean;
    form: string;
    message: string;
    fee: number;
  } | null>(null);

  const checkEligibility = () => {
    if (age === null || totalIncome === null) return;

    if (age >= 60) {
      if (taxOnIncome === "nil") {
        setResult({
          eligible: true,
          form: "Form 15H",
          message: `You are eligible to file Form 15H as a senior citizen (age ${age}). Your tax on total income is nil, satisfying the key condition. File before interest is credited.`,
          fee: 499,
        });
      } else {
        setResult({
          eligible: false,
          form: "Not Eligible",
          message: `You are a senior citizen (age ${age}) but your tax on total income is not nil. You cannot file Form 15H. TDS will be deducted and you should claim it as a credit while filing your ITR.`,
          fee: 0,
        });
      }
    } else {
      const limit = 250000;
      if (totalIncome <= limit) {
        setResult({
          eligible: true,
          form: "Form 15G",
          message: `You are eligible to file Form 15G. Your estimated total income of ₹${totalIncome.toLocaleString("en-IN")} is within the basic exemption limit of ₹2.5 lakh. File at the start of the financial year.`,
          fee: 499,
        });
      } else {
        setResult({
          eligible: false,
          form: "Not Eligible",
          message: `Your estimated total income of ₹${totalIncome.toLocaleString("en-IN")} exceeds the ₹2.5 lakh basic exemption limit for Form 15G. Filing 15G with this income would be a false declaration under Section 277. Please file your ITR and claim TDS as refund.`,
          fee: 0,
        });
      }
    }
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Quick Eligibility Checker — Am I Eligible for 15G or 15H?
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Answer two quick questions to find out which form you should file:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="Form 15G 15H Eligibility Checker"
      >
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="age-input" className="block font-semibold text-gray-700 mb-2">
              Your Age (as on date)
            </label>
            <input
              id="age-input"
              type="number"
              placeholder="e.g. 58"
              min={18}
              max={100}
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#00416a]"
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="income-input" className="block font-semibold text-gray-700 mb-2">
              Estimated Total Annual Income from All Sources (₹)
            </label>
            <input
              id="income-input"
              type="number"
              placeholder="e.g. 200000"
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#00416a]"
              onChange={(e) => setTotalIncome(Number(e.target.value))}
            />
          </div>
        </div>

        {age !== null && age >= 60 && (
          <div className="mb-4">
            <p className="font-semibold text-gray-700 mb-2">Is Tax on Your Total Income Nil? (after all deductions)</p>
            <div className="flex gap-4">
              {["nil", "not-nil"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setTaxOnIncome(opt)}
                  className={`px-5 py-2 rounded-xl border font-medium transition ${
                    taxOnIncome === opt
                      ? "bg-[#00416a] text-white border-[#00416a]"
                      : "bg-white text-gray-700 border-gray-300 hover:border-[#00416a]"
                  }`}
                  aria-pressed={taxOnIncome === opt}
                >
                  {opt === "nil" ? "Yes — Tax is Nil" : "No — Tax is Payable"}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={checkEligibility}
          className="mt-2 bg-[#00416a] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#002b45] transition"
          aria-label="Check Form 15G 15H eligibility"
        >
          Check Eligibility
        </button>

        {result && (
          <div
            className={`mt-6 p-5 rounded-xl border ${
              result.eligible
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
            aria-live="polite"
          >
            <p className={`text-lg font-bold mb-2 ${result.eligible ? "text-green-700" : "text-red-700"}`}>
              {result.eligible ? `✅ Eligible — ${result.form}` : `❌ ${result.form}`}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">{result.message}</p>
            {result.eligible && (
              <p className="text-[#00416a] font-semibold mt-3 text-sm">
                Filing Fee: ₹{result.fee} per declaration &nbsp;|&nbsp;{" "}
                <Link href="/contact" className="underline">
                  Contact Taxvio to File Now
                </Link>
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    {
      name: "Savitri Devi (Age 67)",
      location: "Khatauli",
      rating: 5,
      text: "My bank was deducting TDS on my FD interest even though I pay no tax. Taxvio filed Form 15H for me and now I get full interest credited. Very helpful for senior citizens.",
    },
    {
      name: "Rakesh Sharma",
      location: "Muzaffarnagar",
      rating: 5,
      text: "I had FDs in 3 banks and TDS was being deducted from all three. Taxvio filed Form 15G in all banks and saved me from the hassle of claiming refund in my ITR.",
    },
    {
      name: "Geeta HUF",
      location: "Meerut",
      rating: 5,
      text: "As an HUF with FD income below the exemption limit, Taxvio filed Form 15G and ensured no TDS deduction. The service was quick and the fee was very reasonable.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Helping Depositors &amp; Senior Citizens Save TDS Across India
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
      q: "What is Form 15G and who should file it?",
      a: "Form 15G is a self-declaration filed by resident individuals below 60 years of age, HUFs, trusts, and AOPs to prevent TDS on interest income (FD, RD, savings), dividends, and certain other income. The declarant certifies that their total income from all sources does not exceed the basic exemption limit (₹2.5L under old regime), and therefore tax on total income is nil.",
    },
    {
      q: "Who should file Form 15H and what is the key condition?",
      a: "Form 15H is exclusively for resident senior citizens aged 60 or above. The only condition is that tax on their total income must be nil — income can exceed the basic exemption limit if deductions (80C, 80D, standard deduction etc.) bring the final tax to zero. This makes 15H more accessible than 15G for senior citizens with pension and rental income.",
    },
    {
      q: "When should I file Form 15G or 15H?",
      a: "File at the very beginning of the financial year — ideally on or before April 1. Banks deduct TDS quarterly or on interest credits — if you file after the first credit, TDS already deducted cannot be reversed. Filing in April ensures full-year TDS prevention. The form must be renewed every year.",
    },
    {
      q: "Do I need to file Form 15G/15H at every bank?",
      a: "Yes. Form 15G / 15H must be submitted separately to every bank branch, post office, company, or institution where interest-generating deposits are held. A single submission to one bank does not cover FDs in other banks. If FDs are in different branches of the same bank, some banks accept a single submission at the home branch — check with your specific bank.",
    },
    {
      q: "What if TDS was already deducted before I submitted Form 15G / 15H?",
      a: "TDS already deducted cannot be reversed by the bank — it must be claimed as a credit while filing your income tax return (ITR). The TDS will appear in your Form 26AS and AIS. When you file ITR, this TDS is adjusted against your total tax liability, and if total tax is nil, the entire TDS amount is refunded by the Income Tax Department.",
    },
    {
      q: "Is it illegal to file Form 15G when I am not eligible?",
      a: "Yes. Filing Form 15G or 15H when your income exceeds the eligibility limit is a false declaration punishable under Section 277 with imprisonment of 3 months to 3 years (up to 7 years if tax evaded exceeds ₹25 lakh) plus fine. The Income Tax Department cross-verifies 15G/15H declarations with ITR data and can detect ineligible filings through AIS mismatch.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions about Form 15G 15H">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — Form 15G &amp; Form 15H
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
            Stop Losing FD Interest to TDS — File 15G / 15H Today
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Don't let banks deduct TDS on interest income you don't owe tax on.
            Taxvio's eligibility check and Form 15G / 15H filing service starts
            at just ₹499. Multi-bank submissions, annual renewal reminders, and
            senior citizen support. Serving Khatauli, Muzaffarnagar, Meerut
            and all of India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email for free eligibility check
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="File Form 15G or 15H with Taxvio"
            >
              File 15G / 15H — ₹499 Onwards
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
            >
              Free Eligibility Check
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}