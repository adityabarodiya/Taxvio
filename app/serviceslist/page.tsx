import Link from "next/link";
import { serviceCategories } from "@/data/serviceCategories";
import Footar from "@/components/Footar";

export const metadata = {
  title: "All Services | Taxvio",
  description:
    "Explore GST, Income Tax and ROC compliance services offered by Taxvio. Professional tax and business compliance solutions for individuals and businesses across India.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-[#00416a] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Professional Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/90 text-lg">
            Taxvio provides complete GST, Income Tax and ROC compliance services
            for individuals, professionals, startups and businesses across India.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {serviceCategories.map((category) => (
            <section key={category.slug} aria-labelledby={category.slug}>
              {/* CATEGORY HEADER */}
              <header className="mb-8">
                <h2
                  id={category.slug}
                  className="text-3xl font-bold text-[#00416a]"
                >
                  {category.category}
                </h2>
                <p className="mt-2 text-gray-600 max-w-3xl">
                  {category.description}
                </p>
              </header>

              {/* SERVICES GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${category.slug}/${service.slug}`}
                    className="group block rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-[#00416a]"
                  >
                    <h3 className="text-lg font-semibold text-[#00416a] group-hover:underline">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <span className="inline-block mt-4 text-sm font-medium text-[#00416a]">
                      View Details →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Footar />
    </main>
  );
}
