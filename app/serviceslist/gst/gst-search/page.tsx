"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";

export default function GSTSearchPage() {
  const [gstin, setGstin] = useState("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setError("");
    setData(null);

    // Basic validation
    if (!gstin.match(/^[0-9A-Z]{15}$/)) {
      setError("Please enter a valid 15-digit GSTIN.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `https://<API_ENDPOINT>?gstin=${gstin}&api_key=<API_KEY>`
      );

      const json = await res.json();

      if (!res.ok || !json) {
        setError("Unable to fetch details. Try another GSTIN.");
      } else {
        setData(json);
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-[#002b45]">

      {/* Hero */}
      <section className="bg-[#00416a] text-white py-20 text-center">
        <h1 className="text-4xl font-bold">GSTIN Search & Verification</h1>
        <p className="mt-2 text-lg">
          Enter any valid GSTIN to get business details, status, jurisdiction
          and compliance information.
        </p>
      </section>

      {/* Search Box */}
      <section className="max-w-xl mx-auto px-6 py-12">
        <div className="flex gap-3">
          <input
            type="text"
            value={gstin}
            onChange={(e) => setGstin(e.target.value.toUpperCase())}
            placeholder="Enter GSTIN (e.g., 27AAACV1234C1ZV)"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="bg-[#00416a] text-white px-6 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
        {loading && <p className="mt-4 text-gray-500">Loading...</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </section>

      {/* Display Result */}
      {data && (
        <section className="max-w-3xl mx-auto px-6 py-8 bg-white rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            GSTIN Details for {data.gstin}
          </h2>

          {/* Example fields — adapt based on API provider’s response */}
          <DetailRow label="Legal Name" value={data.legal_name_of_business || data.lgnm} />
          <DetailRow label="Trade Name" value={data.trade_name || data.tradeNam} />
          <DetailRow label="Status" value={data.gst_in_status || data.sts || data.stsCd} />
          <DetailRow label="Registration Date" value={data.date_of_registration || data.rgdt} />
          <DetailRow label="Taxpayer Type" value={data.taxpayer_type || data.dty} />
          <DetailRow label="Jurisdiction" value={data.state_jurisdiction || data.ctj} />
          <DetailRow label="Principal Address" value={data.principal_place_of_business?.addr?.st} />
        </section>
      )}

      {/* SEO Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-3xl font-bold">
          Why GST Search & Verification Matters
        </h2>

        <p className="text-lg leading-relaxed">
          GSTIN is a unique 15-digit identification number issued to every
          taxpayer registered under the Goods and Services Tax. Verifying
          a GSTIN ensures the entity you are dealing with is valid, active
          and compliant—essential for claiming input tax credit and avoiding
          fake invoices in business transactions.
        </p>

        <p className="text-lg leading-relaxed">
          Verifying GST details before onboarding vendors, partners or clients
          reduces fraud risk and enhances compliance accuracy. With real-time
          API integration, you get accurate taxpayer information instantly.
        </p>

        <p className="text-lg leading-relaxed">
          Be sure you enter a valid 15-digit GSTIN and consult a GST
          professional for detailed compliance interpretations.
        </p>

        {/* Internal Links */}
        <div className="space-y-2">
          <Link href="/serviceslist/gst/gst-registration" className="underline text-[#00416a]">
            GST Registration
          </Link>
          <Link href="/serviceslist/gst/gst-return" className="underline text-[#00416a]">
            GST Return Filing
          </Link>
          <Link href="/serviceslist/gst/gstr-9" className="underline text-[#00416a]">
            GST Annual Return (GSTR-9)
          </Link>
          <Link href="/serviceslist/gst/gst-notice-reply" className="underline text-[#00416a]">
            GST Notice Reply Assistance
          </Link>
        </div>
      </section>

      <Footar />
    </main>
  );
}

function DetailRow({ label, value }: any) {
  return (
    <div className="flex justify-between border-b py-2">
      <span className="font-semibold">{label}:</span>
      <span>{value || "-"}</span>
    </div>
  );
}
