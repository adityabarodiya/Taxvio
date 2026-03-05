"use client";

import { useState } from "react";
import Script from "next/script";
import Footar from "@/components/Footar";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Phone, MessageCircle, MapPin, Clock, CheckCircle,
  ArrowRight, Shield, Zap, Star, ChevronDown, Send,
} from "lucide-react";

const PHONE_NUMBER = "918937980366";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55 } },
};

const FAQS = [
  {
    q: "How long does GST registration take?",
    a: "GST registration is typically completed within 3–7 working days after submission of all documents. If Aadhaar authentication is done, GSTIN can be allotted in 3 working days.",
  },
  {
    q: "Do you provide ITR filing for salaried employees?",
    a: "Yes. We file income tax returns for salaried individuals, proprietors, firms, LLPs, and companies — with maximum deduction optimization and 100% accuracy.",
  },
  {
    q: "Can you handle GST notices and income tax scrutiny?",
    a: "Absolutely. Our CA team drafts comprehensive responses for GST notices, SCNs, and income tax scrutiny assessments (Section 143(1), 143(2), 148) with full representation.",
  },
  {
    q: "Do you provide ROC annual filing?",
    a: "Yes. We handle AOC-4, MGT-7, LLP Form 11 & 8, director changes, capital increase, and complete ROC annual compliance for Pvt Ltd companies, LLPs, and OPCs.",
  },
  {
    q: "Is my data safe with Taxvio?",
    a: "Absolutely. We maintain strict confidentiality across all client documents. No data is shared with third parties. All communications are secure and encrypted.",
  },
];

const TESTIMONIALS = [
  {
    stars: 5,
    text: "Got my GST registration done in just 4 days. The process was completely hassle-free and the team kept me updated at every step.",
    name: "Rohit Gupta",
    title: "Retailer, Muzaffarnagar",
  },
  {
    stars: 5,
    text: "Filed my income tax return with maximum deductions I didn't even know I qualified for. Saved ₹18,000 compared to doing it myself.",
    name: "Priya Sharma",
    title: "Salaried Employee, Meerut",
  },
  {
    stars: 5,
    text: "Company registration and first ROC annual return handled perfectly. No stress, no errors, no delays. Highly recommended for startups.",
    name: "Aditya Singh",
    title: "Startup Founder, Delhi NCR",
  },
];

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 89379 80366",
    sub: "Fastest response — typically within 15 min",
    color: "bg-green-500",
    href: `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hello Taxvio, I need help with tax & compliance services.")}`,
    external: true,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 89379 80366",
    sub: "Available Mon–Sat, 9 AM – 7 PM",
    color: "bg-[#00416a]",
    href: `tel:${PHONE_NUMBER}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Khatauli, Muzaffarnagar",
    sub: "Uttar Pradesh, India — 100% Online Services",
    color: "bg-orange-500",
    href: "#",
    external: false,
  },
];

const STATS = [
  { value: "3–7", unit: "Days", label: "GST Registration" },
  { value: "4,800+", unit: "", label: "Clients Served" },
  { value: "4.9", unit: "★", label: "Average Rating" },
  { value: "₹499", unit: "", label: "ITR Filing Starts" },
];

// Shared inline backgrounds — guaranteed to render, not affected by Tailwind purge
const DARK_BG = { background: "linear-gradient(135deg, #00416a 0%, #003257 55%, #001e36 100%)" };
const FORM_HEADER_BG = { background: "linear-gradient(to right, #00416a, #003257)" };

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const text = `*New Inquiry — Taxvio*\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || "Not specified"}\n\nMessage:\n${form.message}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setLoading(false);
    setSent(true);
    setForm({ name: "", phone: "", service: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hello Taxvio, I need help with tax & compliance.")}`}
        target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="26" height="26" fill="white">
            <path d="M16.001 3C8.832 3 3 8.832 3 16c0 2.828.924 5.438 2.488 7.561L3 29l5.617-2.457A12.93 12.93 0 0016 29c7.168 0 13-5.832 13-13S23.169 3 16.001 3zm0 23.4c-2.188 0-4.238-.663-5.949-1.8l-.426-.275-3.334 1.457.889-3.25-.278-.446A10.39 10.39 0 015.6 16c0-5.733 4.667-10.4 10.4-10.4S26.4 10.267 26.4 16 21.733 26.4 16 26.4zm5.7-7.8c-.312-.156-1.847-.91-2.134-1.014-.287-.104-.496-.156-.705.156-.208.312-.807 1.014-.989 1.222-.182.208-.364.234-.676.078-.312-.156-1.318-.486-2.51-1.55-.928-.827-1.555-1.848-1.737-2.16-.182-.312-.02-.48.137-.635.14-.139.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.705-1.703-.965-2.335-.253-.61-.51-.527-.705-.537l-.6-.01c-.208 0-.546.078-.832.39-.287.312-1.092 1.066-1.092 2.598 0 1.533 1.118 3.014 1.273 3.222.156.208 2.199 3.355 5.333 4.705.745.322 1.327.514 1.78.658.748.238 1.429.204 1.967.124.6-.089 1.847-.754 2.108-1.48.26-.727.26-1.35.182-1.48-.078-.13-.286-.208-.598-.364z" />
          </svg>
        </div>
      </a>

      {/* Floating Call */}
      <a
        href={`tel:${PHONE_NUMBER}`} aria-label="Call Taxvio"
        className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 bg-[#00416a] text-white px-5 py-3 rounded-full shadow-2xl hover:bg-[#002b45] hover:scale-105 transition-all duration-300 font-semibold text-sm"
      >
        <Phone size={16} /> Call Now
      </a>

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
        {/*
          FIX 1: Grid pattern div completely removed.
          Background applied via inline style — not Tailwind classes — so it's always rendered.
        */}
        <section className="relative overflow-hidden text-white" style={DARK_BG}>
          {/* Soft radial glows — no grid */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%)" }} />

          <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                We respond within 15 minutes on WhatsApp
              </motion.span>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
                Stop Overpaying Taxes.
                <span className="block mt-2" style={{ color: "#7dd3fc" }}>
                  Talk to Our CA Team — Free.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}>
                Whether it&apos;s GST registration, income tax filing, company formation, or a tax notice — our expert CA team resolves it fast. No jargon, no hidden fees, no office visits.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hello Taxvio, I need help with tax & compliance services.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-200"
                >
                  <svg width="22" height="22" fill="white" viewBox="0 0 32 32">
                    <path d="M16.001 3C8.832 3 3 8.832 3 16c0 2.828.924 5.438 2.488 7.561L3 29l5.617-2.457A12.93 12.93 0 0016 29c7.168 0 13-5.832 13-13S23.169 3 16.001 3zm5.7 15.6c-.312-.156-1.847-.91-2.134-1.014-.287-.104-.496-.156-.705.156-.208.312-.807 1.014-.989 1.222-.182.208-.364.234-.676.078-.312-.156-1.318-.486-2.51-1.55-.928-.827-1.555-1.848-1.737-2.16-.182-.312-.02-.48.137-.635.14-.139.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.705-1.703-.965-2.335-.253-.61-.51-.527-.705-.537l-.6-.01c-.208 0-.546.078-.832.39-.287.312-1.092 1.066-1.092 2.598 0 1.533 1.118 3.014 1.273 3.222.156.208 2.199 3.355 5.333 4.705.745.322 1.327.514 1.78.658.748.238 1.429.204 1.967.124.6-.089 1.847-.754 2.108-1.48.26-.727.26-1.35.182-1.48-.078-.13-.286-.208-.598-.364z" />
                  </svg>
                  WhatsApp Us — Free Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:bg-white/10"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  <Phone size={20} /> Call Now — +91 89379 80366
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-3">
                {["✅ No Office Visit Required", "✅ CA-Assisted Service", "✅ 100% Confidential", "✅ Starting ₹499"].map((t) => (
                  <span key={t} className="rounded-full px-4 py-1.5 text-sm"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}>
                    {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.2)" }}>
            <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {STATS.map(({ value, unit, label }) => (
                <div key={label}>
                  <p className="text-2xl md:text-3xl font-extrabold text-white">
                    {value}<span style={{ color: "#7dd3fc" }}>{unit}</span>
                  </p>
                  <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CONTACT CHANNELS + FORM ══════════════════════════════════════════ */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-start">

              {/* LEFT */}
              <motion.div className="lg:col-span-2 space-y-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.div variants={fadeUp}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                    Get in Touch
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#00416a] mt-4 leading-tight">
                    Your Taxes, Sorted.<br />
                    <span className="text-gray-500 font-medium text-2xl">We handle the complexity.</span>
                  </h2>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    From a simple ITR to a complex tax audit, our CA-led team delivers accurate, fast, and affordable compliance — 100% online, anywhere in India.
                  </p>
                </motion.div>

                {CHANNELS.map(({ icon: Icon, label, value, sub, color, href, external }) => (
                  <motion.a key={label} href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    variants={scaleIn}
                    className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
                      <p className="font-bold text-gray-800 group-hover:text-[#00416a] transition mt-0.5">{value}</p>
                      <p className="text-xs text-gray-500 mt-1">{sub}</p>
                    </div>
                  </motion.a>
                ))}

                <motion.div variants={fadeUp}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: "rgba(0,65,106,0.05)", border: "1px solid rgba(0,65,106,0.15)" }}>
                  <div className="bg-[#00416a] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Working Hours</p>
                    <p className="font-bold text-gray-800 mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-xs text-gray-500 mt-1">Emergency WhatsApp support available on Sundays</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT — form */}
              <motion.div className="lg:col-span-3"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="px-8 py-7" style={FORM_HEADER_BG}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>CA team available now</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">Get a Free Consultation</h3>
                    <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                      Fill this form and we&apos;ll WhatsApp you back within 15 minutes.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required
                          placeholder="e.g. Rahul Sharma"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a] focus:border-transparent transition placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} required
                          placeholder="+91 9XXXXXXXXX"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a] focus:border-transparent transition placeholder:text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Service You Need</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a] focus:border-transparent transition text-gray-700 bg-white">
                        <option value="">Select a service...</option>
                        <optgroup label="GST Services">
                          <option>GST Registration</option>
                          <option>GST Return Filing (GSTR-1 / 3B)</option>
                          <option>GST Refund Application</option>
                          <option>GST Annual Return (GSTR-9)</option>
                          <option>GST Notice Reply</option>
                          <option>GST LUT Filing</option>
                          <option>GST Cancellation</option>
                          <option>GST E-Invoicing</option>
                        </optgroup>
                        <optgroup label="Income Tax">
                          <option>ITR Filing — Salaried</option>
                          <option>ITR Filing — Proprietor / Business</option>
                          <option>ITR Filing — Firm / LLP / Company</option>
                          <option>TDS Return (24Q / 26Q / 27Q)</option>
                          <option>Income Tax Audit (Section 44AB)</option>
                          <option>Income Tax Scrutiny Notice</option>
                          <option>12A / 80G Registration</option>
                          <option>Form 15G / 15H</option>
                          <option>PAN Card / TAN Application</option>
                        </optgroup>
                        <optgroup label="Company & ROC">
                          <option>Private Limited Company Registration</option>
                          <option>LLP Registration</option>
                          <option>OPC Registration</option>
                          <option>Annual ROC Compliance</option>
                        </optgroup>
                        <optgroup label="FSSAI">
                          <option>FSSAI License Registration</option>
                          <option>FSSAI Renewal / Modification</option>
                        </optgroup>
                        <option value="Other">Other / Not sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} required
                        placeholder="Briefly describe what you need help with..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a] focus:border-transparent transition placeholder:text-gray-400 resize-none" />
                    </div>

                    <button type="submit" disabled={loading}
                      className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
                      {loading ? (
                        <><div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Opening WhatsApp...</>
                      ) : sent ? (
                        <><CheckCircle size={20} /> Sent! We&apos;ll reply shortly.</>
                      ) : (
                        <><Send size={18} /> Send via WhatsApp — Get Reply in 15 Min</>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      🔒 Your information is 100% confidential. No spam, ever.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ SERVICES QUICK LINKS ═════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#00416a" }}>
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-white">
                What Can We Help You With Today?
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                Click any service — we&apos;ll WhatsApp you with a quote within 15 minutes.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                "GST Registration", "GST Return Filing", "ITR – Salaried",
                "ITR – Business", "TDS Return", "Tax Audit",
                "GST Notice", "Company Registration", "LLP Registration",
                "12A / 80G", "Form 15G / 15H", "FSSAI License",
              ].map((svc) => (
                <motion.a key={svc}
                  href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Hello Taxvio, I need help with: ${svc}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  variants={scaleIn}
                  className="group flex items-center justify-between gap-2 text-white rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-white hover:text-[#00416a]"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <span>{svc}</span>
                  <ArrowRight size={13} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
              <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full">
                Client Reviews
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-[#00416a] mt-4">
                4,800+ Businesses Trust Taxvio
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 mt-2">Real experiences from clients across India.</motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map(({ stars, text, name, title }) => (
                <motion.div key={name} variants={scaleIn}
                  className="p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  itemScope itemType="https://schema.org/Review">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} size={16} fill="#facc15" className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic" itemProp="reviewBody">
                    &quot;{text}&quot;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#00416a] flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm" itemProp="author">{name}</p>
                      <p className="text-xs text-gray-400">{title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ FAQ ═════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50" aria-label="Frequently Asked Questions">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-white px-3 py-1 rounded-full border border-blue-100">FAQ</span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Frequently Asked Questions</h2>
                <p className="text-gray-600 mt-2 text-sm">Still have questions? WhatsApp us — we reply in 15 minutes.</p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                {FAQS.map((f, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
                    itemScope itemType="https://schema.org/Question">
                    <button
                      className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      aria-expanded={faqOpen === i}>
                      <span itemProp="name">{f.q}</span>
                      <ChevronDown size={18} className={`text-[#00416a] shrink-0 ml-4 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {faqOpen === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          itemScope itemType="https://schema.org/Answer">
                          <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed" itemProp="text">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ FINAL CTA ════════════════════════════════════════════════════════ */}
        {/*
          FIX 2: Tailwind's bg-gradient-to-br with arbitrary hex values (from-[#00416a] etc.)
          can silently fail when the class isn't in the CSS bundle (common with arbitrary values).
          Inline style={DARK_BG} guarantees the dark gradient is always painted.
          All text colors and borders also use inline rgba — no Tailwind opacity modifiers.
        */}
        <section className="py-20 relative overflow-hidden" style={DARK_BG}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)" }} />

          <motion.div className="relative max-w-3xl mx-auto px-6 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Zap size={14} className="text-yellow-400" />
              Response guaranteed within 15 minutes
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
              Don&apos;t Let a Tax Problem Cost You More Than It Should.
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}>
              Every day you delay a GST notice, ITR filing, or company compliance — penalties grow. Our CA team is ready right now.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hello Taxvio, I need urgent help with a tax/compliance issue.")}`}
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} />
                WhatsApp Now — It&apos;s Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                <Phone size={20} /> +91 89379 80366
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-5 text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              <span className="flex items-center gap-1.5"><Shield size={13} /> 100% Confidential</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} /> CA-Assisted</span>
              <span className="flex items-center gap-1.5"><Zap size={13} /> Starting ₹499</span>
              <span className="flex items-center gap-1.5"><Star size={13} /> 4.9★ Rated</span>
            </motion.div>
          </motion.div>
        </section>

        <Footar />
      </main>
    </>
  );
}