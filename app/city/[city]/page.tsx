import Link from "next/link";
import Footar from "@/components/Footar";
import { serviceCategories } from "@/data/serviceCategories";

/* ================= CITY SLUGS ================= */
const cities = [
  "delhi","noida","greater-noida","ghaziabad","gurgaon","faridabad","meerut",
  "muzaffarnagar","khatauli","shamli","saharanpur","moradabad","bareilly",
  "aligarh","mathura","agra","lucknow","kanpur","varanasi","prayagraj",
  "jaipur","kota","ajmer","udaipur","bikaner",
  "chandigarh","ambala","panipat","karnal","ludhiana","jalandhar","amritsar",
  "dehradun","haridwar","roorkee","haldwani",
  "mumbai","pune","nagpur","nashik","aurangabad",
  "ahmedabad","surat","vadodara","rajkot",
  "indore","bhopal","gwalior","jabalpur",
  "bengaluru","chennai","hyderabad","coimbatore","madurai",
  "vijayawada","visakhapatnam",
  "kolkata","howrah","durgapur","asansol",
  "patna","gaya","ranchi","jamshedpur",
  "raipur","bilaspur","bhubaneswar","cuttack",
];

/* ================= SAFE FORMATTER ================= */
function formatCityName(slug: string | undefined) {
  if (!slug) return "City";

  return slug
    .split("-")
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* ================= STATIC EXPORT REQUIRED ================= */
export function generateStaticParams() {
  return cities.map(city => ({
    city,
  }));
}

/* ================= SEO ================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityName = formatCityName(city);

  return {
    title: `GST, Income Tax & ROC Services in ${cityName} | Taxvio`,
    description: `Get GST registration, Income Tax filing and company compliance services in ${cityName} with Taxvio.`,
  };
}

/* ================= PAGE ================= */
export default async function CityServicesPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityName = formatCityName(city);

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
            and business compliance services in {cityName}.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {serviceCategories.map(category => (
            <div key={category.slug}>
              <h2 className="text-3xl font-bold text-[#00416a] mb-4">
                {category.category} Services in {cityName}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.services.map(service => (
                  <Link
                    key={service.slug}
                    href={`/contact`}
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
