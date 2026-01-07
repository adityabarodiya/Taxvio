"use client";

import Link from "next/link";
import { useState } from "react";
import { serviceCategories } from "@/data/serviceCategories";

export default function ServicesDrawer() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-xl border-t z-40">
      <div className="max-w-6xl mx-auto px-10 py-10 grid grid-cols-4 gap-8">

        {/* LEFT: Categories */}
        <div className="col-span-1 border-r">
          <ul className="space-y-2">
            {serviceCategories.map(category => (
              <li
                key={category.id}
                onMouseEnter={() => setActiveCategory(category)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition
                  ${
                    activeCategory.id === category.id
                      ? "bg-[#00416a]/10 text-[#00416a] font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {category.category}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Services */}
        <div className="col-span-3">
          <h3 className="text-lg font-semibold text-[#00416a] mb-4">
            {activeCategory.category}
          </h3>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {activeCategory.services.map(service => (
              <li key={service.id}>
                <Link
                  href={`/services/${activeCategory.id}/${service.id}`}
                  className="block text-gray-700 hover:text-[#00416a] transition"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
