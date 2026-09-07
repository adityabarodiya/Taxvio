// app/serviceslist/gst/gst-tds-compliance/GSTTDSComplianceClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST TDS Compliance - Section 51 TDS Deduction & GSTR-7 Filing",
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
    "Professional GST TDS (Tax Deducted at Source) compliance services under Section 51 of CGST Act. Expert assistance for government departments, PSUs, local authorities, and notified entities in TDS applicability assessment, monthly GSTR-7 return filing, TDS certificate (GSTR-7A) generation, deductee reconciliation, and TDS payment via electronic cash ledger. Comprehensive compliance support for 1% and 2% GST TDS deduction on contract payments. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR and pan-India.",
  serviceType: "GST TDS Compliance & GSTR-7 Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "1999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "1999",
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
      name: "What is GST TDS under Section 51 and who must deduct it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST TDS (Tax Deducted at Source) under Section 51 of the CGST Act is a mechanism where certain notified entities must deduct tax at source while making payments to suppliers for taxable supplies of goods or services. The entities required to deduct GST TDS include: (1) Central Government departments, (2) State Government departments, (3) Local authorities (Municipal Corporations, Panchayats), (4) Governmental agencies, (5) Public Sector Undertakings (PSUs), (6) Any other entity notified by the Government under Section 51. The TDS rate is 2% (1% CGST + 1% SGST for intra-state supplies) or 2% IGST (for inter-state supplies) on the payment value excluding GST.",
      },
    },
    {
      "@type": "Question",
      name: "What is GSTR-7 and when must it be filed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSTR-7 is the monthly return that MUST be filed by every entity that has deducted GST TDS under Section 51. It contains details of TDS deducted, TDS deposited to the government, and liabilities for the month. GSTR-7 must be filed by the 10th of the month following the month in which TDS was deducted. For example, for TDS deducted in January 2024, GSTR-7 must be filed by 10th February 2024. Late filing attracts penalty of ₹100 per day (₹50 CGST + ₹50 SGST) subject to a maximum of ₹5,000 per return.",
      },
    },
    {
      "@type": "Question",
      name: "What is GSTR-7A and how is it different from GSTR-7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSTR-7A is the TDS Certificate that is auto-generated on the GST portal AFTER the deductor files GSTR-7 and pays the TDS amount to the government. It is NOT a return — it is a certificate issued to the deductee (supplier from whom TDS was deducted) as proof of TDS deduction. The deductee can view and download GSTR-7A from their GST portal and claim credit of TDS in their GSTR-3B return. GSTR-7 is the deductor's return, while GSTR-7A is the deductee's certificate. Without filing GSTR-7, GSTR-7A cannot be generated.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function GSTTDSComplianceClient() {
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
          className="bg-blue-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⏰ GSTR-7 Due 10th of Every Month — Avoid ₹100/Day Penalty & Compliance Issues
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
              <span className="text-white">GST TDS Compliance</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏛️ Section 51 Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  GST TDS Compliance
                  <br />
                  <span className="text-[#7ecbf0]">Section 51</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Are you a{" "}
                  <strong className="text-white">
                    Government department, PSU, or local authority
                  </strong>{" "}
                  making payments to suppliers? Under{" "}
                  <strong className="text-white">Section 51 of CGST Act</strong>,
                  you MUST deduct{" "}
                  <strong className="text-white">GST TDS (2%)</strong> on contract
                  payments and file{" "}
                  <strong className="text-white">GSTR-7 return</strong> by the{" "}
                  <strong className="text-white">10th of every month</strong>. This
                  includes TDS deduction computation, payment to government,
                  monthly return filing, and{" "}
                  <strong className="text-white">
                    GSTR-7A certificate issuance
                  </strong>{" "}
                  to suppliers. Non-compliance attracts penalty, interest, and legal
                  action. <strong className="text-white">Taxvio</strong> provides
                  end-to-end GST TDS compliance — applicability check, GSTR-7
                  filing, certificate generation, and deductee reconciliation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get GSTR-7 Filing — ₹1,999/month →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20TDS%20Compliance%20and%20GSTR-7%20Filing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ Monthly GSTR-7 Filing",
                    "✅ TDS Certificate (GSTR-7A)",
                    "✅ Deductee Reconciliation",
                    "✅ Government Compliance",
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
                    ["⏰", "GSTR-7 due: 10th of next month"],
                    ["📋", "Mandatory for Govt/PSU/Local bodies"],
                    ["💰", "TDS rate: 2% (1% CGST + 1% SGST)"],
                    ["📜", "GSTR-7A auto-generated after filing"],
                    ["🚫", "Penalty: ₹100/day for late filing"],
                    ["🚀", "Filing fee: ₹1,999/month onwards"],
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
              { number: "300+", label: "GSTR-7 Returns Filed", icon: "✅" },
              { number: "10th", label: "Monthly Deadline", icon: "⏰" },
              { number: "100%", label: "Compliance Rate", icon: "📊" },
              { number: "₹1,999", label: "Starting Fee/Month", icon: "💰" },
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
              "✔ Government Compliance Experts",
              "✔ Deductee Reconciliation",
              "✔ Monthly Deadline Tracking",
              "✔ GSTR-7A Certificate Support",
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
          {/* WHAT IS GST TDS */}
          <section id="what-is-gst-tds">
            <SectionLabel text="Understanding GST TDS" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is GST TDS Under Section 51?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>GST TDS (Tax Deducted at Source)</strong> under{" "}
                  <strong>Section 51 of the CGST Act, 2017</strong> is a mechanism
                  where certain <strong>notified entities</strong> are required to
                  deduct tax at source while making payments to suppliers for
                  taxable supplies of goods or services.
                </p>
                <p>
                  This is DIFFERENT from regular GST compliance — here, the{" "}
                  <strong>payer (deductor)</strong> deducts a portion of GST from
                  the payment made to the <strong>supplier (deductee)</strong> and
                  deposits it directly to the government on behalf of the supplier.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🏛️ Who Must Deduct GST TDS?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    As per <strong>Section 51</strong> and{" "}
                    <strong>Notification No. 50/2018</strong>, the following
                    entities MUST deduct GST TDS:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-6">
                    {[
                      "Central Government departments and ministries",
                      "State Government departments and ministries",
                      "Local authorities (Municipal Corporations, Municipal Councils, Zila Parishads, Panchayats)",
                      "Governmental agencies and authorities",
                      "Public Sector Undertakings (PSUs) — both Central and State",
                      "Any other entity or class of persons notified by the Central or State Government",
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
                    💰 TDS Rate & Calculation
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    GST TDS is deducted at the rate of <strong>2%</strong> on the{" "}
                    <strong>total payment value (excluding GST)</strong>:
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-green-200">
                    <p className="font-bold text-green-700 text-sm mb-2">
                      📊 TDS Calculation Formula
                    </p>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p>
                        <strong>For Intra-State Supply (within same state):</strong>
                        <br />
                        TDS = Payment Value × 2% (1% CGST + 1% SGST/UTGST)
                      </p>
                      <p>
                        <strong>For Inter-State Supply (across states):</strong>
                        <br />
                        TDS = Payment Value × 2% (2% IGST)
                      </p>
                      <div className="bg-green-50 rounded-lg p-3 mt-2">
                        <p className="font-bold text-green-800 mb-1">
                          💡 Example
                        </p>
                        <p>
                          Invoice value: ₹1,00,000 (taxable) + ₹18,000 GST @18% =
                          ₹1,18,000
                          <br />
                          TDS = ₹1,00,000 × 2% = ₹2,000 (₹1,000 CGST + ₹1,000
                          SGST)
                          <br />
                          Net payment to supplier = ₹1,18,000 - ₹2,000 ={" "}
                          <strong>₹1,16,000</strong>
                          <br />
                          TDS deposited to Govt = <strong>₹2,000</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  When GST TDS Is NOT Applicable
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    🚫 Exemptions from GST TDS
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    GST TDS is NOT required to be deducted in the following cases:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Payment value is less than ₹2,50,000 (per contract/per payment)",
                      "Supplier is registered under Composition Scheme (GSTIN starts with number ending in C)",
                      "Supply is exempt from GST (e.g., healthcare, education services)",
                      "Supply attracts GST at NIL rate (0%)",
                      "Payment is made to an unregistered supplier (no GSTIN)",
                      "Reverse Charge Mechanism (RCM) is applicable on the supply",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📋 How GST TDS Works — Step by Step
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 1: Contract Award
                      </p>
                      <p className="text-xs">
                        Government department/PSU awards contract to supplier
                        (vendor) for goods/services supply.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 2: Supplier Raises Invoice
                      </p>
                      <p className="text-xs">
                        Supplier raises GST-compliant tax invoice showing taxable
                        value + GST amount.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 3: Deductor Deducts TDS (2%)
                      </p>
                      <p className="text-xs">
                        While making payment, deductor deducts 2% TDS on taxable
                        value (excluding GST).
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 4: Deductor Pays Net Amount to Supplier
                      </p>
                      <p className="text-xs">
                        Deductor pays (Invoice value - TDS amount) to supplier's
                        bank account.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 5: Deductor Deposits TDS to Government
                      </p>
                      <p className="text-xs">
                        Deductor deposits the TDS amount to government via
                        electronic cash ledger on GST portal.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 6: Deductor Files GSTR-7 (by 10th)
                      </p>
                      <p className="text-xs">
                        Deductor files monthly GSTR-7 return showing TDS deducted
                        and paid.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 7: GSTR-7A Auto-Generated
                      </p>
                      <p className="text-xs">
                        GST portal auto-generates GSTR-7A (TDS certificate) for
                        each deductee (supplier).
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 8: Supplier Claims TDS Credit
                      </p>
                      <p className="text-xs">
                        Supplier downloads GSTR-7A and claims TDS credit in
                        GSTR-3B return (offset against tax liability).
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in GST TDS compliance for government departments,
                  PSUs, and local authorities — TDS computation, GSTR-7 filing,
                  certificate issuance, and deductee reconciliation across Uttar
                  Pradesh, Noida, Delhi NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* GSTR-7 FILING PROCESS */}
          <section id="gstr7-process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to File GSTR-7 Return (Monthly TDS Return)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                GSTR-7 is a monthly return that MUST be filed by the 10th of every
                month. Here's the complete process:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "TDS Deduction During Payment Processing",
                    description:
                      "When processing vendor payments, identify taxable supplies subject to GST TDS. For each payment: (1) Verify supplier's GSTIN (ensure not Composition Scheme), (2) Check if payment value ≥ ₹2.5 lakh, (3) Calculate TDS = Payment Value (excl. GST) × 2%, (4) Deduct TDS from payment amount, (5) Pay net amount to supplier's bank account. Maintain TDS deduction register with: Supplier name & GSTIN, Invoice number & date, Taxable value, GST amount, TDS deducted (CGST/SGST or IGST), Payment date, Challan details.",
                    duration: "Ongoing (monthly)",
                  },
                  {
                    step: 2,
                    title: "Deposit TDS to Government (Electronic Cash Ledger)",
                    description:
                      "TDS deducted MUST be deposited to the government before filing GSTR-7. Log in to GST portal → Services → Payments → Create Challan (PMT-06). Select 'Tax Deducted at Source (TDS)' as payment type. Enter TDS amount (CGST, SGST/IGST separately). Make payment via net banking/NEFT/RTGS/debit card. Download challan with CIN (Challan Identification Number). The TDS amount is credited to your electronic cash ledger (visible in 'Electronic Cash Ledger' section). This MUST be done BEFORE filing GSTR-7 — otherwise, filing will fail.",
                    duration: "Before 10th of next month",
                  },
                  {
                    step: 3,
                    title: "Login to GST Portal & Access GSTR-7",
                    description:
                      "Log in to GST portal (www.gst.gov.in) with your GSTIN and credentials. Go to Services → Returns → Returns Dashboard. Select Financial Year and Return Filing Period (month for which TDS was deducted). Click on 'GSTR-7' tile (shows 'Prepare Online' or 'Prepare Offline'). Choose 'Prepare Online' for online filing or download offline tool for bulk data upload.",
                    duration: "Before 10th of next month",
                  },
                  {
                    step: 4,
                    title:
                      "Table 3: Details of TDS Liability (TDS Deducted from Suppliers)",
                    description:
                      "This is the MAIN table where you report all TDS deductions made during the month. For each supplier (deductee): Enter Deductee's GSTIN, Enter Gross Payment Value (taxable value excluding GST), Enter Total Tax Amount (GST on invoice), Enter TDS Deducted (CGST + SGST or IGST = 2% of gross value), System auto-populates deductee's legal name from GSTIN. You can add multiple invoices for the same supplier or add them as a single consolidated entry. The portal allows: (a) Manual entry (one-by-one), or (b) Bulk upload via JSON/Excel offline tool (recommended for >10 entries).",
                    duration: "Data entry phase",
                  },
                  {
                    step: 5,
                    title:
                      "Table 4: TDS Payable & Paid (Liability Summary & Payment Details)",
                    description:
                      "This table auto-populates based on Table 3 entries. It shows: (1) Total TDS Liability for the month (sum of all TDS deducted), (2) TDS Paid (from electronic cash ledger — auto-fetched based on PMT-06 challan), (3) TDS Payable/Excess balance. Ensure that 'TDS Paid' amount MATCHES the total TDS deducted in Table 3. If there's a shortfall, you must deposit additional amount via PMT-06 before proceeding.",
                    duration: "Auto-populated",
                  },
                  {
                    step: 6,
                    title: "Table 5: Late Fee (if filing after 10th)",
                    description:
                      "If you are filing GSTR-7 after the 10th of the month, late fee is applicable. Late fee = ₹100 per day (₹50 CGST + ₹50 SGST) from the day after the due date till the date of filing. Maximum late fee = ₹5,000 per return. The portal auto-calculates late fee based on filing date. You must pay late fee via PMT-06 challan before filing GSTR-7. Enter payment details (challan number, date) in Table 5.",
                    duration: "If applicable",
                  },
                  {
                    step: 7,
                    title: "Verification, Submission & DSC/EVC",
                    description:
                      "After filling all tables, click 'Preview' to verify data accuracy. Cross-check supplier GSTINs, payment values, and TDS amounts with your TDS register. Click 'Submit' (this does NOT file the return — it just saves the data). Now you must FILE the return using: (a) Digital Signature Certificate (DSC) — for government departments and entities with turnover > ₹5 crore, or (b) EVC (Electronic Verification Code) — Aadhaar-based OTP for others. After DSC/EVC verification, click 'File GSTR-7'. Download ARN (Acknowledgment Reference Number) and filed GSTR-7 PDF for your records.",
                    duration: "By 10th of next month",
                  },
                  {
                    step: 8,
                    title: "GSTR-7A Auto-Generation & Download",
                    description:
                      "Once GSTR-7 is successfully filed, the GST portal AUTO-GENERATES Form GSTR-7A (TDS Certificate) for each deductee (supplier). GSTR-7A contains: Deductor's GSTIN and name, Deductee's GSTIN and name, Certificate number, Month of deduction, Amount paid, TDS deducted (CGST, SGST/IGST). The deductee can view and download GSTR-7A from their GST portal: Login → Services → Returns → File Returns → View Form GSTR-7A. Deductee uses this certificate to claim TDS credit in their GSTR-3B return.",
                    duration: "Auto-generated post-filing",
                  },
                  {
                    step: 9,
                    title:
                      "Deductee Reconciliation (Ensure Suppliers Can Claim TDS)",
                    description:
                      "After filing GSTR-7, it's critical to ensure that all deductees (suppliers) can see their GSTR-7A certificates and claim TDS credit. We recommend: (1) Share GSTR-7A download link with each supplier via email, (2) Maintain a deductee reconciliation register (GSTIN, TDS deducted, GSTR-7A certificate number), (3) Follow up with suppliers to confirm TDS credit claimed in their GSTR-3B. If a supplier reports TDS mismatch or missing GSTR-7A, we help rectify by checking GSTIN accuracy and re-verification with GST Helpdesk.",
                    duration: "Post-filing (ongoing)",
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
                  Monthly Deadline & Timeline
                </p>
                <p className="text-sm text-gray-700">
                  GSTR-7 must be filed by <strong>10th of every month</strong> for
                  TDS deducted in the previous month. Example: For January 2024 TDS
                  deductions, GSTR-7 must be filed by 10th February 2024. Late
                  filing attracts ₹100/day penalty (max ₹5,000) + 18% interest on
                  unpaid TDS.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for GSTR-7 Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "GSTIN of deductor (your entity's GSTIN registered as TDS deductor)",
                    "TDS deduction register (month-wise details of TDS deducted)",
                    "Supplier/Vendor GSTIN details (deductee GSTINs)",
                    "Tax invoices received from suppliers (invoice number, date, value, GST amount)",
                    "Payment vouchers/challans (proof of payment to suppliers)",
                    "TDS payment challans (PMT-06) — proof of TDS deposited to government",
                    "Electronic cash ledger statement (showing TDS payment credit)",
                    "Bank statements (for payment verification)",
                    "GST portal login credentials (username, password, DSC/EVC)",
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
                    "Contract/Work Order copies (showing scope of work and payment terms)",
                    "Purchase Order (PO) details (if applicable)",
                    "Debit notes/Credit notes (if any adjustments made)",
                    "Revised invoices (if suppliers issued revised invoices)",
                    "Previous GSTR-7 acknowledgments (for reference/reconciliation)",
                    "Supplier master list (Excel sheet with GSTIN, name, address)",
                    "Digital Signature Certificate (DSC) — for authorized signatory",
                    "Authorization letter (if CA/consultant is filing on your behalf)",
                    "Notification copy (proof that your entity is notified under Section 51)",
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

          {/* GSTR-7A CERTIFICATE */}
          <section id="gstr7a">
            <SectionLabel text="TDS Certificate" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              GSTR-7A — TDS Certificate for Suppliers
            </h2>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                GSTR-7A is the <strong>TDS Certificate</strong> auto-generated by
                the GST portal AFTER the deductor files GSTR-7 and pays TDS to the
                government. It serves as proof for the supplier (deductee) to claim
                TDS credit.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3 text-lg">
                    📜 What GSTR-7A Contains
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Certificate Reference Number (unique for each deductee per month)",
                      "Deductor's GSTIN, legal name, and trade name",
                      "Deductee's GSTIN and legal name",
                      "Month and year of TDS deduction",
                      "Gross amount paid to supplier (taxable value)",
                      "Total GST amount on invoice",
                      "TDS amount deducted (CGST, SGST/IGST separately)",
                      "Date of deduction and date of deposit to government",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3 text-lg">
                    ✅ How Suppliers Access GSTR-7A
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 1: Login to GST Portal
                      </p>
                      <p className="text-xs">
                        Supplier logs in to GST portal with their GSTIN and
                        credentials.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 2: Navigate to GSTR-7A
                      </p>
                      <p className="text-xs">
                        Services → Returns → File Returns → Select Financial Year
                        → Click 'View Form GSTR-7A'.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 3: Select Month & Deductor
                      </p>
                      <p className="text-xs">
                        Select the month for which TDS was deducted. View list of
                        deductors (government entities) who deducted TDS.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">
                        Step 4: Download Certificate
                      </p>
                      <p className="text-xs">
                        Click 'Download' to get GSTR-7A PDF. Save for records and
                        use for claiming TDS credit in GSTR-3B.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white border-2 border-purple-300 rounded-2xl p-6">
                <p className="font-bold text-purple-800 mb-3">
                  💡 How Suppliers Claim TDS Credit in GSTR-3B
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  Once the supplier downloads GSTR-7A, they claim TDS credit in
                  their monthly <strong>GSTR-3B return</strong>:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-700">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="font-bold text-purple-700 mb-2">
                      Table 3.1(d) — TDS Credit
                    </p>
                    <p>
                      In GSTR-3B, Table 3.1(d) is titled "Inward supplies (liable
                      to reverse charge) - TDS credit". Supplier enters the TDS
                      amount (CGST, SGST/IGST) from GSTR-7A here.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="font-bold text-purple-700 mb-2">
                      Auto-Offset Against Tax Liability
                    </p>
                    <p>
                      The TDS credit is auto-adjusted against the supplier's tax
                      liability (from Table 3.2). If TDS credit exceeds liability,
                      the balance is carried forward to next month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Avoid These Errors" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Mistakes in GST TDS Compliance
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                GST TDS compliance errors can lead to supplier complaints, credit
                mismatches, and department scrutiny. Here are critical mistakes to
                avoid:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Deducting TDS on GST Amount (Instead of Taxable Value)",
                    icon: "💰",
                    problem:
                      "Many deductors mistakenly calculate TDS on the total invoice value (including GST) instead of only the taxable value. This results in EXCESS TDS deduction and supplier complaint.",
                    solution:
                      "ALWAYS calculate TDS on taxable value ONLY (excluding GST). Example: Invoice ₹1,18,000 (₹1,00,000 + ₹18,000 GST). TDS = ₹1,00,000 × 2% = ₹2,000 (NOT ₹1,18,000 × 2% = ₹2,360).",
                  },
                  {
                    mistake: "Incorrect GSTIN Entry in GSTR-7",
                    icon: "📝",
                    problem:
                      "Entering wrong GSTIN of supplier in GSTR-7 (typo, old GSTIN, or composition GSTIN). This causes GSTR-7A to be generated against the wrong supplier — TDS credit goes to wrong person.",
                    solution:
                      "ALWAYS verify supplier GSTIN on GST portal ('Search Taxpayer' feature) before entering in GSTR-7. Cross-check with supplier's invoice and GSTIN certificate. Maintain a verified supplier master list.",
                  },
                  {
                    mistake: "Not Depositing TDS Before Filing GSTR-7",
                    icon: "💵",
                    problem:
                      "Attempting to file GSTR-7 without first depositing TDS to government via electronic cash ledger. The portal will NOT allow filing if TDS payment is not completed.",
                    solution:
                      "FIRST deposit TDS via PMT-06 challan, THEN file GSTR-7. Ensure electronic cash ledger shows sufficient TDS credit balance before starting GSTR-7 filing.",
                  },
                  {
                    mistake: "Missing the 10th of Month Deadline",
                    icon: "⏰",
                    problem:
                      "Deductors often miss the GSTR-7 deadline (10th of next month), leading to late fee of ₹100/day and interest on unpaid TDS. Government departments face audit objections for late filing.",
                    solution:
                      "Set calendar reminders for 5th of every month. Maintain a monthly TDS filing checklist. Consider hiring a dedicated GST consultant/CA to ensure timely filing. Taxvio provides deadline tracking and alert services.",
                  },
                  {
                    mistake: "Deducting TDS from Composition Scheme Suppliers",
                    icon: "🚫",
                    problem:
                      "TDS should NOT be deducted from suppliers registered under Composition Scheme (GSTIN ending in C). Deducting TDS from such suppliers creates reconciliation issues and supplier complaints.",
                    solution:
                      "Before deducting TDS, check supplier's GSTIN on GST portal. If GSTIN ends with 'C' (e.g., 07XXXXX1234C1Z5), DO NOT deduct TDS. Verify composition status on supplier's GSTIN certificate or registration details.",
                  },
                  {
                    mistake: "Not Sharing GSTR-7A with Suppliers",
                    icon: "📨",
                    problem:
                      "After filing GSTR-7, deductors don't inform suppliers about GSTR-7A availability. Suppliers are unaware of TDS deduction and miss claiming credit, leading to double tax payment.",
                    solution:
                      "After GSTR-7 filing, immediately email all suppliers with: (a) Month of TDS deduction, (b) TDS amount deducted, (c) GSTR-7A certificate number, (d) Instructions to download GSTR-7A from GST portal. We provide automated GSTR-7A notification emails as part of our service.",
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
              Taxvio's GST TDS Compliance Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From TDS computation to GSTR-7 filing and deductee reconciliation —
              we handle complete GST TDS compliance for government departments,
              PSUs, and local authorities.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔍",
                  title: "TDS Applicability Assessment",
                  desc: "We verify if your entity is notified under Section 51 (government department/PSU/local authority), check if contract payments are subject to GST TDS, and provide written applicability opinion.",
                  price: "₹999",
                },
                {
                  icon: "📋",
                  title: "Monthly GSTR-7 Filing (Standard)",
                  desc: "Complete GSTR-7 preparation and filing for up to 20 deductees per month. Includes TDS computation, payment assistance, online filing with DSC/EVC, and acknowledgment download.",
                  price: "₹1,999/month",
                },
                {
                  icon: "💰",
                  title: "TDS Computation & Deduction Validation",
                  desc: "Review of vendor invoices and payment vouchers to ensure correct TDS calculation (2% on taxable value excluding GST). Preparation of TDS deduction register and payment schedule.",
                  price: "₹1,499/month",
                },
                {
                  icon: "💵",
                  title: "TDS Payment Assistance (PMT-06 Challan)",
                  desc: "Computation of monthly TDS liability, challan generation (PMT-06) on GST portal, payment processing via net banking, and electronic cash ledger verification.",
                  price: "₹499/month",
                },
                {
                  icon: "📜",
                  title: "GSTR-7A Certificate Generation & Distribution",
                  desc: "After GSTR-7 filing, we verify GSTR-7A auto-generation for each deductee, download certificates, and email them to all suppliers with claim instructions.",
                  price: "₹999/month",
                },
                {
                  icon: "🔄",
                  title: "Deductee Reconciliation (Supplier Coordination)",
                  desc: "Maintenance of deductee master list (GSTIN, name, TDS deducted), reconciliation with supplier records to ensure TDS credit claimed, and resolution of mismatch/disputes.",
                  price: "₹1,499/month",
                },
                {
                  icon: "🏭",
                  title: "High-Volume GSTR-7 Filing (>20 Deductees)",
                  desc: "For departments/PSUs with large vendor base (>20 suppliers per month). Includes bulk data upload via offline tool, multi-contract reconciliation, and dedicated account manager.",
                  price: "₹4,999/month",
                },
                {
                  icon: "📨",
                  title: "Notice Response (TDS Mismatch/Credit Issues)",
                  desc: "If GST department or supplier raises TDS credit mismatch issue, we investigate, prepare reconciliation statement, draft reply, and liaise with department/supplier for resolution.",
                  price: "₹2,999/case",
                },
                {
                  icon: "📊",
                  title: "Annual TDS Compliance Audit",
                  desc: "Year-end audit of all GSTR-7 returns (12 months), verification of TDS deducted vs. paid vs. claimed by suppliers, compliance report, and rectification of discrepancies.",
                  price: "₹9,999/year",
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
                📦 Monthly Compliance Packages
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic (Small Departments)",
                    price: "₹1,999/month",
                    includes: [
                      "Up to 10 deductees/month",
                      "GSTR-7 filing",
                      "Payment assistance",
                      "GSTR-7A download",
                      "Email support",
                    ],
                  },
                  {
                    package: "Standard (Medium PSUs)",
                    price: "₹3,999/month",
                    includes: [
                      "Up to 20 deductees/month",
                      "TDS computation validation",
                      "GSTR-7 filing + GSTR-7A",
                      "Deductee reconciliation",
                      "Priority support",
                    ],
                  },
                  {
                    package: "Premium (Large Govt Dept)",
                    price: "₹7,999/month",
                    includes: [
                      "Unlimited deductees",
                      "Bulk upload via offline tool",
                      "Multi-contract reconciliation",
                      "Dedicated account manager",
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
              Real Stories from Our GST TDS Compliance Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Muzaffarnagar Municipal Corporation",
                  location: "Muzaffarnagar",
                  text: "We were struggling with monthly GSTR-7 filing for 50+ vendors. Taxvio took over the entire process — TDS computation, payment, filing, and GSTR-7A distribution. All vendors now receive certificates on time. Zero compliance issues in last 12 months!",
                },
                {
                  name: "UP Jal Nigam (Division Office)",
                  location: "Meerut",
                  text: "Taxvio helped us set up GST TDS compliance from scratch — applicability assessment, GSTIN registration as deductor, vendor master setup, and monthly GSTR-7 filing. Their deductee reconciliation service ensures no supplier complaints. Highly professional!",
                },
                {
                  name: "Khatauli Nagar Palika",
                  location: "Khatauli",
                  text: "We had accumulated 6 months of unfiled GSTR-7 returns due to staff shortage. Taxvio's team filed all backlog returns in 10 days with late fee computation, reconciled all deductees, and now handles our monthly compliance seamlessly. Great support!",
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
              GST TDS Compliance Services for Government Departments & PSUs
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides GST TDS compliance (GSTR-7 filing, TDS certificate issuance,
              deductee reconciliation) for government departments, PSUs, local
              authorities across <strong>Noida</strong>, <strong>Delhi NCR</strong>
              , <strong>Meerut</strong>, <strong>Ghaziabad</strong>,{" "}
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
                  desc: "Fresh GST registration for new businesses.",
                },
                {
                  title: "GST Return Filing",
                  icon: "📊",
                  link: "/serviceslist/gst/gst-return-filing",
                  desc: "Monthly GSTR-1, GSTR-3B filing.",
                },
                {
                  title: "GST Notice Response",
                  icon: "📨",
                  link: "/serviceslist/gst/gst-notice-response",
                  desc: "Expert response to GST notices and SCNs.",
                },
                {
                  title: "GST TCS Compliance",
                  icon: "🛒",
                  link: "/serviceslist/gst/gst-tcs-compliance",
                  desc: "TCS compliance for e-commerce operators.",
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
                    Complete GST TDS Compliance Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    File GSTR-7 & Issue TDS Certificates
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't risk penalty and supplier complaints — file GSTR-7 by
                    10th of every month. Taxvio provides complete GST TDS
                    compliance for government departments, PSUs, and local
                    authorities — TDS computation, payment, GSTR-7 filing, and
                    GSTR-7A certificate issuance. Starting ₹1,999/month. Ensure
                    100% compliance and zero supplier disputes.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Start Now — ₹1,999/mo
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20TDS%20Compliance%20and%20GSTR-7%20Filing"
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
      q: "Is GST TDS deduction mandatory for all government departments?",
      a: "Yes, GST TDS deduction is MANDATORY for ALL departments, ministries, and offices of the Central Government and State Governments when making payments to suppliers for taxable supplies of goods or services (if payment value ≥ ₹2.5 lakh). This is a legal requirement under Section 51 of the CGST Act. Non-deduction attracts penalty and interest, and can lead to audit objections and departmental action against the concerned officer.",
    },
    {
      q: "Can TDS be deducted on advance payments to suppliers?",
      a: "Yes, GST TDS MUST be deducted on advance payments as well (if payment value ≥ ₹2.5 lakh), as per Rule 66 of CGST Rules. The TDS deduction timing is 'at the time of credit of payment to the account of supplier OR at the time of payment, whichever is earlier'. This means even if you make an advance payment for a contract, you must deduct 2% TDS and report it in GSTR-7 for that month.",
    },
    {
      q: "What if the supplier doesn't have a GSTIN — should TDS still be deducted?",
      a: "No. GST TDS should NOT be deducted if the supplier is NOT registered under GST (i.e., does not have a GSTIN). Section 51 specifically states that TDS is deducted on payments made to 'registered persons' only. If the supplier is unregistered, you should verify whether the supply is exempt from GST or if the supplier should have been registered (and report to GST department if evasion is suspected).",
    },
    {
      q: "Can we revise or correct GSTR-7 after filing?",
      a: "No, GSTR-7 CANNOT be revised or amended after filing. If you made an error in GSTR-7 (wrong GSTIN, wrong amount, missing entry), you have TWO options: (1) Adjust the error in the NEXT month's GSTR-7 (e.g., if you over-reported TDS by ₹1,000 in January, reduce ₹1,000 from February GSTR-7), or (2) File a rectification application with the GST department explaining the error and request manual correction. Prevention is key — always verify data before filing.",
    },
    {
      q: "What if we miss the GSTR-7 deadline and file late?",
      a: "If you file GSTR-7 after the 10th of the month, you will face: (1) Late fee of ₹100 per day (₹50 CGST + ₹50 SGST) from 11th till the date of filing, subject to maximum of ₹5,000 per return, (2) Interest at 18% per annum on the TDS amount (if not deposited to government on time) from the due date of filing till actual payment date. The late fee must be paid via PMT-06 challan before filing GSTR-7. Repeated late filing can lead to GST department scrutiny and departmental audit.",
    },
    {
      q: "How do we handle TDS if the supplier is from another state (inter-state supply)?",
      a: "For inter-state supplies, GST TDS is deducted as IGST (2% IGST) instead of CGST + SGST. Example: Payment to supplier in Maharashtra from UP Government department → TDS = 2% IGST. In GSTR-7, you report it under the IGST column (not CGST + SGST). The supplier claims this TDS credit in their GSTR-3B under IGST head. The process is the same — only the tax head changes.",
    },
    {
      q: "Can Taxvio handle GSTR-7 filing for multiple departments under one PSU/organization?",
      a: "Yes. If your organization has multiple departments or divisions, each with a separate GSTIN (registered as TDS deductor), we can handle GSTR-7 filing for all of them under a consolidated service agreement. We assign a dedicated account manager, provide bulk data upload via offline tool, and ensure separate GSTR-7 filing for each GSTIN with centralized reconciliation and reporting. Contact us for customized multi-entity GST TDS compliance packages.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — GST TDS Compliance
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