import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";

/* ---------------------------------------
   SEO Metadata
--------------------------------------- */
export const metadata: Metadata = {
  title: "GST & Income Tax Services Across India | Cities We Serve | Taxvio",
  description:
    "Taxvio provides GST Registration, Income Tax Filing, ROC compliance and business services across major Indian cities including Delhi, Noida, Mumbai, Bangalore and more.",
  keywords: [
    "GST services in India",
    "Income Tax consultant city wise",
    "ROC filing services India",
    "GST Registration Delhi",
    "Income Tax Filing Mumbai",
    "Tax consultant near me",
  ],
  openGraph: {
    title: "Cities We Serve | Taxvio",
    description:
      "Explore GST, Income Tax & ROC services available city-wise across India.",
    url: "https://www.taxvio.in/city",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cities We Serve | Taxvio",
    description:
      "GST, Income Tax and ROC services available across major Indian cities.",
  },
};

/* ---------------------------------------
   Cities List (Expanded for SEO)
--------------------------------------- */
const cities = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Gurgaon",
  "Faridabad",
  "Meerut",
  "Muzaffarnagar",
  "Khatauli",
  "Mumbai",
  "Pune",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Bhopal",
  "Surat",
  "Kanpur",
  "Patna",
  "Dehradun",
  "Ranchi",
  "Nagpur",
  "Visakhapatnam",
];

/* ---------------------------------------
   Slug Generator
--------------------------------------- */
function slugify(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

/* ---------------------------------------
   Page Component
--------------------------------------- */
export default function CityIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      <Script
        id="city-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Cities We Serve - Taxvio",
            itemListElement: cities.map((city, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: city,
              url: `https://www.taxvio.in/city/${slugify(city)}`,
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#00416a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            GST & Income Tax Services Across India
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Taxvio offers professional GST Registration, Income Tax Filing, ROC
            Compliance and Business Registration services across major cities in
            India. Select your city to get started.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10 text-[#00416a]">
            Select Your City
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link
                key={city}
                href={`/city/${slugify(city)}`}
                className="rounded-xl border bg-white py-6 text-center font-semibold text-[#00416a] hover:bg-[#00416a]/10 transition shadow-sm hover:shadow-md"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-8">
          <h2 className="text-3xl font-bold text-[#00416a] text-center">
            Professional GST, Income Tax & ROC Services Across India
          </h2>

          <p>
            Taxvio is a trusted platform providing GST registration, GST return
            filing, Income Tax return filing, ROC compliance, company
            registration and business consultancy services across major cities
            in India. Whether you are a startup founder, small business owner,
            freelancer, trader, manufacturer or salaried individual, our expert
            team ensures complete compliance with Indian tax and corporate laws.
          </p>

          <p>
            With increasing regulatory requirements under GST law, Income Tax
            Act and Companies Act, businesses must stay compliant to avoid
            penalties, notices and unnecessary legal complications. Taxvio
            simplifies this process by offering affordable, transparent and
            professional services tailored city-wise. Our presence across
            multiple Indian cities ensures that clients receive localized
            support while benefiting from centralized expertise.
          </p>

          <h3 className="text-2xl font-semibold text-[#00416a]">
            GST Registration & Return Filing Services
          </h3>

          <p>
            Goods and Services Tax (GST) registration is mandatory for
            businesses exceeding the prescribed turnover limits or engaged in
            interstate supply, e-commerce or certain notified services. Our GST
            experts assist in new GST registration, amendment of GST details,
            cancellation, LUT filing, and monthly/quarterly GST return filing
            including GSTR-1, GSTR-3B and annual return compliance.
          </p>

          <p>
            We ensure timely filing to avoid late fees, interest liabilities and
            compliance risks. Our GST advisory services also help businesses
            understand input tax credit claims, reconciliation processes and
            proper invoicing systems.
          </p>

          <h3 className="text-2xl font-semibold text-[#00416a]">
            Income Tax Return Filing for Individuals & Businesses
          </h3>

          <p>
            Filing Income Tax Returns (ITR) accurately and on time is crucial
            for individuals and businesses. Whether you are filing ITR-1 for
            salaried income, ITR-3 for professionals, or ITR-4 under presumptive
            taxation, our experts ensure correct reporting and maximum eligible
            deductions.
          </p>

          <p>
            For businesses and professionals, we provide tax planning
            strategies, advance tax calculation support and compliance guidance
            to minimize tax burden while remaining fully compliant with
            applicable laws.
          </p>

          <h3 className="text-2xl font-semibold text-[#00416a]">
            ROC Compliance & Company Registration
          </h3>

          <p>
            Private Limited Companies, LLPs and other registered entities must
            comply with annual ROC filing requirements under the Companies Act.
            Taxvio assists in incorporation of Private Limited Companies, LLP
            registration, DIN allotment, DSC processing, annual filing of AOC-4
            and MGT-7, and other mandatory compliance filings.
          </p>

          <p>
            Our structured compliance system ensures that your company remains
            legally active, avoids heavy penalties and maintains a clean
            corporate record. Startups and growing businesses benefit from our
            simplified documentation and end-to-end support.
          </p>

          <h3 className="text-2xl font-semibold text-[#00416a]">
            Why Choose Taxvio?
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Expert tax professionals and compliance advisors</li>
            <li>Affordable pricing with transparent structure</li>
            <li>Pan-India service availability</li>
            <li>Fast documentation and online support</li>
            <li>Dedicated assistance for startups and MSMEs</li>
          </ul>

          <p>
            Our goal is not just filing returns but helping businesses grow with
            confidence. By choosing Taxvio, clients gain a long-term compliance
            partner rather than a one-time service provider.
          </p>

          <h3 className="text-2xl font-semibold text-[#00416a]">
            City-Wise Expertise with National Reach
          </h3>

          <p>
            We understand that compliance needs can vary based on state
            regulations, local business environments and industry practices.
            That is why our city-wise service pages provide targeted information
            relevant to your location. Whether you operate in Delhi, Mumbai,
            Bangalore, Hyderabad, Chennai, Kolkata, Jaipur, Lucknow or any other
            major city, our experts are equipped to assist you efficiently.
          </p>

          <p>
            From metropolitan cities to growing business hubs, Taxvio ensures
            standardized professional service quality across India. Our digital
            process allows seamless documentation, online consultations and
            quick turnaround times.
          </p>

          <h3 className="text-2xl font-semibold text-[#00416a]">
            Services for Startups, MSMEs & Professionals
          </h3>

          <p>
            Startups and MSMEs form the backbone of India’s economy. We offer
            specialized compliance packages including MSME registration, startup
            incorporation, GST advisory, tax planning and ongoing compliance
            management.
          </p>

          <p>
            Professionals such as doctors, consultants, freelancers and traders
            benefit from our structured compliance services that ensure accurate
            accounting, timely tax filing and regulatory adherence.
          </p>

          <h3 className="text-2xl font-semibold text-[#00416a]">
            Get Started Today
          </h3>

          <p>
            Choose your city above to explore GST registration, Income Tax
            filing, ROC compliance and business services available in your
            region. Taxvio is committed to delivering reliable, efficient and
            transparent compliance solutions across India.
          </p>
        </div>
      </section>

      <Footar />
    </main>
  );
}
