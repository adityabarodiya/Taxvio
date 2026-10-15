// app/serviceslist/gst/gst-composition-to-regular/GSTCompositionToRegularClient.tsx
"use client";

import Footar from "@/components/Footar";
import InquiryFormButton from "@/components/InquiryFormButton";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Composition to Regular Scheme Transition Services",
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
    "Professional GST Composition Scheme to Regular Scheme transition services for businesses crossing turnover limits or voluntarily opting for regular scheme. Complete support for transition eligibility assessment, Form GST CMP-04 withdrawal filing, Form GST ITC-01 stock credit claim (input tax credit on closing stock), transition return filing (final CMP-08 and first GSTR-3B), amendment of GST registration, compliance checklist, and post-transition return filing support. Maximize input tax credit recovery on existing stock and ensure smooth migration to regular GST scheme. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "GST Scheme Transition & Migration Support",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
      maxPrice: "14999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When must a composition dealer switch to regular GST scheme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A composition dealer MUST mandatorily switch to regular GST scheme if: (1) Aggregate turnover exceeds ₹1.5 crore in a financial year (₹75 lakh for special category states), (2) Makes any inter-state supply of goods (composition scheme is only for intra-state supplies), (3) Supplies goods through e-commerce operators (not allowed under composition), (4) Supplies non-taxable goods or services not covered under composition scheme. The transition must be done from the date when the threshold is crossed or the disqualifying event occurs. Additionally, dealers may VOLUNTARILY opt out of composition scheme at any time by filing Form GST CMP-04.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form GST ITC-01 and how does stock credit work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form GST ITC-01 is used to claim input tax credit (ITC) on the closing stock (inventory) and capital goods held by a composition dealer at the time of transition to regular scheme. Since composition dealers cannot avail ITC during composition period, they are allowed ONE-TIME transitional credit on stock held on the date of transition. Eligible stock: Goods purchased during composition period and still in stock (unsold/unused). Credit amount: ITC = (Tax paid on inputs/stock) as per invoices. You can claim CGST, SGST, and IGST paid on such stock. ITC-01 must be filed within 30 days of the date of transition to regular scheme. This is a CRITICAL benefit — ensures you don't lose ITC on existing inventory after switching to regular scheme.",
      },
    },
    {
      "@type": "Question",
      name: "What is the deadline to file Form GST CMP-04 for withdrawal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form GST CMP-04 (Intimation to withdraw from Composition Scheme) deadlines: (1) For VOLUNTARY withdrawal (you decide to opt out): File CMP-04 BEFORE the start of the financial year from which you want to switch to regular scheme. Effective date: 1st April of the new financial year. (2) For MANDATORY withdrawal (crossed turnover limit or made inter-state supply): File CMP-04 within 7 days of occurrence of the ineligibility event. Effective date: Date of crossing threshold or making disqualified supply. Example: If you cross ₹1.5 crore turnover on 15th August 2024, you must file CMP-04 by 22nd August 2024, and transition becomes effective from 15th August 2024 itself. Missing this deadline can lead to penalties and interest.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTCompositionToRegularClient() {
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
          className="bg-orange-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⚠️ Crossed ₹1.5 Cr Turnover? Transition to Regular GST Within 7 Days — File CMP-04 Now
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
                href="/serviceslist/gst"
                className="hover:text-white transition"
              >
                GST Services
              </Link>
              <span>/</span>
              <span className="text-white">Composition to Regular Transition</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🔄 Scheme Migration
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Composition to
                  <br />
                  <span className="text-[#7ecbf0]">Regular Scheme</span>
                  <br />
                  Transition Service
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Growing your business and{" "}
                  <strong className="text-white">
                    crossed ₹1.5 crore turnover limit
                  </strong>
                  ? Or planning to make{" "}
                  <strong className="text-white">inter-state supplies</strong> or
                  avail{" "}
                  <strong className="text-white">input tax credit (ITC)</strong>?
                  You need to{" "}
                  <strong className="text-white">
                    transition from Composition Scheme to Regular GST Scheme
                  </strong>
                  . This involves{" "}
                  <strong className="text-white">
                    filing Form CMP-04 (withdrawal), claiming transitional stock
                    credit via Form ITC-01
                  </strong>
                  , and migrating to monthly return filing.{" "}
                  <strong className="text-white">Taxvio</strong> provides
                  end-to-end transition support — eligibility review, CMP-04
                  filing, ITC-01 stock credit maximization, and seamless migration
                  to regular scheme compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Start Transition — ₹4,999 →
                  </Link>
                  
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ CMP-04 Withdrawal Filing",
                    "✅ ITC-01 Stock Credit Claim",
                    "✅ Zero Compliance Gap",
                    "✅ Return Transition Support",
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
                  Transition Essentials
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📊", "Turnover limit: ₹1.5 crore/year"],
                    ["📋", "File CMP-04 within 7 days"],
                    ["💰", "Claim stock ITC via ITC-01"],
                    ["🔄", "Transition effective immediately"],
                    ["📅", "Monthly return filing starts"],
                    ["🚀", "Transition fee: ₹4,999 onwards"],
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
              { number: "200+", label: "Transitions Completed", icon: "✅" },
              { number: "₹1.5 Cr", label: "Turnover Threshold", icon: "📊" },
              { number: "30 Days", label: "ITC-01 Filing Deadline", icon: "⏰" },
              { number: "₹4,999", label: "Starting Fee", icon: "💰" },
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
              "✔ Turnover Analysis",
              "✔ Stock Credit Maximization",
              "✔ Seamless Portal Filing",
              "✔ Post-Transition Compliance",
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
          {/* WHAT IS TRANSITION */}
          <section id="what-is-transition">
            <SectionLabel text="Understanding the Transition" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Composition to Regular Scheme Transition?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>GST Composition Scheme</strong> is a simplified tax
                  scheme for small businesses with turnover up to{" "}
                  <strong>₹1.5 crore/year</strong> (₹75 lakh for special
                  category states). Under this scheme, businesses pay tax at a{" "}
                  <strong>fixed rate (1%-6%)</strong> on turnover and file
                  quarterly returns (GSTR-4), but{" "}
                  <strong>CANNOT claim input tax credit (ITC)</strong>.
                </p>
                <p>
                  <strong>Regular GST Scheme</strong> is the standard scheme
                  where businesses pay tax at applicable GST rates (5%, 12%, 18%,
                  28%), can{" "}
                  <strong>claim full ITC on purchases</strong>, can make{" "}
                  <strong>inter-state supplies</strong>, and must file{" "}
                  <strong>monthly returns (GSTR-1 and GSTR-3B)</strong>.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🔄 When Transition Is Required
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    You MUST transition from Composition to Regular scheme in
                    the following cases:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-6">
                    {[
                      "Aggregate turnover exceeds ₹1.5 crore in a financial year (mandatory transition from the date of crossing)",
                      "You make any inter-state supply of goods (composition is only for intra-state supplies)",
                      "You supply goods through e-commerce operators like Amazon/Flipkart (not allowed in composition)",
                      "You supply services (except restaurants) — composition for services has restrictions",
                      "You want to claim input tax credit (ITC) on purchases — composition dealers cannot avail ITC",
                      "You want to issue tax invoices and charge GST separately to customers (composition dealers cannot charge tax separately)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    💰 Benefits of Transitioning to Regular Scheme
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Claim full input tax credit (ITC) on purchases — reduces effective tax cost",
                      "Make inter-state supplies — expand business nationwide",
                      "Supply through e-commerce platforms — increase sales channels",
                      "Issue regular tax invoices — charge GST separately, looks more professional",
                      "Claim transitional stock credit (ITC-01) on existing inventory — recover tax paid during composition period",
                      "No turnover restriction — grow without worrying about ₹1.5 crore limit",
                      "Better working capital management through ITC setoff",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  Transition Timeline & Compliance
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    ⏰ Critical Deadlines
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <p className="font-bold text-orange-700 text-sm mb-2">
                        📅 For Mandatory Transition (Crossed Threshold)
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        If you cross ₹1.5 crore turnover or make inter-state
                        supply:
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • File Form GST CMP-04 (withdrawal) within{" "}
                          <strong>7 days</strong> of the event
                        </li>
                        <li>
                          • Transition effective from the{" "}
                          <strong>date of crossing threshold</strong>
                        </li>
                        <li>
                          • File final CMP-08 return for composition period
                        </li>
                        <li>
                          • Start filing monthly GSTR-1 and GSTR-3B from next
                          month
                        </li>
                        <li>
                          • File ITC-01 within <strong>30 days</strong> of
                          transition to claim stock credit
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <p className="font-bold text-orange-700 text-sm mb-2">
                        📅 For Voluntary Withdrawal (Your Choice)
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        If you voluntarily want to opt out of composition scheme:
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • File CMP-04{" "}
                          <strong>before the start of financial year</strong>{" "}
                          (before 1st April)
                        </li>
                        <li>
                          • Transition effective from{" "}
                          <strong>1st April of new FY</strong>
                        </li>
                        <li>• File last CMP-08 for the ending FY</li>
                        <li>
                          • Start regular return filing from 1st April onwards
                        </li>
                        <li>
                          • File ITC-01 within 30 days to claim stock credit
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📝 Forms Involved in Transition
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-xs mb-1">
                        Form GST CMP-04
                      </p>
                      <p className="text-xs text-gray-600">
                        Intimation to withdraw from composition scheme. Filed on
                        GST portal to inform department about transition.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-xs mb-1">
                        Form GST ITC-01
                      </p>
                      <p className="text-xs text-gray-600">
                        Declaration for claiming transitional credit on stock
                        (inventory) held at the time of transition. Critical for
                        recovering ITC on existing stock purchased during
                        composition period.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-xs mb-1">
                        Form GST CMP-08
                      </p>
                      <p className="text-xs text-gray-600">
                        Final quarterly return for composition scheme period
                        (covers last quarter before transition).
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-xs mb-1">
                        Form GSTR-1 & GSTR-3B
                      </p>
                      <p className="text-xs text-gray-600">
                        Monthly returns under regular scheme starting from the
                        month of transition (or next month).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    🚫 Consequences of Not Transitioning on Time
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Continued composition filing after crossing threshold = ILLEGAL — liable for full tax + interest + penalty",
                      "Miss ITC-01 deadline (30 days) = LOSE transitional stock credit — cannot claim ITC on existing inventory",
                      "Late CMP-04 filing = Late fee ₹100/day (₹50 CGST + ₹50 SGST) — max ₹5,000",
                      "Department may cancel GSTIN for non-compliance",
                      "Cannot issue proper tax invoices — customers may refuse to accept supplies",
                      "Lose input tax credit benefit on all purchases during delay period",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in GST scheme transitions — turnover analysis,
                  CMP-04 filing, ITC-01 stock credit maximization, and seamless
                  migration to regular scheme compliance across Uttar Pradesh,
                  Noida, Delhi NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* TRANSITION PROCESS */}
          <section id="transition-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Transition from Composition to Regular Scheme
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete transition process from Composition Scheme to Regular
                GST Scheme:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Eligibility Assessment & Turnover Review",
                    description:
                      "Verify whether you are eligible/required to transition: Check aggregate turnover for the financial year: Services → Returns → Track Return Status → Download GSTR-4A (auto-drafted composition return) — verify total turnover. If turnover > ₹1.5 crore (or ₹75 lakh for special category states), transition is MANDATORY. Identify the exact date when threshold was crossed (critical for determining effective date of transition). Check if you have made any inter-state supplies or supplies through e-commerce operators (automatic disqualification from composition). Review business plans: Do you want to claim ITC, expand inter-state, or scale up? If YES, voluntary transition is beneficial. Taxvio conducts detailed turnover analysis using your GST returns and advises on optimal transition timing.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "Stock Inventory Preparation (for ITC-01 Claim)",
                    description:
                      "Prepare a detailed physical stock statement as on the date of transition. This is CRITICAL for claiming transitional credit. Stock statement must include: (1) Description of goods (product name, HSN code), (2) Quantity in stock (in units/kg/liters as applicable), (3) Purchase invoice details (invoice number, date, supplier GSTIN), (4) Tax paid (CGST, SGST, IGST amounts as per invoices), (5) Total ITC eligible on stock. Stock should include: (a) Raw materials, semi-finished goods, finished goods held in inventory, (b) Capital goods (machinery, equipment) purchased during composition period and still in use. Note: Only stock purchased AFTER opting for composition and held on transition date is eligible. Stock should be supported by valid tax invoices with supplier GSTIN. We help you prepare a comprehensive stock statement with tax computation for maximum ITC recovery.",
                    duration: "3-5 days",
                  },
                  {
                    step: 3,
                    title: "Filing Form GST CMP-04 (Withdrawal Intimation)",
                    description:
                      "Log in to GST portal → Services → Registration → Application for Withdrawal from Composition Levy → New Application. Fill Form GST CMP-04: Part A - GSTIN, Business Name (auto-populated). Part B - Reason for Withdrawal: Select appropriate reason: 'Aggregate turnover exceeded prescribed limit' (if crossed ₹1.5 cr), 'Opting to pay tax under regular scheme' (if voluntary withdrawal), 'Commenced making inter-state outward supplies', 'Commenced making supplies through e-commerce operator'. Part C - Effective Date of Withdrawal: If mandatory (crossed threshold): Date of crossing turnover or date of inter-state supply. If voluntary: 1st April of the next financial year (must file before 31st March). Part D - Verification with DSC or EVC. Submit the form. Download acknowledgment (ARN - Application Reference Number). Portal auto-updates your registration status to 'Regular Taxpayer' from the effective date. Deadline: Within 7 days of crossing threshold (mandatory) OR before 31st March (voluntary).",
                    duration: "1 day",
                  },
                  {
                    step: 4,
                    title: "Filing Final CMP-08 Return (Composition Scheme)",
                    description:
                      "File the LAST quarterly return under composition scheme for the period up to the date of transition. Log in to GST portal → Services → Returns → Returns Dashboard → CMP-08. Select the quarter covering the transition date. Fill CMP-08: Table 4 - Outward supplies made during the quarter (intra-state supplies under composition). Table 5 - Tax payable at composition rate (1%, 2%, 5%, or 6% as applicable). Table 6 - Payment of tax (pay via challan if any tax liability). Submit with DSC/EVC. Note: If transition happens mid-quarter, file CMP-08 for the partial quarter (from quarter start till transition date). Example: Transition date is 15th August 2024 (in Q2: July-Sept). File CMP-08 for period 1st July to 15th August 2024. Pay composition tax for this period. From 16th August 2024, you are under regular scheme.",
                    duration: "1-2 days",
                  },
                  {
                    step: 5,
                    title: "Filing Form GST ITC-01 (Transitional Stock Credit)",
                    description:
                      "File Form GST ITC-01 to claim input tax credit on stock (inventory) held on the date of transition. This is a ONE-TIME benefit — claim ITC on all eligible stock purchased during composition period. Log in to GST portal → Services → Returns → ITC Forms → ITC-01. Fill ITC-01: Table 3 - Select reason: 'Switching over from composition levy to normal levy' (select this option). Table 4 - Details of inputs held in stock: For each item, enter: Description of goods, Quantity, Invoice number, date, supplier GSTIN, CGST amount, SGST amount, IGST amount, Total ITC claimed. Table 5 - Details of capital goods: Machinery/equipment purchased during composition period and still in use. ITC calculation formula: ITC on capital goods = (Tax paid) × (No. of quarters remaining) ÷ (Total quarters in 5 years = 20 quarters). Submit with supporting documents: Stock register/inventory statement, Purchase invoices for all claimed stock, Proof of possession (stock photos, godown records if required). Deadline: Within 30 DAYS of the date of transition. Missing this deadline = PERMANENT LOSS of transitional credit. Claimed ITC gets credited to your electronic credit ledger and can be used for paying tax in regular scheme returns.",
                    duration: "2-3 days",
                  },
                  {
                    step: 6,
                    title: "Amendment of GST Registration Details (if required)",
                    description:
                      "After transition to regular scheme, you may need to update registration details: Log in → Services → Registration → Amendment of Registration Core Fields / Non-Core Fields. Update: Business nature (if changed from retail to wholesale/manufacturing). Additional place of business (if expanding operations). Authorized signatory details (if new accountant/CA appointed). Bank account details (if changed). Submit amendment application with supporting documents. Approval timeline: 7-15 working days. Note: Registration certificate will be updated to reflect 'Regular Taxpayer' status (composition status removed).",
                    duration: "7-15 days (by department)",
                  },
                  {
                    step: 7,
                    title: "Start Filing Monthly Returns (GSTR-1 & GSTR-3B)",
                    description:
                      "From the month of transition (or next month if transition happens mid-month), you must file MONTHLY returns instead of quarterly CMP-08. Returns to file: (1) Form GSTR-1 (Outward Supplies): Details of all sales invoices (B2B, B2C), credit/debit notes, export invoices. Filing deadline: 11th of next month. (2) Form GSTR-3B (Summary Return + Tax Payment): Summary of sales, purchases, ITC claimed, tax payable. Payment of tax liability via challan (after adjusting ITC). Filing deadline: 20th of next month. Example timeline: Transition date: 15th August 2024. August 2024: File GSTR-3B for August (by 20th Sept), include sales from 16th-31st Aug only (composition sales from 1st-15th Aug already covered in final CMP-08). September 2024 onwards: File full-month GSTR-1 (by 11th Oct) and GSTR-3B (by 20th Oct). We provide monthly return filing support to ensure seamless compliance post-transition.",
                    duration: "Ongoing monthly",
                  },
                  {
                    step: 8,
                    title: "Issue Regular Tax Invoices (with GSTIN & GST)",
                    description:
                      "After transition, you can (and must) issue REGULAR TAX INVOICES charging GST separately. Invoice format changes: Mandatory fields: Your GSTIN, Invoice number (sequential), Date, Customer name, address, GSTIN (if B2B), Description of goods/services, Quantity, Unit price, Taxable value, GST rate (CGST %, SGST %, or IGST %), GST amount (tax charged), Total invoice value (including GST). Tax invoice format as per Rule 46 of CGST Rules. You can now charge GST separately and issue invoices showing tax breakup (earlier in composition, you could not charge tax separately). Your customers can claim ITC on your invoices (if they are registered for GST). We provide tax invoice templates and billing software guidance for regular scheme invoicing.",
                    duration: "Immediate",
                  },
                  {
                    step: 9,
                    title: "Update Accounting & Billing Software",
                    description:
                      "Update your accounting software/ERP to reflect transition to regular scheme: Change tax settings: Enable ITC accounting (record ITC on purchases in credit ledger). Enable GST rate-wise tax calculation (5%, 12%, 18%, 28%). Update invoice templates to show GSTIN and GST separately. Update stock management: Record opening stock (on transition date) with ITC claimed via ITC-01. Update purchase accounting: Record ITC on all purchases going forward. Train staff on new compliance requirements (monthly returns, tax invoice issuance, ITC reconciliation). We assist with software configuration and staff training for smooth transition.",
                    duration: "3-5 days",
                  },
                  {
                    step: 10,
                    title: "Post-Transition Compliance & ITC Reconciliation",
                    description:
                      "Maintain ongoing compliance under regular scheme: Monthly return filing (GSTR-1, GSTR-3B) by deadlines (11th and 20th). ITC reconciliation: Match GSTR-2B (auto-populated ITC from supplier invoices) with your purchase register. Claim only ELIGIBLE ITC (valid invoices, tax paid by supplier, goods/services received). Annual return filing: GSTR-9 (annual return) due by 31st December of next financial year. GST audit (if turnover > ₹5 crore): GSTR-9C (reconciliation statement + CA certificate) due by 31st December. Maintain proper books of accounts, tax invoices, e-way bills (for inter-state supplies > ₹50,000). Taxvio provides post-transition compliance support including monthly return filing, ITC reconciliation, and annual return preparation.",
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
                      <p className="text-sm text-gray-600">{item.description}</p>
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
                  <strong>7-10 days for complete transition filing</strong> (CMP-04,
                  ITC-01, final CMP-08). <strong>30-day deadline for ITC-01</strong>{" "}
                  (critical — cannot be extended). Monthly return filing starts from
                  the month of transition. Stock credit claimed via ITC-01 reflects in
                  electronic credit ledger within 2-3 days of filing and can be used
                  immediately for paying tax in GSTR-3B.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Composition to Regular Transition
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "GSTIN and GST registration certificate",
                    "Composition scheme enrollment details (CMP-02 form)",
                    "All GSTR-4 and CMP-08 returns filed during composition period",
                    "Turnover details for current financial year (sales invoices, cash memos)",
                    "Stock statement (detailed inventory as on transition date) — for ITC-01 claim",
                    "Purchase invoices for all stock items (with supplier GSTIN, tax details)",
                    "Stock register/inventory records (physical stock verification proof)",
                    "GST portal login credentials (for online filing of CMP-04, ITC-01)",
                    "Authorized signatory details (if CA/consultant is filing on your behalf)",
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
                  Supporting Documents (As Applicable)
                </p>
                <ul className="space-y-3">
                  {[
                    "Purchase register (ledger showing all purchases with tax details)",
                    "Sales register (all sales invoices for turnover verification)",
                    "Bank statements (showing purchase payments, GST tax payments)",
                    "Capital goods purchase invoices (machinery, equipment bought during composition)",
                    "Depreciation schedule (for capital goods ITC calculation)",
                    "Inter-state supply invoices (if applicable — proof of disqualification)",
                    "E-commerce platform sales data (Amazon/Flipkart invoices if applicable)",
                    "Previous year's GST annual return (GSTR-9) if filed",
                    "Business expansion documents (proof of new branches, increased operations — for voluntary transition)",
                    "Accountant/CA authorization letter (if professional is handling transition)",
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
          </section>

          {/* ITC-01 STOCK CREDIT */}
          <section id="stock-credit">
            <SectionLabel text="Maximize Your ITC" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Form GST ITC-01 — Transitional Stock Credit Claim
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                <strong>Form GST ITC-01</strong> allows you to claim INPUT TAX CREDIT
                on the closing stock (inventory) held on the date of transition from
                Composition to Regular scheme. This is a CRITICAL benefit — ensures
                you don't lose ITC on stock purchased during composition period.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-blue-200">
                  <p className="font-bold text-blue-800 mb-3 text-lg">
                    📊 Eligible Stock for ITC Claim
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Raw materials held in stock (not yet used in manufacturing)",
                      "Semi-finished goods (work-in-progress inventory)",
                      "Finished goods (ready for sale but not yet sold)",
                      "Packing materials, consumables held in stock",
                      "Capital goods (machinery, equipment, furniture, vehicles purchased during composition and still in use)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-blue-200">
                  <p className="font-bold text-blue-800 mb-3 text-lg">
                    🚫 Ineligible Stock (Cannot Claim ITC)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Stock purchased BEFORE opting for composition scheme",
                      "Stock purchased from unregistered suppliers (no GSTIN)",
                      "Stock already sold/used before transition date",
                      "Goods on which ITC is blocked (motor vehicles for personal use, food & beverages, membership fees, etc.)",
                      "Stock without valid tax invoices or proper documentation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-2xl p-6 border border-blue-300">
                <p className="font-bold text-blue-800 mb-3 text-lg">
                  💰 ITC Calculation Formula
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <p className="font-bold text-blue-700 text-sm mb-2">
                      For Inputs/Stock
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-blue-200 font-mono text-xs mb-2">
                      ITC = Total tax paid on stock<br />
                      (CGST + SGST + IGST as per invoices)
                    </div>
                    <p className="text-xs text-gray-600">
                      <strong>Example:</strong> Stock value ₹5 lakh + GST @18%
                      (₹45,000 CGST + ₹45,000 SGST)
                      <br />
                      <strong>ITC claim = ₹90,000</strong>
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <p className="font-bold text-blue-700 text-sm mb-2">
                      For Capital Goods
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-blue-200 font-mono text-xs mb-2">
                      ITC = (Tax paid) × (Remaining quarters) / 20
                    </div>
                    <p className="text-xs text-gray-600">
                      <strong>Example:</strong> Machinery bought 1 year ago (4
                      quarters passed, 16 quarters remaining out of 20)
                      <br />
                      Tax paid: ₹1,00,000
                      <br />
                      <strong>
                        ITC claim = ₹1,00,000 × 16/20 = ₹80,000
                      </strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                <p className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Critical Points for ITC-01 Filing
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "File ITC-01 within 30 DAYS of transition date — this deadline is STRICT and cannot be extended",
                    "Stock statement must be supported by valid tax invoices (with supplier GSTIN, invoice number, date, tax amount)",
                    "Physical stock verification is recommended — department may ask for proof of possession",
                    "ITC claim should match with your stock register and purchase invoices (reconciliation critical)",
                    "Capital goods ITC calculation should be accurate (quarters remaining out of 20 quarters in 5 years)",
                    "After filing ITC-01, claimed credit reflects in electronic credit ledger within 2-3 days",
                    "Claimed ITC can be used immediately for paying tax in GSTR-3B (offset against output tax liability)",
                    "Department may verify ITC-01 claims during audit — maintain all supporting documents for 6 years",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                <p className="font-bold text-green-800 mb-3">
                  📈 Taxvio's ITC-01 Optimization Service
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  We help you MAXIMIZE transitional stock credit through:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Comprehensive Stock Audit",
                      desc: "Physical verification of all inventory, reconciliation with purchase invoices, identification of eligible and ineligible stock.",
                    },
                    {
                      title: "ITC Calculation & Validation",
                      desc: "Accurate tax computation for each stock item, capital goods depreciation-based ITC calculation, cross-verification with GST rates and invoices.",
                    },
                    {
                      title: "Invoice Matching & Documentation",
                      desc: "Matching stock items with purchase invoices, verifying supplier GSTIN and tax payment, preparing invoice-wise ITC claim sheet.",
                    },
                    {
                      title: "ITC-01 Filing & Credit Monitoring",
                      desc: "Online filing of ITC-01 with complete supporting documents, tracking credit ledger update (claimed ITC reflection), advice on utilizing ITC in GSTR-3B.",
                    },
                  ].map((service) => (
                    <div
                      key={service.title}
                      className="bg-white rounded-xl p-4 border border-green-200"
                    >
                      <p className="font-bold text-green-700 text-xs mb-1">
                        {service.title}
                      </p>
                      <p className="text-xs text-gray-600">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Avoid These Errors" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Mistakes in Composition to Regular Transition
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Transition errors can lead to loss of ITC, penalties, and compliance
                issues. Here are critical mistakes to avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Missing the 30-Day ITC-01 Deadline",
                    icon: "⏰",
                    problem:
                      "Not filing ITC-01 within 30 days of transition date. This is the MOST COMMON and COSTLIEST mistake. Missing this deadline = PERMANENT LOSS of transitional stock credit. You cannot claim ITC on existing inventory, resulting in loss of lakhs of rupees (depending on stock value).",
                    solution:
                      "Mark transition date on calendar immediately after filing CMP-04. Set multiple reminders for ITC-01 filing (at 15 days, 25 days, 28 days). Prepare stock statement in advance (start immediately after transition decision). File ITC-01 at least 2-3 days before the 30-day deadline to avoid last-minute technical issues. Taxvio provides deadline tracking and timely filing support to ensure you don't miss ITC-01.",
                  },
                  {
                    mistake: "Incorrect Stock Valuation & ITC Calculation",
                    icon: "💰",
                    problem:
                      "Claiming ITC on stock without proper invoices or wrong tax calculation (claiming GST on exempt goods, claiming ITC on blocked items like motor vehicles, wrong capital goods depreciation formula). Department may reject ITC claim during audit and raise demand with penalty.",
                    solution:
                      "Prepare invoice-wise stock statement with tax details (CGST, SGST, IGST). Claim ITC only on eligible stock (with valid tax invoices from registered suppliers). For capital goods, use correct formula: ITC = (Tax paid) × (Remaining quarters) / 20. Cross-verify tax rates with HSN code and GST rate schedule. Hire CA/expert for stock audit and ITC validation before filing ITC-01.",
                  },
                  {
                    mistake: "Late CMP-04 Filing After Crossing Turnover",
                    icon: "📋",
                    problem:
                      "Continuing composition scheme after crossing ₹1.5 crore turnover without filing CMP-04 within 7 days. This is illegal — you are liable to pay tax at REGULAR RATES (not composition rates) from the date of crossing threshold + interest + penalty. Department may issue SCN and raise demand for differential tax.",
                    solution:
                      "Monitor aggregate turnover regularly (check GSTR-4A auto-draft every quarter). As soon as turnover crosses ₹1.5 crore (or you make inter-state supply), file CMP-04 within 7 DAYS. Don't wait for end of quarter/year — transition is effective from the DATE of crossing, not end of period. Taxvio provides turnover monitoring and alerts to ensure timely CMP-04 filing.",
                  },
                  {
                    mistake: "Not Filing Final CMP-08 Return",
                    icon: "📝",
                    problem:
                      "Forgetting to file final CMP-08 return for the composition period up to transition date. This leaves composition period non-compliant and GSTIN may show 'return pending' status. Late fee accrues (₹100/day), and may lead to SCN for non-filing.",
                    solution:
                      "After filing CMP-04, immediately file final CMP-08 for the quarter (or partial quarter) up to transition date. Pay any composition tax liability for this period via challan. Download CMP-08 acknowledgment and keep for records. Only after final CMP-08 is filed, your transition is COMPLETE and you can start regular scheme filing.",
                  },
                  {
                    mistake: "Claiming ITC on Ineligible Stock",
                    icon: "🚫",
                    problem:
                      "Claiming ITC on: Stock purchased before composition period, Stock without invoices or from unregistered suppliers, Blocked credit items (personal use goods, club memberships, etc.), Stock already sold/consumed before transition. Department will disallow ITC and raise demand + 18% interest + 100% penalty.",
                    solution:
                      "Claim ITC ONLY on stock purchased DURING composition period and held ON transition date. Ensure all stock items have valid tax invoices with supplier GSTIN. Exclude blocked credit items (motor vehicles for directors, food & beverages, etc.). Maintain physical stock register to prove possession on transition date. Taxvio conducts detailed stock eligibility audit before ITC-01 filing.",
                  },
                  {
                    mistake: "Not Updating Invoicing After Transition",
                    icon: "📄",
                    problem:
                      "Continuing to issue composition-style invoices (without GST breakup) after transition to regular scheme. This is non-compliant — regular taxpayers MUST issue tax invoices with GST charged separately. Your customers cannot claim ITC on such invoices, leading to business loss.",
                    solution:
                      "Immediately after transition, update invoice format to regular tax invoice: Show your GSTIN prominently, Add customer GSTIN (for B2B), Show tax breakup (CGST %, SGST %, IGST %), Mention 'Tax Invoice' heading, Serial numbering as per Rule 46. Train billing staff on new invoice format. Update accounting/billing software to generate compliant tax invoices.",
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
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's Composition to Regular Transition Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From turnover analysis to ITC-01 filing and post-transition
              compliance — we ensure a smooth, compliant, and ITC-optimized
              transition to regular GST scheme.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📊",
                  title: "Transition Eligibility Assessment",
                  desc: "Detailed turnover analysis to verify if you have crossed ₹1.5 crore limit or made disqualifying supplies (inter-state, e-commerce). Feasibility study for voluntary transition based on business growth plans and ITC benefit analysis.",
                  price: "₹1,999",
                },
                {
                  icon: "🔄",
                  title: "Complete Transition Filing (Standard Package)",
                  desc: "Form GST CMP-04 withdrawal filing on portal. Final CMP-08 return filing for composition period. Stock statement preparation and ITC computation. Form GST ITC-01 filing for transitional stock credit. Registration amendment (if required). Acknowledgment download and tracking.",
                  price: "₹4,999",
                },
                {
                  icon: "💰",
                  title: "ITC-01 Stock Credit Optimization",
                  desc: "Physical stock verification and inventory audit. Invoice-wise ITC calculation with tax validation. Eligible vs ineligible stock segregation. Capital goods depreciation-based ITC computation. ITC-01 form filing with comprehensive supporting documentation.",
                  price: "₹2,999",
                },
                {
                  icon: "📋",
                  title: "CMP-04 Withdrawal Filing Only",
                  desc: "Standalone service for filing Form GST CMP-04 on the portal with correct effective date, reason selection, and verification. Includes acknowledgment download and portal status tracking.",
                  price: "₹999",
                },
                {
                  icon: "📝",
                  title: "Final CMP-08 Return Filing",
                  desc: "Preparation and filing of last quarterly composition return (CMP-08) for the period up to transition date. Tax liability calculation and payment via challan. Acknowledgment and compliance certificate.",
                  price: "₹1,499",
                },
                {
                  icon: "📄",
                  title: "Regular Return Filing Support (1 Month)",
                  desc: "First-month GSTR-1 and GSTR-3B filing support after transition. Guidance on tax invoice issuance, ITC claim, and tax payment. Transition period handholding and query resolution.",
                  price: "₹2,999",
                },
                {
                  icon: "📊",
                  title: "High-Value Transition (Stock >₹10 Lakh)",
                  desc: "For businesses with large inventory (stock value >₹10 lakh, ITC claim >₹1.5 lakh). Includes: Comprehensive stock audit, invoice matching and validation, ITC-01 filing with detailed documentation, department query handling, post-filing compliance support.",
                  price: "₹14,999",
                },
                {
                  icon: "🏢",
                  title: "Annual Compliance Post-Transition (12 Months)",
                  desc: "Complete GST compliance for first year after transition. Monthly GSTR-1 and GSTR-3B filing (12 months). ITC reconciliation with GSTR-2B. Annual return GSTR-9 filing. GST health checkup and advisory.",
                  price: "₹29,999/year",
                },
                {
                  icon: "🎓",
                  title: "Staff Training & Software Setup",
                  desc: "Training for your accounts team on regular scheme compliance (tax invoice issuance, ITC accounting, return filing). Accounting/billing software configuration for regular GST scheme. Invoice template creation and billing process setup.",
                  price: "₹3,999",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <p className="text-lg font-bold text-[#00416a]">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <p className="font-bold text-green-800 mb-3">
                📦 Transition Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic (Stock <₹5 Lakh)",
                    price: "₹4,999",
                    includes: [
                      "Eligibility review",
                      "CMP-04 + CMP-08 filing",
                      "Basic ITC-01 (up to 20 items)",
                      "Email support",
                    ],
                  },
                  {
                    package: "Standard (Stock ₹5-10 Lakh)",
                    price: "₹7,999",
                    includes: [
                      "Everything in Basic",
                      "Stock audit & ITC optimization",
                      "ITC-01 (up to 50 items)",
                      "1-month return support",
                      "Phone support",
                    ],
                  },
                  {
                    package: "Premium (Stock >₹10 Lakh)",
                    price: "₹14,999",
                    includes: [
                      "Everything in Standard",
                      "Comprehensive stock audit",
                      "Unlimited ITC-01 items",
                      "3-month return support",
                      "Priority WhatsApp support",
                    ],
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.package}
                    className="bg-white rounded-xl p-5 border border-green-300"
                  >
                    <p className="font-bold text-green-800 mb-1">{pkg.package}</p>
                    <p className="text-2xl font-extrabold text-[#00416a] mb-3">
                      {pkg.price}
                    </p>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-green-600 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Our Transition Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Traders",
                  location: "Muzaffarnagar",
                  text: "Our turnover crossed ₹1.5 crore in July 2024. Taxvio filed CMP-04 within 3 days, prepared stock statement for ₹8 lakh inventory, and claimed ₹1.44 lakh ITC via ITC-01. Entire transition was completed in 5 days. We are now filing monthly returns smoothly. Excellent support!",
                },
                {
                  name: "Gupta Electronics",
                  location: "Noida",
                  text: "We voluntarily opted out of composition to claim ITC on purchases (high input cost business). Taxvio conducted stock audit, identified eligible inventory of ₹12 lakh, and filed ITC-01 claiming ₹2.16 lakh credit. The credit was reflected in our ledger within 2 days and we used it in our first GSTR-3B. Great service!",
                },
                {
                  name: "Sharma Manufacturing",
                  location: "Meerut",
                  text: "We were under composition but wanted to expand to other states. Taxvio handled complete transition — CMP-04 filing, final CMP-08, ITC-01 for machinery (capital goods), and staff training on regular scheme invoicing. They also filed our first 3 months' returns. Very professional team.",
                },
              ].map((r, i) => (
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
                    "{r.text}"
                  </p>
                  <p className="font-bold text-[#00416a]">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Our Reach" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Composition to Regular Transition Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GST Composition to Regular Scheme transition services
              (CMP-04 filing, ITC-01 stock credit claim, return transition support)
              for businesses across <strong>Noida</strong>,{" "}
              <strong>Delhi NCR</strong>, <strong>Meerut</strong>,{" "}
              <strong>Ghaziabad</strong>, <strong>Mumbai</strong>, and pan-India
              online.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Noida",
                "Delhi NCR",
                "Meerut",
                "Mumbai",
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
            <SectionLabel text="Explore More" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Related GST Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "GST Registration",
                  icon: "📝",
                  link: "/serviceslist/gst/gst-registration",
                  desc: "New GST registration for businesses.",
                },
                {
                  title: "GST Return Filing",
                  icon: "📊",
                  link: "/serviceslist/gst/gst-return-filing",
                  desc: "Monthly/quarterly GST return filing.",
                },
                {
                  title: "GST Annual Return",
                  icon: "📅",
                  link: "/serviceslist/gst/gst-annual-return",
                  desc: "GSTR-9 annual return filing.",
                },
                {
                  title: "ITC Reconciliation",
                  icon: "🔍",
                  link: "/serviceslist/gst/itc-reconciliation",
                  desc: "Input tax credit matching & reconciliation.",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
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
                    Grow Without Limits
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Transition to Regular GST & Unlock ITC Benefits
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Crossed ₹1.5 crore turnover or planning to expand? Transition
                    from Composition to Regular GST Scheme with expert support.
                    Taxvio handles CMP-04 withdrawal, ITC-01 stock credit claim,
                    return transition, and post-transition compliance. Maximize your
                    input tax credit recovery and ensure seamless migration.
                    Starting ₹4,999. Don't lose ITC on existing stock — file ITC-01
                    within 30 days!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Start Transition — ₹4,999
                  </Link>
                  
                </div>
              </div>
            </div>
          </section>
        </article>
        <InquiryFormButton />
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
      q: "Can I voluntarily opt out of composition scheme even if turnover is below ₹1.5 crore?",
      a: "Yes, absolutely. You can VOLUNTARILY opt out of composition scheme at any time, even if your turnover is below ₹1.5 crore. Common reasons for voluntary withdrawal: (1) You want to claim input tax credit (ITC) on purchases — composition dealers cannot avail ITC, (2) You want to make inter-state supplies to expand business nationwide, (3) You want to supply through e-commerce platforms (not allowed in composition), (4) Your input cost is high and claiming ITC will reduce effective tax burden. Process: File Form GST CMP-04 BEFORE the start of the financial year (before 1st April). Effective date: 1st April of the new financial year. You cannot opt out mid-year for voluntary withdrawal (only at FY start).",
    },
    {
      q: "What happens if I miss the 30-day ITC-01 filing deadline?",
      a: "Unfortunately, if you miss the 30-day deadline to file Form GST ITC-01 after transition, you LOSE the right to claim transitional stock credit PERMANENTLY. There is NO provision to condone delay or file ITC-01 late. The law (Rule 40(1) of CGST Rules) clearly specifies 30 days from the date of becoming eligible to avail ITC (transition date). Missing this deadline means: You cannot claim ITC on stock purchased during composition period. The tax paid on existing inventory becomes your COST (cannot be recovered). This can result in loss of lakhs of rupees (depending on stock value). Only remedy: Challenge via writ petition in High Court (expensive and time-consuming, with no guarantee). This is why timely ITC-01 filing is CRITICAL — we strongly recommend filing at least 3-5 days before the deadline.",
    },
    {
      q: "Can I claim ITC on stock purchased before I opted for composition scheme?",
      a: "NO. You can claim ITC ONLY on stock purchased DURING composition scheme period and held on the transition date. Stock purchased BEFORE opting for composition is NOT eligible for transitional credit. Example timeline: 1st Jan 2023: You opted for composition scheme (filed CMP-02). 15th July 2024: You transition to regular scheme (filed CMP-04). Eligible stock for ITC-01: Goods purchased between 1st Jan 2023 and 15th July 2024 (composition period) and still in stock on 15th July 2024. Ineligible stock: Goods purchased before 1st Jan 2023 (before composition period started). Rationale: Before composition, you were either under regular scheme (already claimed ITC) or unregistered (not eligible for ITC). Transitional credit is only for stock on which you COULD NOT claim ITC during composition period.",
    },
    {
      q: "Do I need to pay any fee or tax while filing CMP-04 withdrawal form?",
      a: "NO. Filing Form GST CMP-04 (withdrawal from composition scheme) is FREE — no fee or tax payment is required. It is a simple intimation form to inform the GST department about your transition. However, late fee may apply in the following cases: If you are filing CMP-04 LATE (beyond 7 days of mandatory transition event like crossing turnover), late fee = ₹100/day (₹50 CGST + ₹50 SGST), maximum ₹5,000. Also, you must file the final CMP-08 return for composition period and pay any tax liability for that period via challan (if applicable). After CMP-04 filing, no composition tax is payable — you switch to regular scheme and start paying tax at regular rates.",
    },
    {
      q: "Can I switch back to composition scheme after transitioning to regular scheme?",
      a: "Yes, you CAN switch back to composition scheme from regular scheme, BUT only under certain conditions: (1) Your aggregate turnover should be BELOW ₹1.5 crore (₹75 lakh for special category states) in the previous financial year, (2) You should not be making inter-state supplies, (3) You should not be supplying through e-commerce operators, (4) You must not be in the business of ice cream, pan masala, or tobacco (composition not allowed for these), (5) You should not be a casual/non-resident taxable person. Process: File Form GST CMP-02 (intimation to opt for composition) BEFORE the start of the financial year (before 1st April) OR within 30 days of GST registration (for new registrations). Effective date: 1st April of the new financial year. Note: Switching frequently between composition and regular scheme is NOT recommended — plan carefully based on long-term business needs.",
    },
    {
      q: "Will I get any notice or verification from GST department after filing ITC-01?",
      a: "The GST department MAY conduct post-audit verification of your ITC-01 claim, especially if the claimed credit amount is large (>₹1 lakh). Possible verification actions: (1) Notice asking for supporting documents: Stock register, physical stock proof, purchase invoices, supplier GSTIN verification, (2) Physical inspection of business premises to verify stock existence, (3) Cross-verification with supplier GSTR-1 data (whether supplier reported the invoices you are claiming ITC on). If department finds discrepancies (ITC claimed on ineligible stock, invoices not matching with supplier data, fake invoices, etc.), they may: Disallow ITC claim, Raise demand for wrongly claimed ITC + 18% interest, Impose 100% penalty, Initiate prosecution (in case of fraud). To avoid issues: Claim ITC only on genuine stock with valid invoices, Maintain proper stock register and physical verification records, Ensure supplier has filed GSTR-1 for the invoices you are claiming, Keep all supporting documents ready for 6 years (audit period). Taxvio provides post-ITC-01 notice handling and documentation support.",
    },
    {
      q: "Can Taxvio handle the entire transition process remotely (online)?",
      a: "Yes, absolutely. Taxvio provides COMPLETE online/remote transition services for clients across India. Our process: (1) Initial Consultation: WhatsApp/call to understand your turnover, business type, stock details, (2) Document Collection: Share GSTIN, composition returns, stock statement, invoices via email/WhatsApp, (3) Turnover & Eligibility Analysis: We verify threshold crossing date and transition requirement, (4) Stock Audit: You share stock photos, register, invoices — we prepare ITC computation sheet, (5) Online Portal Filing: We file CMP-04, CMP-08, ITC-01 using your GST portal login (or via DSC/EVC), (6) Acknowledgment Sharing: All ARNs, receipts, filed forms shared via email/WhatsApp, (7) Post-Transition Support: Guidance on regular return filing, invoice format, ITC reconciliation. Physical presence is NOT required — entire transition can be done remotely. We serve clients across Uttar Pradesh, Delhi NCR, Maharashtra, and nationwide online.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Composition to Regular Transition
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