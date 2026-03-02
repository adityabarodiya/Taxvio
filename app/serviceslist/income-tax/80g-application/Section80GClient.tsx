"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Section 80G Approval for Trusts & NGOs",
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
    "Professional Section 80G approval services for charitable trusts, NGOs, and Section 8 companies in India. Form 10A / 10AB filing, donor deduction eligibility, Form 10BD donor statement, Form 10BE donor certificates, and 5-year renewal. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Section 80G Approval for Charitable Organisations",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "3999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "3999",
      maxPrice: "8999",
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
      name: "What is Section 80G approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 80G of the Income Tax Act allows donors to claim a deduction on donations made to approved charitable institutions and funds. When a trust or NGO obtains 80G approval from the Income Tax Department, its donors can deduct 50% or 100% of the donated amount from their taxable income, subject to applicable limits. This makes the organisation more attractive for fundraising from individuals, corporates, and CSR donors.",
      },
    },
    {
      "@type": "Question",
      name: "Who can apply for Section 80G approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Charitable trusts, NGOs, societies, and Section 8 companies that hold a valid Section 12AB registration can apply for 80G approval. Since the Finance Act 2020, both 12AB registration and 80G approval are processed together and are valid for the same period — 5 years for regular and 3 years for provisional.",
      },
    },
    {
      "@type": "Question",
      name: "What is the deduction rate under Section 80G?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The deduction rate depends on the category of fund or institution. Donations to funds like PM Relief Fund, National Defence Fund, and certain government-approved funds qualify for 100% deduction without any limit. Donations to general 80G-approved trusts and NGOs qualify for 50% deduction, subject to a limit of 10% of the donor's adjusted gross total income.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 10BD and why is it mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 10BD is the Statement of Donations received, which every 80G-approved trust must file annually by 31st May on the Income Tax portal. It reports donor-wise details including donor name, PAN or Aadhaar, address, donation amount, and donation date. Failure to file Form 10BD attracts a penalty of ₹200 per day under Section 234G. Without Form 10BD filing, donors cannot claim the 80G deduction in their ITR.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 10BE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 10BE is the Certificate of Donation issued by the trust to each donor. It is generated from the TRACES portal based on Form 10BD data and must be issued to donors by 31st May of the assessment year. Donors must quote the reference number on Form 10BE while claiming 80G deduction in their income tax return. Without Form 10BE, the donor's deduction claim may be rejected.",
      },
    },
    {
      "@type": "Question",
      name: "How often does 80G approval need to be renewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 80G approval must be renewed every 5 years along with Section 12AB registration renewal. Since both are processed together, a single Form 10AB application handles renewal of both. The application must be filed at least 6 months before expiry. Failure to renew results in loss of 80G status, preventing donors from claiming deductions.",
      },
    },
  ],
};

export default function Section80GClient() {
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
          aria-label="Section 80G Approval Hero"
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
                  80G Approval
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Section 80G Approval for Trusts &amp; NGOs in India
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Professional Section 80G approval services for charitable trusts,
              NGOs, societies, and Section 8 companies. Form 10A / 10AB filing,
              donor deduction eligibility (50%/100%), Form 10BD annual donor
              statement, Form 10BE donor certificates, and 5-year renewal.
              Serving Khatauli, Muzaffarnagar and pan-India online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="Apply for Section 80G approval now"
              >
                Apply for 80G Approval
              </Link>
              <Link
                href="#deduction-table"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                View Deduction Rates
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ Form 10A / 10AB 80G Filing</span>
              <span>✅ 50% / 100% Donor Deduction</span>
              <span>✅ Form 10BD Annual Filing</span>
              <span>✅ Form 10BE Donor Certificates</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Complete Guide to Section 80G Approval for Trusts &amp; NGOs
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              Section 80G of the Income Tax Act, 1961 is a powerful fundraising
              tool for charitable organisations in India. When a trust, NGO, or
              Section 8 company obtains <strong>Section 80G approval</strong>{" "}
              from the Principal Commissioner of Income Tax (PCIT), its donors
              — individuals, HUFs, firms, and companies — become eligible to
              claim a deduction of <strong>50% or 100% of the donated
              amount</strong> from their taxable income. This tax benefit makes
              donating to your organisation significantly more attractive,
              especially for corporate donors directing CSR funds and high-net-worth
              individuals making large charitable contributions.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              Prior to the Finance Act 2020, 80G approvals were granted
              indefinitely once obtained. The new framework — effective from
              April 2021 — introduced <strong>periodic renewal every 5
              years</strong> and bundled 80G approval with Section 12AB
              registration. This means a trust can now obtain both income tax
              exemption (12AB) and donor deduction eligibility (80G) through a
              single application, with both valid for the same period. The
              bundled system also introduced new annual compliance obligations
              — <strong>Form 10BD</strong> (donor statement) and{" "}
              <strong>Form 10BE</strong> (donor certificates) — that trusts must
              complete every year to maintain donor deduction eligibility.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
              provides end-to-end Section 80G approval services — fresh
              applications, renewals, annual Form 10BD filing, Form 10BE
              generation, and complete post-approval compliance. Our CA-assisted
              team ensures your organisation is always 80G compliant, so your
              donors can always claim their deductions without issues.
            </p>

            {/* WHO NEEDS 80G */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Who Should Obtain Section 80G Approval — and Why
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Every charitable trust and NGO that raises funds from donors should
              obtain 80G approval. Here is why it is essential for fundraising
              success:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Individual donors</strong> — Salaried employees and
                business owners who donate to 80G-approved organisations can
                claim deduction in their ITR, effectively reducing their net
                cost of donation by 15%–30% depending on their tax bracket.
                This makes them far more willing to donate.
              </li>
              <li>
                <strong>Corporate donors &amp; CSR</strong> — Companies
                directing CSR funds under Section 135 of the Companies Act to
                external agencies require those agencies to hold valid 80G
                approval. Without 80G, corporates cannot route CSR to your
                organisation through the standard CSR deduction path.
              </li>
              <li>
                <strong>HUFs and partnership firms</strong> — HUFs, partnership
                firms, and LLPs making donations to charitable causes can also
                claim 80G deductions — but only if the recipient organisation
                has valid approval.
              </li>
              <li>
                <strong>Institutional funding</strong> — Many domestic
                foundations and grant-making institutions require recipient
                NGOs to hold both 12AB and 80G approval as a prerequisite for
                funding applications.
              </li>
              <li>
                <strong>Foreign funding (FCRA)</strong> — While FCRA
                registration governs receipt of foreign contributions, domestic
                80G approval enhances credibility with international grant
                bodies and their Indian counterparts.
              </li>
            </ul>

            {/* ELIGIBILITY */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Eligibility Conditions for Section 80G Approval
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              The following conditions must be satisfied for an organisation to
              obtain and maintain 80G approval:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Valid Section 12AB registration</strong> — The
                organisation must hold a valid 12AB registration. Since 80G
                approval is now bundled with 12AB, it is applied for
                simultaneously. An organisation without 12AB cannot obtain 80G.
              </li>
              <li>
                <strong>Charitable objects only</strong> — The organisation
                must be established solely for charitable purposes. Organisations
                with objects that benefit specific religious communities or
                castes do not qualify for 80G (though they may qualify for
                12AB).
              </li>
              <li>
                <strong>No income applied for non-charitable purposes</strong> — Income
                of the organisation must not be applied for the benefit of
                particular religious communities or castes. General religious
                trusts serving all communities may qualify.
              </li>
              <li>
                <strong>Regular books of accounts maintained</strong> — The
                organisation must maintain proper books of accounts, get them
                audited (Form 10B/10BB), and file ITR-7 annually.
              </li>
              <li>
                <strong>No business income</strong> — If the organisation has
                business income, it must maintain a separate account for such
                income and ensure it is not applied for non-charitable purposes.
                Business income is allowed but must not constitute the primary
                activity.
              </li>
              <li>
                <strong>No violation of any condition</strong> — Violations of
                the trust deed, improper application of income, or failure to
                file annual compliances can lead to cancellation of 80G approval
                by the PCIT.
              </li>
            </ul>
          </article>

          {/* DEDUCTION RATES TABLE */}
          <DeductionRatesTable />

          {/* FORM 10BD / 10BE SECTION */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Form 10BD &amp; Form 10BE — Annual Compliance for 80G Trusts
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Since FY 2021-22, every trust with 80G approval must complete two
              new annual compliance steps. Failure to comply prevents donors
              from claiming their 80G deduction and attracts heavy penalties:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border rounded-xl p-6 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-[#00416a] mb-3">
                  Form 10BD — Statement of Donations
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
                  <li>Filed annually by the trust on the Income Tax portal</li>
                  <li>Due date: <strong>31st May</strong> of the assessment year</li>
                  <li>Reports donor-wise details: name, PAN/Aadhaar, address, donation amount, mode of donation, and date</li>
                  <li>Covers all donations received during the financial year</li>
                  <li>Late filing penalty: <strong>₹200 per day</strong> under Section 234G — no upper cap</li>
                  <li>Without Form 10BD, donor's 80G claim will be rejected by the IT Department</li>
                </ul>
              </div>

              <div className="border rounded-xl p-6 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-[#00416a] mb-3">
                  Form 10BE — Certificate of Donation
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
                  <li>Issued by the trust to each donor based on Form 10BD data</li>
                  <li>Downloaded from the <strong>TRACES portal</strong> by the trust</li>
                  <li>Must be issued to donors by <strong>31st May</strong></li>
                  <li>Contains unique reference number that donor must quote in their ITR</li>
                  <li>Replaces the old manual receipt-based system — donors must have Form 10BE to claim deduction</li>
                  <li>Failure to issue Form 10BE makes donor's 80G deduction unclaimable</li>
                </ul>
              </div>
            </div>

            <p className="mb-10 leading-relaxed text-gray-700">
              The introduction of Form 10BD and 10BE has made 80G compliance
              significantly more demanding for trusts. Every donation received
              must be tracked donor-wise, PAN/Aadhaar collected, and reported
              in Form 10BD by 31st May — even if only one donation was received
              during the year. Taxvio manages this compliance for trust clients
              as part of our annual trust compliance package.
            </p>

            {/* 80G VS 12A */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Section 80G vs Section 12AB — Key Difference
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Many trustees confuse 12AB and 80G — they serve different
              purposes and benefit different parties:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Section 12AB</strong> — Exempts the{" "}
                <strong>trust's own income</strong> from income tax. The trust
                pays no tax (or minimal tax) on income applied for charitable
                purposes. Primary beneficiary: the trust itself.
              </li>
              <li>
                <strong>Section 80G</strong> — Allows{" "}
                <strong>donors to the trust</strong> to claim income tax
                deductions on their donations. Primary beneficiary: donors to
                the trust. The trust itself does not pay less tax due to 80G.
              </li>
              <li>
                <strong>Both are needed</strong> — A trust ideally needs both
                12AB (to protect its own income) and 80G (to attract more
                donors). Since both are now processed together, applying
                simultaneously is standard practice.
              </li>
            </ul>

            {/* PENALTY & CANCELLATION */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Consequences of Non-Compliance for 80G-Approved Trusts
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Maintaining 80G compliance is an ongoing obligation. Non-compliance
              has serious consequences for both the trust and its donors:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Section 234G — Form 10BD late filing penalty</strong> — ₹200
                per day from the due date (31st May) until the actual filing
                date. Unlike most income tax penalties, Section 234G has{" "}
                <strong>no maximum cap</strong> — a 100-day delay means ₹20,000
                penalty. A full year delay means ₹73,000.
              </li>
              <li>
                <strong>Donor deduction rejected</strong> — If Form 10BD is not
                filed or is filed with incorrect donor PAN, the donor's 80G
                deduction claim is automatically rejected during ITR processing.
                This causes donor complaints and reputational damage to the
                trust.
              </li>
              <li>
                <strong>Cancellation of 80G approval by PCIT</strong> — The
                Principal Commissioner can cancel 80G approval if the trust
                violates its objects, applies income for non-charitable purposes,
                fails to file ITR-7, or fails to maintain required books of
                accounts.
              </li>
              <li>
                <strong>Loss of CSR eligibility</strong> — Companies route CSR
                funds to external agencies with valid 80G. Cancellation or
                lapse of 80G removes the trust from the list of eligible CSR
                recipients.
              </li>
              <li>
                <strong>Renewal lapse — loss of donor deduction prospectively</strong> — If
                renewal is not filed at least 6 months before expiry, the 80G
                approval lapses. All donations received after lapse date are
                ineligible for donor deduction — seriously impacting fundraising.
              </li>
            </ul>
          </article>

          {/* WORKFLOW */}
          <WorkflowSection />

          {/* DOCUMENTS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Documents Required for Section 80G Approval (Form 10A)
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Since 80G is applied together with 12AB, most documents are
              common. The following are specifically required for 80G approval:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Trust deed / MOA / Constitution with charitable objects clearly stated (no caste/community-specific objects)</li>
              <li>PAN of the trust and valid Section 12AB registration certificate (existing or applied simultaneously)</li>
              <li>Audited financial statements for the last 3 years (if operational)</li>
              <li>Details of activities conducted with evidence — beneficiary details, programme reports, photographs</li>
              <li>Confirmation that no income applied for benefit of specific religious community or caste</li>
              <li>Declaration that the trust does not have any business income, or if it does, that a separate account is maintained</li>
              <li>List of trustees/governing body members with PAN, Aadhaar, and declaration of non-applicability of disqualification</li>
              <li>Bank account statements of the trust showing donation receipts and charitable expenditure</li>
            </ul>

            <p className="mb-3 font-semibold text-gray-700">For Annual Compliance (Form 10BD):</p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>Complete donor register for the financial year — name, PAN/Aadhaar, address, amount, date, mode</li>
              <li>Bank statements showing donation credits</li>
              <li>Donation receipts issued to donors (manual receipts being replaced by Form 10BE)</li>
              <li>TRACES login credentials of the trust for Form 10BE download</li>
            </ul>
          </article>

          {/* CALCULATOR */}
          <ApprovalFeeCalculator />

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
  const [daysTo10BD, setDaysTo10BD] = useState<number | null>(null);

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    // Form 10BD due 31st May each year
    let due = new Date(`May 31, ${currentYear}`);
    if (due.getTime() < today.getTime()) {
      due = new Date(`May 31, ${currentYear + 1}`);
    }
    setDaysTo10BD(
      Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    );
  }, []);

  return (
    <div
      className="bg-amber-600 text-white text-center py-3 font-semibold text-sm"
      role="alert"
      aria-live="polite"
    >
      ⚠️ Form 10BD (Donor Statement) Due 31st May —{" "}
      {daysTo10BD !== null ? `${daysTo10BD} Days Left` : "Act Now"} &nbsp;|&nbsp;
      Late Filing: ₹200/Day Penalty Under Section 234G (No Upper Limit)
    </div>
  );
}

/* ================= DEDUCTION RATES TABLE ================= */
function DeductionRatesTable() {
  return (
    <section id="deduction-table" aria-label="Section 80G Deduction Rates">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Section 80G Deduction Rates — Category-Wise Guide
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Section 80G deductions are categorised into four groups based on the
        nature of the recipient fund or institution. The deduction rate and
        qualifying limit differ for each category:
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Section 80G Deduction Categories and Rates"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Category</th>
              <th className="p-4 text-left" scope="col">Examples</th>
              <th className="p-4 text-left" scope="col">Deduction Rate</th>
              <th className="p-4 text-left" scope="col">Qualifying Limit</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "100% deduction — No qualifying limit",
                "PM National Relief Fund, PM Cares Fund, National Defence Fund, National Foundation for Communal Harmony, Clean Ganga Fund",
                "100%",
                "No limit — full donation deductible",
              ],
              [
                "50% deduction — No qualifying limit",
                "PM Drought Relief Fund, Jawaharlal Nehru Memorial Fund, Indira Gandhi Memorial Trust, Rajiv Gandhi Foundation",
                "50%",
                "No limit — 50% of full donation deductible",
              ],
              [
                "100% deduction — With qualifying limit",
                "Donations to approved local authority, government, or institution for family planning, notified temples, mosques, etc.",
                "100%",
                "10% of adjusted gross total income",
              ],
              [
                "50% deduction — With qualifying limit",
                "Most 80G-approved charitable trusts, NGOs, societies, and Section 8 companies (the most common category)",
                "50%",
                "10% of adjusted gross total income",
              ],
            ].map(([category, examples, rate, limit], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-medium text-gray-700">{category}</td>
                <td className="p-4 text-gray-600 text-sm">{examples}</td>
                <td className="p-4 font-semibold text-[#00416a] text-lg">{rate}</td>
                <td className="p-4 text-gray-600">{limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-16">
        <h3 className="font-semibold text-[#00416a] mb-2">
          Important: How the Qualifying Limit Works
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          For donations with a qualifying limit, the maximum deductible amount
          is the <strong>lower of</strong>: (a) 50% of donation amount, or (b)
          10% of adjusted gross total income (AGTI). AGTI = Gross Total Income
          − all deductions under Chapter VI-A (except 80G) − long-term capital
          gains. For example: if a donor's AGTI is ₹10 lakh and they donate
          ₹3 lakh to a standard 80G trust, the deductible amount is 50% of ₹3L
          = ₹1.5L — which is within the 10% of ₹10L = ₹1L limit. So actual
          deduction is ₹1L (the lower figure). Excess donations in Category 3
          &amp; 4 cannot be carried forward to next year.
        </p>
      </div>
    </section>
  );
}

/* ================= WORKFLOW ================= */
function WorkflowSection() {
  const steps = [
    {
      title: "1. Eligibility Check & 12AB Status Verification",
      desc: "We verify that your trust holds valid 12AB registration (or is applying simultaneously) and that the trust's objects are purely charitable — without caste or community-specific restrictions that disqualify 80G eligibility.",
    },
    {
      title: "2. Document Preparation",
      desc: "We prepare all required documents — trust deed, activity report, audited accounts, trustee details, and declarations regarding non-application of income for community-specific purposes.",
    },
    {
      title: "3. Form 10A / 10AB Filing (80G Application)",
      desc: "We file Form 10A (fresh) or Form 10AB (renewal) on the Income Tax portal with 80G details included alongside the 12AB application. Both applications are filed simultaneously for efficiency.",
    },
    {
      title: "4. PCIT Query Response",
      desc: "The Principal Commissioner may raise queries regarding the charitable nature of activities or request additional evidence. We prepare detailed responses with supporting documentation to facilitate approval.",
    },
    {
      title: "5. 80G Certificate Obtainment",
      desc: "On approval, we obtain the 80G certificate with the trust's unique registration number that donors cite in their ITRs. The certificate is valid for 5 years alongside the 12AB registration.",
    },
    {
      title: "6. Annual Form 10BD & Form 10BE Compliance",
      desc: "Each year, we file Form 10BD (donor statement) by 31st May, download Form 10BE certificates from TRACES, and issue them to donors — ensuring every donor can claim their 80G deduction without issues.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our Section 80G Approval &amp; Compliance Process
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        Taxvio manages the complete 80G lifecycle — from initial application to
        annual Form 10BD filing and renewal — so your donors can always claim
        their deductions and your organisation stays fully compliant:
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
function ApprovalFeeCalculator() {
  const [serviceType, setServiceType] = useState<string>("");
  const [fee, setFee] = useState<number | null>(null);
  const [desc, setDesc] = useState("");

  const services = [
    {
      value: "fresh_80g_with_12ab",
      label: "80G Fresh Approval (with 12AB)",
      fee: 3999,
      desc: "80G approval applied simultaneously with 12AB fresh registration — Form 10A",
    },
    {
      value: "standalone_80g",
      label: "Standalone 80G Application",
      fee: 2999,
      desc: "80G application for trust already holding valid 12AB registration",
    },
    {
      value: "renewal_80g_with_12ab",
      label: "80G Renewal (with 12AB Renewal)",
      fee: 4999,
      desc: "Combined 80G + 12AB renewal before 5-year expiry — Form 10AB",
    },
    {
      value: "form_10bd",
      label: "Annual Form 10BD Filing",
      fee: 1999,
      desc: "Donor statement filing by 31st May — up to 50 donors",
    },
    {
      value: "form_10bd_large",
      label: "Annual Form 10BD (50+ Donors)",
      fee: 3499,
      desc: "Donor statement filing — 50 to 500 donors with data validation",
    },
    {
      value: "form_10be",
      label: "Form 10BE Generation & Issuance",
      fee: 999,
      desc: "TRACES download and issuance of donation certificates to donors",
    },
    {
      value: "annual_compliance",
      label: "Annual 80G Compliance Package",
      fee: 5999,
      desc: "ITR-7 + Form 10B + Form 10BD + Form 10BE — complete annual compliance",
    },
    {
      value: "bundle_all",
      label: "Full Bundle: 12AB + 80G + Annual",
      fee: 8999,
      desc: "Fresh 12AB + 80G application + first year annual compliance package",
    },
  ];

  const handleSelect = (s: typeof services[0]) => {
    setServiceType(s.value);
    setFee(s.fee);
    setDesc(s.desc);
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Estimate Your Section 80G Approval &amp; Compliance Fee
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Select the service you need for an instant fee estimate:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="Section 80G Fee Calculator"
      >
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {services.map((s) => (
            <button
              key={s.value}
              onClick={() => handleSelect(s)}
              className={`text-left p-4 rounded-xl border transition text-sm ${
                serviceType === s.value
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#00416a]"
              }`}
              aria-pressed={serviceType === s.value}
            >
              <span className="font-semibold block mb-1">{s.label}</span>
              <span
                className={`text-xs ${
                  serviceType === s.value ? "text-gray-200" : "text-gray-500"
                }`}
              >
                ₹{s.fee.toLocaleString("en-IN")}
              </span>
            </button>
          ))}
        </div>

        {fee !== null ? (
          <div className="border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Fee:{" "}
              <span className="text-2xl">₹{fee.toLocaleString("en-IN")}</span>{" "}
              onwards
            </p>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>
            <p className="text-sm text-gray-400 mt-2">
              * Government fees for 80G application are NIL. Professional fees
              above are for document preparation, portal filing, PCIT follow-up,
              and compliance support. GST extra as applicable.
            </p>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            Select a service above to see an estimated fee.
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
      name: "Aastha Charitable Trust",
      location: "Khatauli",
      rating: 5,
      text: "Taxvio got us 80G approval along with 12AB in one application. Our corporate donors immediately increased their contributions because they could now claim the tax deduction.",
    },
    {
      name: "Udaan NGO",
      location: "Muzaffarnagar",
      rating: 5,
      text: "We were struggling with Form 10BD filing — didn't know how to collect PAN from all donors. Taxvio set up our donor tracking system and filed Form 10BD before the May deadline.",
    },
    {
      name: "Gyan Prakash Society",
      location: "Meerut",
      rating: 5,
      text: "Our 80G had lapsed due to non-renewal. Taxvio re-applied within weeks and our donors got their deduction certificates for the current year. Outstanding service and quick turnaround.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted for 80G Compliance by NGOs Across India
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
      q: "What is Section 80G and how does it benefit donors?",
      a: "Section 80G allows donors to claim income tax deductions on donations made to approved charitable organisations. Depending on the category of the organisation, donors can deduct 50% or 100% of the donated amount from their taxable income (subject to 10% of adjusted gross total income limit for most NGOs). This reduces the effective cost of donation for the donor — for example, a 30% tax-bracket donor donating ₹1 lakh to a 50% deduction NGO effectively saves ₹15,000 in tax.",
    },
    {
      q: "Can a trust apply for 80G without 12AB registration?",
      a: "No. Section 80G approval requires valid Section 12AB registration as a prerequisite. Since the Finance Act 2020, both 12AB and 80G are processed together and are valid for the same period. A trust without 12AB cannot obtain 80G. Taxvio files both applications simultaneously to minimise delays and ensure coordinated approval.",
    },
    {
      q: "What is Form 10BD and what happens if it is not filed?",
      a: "Form 10BD is the annual statement of donations received, which every 80G-approved trust must file by 31st May on the Income Tax portal. It reports donor-wise details including name, PAN, donation amount, and mode. If not filed, donors cannot claim their 80G deduction in their ITR — causing donor dissatisfaction. The trust also faces ₹200/day penalty under Section 234G with no maximum cap.",
    },
    {
      q: "What is Form 10BE and who issues it?",
      a: "Form 10BE is the certificate of donation issued by the trust to each donor. It is generated from the TRACES portal by the trust after filing Form 10BD and must be issued to donors by 31st May. Donors must quote the unique reference number on Form 10BE while claiming the 80G deduction in their ITR. Without Form 10BE, the deduction claim will be rejected during ITR processing.",
    },
    {
      q: "How often does 80G approval need to be renewed?",
      a: "80G approval is valid for 5 years (or 3 years for provisional). It must be renewed along with 12AB registration by filing Form 10AB at least 6 months before expiry. Failure to renew results in loss of 80G status — all donations received after lapse date become ineligible for donor deduction, severely impacting fundraising.",
    },
    {
      q: "Can donors claim 80G deduction on cash donations?",
      a: "No. As per Section 80G(5D), donations of ₹2,000 or more made in cash are not eligible for 80G deduction. Only donations made by cheque, demand draft, net banking, UPI, or other digital modes qualify. Trusts should advise donors to make all donations above ₹2,000 through banking channels to ensure 80G deductibility.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions about Section 80G">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — Section 80G Approval &amp; Compliance
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
            Get 80G Approval &amp; Attract More Donors to Your Trust
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Enable your donors to claim 50% tax deduction on contributions,
            unlock CSR funding, and stay compliant with Form 10BD &amp; 10BE.
            Taxvio's CA-assisted 80G service starts at ₹2,999. Serving
            Khatauli, Muzaffarnagar, Meerut and all of India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email your trust deed for a free 80G eligibility check
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Apply for 80G approval with Taxvio"
            >
              Apply for 80G — ₹2,999 Onwards
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
            >
              Free 80G Eligibility Check
            </Link>
          </div>
        </div>
      </div>
      <Footar/>
    </section>
  );
}