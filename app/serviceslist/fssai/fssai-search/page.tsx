import Footar from "@/components/Footar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "FSSAI License Search & Verification Online | Check FSSAI Number | Taxvio",
  description:
    "Search and verify FSSAI license number online. Learn how to check food license validity. Expert FSSAI support in Khatauli, Muzaffarnagar, Noida, Delhi & Mumbai.",
  keywords:
    "FSSAI License Search, Verify FSSAI Number, Check FSSAI License Online, FSSAI Verification India, FSSAI Consultant Khatauli",
};

export default function FSSAISearchPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-[#00416a] mb-6">
          FSSAI License Search & Verification – Check Food License Online
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          FSSAI License Search allows consumers, distributors, and businesses
          to verify the authenticity and validity of a food business operator’s
          FSSAI registration or license number. Verification ensures that the
          food business is legally authorized under the Food Safety and Standards Act, 2006.
        </p>

        <p className="leading-relaxed mb-6">
          Taxvio provides assistance in FSSAI license verification, compliance
          review, and resolving discrepancies related to FSSAI registration.
          We assist clients in Khatauli, Muzaffarnagar, Noida, Delhi, Mumbai and across India.
        </p>

        {/* WHAT IS FSSAI SEARCH */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          What is FSSAI License Search?
        </h2>

        <p className="mb-6">
          FSSAI License Search is an online verification facility provided by
          FSSAI authorities where anyone can check the validity and status
          of a food business license using the 14-digit FSSAI license number.
        </p>

        <p className="mb-6">
          This tool helps in verifying whether a food business is legally
          registered and whether its license is active, expired, suspended,
          or cancelled.
        </p>

        {/* WHY IMPORTANT */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Why is FSSAI Verification Important?
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Ensures food safety compliance</li>
          <li>Protects consumers from unauthorized operators</li>
          <li>Helps distributors verify suppliers</li>
          <li>Prevents dealing with suspended or expired license holders</li>
          <li>Maintains regulatory transparency</li>
        </ul>

        {/* HOW TO SEARCH */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          How to Check FSSAI License Number Online?
        </h2>

        <ol className="list-decimal pl-6 space-y-3 mb-8">
          <li>Visit the official FSSAI license verification portal.</li>
          <li>Enter the 14-digit FSSAI license or registration number.</li>
          <li>Complete captcha verification.</li>
          <li>View license details including validity and status.</li>
        </ol>

        <p className="mb-6">
          If any discrepancy or compliance issue is found,
          professional assistance may be required to update,
          renew or modify the license.
        </p>

        {/* WHAT DETAILS APPEAR */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Details Available in FSSAI Search Results
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Name of Food Business Operator</li>
          <li>License Number</li>
          <li>License Type (Basic/State/Central)</li>
          <li>Validity Period</li>
          <li>Business Address</li>
          <li>Status (Active/Suspended/Expired)</li>
        </ul>

        {/* COMMON ISSUES */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Common Issues Found During FSSAI Verification
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Expired License</li>
          <li>Incorrect Business Details</li>
          <li>Suspended or Cancelled Status</li>
          <li>Incorrect Product Category</li>
          <li>Non-filing of Annual Return</li>
        </ul>

        {/* SOLUTIONS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          How Taxvio Can Help After FSSAI Search
        </h2>

        <p className="mb-6">
          If your license shows expired or incorrect details,
          Taxvio can assist with:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>FSSAI Renewal Application</li>
          <li>FSSAI License Modification</li>
          <li>FSSAI Annual Return Filing</li>
          <li>FSSAI Notice Reply Assistance</li>
          <li>Fresh FSSAI Registration</li>
        </ul>

        {/* LOCAL SEO */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          FSSAI License Verification Services in Khatauli & Nearby Cities
        </h2>

        <p className="mb-6">
          If you operate a food business in Khatauli, verifying your
          FSSAI license status is essential to avoid compliance risks.
          Taxvio provides expert FSSAI support services in Khatauli,
          Muzaffarnagar, Noida, Delhi and Mumbai.
        </p>

        {/* INTERNAL LINKS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Related FSSAI Services
        </h2>

        <ul className="space-y-3 mb-10">
          <li>
            <Link href="/serviceslist/fssai/fssai-registration" className="text-[#00416a] underline">
              FSSAI Registration
            </Link>
          </li>
          <li>
            <Link href="/serviceslist/fssai/fssai-renewal" className="text-[#00416a] underline">
              FSSAI Renewal
            </Link>
          </li>
          <li>
            <Link href="/serviceslist/fssai/fssai-modification" className="text-[#00416a] underline">
              FSSAI License Modification
            </Link>
          </li>
          <li>
            <Link href="/serviceslist/fssai/fssai-annual-return" className="text-[#00416a] underline">
              FSSAI Annual Return Filing
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="bg-[#00416a] text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            Need Help After FSSAI Verification?
          </h3>
          <p className="mb-4">
            If your FSSAI status shows expired, suspended or incorrect details,
            get professional compliance assistance from Taxvio.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00416a] px-6 py-3 rounded-xl font-semibold"
          >
            Get Expert Assistance
          </Link>
        </div>

      </section>
        <Footar/>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can I check my FSSAI license number?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "You can check your FSSAI license by entering the 14-digit number on the official FSSAI verification portal."
                }
              },
              {
                "@type": "Question",
                "name": "What if my FSSAI license shows expired?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "If your license is expired, you should immediately apply for renewal to avoid penalties."
                }
              },
              {
                "@type": "Question",
                "name": "Is FSSAI verification mandatory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Verification is not mandatory but highly recommended to ensure the authenticity and validity of a food business license."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}