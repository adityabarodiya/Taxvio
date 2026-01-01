import { serviceCategories } from "../../data/serviceCategories";

export default function ServicesPage() {
  return (
    <section className="bg-gradient-to-b from-gray-100 via-[#00416a]/50 to-white text-white py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-[#00416a]">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive tax, legal, and compliance solutions for individuals,
            startups, and businesses across India.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-12 ">
          {serviceCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl bg-gray-200 p-8 shadow-lg ring-1 ring-gray-200"
            >
              <h2 className="text-2xl font-semibold text-[#00416a] mb-6">
                {category.category}
              </h2>

              <ul className="grid md:grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#00416a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-[#00416a]">
            Need help choosing the right service?
          </h3>
          <p className="mt-3 text-gray-600">
            Contact us today for expert guidance and personalized consultation.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 rounded-xl bg-[#00416a] px-8 py-3 text-white font-semibold shadow hover:bg-[#003354] transition"
          >
            Get Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
