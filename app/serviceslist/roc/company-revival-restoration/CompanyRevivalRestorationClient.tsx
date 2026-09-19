// app/serviceslist/roc/company-revival-restoration/CompanyRevivalRestorationClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Company Revival & Restoration Services - NCLT Application for Struck-Off Companies",
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
    "Professional assistance in restoring a company or LLP struck off by the Registrar of Companies (ROC) under Section 248 of the Companies Act, 2013, through an NCLT restoration application under Section 252. Services include strike-off order review, evidence-of-business documentation, drafting and filing of the restoration petition, pending annual return and financial statement clearance, NCLT hearing follow-up, and filing of the restoration order with the ROC to reactivate the company's status. Complete end-to-end support for businesses needing to reactivate a closed entity and resume normal operations. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "Company Revival & Restoration (NCLT)",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "24999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "24999",
      maxPrice: "59999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the time limit to restore a company struck off by the ROC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Section 252(1) of the Companies Act, 2013, a company, member, creditor, or workman aggrieved by a strike-off order can file an appeal before the National Company Law Tribunal (NCLT) within 3 years from the date of the Registrar's order. Separately, under Section 252(3), where it can be shown that the company was carrying on business or otherwise in operation at the time of strike-off, an application for restoration can be filed within 20 years of the publication of the strike-off notice in the Official Gazette. In practice, most restoration applications are filed well within the 3-year window, since delay makes it harder to demonstrate the company was actively operating.",
      },
    },
    {
      "@type": "Question",
      name: "Does restoring a struck-off company also reactivate disqualified directors' DIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NOT AUTOMATICALLY. Company restoration under Section 252 and director disqualification under Section 164(2) (which applies when a company fails to file financial statements or annual returns for 3 consecutive financial years) are governed by separate provisions. An NCLT order restoring the company's name does not, by itself, remove a disqualification already recorded against a director's DIN. Directors seeking DIN reactivation generally need to wait out the prescribed disqualification period or pursue separate relief (such as a High Court writ petition, where applicable), and this should be planned alongside the restoration process.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to pending annual filings after a company is restored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The NCLT restoration order typically directs the company to file all pending financial statements (Form AOC-4) and annual returns (Form MGT-7/MGT-7A) for every financial year it remained struck off, along with applicable additional fees, within a time period specified by the Tribunal (commonly 30-60 days from the order, or as otherwise directed). Filing the NCLT restoration order with the ROC in Form INC-28 restores the company's status on the MCA portal, but the company must promptly clear all pending statutory filings to remain compliant and avoid being struck off again.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function CompanyRevivalRestorationClient() {
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
          ⚠️ Company Struck Off by ROC? File Your NCLT Restoration Appeal Before the Limitation Period Expires!
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
              <span className="text-white">Company Revival / Restoration</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  ⚖️ NCLT Litigation Support
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Revival & Restoration
                  <br />
                  <span className="text-[#7ecbf0]">of Struck-Off Company</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Has your{" "}
                  <strong className="text-white">
                    company or LLP been struck off by the ROC
                  </strong>{" "}
                  for non-filing of returns, and you need to{" "}
                  <strong className="text-white">
                    reactivate it to resume business, recover assets, or
                    complete pending transactions
                  </strong>
                  ? Restore it through an{" "}
                  <strong className="text-white">
                    NCLT restoration application under Section 252 of the
                    Companies Act, 2013
                  </strong>
                  . <strong className="text-white">Taxvio</strong> handles
                  the complete restoration process —{" "}
                  <strong className="text-white">
                    strike-off order review, NCLT restoration application,
                    pending return clearance, and restoration order
                    follow-up
                  </strong>{" "}
                  — through to your company's status being{" "}
                  <strong className="text-white">
                    reactivated on the MCA portal
                  </strong>
                  .
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Start Restoration — ₹14,999 →
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
                    "✅ NCLT Petition Drafting",
                    "✅ 3-20 Year Restoration Window",
                    "✅ Pending Return Clearance",
                    "✅ CA & CS + Legal Support",
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
                    ["⏳", "Appeal window: 3 years (up to 20 in some cases)"],
                    ["⚖️", "Filed as Company Petition with NCLT"],
                    ["📋", "Pending filings must be cleared"],
                    ["⏰", "Typical timeline: 3-6 months"],
                    ["📝", "Order filed with ROC via Form INC-28"],
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
              { number: "80+", label: "Companies Restored", icon: "⚖️" },
              { number: "3-6 Months", label: "Typical Timeline", icon: "⏰" },
              { number: "3 Years", label: "Standard Appeal Window", icon: "⏳" },
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
              "✔ NCLT Petition Drafting",
              "✔ Pending Return Clearance",
              "✔ Restoration Order Follow-Up",
              "✔ CA, CS & Legal Team",
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
          {/* WHAT IS RESTORATION */}
          <section id="what-is-restoration">
            <SectionLabel text="Understanding Company Restoration" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Revival / Restoration of a Struck-Off Company?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  When a company fails to file its{" "}
                  <strong>financial statements or annual returns</strong> for
                  two or more consecutive financial years, or is found to be
                  not carrying on any business, the{" "}
                  <strong>Registrar of Companies (ROC)</strong> can strike
                  its name off the register under{" "}
                  <strong>Section 248 of the Companies Act, 2013</strong>,
                  effectively dissolving the company. The company's bank
                  accounts get frozen, its name shows as{" "}
                  <strong>'Strike Off'</strong> on the MCA portal, and it
                  cannot legally transact business.
                </p>
                <p>
                  <strong>Revival / Restoration</strong> is the legal remedy
                  available under{" "}
                  <strong>Section 252 of the Companies Act, 2013</strong> to
                  reverse this — by filing an appeal (Company Petition)
                  before the{" "}
                  <strong>
                    National Company Law Tribunal (NCLT)
                  </strong>{" "}
                  demonstrating that the strike-off was unjust, erroneous, or
                  that the company was, in fact,{" "}
                  <strong>carrying on business or in operation</strong> at
                  the relevant time. If satisfied, the NCLT orders the
                  Registrar to restore the company's name to the register,
                  as if it had never been struck off.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    ⚖️ Key Features of the Restoration Process
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "NCLT Jurisdiction",
                        desc: "Restoration applications are filed as a Company Petition before the NCLT bench having jurisdiction over the location of the company's registered office — not with the ROC directly.",
                      },
                      {
                        title: "Who Can Apply",
                        desc: "The company itself, any member, creditor, or workman aggrieved by the strike-off, or the Registrar (suo motu, in cases of erroneous strike-off), can file the restoration application.",
                      },
                      {
                        title: "Evidence of Business Operations",
                        desc: "The petition must be supported by evidence (bank statements, invoices, contracts, GST filings, etc.) showing the company was carrying on business or genuinely in operation — a bare request without proof rarely succeeds.",
                      },
                      {
                        title: "Mandatory Pending Filings",
                        desc: "The NCLT typically directs the company to file ALL pending financial statements and annual returns for the period it remained struck off, as a condition of restoration.",
                      },
                      {
                        title: "Retrospective Effect",
                        desc: "Once restored, the company is deemed to have continued in existence as if its name had never been struck off — subject to any conditions imposed by the NCLT order.",
                      },
                      {
                        title: "Filing with ROC (Form INC-28)",
                        desc: "The certified NCLT restoration order must be filed with the ROC in Form INC-28 to actually reactivate the company's status on the MCA portal — the order alone does not automatically update MCA records.",
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
                    ✅ Common Reasons Companies Get Struck Off
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Failure to file financial statements (AOC-4) or
                          annual returns (MGT-7) for 2 or more consecutive
                          financial years
                        </li>
                        <li>
                          • Company failed to commence business within 1 year
                          of incorporation
                        </li>
                        <li>
                          • Company is not carrying on any business or
                          operation, as found on physical verification by the
                          ROC
                        </li>
                        <li>
                          • Subscribers to the memorandum did not pay the
                          subscription money and no declaration was filed
                          within 180 days of incorporation
                        </li>
                        <li>
                          • Company voluntarily applied for strike-off (Form
                          STK-2) but circumstances have since changed
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ Restoration Routes — Comparison
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Route</th>
                          <th className="p-2 text-left">Who Can Apply</th>
                          <th className="p-2 text-left">Time Limit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            route: "Section 252(1) Appeal",
                            who: "Company, member, creditor, or workman aggrieved",
                            time: "Within 3 years of strike-off order",
                          },
                          {
                            route: "Section 252(3) Restoration",
                            who: "Company, member, or creditor, if the company was carrying on business",
                            time: "Within 20 years of Gazette notification",
                          },
                          {
                            route: "Registrar-Initiated Restoration",
                            who: "Registrar, where strike-off was erroneous",
                            time: "Within 3 years of strike-off order",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.route}</td>
                            <td className="p-2 text-gray-600">{row.who}</td>
                            <td className="p-2 text-green-700 font-bold">
                              {row.time}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Why Restore Instead of Starting Fresh?
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Preserve Business History & Contracts",
                        desc: "Restoration retains the company's original CIN, PAN, past track record, and existing contracts/agreements — a fresh incorporation cannot replicate this history.",
                      },
                      {
                        title: "Recover Frozen Bank Balances & Assets",
                        desc: "Struck-off companies often have frozen bank accounts and immovable/movable assets that can only be accessed once the entity is legally revived.",
                      },
                      {
                        title: "Complete Pending Transactions",
                        desc: "Ongoing litigation, receivables, tenders, or property transactions in the company's name can only proceed once it is restored to active status.",
                      },
                      {
                        title: "Avoid Loss of GST/Licence History",
                        desc: "Registrations and licences tied to the company's PAN can potentially be reactivated once the company itself is restored, avoiding a fresh application process.",
                      },
                      {
                        title: "Protect Director & Shareholder Interests",
                        desc: "Restoration protects the equity and rights of shareholders and the interests of creditors who depend on the company remaining a going concern.",
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
                    ⚠️ Challenges & Considerations
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "NCLT Timelines Vary: Hearing dates and disposal times depend on the specific bench's workload — the process can take longer than routine ROC filings.",
                      "Evidence Burden: Without clear proof of business operations (bank statements, invoices, GST filings), the NCLT may decline to order restoration.",
                      "Pending Filings & Fees: Restoration usually comes with an obligation to file years of pending returns along with additional government fees, which can be substantial.",
                      "Director Disqualification Is Separate: Restoring the company does not automatically reactivate directors' DINs disqualified under Section 164(2) — this may need separate handling.",
                      "Costs of Litigation: NCLT filings involve tribunal fees, legal representation, and professional certification costs, higher than a standard ROC compliance filing.",
                      "Risk of Re-Strike-Off: If pending compliances are not cleared promptly after restoration, the company risks being struck off again in a future ROC drive.",
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
                    🎯 When to Pursue Restoration?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Restoration is worth pursuing if you want to:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {[
                      "Reactivate a genuinely operating business that was struck off due to a missed filing",
                      "Access frozen bank accounts, immovable property, or other assets held in the company's name",
                      "Complete an ongoing contract, tender, litigation, or property transaction",
                      "Correct an erroneous strike-off carried out despite the company being active",
                      "Preserve a valuable brand name, CIN, PAN, or contractual history tied to the entity",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Not Recommended if:</strong> The company was
                    genuinely dormant with no assets, contracts, or ongoing
                    need for the entity — in such cases, incorporating a
                    fresh company is usually faster and more cost-effective
                    than pursuing an NCLT restoration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RESTORATION PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Company Restoration Process via NCLT
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete restoration process — from strike-off order review
                to reactivated MCA status:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Strike-Off Order Review & Eligibility Check",
                    description:
                      "Obtain and review the ROC's strike-off notice/order (Form STK-7) published against the company, confirm the date of strike-off, and verify the applicable limitation period (3 years under Section 252(1), or up to 20 years under Section 252(3) if the company was in operation). This determines whether restoration is viable and which route to pursue.",
                    duration: "2-3 days",
                  },
                  {
                    step: 2,
                    title: "Gathering Evidence of Business Operations",
                    description:
                      "Compile documentary evidence demonstrating the company was carrying on business or genuinely in operation at the time of strike-off — bank statements, sales invoices, purchase orders, GST returns, employee records, lease/rent agreements, litigation records, or property documents. Strong evidence significantly improves the chances of a favourable NCLT order.",
                    duration: "5-10 days",
                  },
                  {
                    step: 3,
                    title: "Board Resolution Authorizing the Petition",
                    description:
                      "Where surviving directors are available, a Board resolution is passed authorizing the filing of the restoration petition and appointing an authorized signatory/representative. Where the application is filed by a member, creditor, or workman instead, their consent and supporting affidavit are prepared.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "Drafting of the Restoration Petition & Supporting Affidavit",
                    description:
                      "The Company Petition under Section 252 is drafted, setting out the grounds for restoration, the evidence of business operations, and the relief sought (restoration of the company's name to the register). It is accompanied by a supporting affidavit, Memorandum of Appearance/Vakalatnama for NCLT representation, and all supporting documents as annexures.",
                    duration: "5-7 days",
                  },
                  {
                    step: 5,
                    title: "Filing of the Petition with NCLT",
                    description:
                      "The petition is filed with the NCLT bench having territorial jurisdiction over the company's registered office, along with the prescribed Tribunal fee. A filing number/diary number is generated and the matter is listed for the first hearing as per the bench's cause list.",
                    duration: "2-3 days to file",
                  },
                  {
                    step: 6,
                    title: "Service of Notice to ROC & Regional Director",
                    description:
                      "Notice of the petition is served on the Registrar of Companies and the Regional Director (Ministry of Corporate Affairs), who are the respondents in such proceedings. They may file a reply or objection, particularly if there are outstanding compliance concerns or if the strike-off was based on adverse findings.",
                    duration: "As per NCLT procedure",
                  },
                  {
                    step: 7,
                    title: "NCLT Hearing(s)",
                    description:
                      "The matter is heard by the NCLT bench, where the petitioner's counsel presents the case and evidence, and the ROC/Regional Director's response (if any) is considered. Depending on the bench's workload and complexity, this may involve one or more hearings before an order is passed.",
                    duration: "6-16 weeks (bench-dependent)",
                  },
                  {
                    step: 8,
                    title: "NCLT Restoration Order",
                    description:
                      "If satisfied, the NCLT passes an order directing the Registrar to restore the company's name to the register. The order typically imposes conditions such as filing all pending financial statements and annual returns within a specified period, payment of costs, and publication of the order.",
                    duration: "Order pronounced at conclusion of hearings",
                  },
                  {
                    step: 9,
                    title: "Filing of Restoration Order with ROC (Form INC-28)",
                    description:
                      "A certified copy of the NCLT order is filed with the jurisdictional ROC in Form INC-28 (Notice of Order of the Court or Tribunal) within the time specified in the order (commonly 30 days). This is the step that actually triggers the ROC to change the company's MCA status back to 'Active'.",
                    duration: "Within 30 days of the order (statutory)",
                  },
                  {
                    step: 10,
                    title: "Clearance of Pending Financial Statements & Annual Returns",
                    description:
                      "All pending AOC-4 (financial statements) and MGT-7/MGT-7A (annual returns) filings for the years the company remained struck off are prepared and filed with the ROC, along with applicable additional government fees, in accordance with the timeline directed by the NCLT order.",
                    duration: "As directed by NCLT (commonly 30-60 days)",
                  },
                  {
                    step: 11,
                    title: "MCA Status Reactivation",
                    description:
                      "Once Form INC-28 is processed and pending filings are on record, the company's status on the MCA portal is updated from 'Strike Off' to 'Active'. The company can now be verified as a validly existing entity for banking, contractual, and regulatory purposes.",
                    duration: "Reflects post ROC processing",
                  },
                  {
                    step: 12,
                    title: "Reactivation of Bank Accounts, GST & Other Registrations",
                    description:
                      "With the company restored, coordinate with the bank to unfreeze and reactivate the current account, and approach GST and other regulatory authorities to reactivate or reapply for lapsed registrations as applicable. Director DIN status should also be reviewed separately if any director was marked disqualified under Section 164(2).",
                    duration: "Within 15-30 days of MCA reactivation",
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
                  <strong>3-6 months</strong> on average from petition filing
                  to a reactivated MCA status, though this can vary
                  significantly based on the NCLT bench's hearing schedule
                  and case backlog. Breakdown: documentation & evidence
                  gathering (1-3 weeks) + petition drafting & filing (1-2
                  weeks) + NCLT hearings (6-16 weeks) + Form INC-28 filing &
                  pending return clearance (4-8 weeks post-order).
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Company Restoration
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Core Company Records
                </p>
                <ul className="space-y-3">
                  {[
                    "Certified copy of the ROC strike-off order/notice (Form STK-7)",
                    "Certificate of Incorporation",
                    "Memorandum & Articles of Association",
                    "PAN and TAN of the company",
                    "Last filed financial statements & annual returns (if any)",
                    "List of directors and shareholders with PAN & Aadhaar",
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
                  Evidence of Business Operations
                </p>
                <ul className="space-y-3">
                  {[
                    "Bank statements showing transactions around the strike-off period",
                    "Sales invoices, purchase orders, or client contracts",
                    "GST returns filed (if registered)",
                    "Employee payroll records or statutory registrations (PF/ESI), if applicable",
                    "Lease/rent agreement or property documents for business premises",
                    "Any pending litigation, receivables, or asset records",
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
                  Pending Statutory Filings
                </p>
                <ul className="space-y-3">
                  {[
                    "Financial statements (AOC-4) for all pending years",
                    "Annual returns (MGT-7/MGT-7A) for all pending years",
                    "Statutory audit reports for pending years, where applicable",
                    "Books of accounts / working papers to prepare pending filings",
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
                  NCLT Filing Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Board resolution authorizing the restoration petition",
                    "Supporting affidavit in favour of the petition",
                    "Memorandum of Appearance / Vakalatnama",
                    "Consent/NOC (if filed by a member, creditor, or workman other than the company)",
                    "Proof of service of notice on ROC and Regional Director",
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
                  "Date and reason mentioned in the ROC strike-off order",
                  "Reason restoration is being sought (asset recovery, ongoing contract, litigation, etc.)",
                  "Identity of the applicant (company, member, creditor, or workman)",
                  "Number of pending financial years requiring statement/return clearance",
                  "Status of any directors flagged as disqualified under Section 164(2)",
                  "Registered office address for determining the appropriate NCLT bench",
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
              Common Mistakes in Company Restoration
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                NCLT restoration proceedings are unforgiving of procedural
                gaps — avoid these critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Missing the Limitation Period",
                    icon: "⏳",
                    problem:
                      "Delaying the restoration application beyond the applicable time limit — typically 3 years from the strike-off order under Section 252(1). Once the limitation period lapses, restoration becomes significantly harder, and in many cases the only remaining route (Section 252(3), if the company was in operation) requires stronger evidence and is subject to a much longer but stricter scrutiny.",
                    solution:
                      "Check the exact date of the ROC's strike-off order as soon as you discover the company has been struck off, and file the restoration petition well within the 3-year window. Taxvio verifies the limitation period as the very first step of any engagement.",
                  },
                  {
                    mistake: "Filing Without Adequate Evidence of Operations",
                    icon: "📄",
                    problem:
                      "Submitting a restoration petition with only a general claim that the company 'was doing business,' without supporting bank statements, invoices, or other documentary proof. NCLT benches routinely dismiss or delay petitions lacking concrete evidence, since the burden of proof rests on the petitioner.",
                    solution:
                      "Compile bank statements, invoices, GST filings, lease agreements, and any other available records BEFORE filing, and annex them comprehensively to the petition. Taxvio helps identify and organize the strongest available evidence for the specific facts of your case.",
                  },
                  {
                    mistake: "Ignoring Pending Compliance Obligations",
                    icon: "📋",
                    problem:
                      "Assuming that once the NCLT passes a restoration order, the matter is closed. In reality, the order almost always comes with conditions — particularly the requirement to file all pending financial statements and annual returns within a stipulated period. Missing this can risk the company being struck off again.",
                    solution:
                      "Plan and budget for the pending years of financial statements and annual returns as part of the restoration exercise from the outset, and file them promptly once the order is received. Taxvio's Complete package bundles this clearance into the engagement.",
                  },
                  {
                    mistake: "Delaying Form INC-28 Filing with ROC",
                    icon: "📝",
                    problem:
                      "Obtaining a favourable NCLT order but delaying the filing of Form INC-28 with the ROC. The order itself does not automatically update the company's status on the MCA portal — until INC-28 is filed and processed, the company continues to show as struck off in official records.",
                    solution:
                      "File Form INC-28 with the jurisdictional ROC immediately after receiving the certified copy of the NCLT order, well within the statutory 30-day window. Taxvio tracks this deadline as part of the restoration order follow-up.",
                  },
                  {
                    mistake: "Overlooking Director Disqualification",
                    icon: "🚫",
                    problem:
                      "Assuming that restoring the company also clears directors marked as disqualified under Section 164(2) for the company's failure to file returns. These are separate legal issues — a restored company can still have directors who remain disqualified and unable to be appointed to other companies until the disqualification period lapses or separate relief is obtained.",
                    solution:
                      "Assess director DIN status separately as part of the restoration exercise, and plan for the applicable disqualification period or explore available relief options. Taxvio flags this issue upfront so there are no surprises after restoration.",
                  },
                  {
                    mistake: "Proceeding Without Professional NCLT Representation",
                    icon: "⚖️",
                    problem:
                      "Attempting to file or argue the restoration petition without experienced professional support. Drafting errors, incomplete annexures, or missed procedural steps (such as proper service of notice on the ROC and Regional Director) commonly lead to adjournments, additional hearings, or outright dismissal.",
                    solution:
                      "Engage professionals experienced in NCLT restoration matters to draft the petition, compile evidence, and represent the case at hearings. Taxvio coordinates the complete process with qualified CA, CS, and legal support.",
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
              Company Restoration Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive restoration and compliance packages for
              struck-off companies:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹14,999",
                  popular: false,
                  features: [
                    "Strike-off order review & eligibility check",
                    "Evidence documentation guidance",
                    "Board resolution & affidavit drafting",
                    "NCLT restoration petition drafting & filing",
                    "Notice service coordination with ROC/Regional Director",
                    "Hearing date tracking & status updates",
                    "Email & phone support",
                  ],
                  limitations: [
                    "NCLT tribunal & professional appearance fees billed separately",
                    "Pending annual return/financial statement filing not included",
                    "Form INC-28 filing offered as add-on",
                    "Bank/GST reactivation support not included",
                  ],
                  ideal:
                    "Companies with strong existing evidence needing only petition drafting & filing",
                },
                {
                  name: "Standard",
                  price: "₹29,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "NCLT hearing representation coordination",
                    "Form INC-28 filing after restoration order",
                    "Pending financial statements & annual returns for up to 2 years",
                    "Restoration order follow-up with ROC",
                    "Priority support (WhatsApp + email)",
                  ],
                  limitations: [
                    "Additional pending years billed as add-on",
                    "Bank/GST reactivation offered as add-on",
                  ],
                  ideal:
                    "Most companies struck off for 1-2 years of non-filing seeking full restoration support",
                },
                {
                  name: "Complete",
                  price: "₹49,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Pending financial statements & annual returns for up to 4 years",
                    "Bank account reactivation coordination",
                    "GST and other registration reactivation support",
                    "Director DIN status review",
                    "First year annual compliance (MGT-7, AOC-4) after restoration included",
                    "Dedicated CA + CS + legal team with end-to-end follow-up",
                  ],
                  limitations: [],
                  ideal:
                    "Companies struck off for multiple years wanting full handholding from petition to reactivated operations",
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
                    <p className="text-sm text-gray-500">
                      Professional fee (NCLT tribunal fees extra)
                    </p>
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
                    service: "Additional Pending Year Filing",
                    price: "₹4,999/year",
                    desc: "AOC-4 & MGT-7 for each extra pending financial year",
                  },
                  {
                    service: "Form INC-28 Filing",
                    price: "₹3,999",
                    desc: "Filing the NCLT order with ROC to reactivate status",
                  },
                  {
                    service: "Bank Account Reactivation Support",
                    price: "₹4,999",
                    desc: "Coordination with bank to unfreeze current account",
                  },
                  {
                    service: "GST Reactivation / Fresh Registration",
                    price: "₹2,999",
                    desc: "Reactivate or reapply for GST under the company",
                  },
                  {
                    service: "Director DIN Status Consultation",
                    price: "₹4,999",
                    desc: "Review of disqualification status & available relief options",
                  },
                  {
                    service: "Annual Compliance Package",
                    price: "₹34,999/year",
                    desc: "MGT-7, AOC-4, statutory audit, ITR, Board & AGM support",
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
                  name: "Sanjay Rathi, Director",
                  company: "Fortune Realtors Private Limited",
                  location: "Meerut, UP",
                  text: "Our company got struck off after we missed two years of filings during a rough patch. We had an ongoing property transaction stuck because of it. Taxvio gathered our bank statements and lease documents, filed the NCLT petition, and got a restoration order in about 4 months. The transaction is now back on track.",
                },
                {
                  name: "Pooja Agarwal, Founder",
                  company: "Zenith Apparel Private Limited",
                  location: "Noida, UP",
                  text: "We discovered our company had been struck off only when our bank account got frozen. Taxvio moved quickly — reviewed the strike-off order, confirmed we were well within the 3-year window, and handled the entire NCLT process along with all our pending AOC-4 and MGT-7 filings. Professional and responsive throughout.",
                },
                {
                  name: "Harish Nagpal, Managing Director",
                  company: "Ridgeview Constructions Private Limited",
                  location: "Ghaziabad, UP",
                  text: "Taxvio's Complete package was worth it — they handled the NCLT petition, four years of pending filings, and even coordinated our bank account reactivation after the restoration order came through. They also flagged our director disqualification issue upfront so we knew exactly what to expect.",
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
              Company Restoration Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong>{" "}
              and coordinates NCLT restoration matters for struck-off
              companies and LLPs across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India, working with the appropriate NCLT
              bench for each company's registered office jurisdiction.
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
              Other ROC & Corporate Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Annual ROC Filing",
                  icon: "📊",
                  link: "/serviceslist/roc/annual-filing",
                  desc: "MGT-7, AOC-4 and other ROC compliance",
                },
                {
                  title: "LLP to Company Conversion",
                  icon: "🔄",
                  link: "/serviceslist/roc/llp-to-company-conversion",
                  desc: "Convert an LLP into a Private Limited Company",
                },
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
                    Reactivate Your Struck-Off Entity
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Restore Your Company — Resume Business Operations
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get strike-off order review, NCLT restoration petition
                    drafting & filing, pending return clearance, and
                    restoration order follow-up handled end-to-end. Don't let
                    the limitation period expire — start today. Starting
                    ₹14,999 with expert CA, CS & legal support.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Start Restoration — ₹14,999
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
            href="https://wa.me/918937980366?text=Hi%2C%20I%20want%20to%20restore%20my%20struck-off%20company"
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
      q: "Who can file an application for restoration of a struck-off company?",
      a: "Under Section 252 of the Companies Act, 2013, an application for restoration can be filed by: (1) the company itself (through surviving directors or an authorized representative), (2) any member of the company, (3) any creditor, (4) any workman of the company, if aggrieved by the strike-off, or (5) the Registrar of Companies (ROC) itself, suo motu, where it is satisfied that the name was struck off inadvertently or based on incorrect information. Each category of applicant must demonstrate a genuine interest or grievance connected to the company's dissolution.",
    },
    {
      q: "What documents best prove the company was carrying on business?",
      a: "The strongest evidence typically includes bank account statements showing regular transactions, sales invoices and purchase orders, signed client or vendor contracts, filed GST returns, employee payroll or statutory registration records (PF/ESI), lease or property documents for business premises, and any pending litigation or receivables in the company's name. The more contemporaneous and verifiable this evidence is to the period around the strike-off date, the stronger the restoration petition.",
    },
    {
      q: "Does restoring the company also reactivate directors' disqualified DIN?",
      a: "NOT automatically. Company restoration under Section 252 and director disqualification under Section 164(2) — which applies when a company fails to file financial statements or annual returns for 3 consecutive financial years — are governed by separate legal provisions. An NCLT order restoring the company does not, by itself, clear a disqualification already recorded against a director's DIN. Affected directors generally need to wait out the disqualification period or pursue separate relief where available, so this should be planned for alongside the restoration process.",
    },
    {
      q: "What happens to pending annual filings after the company is restored?",
      a: "The NCLT restoration order typically directs the company to file all pending financial statements (Form AOC-4) and annual returns (Form MGT-7/MGT-7A) for every financial year it remained struck off, along with applicable additional government fees, within a period specified by the Tribunal — commonly 30 to 60 days. The company must also file the restoration order itself with the ROC in Form INC-28 to have its MCA status updated. Failing to clear these pending filings promptly risks the company being struck off again in a future compliance drive.",
    },
    {
      q: "Can a struck-off LLP also be restored?",
      a: "YES. An LLP struck off by the Registrar under the LLP Act, 2008 can similarly apply for restoration before the NCLT, following a broadly analogous process — demonstrating the LLP was carrying on business or that the strike-off was erroneous, and obtaining a Tribunal order directing the Registrar to restore its name. The specific provisions, forms, and timelines differ slightly from company restoration under the Companies Act, 2013, so Taxvio evaluates LLP matters on a case-by-case basis.",
    },
    {
      q: "How long does the entire NCLT restoration process take?",
      a: "On average, the process takes 3-6 months from filing the petition to receiving a reactivated MCA status, though this varies significantly depending on the specific NCLT bench's hearing schedule, case backlog, and whether the ROC raises objections. Straightforward cases with strong evidence and no ROC objections can conclude faster; contested matters or benches with heavy case pendency can take longer. Taxvio provides regular status updates throughout the process.",
    },
    {
      q: "What is the cost of restoring a struck-off company?",
      a: "Costs include the NCLT tribunal filing fee, professional fees for petition drafting and representation, and — separately — the government fees for filing pending financial statements and annual returns for each year the company remained struck off (these carry escalating additional fees the longer the delay). Taxvio's packages start at ₹14,999 for professional services, with tribunal fees and pending-year filing costs quoted separately based on the specific facts of each case.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Company Restoration
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