import Link from "next/link";
import Footar from "@/components/Footar";
import { serviceCategories } from "@/data/serviceCategories";

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
];

function slugify(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

function formatCityName(slug: string) {
  if (!slug) return "india"
  return slug
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* 🔥 REQUIRED FOR STATIC EXPORT */
export function generateStaticParams() {
  return cities.map(city => ({
    city: slugify(city),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}) {
  const cityName = formatCityName(params.city);

  return {
    title: `GST & Tax Services in ${cityName} | Taxvio`,
    description: `Professional GST, Income Tax and ROC services in ${cityName}.`,
  };
}

export default function CityServicesPage({
  params,
}: {
  params: { city: string };
}) {
  const cityName = formatCityName(params.city);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-[#00416a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            Services in {cityName}
          </h1>
          <p className="mt-4 text-white/90">
            GST, Income Tax & ROC services available in {cityName}.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {serviceCategories.map(category => (
            <div key={category.slug}>
              <h2 className="text-2xl font-bold text-[#00416a] mb-6">
                {category.category} Services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map(service => (
                  <Link
                    key={service.slug}
                    href={`/services/${category.slug}/${service.slug}`}
                    className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition"
                  >
                    <h3 className="font-semibold text-[#00416a]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {service.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footar />
    </main>
  );
}
