import { notFound } from "next/navigation";
import { serviceCategories } from "@/data/serviceCategories";
import { ServiceItem } from "@/types/serviceTypes";

type Props = {
  params: {
    category: string;
    service: string;
  };
};

/* ✅ REQUIRED FOR STATIC EXPORT */
export function generateStaticParams() {
  const paths: { category: string; service: string }[] = [];

  serviceCategories.forEach((category) => {
    category.services.forEach((service) => {
      paths.push({
        category: category.slug,
        service: service.slug,
      });
    });
  });
  return paths;
}

/* ================= METADATA ================= */
export async function generateMetadata({ params }: Props) {
  const { category, service } = params;

  const categoryData = serviceCategories.find((c) => c.slug === category);
  const serviceData = categoryData?.services.find(
    (s) => s.slug === service
  );

  if (!serviceData) return {};

  return {
    title: serviceData.seo.title,
    description: serviceData.seo.description,
  };
}

/* ================= PAGE ================= */
export default function ServiceDetailPage({ params }: Props) {
  const { category, service } = params;

  const categoryData = serviceCategories.find((c) => c.slug === category);
  const serviceData: ServiceItem | undefined =
    categoryData?.services.find((s) => s.slug === service);

  if (!serviceData) notFound();

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#00416a]">
          {serviceData.title}
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          {serviceData.shortDescription}
        </p>

        {/* FEATURES */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {serviceData.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* DOCUMENTS */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
            Documents Required
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {serviceData.documentsRequired.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>

        {/* IDEAL FOR */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
            Ideal For
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {serviceData.idealFor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Taxvio provides professional{" "}
            {serviceData.title.toLowerCase()} services ensuring accuracy,
            compliance, and peace of mind.
          </p>

          <p>
            Our experts handle documentation, filing, and follow-ups so you can
            focus on your business.
          </p>
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block rounded-xl bg-[#00416a] px-8 py-3 text-white font-semibold hover:bg-[#003354]"
          >
            Get Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
