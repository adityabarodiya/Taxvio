// app/serviceslist/roc/charge-registration-satisfaction/ChargeRegistrationClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Charge Creation & Satisfaction ROC Filing Services - CHG-1 & CHG-4 MCA Compliance",
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
    "Professional charge creation and satisfaction filing services including CHG-1 form filing for registering charges on company assets (property, machinery, inventory, receivables) against secured loans, CHG-4 filing for satisfaction of charges after loan repayment, charge register maintenance, lender coordination, NOC procurement, and MCA e-filing. Complete ROC compliance for secured loan charges under Section 77-87 of Companies Act 2013. Expert handling of equitable mortgage, hypothecation, pledge, and lien charges. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "Charge Registration & Satisfaction ROC Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "5999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "5999",
      maxPrice: "19999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is charge creation (CHG-1) and why is it mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Charge creation (Form CHG-1) is the process of registering a CHARGE (security interest) on company's assets with the Registrar of Companies (ROC) under Section 77 of Companies Act, 2013. When a company takes a secured loan from bank, NBFC, or any lender, the lender requires the company to pledge certain assets as collateral/security. This pledge creates a CHARGE on those assets. Types of charges: (1) Mortgage (property/land), (2) Hypothecation (vehicles, machinery, stock), (3) Pledge (goods, securities), (4) Lien. WHY MANDATORY? (1) Legal requirement under Companies Act (Section 77), (2) Protects lender's interest (if company defaults, lender can recover by selling charged assets), (3) Public notice (other creditors know which assets are already pledged), (4) Validates loan agreement (charge not registered = lender cannot enforce security). DEADLINE: CHG-1 must be filed within 30 DAYS of charge creation (from loan sanction/disbursement date). Late filing attracts penalties up to ₹5 lakh.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for late CHG-1 filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Penalty for late CHG-1 filing (beyond 30 days from charge creation): (1) Additional MCA Fees: (a) 31-60 days late: 2x normal fee, (b) 61-90 days: 4x fee, (c) 91-180 days: 6x fee, (d) 181-270 days: 10x fee, (e) Beyond 270 days: 12x fee. Normal CHG-1 fee ranges from ₹1,000-2,000 depending on charge amount. (2) Company Penalty: Up to ₹25,000 under Section 450 of Companies Act. (3) Officer Penalty: Each officer in default (directors) liable for up to ₹10,000. (4) Lender Risk: If charge not registered within 300 days, lender LOSES priority over charged assets (cannot enforce security if company defaults). (5) Loan Agreement Issue: Banks may recall entire loan or charge penal interest if CHG-1 not filed timely. RECOMMENDATION: File CHG-1 within 15 days of loan sanction to avoid late filing complications. Taxvio ensures filing within 7 days of document receipt.",
      },
    },
    {
      "@type": "Question",
      name: "What is charge satisfaction (CHG-4) and when to file it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Charge satisfaction (Form CHG-4) is the process of CLOSING/REMOVING a registered charge from company records after the secured loan is FULLY REPAID. When you file CHG-1, the charge remains on company's ROC records permanently until you file CHG-4 after loan closure. WHY FILE CHG-4? (1) Legal compliance (Section 82 of Companies Act), (2) Frees up charged assets (can be pledged again for new loans), (3) Improves company creditworthiness (shows clean charge register), (4) Required for selling charged assets (buyer's due diligence checks charge status). WHEN TO FILE? CHG-4 must be filed within 30 DAYS of receiving No-Dues Certificate (NOC) from lender. Timeline: Loan fully repaid → Company requests NOC from lender → Lender issues NOC (7-30 days) → File CHG-4 within 30 days of NOC date. Documents required: (1) NOC from lender on letterhead, (2) Board resolution, (3) Proof of full repayment (bank statement/closure letter). Taxvio coordinates with lenders to obtain NOC and files CHG-4 within deadline.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function ChargeRegistrationClient() {
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
          ⚠️ CHG-1 Must Be Filed Within 30 Days of Loan Sanction — Avoid Penalties & Lender Issues!
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
              <span className="text-white">Charge Registration & Satisfaction</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🔒 Secured Loan Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Charge Creation &
                  <br />
                  <span className="text-[#7ecbf0]">Satisfaction Filing</span>
                  <br />
                  CHG-1 & CHG-4 Service
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Register or satisfy charges on company assets with{" "}
                  <strong className="text-white">
                    Taxvio's expert CHG-1 and CHG-4 filing
                  </strong>{" "}
                  services. When your company takes a{" "}
                  <strong className="text-white">secured loan</strong> from bank, NBFC, or any lender, you must file{" "}
                  <strong className="text-white">
                    Form CHG-1 (Charge Creation)
                  </strong>{" "}
                  with ROC within{" "}
                  <strong className="text-white">30 days</strong> under{" "}
                  <strong className="text-white">
                    Section 77 of Companies Act, 2013
                  </strong>
                  . After{" "}
                  <strong className="text-white">loan is fully repaid</strong>, file{" "}
                  <strong className="text-white">
                    Form CHG-4 (Satisfaction of Charge)
                  </strong>{" "}
                  to release the charge. We handle{" "}
                  <strong className="text-white">
                    mortgage, hypothecation, pledge, lien charges
                  </strong>{" "}
                  on{" "}
                  <strong className="text-white">
                    property, machinery, vehicles, stock, receivables
                  </strong>
                  .{" "}
                  <strong className="text-white">Taxvio</strong> provides
                  end-to-end compliance —{" "}
                  <strong className="text-white">
                    loan agreement review, lender coordination, board resolution, NOC procurement, MCA e-filing, charge register maintenance
                  </strong>
                  . Ensure{" "}
                  <strong className="text-white">penalty-free ROC compliance</strong>{" "}
                  in <strong className="text-white">5-7 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File CHG-1/CHG-4 — ₹5,999 →
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
                    "✅ 5-7 Days Filing",
                    "✅ Lender Coordination",
                    "✅ MCA E-Filing",
                    "✅ Charge Register Maintained",
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
                    ["🔒", "CHG-1: Within 30 days of loan"],
                    ["✅", "CHG-4: After loan closure"],
                    ["💰", "Starting fee: ₹5,999"],
                    ["⏰", "Processing time: 5-7 days"],
                    ["📊", "Section 77-87 compliance"],
                    ["💼", "All charge types covered"],
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
              { number: "800+", label: "Charges Registered", icon: "🔒" },
              { number: "5-7 Days", label: "Average Processing", icon: "⏰" },
              { number: "₹5,999", label: "Starting Fee", icon: "💼" },
              { number: "100%", label: "On-Time Filing", icon: "✅" },
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
              "✔ Bank/NBFC Coordination",
              "✔ CA & CS Team Support",
              "✔ Charge Register Maintained",
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
          {/* WHAT IS CHARGE */}
          <section id="what-is-charge">
            <SectionLabel text="Understanding Charges" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What is Charge Creation & Satisfaction?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A <strong>CHARGE</strong> is a{" "}
                  <strong>security interest</strong> created on company's assets in favor of a lender (bank, NBFC, financial institution, or individual) to{" "}
                  <strong>secure repayment of a loan</strong>. When a company borrows money on a secured basis, the lender requires the company to pledge certain assets as{" "}
                  <strong>collateral</strong>. This pledge creates a CHARGE.
                </p>
                <p>
                  <strong>Charge Creation (CHG-1)</strong> is the process of{" "}
                  <strong>
                    REGISTERING this charge with the Registrar of Companies (ROC)
                  </strong>{" "}
                  under{" "}
                  <strong>Section 77 of the Companies Act, 2013</strong>. This registration is{" "}
                  <strong>MANDATORY within 30 days</strong> of charge creation (loan sanction/disbursement).
                </p>
                <p>
                  <strong>Charge Satisfaction (CHG-4)</strong> is the process of{" "}
                  <strong>
                    CLOSING/REMOVING the registered charge
                  </strong>{" "}
                  from ROC records after the loan is{" "}
                  <strong>FULLY REPAID</strong>. This filing is mandatory under{" "}
                  <strong>Section 82</strong> within{" "}
                  <strong>30 days of receiving No-Dues Certificate (NOC)</strong> from lender.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🔒 Types of Charges (Security Interests)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Mortgage (Property/Land/Building)",
                        desc: "Transfer of interest in immovable property as security. Two types: (1) Registered Mortgage: Property registered in lender's favor at sub-registrar office. (2) Equitable Mortgage: Deposit of title deeds with lender without registration. Common for: Term loans, working capital limits against property.",
                      },
                      {
                        title: "Hypothecation (Movable Assets)",
                        desc: "Charge on movable assets (vehicles, machinery, stock, inventory, raw materials) WITHOUT transferring possession to lender. Company continues to use assets. Common for: Vehicle loans, machinery loans, working capital loans against stock.",
                      },
                      {
                        title: "Pledge (Goods/Securities)",
                        desc: "Delivery of goods or securities to lender as security WITH transfer of possession. Lender holds goods until loan is repaid. Common for: Loans against goods, pledge of shares/debentures, warehouse receipt financing.",
                      },
                      {
                        title: "Lien (Right to Retain)",
                        desc: "Right of lender to retain possession of goods/securities until debt is paid. Two types: (1) Particular Lien: Specific goods. (2) General Lien: All goods in possession. Common for: Bank's right to freeze deposits if loan defaults.",
                      },
                      {
                        title: "Charge on Book Debts/Receivables",
                        desc: "Assignment of company's receivables (money owed by customers) to lender as security. Common for: Invoice discounting, factoring, working capital loans.",
                      },
                      {
                        title: "Floating Charge (Entire Undertaking)",
                        desc: "Charge on ENTIRE business assets (present and future) without specifying individual assets. Charge 'floats' until company defaults (then crystallizes into fixed charge). Common for: Debenture issues, large corporate loans.",
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
                    ✅ Why is Charge Registration Mandatory?
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        For Company
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Legal Compliance:</strong> Section 77 of Companies Act makes charge registration MANDATORY. Non-filing attracts penalty.
                        </li>
                        <li>
                          • <strong>Loan Agreement Validity:</strong> Most loan agreements contain clause "charge to be registered within 30 days, failing which loan becomes immediately repayable". Filing CHG-1 protects company from loan recall.
                        </li>
                        <li>
                          • <strong>Public Disclosure:</strong> Charge registration creates public record — other creditors, investors, buyers can see which assets are already pledged. Prevents double-pledging fraud.
                        </li>
                        <li>
                          • <strong>Asset Transparency:</strong> Helps in due diligence (M&A, IPO, fundraising) — clear charge status improves company valuation.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        For Lender (Bank/NBFC)
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Legal Priority:</strong> Registered charge gets PRIORITY over unsecured creditors. If company defaults, lender can recover by selling charged assets FIRST (before other creditors).
                        </li>
                        <li>
                          • <strong>Enforceability:</strong> Unregistered charge is VOID against liquidator, administrator, and other creditors (Section 77(2)). Lender loses security if charge not registered.
                        </li>
                        <li>
                          • <strong>NPA Classification:</strong> RBI/NHB guidelines require banks/NBFCs to verify charge registration status. Non-registration may lead to loan classification as NPA (non-performing asset).
                        </li>
                        <li>
                          • <strong>Protection from Fraud:</strong> Registration prevents company from pledging same assets to multiple lenders (double financing fraud).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ CHG-1 vs CHG-4 — Key Differences
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Aspect</th>
                          <th className="p-2 text-left">CHG-1 (Creation)</th>
                          <th className="p-2 text-left">CHG-4 (Satisfaction)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            aspect: "Purpose",
                            chg1: "Register new charge",
                            chg4: "Close existing charge",
                          },
                          {
                            aspect: "When Filed",
                            chg1: "Within 30 days of loan sanction",
                            chg4: "After loan fully repaid",
                          },
                          {
                            aspect: "Trigger Event",
                            chg1: "Loan disbursement",
                            chg4: "Receipt of NOC from lender",
                          },
                          {
                            aspect: "Documents",
                            chg1: "Loan agreement, sanction letter",
                            chg4: "NOC, repayment proof",
                          },
                          {
                            aspect: "Effect",
                            chg1: "Assets become encumbered",
                            chg4: "Assets freed from charge",
                          },
                          {
                            aspect: "Penalty (Late)",
                            chg1: "₹25,000 + 2x-12x fees",
                            chg4: "₹10,000 + additional fees",
                          },
                          {
                            aspect: "Section",
                            chg1: "Section 77",
                            chg4: "Section 82",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.aspect}</td>
                            <td className="p-2 text-green-700 font-bold">
                              {row.chg1}
                            </td>
                            <td className="p-2 text-blue-700 font-bold">
                              {row.chg4}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Consequences of Not Registering Charge (CHG-1)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Loss of Lender Priority",
                        desc: "If charge not registered within 300 days (even with penalty), lender LOSES priority over charged assets. If company goes into liquidation, lender is treated as UNSECURED CREDITOR (ranks behind all secured creditors).",
                      },
                      {
                        title: "Loan Recall by Lender",
                        desc: "Most loan agreements have clause: 'If charge not registered within 30 days, entire loan becomes immediately repayable'. Bank can invoke this clause and demand full repayment (even if EMI was regular).",
                      },
                      {
                        title: "Penalty on Company & Directors",
                        desc: "Company liable for penalty up to ₹25,000 under Section 450. Each officer in default (directors) liable for up to ₹10,000. ROC can issue notice and initiate prosecution.",
                      },
                      {
                        title: "Additional MCA Fees",
                        desc: "Late filing beyond 30 days attracts additional fees: 2x (31-60 days), 4x (61-90 days), 6x (91-180 days), 10x (181-270 days), 12x (beyond 270 days). Normal fee ₹1,000-2,000 becomes ₹12,000-24,000 if delayed 9+ months.",
                      },
                      {
                        title: "Credit Rating Impact",
                        desc: "Banks/NBFCs report non-registration to credit bureaus (CIBIL, CRIF, Experian). Affects company's credit score and future loan approvals.",
                      },
                      {
                        title: "Due Diligence Red Flag",
                        desc: "Investors, buyers, auditors check charge register during due diligence. Unregistered charges create legal uncertainty — may delay/derail M&A deals, IPO, fundraising.",
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
                    ⚠️ Common Misconceptions About Charges
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Myth: 'Only banks need charge registration, not NBFCs/private lenders.' → WRONG. ALL secured loans require CHG-1 filing, regardless of lender type.",
                      "Myth: 'Charge registration is lender's responsibility.' → WRONG. It's COMPANY'S legal obligation under Section 77. Company gets penalized, not lender.",
                      "Myth: 'Small loans (<₹10 lakh) don't need charge registration.' → WRONG. ALL secured loans (even ₹1 lakh) require CHG-1 if assets are pledged.",
                      "Myth: 'If I repay loan on time, charge automatically gets removed.' → WRONG. You must ACTIVELY file CHG-4 after getting NOC. Charge remains on ROC records forever until CHG-4 is filed.",
                      "Myth: 'Director personal loans to company don't need charge registration.' → DEPENDS. If director loan is UNSECURED, no CHG-1. If SECURED (director takes lien on assets), CHG-1 required.",
                      "Myth: 'Charge registration is one-time per company.' → WRONG. EACH loan requires SEPARATE CHG-1 filing. If you have 3 loans, you need 3 CHG-1 filings.",
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
                    🎯 When to File CHG-1 vs CHG-4?
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-yellow-200">
                      <p className="font-bold text-yellow-700 mb-1">
                        File CHG-1 (Charge Creation) When:
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>• Company avails NEW secured loan from bank/NBFC/lender</li>
                        <li>• Existing loan is ENHANCED (additional disbursement against same/different collateral)</li>
                        <li>• Existing unsecured loan is CONVERTED to secured (company pledges assets later)</li>
                        <li>• Company issues DEBENTURES (creates charge on undertaking)</li>
                        <li>• MODIFICATION of existing charge (change in assets pledged, charge amount, or lender)</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-yellow-200">
                      <p className="font-bold text-yellow-700 mb-1">
                        File CHG-4 (Charge Satisfaction) When:
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>• Secured loan is FULLY REPAID (principal + interest + charges)</li>
                        <li>• Lender issues NO-DUES CERTIFICATE (NOC) or closure letter</li>
                        <li>• Debentures are REDEEMED (company buys back debentures)</li>
                        <li>• Charge is RELEASED by lender (even if partial loan outstanding, but lender agrees to release charge)</li>
                        <li>• SALE of charged assets (buyer requires clean title — lender releases charge before sale)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FILING PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              CHG-1 & CHG-4 Filing Process
            </h2>
            
            {/* CHG-1 PROCESS */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00416a] mb-4">
                📋 CHG-1 Filing Process (Charge Creation)
              </h3>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
                <p className="text-gray-700 mb-6">
                  Complete MCA filing process for CHG-1 Charge Creation — from loan sanction to ROC registration:
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Loan Sanction & Charge Creation Event",
                      description:
                        "CHG-1 filing starts when company CREATES a charge (pledges assets as security for loan). Trigger events: (1) Bank/NBFC approves secured loan and issues SANCTION LETTER mentioning collateral/security required. (2) Company and lender execute LOAN AGREEMENT containing charge clause (mortgage deed, hypothecation agreement, pledge agreement). (3) Loan is DISBURSED to company's bank account. (4) For mortgage: Property documents are deposited with lender (equitable mortgage) OR registered in lender's favor (registered mortgage). (5) For hypothecation: Company executes hypothecation deed AND files charge with CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest). IMPORTANT: 30-DAY DEADLINE starts from DATE OF CHARGE CREATION, which is typically: (a) Date of loan agreement execution, OR (b) Date of loan disbursement, OR (c) Date mentioned in charge deed. Whichever is EARLIEST. Example: Loan agreement signed on 1st Jan 2026, loan disbursed on 10th Jan 2026 → 30-day deadline = 31st Jan 2026. Taxvio advises: Inform us IMMEDIATELY after loan sanction (before disbursement) so we can start CHG-1 preparation.",
                      duration: "Day 0 (Event Day)",
                    },
                    {
                      step: 2,
                      title: "Document Collection from Company & Lender",
                      description:
                        "Collect all documents related to loan and charge. From Company: (1) Board resolution approving loan and charge creation (passed in board meeting before loan agreement). (2) Copy of loan agreement/mortgage deed/hypothecation deed (duly executed by company and lender). (3) Sanction letter from lender (mentioning loan amount, interest rate, security required). (4) List of charged assets with details: (a) For property: Address, survey number, area, market value, title deed details. (b) For vehicles: Registration number, make, model, chassis number, engine number. (c) For machinery: Description, serial number, invoice value, location. (d) For stock/inventory: Description, quantity, value. (e) For receivables: List of debtors, amount. (5) Valuation report of charged assets (if available — banks usually require this). (6) Company CIN, PAN, registered office address. (7) Details of authorized signatory (director name, DIN, DSC). From Lender (Bank/NBFC): (1) Lender details: Name, address, PAN/CIN, contact person. (2) Charge ID (if lender has already filed CHG-1 on MCA portal — some banks file directly). (3) NOC for company to file CHG-1 (some lenders require their consent). Taxvio provides DOCUMENT CHECKLIST and coordinates with lender's loan processing team to obtain necessary documents.",
                      duration: "1-2 days",
                    },
                    {
                      step: 3,
                      title: "Board Resolution for CHG-1 Filing",
                      description:
                        "Company must pass BOARD RESOLUTION authorizing CHG-1 filing. Ideally, this resolution should be passed BEFORE loan agreement (along with loan approval resolution). But if missed, pass it now. Board Meeting Requirements: (1) Convene board meeting (physical or video conferencing). (2) Agenda: 'Ratification of charge created in favor of [Lender Name] and approval of CHG-1 filing'. (3) Present loan agreement and charge details to directors. (4) Pass resolution: 'RESOLVED THAT pursuant to Section 77 of Companies Act, 2013, the Board ratifies the charge created on [description of assets] in favor of [Lender Name] against the secured loan of ₹[amount]. RESOLVED FURTHER THAT [Director Name] be and is hereby authorized to file Form CHG-1 with ROC and do all such acts and things as may be necessary.' (5) Prepare Minutes of Board Meeting. (6) If required, file Form MGT-14 with ROC (if company type requires event-based filing — typically for public limited companies). Taxvio provides BOARD RESOLUTION TEMPLATE and MINUTES FORMAT for CHG-1 approval. For small companies, resolution can be passed via circulation.",
                      duration: "1 day",
                    },
                    {
                      step: 4,
                      title: "CHG-1 Form Preparation & Data Entry",
                      description:
                        "Prepare Form CHG-1 on MCA portal with accurate information. Form CHG-1 contains following sections: (1) PART A - Company Details: CIN, company name, registered office address. (2) PART B - Charge Holder Details: Name of lender (bank/NBFC/individual/company), Address, PAN/CIN, Email, Mobile. (3) PART C - Particulars of Charge: (a) Date of charge creation (from loan agreement/disbursement), (b) Nature of charge (Mortgage / Hypothecation / Pledge / Lien / Charge on book debts / Floating charge), (c) Amount secured by charge (loan amount + interest + charges — total liability). Example: Loan ₹10 lakh + interest ₹2 lakh (estimated) = Charge amount ₹12 lakh. (d) Description of property charged (DETAILED description): For Property: 'All that piece and parcel of land measuring [area] sq.ft, situated at [address], bearing Survey No. [number], alongwith building constructed thereon.' For Vehicles: '[Make] [Model] vehicle bearing registration number [XX-00-XX-0000], Chassis No. [xxx], Engine No. [xxx].' For Stock/Inventory: 'All present and future stock-in-trade, raw materials, finished goods, and inventory of the company located at [warehouse address].' For Receivables: 'All book debts, receivables, and monies due and owing to the company from its customers.' (4) PART D - Short Particulars of Assets Charged: Summarized list in tabular format (Sr.No, Description, Value). (5) PART E - Attachments: (a) Certified true copy of charge instrument (loan agreement/mortgage deed), (b) Board resolution approving charge creation and CHG-1 filing, (c) List of charged assets (if voluminous, attach separate sheet), (d) MOA (if charge is on company's entire undertaking). (6) Declaration by director that information is true and correct. Taxvio prepares CHG-1 form with ERROR-FREE data entry, ensuring all fields are correctly filled as per loan agreement. Form is reviewed by CA/CS before final submission.",
                      duration: "1 day",
                    },
                    {
                      step: 5,
                      title: "MCA E-Filing & Payment of Fees",
                      description:
                        "File Form CHG-1 on MCA portal (www.mca.gov.in). E-Filing Process: (1) Login to MCA portal using company credentials. (2) Navigate to 'MCA Services' → 'e-Filing' → 'Form CHG-1'. (3) Upload pre-filled CHG-1 form (prepared in Step 4). (4) Attach certified copy of charge instrument (loan agreement/mortgage deed — PDF, scanned and certified by authorized director/company secretary). (5) Attach board resolution (PDF). (6) Verify all information in preview mode. (7) Calculate filing fees based on CHARGE AMOUNT (not loan amount): (a) Up to ₹10 lakh: ₹1,000, (b) ₹10 lakh - ₹50 lakh: ₹2,000, (c) ₹50 lakh - ₹1 crore: ₹3,000, (d) ₹1 crore - ₹10 crore: ₹5,000, (e) Above ₹10 crore: ₹10,000. (8) If filing AFTER 30-DAY DEADLINE, additional fees apply: (a) 31-60 days late: 2x normal fee, (b) 61-90 days: 4x fee, (c) 91-180 days: 6x fee, (d) 181-270 days: 10x fee, (e) Beyond 270 days: 12x fee. (9) Pay fees online via net banking, credit/debit card, or NEFT/RTGS. (10) Digitally sign form using DSC of authorized director (Class 2 or Class 3 DSC). (11) Submit form to MCA. (12) Receive SRN (Service Request Number) as acknowledgment of submission. IMPORTANT: CHG-1 filing beyond 300 DAYS from charge creation is NOT ALLOWED on MCA portal. If deadline crossed 300 days, company must file condonation application with Regional Director (complex process). Taxvio ensures filing well within 30 days to avoid penalties and complications.",
                      duration: "1 day",
                    },
                    {
                      step: 6,
                      title: "MCA Processing & Certificate of Registration of Charge",
                      description:
                        "After submission, MCA processes CHG-1 form. Processing Timeline: (1) Immediate: SRN generated and email confirmation sent to registered email ID of company. (2) Within 7-10 days: Form goes for MCA scrutiny (automated + manual check by ROC officials). (3) If no defects: MCA issues CERTIFICATE OF REGISTRATION OF CHARGE (Form CHG-1 acknowledgment with ROC stamp and signature). This certificate contains: (a) Company name and CIN, (b) Charge ID (unique 14-digit number starting with 'CHG'), (c) Lender name, (d) Charge amount, (e) Date of charge creation, (f) Date of registration with ROC, (g) Short particulars of charged assets. (4) If defects found: MCA issues DEFECT LETTER listing errors. Company has 15 days to rectify defects and resubmit. Common defects: (a) Incorrect date of charge creation, (b) Mismatch between loan amount and charge amount, (c) Insufficient description of charged assets, (d) Missing certified copy of charge instrument, (e) DSC signature issues. (5) After defect rectification: Form is re-processed and approved (if all defects fixed). Download Certificate: (1) Login to MCA portal. (2) Go to 'MCA Services' → 'Document Related Services' → 'View Public Documents' or 'Track Payment Status'. (3) Enter SRN number. (4) Download approved CHG-1 certificate with MCA stamp. (5) Send copy to lender (bank/NBFC) for their records. IMPORTANT: Certificate of Registration of Charge is LEGAL PROOF that charge is validly created and registered. Lender needs this for their loan documentation. Keep certificate safely — required for future loan enhancements, charge modifications, and CHG-4 filing. Taxvio monitors filing status and ensures approval without defects. If MCA raises queries, we handle rectification promptly.",
                      duration: "7-10 days (MCA processing)",
                    },
                    {
                      step: 7,
                      title: "Update Charge Register & Inform Lender",
                      description:
                        "After MCA approves CHG-1, update company's internal charge register and inform lender. Post-Filing Requirements: (1) CHARGE REGISTER MAINTENANCE: Every company must maintain a REGISTER OF CHARGES (under Section 85) at its registered office. This register contains: (a) Sr. No. (sequential charge numbering), (b) Charge ID (from MCA certificate), (c) Date of charge creation, (d) Lender name and address, (e) Amount secured, (f) Nature of charge (mortgage, hypothecation, etc.), (g) Short description of charged assets, (h) Date of registration with ROC, (i) Date of satisfaction (when CHG-4 is filed later). Update this register immediately after CHG-1 approval. (2) Inform lender: Send copy of CHG-1 certificate to bank/NBFC's loan processing team. Most banks require this as CONDITION PRECEDENT for loan disbursement. If CHG-1 not filed, bank may hold back disbursement or charge penal interest. (3) File CERSAI registration (for hypothecation/mortgage): Apart from MCA, hypothecation and mortgage charges must also be registered with CERSAI (www.cersai.org.in) within 30 days. CERSAI registration is SEPARATE from CHG-1 — both are mandatory. Banks usually handle CERSAI filing, but company should verify. (4) Preserve documents: Keep following in safe custody: (a) Original loan agreement/charge deed (certified copy submitted to MCA, original retained by company), (b) Board resolution and minutes, (c) CHG-1 certificate from MCA, (d) CERSAI registration acknowledgment (if applicable), (e) Valuation report of charged assets. Taxvio provides CHARGE REGISTER TEMPLATE (Excel format) and assists with CERSAI filing coordination.",
                      duration: "Ongoing",
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
                    Total Timeline (CHG-1)
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>5-7 working days</strong> from document collection to MCA
                    certificate. Breakdown: Document collection (1-2 days) + Board
                    resolution (1 day) + Form preparation (1 day) + MCA e-filing (1 day)
                    + MCA approval (7-10 days). MUST BE COMPLETED WITHIN 30 DAYS of
                    charge creation to avoid penalties.{" "}
                    <strong>Taxvio ensures filing within 15 days</strong> of receiving
                    loan agreement.
                  </p>
                </div>
              </div>
            </div>

            {/* CHG-4 PROCESS */}
            <div>
              <h3 className="text-2xl font-bold text-[#00416a] mb-4">
                ✅ CHG-4 Filing Process (Charge Satisfaction)
              </h3>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
                <p className="text-gray-700 mb-6">
                  Complete MCA filing process for CHG-4 Charge Satisfaction — from loan closure to charge removal:
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Full Loan Repayment & Closure",
                      description:
                        "CHG-4 filing starts when secured loan is FULLY REPAID. Prerequisites: (1) Company pays ENTIRE OUTSTANDING AMOUNT to lender: (a) Principal amount, (b) Interest (till final payment date), (c) Processing charges, legal charges, documentation charges, (d) Prepayment penalty (if loan closed before tenure), (e) Any other dues mentioned in loan agreement. (2) Company requests LOAN CLOSURE from lender. (3) Lender verifies account and confirms NIL OUTSTANDING. (4) Company requests NO-DUES CERTIFICATE (NOC) from lender. Timeline: (a) Loan fully repaid on 1st Jan 2026, (b) Company requests NOC on 2nd Jan 2026, (c) Lender issues NOC within 7-30 days (as per RBI guidelines, lenders must issue NOC within 30 days of full repayment), (d) Company receives NOC by 31st Jan 2026, (e) CHG-4 must be filed within 30 DAYS of NOC date = by 2nd Mar 2026. IMPORTANT: NOC is MANDATORY for CHG-4 filing. Without NOC, MCA will reject CHG-4 form. Taxvio coordinates with lenders to expedite NOC issuance (we send follow-up emails/letters to lender's loan closing department).",
                      duration: "7-30 days (NOC receipt)",
                    },
                    {
                      step: 2,
                      title: "Obtain No-Dues Certificate (NOC) from Lender",
                      description:
                        "NO-DUES CERTIFICATE is a formal letter from lender confirming that loan is fully repaid and company has no further liability. NOC Requirements: (1) Must be on lender's LETTERHEAD (bank/NBFC official letterhead). (2) Must be SIGNED by authorized signatory of lender (branch manager, credit manager, authorized officer). (3) Must contain: (a) Lender name, address, contact details, (b) Company name and CIN, (c) Loan account number, (d) Original loan amount and date of sanction, (e) Statement: 'The loan amount of ₹[amount] availed by [Company Name] against [description of charged assets] has been fully repaid. The company has NIL OUTSTANDING as on [date]. We have no further claims against the company.', (f) Charge details: Charge ID (from CHG-1 certificate), Date of charge creation, Description of charged assets, (g) Statement: 'We hereby authorize [Company Name] to file Form CHG-4 for satisfaction of charge with ROC.', (h) Lender's PAN/CIN, (i) Date of NOC issuance, (j) Seal and signature of authorized officer. (4) If lender has digitally filed CHG-4: Some large banks (HDFC, ICICI, SBI, etc.) file CHG-4 DIRECTLY on MCA portal on behalf of company (they have bulk filing facility). In such cases, lender will inform company after filing and provide CHG-4 SRN. Company doesn't need to file separately. (5) If lender doesn't file: Company must obtain NOC and file CHG-4 themselves. Taxvio provides NOC REQUEST LETTER TEMPLATE and follows up with lender's loan closing team. If lender delays NOC beyond 30 days, we escalate to senior management/RBI ombudsman.",
                      duration: "1-7 days",
                    },
                    {
                      step: 3,
                      title: "Board Resolution for CHG-4 Filing",
                      description:
                        "Company must pass BOARD RESOLUTION authorizing CHG-4 filing. Board Meeting Requirements: (1) Convene board meeting (physical or video conferencing). (2) Agenda: 'Approval of CHG-4 filing for satisfaction of charge in favor of [Lender Name]'. (3) Present NOC and loan closure documents to directors. (4) Pass resolution: 'RESOLVED THAT pursuant to Section 82 of Companies Act, 2013, the Board notes that the secured loan of ₹[amount] availed from [Lender Name] has been fully repaid and NIL DUES CERTIFICATE has been received from the lender. RESOLVED FURTHER THAT the Board approves the filing of Form CHG-4 for satisfaction of charge bearing Charge ID [CHG-XXXXXXXXXXXXXX] created on [date]. RESOLVED FURTHER THAT [Director Name] be and is hereby authorized to file Form CHG-4 with ROC and do all such acts and things as may be necessary.' (5) Prepare Minutes of Board Meeting. Taxvio provides BOARD RESOLUTION TEMPLATE for CHG-4 approval.",
                      duration: "1 day",
                    },
                    {
                      step: 4,
                      title: "CHG-4 Form Preparation & Data Entry",
                      description:
                        "Prepare Form CHG-4 on MCA portal with accurate information. Form CHG-4 contains following sections: (1) PART A - Company Details: CIN, company name, registered office address. (2) PART B - Charge Details: (a) Charge ID (from CHG-1 certificate — 14-digit number starting with 'CHG'), (b) Date of charge creation (from CHG-1 certificate), (c) Lender name and address (must match CHG-1 details). (3) PART C - Details of Satisfaction: (a) Date of payment of debt (date of final loan repayment), (b) Date of satisfaction (date of NOC issuance by lender), (c) Whether satisfaction is FULL or PARTIAL: Select 'FULL' (charge is fully satisfied — entire loan repaid). Select 'PARTIAL' only if lender releases charge on SOME assets while loan is still outstanding (rare scenario). (4) PART D - Particulars of Person Giving Satisfaction: (a) Name of lender (bank/NBFC/individual), (b) Designation of signatory (Branch Manager, Credit Manager, Authorized Officer), (c) Email and mobile number. (5) PART E - Attachments: (a) NO-DUES CERTIFICATE from lender (PDF, on letterhead, signed), (b) Board resolution approving CHG-4 filing, (c) Proof of full repayment (optional but recommended — bank statement showing final payment, loan closure letter). (6) Declaration by director that information is true and correct. Taxvio prepares CHG-4 form with ERROR-FREE data entry, ensuring Charge ID matches CHG-1 certificate.",
                      duration: "1 day",
                    },
                    {
                      step: 5,
                      title: "MCA E-Filing & Payment of Fees",
                      description:
                        "File Form CHG-4 on MCA portal (www.mca.gov.in). E-Filing Process: (1) Login to MCA portal using company credentials. (2) Navigate to 'MCA Services' → 'e-Filing' → 'Form CHG-4'. (3) Upload pre-filled CHG-4 form (prepared in Step 4). (4) Attach NO-DUES CERTIFICATE from lender (PDF, mandatory). (5) Attach board resolution (PDF). (6) Verify all information in preview mode. (7) Calculate filing fees: CHG-4 fee is FIXED ₹500 (irrespective of charge amount). (8) If filing AFTER 30-DAY DEADLINE (from NOC date), additional fees apply: (a) 31-60 days late: 2x fee (₹1,000), (b) 61-90 days: 4x fee (₹2,000), (c) 91-180 days: 6x fee (₹3,000), (d) 181-270 days: 10x fee (₹5,000), (e) Beyond 270 days: 12x fee (₹6,000). (9) Pay fees online via net banking, credit/debit card, or NEFT/RTGS. (10) Digitally sign form using DSC of authorized director (Class 2 or Class 3 DSC). (11) Submit form to MCA. (12) Receive SRN (Service Request Number) as acknowledgment of submission. Taxvio handles entire e-filing process including fee calculation, payment, and DSC signing.",
                      duration: "1 day",
                    },
                    {
                      step: 6,
                      title: "MCA Processing & Charge Satisfaction Acknowledgment",
                      description:
                        "After submission, MCA processes CHG-4 form. Processing Timeline: (1) Immediate: SRN generated and email confirmation sent. (2) Within 3-5 days: Form goes for MCA scrutiny. (3) If no defects: MCA approves CHG-4 and updates charge status to 'SATISFIED' in public database. Company receives ACKNOWLEDGMENT OF SATISFACTION. (4) If defects found: MCA issues DEFECT LETTER. Company has 15 days to rectify. Common defects: (a) Charge ID mismatch, (b) Missing NOC from lender, (c) NOC not on lender's letterhead, (d) Incorrect date of satisfaction. Download Acknowledgment: (1) Login to MCA portal. (2) Go to 'View Public Documents'. (3) Enter SRN number. (4) Download CHG-4 acknowledgment. (5) Verify charge status is updated to 'SATISFIED' in company's master data. IMPORTANT: After CHG-4 approval, the charge is PERMANENTLY REMOVED from ROC records. Charged assets are FREE from encumbrance and can be pledged for new loans. Taxvio monitors filing status and ensures approval without defects.",
                      duration: "3-5 days (MCA processing)",
                    },
                    {
                      step: 7,
                      title: "Update Charge Register & Return Original Documents",
                      description:
                        "After MCA approves CHG-4, update company's charge register and retrieve original documents from lender. Post-Filing Requirements: (1) UPDATE CHARGE REGISTER: Mark charge as 'SATISFIED' in Register of Charges maintained at registered office. Enter satisfaction date and CHG-4 acknowledgment number. (2) Return of original documents: Lender will return ORIGINAL DOCUMENTS that were held as security: (a) For mortgage: Title deeds of property (sale deed, mother deed, encumbrance certificate), (b) For hypothecation: RC book (vehicle registration certificate), machinery invoices, (c) For pledge: Share certificates, FD receipts. Company should verify all documents are returned and match original list submitted during loan sanction. (3) CERSAI charge cancellation: If charge was registered with CERSAI (for hypothecation/mortgage), lender must file CANCELLATION with CERSAI after loan closure. Company should verify CERSAI status is updated to 'Satisfied'. (4) Preserve documents: Keep following in safe custody: (a) NOC from lender, (b) CHG-4 acknowledgment, (c) Loan closure letter, (d) Final repayment proof, (e) Original property/asset documents (returned by lender). Taxvio provides updated CHARGE REGISTER with satisfaction entries and assists with CERSAI cancellation verification.",
                      duration: "Ongoing",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="bg-white rounded-2xl p-6 border border-blue-200 flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
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

                <div className="mt-8 bg-white border-2 border-blue-300 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Total Timeline (CHG-4)
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>10-15 working days</strong> from full loan repayment to MCA
                    acknowledgment. Breakdown: NOC procurement (7-30 days) + Board
                    resolution (1 day) + Form preparation (1 day) + MCA e-filing (1 day)
                    + MCA approval (3-5 days). MUST BE COMPLETED WITHIN 30 DAYS of
                    receiving NOC from lender.{" "}
                    <strong>Taxvio coordinates with lender</strong> to expedite NOC and
                    files CHG-4 within 7 days of NOC receipt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for CHG-1 & CHG-4 Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For CHG-1 Filing (Charge Creation)
                </p>
                <ul className="space-y-3">
                  {[
                    "Loan sanction letter from lender (bank/NBFC)",
                    "Executed loan agreement / mortgage deed / hypothecation deed",
                    "Board resolution approving loan and charge creation",
                    "Details of charged assets (property documents, vehicle RC, machinery invoices, stock list, receivables list)",
                    "Valuation report of charged assets (if available)",
                    "Lender details (name, address, PAN/CIN, contact person)",
                    "Company CIN and PAN",
                    "Digital Signature Certificate (DSC) of authorized director",
                    "Certified copy of charge instrument (for MCA attachment)",
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
                  For CHG-4 Filing (Charge Satisfaction)
                </p>
                <ul className="space-y-3">
                  {[
                    "No-Dues Certificate (NOC) from lender on letterhead (mandatory)",
                    "CHG-1 certificate (Charge ID required)",
                    "Loan closure letter from lender",
                    "Proof of full repayment (bank statement / final payment receipt)",
                    "Board resolution approving CHG-4 filing",
                    "Company CIN and PAN",
                    "Digital Signature Certificate (DSC) of authorized director",
                    "Details of charged assets (for reference)",
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
                📝 Asset-Specific Documents (for CHG-1)
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "For Property Mortgage: Sale deed, title deed, encumbrance certificate, property tax receipt, survey map",
                  "For Vehicle Hypothecation: Registration certificate (RC book), insurance copy, invoice, chassis/engine number",
                  "For Machinery Hypothecation: Purchase invoice, delivery challan, serial number, location details",
                  "For Stock/Inventory: Stock register, warehouse details, insurance copy, valuation report",
                  "For Receivables: Debtor list with aging, invoice copies, assignment agreement",
                  "For Debentures: Debenture trust deed, list of debenture holders, terms of issue",
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
              Common Mistakes in Charge Filing
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Charge creation and satisfaction have strict compliance requirements — avoid these critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Missing 30-Day Deadline for CHG-1 Filing",
                    icon: "📅",
                    problem:
                      "Most common mistake — companies delay CHG-1 filing beyond 30 days from charge creation. Reasons: (1) Waiting for loan disbursement (CHG-1 should be filed from loan agreement date, not disbursement date), (2) Lender delays in providing documents, (3) Lack of awareness about deadline, (4) Confusion about which date to consider as 'charge creation date'. Consequences: (1) Additional MCA fees (2x to 12x normal fee), (2) Penalty up to ₹25,000 on company + ₹10,000 per director, (3) Lender may recall loan or charge penal interest, (4) After 300 days, CHG-1 cannot be filed — lender loses priority.",
                    solution:
                      "File CHG-1 within 15 DAYS of loan sanction (well before 30-day deadline). Don't wait for disbursement. Taxvio recommendation: (1) Inform us AS SOON AS loan is sanctioned (before disbursement), (2) We'll prepare CHG-1 form in advance and file immediately after disbursement, (3) Set calendar reminder on day 10 and day 20 after loan agreement to track CHG-1 status. If deadline is approaching (day 25+), file URGENTLY even if some documents are missing (can attach later via defect rectification).",
                  },
                  {
                    mistake: "Incorrect Charge Amount in CHG-1",
                    icon: "💰",
                    problem:
                      "Entering WRONG charge amount in CHG-1 form. Common errors: (1) Entering ONLY principal loan amount (e.g., ₹10 lakh) — WRONG. Charge amount should include principal + estimated interest + charges. Example: ₹10 lakh loan for 5 years @ 12% = Total liability ₹16 lakh. CHG-1 charge amount should be ₹16 lakh. (2) Entering disbursed amount instead of sanctioned amount (if loan is disbursed in tranches). (3) Not updating charge amount during loan enhancement (if additional loan taken against same collateral). Impact: If company defaults and lender tries to recover, they can only claim UP TO registered charge amount (not actual dues).",
                    solution:
                      "Calculate charge amount as: Principal + (Principal × Interest Rate × Tenure) + Processing Charges + Other Charges. Example: ₹10 lakh loan @ 12% for 5 years. Charge amount = ₹10L + (₹10L × 12% × 5) + ₹25,000 processing = ₹16.25 lakh. Always ROUND UP to next lakh (₹17 lakh in this case). Consult lender for exact charge amount to be mentioned (lenders usually specify in loan agreement). If loan is enhanced later: File CHG-8 (Modification of Charge) to update amount. Taxvio verifies charge amount with lender before CHG-1 filing.",
                  },
                  {
                    mistake: "Inadequate Description of Charged Assets",
                    icon: "📋",
                    problem:
                      "Providing VAGUE or INCOMPLETE description of charged assets in CHG-1. Examples of bad descriptions: (1) 'All assets of the company' — TOO VAGUE. (2) 'Property in Mumbai' — INSUFFICIENT (which property? address? survey number?). (3) 'Vehicles' — INCOMPLETE (registration numbers? chassis numbers?). If description is unclear: (1) Charge may be unenforceable in court (lender cannot identify which assets to seize), (2) MCA may reject CHG-1 form for defective description, (3) Creates confusion during asset sale (buyer's lawyer cannot confirm which assets are charged).",
                    solution:
                      "Provide DETAILED, SPECIFIC description for each asset type: (1) Property: 'All that piece and parcel of land admeasuring 2,500 sq.ft, bearing Survey No. 45/3, situated at Plot No. 123, Sector 15, Noida, Uttar Pradesh - 201301, alongwith building/structure constructed thereon, bounded by: North - Road, South - Survey No. 45/2, East - Survey No. 46/1, West - Survey No. 44/7.' (2) Vehicles: '[Make] [Model] vehicle bearing Registration No. DL-01-AB-1234, Chassis No. MA3ERLF3S00XXXXXX, Engine No. G4FAXXXXXXX, colour [White].' (3) Machinery: '[Description] machine, Make: [XYZ], Serial No: [12345], Invoice No: [ABC/2024/123], located at [factory address].' (4) Stock: 'All present and future stock-in-trade, raw materials, semi-finished goods, finished goods, and consumables of the company located at Warehouse, Plot No. 456, Industrial Area, [City].' Taxvio reviews loan agreement and prepares legally sound asset descriptions.",
                  },
                  {
                    mistake: "Not Filing CHG-4 After Loan Closure",
                    icon: "🔓",
                    problem:
                      "Company fully repays loan but FORGETS to file CHG-4. Reasons: (1) Lack of awareness (company thinks charge auto-closes after repayment), (2) Lender delays NOC issuance, (3) Cost-saving mentality ('loan is closed, why spend ₹500 on CHG-4?'). Consequences: (1) Charge remains on ROC records PERMANENTLY (shows as 'active' even though loan is closed), (2) Charged assets cannot be sold (buyer's due diligence shows active charge — deal gets stuck), (3) Charged assets cannot be pledged for NEW loan (lender sees existing charge — rejects application or offers lower loan), (4) Company valuation suffers (investors see 'liabilities' in charge register even though loans are repaid), (5) Penalty for late CHG-4 filing (if filed after 30 days of NOC).",
                    solution:
                      "File CHG-4 IMMEDIATELY after receiving NOC from lender. Timeline: Loan repaid → Request NOC within 2-3 days → Follow up with lender if NOC delayed beyond 15 days → File CHG-4 within 7 days of NOC receipt. Taxvio provides CHG-4 FILING CHECKLIST with every CHG-1 filing — we remind clients to file CHG-4 when loan tenure is approaching end. We also send NOC REQUEST LETTER to lenders on client's behalf.",
                  },
                  {
                    mistake: "Filing CHG-4 Without Valid NOC",
                    icon: "📄",
                    problem:
                      "Attempting to file CHG-4 without proper No-Dues Certificate from lender. Common scenarios: (1) Company prepares NOC themselves (on company letterhead instead of lender's letterhead) — MCA rejects. (2) NOC is unsigned or signed by unauthorized person (e.g., accountant instead of branch manager) — MCA rejects. (3) NOC is generic email confirmation ('your loan is closed') instead of formal letter on letterhead — MCA rejects. (4) NOC doesn't mention Charge ID or loan details — MCA may seek clarification. Result: CHG-4 form becomes DEFECTIVE, company has to rectify and refile (additional time and cost).",
                    solution:
                      "NOC must meet following criteria: (1) On LENDER'S LETTERHEAD (bank/NBFC official letterhead with logo), (2) SIGNED by authorized officer (branch manager, credit manager, zonal head), (3) Must contain: (a) Company name and CIN, (b) Loan account number, (c) Original loan amount, (d) Statement: 'Loan fully repaid, NIL outstanding', (e) Charge ID (from CHG-1 certificate), (f) Authorization for company to file CHG-4, (g) Lender's seal/stamp, (h) Date. If lender provides generic email: Request formal NOC on letterhead. Taxvio provides NOC TEMPLATE and coordinates with lender to obtain compliant NOC.",
                  },
                  {
                    mistake: "Not Coordinating with Lender for CERSAI Filing",
                    icon: "🏦",
                    problem:
                      "Forgetting that hypothecation and mortgage charges require DUAL registration — both MCA (CHG-1) AND CERSAI. CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest) is a SEPARATE registry maintained by government for secured loan charges. RBI/NHB mandate: All secured loans must be registered with CERSAI within 30 days. Most banks handle CERSAI filing themselves, but some smaller NBFCs/private lenders don't. If CERSAI not filed: (1) Charge is not legally enforceable under SARFAESI Act (lender cannot take possession of charged assets without court order), (2) Lender faces RBI penalty (non-compliance with prudential norms), (3) Company faces difficulty during asset sale (buyer's lawyer checks both MCA and CERSAI — mismatch creates legal issue).",
                    solution:
                      "After CHG-1 filing, verify CERSAI registration status: (1) Ask lender: 'Have you filed CERSAI registration for our loan?' (2) If YES: Request CERSAI acknowledgment copy for records. (3) If NO: Request lender to file immediately OR company can file CERSAI themselves (requires lender's details and DSC). CERSAI filing is done at www.cersai.org.in. Similarly, after loan closure, verify CERSAI CANCELLATION: (1) After CHG-4 filing, request lender to file CERSAI cancellation. (2) Verify cancellation acknowledgment. Taxvio coordinates CERSAI filing/cancellation with lenders and provides CERSAI status verification as part of CHG-1/CHG-4 service.",
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
              Charge Creation & Satisfaction Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive CHG-1 and CHG-4 filing packages for secured loan compliance:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic CHG-1",
                  price: "₹5,999",
                  popular: false,
                  features: [
                    "CHG-1 form preparation (single charge)",
                    "Loan agreement review & charge amount calculation",
                    "Asset description drafting (up to 3 assets)",
                    "MCA e-filing with normal fees",
                    "SRN generation and tracking",
                    "Certificate of Registration download",
                    "Charge register entry template",
                    "Email support",
                  ],
                  limitations: [
                    "Board resolution NOT included (DIY template provided)",
                    "CERSAI filing NOT included",
                    "Lender coordination NOT included",
                    "No belated filing support",
                  ],
                  ideal:
                    "Companies with simple charge (1-3 assets) and existing board processes",
                },
                {
                  name: "Standard (CHG-1 + CHG-4)",
                  price: "₹9,999",
                  popular: true,
                  features: [
                    "Everything in Basic CHG-1",
                    "Board resolution drafting & template",
                    "Lender coordination for document collection",
                    "Unlimited asset descriptions (no cap)",
                    "CERSAI filing coordination (verify lender has filed)",
                    "Belated filing support (additional fees calculated)",
                    "Defect rectification (if MCA raises queries)",
                    "CHG-4 filing assistance (when loan closes)",
                    "NOC procurement support from lender",
                    "Priority support (WhatsApp + email)",
                  ],
                  limitations: ["Complex modifications (CHG-8) charged extra"],
                  ideal:
                    "Most companies with secured loans from banks/NBFCs",
                },
                {
                  name: "Complete (Multi-Charge)",
                  price: "₹19,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Up to 5 charge registrations (CHG-1) in one go",
                    "Complex charge handling (floating charge, debenture trust deed)",
                    "Multiple lender coordination",
                    "Charge register maintenance (annual updates)",
                    "CERSAI filing assistance (if lender doesn't file)",
                    "Charge modification filing (CHG-8) — 1 free included",
                    "Annual charge status report (which charges active/satisfied)",
                    "Dedicated CA + CS team",
                    "ROC notice response support (if any)",
                  ],
                  limitations: [],
                  ideal:
                    "Companies with multiple loans or complex debenture structures",
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
                    <p className="text-sm text-gray-500">One-time fee per charge</p>
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
                    service: "CHG-4 Filing Only",
                    price: "₹3,999",
                    desc: "If CHG-1 was filed by lender/other CA",
                  },
                  {
                    service: "Belated CHG-1 (31-90 days)",
                    price: "+₹3,000",
                    desc: "Additional fee handling & penalty calculation",
                  },
                  {
                    service: "CERSAI Filing Assistance",
                    price: "₹2,999",
                    desc: "If lender doesn't file CERSAI",
                  },
                  {
                    service: "CHG-8 (Charge Modification)",
                    price: "₹7,999",
                    desc: "For loan enhancement/asset change",
                  },
                  {
                    service: "NOC Procurement from Lender",
                    price: "₹1,999",
                    desc: "If lender delays/unresponsive",
                  },
                  {
                    service: "Charge Register Digitization",
                    price: "₹4,999",
                    desc: "Convert physical register to Excel",
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
              What Our Charge Filing Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Vikram Singh, Director",
                  company: "Singh Engineering Pvt Ltd",
                  location: "Noida, UP",
                  text: "We took a ₹50 lakh term loan from ICICI Bank and were confused about CHG-1 filing deadline. Taxvio handled entire process — from asset description to MCA filing. They filed CHG-1 in just 5 days (well within 30-day deadline). Bank was impressed with quick turnaround. Highly professional service!",
                },
                {
                  name: "Priyanka Mehta, CFO",
                  company: "Mehta Retail Chain Pvt Ltd",
                  location: "Meerut, UP",
                  text: "We had 3 different loans (property mortgage, vehicle hypothecation, and stock hypothecation) and needed to file 3 CHG-1 forms. Taxvio's Complete package (₹19,999) was perfect — they handled all 3 charges together, coordinated with multiple lenders, and maintained our charge register. After 2 years, they also helped us file CHG-4 when we closed one loan. Excellent ongoing support!",
                },
                {
                  name: "Rajiv Kumar, Managing Director",
                  company: "Kumar Auto Components Ltd",
                  location: "Muzaffarnagar, UP",
                  text: "We missed the 30-day CHG-1 deadline by 45 days due to internal delays. Bank was threatening to recall the loan. Taxvio filed belated CHG-1 with additional fees, handled bank coordination, and got MCA approval in 10 days. They saved us from loan recall and potential legal issues. Forever grateful!",
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
              Charge Creation & Satisfaction Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides online CHG-1 and CHG-4 filing services for companies across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote filing with digital
              document submission, lender coordination, and MCA e-filing.
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
              Other ROC & Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "DPT-3 Filing",
                  icon: "📋",
                  link: "/serviceslist/roc/dpt-3-filing",
                  desc: "Return of deposits filing",
                },
                {
                  title: "Annual ROC Filing",
                  icon: "📊",
                  link: "/serviceslist/roc/annual-filing",
                  desc: "MGT-7, AOC-4, ADT-1 compliance",
                },
                {
                  title: "Company Incorporation",
                  icon: "🏢",
                  link: "/serviceslist/roc/company-registration",
                  desc: "Private/Public Ltd company setup",
                },
                {
                  title: "NBFC Registration",
                  icon: "🏦",
                  link: "/serviceslist/roc/nbfc-registration",
                  desc: "RBI-registered NBFC incorporation",
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
                    Secure Your Loan Compliance
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File CHG-1 Within 30 Days — Protect Lender Priority
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get expert charge creation and satisfaction filing services.
                    Complete CHG-1 and CHG-4 compliance with lender coordination,
                    asset description, board resolution, MCA e-filing, and CERSAI
                    support. Starting ₹5,999 with dedicated CA & CS team. File now
                    before deadline!
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File CHG-1/CHG-4 — ₹5,999
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
            href="https://wa.me/918937980366?text=Hi%2C%20I%20want%20to%20file%20CHG-1%20or%20CHG-4%20for%20charge%20registration"
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
      q: "Can I file CHG-1 after 30 days? What is the maximum deadline?",
      a: "YES, you can file CHG-1 after 30 days, but with ADDITIONAL FEES and PENALTIES. MCA allows belated CHG-1 filing up to 300 DAYS from charge creation date. Timeline: (1) Days 1-30: File with normal fees (₹1,000-10,000 depending on charge amount). (2) Days 31-60: File with 2x fees + penalty (company ₹25,000 + ₹10,000 per director). (3) Days 61-90: 4x fees + penalty. (4) Days 91-180: 6x fees + penalty. (5) Days 181-270: 10x fees + penalty. (6) Days 271-300: 12x fees + penalty. (7) After 300 days: CHG-1 CANNOT be filed on MCA portal. Company must file CONDONATION APPLICATION with Regional Director explaining reasons for delay. Regional Director may condone delay (allow filing) or reject (lender loses priority). RECOMMENDATION: File within 30 days to avoid all these complications. If deadline is approaching, file URGENTLY (even with some missing documents — rectify defects later).",
    },
    {
      q: "Who is responsible for CHG-1 filing — company or lender?",
      a: "COMPANY is LEGALLY RESPONSIBLE for CHG-1 filing (not lender). Section 77 of Companies Act states: 'It shall be the duty of the company creating a charge to register the charge with ROC within 30 days.' If CHG-1 not filed: (1) Company gets penalized (not lender), (2) Directors are liable for penalty, (3) Company faces loan recall risk. However, in PRACTICE, many banks/NBFCs offer to file CHG-1 on behalf of company (they have bulk filing facility on MCA portal). Bank's loan agreement may contain clause: 'Bank will file CHG-1 and deduct filing charges from loan amount.' If bank agrees to file: (1) Company should still MONITOR filing status (don't blindly trust), (2) Request CHG-1 certificate copy from bank after filing, (3) Update company's charge register. If bank doesn't file or delays: Company must file themselves (through CA/CS like Taxvio). SAFEST APPROACH: Company should file CHG-1 themselves (or through Taxvio) to ensure timely compliance and avoid penalty risk.",
    },
    {
      q: "Do I need to file separate CHG-1 for each loan or one CHG-1 for multiple loans?",
      a: "SEPARATE CHG-1 for EACH loan/charge. CHG-1 is filed per CHARGE, not per company. If company has multiple secured loans, each loan requires separate CHG-1 filing. Examples: (1) Company takes ₹10 lakh property mortgage from HDFC Bank → File CHG-1 #1. (2) Same company takes ₹5 lakh vehicle hypothecation from ICICI Bank → File CHG-1 #2 (separate filing). (3) Same company issues debentures of ₹50 lakh creating charge on entire undertaking → File CHG-1 #3. Total: 3 CHG-1 filings (even though it's same company). Each CHG-1 will get unique CHARGE ID (14-digit number). Exception: If SAME lender gives multiple loans against SAME collateral (loan enhancement): (1) Initially: ₹10 lakh loan → File CHG-1 with charge amount ₹12 lakh. (2) After 1 year: Lender enhances loan to ₹15 lakh (additional ₹5 lakh) against SAME property. → File CHG-8 (Modification of Charge) to update charge amount to ₹18 lakh (not new CHG-1). Taxvio's Complete package (₹19,999) covers up to 5 CHG-1 filings — ideal for companies with multiple loans.",
    },
    {
      q: "What happens if lender does not give NOC for CHG-4 filing?",
      a: "If lender unreasonably delays or refuses NOC after loan is fully repaid, company has following options: (1) SEND FORMAL DEMAND LETTER: Write to lender's branch manager/credit manager requesting NOC. Mention: (a) Loan account number and date of full repayment, (b) Amount repaid (with bank statement proof), (c) Request NOC within 7 days, (d) Warn that delay is violating RBI guidelines (lenders must issue NOC within 30 days of full repayment). (2) ESCALATE TO LENDER'S SENIOR MANAGEMENT: If branch doesn't respond, escalate to lender's regional head/zonal head/customer grievance cell. (3) FILE COMPLAINT WITH RBI OMBUDSMAN: If lender is bank/NBFC, file complaint at RBI Banking Ombudsman portal (www.rbio.gov.in). RBI will direct lender to issue NOC within 30 days. (4) LEGAL NOTICE: Send legal notice through advocate demanding NOC + compensation for mental harassment and business loss (due to inability to sell/pledge assets). (5) COURT ORDER: If lender still doesn't issue NOC, file civil suit for 'specific performance' (court will order lender to issue NOC). Usually doesn't reach this stage — RBI complaint is enough. (6) ALTERNATIVE: File CHG-4 with BANK STATEMENT showing loan fully repaid + Company's own certification that loan is closed. Attach explanation: 'Lender has not issued NOC despite multiple requests. Company is filing CHG-4 based on bank statement proof of full repayment.' MCA MAY accept this if supporting evidence is strong. Taxvio assists with NOC procurement — we send follow-up emails/letters to lender and escalate if needed.",
    },
    {
      q: "Is CERSAI filing mandatory along with CHG-1?",
      a: "YES, CERSAI filing is MANDATORY for HYPOTHECATION and MORTGAGE charges (in ADDITION to CHG-1). CERSAI = Central Registry of Securitisation Asset Reconstruction and Security Interest (www.cersai.org.in). It's a government registry maintained by Ministry of Finance for tracking secured loans. Applicability: (1) Hypothecation charges (vehicles, machinery, stock) → CERSAI filing MANDATORY. (2) Mortgage charges (property, land, building) → CERSAI filing MANDATORY. (3) Pledge charges (goods, securities) → CERSAI filing NOT required. (4) Floating charges (entire undertaking) → CERSAI filing NOT required. Deadline: CERSAI filing must be done within 30 DAYS of charge creation (same as CHG-1). Who files? Usually LENDER files CERSAI (banks/NBFCs have direct access to CERSAI portal). But company is ULTIMATELY RESPONSIBLE — if lender doesn't file, company must file. Consequences of non-filing: (1) Lender cannot invoke SARFAESI Act (cannot take possession of charged assets without court order if company defaults). (2) Lender faces RBI penalty (non-compliance with prudential norms). (3) Company faces difficulty during asset sale (buyer checks both MCA and CERSAI — mismatch creates legal issue). How to verify? After CHG-1 filing, ask lender: 'Have you filed CERSAI registration?' Request CERSAI acknowledgment copy. Similarly, after CHG-4 filing, ensure lender files CERSAI CANCELLATION. Taxvio coordinates CERSAI filing verification with lenders as part of Standard & Complete packages.",
    },
    {
      q: "Can I modify a registered charge? How to file CHG-8?",
      a: "YES, you can modify a registered charge by filing FORM CHG-8 (Particulars of Modification in Charge). When to file CHG-8? (1) LOAN ENHANCEMENT: Original loan ₹10 lakh → Enhanced to ₹15 lakh against SAME collateral. → File CHG-8 to update charge amount from ₹12 lakh to ₹18 lakh. (2) CHANGE IN CHARGED ASSETS: Original: Property A pledged → Now: Property A + Property B pledged (lender accepts additional security). → File CHG-8 to add Property B to charge description. (3) CHANGE IN LENDER: Original lender: HDFC Bank → New lender: ICICI Bank (loan transferred via assignment/takeover). → File CHG-8 to update lender details. (4) CHANGE IN CHARGE TERMS: Interest rate change, tenure extension, security substitution, etc. → File CHG-8 if these changes affect charge particulars. Documents required: (1) Original CHG-1 certificate (Charge ID needed), (2) Loan modification agreement/supplementary agreement between company and lender, (3) Board resolution approving modification and CHG-8 filing, (4) Details of changes (old vs new comparison), (5) DSC of authorized director. Deadline: CHG-8 must be filed within 30 DAYS of modification. Fee: ₹1,000-2,000 (based on modified charge amount). IMPORTANT: CHG-8 is NOT a replacement of CHG-1 — it's an AMENDMENT. Original Charge ID remains same, only particulars are updated. Taxvio offers CHG-8 filing at ₹7,999 (included free in Complete package).",
    },
    {
      q: "What is the difference between secured and unsecured loan in terms of CHG-1 filing?",
      a: "SECURED LOAN vs UNSECURED LOAN — CHG-1 Filing Requirement: (1) SECURED LOAN: (a) Lender takes COLLATERAL/SECURITY (company pledges assets — property, vehicle, machinery, stock, etc.). (b) Creates CHARGE on pledged assets. (c) CHG-1 filing is MANDATORY within 30 days. (d) If company defaults, lender can SEIZE and SELL charged assets to recover dues (via SARFAESI Act or court order). (e) Examples: Term loans, vehicle loans, property mortgages, working capital limits against stock/receivables, debenture issues. (2) UNSECURED LOAN: (a) Lender does NOT take any collateral/security. (b) NO charge created on company assets. (c) CHG-1 filing is NOT required (no charge to register). (d) If company defaults, lender has to file civil suit and get court decree to recover (cannot directly seize assets). (e) Examples: Personal loans to company, director loans, shareholder loans, unsecured term loans, unsecured working capital. MIXED SCENARIO: Partially secured loan: (1) Company takes ₹20 lakh loan. (2) ₹15 lakh is secured against property (charge created). (3) ₹5 lakh is unsecured (no charge). → File CHG-1 for ₹18 lakh (₹15L principal + interest on secured portion). ₹5 lakh unsecured portion is disclosed in DPT-3 (not CHG-1). Taxvio clarification: ONLY file CHG-1 if loan agreement explicitly mentions creation of charge/security interest. If loan is unsecured, no CHG-1 needed (but may require DPT-3 filing if loan is from director/shareholder).",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Charge Creation & Satisfaction
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