import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST Amendment Services in India | Update GST Registration Details | Taxvio",
  description:
    "Apply for GST amendment online with Taxvio. Update business name, address, contact details, bank account or core GST registration details with expert assistance.",
};

export default function GSTAmendmentPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-amendment-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GST amendment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST amendment is the process of updating business details such as address, name, bank details or contact information in GST registration.",
                },
              },
              {
                "@type": "Question",
                name: "How long does GST amendment take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Non-core amendments are approved instantly, while core amendments may take 7–15 working days.",
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
              GST Amendment Services – Update Your GST Details Easily
            </h1>
            <p className="text-lg text-gray-200">
              Professional assistance for updating GST registration details
              including business name, address, bank details and authorized signatory.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Core & Non-Core Amendments
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Secure Documentation
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Fast Processing
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Apply for GST Amendment
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
            | Need to file returns?{" "}
            <Link
              href="/serviceslist/gst/gst-return"
              className="text-[#00416a] font-semibold underline"
            >
              File GST Returns
            </Link>{" "}
            | Want cancellation?{" "}
            <Link
              href="/serviceslist/gst/gst-cancellation"
              className="text-[#00416a] font-semibold underline"
            >
              Cancel GST
            </Link>
          </p>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">

          <h2 className="text-3xl font-bold">
            What is GST Amendment?
          </h2>

          <p className="text-lg leading-relaxed">
            GST amendment refers to updating or modifying details in your
            existing GST registration. Businesses must update changes in
            business name, address, contact information, bank details,
            partners/directors or authorized signatory within prescribed
            timelines to remain compliant.
          </p>

          <h2 className="text-3xl font-bold">
            Types of GST Amendments
          </h2>

          <h3 className="text-2xl font-semibold">
            1. Core Fields Amendment
          </h3>

          <p className="text-lg leading-relaxed">
            Core fields require approval from GST officer and include:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Business name change</li>
            <li>Principal place of business</li>
            <li>Addition/removal of partners or directors</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">
            2. Non-Core Fields Amendment
          </h3>

          <p className="text-lg leading-relaxed">
            Non-core amendments are auto-approved and include:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Bank account details</li>
            <li>Contact details (Email & Mobile)</li>
            <li>Authorized signatory details</li>
          </ul>

          <h2 className="text-3xl font-bold">
            GST Amendment Process
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-lg">
            <li>Login to GST portal.</li>
            <li>Select amendment option under services.</li>
            <li>Update required fields.</li>
            <li>Upload supporting documents.</li>
            <li>Submit using DSC/EVC verification.</li>
          </ol>

          <h2 className="text-3xl font-bold">
            Documents Required for GST Amendment
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>GST login credentials</li>
            <li>Proof of address (if address changed)</li>
            <li>Partnership deed / Board resolution</li>
            <li>Bank statement or cancelled cheque</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Core vs Non-Core Amendment Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-[#00416a] text-white">
                <tr>
                  <th className="p-3">Basis</th>
                  <th className="p-3">Core Amendment</th>
                  <th className="p-3">Non-Core Amendment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="p-3">Approval Required</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">No</td>
                </tr>
                <tr className="border">
                  <td className="p-3">Processing Time</td>
                  <td className="p-3">7–15 Days</td>
                  <td className="p-3">Instant</td>
                </tr>
                <tr className="border">
                  <td className="p-3">Examples</td>
                  <td className="p-3">Address, Business Name</td>
                  <td className="p-3">Email, Bank Details</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold">
            Why Choose Taxvio for GST Amendment?
          </h2>

          <p className="text-lg leading-relaxed">
            Incorrect amendment may result in compliance issues or rejection.
            Taxvio ensures accurate documentation, correct filing, and
            professional support in case of departmental queries.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Expert GST consultants</li>
            <li>Quick processing support</li>
            <li>Transparent pricing</li>
            <li>Pan-India assistance</li>
          </ul>

        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Start GST Amendment Process
          </Link>
        </div>

      </main>
    </>
  );
}
