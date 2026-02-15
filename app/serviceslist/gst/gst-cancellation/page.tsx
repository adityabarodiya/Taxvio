import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST Cancellation & Revocation Services in India | Taxvio",
  description:
    "Apply for GST cancellation online with Taxvio. Expert assistance for voluntary GST cancellation, compulsory cancellation and revocation of GST registration across India.",
};

export default function GSTCancellationPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-cancellation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "When can GST registration be cancelled?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST registration can be cancelled when business is discontinued, turnover falls below threshold, or registration was obtained voluntarily.",
                },
              },
              {
                "@type": "Question",
                name: "Can cancelled GST registration be restored?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, GST registration can be restored by filing revocation application within prescribed time.",
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
              GST Cancellation & Revocation Services
            </h1>
            <p className="text-lg text-gray-200">
              Professional assistance for voluntary GST cancellation, compulsory
              cancellation and revocation of GST registration.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Expert Compliance Support
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Secure Documentation
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Pan India Service
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Apply for GST Cancellation
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
            | Need help filing returns?{" "}
            <Link
              href="/serviceslist/gst/gst-return"
              className="text-[#00416a] font-semibold underline"
            >
              File GST Returns here
            </Link>
          </p>
        </section>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">
          <h2 className="text-3xl font-bold">What is GST Cancellation?</h2>

          <p className="text-lg leading-relaxed">
            GST cancellation is the process of legally closing or surrendering
            your GST registration when your business is discontinued, merged,
            transferred, or no longer required to be registered under GST. Once
            cancelled, the taxpayer is no longer required to file GST returns.
          </p>

          <h2 className="text-3xl font-bold">Types of GST Cancellation</h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong>Voluntary Cancellation:</strong> When business is closed
              or turnover falls below threshold.
            </li>
            <li>
              <strong>Compulsory Cancellation:</strong> Initiated by GST officer
              due to non-compliance or fraud.
            </li>
            <li>
              <strong>Cancellation Due to Transfer/Merger:</strong> In case of
              business restructuring.
            </li>
          </ul>

          <h2 className="text-3xl font-bold">GST Cancellation Process</h2>

          <ol className="list-decimal pl-6 space-y-3 text-lg">
            <li>Filing cancellation application on GST portal (REG-16).</li>
            <li>Submission of required documents.</li>
            <li>Verification by GST officer.</li>
            <li>Issuance of cancellation order.</li>
          </ol>

          <h2 className="text-3xl font-bold">
            Documents Required for GST Cancellation
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>GST login credentials</li>
            <li>Reason for cancellation</li>
            <li>Business closure proof (if applicable)</li>
            <li>Final return details (GSTR-10)</li>
          </ul>

          <h2 className="text-3xl font-bold">
            What is Revocation of GST Cancellation?
          </h2>

          <p className="text-lg leading-relaxed">
            If GST registration is cancelled by the department due to non-filing
            of returns, the taxpayer can apply for revocation within prescribed
            time limits. Revocation restores the GSTIN, allowing business
            operations to resume legally.
          </p>

          <h2 className="text-3xl font-bold">GST Cancellation Timeline</h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Application submission: Immediate</li>
            <li>Officer verification: 15–30 days</li>
            <li>Final cancellation order: Within 30 days</li>
          </ul>

          <h2 className="text-3xl font-bold">Why Choose Taxvio?</h2>

          <p className="text-lg leading-relaxed">
            Incorrect GST cancellation can lead to future compliance issues.
            Taxvio ensures accurate documentation, proper filing of final
            returns, and smooth cancellation process. We also assist in
            revocation cases and handling departmental notices.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Expert GST consultants</li>
            <li>Timely documentation</li>
            <li>Transparent pricing</li>
            <li>Complete compliance support</li>
          </ul>
        </section>
        {/* Cancellation vs Revocation Comparison */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              GST Cancellation vs GST Revocation – Key Differences
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-left">
                <thead className="bg-[#00416a] text-white">
                  <tr>
                    <th className="p-3">Basis</th>
                    <th className="p-3">GST Cancellation</th>
                    <th className="p-3">GST Revocation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td className="p-3 font-semibold">Meaning</td>
                    <td className="p-3">
                      Permanent closure or surrender of GST registration.
                    </td>
                    <td className="p-3">
                      Restoration of cancelled GST registration.
                    </td>
                  </tr>

                  <tr className="border">
                    <td className="p-3 font-semibold">Who Initiates</td>
                    <td className="p-3">
                      Taxpayer (voluntary) or GST officer (compulsory).
                    </td>
                    <td className="p-3">
                      Taxpayer applies after cancellation by department.
                    </td>
                  </tr>

                  <tr className="border">
                    <td className="p-3 font-semibold">Reason</td>
                    <td className="p-3">
                      Business closure, turnover below limit, merger or
                      non-compliance.
                    </td>
                    <td className="p-3">
                      Cancellation due to non-filing of returns or compliance
                      default.
                    </td>
                  </tr>

                  <tr className="border">
                    <td className="p-3 font-semibold">Form Used</td>
                    <td className="p-3">
                      REG-16 (Application for Cancellation).
                    </td>
                    <td className="p-3">
                      REG-21 (Application for Revocation).
                    </td>
                  </tr>

                  <tr className="border">
                    <td className="p-3 font-semibold">Time Limit</td>
                    <td className="p-3">Can be filed anytime when eligible.</td>
                    <td className="p-3">
                      Must be filed within 30 days of cancellation order.
                    </td>
                  </tr>

                  <tr className="border">
                    <td className="p-3 font-semibold">Outcome</td>
                    <td className="p-3">GSTIN becomes inactive permanently.</td>
                    <td className="p-3">
                      GSTIN is restored and business operations resume.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              GST cancellation and GST revocation are often confused.
              Cancellation ends your GST registration, whereas revocation
              restores a cancelled registration. Choosing the correct process
              depends on your business status and compliance history.
              Professional guidance ensures that mistakes are avoided and future
              legal complications are prevented.
            </p>
          </div>
        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Start GST Cancellation Process
          </Link>
        </div>
      </main>
    </>
  );
}
