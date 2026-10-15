// app/serviceslist/gst/gst-for-restaurants/GSTForRestaurantsClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST for Restaurants & Hospitality Businesses",
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
    "Specialized GST compliance services for restaurants, cafes, cloud kitchens, hotels, banquet halls, and hospitality businesses. Complete support for GST registration (normal & composition scheme), composition scheme advisory (5% GST rate eligibility), Section 9(5) TCS compliance for food aggregator platforms (Zomato, Swiggy, Uber Eats), monthly GSTR-1 and GSTR-3B return filing, platform settlement reconciliation (matching Zomato/Swiggy payouts with sales), ITC optimization on food inputs and packaging materials, FSSAI license-GST linking, HSN/SAC code advisory (restaurant service 996331, outdoor catering 996332), and complete tax compliance. Serving restaurants, cloud kitchens, hotels across Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "Restaurant & Hospitality GST Compliance",
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
      name: "What is the GST rate for restaurants and food services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST rate for restaurant services depends on whether the restaurant has air-conditioning (AC) and serves liquor: (1) Restaurants WITH AC or liquor license: 5% GST (no ITC - input tax credit cannot be claimed), (2) Restaurants WITHOUT AC and no liquor: 5% GST (no ITC), (3) Outdoor catering: 18% GST (ITC can be claimed), (4) Room service in hotels (restaurant service in hotel premises): 5% GST if room tariff is below ₹7,500/day, 18% GST if room tariff is ₹7,500 or above. Note: All restaurants charge 5% GST on food supply (dine-in or takeaway) regardless of AC/liquor, but ITC on inputs is NOT allowed. For composition scheme: Restaurants can opt for composition scheme (turnover up to ₹1.5 crore) and pay 5% tax on turnover (quarterly filing, no ITC).",
      },
    },
    {
      "@type": "Question",
      name: "What is Section 9(5) and how does it affect restaurants on Zomato/Swiggy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 9(5) of CGST Act makes FOOD AGGREGATORS (e-commerce operators like Zomato, Swiggy, Uber Eats) liable to collect tax at source (TCS) on restaurant supplies made through their platform. How it works: (1) When you sell food via Zomato/Swiggy, the platform collects 5% GST from customer on your behalf, (2) Platform deducts 1% TCS (0.5% CGST + 0.5% SGST) from your payment settlement, (3) You receive NET settlement (Sale value - Platform commission - TCS deducted), (4) Platform deposits TCS to government and uploads in Form GSTR-8. Impact on restaurants: You must report gross sales (including platform sales) in GSTR-1. TCS deducted by platform appears in your GSTR-2B (can be used to offset tax liability in GSTR-3B). Reconciliation is CRITICAL — mismatch between your sales and platform TCS can lead to tax demand. Taxvio provides platform reconciliation services to match Zomato/Swiggy settlements with GST returns.",
      },
    },
    {
      "@type": "Question",
      name: "Can restaurants claim ITC on food inputs and packaging materials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NO, restaurants CANNOT claim input tax credit (ITC) on food inputs if they are supplying restaurant service at 5% GST. As per Notification 11/2017, restaurant service is under 'no ITC' category — you charge 5% GST to customers but cannot claim ITC on: Food ingredients (vegetables, spices, oil, etc.), Packaging materials (boxes, bags, containers), Rent (if GST is charged on rent), Other inputs used in restaurant service. EXCEPTION — You CAN claim ITC if: (1) You provide OUTDOOR CATERING service (18% GST) — ITC allowed on all inputs, (2) You operate ONLY as a cloud kitchen (no dine-in) and charge 18% GST — ITC allowed, (3) You supply food as GOODS (not service) under specific contracts — ITC may be allowed. Taxvio reviews your business model and advises on ITC eligibility to maximize tax savings.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTForRestaurantsClient() {
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
      <InquiryForm />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-orange-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🍽️ Restaurant Owner? Get GST Compliant & Handle Zomato/Swiggy TCS Correctly
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
              <span className="text-white">GST for Restaurants</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🍽️ Hospitality GST
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Services for
                  <br />
                  <span className="text-[#7ecbf0]">Restaurants</span>
                  <br />
                  & Hospitality
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Running a{" "}
                  <strong className="text-white">
                    restaurant, cafe, cloud kitchen, or hotel
                  </strong>
                  ? GST compliance for hospitality businesses has{" "}
                  <strong className="text-white">
                    unique challenges — 5% GST rate with no ITC, Section 9(5)
                    TCS compliance for Zomato/Swiggy sales, platform
                    reconciliation
                  </strong>
                  , and FSSAI-GST linking. Whether you're a{" "}
                  <strong className="text-white">dine-in restaurant</strong>,{" "}
                  <strong className="text-white">cloud kitchen</strong>, or{" "}
                  <strong className="text-white">
                    food aggregator seller
                  </strong>
                  , <strong className="text-white">Taxvio</strong> provides
                  specialized GST services — registration, composition scheme
                  advisory, monthly return filing, Zomato/Swiggy settlement
                  reconciliation, and complete compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get GST Compliant — ₹2,999/mo →
                  </Link>
                  
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 5% GST Rate Advisory",
                    "✅ Zomato/Swiggy Reconciliation",
                    "✅ Section 9(5) TCS Compliance",
                    "✅ FSSAI-GST Linking",
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
                  Restaurant GST Essentials
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["🍴", "GST rate: 5% (no ITC)"],
                    ["📱", "Zomato/Swiggy: 1% TCS deducted"],
                    ["📋", "SAC code: 996331 (restaurant)"],
                    ["🔄", "Monthly GSTR-1 & GSTR-3B"],
                    ["📜", "FSSAI license mandatory"],
                    ["🚀", "Service fee: ₹2,999/month"],
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
              { number: "300+", label: "Restaurants Served", icon: "🍽️" },
              { number: "5%", label: "Standard GST Rate", icon: "💰" },
              { number: "1%", label: "Platform TCS Rate", icon: "📊" },
              { number: "₹2,999", label: "Monthly Fee", icon: "🎯" },
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
              "✔ Zomato/Swiggy Experts",
              "✔ Platform Reconciliation",
              "✔ ITC Optimization",
              "✔ FSSAI Compliance",
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
          {/* RESTAURANT GST BASICS */}
          <section id="restaurant-gst-basics">
            <SectionLabel text="Understanding Restaurant GST" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              GST Compliance for Restaurants & Hospitality
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Restaurant service</strong> under GST is classified as{" "}
                  <strong>supply of service</strong> (not supply of goods). The
                  GST rate, ITC eligibility, and compliance requirements are
                  DIFFERENT from regular businesses, making restaurant GST
                  compliance unique and complex.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    💰 GST Rates for Restaurant Services
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        🍽️ Dine-in Restaurant (AC or Liquor License)
                      </p>
                      <p className="text-xs mb-2">
                        <strong>GST Rate:</strong> 5% (2.5% CGST + 2.5% SGST)
                        <br />
                        <strong>ITC:</strong> NOT allowed (no input tax credit on
                        food inputs, rent, packaging)
                        <br />
                        <strong>SAC Code:</strong> 996331 (Restaurant and food
                        serving services)
                        <br />
                        <strong>Applicability:</strong> Restaurants with
                        air-conditioning OR liquor license (regardless of AC)
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        🥘 Restaurant WITHOUT AC (No Liquor)
                      </p>
                      <p className="text-xs mb-2">
                        <strong>GST Rate:</strong> 5% (same as AC restaurant)
                        <br />
                        <strong>ITC:</strong> NOT allowed
                        <br />
                        <strong>SAC Code:</strong> 996331
                        <br />
                        <strong>Note:</strong> Previously, non-AC restaurants had
                        12% GST rate, but since 2017, ALL restaurants (AC or
                        non-AC) charge 5% GST with no ITC.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        🎪 Outdoor Catering Service
                      </p>
                      <p className="text-xs mb-2">
                        <strong>GST Rate:</strong> 18% (9% CGST + 9% SGST)
                        <br />
                        <strong>ITC:</strong> ALLOWED (can claim ITC on all inputs
                        — food, packaging, transport)
                        <br />
                        <strong>SAC Code:</strong> 996332 (Outdoor catering
                        services)
                        <br />
                        <strong>Definition:</strong> Supply of food at customer's
                        location (weddings, events, corporate catering)
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        🏨 Room Service in Hotels
                      </p>
                      <p className="text-xs mb-2">
                        <strong>GST Rate:</strong> Depends on room tariff
                        <br />• Room tariff <strong>&lt;₹7,500/day</strong>: 5%
                        GST (no ITC)
                        <br />• Room tariff <strong>≥₹7,500/day</strong>: 18% GST
                        (ITC allowed)
                        <br />
                        <strong>SAC Code:</strong> 996331 (restaurant service) +
                        9963 (accommodation)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    ✅ Composition Scheme for Restaurants
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Restaurants with <strong>turnover up to ₹1.5 crore</strong>{" "}
                    can opt for <strong>Composition Scheme</strong>:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Tax rate: 5% of turnover (same as regular scheme for restaurants)",
                      "Return filing: Quarterly (GSTR-4) instead of monthly",
                      "No ITC allowed (same as regular restaurant service)",
                      "Cannot make inter-state supplies (only intra-state)",
                      "Cannot supply through e-commerce (Zomato/Swiggy not allowed in composition)",
                      "Invoice format: Cannot charge tax separately (must show 'composition taxable person')",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Note:</strong> Since restaurant service is already at
                    5% with no ITC, composition scheme offers LIMITED benefit —
                    only quarterly filing convenience. Most restaurants selling on
                    Zomato/Swiggy CANNOT opt for composition (e-commerce not
                    allowed).
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📱 Section 9(5) — TCS by Zomato/Swiggy
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Section 9(5) of CGST Act</strong> makes{" "}
                    <strong>
                      e-commerce operators (food aggregators) liable to collect
                      and deposit GST
                    </strong>{" "}
                    on restaurant supplies made through their platform.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-purple-200 mb-3">
                    <p className="font-bold text-purple-700 text-sm mb-2">
                      How TCS Works (Tax Collected at Source)
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p>
                        <strong>Step 1:</strong> Customer orders food from your
                        restaurant via Zomato/Swiggy for ₹1,000
                      </p>
                      <p>
                        <strong>Step 2:</strong> Platform charges ₹1,050 from
                        customer (₹1,000 + ₹50 GST @5%)
                      </p>
                      <p>
                        <strong>Step 3:</strong> Platform pays you: ₹1,000 (order
                        value) - ₹200 (commission @20%) - ₹10 (TCS @1% of
                        ₹1,000) = <strong>₹790 net settlement</strong>
                      </p>
                      <p>
                        <strong>Step 4:</strong> Platform deposits ₹50 GST
                        (collected from customer) + ₹10 TCS (deducted from you) =
                        ₹60 to government
                      </p>
                      <p>
                        <strong>Step 5:</strong> You report ₹1,000 gross sales in
                        GSTR-1, claim ₹10 TCS credit in GSTR-3B to offset tax
                        liability
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <p className="font-bold text-purple-700 text-xs mb-2">
                      ⚠️ Critical Points
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • Platform files GSTR-8 (e-commerce operator return) with
                        TCS details
                      </li>
                      <li>
                        • Your GSTR-2B shows TCS credit (from platform's GSTR-8)
                      </li>
                      <li>
                        • You MUST reconcile platform sales with GSTR-2B TCS to
                        avoid mismatch
                      </li>
                      <li>
                        • Mismatch = Tax demand + interest (department assumes you
                        underreported sales)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    🚫 ITC Restrictions for Restaurants
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Restaurants charging <strong>5% GST</strong> (regular scheme)
                    are in <strong>"no ITC" category</strong> — CANNOT claim
                    input tax credit on:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Food ingredients (vegetables, spices, oil, rice, flour, meat, etc.)",
                      "Packaging materials (boxes, bags, containers, cling film)",
                      "Gas/electricity bills (if GST charged)",
                      "Rent (if GST charged by landlord)",
                      "Kitchen equipment, utensils, furniture (capital goods)",
                      "Cleaning supplies, disposables",
                      "Any other inputs used in restaurant service",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white rounded-lg p-3 border border-orange-200 mt-3">
                    <p className="font-bold text-orange-700 text-xs mb-1">
                      Exception — ITC Allowed For:
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • Outdoor catering service (18% GST) — full ITC on all
                        inputs
                      </li>
                      <li>
                        • Cloud kitchens charging 18% GST (if classified as goods
                        supply)
                      </li>
                      <li>
                        • Hotels with room tariff ≥₹7,500/day (18% GST on F&B) —
                        ITC allowed
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    📜 FSSAI License — Mandatory for GST Registration
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Food Safety and Standards Authority of India (FSSAI)
                    license</strong> is MANDATORY for all food businesses in India:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Basic FSSAI Registration: For small food businesses (turnover <₹12 lakh/year)",
                      "State FSSAI License: For medium food businesses (turnover ₹12 lakh - ₹20 crore/year)",
                      "Central FSSAI License: For large food businesses (turnover >₹20 crore or multi-state operations)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>GST-FSSAI Linking:</strong> GST authorities
                    cross-verify FSSAI license during registration approval. Food
                    businesses without valid FSSAI cannot get GST registration. We
                    help you obtain FSSAI license and link it with GSTIN.
                  </p>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in GST compliance for restaurants, cloud kitchens,
                  hotels — registration, composition scheme advisory, Section 9(5)
                  TCS reconciliation, monthly return filing, and complete
                  compliance across Uttar Pradesh, Noida, Delhi NCR, and
                  pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* PLATFORM RECONCILIATION */}
          <section id="platform-reconciliation">
            <SectionLabel text="Zomato/Swiggy Compliance" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Platform Settlement Reconciliation (Zomato/Swiggy/Uber Eats)
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Selling food on Zomato/Swiggy requires CRITICAL reconciliation
                between platform settlements and GST returns to avoid tax
                mismatches and penalties.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <p className="font-bold text-purple-800 mb-3 text-lg">
                    📊 What Platforms Provide (Settlement Reports)
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Gross order value (total sales including GST)",
                      "Platform commission (10%-25% of order value)",
                      "TCS deducted @1% (0.5% CGST + 0.5% SGST)",
                      "Delivery charges (if applicable)",
                      "Discounts/promotions (platform-funded or restaurant-funded)",
                      "Net settlement amount (credited to your bank)",
                      "Order-wise breakup (invoice/bill number, date, amount)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <p className="font-bold text-purple-800 mb-3 text-lg">
                    📝 What You Must Report in GST Returns
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "GSTR-1: Gross sales (including platform sales) — invoice-wise or summary",
                      "GSTR-3B: Total taxable value, tax liability, TCS credit adjustment",
                      "Match with GSTR-2B: TCS credit shown in 2B (from platform's GSTR-8) should match your platform sales",
                      "Bank reconciliation: Net settlement received should match after deducting commission + TCS",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-300 rounded-2xl p-6 mb-6">
                <p className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  Reconciliation Process (Step-by-Step)
                </p>
                <div className="space-y-3 text-sm text-gray-700">
                  {[
                    {
                      step: "1. Download Platform Reports",
                      detail:
                        "Login to Zomato/Swiggy partner portal → Download monthly settlement report (Excel/CSV) → Extract: Gross sales, TCS deducted, Net settlement",
                    },
                    {
                      step: "2. Match Gross Sales with GSTR-1",
                      detail:
                        "Sum up gross order value from platform report → Compare with total restaurant sales reported in GSTR-1 → Sales in GSTR-1 should be ≥ Platform sales (platform + dine-in + takeaway)",
                    },
                    {
                      step: "3. Verify TCS Credit in GSTR-2B",
                      detail:
                        "Download GSTR-2B (auto-populated ITC statement) → Check Table 3.1.1 — TCS credit (from e-commerce operators) → TCS amount should match total TCS deducted by platform",
                    },
                    {
                      step: "4. Adjust TCS in GSTR-3B",
                      detail:
                        "In GSTR-3B Table 3.2 → Enter TCS credit (from GSTR-2B) → This reduces your cash tax liability → Pay only balance tax (Output tax - TCS credit)",
                    },
                    {
                      step: "5. Bank Reconciliation",
                      detail:
                        "Check bank statement → Verify net settlement matches: Gross sales - Commission - TCS = Net amount received → If mismatch, check for pending settlements or adjustments",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-purple-50 rounded-xl p-4 border border-purple-200"
                    >
                      <p className="font-bold text-purple-700 mb-1">
                        {item.step}
                      </p>
                      <p className="text-xs text-gray-600">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                <p className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Common Reconciliation Issues & Solutions
                </p>
                <div className="space-y-3">
                  {[
                    {
                      issue: "TCS credit in GSTR-2B is LESS than platform TCS deducted",
                      reason:
                        "Platform filed GSTR-8 late or with errors, TCS not uploaded correctly",
                      solution:
                        "Contact platform support → Ask for GSTR-8 filing confirmation → Wait for next GSTR-2B update → If issue persists, file grievance on GST portal",
                    },
                    {
                      issue: "Gross sales mismatch (GSTR-1 vs platform report)",
                      reason:
                        "Cancelled orders not adjusted, returns/refunds not accounted, multi-platform sales mixed up",
                      solution:
                        "Reconcile order-wise → Adjust for cancellations/returns → Maintain separate accounts for each platform (Zomato, Swiggy, Uber Eats) → Report net sales (gross - cancellations)",
                    },
                    {
                      issue: "Bank settlement doesn't match calculation",
                      reason:
                        "Pending settlements (platform pays after 7-10 days), deductions for packaging/advertising not accounted, refund adjustments",
                      solution:
                        "Check settlement cycle (weekly/bi-weekly) → Account for accrual vs cash basis → Reconcile month-end outstanding → Verify all deduction line items in settlement report",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-orange-200"
                    >
                      <p className="font-bold text-orange-700 text-sm mb-1">
                        {item.issue}
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Reason:</strong> {item.reason}
                      </p>
                      <p className="text-xs text-green-700">
                        <strong>Solution:</strong> {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* COMPLIANCE PROCESS */}
          <section id="compliance-process">
            <SectionLabel text="Complete Compliance" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Restaurant GST Compliance Process
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                End-to-end GST compliance for restaurants, cloud kitchens, and
                hotels:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "GST Registration + FSSAI Linking",
                    description:
                      "Obtain FSSAI license (if not already): Apply for Basic/State/Central FSSAI based on turnover. Timeline: 7-30 days for FSSAI approval. GST registration: File Form GST REG-01 on GST portal. Documents: PAN, Aadhaar, business address proof, FSSAI license, bank statement, photos. FSSAI linking: Enter FSSAI number in GST registration form (mandatory field). Approval timeline: 3-7 working days if all documents correct. GSTIN format: State code + PAN + Entity code (e.g., 09ABCDE1234F1Z5). After approval: Download GST certificate, update on invoices/bills, inform suppliers (for ITC eligibility — though restaurants can't claim ITC, suppliers need GSTIN for their records).",
                    duration: "7-10 days",
                  },
                  {
                    step: 2,
                    title: "Composition Scheme Decision (if eligible)",
                    description:
                      "Eligibility check: Turnover ≤₹1.5 crore, Only intra-state supplies, Not selling on Zomato/Swiggy (e-commerce not allowed). Comparison: Regular scheme (5% GST + monthly return) vs Composition scheme (5% tax + quarterly return). Key point: Since restaurant rate is already 5% with no ITC in BOTH schemes, composition offers ONLY quarterly filing convenience. Decision: Most Zomato/Swiggy restaurants CANNOT opt composition (e-commerce restriction). Only dine-in/takeaway-only restaurants with <₹1.5 cr turnover can consider composition. If opting composition: File Form GST CMP-02 within 30 days of registration or before 1st April of FY.",
                    duration: "1 day (decision)",
                  },
                  {
                    step: 3,
                    title: "Invoice/Bill Format Setup (GST Compliant)",
                    description:
                      "Restaurant bills (KOT - Kitchen Order Tickets) must be GST-compliant tax invoices: Mandatory fields: Restaurant name & address, GSTIN (15-digit), Invoice/Bill number (sequential), Date, Customer name (optional for B2C), Item-wise description (dishes ordered), Quantity, Rate, Taxable value, GST rate (5%), CGST amount, SGST amount, Total amount (including GST). Optional: SAC code 996331 (recommended if turnover >₹5 cr), FSSAI license number (good practice). Billing software: Use GST-compliant billing software (RestroPos, PetPooja, UrbanPiper, Tally) — auto-calculates GST, generates compliant bills. For Zomato/Swiggy orders: Platform generates customer invoice (you receive settlement report for your records). Sample bill format: We provide restaurant-specific invoice template.",
                    duration: "1-2 days",
                  },
                  {
                    step: 4,
                    title: "Monthly Sales Recording & Accounting",
                    description:
                      "Maintain daily sales register: Record all sales (dine-in, takeaway, platform orders) separately. Dine-in/Takeaway: From billing software (daily sales summary). Platform orders: Download daily/weekly sales from Zomato/Swiggy dashboard. Accounting entries: Sales account (credit), GST output liability (credit), Bank/Cash (debit for payments received). Month-end: Summarize total sales (category-wise), Calculate total GST liability (sales × 5%), Verify platform TCS deductions (from settlement reports). Maintain: Sales invoice file (physical/digital), Platform settlement reports (PDF/Excel), Bank statement (for settlement verification).",
                    duration: "Daily/Monthly",
                  },
                  {
                    step: 5,
                    title: "Monthly GSTR-1 Filing (Outward Supplies)",
                    description:
                      "GSTR-1 due date: 11th of next month (e.g., March sales GSTR-1 due by 11th April). What to report: B2B supplies: If you supply to registered businesses (corporate orders) — invoice-wise details (GSTIN, invoice number, value, tax). B2C supplies: Summary reporting (no invoice-wise details) — just total B2C sales value and tax. Platform sales: Report as B2C supplies (Zomato/Swiggy customers are B2C). How to file: Login to GST portal → Returns → GSTR-1 → Select month → Enter sales details → Submit with DSC/EVC. Auto-population: GSTR-1 data flows to your GSTR-3B (Table 3.1 — outward supplies). We prepare: Sales summary from your billing data + platform reports, Invoice upload (if B2B), GSTR-1 filing and acknowledgment download.",
                    duration: "By 11th of next month",
                  },
                  {
                    step: 6,
                    title: "GSTR-2B Review & TCS Reconciliation",
                    description:
                      "GSTR-2B generation: Auto-generated on 14th of next month (3 days after GSTR-1 deadline). What it contains: ITC available (though restaurants can't claim ITC, check for any capital goods purchases), TCS credit (Tax Collected at Source by Zomato/Swiggy — shown in Table 3.1.1). TCS reconciliation: Download GSTR-2B → Check Table 3.1.1 (TCS by e-commerce operators) → Match TCS amount with total TCS deducted by platforms (from settlement reports). If mismatch: Platform may have filed GSTR-8 late or with errors. Contact platform support or wait for amendment. TCS credit = Reduces your cash tax liability in GSTR-3B (explained in next step).",
                    duration: "14th of next month",
                  },
                  {
                    step: 7,
                    title: "Monthly GSTR-3B Filing (Summary Return + Tax Payment)",
                    description:
                      "GSTR-3B due date: 20th of next month. Summary return: Table 3.1 — Total outward supplies (auto-populated from GSTR-1) → Inter-state + Intra-state taxable sales. Table 3.2 — ITC details → For restaurants, usually NIL (no ITC allowed on food inputs). Enter TCS credit (from GSTR-2B Table 3.1.1) → This reduces tax liability. Table 6.1 — Tax liability calculation: Output tax (sales × 5%), Less: TCS credit, Less: Cash ledger balance (if any), = Net tax payable. Table 6.2 — Interest (if filing late). Tax payment: If net tax payable > 0 → Generate challan (DRC-03) → Pay via net banking → Enter CIN (Challan Identification Number) in GSTR-3B. File GSTR-3B with DSC/EVC. We handle: TCS credit verification, Tax calculation, Challan generation and payment, GSTR-3B filing and acknowledgment.",
                    duration: "By 20th of next month",
                  },
                  {
                    step: 8,
                    title: "ITC Review (Capital Goods & Outdoor Catering)",
                    description:
                      "Though restaurant service (5% GST) has NO ITC, you may be eligible for ITC in certain cases: Capital goods ITC: If you purchased capital goods (kitchen equipment, AC, furniture) BEFORE starting restaurant operations or for expansion. Outdoor catering: If you provide outdoor catering service (18% GST) separately → ITC allowed on all inputs used for catering. Check: Review purchase invoices for eligible ITC (capital goods, outdoor catering inputs), Claim ITC in GSTR-3B Table 4 (if applicable), Maintain invoice documentation for audit. We review your purchases and advise on ITC eligibility to maximize tax savings.",
                    duration: "Monthly review",
                  },
                  {
                    step: 9,
                    title: "Annual Return (GSTR-9) + Reconciliation",
                    description:
                      "GSTR-9 due date: 31st December of next financial year (e.g., FY 2023-24 GSTR-9 due by 31st Dec 2024). Annual return: Consolidation of all GSTR-1 and GSTR-3B filed during the year. Reconciliation: Match GSTR-9 with books of accounts (sales register, ledger). Verify: Total sales, Total tax paid, TCS credit claimed, Any amendments/corrections. GSTR-9C (Audit): If turnover >₹5 crore → GST audit by CA mandatory → Reconciliation statement + CA certificate. We prepare GSTR-9 with complete annual reconciliation and audit certification (if required).",
                    duration: "Annually (by 31st Dec)",
                  },
                  {
                    step: 10,
                    title: "Platform-Specific Compliance (Ongoing)",
                    description:
                      "Zomato/Swiggy compliance: Monthly settlement reconciliation (match sales, TCS, commission, net payout). GSTR-8 verification: Check if platform filed GSTR-8 correctly (your TCS should appear in their filing). Maintain documentation: Platform settlement reports (PDF/Excel), Email confirmations from platform, TCS certificates (if issued by platform). Update GSTIN on platform: Ensure your GSTIN is correctly entered in Zomato/Swiggy partner profile. Invoice sharing: Some platforms ask for invoice copies for tax compliance — provide GST-compliant bills. We handle all platform reconciliation, TCS verification, and documentation maintenance.",
                    duration: "Monthly",
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
                  Compliance Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Monthly cycle:</strong> GSTR-1 by 11th, GSTR-3B by 20th
                  (tax payment before filing). <strong>Annual:</strong> GSTR-9 by
                  31st December. <strong>Ongoing:</strong> Daily sales recording,
                  monthly platform reconciliation. Taxvio handles all deadlines,
                  filings, and reconciliations — you focus on running your
                  restaurant!
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Restaurant GST Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For GST Registration
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card of proprietor/partners/directors",
                    "Aadhaar card (for Aadhaar-based verification)",
                    "FSSAI license (Basic/State/Central) — MANDATORY",
                    "Business address proof (rent agreement, property tax receipt, electricity bill)",
                    "Business ownership proof (NOC from landlord if rented)",
                    "Bank account statement (last 3 months) + cancelled cheque",
                    "Photographs (proprietor/partners/directors — passport size)",
                    "Digital signature (DSC) or Aadhaar-based e-sign",
                    "Authorization letter (if CA/consultant is filing on your behalf)",
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
                  For Monthly Return Filing
                </p>
                <ul className="space-y-3">
                  {[
                    "Daily sales register (dine-in, takeaway, platform orders)",
                    "Billing software data export (sales summary — Excel/CSV)",
                    "Zomato settlement reports (monthly — download from partner portal)",
                    "Swiggy settlement reports (monthly — download from partner portal)",
                    "Uber Eats / other platform reports (if applicable)",
                    "Bank statements (showing platform settlements received)",
                    "Purchase invoices (for capital goods ITC, if applicable)",
                    "GSTR-2B (auto-generated — for TCS verification)",
                    "Previous month's GSTR-1 and GSTR-3B (for continuity check)",
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
                📌 Platform-Specific Documents
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Zomato partner login credentials (for report download)",
                  "Swiggy partner login credentials",
                  "Order-wise sales data (CSV/Excel export from platform)",
                  "Commission structure (% charged by platform — for reconciliation)",
                  "TCS deduction summary (from platform settlement report)",
                  "Refund/cancellation report (to adjust gross sales)",
                  "Platform agreement/contract (terms of service)",
                  "GSTIN confirmation email from platform (after linking GSTIN)",
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Avoid These Errors" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Restaurant GST Mistakes
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Restaurant GST compliance has unique pitfalls. Here are critical
                mistakes to avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Not Reporting Platform Sales in GSTR-1",
                    icon: "📱",
                    problem:
                      "Thinking Zomato/Swiggy sales are 'platform's responsibility' and not reporting them in your GSTR-1. This is WRONG. Platform collects GST from customer and deducts TCS from you, but YOU are still liable to report gross sales in GSTR-1. Not reporting = Underreporting sales = Tax demand + penalty when department cross-checks with platform's GSTR-8.",
                    solution:
                      "ALWAYS report TOTAL sales (dine-in + takeaway + platform orders) in GSTR-1. Platform sales go in B2C section (summary reporting, no invoice-wise details). Reconcile monthly: Your GSTR-1 sales should match (Billing software sales + Platform sales). Taxvio ensures all sales channels are correctly reported in GSTR-1.",
                  },
                  {
                    mistake: "Claiming ITC on Food Inputs (Not Allowed)",
                    icon: "🚫",
                    problem:
                      "Claiming input tax credit on food ingredients, packaging, rent thinking it's allowed. Restaurant service @5% is in 'no ITC' category — ITC claim will be DISALLOWED during audit, leading to demand + 18% interest + penalty. Wrong ITC claim is a serious compliance violation.",
                    solution:
                      "DO NOT claim ITC on: Food ingredients, packaging materials, rent, gas/electricity (for restaurant service). Claim ITC ONLY on: Capital goods (during purchase/expansion), Outdoor catering inputs (if you provide 18% GST catering service separately). Review all ITC claims with CA before filing GSTR-3B. Taxvio audits ITC eligibility for restaurant compliance.",
                  },
                  {
                    mistake: "TCS Reconciliation Mismatch (GSTR-2B vs Platform)",
                    icon: "🔢",
                    problem:
                      "Not verifying TCS credit in GSTR-2B matches platform TCS deductions. If platform files GSTR-8 late or with errors, your GSTR-2B won't show full TCS credit. You end up paying MORE cash tax (because TCS credit is not adjusted). Department may later refund excess tax, but cash flow is affected.",
                    solution:
                      "Monthly TCS reconciliation: Download GSTR-2B on 14th of next month → Check Table 3.1.1 (TCS by e-commerce operators) → Match with total TCS deducted by platforms (from settlement reports). If mismatch: Contact platform support immediately, Track platform's GSTR-8 filing status, Adjust in next month's GSTR-3B if credit appears late. Taxvio provides monthly TCS reconciliation and platform follow-up.",
                  },
                  {
                    mistake: "Using Composition Scheme While Selling on Zomato/Swiggy",
                    icon: "⚖️",
                    problem:
                      "Opting for composition scheme but continuing to sell on Zomato/Swiggy (e-commerce platforms). This is ILLEGAL — composition scheme prohibits supplies through e-commerce operators. If caught, department will cancel composition eligibility, raise demand for differential tax (regular scheme tax vs composition tax), and impose penalty.",
                    solution:
                      "If you sell on Zomato/Swiggy → You CANNOT opt composition scheme (must be on regular scheme). If you want composition: Only dine-in/takeaway allowed (no e-commerce), File CMP-04 to withdraw from e-commerce platforms, Or transition to regular scheme. Taxvio advises on composition eligibility based on your sales channels.",
                  },
                  {
                    mistake: "Not Maintaining Invoice/Bill Documentation",
                    icon: "📄",
                    problem:
                      "Not saving copies of customer bills, platform settlement reports, bank statements. During GST audit or TCS verification, department asks for: Invoice copies (for sales verification), Platform reports (to match TCS credit), Bank statements (to verify receipts). Without documentation, you cannot defend your GST filings = Penalty risk.",
                    solution:
                      "Maintain properly: Physical/digital copies of all customer bills (KOT), Daily sales register (date-wise summary), Platform settlement reports (PDF + Excel — monthly), Bank statements highlighting platform settlements, GSTR-1, GSTR-3B, GSTR-2B copies (monthly). Keep for minimum 6 YEARS (audit period). Use cloud storage (Google Drive/Dropbox) for digital backup. Taxvio provides documentation checklist and cloud filing system.",
                  },
                  {
                    mistake: "Wrong GST Rate Application (18% Instead of 5%)",
                    icon: "💰",
                    problem:
                      "Charging 18% GST thinking restaurant service is 18% (confusing with outdoor catering rate). Restaurant dine-in/takeaway is 5% GST (no ITC). Charging wrong rate = Customer complaint, Invoice mismatch, Excess GST collected must be deposited to government (cannot be retained).",
                    solution:
                      "Know the rates: Dine-in/Takeaway/Platform delivery: 5% GST (SAC 996331), Outdoor catering: 18% GST (SAC 996332), Hotel room service: 5% (if room <₹7,500/day), 18% (if room ≥₹7,500/day). Update billing software with correct rates. Train billing staff on rate application. Taxvio provides rate advisory and billing software configuration.",
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
              Taxvio's Restaurant GST Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Specialized GST compliance services for restaurants, cloud kitchens,
              cafes, hotels, and hospitality businesses — from registration to
              monthly filing and platform reconciliation.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📝",
                  title: "GST Registration (Restaurant/Cloud Kitchen)",
                  desc: "Complete GST registration with FSSAI license linking. Includes: Document collection, REG-01 filing, follow-up with department, GSTIN certificate download. FSSAI assistance if needed (additional charges apply). Composition scheme advisory.",
                  price: "₹2,999",
                },
                {
                  icon: "📊",
                  title: "Monthly GST Return Filing (GSTR-1 + GSTR-3B)",
                  desc: "Complete monthly return filing including: Sales data collection (billing software + platform reports), Platform reconciliation (Zomato/Swiggy), GSTR-1 filing (by 11th), GSTR-2B review, TCS credit verification, GSTR-3B filing with tax payment (by 20th).",
                  price: "₹2,999/month",
                },
                {
                  icon: "📱",
                  title: "Platform Reconciliation (Zomato/Swiggy/Uber Eats)",
                  desc: "Monthly reconciliation of food aggregator platform sales with GST returns. Includes: Settlement report download and analysis, TCS credit matching (GSTR-2B vs platform), Gross sales vs net settlement verification, Bank reconciliation, Mismatch resolution and platform communication.",
                  price: "₹1,999/month",
                },
                {
                  icon: "🔄",
                  title: "Composition Scheme Enrollment (if eligible)",
                  desc: "Composition scheme advisory and enrollment for restaurants with turnover ≤₹1.5 crore (dine-in/takeaway only, no e-commerce). Includes: Eligibility assessment, CMP-02 form filing, Quarterly return setup, Invoice format guidance (composition tax invoice).",
                  price: "₹1,499",
                },
                {
                  icon: "📜",
                  title: "FSSAI License Assistance",
                  desc: "Application and obtaining of FSSAI license (Basic/State/Central) required for GST registration. Includes: License type advisory, Document preparation, Online application filing, Follow-up till approval. FSSAI-GST linking support.",
                  price: "₹4,999",
                },
                {
                  icon: "🔍",
                  title: "GST Audit & ITC Review (Annual)",
                  desc: "Annual GST compliance audit for restaurants. Includes: Review of all GSTR-1, GSTR-3B filings, ITC eligibility verification (capital goods, outdoor catering), Platform TCS reconciliation (yearly), Sales vs return matching, GSTR-9 preparation, GSTR-9C certification (if turnover >₹5 cr).",
                  price: "₹9,999/year",
                },
                {
                  icon: "💼",
                  title: "Cloud Kitchen GST Package (Complete)",
                  desc: "Specialized package for cloud kitchens (delivery-only model). Includes: GST + FSSAI registration, Monthly return filing (12 months), Platform reconciliation (Zomato/Swiggy), Annual GSTR-9 filing, Dedicated support for multi-brand cloud kitchens.",
                  price: "₹39,999/year",
                },
                {
                  icon: "🏨",
                  title: "Hotel & Banquet Hall GST Compliance",
                  desc: "GST compliance for hotels, banquet halls, resorts. Includes: Registration with multiple revenue streams (rooms, F&B, banquets), Multi-rate return filing (5% F&B, 18% banquets), ITC optimization on capital goods, Event booking GST advisory, Monthly return filing + annual audit.",
                  price: "₹4,999/month",
                },
                {
                  icon: "🎓",
                  title: "Staff Training (Billing & Compliance)",
                  desc: "On-site or online training for restaurant staff (2-3 hours session). Topics: GST basics for restaurants (5% rate, no ITC), Billing software usage (GST-compliant invoicing), Platform sales reporting, Basic compliance do's and don'ts. Certificate provided.",
                  price: "₹4,999",
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
                📦 Restaurant Compliance Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Startup (Single Outlet)",
                    price: "₹2,999/month",
                    includes: [
                      "Monthly GSTR-1 + GSTR-3B filing",
                      "Platform reconciliation (1 platform)",
                      "Email support",
                      "Annual GSTR-9 preparation",
                    ],
                  },
                  {
                    package: "Growth (Multi-Outlet or Cloud Kitchen)",
                    price: "₹4,999/month",
                    includes: [
                      "Monthly returns for all outlets",
                      "Platform reconciliation (2+ platforms)",
                      "ITC advisory",
                      "Phone + email support",
                      "Quarterly compliance review",
                    ],
                  },
                  {
                    package: "Premium (Chain or Hotel)",
                    price: "₹9,999/month",
                    includes: [
                      "Multi-location return filing",
                      "Complete platform reconciliation",
                      "ITC optimization",
                      "Dedicated account manager",
                      "Priority WhatsApp support",
                      "GST + FSSAI compliance",
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
              Real Stories from Our Restaurant Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sharma Dhaba",
                  location: "Muzaffarnagar",
                  text: "We were selling on Zomato but didn't know about TCS compliance and Section 9(5). Taxvio explained everything, reconciled 6 months of platform sales, and filed all pending returns. Now our GST is compliant and we understand how TCS works. Great service for restaurant owners!",
                },
                {
                  name: "Cloud Kitchen Express",
                  location: "Noida",
                  text: "As a cloud kitchen selling on Swiggy and Zomato, our GST reconciliation was a nightmare. Taxvio handles monthly platform reconciliation, matches TCS credit, and files returns on time. We just focus on cooking and they handle all GST compliance. Highly recommended!",
                },
                {
                  name: "Grand Banquet Hall",
                  location: "Delhi NCR",
                  text: "Our hotel has restaurant, banquet hall, and rooms — different GST rates for each. Taxvio set up our GST with proper classification, handles multi-rate invoicing, and optimizes ITC on capital goods. They also trained our billing staff. Very professional team.",
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
              Restaurant GST Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides specialized GST services for restaurants, cloud kitchens,
              cafes, hotels, and hospitality businesses across{" "}
              <strong>Noida</strong>, <strong>Delhi NCR</strong>,{" "}
              <strong>Meerut</strong>, <strong>Ghaziabad</strong>,{" "}
              <strong>Mumbai</strong>, and pan-India online.
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
              Related Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "FSSAI License",
                  icon: "📜",
                  link: "/serviceslist/licenses/fssai-registration",
                  desc: "Food business license registration.",
                },
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
                  title: "Trade License",
                  icon: "🏪",
                  link: "/serviceslist/licenses/trade-license",
                  desc: "Municipal trade license for restaurants.",
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
                    Focus on Food, We Handle GST
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get GST Compliant for Your Restaurant or Cloud Kitchen
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Running a restaurant, cafe, cloud kitchen, or hotel? Taxvio
                    provides complete GST compliance — registration with FSSAI
                    linking, monthly return filing, Zomato/Swiggy platform
                    reconciliation, Section 9(5) TCS compliance, and ITC
                    optimization. Starting ₹2,999/month. Serve food with peace of
                    mind — we handle all GST complexities!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get Started — ₹2,999/mo
                  </Link>
                  <InquiryForm />
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
      q: "Do I need separate GST registration for each restaurant outlet?",
      a: "It depends on whether your outlets are in the SAME STATE or DIFFERENT STATES: (1) SAME STATE (multiple outlets in one state): You can register ALL outlets under ONE GSTIN (additional place of business). During GST registration, mention all outlet addresses in 'Additional Places of Business' section. Advantage: Single GSTIN, one return filing for all outlets (consolidated sales). (2) DIFFERENT STATES (outlets in multiple states): You MUST obtain SEPARATE GSTIN for EACH STATE. Example: If you have outlets in Delhi, UP, and Maharashtra → you need 3 GSTINs (one per state). Each state GSTIN files separate returns. Inter-state supplies between your own outlets are treated as IGST transactions. Recommendation: For multi-state chains, consult CA for GSTIN structure and inter-state supply compliance. Taxvio helps multi-location restaurants with centralized GST compliance.",
    },
    {
      q: "Can I opt for composition scheme if I have both dine-in and Zomato/Swiggy delivery?",
      a: "NO. If you supply food through e-commerce operators (Zomato, Swiggy, Uber Eats), you are NOT ELIGIBLE for composition scheme. Section 10(2)(d) of CGST Act prohibits composition scheme for businesses making supplies through e-commerce operators. Your options: (1) Choose REGULAR SCHEME (5% GST + monthly return filing) — you can supply through platforms + dine-in. (2) Stop e-commerce supplies (Zomato/Swiggy) and opt for composition scheme (only dine-in/takeaway allowed). Most restaurants selling on platforms stay on regular scheme (since rate is same 5% anyway, only filing frequency differs — monthly vs quarterly). Exception: If you have separate brands/outlets — one for dine-in only (composition eligible) and another for platform delivery (regular scheme) — you can register them separately with different GSTINs (complex, usually not practical).",
    },
    {
      q: "What if I provide both restaurant service and outdoor catering — how to handle different GST rates?",
      a: "If you provide BOTH restaurant service (5% GST) and outdoor catering (18% GST), you must: (1) Maintain SEPARATE ACCOUNTING for both services: Restaurant sales (dine-in/takeaway) → SAC 996331, 5% GST. Outdoor catering sales (events, weddings, corporate) → SAC 996332, 18% GST. (2) Issue SEPARATE INVOICES with correct SAC code and rate for each service. (3) In GSTR-1: Report restaurant sales in one row (SAC 996331, 5% rate). Report outdoor catering in another row (SAC 996332, 18% rate). (4) ITC CLAIM: For restaurant service inputs → NO ITC (even if you buy at 18% GST). For outdoor catering inputs → FULL ITC allowed (claim in GSTR-3B). Challenge: If you use COMMON inputs (kitchen, staff, packaging) for both services, you must APPORTION ITC (claim only the portion used for outdoor catering). Taxvio helps with input segregation and ITC apportionment for mixed-service restaurants.",
    },
    {
      q: "How to handle customer cancellations and refunds in GST return filing?",
      a: "For restaurant order cancellations and refunds (common in platform orders): (1) If order is CANCELLED BEFORE BILLING (food not prepared): No GST invoice issued → No need to report in GSTR-1. Simply don't include in sales. (2) If order is CANCELLED AFTER BILLING (invoice issued, food prepared but customer cancelled): You have issued tax invoice → Must report in GSTR-1 initially. Issue CREDIT NOTE (to customer or platform) for the refund. In NEXT MONTH'S GSTR-1 → Report credit note in Table 9B (reduces sales). Net effect: Original sale in Month 1, Credit note in Month 2 → Net sales = Sale - Credit note. (3) Platform cancellations (Zomato/Swiggy): Platform settlement report shows NET sales (gross sales - cancellations). Report GROSS sales in GSTR-1 (before cancellations) → Platform adjusts cancellations in their TCS calculation. Alternatively, report NET sales in GSTR-1 (after cancellations) — simpler approach, but ensure it matches platform's GSTR-8 filing. Recommendation: Report NET sales (as per platform settlement) to avoid mismatch. Taxvio reconciles platform cancellations with GSTR-1 sales reporting.",
    },
    {
      q: "Do I need to charge GST on home delivery charges separately?",
      a: "DELIVERY CHARGES in restaurant service are treated as follows: (1) Dine-in service: No delivery (not applicable). (2) Takeaway/Self-delivery (your own delivery staff): Delivery charge is PART OF RESTAURANT SERVICE → Charge 5% GST on total (food + delivery). Example: Food ₹500 + Delivery ₹50 = ₹550 (taxable value) → GST @5% = ₹27.50 → Total = ₹577.50. (3) Platform delivery (Zomato/Swiggy): Platform charges delivery from customer separately (platform's service, NOT yours) → You charge 5% GST only on food value (not on delivery). Platform files separate GST return for delivery service (18% or 5% depending on classification). Note: If you show delivery charge separately on invoice (for your own delivery), clarify it's included in 5% GST (not separate service). Avoid charging separate delivery GST — include in composite supply at 5%. Taxvio advises on correct GST treatment of delivery charges based on your delivery model.",
    },
    {
      q: "What is the difference between FSSAI Basic Registration and State License?",
      a: "FSSAI license types based on business size: (1) BASIC FSSAI REGISTRATION (14-digit number): For SMALL food businesses with annual turnover <₹12 lakh. Validity: 1-5 years (renewable). Application: Online on FSSAI portal (State authority approves). Cost: ₹100 (registration fee). Suitable for: Small dhabas, home-based cloud kitchens, food stalls. (2) STATE FSSAI LICENSE (14-digit number): For MEDIUM food businesses with turnover ₹12 lakh - ₹20 crore/year. Validity: 1-5 years. Application: Online (State Food Safety Officer approves). Cost: ₹2,000-₹5,000 (based on category). Suitable for: Restaurants, cafes, mid-size cloud kitchens, hotels. (3) CENTRAL FSSAI LICENSE (10-digit number): For LARGE food businesses with turnover >₹20 crore OR multi-state operations, importers/exporters. Issued by Central FSSAI (Delhi). Cost: ₹7,500+ (based on category). For GST: ALL types are acceptable (Basic/State/Central). Most restaurants need STATE LICENSE (turnover >₹12 lakh). Taxvio assists with FSSAI application of appropriate type.",
    },
    {
      q: "Can Taxvio help with past GST return filing for restaurants (pending returns)?",
      a: "Yes, absolutely. We specialize in GST compliance for restaurants with pending/unfiled returns. Our process for past return filing: (1) Assessment: Review your sales data (billing software, platform reports, bank statements) for pending months. Identify which returns are pending (GSTR-1, GSTR-3B, both). (2) Data Compilation: Collect sales invoices, platform settlement reports, purchase invoices (if any ITC). Reconcile sales channel-wise (dine-in, takeaway, Zomato, Swiggy). (3) Return Preparation: Prepare month-wise GSTR-1 (sales reporting) and GSTR-3B (tax payment). Calculate late fees and interest (₹50/day for GSTR-3B, ₹20/day for GSTR-1, max ₹10,000). (4) Sequential Filing: File pending returns in chronological order (oldest first). Pay accumulated tax + interest + late fee. (5) Regularization: Bring compliance up-to-date, set up monthly filing system to avoid future delays. We handle: Past 6 months, 1 year, or 2 years of pending returns. Platform reconciliation for all pending months. Liaison with department if any queries arise. Contact us with your GSTIN and pending period — we'll provide a quote and timeline.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Restaurant GST
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