import Link from "next/link";
import Footar from "@/components/Footar";
import { serviceCategories } from "@/data/serviceCategories";

/* CITY LIST */
const cities = [
  "Delhi","Noida","Greater Noida","Ghaziabad","Gurgaon","Faridabad","Meerut",
  "Muzaffarnagar","Khatauli","Shamli","Saharanpur","Moradabad","Bareilly",
  "Aligarh","Mathura","Agra","Lucknow","Kanpur","Varanasi","Prayagraj",
  "Jaipur","Kota","Ajmer","Udaipur","Bikaner",
  "Chandigarh","Ambala","Panipat","Karnal","Ludhiana","Jalandhar","Amritsar",
  "Dehradun","Haridwar","Roorkee","Haldwani",
  "Mumbai","Pune","Nagpur","Nashik","Aurangabad",
  "Ahmedabad","Surat","Vadodara","Rajkot",
  "Indore","Bhopal","Gwalior","Jabalpur",
  "Bengaluru","Chennai","Hyderabad","Coimbatore","Madurai","Vijayawada","Visakhapatnam",
  "Kolkata","Howrah","Durgapur","Asansol",
  "Patna","Gaya","Ranchi","Jamshedpur",
  "Raipur","Bilaspur","Bhubaneswar","Cuttack",
];

function slugify(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}


/* ✅ SAFE FORMATTER */
function formatCityName(slug?: string) {
  if (!slug) return "City Name"; // fallback safety

  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/* REQUIRED FOR STATIC EXPORT */
export function generateStaticParams() {
  return cities.map((city) => ({
    city: slugify(city),
  }));
}

/* SEO */
export function generateMetadata({ params }: { params: { city?: string } }) {
  const cityName = formatCityName(params?.city);

  return {
    title: `GST, Income Tax & Company Registration in ${cityName} | Taxvio`,
    description: `Get GST registration, Income Tax filing and ROC compliance services in ${cityName} with Taxvio.`,
  };
}

export default function CityServicesPage({
  params,
}: {
  params: { city?: string };
}) {
  const cityName = formatCityName(params?.city);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-[#00416a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            GST, Income Tax & ROC Services in {cityName}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/90">
            Taxvio provides professional GST registration, Income Tax filing
            and company compliance services in {cityName}.
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
                      {service.title} in {cityName}
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

      <Footar />
    </main>
  );
}
