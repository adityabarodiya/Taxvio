import Link from "next/link";
import { ServiceCategory } from "@/types/serviceTypes";

export default function ServicesDrawer({
  category,
}: {
  category: ServiceCategory;
}) {
  return (
    <nav
      className="absolute left-0 top-full z-50 mt-4 w-72 rounded-2xl bg-white shadow-xl ring-1 ring-gray-200"
      aria-label={`${category.category} services menu`}
    >
      <ul className="py-3">
        {category.services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${category.slug}/${service.slug}`}
              className="block px-4 py-2 text-sm text-gray-700 transition
                         hover:bg-gray-100 hover:text-[#00416a]
                         focus:bg-gray-100 focus:text-[#00416a]
                         focus:outline-none"
              title={`${service.title} service by Taxvio`}
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
