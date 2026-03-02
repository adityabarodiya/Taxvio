import Footar from "@/components/Footar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FSSAI Registration, Renewal & Compliance Services in India | Taxvio",
  description:
    "Complete FSSAI services including registration, renewal, modification, annual return & notice reply. Expert compliance support in Khatauli, Muzaffarnagar, Noida, Delhi & Mumbai.",
  keywords:
    "FSSAI Registration India, Food License Online, FSSAI Consultant Khatauli, FSSAI Renewal, FSSAI Annual Return Filing",
};

export default function FSSAIPillarPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#00416a] to-[#002b45] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Complete FSSAI Registration & Food License Compliance Services
          </h1>
          <p className="text-lg max-w-3xl text-gray-200 leading-relaxed">
            End-to-end FSSAI registration, renewal, modification, annual return
            filing and notice reply services. Taxvio ensures complete compliance
            under the Food Safety and Standards Act, 2006.
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <StatItem number="500+" label="Food Businesses Served" />
          <StatItem number="100%" label="Compliance Focused" />
          <StatItem number="7+ Years" label="Industry Experience" />
          <StatItem number="PAN India" label="Service Coverage" />
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 border-y bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center text-sm font-semibold text-gray-700">
          <div>✔ Government Portal Expertise</div>
          <div>✔ CA-Supervised Compliance</div>
          <div>✔ Data Confidentiality Assured</div>
          <div>✔ Fast Processing & Follow-ups</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* INTRODUCTION */}
        <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
          What is FSSAI and Why It Is Mandatory?
        </h2>

        <p className="mb-6 leading-relaxed">
          Every food business operator in India must obtain FSSAI registration
          or license before starting operations. Whether you operate a
          restaurant, dairy, cloud kitchen, sweet shop, or food manufacturing
          unit, FSSAI compliance ensures legal operation and consumer safety.
        </p>

        {/* COMPARISON TABLE */}
        <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
          FSSAI License Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-xl overflow-hidden">
            <thead className="bg-[#00416a] text-white">
              <tr>
                <th className="p-4 text-left">Particulars</th>
                <th className="p-4 text-left">Basic</th>
                <th className="p-4 text-left">State</th>
                <th className="p-4 text-left">Central</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b">
                <td className="p-4 font-medium">Turnover</td>
                <td className="p-4">Up to ₹12 Lakhs</td>
                <td className="p-4">₹12L – ₹20 Cr</td>
                <td className="p-4">Above ₹20 Cr</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Applicable For</td>
                <td className="p-4">Small Vendors</td>
                <td className="p-4">Medium Businesses</td>
                <td className="p-4">Large Manufacturers</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Validity</td>
                <td className="p-4">1–5 Years</td>
                <td className="p-4">1–5 Years</td>
                <td className="p-4">1–5 Years</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Inspection</td>
                <td className="p-4">Rare</td>
                <td className="p-4">Possible</td>
                <td className="p-4">Mandatory</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SERVICES GRID */}
        <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-10">
          Our Complete FSSAI Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            title="FSSAI Registration"
            link="/serviceslist/fssai/fssai-registration"
            description="Apply for new FSSAI registration or license."
          />
          <ServiceCard
            title="FSSAI Renewal"
            link="/serviceslist/fssai/fssai-renewal"
            description="Renew your food license before expiry."
          />
          <ServiceCard
            title="FSSAI License Modification"
            link="/serviceslist/fssai/fssai-modification"
            description="Update address, ownership or product category."
          />
          <ServiceCard
            title="FSSAI Annual Return Filing"
            link="/serviceslist/fssai/fssai-annual-return"
            description="File Form D1 & D2 for yearly compliance."
          />
          <ServiceCard
            title="FSSAI Notice Reply"
            link="/serviceslist/fssai/fssai-notice-reply"
            description="Respond to improvement or suspension notices."
          />
          <ServiceCard
            title="FSSAI License Search"
            link="/serviceslist/fssai/fssai-search"
            description="Verify and check FSSAI license validity."
          />
        </div>

        {/* TIMELINE */}
        <h2 className="text-3xl font-semibold text-[#00416a] mt-24 mb-10">
          Our FSSAI Compliance Process
        </h2>

        <div className="relative border-l-4 border-[#00416a] pl-8 space-y-10">
          <TimelineStep
            title="Eligibility Assessment"
            description="Determine correct FSSAI category."
          />
          <TimelineStep
            title="Documentation & Verification"
            description="Complete compliance review."
          />
          <TimelineStep
            title="Application Filing"
            description="Accurate portal submission."
          />
          <TimelineStep
            title="Government Coordination"
            description="Handling inspections & clarifications."
          />
          <TimelineStep
            title="Approval & Ongoing Support"
            description="Post-license compliance guidance."
          />
        </div>

        {/* LOCAL SEO */}
        <h2 className="text-3xl font-semibold text-[#00416a] mt-24 mb-6">
          FSSAI Services in Khatauli & Major Cities
        </h2>

        <p className="mb-6 leading-relaxed">
          Taxvio provides professional FSSAI compliance services in Khatauli,
          Muzaffarnagar, Noida, Delhi and Mumbai. We ensure smooth application
          processing and complete regulatory compliance.
        </p>

      {/* PREMIUM CTA SECTION - FINAL FIXED VERSION */}
<section className="mt-16 mb-0">
  <div className="max-w-6xl mx-auto px-6">
    <div className="bg-gradient-to-r from-[#00416a] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-12 md:py-16 text-white">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Ensure Complete FSSAI Compliance Today
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            Avoid penalties, suspension or license rejection. 
            Get expert assistance from Taxvio compliance professionals.
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-200 text-center"
          >
            Get Free Consultation
          </Link>

          <Link
            href="tel:+919999999999"
            className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition duration-200 text-center"
          >
            Call Now
          </Link>

        </div>

      </div>

    </div>
  </div>
</section>


      </section>

      <Footar />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is FSSAI registration mandatory?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, every food business operator must obtain FSSAI registration or license before starting operations.",
                },
              },
              {
                "@type": "Question",
                name: "When should FSSAI license be renewed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FSSAI license must be renewed at least 30 days before expiry.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}

/* COMPONENTS */

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-3xl font-bold text-[#00416a] mb-2">{number}</h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3 text-[#00416a]">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={link} className="text-[#00416a] underline font-medium">
        Learn More →
      </Link>
    </div>
  );
}

function TimelineStep({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -left-11 top-1 w-6 h-6 bg-[#00416a] rounded-full border-4 border-white"></div>
      <h3 className="text-xl font-semibold text-[#00416a]">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
