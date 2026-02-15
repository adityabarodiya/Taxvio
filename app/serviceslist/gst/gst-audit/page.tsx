import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST Audit Assistance Services in India | GST Departmental Audit Support | Taxvio",
  description:
    "Professional GST audit assistance including departmental audit support, special audit handling, reconciliation and compliance advisory across India.",
};

export default function GSTAuditPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-audit-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GST audit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST audit is an examination of GST returns, records and financial statements to verify correctness of tax paid and compliance with GST law.",
                },
              },
              {
                "@type": "Question",
                name: "Who can conduct GST audit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST audit may be conducted by GST department officers or by Chartered Accountants appointed under special audit provisions.",
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
              GST Audit Assistance & Compliance Support
            </h1>
            <p className="text-lg text-gray-200">
              Expert support for GST departmental audits, special audits,
              reconciliation and compliance risk management across India.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Departmental Audit Handling
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Reconciliation Support
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Professional Advisory
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Get GST Audit Assistance
            </Link>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <p className="text-lg">
            Filing Returns?{" "}
            <Link
              href="/serviceslist/gst/gst-return"
              className="text-[#00416a] font-semibold underline"
            >
              File GST Returns
            </Link>{" "}
            | Annual Return?{" "}
            <Link
              href="/serviceslist/gst/gstr-9"
              className="text-[#00416a] font-semibold underline"
            >
              File GSTR-9
            </Link>{" "}
            | Notice Reply?{" "}
            <Link
              href="/serviceslist/gst/gst-notice-reply"
              className="text-[#00416a] font-semibold underline"
            >
              Reply to GST Notice
            </Link>
          </p>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">

          <h2 className="text-3xl font-bold">
            What is GST Audit?
          </h2>

          <p className="text-lg leading-relaxed">
            GST audit is a systematic examination of GST returns, invoices,
            books of accounts and tax payments to verify whether a taxpayer
            has correctly reported turnover, claimed input tax credit (ITC),
            and paid applicable GST as per law.
          </p>

          <p className="text-lg leading-relaxed">
            The objective of GST audit is to ensure compliance and detect
            discrepancies, under-reporting or incorrect ITC claims.
          </p>

          <h2 className="text-3xl font-bold">
            Types of GST Audit
          </h2>

          <h3 className="text-2xl font-semibold">
            1. Departmental Audit
          </h3>

          <p className="text-lg leading-relaxed">
            Conducted by GST officers under Section 65 of GST Act.
            Officers examine records at business premises or office.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            2. Special Audit
          </h3>

          <p className="text-lg leading-relaxed">
            Conducted under Section 66 when authorities believe that
            value of supply or ITC claimed is not within normal limits.
            Audit is conducted by Chartered Accountant appointed by department.
          </p>

          <h2 className="text-3xl font-bold">
            GST Audit Process
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-lg">
            <li>Issue of audit notice.</li>
            <li>Submission of documents and records.</li>
            <li>Verification & reconciliation.</li>
            <li>Audit report preparation.</li>
            <li>Final findings & demand (if any).</li>
          </ol>

        </section>

        {/* Timeline Visual Chart */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              GST Audit Timeline
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-xl font-bold text-[#00416a]">1</div>
                <p className="mt-3 text-sm">Audit Notice Issued</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-xl font-bold text-[#00416a]">2</div>
                <p className="mt-3 text-sm">Data Submission</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-xl font-bold text-[#00416a]">3</div>
                <p className="mt-3 text-sm">Verification & Review</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-xl font-bold text-green-600">4</div>
                <p className="mt-3 text-sm">Audit Report & Conclusion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-8">

          <h2 className="text-3xl font-bold">
            Documents Required for GST Audit
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>GST returns (GSTR-1, GSTR-3B, GSTR-9)</li>
            <li>Sales & purchase register</li>
            <li>Input tax credit reconciliation</li>
            <li>Financial statements</li>
            <li>E-way bills and invoices</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Risks of Non-Compliance
          </h2>

          <p className="text-lg leading-relaxed">
            If discrepancies are found, the department may issue demand notices,
            impose penalties, or initiate legal proceedings. Proper audit
            assistance ensures correct representation and minimizes exposure.
          </p>

          <h2 className="text-3xl font-bold">
            Why Choose Taxvio for GST Audit Assistance?
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Comprehensive GST reconciliation.</li>
            <li>Professional representation during audit.</li>
            <li>Notice drafting & reply support.</li>
            <li>Compliance risk advisory.</li>
            <li>Pan India support.</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Our GST professionals ensure complete audit preparedness and
            structured compliance management to safeguard your business.
          </p>

        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Start GST Audit Assistance
          </Link>
        </div>

      </main>
    </>
  );
}
