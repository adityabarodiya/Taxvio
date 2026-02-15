import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST Registration in India | Apply GST Online | Taxvio",
  description:
    "Apply for GST Registration online in India with Taxvio. Fast, reliable and affordable GST registration services for startups, MSMEs and professionals. Expert GST consultants.",
};

export default function GSTRegistration() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is required to register under GST?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Businesses exceeding prescribed turnover limits or engaged in interstate supply must register under GST.",
                },
              },
              {
                "@type": "Question",
                name: "What is the time required for GST registration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST registration generally takes 3–7 working days depending on verification.",
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
              GST Registration in India – Fast, Secure & 100% Online
            </h1>
            <p className="text-lg text-gray-200">
              Get your GSTIN with expert assistance from Taxvio. We provide
              end-to-end GST registration services for startups, traders,
              MSMEs, e-commerce sellers and professionals across India.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Government Portal Filing
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Secure Documentation
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Expert GST Consultants
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Apply for GST Registration
            </Link>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">

          <h2 className="text-3xl font-bold">What is GST Registration?</h2>

          <p className="text-lg leading-relaxed">
            GST Registration is the process by which a business obtains a
            unique GSTIN (Goods and Services Tax Identification Number) under
            the Goods and Services Tax Act in India. Once registered, the
            business becomes legally authorized to collect GST from customers
            and claim input tax credit on purchases.
          </p>

          <p className="text-lg leading-relaxed">
            GST registration is mandatory for businesses crossing prescribed
            turnover thresholds or engaging in interstate trade, e-commerce,
            or certain notified services. Voluntary registration is also
            available for businesses seeking credibility and tax benefits.
          </p>

          <h2 className="text-3xl font-bold">
            Benefits of GST Registration
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Legal recognition as a registered supplier.</li>
            <li>Ability to collect GST and issue tax invoices.</li>
            <li>Claim input tax credit and reduce tax burden.</li>
            <li>Expand operations across India without restrictions.</li>
            <li>Enhance business credibility with vendors and clients.</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Regular Scheme vs Composition Scheme
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-[#00416a] text-white">
                <tr>
                  <th className="p-3">Particulars</th>
                  <th className="p-3">Regular Scheme</th>
                  <th className="p-3">Composition Scheme</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="p-3">Tax Rate</td>
                  <td className="p-3">Standard GST Rates (5%–28%)</td>
                  <td className="p-3">1%–6% Fixed Rate</td>
                </tr>
                <tr className="border">
                  <td className="p-3">Input Tax Credit</td>
                  <td className="p-3">Available</td>
                  <td className="p-3">Not Available</td>
                </tr>
                <tr className="border">
                  <td className="p-3">Return Filing</td>
                  <td className="p-3">Monthly/Quarterly</td>
                  <td className="p-3">Quarterly</td>
                </tr>
                <tr className="border">
                  <td className="p-3">Interstate Supply</td>
                  <td className="p-3">Allowed</td>
                  <td className="p-3">Not Allowed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold">
            Documents Required for GST Registration
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>PAN Card of Business/Applicant</li>
            <li>Aadhaar Card</li>
            <li>Business Address Proof</li>
            <li>Bank Account Details</li>
            <li>Photographs of Promoters</li>
          </ul>

          <h2 className="text-3xl font-bold">
            GST Registration Process with Taxvio
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-lg">
            <li>Eligibility Assessment</li>
            <li>Document Collection</li>
            <li>Application Filing on GST Portal</li>
            <li>OTP & ARN Generation</li>
            <li>GSTIN Approval</li>
          </ol>

          <p className="text-lg leading-relaxed">
            Our GST experts ensure accurate documentation, correct selection
            of scheme (Regular or Composition), and proper classification of
            goods/services to prevent future compliance issues.
          </p>

        </section>

        {/* TESTIMONIAL SLIDER */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">
              What Our Clients Say
            </h2>

            <div className="overflow-hidden relative">
              <div className="flex animate-scroll gap-8">
                {[
                  "Smooth and fast GST registration process.",
                  "Professional and knowledgeable GST consultants.",
                  "Helped us choose the right GST scheme.",
                  "Excellent documentation support.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="min-w-[300px] bg-gray-100 p-6 rounded-xl shadow"
                  >
                    ⭐⭐⭐⭐⭐
                    <p className="mt-4">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Apply GST Registration Now
          </Link>
        </div>

      </main>
    </>
  );
}
