// app/serviceslist/roc/llp-to-company-conversion/LlpToCompanyConversionClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LLP to Private Limited Company Conversion Services - Complete MCA Filing & Incorporation",
  provider: {
    "@type": "ProfessionalService",
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
    "Professional conversion of a Limited Liability Partnership (LLP) into a Private Limited Company under Section 366 of the Companies Act, 2013 and the Companies (Authorised to Register) Rules, 2014, including eligibility assessment, name approval, MOA & AOA drafting, Form URC-1 filing, and fresh Certificate of Incorporation. Complete end-to-end assistance for LLPs planning to raise equity funding, issue ESOPs, or move to a corporate structure. Expert MCA filing and post-conversion compliance support, including intimation to the Registrar of LLPs. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "LLP to Private Limited Company Conversion",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "19999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "19999",
      maxPrice: "44999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Form URC-1 and why is it required for LLP to Company conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form URC-1 (Registration of Companies already registered under any other Act) is the statutory form prescribed under the Companies (Authorised to Register) Rules, 2014 for entities such as LLPs, partnership firms, and societies that wish to register as a company under the Companies Act, 2013. For an LLP converting into a Private Limited Company, URC-1 is filed with the Registrar of Companies along with the LLP Agreement, statement of assets and liabilities, list of partners, consent of partners, and other prescribed attachments, alongside the SPICe+ incorporation form. Once approved, the Registrar issues a fresh Certificate of Incorporation for the new company.",
      },
    },
    {
      "@type": "Question",
      name: "Do all partners of the LLP need to consent to the conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YES. As per Rule 3(1) of the Companies (Authorised to Register) Rules, 2014, the conversion requires the consent of a majority of partners representing at least three-fourths (75%) of the total value of the LLP, present in person or by proxy at a general meeting called for this purpose. It is recommended to obtain written consent from all partners wherever possible to avoid disputes, since dissenting partners can raise objections during the mandatory public notice period.",
      },
    },
    {
      "@type": "Question",
      name: "Does the LLP automatically cease to exist after converting into a company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. Once the new Private Limited Company is incorporated, the company is legally required to give notice of the conversion to the Registrar of LLPs within 15 days of the date of registration, in the prescribed form, along with a copy of the Certificate of Incorporation. The LLP's registration under the LLP Act, 2008 is then closed on record. Until this intimation is filed and processed, the LLP may continue to appear as a live entity, so timely filing is essential to avoid continuing compliance obligations or penalties under the LLP Act.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function LlpToCompanyConversionClient() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

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
      <InquiryFormButton />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🚀 Planning to Raise Equity Funding? Convert Your LLP into a Private Limited Company!
        </div>

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link href="/serviceslist" className="hover:text-white transition">
                Services
              </Link>
              <span>/</span>
              <Link
                href="/serviceslist/roc"
                className="hover:text-white transition"
              >
                ROC Services
              </Link>
              <span>/</span>
              <span className="text-white">LLP to Company Conversion</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🔄 Entity Structuring
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  LLP to Private Limited
                  <br />
                  <span className="text-[#7ecbf0]">Company Conversion</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Ready to{" "}
                  <strong className="text-white">
                    raise equity funding, issue ESOPs, or attract institutional
                    investors
                  </strong>
                  ? Convert your{" "}
                  <strong className="text-white">
                    LLP into a Private Limited Company
                  </strong>{" "}
                  under{" "}
                  <strong className="text-white">
                    Section 366 of the Companies Act, 2013
                  </strong>{" "}
                  and the{" "}
                  <strong className="text-white">
                    Companies (Authorised to Register) Rules, 2014
                  </strong>
                  . LLPs cannot issue equity shares or easily onboard VC/PE
                  investors —{" "}
                  <strong className="text-white">
                    a Private Limited Company structure unlocks equity
                    fundraising, share-based incentives, and easier investor
                    due diligence
                  </strong>
                  . <strong className="text-white">Taxvio</strong> handles the
                  complete conversion —{" "}
                  <strong className="text-white">
                    eligibility assessment, name approval, MOA & AOA
                    drafting, Form URC-1 filing, and incorporation certificate
                  </strong>{" "}
                  — so your business is{" "}
                  <strong className="text-white">
                    investment-ready
                  </strong>{" "}
                  in <strong className="text-white">15-20 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Convert Now — ₹19,999 →
                  </Link>
                  <Link
                    href="#process"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    How It Works ↓
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 15-20 Days Conversion",
                    "✅ URC-1 + SPICe+ Filing",
                    "✅ MOA & AOA Drafting",
                    "✅ CA & CS Supported",
                  ].map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Quick Facts
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["🧑‍⚖️", "Min 2 directors required"],
                    ["👥", "Min 2 shareholders (partners)"],
                    ["📜", "Form URC-1 + SPICe+ filing"],
                    ["⏰", "Conversion time: 15-20 days"],
                    ["📰", "21-day public objection window"],
                    ["💼", "Starting fee: ₹19,999"],
                  ].map(([icon, text]) => (
                    <li key={text as string} className="flex items-start gap-3">
                      <span className="text-base">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "120+", label: "LLPs Converted", icon: "🔄" },
              { number: "15-20 Days", label: "Average Timeline", icon: "⏰" },
              { number: "75%", label: "Partner Consent Required", icon: "🗳️" },
              { number: "₹19,999", label: "Starting Fee", icon: "💼" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {s.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ MCA Registered Agents",
              "✔ URC-1 Filing Experts",
              "✔ MOA/AOA Drafting Support",
              "✔ CA & CS Team",
            ].map((t) => (
              <div
                key={t}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* WHAT IS CONVERSION */}
          <section id="what-is-conversion">
            <SectionLabel text="Understanding the Conversion" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is LLP to Private Limited Company Conversion?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>LLP to Private Limited Company Conversion</strong>{" "}
                  is the legal process by which a{" "}
                  <strong>Limited Liability Partnership (LLP)</strong>,
                  registered under the LLP Act, 2008, is re-registered as a{" "}
                  <strong>Private Limited Company</strong> under{" "}
                  <strong>Section 366 of the Companies Act, 2013</strong>,
                  read with the{" "}
                  <strong>
                    Companies (Authorised to Register) Rules, 2014
                  </strong>
                  .
                </p>
                <p>
                  The conversion is carried out by filing{" "}
                  <strong>Form URC-1</strong> with the Registrar of
                  Companies, along with a{" "}
                  <strong>simultaneous SPICe+ incorporation application</strong>
                  , after which the LLP's partners become the company's{" "}
                  <strong>shareholders and directors</strong> and the entity
                  gains the ability to{" "}
                  <strong>
                    issue equity shares, raise funding from investors, and
                    grant Employee Stock Options (ESOPs)
                  </strong>{" "}
                  — none of which an LLP structure permits.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🔄 Key Features of Conversion
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Partners Become Shareholders & Directors",
                        desc: "All partners of the LLP typically become shareholders of the new company in proportion to their capital contribution, and at least 2 of them become the first directors (requiring DIN and DSC).",
                      },
                      {
                        title: "Fresh Certificate of Incorporation",
                        desc: "The new company is issued a fresh Certificate of Incorporation with a new CIN and PAN, distinct from the LLP's LLPIN — it is a new legal entity, not a mere name change.",
                      },
                      {
                        title: "Assets & Liabilities Transfer",
                        desc: "All assets, liabilities, interests, rights, privileges, and obligations of the LLP vest in the new company by operation of law upon conversion under Section 374 of the Companies Act, 2013.",
                      },
                      {
                        title: "Equity Fundraising Enabled",
                        desc: "Unlike an LLP (which can only raise capital via partner contribution or debt), a Private Limited Company can issue equity shares, preference shares, and convertible instruments to investors.",
                      },
                      {
                        title: "Mandatory Public Notice",
                        desc: "The proposed conversion must be advertised in a newspaper (Form URC-2) — one English and one in the vernacular language of the district — inviting objections from creditors and other stakeholders within 21 days.",
                      },
                      {
                        title: "Registrar of LLPs Intimation",
                        desc: "Within 15 days of the new company's incorporation, notice of the conversion must be filed with the Registrar of LLPs to close the LLP's registration and avoid continuing LLP compliance obligations.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-blue-700 text-sm mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    ✅ Eligibility & Requirements (FY 2025-26)
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Before Filing for Conversion
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Consent of Partners:</strong> Majority of
                          partners representing at least 75% in value of the
                          LLP must approve the conversion
                        </li>
                        <li>
                          • <strong>Minimum 2 Directors</strong> from among
                          the partners (with DIN and DSC)
                        </li>
                        <li>
                          • <strong>Minimum 2 Shareholders</strong> (same
                          minimum as any Private Limited Company)
                        </li>
                        <li>
                          • <strong>No Statutory Defaults:</strong> LLP's Form
                          11 and Form 8 filings should be up to date with the
                          Registrar of LLPs
                        </li>
                        <li>
                          • <strong>NOC from Secured Creditors:</strong>{" "}
                          Required if the LLP has any secured loans or charges
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        At the Time of Filing
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Newspaper Advertisement (URC-2):</strong>{" "}
                          Published at least 21 days before filing URC-1,
                          inviting objections
                        </li>
                        <li>
                          • <strong>Statement of Assets & Liabilities:</strong>{" "}
                          Certified by a practicing Chartered Accountant, not
                          older than 6 days from the date of filing
                        </li>
                        <li>
                          • <strong>Form URC-1</strong> filed along with
                          SPICe+ incorporation forms with the ROC
                        </li>
                        <li>
                          • <strong>List of Partners</strong> with their
                          capital contribution and proposed shareholding
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ LLP vs Private Limited Company — Comparison
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Feature</th>
                          <th className="p-2 text-left">LLP</th>
                          <th className="p-2 text-left">Pvt Ltd</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            feature: "Governing Law",
                            llp: "LLP Act, 2008",
                            pvt: "Companies Act, 2013",
                          },
                          {
                            feature: "Ownership Instrument",
                            llp: "Partner contribution",
                            pvt: "Equity shares",
                          },
                          {
                            feature: "Equity Fundraising",
                            llp: "Not possible",
                            pvt: "Fully enabled",
                          },
                          {
                            feature: "ESOP for Employees",
                            llp: "Not possible",
                            pvt: "Fully enabled",
                          },
                          {
                            feature: "Minimum Partners/Shareholders",
                            llp: "2",
                            pvt: "2",
                          },
                          {
                            feature: "Investor Preference",
                            llp: "Low (VC/PE avoid LLPs)",
                            pvt: "High (standard VC/PE vehicle)",
                          },
                          {
                            feature: "Compliance Burden",
                            llp: "Lower",
                            pvt: "Moderate to higher",
                          },
                          {
                            feature: "Statutory Audit",
                            llp: "Only above ₹40L turnover/₹25L contribution",
                            pvt: "Mandatory every year",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.feature}</td>
                            <td className="p-2 text-gray-600">{row.llp}</td>
                            <td className="p-2 text-green-700 font-bold">
                              {row.pvt}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Advantages of Converting to a Company
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Equity Fundraising",
                        desc: "Issue equity or preference shares and convertible instruments to angel investors, VCs, and PE funds — a route LLPs cannot offer.",
                      },
                      {
                        title: "ESOP-Based Hiring",
                        desc: "Grant Employee Stock Options to attract and retain talent, a standard practice for growth-stage companies that LLPs cannot replicate.",
                      },
                      {
                        title: "Investor & Lender Familiarity",
                        desc: "Most institutional investors and many lenders are structured to invest in or lend to companies, not LLPs, simplifying due diligence and documentation.",
                      },
                      {
                        title: "Perpetual Succession with Standard Governance",
                        desc: "Company law provides well-established governance frameworks (Board, shareholders, committees) that scale more predictably than LLP agreements as the business grows.",
                      },
                      {
                        title: "Seamless Continuation of Business",
                        desc: "All assets, contracts, licences (subject to specific approvals), and liabilities of the LLP automatically vest in the new company — operations continue without interruption.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-orange-700 text-sm mb-1">
                          ✓ {item.title}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Disadvantages & Additional Obligations
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Higher Compliance Burden: Mandatory statutory audit every year, Board meetings, AGM, and ROC filings — heavier than LLP's compliance load.",
                      "Loss of LLP Flexibility: LLP agreements allow flexible profit-sharing and management terms; company law imposes more standardized governance.",
                      "Dividend Distribution Tax Treatment: Profit distribution to shareholders (dividends) is taxed differently from LLP partner drawings — consult a tax advisor on the impact.",
                      "New PAN & Banking Setup: The company has a fresh PAN and CIN, requiring new bank accounts, and re-registration of GST, licences, and other approvals in many cases.",
                      "Loss of Unlimited Contract Continuity: Certain contracts, licences, or approvals held by the LLP may require fresh consent or re-assignment to the new company.",
                      "Stamp Duty & Professional Costs: Conversion involves government fees, professional certification (CA/CS), and possible stamp duty on share certificates.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <p className="font-bold text-yellow-800 mb-3">
                    🎯 When to Choose This Conversion?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    LLP to Company conversion is ideal if you want to:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {[
                      "Raise equity funding from angel investors, VCs, or private equity funds",
                      "Offer Employee Stock Options (ESOPs) to attract and retain key talent",
                      "Present a more familiar, investor-friendly legal structure for due diligence",
                      "Prepare for a future acquisition, merger, or eventual stock exchange listing",
                      "Access startup ecosystem benefits and incubator/accelerator programs that prefer company structures",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Not Recommended if:</strong> Your business has no
                    plans to raise equity capital and values the LLP's lower
                    compliance burden and flexible partner agreements. In
                    such cases, remaining an LLP is usually simpler and more
                    cost-effective.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CONVERSION PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              LLP to Private Limited Company Conversion Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete MCA conversion process — from partner consent to the
                fresh Certificate of Incorporation:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Eligibility Assessment & Partner Consent",
                    description:
                      "Review the LLP Agreement, current partner structure, outstanding statutory filings (Form 11, Form 8), and any secured borrowings to confirm the LLP is eligible for conversion. Obtain the consent of partners representing at least 75% in value of the LLP at a meeting called for this purpose, as required under Rule 3(1) of the Companies (Authorised to Register) Rules, 2014. Written consent from all partners is recommended to minimise the risk of objections later.",
                    duration: "2-3 days",
                  },
                  {
                    step: 2,
                    title: "Obtain DSC & DIN for Proposed Directors",
                    description:
                      "Identify at least 2 partners who will become the first directors of the new company and obtain their Digital Signature Certificate (DSC) and Director Identification Number (DIN), if not already held. Documents required: PAN, Aadhaar, passport-size photograph, email ID, mobile number, and address proof.",
                    duration: "3-5 days",
                  },
                  {
                    step: 3,
                    title: "Name Reservation via RUN / SPICe+ Part A",
                    description:
                      "Apply for name approval of the proposed Private Limited Company via the RUN service or SPICe+ Part A on the MCA portal. The name must be unique and end with 'Private Limited'. It is common (though not mandatory) to retain a name similar to the LLP for brand continuity, subject to availability. Up to 2 proposed names can be submitted in order of preference.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "Publish Newspaper Advertisement (Form URC-2)",
                    description:
                      "Publish a notice of the proposed conversion in Form URC-2 — in one English newspaper and one newspaper in the principal vernacular language of the district where the LLP's registered office is situated — at least 21 days before the date of filing Form URC-1. The advertisement invites objections, if any, from creditors and other stakeholders within this 21-day window.",
                    duration: "21 days (statutory notice period)",
                  },
                  {
                    step: 5,
                    title: "Obtain NOC from Secured Creditors (If Applicable)",
                    description:
                      "If the LLP has availed secured loans or created charges on its assets, a No Objection Certificate (NOC) must be obtained from all secured creditors consenting to the proposed conversion. This NOC is filed as an attachment with Form URC-1.",
                    duration: "5-10 days (if applicable)",
                  },
                  {
                    step: 6,
                    title: "Prepare Statement of Assets & Liabilities",
                    description:
                      "A statement of assets and liabilities of the LLP, certified by a practicing Chartered Accountant, must be prepared and must NOT be older than 6 days from the date of filing Form URC-1. This statement forms the basis on which assets and liabilities vest in the new company upon conversion.",
                    duration: "2-4 days",
                  },
                  {
                    step: 7,
                    title: "Drafting of MOA & AOA for the New Company",
                    description:
                      "The Memorandum of Association (MOA) and Articles of Association (AOA) of the new Private Limited Company are drafted, defining the company's objects, authorized capital, shareholding structure (mirroring or restructuring the partners' capital contribution as agreed), and internal governance rules. These are filed as attachments to the SPICe+ incorporation application.",
                    duration: "3-5 days",
                  },
                  {
                    step: 8,
                    title: "Filing of Form URC-1 with SPICe+ Incorporation",
                    description:
                      "Form URC-1 is filed with the jurisdictional Registrar of Companies, simultaneously with the SPICe+ (INC-32) incorporation application. Attachments include: LLP Agreement and any supplementary agreements, list of partners with their particulars and shareholding, statement of assets & liabilities (CA-certified), copy of the newspaper advertisement, NOC from secured creditors (if any), consent of partners, undertaking regarding compliance with the LLP Act obligations up to the date of conversion, and the LLP's PAN and Certificate of Registration. MOA & AOA, and details of proposed directors, are filed with SPICe+.",
                    duration: "5-7 days to prepare & file",
                  },
                  {
                    step: 9,
                    title: "ROC Scrutiny & Processing",
                    description:
                      "The Registrar of Companies examines the URC-1 and SPICe+ applications for compliance with Section 366 and the Companies (Authorised to Register) Rules, 2014. Queries, if any, must be responded to promptly — Taxvio ensures the filing is complete and accurate to minimise back-and-forth with the ROC.",
                    duration: "7-10 days (ROC processing)",
                  },
                  {
                    step: 10,
                    title: "Fresh Certificate of Incorporation Issued",
                    description:
                      "On approval, the ROC issues a fresh Certificate of Incorporation for the new Private Limited Company, along with a new CIN. PAN and TAN are auto-generated as part of the SPICe+ process. This is the legal proof that the LLP has been successfully converted into a company, and all assets, liabilities, and obligations of the LLP now vest in the new company by operation of law.",
                    duration: "Same day as ROC approval",
                  },
                  {
                    step: 11,
                    title: "Intimation to Registrar of LLPs (Within 15 Days)",
                    description:
                      "The new company must give notice of the conversion to the Registrar of LLPs within 15 days of the date of registration, along with a copy of the Certificate of Incorporation, so that the LLP's registration is closed on record. Missing this step can leave the LLP appearing as a live entity, attracting continuing compliance obligations and penalties under the LLP Act, 2008.",
                    duration: "Within 15 days of incorporation",
                  },
                  {
                    step: 12,
                    title: "Post-Conversion Asset, Bank & Registration Transfer",
                    description:
                      "Following incorporation: (1) Open a new current bank account in the company's name and transfer balances from the LLP's account, (2) migrate or re-apply for GST registration, Shops & Establishment licence, and other regulatory approvals in the company's name, (3) update contracts, vendor/customer agreements, and statutory registers to reflect the new entity, (4) update PAN-linked records (Income Tax, TDS) and inform key stakeholders of the change. Taxvio provides a post-conversion compliance checklist to guide this transition.",
                    duration: "Within 15-30 days of COI",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-green-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-green-300 rounded-2xl p-6">
                <p className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Total Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>15-20 working days</strong> from partner consent to
                  the fresh Certificate of Incorporation, assuming the
                  mandatory 21-day newspaper advertisement window is run in
                  parallel with DSC/DIN procurement, name reservation, and
                  MOA/AOA drafting. Breakdown: eligibility & consent (2-3
                  days) + DSC/DIN (3-5 days) + name reservation (2-3 days) +
                  newspaper advertisement (21 days, parallel) + URC-1 & SPICe+
                  filing (5-7 days) + ROC processing (7-10 days).{" "}
                  <strong>Within 15 days of incorporation:</strong> intimation
                  to the Registrar of LLPs to close the LLP's registration.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for LLP to Company Conversion
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Partners / Proposed Directors
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN Card (mandatory)",
                    "Aadhaar Card (identity + address)",
                    "Passport-size photograph (recent)",
                    "DSC & DIN (for proposed directors, if not already held)",
                    "Bank statement or utility bill (<2 months — address proof)",
                    "Written consent to the conversion",
                    "Consent to act as director (Form DIR-2, for proposed directors)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-gray-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-gray-100 text-gray-700">
                  For the LLP
                </p>
                <ul className="space-y-3">
                  {[
                    "LLP Agreement (and any supplementary agreements)",
                    "Certificate of Incorporation of the LLP",
                    "LLP's PAN card",
                    "Latest Form 11 (Annual Return) filed with Registrar of LLPs",
                    "Latest Form 8 (Statement of Accounts & Solvency) filed",
                    "List of partners with capital contribution and proposed shareholding",
                    "Financial statements (latest audited/unaudited, as applicable)",
                    "Income Tax Returns filed by the LLP",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-gray-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-purple-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-purple-100 text-purple-700">
                  Conversion-Specific Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Statement of assets & liabilities certified by a CA (not older than 6 days from filing)",
                    "Copy of the published newspaper advertisement (Form URC-2)",
                    "NOC from secured creditors (if the LLP has secured loans/charges)",
                    "Partner consent / minutes of the meeting approving conversion",
                    "Undertaking regarding compliance with LLP Act obligations till the date of conversion",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-purple-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-orange-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-orange-100 text-orange-700">
                  For the New Company
                </p>
                <ul className="space-y-3">
                  {[
                    "Proposed company name options (with 'Private Limited' suffix)",
                    "Drafted MOA & AOA",
                    "Registered office address proof (rent agreement/sale deed + utility bill)",
                    "NOC from property owner (if rented)",
                    "Proposed authorized & paid-up capital structure",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-orange-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <p className="font-bold text-blue-800 mb-3">
                📝 Additional Information Required
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Reason for conversion (equity fundraising, ESOPs, investor requirement, etc.)",
                  "Current partner capital contribution ratio",
                  "Proposed shareholding pattern for the new company",
                  "Details of any secured lenders whose consent may be required",
                  "Existing GST, licences, and registrations to be migrated post-conversion",
                  "Target date for completing the newspaper advertisement and filings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Critical Errors to Avoid" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Mistakes in LLP to Company Conversion
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Conversion under Section 366 has strict procedural
                requirements — avoid these critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Not Obtaining 75% Partner Consent",
                    icon: "🗳️",
                    problem:
                      "Proceeding with conversion without formally obtaining consent from partners representing at least 75% in value of the LLP. This is a mandatory precondition under Rule 3(1) of the Companies (Authorised to Register) Rules, 2014 — proceeding without it can invalidate the entire conversion application.",
                    solution:
                      "Convene a formal meeting of partners, record the resolution approving conversion, and obtain written consent from partners representing at least 75% in value (ideally, consent from all partners to avoid future disputes). File this consent as part of the URC-1 attachments. Taxvio prepares the consent documentation to meet ROC requirements.",
                  },
                  {
                    mistake: "Skipping or Rushing the Newspaper Advertisement",
                    icon: "📰",
                    problem:
                      "Filing Form URC-1 without publishing the mandatory Form URC-2 advertisement, or filing before the full 21-day objection window has elapsed. This is a common ground for ROC queries or rejection since it is a mandatory public notice requirement.",
                    solution:
                      "Publish the advertisement in one English and one vernacular newspaper covering the LLP's registered office district, and wait the FULL 21 days before filing URC-1. Retain the original newspaper cuttings/copies as proof for the filing. Taxvio coordinates the advertisement publication and timeline tracking.",
                  },
                  {
                    mistake: "Overlooking NOC from Secured Creditors",
                    icon: "🏦",
                    problem:
                      "Failing to obtain a No Objection Certificate from lenders or creditors holding a charge on the LLP's assets before filing for conversion. This can result in the ROC rejecting the application, or in future disputes over asset ownership post-conversion.",
                    solution:
                      "Identify all secured borrowings and charges registered against the LLP, and obtain written NOC from each secured creditor before filing URC-1. If no secured borrowings exist, a declaration to that effect should be filed instead. Taxvio verifies charge registrations with the Registrar of LLPs before filing.",
                  },
                  {
                    mistake: "Filing with an Outdated Assets & Liabilities Statement",
                    icon: "📊",
                    problem:
                      "Using a statement of assets and liabilities that is older than the prescribed 6-day window from the date of URC-1 filing. An outdated statement is a common technical defect that leads to ROC queries and refiling.",
                    solution:
                      "Get the statement certified by a practicing Chartered Accountant as close as possible to the actual filing date, and file URC-1 promptly thereafter to stay within the 6-day limit. Taxvio coordinates timing between the CA certification and the filing date.",
                  },
                  {
                    mistake: "Forgetting to Intimate the Registrar of LLPs",
                    icon: "📋",
                    problem:
                      "After the new company is incorporated, failing to notify the Registrar of LLPs about the conversion within 15 days. The LLP continues to appear as a registered, live entity in MCA records, which can attract continuing LLP Act compliance obligations (Form 11, Form 8) and penalties for non-filing even though the business has moved to the new company.",
                    solution:
                      "File the required intimation with the Registrar of LLPs within 15 days of receiving the fresh Certificate of Incorporation, attaching a copy of the certificate. Set a reminder immediately upon incorporation to avoid missing this deadline. Taxvio handles this intimation as part of the standard conversion service.",
                  },
                  {
                    mistake: "Not Migrating GST, Bank Accounts & Contracts",
                    icon: "🔁",
                    problem:
                      "Continuing to operate using the LLP's GST registration, bank accounts, or contracts after the new company is incorporated. Since the company has a new PAN and CIN, invoices, GST filings, and banking transactions under the old LLP details can create reconciliation and compliance mismatches.",
                    solution:
                      "Promptly open a new bank account in the company's name, apply for GST registration (or amend/migrate as applicable) under the company's PAN, and formally novate or reassign key contracts to the new entity. Taxvio provides a post-conversion migration checklist to guide this transition.",
                  },
                ].map((item) => (
                  <div
                    key={item.mistake}
                    className="bg-white rounded-2xl p-6 border border-red-200"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-3xl">{item.icon}</div>
                      <h3 className="font-bold text-red-700 text-lg">
                        {item.mistake}
                      </h3>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-3">
                      <p className="font-bold text-red-600 text-xs mb-2">
                        ⚠️ Problem
                      </p>
                      <p className="text-xs text-gray-700">{item.problem}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <p className="font-bold text-green-700 text-xs mb-2">
                        ✅ Solution
                      </p>
                      <p className="text-xs text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="Our Packages" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              LLP to Company Conversion Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive conversion and compliance packages for growing
              LLPs:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹19,999",
                  popular: false,
                  features: [
                    "Eligibility assessment & partner consent documentation",
                    "DSC & DIN for 2 proposed directors",
                    "Name approval (RUN/SPICe+ Part A)",
                    "MOA & AOA drafting",
                    "Form URC-1 filing along with SPICe+ incorporation",
                    "Certificate of Incorporation (converted company)",
                    "PAN & TAN application",
                    "Email & phone support",
                  ],
                  limitations: [
                    "Newspaper advertisement charges not included",
                    "No NOC/creditor coordination support",
                    "No post-conversion migration support",
                    "No Registrar of LLPs intimation included",
                  ],
                  ideal:
                    "LLPs with no secured loans and straightforward 2-partner structures",
                },
                {
                  name: "Standard",
                  price: "₹29,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "Newspaper advertisement (URC-2) coordination",
                    "Statement of assets & liabilities coordination with CA",
                    "NOC from secured creditors coordination (if applicable)",
                    "Intimation to Registrar of LLPs (Form filing within 15 days)",
                    "Statutory register setup for the new company",
                    "Priority support (WhatsApp + email)",
                  ],
                  limitations: [
                    "Bank account/GST migration offered as add-on",
                  ],
                  ideal:
                    "Most LLPs converting to a company for the first time",
                },
                {
                  name: "Complete",
                  price: "₹44,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Asset & liability transfer documentation",
                    "Bank account transfer/opening coordination",
                    "GST and other licence migration support",
                    "Contract novation guidance for key agreements",
                    "First year annual compliance (MGT-7, AOC-4, statutory audit coordination) included",
                    "Dedicated CA + CS team with post-conversion review",
                  ],
                  limitations: [],
                  ideal:
                    "LLPs wanting full handholding from consent through to post-conversion migration",
                },
              ].map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative border-2 rounded-3xl p-8 ${
                    pkg.popular
                      ? "border-[#00416a] shadow-2xl scale-105"
                      : "border-gray-200 shadow-lg"
                  } bg-white`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00416a] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#00416a] mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-4xl font-extrabold text-gray-800 mb-1">
                      {pkg.price}
                    </p>
                    <p className="text-sm text-gray-500">One-time fee</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">
                      Included Services
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-green-600 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.limitations.length > 0 && (
                    <div className="mb-6 bg-gray-50 rounded-xl p-4">
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                        Not Included
                      </p>
                      <ul className="space-y-1">
                        {pkg.limitations.map((limit) => (
                          <li
                            key={limit}
                            className="flex items-start gap-2 text-xs text-gray-500"
                          >
                            <span className="text-red-400 mt-0.5">✗</span>
                            {limit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6 bg-blue-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-blue-700 mb-1">
                      Ideal For
                    </p>
                    <p className="text-xs text-gray-600">{pkg.ideal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-xl font-bold transition ${
                      pkg.popular
                        ? "bg-[#00416a] text-white hover:bg-[#002b45]"
                        : "bg-gray-100 text-[#00416a] hover:bg-gray-200"
                    }`}
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
              <p className="font-bold text-purple-800 mb-4">
                💼 Add-On Services (Optional)
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    service: "Additional Director (DSC + DIN)",
                    price: "₹2,500/director",
                    desc: "For companies needing more than 2 initial directors",
                  },
                  {
                    service: "Newspaper Advertisement Publication",
                    price: "At actuals (₹1,500-3,000)",
                    desc: "English + vernacular newspaper publication charges",
                  },
                  {
                    service: "GST Migration / Fresh Registration",
                    price: "₹2,999",
                    desc: "Migrate or newly register GST under the company's PAN",
                  },
                  {
                    service: "LLP Closure (Form 24 Filing)",
                    price: "₹5,999",
                    desc: "If the LLP requires formal strike-off assistance",
                  },
                  {
                    service: "Annual Compliance Package",
                    price: "₹34,999/year",
                    desc: "MGT-7, AOC-4, statutory audit, ITR, Board & AGM support",
                  },
                  {
                    service: "Share Certificate Printing",
                    price: "₹3,999",
                    desc: "Stamped share certificates for all shareholders",
                  },
                ].map((addon) => (
                  <div
                    key={addon.service}
                    className="bg-white rounded-xl p-4 border border-purple-200"
                  >
                    <p className="font-bold text-purple-700 text-sm mb-1">
                      {addon.service}
                    </p>
                    <p className="text-2xl font-extrabold text-[#00416a] mb-2">
                      {addon.price}
                    </p>
                    <p className="text-xs text-gray-600">{addon.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Success Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Vikram Chauhan, Partner",
                  company: "Novatech Solutions Private Limited",
                  location: "Meerut, UP",
                  text: "We ran our software services business as an LLP for 3 years, but our lead investor wanted a company structure before closing the round. Taxvio handled the URC-1 filing, newspaper advertisement, and SPICe+ incorporation in about 18 days. They also made sure our Registrar of LLPs intimation was filed on time. Smooth experience end to end.",
                },
                {
                  name: "Simran Kaur, Co-Founder",
                  company: "Bloomline Foods Private Limited",
                  location: "Noida, UP",
                  text: "We wanted to start offering ESOPs to our early team but couldn't as an LLP. Taxvio's Standard package guided us through partner consent, the CA-certified assets statement, and creditor NOC — everything was filed correctly the first time with no ROC queries. Highly recommend for founders planning to raise funding.",
                },
                {
                  name: "Deepak Malhotra, Managing Partner",
                  company: "Crestwood Logistics Private Limited",
                  location: "Ghaziabad, UP",
                  text: "Our LLP had a bank loan with a registered charge, so we were worried about the NOC requirement. Taxvio coordinated with our lender and got the NOC sorted, then completed the entire conversion in under 20 days. Post-conversion, they even helped migrate our GST registration to the new company. Great professional support.",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-[#00416a]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Service Locations" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              LLP to Company Conversion Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong>{" "}
              and provides online LLP to Private Limited Company conversion
              services for growing partnership businesses across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote handling with
              doorstep DSC delivery, MOA/AOA drafting, and MCA filing.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Meerut",
                "Noida",
                "Delhi NCR",
                "Mumbai",
                "Pune",
                "Ahmedabad",
                "Surat",
                "Ghaziabad",
                "Gurgaon",
                "Lucknow",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default"
                >
                  📍 {city}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* RELATED SERVICES */}
          <section id="related-services">
            <SectionLabel text="Related Services" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Other ROC & Entity Structuring Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Private to Public Conversion",
                  icon: "🏢",
                  link: "/serviceslist/roc/company-conversion-private-to-public",
                  desc: "Convert Private Ltd to Public Ltd company",
                },
                {
                  title: "Nidhi Company Registration",
                  icon: "🏦",
                  link: "/serviceslist/roc/nidhi-company-registration",
                  desc: "Mutual benefit society incorporation",
                },
                {
                  title: "NBFC Registration",
                  icon: "🏛️",
                  link: "/serviceslist/roc/nbfc-registration",
                  desc: "RBI-registered NBFC incorporation",
                },
                {
                  title: "Annual ROC Filing",
                  icon: "📊",
                  link: "/serviceslist/roc/annual-filing",
                  desc: "MGT-7, AOC-4 and other ROC compliance",
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                  <span className="text-sm text-[#00416a] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Prepare for Equity Fundraising
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Convert Your LLP — Unlock Equity Capital & ESOPs
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get eligibility assessment, name approval, MOA & AOA
                    drafting, Form URC-1 filing, and your fresh incorporation
                    certificate handled end-to-end. We also manage the
                    mandatory newspaper advertisement and Registrar of LLPs
                    intimation. Starting ₹19,999 with expert CA & CS team.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Convert Now — ₹19,999
                  </Link>
                  <Link
                    href="#our-services"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    View Packages
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footar />


      </main>
    </>
  );
}

/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can any LLP convert into a Private Limited Company?",
      a: "Most LLPs can convert, but eligibility depends on a few factors: the LLP must obtain consent from partners representing at least 75% in value, should have no unresolved statutory defaults (Form 11/Form 8 filings up to date with the Registrar of LLPs), and must be able to satisfy the minimum 2-director and 2-shareholder requirement of a Private Limited Company (which most LLPs, having at least 2 partners, already meet). If the LLP has secured creditors, their NOC is also required. Taxvio conducts an eligibility assessment as the first step of the conversion process.",
    },
    {
      q: "What happens to the LLP's existing contracts and licences after conversion?",
      a: "Under Section 374 of the Companies Act, 2013, all assets, liabilities, interests, rights, privileges, and obligations of the LLP vest in the new company by operation of law upon conversion — so most contracts and obligations carry over. However, since the company has a new PAN and CIN, certain licences, registrations (like GST), and specific contracts that reference the LLP's LLPIN may need to be re-registered, migrated, or formally novated to the new company's name. Taxvio provides a post-conversion checklist covering these updates.",
    },
    {
      q: "How is share allocation decided for partners becoming shareholders?",
      a: "There is no single mandatory formula — the most common approach is to allot shares to each partner in proportion to their existing capital contribution and profit-sharing ratio in the LLP, as agreed among the partners and reflected in the new company's MOA and the subscriber details filed with SPICe+. Partners are free to agree on a different allocation (for example, to accommodate a new co-founder or adjust for sweat equity) as long as all partners consent to the arrangement before filing.",
    },
    {
      q: "What is the timeline for LLP to Private Limited Company conversion?",
      a: "The complete process typically takes 15-20 working days from obtaining partner consent to receiving the fresh Certificate of Incorporation, assuming the mandatory 21-day newspaper advertisement notice period runs in parallel with DSC/DIN procurement, name reservation, and MOA/AOA drafting. An additional 15 days is required post-incorporation to file the intimation with the Registrar of LLPs. Delays commonly arise from missing partner consent documentation, pending secured creditor NOCs, or an outdated assets & liabilities statement — all of which Taxvio helps you avoid.",
    },
    {
      q: "Are there tax implications when converting an LLP into a company?",
      a: "A conversion carried out strictly in accordance with Section 366-374 of the Companies Act, 2013 and satisfying the conditions prescribed under the Income Tax Act (such as all assets/liabilities becoming those of the company, all shareholders of the company being the erstwhile partners in the same proportion, and no other consideration being received by the partners) is generally intended to be tax-neutral for capital gains purposes. However, tax treatment can vary based on the specific facts of each conversion, so it is advisable to consult a tax professional to confirm applicability to your situation before proceeding. Taxvio's CA team can review this as part of the engagement.",
    },
    {
      q: "Do we need to close the LLP separately after the company is incorporated?",
      a: "You do not need to file a separate LLP closure (Form 24) application in the normal course — instead, the company must give notice of the conversion to the Registrar of LLPs within 15 days of incorporation (attaching the new Certificate of Incorporation), after which the LLP's registration is closed on record as part of the conversion process itself. A separate Form 24 strike-off filing is generally only needed in specific situations, such as delays or discrepancies in the intimation process — Taxvio can advise if this applies to your case.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — LLP to Company Conversion
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group border rounded-2xl overflow-hidden"
            open={open === i}
            onToggle={(e) =>
              setOpen((e.target as HTMLDetailsElement).open ? i : null)
            }
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{f.q}</span>
              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─── SHARED ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}