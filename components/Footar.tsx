"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { serviceCategories } from "@/data/serviceCategories";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Shield,
  BadgeCheck,
  Users,
  Star,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

// ─── Animation variants ───────────────────────────────────────────────────────
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/serviceslist", label: "All Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/city", label: "Cities We Serve" },
  { href: "/reviews", label: "Reviews & FAQ" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const POPULAR_SERVICES = [
  { href: "/serviceslist/gst/gst-registration", label: "GST Registration", price: "₹999" },
  { href: "/serviceslist/gst/gst-return", label: "GST Return Filing", price: "₹499/mo" },
  { href: "/serviceslist/income-tax/itr-salaried", label: "ITR Filing – Salaried", price: "₹499" },
  { href: "/serviceslist/income-tax/itr-proprietor", label: "ITR Filing – Proprietor", price: "₹1,999" },
  { href: "/serviceslist/income-tax/pan-card", label: "PAN Card Services", price: "₹149" },
  { href: "/serviceslist/income-tax/tan-application", label: "TAN Application", price: "₹499" },
  { href: "/serviceslist/roc/private-limited-formation", label: "Pvt Ltd Registration", price: "₹6,999" },
  { href: "/serviceslist/fssai/fssai-registration", label: "FSSAI Registration", price: "₹1,499" },
];

const TRUST_STATS = [
  { icon: Users, value: "4,800+", label: "Businesses Served" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
  { icon: BadgeCheck, value: "CA-Led", label: "Expert Team" },
  { icon: Shield, value: "100%", label: "Online & Secure" },
];

const CITIES = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Meerut", "Muzaffarnagar",
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footar() {
  return (
    <motion.footer
      role="contentinfo"
      aria-label="Taxvio — Tax & Compliance Services Footer"
      className="bg-[#00416a] text-white/80 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-sky-400/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-teal-400/6 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── TOP CTA STRIP ── */}
        <motion.div
          variants={fadeUp}
          className="border-b border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="text-white font-bold text-lg leading-tight">
              Need Help with GST, ITR or Company Registration?
            </p>
            <p className="text-white/55 text-sm mt-0.5">
              Talk to our CA team — free consultation, same-day WhatsApp response.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20help%20with%20tax%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 rounded-xl text-sm font-bold active:scale-[0.97] transition-all shadow-lg"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#00416a] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 active:scale-[0.97] transition-all shadow-lg"
            >
              Free Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="py-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-sm">

          {/* ── BRAND ── */}
          <motion.div variants={fadeUp} className="lg:col-span-1 space-y-5">
            {/* Logo */}
            <Link href="/" aria-label="Taxvio Home" className="inline-block group">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition">
                  <span className="text-white text-xs font-black tracking-tight">TV</span>
                </div>
                <span className="text-white font-extrabold text-xl tracking-tight">Taxvio</span>
              </div>
            </Link>

            <p className="leading-relaxed text-white/65 text-xs">
              India's trusted online tax &amp; compliance consultancy. Professional{" "}
              <span className="text-white/85 font-medium">GST registration</span>,{" "}
              <span className="text-white/85 font-medium">income tax filing</span>,{" "}
              <span className="text-white/85 font-medium">company registration</span>, FSSAI
              licensing, and ROC compliance — 100% online, CA-assisted.
            </p>

            {/* Contact */}
            <address className="not-italic space-y-2.5">
              <a
                href="mailto:info@taxvio.in"
                className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-xs group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition">
                  <Mail size={12} className="text-sky-300" />
                </div>
                info@taxvio.in
              </a>
              <a
                href="tel:+918937980366"
                className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-xs group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition">
                  <Phone size={12} className="text-sky-300" />
                </div>
                +91 8937980366
              </a>
              <div className="flex items-center gap-2.5 text-white/50 text-xs">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={12} className="text-sky-300" />
                </div>
                Khatauli, Muzaffarnagar, UP
              </div>
            </address>

            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-3 py-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white text-xs font-semibold">4.9</span>
              <span className="text-white/40 text-xs">· 2,400+ reviews</span>
            </div>
          </motion.div>

          {/* ── QUICK LINKS ── */}
          <motion.div variants={fadeUp}>
            <h2 className="text-white font-bold mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-4 h-px bg-white/30" />
              Quick Links
            </h2>
            <nav aria-label="Footer Quick Links">
              <ul className="space-y-2.5">
                {QUICK_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-200 text-xs"
                    >
                      <ChevronRight size={11} className="text-white/25 group-hover:text-sky-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Cities strip */}
            <div className="mt-7">
              <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">
                Cities We Serve
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {CITIES.map((city) => (
                  <Link
                    key={city}
                    href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[10px] font-medium text-white/50 bg-white/8 hover:bg-white/15 hover:text-white border border-white/10 rounded-full px-2 py-0.5 transition-all"
                  >
                    {city}
                  </Link>
                ))}
                <Link
                  href="/city"
                  className="text-[10px] font-medium text-sky-300 hover:text-sky-200 transition-colors"
                >
                  +700 more →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── POPULAR SERVICES ── */}
          <motion.div variants={fadeUp}>
            <h2 className="text-white font-bold mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-4 h-px bg-white/30" />
              Popular Services
            </h2>
            <nav aria-label="Popular Services">
              <ul className="space-y-2">
                {POPULAR_SERVICES.map(({ href, label, price }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex items-center justify-between gap-2 text-white/60 hover:text-white transition-colors duration-200 text-xs py-1"
                    >
                      <span className="flex items-center gap-1.5">
                        <ChevronRight size={11} className="text-white/25 group-hover:text-sky-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                        {label}
                      </span>
                      <span className="text-[10px] font-bold text-sky-400/80 bg-sky-400/10 px-1.5 py-0.5 rounded-full shrink-0">
                        {price}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/serviceslist"
              className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold text-sky-300 hover:text-sky-200 transition-colors group"
            >
              View all 40+ services
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* ── SERVICE CATEGORIES ── */}
          <motion.div variants={fadeUp}>
            <h2 className="text-white font-bold mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-4 h-px bg-white/30" />
              Service Categories
            </h2>
            <nav aria-label="Service Categories">
              <ul className="space-y-4">
                {serviceCategories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/serviceslist/${cat.slug}`}
                      className="group flex items-center gap-1.5 text-white/80 hover:text-white font-semibold transition-colors duration-200 text-xs"
                    >
                      <ChevronRight size={11} className="text-sky-300/50 group-hover:text-sky-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                      {cat.category}
                      <span className="ml-auto text-[10px] text-white/35 font-normal">
                        {cat.services.length}
                      </span>
                    </Link>
                    <ul className="mt-1.5 ml-4 space-y-1">
                      {cat.services.slice(0, 3).map((svc) => (
                        <li key={svc.slug}>
                          <Link
                            href={`/serviceslist/${cat.slug}/${svc.slug}`}
                            className="group flex items-center gap-1 text-white/40 hover:text-white/75 text-[11px] transition-colors duration-200"
                          >
                            <span className="text-white/20 group-hover:text-sky-400 transition-colors">›</span>
                            {svc.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>

        {/* ── TRUST STATS STRIP ── */}
        <motion.div
          variants={fadeUp}
          className="border-t border-white/10 py-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {TRUST_STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-sky-300" />
              </div>
              <div>
                <p className="text-white font-extrabold text-base leading-none">{value}</p>
                <p className="text-white/45 text-[11px] mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── SERVICE TAGS SEO ── */}
        <motion.div
          variants={fadeUp}
          className="border-t border-white/10 py-5"
        >
          <p className="text-white/30 text-[10px] font-semibold uppercase tracking-widest mb-3">
            Services across India
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              "GST Registration", "GSTR-1 Filing", "GSTR-3B Filing", "GSTR-9 Annual Return",
              "GST LUT Filing", "GST Refund", "GST Notice Reply", "ITR Salaried",
              "ITR Proprietor", "TDS Return", "Tax Audit 44AB", "12A Registration",
              "80G Approval", "PAN Card", "TAN Application", "Pvt Ltd Registration",
              "LLP Formation", "OPC Registration", "ROC Compliance", "FSSAI License",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-white/35 bg-white/5 border border-white/8 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          variants={fadeUp}
          className="border-t border-white/10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40"
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="text-white/60 hover:text-white transition font-semibold">
              Taxvio
            </Link>
            . All rights reserved. Professional Tax &amp; Compliance Services in India.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white/70 transition">Terms</Link>
            <a
              href="https://wa.me/918937980366"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white/70 transition"
            >
              WhatsApp <ExternalLink size={10} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}