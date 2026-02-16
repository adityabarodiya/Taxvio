"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/tv2.png";
import ServicesDrawer from "./ServiceDrawer";
import MobileServicesMenu from "./MobileServiceMenu";
import { serviceCategories } from "@/data/serviceCategories";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2" aria-label="Taxvio home">
            <Image
              src={logo}
              alt="Taxvio - GST, Income Tax & Compliance Services"
              className="h-32 w-auto"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="hidden md:flex items-center gap-4 relative"
            aria-label="Main navigation"
          >
            <Link href="/" className="text-gray-700 hover:text-[#00416a] transition">
              Home
            </Link>

            {serviceCategories.map((category) => {
              const hasDropdown = category.services.length > 1;
              const isOpen = servicesOpen === category.slug;

              if (!hasDropdown) {
                return (
                  <Link
                    key={category.slug}
                    href={`/serviceslist/${category.slug}/${category.services[0].slug}`}
                    className="text-gray-700 hover:text-[#00416a] transition"
                    title={`${category.category} services`}
                  >
                    {category.category}
                  </Link>
                );
              }

              return (
                <div
                  key={category.slug}
                  className="relative flex items-center gap-1"
                  onMouseEnter={() => setServicesOpen(category.slug)}
                  onMouseLeave={() => setServicesOpen(null)}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className="cursor-pointer text-gray-700 hover:text-[#00416a] transition flex items-center gap-1"
                  >
                    {category.category}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#00416a]" : "rotate-0 text-gray-500"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* hover bridge */}
                  <div className="absolute top-full h-3 w-full" />

                  {isOpen && <ServicesDrawer category={category} />}
                </div>
              );
            })}

            <Link href="/about" className="text-gray-700 hover:text-[#00416a] transition">
              About
            </Link>

           

            <Link
              href="/contact"
              className="rounded-xl bg-[#00416a] px-5 py-2.5 text-white font-semibold shadow hover:bg-[#003354] transition"
            >
              Get Consultation
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg border border-gray-300 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
            <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
            <span className="block h-0.5 w-6 bg-gray-800" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav
          className="md:hidden bg-white border-t text-gray-900 border-gray-200"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <MobileServicesMenu closeMenu={() => setOpen(false)} />
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/reviews" onClick={() => setOpen(false)}>Reviews & FAQs</Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#00416a] px-5 py-3 text-center text-white font-semibold"
            >
              Get Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
