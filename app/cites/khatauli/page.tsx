import Link from "next/link";
import Footar from "@/components/Footar";
import { serviceCategories } from "@/data/serviceCategories";

export const metadata = {
  title: "GST, Income Tax & ROC Services in Khatauli | Taxvio",
  description:
    "Taxvio provides GST registration, Income Tax filing and ROC compliance services in Khatauli with expert support.",
};

export default function KhatauliPage() {
  const cityName = "Khatauli";

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-[#00416a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            GST, Income Tax & ROC Services in {cityName}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/90">
            Professional GST registration, Income Tax filing and company
            compliance services in {cityName}. Trusted local support by Taxvio.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {serviceCategories.map((category) => (
            <div key={category.slug}>
              <h2 className="text-3xl font-bold text-[#00416a] mb-3">
                {category.category} Services in {cityName}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${category.slug}/${service.slug}`}
                    className="block rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
                  >
                    <h3 className="text-lg font-semibold text-[#00416a]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                      {service.shortDescription}
                    </p>

                    <span className="inline-block mt-4 text-sm font-medium text-[#00416a]">
                      View Details →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#00416a]">
          Need Tax & GST Help in Khatauli?
        </h2>
        <p className="mt-4 text-gray-600">
          Get expert assistance for GST registration, return filing and business
          compliance in Khatauli.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 rounded-xl bg-[#00416a] px-10 py-4 text-white font-semibold hover:bg-[#003354]"
        >
          Contact Taxvio
        </Link>
      </section>

      <Footar />
    </main>
  );
}
