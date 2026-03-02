import Footar from "@/components/Footar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "FSSAI Registration Online in India | Food License Registration | Taxvio",
  description:
    "Apply for FSSAI Registration online with Taxvio. Expert assistance for Basic, State & Central FSSAI License. Serving Khatoli, Muzaffarnagar, Noida, Delhi & Mumbai.",
  keywords:
    "FSSAI Registration Online, Food License Registration, FSSAI Consultant Khatoli, FSSAI Registration Muzaffarnagar, Food License India",
};

export default function FSSAIRegistrationPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-[#00416a] mb-6">
          FSSAI Registration Online in India – Food License with Expert Support
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          FSSAI Registration is mandatory for every food business operator (FBO) in India.
          Whether you are running a restaurant, cloud kitchen, grocery store, food
          manufacturing unit, dairy business, catering service, or e-commerce food brand,
          obtaining an FSSAI license is legally required under the Food Safety and Standards Act, 2006.
        </p>

        <p className="leading-relaxed mb-6">
          Taxvio provides professional FSSAI registration services with complete documentation,
          application filing, follow-ups, and compliance guidance. We assist food businesses
          across Khatoli, Muzaffarnagar, Noida, Delhi, Mumbai and across India.
        </p>

        {/* WHAT IS FSSAI */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          What is FSSAI Registration?
        </h2>

        <p className="leading-relaxed mb-6">
          FSSAI (Food Safety and Standards Authority of India) is the regulatory authority
          responsible for ensuring food safety standards in India. Every food business must
          obtain either FSSAI Registration or FSSAI License depending on turnover and scale of operations.
        </p>

        <p className="leading-relaxed mb-6">
          FSSAI registration ensures that your food products meet safety and hygiene standards.
          It also increases consumer trust and helps you operate legally without risk of penalties.
        </p>

        {/* TYPES OF FSSAI */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Types of FSSAI Registration & License
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          1. Basic FSSAI Registration
        </h3>
        <p className="mb-4">
          Required for small food businesses with annual turnover up to ₹12 lakhs.
          Ideal for home kitchens, small retailers, petty manufacturers, and startups.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          2. State FSSAI License
        </h3>
        <p className="mb-4">
          Applicable for medium-sized businesses with turnover between ₹12 lakhs to ₹20 crores.
          Suitable for manufacturers, storage units, transporters, and distributors.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          3. Central FSSAI License
        </h3>
        <p className="mb-6">
          Mandatory for large businesses with turnover above ₹20 crores or import/export
          operations. Required for food importers, exporters, and large manufacturers.
        </p>

        {/* WHO NEEDS FSSAI */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Who Needs FSSAI Registration?
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Restaurants & Cafes</li>
          <li>Cloud Kitchens</li>
          <li>Home Bakers & Tiffin Services</li>
          <li>Food Manufacturers</li>
          <li>Dairy & Sweet Shops</li>
          <li>Grocery Stores & Supermarkets</li>
          <li>Online Food Sellers (Amazon, Flipkart, Swiggy, Zomato)</li>
          <li>Food Importers & Exporters</li>
        </ul>

        {/* DOCUMENTS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Documents Required for FSSAI Registration
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Identity & Address Proof of Applicant</li>
          <li>Passport Size Photograph</li>
          <li>Business Address Proof</li>
          <li>Rent Agreement (if rented premises)</li>
          <li>Food Safety Management Plan</li>
          <li>Declaration Form</li>
        </ul>

        {/* PROCESS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          FSSAI Registration Process with Taxvio
        </h2>

        <ol className="list-decimal pl-6 space-y-3 mb-8">
          <li>Consultation & Eligibility Assessment</li>
          <li>Document Collection & Verification</li>
          <li>Online Application Filing</li>
          <li>Government Review & Clarifications</li>
          <li>License Issuance</li>
        </ol>

        <p className="mb-6">
          Our compliance experts ensure accurate documentation to avoid rejection or delay.
        </p>

        {/* BENEFITS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Benefits of FSSAI Registration
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Legal Compliance</li>
          <li>Consumer Trust & Brand Credibility</li>
          <li>Eligibility for Online Food Platforms</li>
          <li>Access to Government Schemes</li>
          <li>Business Expansion Support</li>
        </ul>

        {/* LOCAL SEO */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          FSSAI Registration in Khatauli, Muzaffarnagar, Noida, Delhi & Mumbai
        </h2>

        <p className="mb-6">
          If you are looking for an FSSAI consultant in Khatauli or nearby areas,
          Taxvio provides complete food license assistance with fast processing.
          We also serve clients in Muzaffarnagar, Noida, Delhi and Mumbai.
        </p>

        {/* INTERNAL LINKS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-[#00416a]">
          Related FSSAI Services
        </h2>

        <ul className="space-y-3 mb-10">
          <li>
            <Link href="/serviceslist/fssai/fssai-renewal" className="text-[#00416a] underline">
              FSSAI Renewal Services
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
          <li>
            <Link href="/serviceslist/fssai/fssai-notice-reply" className="text-[#00416a] underline">
              FSSAI Notice Reply Assistance
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="bg-[#00416a] text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            Start Your FSSAI Registration Today
          </h3>
          <p className="mb-4">
            Avoid penalties and operate your food business legally. Get expert
            assistance from Taxvio compliance professionals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00416a] px-6 py-3 rounded-xl font-semibold"
          >
            Apply for FSSAI Registration
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
                "name": "Is FSSAI registration mandatory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, FSSAI registration is mandatory for all food business operators in India."
                }
              },
              {
                "@type": "Question",
                "name": "How long does FSSAI registration take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Basic FSSAI registration typically takes 7-10 working days subject to government approval."
                }
              }
            ]
          }),
        }}
      />
    </main>
    
  );
}