// app/serviceslist/roc/nidhi-company-registration/NidhiCompanyRegistrationClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nidhi Company Registration Services - Complete MCA & NDH Compliance",
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
    "Professional Nidhi Company registration services under Section 406 of Companies Act 2013 including name approval (RUN), SPICe+ incorporation, MOA & AOA with Nidhi objectives, minimum 200 members compliance, Certificate of Incorporation, NDH-1 intimation, NDH-4 declaration filing, ₹5 lakh net owned fund compliance, and ongoing MCA annual filings. Complete end-to-end incorporation assistance for mutual benefit societies, community lending groups, savings & credit cooperatives, and thrift societies. Expert MCA filing, Nidhi Rules 2014 compliance, and post-incorporation support. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "Nidhi Company Registration & Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "29999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "29999",
      maxPrice: "79999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Nidhi Company and how is it different from NBFC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Nidhi Company (also called Mutual Benefit Society or Permanent Fund) is a type of NON-BANKING FINANCIAL COMPANY (NBFC) registered under Section 406 of the Companies Act, 2013. However, unlike regular NBFCs, Nidhi Companies are NOT regulated by RBI (Reserve Bank of India) — they are regulated by Ministry of Corporate Affairs (MCA). Key Differences: (1) Membership: Nidhi can ONLY accept deposits and lend to its MEMBERS (shareholders). NBFCs can lend to general public. (2) RBI License: Nidhi does NOT require RBI license. NBFC requires RBI registration. (3) Regulation: Nidhi is governed by MCA under Nidhi Rules 2014. NBFC is governed by RBI. (4) Business Scope: Nidhi can ONLY do deposit-taking and lending (mutual benefit). NBFC can do various activities — loans, leasing, hire purchase, investment, etc. (5) Net Owned Funds: Nidhi requires minimum ₹5 lakh NOF. NBFC requires ₹2 crore. (6) Membership: Nidhi requires minimum 200 members within 1 year. NBFC has no such requirement. (7) Name Suffix: Nidhi company name must end with 'Nidhi Limited'. NBFC ends with 'Limited'.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum capital and member requirement for Nidhi Company in 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As per Nidhi Rules 2014 (amended, applicable in FY 2025-26): (1) Minimum AUTHORIZED CAPITAL: No specific minimum (but recommended ₹5 lakh). (2) Minimum PAID-UP EQUITY SHARE CAPITAL: ₹5 lakh (must be deposited in bank BEFORE incorporation). (3) Minimum NET OWNED FUNDS (NOF): ₹10 lakh WITHIN ONE YEAR of incorporation. Net Owned Funds = Paid-up equity capital + Free Reserves - Accumulated losses - Intangible assets. Example: If paid-up capital is ₹5 lakh at incorporation, you must build NOF to ₹10 lakh within 1 year by adding reserves (retained earnings). (4) Minimum MEMBERS (Shareholders): 200 members WITHIN ONE YEAR of incorporation. At incorporation, you can start with 7 members (minimum for Public Ltd company), but MUST increase to 200 within 1 year. (5) Member-Deposit Ratio: Ratio of Net Owned Funds to deposits accepted from members shall NOT be less than 1:20 (i.e., if NOF is ₹10 lakh, maximum deposits you can accept is ₹2 crore).",
      },
    },
    {
      "@type": "Question",
      name: "What is the time taken for Nidhi Company registration in 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complete Nidhi Company registration timeline (FY 2025-26): (1) DSC Procurement for 3+ directors - 3-5 days. (2) DIN Application - 2-3 days. (3) Name Reservation via RUN (name must end with 'Nidhi Limited') - 2-3 days. (4) Capital Deposit (₹5 lakh minimum paid-up) - 3-5 days. (5) MOA & AOA Drafting (with Nidhi objectives) - 3-5 days. (6) SPICe+ Filing (INC-32) - 7-10 days MCA processing. (7) Certificate of Incorporation - Same day as SPICe+ approval. (8) NDH-1 Intimation (inform MCA that company will function as Nidhi) - Must file within 90 days of incorporation. (9) NDH-4 Declaration (declare compliance with Nidhi Rules) - Must file AFTER achieving 200 members and ₹10 lakh NOF (within 1 year). TOTAL TIMELINE: 15-20 working days from document submission to Certificate of Incorporation. Additional 1 year to achieve 200 members + ₹10 lakh NOF and file NDH-4.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function NidhiCompanyRegistrationClient() {
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
          💰 Start Community Lending Business — Register Nidhi Company (Mutual Benefit Society)!
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
              <span className="text-white">Nidhi Company Registration</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏦 Mutual Benefit Society
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Nidhi Company
                  <br />
                  <span className="text-[#7ecbf0]">Registration Service</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Want to start a{" "}
                  <strong className="text-white">
                    member-based savings and lending business
                  </strong>{" "}
                  without RBI license? Register a{" "}
                  <strong className="text-white">
                    Nidhi Company (Mutual Benefit Society)
                  </strong>{" "}
                  under{" "}
                  <strong className="text-white">
                    Section 406 of Companies Act, 2013
                  </strong>{" "}
                  and{" "}
                  <strong className="text-white">Nidhi Rules 2014</strong>.
                  Nidhi Companies are{" "}
                  <strong className="text-white">
                    NON-BANKING financial companies regulated by MCA (not RBI)
                  </strong>
                  , allowing you to{" "}
                  <strong className="text-white">
                    accept deposits and lend money EXCLUSIVELY to members
                  </strong>{" "}
                  for mutual benefit.{" "}
                  <strong className="text-white">Taxvio</strong> provides
                  end-to-end Nidhi incorporation —{" "}
                  <strong className="text-white">
                    name approval (RUN), SPICe+ filing, MOA & AOA with Nidhi
                    objectives, ₹5 lakh minimum capital compliance, NDH-1
                    intimation, NDH-4 declaration, 200 members onboarding, and
                    ongoing MCA compliance
                  </strong>
                  . Build your{" "}
                  <strong className="text-white">
                    community thrift & credit society
                  </strong>{" "}
                  in <strong className="text-white">15-20 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Register Now — ₹29,999 →
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
                    "✅ 15-20 Days Registration",
                    "✅ No RBI License Needed",
                    "✅ MCA Regulated",
                    "✅ 200 Members Support",
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
                    ["🏦", "No RBI license required"],
                    ["👥", "Min 200 members (within 1 year)"],
                    ["💰", "Min paid-up capital: ₹5 lakh"],
                    ["⏰", "Registration time: 15-20 days"],
                    ["📊", "MCA regulated (not RBI)"],
                    ["💼", "Starting fee: ₹29,999"],
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
              { number: "150+", label: "Nidhi Companies Registered", icon: "🏦" },
              { number: "15-20 Days", label: "Average Timeline", icon: "⏰" },
              { number: "₹5 Lakh", label: "Minimum Capital", icon: "💰" },
              { number: "₹29,999", label: "Starting Fee", icon: "💼" },
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
              "✔ NDH Compliance Support",
              "✔ 200 Members Onboarding",
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
          {/* WHAT IS NIDHI COMPANY */}
          <section id="what-is-nidhi">
            <SectionLabel text="Understanding Nidhi Companies" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is a Nidhi Company (Mutual Benefit Society)?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A <strong>Nidhi Company</strong> (also called{" "}
                  <strong>Mutual Benefit Society</strong>,{" "}
                  <strong>Permanent Fund</strong>, or{" "}
                  <strong>Benefit Funds</strong>) is a type of{" "}
                  <strong>Non-Banking Financial Company (NBFC)</strong> registered
                  under{" "}
                  <strong>Section 406 of the Companies Act, 2013</strong> and
                  governed by the{" "}
                  <strong>Nidhi Rules, 2014</strong> notified by the Ministry of
                  Corporate Affairs (MCA).
                </p>
                <p>
                  The PRIMARY OBJECTIVE of a Nidhi Company is to{" "}
                  <strong>
                    cultivate the habit of thrift and savings among its MEMBERS
                  </strong>{" "}
                  by{" "}
                  <strong>
                    accepting deposits from members and lending back to members
                    ONLY
                  </strong>
                  . Nidhi companies operate on the principle of{" "}
                  <strong>MUTUAL BENEFIT</strong> — all profits are distributed
                  among members as dividends or used to strengthen the Nidhi's
                  capital base.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🏦 Key Features of Nidhi Company
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Mutual Benefit Model",
                        desc: "Nidhi accepts deposits ONLY from its members (shareholders) and lends ONLY to members. Cannot accept deposits from or lend to non-members/public. This is FUNDAMENTAL difference from banks/NBFCs.",
                      },
                      {
                        title: "No RBI License Required",
                        desc: "Unlike regular NBFCs (which require RBI registration), Nidhi Companies are EXEMPTED from RBI licensing under Section 406. They are regulated ONLY by MCA under Nidhi Rules 2014.",
                      },
                      {
                        title: "Membership-Based",
                        desc: "Every depositor/borrower MUST be a shareholder (member). To deposit money or take loan, person must first buy at least 1 share of the Nidhi company. Minimum 200 members required within 1 year of incorporation.",
                      },
                      {
                        title: "Limited Business Scope",
                        desc: "Nidhi can ONLY do two activities: (1) Accept deposits from members, (2) Lend to members. CANNOT do: Leasing, hire purchase, chit funds, insurance, investment advisory, bill discounting, etc. (Unlike NBFCs which can do multiple activities).",
                      },
                      {
                        title: "Net Owned Funds (NOF) Requirement",
                        desc: "Minimum NOF of ₹10 lakh must be maintained within 1 year of incorporation. NOF = Paid-up equity capital + Free reserves - Accumulated losses - Intangible assets. At incorporation, minimum ₹5 lakh paid-up capital is required.",
                      },
                      {
                        title: "Geographical Restrictions",
                        desc: "As per Nidhi Rules 2014, Nidhi company cannot open branches OUTSIDE the district of its registered office without prior approval from Regional Director (MCA). Typically operates in local/community area.",
                      },
                      {
                        title: "Name Suffix 'Nidhi Limited'",
                        desc: "Company name MUST end with 'Nidhi Limited' (e.g., 'ABC Nidhi Limited', 'XYZ Mutual Benefit Nidhi Limited'). Cannot use 'Private Limited' or just 'Limited' suffix.",
                      },
                      {
                        title: "Deposit Insurance NOT Covered",
                        desc: "Nidhi deposits are NOT covered under Deposit Insurance and Credit Guarantee Corporation (DICGC) scheme (unlike bank deposits which are insured up to ₹5 lakh). Members bear full risk of Nidhi default.",
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
                        At the Time of Incorporation
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Minimum 3 Directors</strong> (same as Public
                          Ltd company)
                        </li>
                        <li>
                          • <strong>Minimum 7 Shareholders</strong> (same as
                          Public Ltd — will increase to 200 within 1 year)
                        </li>
                        <li>
                          • <strong>Minimum Authorized Capital:</strong> No
                          specific minimum (recommended ₹5 lakh)
                        </li>
                        <li>
                          • <strong>Minimum Paid-up Equity Share Capital: ₹5 lakh</strong>{" "}
                          (must be deposited in bank BEFORE incorporation)
                        </li>
                        <li>
                          • <strong>Registered Office Address</strong> in India
                        </li>
                        <li>
                          • <strong>Company name must end with 'Nidhi Limited'</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Within ONE YEAR of Incorporation
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Minimum 200 Members (Shareholders):</strong>{" "}
                          Nidhi must admit at least 200 members by issuing shares.
                          Each member must hold at least 1 share.
                        </li>
                        <li>
                          • <strong>
                            Net Owned Funds (NOF) of ₹10 lakh minimum:
                          </strong>{" "}
                          NOF = Paid-up capital + Free reserves - Losses -
                          Intangible assets. Example: If paid-up capital is ₹5
                          lakh at start, must build ₹5 lakh reserves (from profits)
                          to reach ₹10 lakh NOF.
                        </li>
                        <li>
                          • <strong>File NDH-4 Declaration:</strong> After
                          achieving 200 members and ₹10 lakh NOF, file Form NDH-4
                          with MCA declaring compliance with Nidhi Rules 2014.
                        </li>
                        <li>
                          • <strong>Unencumbered Term Deposits:</strong> Minimum
                          10% of outstanding deposits must be invested in
                          unencumbered term deposits with scheduled commercial banks.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ Nidhi Company vs NBFC vs Bank — Comparison
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Feature</th>
                          <th className="p-2 text-left">Nidhi</th>
                          <th className="p-2 text-left">NBFC</th>
                          <th className="p-2 text-left">Bank</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            feature: "Regulator",
                            nidhi: "MCA",
                            nbfc: "RBI",
                            bank: "RBI",
                          },
                          {
                            feature: "License",
                            nidhi: "No RBI license",
                            nbfc: "RBI registration",
                            bank: "Banking license",
                          },
                          {
                            feature: "Min Capital",
                            nidhi: "₹5 lakh",
                            nbfc: "₹2 crore",
                            bank: "₹500 crore",
                          },
                          {
                            feature: "Deposit from",
                            nidhi: "Members only",
                            nbfc: "Public",
                            bank: "Public",
                          },
                          {
                            feature: "Lend to",
                            nidhi: "Members only",
                            nbfc: "Public",
                            bank: "Public",
                          },
                          {
                            feature: "Min Members",
                            nidhi: "200 (1 year)",
                            nbfc: "None",
                            bank: "None",
                          },
                          {
                            feature: "Deposit Insurance",
                            nidhi: "No",
                            nbfc: "No",
                            bank: "Yes (₹5L DICGC)",
                          },
                          {
                            feature: "Business Scope",
                            nidhi: "Deposit + Lending",
                            nbfc: "Multiple activities",
                            bank: "Full banking",
                          },
                          {
                            feature: "Name Suffix",
                            nidhi: "Nidhi Limited",
                            nbfc: "Limited",
                            bank: "Bank Limited",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.feature}</td>
                            <td className="p-2 text-green-700 font-bold">
                              {row.nidhi}
                            </td>
                            <td className="p-2 text-gray-600">{row.nbfc}</td>
                            <td className="p-2 text-gray-600">{row.bank}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Advantages of Nidhi Company
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "No RBI Approval Needed",
                        desc: "Unlike NBFCs which require expensive and time-consuming RBI registration (₹2 crore capital, detailed scrutiny), Nidhi companies can start with just MCA registration. Saves 6-12 months and lakhs in compliance costs.",
                      },
                      {
                        title: "Lower Capital Requirement",
                        desc: "Minimum ₹5 lakh paid-up capital vs ₹2 crore for NBFC. Ideal for community-based, small-scale lending businesses.",
                      },
                      {
                        title: "Simpler Compliance",
                        desc: "MCA compliance (annual returns, audits) is simpler than RBI's stringent prudential norms for NBFCs (CAR, NPA provisioning, ALM, etc.). Annual compliance cost: ₹50,000-1,50,000.",
                      },
                      {
                        title: "Community Trust Model",
                        desc: "Member-based lending fosters trust — borrowers are shareholders, reducing default risk. Strong for local communities, societies, groups.",
                      },
                      {
                        title: "Tax Benefits",
                        desc: "Nidhi companies get same corporate tax rates as regular companies (25.17% effective). Dividends paid to members are tax-free in hands of company (taxable in hands of members).",
                      },
                      {
                        title: "No Branch Restrictions (within district)",
                        desc: "Can open multiple branches within the registered office district without MCA approval. Facilitates local expansion.",
                      },
                      {
                        title: "Suitable for Cooperative Mindset",
                        desc: "Ideal for communities, housing societies, employee groups, village cooperatives wanting to create mutual savings & lending fund without forming a cooperative society (which has complex state regulations).",
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
                    ⚠️ Disadvantages & Restrictions
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "CANNOT Accept Deposits from Public: Only members can deposit. Limits scale of deposits compared to banks/NBFCs which can tap general public.",
                      "CANNOT Lend to Public: Only members can borrow. Cannot become a large-scale lending business like NBFCs (personal loans, SME loans to non-members).",
                      "200 Members Burden: Must achieve 200 members within 1 year — requires active member recruitment and share issuance. If failed, Nidhi status is at risk.",
                      "₹10 Lakh NOF Target: Must build ₹10 lakh Net Owned Funds within 1 year. If Nidhi is loss-making in first year, NOF may fall short — compliance issue.",
                      "Geographical Limitations: Cannot easily expand outside district without Regional Director approval. Limits pan-India expansion (unlike NBFCs/banks).",
                      "No Deposit Insurance: Members' deposits are NOT insured by DICGC. If Nidhi defaults, members lose money. Trust erosion risk if mismanaged.",
                      "Strict Activity Restrictions: CANNOT do chit funds, leasing, hire purchase, insurance, mutual funds, merchant banking, etc. — ONLY deposit + lending.",
                      "Member-Deposit Ratio: Deposits cannot exceed 20x of NOF. If NOF is ₹10 lakh, max deposits = ₹2 crore. This caps growth unless capital is continuously infused.",
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
                    🎯 When to Choose Nidhi Company?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Nidhi Company is ideal if you want to:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {[
                      "Start a community-based savings and lending business (village, housing society, employee group, caste association, etc.)",
                      "Avoid RBI's complex NBFC registration and capital requirements (₹2 crore minimum)",
                      "Operate in a localized area (within district) with known, trusted members",
                      "Cultivate thrift and savings habit among a defined group of people (mutual benefit focus)",
                      "Create an alternative to cooperative societies (which have complex state laws and registrations)",
                      "Start with lower capital (₹5 lakh vs ₹2 crore for NBFC)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Not Recommended if:</strong> You want to lend to
                    general public (not just members), expand pan-India, accept
                    large-scale public deposits, or do multiple NBFC activities
                    (leasing, investment, etc.). In such cases, register as NBFC
                    (requires RBI license).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* REGISTRATION PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Nidhi Company Registration Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete MCA registration process for Nidhi Company — from name
                approval to NDH-4 declaration:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Obtain Digital Signature Certificate (DSC) for Directors",
                    description:
                      "DSC is mandatory for all directors to sign MCA forms digitally. Nidhi company requires MINIMUM 3 DIRECTORS (same as Public Ltd company). Obtain Class 2 or Class 3 DSC from licensed Certifying Authorities (eMudhra, Sify, nCode). Documents required: PAN card, Aadhaar card, passport-size photograph, email ID, mobile number. DSC is issued on USB token and valid for 1-2 years. Cost: ₹1,000-2,000 per director. Taxvio assists in bulk DSC procurement at discounted rates.",
                    duration: "3-5 days",
                  },
                  {
                    step: 2,
                    title: "Apply for Director Identification Number (DIN)",
                    description:
                      "DIN is a unique 8-digit ID required for every director. Apply via Form DIR-3 on MCA portal using DSC. Documents required: PAN, Aadhaar, address proof (bank statement/utility bill <2 months), photograph, email, mobile. DIN is auto-approved within 1-2 days if documents are correct. Important: For Nidhi company, ensure at least 2 directors are RESIDENT OF INDIA (stayed in India for 182+ days in previous year) — mandatory as per Section 149(3). If director already has DIN from previous directorship, same DIN can be reused. Taxvio handles DIN applications for all directors simultaneously.",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Name Reservation via RUN (INC-1) — Must End with 'Nidhi Limited'",
                    description:
                      "Apply for name approval via Form INC-1 (RUN - Reserve Unique Name) on MCA portal. Nidhi company name MUST end with 'Nidhi Limited' (not 'Private Limited' or just 'Limited'). Example: 'ABC Nidhi Limited', 'XYZ Mutual Benefit Nidhi Limited', 'Community Savings Nidhi Limited'. Name guidelines: (1) Must be unique (not identical/similar to existing companies/trademarks), (2) Must end with 'Nidhi Limited', (3) Should reflect community/mutual benefit nature, (4) Cannot use restricted words (Bank, Insurance, Government, etc.) without approval, (5) Can have up to 2 proposed names in order of preference. MCA checks name against existing companies and trademark database. If approved: Name is reserved for 20 days (must file incorporation within 20 days, extendable by 20 more days). If rejected: Reapply with different names (no extra fee). Taxvio conducts name search and suggests 5+ available names with 'Nidhi Limited' suffix before filing RUN.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "Deposit Minimum Paid-up Capital (₹5 Lakh) in Bank",
                    description:
                      "Nidhi companies require minimum ₹5 lakh PAID-UP EQUITY SHARE CAPITAL deposited in bank BEFORE incorporation. Process: (1) Open a CURRENT ACCOUNT in the name of 'PROPOSED [Company Name] Nidhi Limited' in any scheduled bank (HDFC, ICICI, SBI, etc.). (2) Deposit ₹5 lakh (or more) via NEFT/RTGS/Cheque from shareholders' bank accounts. Each subscriber must deposit their subscribed amount from their OWN account. (3) Obtain 'Certificate of Deposit' or 'Banker's Certificate' from bank confirming deposit amount and account opening. This certificate is uploaded with SPICe+ form. Example: If authorized capital is ₹10 lakh (1,00,000 shares of ₹10 each), and 7 shareholders subscribe 50,000 shares (₹5 lakh paid-up), then ₹5 lakh must be deposited. Important: Capital cannot be withdrawn until Certificate of Incorporation is issued. Taxvio assists with bank account opening and capital infusion documentation.",
                    duration: "3-5 days",
                  },
                  {
                    step: 5,
                    title: "Drafting of MOA & AOA with Nidhi Objectives",
                    description:
                      "MOA (Memorandum of Association) and AOA (Articles of Association) are constitutional documents defining company's objectives and governance. For Nidhi company, these documents must include SPECIFIC NIDHI OBJECTIVES as per Nidhi Rules 2014: (1) MOA (Memorandum of Association): Contains: (a) Name clause (company name with 'Nidhi Limited' suffix), (b) Registered office clause (state where office is located), (c) OBJECTS CLAUSE (CRITICAL for Nidhi): MAIN OBJECTS must state: 'To carry on the business of a Nidhi company as defined under Section 406 of the Companies Act, 2013 and Nidhi Rules, 2014, for the purpose of cultivating the habit of thrift and savings amongst its members, receiving deposits from, and lending to, its members only, for their mutual benefit.' 'To accept deposits from members and pay interest thereon.' 'To lend money to members on such terms and conditions as may be decided by the Board of Directors.' 'To issue shares to members and pay dividends from profits.' ANCILLARY OBJECTS: Can include investing in government securities, fixed deposits, supporting member welfare activities, etc. (d) Liability clause (limited liability of members), (e) Capital clause (authorized capital structure — e.g., ₹10 lakh divided into 1,00,000 equity shares of ₹10 each). (2) AOA (Articles of Association): Contains internal management rules: (a) MEMBERSHIP CLAUSE: 'Every depositor and borrower of the Nidhi company shall be a member (shareholder). Non-members cannot deposit or borrow.' (b) Share capital and rights (voting rights, dividend rights, minimum 1 share per member), (c) Calls on shares, forfeiture, transfer/transmission of shares, (d) Board of Directors — appointment, removal, rotation, powers, (e) Board meetings — quorum, notice, voting, (f) General meetings — AGM, EGM, notice, quorum, voting, (g) Dividend distribution, reserves, accounts, audit, (h) DEPOSIT AND LENDING CLAUSES: 'Deposits will be accepted only from members', 'Loans will be given only to members', 'Interest rates on deposits and loans will be decided by Board', (i) NET OWNED FUNDS (NOF) maintenance clause, (j) Compliance with Nidhi Rules 2014. Taxvio prepares CUSTOMIZED MOA & AOA with NIDHI-SPECIFIC clauses compliant with Nidhi Rules 2014 and MCA guidelines.",
                    duration: "3-5 days",
                  },
                  {
                    step: 6,
                    title: "Filing of SPICe+ Form (INC-32) — Nidhi Company Incorporation",
                    description:
                      "Nidhi company incorporation is done via SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) - Form INC-32 on MCA portal. SPICe+ is an INTEGRATED form combining: (1) Company incorporation application, (2) DIN allotment for directors (if not already obtained), (3) PAN application, (4) TAN application, (5) EPFO registration, (6) ESIC registration, (7) AGILE-PRO (for GST, Shops & Establishment, profession tax in linked state portal). SPICe+ form includes: Part A - RUN (name reservation - already filed in Step 3), Part B - Company details: (a) Company category: Select 'Company limited by shares' → Sub-category: Select 'Nidhi company under Section 406', (b) Registered office address (complete address with pincode, state), (c) Authorized capital and shareholding pattern (equity shares, number of shares, value per share), (d) Details of subscribers (initial 7+ shareholders) — name, PAN, Aadhaar, address, email, mobile, shares subscribed, amount paid, (e) Details of first directors (minimum 3) — name, DIN, address, consent, (f) Main business activity: 'Lending and borrowing activities as Nidhi company', (g) Attachments: (i) MOA (with Nidhi objectives — signed by all subscribers), (ii) AOA (with Nidhi clauses — signed by all subscribers), (iii) Proof of registered office (rent agreement + NOC / sale deed + electricity bill), (iv) Utility bill of registered office (<2 months old), (v) BANKER'S CERTIFICATE confirming ₹5 lakh paid-up capital deposit, (vi) PAN, Aadhaar, address proof, photographs of all directors and subscribers, (vii) Consent to act as director (DIR-2), (viii) Declaration by professionals (INC-9). SPICe+ form is digitally signed by ALL DIRECTORS using DSC and filed on MCA portal. MCA Fee: Based on authorized capital (e.g., ₹5-10 lakh = ₹5,600 fee; ₹10-50 lakh = ₹11,200). MCA scrutinizes application (7-10 days). If queries/defects, MCA issues query notice — respond within 7 days. Taxvio ensures ERROR-FREE filing with complete documentation.",
                    duration: "7-10 days (MCA processing)",
                  },
                  {
                    step: 7,
                    title: "Certificate of Incorporation (CIN) Issued",
                    description:
                      "Upon approval of SPICe+ form, MCA issues Certificate of Incorporation (COI) in Form INC-11. The certificate contains: (1) Company name (ending with 'Nidhi Limited'), (2) CIN (Corporate Identity Number - 21-digit unique ID starting with 'U' for Nidhi companies), (3) Date of incorporation, (4) Registered office address, (5) Authorized capital, (6) Digital signature of Registrar of Companies (ROC). Certificate of Incorporation is the LEGAL PROOF that your Nidhi company now exists under the Companies Act, 2013. Download COI from MCA portal. IMPORTANT: Nidhi company can commence business immediately after incorporation (unlike Public Ltd which requires INC-20A). However, Nidhi MUST comply with Nidhi Rules 2014 within 1 year (200 members, ₹10 lakh NOF) to retain Nidhi status.",
                    duration: "Same day as SPICe+ approval",
                  },
                  {
                    step: 8,
                    title: "PAN & TAN Auto-Generation",
                    description:
                      "PAN (Permanent Account Number) and TAN (Tax Deduction Account Number) are auto-generated by Income Tax Department upon incorporation (if SPICe+ Part B was filed). PAN card is sent to company's registered office via India Post (7-15 days). TAN is sent via email. If not received within 15 days, download e-PAN from Income Tax e-filing portal (Login → Services → Download e-PAN → Enter CIN → OTP → Download). PAN is required for: Bank account opening, GST registration, Income tax return filing, TDS compliance. TAN is required for: TDS deduction and deposit, Quarterly TDS returns, Form 16/16A issuance.",
                    duration: "Auto-generated (7-15 days for card)",
                  },
                  {
                    step: 9,
                    title: "File NDH-1 Intimation (Within 90 Days of Incorporation)",
                    description:
                      "Form NDH-1 is an INTIMATION form that must be filed with MCA within 90 DAYS of incorporation to inform MCA that the company intends to function as a NIDHI COMPANY. NDH-1 contains: (1) Company name and CIN, (2) Date of incorporation, (3) Registered office address, (4) Details of directors (name, DIN, email, mobile), (5) Details of shareholders (name, number of shares held), (6) Authorized capital and paid-up capital, (7) Declaration that company will comply with Nidhi Rules 2014, (8) Declaration that company will achieve 200 members and ₹10 lakh NOF within 1 year. NDH-1 is a SIMPLE intimation — no attachments required. File online on MCA portal. Fee: ₹200. MCA acknowledges NDH-1 filing (no approval needed — just acknowledgment). Important: If NDH-1 is not filed within 90 days, company loses Nidhi status and becomes regular Public Ltd company (subject to higher compliances). Taxvio files NDH-1 within 15 days of incorporation to ensure timely compliance.",
                    duration: "Within 90 days (Taxvio files in 15 days)",
                  },
                  {
                    step: 10,
                    title: "Post-Incorporation Compliances (Immediate)",
                    description:
                      "After incorporation, following immediate compliances required: (1) First Board Meeting (within 30 days): Convene first Board meeting to: (a) Appoint first statutory auditor (Chartered Accountant), (b) Appoint additional directors if any, (c) Approve company seal, (d) Approve opening of current bank account, (e) Ratify registered office address, (f) Approve preliminary expenses, (g) APPROVE MEMBER ONBOARDING PLAN (target 200 members in 1 year), (h) APPROVE DEPOSIT AND LENDING POLICY (interest rates, loan terms, security requirements). Prepare Minutes of Board Meeting and file Form MGT-14 with ROC within 30 days. (2) Open Current Bank Account: Submit to bank: Certificate of Incorporation, PAN card, Board resolution, KYC of directors (PAN, Aadhaar, photograph), Registered office address proof. Banks conduct verification and open account within 5-7 days. (3) Issue Share Certificates: Allot shares to subscribers (initial 7 shareholders) and issue physical share certificates within 60 days. (4) Maintain Statutory Registers: Purchase and maintain: Register of Members, Register of Directors, Register of Deposits (Nidhi-specific), Register of Loans (Nidhi-specific), Minutes Book. (5) Member Recruitment Drive: Start recruiting members to reach 200 within 1 year. Each new member must: (a) Apply for membership, (b) Purchase at least 1 share (pay share value), (c) Fill KYC form (PAN, Aadhaar, address proof, photograph), (d) Receive share certificate. Taxvio provides POST-INCORPORATION COMPLIANCE KIT with statutory registers, share certificates, Board meeting templates, and member onboarding formats.",
                    duration: "Within 30-60 days",
                  },
                  {
                    step: 11,
                    title: "Achieve 200 Members & ₹10 Lakh NOF (Within 1 Year)",
                    description:
                      "This is the MOST CRITICAL compliance for Nidhi company. Within ONE YEAR of incorporation, Nidhi must: (1) Achieve Minimum 200 MEMBERS (Shareholders): Each member must hold at least 1 equity share. Members can be recruited via: (a) Community outreach (local area, housing society, employee groups), (b) Member referrals (existing members bring new members), (c) Advertising (within district limits), (d) Deposit mobilization (people who want to deposit become members by buying shares first). Member onboarding process: Collect application form → KYC documents (PAN, Aadhaar, address proof) → Share subscription form → Payment of share value → Issue share certificate → Update Register of Members. (2) Achieve ₹10 LAKH NET OWNED FUNDS (NOF): NOF = Paid-up equity capital + Free reserves - Accumulated losses - Intangible assets. Example calculation: At incorporation: Paid-up capital = ₹5 lakh, Reserves = 0, Losses = 0, Intangible = 0 → NOF = ₹5 lakh. After 1 year: If Nidhi earned ₹6 lakh profit and retained ₹5 lakh as reserves → NOF = ₹5 lakh (capital) + ₹5 lakh (reserves) = ₹10 lakh ✓. If Nidhi incurred ₹2 lakh loss → NOF = ₹5 lakh - ₹2 lakh = ₹3 lakh ✗ (non-compliant). Ways to build NOF: (a) Earn profits from interest spread (charge higher interest on loans than paid on deposits), (b) Issue more shares to members (increase paid-up capital), (c) Transfer profits to reserves instead of distributing as dividends. (3) Maintain 10% Deposits in Unencumbered Term Deposits: At least 10% of total deposits accepted from members must be invested in unencumbered term deposits with scheduled commercial banks. Example: If total deposits = ₹50 lakh, minimum ₹5 lakh must be in bank FDs (cannot be pledged/mortgaged). Taxvio provides MEMBER ONBOARDING SUPPORT and NOF COMPLIANCE STRATEGY to help you achieve 200 members and ₹10 lakh NOF targets within 1 year.",
                    duration: "Within 1 year of incorporation",
                  },
                  {
                    step: 12,
                    title: "File NDH-4 Declaration (After Achieving 200 Members & ₹10 Lakh NOF)",
                    description:
                      "Form NDH-4 is a DECLARATION form that must be filed with MCA AFTER achieving 200 members and ₹10 lakh NOF (within 1 year of incorporation). NDH-4 contains: (1) Company name and CIN, (2) Date of incorporation, (3) Declaration that company has: (a) Minimum 200 members (shareholders), (b) Net Owned Funds of ₹10 lakh or more, (c) 10% of deposits invested in unencumbered term deposits with banks, (d) Ratio of NOF to deposits is 1:20 or better. (4) Details of members (name, address, shares held — upload member list), (5) Details of deposits accepted and loans given (upload summary), (6) Audited financial statements (Balance Sheet, P&L, Cash Flow), (7) Auditor's certificate confirming compliance with Nidhi Rules 2014, (8) Declaration by director(s) and company secretary (if appointed) that all information is true. Attachments with NDH-4: (a) Audited financial statements (signed by auditor), (b) Register of Members (showing 200+ members), (c) Register of Deposits and Loans, (d) Bank certificate for 10% unencumbered term deposits, (e) Board resolution approving NDH-4 filing. NDH-4 is digitally signed by directors using DSC and filed on MCA portal. Fee: ₹10,000. MCA scrutinizes NDH-4 (30-45 days). If compliant, MCA issues acknowledgment confirming Nidhi status. If non-compliant, MCA may issue show-cause notice or withdraw Nidhi status. Important: If NDH-4 is not filed within 1 year, or if 200 members/₹10 lakh NOF targets are not achieved, company LOSES Nidhi status and becomes regular Public Ltd company (with higher compliance burden and possible penalties). Taxvio assists with NDH-4 filing, audit coordination, and compliance documentation.",
                    duration: "Within 1 year (after meeting targets)",
                  },
                  {
                    step: 13,
                    title: "Ongoing Annual Compliances (ROC Filings)",
                    description:
                      "Nidhi companies must file following annual compliances with ROC (same as Public Ltd companies): (1) Annual Return (Form MGT-7): Due within 60 days of Annual General Meeting (AGM). Must be certified by Company Secretary (CS). (2) Financial Statements (Form AOC-4): Balance sheet, profit & loss account, cash flow statement, auditor's report. Due within 30 days of AGM. (3) Annual General Meeting (AGM): MANDATORY within 6 months of financial year end. All members must be invited (21 days notice). (4) Board Meetings: Minimum 4 Board meetings per year (one every quarter) with gap not exceeding 120 days. (5) Income Tax Return (ITR-6): Due by 31st October every year. (6) TDS Returns (quarterly): If deducting TDS on interest payments, file 26Q, 27Q. (7) Auditor's Report: Statutory audit by CA mandatory. Auditor must certify compliance with Nidhi Rules 2014 in audit report. (8) NIDHI-SPECIFIC COMPLIANCES: (a) Maintain 200+ members at all times (if member count falls below 200, Nidhi status is at risk), (b) Maintain ₹10 lakh+ NOF at all times, (c) Maintain 10% deposits in unencumbered bank FDs, (d) File NDH-2 (Annual Return specific to Nidhi) with MCA (due by 30th June every year) — contains details of deposits, loans, members, NOF, compliance with ratios, (e) NOF-to-Deposits Ratio: Ensure deposits do not exceed 20x of NOF (if NOF = ₹10 lakh, max deposits = ₹2 crore; if deposits exceed, either increase NOF or stop accepting new deposits), (f) Interest Rate Compliance: Interest paid on deposits and charged on loans must be within RBI guidelines (currently, deposit interest capped at RBI repo rate + 3%, loan interest cannot exceed deposit interest + 5%). Penalties for non-compliance: ₹100-500 per day (company) + ₹100-500 per day (each director) depending on default. If Nidhi violates Nidhi Rules repeatedly, MCA can withdraw Nidhi status and convert company to regular Public Ltd (or even prosecute directors under Section 447 for fraud). Taxvio offers ANNUAL COMPLIANCE PACKAGE for Nidhi Companies (₹49,999/year) covering: MGT-7, AOC-4, ITR-6, NDH-2, Board meetings, AGM support, and compliance calendar.",
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
                  <strong>15-20 working days</strong> from document submission to
                  Certificate of Incorporation + NDH-1 filing (ready to start
                  operations). Breakdown: DSC (3-5 days) + DIN (1-2 days) + RUN
                  (2-3 days) + Capital deposit (3-5 days) + MOA/AOA (3-5 days) +
                  SPICe+ approval (7-10 days) + NDH-1 filing (within 15 days).{" "}
                  <strong>Additional 1 YEAR required</strong> to achieve 200
                  members + ₹10 lakh NOF and file NDH-4 declaration.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Nidhi Company Registration
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For All Directors (Minimum 3)
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN Card (mandatory)",
                    "Aadhaar Card (identity + address)",
                    "Passport-size photograph (recent, white background)",
                    "Bank statement or utility bill (<2 months old — address proof)",
                    "Email ID and mobile number",
                    "Specimen signature (scanned)",
                    "Passport (if foreign director)",
                    "Proof of residential status (at least 2 directors must be India residents)",
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
                  For Initial Subscribers (Minimum 7 Members)
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN Card (mandatory for all subscribers)",
                    "Aadhaar Card (KYC and identity)",
                    "Passport-size photograph",
                    "Address proof (bank statement/utility bill <2 months)",
                    "Email ID and mobile number",
                    "Specimen signature",
                    "Passport (if NRI/foreign subscriber)",
                    "PROOF OF CAPITAL CONTRIBUTION: Bank statement showing transfer of subscribed amount to proposed Nidhi's bank account",
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
                  For Registered Office
                </p>
                <ul className="space-y-3">
                  {[
                    {
                      title: "If Owned Property:",
                      items: [
                        "Sale deed or property title deed",
                        "Property tax receipt or municipal extract",
                        "Electricity bill (<2 months old)",
                        "NOC from owner (if in director's name)",
                      ],
                    },
                    {
                      title: "If Rented Property:",
                      items: [
                        "Rent agreement (notarized, 11+ month lease)",
                        "NOC from landlord (letterhead, signature, PAN, address proof)",
                        "Electricity bill in landlord's name (<2 months)",
                        "Landlord's PAN card",
                        "Landlord's Aadhaar or passport",
                        "Landlord's property ownership proof",
                      ],
                    },
                  ].map((section) => (
                    <li key={section.title} className="space-y-2">
                      <p className="font-bold text-purple-700 text-sm">
                        {section.title}
                      </p>
                      <ul className="ml-4 space-y-1">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <span className="text-purple-500 mt-0.5">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-orange-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-orange-100 text-orange-700">
                  Capital & Financial Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Proposed Nidhi current account opening documents",
                    "BANKER'S CERTIFICATE confirming ₹5 lakh capital deposit",
                    "Authorized capital structure details (e.g., ₹10 lakh = 1,00,000 shares @ ₹10 each)",
                    "Shareholding pattern (how shares distributed among 7 subscribers)",
                    "Bank statements of all 7 subscribers showing capital transfer",
                    "Member onboarding plan (strategy to reach 200 members in 1 year)",
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
                  "Proposed Nidhi name (3-5 options with 'Nidhi Limited' suffix)",
                  "Main business activity: Accepting deposits from and lending to members (mutual benefit)",
                  "Authorized capital (recommended ₹10-25 lakh)",
                  "Paid-up capital (minimum ₹5 lakh at incorporation)",
                  "Shareholding pattern among initial 7 subscribers",
                  "Details of 3 directors (name, father's name, DOB, nationality, occupation, DIN if existing)",
                  "Registered office address (complete with building, locality, city, pincode, state)",
                  "Target community/member base (e.g., housing society, employee group, village community, etc.)",
                  "Deposit and lending policy (proposed interest rates, loan terms, security requirements)",
                  "Strategy to achieve 200 members within 1 year",
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
              Common Mistakes in Nidhi Company Registration
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Nidhi registration has unique compliance requirements — avoid these
                critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Not Using 'Nidhi Limited' Suffix in Company Name",
                    icon: "🏦",
                    problem:
                      "Applying for name approval (RUN) with suffix 'Private Limited' or just 'Limited' instead of 'Nidhi Limited'. MCA rejects RUN application for Nidhi companies with incorrect suffix. Or using generic names without 'Nidhi' keyword (e.g., 'ABC Financial Services Limited') — this confuses Nidhi status.",
                    solution:
                      "Nidhi company name MUST end with 'Nidhi Limited' ONLY. Examples: CORRECT — 'Community Savings Nidhi Limited', 'ABC Mutual Benefit Nidhi Limited', 'XYZ Thrift Nidhi Limited'. INCORRECT — 'ABC Finance Limited', 'XYZ Private Limited', 'Community Savings Ltd'. Recommended to include keywords like 'Nidhi', 'Mutual Benefit', 'Savings', 'Thrift', etc. in the name for clarity. Taxvio ensures correct name suffix and Nidhi-specific naming during RUN application.",
                  },
                  {
                    mistake: "Not Including Nidhi Objectives in MOA",
                    icon: "📜",
                    problem:
                      "Using standard Public Ltd or NBFC MOA templates for Nidhi company. These templates: (1) Do not have Nidhi-specific objects clause ('cultivating thrift and savings among members', 'lending to members only'), (2) May include prohibited activities (chit funds, leasing, insurance, etc.), (3) May not mention member-based deposit/lending restriction. If MOA does not clearly state Nidhi objectives, MCA may reject SPICe+ or refuse NDH-4 approval later.",
                    solution:
                      "MAIN OBJECTS clause in MOA MUST state: 'To carry on the business of a Nidhi company as defined under Section 406 of the Companies Act, 2013 and Nidhi Rules, 2014, for the purpose of cultivating the habit of thrift and savings amongst its members, receiving deposits from, and lending to, its members only, for their mutual benefit.' Also include: 'Every depositor and borrower shall be a member (shareholder) of the company.' 'Company shall not engage in chit fund, hire purchase, leasing, insurance, or any business other than accepting deposits and lending.' Taxvio prepares NIDHI-SPECIFIC MOA with all mandatory clauses compliant with Nidhi Rules 2014.",
                  },
                  {
                    mistake: "Not Filing NDH-1 Within 90 Days",
                    icon: "📋",
                    problem:
                      "After receiving Certificate of Incorporation, forgetting to file Form NDH-1 (Intimation to MCA that company will function as Nidhi). NDH-1 has a STRICT 90-DAY DEADLINE from date of incorporation. If missed: Company automatically loses Nidhi status and becomes regular Public Ltd company — higher compliance burden, no deposit-taking allowed without RBI license, penalties for non-compliance.",
                    solution:
                      "File Form NDH-1 IMMEDIATELY after incorporation (within 15-30 days recommended, well before 90-day deadline). NDH-1 is a simple intimation form (no attachments, just company details and declaration). Fee: ₹200. Takes 1 day to file online. Set calendar reminder at day 15 and day 60 after incorporation to ensure NDH-1 is not missed. Taxvio files NDH-1 as part of standard Nidhi incorporation service within 15 days of COI.",
                  },
                  {
                    mistake: "Failing to Achieve 200 Members Within 1 Year",
                    icon: "👥",
                    problem:
                      "Starting Nidhi company with 7 members and not aggressively recruiting new members. After 1 year, company has only 50-100 members (below 200 minimum). Result: Cannot file NDH-4, loses Nidhi status, MCA may impose penalties, company cannot accept deposits or lend (entire business model collapses). Or recruiting fake/benami members (family members who don't actually use Nidhi services) — this is illegal and can lead to fraud charges.",
                    solution:
                      "Develop AGGRESSIVE MEMBER RECRUITMENT STRATEGY from Day 1: (1) Target community: Housing societies, employee groups, village communities, professional associations, caste associations, etc. (2) Offer attractive deposit interest rates (within RBI caps) to attract members. (3) Conduct awareness campaigns — meetings, pamphlets, door-to-door visits (within district). (4) Member referral incentives (existing members bring new members, get small commission/bonus). (5) Open multiple collection centers (within district) to make deposits convenient. (6) Tie-up with local influencers/community leaders for member mobilization. Track member count MONTHLY (set milestones: 50 by month 3, 100 by month 6, 150 by month 9, 200 by month 12). Taxvio provides MEMBER ONBOARDING TEMPLATES and tracking tools to help you reach 200 members.",
                  },
                  {
                    mistake: "Not Maintaining ₹10 Lakh NOF After 1 Year",
                    icon: "💰",
                    problem:
                      "Starting with ₹5 lakh paid-up capital and assuming NOF will automatically reach ₹10 lakh. If Nidhi incurs losses in first year (high operational costs, loan defaults, low interest spread), NOF falls below ₹10 lakh. Example: Paid-up capital ₹5 lakh - ₹3 lakh losses = NOF ₹2 lakh (non-compliant). Cannot file NDH-4, loses Nidhi status.",
                    solution:
                      "STRATEGIES to build ₹10 lakh NOF within 1 year: (1) Maintain profitable operations: Charge higher loan interest (e.g., 15%) than deposit interest (e.g., 9%) — 6% spread × ₹50 lakh average loan book = ₹3 lakh annual profit. (2) Retain profits as reserves (do NOT distribute all profits as dividends in first year). (3) Issue additional shares to members (increase paid-up capital from ₹5 lakh to ₹8-10 lakh). (4) Charge processing fees on loans (₹500-1,000 per loan). (5) Control costs (minimize office rent, use volunteer directors, automate accounting). (6) Avoid loan defaults (strict KYC, take collateral/guarantees, follow-up on EMIs). If NOF is falling short by month 9-10, immediately issue new shares to members or ask directors to infuse capital. Taxvio provides NOF TRACKING TOOL and financial planning support.",
                  },
                  {
                    mistake: "Accepting Deposits from Non-Members",
                    icon: "🚫",
                    problem:
                      "To quickly mobilize deposits, Nidhi accepts money from non-members (people who have not bought shares). This VIOLATES Nidhi Rules 2014. Example: Person deposits ₹1 lakh in Nidhi without becoming shareholder. If RBI/MCA audits and finds non-member deposits, Nidhi can be: (1) Penalized under Companies Act (₹25,000-₹25 lakh), (2) Prosecuted for operating as illegal deposit-taking scheme, (3) Directors can be imprisoned (up to 7 years under Prize Chits and Money Circulation Schemes (Banning) Act), (4) Nidhi status withdrawn.",
                    solution:
                      "STRICT RULE: NO DEPOSITS FROM NON-MEMBERS. Process for accepting deposits: (1) Person approaches Nidhi wanting to deposit money. (2) First, person must BUY AT LEAST 1 SHARE (₹10 or ₹100 depending on face value) and become member. (3) Issue share certificate and update Register of Members. (4) Only AFTER becoming member, person can deposit money. (5) Maintain separate Register of Deposits showing member number, deposit amount, interest rate, tenure. (6) Verify PAN/Aadhaar of every depositor (KYC compliance). Similarly for loans: ONLY MEMBERS CAN BORROW (person must be shareholder to take loan). Taxvio provides DEPOSIT MANAGEMENT SOFTWARE with built-in member verification to prevent non-member deposits.",
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
              Nidhi Company Registration Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive incorporation and compliance packages for Nidhi companies:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹29,999",
                  popular: false,
                  features: [
                    "Name search & RUN filing (name with 'Nidhi Limited' suffix)",
                    "DSC for 3 directors (₹6,000 value)",
                    "DIN for 3 directors",
                    "Bank account opening coordination for ₹5L capital",
                    "Banker's Certificate procurement",
                    "MOA & AOA with Nidhi objectives (as per Nidhi Rules 2014)",
                    "SPICe+ form filing (INC-32 with Nidhi category selection)",
                    "Certificate of Incorporation (CIN)",
                    "PAN & TAN application",
                    "NDH-1 Intimation filing (within 90 days)",
                    "Email & phone support",
                  ],
                  limitations: [
                    "No member onboarding support",
                    "No NDH-4 filing assistance",
                    "No deposit/lending policy templates",
                    "No ongoing compliance support",
                  ],
                  ideal:
                    "Community groups, housing societies with pre-identified 200 members",
                },
                {
                  name: "Standard",
                  price: "₹49,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "First Board meeting minutes & resolutions",
                    "Share certificate printing (for initial 7 members)",
                    "Statutory registers (Register of Members, Register of Deposits, Register of Loans)",
                    "Deposit policy template (interest rates, tenure, TDS)",
                    "Lending policy template (loan types, interest rates, security, EMI calculation)",
                    "Member application form & KYC templates",
                    "Member onboarding guide (strategy to reach 200 members)",
                    "NOF compliance tracking tool",
                    "Current account opening assistance",
                    "Priority support (WhatsApp + email)",
                  ],
                  limitations: ["NDH-4 filing not included (offered as add-on)"],
                  ideal:
                    "New Nidhi companies needing member recruitment and compliance support",
                },
                {
                  name: "Complete",
                  price: "₹79,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "200 Members onboarding support (recruitment strategy, marketing materials)",
                    "Deposit mobilization plan (within district limits)",
                    "Loan underwriting guidelines & formats",
                    "Quarterly compliance review calls (till NDH-4 filing)",
                    "NOF target achievement consulting (profit planning, capital infusion strategy)",
                    "NDH-4 Declaration filing (after achieving 200 members + ₹10L NOF)",
                    "Auditor coordination for NDH-4 certification",
                    "Register of Members, Deposits, Loans compilation for NDH-4",
                    "First year annual compliance (MGT-7, AOC-4) included",
                    "Dedicated CA + CS team with monthly review",
                  ],
                  limitations: [],
                  ideal:
                    "Nidhi companies wanting full handholding from incorporation to NDH-4 filing",
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
                    service: "NDH-4 Declaration Filing",
                    price: "₹19,999",
                    desc: "After achieving 200 members + ₹10L NOF",
                  },
                  {
                    service: "Annual Compliance Package",
                    price: "₹49,999/year",
                    desc: "MGT-7, AOC-4, NDH-2, ITR-6, Board meetings",
                  },
                  {
                    service: "Member Recruitment Campaign",
                    price: "₹9,999",
                    desc: "Marketing materials, pamphlets, local ads",
                  },
                  {
                    service: "Deposit Management Software",
                    price: "₹14,999",
                    desc: "Member records, deposit tracking, interest calculation",
                  },
                  {
                    service: "Loan Management System",
                    price: "₹14,999",
                    desc: "Loan application, EMI tracking, default alerts",
                  },
                  {
                    service: "Additional DSC (4th director onwards)",
                    price: "₹1,500/director",
                    desc: "For companies with 4+ directors",
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
              What Our Nidhi Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Ramesh Kumar, Director",
                  company: "Community Savings Nidhi Limited",
                  location: "Meerut, UP",
                  text: "We wanted to start a savings & lending group for our housing society (500+ families). Taxvio registered our Nidhi company in 18 days and helped us achieve 200 members within 9 months through their member recruitment strategy. Their deposit/lending policy templates were excellent. Now we have ₹80 lakh deposits and growing!",
                },
                {
                  name: "Priya Sharma, Managing Director",
                  company: "Women Empowerment Nidhi Limited",
                  location: "Muzaffarnagar, UP",
                  text: "We formed a women-focused Nidhi for SHG (Self-Help Group) members. Taxvio handled entire incorporation, NDH-1 filing, and even helped us file NDH-4 after we crossed 200 members. Their Complete package (₹79,999) was worth every rupee — saved us from hiring separate CA, CS, and consultants. Highly recommended!",
                },
                {
                  name: "Suresh Gupta, Chairman",
                  company: "Employee Welfare Nidhi Limited",
                  location: "Noida, UP",
                  text: "Our company employees wanted a mutual benefit fund. Taxvio explained Nidhi vs NBFC difference and registered our Nidhi in 20 days. Their deposit management software is a lifesaver — tracks 300+ members' deposits, calculates interest automatically, generates TDS reports. Great service!",
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
              Nidhi Company Registration Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides online Nidhi Company registration services for community
              lending groups across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote incorporation with
              doorstep DSC delivery, member onboarding support, and MCA filing.
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
              Other ROC & Financial Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "NBFC Registration",
                  icon: "🏦",
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
                  title: "Producer Company",
                  icon: "🌾",
                  link: "/serviceslist/roc/producer-company",
                  desc: "Farmer producer organization",
                },
                {
                  title: "Annual ROC Filing",
                  icon: "📊",
                  link: "/serviceslist/roc/annual-filing",
                  desc: "MGT-7, AOC-4, NDH-2 compliance",
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
                    Build Community Thrift Society
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Register Nidhi Company — Start Member-Based Lending Business
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get MCA-regulated mutual benefit society without RBI license.
                    Complete registration with SPICe+ filing, ₹5 lakh capital
                    compliance, MOA/AOA with Nidhi objectives, NDH-1 intimation,
                    200 members onboarding support, and NDH-4 declaration. Starting
                    ₹29,999 with expert CA & CS team. Cultivate thrift & savings
                    among your community!
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Register Now — ₹29,999
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
      q: "Can Nidhi Company accept deposits from public (non-members)?",
      a: "NO. This is the FUNDAMENTAL RULE of Nidhi company. Nidhi can accept deposits ONLY from its MEMBERS (shareholders). Non-members CANNOT deposit money. Process: If a person wants to deposit money in Nidhi, they must FIRST become a member by purchasing at least 1 share → Then they can deposit. This is mandatory as per Section 406 and Nidhi Rules 2014. If Nidhi accepts deposits from non-members, it violates the law and can be: (1) Prosecuted under Prize Chits and Money Circulation Schemes (Banning) Act, (2) Penalized by MCA (₹25,000-₹25 lakh fine), (3) Directors can be imprisoned (up to 7 years), (4) Nidhi status withdrawn, company shut down. RECOMMENDATION: Maintain strict KYC records. Before accepting ANY deposit, verify depositor is a shareholder in Register of Members. Use deposit management software with member verification feature.",
    },
    {
      q: "What is the difference between Nidhi Company and Chit Fund?",
      a: "Nidhi and Chit Fund are COMPLETELY DIFFERENT: (1) NIDHI COMPANY: (a) Registered under Companies Act 2013, (b) Accepts deposits from members and lends to members, (c) Operates like a savings & lending cooperative, (d) Interest-based model (deposit interest + loan interest), (e) No bidding/auction involved, (f) Regulated by MCA (Ministry of Corporate Affairs), (g) Legal and transparent. (2) CHIT FUND: (a) Registered under Chit Funds Act 1982 (state-level registration), (b) Operates on pooling + bidding model (members contribute monthly, one member gets lump sum via auction each month), (c) Involves element of chance (lottery-like), (d) Discount/dividend distributed to non-winner members, (e) High risk of fraud (many ponzi schemes disguised as chit funds), (f) Regulated by state governments (not MCA/RBI), (g) Legal but high regulatory scrutiny. IMPORTANT: Nidhi company CANNOT conduct chit fund activities. MOA must explicitly exclude chit fund business. If Nidhi operates chit fund, it violates Nidhi Rules and can be prosecuted.",
    },
    {
      q: "Do Nidhi deposits have any insurance or guarantee?",
      a: "NO. Nidhi company deposits are NOT covered under Deposit Insurance and Credit Guarantee Corporation (DICGC) scheme. Bank deposits are insured up to ₹5 lakh per depositor under DICGC — but Nidhi deposits are NOT. This means: If Nidhi defaults or goes bankrupt, members lose their deposit money. There is no government guarantee or insurance to recover deposits. RISK MITIGATION for depositors: (1) Check Nidhi's financial health before depositing (ask for audited balance sheet, profit/loss statement), (2) Verify NDH-4 compliance (Nidhi must have 200+ members and ₹10 lakh+ NOF), (3) Deposit only in Nidhis with good track record (5+ years operation, no default history), (4) Diversify deposits (don't put all money in one Nidhi), (5) Monitor interest payouts (if Nidhi delays interest payments, it's a red flag). For Nidhi companies: Maintain high transparency, publish annual reports, conduct member meetings regularly, invest 10% deposits in bank FDs (as per Nidhi Rules) to ensure liquidity.",
    },
    {
      q: "Can Nidhi Company open branches outside the district of its registered office?",
      a: "NOT WITHOUT APPROVAL. As per Nidhi Rules 2014 (Rule 7): Nidhi company can freely open branches/collection centers WITHIN THE DISTRICT where its registered office is located. But to open branch OUTSIDE the district (in another district/state), Nidhi must obtain prior approval from REGIONAL DIRECTOR (MCA). Process to open branch outside district: (1) Pass Board resolution approving branch opening (location, capital allocation, staff), (2) Apply to Regional Director (under Nidhi Rules) with: (a) Details of proposed branch (address, area, expected business), (b) Justification (why branch is needed — member demand, geographic spread, etc.), (c) Financial capacity (NOF, deposits, loans, profitability), (d) Compliance certificate (CA-certified that Nidhi is compliant with all Nidhi Rules). (3) Regional Director scrutinizes application (2-3 months). (4) If satisfied, grants approval with conditions (e.g., maintain separate accounts for each branch, file quarterly reports, etc.). RECOMMENDATION: For initial years, focus on single-district operations (easier compliance). Once you achieve 500+ members and ₹1 crore deposits, then apply for inter-district branches.",
    },
    {
      q: "What happens if Nidhi Company fails to file NDH-4 within 1 year?",
      a: "If Nidhi company fails to file Form NDH-4 within 1 year of incorporation (or fails to achieve 200 members + ₹10 lakh NOF), the following consequences occur: (1) LOSS OF NIDHI STATUS: Company automatically loses its Nidhi status and becomes a REGULAR PUBLIC LIMITED COMPANY. (2) CANNOT ACCEPT DEPOSITS: As a regular public Ltd company, it CANNOT accept deposits without RBI license (NBFC registration required — ₹2 crore minimum capital). Any deposits accepted are ILLEGAL. (3) HIGHER COMPLIANCE BURDEN: Public Ltd companies have stricter compliance than Nidhis (e.g., need Company Secretary if paid-up capital ≥ ₹5 crore, independent directors if listed, etc.). (4) PENALTIES & PROSECUTION: MCA can impose penalties under Section 450 (₹10,000-₹5 lakh per default). Directors can be prosecuted for continuing deposit business without authorization. (5) MEMBER DEPOSITS AT RISK: If Nidhi loses status and cannot operate, existing deposits may become stuck (members cannot withdraw). Company may be forced to wind up. WHAT TO DO IF YOU MISS 1-YEAR DEADLINE? (1) STOP accepting new deposits immediately (to avoid illegal deposit-taking charges). (2) Repay existing deposits to members as quickly as possible. (3) File application with Regional Director (MCA) explaining reasons for non-compliance and requesting extension/condonation. (4) Simultaneously work to achieve 200 members + ₹10 lakh NOF targets. (5) Once achieved, file NDH-4 with condonation application. Regional Director MAY grant extension if genuine reasons (medical emergency, natural calamity, etc.) — but not guaranteed. PREVENTION IS BETTER: Track member count and NOF monthly. If falling short by month 9-10, take corrective action (aggressive member recruitment, capital infusion by directors).",
    },
    {
      q: "Can Nidhi Company give loans to non-members (public)?",
      a: "NO. Just like deposits, Nidhi can give loans ONLY to its MEMBERS (shareholders). Non-members CANNOT borrow from Nidhi. This is mandatory as per Nidhi Rules 2014, Rule 5(c). Process: If a person wants to take loan from Nidhi, they must FIRST become a member by purchasing shares → Then apply for loan → Nidhi Board evaluates loan application (credit score, income proof, collateral, guarantor) → Approves loan → Disburses to member's bank account. Loan can be given for: (1) Personal needs (medical emergency, education, marriage, house repair, etc.), (2) Business purposes (working capital, equipment purchase, stock, etc.), (3) Any other purpose as per Nidhi's lending policy. Interest rate: Nidhi can charge any interest rate (no legal cap), but typically 12-18% p.a. Security: Can take collateral (property mortgage, gold, FD, etc.) or guarantor (another member). Repayment: Monthly EMI (Equated Monthly Installment) or lump sum at maturity. If Nidhi gives loans to non-members: (1) Violates Nidhi Rules → Risk of Nidhi status withdrawal, (2) Cannot legally enforce loan recovery (contract is void), (3) Directors can be penalized/prosecuted. RECOMMENDATION: Maintain Register of Loans showing: Loan number, Member name & number, Loan amount, Interest rate, Tenure, Security/guarantor, EMI schedule, Outstanding balance. Before sanctioning ANY loan, verify borrower is a shareholder.",
    },
    {
      q: "Is Company Secretary (CS) appointment mandatory for Nidhi Company?",
      a: "It depends on PAID-UP SHARE CAPITAL: (1) If Nidhi's paid-up capital is LESS THAN ₹5 CRORE: Company Secretary (CS) appointment is NOT mandatory (optional). (2) If paid-up capital is ₹5 CRORE OR MORE: CS appointment is MANDATORY as per Section 203 of Companies Act. Most Nidhi companies start with ₹5 lakh paid-up capital (minimum requirement) — so CS is NOT mandatory initially. However, as Nidhi grows (issues more shares to members, increases capital), if paid-up reaches ₹5 crore, CS must be appointed within 6 months. CS responsibilities (if appointed): (1) ROC compliance (annual returns MGT-7, financial statements AOC-4, event-based filings), (2) Board meeting coordination (notice, agenda, minutes, resolutions), (3) General meeting coordination (AGM notice, attendance, voting, minutes), (4) Statutory registers maintenance (Members, Directors, Deposits, Loans, Charges), (5) NIDHI-SPECIFIC: NDH-2 annual return filing, NDH-4 declaration certification, compliance with Nidhi Rules 2014. CS cost: Full-time CS salary: ₹25,000-50,000/month. Part-time CS (retainer basis): ₹10,000-20,000/month. RECOMMENDATION: Even if CS is not mandatory, it's HIGHLY RECOMMENDED to hire part-time CS or engage CS firm (like Taxvio) for compliance — Nidhi Rules compliance is complex and missing deadlines can result in penalties and status loss.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Nidhi Company Registration
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