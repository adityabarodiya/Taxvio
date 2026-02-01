import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST, Income Tax & Business Services in Khatauli | Taxvio",
  description:
    "Taxvio provides GST registration, Income Tax filing, ROC compliance and business registration services in Khatauli. Trusted tax consultants in Khatauli.",
};

const services = [
  {
    title: "GST Registration in Khatauli",
    description:
      "Professional GST registration services for traders, shopkeepers, startups and service providers in Khatauli with complete documentation support.",
    slug: "gst-registration-khatauli",
  },
  {
    title: "GST Return Filing in Khatauli",
    description:
      "Accurate monthly and quarterly GST return filing (GSTR-1, GSTR-3B) with reconciliation and compliance monitoring for Khatauli businesses.",
    slug: "gst-return-khatauli",
  },
  {
    title: "Income Tax Return Filing in Khatauli",
    description:
      "Expert income tax return filing for salaried persons, proprietors, firms and companies in Khatauli ensuring maximum tax savings.",
    slug: "itr-filing-khatauli",
  },
  {
    title: "PAN Card Services in Khatauli",
    description:
      "Apply for new PAN card, correction or reissue with professional assistance in Khatauli for individuals and businesses.",
    slug: "pan-card-khatauli",
  },
  {
    title: "TAN Registration in Khatauli",
    description:
      "TAN application services for employers and businesses in Khatauli who deduct or collect TDS and TCS.",
    slug: "tan-registration-khatauli",
  },
  {
    title: "FSSAI Registration in Khatauli",
    description:
      "Food license (FSSAI) registration, renewal and modification services for restaurants, food दुकानदार and manufacturers in Khatauli.",
    slug: "fssai-registration-khatauli",
  },
  {
    title: "Private Limited Company Registration in Khatauli",
    description:
      "Complete private limited company formation services in Khatauli including MCA filing, PAN, TAN and incorporation certificate.",
    slug: "private-limited-company-khatauli",
  },
  {
    title: "LLP Registration in Khatauli",
    description:
      "LLP registration services for professionals and small businesses in Khatauli with complete ROC compliance support.",
    slug: "llp-registration-khatauli",
  },
  {
    title: "ROC Annual Compliance in Khatauli",
    description:
      "Annual ROC return filing (AOC-4, MGT-7) and company compliance services for registered companies in Khatauli.",
    slug: "roc-compliance-khatauli",
  },
  {
    title: "GST Notice Reply in Khatauli",
    description:
      "Professional reply and representation services for GST notices and departmental queries in Khatauli.",
    slug: "gst-notice-khatauli",
  },
  {
    title: "GST Cancellation in Khatauli",
    description:
      "Assistance in GST cancellation application and closure compliance for discontinued businesses in Khatauli.",
    slug: "gst-cancellation-khatauli",
  },
  {
    title: "Business Registration & Compliance in Khatauli",
    description:
      "Complete business registration and compliance solutions including MSME registration and startup support in Khatauli.",
    slug: "business-registration-khatauli",
  },
];

export default function KhatauliCityPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-[#00416a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            GST, Income Tax & Business Services in Khatauli
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/90">
            Taxvio provides professional GST registration, Income Tax filing,
            ROC compliance and business registration services in Khatauli.
            Explore our services below and get expert support for your business.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#00416a] mb-8">
            Our Services in Khatauli
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={`/contact`}
                className="block rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-[#00416a]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  {service.description}
                </p>

                <span className="inline-block mt-4 text-sm font-medium text-[#00416a]">
                  Enquire Now →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footar />
    </main>
  );
}
