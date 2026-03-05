"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { serviceCategories } from "@/data/serviceCategories"; // adjust path as needed

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <motion.footer
      role="contentinfo"
      aria-label="Site Footer"
      className="bg-[#00416a] text-white/80 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">

          {/* ── BRAND ── */}
          <motion.div variants={item} className="lg:col-span-1">
            <Link href="/" aria-label="Taxvio Home">
              <span className="text-white font-bold text-xl tracking-tight">Taxvio</span>
            </Link>
            <p className="mt-3 leading-relaxed text-white/70">
              Taxvio offers professional <strong className="text-white/90 font-medium">GST registration</strong>,{" "}
              <strong className="text-white/90 font-medium">income tax filing</strong>,{" "}
              <strong className="text-white/90 font-medium">company registration</strong>, FSSAI licensing,
              and business compliance services across India.
            </p>

            {/* Contact schema-friendly */}
            <address className="not-italic mt-4 text-white/60 text-xs space-y-1">
              <p>📧 <a href="mailto:info@taxvio.in" className="hover:text-white transition">info@taxvio.in</a></p>
              <p>📞 <a href="tel:+918937980366" className="hover:text-white transition">+91 8937980366 </a></p>
              <p>🇮🇳 India — Pan India Services</p>
            </address>
          </motion.div>

          {/* ── QUICK LINKS ── */}
          <motion.div variants={item}>
            <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h2>
            <nav aria-label="Footer Quick Links">
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/serviceslist", label: "All Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/city", label: "Cities We Serve" },
                  { href: "/blog", label: "Blog & Resources" },
                  { href: "/privacy-policy", label: "Privacy Policy" },
                  { href: "/terms", label: "Terms of Service" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* ── TOP SERVICES (dynamic from data) ── */}
          <motion.div variants={item}>
            <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Popular Services
            </h2>
            <nav aria-label="Popular Services">
              <ul className="space-y-2">
                {/* Pick key services across categories for SEO breadth */}
                {[
                  { href: "/serviceslist/gst/gst-registration", label: "GST Registration" },
                  { href: "/serviceslist/gst/gst-return", label: "GST Return Filing" },
                  { href: "/serviceslist/income-tax/itr-salaried", label: "ITR Filing – Salaried" },
                  { href: "/serviceslist/income-tax/itr-proprietor", label: "ITR Filing – Proprietor" },
                  { href: "/serviceslist/income-tax/pan-card", label: "PAN Card Services" },
                  { href: "/serviceslist/roc/private-limited-formation", label: "Pvt Ltd Registration" },
                  { href: "/serviceslist/roc/llp-formation", label: "LLP Registration" },
                  { href: "/serviceslist/fssai/fssai-registration", label: "FSSAI Registration" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* ── SERVICE CATEGORIES ── */}
          <motion.div variants={item}>
            <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Service Categories
            </h2>
            <nav aria-label="Service Categories">
              <ul className="space-y-2">
                {serviceCategories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/serviceslist/${cat.slug}`}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {cat.category}
                    </Link>
                    {/* Sub-links for top 2 services per category */}
                    <ul className="mt-1 ml-3 space-y-1">
                      {cat.services.slice(0, 2).map((svc) => (
                        <li key={svc.slug}>
                          <Link
                            href={`/serviceslist/${cat.slug}/${svc.slug}`}
                            className="text-white/50 hover:text-white/90 text-xs transition-colors duration-200"
                          >
                            → {svc.title}
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

        {/* ── TRUST SIGNALS ── */}
        <motion.div
          variants={item}
          className="mt-10 grid sm:grid-cols-3 gap-4 text-center text-xs text-white/60 border-t border-white/10 pt-8"
        >
          {[
            { icon: "✅", text: "500+ Clients Served" },
            { icon: "🏆", text: "Expert CA & CS Team" },
            { icon: "🔒", text: "100% Secure & Confidential" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          variants={item}
          className="border-t border-white/10 mt-6 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50"
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="text-white/70 hover:text-white transition font-medium">
              Taxvio
            </Link>
            . All rights reserved. Professional Tax & Compliance Services in India.
          </p>
          <p className="text-white/40">
            GST · Income Tax · Company Registration · FSSAI · ROC Compliance
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}