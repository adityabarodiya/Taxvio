import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST & Tax Services by City | Taxvio",
  description:
    "Find GST registration, Income Tax filing and business compliance services by city. Taxvio provides professional tax services across India.",
};

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

export default function CityPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-[#00416a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">GST & Tax Services by City</h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/90">
            Choose your city to explore GST and tax services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {cities.map((city) => (
              <li key={city} className="list-none">
                <Link
                  href={`/city/${slugify(city)}`}
                  className="flex items-center justify-center rounded-xl border bg-white px-4 py-6 text-sm font-semibold text-[#00416a] shadow hover:bg-[#00416a]/10 transition"
                >
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footar />
    </main>
  );
}
