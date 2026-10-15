// app/serviceslist/gst/gst-hsn-sac-classification/GSTHSNSACClassificationClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST HSN/SAC Code Classification Advisory Services",
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
    "Professional HSN (Harmonized System of Nomenclature) and SAC (Services Accounting Code) classification advisory services for businesses. Expert guidance on correct HSN code classification for goods (manufactured products, traded items, raw materials), SAC code classification for services (professional services, construction, transport, etc.), applicable GST rate determination (5%, 12%, 18%, 28%, exempt), invoice format correction and compliance, classification dispute advisory and representation before GST authorities, product/service-wise tax analysis, and classification certification. Ensure accurate tax application, avoid wrong rate penalties, and maintain GST invoice compliance. Serving manufacturers, traders, service providers across Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "GST HSN/SAC Classification & Tax Advisory",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "999",
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
      name: "What is HSN code and why is it important in GST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HSN stands for Harmonized System of Nomenclature — a globally standardized system of names and numbers to classify traded products. HSN codes are used in GST to: (1) Determine applicable GST rate for goods (each HSN code is mapped to a specific GST rate: 5%, 12%, 18%, 28%, or exempt), (2) Maintain uniformity in tax rates across India (same product has same HSN and same tax rate nationwide), (3) Mandatory disclosure on tax invoices (businesses with turnover >₹5 crore must mention at least 6-digit HSN on invoices), (4) Facilitate data analytics and tax compliance monitoring by GST authorities. Using the CORRECT HSN code ensures you charge the RIGHT GST rate — wrong HSN = wrong tax rate = penalty + interest.",
      },
    },
    {
      "@type": "Question",
      name: "What is SAC code and how is it different from HSN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAC stands for Services Accounting Code — a classification system specifically for SERVICES (similar to HSN which is for goods). SAC codes are 6-digit codes used to classify services like: Professional services (legal, CA, consulting) - SAC 9983, Construction services - SAC 9954, Transport services - SAC 9965, Repair & maintenance - SAC 9987, etc. Difference between HSN and SAC: HSN is for GOODS (tangible products), SAC is for SERVICES (intangible activities). HSN codes are 4/6/8-digit, SAC codes are 6-digit. Both serve the same purpose — determining applicable GST rate and ensuring invoice compliance. Just like HSN, correct SAC code classification is critical for charging the right GST rate on services.",
      },
    },
    {
      "@type": "Question",
      name: "How many digits of HSN/SAC code must be mentioned on GST invoice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HSN/SAC code digit requirement on GST invoice depends on your AGGREGATE TURNOVER in the previous financial year: (1) Turnover up to ₹5 crore: HSN/SAC disclosure is OPTIONAL (you can mention it for better compliance, but not mandatory), (2) Turnover >₹5 crore: MANDATORY to mention at least 4-digit HSN/SAC code on B2B invoices (6-digit recommended for clarity), (3) For EXPORTS: 8-digit HSN code is MANDATORY on export invoices (required for customs clearance and shipping bill). Note: Even if optional, mentioning HSN/SAC is a BEST PRACTICE — helps in return filing, ITC reconciliation, and reduces classification disputes.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTHSNSACClassificationClient() {
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
          ⚠️ Wrong HSN/SAC Code = Wrong GST Rate = Penalty! Get Expert Classification Now
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
              <span className="text-white">HSN/SAC Classification</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🔍 Tax Classification
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST HSN/SAC Code
                  <br />
                  <span className="text-[#7ecbf0]">Classification</span>
                  <br />
                  Advisory Service
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Are you{" "}
                  <strong className="text-white">
                    unsure about the correct HSN code for your products
                  </strong>{" "}
                  or{" "}
                  <strong className="text-white">
                    SAC code for your services
                  </strong>
                  ? Using the{" "}
                  <strong className="text-white">wrong classification</strong>{" "}
                  can lead to{" "}
                  <strong className="text-white">
                    incorrect GST rate application, invoice non-compliance,
                    ITC denial, and penalties
                  </strong>
                  . <strong className="text-white">HSN</strong> (Harmonized
                  System of Nomenclature) is for{" "}
                  <strong className="text-white">goods</strong>, and{" "}
                  <strong className="text-white">SAC</strong> (Services
                  Accounting Code) is for{" "}
                  <strong className="text-white">services</strong>.{" "}
                  <strong className="text-white">Taxvio</strong> provides expert
                  classification advisory — product/service analysis, GST rate
                  determination, invoice format correction, and dispute
                  resolution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get Classification — ₹999 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20HSN/SAC%20classification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Accurate Tax Rate",
                    "✅ Invoice Compliance",
                    "✅ Dispute Resolution",
                    "✅ Expert Advisory",
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
                  Classification Essentials
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["🔢", "HSN: 4/6/8 digit codes for goods"],
                    ["📋", "SAC: 6-digit codes for services"],
                    ["💰", "Determines GST rate (5%-28%)"],
                    ["📄", "Mandatory on invoices (>₹5 cr)"],
                    ["🚫", "Wrong code = Penalty risk"],
                    ["🚀", "Classification fee: ₹999 onwards"],
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
              { number: "500+", label: "Products Classified", icon: "✅" },
              { number: "21,000+", label: "HSN Codes Available", icon: "🔢" },
              { number: "5 Rates", label: "GST Rate Slabs", icon: "💰" },
              { number: "₹999", label: "Starting Fee", icon: "🎯" },
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
              "✔ Product Analysis",
              "✔ Rate Determination",
              "✔ Invoice Audit",
              "✔ Dispute Support",
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
          {/* WHAT IS HSN/SAC */}
          <section id="what-is-hsn-sac">
            <SectionLabel text="Understanding HSN/SAC" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Are HSN & SAC Codes in GST?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>HSN (Harmonized System of Nomenclature)</strong> is an
                  internationally standardized system developed by the{" "}
                  <strong>World Customs Organization (WCO)</strong> to classify
                  goods (products) in a systematic manner. It uses a{" "}
                  <strong>6-digit code</strong> at the international level, which
                  countries can extend to 8 digits for more specific
                  classification.
                </p>
                <p>
                  <strong>SAC (Services Accounting Code)</strong> is a
                  classification system specifically for{" "}
                  <strong>services</strong> (similar to HSN for goods). It uses a{" "}
                  <strong>6-digit code</strong> to classify various service
                  categories.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🔍 Why HSN/SAC Classification Matters
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Determines the APPLICABLE GST RATE for your goods/services (5%, 12%, 18%, 28%, or exempt/nil)",
                      "Mandatory disclosure on tax invoices for businesses with turnover >₹5 crore (4-digit minimum, 6-digit recommended)",
                      "Required for GST return filing (GSTR-1) — invoice-wise HSN/SAC reporting for high-turnover businesses",
                      "Facilitates INPUT TAX CREDIT (ITC) matching and reconciliation",
                      "Used by GST authorities for tax compliance monitoring and data analytics",
                      "Critical for EXPORT documentation (8-digit HSN mandatory on shipping bills and export invoices)",
                      "Helps in classification dispute resolution (clear classification = fewer disputes with department)",
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
                    📊 HSN Code Structure (for Goods)
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-green-200">
                    <p className="font-bold text-green-700 text-sm mb-3">
                      Example: HSN Code for "Cotton Fabric"
                    </p>
                    <div className="space-y-2 text-xs text-gray-700 font-mono">
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="mb-1">
                          <strong>52</strong> - Chapter (Textiles - Cotton)
                        </p>
                        <p className="mb-1">
                          <strong>5208</strong> - 4-digit (Woven fabrics of cotton)
                        </p>
                        <p className="mb-1">
                          <strong>520821</strong> - 6-digit (Plain weave, not more
                          than 100g/m²)
                        </p>
                        <p>
                          <strong>52082110</strong> - 8-digit (Unbleached)
                        </p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>GST Rate for HSN 5208:</strong> 5% (as per GST rate
                        schedule)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📋 SAC Code Structure (for Services)
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-purple-200">
                    <p className="font-bold text-purple-700 text-sm mb-3">
                      Example: SAC Code for "Accounting Services"
                    </p>
                    <div className="space-y-2 text-xs text-gray-700 font-mono">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="mb-1">
                          <strong>99</strong> - Major Group (Professional, technical
                          services)
                        </p>
                        <p className="mb-1">
                          <strong>998</strong> - Sub-group (Accounting, auditing,
                          bookkeeping)
                        </p>
                        <p>
                          <strong>998311</strong> - 6-digit SAC (Financial auditing
                          services)
                        </p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>GST Rate for SAC 9983:</strong> 18% (as per GST rate
                        schedule)
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white rounded-xl p-4 border border-purple-200">
                    <p className="font-bold text-purple-700 text-sm mb-2">
                      📌 Common SAC Codes
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      {[
                        "9954 - Construction services (18%)",
                        "9965 - Transport services (5%-18%)",
                        "9983 - Accounting, CA, legal services (18%)",
                        "9987 - Repair & maintenance (18%)",
                        "9973 - Restaurant services (5%)",
                        "9993 - Rental services (18%)",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    ⚖️ HSN/SAC Digit Requirement on Invoice
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <p className="font-bold text-orange-700 text-sm mb-2">
                        📊 Based on Aggregate Turnover
                      </p>
                      <table className="w-full text-xs text-gray-700">
                        <thead>
                          <tr className="bg-orange-50">
                            <th className="text-left p-2 border border-orange-200">
                              Turnover (Previous FY)
                            </th>
                            <th className="text-left p-2 border border-orange-200">
                              HSN/SAC Requirement
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border border-orange-100">
                              Up to ₹5 crore
                            </td>
                            <td className="p-2 border border-orange-100">
                              <strong>Optional</strong> (recommended for clarity)
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 border border-orange-100">
                              Above ₹5 crore
                            </td>
                            <td className="p-2 border border-orange-100">
                              <strong>4-digit minimum</strong> (6-digit recommended)
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 border border-orange-100">
                              For Exports
                            </td>
                            <td className="p-2 border border-orange-100">
                              <strong>8-digit mandatory</strong> (all turnover levels)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-600">
                      <strong>Best Practice:</strong> Always mention 6-digit HSN/SAC
                      on invoices (even if turnover is below ₹5 crore) — improves
                      compliance, reduces queries, and facilitates ITC reconciliation.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    🚫 Consequences of Wrong HSN/SAC Classification
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Charging WRONG GST RATE (e.g., 18% instead of 5%) — customer refuses to pay excess tax",
                      "Undercharging tax (e.g., 5% instead of 18%) — department raises DEMAND for differential tax + 18% interest + penalty",
                      "ITC DENIAL to your customer (if invoice shows wrong HSN/rate, buyer cannot claim correct ITC)",
                      "INVOICE MISMATCH in GSTR-2B reconciliation — ITC mismatch flags",
                      "Penalty under Section 125 (₹10,000 or tax amount, whichever is higher) for wrong classification",
                      "Classification DISPUTES with GST authorities — lengthy proceedings, advance ruling required",
                      "EXPORT issues — customs may reject shipment if HSN doesn't match product description",
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
                  provides expert HSN/SAC classification advisory — product/service
                  analysis, GST rate determination, invoice audit, classification
                  certification, and dispute resolution across Uttar Pradesh, Noida,
                  Delhi NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* CLASSIFICATION PROCESS */}
          <section id="classification-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How We Classify HSN/SAC Codes for Your Business
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Our expert classification process ensures accurate HSN/SAC codes and
                correct GST rate application:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Product/Service Description Collection",
                    description:
                      "We collect detailed information about your products or services: For GOODS (HSN classification): Product name, technical specifications, raw material composition, manufacturing process, intended use/purpose, catalogue/brochure with product photos, existing invoices (if available), industry classification (if known). For SERVICES (SAC classification): Detailed description of service provided, nature of service (professional, technical, construction, transport, etc.), deliverables/output, service agreement or contract (if applicable), industry/sector (healthcare, IT, consulting, etc.). The more detailed the description, the more ACCURATE the classification. We review technical specifications, product catalogs, and understand the core nature of your business offering.",
                    duration: "1-2 days",
                  },
                  {
                    step: 2,
                    title: "HSN/SAC Code Research & Analysis",
                    description:
                      "Our CA/tax experts conduct comprehensive research using: (1) Official GST HSN/SAC directory (published by CBIC - Central Board of Indirect Taxes and Customs), (2) Customs Tariff Act, 1975 (for detailed HSN descriptions), (3) GST rate schedules (Notifications under CGST Act specifying rates for each HSN/SAC), (4) Industry-specific classification guides and circulars, (5) Advance Ruling Authority (AAR) orders on similar products/services, (6) Comparable case laws and tribunal judgments. We analyze MULTIPLE possible HSN/SAC codes for your product/service, compare descriptions, eliminate unsuitable codes, and shortlist the MOST APPROPRIATE code. For borderline cases (where product falls under 2+ HSN codes), we prepare comparative analysis with pros/cons of each code.",
                    duration: "2-4 days",
                  },
                  {
                    step: 3,
                    title: "GST Rate Determination & Validation",
                    description:
                      "After identifying the correct HSN/SAC code, we determine the applicable GST rate: Cross-check HSN/SAC with latest GST rate schedule (rates change via notifications — we track all amendments). Verify CGST, SGST/UTGST, IGST rates (for inter-state supplies). Check for any EXEMPTIONS or NIL rates for specific HSN/SAC codes. Identify any RATE CHANGE history (if rate was different earlier, to check past invoices). Validate CESS applicability (e.g., luxury goods, sin goods, coal, etc. attract GST cess over and above standard GST rate). Example: HSN 8703 (Motor cars) — GST rate = 28% + Cess (1%-22% based on engine capacity and length). We provide you with: HSN/SAC code (4-digit, 6-digit, and 8-digit if applicable), Exact GST rate (CGST + SGST or IGST), Effective date of rate applicability, Notification reference for rate determination.",
                    duration: "1 day",
                  },
                  {
                    step: 4,
                    title: "Invoice Format Review & Correction",
                    description:
                      "We review your existing invoices to check compliance: Verify if correct HSN/SAC code is mentioned (4/6/8-digit as per requirement). Check if GST rate shown on invoice matches the HSN/SAC code. Ensure invoice format is as per Rule 46 of CGST Rules (tax invoice requirements). Verify HSN/SAC-wise summary (if required for high-turnover businesses). Identify any MISMATCHES: Wrong HSN/SAC code, Wrong GST rate (doesn't match HSN/SAC), Missing HSN/SAC (mandatory for >₹5 cr turnover), Incorrect invoice format (missing mandatory fields). We provide: Invoice format CORRECTION recommendations, Sample compliant invoice template with correct HSN/SAC and GST rate, Guidance on billing software settings to auto-populate HSN/SAC, Checklist for invoice audit before dispatch to customers.",
                    duration: "1-2 days",
                  },
                  {
                    step: 5,
                    title: "Classification Report & Certificate",
                    description:
                      "We prepare a detailed HSN/SAC Classification Report containing: Product/Service description and specifications, Recommended HSN/SAC code (4-digit, 6-digit, 8-digit), Applicable GST rate (CGST, SGST, IGSC, Cess if any), Rationale for classification (why this HSN/SAC is correct — supported by official description, notification reference, case laws), Alternative HSN/SAC codes considered (if any) and reasons for rejection, Invoice format recommendations, Effective date and validity of classification. We issue a CLASSIFICATION CERTIFICATE signed by our CA/tax expert — this can be used: As supporting document in case of department query/dispute, For internal audit and compliance records, For presenting to customers/vendors who ask for classification proof, For advance ruling application (if you want AAR confirmation). Certificate validity: Till any change in product specifications, GST law, or rate notification.",
                    duration: "1-2 days",
                  },
                  {
                    step: 6,
                    title: "Multi-Product Classification (for Product Range)",
                    description:
                      "If you deal in MULTIPLE products/services, we prepare a comprehensive HSN/SAC MASTER LIST: Product-wise or service-wise listing, HSN/SAC code for each item (with 4/6/8-digit codes), Applicable GST rate for each item, Invoice description (standard description to be used on invoices for uniformity). Format: Excel sheet with columns — Product Name, HSN Code, GST Rate, Description, Remarks. This MASTER LIST helps in: Billing software configuration (import HSN/SAC codes directly), Invoice generation (auto-populate HSN and rate based on product selection), GST return filing (HSN-wise summary in GSTR-1), Audit and compliance (consistent classification across all invoices). We update the master list periodically (if you add new products or GST rates change).",
                    duration: "3-5 days (for 20-50 products)",
                  },
                  {
                    step: 7,
                    title: "Training & Implementation Support",
                    description:
                      "We provide training to your accounts/billing team on: How to identify and use correct HSN/SAC codes, How to mention HSN/SAC on invoices (digit requirement based on turnover), How to update billing software with HSN/SAC codes, How to handle classification queries from customers/department, How to maintain HSN/SAC master list and update it when products change. We assist in: Billing software configuration (Tally, Zoho Books, QuickBooks, etc.) — setting up HSN/SAC codes, rates, and invoice templates. Sample invoice generation with correct HSN/SAC and GST rate for testing. Checklist creation for invoice accuracy verification before dispatch. This ensures your team can independently handle HSN/SAC compliance post-implementation.",
                    duration: "1 day",
                  },
                  {
                    step: 8,
                    title: "Classification Dispute Advisory & Representation",
                    description:
                      "If you receive a GST notice or SCN (Show Cause Notice) challenging your HSN/SAC classification, we provide: Dispute analysis: Review department's objection and proposed alternate HSN/SAC code. Legal research: Find case laws, AAR orders, and circulars supporting your classification. Representation: Draft reply to SCN, argue your case before GST officer/Adjudicating Authority. Advance Ruling application: If classification is genuinely ambiguous, we file application before GST Advance Ruling Authority (AAR) for authoritative classification. Appeal support: If adverse order is passed, we assist in filing appeal before Appellate Authority. We represent clients in classification disputes involving: Product composition ambiguity (e.g., is it 'plastic' or 'composite material'?), Service categorization disputes (e.g., is it 'consulting' or 'manpower supply'?), Rate ambiguity (two HSN codes with different rates applicable — which to choose?), Export classification (customs rejecting HSN code on shipping bill).",
                    duration: "Varies (dispute-dependent)",
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
                  <strong>
                    3-5 days for single product/service classification
                  </strong>{" "}
                  (description to certificate delivery).{" "}
                  <strong>
                    7-10 days for multi-product classification (20-50 items)
                  </strong>
                  . Expedited 24-48 hour service available for urgent requirements
                  (additional charges apply). Classification certificate valid till
                  product specifications or GST law changes.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for HSN/SAC Classification
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Goods (HSN Classification)
                </p>
                <ul className="space-y-3">
                  {[
                    "Product description (detailed name, specifications, technical details)",
                    "Product catalogue or brochure (with photos, dimensions, features)",
                    "Composition/ingredients list (for chemical, food, textile products)",
                    "Manufacturing process description (how the product is made)",
                    "Intended use/application (what the product is used for)",
                    "Existing invoices (if you've been issuing invoices with some HSN code)",
                    "Purchase invoices from suppliers (showing HSN code they used)",
                    "Product testing/certification documents (BIS, FSSAI, ISO, etc. if applicable)",
                    "Industry classification details (if known)",
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
                  For Services (SAC Classification)
                </p>
                <ul className="space-y-3">
                  {[
                    "Service description (detailed explanation of service provided)",
                    "Nature of service (professional, technical, construction, transport, hospitality, etc.)",
                    "Service deliverables (what customer receives after service completion)",
                    "Service agreement or contract sample (terms of service)",
                    "Industry/sector details (IT, healthcare, education, real estate, etc.)",
                    "Existing service invoices (if you've been issuing invoices)",
                    "Service process flow (how the service is delivered — stages/steps)",
                    "Licensing/certification details (professional license, trade license, service tax registration if any)",
                    "Customer type (B2B or B2C — helps in understanding service nature)",
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
                📌 Additional Documents (if applicable)
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "GSTIN and GST registration certificate",
                  "Import/export documents (if product is imported/exported)",
                  "Customs classification (if product has been imported — BOE copy)",
                  "Previous classification orders (if any from AAR or department)",
                  "Competitor invoices (showing HSN/SAC they are using for similar products/services)",
                  "Industry association classification guide (if available)",
                  "BIS/ISI certification (for manufactured goods)",
                  "FSSAI license (for food products)",
                  "Drug license (for pharmaceutical/medical products)",
                  "Technical drawing/blueprint (for machinery, equipment)",
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* HSN/SAC EXAMPLES */}
          <section id="examples">
            <SectionLabel text="Real Examples" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              HSN/SAC Classification Examples
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* HSN Examples */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-6">
                <p className="font-bold text-blue-800 mb-4 text-lg flex items-center gap-2">
                  <span className="text-2xl">🔢</span>
                  HSN Code Examples (Goods)
                </p>
                <div className="space-y-4">
                  {[
                    {
                      product: "Mobile Phones (Smartphones)",
                      hsn: "8517 12 00",
                      rate: "18%",
                      description:
                        "Telephones for cellular networks or for other wireless networks",
                    },
                    {
                      product: "Cotton T-Shirts",
                      hsn: "6109 10 00",
                      rate: "5%",
                      description: "T-shirts, singlets and other vests, of cotton",
                    },
                    {
                      product: "Wheat Flour (Atta)",
                      hsn: "1101 00 00",
                      rate: "NIL (0%)",
                      description: "Wheat or meslin flour (exempt from GST)",
                    },
                    {
                      product: "LED Bulbs",
                      hsn: "8539 50 00",
                      rate: "12%",
                      description: "Light-emitting diode (LED) lamps",
                    },
                    {
                      product: "Cement",
                      hsn: "2523",
                      rate: "28%",
                      description: "Portland cement, aluminous cement, slag cement",
                    },
                    {
                      product: "Biscuits (Branded)",
                      hsn: "1905 31",
                      rate: "18%",
                      description: "Sweet biscuits",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-blue-200"
                    >
                      <p className="font-bold text-blue-700 text-sm mb-1">
                        {item.product}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 mb-2">
                        <p>
                          <strong>HSN:</strong> {item.hsn}
                        </p>
                        <p>
                          <strong>GST Rate:</strong>{" "}
                          <span className="text-green-700 font-bold">
                            {item.rate}
                          </span>
                        </p>
                      </div>
                      <p className="text-xs text-gray-600 italic">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SAC Examples */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-6">
                <p className="font-bold text-purple-800 mb-4 text-lg flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  SAC Code Examples (Services)
                </p>
                <div className="space-y-4">
                  {[
                    {
                      service: "CA Services (Audit, Tax Filing)",
                      sac: "998311",
                      rate: "18%",
                      description: "Financial auditing and accounting services",
                    },
                    {
                      service: "Legal / Advocate Services",
                      sac: "998212",
                      rate: "18%",
                      description: "Legal advisory and representation services",
                    },
                    {
                      service: "Construction of Residential Building",
                      sac: "995411",
                      rate: "18%",
                      description:
                        "Construction services of residential buildings (affordable housing may have lower rate)",
                    },
                    {
                      service: "Goods Transport by Road",
                      sac: "996511",
                      rate: "5%",
                      description: "Road transport services of goods (GTA)",
                    },
                    {
                      service: "Restaurant Service (AC)",
                      sac: "996331",
                      rate: "5%",
                      description:
                        "Restaurant and food serving services (with AC, liquor license)",
                    },
                    {
                      service: "Software Development",
                      sac: "998314",
                      rate: "18%",
                      description:
                        "Information technology (IT) design and development services",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-purple-200"
                    >
                      <p className="font-bold text-purple-700 text-sm mb-1">
                        {item.service}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 mb-2">
                        <p>
                          <strong>SAC:</strong> {item.sac}
                        </p>
                        <p>
                          <strong>GST Rate:</strong>{" "}
                          <span className="text-green-700 font-bold">
                            {item.rate}
                          </span>
                        </p>
                      </div>
                      <p className="text-xs text-gray-600 italic">
                        {item.description}
                      </p>
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
              Common HSN/SAC Classification Mistakes
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                HSN/SAC classification errors can lead to wrong tax rates, compliance
                issues, and penalties. Here are critical mistakes to avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Using Generic/Broad HSN Code Instead of Specific Code",
                    icon: "🔢",
                    problem:
                      "Using only 2-digit or 4-digit HSN when more specific 6-digit or 8-digit code is available. Example: Using HSN 84 (Machinery) instead of specific HSN 8443 (Printing machinery). This leads to RATE AMBIGUITY — different products under same broad chapter may have different GST rates. Department may challenge your rate and ask for more specific classification.",
                    solution:
                      "Always use the MOST SPECIFIC HSN/SAC code available (6-digit or 8-digit for goods, 6-digit for services). Refer to official HSN directory and match product specifications with HSN description. Consult CA/expert for borderline cases where multiple specific codes seem applicable. More specific code = clearer rate determination = fewer disputes.",
                  },
                  {
                    mistake: "Assuming Same Product Always Has Same HSN Globally",
                    icon: "🌍",
                    problem:
                      "Thinking that if a product has HSN code X in another country (or on import), the same code applies in India. HSN codes can vary based on: Country-specific extensions (India uses 8-digit, some countries use 10-digit), Product specifications and local interpretations, GST rate structure (India has aligned HSN with GST rates, which may differ from customs classification). Example: Imported product shows HSN 1234 56 78 on Bill of Entry, but for GST in India, correct code may be 1234 56 79.",
                    solution:
                      "Always verify HSN code from INDIAN GST HSN directory (published by CBIC). Don't copy HSN from: Import documents (customs HSN may differ from GST HSN), Supplier invoices from other countries, Foreign product labels. Cross-check with GST rate schedule to ensure HSN matches applicable tax rate in India. Consult CA for import/export HSN alignment.",
                  },
                  {
                    mistake: "Not Updating HSN When Product Specifications Change",
                    icon: "🔄",
                    problem:
                      "Continuing to use old HSN code even after product composition, manufacturing process, or specifications change. Example: You were selling 'plastic toys' (HSN 9503, 18% GST). You changed material to 'wood' — now it's 'wooden toys' (HSN 9503 still, but different sub-classification with possibly 12% GST). Using old HSN = wrong rate = penalty.",
                    solution:
                      "Review HSN classification whenever: Product composition changes (material, ingredients), Manufacturing process changes, Product use/application changes, You add new product variants. Conduct periodic HSN audit (annually or when product range changes). Update billing software and invoice templates with new HSN codes. Maintain HSN change log with effective dates.",
                  },
                  {
                    mistake: "Mixing Up HSN and SAC (Using HSN for Services or Vice Versa)",
                    icon: "🔀",
                    problem:
                      "Using HSN code for services or SAC code for goods due to confusion. Example: Providing 'construction service' but using HSN code (for construction materials) instead of SAC 9954 (construction service). This creates invoice compliance issues — wrong classification system used. GSTR-1 filing errors — HSN-wise summary vs SAC-wise summary mismatch.",
                    solution:
                      "Remember the distinction: HSN = GOODS (tangible products you sell/manufacture/trade). SAC = SERVICES (intangible activities you provide). If you supply BOTH goods and services (composite supply), classify based on PRINCIPAL SUPPLY: If supply is predominantly goods (e.g., restaurant food) → use HSN. If supply is predominantly service (e.g., construction with materials) → use SAC. Consult CA for composite/mixed supply classification.",
                  },
                  {
                    mistake: "Not Mentioning HSN/SAC When Mandatory (Turnover >₹5 Cr)",
                    icon: "📄",
                    problem:
                      "Businesses with turnover >₹5 crore not mentioning 4-digit HSN/SAC on invoices (mandatory as per GST law). This is a COMPLIANCE VIOLATION under Rule 46 of CGST Rules. Consequences: Invoice is non-compliant (customer cannot claim ITC in some cases). Late fee for non-compliant invoicing. GSTR-1 filing issues (portal may reject invoices without HSN/SAC). Department may impose penalty for repeated violations.",
                    solution:
                      "Check your aggregate turnover for previous FY: If >₹5 crore → HSN/SAC is MANDATORY (minimum 4-digit, recommend 6-digit). Update all invoice templates to include HSN/SAC field. Configure billing software to auto-populate HSN/SAC based on product/service selection. Train billing team on mandatory HSN/SAC disclosure. Even if turnover is below ₹5 crore, BEST PRACTICE is to always mention HSN/SAC (improves compliance, reduces queries).",
                  },
                  {
                    mistake: "Using Supplier's HSN Code Without Verification",
                    icon: "📋",
                    problem:
                      "Blindly copying HSN code from purchase invoices (supplier invoices) without verifying if it's correct for YOUR sale. Supplier may have used wrong HSN (their mistake becomes yours if you copy it). Your sale may be under DIFFERENT HSN (e.g., you buy raw material HSN 1234, but sell finished product HSN 5678). Example: You buy 'cotton fabric' (HSN 5208, 5% GST) and make 'readymade shirts' (HSN 6205, 12% GST). If you use supplier's HSN 5208 for selling shirts → WRONG classification and WRONG rate.",
                    solution:
                      "NEVER copy HSN from supplier invoices without independent verification. Classify based on: What YOU are selling (not what you purchased). Final product specifications (after your processing/manufacturing). Intended use in customer's hands. Conduct independent HSN research or consult CA for your product classification. Maintain separate HSN codes for purchases (input) and sales (output).",
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
              Taxvio's HSN/SAC Classification Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From single product classification to comprehensive product range
              advisory — we ensure accurate HSN/SAC codes, correct GST rates, and
              compliant invoicing.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔍",
                  title: "Single Product/Service Classification",
                  desc: "Classification of ONE product or service with detailed HSN/SAC code determination, applicable GST rate, and classification rationale report. Ideal for: New product launch, Single service offering, Import/export classification verification.",
                  price: "₹999",
                },
                {
                  icon: "📦",
                  title: "Product Range Classification (Up to 10 Items)",
                  desc: "Classification of up to 10 products/services with individual HSN/SAC codes, GST rates, and master list in Excel format. Includes: Product-wise HSN/SAC report, Invoice format recommendations, Billing software setup guidance.",
                  price: "₹4,999",
                },
                {
                  icon: "🏭",
                  title: "Bulk Product Classification (11-50 Items)",
                  desc: "Comprehensive classification for 11-50 products/services. Includes: Detailed HSN/SAC master list (Excel), Product-wise GST rate schedule, Invoice template with HSN/SAC, Billing software configuration support, 1-year rate update service.",
                  price: "₹9,999",
                },
                {
                  icon: "📊",
                  title: "Invoice Audit & HSN/SAC Verification",
                  desc: "Review of your existing invoices to verify: Correct HSN/SAC code usage, Matching GST rates, Compliance with invoice format rules (Rule 46), HSN/SAC digit requirement (based on turnover). Includes: Invoice error report, Correction recommendations, Sample compliant invoice.",
                  price: "₹2,999",
                },
                {
                  icon: "📄",
                  title: "Classification Certificate & Documentation",
                  desc: "Official HSN/SAC classification certificate signed by CA/tax expert for presenting to: Department (in case of query/dispute), Customers/vendors (who ask for classification proof), Auditors (internal/statutory audit), Banks (for trade finance documentation).",
                  price: "₹1,999",
                },
                {
                  icon: "⚖️",
                  title: "Classification Dispute Advisory",
                  desc: "Expert support for HSN/SAC classification disputes with GST department. Includes: Dispute analysis and legal research, Reply to SCN (Show Cause Notice), Representation before Adjudicating Authority, Case law and AAR order compilation, Alternative classification recommendation.",
                  price: "₹7,999",
                },
                {
                  icon: "🌐",
                  title: "Export HSN Classification (8-Digit)",
                  desc: "Detailed 8-digit HSN classification for export goods (mandatory for customs clearance and shipping bill). Includes: 8-digit HSN determination, Customs tariff verification, Export GST rate (IGST/LUT applicable), Shipping bill format compliance, IEC-based classification advisory.",
                  price: "₹2,999",
                },
                {
                  icon: "📚",
                  title: "Advance Ruling Application (AAR) Filing",
                  desc: "If classification is genuinely ambiguous and you want authoritative determination, we file application before GST Advance Ruling Authority (AAR). Includes: AAR application drafting (Form GST ARA-01), Supporting documents compilation, Legal research and case law citations, Hearing representation, AAR order compliance.",
                  price: "₹19,999",
                },
                {
                  icon: "🎓",
                  title: "HSN/SAC Training for Billing Team",
                  desc: "On-site or online training session (2-3 hours) for your accounts/billing team covering: HSN/SAC basics and importance, How to search and identify correct codes, Invoice format and compliance requirements, Billing software HSN/SAC setup, Common mistakes and how to avoid them.",
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
                📦 Classification Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Starter (1-5 Products)",
                    price: "₹2,999",
                    includes: [
                      "Up to 5 product/service classification",
                      "HSN/SAC master list",
                      "GST rate schedule",
                      "Email support",
                    ],
                  },
                  {
                    package: "Business (6-20 Products)",
                    price: "₹7,999",
                    includes: [
                      "Up to 20 product/service classification",
                      "Invoice format review",
                      "Billing software setup guidance",
                      "Classification certificate",
                      "Phone support",
                    ],
                  },
                  {
                    package: "Enterprise (21-50 Products)",
                    price: "₹14,999",
                    includes: [
                      "Up to 50 product/service classification",
                      "Invoice audit & correction",
                      "Billing team training (online)",
                      "1-year rate update service",
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
              Real Stories from Our Classification Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Manufacturing",
                  location: "Muzaffarnagar",
                  text: "We manufacture agricultural equipment and were confused about correct HSN codes — some products had 12% GST, some 18%. Taxvio classified all 25 products accurately, provided HSN master list, and helped us correct 6 months of wrong invoices. Saved us from penalty during GST audit!",
                },
                {
                  name: "Gupta Exports Pvt. Ltd.",
                  location: "Noida",
                  text: "We needed 8-digit HSN codes for export invoices (customs requirement). Taxvio provided detailed HSN classification for all our export products with customs tariff verification. Our shipping bills now clear customs without any classification queries. Professional service!",
                },
                {
                  name: "Sharma IT Services",
                  location: "Delhi NCR",
                  text: "Our software services were classified under wrong SAC code by our previous CA, leading to rate disputes with clients. Taxvio reclassified all our services (web development, app development, IT consulting) with correct SAC codes and rates. Now our invoices are compliant and clients accept them without questions.",
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
              HSN/SAC Classification Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides HSN/SAC classification advisory (product/service
              classification, GST rate determination, invoice compliance) for
              manufacturers, traders, and service providers across{" "}
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
                  title: "GST Invoice Compliance",
                  icon: "📄",
                  link: "/serviceslist/gst/gst-invoice-compliance",
                  desc: "Invoice format audit and correction.",
                },
                {
                  title: "GST Advisory",
                  icon: "💡",
                  link: "/serviceslist/gst/gst-advisory",
                  desc: "Expert GST consulting and advisory.",
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
                    Ensure Accurate Classification
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get Expert HSN/SAC Classification & Avoid Tax Errors
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't risk penalties due to wrong HSN/SAC codes and incorrect GST
                    rates. Taxvio provides accurate product/service classification,
                    GST rate determination, invoice compliance audit, and
                    classification certification. Serving manufacturers, traders,
                    exporters, and service providers nationwide. Starting ₹999 for
                    single product classification. Ensure your invoices are compliant
                    and your tax rates are correct!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get Classification — ₹999
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20HSN/SAC%20classification"
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
      q: "Can I change the HSN/SAC code after issuing invoices?",
      a: "You CANNOT change HSN/SAC code on invoices already issued to customers (invoices are legally binding documents). However, if you realize you've been using WRONG HSN/SAC code: For PAST invoices already issued: You may need to issue CREDIT NOTES (cancelling wrong invoices) and DEBIT NOTES (reissuing with correct HSN/SAC and rate) — this is complex and may require customer consent. For FUTURE invoices: Immediately start using CORRECT HSN/SAC code from the date you identify the error. Inform department via letter explaining the error and corrective action taken. For GST return correction: File amendment in next GSTR-1 (if invoice details were already reported) or file correct details from next return onwards. Prevention is better: Get HSN/SAC classification done BEFORE starting invoicing to avoid this hassle.",
    },
    {
      q: "What if my product falls under two different HSN codes (borderline case)?",
      a: "Borderline classification cases are common (product characteristics match two or more HSN code descriptions). Resolution options: (1) Choose the HSN code with MORE SPECIFIC description matching your product's PRIMARY characteristic/use. (2) Apply GENERAL INTERPRETATION RULES (GIR) of customs tariff: Rule 1 - Most specific description prevails, Rule 2 - If product is incomplete/unfinished, classify as if complete, Rule 3 - If still ambiguous, choose HSN that comes LAST in numerical order. (3) File application before ADVANCE RULING AUTHORITY (AAR) for authoritative determination — AAR's order is binding. (4) Consult CA/customs expert for technical analysis and recommendation. Example: Is 'plastic chair with metal legs' classified as 'plastic furniture' (HSN 9403) or 'metal furniture' (HSN 9401)? Answer depends on which material is PREDOMINANT (by weight or value) — if plastic dominates, HSN 9403; if metal, HSN 9401. Taxvio provides expert analysis for such borderline cases.",
    },
    {
      q: "Is HSN/SAC code different for domestic supply and export?",
      a: "HSN/SAC code STRUCTURE is the same for domestic and export, BUT: (1) DIGIT REQUIREMENT: Domestic supply (turnover >₹5 cr): Minimum 4-digit, recommended 6-digit. Export supply: MANDATORY 8-digit HSN (required for customs clearance, shipping bill, and export documentation). (2) GST RATE: Domestic supply: CGST + SGST or IGST as per GST rate schedule. Export supply: 0.1% IGST (under LUT - Letter of Undertaking) OR 0% (if IGST refund claimed). (3) CLASSIFICATION AUTHORITY: Domestic GST: Classification as per CBIC GST HSN directory. Export customs: Classification as per CUSTOMS TARIFF ACT (may have slight differences in sub-classifications). Best practice: Use 8-digit HSN for ALL supplies (domestic + export) — ensures uniformity and compliance. If exporting, verify HSN with customs broker/freight forwarder before shipping.",
    },
    {
      q: "How often do HSN/SAC codes and GST rates change?",
      a: "HSN/SAC code STRUCTURE is relatively stable (changes rarely — major updates once in 5-10 years by World Customs Organization). GST RATES change more frequently via notifications: Rate changes: Every 6-12 months (GST Council meetings recommend rate changes, implemented via notifications). Exemption/concession changes: More frequent (special exemptions for certain goods/services based on policy). Cess changes: Occasional (luxury goods, sin goods cess rates adjusted). Recent changes examples: November 2021 - Textile GST rate increased from 5% to 12%. July 2022 - Pre-packaged food items GST rate changes. It's important to: Track GST Council meeting outcomes and rate notifications. Update HSN/SAC master list when rates change. Revise invoice templates and billing software rates. Inform customers about rate changes (if applicable). Taxvio provides annual HSN/SAC rate update service to keep your classification current.",
    },
    {
      q: "Can I use a general HSN code like '9999' for all products?",
      a: "NO. Using generic/dummy HSN codes like '9999' or '0000' is NOT ALLOWED and is considered non-compliance. Consequences: Invoice is non-compliant (does not meet Rule 46 requirements). GSTR-1 filing issues (portal may reject entries with invalid HSN codes). Department may issue notice for wrong classification and ask for rectification. Penalty for non-compliant invoicing (late fee + interest if wrong rate charged). Customer may refuse invoice (cannot claim ITC with invalid HSN). You MUST use the CORRECT, SPECIFIC HSN/SAC code for each product/service as per official GST HSN/SAC directory. If you're unsure about classification, consult CA/expert or file advance ruling application — but NEVER use random/generic codes. Even if your turnover is <₹5 crore (HSN optional), using correct HSN is a best practice for transparency and audit readiness.",
    },
    {
      q: "What is the difference between 4-digit, 6-digit, and 8-digit HSN codes?",
      a: "HSN code has a hierarchical structure with increasing levels of specificity: (1) 2-DIGIT (Chapter): Broad category (e.g., '84' = Machinery and mechanical appliances). (2) 4-DIGIT (Heading): Sub-category within chapter (e.g., '8443' = Printing machinery). (3) 6-DIGIT (Sub-heading): More specific classification (e.g., '844332' = Machines for printing by means of plates, cylinders). (4) 8-DIGIT (Tariff item): Highly specific classification used in India (e.g., '84433210' = Multi-colour offset printing machines). Usage: Domestic GST: 4-digit minimum (if turnover >₹5 cr), 6-digit recommended. Exports: 8-digit MANDATORY. More digits = more accuracy in classification and rate determination. Example: Printing machine could be: 84 (2-digit - Machinery), 8443 (4-digit - Printing machinery), 844332 (6-digit - Offset printing), 84433210 (8-digit - Multi-colour offset). Best practice: Always use 6-digit or 8-digit HSN for clarity, even if not mandatory.",
    },
    {
      q: "Does Taxvio provide classification support for import/export businesses?",
      a: "Yes, absolutely. We specialize in HSN classification for import/export businesses: (1) IMPORT CLASSIFICATION: Verify HSN code on Bill of Entry (BOE) matches with GST HSN for domestic sales. Ensure correct customs duty and IGSC calculation. Advise on classification for customs clearance (if discrepancy with supplier invoice). (2) EXPORT CLASSIFICATION: Provide 8-digit HSN code for export invoices and shipping bills (mandatory). Verify HSN matches with product description for customs clearance. Ensure compliance with export promotion scheme requirements (RODTEP, RoSCTL, etc. - HSN-specific benefits). (3) IMPORT-EXPORT ALIGNMENT: Ensure HSN consistency between: Import BOE (customs HSN), Domestic sale invoices (GST HSN), Export invoices (8-digit HSN). Avoid classification disputes with customs and GST authorities. We work with customs brokers, freight forwarders, and importers/exporters nationwide to ensure seamless classification compliance.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — HSN/SAC Classification
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