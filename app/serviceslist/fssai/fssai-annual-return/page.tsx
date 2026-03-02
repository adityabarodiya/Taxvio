import Footar from "@/components/Footar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "FSSAI Annual Return Filing Online in India | Form D1 & D2 | Taxvio",
  description:
    "File FSSAI Annual Return (Form D1 & D2) online with Taxvio. Expert compliance support for manufacturers, importers & food businesses in Khatauli, Muzaffarnagar, Noida, Delhi & Mumbai.",
  keywords:
    "FSSAI Annual Return Filing, Form D1 Filing, Form D2 Filing, FSSAI Consultant Khatauli, FSSAI Return Filing India",
};

export default function FSSAIAnnualReturnPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-[#00416a] mb-6">
          FSSAI Annual Return Filing (Form D1 & D2) – Complete Compliance Support
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          FSSAI Annual Return filing is mandatory for food manufacturers,
          importers, re-packers and certain food business operators holding
          State or Central FSSAI License. Failure to file annual returns
          can result in penalties of ₹100 per day of delay and may lead to
          suspension or cancellation of the food license.
        </p>

        <p className="leading-relaxed mb-6">
          Taxvio provides professional FSSAI Annual Return filing services
          ensuring accurate reporting, timely submission, and full compliance
          with Food Safety and Standards Authority of India regulations.
          We assist businesses in Khatauli, Muzaffarnagar, Noida, Delhi,
          Mumbai and across India.
        </p>

        {/* WHAT IS FSSAI ANNUAL RETURN */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          What is FSSAI Annual Return?
        </h2>

        <p className="mb-6">
          FSSAI Annual Return is a yearly compliance requirement where food
          businesses must report details of food products manufactured,
          imported, exported, handled or distributed during the financial year.
          This return is filed in Form D1 (for manufacturers/importers) and
          Form D2 (for milk and milk product manufacturers).
        </p>

        <p className="mb-6">
          It ensures transparency in food production, helps regulatory
          authorities monitor food safety standards, and verifies compliance
          with applicable regulations.
        </p>

        {/* WHO MUST FILE */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Who Must File FSSAI Annual Return?
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Food Manufacturers</li>
          <li>Food Importers</li>
          <li>Re-packers and Re-labelers</li>
          <li>Milk & Milk Product Manufacturers</li>
          <li>Central and State License Holders (as applicable)</li>
        </ul>

        <p className="mb-6">
          Basic FSSAI Registration holders are generally not required to
          file annual returns unless specifically mandated.
        </p>

        {/* TYPES OF RETURNS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Types of FSSAI Annual Returns
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Form D1 – Annual Return
        </h3>
        <p className="mb-6">
          Applicable to manufacturers, importers and food processors.
          It includes details such as quantity manufactured, exported,
          sold, or handled during the financial year.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Form D2 – Milk & Milk Products Return
        </h3>
        <p className="mb-6">
          Applicable specifically to milk and milk product manufacturers.
          This return must be filed half-yearly in addition to annual
          compliance requirements.
        </p>

        {/* DUE DATE */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          FSSAI Annual Return Due Date
        </h2>

        <p className="mb-6">
          FSSAI Annual Return must be filed on or before 31st May
          for the previous financial year (April to March).
        </p>

        <p className="mb-6">
          Delayed filing attracts a penalty of ₹100 per day until
          the return is filed.
        </p>

        {/* DOCUMENTS REQUIRED */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Documents & Information Required
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>FSSAI License Copy</li>
          <li>Details of Products Manufactured or Imported</li>
          <li>Production & Sales Data</li>
          <li>Export Details (if applicable)</li>
          <li>Milk Procurement Details (for dairy businesses)</li>
        </ul>

        {/* PROCESS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          FSSAI Annual Return Filing Process with Taxvio
        </h2>

        <ol className="list-decimal pl-6 space-y-3 mb-8">
          <li>Compliance Review & Eligibility Check</li>
          <li>Collection of Sales & Production Data</li>
          <li>Preparation of Form D1 or D2</li>
          <li>Online Filing with FSSAI Portal</li>
          <li>Acknowledgment & Record Maintenance</li>
        </ol>

        <p className="mb-6">
          Our experts ensure accurate classification of products and
          complete disclosure to avoid notices or penalties.
        </p>

        {/* PENALTIES */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Penalties for Non-Compliance
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>₹100 per day late fee</li>
          <li>Risk of license suspension</li>
          <li>Risk of license cancellation</li>
          <li>Possible legal action</li>
        </ul>

        {/* LOCAL SEO SECTION */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          FSSAI Annual Return Filing in Khatauli & Nearby Cities
        </h2>

        <p className="mb-6">
          If you are a food manufacturer or importer in Khatauli,
          timely filing of FSSAI Annual Return is essential to avoid penalties.
          Taxvio provides dedicated compliance assistance in Khatauli,
          Muzaffarnagar, Noida, Delhi and Mumbai.
        </p>

        {/* INTERNAL LINKS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Related FSSAI Compliance Services
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
            <Link href="/serviceslist/fssai/fssai-notice-reply" className="text-[#00416a] underline">
              FSSAI Notice Reply Assistance
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="bg-[#00416a] text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            File Your FSSAI Annual Return Before Deadline
          </h3>
          <p className="mb-4">
            Avoid penalties and ensure smooth food business operations.
            Get expert compliance assistance from Taxvio today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00416a] px-6 py-3 rounded-xl font-semibold"
          >
            File Annual Return Now
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
                "name": "Who is required to file FSSAI Annual Return?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Manufacturers, importers, and certain FSSAI State and Central license holders are required to file annual return in Form D1 or D2."
                }
              },
              {
                "@type": "Question",
                "name": "What is the due date for FSSAI Annual Return?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "FSSAI Annual Return must be filed on or before 31st May for the previous financial year."
                }
              },
              {
                "@type": "Question",
                "name": "What is the penalty for late filing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "A penalty of ₹100 per day is levied for delay in filing FSSAI Annual Return."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}