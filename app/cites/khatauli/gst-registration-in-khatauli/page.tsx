import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST Registration in Khatauli | Apply GST Online with Taxvio",
  description:
    "Looking for GST registration in Khatauli? Taxvio provides fast, affordable and professional GST registration services in Khatauli with complete documentation support.",
};

export default function GSTRegistrationKhatauliPage() {
  const city = "Khatauli";

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-[#00416a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            GST Registration in {city}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/90">
            Get hassle-free GST registration in {city} with expert guidance.
            Taxvio helps businesses, traders, shopkeepers and service providers
            complete GST registration quickly and accurately.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">

          <h2 className="text-3xl font-bold text-[#00416a]">
            GST Registration in Khatauli – Complete Guide
          </h2>

          <p>
            GST registration in {city} is mandatory for businesses whose turnover
            exceeds the prescribed limit or those engaged in interstate trade,
            online selling, or supply of taxable services. Whether you are a
            small shop owner, wholesaler, manufacturer, freelancer or startup,
            obtaining GST registration allows your business to operate legally
            and build trust with customers.
          </p>

          <p>
            Taxvio provides professional GST registration services in {city}
            through a fully online process. Our experts handle documentation,
            application filing, verification and follow-ups to ensure smooth
            approval without delays or rejection.
          </p>

          <h2 className="text-2xl font-semibold text-[#00416a]">
            Who Needs GST Registration in Khatauli?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Traders and shopkeepers in Khatauli</li>
            <li>Manufacturers and wholesalers</li>
            <li>Service providers with taxable income</li>
            <li>Online sellers (Amazon, Flipkart, Meesho)</li>
            <li>Businesses making interstate supply</li>
            <li>Startups and new businesses</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#00416a]">
            Documents Required for GST Registration in Khatauli
          </h2>

          <p>
            To apply for GST registration in {city}, the following documents are
            required:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>PAN Card of proprietor / business</li>
            <li>Aadhaar Card</li>
            <li>Business address proof (rent agreement / electricity bill)</li>
            <li>Bank account details or cancelled cheque</li>
            <li>Passport size photograph</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#00416a]">
            GST Registration Process in Khatauli
          </h2>

          <p>
            The GST registration process involves application filing on the GST
            portal followed by verification by the GST department. Taxvio
            simplifies this process by preparing and submitting the application
            on your behalf.
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Document collection and verification</li>
            <li>GST application filing</li>
            <li>OTP and Aadhaar authentication</li>
            <li>Department verification (if required)</li>
            <li>GSTIN allotment</li>
          </ol>

          <h2 className="text-2xl font-semibold text-[#00416a]">
            Benefits of GST Registration in Khatauli
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Legal recognition of business</li>
            <li>Ability to collect GST from customers</li>
            <li>Input tax credit benefits</li>
            <li>Higher business credibility</li>
            <li>Eligibility for government tenders</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#00416a]">
            Why Choose Taxvio for GST Registration in Khatauli?
          </h2>

          <p>
            Taxvio is a trusted tax and compliance consultancy providing GST
            registration services in {city}. Our experienced professionals
            ensure accurate filing, fast processing and complete compliance.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Affordable and transparent pricing</li>
            <li>Experienced GST consultants</li>
            <li>Quick processing and follow-ups</li>
            <li>Post-registration support</li>
            <li>100% online process</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#00416a]">
            GST Registration Fees in Khatauli
          </h2>

          <p>
            GST registration fees depend on business structure and documentation
            requirements. Taxvio offers cost-effective GST registration packages
            suitable for small businesses, traders and startups in {city}.
          </p>

          <h2 className="text-2xl font-semibold text-[#00416a]">
            Apply for GST Registration in Khatauli
          </h2>

          <p>
            If you are looking for reliable GST registration in {city}, Taxvio
            is your trusted partner. Our team ensures your GST registration is
            completed accurately and on time.
          </p>

          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-block bg-[#00416a] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#003354]"
            >
              Apply for GST Registration in Khatauli
            </Link>
          </div>

        </div>
      </section>

      <Footar />
    </main>
  );
}
