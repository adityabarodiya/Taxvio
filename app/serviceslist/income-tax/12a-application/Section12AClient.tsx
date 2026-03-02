"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Section 12A / 12AB Registration for Trusts & NGOs",
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
    "Professional Section 12A and 12AB registration services for charitable trusts, NGOs, and Section 8 companies in India. Application in Form 10A / 10AB, income tax exemption for charitable institutions, re-registration, and 80G approval. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Section 12A / 12AB Trust Registration",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "3999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "3999",
      maxPrice: "9999",
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
      name: "What is Section 12A / 12AB registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 12A / 12AB registration is a mandatory income tax registration for charitable and religious trusts, NGOs, and Section 8 companies in India to avail tax exemption on their income. Once registered, income applied for charitable or religious purposes is exempt from income tax under Sections 11 and 12 of the Income Tax Act. Without 12A/12AB registration, the trust's entire income is taxable at the maximum marginal rate.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Section 12A and Section 12AB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 12A was the original registration provision for trusts. The Finance Act 2020 replaced it with Section 12AB — a new, more robust registration system with a mandatory renewal every 5 years. Trusts registered under the old 12A were required to re-register under 12AB. All new registrations and renewals are now under Section 12AB only using Form 10AB.",
      },
    },
    {
      "@type": "Question",
      name: "Who can apply for Section 12AB registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The following entities can apply for Section 12AB registration: public charitable trusts, religious trusts, societies registered under the Societies Registration Act, Section 8 companies (not-for-profit companies), and any institution or fund established for charitable or religious purposes. The entity must be constituted for public benefit — not for private gain.",
      },
    },
    {
      "@type": "Question",
      name: "What form is used to apply for Section 12AB registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 10A is used by trusts and institutions applying for fresh 12AB registration for the first time. Form 10AB is used for renewal of existing 12AB registration (every 5 years) and for provisional 12A/12AB registrations converting to regular registration. Both forms are filed online through the Income Tax e-filing portal.",
      },
    },
    {
      "@type": "Question",
      name: "What is provisional registration under Section 12AB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A newly established trust or NGO that has not yet commenced activities can apply for provisional registration under Section 12AB. Provisional registration is granted for 3 years and allows the trust to avail tax exemption while establishing its charitable activities. Before expiry, the trust must apply for regular 5-year registration using Form 10AB with evidence of actual charitable activities.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a trust does not renew its 12AB registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a trust fails to renew its Section 12AB registration before expiry, it loses its income tax exemption. The trust's entire income for the year in which registration lapsed — including accumulated corpus — becomes taxable at the maximum marginal rate (30%+). This can result in a massive tax liability. Applications for renewal must be filed at least 6 months before the expiry of the current registration.",
      },
    },
  ],
};

export default function Section12AClient() {
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
          aria-label="Section 12A 12AB Registration Hero"
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
                  12A Registration
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Section 12A / 12AB Registration for Trusts & NGOs in India
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Professional Section 12AB registration services for charitable
              trusts, NGOs, societies, and Section 8 companies. Fresh
              registration in Form 10A, renewal in Form 10AB, provisional
              registration, 80G approval, and income tax exemption under
              Sections 11 &amp; 12. Serving Khatauli, Muzaffarnagar and
              pan-India online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="Apply for Section 12AB registration now"
              >
                Apply for 12AB Registration
              </Link>
              <Link
                href="#eligibility"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                Check Eligibility
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ Form 10A / 10AB Filing</span>
              <span>✅ Provisional &amp; Regular Registration</span>
              <span>✅ 5-Year Renewal Support</span>
              <span>✅ 80G Approval Bundled</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Complete Guide to Section 12A / 12AB Registration for Trusts &amp; NGOs
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              Section 12A / 12AB registration under the Income Tax Act, 1961 is
              the <strong>most critical income tax compliance step</strong> for
              any charitable trust, NGO, society, or Section 8 company operating
              in India. Without this registration, the trust's income — donations,
              grants, interest, rental income — is fully taxable at the maximum
              marginal rate of 30%+ regardless of how much is spent for
              charitable purposes.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              With a valid <strong>Section 12AB registration</strong>, income
              applied for charitable or religious purposes is completely exempt
              from income tax under Sections 11 and 12 — as long as at least
              85% of income is applied for the trust's stated objects in the
              same financial year. This exemption effectively means most
              well-run trusts and NGOs pay zero income tax on their donations
              and grants, freeing up more funds for charitable activities.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
              provides end-to-end Section 12AB registration services for
              charitable trusts, religious trusts, NGOs, societies, and Section 8
              companies across Uttar Pradesh and pan-India. Our CA-assisted team
              handles document preparation, Form 10A/10AB filing, Principal
              Commissioner follow-up, and combined 80G approval — ensuring a
              smooth, error-free registration process.
            </p>

            {/* WHAT IS 12AB */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4" id="eligibility">
              What Is Section 12A / 12AB and Why Is It Essential?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Section 12A was the original registration provision for charitable
              and religious trusts under the Income Tax Act. The Finance Act 2020
              overhauled this framework and introduced <strong>Section 12AB</strong> — a
              new, more transparent registration system with mandatory 5-year
              renewals and stricter compliance requirements. All trusts that
              held old 12A registrations were required to re-register under
              12AB. Today, all fresh registrations and renewals are exclusively
              under Section 12AB.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              The exemption available under Section 12AB flows through Sections
              11 and 12 of the Income Tax Act:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Section 11(1)</strong> — Income derived from property
                held under trust for charitable/religious purposes, to the
                extent applied for such purposes in India, is exempt. Up to 15%
                of income can be accumulated without any specific purpose.
              </li>
              <li>
                <strong>Section 11(2)</strong> — Income not applied in the
                current year can be accumulated for up to 5 years for a
                specific purpose, by filing Form 10 before the ITR due date.
              </li>
              <li>
                <strong>Section 11(1A)</strong> — Capital gains on transfer of
                a capital asset held under trust are exempt if the proceeds are
                reinvested in another capital asset used for charitable purposes.
              </li>
              <li>
                <strong>Section 12</strong> — Voluntary contributions (donations)
                received by a trust are treated as income of the trust and
                eligible for the same exemption under Section 11.
              </li>
            </ul>

            {/* WHO CAN APPLY */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Who Can Apply for Section 12AB Registration?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Section 12AB registration is available to entities constituted for
              charitable or religious purposes for public benefit. The following
              can apply:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Public Charitable Trusts</strong> — Trusts registered
                under state trust laws (e.g., UP Public Trust Act) with objects
                like education, medical relief, poverty alleviation, environment
                protection, or advancement of general public utility.
              </li>
              <li>
                <strong>Religious Trusts</strong> — Trusts established for
                religious purposes — temple management, mosque committees,
                gurudwara management, church trusts — for the benefit of the
                public at large.
              </li>
              <li>
                <strong>Societies</strong> — Societies registered under the
                Societies Registration Act, 1860 (or state equivalents) with
                charitable objects — educational societies, welfare societies,
                cultural organisations.
              </li>
              <li>
                <strong>Section 8 Companies</strong> — Not-for-profit companies
                incorporated under Section 8 of the Companies Act, 2013 for
                promotion of commerce, art, science, sports, education,
                research, or charity. Must have a licence from MCA.
              </li>
              <li>
                <strong>NGOs and Voluntary Organisations</strong> — Any
                organisation working for public charitable purposes through
                grants, donations, and volunteer activities.
              </li>
            </ul>
          </article>

          {/* REGISTRATION TYPES TABLE */}
          <RegistrationTypesTable />

          {/* EXEMPTION FRAMEWORK */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Income Tax Exemption Framework Under 12AB — Key Conditions
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Section 12AB registration is not a one-time benefit — it comes
              with ongoing compliance conditions that the trust must fulfil
              every year to retain its tax-exempt status:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>85% Application Rule</strong> — At least 85% of gross
                income must be applied for the charitable or religious purposes
                for which the trust is established, in the same financial year.
                The remaining 15% can be freely accumulated without restriction.
              </li>
              <li>
                <strong>Application in India</strong> — Income must be applied
                in India. Sending funds abroad does not qualify as application
                for exemption purposes, unless specifically approved.
              </li>
              <li>
                <strong>Objects must be charitable</strong> — Activities must
                fall within the definition of "charitable purpose" under Section
                2(15) — relief of the poor, education, yoga, medical relief,
                preservation of environment, preservation of monuments, or
                advancement of general public utility.
              </li>
              <li>
                <strong>No benefit to private individuals</strong> — The trust
                must not apply its income for the benefit of specific individuals
                (including trustees, settlors, or their relatives) as this
                constitutes "deemed application" in violation of the trust deed.
              </li>
              <li>
                <strong>Annual ITR-7 filing mandatory</strong> — Even with zero
                taxable income, registered trusts must file ITR-7 every year.
                Non-filing can lead to cancellation of registration.
              </li>
              <li>
                <strong>Annual accounts audit (Form 10B/10BB)</strong> — Trusts
                with total income exceeding ₹5 lakh (before exemptions) must
                get accounts audited and file Form 10B or 10BB along with ITR-7.
              </li>
            </ul>

            {/* 80G COMBO */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Section 80G Approval — Issued Together With 12AB
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Since the Finance Act 2020, <strong>Section 80G approval
              (allowing donors to claim income tax deduction on donations)
              is now processed and renewed together with Section 12AB
              registration</strong>. Both are applied for simultaneously and
              both are valid for 5 years (or 3 years for provisional). This
              bundled approach has several important implications:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Benefit to donors</strong> — Donors to 80G-approved
                trusts can claim deduction of 50% or 100% of the donated amount
                from their taxable income, subject to 10% of gross total income
                limit for certain categories. This makes the trust more
                attractive for fundraising.
              </li>
              <li>
                <strong>Form 10BD filing</strong> — Trusts with 80G approval
                must file <strong>Form 10BD</strong> (Statement of Donations
                received) annually by 31st May, reporting donor-wise donation
                details including donor PAN. Failure to file Form 10BD attracts
                ₹200/day penalty under Section 234G.
              </li>
              <li>
                <strong>Form 10BE</strong> — Certificate of donation issued to
                each donor, downloaded from TRACES by the trust and issued to
                donors by 31st May — enabling donors to claim the deduction in
                their ITR.
              </li>
              <li>
                <strong>Renewal every 5 years</strong> — Both 12AB and 80G must
                be renewed together every 5 years. Renewal application in Form
                10AB must be filed at least 6 months before expiry.
              </li>
            </ul>

            {/* CONSEQUENCES OF NO REGISTRATION */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Consequences of Operating Without 12AB Registration
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Trusts and NGOs that have not obtained or renewed 12AB
              registration face severe tax consequences:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Full taxation at 30%+</strong> — Without registration,
                the trust's entire income including donations, grants, and
                investment income is taxable at the maximum marginal rate —
                30% + surcharge + cess. This can wipe out a significant portion
                of funds meant for charitable work.
              </li>
              <li>
                <strong>No 80G benefit for donors</strong> — Without 12AB and
                80G approval, donors cannot claim any deduction on donations
                made to the trust. This severely impacts fundraising capability,
                especially from corporate and high-net-worth donors.
              </li>
              <li>
                <strong>Corpus taxation on lapsed registration</strong> — If
                an existing 12AB registration lapses due to non-renewal, the
                entire accumulated corpus of the trust can be brought to tax in
                the year of lapse — potentially resulting in crores of tax
                liability.
              </li>
              <li>
                <strong>FCRA complications</strong> — For trusts receiving
                foreign contributions, FCRA registration and renewal requires
                active 12AB registration. Loss of 12AB can jeopardise the
                entire foreign funding pipeline.
              </li>
              <li>
                <strong>CSR eligibility loss</strong> — Companies looking to
                direct CSR funds to external agencies require those agencies to
                hold valid 12AB registration. Without it, the trust cannot
                receive corporate CSR contributions.
              </li>
            </ul>
          </article>

          {/* WORKFLOW */}
          <WorkflowSection />

          {/* DOCUMENTS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Documents Required for Section 12AB Registration (Form 10A)
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              The following documents must be prepared and uploaded on the
              Income Tax e-filing portal when filing Form 10A for fresh
              registration:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Trust deed / MOA and rules & regulations / Certificate of incorporation (whichever applicable)</li>
              <li>PAN card of the trust / society / Section 8 company</li>
              <li>Registration certificate — trust deed registration / society registration / MCA incorporation certificate</li>
              <li>List of trustees / governing body members with their PAN, Aadhaar, and address</li>
              <li>Activity report of the organisation (if operational) — detailing charitable activities carried out</li>
              <li>Audited financial statements for the last 3 years (if operational) or projected income-expenditure for new trusts</li>
              <li>Details of assets and liabilities of the trust</li>
              <li>Utility bill or other address proof for the registered office</li>
              <li>Self-certified copy of documents establishing that the objects of the trust are charitable in nature</li>
            </ul>

            <p className="mb-3 font-semibold text-gray-700">Additional documents for Form 10AB (Renewal):</p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>Existing 12AB registration certificate</li>
              <li>Audited accounts for all years covered under the current registration</li>
              <li>ITR-7 acknowledgements for all years during the registration period</li>
              <li>Form 10B / 10BB audit reports for all applicable years</li>
              <li>Details of activities conducted under each charitable object — year-wise</li>
              <li>Bank statements showing application of income for charitable purposes</li>
              <li>Annual report of activities (if maintained)</li>
            </ul>
          </article>

          {/* FEE CALCULATOR */}
          <RegistrationFeeCalculator />

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
      className="bg-amber-600 text-white text-center py-3 font-semibold text-sm"
      role="alert"
    >
      ⚠️ 12AB Registration Renewal Due? Apply at Least 6 Months Before Expiry
      — Lapsed Registration = Full Tax on Entire Trust Income. Act Now.
    </div>
  );
}

/* ================= REGISTRATION TYPES TABLE ================= */
function RegistrationTypesTable() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Types of Section 12AB Registration — Form 10A vs Form 10AB
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Under the revised framework effective April 2021, the following
        registration categories exist under Section 12AB:
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Section 12AB Registration Types"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Registration Type</th>
              <th className="p-4 text-left" scope="col">Who Applies</th>
              <th className="p-4 text-left" scope="col">Form</th>
              <th className="p-4 text-left" scope="col">Validity</th>
              <th className="p-4 text-left" scope="col">Processing Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Fresh / New Registration",
                "New trusts with existing activities (operational > 1 year)",
                "Form 10A",
                "5 years",
                "1–3 months",
              ],
              [
                "Provisional Registration",
                "Newly constituted trusts yet to commence activities",
                "Form 10A",
                "3 years",
                "1 month",
              ],
              [
                "Provisional → Regular Conversion",
                "Trusts converting provisional to regular after commencing activities",
                "Form 10AB",
                "5 years",
                "1–3 months",
              ],
              [
                "Renewal of Existing 12AB",
                "Trusts with existing 12AB approaching 5-year expiry",
                "Form 10AB",
                "5 years",
                "1–3 months",
              ],
              [
                "Re-registration (old 12A holders)",
                "Trusts that held old 12A and did not re-register under 12AB",
                "Form 10AB",
                "5 years",
                "1–3 months",
              ],
              [
                "80G Fresh Approval",
                "Trusts applying for donor deduction benefit (applied with 12AB)",
                "Form 10A",
                "5 years (with 12AB)",
                "1–3 months",
              ],
              [
                "80G Renewal",
                "Trusts renewing 80G along with 12AB renewal",
                "Form 10AB",
                "5 years (with 12AB)",
                "1–3 months",
              ],
            ].map(([type, who, form, validity, time], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-medium text-gray-700">{type}</td>
                <td className="p-4 text-gray-600 text-sm">{who}</td>
                <td className="p-4 font-semibold text-[#00416a]">{form}</td>
                <td className="p-4 text-gray-600">{validity}</td>
                <td className="p-4 text-gray-600">{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * Applications are filed online on the Income Tax e-filing portal under
        the trust's PAN login. The Principal Commissioner of Income Tax (PCIT)
        reviews the application and may ask for additional information or
        documents before granting registration. Taxvio handles all portal
        submissions and follow-ups.
      </p>
    </>
  );
}

/* ================= WORKFLOW ================= */
function WorkflowSection() {
  const steps = [
    {
      title: "1. Eligibility & Objects Review",
      desc: "We review the trust deed, MOA, or constitution to confirm the objects are charitable within the meaning of Section 2(15) and that the entity qualifies for 12AB registration. We identify whether fresh or provisional registration applies.",
    },
    {
      title: "2. Document Preparation & Verification",
      desc: "We prepare and verify all required documents — trust deed, registration certificate, trustee list with PAN/Aadhaar, activity report, audited accounts, and address proof — ensuring completeness before filing.",
    },
    {
      title: "3. Form 10A / 10AB Preparation",
      desc: "We prepare the application in Form 10A (fresh registration) or Form 10AB (renewal/conversion), entering all details accurately including trust objects, activities, financial summary, and trustee information.",
    },
    {
      title: "4. Online Filing on Income Tax Portal",
      desc: "The completed Form 10A / 10AB is filed on the Income Tax e-filing portal under the trust's PAN login with all required document attachments. Application reference number is preserved for tracking.",
    },
    {
      title: "5. PCIT Query Response & Follow-Up",
      desc: "The Principal Commissioner may raise queries or request additional documents. We monitor the application status, respond to all PCIT queries promptly, and follow up until the registration order is issued.",
    },
    {
      title: "6. Registration Certificate & Post-Registration Compliance",
      desc: "On grant of registration, we obtain the 12AB and 80G certificate. We then advise on ongoing compliance requirements — annual ITR-7, Form 10BD (donor statement), Form 10BE (donor certificates), Form 10B/10BB audit report, and renewal timeline.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our Section 12AB Registration Process — Step by Step
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        Taxvio manages the complete 12AB registration process from eligibility
        assessment to receipt of the registration certificate:
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
function RegistrationFeeCalculator() {
  const [serviceType, setServiceType] = useState<string>("");
  const [fee, setFee] = useState<number | null>(null);
  const [desc, setDesc] = useState("");

  const services = [
    {
      value: "fresh_provisional",
      label: "Provisional Registration (New Trust)",
      fee: 3999,
      desc: "Form 10A filing for newly established trust — provisional 3-year registration",
    },
    {
      value: "fresh_regular",
      label: "Fresh Regular Registration (Form 10A)",
      fee: 5999,
      desc: "Form 10A for existing operational trust — 5-year regular registration",
    },
    {
      value: "renewal",
      label: "Renewal of 12AB Registration (Form 10AB)",
      fee: 4999,
      desc: "Form 10AB renewal filing before expiry — 5-year renewal with 80G",
    },
    {
      value: "provisional_to_regular",
      label: "Provisional → Regular Conversion",
      fee: 4999,
      desc: "Converting provisional registration to regular 5-year registration",
    },
    {
      value: "old_12a_reregistration",
      label: "Old 12A → 12AB Re-registration",
      fee: 5999,
      desc: "Lapsed old 12A registration — re-registration under new 12AB framework",
    },
    {
      value: "bundle_80g",
      label: "12AB + 80G Bundle (Fresh)",
      fee: 7999,
      desc: "Combined fresh registration — Section 12AB + Section 80G approval",
    },
    {
      value: "bundle_80g_renewal",
      label: "12AB + 80G Bundle (Renewal)",
      fee: 6999,
      desc: "Combined renewal — Section 12AB + Section 80G renewal together",
    },
    {
      value: "compliance_package",
      label: "Annual Trust Compliance Package",
      fee: 9999,
      desc: "ITR-7 + Form 10B audit report + Form 10BD donor statement + Form 10BE certificates",
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
        Estimate Your Section 12AB Registration Fee
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Select the service you need for an instant fee estimate:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="Section 12AB Registration Fee Calculator"
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
              * Government filing fees are nominal (NIL for most 12AB
              applications). Professional fees above are for document
              preparation, form filing, and follow-up. GST extra.
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
      name: "Shri Balaji Charitable Trust",
      location: "Khatauli",
      rating: 5,
      text: "Our new trust needed 12AB registration before we could start receiving donations. Taxvio got us provisional registration within 3 weeks and 80G approval followed shortly. Excellent service.",
    },
    {
      name: "Jan Kalyan Society",
      location: "Muzaffarnagar",
      rating: 5,
      text: "Our old 12A registration had lapsed and we were paying heavy taxes on donations. Taxvio re-registered us under 12AB and recovered our exempt status with backdate benefit wherever applicable.",
    },
    {
      name: "Divya Prakash Education Foundation",
      location: "Meerut",
      rating: 5,
      text: "Taxvio handles our annual Form 10BD filing, ITR-7, and Form 10B audit report. Since registration, our corporate donors have increased significantly because of the 80G deduction facility.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted by Trusts &amp; NGOs Across India
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
      q: "What is Section 12A / 12AB registration and why is it necessary?",
      a: "Section 12AB is mandatory income tax registration for charitable trusts, NGOs, societies, and Section 8 companies to avail tax exemption. Without it, the trust's entire income — donations, grants, interest — is taxable at 30%+. With valid 12AB registration, income applied for charitable purposes is completely exempt under Sections 11 and 12, as long as at least 85% of income is applied for the trust's objects.",
    },
    {
      q: "What is the difference between provisional and regular 12AB registration?",
      a: "Provisional registration (valid for 3 years) is for newly established trusts that have not yet commenced charitable activities. It allows the trust to avail tax exemption while setting up operations. Regular registration (valid for 5 years) is for operational trusts with existing activity records. Provisional registration holders must convert to regular registration by filing Form 10AB before the provisional period expires.",
    },
    {
      q: "What form is used to apply for 12AB registration?",
      a: "Form 10A is used for: (1) fresh regular registration by operational trusts, and (2) provisional registration by newly established trusts. Form 10AB is used for: (1) renewal of existing 12AB registrations before 5-year expiry, (2) conversion of provisional to regular registration, and (3) re-registration by trusts that missed the earlier transition deadline.",
    },
    {
      q: "How long does it take to get 12AB registration approved?",
      a: "Provisional registration is typically granted within 1 month. Regular registration and renewals take 1–3 months depending on the completeness of documents and any queries raised by the Principal Commissioner. The PCIT may seek additional information or conduct inquiries before granting registration. Taxvio tracks the application and responds to all PCIT queries promptly to minimise delays.",
    },
    {
      q: "What happens if my 12AB registration expires and I don't renew?",
      a: "If 12AB registration lapses, the trust immediately loses its income tax exemption. Income for the year in which registration expired — including accumulated corpus — becomes taxable at the maximum marginal rate. Additionally, the trust cannot issue 80G certificates to donors, CSR eligibility is lost, and FCRA foreign contribution receipt may be impacted. Applications must be filed at least 6 months before expiry.",
    },
    {
      q: "Does 12AB registration also cover Section 80G approval for donors?",
      a: "Yes — since Finance Act 2020, Section 80G approval (allowing donors to claim income tax deduction of 50%–100% of donation amount) is processed and renewed together with Section 12AB registration. Both are valid for the same period. Trusts with 80G approval must additionally file Form 10BD (donor statement) by 31st May each year and issue Form 10BE (donation certificates) to donors.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions about 12A 12AB Registration">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — Section 12A / 12AB Registration
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
            Get Your Trust / NGO 12AB Registered &amp; Start Saving Tax
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Protect your trust's income from taxation, attract more donors with
            80G deduction benefits, and stay 100% compliant. Taxvio's
            CA-assisted 12AB registration starts at ₹3,999. Serving Khatauli,
            Muzaffarnagar, Meerut and all of India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email your trust deed for a free eligibility check
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Apply for Section 12AB registration with Taxvio"
            >
              Apply for 12AB — ₹3,999 Onwards
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
      <Footar/>
    </section>
  );
}