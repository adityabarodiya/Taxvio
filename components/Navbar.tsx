"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo3.png"; // update path
import { useRouter } from "next/navigation";
import ServicesDrawer from "./ServiceDrawer";
import MobileServicesMenu from "./MobileServiceMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter()

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-14 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="AB Tax Solution"
              className="h-8 w-auto"
              priority
            />
            <span className="text-lg font-bold text-[#00416a]">
              AB Tax Solution
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 relative">
            <Link href="/" className="text-gray-700 hover:text-[#00416a] transition">
              Home
            </Link>
            {/* HOVER ZONE */}
            <div
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            // className="relative"
            >
              <span className="cursor-pointer text-gray-700 hover:text-[#00416a]">
                Services
              </span>

              {/* invisible hover bridge */}
              <div className="absolute top-full h-3 w-full"></div>

              {servicesOpen && <ServicesDrawer />}
            </div>


            <Link href="/about" className="text-gray-700 hover:text-[#00416a] transition">
              About
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-[#00416a] transition">
              Reviews & FAQs
            </Link>
            {/* <Link href="/contact" className="text-gray-700 hover:text-[#00416a] transition">
              Contact
            </Link> */}

            {/* CTA */}
            <Link
              href="/contact"
              className="rounded-xl bg-[#00416a] px-5 py-2.5 text-white font-semibold shadow hover:bg-[#003354] transition"
            >
              Get Consultation
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg border border-gray-300 p-2"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
            <span className="block h-0.5 w-6 bg-gray-800 mb-1" />
            <span className="block h-0.5 w-6 bg-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t text-gray-900 border-gray-200 hover:text-blue-900c">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            {/* ✅ Mobile Services */}
            <MobileServicesMenu closeMenu={() => setOpen(false)} />
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/reviews" onClick={() => setOpen(false)}>Reviews & FAQs</Link>
            {/* <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link> */}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#00416a] px-5 py-3 text-center text-white font-semibold"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
