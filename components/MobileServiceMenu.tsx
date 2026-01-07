"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceCategories } from "@/data/serviceCategories";

export default function MobileServicesMenu({ closeMenu }: { closeMenu: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <div className="">
        {/* <div className="border rounded-lg"> */}
      {/* SERVICES TOGGLE */}
      <button
        onClick={() => setServicesOpen(!servicesOpen)}
        className="w-full flex justify-between items-center  font-medium text-gray-800"
      >
        Services
        <span>{servicesOpen ? "−" : "+"}</span>
      </button>

      {/* SERVICES MENU */}
      {servicesOpen && (
        <div className="px-2 py-2 pb-2 space-y-2">
          {serviceCategories.map(category => {
            const isOpen = openCategory === category.id;

            return (
              <div key={category.id} className="border rounded-md">
                <button
                  onClick={() =>
                    setOpenCategory(isOpen ? null : category.id)
                  }
                  className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {category.category}
                  <span>{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="pl-4 pb-2 space-y-1">
                    {category.services.map(service => (
                      <Link
                        key={service.id}
                        href={`/services/${category.id}/${service.id}`}
                        onClick={closeMenu}
                        className="block text-sm text-gray-600 py-1"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
