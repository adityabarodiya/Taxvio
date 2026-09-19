    // app/serviceslist/roc/dir-3-kyc/Dir3KycClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DIR-3 KYC Filing Services for FY 2025-26 - DIN KYC Annual Compliance",
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
    "Professional DIR-3 KYC (Director KYC) filing services for FY 2025-26 to keep DIN (Director Identification Number) active. Complete annual KYC compliance for all company and LLP directors including DIR-3 KYC form filing, DIN status verification, Aadhaar-PAN-Mobile-Email OTP authentication, deactivated DIN reactivation support, and late fee payment guidance. Mandatory filing deadline: 30th September 2026 Avoid DIN deactivation penalty (₹5,000 per director) and disqualification from directorship. Serving directors across Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Bangalore and pan-India.",
  serviceType: "DIR-3 KYC Filing & DIN Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "999",
      maxPrice: "2999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is DIR-3 KYC and who must file it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DIR-3 KYC (also called DIN KYC or Director KYC) is an ANNUAL KYC (Know Your Customer) filing that EVERY DIRECTOR holding a DIN (Director Identification Number) must file with the Ministry of Corporate Affairs (MCA) to keep their DIN ACTIVE. As per MCA notification dated 24th August 2018 (amended for FY 2025-26), ALL directors of companies and LLPs (Limited Liability Partnerships) registered in India must file DIR-3 KYC EVERY YEAR by 30th September. Who MUST file: (1) ALL directors of Private Limited Companies, (2) ALL directors of Public Limited Companies, (3) ALL directors of One Person Companies (OPC), (4) ALL directors of Section 8 Companies (NGOs), (5) ALL designated partners of LLPs. Who is EXEMPTED: (1) Directors/partners who obtained DIN in the CURRENT financial year (e.g., if DIN was allotted in FY 2025-26, no need to file DIR-3 KYC for FY 2025-26 — must file from next year onwards). (2) Directors of FOREIGN COMPANIES (companies incorporated outside India). Filing Frequency: ONCE A YEAR (annual filing). Deadline for FY 2025-26: 30th SEPTEMBER 2026",
      },
    },
    {
      "@type": "Question",
      name: "What is the deadline to file DIR-3 KYC for FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The deadline to file DIR-3 KYC for Financial Year 2025-26 is 30th SEPTEMBER 2026 (this is the LAST DATE to file without penalty). Timeline: (1) MCA portal opens for DIR-3 KYC filing: 1st April 2026 onwards (start of FY 2025-26). (2) Free filing period: 1st April 2026 to 30th September 2026 (NO FEE for filing during this period). (3) DEADLINE: 30th September 2026, 11:59 PM (IST). (4) Late filing period: 1st October 2026 onwards (filing allowed with LATE FEE of ₹5,000 per director). (5) DIN DEACTIVATION: If DIR-3 KYC is not filed by 30th September 2026, MCA will automatically DEACTIVATE the DIN (Director Identification Number) from 1st October 2026 onwards. IMPORTANT DATES: April 1, 2026 - DIR-3 KYC portal opens (start early filing). September 15, 2026 - RECOMMENDED filing deadline (avoid last-minute rush, server overload). September 30, 2026 - FINAL DEADLINE (11:59 PM). October 1, 2026 - Late fee period begins (₹5,000 penalty). DIN deactivation starts for non-filers.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't file DIR-3 KYC by 30th September 2026",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you DON'T file DIR-3 KYC by 30th September 2026, following consequences occur: (1) DIN DEACTIVATION (Most Serious): MCA will automatically DEACTIVATE your DIN from 1st October 2026 Deactivated DIN means: (a) You CANNOT sign any MCA forms (annual returns, resolutions, compliance filings), (b) You CANNOT be appointed as director in ANY NEW company, (c) All companies where you are director will become NON-COMPLIANT (because they have inactive director), (d) You cannot use DSC (Digital Signature Certificate) for MCA filings. (2) PENALTY & LATE FEE: ₹5,000 per director (one-time penalty) to FILE DIR-3 KYC after deadline. This fee is IN ADDITION to normal filing (which is free before deadline). (3) COMPANY NON-COMPLIANCE: All companies/LLPs where you are director/partner will be marked as NON-COMPLIANT because they have director with inactive DIN. Company may face: (a) Difficulty in filing annual returns (MGT-7, AOC-4), (b) Difficulty in ROC approvals (name changes, capital increase, etc.), (c) Eventually, company may be STRUCK OFF under Section 248 if non-compliance continues for 2+ years. (4) DIRECTOR DISQUALIFICATION RISK: If DIN remains deactivated for MULTIPLE YEARS and director doesn't take corrective action, MCA may initiate DISQUALIFICATION proceedings under Section 164(2) — director cannot hold directorship in ANY company for 5 years. (5) PERSONAL CREDIT SCORE IMPACT: Some credit bureaus are now tracking MCA compliance — deactivated DIN may negatively impact personal CIBIL score (affects loan applications, credit cards). REACTIVATION PROCESS (if DIN is deactivated): (1) File DIR-3 KYC immediately (with ₹5,000 late fee payment). (2) File DIR-3 KYC for ALL PREVIOUS YEARS if not filed earlier (separate ₹5,000 fee for each year). (3) Wait 7-15 days for MCA to process and REACTIVATE DIN. (4) Verify DIN status on MCA portal (check if status shows 'Approved' and DIN is active). RECOMMENDATION: File DIR-3 KYC BEFORE 30th September 2026 to avoid penalty, deactivation, and compliance headaches. Taxvio can help with urgent filing if deadline is approaching.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function Dir3KycClient() {
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
          ⏰ DIR-3 KYC Deadline: 30th September 2026 — File Now to Avoid ₹5,000 Penalty & DIN Deactivation!
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
              <span className="text-white">DIR-3 KYC Filing</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📋 Annual Director Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  DIR-3 KYC Filing
                  <br />
                  <span className="text-[#7ecbf0]">FY 2025-26</span>
                  <br />
                  Keep Your DIN Active
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Are you a{" "}
                  <strong className="text-white">
                    company director or LLP partner
                  </strong>{" "}
                  with a{" "}
                  <strong className="text-white">
                    DIN (Director Identification Number)
                  </strong>
                  ?{" "}
                  <strong className="text-white">
                    DIR-3 KYC filing is MANDATORY every year
                  </strong>{" "}
                  to keep your DIN active and avoid{" "}
                  <strong className="text-white">
                    ₹5,000 penalty + DIN deactivation
                  </strong>
                  . For{" "}
                  <strong className="text-white">
                    Financial Year 2025-26, deadline is 30th September 2026
                  </strong>
                  . <strong className="text-white">Taxvio</strong> provides
                  hassle-free DIR-3 KYC filing —{" "}
                  <strong className="text-white">
                    OTP-based authentication (Aadhaar + PAN + Mobile + Email),
                    DIN status verification, instant filing, deactivated DIN
                    reactivation support
                  </strong>
                  . File your annual director KYC in{" "}
                  <strong className="text-white">10-15 minutes</strong> and stay
                  compliant!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File DIR-3 KYC — ₹999 →
                  </Link>
                  <Link
                    href="#process"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    How to File ↓
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Deadline: 30th Sept 2026",
                    "✅ Free Filing (Before Deadline)",
                    "✅ OTP-Based (No DSC Needed)",
                    "✅ 10-Min Quick Filing",
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
                  Quick Facts (FY 2025-26)
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📅", "Deadline: 30th September 2026"],
                    ["💰", "Filing Fee: FREE (before deadline)"],
                    ["⏱️", "Filing Time: 10-15 minutes"],
                    ["🔐", "OTP: Aadhaar + PAN + Mobile + Email"],
                    ["❌", "Penalty (late): ₹5,000/director"],
                    ["💼", "Service Fee: ₹999 only"],
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
              { number: "5,000+", label: "DIR-3 KYC Filed", icon: "📋" },
              { number: "30 Sept", label: "FY 2025-26 Deadline", icon: "📅" },
              { number: "₹0", label: "Filing Fee (On Time)", icon: "💰" },
              { number: "₹999", label: "Our Service Fee", icon: "💼" },
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
              "✔ CA & CS Experts",
              "✔ Same-Day Filing",
              "✔ Deactivated DIN Reactivation",
              "✔ 100% MCA Compliance",
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
          {/* WHAT IS DIR-3 KYC */}
          <section id="what-is-dir3-kyc">
            <SectionLabel text="Understanding DIR-3 KYC" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is DIR-3 KYC (Director KYC) & Why Is It Mandatory?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>DIR-3 KYC</strong> (also called{" "}
                  <strong>DIN KYC</strong> or{" "}
                  <strong>Director KYC</strong> or{" "}
                  <strong>KYC-WEB</strong>) is an{" "}
                  <strong>ANNUAL KYC (Know Your Customer) FILING</strong> that
                  EVERY DIRECTOR holding a{" "}
                  <strong>DIN (Director Identification Number)</strong> must
                  file with the{" "}
                  <strong>Ministry of Corporate Affairs (MCA)</strong> to keep
                  their DIN <strong>ACTIVE and VALID</strong>.
                </p>
                <p>
                  It is a <strong>SELF-DECLARATION</strong> by the director
                  where they update and verify their:{" "}
                  <strong>
                    (1) Personal details (name, father's name, date of birth,
                    nationality), (2) Contact details (mobile number, email
                    address, residential address), (3) PAN (Permanent Account
                    Number), (4) Aadhaar Number (for Indian citizens), (5)
                    Passport details (for foreign directors/NRIs)
                  </strong>
                  .
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    📋 Why Was DIR-3 KYC Introduced?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    MCA introduced DIR-3 KYC in <strong>August 2018</strong> to:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Verify Director Identity",
                        desc: "Ensure that person holding DIN actually exists and details are genuine (prevent fake/benami directors).",
                      },
                      {
                        title: "Update Director Database",
                        desc: "Keep MCA's director database updated with current contact details, addresses, PAN, Aadhaar (many directors change mobile numbers, email, address but don't update MCA records).",
                      },
                      {
                        title: "Link Aadhaar with DIN",
                        desc: "Establish linkage between DIN and Aadhaar (unique biometric identity) to prevent one person from obtaining multiple DINs or using fake identities.",
                      },
                      {
                        title: "Identify Inactive/Defunct DINs",
                        desc: "Weed out inactive DINs (directors who have resigned from all companies, passed away, or are no longer active) — if DIR-3 KYC is not filed for multiple years, MCA assumes DIN is defunct and deactivates it.",
                      },
                      {
                        title: "Improve Corporate Governance",
                        desc: "Ensure directors are compliant with annual KYC norms (just like banks require KYC updates) — promotes transparency and accountability.",
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
                    ✅ Who MUST File DIR-3 KYC for FY 2025-26?
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "ALL directors of Private Limited Companies (Pvt Ltd)",
                      "ALL directors of Public Limited Companies (Ltd)",
                      "ALL directors of One Person Companies (OPC)",
                      "ALL directors of Section 8 Companies (NGOs/Non-profit companies)",
                      "ALL directors of Producer Companies",
                      "ALL directors of Nidhi Companies",
                      "ALL designated partners of LLPs (Limited Liability Partnerships)",
                      "Directors of companies that are STRUCK OFF or under liquidation (DIN still active, so KYC required)",
                      "Directors who have RESIGNED from all companies but DIN is still active (must file to keep DIN valid for future use)",
                      "NRI Directors and Foreign Directors (if holding DIN for Indian companies)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    🚫 Who is EXEMPTED from DIR-3 KYC?
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Directors who obtained DIN in CURRENT FY 2025-26",
                        desc: "If DIN was allotted between 1st April 2026 to 30th September 2026, NO NEED to file DIR-3 KYC for FY 2025-26 (must file from FY 2026-27 onwards). Example: DIN allotted on 15th May 2026 — exempt for FY 2025-26, must file by 30th Sept 2026 for FY 2026-27.",
                      },
                      {
                        title: "Directors of FOREIGN COMPANIES",
                        desc: "Directors of companies incorporated OUTSIDE INDIA (foreign companies with branch offices in India) are exempt (DIN KYC is only for directors of Indian companies).",
                      },
                      {
                        title: "Directors whose DIN was SURRENDERED",
                        desc: "If you have formally surrendered DIN by filing Form DIR-5 (DIN Surrender), you are exempt (DIN no longer exists, so KYC not applicable).",
                      },
                    ].map((item, i) => (
                      <li key={i} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-orange-700 text-sm mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📅 DIR-3 KYC Deadline & Timeline for FY 2025-26
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Key Dates for FY 2025-26
                      </p>
                      <table className="w-full text-xs">
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2 font-semibold">1st April 2026</td>
                            <td className="p-2">
                              DIR-3 KYC portal opens for FY 2025-26 (directors
                              can start filing from this date)
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-semibold">1 Apr - 30 Sept 2026</td>
                            <td className="p-2">
                              <strong className="text-green-700">
                                FREE FILING PERIOD
                              </strong>{" "}
                              (no MCA fee, no late fee)
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-semibold">15th Sept 2026</td>
                            <td className="p-2">
                              <strong className="text-blue-700">
                                RECOMMENDED DEADLINE
                              </strong>{" "}
                              (file by this date to avoid last-minute rush, server
                              overload, OTP issues)
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-semibold text-red-600">
                              30th Sept 2026
                            </td>
                            <td className="p-2">
                              <strong className="text-red-600">
                                FINAL DEADLINE (11:59 PM IST)
                              </strong>{" "}
                              — Last date for free filing
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-semibold">1st Oct 2026</td>
                            <td className="p-2">
                              <strong className="text-red-600">
                                DIN DEACTIVATION
                              </strong>{" "}
                              starts for non-filers. Late fee period begins (₹5,000
                              penalty per director)
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 font-semibold">Oct 2026 onwards</td>
                            <td className="p-2">
                              Late filing allowed with ₹5,000 fee + DIN reactivation
                              required (7-15 days processing)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2 text-sm">
                        💡 Pro Tip: When to File?
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>BEST TIME:</strong> 1st-15th September 2026
                          (avoid deadline rush)
                        </li>
                        <li>
                          • <strong>AVOID:</strong> 25th-30th September 2026 (MCA
                          portal becomes extremely slow, OTP delays, server errors due
                          to lakhs of directors filing on last days)
                        </li>
                        <li>
                          • <strong>EARLY BIRD BENEFIT:</strong> File in April-August
                          2026 for stress-free compliance (zero rush, instant OTPs)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Consequences of NOT Filing DIR-3 KYC by 30th Sept 2026
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <p className="font-bold text-red-700 mb-2">
                        1. DIN DEACTIVATION (Most Severe)
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        From 1st October 2026, MCA will AUTOMATICALLY DEACTIVATE
                        your DIN. Deactivated DIN means:
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Cannot sign MCA forms:</strong> All forms filed
                          with MCA (annual returns MGT-7, AOC-4, resolutions MGT-14,
                          etc.) require digital signature of active directors. If your
                          DIN is deactivated, you CANNOT sign forms using DSC — forms
                          will be REJECTED by MCA.
                        </li>
                        <li>
                          • <strong>Cannot be appointed as director:</strong> You
                          CANNOT be appointed as director in ANY NEW company (DIN is
                          inactive, so ROC will reject DIR-12 appointment form).
                        </li>
                        <li>
                          • <strong>Company becomes non-compliant:</strong> All
                          companies where you are director will become NON-COMPLIANT
                          because they have inactive director on their Board.
                        </li>
                        <li>
                          • <strong>DSC becomes useless:</strong> Your Digital
                          Signature Certificate (DSC) is linked to DIN. If DIN is
                          deactivated, DSC cannot be used for MCA filings (though DSC
                          may still work for Income Tax, GST, other portals).
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <p className="font-bold text-red-700 mb-2">
                        2. PENALTY & LATE FEE: ₹5,000
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        To FILE DIR-3 KYC after 30th September 2026, you must pay:
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>₹5,000 late fee</strong> (one-time penalty per
                          director per financial year)
                        </li>
                        <li>
                          • If you haven't filed for MULTIPLE YEARS (e.g., FY 2023-24,
                          FY 2024-25, FY 2025-26), you must pay ₹5,000 × 3 years ={" "}
                          <strong>₹15,000 total penalty</strong>
                        </li>
                        <li>
                          • Payment is made via MCA portal before filing DIR-3 KYC
                          (non-refundable)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <p className="font-bold text-red-700 mb-2">
                        3. COMPANY ROC COMPLIANCE ISSUES
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Company cannot file annual returns (MGT-7, AOC-4) if any
                          director has deactivated DIN
                        </li>
                        <li>
                          • Company cannot file Board resolutions (MGT-14) for
                          approvals (capital increase, address change, etc.)
                        </li>
                        <li>
                          • Eventually, company may be STRUCK OFF under Section 248 if
                          non-compliance continues for 2+ years
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <p className="font-bold text-red-700 mb-2">
                        4. DIRECTOR DISQUALIFICATION RISK
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        If DIN remains deactivated for MULTIPLE YEARS (3+ years) and
                        director doesn't take corrective action, MCA may initiate
                        DISQUALIFICATION proceedings under Section 164(2):
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Director is DISQUALIFIED from holding directorship in ANY
                          company for <strong>5 YEARS</strong>
                        </li>
                        <li>
                          • Name is added to MCA's disqualified directors list
                          (publicly visible on MCA website)
                        </li>
                        <li>
                          • Director must resign from all existing companies (cannot
                          continue as director even in current companies)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <p className="font-bold text-red-700 mb-2">
                        5. PERSONAL CREDIT SCORE IMPACT
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Some credit bureaus (CIBIL, Experian) now track MCA
                          compliance status
                        </li>
                        <li>
                          • Deactivated DIN or disqualified director status may
                          negatively impact personal CIBIL score
                        </li>
                        <li>
                          • Affects personal loan applications, credit card approvals,
                          home loans, car loans
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <p className="font-bold text-yellow-800 mb-3">
                    🔄 How to Check If You Need to File DIR-3 KYC?
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold">Follow these steps:</p>
                    <ol className="space-y-2 ml-6 text-xs">
                      <li>
                        <strong>1. Check DIN Status on MCA Portal:</strong>
                        <br />
                        (a) Go to:{" "}
                        <a
                          href="https://www.mca.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          www.mca.gov.in
                        </a>{" "}
                        → MCA Services → View Company/LLP Master Data
                        <br />
                        (b) Click on 'View DIN Details'
                        <br />
                        (c) Enter your DIN (8-digit number)
                        <br />
                        (d) Check STATUS field:
                        <br />• If status = <strong>'Approved'</strong> → DIN is
                        ACTIVE (you must file DIR-3 KYC)
                        <br />• If status = <strong>'Deactivated'</strong> → DIN is
                        INACTIVE (file DIR-3 KYC with ₹5,000 late fee to reactivate)
                        <br />• If status = <strong>'Surrendered'</strong> → DIN no
                        longer exists (no need to file)
                      </li>
                      <li>
                        <strong>2. Check Last DIR-3 KYC Filing Date:</strong>
                        <br />
                        On DIN details page, check 'Last KYC Filed Date'
                        <br />• If last filed = <strong>FY 2024-25</strong> → You
                        MUST file for FY 2025-26 by 30th Sept 2026
                        <br />• If last filed = <strong>FY 2022-23 or earlier</strong>{" "}
                        → You have MULTIPLE YEARS pending (must file for ALL pending
                        years with ₹5,000 fee per year)
                      </li>
                      <li>
                        <strong>3. Check DIN Allotment Date:</strong>
                        <br />
                        If DIN was allotted AFTER 1st April 2026, you are EXEMPT for
                        FY 2025-26 (must file from FY 2026-27 onwards)
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FILING PROCESS */}
          <section id="process">
            <SectionLabel text="Filing Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to File DIR-3 KYC for FY 2025-26 (Step-by-Step)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                DIR-3 KYC can be filed ONLINE on MCA portal using{" "}
                <strong>OTP-based authentication</strong> (no DSC required). Complete
                process in 10-15 minutes:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Verify Documents & Information Ready",
                    description:
                      "Before starting DIR-3 KYC filing, ensure you have following information/documents ready: (1) DIN (8-digit Director Identification Number) — check Certificate of DIN allotment or company records. (2) PAN CARD (Permanent Account Number) — must be LINKED with Aadhaar. (3) AADHAAR CARD (for Indian citizens) — mobile number registered with Aadhaar must be ACTIVE (OTP will be sent to Aadhaar-linked mobile). (4) MOBILE NUMBER: (a) Mobile number registered with Aadhaar (for Aadhaar OTP), (b) Current mobile number where you want to receive OTP (can be different from Aadhaar mobile). (5) EMAIL ADDRESS: Active email ID (OTP will be sent for verification). (6) RESIDENTIAL ADDRESS: Current residential address (as per Aadhaar or passport). (7) PASSPORT (for NRIs/foreign directors) — passport number, issue date, expiry date, country of issue. IMPORTANT PRE-CHECKS: (a) PAN-Aadhaar Linkage: Verify on Income Tax portal that PAN is linked with Aadhaar. If not linked, link first (Income Tax website → Link Aadhaar → Enter PAN + Aadhaar + Name + DOB → Submit). (b) Aadhaar Mobile Update: If mobile number in Aadhaar is old/inactive, update it by visiting Aadhaar Enrollment Center OR using Aadhaar mobile update service (mAadhaar app or UIDAI website). (c) Email Access: Ensure you have access to email ID (can receive OTP and retrieve password if needed).",
                    duration: "5 minutes (verification)",
                  },
                  {
                    step: 2,
                    title: "Login to MCA Portal (DIR-3 KYC Portal)",
                    description:
                      "Go to MCA portal: https://www.mca.gov.in → MCA Services → e-Forms → DIR-3 KYC (or directly visit: https://www.mca.gov.in/mcafoportal/eKYC.do). Click on 'File DIR-3 KYC' button. LOGIN OPTIONS (choose one): (1) LOGIN WITH DIN: (a) Enter DIN (8 digits), (b) Enter Captcha code, (c) Click 'Submit' — system sends OTP to your registered mobile and email, (d) Enter OTP received on mobile and email, (e) Click 'Validate OTP' — you'll be logged in. (2) LOGIN WITH USER ID & PASSWORD (if you have registered on MCA portal earlier): (a) Enter User ID (email ID used during registration), (b) Enter Password, (c) Enter Captcha, (d) Click 'Login'. FIRST-TIME USERS: If you're filing DIR-3 KYC for the FIRST TIME and don't have MCA login, use 'Login with DIN' option (simplest method — no registration needed).",
                    duration: "2 minutes",
                  },
                  {
                    step: 3,
                    title: "Fill DIR-3 KYC Form (Web-Based / KYC-WEB)",
                    description:
                      "After login, DIR-3 KYC form opens (also called KYC-WEB form). The form is PRE-FILLED with your existing details (name, father's name, DOB, address, etc.) as per MCA database. Review and UPDATE following sections: (1) PERSONAL DETAILS: (a) DIN (auto-filled, cannot be changed), (b) Full Name (as per PAN card — verify spelling is correct), (c) Father's Name / Mother's Name, (d) Date of Birth (DD-MM-YYYY), (e) Gender (Male / Female / Transgender), (f) Nationality (Indian / Other — if other, specify country). (2) IDENTIFICATION DETAILS (for Indian citizens): (a) PAN (enter 10-digit PAN number — system validates with Income Tax database), (b) Aadhaar Number (12-digit number — keep Aadhaar card handy). (3) IDENTIFICATION DETAILS (for NRIs/Foreign directors): (a) Passport Number, (b) Passport Issue Date, (c) Passport Expiry Date, (d) Country of Passport Issue. (4) CONTACT DETAILS: (a) Mobile Number (enter current active mobile — OTP will be sent for final submission), (b) Alternate Mobile Number (optional), (c) Email Address (current active email — OTP will be sent), (d) Alternate Email Address (optional). (5) RESIDENTIAL ADDRESS: (a) Select 'Same as Aadhaar Address' OR 'Different Address', (b) If different: Enter complete address (Flat/House No., Building Name, Street, Locality, City, State, PIN Code, Country), (c) Address Proof Type (Aadhaar / Passport / Driving License / Voter ID / Utility Bill — select Aadhaar for easiest verification). IMPORTANT TIPS: (a) Enter mobile number and email CAREFULLY (OTP will be sent to these for verification — if wrong, you cannot complete filing). (b) Address should match Aadhaar address OR you should have valid address proof document (if address is different from Aadhaar, MCA may ask for proof later). (c) PAN must be EXACT as per PAN card (including spelling, spacing). (d) Double-check all details before proceeding (errors may cause form rejection or DIN deactivation).",
                    duration: "5 minutes",
                  },
                  {
                    step: 4,
                    title: "Aadhaar OTP Authentication (eSign)",
                    description:
                      "After filling form, click 'Proceed to eSign' button. MCA portal uses AADHAAR-BASED eSIGN to authenticate your identity (no DSC required). Process: (1) System sends 6-DIGIT OTP to mobile number REGISTERED WITH AADHAAR (not the mobile number you entered in form — but Aadhaar-linked mobile). (2) OTP is sent by UIDAI (Aadhaar Authority) via SMS. (3) Enter OTP in the box within 10 MINUTES (OTP expires after 10 minutes). (4) Click 'Verify OTP'. (5) System validates OTP with UIDAI. If OTP is correct, your DIR-3 KYC form is DIGITALLY SIGNED using Aadhaar eSign. COMMON ISSUES & SOLUTIONS: (1) ISSUE: OTP not received on Aadhaar-linked mobile. SOLUTION: (a) Check if mobile number in Aadhaar is active (if old/inactive, update Aadhaar mobile first), (b) Wait 2-3 minutes (sometimes OTP is delayed), (c) Click 'Resend OTP' button, (d) Check SMS inbox and spam folder. (2) ISSUE: Aadhaar mobile number is old/unknown to me. SOLUTION: (a) Visit nearest Aadhaar Enrollment Center with Aadhaar card and update mobile number (takes 1 day to update in UIDAI database), (b) OR use 'Login with DIN + PAN authentication' option (available on some portals — but Aadhaar eSign is standard method). (3) ISSUE: OTP entered but showing 'Invalid OTP' error. SOLUTION: (a) Ensure you entered correct 6-digit OTP (no spaces, no typos), (b) Ensure OTP is not expired (valid for 10 minutes only), (c) Request fresh OTP and re-enter.",
                    duration: "2 minutes (OTP authentication)",
                  },
                  {
                    step: 5,
                    title: "PAN OTP Verification",
                    description:
                      "After Aadhaar OTP is verified, MCA portal sends SECOND OTP to mobile number and email registered with INCOME TAX DEPARTMENT (linked to your PAN). Process: (1) OTP is sent to PAN-linked mobile and email (check SMS inbox and email inbox). (2) Enter 6-digit OTP in the box. (3) Click 'Verify OTP'. This step ensures that PAN entered in DIR-3 KYC form is GENUINE and belongs to you (prevents fake PAN usage). COMMON ISSUES: (1) ISSUE: OTP not received on PAN-linked mobile/email. SOLUTION: (a) Update mobile/email in Income Tax portal (Login to e-filing portal → My Profile → Update mobile/email → Verify with OTP), (b) Wait 24 hours for update to reflect in IT database, then retry DIR-3 KYC filing. (2) ISSUE: I don't know which mobile/email is linked with my PAN. SOLUTION: (a) Login to Income Tax e-filing portal → My Profile → View registered mobile/email, (b) If incorrect, update and verify.",
                    duration: "2 minutes",
                  },
                  {
                    step: 6,
                    title: "Email OTP Verification (Final Step)",
                    description:
                      "After PAN OTP is verified, MCA sends THIRD OTP to the EMAIL ADDRESS you entered in DIR-3 KYC form. (1) Check email inbox (check spam/junk folder if not in inbox). (2) OTP is sent from 'mca@gov.in' or 'eforms@mca.gov.in'. (3) Enter 6-digit OTP. (4) Click 'Submit'. This is the FINAL verification step. Once email OTP is verified, your DIR-3 KYC form is SUCCESSFULLY SUBMITTED to MCA.",
                    duration: "1 minute",
                  },
                  {
                    step: 7,
                    title: "Download DIR-3 KYC Acknowledgment",
                    description:
                      "After successful submission, MCA portal displays SUCCESS MESSAGE: 'DIR-3 KYC submitted successfully'. Download ACKNOWLEDGMENT (Form DIR-3 KYC Receipt): (1) Acknowledgment contains: (a) SRN (Service Request Number) — unique 20-digit number for your filing, (b) DIN, (c) Director name, (d) Filing date and time, (e) Status: 'Submitted' or 'Approved'. (2) Save acknowledgment PDF (required for company records and ROC filings). (3) Acknowledgment is also sent to your registered email ID (check inbox). IMPORTANT: (1) SRN is the PROOF that you have filed DIR-3 KYC — keep it safe (required if there are any future queries or verification needed). (2) Filing status may initially show 'Submitted' — it changes to 'Approved' within 24-48 hours after MCA processes your KYC (system auto-approves if all details are correct).",
                    duration: "1 minute",
                  },
                  {
                    step: 8,
                    title: "Verify DIN Status (24-48 Hours After Filing)",
                    description:
                      "After filing DIR-3 KYC, verify that your DIN status is updated: (1) Wait 24-48 hours (MCA takes 1-2 days to process and update DIN status). (2) Check DIN status: Go to MCA portal → View DIN Details → Enter DIN → Check Status. (3) Status should show: (a) 'Approved' (DIN is ACTIVE), (b) Last KYC Filed Date: FY 2025-26 (30th September 2026 or earlier). If status is 'Approved' and last KYC date shows FY 2025-26, your DIR-3 KYC filing is SUCCESSFUL and DIN is now ACTIVE for the year. If status still shows 'Deactivated' or last KYC date is old: (1) Check SRN status: MCA portal → Track SRN Status → Enter SRN → Check status. (2) If SRN shows 'Query Issued', MCA has raised query (respond to query with corrected information). (3) If SRN shows 'Approved' but DIN status not updated, wait 2-3 more days (sometimes portal takes time to refresh). (4) If issue persists, contact MCA helpdesk OR file fresh DIR-3 KYC (sometimes second attempt is needed if first filing had technical errors).",
                    duration: "1-2 days (MCA processing)",
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
                  Total Time Required
                </p>
                <p className="text-sm text-gray-700">
                  <strong>10-15 minutes</strong> for complete DIR-3 KYC filing (if all
                  documents are ready and OTPs are received promptly). Breakdown: Document
                  verification (5 mins) + Form filling (5 mins) + OTP authentication (3
                  mins) + Acknowledgment download (1 min). Additional 24-48 hours for MCA
                  processing and DIN status update.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Required Information" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents & Information Required for DIR-3 KYC FY 2025-26
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Indian Citizens
                </p>
                <ul className="space-y-3">
                  {[
                    "DIN (8-digit Director Identification Number)",
                    "PAN Card (Permanent Account Number) — must be linked with Aadhaar",
                    "Aadhaar Card (12-digit number) — mobile linked to Aadhaar must be active",
                    "Active Mobile Number (registered with Aadhaar) — to receive Aadhaar OTP",
                    "Current Mobile Number (for general communication) — can be different from Aadhaar mobile",
                    "Active Email Address (to receive PAN OTP and email OTP)",
                    "Residential Address (as per Aadhaar card OR current address with proof)",
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
                  For NRIs / Foreign Directors
                </p>
                <ul className="space-y-3">
                  {[
                    "DIN (8-digit number)",
                    "PAN Card (if Indian PAN is available)",
                    "Passport (mandatory) — Number, Issue Date, Expiry Date, Country of Issue",
                    "Passport Copy (scanned/photographed)",
                    "Active Mobile Number (international number with country code — e.g., +971-XXXXXXXXX for UAE)",
                    "Active Email Address",
                    "Current Residential Address (in home country or India)",
                    "Address Proof (Passport / Driving License / Utility Bill showing current address)",
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

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <p className="font-bold text-blue-800 mb-3">
                📝 Pre-Filing Checklist (Important!)
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Verify PAN is linked with Aadhaar (check on Income Tax portal)",
                  "Verify mobile number in Aadhaar is active (if inactive, update Aadhaar mobile)",
                  "Verify email address is accessible (can receive OTP)",
                  "Check DIN status on MCA portal (should be 'Approved' — if 'Deactivated', file with ₹5,000 late fee)",
                  "Check last DIR-3 KYC filing date (if pending for multiple years, must file for all years)",
                  "Ensure internet connection is stable (filing is online, OTPs are time-sensitive)",
                  "Keep PAN card, Aadhaar card handy (may need to refer to details during filling)",
                  "Have mobile and email accessible during filing (OTPs will be sent in real-time)",
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
            <SectionLabel text="Avoid These Errors" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Mistakes in DIR-3 KYC Filing (FY 2025-26)
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Avoid these critical errors that can cause DIR-3 KYC rejection or DIN
                deactivation:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Filing on Last Day (30th September)",
                    icon: "⏰",
                    problem:
                      "Millions of directors rush to file DIR-3 KYC on 29th-30th September every year, causing: (1) MCA portal CRASHES or becomes extremely slow (page loading takes 10-15 minutes), (2) OTP DELAYS — Aadhaar OTP, PAN OTP, Email OTP take 30-60 minutes to arrive (normal time is 1-2 minutes), (3) SESSION TIMEOUT — Form session expires while waiting for OTP, data is lost, must restart, (4) SUBMISSION FAILURES — Even after filling form, 'Submit' button doesn't work due to server overload, (5) Missing DEADLINE — If filing fails at 11:45 PM on 30th Sept, and you retry, it may cross midnight (1st Oct) — DIN gets deactivated, ₹5,000 penalty applies. REAL EXAMPLE: In FY 2023-24, on 30th September 2024, MCA portal was down for 6+ hours (4 PM to 10 PM) due to overload. Thousands of directors couldn't file and had to pay ₹5,000 late fee in October.",
                    solution:
                      "FILE EARLY: (1) BEST TIME: 1st-15th September 2026 (avoid all issues, instant OTPs, no server load). (2) SAFE TIME: 16th-25th September 2026 (moderate rush, but manageable). (3) AVOID: 26th-30th September (extreme rush, high failure risk). PRO TIP: File during OFF-PEAK HOURS — early morning (6-9 AM) or late night (11 PM - 2 AM) on weekdays (Monday-Thursday). Avoid weekends and evenings (5-9 PM) when traffic is highest. Taxvio offers EARLY FILING SERVICE in April-August 2026 to help directors avoid deadline stress.",
                  },
                  {
                    mistake: "PAN Not Linked with Aadhaar",
                    icon: "🔗",
                    problem:
                      "If PAN is NOT linked with Aadhaar, DIR-3 KYC filing will FAIL at PAN verification step. MCA system cross-verifies PAN with Income Tax database — if PAN-Aadhaar link is not found, system shows error: 'PAN is not linked with Aadhaar. Please link PAN-Aadhaar and retry.' Director cannot proceed with filing. Even if you somehow bypass verification (rare), MCA will reject filing during processing and DIN will be deactivated.",
                    solution:
                      "LINK PAN WITH AADHAAR IMMEDIATELY: (1) Go to Income Tax e-filing portal: https://www.incometax.gov.in → Quick Links → Link Aadhaar. (2) Enter PAN, Aadhaar Number, Name (as per Aadhaar), Date of Birth. (3) Click 'Validate' — system sends OTP to Aadhaar-linked mobile. (4) Enter OTP and submit. (5) Linking is INSTANT (takes 2-3 minutes). (6) Verify linkage: Income Tax portal → Check PAN-Aadhaar Link Status → Enter PAN + Aadhaar → Check (should show 'Linked successfully'). DEADLINE for PAN-Aadhaar linking: 30th June 2023 was original deadline, but Income Tax department still allows linking (no penalty currently). However, unlinked PAN becomes INOPERATIVE — cannot be used for any transactions. RECOMMENDATION: Link PAN-Aadhaar BEFORE starting DIR-3 KYC filing (essential pre-requisite).",
                  },
                  {
                    mistake: "Aadhaar Mobile Number Inactive/Old",
                    icon: "📱",
                    problem:
                      "DIR-3 KYC uses Aadhaar OTP for eSign authentication. OTP is sent to mobile number REGISTERED WITH AADHAAR (not the mobile you enter in form). If: (1) Mobile number in Aadhaar is OLD (you changed mobile 2-3 years ago but didn't update Aadhaar), (2) Mobile number is INACTIVE (SIM deactivated, not in use), (3) You DON'T REMEMBER which mobile is linked with Aadhaar, THEN: Aadhaar OTP will NOT reach you → Cannot complete eSign → DIR-3 KYC filing FAILS. You're stuck at OTP screen, cannot proceed. If you try multiple times and fail, MCA portal may LOCK your filing for 24 hours (anti-spam measure).",
                    solution:
                      "UPDATE AADHAAR MOBILE NUMBER (if old/inactive): METHOD 1 - Visit Aadhaar Enrollment Center (Offline): (1) Locate nearest Aadhaar center: https://appointments.uidai.gov.in → Search by PIN code. (2) Visit center with original Aadhaar card. (3) Request 'Mobile Number Update' (free service). (4) New mobile number is updated in UIDAI database within 24 hours. (5) Verification: Download updated Aadhaar from UIDAI website after 24 hours. METHOD 2 - Online Aadhaar Update (using mAadhaar app): (1) Download 'mAadhaar' app on smartphone (Google Play / App Store). (2) Login with Aadhaar number + OTP (sent to OLD Aadhaar mobile — if you still have access). (3) Update mobile number (enter new mobile, verify with OTP). (4) Update reflects in UIDAI database within 24 hours. METHOD 3 - Aadhaar Update via Post Office (Offline): (1) Visit nearest post office with Aadhaar Update form. (2) Fill form and submit with mobile number change request. (3) Update takes 7-10 days. AFTER UPDATE: Wait 24-48 hours before filing DIR-3 KYC (allow time for UIDAI database to sync with MCA portal).",
                  },
                  {
                    mistake: "Entering Wrong Mobile/Email in Form",
                    icon: "📧",
                    problem:
                      "DIR-3 KYC form asks for mobile number and email address. Directors sometimes: (1) Enter mobile with TYPO (wrong digit — e.g., 9876543210 instead of 9876543201), (2) Enter OLD email address (which they no longer use or have access to), (3) Enter SOMEONE ELSE's mobile/email by mistake. RESULT: OTP for PAN verification or Email verification is sent to WRONG number/email → Director cannot receive OTP → Filing FAILS. Even worse, if form is SUBMITTED with wrong mobile/email, MCA updates your contact details with wrong info → Future official communications (ROC notices, compliance alerts) will go to wrong contact → You'll miss important deadlines.",
                    solution:
                      "DOUBLE-CHECK Mobile & Email BEFORE Submitting: (1) Mobile number: Verify all 10 digits are correct. Test: Send a test OTP to this mobile before entering in form (use bank's OTP verification or any app to confirm mobile is working). (2) Email address: Verify spelling, domain (@gmail.com, @yahoo.com, etc.). Test: Send yourself an email from another account and confirm you receive it (ensures email is active and accessible). (3) Use CURRENT mobile and email (not old numbers you no longer use). (4) Recommended: Use SAME mobile and email that is registered with Income Tax portal (makes OTP verification seamless — PAN OTP and Email OTP will come to same contact you're using). (5) After entering mobile/email in form, RE-READ them carefully before clicking 'Proceed' (prevent typos).",
                  },
                  {
                    mistake: "Ignoring OTP Validity Time (10 Minutes)",
                    icon: "⏱️",
                    problem:
                      "All OTPs (Aadhaar, PAN, Email) have VALIDITY of 10 MINUTES from generation time. If you: (1) Receive OTP but get DISTRACTED (phone call, meeting, break) and enter OTP after 10 minutes → OTP EXPIRES → Shows 'Invalid OTP' error. (2) Wait for OTP for too long (5-6 minutes) thinking it will come, then request RESEND OTP multiple times → Receive multiple OTPs (e.g., 3 OTPs for same verification step) → CONFUSION — which OTP to enter? → Enter old OTP → Error. (3) Close browser/app while waiting for OTP → Session TIMES OUT → When you return and try to enter OTP, it doesn't work (session expired). RESULT: Filing process STUCK at OTP screen, cannot proceed, must restart entire process (re-fill form, request fresh OTPs).",
                    solution:
                      "MANAGE OTP TIMING CAREFULLY: (1) REQUEST OTP only when you're READY to receive and enter it immediately (don't request OTP and then leave computer/mobile). (2) Keep MOBILE and EMAIL accessible during filing (have phone in hand, email inbox open in another tab). (3) As soon as OTP is received (within 1-2 minutes), ENTER IT IMMEDIATELY (don't wait, don't delay). (4) If OTP doesn't arrive within 3 minutes: (a) Check mobile signal strength (move to area with better network), (b) Check SMS inbox AND spam folder, (c) Check email inbox, spam, promotions folder. (5) If still no OTP after 5 minutes, click 'RESEND OTP' ONCE (don't click multiple times — causes multiple OTPs and confusion). (6) If second OTP also doesn't arrive, PAUSE filing, check if: (a) Aadhaar mobile number is correct and active, (b) PAN-linked mobile/email is correct, (c) Internet connection is stable. (7) If issue persists, EXIT filing, troubleshoot (update Aadhaar mobile, PAN contact details), retry filing next day.",
                  },
                  {
                    mistake: "Not Verifying DIN Status After Filing",
                    icon: "✅",
                    problem:
                      "Many directors file DIR-3 KYC, download acknowledgment, and ASSUME filing is successful. They don't verify DIN status after 24-48 hours. RISK: Sometimes, even after filing, MCA system may: (1) REJECT filing due to data mismatch (e.g., PAN name doesn't match DIN name, address verification failed, etc.), (2) Mark DIN as 'Query Issued' (MCA needs additional information/clarification), (3) Keep DIN status as 'Deactivated' (if previous years' DIR-3 KYC are pending or late fee not paid). RESULT: Director thinks DIN is active, but actually DIN is STILL DEACTIVATED → When company tries to file annual returns (MGT-7, AOC-4) using this director's DSC, forms are REJECTED by MCA → Compliance deadline is missed → Penalties for company and director.",
                    solution:
                      "ALWAYS VERIFY DIN STATUS 48 HOURS AFTER FILING: (1) Wait 2 days after filing DIR-3 KYC (allow MCA to process). (2) Check DIN status: MCA portal → View DIN Details → Enter DIN → Check. (3) VERIFY TWO THINGS: (a) DIN Status = 'Approved' (not 'Deactivated' or 'Query Issued'), (b) Last KYC Filed Date = 'FY 2025-26' (or shows date you filed — e.g., 15-Sep-2026). (4) If status is 'Approved' and KYC date shows FY 2025-26 → SUCCESS → DIN is ACTIVE for the year. (5) If status is 'Deactivated' or 'Query Issued': (a) Check SRN Status: MCA portal → Track SRN → Enter SRN (from acknowledgment) → Check status, (b) If SRN shows 'Query Issued', MCA has raised query → LOGIN to MCA portal → View Query → Respond with correct information/documents, (c) If SRN shows 'Approved' but DIN status not updated, contact MCA helpdesk (may be technical glitch), (d) If issue not resolved, FILE FRESH DIR-3 KYC (sometimes second filing is needed). (6) TAKE SCREENSHOT of DIN status page showing 'Approved' and 'FY 2025-26' (keep as proof for company records and auditor).",
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

          {/* Continue with Services, Testimonials, FAQ, etc... */}
          {/* Due to length, I'll add the closing sections */}

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="Our Services" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              DIR-3 KYC Filing Services by Taxvio
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Hassle-free DIR-3 KYC filing for FY 2025-26 with expert support:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Standard Filing",
                  price: "₹999",
                  popular: true,
                  features: [
                    "DIR-3 KYC filing for FY 2025-26",
                    "Pre-filing DIN status verification",
                    "PAN-Aadhaar linkage verification",
                    "Form filling assistance (if needed)",
                    "OTP troubleshooting support",
                    "Acknowledgment download",
                    "Post-filing DIN status verification",
                    "Email support",
                  ],
                  ideal: "Directors filing on time (before 30th Sept 2026)",
                },
                {
                  name: "Late Filing",
                  price: "₹2,999",
                  popular: false,
                  features: [
                    "DIR-3 KYC filing after 30th Sept 2026",
                    "₹5,000 late fee payment (paid to MCA)",
                    "Deactivated DIN reactivation",
                    "Multiple years filing (if pending)",
                    "DIN status tracking",
                    "Priority filing support",
                    "WhatsApp + email + phone support",
                  ],
                  ideal: "Directors who missed deadline (filing after 1st Oct 2026)",
                },
                {
                  name: "Multiple Directors",
                  price: "₹499/director",
                  popular: false,
                  features: [
                    "Bulk DIR-3 KYC filing",
                    "5+ directors discounted rate",
                    "Single-day filing for all directors",
                    "Centralized tracking",
                    "Company-level support",
                    "Dedicated CA coordination",
                  ],
                  ideal: "Companies with multiple directors (5+ directors)",
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
                    <p className="text-sm text-gray-500">Per director</p>
                  </div>

                  <ul className="space-y-2 mb-6">
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
                    File Now →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Don't Wait — File Today!
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File DIR-3 KYC for FY 2025-26 — Keep Your DIN Active
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Deadline: 30th September 2026 Avoid ₹5,000 penalty and DIN
                    deactivation. Complete OTP-based filing in 10-15 minutes with Taxvio's
                    expert support. Pre-filing verification, form assistance,
                    troubleshooting, and post-filing DIN status tracking. Starting ₹999
                    only. File now before deadline rush!
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File DIR-3 KYC — ₹999
                  </Link>
                  <Link
                    href="#process"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    View Process
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
            href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20DIR-3%20KYC%20Filing%20for%20FY%202025-26"
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

/* ══════════════════════ COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "I am a director of 3 companies. Do I need to file DIR-3 KYC 3 times (once for each company)?",
      a: "NO. DIR-3 KYC is filed ONCE PER DIRECTOR PER YEAR (not per company). Your DIN (Director Identification Number) is UNIQUE to you as an individual — it doesn't change based on how many companies you are director of. Process: (1) File ONE DIR-3 KYC for your DIN by 30th September 2026 (2) This single filing covers ALL companies where you are director (whether 1 company or 10 companies — doesn't matter). (3) After filing, your DIN status changes to 'Approved' and 'Last KYC: FY 2025-26' — this applies ACROSS ALL companies. EXAMPLE: Mr. Sharma is director in: (a) ABC Pvt Ltd, (b) XYZ Ltd, (c) PQR LLP. He has ONE DIN (say, 12345678). He files DIR-3 KYC ONCE on 15th Sept 2026 All three companies (ABC, XYZ, PQR) can now use Mr. Sharma's DIN for ROC filings, annual returns, resolutions — his DIN is active for all. WRONG APPROACH: Some directors think they must file separate DIR-3 KYC for each company (file 3 times) — this is INCORRECT and waste of time/money (if using paid service). MCA portal will show error if you try to file DIR-3 KYC multiple times for same DIN in same financial year. RECOMMENDATION: File DIR-3 KYC once, download acknowledgment, share acknowledgment copy with ALL companies where you are director (so company's CA/CS can update their records).",
    },
    {
      q: "Can I file DIR-3 KYC without DSC (Digital Signature Certificate)?",
      a: "YES. DIR-3 KYC does NOT require DSC (Digital Signature Certificate). It uses AADHAAR-BASED eSIGN for authentication — completely OTP-based, no DSC needed. This is the BIGGEST ADVANTAGE of DIR-3 KYC — even directors who don't have DSC (or whose DSC has expired) can file easily using Aadhaar OTP. PROCESS: (1) Login to MCA portal with DIN. (2) Fill DIR-3 KYC form. (3) Click 'Proceed to eSign'. (4) System sends OTP to Aadhaar-linked mobile. (5) Enter Aadhaar OTP → Form is digitally signed using Aadhaar eSign (government-approved digital signature method under IT Act 2000). (6) Additional OTPs: PAN OTP and Email OTP for further verification. (7) Submit form — NO DSC required at any step. WHY eSIGN WAS INTRODUCED: MCA introduced Aadhaar eSign for DIR-3 KYC to make it ACCESSIBLE to all directors (including small company directors, first-time directors, retired directors who may not have DSC). Earlier, all MCA forms required DSC (which costs ₹1,000-2,000 and requires renewal every 1-2 years) — many directors found it cumbersome. DSC vs eSIGN Comparison: (1) DSC: Requires USB token, DSC software installation, renewal every 1-2 years, costs ₹1,000-2,000. Used for: Annual returns (MGT-7, AOC-4), resolutions (MGT-14), incorporation forms, etc. (2) eSIGN (Aadhaar): No hardware needed, no software, no renewal, completely FREE. Used ONLY for: DIR-3 KYC. IMPORTANT: For OTHER MCA forms (MGT-7, AOC-4, MGT-14, etc.), DSC is STILL REQUIRED. eSIGN is ONLY for DIR-3 KYC filing.",
    },
    {
      q: "What if I filed DIR-3 KYC but my DIN status still shows 'Deactivated' after 1 week?",
      a: "If you filed DIR-3 KYC correctly and received acknowledgment, but DIN status is STILL showing 'Deactivated' after 1 week, possible reasons and solutions: REASON 1: Previous Years' DIR-3 KYC Pending. If you HAVEN'T filed DIR-3 KYC for PREVIOUS YEARS (FY 2022-23, FY 2023-24, FY 2024-25), MCA will NOT activate DIN even if you file for FY 2025-26. MCA requires ALL PENDING YEARS to be filed. SOLUTION: (1) Check which years are pending: MCA portal → View DIN Details → Check 'Last KYC Filed Date'. If last filed = FY 2021-22, it means FY 2022-23, 2023-24, 2024-25, 2025-26 are ALL PENDING (4 years). (2) File DIR-3 KYC for EACH PENDING YEAR separately: (a) For FY 2022-23: Pay ₹5,000 late fee + File DIR-3 KYC, (b) For FY 2023-24: Pay ₹5,000 late fee + File DIR-3 KYC, (c) For FY 2024-25: Pay ₹5,000 late fee + File DIR-3 KYC, (d) For FY 2025-26: Already filed (no late fee if before 30th Sept 2026). (3) Total late fee: ₹5,000 × 3 years = ₹15,000 (for pending years 2022-23, 2023-24, 2024-25). (4) After filing all pending years, DIN will be REACTIVATED within 7-15 days. REASON 2: Data Mismatch / Form Rejection. MCA system may have REJECTED your DIR-3 KYC filing due to: (a) PAN name doesn't match DIN name (spelling difference, middle name missing, etc.), (b) Aadhaar details don't match DIN database, (c) Address verification failed. SOLUTION: (1) Check SRN Status: MCA portal → Track SRN → Enter SRN (from acknowledgment) → Check status. (2) If status shows 'Query Issued' or 'Rejected', MCA has raised query or rejected filing. (3) Login to MCA portal → View Query/Rejection Reason → Respond with corrected information/documents. (4) If data mismatch issue (name spelling, address, etc.), you may need to first UPDATE DIN DETAILS via Form DIR-6 (DIN modification form) BEFORE filing DIR-3 KYC again. REASON 3: Late Fee Not Paid (for filing after 30th Sept). If you filed DIR-3 KYC AFTER 30th September (deadline crossed), you MUST pay ₹5,000 late fee. If you filed form but DIDN'T pay late fee (payment failed or skipped), MCA will NOT process your KYC — DIN remains deactivated. SOLUTION: (1) Check if late fee payment was successful: MCA portal → Payment History → Check if ₹5,000 payment for DIR-3 KYC shows 'Success'. (2) If payment shows 'Failed' or not found, make payment again: MCA portal → Payments → Miscellaneous Payments → DIR-3 KYC Late Fee → Pay ₹5,000. (3) After successful payment, file DIR-3 KYC again (attach payment challan/receipt). REASON 4: Technical Glitch / Portal Issue. Sometimes, MCA portal has technical issues — even after correct filing, DIN status doesn't update due to server/database sync delays. SOLUTION: (1) Wait 2-3 more days (total 10 days after filing). (2) If still not updated, FILE GRIEVANCE with MCA: MCA portal → Grievance Redressal → Select 'DIN Related' → Describe issue ('Filed DIR-3 KYC, received acknowledgment, but DIN still deactivated') → Attach acknowledgment copy → Submit. (3) MCA will respond within 7-15 days with resolution. (4) Alternatively, contact MCA helpdesk: Email: dir.mca@gov.in, Phone: 0124-4684999 (MCA Helpline). RECOMMENDATION: If DIN is not activated even after 10-15 days and all above steps fail, hire professional (CA/CS like Taxvio) to investigate and resolve issue — may require DIN modification (DIR-6) or escalation to MCA regional office.",
    },
    {
      q: "I am a foreign director (NRI) without Aadhaar. How do I file DIR-3 KYC?",
      a: "Foreign directors and NRIs (Non-Resident Indians) who do NOT have Aadhaar can still file DIR-3 KYC using PASSPORT-BASED VERIFICATION instead of Aadhaar eSign. PROCESS FOR FOREIGN DIRECTORS / NRIs WITHOUT AADHAAR: (1) Login to MCA portal: DIR-3 KYC portal → Enter DIN → Select 'Foreign National / NRI without Aadhaar' option. (2) Fill DIR-3 KYC form: (a) Personal details: Name, Father's Name, DOB, Gender, Nationality (specify country). (b) Identification: (i) PAN (if you have Indian PAN — enter it), (ii) Passport Number (mandatory), (iii) Passport Issue Date, (iv) Passport Expiry Date, (v) Country of Passport Issue. (c) Contact Details: (i) Mobile Number (international number with country code — e.g., +971-XXXXXXXXX for UAE, +1-XXXXXXXXXX for USA), (ii) Email Address (active email). (d) Residential Address: (i) Address in home country OR address in India (if residing in India), (ii) Address Proof Type: Passport (select this option). (3) Document Upload (for NRIs/Foreign Directors): (a) Upload PASSPORT COPY (colored scan/photo showing: Personal details page with photo, name, DOB, passport number, issue/expiry dates). (b) Upload ADDRESS PROOF (any one): (i) Passport (if passport shows current address), OR (ii) Driving License (of home country), OR (iii) Utility Bill (electricity, water, phone bill showing current address — not older than 2 months), OR (iv) Bank Statement (showing current address — not older than 2 months). (4) Verification Method (No Aadhaar OTP): Since you don't have Aadhaar, MCA uses ALTERNATIVE VERIFICATION: (a) PAN OTP (if you have Indian PAN): System sends OTP to PAN-linked mobile and email → Enter OTP. (b) Email OTP: System sends OTP to email address you entered in form → Enter OTP. (c) Document Verification: MCA manually verifies your uploaded passport and address proof (takes 7-15 days for manual processing — longer than Aadhaar eSign which is instant). (5) Submission & Approval: (a) After entering PAN OTP and Email OTP, submit form. (b) MCA verifies documents manually. (c) Approval takes 7-15 days (vs 24-48 hours for Aadhaar-based filings). (d) Download acknowledgment after submission. (6) Verify DIN Status After 2 Weeks: Check MCA portal → View DIN Details → Status should show 'Approved' and 'Last KYC: FY 2025-26'. SPECIAL CASE: OCI (Overseas Citizen of India) HOLDERS. If you are OCI holder: (1) You can use OCI card as identity proof (instead of passport). (2) Upload OCI card copy (front and back). (3) Rest of process is same as above (PAN OTP + Email OTP + document verification). RECOMMENDATION FOR NRIs/FOREIGN DIRECTORS: (1) Start filing 1 MONTH BEFORE DEADLINE (by 31st August 2026) — because manual verification takes longer (7-15 days) compared to Aadhaar eSign (instant). (2) Ensure passport copy is CLEAR and READABLE (all details visible — blurry scans may cause rejection). (3) Use VALID address proof (utility bill or bank statement should be recent — not older than 2 months). (4) Keep email and international mobile number ACTIVE during filing (OTPs will be sent). ALTERNATIVE: If you are NRI planning to visit India soon, you can apply for Aadhaar card in India (NRIs are eligible for Aadhaar). Once you have Aadhaar, future DIR-3 KYC filings become much easier (instant Aadhaar OTP verification, no manual document upload/verification).",
    },
    {
      q: "Can Taxvio file DIR-3 KYC on my behalf (without me doing anything)?",
      a: "PARTIALLY YES — Taxvio can ASSIST and GUIDE you through the entire DIR-3 KYC filing process, but certain steps REQUIRE YOUR PERSONAL INVOLVEMENT (because OTPs are sent to YOUR registered mobile/email, and Aadhaar OTP can ONLY be received by you). WHAT TAXVIO CAN DO FOR YOU: (1) PRE-FILING VERIFICATION: (a) Check your DIN status on MCA portal (active or deactivated). (b) Verify if PAN is linked with Aadhaar (if not, guide you to link it). (c) Check if DIR-3 KYC for previous years is pending (if yes, advise filing all pending years). (d) Verify Aadhaar mobile number is active (if not, guide you to update it). (2) FORM FILLING ASSISTANCE: (a) If you share your DIN, PAN, Aadhaar, mobile, email, address details with us (via secure form/WhatsApp), we can LOGIN to MCA portal on your behalf (using DIN login) and PRE-FILL the DIR-3 KYC form with your details. (b) Review and verify all details are correct. (c) Prepare form for final submission. (3) OTP COORDINATION (Guided Assistance): (a) When it's time to enter OTPs (Aadhaar OTP, PAN OTP, Email OTP), we will be on VIDEO CALL or SCREEN SHARE with you. (b) You receive OTPs on your mobile/email → You READ OUT the OTPs to us → We enter them in the form (or guide you to enter them). (c) This ensures you don't make any errors during OTP entry (common mistakes: typos, expired OTPs, wrong OTP for wrong field). (4) POST-FILING VERIFICATION: (a) After form submission, we download acknowledgment and send to you. (b) After 2-3 days, we verify DIN status on MCA portal to confirm filing was successful. (c) If any issues (DIN still deactivated, query issued), we troubleshoot and resolve (file fresh DIR-3 KYC, respond to MCA queries, etc.). WHAT YOU MUST DO PERSONALLY (Cannot Be Outsourced): (1) RECEIVE OTPs: OTPs are sent to YOUR Aadhaar-linked mobile, PAN-linked mobile/email, and email you provided. Only YOU can receive these OTPs (they come to your personal devices). (2) SHARE OTPs with Taxvio (if using our guided assistance): You must read out OTPs to us during filing OR if you're comfortable, give us temporary access to your mobile/email to retrieve OTPs (via screen share — we don't store or misuse OTPs). (3) VERIFY FORM DETAILS: Before final submission, YOU must verify that all details in form are correct (name, address, PAN, Aadhaar, mobile, email). WHY PERSONAL INVOLVEMENT IS NEEDED: (1) AADHAAR OTP: Aadhaar OTP is sent ONLY to mobile number registered with Aadhaar (which is YOUR personal mobile). We CANNOT receive this OTP unless you share it with us. (2) DATA SECURITY: MCA requires director's personal verification (OTPs) to ensure that KYC filing is done by the ACTUAL DIRECTOR (not by someone else unauthorized). This prevents fraud/identity theft. TAXVIO'S SERVICE MODEL (3 Options): (1) SELF-FILING WITH SUPPORT (₹999): (a) You do the filing yourself (login, fill form, enter OTPs, submit). (b) We provide: Pre-filing checklist, Step-by-step instructions (PDF guide), Email support (if you face issues, we guide via email/WhatsApp). (c) BEST FOR: Directors comfortable with online forms and OTPs. (2) GUIDED FILING (₹999): (a) We do SCREEN SHARE or VIDEO CALL with you. (b) We guide you STEP-BY-STEP in real-time (tell you what to click, what to enter, when to enter OTP). (c) You sit in front of computer/mobile, we guide you remotely. (d) Filing takes 15-20 minutes (you + us together). (e) BEST FOR: Directors not comfortable with online forms, first-time filers, elderly directors. (3) FULL-SERVICE FILING (₹1,499): (a) You share your details with us (DIN, PAN, Aadhaar, mobile, email, address). (b) We login to MCA portal, fill entire form, prepare for submission. (c) When OTPs are needed, we call you → You receive OTPs on your mobile/email → You read them out to us → We enter and submit. (d) We handle EVERYTHING except receiving OTPs (which only you can do). (e) BEST FOR: Busy directors, directors with multiple companies, directors who want zero hassle. RECOMMENDATION: Choose based on your comfort level with technology and available time. Even Full-Service option requires 5-10 minutes of your time (to receive and share OTPs during final submission).",
    },
    {
      q: "What happens if my DIN is deactivated? Can it be reactivated? How long does reactivation take?",
      a: "If your DIN is DEACTIVATED (due to not filing DIR-3 KYC by 30th September), it CAN BE REACTIVATED by filing pending DIR-3 KYC with late fee. REACTIVATION PROCESS: (1) IDENTIFY PENDING YEARS: Check MCA portal → View DIN Details → Check 'Last KYC Filed Date'. Example: If last filed = FY 2021-22, then FY 2022-23, FY 2023-24, FY 2024-25, FY 2025-26 are ALL PENDING. (2) PAY LATE FEE (₹5,000 per year): For EACH PENDING YEAR, you must pay ₹5,000 late fee. Example: If 4 years pending (FY 2022-23 to FY 2025-26), total late fee = ₹5,000 × 4 = ₹20,000. Payment: MCA portal → Payments → Miscellaneous Payments → DIR-3 KYC Late Fee → Select Financial Year → Pay ₹5,000 → Download payment challan (CIN - Challan Identification Number). (3) FILE DIR-3 KYC FOR EACH PENDING YEAR: (a) Start with OLDEST pending year (e.g., FY 2022-23). (b) Login to MCA portal → DIR-3 KYC → Select Financial Year: FY 2022-23. (c) Fill form (same process as explained earlier — Aadhaar OTP, PAN OTP, Email OTP). (d) Attach late fee payment challan (CIN) as proof of ₹5,000 payment. (e) Submit form → Download acknowledgment. (f) Repeat for NEXT pending year (FY 2023-24), then FY 2024-25, then FY 2025-26. (g) File ALL pending years SEPARATELY (cannot file multiple years in one form). (4) WAIT FOR MCA PROCESSING: After filing all pending years' DIR-3 KYC, MCA takes 7-15 DAYS to process and REACTIVATE your DIN. Timeline: (a) Day 1-3: MCA verifies each year's DIR-3 KYC filing. (b) Day 4-7: MCA cross-checks late fee payment (verifies CIN). (c) Day 8-15: MCA updates DIN status from 'Deactivated' to 'Approved'. (d) Total: 7-15 days for full reactivation. (5) VERIFY REACTIVATION: After 2 weeks, check DIN status: MCA portal → View DIN Details → Status should show: (a) Status: 'Approved' (not 'Deactivated'), (b) Last KYC Filed Date: 'FY 2025-26' (current year). If status is 'Approved', DIN is REACTIVATED — you can now use DSC for MCA filings (annual returns, resolutions, etc.). WHILE DIN IS DEACTIVATED (Waiting Period): (1) You CANNOT sign MCA forms using DSC (forms will be rejected). (2) Companies where you are director CANNOT file annual returns (MGT-7, AOC-4) if they need your signature. (3) WORKAROUND: (a) If company has MULTIPLE DIRECTORS and at least ONE director has active DIN, use that director's DSC to sign forms temporarily. (b) If you are the ONLY DIRECTOR or all directors have deactivated DIN, company CANNOT file any forms until your DIN is reactivated — compliance will be DELAYED. PENALTY FOR COMPANY: (a) If company misses annual return filing deadline (e.g., MGT-7 due by 30th Nov) because director's DIN was deactivated, company faces PENALTY: ₹100/day (company) + ₹100/day (each director) from deadline till filing. (b) Example: If MGT-7 is delayed by 30 days due to DIN reactivation delay, penalty = ₹100 × 30 (company) + ₹100 × 30 × 2 directors = ₹3,000 + ₹6,000 = ₹9,000. RECOMMENDATION: (1) FILE DIR-3 KYC ON TIME (before 30th Sept) to avoid deactivation altogether. (2) If DIN is already deactivated, START REACTIVATION PROCESS IMMEDIATELY (don't delay further — penalty keeps accumulating, company compliance keeps getting delayed). (3) File all pending years' DIR-3 KYC in ONE GO (same day or consecutive days) to minimize reactivation time. TAXVIO'S DEACTIVATED DIN REACTIVATION SERVICE (₹2,999): (1) We identify all pending years. (2) We coordinate late fee payment for all years. (3) We file DIR-3 KYC for ALL pending years (one by one). (4) We track reactivation status daily and inform you once DIN is active. (5) Total time: 7-15 days from start to full reactivation. (6) You save time, avoid errors, get expert support throughout process.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="Frequently Asked Questions" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Common Questions About DIR-3 KYC (FY 2025-26)
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            open={open === i}
            onToggle={(e) =>
              setOpen((e.target as HTMLDetailsElement).open ? i : null)
            }
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span className="pr-4">{f.q}</span>
              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4 whitespace-pre-line">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}