// app/serviceslist/roc/fc-gpr-fdi-compliance/FcGprFdiComplianceClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "FC-GPR Filing & Foreign Direct Investment (FDI) Compliance Services - Complete RBI & MCA Support",
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
    "Professional FDI compliance and FC-GPR (Foreign Currency - Gross Provisional Return) filing support for Indian companies receiving foreign direct investment from overseas investors. Complete service includes FDI structure review and sectoral cap verification under FEMA (Foreign Exchange Management Act) and FDI Policy, pricing guideline compliance (SEBI ICDR for listed companies, DCF valuation for unlisted companies), coordination with registered valuer for valuation report, foreign investor KYC and documentation, Board and shareholder resolution drafting, share allotment and certificate issuance, filing of Form PAS-3 with ROC within 30 days, and filing of FC-GPR on the RBI FIRMS (Foreign Investment Reporting and Management System) portal within 30 days of receipt of FDI. Expert CA & CS team ensuring compliance with automatic route and government route FDI norms. Serving startups, growth-stage companies, and large corporates in Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune, Bangalore and pan-India.",
  serviceType: "FC-GPR Filing & FDI Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "9999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "9999",
      maxPrice: "49999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is FC-GPR and why must it be filed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FC-GPR stands for Foreign Currency - Gross Provisional Return. It is a mandatory return that must be filed on the RBI's FIRMS (Foreign Investment Reporting and Management System) portal by every Indian company that receives foreign direct investment (FDI) or makes downstream investment in another Indian company. The FC-GPR must be filed within 30 days of receipt of the foreign investment (allotment of shares to the foreign investor) or within 30 days of downstream investment. The return captures details of the investment — investor name and country, amount invested, number and type of shares allotted, sectoral classification, pricing (premium/discount to fair value), and compliance with sectoral caps and entry routes (automatic or government). FC-GPR is the primary reporting mechanism under FEMA for FDI into India, and non-filing attracts penalties under FEMA and can jeopardize the company's ability to receive future foreign investment or repatriate funds.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between automatic route and government route FDI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The automatic route and government route are the two entry channels for FDI into India, governed by the FDI Policy issued by DPIIT (Department for Promotion of Industry and Internal Trade). Under the AUTOMATIC ROUTE, FDI is allowed up to the sectoral cap (or 100% where no cap applies) without requiring prior approval from the Government — the company can receive the investment, allot shares, and report via FC-GPR on the FIRMS portal. Most sectors (e.g., manufacturing, IT services, e-commerce marketplace, renewable energy) allow 100% FDI under the automatic route. Under the GOVERNMENT ROUTE, FDI requires prior approval from the relevant ministry or the Foreign Investment Facilitation Portal (FIFP) before the investment can be accepted — this applies to sensitive sectors such as defence (beyond 74%), broadcasting, print media, multi-brand retail, civil aviation (beyond certain thresholds), and sectors where the investor is from a country sharing a land border with India (requiring government approval irrespective of sector or percentage). The distinction is critical because government route investments cannot proceed until approval is obtained, and the FC-GPR filing references the approval number.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for not filing FC-GPR or filing it late?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-filing or delayed filing of FC-GPR is a contravention under FEMA (Foreign Exchange Management Act), 1999 and attracts the following consequences: (1) Monetary penalty: Up to ₹2 lakh under Section 13 of FEMA (and in certain cases, up to three times the sum involved in the contravention, or ₹2 lakh, whichever is higher), levied by the Reserve Bank of India or the Enforcement Directorate. (2) Compounding of the contravention: The company may need to apply for compounding (settlement) of the FEMA violation by paying a compounding fee to the RBI, which can range from ₹5,000 to several lakhs depending on the delay and the quantum of investment. (3) Future FDI restrictions: RBI or AD (Authorized Dealer) banks may flag the company's non-compliance, making it difficult to receive future FDI or repatriate funds to foreign investors. (4) FEMA investigation: Prolonged or willful non-compliance can trigger investigation by the Enforcement Directorate, potentially leading to prosecution and further penalties. The 30-day deadline from the date of allotment is strictly enforced, so timely filing is essential — Taxvio ensures FC-GPR is filed well within the 30-day window to avoid all penalties.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function FcGprFdiComplianceClient() {
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
          ⚠️ FC-GPR Deadline: Within 30 Days of Share Allotment to Foreign Investor
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
              <span className="text-white">FC-GPR & FDI Compliance</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🌍 Foreign Investment Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  FC-GPR Filing &<br />
                  <span className="text-[#7ecbf0]">Foreign Direct Investment</span>
                  <br />
                  Compliance Services
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Raising capital from{" "}
                  <strong className="text-white">
                    overseas angel investors, VCs, or PE funds
                  </strong>
                  ? Every Indian company receiving{" "}
                  <strong className="text-white">
                    Foreign Direct Investment (FDI)
                  </strong>{" "}
                  must comply with{" "}
                  <strong className="text-white">
                    FEMA (Foreign Exchange Management Act)
                  </strong>{" "}
                  and the{" "}
                  <strong className="text-white">FDI Policy</strong> — including{" "}
                  <strong className="text-white">
                    filing Form FC-GPR on the RBI FIRMS portal within 30 days
                  </strong>{" "}
                  of share allotment. Non-compliance attracts{" "}
                  <strong className="text-white">
                    penalties up to ₹2 lakh under FEMA Section 13
                  </strong>{" "}
                  and can block future foreign investment.{" "}
                  <strong className="text-white">Taxvio</strong> provides
                  end-to-end FDI compliance —{" "}
                  <strong className="text-white">
                    sectoral cap verification, pricing guideline review,
                    valuation report coordination, KYC, FC-GPR filing, and PAS-3
                    ROC filing
                  </strong>{" "}
                  — ensuring full regulatory compliance in{" "}
                  <strong className="text-white">7-10 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get FDI Support — ₹9,999 →
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
                    "✅ 7-10 Days Setup",
                    "✅ FIRMS Portal Filing",
                    "✅ Pricing Compliance",
                    "✅ CA & CS Team",
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
                    ["📅", "FC-GPR: Within 30 days of allotment"],
                    ["🌐", "Portal: RBI FIRMS"],
                    ["📊", "Pricing: DCF valuation or SEBI ICDR"],
                    ["📋", "PAS-3: Within 30 days to ROC"],
                    ["⚖️", "Penalty: Up to ₹2 lakh (FEMA)"],
                    ["💼", "Starting fee: ₹9,999"],
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
              { number: "180+", label: "FDI Compliances Done", icon: "🌍" },
              { number: "7-10 Days", label: "Average Timeline", icon: "⏰" },
              { number: "30 Days", label: "FC-GPR Deadline", icon: "📅" },
              { number: "₹9,999", label: "Starting Fee", icon: "💼" },
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
              "✔ FEMA Compliance Experts",
              "✔ RBI FIRMS Portal",
              "✔ Registered Valuer Network",
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
          {/* WHAT IS FDI COMPLIANCE */}
          <section id="what-is-fdi">
            <SectionLabel text="Understanding FDI & FC-GPR" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is FC-GPR and FDI Compliance?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Foreign Direct Investment (FDI)</strong> is
                  investment made by a non-resident entity (individual, company,
                  fund, or any other entity incorporated outside India) in the
                  share capital of an Indian company, with the intent to acquire
                  a lasting interest and effective voice in the management.
                </p>
                <p>
                  <strong>FC-GPR (Foreign Currency - Gross Provisional Return)</strong>{" "}
                  is a mandatory return filed on the{" "}
                  <strong>
                    RBI FIRMS (Foreign Investment Reporting and Management System)
                    portal
                  </strong>{" "}
                  within <strong>30 days</strong> of receiving FDI (i.e., within
                  30 days of allotment of shares to the foreign investor). It
                  reports the details of the foreign investment transaction —
                  investor name, country, amount, number of shares, pricing, and
                  sectoral compliance.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🌍 Key Features of FDI & FC-GPR Compliance
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Governed by FEMA & FDI Policy",
                        desc: "FDI into India is regulated by the Foreign Exchange Management Act (FEMA), 1999 and the FDI Policy issued annually by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce.",
                      },
                      {
                        title: "Two Entry Routes: Automatic & Government",
                        desc: "FDI can enter via the automatic route (no prior approval required, just post-facto reporting) or the government route (prior approval from FIFP or relevant ministry required before investment).",
                      },
                      {
                        title: "Sectoral Caps & Restrictions",
                        desc: "Different sectors have different FDI caps (e.g., 100% in manufacturing, 49% in insurance, 26% in print media) and some sectors prohibit FDI entirely (e.g., lottery, gambling, real estate business).",
                      },
                      {
                        title: "Pricing Guidelines",
                        desc: "FDI must be at a price not less than the 'fair value' — determined by a registered valuer (using DCF method) for unlisted companies, or by SEBI ICDR pricing norms for listed companies.",
                      },
                      {
                        title: "FC-GPR Filing (Within 30 Days)",
                        desc: "Every FDI transaction must be reported via Form FC-GPR on the RBI FIRMS portal within 30 days of the date of allotment of shares to the foreign investor — this is the primary FEMA compliance for inbound FDI.",
                      },
                      {
                        title: "PAS-3 Filing with ROC",
                        desc: "In addition to FC-GPR, the company must file Form PAS-3 (Return of Allotment) with the Registrar of Companies within 30 days of allotment, disclosing the allotment to the foreign shareholder.",
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
                    ✅ FDI Automatic Route vs Government Route
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Automatic Route
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        FDI is allowed{" "}
                        <strong>without prior government approval</strong> up to
                        the sectoral cap (or 100% where no cap applies). The
                        company can receive the investment, allot shares, and
                        report via FC-GPR post-facto.
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        Examples: 100% FDI allowed under automatic route in
                        manufacturing, IT/software services, e-commerce
                        marketplace, renewable energy, telecom (up to 100% with
                        conditions), pharmaceuticals, hospitality, construction
                        development, etc.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Government Route
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        FDI requires{" "}
                        <strong>
                          prior approval from the Government of India
                        </strong>{" "}
                        (FIFP or relevant ministry) before the investment can be
                        accepted and shares allotted.
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        Examples: Defence (beyond 74%), broadcasting (beyond
                        49%), print media (beyond 26%), multi-brand retail,
                        civil aviation (beyond automatic route limits), satellite
                        establishment, private security agencies, and all FDI
                        from entities in countries sharing a land border with
                        India (China, Pakistan, Bangladesh, Nepal, Bhutan,
                        Myanmar, Afghanistan) irrespective of sector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📊 FDI Pricing Guidelines (FEMA Rule 22)
                  </p>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">
                      Under{" "}
                      <strong>
                        Rule 22 of the Foreign Exchange Management (Non-Debt
                        Instruments) Rules, 2019
                      </strong>
                      , the price at which shares are issued to a foreign
                      investor must be:
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        For Unlisted Indian Companies
                      </p>
                      <p className="text-xs text-gray-700">
                        Shares must be issued at a price <strong>not less than</strong>{" "}
                        the fair value determined by a{" "}
                        <strong>registered valuer</strong> appointed under Section
                        247 of the Companies Act, 2013, using the{" "}
                        <strong>
                          Discounted Cash Flow (DCF) method
                        </strong>{" "}
                        (or any other internationally accepted valuation method,
                        with proper justification). The valuation report must be
                        dated not earlier than{" "}
                        <strong>90 days before the allotment date</strong>.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        For Listed Indian Companies
                      </p>
                      <p className="text-xs text-gray-700">
                        Shares must be issued in accordance with the{" "}
                        <strong>
                          SEBI (Issue of Capital and Disclosure Requirements)
                          Regulations, 2018 (ICDR)
                        </strong>{" "}
                        — typically at a price not less than the average of the
                        weekly high and low of the share's closing price on the
                        stock exchange during the 26 weeks or 2 weeks preceding
                        the relevant date, whichever is higher.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-1">
                        For Startups (Special Window)
                      </p>
                      <p className="text-xs text-gray-700">
                        Startups recognized by DPIIT may price shares based on
                        the valuation done by{" "}
                        <strong>
                          merchant bankers registered with SEBI or chartered
                          accountants
                        </strong>{" "}
                        in certain cases, though DCF by a registered valuer remains
                        the gold standard and is preferred by RBI.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Key Rule:</strong> Issuing shares at a price{" "}
                    <strong>below fair value</strong> is a FEMA violation and can
                    lead to penalties, compounding proceedings, and rejection of
                    FC-GPR by RBI.
                  </p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    🗂️ What Is the RBI FIRMS Portal?
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <strong>
                        FIRMS (Foreign Investment Reporting and Management System)
                      </strong>{" "}
                      is the online portal launched by the Reserve Bank of India
                      in 2022 (replacing the earlier Single Master Form / SMF
                      system) for reporting all foreign investment transactions —
                      inbound FDI, outbound investment, downstream investment, and
                      disinvestment.
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-orange-200">
                      <p className="font-bold text-orange-700 mb-2">
                        Key Features of FIRMS
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Single portal for all foreign investment reporting
                          (FC-GPR, FC-TRS, ESOP, DI, etc.)
                        </li>
                        <li>
                          • Company registration required (one-time) using CIN,
                          PAN, email, and mobile
                        </li>
                        <li>
                          • Digital signature of authorized signatory (director or
                          company secretary) mandatory for form submission
                        </li>
                        <li>
                          • Automatic validation of data against MCA and income
                          tax databases
                        </li>
                        <li>
                          • Dashboard showing all past filings, pending
                          compliances, and alerts
                        </li>
                        <li>
                          • SRN (Service Request Number) generated on successful
                          submission for tracking
                        </li>
                      </ul>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      <strong>Access:</strong>{" "}
                      <a
                        href="https://firms.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        https://firms.rbi.org.in
                      </a>{" "}
                      — Taxvio handles company registration, authorized signatory
                      setup, and all FC-GPR filings on FIRMS.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Consequences of Non-Filing or Delayed FC-GPR
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Monetary Penalty: Up to ₹2 lakh under Section 13 of FEMA (and up to three times the sum involved in serious cases) — levied by RBI or Enforcement Directorate.",
                      "Compounding Required: Non-compliance is a FEMA contravention; the company must file an application for compounding (settlement) with RBI, paying compounding fees of ₹5,000 to several lakhs depending on delay and amount.",
                      "Future FDI Blocked: RBI or Authorized Dealer (AD) banks may flag the non-compliance, preventing the company from receiving further FDI or repatriating funds to existing foreign investors.",
                      "Investor Exit Restrictions: Foreign investors may face difficulties in selling their shares or exiting, since downstream reporting and transfer pricing also depend on up-to-date FC-GPR filings.",
                      "FEMA Investigation: Willful or prolonged non-compliance can trigger investigation by the Enforcement Directorate, potentially leading to prosecution, attachment of assets, and director penalties.",
                      "Due Diligence Red Flag: During fundraising, acquisition, or IPO, potential investors and bankers check FC-GPR compliance — non-filing or delayed filing is a major regulatory red flag that can derail transactions.",
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
                    🎯 When Must You File FC-GPR?
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          Fresh FDI (New Foreign Investor)
                        </p>
                        <p className="text-xs text-gray-600">
                          When a foreign investor subscribes to shares for the
                          first time, file FC-GPR within{" "}
                          <strong>30 days of allotment</strong> (date on which
                          shares are allotted by the Board/committee).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        2
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          Follow-On FDI (Existing Foreign Investor)
                        </p>
                        <p className="text-xs text-gray-600">
                          When an existing foreign shareholder subscribes to
                          additional shares (rights issue, preferential allotment,
                          ESOP exercise), file fresh FC-GPR within 30 days of each
                          such allotment.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold text-xs">
                        3
                      </div>
                      <div>
                        <p className="font-bold text-yellow-700 mb-1">
                          Secondary Transfer (Not FC-GPR)
                        </p>
                        <p className="text-xs text-gray-600">
                          If an existing foreign shareholder sells shares to
                          another investor (foreign or Indian), this is NOT fresh
                          FDI — it is a transfer. For such transfers, Form FC-TRS
                          (Foreign Currency - Transfer of Shares) must be filed,
                          not FC-GPR.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FC-GPR PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Complete FC-GPR & FDI Compliance Process
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                End-to-end FDI compliance — from sectoral review to FIRMS filing:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "FDI Structure Review & Sectoral Cap Verification",
                    description:
                      "Review the proposed FDI transaction structure and verify compliance with: (a) the FDI Policy's sectoral cap for the company's business activities (e.g., 100% for manufacturing, 49% for insurance, 26% for print media), (b) the entry route (automatic or government approval required), (c) any sector-specific conditions (e.g., minimum capitalization, local sourcing norms, technology transfer obligations), and (d) the investor's country of origin — special scrutiny applies to investors from countries sharing a land border with India (China, Pakistan, Bangladesh, etc.), which require government approval irrespective of sector. Obtain a copy of the FDI Policy from DPIIT website and the FEMA Non-Debt Instruments Rules, 2019. If government route approval is required, file application on the FIFP portal BEFORE proceeding with the investment. Taxvio provides sectoral cap analysis and route determination as the first step.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Pricing Compliance & Valuation Report Coordination",
                    description:
                      "Determine the minimum issue price for shares under FEMA Rule 22: (a) For unlisted companies: Engage a registered valuer (registered under the Companies (Registered Valuers and Valuation) Rules, 2017) to prepare a valuation report using the Discounted Cash Flow (DCF) method or another internationally accepted valuation methodology. The valuation report must be dated not earlier than 90 days before the proposed allotment date. Taxvio coordinates with registered valuers in our network to obtain the report within 5-7 days. (b) For listed companies: Determine the pricing under SEBI ICDR norms — typically the higher of: (i) average of weekly high/low closing prices for 26 weeks preceding the relevant date, or (ii) average for 2 weeks preceding the relevant date. Taxvio prepares the pricing compliance note based on stock exchange data. (c) For startups: Verify if the startup is eligible for special pricing provisions under the FDI Policy, though DCF valuation remains the most conservative and widely accepted approach.",
                    duration: "5-7 days (valuation report procurement)",
                  },
                  {
                    step: 3,
                    title: "Foreign Investor KYC & Documentation",
                    description:
                      "Obtain complete KYC (Know Your Customer) documentation from the foreign investor as required under FEMA and the Prevention of Money Laundering Act (PMLA): (a) For individual investors: passport copy, proof of overseas address (utility bill, bank statement <3 months), PAN or tax identification number in the home country, source of funds declaration, and bank account details. (b) For institutional investors (foreign companies, funds, LLPs): certificate of incorporation, constitutional documents (Memorandum & Articles or equivalent), board resolution authorizing the investment, list of directors/partners with passport copies, proof of registered office address, ultimate beneficial ownership (UBO) declaration identifying individuals holding >25% interest, and financial statements for the last 2 years. (c) For investors from high-risk jurisdictions or countries sharing a land border: enhanced due diligence and government approval documentation. Taxvio prepares a KYC checklist tailored to the investor category and coordinates collection.",
                    duration: "3-5 days",
                  },
                  {
                    step: 4,
                    title: "Board Resolution & Shareholder Approval (If Required)",
                    description:
                      "Convene a Board meeting to approve the FDI transaction: (a) Pass a Board resolution approving the issuance and allotment of shares to the foreign investor, specifying the number of shares, class (equity or preference), issue price (not less than the fair value determined by the valuation report), premium (if any), and payment terms. (b) Authorize the opening of a separate bank account (Foreign Currency Account or Escrow Account) for receipt of the FDI, if required by the company's bankers. (c) For private companies, verify if shareholder approval is required under the Articles of Association (AOA) — many AOAs include a right of first refusal for existing shareholders or require special resolution for allotment to non-residents. If required, convene an EGM (Extraordinary General Meeting) or obtain written consent from shareholders under Section 62(3) of the Companies Act. Taxvio drafts the Board resolution, notice of EGM (if applicable), and shareholder consent letters.",
                    duration: "2-3 days",
                  },
                  {
                    step: 5,
                    title: "Receipt of Foreign Inward Remittance (FIRC)",
                    description:
                      "The foreign investor remits the subscription amount (in foreign currency — USD, EUR, GBP, etc.) to the company's bank account in India via SWIFT transfer or other RBI-approved channels. The Authorized Dealer (AD) bank in India (the company's bank) issues a Foreign Inward Remittance Certificate (FIRC) confirming receipt of the foreign currency and its conversion into INR at the prevailing exchange rate. The FIRC is a critical document required for FC-GPR filing and must contain: sender's name and country, purpose code (for FDI, typically 'S0001 - Equity Capital'), amount in foreign currency, INR equivalent, and date of credit to the company's account. Obtain the FIRC from the bank within 2-3 days of remittance receipt (banks are required to issue it within 3 working days). Taxvio coordinates with the company's bank to expedite FIRC issuance.",
                    duration: "2-3 days from remittance",
                  },
                  {
                    step: 6,
                    title: "Share Allotment & Share Certificate Issuance",
                    description:
                      "Once the consideration (FIRC confirmed receipt) is received: (a) The Board or a duly authorized committee (if delegation is permitted under the AOA) passes a resolution allotting the shares to the foreign investor, specifying the distinctive numbers of shares allotted. (b) Update the Register of Members (Form SH-1) to record the allotment to the foreign investor, including name, address, nationality, passport/incorporation number, number of shares, distinctive numbers, and date of allotment. (c) Issue share certificates (physical or dematerialized, depending on whether the company has ISIN or the shares are held in demat form) within 60 days of allotment under Section 56 of the Companies Act. For listed companies, ensure the shares are credited to the investor's demat account. (d) Update the foreign investor's name and shareholding in the company's cap table and statutory registers. Taxvio prepares the allotment resolution, updates statutory registers, and coordinates share certificate printing/demat credit.",
                    duration: "1-2 days for allotment; up to 60 days for certificate issuance",
                  },
                  {
                    step: 7,
                    title: "Filing of Form PAS-3 with ROC (Within 30 Days)",
                    description:
                      "File Form PAS-3 (Return of Allotment) with the Registrar of Companies within 30 days of the date of allotment, disclosing the allotment to the foreign shareholder. Form PAS-3 requires: (a) CIN and basic company details, (b) details of the allotment — date, number of shares allotted, class (equity/preference), issue price, premium, whether fully paid or partly paid, (c) list of allottees with name, address, PAN, nationality, number of shares allotted, and distinctive numbers, (d) whether the allotment is pursuant to a scheme of merger/demerger, employee stock option, rights issue, preferential allotment, etc., and (e) attachments: Board resolution approving allotment, valuation report (if applicable), list of allottees in the prescribed format. Form PAS-3 must be digitally signed by a director and the company secretary (if appointed). Pay the MCA fee and obtain the acknowledgment. Taxvio prepares and files PAS-3 within 15 days of allotment to provide a buffer.",
                    duration: "Within 30 days of allotment",
                  },
                  {
                    step: 8,
                    title: "Preparation & Filing of FC-GPR on RBI FIRMS Portal",
                    description:
                      "File Form FC-GPR on the RBI FIRMS portal (https://firms.rbi.org.in) within 30 days of the date of allotment. If the company is filing on FIRMS for the first time, complete the one-time company registration on the portal with CIN, PAN, registered office address, email, mobile, and authorized signatory details (director or company secretary). Form FC-GPR requires: (a) Details of the Indian company: CIN, name, address, sector/activity (NIC code), date of incorporation, paid-up capital before and after the FDI, (b) Details of the foreign investor: name, country of incorporation/residence, entity type (individual/company/fund), passport/incorporation number, address, and percentage of shareholding post-investment, (c) Details of the investment: date of allotment, amount of consideration received (in INR and foreign currency), mode of payment (FIRC details), number of shares issued, face value, issue price, premium, and total consideration, (d) Sectoral classification and FDI route (automatic or government approval, with approval number if applicable), (e) Pricing compliance: whether issued at/above fair value (attach valuation report), and (f) Attachments: FIRC, Board resolution, valuation report (for unlisted), shareholders' resolution (if applicable), and government approval letter (if government route). Digitally sign the form using the authorized signatory's DSC and submit. FIRMS generates an SRN (Service Request Number) on successful submission — download and save the acknowledgment. Taxvio handles the entire FIRMS filing process end-to-end.",
                    duration: "Within 30 days of allotment (typically filed within 15-20 days)",
                  },
                  {
                    step: 9,
                    title: "Annual Return on Foreign Liabilities & Assets (FLA Return)",
                    description:
                      "In addition to FC-GPR (which is transaction-specific), the company must file an annual return called the FLA Return (Foreign Liabilities and Assets Return) on the FIRMS portal, disclosing the position of all foreign investment (FDI, ECB, trade credit, etc.) and overseas investments as at 31st March of each year. The FLA Return is due by 15th July each year. Taxvio includes FLA Return filing as part of the annual compliance package for companies with foreign investment.",
                    duration: "Annual (by 15th July)",
                  },
                  {
                    step: 10,
                    title: "Downstream Investment & Transfer Reporting (If Applicable)",
                    description:
                      "If the Indian company (which has received FDI) subsequently invests in another Indian company (downstream investment), or if the foreign investor transfers/sells their shares to another party (transfer of shares), separate FIRMS filings are required: (a) For downstream investment: File DI (Downstream Investment) return on FIRMS within 30 days of making the investment. (b) For transfer of shares: File FC-TRS (Foreign Currency - Transfer of Shares) within 60 days of the transfer. Both require similar documentation (valuation, pricing compliance, investor KYC). Taxvio provides support for all ongoing FIRMS filings as foreign investment activity evolves.",
                    duration: "Ongoing (as transactions occur)",
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
                  <strong>7-10 working days</strong> from investor commitment to
                  FC-GPR and PAS-3 filing, assuming the valuation report is
                  procured promptly (5-7 days) and the FIRC is received within 2-3
                  days of remittance. Breakdown: sectoral & pricing review (1-2
                  days, parallel with valuation procurement) + investor KYC & Board
                  approval (3-5 days, parallel) + FIRC receipt (2-3 days from
                  remittance) + allotment & registers update (1-2 days) + PAS-3 &
                  FC-GPR filing (1-2 days). <strong>Critical deadlines:</strong>{" "}
                  PAS-3 with ROC within <strong>30 days of allotment</strong>, and
                  FC-GPR on FIRMS within <strong>30 days of allotment</strong>.
                  Taxvio ensures both are filed within 15-20 days to provide a
                  buffer for any queries or corrections.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for FC-GPR & FDI Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  From the Indian Company
                </p>
                <ul className="space-y-3">
                  {[
                    "Certificate of Incorporation (CIN)",
                    "Memorandum & Articles of Association (MOA & AOA)",
                    "PAN of the company",
                    "Current shareholding pattern / cap table",
                    "Board resolution approving FDI and share allotment",
                    "Shareholders' resolution (if required under AOA)",
                    "Copy of the company's bank account details (for FIRC receipt)",
                    "Register of Members (updated post-allotment)",
                    "DSC of director and company secretary (for PAS-3 and FC-GPR signing)",
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
                  From the Foreign Investor
                </p>
                <ul className="space-y-3">
                  {[
                    "Passport copy (for individuals) or Certificate of Incorporation (for entities)",
                    "Proof of address (utility bill, bank statement <3 months)",
                    "PAN or Tax Identification Number in home country",
                    "For entities: Memorandum & Articles or equivalent constitutional documents",
                    "Board resolution authorizing the investment (for corporate investors)",
                    "List of directors/partners with passport copies",
                    "Ultimate Beneficial Ownership (UBO) declaration",
                    "Financial statements for the last 2 years (for institutional investors)",
                    "Source of funds declaration",
                    "Bank account details (for dividend repatriation in future)",
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
                  Pricing & Valuation Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Valuation report by registered valuer (DCF method, for unlisted companies)",
                    "Valuer's registration certificate (copy, for verification)",
                    "Financial projections / business plan (used by valuer for DCF)",
                    "For listed companies: Stock exchange price data (26-week and 2-week averages)",
                    "Pricing compliance note (prepared by company or CA) showing issue price ≥ fair value",
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
                  Remittance & Banking Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "FIRC (Foreign Inward Remittance Certificate) from AD bank",
                    "SWIFT message or MT103 confirming the remittance",
                    "Bank account statement showing credit of FDI amount",
                    "Foreign exchange conversion rate (INR equivalent) on the date of receipt",
                    "Purpose code mentioned in FIRC (should be 'S0001 - Equity Capital')",
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
                  "Sector/activity of the company (NIC code) for sectoral cap verification",
                  "Whether FDI is under automatic route or government route (approval number if government)",
                  "Investor's country of incorporation/residence (special rules for land-border countries)",
                  "Date of allotment of shares (start date for 30-day FC-GPR deadline)",
                  "Whether this is the first FDI or a follow-on round",
                  "Whether any part of the investment is in the form of compulsorily convertible instruments (CCPS, CCD)",
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
              Common Mistakes in FDI & FC-GPR Compliance
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                FDI compliance requires precision and timeliness — avoid these
                critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Issuing Shares Below Fair Value",
                    icon: "📉",
                    problem:
                      "Allotting shares to a foreign investor at a price below the fair value determined by the registered valuer's DCF report (for unlisted companies) or below the SEBI ICDR pricing (for listed companies). This is a direct violation of FEMA Rule 22 and is one of the most serious FDI compliance breaches. RBI can reject the FC-GPR, levy penalties, and in extreme cases, direct the company to refund the investment or issue additional shares to the investor to correct the pricing.",
                    solution:
                      "Always obtain a valuation report from a registered valuer BEFORE finalizing the term sheet or share subscription agreement with the investor. Ensure the issue price (face value + premium) in the agreement is equal to or greater than the fair value stated in the valuation report. If the valuation report is dated more than 90 days before the proposed allotment, obtain a fresh valuation. If market conditions have changed significantly since the valuation, consider obtaining an updated report to avoid disputes. Taxvio coordinates with registered valuers to ensure the valuation and pricing are compliant.",
                  },
                  {
                    mistake: "Using an Outdated or Non-Compliant Valuation Report",
                    icon: "📊",
                    problem:
                      "Using a valuation report that is more than 90 days old (from the date of allotment), or using a report prepared by an unregistered valuer, or using a valuation method other than DCF without proper justification. RBI and ROC scrutinize the valuation report during FC-GPR and PAS-3 filings, and non-compliance can lead to rejection and penalties.",
                    solution:
                      "Engage only a registered valuer (registered under the Companies (Registered Valuers and Valuation) Rules, 2017 — verify on the IBBI website or request a copy of the valuer's registration certificate). Ensure the valuation is performed using the Discounted Cash Flow (DCF) method (the gold standard for unlisted companies) or another internationally accepted method with proper justification documented in the report. Time the valuation such that it is dated not more than 90 days before the allotment — if the fundraising process takes longer than expected, obtain a refresh or updated valuation. Taxvio's registered valuer network ensures compliant, timely valuations.",
                  },
                  {
                    mistake: "Missing the 30-Day FC-GPR Deadline",
                    icon: "⏰",
                    problem:
                      "Filing FC-GPR more than 30 days after the date of allotment of shares to the foreign investor. This is a FEMA contravention and attracts penalties, compounding proceedings, and can jeopardize the company's ability to receive future FDI or allow the foreign investor to exit. RBI takes the 30-day deadline seriously, and even a delay of 1-2 days can require compounding.",
                    solution:
                      "Count the 30-day deadline from the date of the Board resolution or committee resolution allotting the shares (not the date of FIRC receipt or share certificate issuance). Set an internal deadline of 15-20 days for filing FC-GPR to allow for any technical issues or documentation gaps. Maintain a compliance tracker showing the allotment date and the FC-GPR due date (allotment date + 30 days). Coordinate all prerequisite steps (FIRC receipt, PAS-3 filing, FIRMS registration) in parallel so that FC-GPR can be filed as soon as allotment is done. Taxvio files FC-GPR within 15 days of allotment as standard practice.",
                  },
                  {
                    mistake: "Incomplete or Incorrect Foreign Investor KYC",
                    icon: "🔍",
                    problem:
                      "Submitting incomplete KYC documentation for the foreign investor, or failing to obtain the ultimate beneficial ownership (UBO) declaration, or not verifying the investor's country of incorporation (especially critical for investors from countries sharing a land border with India). Incomplete KYC is a common reason for FC-GPR rejection by RBI and can also trigger anti-money laundering (PMLA) scrutiny.",
                    solution:
                      "Obtain complete KYC upfront, before finalizing the investment: passport/incorporation certificate, proof of address (<3 months), PAN/tax ID, UBO declaration (identifying all individuals holding >25% interest in the foreign entity), board resolution, financial statements, and source of funds. For investors from China, Pakistan, Bangladesh, Nepal, Bhutan, Myanmar, or Afghanistan, verify that government approval under the FDI Policy has been obtained before accepting the investment. Maintain scanned copies of all KYC documents in the compliance file. Taxvio provides a comprehensive KYC checklist and coordinates document collection.",
                  },
                  {
                    mistake: "Filing FC-GPR Without Proper Sectoral Classification",
                    icon: "🏢",
                    problem:
                      "Selecting an incorrect NIC (National Industrial Classification) code or sectoral classification in the FC-GPR, or failing to verify that the FDI is within the sectoral cap for the company's actual business activities. Misclassification can lead to RBI queries, rejection of FC-GPR, and in severe cases, allegations of circumventing sectoral caps, which can trigger investigation.",
                    solution:
                      "Review the company's MOA to identify the main objects clause and map it to the correct 5-digit NIC-2008 code. Cross-check the NIC code with the FDI Policy's Annexure (sectoral caps and conditions) to confirm the FDI percentage is within the cap and the entry route (automatic or government) is correct. If the company operates in multiple sectors (e.g., manufacturing + e-commerce), classify based on the predominant activity (by revenue or asset deployment). Document the sectoral classification and cap verification in a compliance note. Taxvio performs sectoral analysis and NIC mapping before filing FC-GPR.",
                  },
                  {
                    mistake: "Not Filing PAS-3 with ROC Alongside FC-GPR",
                    icon: "📋",
                    problem:
                      "Filing FC-GPR with RBI but forgetting to file Form PAS-3 (Return of Allotment) with the Registrar of Companies, or filing PAS-3 late (beyond 30 days of allotment). Both filings are mandatory and independent — FC-GPR is for FEMA compliance (RBI), and PAS-3 is for Companies Act compliance (ROC). Missing PAS-3 attracts penalties under the Companies Act (₹1,000 per day of delay on the company, and penalties on directors and CS).",
                    solution:
                      "Prepare and file both FC-GPR and PAS-3 in parallel, immediately after the allotment. Use a checklist that flags both filings together. Ensure the details disclosed in FC-GPR and PAS-3 are consistent (allotment date, number of shares, issue price, investor details). File PAS-3 first (since it's simpler and faster) to get it out of the way, then focus on FC-GPR. Taxvio files both forms as a bundle within the 30-day window, ensuring ROC and RBI compliance.",
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
              FC-GPR & FDI Compliance Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Complete FDI compliance packages for startups and growth-stage
              companies:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹9,999",
                  popular: false,
                  features: [
                    "Sectoral cap & entry route verification",
                    "Pricing guideline review (client provides valuation)",
                    "Foreign investor KYC checklist & coordination",
                    "Board resolution drafting",
                    "Form PAS-3 filing with ROC",
                    "Form FC-GPR filing on RBI FIRMS portal",
                    "Email support",
                  ],
                  limitations: [
                    "Valuation report procurement not included (client arranges)",
                    "No FIRC coordination support",
                    "No share certificate design/printing",
                    "No annual FLA return filing",
                  ],
                  ideal:
                    "Companies with in-house valuation and banking relationships, needing only filing support",
                },
                {
                  name: "Standard",
                  price: "₹19,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "Registered valuer coordination & valuation report procurement",
                    "FIRC coordination with AD bank",
                    "Share allotment resolution & register updates",
                    "Share certificate design & issuance coordination",
                    "Government route approval application (if required)",
                    "Annual FLA return filing (for 1 year)",
                    "Priority WhatsApp + email support",
                  ],
                  limitations: [
                    "Valuation fee charged separately (₹15k-₹30k, paid to valuer)",
                  ],
                  ideal:
                    "Most startups and SMEs receiving FDI from angel investors or VCs",
                },
                {
                  name: "Complete",
                  price: "₹49,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Full-service end-to-end FDI transaction management",
                    "Term sheet & SHA review (legal coordination)",
                    "Multiple-tranche FDI support (staged funding)",
                    "Downstream investment & FC-TRS filings (ongoing)",
                    "Quarterly FEMA compliance review",
                    "Exit & repatriation support (future)",
                    "Dedicated CA + CS + corporate lawyer team",
                  ],
                  limitations: [],
                  ideal:
                    "Companies with large or complex FDI rounds, multiple foreign investors, or ongoing cross-border activity",
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
                    <p className="text-sm text-gray-500">Per FDI transaction</p>
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
                    service: "Registered Valuer Report",
                    price: "₹15,000-₹30,000",
                    desc: "DCF valuation report by IBBI-registered valuer (paid to valuer)",
                  },
                  {
                    service: "Government Route Approval",
                    price: "₹29,999",
                    desc: "FIFP application filing & follow-up for sectors requiring approval",
                  },
                  {
                    service: "Downstream Investment Filing",
                    price: "₹9,999/filing",
                    desc: "DI return on FIRMS when the company invests in another Indian company",
                  },
                  {
                    service: "FC-TRS Transfer Filing",
                    price: "₹7,999/filing",
                    desc: "Transfer of shares reporting when foreign investor exits",
                  },
                  {
                    service: "FEMA Compounding Application",
                    price: "₹24,999+",
                    desc: "Condonation filing for delayed FC-GPR or other FEMA violations",
                  },
                  {
                    service: "Annual FLA Return",
                    price: "₹4,999/year",
                    desc: "Annual foreign liabilities & assets return on FIRMS (by 15th July)",
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
                  name: "Arjun Malhotra, Co-Founder",
                  company: "Vyom AI Technologies Pvt Ltd",
                  location: "Bangalore, KA",
                  text: "We raised our seed round from a Singapore-based VC and had no idea about FC-GPR or FEMA compliance. Taxvio handled everything — got us a registered valuer report within 5 days, coordinated the FIRC with our bank, filed PAS-3 and FC-GPR within 10 days of allotment. They also flagged that our investor needed government approval (land-border rule) and helped us get it before the investment. Saved us from a serious compliance mess.",
                },
                {
                  name: "Meera Nambiar, CFO",
                  company: "Aurelia Health Sciences Pvt Ltd",
                  location: "Mumbai, MH",
                  text: "Our Series A was delayed by 6 weeks because our previous consultant couldn't get the valuation right — RBI kept rejecting the FC-GPR. Taxvio re-did the entire exercise with a fresh DCF valuation from their registered valuer, verified the sectoral cap for pharma (100% automatic), re-filed FC-GPR, and got it approved in 2 days. Professional, responsive, and knew exactly what RBI expects.",
                },
                {
                  name: "Karan Choudhary, Director",
                  company: "Zenith Manufacturing Pvt Ltd",
                  location: "Noida, UP",
                  text: "We received FDI from a Japanese investor and had already allotted shares when we realized we missed the FC-GPR deadline by 45 days. Taxvio immediately filed the delayed FC-GPR, prepared a FEMA compounding application, and represented us with RBI — the compounding was approved with a ₹50,000 penalty instead of the maximum ₹2 lakh. They turned a disaster into a manageable outcome.",
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
              FC-GPR & FDI Compliance Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides online FC-GPR filing and FDI compliance services for
              startups and corporates across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad
              </strong>
              , and all cities in India. Complete remote support for valuation,
              FIRMS filing, and ROC compliance.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Meerut",
                "Noida",
                "Delhi NCR",
                "Mumbai",
                "Bangalore",
                "Pune",
                "Hyderabad",
                "Ghaziabad",
                "Gurgaon",
                "Chennai",
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
              Other Investment & Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "PAS-3 Share Allotment",
                  icon: "📋",
                  link: "/serviceslist/roc/pas-3-filing",
                  desc: "ROC filing for share allotment (domestic & foreign)",
                },
                {
                  title: "SH-7 Share Transfer",
                  icon: "🔄",
                  link: "/serviceslist/roc/sh-7-filing",
                  desc: "Notice of share transfer filing with ROC",
                },
                {
                  title: "Startup India Registration",
                  icon: "🚀",
                  link: "/serviceslist/startup-india-registration",
                  desc: "DPIIT recognition & tax benefits",
                },
                {
                  title: "ESOP Management",
                  icon: "💼",
                  link: "/serviceslist/esop-compliance",
                  desc: "Employee stock option compliance & valuation",
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
                    Foreign Investment Compliance
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Raising Foreign Capital? File FC-GPR Within 30 Days
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get complete FDI compliance — sectoral review, pricing
                    validation, valuation coordination, FC-GPR & PAS-3 filing —
                    handled by expert CA & CS team. Avoid FEMA penalties up to ₹2
                    lakh. Starting ₹9,999.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get FDI Support — ₹9,999
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
      q: "Can a company receive FDI in any sector without restrictions?",
      a: "NO. Different sectors have different FDI caps and conditions under the FDI Policy issued by DPIIT. For example: (1) 100% FDI is allowed under the automatic route in most manufacturing, IT/software services, e-commerce marketplace, renewable energy, and hotels/tourism. (2) Restricted sectors allow FDI only up to a certain percentage — e.g., 49% in insurance (with some increase to 74% under automatic route from April 2021), 26% in print media, 49% in broadcasting. (3) Prohibited sectors where NO FDI is allowed — e.g., lottery business, gambling/betting, chit funds, Nidhi company, real estate business (excluding construction development and township projects). (4) Sectors requiring government approval irrespective of percentage — defence (beyond 74%), telecom (beyond certain thresholds), civil aviation, satellite establishment, private security agencies, and ALL FDI from investors in countries sharing a land border with India (China, Pakistan, Bangladesh, Nepal, Bhutan, Myanmar, Afghanistan). Before accepting FDI, the company MUST verify its sector classification and the applicable FDI cap — Taxvio provides this sectoral analysis as the first step.",
    },
    {
      q: "What is the difference between FC-GPR and the old SMF / ARF system?",
      a: "FC-GPR is the new reporting form under the RBI's FIRMS (Foreign Investment Reporting and Management System) portal, which replaced the earlier SMF (Single Master Form) and ARF (Advance Reporting Form) system in 2022. The key differences are: (1) Platform: FC-GPR is filed on the new FIRMS portal (https://firms.rbi.org.in), whereas SMF was filed on the old RBI-RMS portal. (2) Scope: FC-GPR covers only inbound FDI (fresh equity investment by foreign investors into Indian companies) — separate forms exist for transfer of shares (FC-TRS), downstream investment (DI), and external commercial borrowings (ECB). The old SMF covered multiple transaction types in a single form. (3) Timeline: FC-GPR must be filed within 30 days of allotment (same as SMF), but the FIRMS platform provides real-time validation and faster processing. (4) Validation: FIRMS auto-validates data against MCA and IT databases, reducing errors and rejections. Companies that filed SMF in the past must now use FC-GPR on FIRMS for all new FDI transactions from 2022 onwards — the old RBI-RMS portal is no longer operational.",
    },
    {
      q: "Do I need to file FC-GPR if the foreign investor is buying shares from an existing shareholder (secondary sale)?",
      a: "NO, not FC-GPR. If the transaction is a SECONDARY TRANSFER (foreign investor buying shares from an existing shareholder — Indian or foreign — on the secondary market or via off-market transfer), this is NOT fresh FDI into the company, so FC-GPR does not apply. Instead, the relevant form is FC-TRS (Foreign Currency - Transfer of Shares), which must be filed on the FIRMS portal within 60 days of the transfer. The key distinction is: (1) FC-GPR applies when the company ISSUES new shares to a foreign investor (fresh equity investment, share allotment by the company). (2) FC-TRS applies when an EXISTING shareholder sells/transfers their shares to a foreign investor (no fresh capital comes into the company). If you are unsure which form applies, the simple test is: did the company allot shares (FC-GPR) or did a shareholder sell shares (FC-TRS)? Taxvio advises on the correct form based on your transaction structure.",
    },
    {
      q: "What is the role of the Authorized Dealer (AD) bank in FDI compliance?",
      a: "The Authorized Dealer (AD) bank — typically the company's main banker, authorized by RBI to deal in foreign exchange — plays a critical role in FDI compliance: (1) Receipt of FDI: The foreign investor remits the FDI amount (in foreign currency) to the company's account with the AD bank. The AD bank receives the funds via SWIFT, converts them to INR at the prevailing exchange rate, and credits the company's account. (2) FIRC Issuance: The AD bank issues a Foreign Inward Remittance Certificate (FIRC) to the company within 3 working days of receipt, confirming the foreign currency received, sender details, purpose code (should be 'S0001 - Equity Capital'), and INR equivalent. The FIRC is a mandatory attachment for FC-GPR filing. (3) FEMA Compliance Monitoring: AD banks are required to monitor FEMA compliance of their customers — they may ask for a copy of the FC-GPR acknowledgment or the valuation report to confirm that the FDI pricing and reporting are compliant. (4) Repatriation Support: In the future, when the foreign investor exits and wants to repatriate sale proceeds, the AD bank facilitates the outward remittance and issues the necessary certificates (Form 15CB, etc.). Taxvio coordinates with AD banks to ensure timely FIRC issuance and smooth FDI processing.",
    },
    {
      q: "Can foreign investors from China or Pakistan invest in Indian companies?",
      a: "Investors from countries sharing a land border with India (China, Pakistan, Bangladesh, Nepal, Bhutan, Myanmar, and Afghanistan) are subject to special restrictions under the FDI Policy. The rules are: (1) Government Approval Mandatory: ANY investment (in any sector, at any percentage) from an entity incorporated in a land-border country, or a citizen of such a country, requires PRIOR APPROVAL from the Government of India via the FIFP (Foreign Investment Facilitation Portal), irrespective of whether the sector otherwise allows automatic route FDI. (2) Beneficial Ownership Test: The restriction applies not only to direct investment from such countries, but also to investments where the beneficial owner is a citizen or entity of a land-border country — e.g., if a Singapore fund has a Chinese national as a >25% beneficial owner, the investment may require government approval. (3) Transfer Restrictions: Even transfer of shares (secondary sale) involving investors from land-border countries requires government approval. This policy was introduced in April 2020 and applies to all sectors. In practice, obtaining government approval can take 3-6 months and is discretionary — approval is rare for Chinese investors except in specific strategic sectors. Taxvio helps companies navigate this process and file FIFP applications where required.",
    },
    {
      q: "What is the FLA Return and how is it different from FC-GPR?",
      a: "FLA Return (Foreign Liabilities and Assets Return) is an ANNUAL return filed on the RBI FIRMS portal, reporting the company's foreign liabilities (FDI, ECB, trade credit, guarantees) and foreign assets (overseas investments, overseas deposits, receivables) as at 31st March of each financial year. Key differences from FC-GPR: (1) Frequency: FC-GPR is transaction-specific (filed within 30 days of EACH FDI allotment). FLA Return is annual (filed once a year by 15th July). (2) Scope: FC-GPR reports a single FDI transaction (inbound equity investment). FLA Return reports the TOTAL position of all foreign liabilities and assets as of year-end — a consolidated snapshot. (3) Purpose: FC-GPR is for FEMA compliance and transaction reporting. FLA Return is for RBI's statistical and macro-prudential monitoring. (4) Applicability: FC-GPR is filed by companies receiving FDI. FLA Return is filed by ALL companies that have ANY foreign liabilities (including FDI) or foreign assets, regardless of whether a transaction occurred during the year. If your company has received FDI in the past, you must file BOTH FC-GPR (for each new FDI round) AND FLA Return (annually). Taxvio's Standard and Complete packages include annual FLA Return filing.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — FC-GPR & FDI Compliance
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