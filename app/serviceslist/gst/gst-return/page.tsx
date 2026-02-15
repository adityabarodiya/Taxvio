import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";
import GSTReturnClient from "./GSTReturnClient";

export const metadata = {
  title: "GST Return Filing in India | GSTR-1, GSTR-3B | Taxvio",
  description:
    "File GST returns online with Taxvio. Expert GST return filing services including GSTR-1, GSTR-3B, annual returns and late fee calculator support.",
};

export default function GSTReturnPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-return-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GST late fee per day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST late fee is ₹50 per day (₹25 CGST + ₹25 SGST), subject to maximum limits.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if GST return is not filed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Late filing attracts penalties, interest and may lead to GST registration suspension.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 text-[#002b45]">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-[#00416a] to-[#002b45] text-white py-28 text-center">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              GST Return Filing Services – Stay Compliant & Avoid Penalties
            </h1>
            <p className="text-lg text-gray-200">
              Accurate GSTR-1, GSTR-3B, QRMP & Annual Return filing services across India.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200 transition"
            >
              File GST Return Now
            </Link>
          </div>
        </section>

        {/* CLIENT COMPONENT (Calculator + Due Dates) */}
        <GSTReturnClient />

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            File GST Return Today
          </Link>
        </div>

      </main>
    </>
  );
}
