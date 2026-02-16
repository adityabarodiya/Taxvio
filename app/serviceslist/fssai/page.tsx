"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";

export default function FSSAIMainPage() {
  const [turnover, setTurnover] = useState("");
  const [result, setResult] = useState("");

  const checkEligibility = () => {
    const value = Number(turnover);

    if (!value) {
      setResult("Please enter your annual turnover.");
      return;
    }

    if (value <= 12) {
      setResult("You are eligible for FSSAI Basic Registration.");
    } else if (value > 12 && value <= 2000) {
      setResult("You require FSSAI State License.");
    } else {
      setResult("You require FSSAI Central License.");
    }
  };

  return (
    <main className="bg-gray-50 text-[#002b45]">

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#00416a] to-[#002b45] text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            FSSAI Registration & Food License Services in India
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Apply for FSSAI registration online and obtain Basic, State or Central food license with complete compliance support. We assist restaurants, cloud kitchens, food manufacturers, traders and import-export businesses across India.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow"
          >
            Apply for FSSAI License
          </Link>
        </div>
      </section>

      {/* SEO CONTENT INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold">
          What is FSSAI Registration?
        </h2>

        <p className="text-lg leading-relaxed">
          FSSAI registration is mandatory for all food business operators (FBOs) under the Food Safety and Standards Act, 2006. The Food Safety and Standards Authority of India regulates food safety standards to ensure hygiene, quality and consumer protection. Any individual or entity involved in manufacturing, processing, storage, distribution or sale of food products must obtain FSSAI registration or license.
        </p>

        <p className="text-lg leading-relaxed">
          Whether you operate a small food stall, restaurant, bakery, dairy, cloud kitchen, grocery store or large food manufacturing unit, compliance with FSSAI regulations is legally required. Non-compliance may lead to penalties, prosecution or business closure.
        </p>

        <h2 className="text-3xl font-bold">
          Who Needs FSSAI License?
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>Restaurants and cafes</li>
          <li>Cloud kitchens and home-based food sellers</li>
          <li>Food manufacturers and processors</li>
          <li>Importers and exporters of food products</li>
          <li>Distributors and wholesalers</li>
          <li>Retail grocery stores</li>
          <li>Food delivery businesses</li>
        </ul>
      </section>

      {/* ELIGIBILITY CALCULATOR */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          FSSAI Eligibility Calculator
        </h2>

        <p className="text-center text-lg mb-8">
          Enter your annual turnover to check which type of FSSAI license you require.
        </p>

        <div className="bg-white max-w-md mx-auto p-8 rounded-xl shadow-lg">
          <label className="block font-semibold mb-2">
            Enter Annual Turnover (in Lakhs ₹)
          </label>

          <input
            type="number"
            value={turnover}
            onChange={(e) => setTurnover(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg mb-4"
            placeholder="e.g. 15"
          />

          <button
            onClick={checkEligibility}
            className="w-full bg-[#00416a] text-white py-2 rounded-lg font-semibold"
          >
            Check Eligibility
          </button>

          {result && (
            <p className="mt-4 text-lg font-semibold text-[#00416a]">
              {result}
            </p>
          )}
        </div>
      </section>

      {/* LICENSE COMPARISON */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          FSSAI License Comparison & Processing Time
        </h2>

        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full border border-gray-200 text-left">
            <thead className="bg-[#00416a] text-white">
              <tr>
                <th className="p-4">Criteria</th>
                <th className="p-4">Basic Registration</th>
                <th className="p-4">State License</th>
                <th className="p-4">Central License</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-4 font-semibold">Turnover Limit</td>
                <td className="p-4">Up to ₹12 Lakhs</td>
                <td className="p-4">₹12 Lakhs – ₹20 Crore</td>
                <td className="p-4">Above ₹20 Crore</td>
              </tr>
              <tr className="border">
                <td className="p-4 font-semibold">Processing Time</td>
                <td className="p-4">7–10 Working Days</td>
                <td className="p-4">15–25 Working Days</td>
                <td className="p-4">30–45 Working Days</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Validity</td>
                <td className="p-4">1–5 Years</td>
                <td className="p-4">1–5 Years</td>
                <td className="p-4">1–5 Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* MERITS & DEMERITS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            Benefits of FSSAI Registration
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Legal authorization to operate food business</li>
            <li>Enhances brand credibility and consumer trust</li>
            <li>Required for listing on food delivery platforms</li>
            <li>Improves business expansion opportunities</li>
            <li>Reduces risk of penalties and legal action</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-red-700">
            Compliance Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Maintain hygiene and safety standards</li>
            <li>Timely renewal before license expiry</li>
            <li>Annual return filing for manufacturers</li>
            <li>Inspection readiness</li>
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold">
          Why Choose Taxvio for FSSAI Services?
        </h2>

        <p className="text-lg leading-relaxed">
          Taxvio provides complete FSSAI registration assistance including eligibility assessment, documentation preparation, filing and approval tracking. Our experts ensure that your application complies with regulatory requirements, reducing delays and rejection risk.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>Professional compliance advisory</li>
          <li>Transparent process</li>
          <li>Quick turnaround time</li>
          <li>Pan India service support</li>
        </ul>
      </section>

      <Footar />

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
        <Link
          href="/contact"
          className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
        >
          Get FSSAI Consultation Today
        </Link>
      </div>

    </main>
  );
}
