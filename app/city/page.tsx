import Footar from "@/components/Footar";
import Link from "next/link";

export const metadata = {
  title: "GST & Tax Services by City | Taxvio",
  description:
    "Find GST registration, Income Tax filing and business compliance services by city. Taxvio provides professional tax services across India.",
};

const cities = [
  // NCR & UP
  "Delhi",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Gurgaon",
  "Faridabad",
  "Meerut",
  "Muzaffarnagar",
  "Khatauli",
  "Shamli",
  "Saharanpur",
  "Moradabad",
  "Bareilly",
  "Aligarh",
  "Mathura",
  "Agra",
  "Lucknow",
  "Kanpur",
  "Varanasi",
  "Prayagraj",

  // Rajasthan
  "Jaipur",
  "Kota",
  "Ajmer",
  "Udaipur",
  "Bikaner",

  // Haryana & Punjab
  "Chandigarh",
  "Ambala",
  "Panipat",
  "Karnal",
  "Ludhiana",
  "Jalandhar",
  "Amritsar",

  // Uttarakhand
  "Dehradun",
  "Haridwar",
  "Roorkee",
  "Haldwani",

  // Maharashtra
  "Mumbai",
  "Pune",
  "Nagpur",
  "Nashik",
  "Aurangabad",

  // Gujarat
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",

  // MP
  "Indore",
  "Bhopal",
  "Gwalior",
  "Jabalpur",

  // South India
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Coimbatore",
  "Madurai",
  "Vijayawada",
  "Visakhapatnam",

  // East India
  "Kolkata",
  "Howrah",
  "Durgapur",
  "Asansol",

  // Bihar & Jharkhand
  "Patna",
  "Gaya",
  "Ranchi",
  "Jamshedpur",

  // Others
  "Raipur",
  "Bilaspur",
  "Bhubaneswar",
  "Cuttack",
];

function slugify(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

export default function CityPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-[#00416a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            GST & Tax Services by City
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/90">
            Taxvio provides GST registration, Income Tax filing and business
            compliance services across major metro cities and towns in India.
            Select your city to explore services near you.
          </p>
        </div>
      </section>

      {/* CITY GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#00416a] mb-8">
            Choose Your City
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city) => {
              const citySlug = slugify(city);
              return (
                <Link
                  key={city}
                  href={`/city/${citySlug}/gst-registration-${citySlug}`}
                  className="block rounded-xl border bg-white px-4 py-3 text-center text-sm font-medium text-[#00416a]
                             shadow-sm hover:shadow-md hover:bg-[#00416a]/5 transition"
                >
                  GST in {city}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Footar/>
    </main>
  );
}
