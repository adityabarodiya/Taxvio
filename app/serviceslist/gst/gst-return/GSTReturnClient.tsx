"use client";

import { useState } from "react";
import Link from "next/link";

export default function GSTReturnClient() {
  const [days, setDays] = useState(0);

  const lateFeePerDay = 50;
  const maxLateFee = 5000;
  const lateFee = Math.min(days * lateFeePerDay, maxLateFee);

  return (
    <>
      {/* Internal Link */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-lg">
          Not registered under GST yet?{" "}
          <Link
            href="/serviceslist/gst/gst-registration"
            className="text-[#00416a] font-semibold underline"
          >
            Apply for GST Registration here
          </Link>{" "}
          before filing your returns.
        </p>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">

        <h2 className="text-3xl font-bold">
          GST Return Filing in India – Complete Guide
        </h2>

        <p className="text-lg leading-relaxed">
          GST return filing is a mandatory compliance requirement for all
          registered taxpayers under the Goods and Services Tax Act in India.
          Every business holding a valid GSTIN must report its sales,
          purchases, input tax credit (ITC), and tax liability within the
          prescribed due dates. Timely filing of GST returns ensures smooth
          business operations and prevents penalties, interest charges, and
          cancellation of registration.
        </p>

        <p className="text-lg leading-relaxed">
          Whether you are a trader, manufacturer, service provider,
          freelancer, startup or MSME, maintaining GST compliance is crucial.
          Taxvio provides professional GST return filing services including
          GSTR-1, GSTR-3B, GSTR-9 (Annual Return), QRMP returns and
          reconciliation support.
        </p>

        <h3 className="text-2xl font-semibold">
          Types of GST Returns
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>
            <strong>GSTR-1:</strong> Statement of outward supplies (sales).
          </li>
          <li>
            <strong>GSTR-3B:</strong> Monthly summary return with tax payment.
          </li>
          <li>
            <strong>GSTR-9:</strong> Annual return for regular taxpayers.
          </li>
          <li>
            <strong>GSTR-4:</strong> For composition scheme taxpayers.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold">
          Why Timely GST Return Filing is Important?
        </h3>

        <p className="text-lg leading-relaxed">
          Filing GST returns on time helps businesses maintain compliance
          credibility, avoid late fees, prevent interest charges, and ensure
          uninterrupted e-way bill generation. Late filing can lead to
          suspension of GST registration, affecting overall business
          operations.
        </p>

      </section>

      {/* Due Date Table */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">
          GST Return Due Dates (Latest Schedule)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-[#00416a] text-white">
              <tr>
                <th className="p-3">Return Type</th>
                <th className="p-3">Frequency</th>
                <th className="p-3">Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-3">GSTR-1</td>
                <td className="p-3">Monthly</td>
                <td className="p-3">11th of next month</td>
              </tr>
              <tr className="border">
                <td className="p-3">GSTR-3B</td>
                <td className="p-3">Monthly</td>
                <td className="p-3">20th of next month</td>
              </tr>
              <tr className="border">
                <td className="p-3">QRMP Scheme</td>
                <td className="p-3">Quarterly</td>
                <td className="p-3">13th of month after quarter</td>
              </tr>
              <tr className="border">
                <td className="p-3">GSTR-9 (Annual)</td>
                <td className="p-3">Yearly</td>
                <td className="p-3">31st December (Next FY)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-lg leading-relaxed">
          Missing these due dates results in automatic late fees and interest.
          Therefore, businesses should maintain proper accounting records and
          reconcile their data monthly.
        </p>
      </section>

      {/* GST Late Fee Calculator */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">
          GST Late Fee Calculator – Estimate Your Penalty
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          GST late fee is charged at ₹50 per day (₹25 CGST + ₹25 SGST)
          for regular returns. The maximum late fee is generally capped at
          ₹5000 depending on the type of return and turnover.
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
            ₹50 per day (maximum ₹5000)
          </p>
        </div>

        <h3 className="text-2xl font-semibold mt-10">
          Additional Interest on Late Payment
        </h3>

        <p className="text-lg leading-relaxed">
          Apart from late fees, interest at 18% per annum is applicable on
          outstanding tax liability. This makes timely filing extremely
          important for financial stability.
        </p>

      </section>

      {/* Advanced SEO Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">

        <h2 className="text-3xl font-bold">
          Why Choose Taxvio for GST Return Filing?
        </h2>

        <p className="text-lg leading-relaxed">
          Taxvio provides professional GST compliance services across India.
          Our experts ensure accurate reconciliation of sales and purchase
          data, correct ITC claims, and timely filing of returns. We assist
          businesses in avoiding unnecessary penalties and responding to GST
          notices effectively.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>Accurate GST data reconciliation</li>
          <li>Input Tax Credit optimization</li>
          <li>Monthly compliance monitoring</li>
          <li>Notice handling support</li>
          <li>Affordable and transparent pricing</li>
        </ul>

        <p className="text-lg leading-relaxed">
          Our GST consultants work with startups, MSMEs, traders,
          e-commerce sellers and corporate clients to ensure seamless
          compliance and smooth operations.
        </p>

        <h2 className="text-3xl font-bold">
          Conclusion
        </h2>

        <p className="text-lg leading-relaxed">
          GST return filing is not just a compliance formality but a crucial
          business responsibility. Timely filing protects businesses from
          penalties, maintains credibility, and ensures smooth tax credit
          flow. With expert assistance from Taxvio, businesses can focus on
          growth while we handle their compliance requirements.
        </p>

      </section>
    </>
  );
}
