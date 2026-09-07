// app/serviceslist/gst-services/gst-composition-scheme/GSTCompositionSchemeClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Composition Scheme Registration & Advisory - CMP-02, CMP-08, GSTR-4 Filing",
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
    "Complete GST Composition Scheme registration and compliance services for small businesses with turnover under ₹1.5 crore. Eligibility assessment, CMP-02 application filing, quarterly CMP-08 payment, annual GSTR-4 filing, rate advisory (1%, 2%, 5%, 6%). Ideal for traders, manufacturers, restaurants. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "GST Composition Scheme Registration & Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
      maxPrice: "9999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the GST Composition Scheme and who is eligible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The GST Composition Scheme is an optional scheme for small taxpayers with annual aggregate turnover up to ₹1.5 crore (₹75 lakh for special category states), allowing them to pay GST at a lower flat rate on turnover instead of the regular GST rates. Eligible businesses include traders, manufacturers, and restaurants (excluding suppliers of exempt goods, inter-state suppliers, e-commerce sellers, and certain service providers).",
      },
    },
    {
      "@type": "Question",
      name: "What are the GST rates under the Composition Scheme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Composition Scheme tax rates are: 1% for manufacturers and traders (0.5% CGST + 0.5% SGST), 5% for restaurants not serving alcohol (2.5% CGST + 2.5% SGST), 6% for other eligible suppliers (3% CGST + 3% SGST). These rates are applied on the total turnover, not on individual transactions.",
      },
    },
    {
      "@type": "Question",
      name: "Can I claim Input Tax Credit (ITC) under the Composition Scheme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Composition taxpayers CANNOT claim Input Tax Credit (ITC) on purchases. This is a major restriction of the scheme. Additionally, composition dealers cannot collect tax from customers — they must absorb the GST in their selling price and mention 'composition taxable person, not eligible to collect tax on supplies' on all invoices.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTCompositionSchemeClient() {
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
          💼 Small Business? Reduce GST to 1% & File Quarterly — Register Under Composition Scheme Today
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
                href="/serviceslist/gst-services"
                className="hover:text-white transition"
              >
                GST Services
              </Link>
              <span>/</span>
              <span className="text-white">GST Composition Scheme</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📊 Simplified GST Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Composition
                  <br />
                  <span className="text-[#7ecbf0]">Scheme Registration</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Running a <strong className="text-white">small business</strong>{" "}
                  with turnover under{" "}
                  <strong className="text-white">₹1.5 crore</strong>? The{" "}
                  <strong className="text-white">GST Composition Scheme</strong>{" "}
                  lets you pay GST at just{" "}
                  <strong className="text-white">1%, 5%, or 6%</strong> on total
                  turnover — instead of regular 5%, 12%, 18%, or 28% on each sale.
                  File returns{" "}
                  <strong className="text-white">
                    quarterly (CMP-08) + one annual (GSTR-4)
                  </strong>{" "}
                  — no monthly hassle. <strong className="text-white">Taxvio</strong>{" "}
                  provides complete eligibility check, CMP-02 registration,
                  quarterly compliance, and year-round advisory.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Register Now — ₹2,999 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20want%20to%20register%20under%20GST%20Composition%20Scheme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Pay 1% GST Only",
                    "✅ Quarterly Filing",
                    "✅ Lower Compliance",
                    "✅ Ideal for Traders",
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
                    ["💰", "Turnover limit: ₹1.5 crore/year"],
                    ["📉", "Tax rate: 1% (traders), 5% (restaurants)"],
                    ["📅", "Quarterly CMP-08 + Annual GSTR-4"],
                    ["❌", "No Input Tax Credit (ITC)"],
                    ["🚫", "No inter-state supply allowed"],
                    ["🚀", "Registration fee: ₹2,999 onwards"],
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
              { number: "1,000+", label: "Businesses Registered", icon: "✅" },
              { number: "1%", label: "Tax for Traders", icon: "📉" },
              { number: "Quarterly", label: "Return Frequency", icon: "📅" },
              { number: "₹2,999", label: "Starting Fee", icon: "💰" },
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
              "✔ Eligibility Experts",
              "✔ CMP-02 Filing",
              "✔ Quarterly CMP-08",
              "✔ Annual GSTR-4",
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
          {/* WHAT IS COMPOSITION SCHEME */}
          <section id="what-is-scheme">
            <SectionLabel text="Understanding the Scheme" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is the GST Composition Scheme?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  The <strong>GST Composition Scheme</strong> is a simplified tax
                  scheme introduced under Section 10 of the CGST Act, 2017,
                  designed for <strong>small taxpayers</strong> with annual
                  aggregate turnover up to{" "}
                  <strong>₹1.5 crore</strong> (₹75 lakh for special category
                  states like Arunachal Pradesh, Manipur, Meghalaya, Mizoram,
                  Nagaland, Sikkim, Tripura, Uttarakhand).
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    ✅ Key Benefits
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Lower GST rates: 1%, 5%, or 6% (vs. regular 5%-28%)",
                      "Pay tax on total turnover, not on individual invoices",
                      "Quarterly return filing (CMP-08) instead of monthly GSTR-1/GSTR-3B",
                      "One annual return (GSTR-4) instead of 12 monthly returns",
                      "Reduced compliance burden — no detailed invoice-wise reporting",
                      "Lower tax liability for businesses with low margins",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Restrictions
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "CANNOT claim Input Tax Credit (ITC) on purchases",
                      "CANNOT make inter-state supplies (only intra-state)",
                      "CANNOT supply goods through e-commerce platforms (Amazon, Flipkart)",
                      "CANNOT issue tax invoices — must mention 'composition taxable person' on bills",
                      "CANNOT collect tax from customers — GST must be absorbed in price",
                      "If turnover exceeds ₹1.5 crore, must migrate to regular scheme",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  Who Should Opt for Composition Scheme?
                </p>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    💡 Ideal For
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Small traders and retailers (kirana stores, general merchants)",
                      "Manufacturers with turnover under ₹1.5 crore",
                      "Restaurants and small eateries (not serving alcohol)",
                      "Businesses selling mostly to end consumers (B2C)",
                      "Traders with low profit margins where ITC is not critical",
                      "First-time GST registrants wanting simple compliance",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-bold text-[#00416a]">
                  Who Should NOT Opt for Composition Scheme?
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    ❌ Not Suitable For
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Businesses heavily reliant on ITC (e.g., selling to B2B clients who need tax invoices)",
                      "Exporters (composition dealers cannot export)",
                      "Inter-state suppliers (cannot supply outside the state)",
                      "E-commerce sellers (Amazon, Flipkart, Meesho)",
                      "Suppliers of exempt goods (ice cream, pan masala, tobacco)",
                      "Service providers (except restaurants) — most services not eligible",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  provides expert eligibility assessment, cost-benefit analysis
                  (composition vs. regular), and complete registration support for
                  businesses across Uttar Pradesh, Noida, Delhi NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* TAX RATES */}
          <section id="tax-rates">
            <SectionLabel text="GST Rates" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Composition Scheme Tax Rates
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Tax rates under the Composition Scheme are <strong>flat rates on total turnover</strong>, not on individual transactions. Here's the breakdown:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#00416a] text-white">
                    <th className="px-4 py-4 text-left text-sm font-bold">
                      Category of Supplier
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-bold">
                      CGST Rate
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-bold">
                      SGST/UTGST Rate
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-bold">
                      Total GST
                    </th>
                    <th className="px-4 py-4 text-left text-sm font-bold">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      category: "Manufacturers",
                      cgst: "0.5%",
                      sgst: "0.5%",
                      total: "1%",
                      example:
                        "Turnover ₹50 lakh → Tax ₹50,000 (1% of ₹50L)",
                    },
                    {
                      category: "Traders / Dealers",
                      cgst: "0.5%",
                      sgst: "0.5%",
                      total: "1%",
                      example:
                        "Turnover ₹1 crore → Tax ₹1,00,000 (1% of ₹1Cr)",
                    },
                    {
                      category: "Restaurants (not serving alcohol)",
                      cgst: "2.5%",
                      sgst: "2.5%",
                      total: "5%",
                      example:
                        "Turnover ₹80 lakh → Tax ₹4,00,000 (5% of ₹80L)",
                    },
                    {
                      category: "Other Suppliers (mixed supplies)",
                      cgst: "3%",
                      sgst: "3%",
                      total: "6%",
                      example:
                        "Turnover ₹60 lakh → Tax ₹3,60,000 (6% of ₹60L)",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.category}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-4 text-sm font-semibold text-gray-800 border-b">
                        {row.category}
                      </td>
                      <td className="px-4 py-4 text-sm text-blue-700 font-medium border-b">
                        {row.cgst}
                      </td>
                      <td className="px-4 py-4 text-sm text-blue-700 font-medium border-b">
                        {row.sgst}
                      </td>
                      <td className="px-4 py-4 text-sm text-green-700 font-bold border-b">
                        {row.total}
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-600 border-b">
                        {row.example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
              <p className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <span className="text-xl">💡</span>
                Important Notes
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Tax is calculated on TOTAL TURNOVER, not on taxable value of individual invoices",
                  "For restaurants, if alcohol is served, you CANNOT opt for composition scheme — must go for regular GST",
                  "If you supply both goods and services (mixed), you fall under 'other suppliers' at 6%",
                  "From FY 2019-20, manufacturers and traders can also provide services up to ₹5 lakh per FY without affecting composition eligibility",
                  "Special category states (NE states, Himachal Pradesh, J&K, Uttarakhand) have a turnover limit of ₹75 lakh (not ₹1.5 crore)",
                ].map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-0.5">→</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ELIGIBILITY */}
          <section id="eligibility">
            <SectionLabel text="Eligibility Criteria" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              GST Composition Scheme Eligibility
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                To be eligible for the Composition Scheme, ALL of the following
                conditions must be satisfied:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">
                    ✅ Who Can Register
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        condition: "Turnover Limit",
                        desc: "Annual aggregate turnover in the preceding financial year should NOT exceed ₹1.5 crore (₹75 lakh for special category states). Aggregate turnover includes turnover from ALL GSTINs across India.",
                      },
                      {
                        condition: "Intra-State Supplies Only",
                        desc: "You should make supplies ONLY within your state (intra-state). No inter-state supply is allowed under composition scheme.",
                      },
                      {
                        condition: "No E-Commerce Supply",
                        desc: "You should NOT supply goods through e-commerce operators like Amazon, Flipkart, or any other online marketplace.",
                      },
                      {
                        condition: "Registered Person",
                        desc: "You must be a person registered or liable to be registered under GST. Casual taxable persons and non-resident taxable persons are NOT eligible.",
                      },
                      {
                        condition: "Not Supplying Exempt Goods",
                        desc: "You should NOT be engaged in the supply of goods that are not leviable to tax under GST (like alcoholic liquor for human consumption).",
                      },
                      {
                        condition: "Not an Ice Cream / Pan Masala Manufacturer",
                        desc: "Manufacturers of ice cream, pan masala, or tobacco products are specifically EXCLUDED from composition scheme.",
                      },
                    ].map((item) => (
                      <div
                        key={item.condition}
                        className="bg-purple-50 rounded-xl p-4 border border-purple-200"
                      >
                        <p className="font-bold text-purple-800 text-sm mb-2">
                          {item.condition}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">
                    ❌ Who CANNOT Register
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Service providers (except restaurants)",
                      "Persons making inter-state outward supplies",
                      "Suppliers through e-commerce operators (Amazon, Flipkart)",
                      "Manufacturers of ice cream, pan masala, tobacco",
                      "Casual taxable persons and non-resident taxable persons",
                      "Persons supplying goods not leviable to tax (exempt goods)",
                      "Existing taxpayers who have claimed ITC in the current FY (must reverse ITC before opting)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">
                    🔄 Switching from Regular to Composition
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    If you are currently under the regular GST scheme and want to
                    switch to composition, you can do so at the beginning of a
                    financial year (1 April) by filing <strong>Form GST CMP-02</strong>{" "}
                    BEFORE the commencement of the FY.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <p className="font-bold text-purple-800 text-xs mb-2">
                      ⚠️ Important
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • You must reverse ALL Input Tax Credit (ITC) availed before
                        switching
                      </li>
                      <li>
                        • File Form ITC-03 to declare stock and ITC reversal
                      </li>
                      <li>
                        • Once switched, you cannot go back to regular in the same FY
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* REGISTRATION PROCESS */}
          <section id="registration-process">
            <SectionLabel text="Registration Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Register Under GST Composition Scheme
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Composition scheme can be opted for at the time of new GST
                registration OR by an existing taxpayer at the beginning of a
                financial year. Here's the complete process:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Eligibility Assessment by Taxvio",
                    description:
                      "We analyze your business type, turnover (previous FY), nature of supplies (intra-state vs. inter-state), e-commerce involvement, and ITC dependency. We determine if composition scheme is beneficial compared to regular GST and provide a written advisory.",
                    duration: "1 day",
                  },
                  {
                    step: 2,
                    title: "Document Collection",
                    description:
                      "We collect all required documents: PAN card, Aadhaar card, business registration proof (if any), address proof of principal place of business, bank account details, photograph of proprietor/partners/directors, previous year's turnover details (GST returns or books of accounts), and details of all existing GSTINs (if any).",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Filing Form GST CMP-02 (Intimation for Composition)",
                    description:
                      "For NEW registrations: We tick the composition option in Part B of Form GST REG-01 (GST registration application) and submit GST CMP-02 along with it. For EXISTING taxpayers: We file Form GST CMP-02 on the GST portal BEFORE the beginning of the financial year (usually by 31 March for next FY starting 1 April).",
                    duration: "1 day",
                  },
                  {
                    step: 4,
                    title: "ITC Reversal (if switching from Regular to Composition)",
                    description:
                      "If you are an existing regular taxpayer opting for composition, we file Form ITC-03 to declare stock on hand and reverse all accumulated Input Tax Credit. Payment of reversed ITC is made via DRC-03 challan.",
                    duration: "2-3 days",
                  },
                  {
                    step: 5,
                    title: "Composition Certificate Issuance",
                    description:
                      "Once CMP-02 is accepted, the GST portal issues a certificate of registration under composition scheme. Your GSTIN remains the same, but your registration status shows 'Composition Taxable Person'.",
                    duration: "Immediate (for new reg) / 7 days (for existing)",
                  },
                  {
                    step: 6,
                    title: "Display of Composition Status",
                    description:
                      "You must display a notice at your principal place of business: 'Composition Taxable Person, not eligible to collect tax on supplies' (as per Rule 58A). We provide a ready-to-print notice board template.",
                    duration: "Immediate",
                  },
                  {
                    step: 7,
                    title: "First CMP-08 Filing (Quarterly Return + Payment)",
                    description:
                      "We guide you to file your first CMP-08 return for the quarter (Q1: Apr-Jun, Q2: Jul-Sep, Q3: Oct-Dec, Q4: Jan-Mar) within 18 days of quarter-end. We calculate tax liability on turnover and facilitate payment via PMT-06 challan.",
                    duration: "Every quarter",
                  },
                  {
                    step: 8,
                    title: "Annual GSTR-4 Filing",
                    description:
                      "At the end of the financial year, we file GSTR-4 (Annual Return for composition dealers) by 30 April of the following FY. This consolidates all quarterly CMP-08 returns and includes reconciliation of tax paid vs. actual turnover.",
                    duration: "Once a year (by 30 April)",
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
                  <strong>New registration: 3-7 days</strong> from document
                  submission to composition certificate. <strong>Existing taxpayer
                  switching: 7-10 days</strong> including ITC reversal and CMP-02
                  approval.
                </p>
              </div>
            </div>
          </section>

          {/* COMPLIANCE */}
          <section id="compliance">
            <SectionLabel text="Ongoing Compliance" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Composition Scheme Compliance Requirements
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Composition taxpayers have significantly reduced compliance burden
                compared to regular taxpayers. Here's what you need to do:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    compliance: "Quarterly CMP-08 Filing & Payment",
                    frequency: "Every Quarter (Q1-Q4)",
                    deadline: "18th of month after quarter-end",
                    desc: "Pay tax on turnover for the quarter via challan PMT-06 and file Form CMP-08 (statement of quarterly turnover and tax paid). For example, for Q1 (Apr-Jun), file by 18 July.",
                  },
                  {
                    compliance: "Annual GSTR-4 Filing",
                    frequency: "Once a Year",
                    deadline: "30 April of next FY",
                    desc: "File Annual Return in Form GSTR-4 consolidating all quarterly CMP-08 returns. Contains details of inward and outward supplies, ITC reversal (if any), and tax paid during the FY.",
                  },
                  {
                    compliance: "Invoice Requirements",
                    frequency: "Every Transaction",
                    deadline: "N/A",
                    desc: "Issue BILL OF SUPPLY (not tax invoice). Must mention 'Composition Taxable Person, not eligible to collect tax on supplies' on every bill. Cannot charge GST separately from customers.",
                  },
                  {
                    compliance: "Books of Accounts Maintenance",
                    frequency: "Daily",
                    deadline: "N/A",
                    desc: "Maintain accounts as per Rule 56 — stock register, sales register, purchase register. No need to maintain detailed invoice-wise data like regular taxpayers.",
                  },
                  {
                    compliance: "Display Board at Business Premises",
                    frequency: "Permanent",
                    deadline: "N/A",
                    desc: "Display a notice board at principal place of business stating 'Composition Taxable Person, not eligible to collect tax on supplies' as per Rule 58A.",
                  },
                  {
                    compliance: "No ITC Availment",
                    frequency: "Permanent Restriction",
                    deadline: "N/A",
                    desc: "You CANNOT claim Input Tax Credit on any purchases. If you have ITC in electronic credit ledger, it will remain blocked until you switch back to regular scheme.",
                  },
                ].map((item) => (
                  <div
                    key={item.compliance}
                    className="bg-white rounded-2xl p-6 border border-blue-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-blue-800 text-sm">
                        {item.compliance}
                      </h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                        {item.frequency}
                      </span>
                    </div>
                    <div className="mb-3">
                      <p className="text-xs text-gray-500">
                        <strong>Deadline:</strong> {item.deadline}
                      </p>
                    </div>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-blue-300 rounded-2xl p-6">
                <p className="font-bold text-blue-800 mb-3">
                  🔔 Late Filing Penalties
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "CMP-08 late fee: ₹50 per day of delay (₹25 CGST + ₹25 SGST) with a maximum of ₹5,000",
                    "GSTR-4 late fee: ₹100 per day of delay (₹50 CGST + ₹50 SGST) with a maximum of ₹5,000",
                    "If turnover exceeds ₹1.5 crore during the FY, you must migrate to regular scheme from the next quarter and reverse back to normal compliance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Composition Scheme Registration
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For New GST Registration (with Composition)
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card of proprietor / all partners / all directors",
                    "Aadhaar card of proprietor / authorized signatory",
                    "Photograph (passport size) of proprietor/partners/directors",
                    "Business address proof (rent agreement / property tax receipt / electricity bill)",
                    "Ownership proof of premises (sale deed / NOC from owner)",
                    "Bank account details (cancelled cheque / bank statement)",
                    "Business registration certificate (if partnership firm / company / LLP)",
                    "Turnover details of previous FY (if already in business)",
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
                  For Existing Taxpayers Switching to Composition
                </p>
                <ul className="space-y-3">
                  {[
                    "Existing GSTIN details",
                    "Previous FY GSTR-1 and GSTR-3B (to verify turnover < ₹1.5 crore)",
                    "Current stock statement (for ITC reversal calculation)",
                    "ITC balance as on date of switching (from electronic credit ledger)",
                    "Details of all registered business locations (if multiple GSTINs)",
                    "Turnover breakup (intra-state vs. inter-state — to confirm eligibility)",
                    "Confirmation that no inter-state supply is planned in next FY",
                    "Form ITC-03 (for ITC reversal) — prepared by Taxvio",
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

          {/* WHEN TO MIGRATE */}
          <section id="migration">
            <SectionLabel text="Migration Scenarios" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              When Must You Migrate from Composition to Regular Scheme?
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                You are <strong>compulsorily required</strong> to migrate from
                composition to regular scheme if ANY of the following occurs during
                the financial year:
              </p>

              <div className="space-y-4">
                {[
                  {
                    trigger: "Turnover Exceeds ₹1.5 Crore",
                    action:
                      "You must migrate to regular scheme from the NEXT quarter onwards. File Form GST CMP-04 (withdrawal from composition) within 7 days of exceeding the threshold. Start filing monthly GSTR-1 and GSTR-3B.",
                    example:
                      "If turnover crosses ₹1.5 crore in October (Q3), migrate from 1 January (Q4 onwards).",
                  },
                  {
                    trigger: "Making Inter-State Supply",
                    action:
                      "Even ONE inter-state supply disqualifies you from composition. You must migrate to regular scheme from the day of the inter-state supply. File CMP-04 immediately.",
                    example:
                      "If you accidentally supply goods to another state in June, you lose composition eligibility from 1 June itself.",
                  },
                  {
                    trigger: "Selling on E-Commerce Platform",
                    action:
                      "If you start supplying through Amazon, Flipkart, or any e-commerce operator, you must migrate to regular scheme from the day the first e-commerce supply is made.",
                    example:
                      "Listed products on Amazon on 15 August → Must migrate from 15 August and file CMP-04 within 7 days.",
                  },
                  {
                    trigger: "Voluntary Withdrawal",
                    action:
                      "You can voluntarily withdraw from composition scheme by filing Form GST CMP-04 at any time. However, you can re-opt for composition only in the next financial year.",
                    example:
                      "If you withdraw in September, you remain in regular scheme until 31 March of that FY and can opt for composition again from 1 April of next FY.",
                  },
                  {
                    trigger: "Supplying Exempt Goods",
                    action:
                      "If you start supplying goods that are not leviable to tax (like alcoholic liquor), you are disqualified and must migrate to regular scheme immediately.",
                    example:
                      "Restaurant starts serving alcohol → Must migrate from the day alcohol service begins.",
                  },
                ].map((item) => (
                  <div
                    key={item.trigger}
                    className="bg-white rounded-2xl p-6 border border-red-200"
                  >
                    <p className="font-bold text-red-700 mb-2 text-sm">
                      ⚠️ {item.trigger}
                    </p>
                    <p className="text-xs text-gray-700 mb-3">
                      <strong>Action Required:</strong> {item.action}
                    </p>
                    <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                      <p className="text-xs text-gray-600">
                        <strong>Example:</strong> {item.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white border-2 border-red-300 rounded-2xl p-6">
                <p className="font-bold text-red-800 mb-2">
                  📋 Form GST CMP-04 Filing
                </p>
                <p className="text-sm text-gray-700">
                  Form GST CMP-04 (Intimation for withdrawal from composition
                  levy) must be filed within <strong>7 days</strong> of the event
                  that disqualified you from composition. Failure to file CMP-04 on
                  time can result in penalties and interest on tax dues.
                </p>
              </div>
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's GST Composition Scheme Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From eligibility assessment to year-round compliance — we handle
              every aspect of composition scheme for your business.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔍",
                  title: "Eligibility Assessment & Advisory",
                  desc: "Detailed analysis of your business type, turnover, nature of supplies, and ITC dependency. Cost-benefit comparison between composition and regular scheme. Written advisory on the best option.",
                  price: "₹999",
                },
                {
                  icon: "📝",
                  title: "New GST Registration with Composition",
                  desc: "Complete GST registration for new businesses opting for composition scheme from Day 1. Includes REG-01 + CMP-02 filing, ARN tracking, and GSTIN issuance.",
                  price: "₹2,999",
                },
                {
                  icon: "🔄",
                  title: "Switching from Regular to Composition",
                  desc: "For existing taxpayers migrating to composition at the start of FY. Includes ITC reversal calculation, Form ITC-03 filing, CMP-02 submission, and portal approvals.",
                  price: "₹4,999",
                },
                {
                  icon: "📊",
                  title: "Quarterly CMP-08 Filing",
                  desc: "Calculation of tax liability on quarterly turnover, payment via PMT-06 challan, and CMP-08 return filing. Includes reconciliation with books and error checks.",
                  price: "₹499/quarter",
                },
                {
                  icon: "📋",
                  title: "Annual GSTR-4 Filing",
                  desc: "Preparation and filing of Annual Return for composition dealers. Consolidation of all CMP-08 returns, inward-outward supply details, and reconciliation statement.",
                  price: "₹1,499/year",
                },
                {
                  icon: "🚪",
                  title: "Withdrawal from Composition (CMP-04)",
                  desc: "Filing Form GST CMP-04 when you voluntarily withdraw or are compulsorily required to migrate to regular scheme. Includes migration advisory and next-step compliance guidance.",
                  price: "₹1,999",
                },
                {
                  icon: "📄",
                  title: "Display Board & Documentation",
                  desc: "Provision of 'Composition Taxable Person' display board template (ready to print), bill of supply format, and business stationery updates as per composition rules.",
                  price: "₹499",
                },
                {
                  icon: "📚",
                  title: "Books of Accounts Maintenance",
                  desc: "Simplified bookkeeping for composition dealers — stock register, sales-purchase register. Monthly reconciliation and MIS reports for turnover tracking.",
                  price: "₹999/month",
                },
                {
                  icon: "📨",
                  title: "Notice Response & Rectification",
                  desc: "Drafting and filing responses to GST notices related to composition scheme violations, late filing, turnover mismatch, or non-compliance issues.",
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
                📦 Annual Compliance Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic Compliance",
                    price: "₹5,999/year",
                    includes: [
                      "4 CMP-08 quarterly filings",
                      "1 GSTR-4 annual filing",
                      "Turnover tracking & alerts",
                      "Email support",
                    ],
                  },
                  {
                    package: "Standard (with Bookkeeping)",
                    price: "₹14,999/year",
                    includes: [
                      "Everything in Basic",
                      "Monthly books maintenance",
                      "Stock register updates",
                      "Monthly MIS reports",
                      "Priority support",
                    ],
                  },
                  {
                    package: "Premium (Complete)",
                    price: "₹19,999/year",
                    includes: [
                      "Everything in Standard",
                      "Dedicated accountant",
                      "Turnover optimization advisory",
                      "Notice response (1 per year)",
                      "WhatsApp + call support",
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
              Real Stories from Our Composition Scheme Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Ramesh Gupta (Kirana Store Owner)",
                  location: "Khatauli",
                  text: "My annual turnover is around ₹80 lakh. Under regular GST, I was struggling with monthly returns and ITC reconciliation. Taxvio registered me under composition scheme — now I pay just 1% tax and file quarterly. Saved me ₹30,000 annually in compliance costs alone!",
                },
                {
                  name: "Sunita Devi (Restaurant Owner)",
                  location: "Muzaffarnagar",
                  text: "I run a small family restaurant with ₹1 crore turnover. Taxvio helped me opt for composition at 5% rate instead of 18% regular GST. My tax burden reduced by ₹13 lakh per year! CMP-08 filing is so simple compared to monthly GSTR-3B.",
                },
                {
                  name: "Vijay Kumar (Manufacturer)",
                  location: "Meerut",
                  text: "I manufacture plastic products with ₹1.2 crore turnover. Taxvio advised composition scheme as I sell mostly to retailers (B2C). Now I pay 1% GST on turnover instead of 18% on each invoice. Compliance is minimal and I can focus on my business.",
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
              GST Composition Scheme Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GST Composition Scheme registration, CMP-08 filing, and
              compliance for small businesses across <strong>Noida</strong>,{" "}
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
                  link: "/serviceslist/gst-services/gst-registration",
                  desc: "New GST registration for businesses.",
                },
                {
                  title: "GST Return Filing",
                  icon: "📊",
                  link: "/serviceslist/gst-services/gst-return-filing",
                  desc: "Monthly GSTR-1, GSTR-3B filing.",
                },
                {
                  title: "GST Cancellation",
                  icon: "❌",
                  link: "/serviceslist/gst-services/gst-cancellation",
                  desc: "Voluntary GST registration cancellation.",
                },
                {
                  title: "GST Notice Response",
                  icon: "📨",
                  link: "/serviceslist/gst-services/gst-notice-response",
                  desc: "Expert response to GST notices.",
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
                    Simplify Your GST Compliance
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Register Under GST Composition Scheme Today
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Pay just 1% GST, file quarterly returns, and eliminate monthly
                    compliance hassles. Taxvio provides complete eligibility
                    assessment, CMP-02 registration, CMP-08 filing, and year-round
                    advisory. Ideal for small traders, manufacturers, and
                    restaurants with turnover under ₹1.5 crore. Starting ₹2,999.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Register Now — ₹2,999
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20want%20to%20register%20under%20GST%20Composition%20Scheme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Us
                  </a>
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
      q: "Can I issue GST invoices under the Composition Scheme?",
      a: "No. Composition taxpayers CANNOT issue tax invoices. You can only issue a 'Bill of Supply' (not a tax invoice). The bill must mention 'Composition Taxable Person, not eligible to collect tax on supplies' as per Rule 58A. You cannot charge GST separately from customers — the GST must be absorbed in your selling price.",
    },
    {
      q: "Can I opt for composition scheme in the middle of a financial year?",
      a: "No. Composition scheme can only be opted for at the beginning of a financial year (1 April) by filing Form GST CMP-02 BEFORE 31 March of the preceding year. The only exception is for NEW registrations — you can opt for composition at the time of registration itself, irrespective of the date during the FY.",
    },
    {
      q: "What happens to my ITC if I switch from regular to composition?",
      a: "You must REVERSE all accumulated Input Tax Credit (ITC) before switching to composition. File Form ITC-03 to declare stock on hand and compute ITC to be reversed. Pay the reversed ITC amount via DRC-03 challan. The ITC in your electronic credit ledger will be blocked and cannot be utilized while you are under composition scheme.",
    },
    {
      q: "Can I claim composition scheme if I have multiple business locations in different states?",
      a: "Yes, but you must opt for composition for ALL your GSTINs across India. You cannot be under composition in one state and regular in another state. All your registered business locations must be under composition scheme simultaneously. Additionally, aggregate turnover is calculated across ALL GSTINs — if total exceeds ₹1.5 crore, you are ineligible.",
    },
    {
      q: "Can I switch back from composition to regular scheme mid-year?",
      a: "Yes, you can VOLUNTARILY withdraw from composition at any time by filing Form GST CMP-04 within 7 days of withdrawal. However, once you withdraw, you cannot opt for composition again until the next financial year (1 April). Additionally, if you are COMPULSORILY required to migrate (e.g., turnover crosses ₹1.5 crore, or you make inter-state supply), you must file CMP-04 and migrate immediately.",
    },
    {
      q: "Are services allowed under the Composition Scheme?",
      a: "From FY 2019-20 onwards, composition taxpayers (manufacturers and traders) can provide services up to a maximum of ₹5 lakh per FY without losing composition eligibility. However, ONLY restaurants are explicitly allowed to be pure service providers under composition at 5% rate. Other service providers (consultants, IT services, professionals) are NOT eligible for composition scheme.",
    },
    {
      q: "What is the penalty for not filing CMP-08 on time?",
      a: "Late fee for CMP-08 is ₹50 per day of delay (₹25 CGST + ₹25 SGST) subject to a maximum of ₹5,000. Additionally, interest @ 18% per annum is charged on the tax amount from the due date until the date of payment. If you consistently miss CMP-08 deadlines, your GSTIN may be suspended or cancelled by the GST department.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GST Composition Scheme
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