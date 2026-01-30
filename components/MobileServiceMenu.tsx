"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceCategories } from "@/data/serviceCategories";

export default function MobileServicesMenu({
  closeMenu,
}: {
  closeMenu: () => void;
}) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <nav aria-label="Services menu" className="space-y-3">
      {serviceCategories.map((category) => {
        const hasDropdown = category.services.length > 1;
        const isOpen = openCategory === category.slug;

        if (!hasDropdown) {
          const service = category.services[0];
          return (
            <Link
              key={category.slug}
              href={`/services/${category.slug}/${service.slug}`}
              onClick={closeMenu}
              className="block hover:text-[#00416a] transition"
              title={`${category.category} services`}
            >
              <span className="text-gray-700">{category.category}</span>
              <span className="block text-xs text-gray-500">
                {service.shortDescription}
              </span>
            </Link>
          );
        }

        return (
          <div key={category.slug} className="space-y-1">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`submenu-${category.slug}`}
              className="flex w-full items-center justify-between text-gray-700 hover:text-[#00416a] transition"
              onClick={() =>
                setOpenCategory(isOpen ? null : category.slug)
              }
            >
              <span>{category.category}</span>
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div
                id={`submenu-${category.slug}`}
                className="ml-4 mt-2 space-y-3"
              >
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${category.slug}/${service.slug}`}
                    onClick={closeMenu}
                    className="block hover:text-[#00416a] transition"
                    title={`${service.title} service`}
                  >
                    <span className="text-sm text-gray-700">
                      {service.title}
                    </span>
                    <span className="block text-xs text-gray-500">
                      {service.shortDescription}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
