"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";

export default function GSTR9Page() {
  const [days, setDays] = useState(0);

  const lateFeePerDay = 200; // ₹100 CGST + ₹100 SGST
  const maxCap = 20000; // Practical capped example
  const lateFee = Math.min(days * lateFeePerDay, maxCap);

  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gstr9-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GSTR-9?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GSTR-9 is the annual return filed by regular GST registered taxpayers consolidating yearly sales, purchases and tax details.",
                },
              },
              {
                "@type": "Question",
                name: "What is GSTR-9 late fee?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Late fee for GSTR-9 is ₹200 per day (₹100 CGST + ₹100 SGST), subject to turnover-based limits.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 text-[#002b45]">

        {/* HERO */}
        <section className="bg-gradient-to-b from-[#00416a] to-[#002b45] text-white py-28 text-center">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              GSTR-9 Filing Services – GST Annual Return Compliance
            </h1>
            <p className="text-lg text-gray-200">
              Professional GSTR-9 filing with reconciliation, late fee support,
              compliance guidance and expert GST advisory across India.
            </p>

            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Annual Reconciliation Support
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Late Fee Minimization
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Pan India GST Experts
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              File GSTR-9 Now
            </Link>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">

          <h2 className="text-3xl font-bold">
            What is GSTR-9 (GST Annual Return)?
          </h2>

          <p className="text-lg leading-relaxed">
            GSTR-9 is the annual return that must be filed by regular GST
            registered taxpayers under the Goods and Services Tax Act in India.
            It consolidates details of outward supplies, inward supplies,
            input tax credit (ITC), tax paid, demands, refunds, and other
            compliance information declared during the financial year.
          </p>

          <p className="text-lg leading-relaxed">
            Filing GSTR-9 ensures that the data reported in monthly or quarterly
            GST returns (GSTR-1 and GSTR-3B) matches the books of accounts.
            Proper reconciliation prevents notices, penalties, and scrutiny
            from the GST department.
          </p>

          <h2 className="text-3xl font-bold">
            Who Needs to File GSTR-9?
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Regular GST taxpayers.</li>
            <li>Businesses above prescribed turnover limits.</li>
            <li>Entities not under composition scheme.</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Why Annual Reconciliation is Important?
          </h2>

          <p className="text-lg leading-relaxed">
            Annual reconciliation compares GST returns filed during the year
            with financial statements. Mismatches in turnover, ITC, or tax
            payments may trigger GST notices. Professional reconciliation
            ensures accurate compliance and reduces risk exposure.
          </p>

        </section>

        {/* Reconciliation Visual Chart */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              GSTR-9 Annual Reconciliation Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">

              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-3xl font-bold text-[#00416a]">1</div>
                <h3 className="font-semibold mt-4">Data Collection</h3>
                <p className="text-sm mt-2">
                  Gather GSTR-1, GSTR-3B, books of accounts and ITC records.
                </p>
              </div>

              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-3xl font-bold text-[#00416a]">2</div>
                <h3 className="font-semibold mt-4">Turnover Matching</h3>
                <p className="text-sm mt-2">
                  Match sales as per GST returns with audited financials.
                </p>
              </div>

              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-3xl font-bold text-[#00416a]">3</div>
                <h3 className="font-semibold mt-4">ITC Reconciliation</h3>
                <p className="text-sm mt-2">
                  Verify input tax credit with purchase register & GSTR-2A/2B.
                </p>
              </div>

              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-3xl font-bold text-green-600">4</div>
                <h3 className="font-semibold mt-4">Final Filing</h3>
                <p className="text-sm mt-2">
                  File GSTR-9 after correcting mismatches and adjustments.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Late Fee Calculator */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">
            GSTR-9 Late Fee Calculator
          </h2>

          <p className="text-lg mb-6">
            Late filing of GSTR-9 attracts ₹200 per day (₹100 CGST + ₹100 SGST),
            subject to turnover-based maximum limits.
          </p>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md">
            <label className="block font-semibold mb-2">
              Enter Delay Days:
            </label>

            <input
              type="number"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full border px-4 py-2 rounded-lg mb-4"
              min="0"
            />

            <p className="text-lg">
              Estimated Late Fee:{" "}
              <span className="font-bold text-red-600">
                ₹ {lateFee}
              </span>
            </p>

            <p className="text-sm text-gray-500 mt-2">
              ₹200 per day (maximum ₹20,000 assumed cap)
            </p>
          </div>
        </section>

        {/* Why Choose */}
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-3xl font-bold">
            Why Choose Taxvio for GSTR-9 Filing?
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Comprehensive annual reconciliation</li>
            <li>Expert GST advisory</li>
            <li>Notice handling support</li>
            <li>Late fee minimization guidance</li>
            <li>Pan India service coverage</li>
          </ul>

          <p className="text-lg leading-relaxed">
            GSTR-9 filing requires careful reconciliation between GST returns
            and audited financial statements. Taxvio ensures error-free filing,
            compliance assurance, and reduced litigation risk.
          </p>
        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Start GSTR-9 Filing Today
          </Link>
        </div>

      </main>
    </>
  );
}
