import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST LUT Filing Services in India | Letter of Undertaking (LUT) | Taxvio",
  description:
    "File GST LUT online with Taxvio. Export goods and services without payment of IGST by filing Letter of Undertaking (LUT) under GST.",
};

export default function GSTLUTPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-lut-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GST LUT?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST LUT (Letter of Undertaking) allows exporters to supply goods or services without payment of IGST.",
                },
              },
              {
                "@type": "Question",
                name: "Is LUT mandatory for exporters?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, exporters must file LUT annually to export without paying IGST.",
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
              GST LUT Filing Services – Export Without Paying IGST
            </h1>
            <p className="text-lg text-gray-200">
              File Letter of Undertaking (LUT) under GST and export goods or
              services without payment of Integrated GST (IGST).
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Annual LUT Filing
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Export Compliance Support
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Pan India Service
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Apply for GST LUT
            </Link>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <p className="text-lg">
            Need GST Registration?{" "}
            <Link
              href="/serviceslist/gst/gst-registration"
              className="text-[#00416a] font-semibold underline"
            >
              Register here
            </Link>{" "}
            | Filing returns?{" "}
            <Link
              href="/serviceslist/gst/gst-return"
              className="text-[#00416a] font-semibold underline"
            >
              File GST Returns
            </Link>{" "}
            | Claim refund?{" "}
            <Link
              href="/serviceslist/gst/gst-refund"
              className="text-[#00416a] font-semibold underline"
            >
              Apply for GST Refund
            </Link>
          </p>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">

          <h2 className="text-3xl font-bold">
            What is GST LUT (Letter of Undertaking)?
          </h2>

          <p className="text-lg leading-relaxed">
            GST LUT (Letter of Undertaking) is a declaration filed by exporters
            under the Goods and Services Tax Act that allows them to export goods
            or services without paying Integrated GST (IGST). Instead of paying
            IGST and later claiming a refund, exporters can submit LUT and
            directly export without tax payment.
          </p>

          <h2 className="text-3xl font-bold">
            Who Can File LUT?
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Registered GST taxpayers engaged in export of goods.</li>
            <li>Service exporters.</li>
            <li>Businesses supplying to SEZ units.</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Benefits of GST LUT Filing
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>No need to block working capital by paying IGST.</li>
            <li>Avoid refund delays.</li>
            <li>Faster export processing.</li>
            <li>Improved cash flow management.</li>
          </ul>

          <h2 className="text-3xl font-bold">
            LUT vs Bond – Key Differences
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-[#00416a] text-white">
                <tr>
                  <th className="p-3">Basis</th>
                  <th className="p-3">LUT</th>
                  <th className="p-3">Bond</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="p-3">Bank Guarantee</td>
                  <td className="p-3">Not Required</td>
                  <td className="p-3">Required</td>
                </tr>
                <tr className="border">
                  <td className="p-3">Usage</td>
                  <td className="p-3">Export without IGST payment</td>
                  <td className="p-3">For non-eligible LUT cases</td>
                </tr>
                <tr className="border">
                  <td className="p-3">Validity</td>
                  <td className="p-3">One Financial Year</td>
                  <td className="p-3">Until obligation fulfilled</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold">
            GST LUT Filing Process
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-lg">
            <li>Login to GST portal.</li>
            <li>Navigate to LUT filing section.</li>
            <li>Select financial year.</li>
            <li>Submit declaration.</li>
            <li>Receive ARN acknowledgment.</li>
          </ol>

          <h2 className="text-3xl font-bold">
            Documents Required for LUT Filing
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>GST login credentials</li>
            <li>Authorized signatory details</li>
            <li>Digital Signature (if applicable)</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Why Choose Taxvio for GST LUT Filing?
          </h2>

          <p className="text-lg leading-relaxed">
            Taxvio provides expert assistance in filing annual LUT accurately
            and on time. Our professionals ensure compliance with export rules,
            help avoid procedural errors, and assist in GST return reconciliation
            for exporters.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Quick LUT filing support</li>
            <li>Export advisory assistance</li>
            <li>Affordable pricing</li>
            <li>Pan India service availability</li>
          </ul>

        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Start GST LUT Filing Today
          </Link>
        </div>

      </main>
    </>
  );
}
