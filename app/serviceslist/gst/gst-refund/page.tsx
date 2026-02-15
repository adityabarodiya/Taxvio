import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST Refund Application in India | GST Refund Filing Services | Taxvio",
  description:
    "Apply for GST refund online with Taxvio. Expert assistance for export refund, excess GST payment refund, inverted duty refund and ITC refund across India.",
};

export default function GSTRefundPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-refund-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who can apply for GST refund?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Registered taxpayers including exporters, businesses with excess payment, and those under inverted duty structure can apply for GST refund.",
                },
              },
              {
                "@type": "Question",
                name: "How long does GST refund take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST refund processing generally takes 30 to 60 days depending on verification.",
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
              GST Refund Application Services in India
            </h1>
            <p className="text-lg text-gray-200">
              Professional GST refund filing services including export refund,
              excess GST payment refund, ITC refund and inverted duty refund.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Expert Refund Filing
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Accurate Documentation
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Faster Processing Support
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Apply for GST Refund
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
              Register under GST here
            </Link>{" "}
            | Need help with filing?{" "}
            <Link
              href="/serviceslist/gst/gst-return"
              className="text-[#00416a] font-semibold underline"
            >
              File GST Returns here
            </Link>
          </p>
        </section>

        {/* CONTENT SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">

          <h2 className="text-3xl font-bold">
            What is GST Refund?
          </h2>

          <p className="text-lg leading-relaxed">
            GST refund is the process of claiming back excess tax paid to the
            government under the Goods and Services Tax regime. Businesses may
            become eligible for refunds due to export of goods/services without
            payment of tax, excess tax payment, inverted duty structure, or
            accumulated input tax credit.
          </p>

          <p className="text-lg leading-relaxed">
            Timely filing of GST refund applications ensures improved cash flow
            and working capital management. Taxvio provides expert support in
            preparing accurate refund applications and handling departmental
            queries effectively.
          </p>

          <h2 className="text-3xl font-bold">
            Types of GST Refund
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Export Refund (Zero Rated Supply)</li>
            <li>Refund of Excess GST Payment</li>
            <li>Refund under Inverted Duty Structure</li>
            <li>Refund of Accumulated Input Tax Credit</li>
            <li>Refund of GST paid on Advances</li>
          </ul>

          <h2 className="text-3xl font-bold">
            GST Refund Process
          </h2>
          {/* Refund Timeline Visual Chart */}
<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      GST Refund Processing Timeline
    </h2>

    <div className="relative">
      {/* Horizontal Line */}
      <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-300"></div>

      <div className="grid md:grid-cols-5 gap-8 text-center relative">

        {/* Step 1 */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg shadow-lg">
            1
          </div>
          <h3 className="mt-4 font-semibold">Application Filing</h3>
          <p className="text-sm text-gray-600 mt-2">
            Refund application filed in Form RFD-01 on GST portal.
          </p>
          <p className="text-xs text-gray-500 mt-1">Day 1</p>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg shadow-lg">
            2
          </div>
          <h3 className="mt-4 font-semibold">Acknowledgement</h3>
          <p className="text-sm text-gray-600 mt-2">
            ARN generated & application acknowledged by department.
          </p>
          <p className="text-xs text-gray-500 mt-1">Within 15 Days</p>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg shadow-lg">
            3
          </div>
          <h3 className="mt-4 font-semibold">Verification</h3>
          <p className="text-sm text-gray-600 mt-2">
            GST officer verifies documents & may raise queries.
          </p>
          <p className="text-xs text-gray-500 mt-1">15–30 Days</p>
        </div>

        {/* Step 4 */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg shadow-lg">
            4
          </div>
          <h3 className="mt-4 font-semibold">Approval Order</h3>
          <p className="text-sm text-gray-600 mt-2">
            Refund sanction order issued after approval.
          </p>
          <p className="text-xs text-gray-500 mt-1">30–45 Days</p>
        </div>

        {/* Step 5 */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
            5
          </div>
          <h3 className="mt-4 font-semibold">Refund Credited</h3>
          <p className="text-sm text-gray-600 mt-2">
            Refund amount credited directly to bank account.
          </p>
          <p className="text-xs text-gray-500 mt-1">Within 60 Days</p>
        </div>

      </div>
    </div>

    <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto">
      The GST department generally processes refund applications within
      30 to 60 days. Delays may occur due to documentation errors,
      departmental verification or deficiency memos. Professional filing
      ensures faster processing and reduced rejection risk.
    </p>
  </div>
</section>


          <ol className="list-decimal pl-6 space-y-3 text-lg">
            <li>Eligibility assessment.</li>
            <li>Preparation of refund application (RFD-01).</li>
            <li>Submission on GST portal.</li>
            <li>Verification by GST officer.</li>
            <li>Refund sanction & credit to bank account.</li>
          </ol>

          <h2 className="text-3xl font-bold">
            Documents Required for GST Refund
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>GSTIN and login credentials</li>
            <li>Invoice details</li>
            <li>Export documents (if applicable)</li>
            <li>Bank account details</li>
            <li>Tax payment challans</li>
          </ul>

          <h2 className="text-3xl font-bold">
            How Long Does GST Refund Take?
          </h2>

          <p className="text-lg leading-relaxed">
            The GST department generally processes refund applications within
            30 to 60 days. Delays may occur due to incorrect documentation or
            departmental queries. Professional assistance helps avoid rejection
            or deficiency memos.
          </p>

          <h2 className="text-3xl font-bold">
            Why Choose Taxvio for GST Refund Filing?
          </h2>

          <p className="text-lg leading-relaxed">
            Our GST experts ensure complete documentation accuracy, correct
            refund categorization, and proper compliance with refund rules.
            We assist in responding to GST notices and follow up with
            authorities to expedite processing.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Accurate refund computation</li>
            <li>Professional documentation support</li>
            <li>Departmental follow-up</li>
            <li>Transparent pricing</li>
            <li>Pan-India service availability</li>
          </ul>

        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Start GST Refund Application
          </Link>
        </div>

      </main>
    </>
  );
}
