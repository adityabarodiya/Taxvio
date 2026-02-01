"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footar() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      className="bg-[#00416a] text-white/80 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-sm">

        {/* BRAND */}
        <motion.div variants={item}>
          <h3 className="text-white font-semibold text-lg">Taxvio</h3>
          <p className="mt-3">
            Taxvio provides professional GST services, Income Tax filing,
            company registration and business compliance solutions across India.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={item}>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/serviceslist" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/city" className="hover:text-white transition">City</Link></li>
          </ul>
        </motion.div>

        {/* SERVICES */}
        <motion.div variants={item}>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2">
            <li>GST Registration & Returns</li>
            <li>Income Tax Filing</li>
            <li>Company & LLP Registration</li>
            <li>Business Compliance</li>
            <li>Trademark & Legal Services</li>
          </ul>
        </motion.div>

      </div>

      {/* BOTTOM BAR */}
      <motion.div
        className="border-t border-gray-700 mt-8 pt-4 text-center text-xs"
        variants={item}
      >
        <p>
          © {new Date().getFullYear()} Taxvio. All rights reserved. | Professional
          Online Tax & Compliance Services in India
        </p>
      </motion.div>
    </motion.footer>
  );
}
