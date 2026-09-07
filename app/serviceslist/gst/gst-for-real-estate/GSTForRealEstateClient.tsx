// app/serviceslist/gst/gst-for-real-estate/GSTForRealEstateClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST Compliance Services for Real Estate & Construction",
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
    "Specialized GST compliance services for real estate developers, builders, contractors, and construction companies. Complete support for GST rate applicability advisory (affordable housing 1% with conditions, regular residential 5% without ITC, commercial projects 12% with ITC), input tax credit (ITC) eligibility assessment and restrictions on construction inputs, ITC reversal calculations (80:20 rule for land vs construction), joint development agreement (JDA) structuring and GST implications, works contract services GST compliance and reverse charge mechanism (RCM) on contractor payments, RERA registration-GST linking and project-wise compliance, land value vs construction value bifurcation for invoicing, TDR (Transferable Development Rights) and FSI (Floor Space Index) GST treatment, monthly GSTR-1 and GSTR-3B filing for real estate projects, and complete real estate GST advisory. Serving builders, developers, contractors across Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "Real Estate & Construction GST Compliance",
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
      name: "What is the GST rate for under-construction residential properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST rate for under-construction residential properties depends on whether the property qualifies as 'affordable housing' or 'regular housing': (1) AFFORDABLE HOUSING: 1% GST (0.5% CGST + 0.5% SGST) without input tax credit (ITC). Conditions: Carpet area ≤60 sqm (646 sq ft) in metro cities OR ≤90 sqm (969 sq ft) in non-metro cities, AND Gross amount charged ≤₹45 lakh. (2) REGULAR HOUSING (Non-Affordable): 5% GST (2.5% CGST + 2.5% SGST) without ITC. Applies to all residential properties NOT meeting affordable housing criteria. (3) COMMERCIAL PROJECTS: 12% GST (6% CGST + 6% SGST) with full ITC on inputs. Note: 'Without ITC' means builder cannot claim input tax credit on construction inputs (cement, steel, labor) — GST is borne as cost. Land value is EXCLUDED from GST (only construction value attracts GST).",
      },
    },
    {
      "@type": "Question",
      name: "What is the 80:20 rule for land value in real estate GST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 80:20 rule is used to BIFURCATE total consideration into LAND VALUE (exempt from GST) and CONSTRUCTION VALUE (taxable under GST) when builder charges a lump-sum amount for property: Rule: Out of total property price, 1/3rd (33.33%) is deemed as LAND VALUE (no GST), and 2/3rd (66.67%) is deemed as CONSTRUCTION VALUE (GST applicable). Alternatively expressed: For every ₹100 charged, ₹33.33 = land (no GST), ₹66.67 = construction (GST applies). Example calculation: Total property price = ₹50 lakh. Land value (1/3rd) = ₹16.67 lakh (no GST). Construction value (2/3rd) = ₹33.33 lakh. GST @5% on ₹33.33 lakh = ₹1.67 lakh. Total amount payable = ₹50 lakh + ₹1.67 lakh = ₹51.67 lakh. Important: Builder cannot charge GST on land portion (land sale is exempt). Builder must show land and construction values separately in sale agreement and GST invoice. Taxvio helps calculate correct land-construction bifurcation as per project cost sheet and ensure compliant invoicing.",
      },
    },
    {
      "@type": "Question",
      name: "What is Reverse Charge Mechanism (RCM) in construction and when does it apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reverse Charge Mechanism (RCM) is a provision where the RECIPIENT of service (instead of supplier) is liable to pay GST to the government. In construction, RCM applies under Section 9(3) when: BUILDER hires CONTRACTOR for works contract services (construction, fabrication, installation), AND Contractor is REGISTERED under GST. How RCM works: (1) Contractor provides works contract service and issues invoice WITHOUT charging GST (invoice shows 'payable under RCM by recipient'). (2) Builder (recipient) pays contractor the invoice amount (without GST). (3) Builder pays GST directly to government under RCM (via GSTR-3B). (4) Builder can claim ITC on RCM GST paid (if project qualifies for ITC — e.g., commercial projects). GST rate under RCM: 18% (9% CGST + 9% SGST) on works contract value. Example: Builder hires contractor for ₹10 lakh work. Contractor's invoice = ₹10 lakh (no GST charged). Builder pays ₹10 lakh to contractor. Builder pays ₹1.8 lakh GST (18% of ₹10 lakh) to government under RCM in GSTR-3B. Builder claims ₹1.8 lakh ITC (if eligible). Exception: RCM does NOT apply if contractor is UNREGISTERED (turnover <₹20 lakh) — then contractor himself pays GST (if liable).",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTForRealEstateClient() {
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
          🏗️ Real Estate Developer? Get GST Rate Advisory & ITC Optimization — Expert Support
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
              <span className="text-white">GST for Real Estate</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏗️ Real Estate GST
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST Services for
                  <br />
                  <span className="text-[#7ecbf0]">Real Estate</span>
                  <br />
                  & Construction
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Are you a{" "}
                  <strong className="text-white">
                    real estate developer, builder, contractor
                  </strong>
                  , or{" "}
                  <strong className="text-white">
                    construction company
                  </strong>
                  ? Real estate GST has{" "}
                  <strong className="text-white">
                    complex rate structures (1% affordable, 5% regular, 12%
                    commercial), ITC restrictions, RCM on works contracts
                  </strong>
                  , land-construction bifurcation, and RERA compliance.{" "}
                  <strong className="text-white">Taxvio</strong> specializes in
                  real estate GST — rate applicability advisory, ITC
                  optimization, JDA structuring, works contract RCM compliance,
                  and complete monthly filing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get Real Estate GST — ₹9,999/mo →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20GST%20help%20for%20my%20real%20estate%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Rate Advisory (1%/5%/12%)",
                    "✅ ITC Optimization",
                    "✅ Works Contract RCM",
                    "✅ RERA-GST Linking",
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
                  Real Estate GST Essentials
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["🏘️", "Affordable housing: 1% GST"],
                    ["🏠", "Regular housing: 5% GST"],
                    ["🏢", "Commercial: 12% GST (with ITC)"],
                    ["📋", "80:20 land-construction rule"],
                    ["⚖️", "RCM on works contracts (18%)"],
                    ["🚀", "Service fee: ₹9,999/month"],
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
              { number: "150+", label: "Real Estate Projects", icon: "🏗️" },
              { number: "1%/5%/12%", label: "GST Rate Options", icon: "💰" },
              { number: "80:20", label: "Land-Construction Rule", icon: "📊" },
              { number: "₹9,999", label: "Monthly Fee", icon: "🎯" },
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
              "✔ Rate Experts",
              "✔ ITC Specialists",
              "✔ RCM Compliance",
              "✔ RERA-GST Linking",
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
          {/* REAL ESTATE GST BASICS */}
          <section id="real-estate-gst-basics">
            <SectionLabel text="Understanding Real Estate GST" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              GST Compliance for Real Estate & Construction
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Real estate</strong> under GST refers to supply of
                  under-construction properties (residential, commercial) by
                  builders/developers. Real estate GST has UNIQUE features —
                  multiple rate structures, ITC restrictions, land exemption,
                  and reverse charge on works contracts.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    💰 GST Rates for Real Estate Projects
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        🏘️ Affordable Housing — 1% GST (Effective Rate)
                      </p>
                      <p className="text-xs mb-2">
                        <strong>Rate:</strong> 1% (0.5% CGST + 0.5% SGST) without
                        input tax credit (ITC)
                      </p>
                      <p className="text-xs mb-2 font-bold text-blue-700">
                        Eligibility Conditions (ALL must be met):
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Carpet area:</strong> ≤60 square meters (646
                          sq ft) in metro cities (Delhi, Mumbai, Kolkata,
                          Chennai, Hyderabad, Bangalore)
                        </li>
                        <li>
                          • OR ≤90 square meters (969 sq ft) in non-metro cities
                        </li>
                        <li>
                          • <strong>Gross amount:</strong> Total consideration
                          (including land) ≤₹45 lakh
                        </li>
                        <li>
                          • <strong>RERA registered:</strong> Project must be
                          registered under RERA (Real Estate Regulatory Authority)
                        </li>
                        <li>
                          • <strong>No ITC:</strong> Builder CANNOT claim input
                          tax credit on construction inputs
                        </li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>Note:</strong> 1% GST is on CONSTRUCTION VALUE
                        only (land value is exempt). Using 80:20 rule, effective
                        GST on total price = ~0.67%.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        🏠 Regular Residential Housing — 5% GST
                      </p>
                      <p className="text-xs mb-2">
                        <strong>Rate:</strong> 5% (2.5% CGST + 2.5% SGST) without
                        ITC
                      </p>
                      <p className="text-xs mb-2">
                        <strong>Applicability:</strong> All residential
                        properties NOT qualifying as affordable housing (carpet
                        area &gt;60/90 sqm OR gross amount &gt;₹45 lakh)
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • GST applies ONLY on construction value (land exempt)
                        </li>
                        <li>
                          • Builder CANNOT claim ITC on inputs (cement, steel,
                          labor) — GST is borne as cost
                        </li>
                        <li>• RERA registration mandatory</li>
                        <li>
                          • Effective GST on total price (using 80:20 rule) =
                          ~3.33%
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        🏢 Commercial Projects — 12% GST (with ITC)
                      </p>
                      <p className="text-xs mb-2">
                        <strong>Rate:</strong> 12% (6% CGST + 6% SGST) WITH full
                        ITC
                      </p>
                      <p className="text-xs mb-2">
                        <strong>Applicability:</strong> Commercial properties
                        (offices, shops, malls, warehouses)
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • GST on construction value (land exempt, 80:20 rule
                          applies)
                        </li>
                        <li>
                          • Builder CAN claim FULL ITC on all construction inputs
                          (cement, steel, labor, machinery)
                        </li>
                        <li>
                          • Effective rate after ITC benefit = ~6-8% (depending
                          on input cost)
                        </li>
                        <li>• RERA registration if applicable</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-2">
                        🏡 Ready-to-Move (Completed) Properties — GST Exempt
                      </p>
                      <p className="text-xs mb-2">
                        <strong>GST:</strong> NIL (0%) — No GST on sale of
                        completed properties
                      </p>
                      <p className="text-xs mb-2">
                        <strong>Condition:</strong> Completion Certificate (CC)
                        must be obtained from local authority
                      </p>
                      <p className="text-xs text-gray-600">
                        <strong>Note:</strong> Stamp duty and registration
                        charges apply (state government levies, not GST).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    📊 80:20 Rule — Land vs Construction Bifurcation
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Since <strong>land is EXEMPT from GST</strong> (only
                    construction attracts GST), total property price must be
                    BIFURCATED into land value and construction value:
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-green-200">
                    <p className="font-bold text-green-700 text-sm mb-2">
                      📐 Standard Bifurcation Formula
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p>
                        <strong>Land value:</strong> 1/3rd (33.33%) of total
                        consideration — NO GST
                      </p>
                      <p>
                        <strong>Construction value:</strong> 2/3rd (66.67%) of
                        total consideration — GST applicable
                      </p>
                      <div className="bg-green-50 rounded-lg p-3 mt-2 border border-green-200">
                        <p className="font-bold text-green-700 mb-1">
                          💡 Example Calculation
                        </p>
                        <p>
                          <strong>Scenario:</strong> Flat price = ₹60 lakh
                          (regular housing, 5% GST)
                        </p>
                        <p>
                          <strong>Step 1:</strong> Land value = ₹60 lakh × 1/3 =
                          ₹20 lakh (no GST)
                        </p>
                        <p>
                          <strong>Step 2:</strong> Construction value = ₹60 lakh
                          × 2/3 = ₹40 lakh
                        </p>
                        <p>
                          <strong>Step 3:</strong> GST @5% on ₹40 lakh = ₹2 lakh
                        </p>
                        <p>
                          <strong>Total payable:</strong> ₹60 lakh (agreed price)
                          + ₹2 lakh (GST) = ₹62 lakh
                        </p>
                        <p className="mt-2 text-green-700">
                          <strong>Effective GST rate:</strong> ₹2 lakh / ₹60 lakh
                          = 3.33% (on total price)
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Important:</strong> Builder must show land and
                    construction values SEPARATELY in sale agreement and GST
                    invoice. Incorrect bifurcation can lead to GST demand.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    🚫 ITC Restrictions for Real Estate (1% & 5% GST Projects)
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    For residential projects taxed at <strong>1% or 5% GST</strong>
                    , builders are in <strong>"no ITC" category</strong> — CANNOT
                    claim input tax credit on:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Construction materials (cement, steel, bricks, sand, aggregates)",
                      "Labor/works contract services (contractor charges for construction)",
                      "Machinery & equipment (excavators, cranes, concrete mixers — if used for project)",
                      "Professional services (architect, engineer, CA fees for project)",
                      "Utilities (electricity, water connection charges)",
                      "Marketing & sales expenses (advertising, brokerage)",
                      "Any other inputs/services used for residential project construction",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white rounded-lg p-3 border border-purple-200 mt-3">
                    <p className="font-bold text-purple-700 text-xs mb-1">
                      💡 Impact of No ITC
                    </p>
                    <p className="text-xs text-gray-600">
                      Since ITC is not available, GST paid on inputs becomes COST
                      for the builder. Example: If builder pays 18% GST on cement
                      (₹1 lakh + ₹18,000 GST), the ₹18,000 GST CANNOT be
                      recovered — total cost = ₹1,18,000. This is factored into
                      property pricing.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    ⚖️ Reverse Charge Mechanism (RCM) on Works Contracts
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    When builder hires a <strong>registered contractor</strong>{" "}
                    for works contract services (construction, fabrication,
                    installation), <strong>RCM applies</strong> — builder pays GST
                    to government (not contractor):
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-orange-200">
                    <p className="font-bold text-orange-700 text-sm mb-2">
                      How RCM Works (Step-by-Step)
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="font-bold text-orange-700 mb-1">
                          1️⃣ Contractor Issues Invoice (No GST)
                        </p>
                        <p>
                          Contractor provides works contract service (e.g.,
                          construction work for ₹10 lakh). Contractor issues
                          invoice showing: Amount = ₹10 lakh, GST = NIL (payable
                          under RCM by recipient).
                        </p>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="font-bold text-orange-700 mb-1">
                          2️⃣ Builder Pays Contractor (Base Amount)
                        </p>
                        <p>
                          Builder pays ₹10 lakh to contractor (no GST component in
                          payment).
                        </p>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="font-bold text-orange-700 mb-1">
                          3️⃣ Builder Pays GST to Government (RCM)
                        </p>
                        <p>
                          Builder calculates GST: ₹10 lakh × 18% = ₹1.8 lakh (9%
                          CGST + 9% SGST). Builder pays ₹1.8 lakh GST to
                          government via GSTR-3B (Table 3.1(d) — inward supplies
                          liable to RCM).
                        </p>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="font-bold text-orange-700 mb-1">
                          4️⃣ Builder Claims ITC (if eligible)
                        </p>
                        <p>
                          For commercial projects (12% GST with ITC): Builder can
                          claim ₹1.8 lakh ITC on RCM GST paid (in GSTR-3B Table
                          4(A)(3)). For residential projects (1%/5% no ITC):
                          Builder CANNOT claim ITC — ₹1.8 lakh becomes COST.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Exception:</strong> RCM does NOT apply if contractor
                    is UNREGISTERED (turnover &lt;₹20 lakh) — then contractor pays
                    GST himself (if liable).
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    📜 RERA Registration & GST Compliance
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>
                      RERA (Real Estate Regulatory Authority) registration
                    </strong>{" "}
                    is MANDATORY for real estate projects to avail concessional
                    GST rates (1% or 5%):
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "RERA registration is compulsory for projects with >8 units or >500 sqm area",
                      "Without RERA registration: Project attracts 12% GST (commercial rate) even for residential properties",
                      "RERA number must be mentioned in GST invoices issued to buyers",
                      "GST department cross-verifies RERA registration during scrutiny/audit",
                      "RERA compliance includes timely project updates, quarterly progress reports, escrow account maintenance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    Taxvio assists with RERA-GST linking, ensures RERA number is
                    correctly mentioned in GST returns and invoices, and provides
                    advisory on RERA compliance requirements.
                  </p>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in GST compliance for real estate developers,
                  builders, contractors — rate advisory, ITC optimization, RCM
                  compliance, RERA-GST linking across Uttar Pradesh, Noida, Delhi
                  NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* COMPLIANCE PROCESS */}
          <section id="compliance-process">
            <SectionLabel text="Complete Compliance" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Real Estate GST Compliance Process
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                End-to-end GST compliance for real estate projects:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Project Classification & Rate Determination",
                    description:
                      "Analyze project to determine applicable GST rate: Review project specifications (carpet area of units, total project cost, location). Classify as: Affordable housing (1% GST) — if ALL units meet criteria (≤60/90 sqm carpet, ≤₹45 lakh price). Regular residential (5% GST) — if ANY unit exceeds affordable criteria. Commercial (12% GST with ITC) — offices, shops, malls. Verify RERA registration status (mandatory for 1%/5% rates). Calculate land vs construction value bifurcation (80:20 rule). Prepare project-wise rate applicability certificate. We provide detailed rate advisory based on project blueprints and cost sheet.",
                    duration: "3-5 days",
                  },
                  {
                    step: 2,
                    title: "GST Registration for Real Estate Project",
                    description:
                      "Register project under GST (if not already registered): File Form GST REG-01 on portal. Documents: PAN, Aadhaar, project address proof, RERA registration certificate, land documents, sale deeds, builder license. Mention: Nature of business (real estate development), RERA project number. Approval timeline: 3-7 days. For multiple projects in same state: Single GSTIN with project-wise accounting. For projects in different states: Separate GSTIN for each state. We handle GST registration with RERA linking and project documentation.",
                    duration: "7-10 days",
                  },
                  {
                    step: 3,
                    title: "Land-Construction Bifurcation & Invoice Format",
                    description:
                      "Set up compliant invoicing system: Calculate land value (1/3rd of total) and construction value (2/3rd) as per 80:20 rule. Prepare unit-wise pricing sheet showing: Total price, Land component (no GST), Construction component (GST applicable), GST amount, Total payable. Invoice format (sale agreement/allotment letter): Show land and construction values SEPARATELY. Mention GST rate, CGST, SGST amounts. Include RERA project number. Buyer's details (name, PAN, address). We provide GST-compliant invoice templates and unit-wise pricing calculator.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "Input Purchase & RCM Compliance Setup",
                    description:
                      "Manage input purchases and reverse charge compliance: For materials (cement, steel): Purchase from registered suppliers (collect tax invoices with GSTIN). For residential projects (1%/5%): Cannot claim ITC — GST is cost. For commercial projects (12%): Claim full ITC in GSTR-3B. For works contracts (contractor services): If contractor is REGISTERED: RCM applies — pay 18% GST to government, claim ITC if eligible. If contractor is UNREGISTERED: Contractor pays GST (if liable) — collect tax invoice. Maintain separate registers for: Material purchases, Works contract payments (RCM), Capital goods. We provide RCM compliance checklist and contractor verification service.",
                    duration: "Ongoing",
                  },
                  {
                    step: 5,
                    title: "Monthly GSTR-1 Filing (Buyer-wise Sales Reporting)",
                    description:
                      "GSTR-1 due: 11th of next month. Report sales to buyers (property allotments): B2B supplies: Unit sales to registered buyers (companies, LLPs) — report invoice-wise (buyer GSTIN, invoice number, value, tax). B2C supplies: Unit sales to individual buyers (no GSTIN) — report state-wise summary (total sales, GST). Bifurcation: Report only CONSTRUCTION VALUE (land is exempt, don't report land component in GST return). Mention RERA project number in invoice description. Include: Advance payments received from buyers (construction-linked payment plans), Balance payments, Cancellations/refunds (credit notes). We prepare buyer-wise sales register and file GSTR-1 with RERA compliance.",
                    duration: "By 11th of next month",
                  },
                  {
                    step: 6,
                    title: "Monthly GSTR-3B Filing (Tax Payment + RCM)",
                    description:
                      "GSTR-3B due: 20th of next month. Summary return: Table 3.1 — Outward supplies (sales to buyers — from GSTR-1). Table 3.1(d) — Inward supplies liable to RCM (works contract payments to registered contractors). Table 4 — ITC claimed: For commercial projects (12%): Claim ITC on materials, RCM GST paid, capital goods. For residential projects (1%/5%): NO ITC (leave Table 4 blank or show NIL). Table 6 — Tax liability: Output tax (sales × GST rate), Add: RCM GST (works contract), Less: ITC (if eligible), = Net tax payable. Generate challan, pay tax, file GSTR-3B. We handle complete monthly filing with RCM compliance and ITC optimization (for commercial projects).",
                    duration: "By 20th of next month",
                  },
                  {
                    step: 7,
                    title: "RERA Compliance & Periodic Updates",
                    description:
                      "Maintain RERA compliance (linked to GST eligibility): File quarterly progress reports with RERA authority (project construction status, sales updates). Update RERA website with project details, floor plans, approvals. Maintain 70% funds in RERA escrow account (for project construction). Ensure RERA number is valid and project status is 'active'. Cross-verify: GST invoices mention correct RERA number, Project classification (affordable/regular) matches RERA registration. We provide RERA-GST reconciliation service and ensure compliance for concessional GST rates.",
                    duration: "Quarterly",
                  },
                  {
                    step: 8,
                    title: "Annual GSTR-9 & Reconciliation",
                    description:
                      "GSTR-9 due: 31st December of next FY. Annual return: Consolidation of all monthly GSTR-1, GSTR-3B filed during the year. Reconciliation: Match GSTR-9 with: Project accounts (sales ledger, purchase ledger), RERA escrow account statements, Buyer allotment letters and payment receipts. Verify: Total sales reported = Total construction value billed (land excluded), RCM payments match contractor invoices, ITC claimed (commercial) matches input purchases. GSTR-9C audit (if turnover >₹5 crore): CA certification required. We prepare GSTR-9 with complete project-wise reconciliation and audit certification.",
                    duration: "Annually (by 31st Dec)",
                  },
                  {
                    step: 9,
                    title: "Joint Development Agreement (JDA) Structuring",
                    description:
                      "If project involves land owner + developer (JDA model): GST implications: Developer pays GST on development charges/consideration to land owner (if owner is registered). Land owner's share (flats/constructed area) is treated as consideration for development service. Calculate: Developer's revenue share (sale to buyers — GST @1%/5%/12%), Land owner's share (treated as payment for development service). JDA documentation: Clearly define revenue sharing, development charges, land value, constructed area sharing. GST invoicing: Developer issues invoice to land owner for development service (12% GST if commercial, 5% if residential). Land owner may need GST registration if annual receipt >₹20 lakh. We provide JDA structuring advisory, GST treatment analysis, and compliant documentation support.",
                    duration: "One-time (project start)",
                  },
                  {
                    step: 10,
                    title: "TDR/FSI Treatment & Additional Compliance",
                    description:
                      "Handle TDR (Transferable Development Rights) and FSI (Floor Space Index) transactions: TDR/FSI is right to build additional area — treated as service under GST. If builder purchases TDR/FSI from authority or landowner: GST @18% applicable (TDR is a service, not goods). Builder can claim ITC on TDR purchase (for commercial projects), cannot claim ITC for residential (1%/5%). If builder sells TDR/FSI to another developer: Issue invoice with 18% GST, report in GSTR-1 as service supply. Additional compliance: E-invoicing (if turnover >₹5 crore) — generate IRN for each sale invoice. TDS on property sale (if buyer is company/LLP) — 1% TDS on construction value. We provide TDR/FSI GST advisory, e-invoicing setup, and TDS compliance support.",
                    duration: "As applicable",
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
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-blue-300 rounded-2xl p-6">
                <p className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Compliance Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Monthly:</strong> GSTR-1 by 11th, GSTR-3B by 20th (with
                  RCM compliance). <strong>Quarterly:</strong> RERA progress
                  reports. <strong>Annual:</strong> GSTR-9 by 31st December.
                  <strong>Project-specific:</strong> Rate classification at start,
                  JDA structuring, TDR/FSI compliance as applicable. Taxvio handles
                  all deadlines, filings, and real estate-specific GST complexities!
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Real Estate GST Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For GST Registration & Project Setup
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card of proprietor/partners/directors",
                    "Aadhaar card (for Aadhaar-based verification)",
                    "RERA registration certificate (project-wise) — MANDATORY for 1%/5% rates",
                    "Project address proof (land documents, sale deed, lease agreement)",
                    "Building plan approval from local authority",
                    "Builder license / contractor license (if applicable)",
                    "Bank account statement (project escrow account if RERA registered)",
                    "Photographs (proprietor/partners/directors)",
                    "Authorization letter (if CA/consultant filing)",
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
                    "Buyer allotment letters / booking forms (unit-wise sales agreements)",
                    "Payment receipts from buyers (construction-linked payments, advances)",
                    "Project cost sheet (land vs construction bifurcation — 80:20 calculation)",
                    "Material purchase invoices (cement, steel, bricks — with supplier GSTIN)",
                    "Works contract invoices from contractors (RCM applicable if contractor registered)",
                    "Professional service invoices (architect, engineer, CA, legal)",
                    "RERA quarterly progress reports (project status updates)",
                    "Escrow account statement (RERA mandated 70% fund tracking)",
                    "Buyer cancellations / refunds (credit note documentation)",
                    "TDR/FSI purchase invoices (if applicable)",
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
                📌 Project-Specific Documents
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Unit-wise pricing sheet (showing land + construction bifurcation)",
                  "Sale deeds / conveyance deeds (land acquisition documents)",
                  "Joint Development Agreement (JDA) — if applicable",
                  "TDR/FSI certificates from authority",
                  "Completion certificate (CC) — if project completed (GST exempt)",
                  "NOC from local authority / municipal corporation",
                  "Environmental clearance (if large project)",
                  "Fire NOC, occupancy certificate (for commercial projects)",
                  "Previous GST returns filed (for continuity check)",
                  "Contractor agreements (works contract terms, payment schedules)",
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
              Common Real Estate GST Mistakes
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Real estate GST compliance has critical pitfalls. Here's what to
                avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Charging GST on Land Component (Incorrect Bifurcation)",
                    icon: "📊",
                    problem:
                      "Charging GST on TOTAL property price without bifurcating land value and construction value. Example: Charging 5% GST on ₹60 lakh (total price) = ₹3 lakh GST (WRONG). Correct: 5% GST on ₹40 lakh (construction value after 80:20 bifurcation) = ₹2 lakh GST. Overcharging GST = Buyer complaint, demand to refund excess GST, penalty for wrong tax collection.",
                    solution:
                      "ALWAYS bifurcate total price into: Land value = 1/3rd (no GST), Construction value = 2/3rd (GST applicable). Show bifurcation clearly in sale agreement and GST invoice. Use 80:20 rule formula: Land = Price × 33.33%, Construction = Price × 66.67%. Taxvio provides unit-wise pricing calculator with automatic bifurcation for compliant invoicing.",
                  },
                  {
                    mistake: "Applying Wrong GST Rate (Affordable vs Regular Confusion)",
                    icon: "🏘️",
                    problem:
                      "Charging 1% GST (affordable rate) when project doesn't meet ALL affordable housing criteria. Example: Project has units with carpet area 65 sqm (exceeds 60 sqm metro limit) — charging 1% GST instead of 5%. Department will raise demand for differential 4% GST + interest + penalty on ALL sales. Entire project becomes non-compliant.",
                    solution:
                      "Verify ALL affordable housing conditions BEFORE applying 1% rate: Carpet area ≤60 sqm (metro) or ≤90 sqm (non-metro) for EVERY unit. Total price ≤₹45 lakh for EVERY unit. RERA registered. If even ONE unit fails criteria, ENTIRE project is 5% GST (not mixed rates). Get project classification certificate from CA before issuing first invoice. Taxvio provides detailed rate applicability analysis based on unit-wise specifications.",
                  },
                  {
                    mistake: "Not Paying RCM on Works Contracts (Contractor GST Missed)",
                    icon: "⚖️",
                    problem:
                      "Hiring registered contractor for construction work, paying full amount including GST, but NOT paying RCM to government separately. Contractor doesn't pay GST (expecting builder to pay under RCM). Builder also doesn't pay RCM (thinking contractor paid). Result: GST unpaid, department raises demand on builder + 18% interest + penalty.",
                    solution:
                      "Verify contractor's GST status BEFORE payment: If registered: RCM applies — pay contractor base amount (no GST), pay 18% GST separately to government via GSTR-3B Table 3.1(d). If unregistered (turnover <₹20 lakh): Contractor pays GST (if liable) — collect tax invoice from contractor. Maintain contractor register: Name, GSTIN (if registered), Invoice details, RCM GST paid (proof — GSTR-3B challan). Taxvio provides RCM compliance checklist and contractor verification service for all works contracts.",
                  },
                  {
                    mistake: "Missing RERA Number in GST Invoices (Audit Red Flag)",
                    icon: "📜",
                    problem:
                      "Issuing GST invoices to buyers without mentioning RERA project number. RERA registration is MANDATORY for 1%/5% GST rates. Invoice without RERA number = Non-compliant invoice, buyer may refuse payment, GST audit will raise query (how did you claim concessional rate without RERA?), Risk of rate re-assessment from 1%/5% to 12% (commercial rate).",
                    solution:
                      "Mention RERA project number in EVERY GST invoice issued to buyers. Invoice format: Buyer details, Unit details (number, area), Land value (no GST), Construction value (GST applicable), GST rate, CGST, SGST, RERA Project Number (mandatory field), Total amount. Cross-verify: RERA number is active and project status is valid on RERA website. Update invoices if RERA number changes (renewal, amendments). Taxvio provides GST invoice templates with RERA number field and auto-validation.",
                  },
                  {
                    mistake: "Claiming ITC on Residential Projects (1%/5% No ITC)",
                    icon: "🚫",
                    problem:
                      "Claiming input tax credit (ITC) on cement, steel, contractor payments for residential projects taxed at 1% or 5% GST. ITC is BLOCKED for residential projects — cannot claim credit on ANY inputs. Claiming ITC = Wrong ITC claim, department will disallow + demand reversal + 18% interest + 100% penalty. Annual audit (GSTR-9C) will catch this error.",
                    solution:
                      "Do NOT claim ITC for 1%/5% residential projects (affordable or regular housing). Accept that GST paid on inputs is COST — factor into property pricing. Claim ITC ONLY for: Commercial projects (12% GST with ITC), Common capital goods used across multiple projects (proportionate ITC). Maintain separate accounting: Residential project inputs (no ITC) vs Commercial project inputs (ITC eligible). Taxvio conducts project-wise ITC eligibility audit to ensure compliance.",
                  },
                  {
                    mistake: "Not Tracking Buyer Payments for GST (Time of Supply Error)",
                    icon: "💰",
                    problem:
                      "Collecting advances/installments from buyers (construction-linked payments) but not reporting GST liability in the month of receipt. Time of supply for real estate: EARLIER of invoice date OR payment receipt date. If buyer pays ₹10 lakh in March 2024 but invoice is issued in April 2024, GST liability arises in MARCH 2024 (when payment received). Not reporting in March = Late filing, interest @18% from April onwards.",
                    solution:
                      "Track ALL buyer payments (advances, installments) date-wise. Calculate GST liability on payment receipt date (not invoice date). Report in GSTR-1 and GSTR-3B of the month when payment is RECEIVED from buyer. Maintain buyer payment register: Date of payment, Amount, Installment number, GST applicable (on construction value), Invoice issued (yes/no). Even if invoice is issued later, GST liability arises on payment receipt. Taxvio provides buyer payment tracking system linked to GST return filing for accurate time of supply compliance.",
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
              Taxvio's Real Estate GST Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Specialized GST compliance for real estate developers, builders,
              contractors — from project classification to monthly filing and RERA
              compliance.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📊",
                  title: "Project Rate Classification (1%/5%/12%)",
                  desc: "Detailed analysis of project specifications to determine applicable GST rate. Includes: Unit-wise carpet area verification, Price threshold analysis (affordable ≤₹45 lakh), RERA registration verification, Rate applicability certificate. Ensures correct rate from project start.",
                  price: "₹4,999",
                },
                {
                  icon: "📝",
                  title: "GST Registration + RERA Linking",
                  desc: "Complete GST registration for real estate project with RERA compliance. Includes: REG-01 filing with project details, RERA certificate submission, Document collection and verification, GSTIN certificate download, Invoice format setup with RERA number.",
                  price: "₹2,999",
                },
                {
                  icon: "📊",
                  title: "Monthly GST Compliance (GSTR-1 + GSTR-3B)",
                  desc: "Complete monthly return filing for real estate projects. Includes: Buyer-wise sales data collection, 80:20 land-construction bifurcation, RCM compliance on works contracts, GSTR-1 filing (by 11th), GSTR-3B filing with tax payment (by 20th), RERA number verification in returns.",
                  price: "₹9,999/month",
                },
                {
                  icon: "🏗️",
                  title: "Works Contract RCM Compliance",
                  desc: "Complete reverse charge mechanism compliance for contractor payments. Includes: Contractor GSTIN verification, RCM tax calculation (18%), Payment to government via GSTR-3B, ITC claim (if eligible — commercial projects), Contractor register maintenance, RCM audit support.",
                  price: "₹2,999/month",
                },
                {
                  icon: "💰",
                  title: "Land-Construction Bifurcation (80:20 Calculator)",
                  desc: "Unit-wise land vs construction value calculation for compliant invoicing. Includes: 80:20 rule application, Unit-wise pricing sheet (showing land exempt, construction taxable), GST calculation on construction value, Invoice template with bifurcation, Buyer communication support.",
                  price: "₹1,999/project",
                },
                {
                  icon: "📜",
                  title: "RERA-GST Compliance Audit",
                  desc: "Verification of RERA registration and GST compliance linkage. Includes: RERA certificate validity check, Quarterly progress report review, Escrow account compliance verification, GST invoice RERA number audit, Rate classification validation, Compliance certificate.",
                  price: "₹4,999/quarter",
                },
                {
                  icon: "🤝",
                  title: "Joint Development Agreement (JDA) Structuring",
                  desc: "GST advisory for land owner-developer JDA arrangements. Includes: JDA GST implications analysis, Developer service charges calculation, Land owner's share treatment, Revenue sharing structure, GST invoicing between parties, Compliance documentation support.",
                  price: "₹19,999",
                },
                {
                  icon: "📅",
                  title: "Annual GST Audit (GSTR-9 + GSTR-9C)",
                  desc: "Annual return filing and audit certification for real estate projects. Includes: GSTR-9 preparation with project reconciliation, GSTR-9C audit (if turnover >₹5 cr), Buyer payment vs GST return matching, RERA escrow account reconciliation, CA certification, Compliance report.",
                  price: "₹29,999/year",
                },
                {
                  icon: "🏢",
                  title: "TDR/FSI GST Advisory",
                  desc: "GST treatment guidance for Transferable Development Rights and Floor Space Index transactions. Includes: TDR/FSI purchase GST analysis, ITC eligibility assessment, Sale/transfer GST implications, Invoice format for TDR/FSI transactions, Authority payment compliance.",
                  price: "₹9,999",
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
                📦 Real Estate Compliance Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Startup (Single Project, <50 Units)",
                    price: "₹9,999/month",
                    includes: [
                      "Rate classification certificate",
                      "Monthly GSTR-1 + GSTR-3B filing",
                      "80:20 bifurcation support",
                      "RCM compliance",
                      "Email support",
                    ],
                  },
                  {
                    package: "Growth (Multiple Projects or 50-200 Units)",
                    price: "₹19,999/month",
                    includes: [
                      "Everything in Startup",
                      "RERA-GST audit (quarterly)",
                      "Buyer payment tracking",
                      "JDA advisory (if applicable)",
                      "Phone + email support",
                    ],
                  },
                  {
                    package: "Enterprise (Large Developer, >200 Units)",
                    price: "₹49,999/month",
                    includes: [
                      "Everything in Growth",
                      "Multi-project management",
                      "TDR/FSI compliance",
                      "Dedicated account manager",
                      "Annual GSTR-9 + audit",
                      "Priority support",
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
              Real Stories from Our Real Estate Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sharma Builders",
                  location: "Noida",
                  text: "We were confused about affordable housing criteria for our project. Taxvio analyzed unit-wise specifications, confirmed 1% GST eligibility, linked RERA registration, and set up compliant invoicing with 80:20 bifurcation. Saved us ₹50 lakh in GST liability by applying correct 1% rate instead of 5%!",
                },
                {
                  name: "Delhi NCR Developers",
                  location: "Gurgaon",
                  text: "Our RCM compliance was a mess — paying contractors but not reporting RCM in GSTR-3B. Taxvio identified ₹15 lakh RCM liability pending, helped us pay with interest, and set up monthly RCM tracking. Now we verify every contractor's GSTIN and pay RCM correctly. Great support!",
                },
                {
                  name: "Metro Constructions",
                  location: "Muzaffarnagar",
                  text: "We had a Joint Development Agreement with land owner but didn't know GST implications. Taxvio structured the JDA for GST compliance, calculated developer service charges, advised on revenue sharing, and handled invoicing between us and land owner. Complete JDA-GST solution!",
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
              Real Estate GST Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides specialized GST services for real estate developers,
              builders, contractors, and construction companies across{" "}
              <strong>Noida</strong>, <strong>Delhi NCR</strong>,{" "}
              <strong>Gurgaon</strong>, <strong>Ghaziabad</strong>,{" "}
              <strong>Mumbai</strong>, and pan-India.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Noida",
                "Delhi NCR",
                "Gurgaon",
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
                  title: "RERA Registration",
                  icon: "🏗️",
                  link: "/serviceslist/licenses/rera-registration",
                  desc: "Real estate project RERA registration.",
                },
                {
                  title: "GST Audit",
                  icon: "📅",
                  link: "/serviceslist/gst/gst-audit",
                  desc: "Annual GST audit & GSTR-9C certification.",
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
                    Focus on Building, We Handle GST
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get Complete GST Compliance for Your Real Estate Project
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Developing residential or commercial property? Taxvio provides
                    specialized real estate GST compliance — rate applicability
                    advisory (1%/5%/12%), land-construction bifurcation (80:20
                    rule), ITC optimization, works contract RCM compliance,
                    RERA-GST linking, JDA structuring, and complete monthly return
                    filing. Starting ₹9,999/month. Ensure correct GST rates and
                    maximum tax efficiency for your project!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get Started — ₹9,999/mo
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20GST%20help%20for%20my%20real%20estate%20project"
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
      q: "Can a builder charge different GST rates for different units in the same project?",
      a: "NO. GST rate is determined PROJECT-WISE, not unit-wise. All units in a single project must be charged the SAME GST rate based on project classification: If project qualifies as 'affordable housing' (all units meet carpet area and price criteria) → 1% GST for ALL units. If even ONE unit exceeds affordable criteria → ENTIRE project becomes 'regular housing' → 5% GST for ALL units. Example: Project has 100 units — 99 units are 50 sqm (affordable), but 1 unit is 70 sqm (exceeds 60 sqm limit) → ALL 100 units attract 5% GST (not 1%). Builder cannot split project into 'affordable' and 'non-affordable' sections with different GSTINs to avail mixed rates — entire project is treated as one supply. Exception: If builder has MULTIPLE SEPARATE projects (different RERA registrations, different locations), each project can have different GST rate based on its own classification.",
    },
    {
      q: "What happens if RERA registration expires during project construction?",
      a: "If RERA registration EXPIRES or is CANCELLED during project construction, GST implications are SEVERE: Loss of concessional rate: Project will NO LONGER qualify for 1% or 5% GST — will attract 12% GST (commercial rate) from the date of expiry. Retrospective impact: Department may re-assess PAST sales also at 12% (if RERA lapse indicates project was never compliant) — demand for differential GST + interest. Buyer disputes: Buyers who paid expecting 1%/5% rate may refuse to pay additional 12% GST — legal complications. Action required: RENEW RERA registration BEFORE expiry (usually 5 years validity, renewable). If RERA is cancelled due to non-compliance: Rectify issues immediately, apply for restoration, continue charging applicable GST rate based on current status. Inform buyers: If rate changes from 1%/5% to 12%, communicate to buyers BEFORE issuing invoices. Taxvio provides RERA renewal tracking, GST impact analysis, and buyer communication support for RERA compliance maintenance.",
    },
    {
      q: "How to handle GST on property booking cancellations and refunds?",
      a: "When buyer cancels property booking and builder refunds money, GST treatment depends on WHAT is refunded: Scenario 1 — Full refund (before construction): Builder refunds 100% amount to buyer (including GST). Builder must REVERSE GST liability: Issue credit note to buyer (cancelling original invoice). In NEXT month's GSTR-1, report credit note in Table 9B (reduces sales). In GSTR-3B, reduce output tax liability by GST amount (effectively reversing tax paid earlier). Claim refund of GST paid (or adjust against future tax liability). Scenario 2 — Partial refund (forfeiture/penalty): Builder forfeit booking amount as penalty (e.g., 10% of price). Builder refunds 90%, retains 10%. GST on forfeited amount: STILL PAYABLE (forfeiture is consideration for 'agreeing to tolerate buyer's breach'). GST on refunded amount: Reversed via credit note (as above). Scenario 3 — Transfer to another buyer: Builder transfers cancelled unit to new buyer. Original buyer's advance: Treated as advance for supply (GST paid, no reversal). New buyer's payment: Additional supply, GST applicable. Documentation: Cancellation letter from buyer, Refund payment proof (bank transfer), Credit note issued (serial numbered, GSTIN mentioned), GSTR-1 and GSTR-3B entries reflecting credit note. Taxvio handles cancellation GST treatment, credit note preparation, and return filing adjustments.",
    },
    {
      q: "Can builder claim ITC on professional services (architect, engineer, CA) for residential projects?",
      a: "NO. For residential projects taxed at 1% or 5% GST (affordable or regular housing), builder is in 'no ITC' category — CANNOT claim ITC on ANY inputs or services, including professional services: Blocked ITC for 1%/5% projects: Architect fees (18% GST on design services), Engineer/consultant fees (18% GST), CA fees (18% GST for accounting, GST compliance), Legal fees (18% GST for documentation, approvals), Marketing/advertising (18% GST on promotion), Brokerage (property sales commission). Even though these are services (not construction materials), ITC is STILL BLOCKED for residential projects. Exception — ITC allowed for commercial projects: If project is COMMERCIAL (offices, shops, malls — 12% GST with ITC): Builder CAN claim FULL ITC on professional services used for that project. Segregation required: If builder has BOTH residential and commercial projects, must maintain SEPARATE accounts. Professional service ITC can be claimed ONLY for commercial project portion. Proportionate ITC calculation: If service is used for both (e.g., CA fees for overall company), ITC = (Commercial project turnover / Total turnover) × Total service GST. Taxvio conducts project-wise ITC eligibility audit and ensures correct ITC claim/reversal for mixed residential-commercial portfolios.",
    },
    {
      q: "What is the GST treatment on stamp duty and registration charges for property?",
      a: "Stamp duty and registration charges are STATE GOVERNMENT LEVIES (not GST) and are SEPARATE from GST: No GST on stamp duty/registration: These are statutory charges under state stamp duty laws, NOT a supply under GST. Buyer pays stamp duty + registration charges OVER AND ABOVE the property price + GST. Example calculation: Property price (agreed): ₹50 lakh. Land value (1/3rd): ₹16.67 lakh (no GST). Construction value (2/3rd): ₹33.33 lakh. GST @5% on construction: ₹1.67 lakh. Total payable to builder: ₹50 lakh + ₹1.67 lakh = ₹51.67 lakh. SEPARATELY, buyer pays to government: Stamp duty: 5-7% of property value (state-specific) = ~₹3 lakh (on ₹50 lakh). Registration charges: 1% of property value = ₹50,000. TOTAL cost to buyer: ₹51.67 lakh (to builder) + ₹3.5 lakh (to government) = ₹55.17 lakh. Builder's responsibility: Builder does NOT collect stamp duty/registration charges. Builder only collects property price + GST. Buyer pays stamp duty/registration directly to sub-registrar office during property registration. Invoice clarity: Builder's invoice should clearly mention: 'Stamp duty and registration charges are separate and payable by buyer to government.' Taxvio provides buyer cost breakdown sheets showing property price, GST, stamp duty, and registration charges separately for transparency.",
    },
    {
      q: "How to handle GST for under-construction property sold after completion certificate (CC)?",
      a: "GST treatment changes DRAMATICALLY based on whether property is sold BEFORE or AFTER obtaining completion certificate (CC): Scenario 1 — Sale BEFORE CC (under-construction): Property is 'under construction' → GST applicable @1%/5%/12% (based on project type). Builder charges GST, pays to government, reports in GSTR-1/GSTR-3B. Scenario 2 — Sale AFTER CC (completed property): Property is 'ready-to-move' → GST EXEMPT (0% GST). Builder does NOT charge GST on sale. Only stamp duty + registration charges apply (paid by buyer to government). Example timeline: Builder obtains Completion Certificate (CC) on 1st April 2024. Units sold BEFORE 1st April 2024 → GST @5% (under-construction). Units sold AFTER 1st April 2024 → NIL GST (completed, exempt). Critical issue — MIXED sales (before + after CC): If buyer paid 80% amount BEFORE CC (under-construction, 5% GST charged). Buyer pays remaining 20% AFTER CC (completed, exempt?). GST treatment: GST is applicable on ENTIRE consideration (time of supply is when FIRST payment is received). If majority payment received before CC, ENTIRE sale is treated as under-construction supply → 5% GST on full value. Builder must charge GST on final 20% also (even paid after CC). Action for builders: Obtain CC as early as possible (to sell remaining units as GST-exempt). For units with partial payments before CC, continue charging GST on balance payments (cannot change mid-way). Clearly inform buyers: Units booked before CC = GST applicable on full price (even if some payments post-CC). Taxvio provides CC-based GST transition advisory and buyer communication support for mid-construction CC scenarios.",
    },
    {
      q: "Does Taxvio handle GST for builders with projects in multiple states?",
      a: "Yes, absolutely. We provide MULTI-STATE real estate GST compliance for builders and developers with projects across India: Our multi-state services: (1) State-wise GST registration: Separate GSTIN for each state where you have projects. Coordinated filing across all states (REG-01 applications simultaneously). (2) Project-wise rate classification: Classify each project independently (affordable/regular/commercial). Different states may have different project types (e.g., affordable in UP, commercial in Delhi). (3) State-wise monthly return filing: GSTR-1 + GSTR-3B for EACH state GSTIN separately (each state has independent return deadlines). Centralized data collection, state-wise reporting. (4) State-specific compliance: Different states have different stamp duty rates, RERA requirements, local authority approvals. We ensure state-specific GST and RERA compliance. (5) Inter-state project transfers: If you transfer construction materials from one state project to another → treated as inter-state supply (IGST applicable). We handle inter-state stock transfer invoicing and e-way bills. (6) Consolidated reporting: Provide consolidated GST liability report across all states. Identify optimization opportunities (ITC utilization, tax planning). We serve real estate developers with projects in UP, Delhi, Haryana, Maharashtra, Karnataka, and other states — centralized GST compliance management from single point of contact (Taxvio).",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Real Estate GST
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