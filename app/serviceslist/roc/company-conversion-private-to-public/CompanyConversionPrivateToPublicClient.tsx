// app/serviceslist/roc/company-conversion-private-to-public/CompanyConversionPrivateToPublicClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Private to Public Company Conversion Services - MOA/AOA Alteration & MCA Filing",
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
    "Professional conversion of Private Limited Company into Public Limited Company under Section 14 and Section 18 of the Companies Act, 2013, including eligibility and structure review, alteration of MOA & AOA, Special Resolution drafting, MGT-14 filing, INC-27 conversion filing, minimum 7 shareholders and 3 directors compliance, and fresh Certificate of Incorporation. Complete end-to-end assistance for growing private companies planning to raise public funds, list on stock exchanges, or expand shareholder base. Expert CA & CS support with post-conversion compliance updates. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "Private to Public Company Conversion",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "14999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "14999",
      maxPrice: "39999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a Private Limited Company and a Public Limited Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Private Limited Company restricts the right to transfer shares, limits members to 200, and prohibits any invitation to the public to subscribe for shares or debentures, and requires minimum 2 directors and 2 shareholders. A Public Limited Company has NO restriction on share transferability, NO cap on the number of members, CAN invite the public to subscribe to shares/debentures (including via stock exchange listing), and requires minimum 3 directors and 7 shareholders. Public companies also face higher compliance — such as possible requirement of independent directors, a Company Secretary once paid-up capital crosses prescribed limits, and greater disclosure norms — but gain access to wider capital-raising options and enhanced market credibility.",
      },
    },
    {
      "@type": "Question",
      name: "What is the process to convert a Private Company into a Public Company in 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The conversion process under Section 14 and Section 18 of the Companies Act, 2013 (FY 2025-26) involves: (1) Board Meeting to approve the conversion proposal, (2) increasing directors to minimum 3 and shareholders to minimum 7 if currently below these thresholds, (3) drafting altered MOA (name clause dropping 'Private') and altered AOA (removing private company restriction clauses), (4) convening an Extraordinary General Meeting (EGM) and passing a Special Resolution with at least 75% majority, (5) filing Form MGT-14 with the Registrar of Companies (ROC) within 30 days of passing the resolution, (6) filing Form INC-27 (application for conversion) along with the altered MOA & AOA, list of members, and list of directors, (7) ROC scrutiny of the application, and (8) issue of a fresh Certificate of Incorporation reflecting the company's new status as a Public Limited Company. TOTAL TIMELINE: Typically 20-25 working days from document submission, subject to ROC processing time.",
      },
    },
    {
      "@type": "Question",
      name: "Is Company Secretary appointment mandatory immediately after conversion to Public Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. Company Secretary (CS) appointment becomes mandatory under Section 203 of the Companies Act, 2013 read with applicable rules once the company's paid-up share capital reaches the prescribed threshold (currently ₹10 crore or more for listed and certain classes of public companies, and lower thresholds may apply for specific categories). A newly converted Public Company with modest paid-up capital may not need a whole-time CS immediately, but engaging a part-time CS or a CS firm is strongly recommended given the heightened ROC compliance (MGT-7, AOC-4, event-based filings, board and general meeting formalities) that comes with public company status.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function CompanyConversionPrivateToPublicClient() {
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

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🏢 Planning to Raise Public Funds? Convert Your Private Company to a Public Limited Company!
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
              <span className="text-white">Private to Public Conversion</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏢 Corporate Restructuring
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Private to Public
                  <br />
                  <span className="text-[#7ecbf0]">Company Conversion</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Ready to{" "}
                  <strong className="text-white">
                    raise public funds, widen your shareholder base, or move
                    toward a stock exchange listing
                  </strong>
                  ? Convert your{" "}
                  <strong className="text-white">
                    Private Limited Company into a Public Limited Company
                  </strong>{" "}
                  under{" "}
                  <strong className="text-white">
                    Section 14 & Section 18 of the Companies Act, 2013
                  </strong>
                  . Public companies face{" "}
                  <strong className="text-white">
                    no cap on members and no restriction on share
                    transferability
                  </strong>
                  , and can{" "}
                  <strong className="text-white">
                    invite the public to subscribe to shares and debentures
                  </strong>
                  . <strong className="text-white">Taxvio</strong> handles the
                  complete conversion —{" "}
                  <strong className="text-white">
                    eligibility & structure review, MOA & AOA alteration,
                    Special Resolution drafting, MGT-14 filing, and INC-27
                    conversion filing
                  </strong>{" "}
                  — so your company emerges compliant and{" "}
                  <strong className="text-white">
                    ready to scale capital
                  </strong>{" "}
                  in <strong className="text-white">20-25 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Convert Now — ₹14,999 →
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
                    "✅ 20-25 Days Conversion",
                    "✅ MOA & AOA Alteration",
                    "✅ MGT-14 & INC-27 Filing",
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
                    ["🧑‍⚖️", "Min 3 directors (from 2)"],
                    ["👥", "Min 7 shareholders (from 2)"],
                    ["📜", "MOA & AOA alteration required"],
                    ["⏰", "Conversion time: 20-25 days"],
                    ["📊", "MGT-14 + INC-27 filing"],
                    ["💼", "Starting fee: ₹14,999"],
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
              { number: "100+", label: "Conversions Completed", icon: "🏢" },
              { number: "20-25 Days", label: "Average Timeline", icon: "⏰" },
              { number: "7 Members", label: "Minimum Required", icon: "👥" },
              { number: "₹14,999", label: "Starting Fee", icon: "💼" },
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
              "✔ MOA/AOA Drafting Experts",
              "✔ Special Resolution Support",
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
              What Is Private to Public Company Conversion?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Private to Public Company Conversion</strong> is the
                  legal process by which a company registered as a{" "}
                  <strong>Private Limited Company</strong> changes its status
                  to a <strong>Public Limited Company</strong> under{" "}
                  <strong>Section 14 and Section 18 of the Companies Act, 2013</strong>
                  , read with the applicable Companies (Incorporation) Rules,
                  2014.
                </p>
                <p>
                  The conversion is achieved by{" "}
                  <strong>
                    altering the company's Memorandum of Association (MOA)
                    and Articles of Association (AOA)
                  </strong>{" "}
                  to remove the restrictive clauses that define a private
                  company — namely, the cap on the number of members, the
                  restriction on transferability of shares, and the
                  prohibition on inviting the public to subscribe to
                  securities.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🏢 Key Features of Conversion
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Name Change",
                        desc: "The word 'Private' is dropped from the company name. Example: 'ABC Private Limited' becomes 'ABC Limited'. This is reflected in the altered MOA and the fresh Certificate of Incorporation.",
                      },
                      {
                        title: "No Cap on Members",
                        desc: "A private company is capped at 200 members. A public company has NO upper limit on the number of shareholders, enabling wider capital participation.",
                      },
                      {
                        title: "Free Transferability of Shares",
                        desc: "Private companies restrict share transfer via AOA. Public companies must remove this restriction — shares become freely transferable, a precondition for any future stock exchange listing.",
                      },
                      {
                        title: "Right to Invite the Public",
                        desc: "Public companies CAN invite the general public to subscribe to shares or debentures (subject to SEBI regulations if listed). Private companies are prohibited from doing so.",
                      },
                      {
                        title: "Minimum Directors & Shareholders",
                        desc: "Minimum directors increase from 2 to 3. Minimum shareholders increase from 2 to 7. These thresholds must be met before or as part of the conversion filing.",
                      },
                      {
                        title: "Special Resolution Requirement",
                        desc: "Conversion requires approval of members by a SPECIAL RESOLUTION (75% majority) passed at a duly convened General Meeting — a simple Board resolution alone is not sufficient.",
                      },
                      {
                        title: "Fresh Certificate of Incorporation",
                        desc: "On approval, the Registrar of Companies (ROC) issues a fresh Certificate of Incorporation reflecting the company's new name and status as a Public Limited Company. The CIN also changes to reflect the public company category.",
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
                          • <strong>Minimum 3 Directors</strong> (appoint
                          additional director(s) if the company currently has
                          only 2)
                        </li>
                        <li>
                          • <strong>Minimum 7 Shareholders</strong> (allot or
                          transfer shares to new subscribers if currently
                          fewer than 7)
                        </li>
                        <li>
                          • <strong>Board Resolution</strong> approving the
                          proposal to convert and calling the EGM
                        </li>
                        <li>
                          • <strong>Altered MOA</strong> (name and other
                          clauses updated for public company status)
                        </li>
                        <li>
                          • <strong>Altered AOA</strong> (private company
                          restriction clauses removed)
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        At the Time of Filing
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Special Resolution</strong> passed at EGM
                          with at least 75% majority of members present and
                          voting
                        </li>
                        <li>
                          • <strong>Form MGT-14</strong> filed with ROC within
                          30 days of passing the Special Resolution
                        </li>
                        <li>
                          • <strong>Form INC-27</strong> filed with ROC along
                          with altered MOA, AOA, list of members and list of
                          directors
                        </li>
                        <li>
                          • <strong>No pending statutory defaults</strong>{" "}
                          (annual filings, ROC dues) that could delay ROC
                          approval
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ Private Company vs Public Company — Comparison
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Feature</th>
                          <th className="p-2 text-left">Private Ltd</th>
                          <th className="p-2 text-left">Public Ltd</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            feature: "Minimum Directors",
                            pvt: "2",
                            pub: "3",
                          },
                          {
                            feature: "Minimum Members",
                            pvt: "2",
                            pub: "7",
                          },
                          {
                            feature: "Maximum Members",
                            pvt: "200",
                            pub: "No limit",
                          },
                          {
                            feature: "Share Transferability",
                            pvt: "Restricted",
                            pub: "Free",
                          },
                          {
                            feature: "Invite Public to Subscribe",
                            pvt: "Prohibited",
                            pub: "Allowed",
                          },
                          {
                            feature: "Name Suffix",
                            pvt: "Private Limited",
                            pub: "Limited",
                          },
                          {
                            feature: "Compliance Burden",
                            pvt: "Lower",
                            pub: "Higher",
                          },
                          {
                            feature: "Stock Exchange Listing",
                            pvt: "Not eligible",
                            pub: "Eligible (post IPO norms)",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.feature}</td>
                            <td className="p-2 text-gray-600">{row.pvt}</td>
                            <td className="p-2 text-green-700 font-bold">
                              {row.pub}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Advantages of Converting to Public Company
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Wider Access to Capital",
                        desc: "No cap on the number of shareholders and freedom to invite public subscription enables much larger fundraising rounds than a private company can pursue.",
                      },
                      {
                        title: "Path to Stock Exchange Listing",
                        desc: "Public company status is a precondition for a future IPO or listing on stock exchanges — a route not available to private companies.",
                      },
                      {
                        title: "Enhanced Credibility",
                        desc: "Public company status often signals scale and governance maturity to lenders, institutional investors, and larger business partners.",
                      },
                      {
                        title: "Free Share Transferability",
                        desc: "Shareholders can freely buy and sell shares without needing board approval, improving liquidity for early investors and employees holding ESOPs.",
                      },
                      {
                        title: "Easier Employee Stock Options at Scale",
                        desc: "Broader shareholder base and transferable shares make large-scale ESOP pools more practical to administer.",
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
                      "Higher Compliance Burden: More board meetings, stricter disclosure norms, and closer ROC scrutiny than a private company.",
                      "Loss of Certain Private Company Exemptions: Several relaxations available to private companies (e.g., related-party transaction ease, simplified board processes) no longer apply.",
                      "Possible Independent Director Requirement: Depending on paid-up capital, turnover, or borrowings, independent directors may become mandatory.",
                      "Company Secretary May Become Mandatory: Once paid-up capital crosses the prescribed threshold, a whole-time CS must be appointed.",
                      "Minimum Shareholder Requirement: Must maintain at least 7 shareholders at all times — reverting below this risks non-compliance.",
                      "Public Scrutiny: Financial statements and shareholding become more widely accessible, reducing the privacy private companies enjoy.",
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
                    Conversion to Public Limited is ideal if you want to:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {[
                      "Raise significant capital from a large number of investors",
                      "Prepare the company for a future stock exchange listing or IPO",
                      "Remove restrictions on transferability of shares for investors and employees",
                      "Expand beyond the 200-member cap that applies to private companies",
                      "Improve the company's market credibility for large contracts, tenders, or institutional lending",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Not Recommended if:</strong> Your company values
                    tight ownership control, prefers lighter compliance, or
                    has no near-term plans to raise public capital. In such
                    cases, remaining a Private Limited Company is usually
                    simpler and more cost-effective.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CONVERSION PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Private to Public Company Conversion Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete MCA conversion process — from Board approval to the
                fresh Certificate of Incorporation:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Board Meeting — Approval of Conversion Proposal",
                    description:
                      "The Board of Directors convenes a meeting to approve the proposal to convert the company from Private Limited to Public Limited. The Board also approves the draft altered MOA and AOA, fixes the date, time and venue for the Extraordinary General Meeting (EGM), and approves the notice to be issued to members. Minutes of the Board Meeting are recorded and Form MGT-14 preparation begins for the resolution.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Increase Directors to Minimum 3 (If Required)",
                    description:
                      "A Public Limited Company requires a minimum of 3 directors (versus 2 for Private Limited). If the company currently has only 2 directors, an additional director must be appointed via Board resolution and, where the appointee is new to the company, DIN and DSC must be obtained. Consent to act as director (Form DIR-2) and disclosure of interest are collected from the new appointee.",
                    duration: "2-4 days (if new director needed)",
                  },
                  {
                    step: 3,
                    title: "Increase Shareholders to Minimum 7 (If Required)",
                    description:
                      "A Public Limited Company requires a minimum of 7 shareholders (versus 2 for Private Limited). If the company currently has fewer than 7 members, additional shares must be allotted to new subscribers, or existing shareholders must transfer part of their holding, so that at least 7 distinct members are on record before the conversion is completed. KYC (PAN, Aadhaar, address proof) is collected for every new shareholder.",
                    duration: "3-5 days (if new shareholders needed)",
                  },
                  {
                    step: 4,
                    title: "Drafting of Altered MOA (Name & Other Clauses)",
                    description:
                      "The Memorandum of Association is redrafted to reflect public company status: (1) NAME CLAUSE — the word 'Private' is removed from the company name (e.g., 'ABC Private Limited' becomes 'ABC Limited'). (2) Other clauses are reviewed to ensure no reference to private-company-specific restrictions remains. The altered MOA is prepared for placing before members at the EGM.",
                    duration: "2-3 days",
                  },
                  {
                    step: 5,
                    title: "Drafting of Altered AOA (Removing Private Company Restrictions)",
                    description:
                      "The Articles of Association are redrafted to REMOVE the three restrictive clauses that define a private company: (1) Restriction on the right to transfer shares, (2) Limit of 200 on the number of members, (3) Prohibition on inviting the public to subscribe to shares or debentures. The altered AOA also updates quorum, director rotation, and general meeting provisions to align with public company norms under the Companies Act, 2013.",
                    duration: "2-4 days",
                  },
                  {
                    step: 6,
                    title: "Notice & Convening of Extraordinary General Meeting (EGM)",
                    description:
                      "Notice of the EGM is issued to all members, directors and the statutory auditor, with at least 21 clear days' notice (or shorter notice if consented to by the requisite majority of members). The notice includes the explanatory statement under Section 102, the proposed Special Resolution, and copies of the altered MOA and AOA for members' review.",
                    duration: "21 days notice (statutory minimum)",
                  },
                  {
                    step: 7,
                    title: "Passing of Special Resolution (75% Majority)",
                    description:
                      "At the EGM, members vote on the resolution to convert the company to a Public Limited Company and to adopt the altered MOA and AOA. The resolution must be passed as a SPECIAL RESOLUTION — requiring at least 75% of the votes cast by members present and voting (in person, by proxy, or postal ballot/e-voting where applicable) to be in favour. Minutes of the EGM are recorded and signed.",
                    duration: "Same day as EGM",
                  },
                  {
                    step: 8,
                    title: "Filing of Form MGT-14 (Within 30 Days)",
                    description:
                      "Form MGT-14 (filing of resolutions and agreements with the Registrar) must be filed with the ROC within 30 DAYS of passing the Special Resolution. Attachments include: certified true copy of the Special Resolution, EGM notice with explanatory statement, altered MOA, and altered AOA. MCA fee depends on the company's authorized capital. Late filing attracts additional government fees on a sliding scale.",
                    duration: "Within 30 days (Taxvio files promptly)",
                  },
                  {
                    step: 9,
                    title: "Filing of Form INC-27 (Application for Conversion)",
                    description:
                      "Form INC-27 is the principal application for conversion of a company from private to public (or vice versa), filed with the jurisdictional ROC. Attachments include: (1) Altered MOA and AOA, (2) certified copy of the Special Resolution and EGM minutes, (3) list of directors with DIN, (4) list of members with shareholding, (5) declaration/affidavit confirming minimum 7 members and 3 directors are in place, (6) copy of MGT-14 challan/SRN, (7) latest audited financial statements. The form is digitally signed by a director and certified by a practicing professional (CA/CS/CMA).",
                    duration: "3-5 days to prepare & file",
                  },
                  {
                    step: 10,
                    title: "ROC Scrutiny & Processing",
                    description:
                      "The Registrar of Companies examines the INC-27 application and attachments for compliance with Section 14 and Section 18 requirements. The ROC may raise queries or seek clarification/resubmission if any document is incomplete or inconsistent — Taxvio ensures the filing is complete and error-free to minimise back-and-forth. Processing typically takes 7-12 working days depending on ROC workload.",
                    duration: "7-12 days (ROC processing)",
                  },
                  {
                    step: 11,
                    title: "Fresh Certificate of Incorporation Issued",
                    description:
                      "On approval, the ROC issues a FRESH Certificate of Incorporation confirming the company's conversion into a Public Limited Company, along with its new name (without 'Private') and updated CIN. This certificate is the legal proof of the company's new status and is required for updating all statutory and banking records.",
                    duration: "Same day as ROC approval",
                  },
                  {
                    step: 12,
                    title: "Post-Conversion Compliances",
                    description:
                      "After the fresh COI is issued, the following updates are required: (1) Update PAN and TAN records with the new company name, (2) Intimate the bank(s) to update the current account name and KYC records, (3) Update GST registration, Shops & Establishment licence, and other statutory registrations with the new name, (4) Order new letterheads, invoices, company seal and stationery reflecting the new name, (5) Update the company website, signage, and vendor/customer master records, (6) Update statutory registers (Register of Members, Register of Directors) to reflect the expanded shareholder and director base.",
                    duration: "Within 15-30 days of COI",
                  },
                  {
                    step: 13,
                    title: "Ongoing Enhanced Compliance as a Public Company",
                    description:
                      "As a Public Limited Company, ongoing ROC compliances continue on a stricter footing: (1) Annual Return (MGT-7) and Financial Statements (AOC-4) filed within statutory timelines, (2) minimum 4 Board meetings per year with gap not exceeding 120 days, (3) Annual General Meeting (AGM) mandatory within 6 months of financial year end, (4) closer scrutiny of related-party transactions, (5) possible requirement of independent directors and/or a whole-time Company Secretary once prescribed capital/turnover/borrowing thresholds are crossed, (6) enhanced disclosure in the Board's Report and financial statements. Non-compliance attracts penalties under the Companies Act, 2013.",
                    duration: "Ongoing (yearly)",
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
                  <strong>20-25 working days</strong> from Board approval to
                  the fresh Certificate of Incorporation. Breakdown: Board
                  meeting & preparation (1-2 days) + director/shareholder
                  addition if needed (2-5 days) + MOA/AOA drafting (2-4 days)
                  + EGM notice period (21 days, can run in parallel with
                  drafting) + MGT-14 filing (within 30 days) + INC-27
                  preparation & filing (3-5 days) + ROC processing (7-12
                  days).
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Private to Public Conversion
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Directors (Minimum 3)
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN Card (mandatory)",
                    "Aadhaar Card (identity + address)",
                    "Existing DIN (for current directors)",
                    "DSC & DIN application (for any newly appointed director)",
                    "Passport-size photograph (recent)",
                    "Consent to act as director (Form DIR-2)",
                    "Disclosure of interest in other entities",
                    "Bank statement or utility bill (<2 months — address proof)",
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
                  For Shareholders (Minimum 7)
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN Card (mandatory for all shareholders)",
                    "Aadhaar Card (KYC and identity)",
                    "Passport-size photograph",
                    "Address proof (bank statement/utility bill <2 months)",
                    "Existing shareholding pattern / cap table",
                    "Share allotment or transfer documents (for any new shareholder added)",
                    "Consent letters from new shareholders",
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
                  Existing Company Records
                </p>
                <ul className="space-y-3">
                  {[
                    "Existing Certificate of Incorporation",
                    "Existing MOA & AOA",
                    "Latest audited financial statements",
                    "Latest filed Annual Return (MGT-7) & Financial Statements (AOC-4)",
                    "Statutory registers (Register of Members, Register of Directors)",
                    "Confirmation of no pending ROC defaults",
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
                  Resolution & Filing Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Board resolution approving the conversion proposal",
                    "EGM notice with explanatory statement (Section 102)",
                    "Certified true copy of the Special Resolution",
                    "Altered MOA (name & other clauses updated)",
                    "Altered AOA (private restriction clauses removed)",
                    "MGT-14 acknowledgment / SRN (filed before INC-27)",
                    "NOC from secured creditors/lenders (if applicable)",
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
                  "Proposed new company name (existing name minus 'Private')",
                  "Reason for conversion (fundraising, listing plans, investor requirement, etc.)",
                  "Current shareholding pattern and any planned new allotments",
                  "Current board composition and any planned director additions",
                  "Registered office address (unchanged unless being updated separately)",
                  "Details of any secured lenders whose consent may be required",
                  "Target date for completing the EGM and filings",
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
              Common Mistakes in Private to Public Conversion
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Conversion has strict procedural and threshold requirements —
                avoid these critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Filing Before Reaching 7 Shareholders",
                    icon: "👥",
                    problem:
                      "Submitting Form INC-27 while the company still has fewer than 7 shareholders on record. The ROC will reject or raise a query on the application since minimum 7 members is a statutory precondition for public company status.",
                    solution:
                      "Complete share allotment or transfer to reach at least 7 distinct shareholders BEFORE convening the EGM. Verify the updated Register of Members reflects all 7+ members with proper KYC before filing MGT-14 or INC-27. Taxvio verifies shareholder count at the planning stage to avoid rejection.",
                  },
                  {
                    mistake: "Filing Before Reaching 3 Directors",
                    icon: "🧑‍⚖️",
                    problem:
                      "Proceeding with conversion while the Board has only 2 directors. Public companies require a minimum of 3 directors — an incomplete Board at the time of INC-27 filing leads to rejection or resubmission.",
                    solution:
                      "Appoint the additional director (with DIN/DSC if new) and pass the relevant Board resolution BEFORE the EGM. Confirm the appointment is reflected in the latest Board composition submitted with INC-27. Taxvio coordinates director appointment timelines with the conversion filing schedule.",
                  },
                  {
                    mistake: "Incomplete Alteration of AOA",
                    icon: "📜",
                    problem:
                      "Altering only the name clause in the MOA while leaving the AOA's private-company restriction clauses (share transfer restriction, 200-member cap, prohibition on public invitation) untouched. This is a substantive defect that the ROC can flag, since a public company's Articles must not retain private company restrictions.",
                    solution:
                      "Ensure the AOA is comprehensively redrafted to REMOVE all three restrictive clauses, and that quorum, meeting, and voting provisions are updated to align with public company norms. Have the altered AOA reviewed by a qualified professional before it is placed before the EGM. Taxvio drafts AOA specifically compliant with public company requirements under the Companies Act, 2013.",
                  },
                  {
                    mistake: "Missing the 30-Day MGT-14 Deadline",
                    icon: "⏰",
                    problem:
                      "Delaying the filing of Form MGT-14 beyond 30 days from the date the Special Resolution is passed. Late filing attracts additional government fees on an escalating scale and can also delay the subsequent INC-27 filing, which typically references the MGT-14 SRN.",
                    solution:
                      "File Form MGT-14 within 30 days of the EGM, ideally within the first 1-2 weeks to build a buffer. Track the resolution date on a compliance calendar. Taxvio files MGT-14 promptly after the EGM to avoid additional fees and downstream delays.",
                  },
                  {
                    mistake: "Special Resolution Without Proper 75% Majority",
                    icon: "🗳️",
                    problem:
                      "Treating the conversion resolution as an ordinary resolution (simple majority) instead of a Special Resolution, or failing to record voting results correctly. Since Section 14 mandates a Special Resolution, an improperly passed resolution renders the entire conversion invalid and can require the process to be restarted.",
                    solution:
                      "Confirm at least 75% of votes cast by members present and voting (in person, proxy, or e-voting where applicable) are in favour, and record this clearly in the EGM minutes and the certified Special Resolution copy filed with MGT-14. Taxvio prepares resolution documentation to reflect the correct voting threshold and format.",
                  },
                  {
                    mistake: "Skipping Post-Conversion Updates",
                    icon: "🏦",
                    problem:
                      "Obtaining the fresh Certificate of Incorporation but forgetting to update PAN, bank accounts, GST registration, and other statutory records with the new company name. This creates a mismatch between MCA records and other regulatory/banking records, causing friction in future transactions, audits, or fundraising due diligence.",
                    solution:
                      "Immediately after the fresh COI is issued, update PAN/TAN, notify the bank(s) for current account name updates, amend GST registration and other licences, and reissue letterheads, invoices, and the company seal. Taxvio provides a post-conversion compliance checklist and coordinates these updates.",
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
              Private to Public Conversion Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive conversion and compliance packages for growing
              private companies:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹14,999",
                  popular: false,
                  features: [
                    "Eligibility & structure review",
                    "Board resolution & EGM notice drafting",
                    "Altered MOA drafting (name & clauses)",
                    "Altered AOA drafting (removing private restrictions)",
                    "Special Resolution drafting",
                    "MGT-14 filing (within 30 days)",
                    "INC-27 conversion filing",
                    "Fresh Certificate of Incorporation",
                    "Email & phone support",
                  ],
                  limitations: [
                    "No director/shareholder addition support",
                    "No post-conversion compliance updates",
                    "No PAN/bank/GST name update assistance",
                    "No ongoing annual compliance support",
                  ],
                  ideal:
                    "Companies that already meet the 7-shareholder and 3-director thresholds",
                },
                {
                  name: "Standard",
                  price: "₹24,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "Appointment of 1 additional director (DIN application if needed)",
                    "Shareholder addition documentation support (up to reaching 7 members)",
                    "Statutory register updates (Members, Directors)",
                    "PAN/TAN name update coordination",
                    "Bank current account name update coordination",
                    "Priority support (WhatsApp + email)",
                  ],
                  limitations: [
                    "GST/other registration name updates offered as add-on",
                  ],
                  ideal:
                    "Companies needing to add a director and/or shareholders to meet public company thresholds",
                },
                {
                  name: "Complete",
                  price: "₹39,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Appointment of up to 3 new directors (DSC + DIN)",
                    "Full shareholder onboarding to reach minimum 7 members",
                    "GST, Shops & Establishment, and other registration name updates",
                    "Updated letterhead, stationery & company seal",
                    "First year annual compliance (MGT-7, AOC-4) included",
                    "Dedicated CA + CS team with post-conversion review",
                  ],
                  limitations: [],
                  ideal:
                    "Companies wanting full handholding from Board approval through to post-conversion compliance",
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
                    desc: "For companies needing more than the included directors",
                  },
                  {
                    service: "GST / Licence Name Update",
                    price: "₹2,999",
                    desc: "Update GST registration and other licences with new name",
                  },
                  {
                    service: "Annual Compliance Package",
                    price: "₹34,999/year",
                    desc: "MGT-7, AOC-4, ITR-6, Board & AGM support",
                  },
                  {
                    service: "Independent Director Consulting",
                    price: "₹9,999",
                    desc: "Guidance on independent director appointment for listing readiness",
                  },
                  {
                    service: "Company Secretary Retainer",
                    price: "₹15,000/month",
                    desc: "Part-time CS support for enhanced public company compliance",
                  },
                  {
                    service: "Stationery & Seal Reissue",
                    price: "₹3,999",
                    desc: "Letterheads, invoices, company seal with updated name",
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
                  name: "Anil Mehta, Director",
                  company: "Meridian Industries Limited",
                  location: "Meerut, UP",
                  text: "We were raising a Series B round and our investors wanted a public company structure ahead of a future listing. Taxvio handled the entire conversion — MOA/AOA alteration, EGM, MGT-14, and INC-27 — in 22 days. The team also helped us add two new directors to meet the minimum requirement. Smooth process throughout.",
                },
                {
                  name: "Neha Kapoor, Managing Director",
                  company: "Brightline Textiles Limited",
                  location: "Noida, UP",
                  text: "Our company had only 4 shareholders and 2 directors, so we needed help reaching the public company thresholds. Taxvio's Complete package guided us through adding shareholders and directors, then completed the conversion filing without a single ROC query. Post-conversion, they even updated our GST and bank records.",
                },
                {
                  name: "Rakesh Verma, Chairman",
                  company: "Highland Agro Limited",
                  location: "Muzaffarnagar, UP",
                  text: "We wanted the flexibility of free share transferability for our expanding investor base. Taxvio explained the private vs public differences clearly, drafted our altered AOA correctly the first time, and got our fresh Certificate of Incorporation in under a month. Professional and responsive service.",
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
              Private to Public Conversion Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong>{" "}
              and provides online Private to Public Company conversion
              services for growing businesses across{" "}
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
              Other ROC & Corporate Restructuring Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
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
                  title: "Section 8 Company",
                  icon: "🎗️",
                  link: "/serviceslist/roc/section-8-company",
                  desc: "NGO/Non-profit company registration",
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
                    Prepare for Growth & Public Fundraising
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Convert Your Private Company — Unlock Public Capital
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get MOA/AOA alteration, Special Resolution drafting,
                    MGT-14 filing, and INC-27 conversion filing handled
                    end-to-end. Meet the minimum 7 shareholders and 3
                    directors requirement with our support and emerge with a
                    fresh Certificate of Incorporation. Starting ₹14,999 with
                    expert CA & CS team.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Convert Now — ₹14,999
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

        {/* FIXED WHATSAPP BUTTON */}
        {showWhatsApp && (
          <a
            href="https://wa.me/918937980366?text=Hi%2C%20I%20want%20to%20convert%20my%20Private%20Company%20to%20Public%20Company"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-200 z-50 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="absolute -top-10 right-0 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Need Help? Chat Now!
            </span>
          </a>
        )}
      </main>
    </>
  );
}

/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can a Private Company convert to a Public Company voluntarily?",
      a: "YES. A Private Limited Company can voluntarily convert to a Public Limited Company at any time by following the process under Section 14 and Section 18 of the Companies Act, 2013 — increasing directors and shareholders to the required minimums, altering its MOA and AOA, passing a Special Resolution, and filing Forms MGT-14 and INC-27 with the ROC. There is no requirement to wait for a specific trigger event (such as a fundraise) — the company's Board and shareholders can initiate the conversion whenever it suits their business plans, most commonly ahead of raising public capital or preparing for a future listing.",
    },
    {
      q: "What is a Special Resolution and how is it passed?",
      a: "A Special Resolution is a resolution passed by members at a General Meeting where at least 75% of the votes cast by members present and voting (in person, by proxy, or through postal ballot/e-voting where applicable) are in favour of the resolution, as required under Section 114 of the Companies Act, 2013. For conversion to a Public Company, the Special Resolution approves both the change in status and the adoption of the altered MOA and AOA. The resolution, along with the EGM notice and explanatory statement, must be filed with the ROC in Form MGT-14 within 30 days of being passed.",
    },
    {
      q: "Do we need minimum 7 shareholders and 3 directors before applying for conversion?",
      a: "YES. Sections 3 and 149 of the Companies Act, 2013 require a Public Limited Company to have at least 7 shareholders and at least 3 directors. If your company currently has fewer (as most private companies do, since the minimum for a Private Limited Company is only 2 of each), you must first allot or transfer shares to reach 7 distinct shareholders, and appoint additional director(s) to reach 3, before the conversion application (Form INC-27) can be filed. Taxvio helps plan and execute this step alongside the conversion filing.",
    },
    {
      q: "What happens to the company's existing contracts, PAN, and bank accounts after conversion?",
      a: "The company's legal identity (its CIN's underlying entity) continues without interruption — existing contracts, licences, and obligations generally remain valid and are not automatically terminated by the conversion. However, since the company's NAME changes (the word 'Private' is dropped) and its CIN is updated on the fresh Certificate of Incorporation, you should proactively update PAN and TAN records, notify banks to update current account and KYC details, amend GST registration and other licences, and inform key vendors, customers, and contractual counterparties of the name change to avoid any operational friction.",
    },
    {
      q: "How long does the entire conversion process take?",
      a: "The complete process typically takes 20-25 working days from the initial Board meeting to the issuance of the fresh Certificate of Incorporation, assuming the company already has (or promptly arranges) the required minimum 7 shareholders and 3 directors. This includes the statutory 21-day EGM notice period (which can run in parallel with MOA/AOA drafting), the 30-day window for MGT-14 filing, and 7-12 days for ROC scrutiny of the INC-27 application. Delays commonly arise from incomplete shareholder/director thresholds or defective AOA drafting — both of which Taxvio helps avoid.",
    },
    {
      q: "Is Company Secretary appointment mandatory immediately after conversion?",
      a: "Not automatically. A Company Secretary (CS) becomes mandatory under Section 203 of the Companies Act, 2013 once the company's paid-up share capital reaches the prescribed threshold applicable to public companies. A newly converted Public Company with modest paid-up capital may not need a whole-time CS right away, but given the heightened ROC compliance that comes with public company status — event-based filings, board and general meeting formalities, enhanced disclosures — engaging at least a part-time CS or a CS firm (like Taxvio) is strongly recommended from the outset.",
    },
    {
      q: "Can the conversion be reversed — can a Public Company convert back to Private?",
      a: "YES, a Public Company can convert back to a Private Company, but this requires approval from the Regional Director (MCA) under Section 14, in addition to a Special Resolution of members and filing of Form RD-1 and subsequently INC-27. This reverse conversion (public to private) is procedurally more involved than the private-to-public route covered on this page, since it requires demonstrating the change does not prejudice the interests of creditors or minority shareholders. If you need this reverse process, Taxvio offers it as a separate service — contact us for details.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Private to Public Conversion
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