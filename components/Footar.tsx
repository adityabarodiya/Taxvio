// components/Footar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowUp,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ShieldCheck,
} from "lucide-react";

const PHONE_NUMBER = "918937980366";
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}`;
const EMAIL = "info@taxvio.in";

type LinkItem = { label: string; href: string };

const QUICK_LINKS: LinkItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Guide", href: "/guide" },
  { label: "Resources", href: "/resources" },
  { label: "Client Reviews", href: "/reviews" },
  { label: "Free Tools", href: "/tools" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICE_CATEGORIES: LinkItem[] = [
  { label: "GST Services", href: "/serviceslist/gst" },
  { label: "Income Tax Services", href: "/serviceslist/income-tax" },
  { label: "ROC / Company Services", href: "/serviceslist/roc" },
  { label: "FSSAI Services", href: "/serviceslist/fssai" },
  { label: "View All Services", href: "/serviceslist" },
];

const POPULAR_SERVICES: LinkItem[] = [
  { label: "GST Registration", href: "/serviceslist/gst/gst-registration" },
  {
    label: "ITR Filing – Salaried",
    href: "/serviceslist/income-tax/itr-salaried",
  },
  {
    label: "Private Limited Registration",
    href: "/serviceslist/roc/private-limited-formation",
  },
  { label: "LLP Registration", href: "/serviceslist/roc/llp-formation" },
  {
    label: "FSSAI Registration",
    href: "/serviceslist/fssai/fssai-registration",
  },
  {
    label: "Annual ROC Compliance",
    href: "/serviceslist/roc/annual-roc-compliance",
  },
];

const CITIES = [
  "Khatauli",
  "Muzaffarnagar",
  "Meerut",
  "Noida",
  "Delhi NCR",
  "Mumbai",
  "Pune",
  "Ahmedabad",
  "Surat",
  "Ghaziabad",
  "Gurgaon",
  "Lucknow",
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/taxvio", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/taxvio", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/taxvio", icon: Linkedin },
  { label: "Twitter / X", href: "https://twitter.com/taxvio", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com/@taxvio", icon: Youtube },
];

type SectionId = "quick-links" | "services" | "popular";

export default function Footar() {
  const [openSection, setOpenSection] = useState<SectionId | null>(null);
  const year = new Date().getFullYear();

  const toggle = (id: SectionId) =>
    setOpenSection((prev) => (prev === id ? null : id));

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#002b45] via-[#00335a] to-[#00416a] text-white">
      {/* ── BACK TO TOP ── */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-6 right-6 sm:right-10 w-12 h-12 rounded-full bg-[#00416a] border-4 border-white shadow-xl flex items-center justify-center hover:bg-[#00527f] hover:-translate-y-0.5 transition-all"
      >
        <ArrowUp size={20} className="text-white" />
      </button>

      {/* ── MINI CTA STRIP ── */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg">Have a compliance question?</p>
            <p className="text-sm text-white/70">
              Our CA team typically responds within 15 minutes on WhatsApp.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg transition-all shrink-0"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center font-extrabold text-[#00416a] text-lg">
                T
              </div>
              <span className="text-xl font-extrabold">Taxvio</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-5 max-w-xs">
              A CA-assisted compliance platform for FSSAI, GST, Income Tax,
              and ROC/MCA services — helping businesses across India stay
              compliant, online and stress-free.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn
            id="quick-links"
            title="Quick Links"
            items={QUICK_LINKS}
            openSection={openSection}
            toggle={toggle}
          />

          {/* Services */}
          <FooterColumn
            id="services"
            title="Services"
            items={SERVICE_CATEGORIES}
            openSection={openSection}
            toggle={toggle}
          />

          {/* Popular Services */}
          <FooterColumn
            id="popular"
            title="Popular Services"
            items={POPULAR_SERVICES}
            openSection={openSection}
            toggle={toggle}
          />

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/60 mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#7ecbf0] mt-0.5 shrink-0" />
                <span>Khatauli, Muzaffarnagar, Uttar Pradesh, India</span>
              </li>
              <li>
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  className="flex items-start gap-3 hover:text-white transition"
                >
                  <Phone size={16} className="text-[#7ecbf0] mt-0.5 shrink-0" />
                  <span>+91 89379 80366</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 hover:text-white transition"
                >
                  <Mail size={16} className="text-[#7ecbf0] mt-0.5 shrink-0" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#7ecbf0] mt-0.5 shrink-0" />
                <span>
                  Mon – Sat: 9 AM – 7 PM
                  <br />
                  Sunday: WhatsApp only
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities / States served */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/60">
              Serving Businesses Across India
            </h4>
            <div className="flex gap-4 text-xs">
              <Link
                href="/city"
                className="text-[#7ecbf0] hover:text-white transition font-semibold"
              >
                Browse by City →
              </Link>
              <Link
                href="/state"
                className="text-[#7ecbf0] hover:text-white transition font-semibold"
              >
                Browse by State →
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <Link
                key={city}
                href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-white/70 hover:text-white transition"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60 text-center sm:text-left">
            © {year} Taxvio. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#7ecbf0]" />
              100% Secure &amp; Confidential
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════ HELPERS ══════════════════════ */

function FooterColumn({
  id,
  title,
  items,
  openSection,
  toggle,
}: {
  id: SectionId;
  title: string;
  items: LinkItem[];
  openSection: SectionId | null;
  toggle: (id: SectionId) => void;
}) {
  const isOpen = openSection === id;
  return (
    <div>
      <button
        type="button"
        onClick={() => toggle(id)}
        className="w-full flex items-center justify-between sm:pointer-events-none sm:cursor-default mb-4"
      >
        <h4 className="font-bold text-sm uppercase tracking-widest text-white/60">
          {title}
        </h4>
        <ChevronDown
          size={16}
          className={`text-white/50 sm:hidden transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <ul
        className={`space-y-2.5 text-sm ${isOpen ? "block" : "hidden"} sm:block`}
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-white/70 hover:text-white transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}