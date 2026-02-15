import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST Notice Reply Services | Reply to GST Show Cause Notice | Taxvio",
  description:
    "Professional GST notice reply services including ASMT-10, REG-17, DRC-01 and show cause notices. Expert drafting and compliance support across India.",
};

export default function GSTNoticeReplyPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-notice-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I reply to a GST notice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST notice reply must be filed online through GST portal with supporting documents and legal explanation within prescribed time.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if GST notice is ignored?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ignoring GST notice may result in penalties, cancellation of registration, tax demand or legal action.",
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
              GST Notice Reply Services – Expert Compliance Support
            </h1>
            <p className="text-lg text-gray-200">
              Professional assistance for replying to GST notices including
              ASMT-10, DRC-01, REG-17 and Show Cause Notices across India.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Expert Legal Drafting
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Timely Response Filing
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Pan India Service
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Get GST Notice Assistance
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
            | File Returns?{" "}
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
            </Link>
          </p>
        </section>

        {/* SEO CONTENT */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">

          <h2 className="text-3xl font-bold">
            What is a GST Notice?
          </h2>

          <p className="text-lg leading-relaxed">
            A GST notice is a formal communication issued by the GST department
            to a registered taxpayer for discrepancies, non-compliance, mismatch
            in returns, delayed filing, excess input tax credit claims or
            suspected tax evasion. It requires timely response through the GST
            portal with proper documentation and legal explanation.
          </p>

          <h2 className="text-3xl font-bold">
            Common Types of GST Notices
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><strong>ASMT-10:</strong> Notice for discrepancy in return.</li>
            <li><strong>DRC-01:</strong> Demand notice for tax liability.</li>
            <li><strong>REG-17:</strong> Notice for cancellation of GST registration.</li>
            <li><strong>Show Cause Notice (SCN):</strong> Explanation required for specific issues.</li>
          </ul>

          <h2 className="text-3xl font-bold">
            GST Notice Reply Process
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-lg">
            <li>Careful review of notice.</li>
            <li>Identification of discrepancy.</li>
            <li>Collection of supporting documents.</li>
            <li>Drafting professional legal reply.</li>
            <li>Submission on GST portal before deadline.</li>
          </ol>

        </section>

        {/* Timeline Visual */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              GST Notice Handling Timeline
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-2xl font-bold text-[#00416a]">1</div>
                <p className="mt-3 text-sm">Notice Received</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-2xl font-bold text-[#00416a]">2</div>
                <p className="mt-3 text-sm">Document Review</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-2xl font-bold text-[#00416a]">3</div>
                <p className="mt-3 text-sm">Draft Reply</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="text-2xl font-bold text-green-600">4</div>
                <p className="mt-3 text-sm">Submit Before Deadline</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mistakes Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-8">
          <h2 className="text-3xl font-bold">
            Common Mistakes While Replying to GST Notice
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Ignoring notice deadline.</li>
            <li>Submitting incomplete documents.</li>
            <li>Incorrect legal drafting.</li>
            <li>Not reconciling GST returns properly.</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Professional guidance ensures proper compliance and reduces risk
            of penalties or cancellation.
          </p>

          <h2 className="text-3xl font-bold">
            Why Choose Taxvio for GST Notice Reply?
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Expert drafting support.</li>
            <li>Compliance analysis & reconciliation.</li>
            <li>Timely filing assistance.</li>
            <li>Pan India representation support.</li>
          </ul>
        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Reply to GST Notice Now
          </Link>
        </div>

      </main>
    </>
  );
}
