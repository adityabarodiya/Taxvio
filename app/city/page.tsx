import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "Cities We Serve | Taxvio",
  description:
    "Find GST, Income Tax and ROC services city-wise across India with Taxvio.",
};

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

export default function CityIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-[#00416a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Cities We Serve</h1>
          <p className="mt-4 text-white/90">
            Choose your city to explore GST, Income Tax and ROC services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/city/${slugify(city)}`}
              className="rounded-xl border bg-white py-6 text-center font-semibold text-[#00416a] hover:bg-[#00416a]/10 transition"
            >
              {city}
            </Link>
          ))}
        </div>
      </section>

      <Footar />
    </main>
  );
}
