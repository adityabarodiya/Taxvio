"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/tv2.png";
import ServicesDrawer from "./ServiceDrawer";
import MobileServicesMenu from "./MobileServiceMenu";
import { serviceCategories } from "@/data/serviceCategories";
import { Phone, MessageCircle, X, Menu, ChevronDown } from "lucide-react";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with GST and tax compliance services.")}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Scroll shadow */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleMouseEnter = (slug: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(slug);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(null), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Top micro-bar ─────────────────────────────────────────────── */}
      <div className="hidden md:block bg-[#00416a] text-white text-xs">
        <div className="max-w-6xl mx-auto px-6 h-8 flex items-center justify-between">
          <span className="text-white/60 flex items-center gap-4">
            <span>🇮🇳 Pan India · 100% Online · CA-Assisted</span>
            <span className="text-white/30">|</span>
            <span>Mon–Sat · 9 AM – 7 PM IST</span>
          </span>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 text-white/75 hover:text-white transition">
              <Phone size={11} /> +91 89379 80366
            </a>
            <span className="text-white/25">|</span>
            <a href="mailto:support@taxvio.in"
              className="text-white/75 hover:text-white transition">
              info@taxvio.in
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ───────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300
          ${scrolled ? "shadow-[0_2px_20px_rgba(0,65,106,0.10)] border-b border-gray-100" : "border-b border-gray-100/60"}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between gap-6">

            {/* ── Logo ── */}
            <Link href="/" aria-label="Taxvio home" className="shrink-0 flex items-center">
              <Image
                src={logo}
                alt="Taxvio — GST, Income Tax & Compliance Services India"
                className="h-28 w-auto"
                priority
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">

              <Link href="/"
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${isActive("/")
                    ? "text-[#00416a] bg-[#00416a]/7"
                    : "text-gray-600 hover:text-[#00416a] hover:bg-gray-50"}`}>
                Home
                {isActive("/") && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00416a] rounded-full" />
                )}
              </Link>

              {serviceCategories.map((category) => {
                const hasDropdown = category.services.length > 1;
                const isOpen = servicesOpen === category.slug;

                if (!hasDropdown) {
                  return (
                    <Link
                      key={category.slug}
                      href={`/serviceslist/${category.slug}/${category.services[0].slug}`}
                      className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#00416a] hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      {category.category}
                    </Link>
                  );
                }

                return (
                  <div
                    key={category.slug}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(category.slug)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                        ${isOpen
                          ? "text-[#00416a] bg-[#00416a]/7"
                          : "text-gray-600 hover:text-[#00416a] hover:bg-gray-50"}`}
                    >
                      {category.category}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-[#00416a]" : "text-gray-400"}`}
                      />
                    </button>

                    {/* Bridge to prevent dropdown flicker */}
                    <div className="absolute top-full left-0 h-3 w-full" />

                    {/* Dropdown */}
                    {isOpen && (
                      <div
                        className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2"
                        onMouseEnter={() => handleMouseEnter(category.slug)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Tip arrow */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 z-10" />
                        <div className="relative animate-in fade-in slide-in-from-top-2 duration-150">
                          <ServicesDrawer category={category} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <Link href="/about"
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${isActive("/about")
                    ? "text-[#00416a] bg-[#00416a]/7"
                    : "text-gray-600 hover:text-[#00416a] hover:bg-gray-50"}`}>
                About
              </Link>

              <Link href="/city"
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${isActive("/city")
                    ? "text-[#00416a] bg-[#00416a]/7"
                    : "text-gray-600 hover:text-[#00416a] hover:bg-gray-50"}`}>
                Cities
              </Link>
            </nav>

            {/* ── Desktop CTAs ── */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp Taxvio"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-semibold hover:bg-green-100 hover:border-green-300 active:scale-[0.97] transition-all duration-200">
                <MessageCircle size={15} className="shrink-0" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#00416a] text-white text-sm font-bold shadow-md hover:bg-[#003050] hover:shadow-lg active:scale-[0.97] transition-all duration-200"
              >
                Free Consultation
              </Link>
            </div>

            {/* ── Mobile Toggle ── */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── Active page indicator bar ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00416a]/20 to-transparent" />
      </header>

      {/* ── Mobile Menu ───────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <nav
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-[#00416a] to-[#0077b6]">
            <Image
              src={logo}
              alt="Taxvio"
              className="h-16 w-auto brightness-0 invert"
            />
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/15 text-white hover:bg-white/25 transition"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable nav links */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
            {/* Quick contact strip */}
            <div className="flex gap-2 mb-4">
              <a href={`tel:${PHONE}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#00416a]/8 text-[#00416a] text-xs font-bold border border-[#00416a]/15">
                <Phone size={13} /> Call Now
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-green-50 text-green-700 text-xs font-bold border border-green-200">
                <MessageCircle size={13} /> WhatsApp
              </a>
            </div>

            {/* Nav links */}
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/city", label: "Cities We Serve" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all
                  ${isActive(href)
                    ? "bg-[#00416a]/8 text-[#00416a]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#00416a]"}`}
              >
                {label}
              </Link>
            ))}

            {/* Services accordion */}
            <div className="pt-2">
              <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Our Services</p>
              <MobileServicesMenu closeMenu={() => setOpen(false)} />
            </div>
          </div>

          {/* Drawer footer CTA */}
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#00416a] text-white text-sm font-bold shadow-md active:scale-[0.98] transition-all"
            >
              Free Consultation →
            </Link>
            <p className="text-center text-[10px] text-gray-400 mt-2">Starting ₹499 · CA-Assisted · Pan India</p>
          </div>
        </nav>
      </div>
    </>
  );
}