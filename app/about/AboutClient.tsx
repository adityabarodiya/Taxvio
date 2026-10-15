// app/about/AboutClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  description:
    "Taxvio is a CA-assisted tax and compliance platform helping individuals, startups, and growing businesses across India with FSSAI, GST, Income Tax, and Registrar of Companies (ROC/MCA) compliance through a single, transparent, digital-first platform.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khatauli",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: "India",
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Taxvio",
  description:
    "Learn about Taxvio — a CA-assisted compliance platform offering FSSAI, GST, Income Tax, and ROC/MCA services for businesses across India.",
  url: "https://www.taxvio.in/about",
};

/* ══════════════════════════════════════════════════════════ */
export default function AboutClient() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  👋 About Taxvio
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Simplifying Tax
                  <br />
                  <span className="text-[#7ecbf0]">& Compliance</span>
                  <br />
                  for Indian Businesses
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  <strong className="text-white">Taxvio</strong> is a{" "}
                  <strong className="text-white">
                    CA-assisted compliance platform
                  </strong>{" "}
                  built to help individuals, startups, and growing businesses
                  navigate India's tax and regulatory landscape —{" "}
                  <strong className="text-white">
                    FSSAI, GST, Income Tax, and Registrar of Companies
                    (ROC/MCA)
                  </strong>{" "}
                  compliance — through{" "}
                  <strong className="text-white">
                    one transparent, digital-first platform
                  </strong>
                  , backed by a real team of{" "}
                  <strong className="text-white">
                    Chartered Accountants and Company Secretaries
                  </strong>
                  .
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/serviceslist"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Explore Our Services →
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    Talk to an Expert
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ CA & CS Backed",
                    "✅ Transparent Pricing",
                    "✅ 100% Digital Process",
                    "✅ Pan-India Support",
                  ].map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Quick Facts
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["🧾", "90+ compliance services"],
                    ["🗂️", "4 major compliance categories"],
                    ["📍", "Based in Khatauli, Muzaffarnagar, UP"],
                    ["🌐", "Pan-India remote service"],
                    ["👩‍💼", "CA & CS supported filings"],
                    ["💬", "WhatsApp & phone support"],
                  ].map(([icon, text]) => (
                    <li key={text as string} className="flex items-start gap-3">
                      <span className="text-base">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "90+", label: "Services Offered", icon: "🧾" },
              { number: "4", label: "Compliance Categories", icon: "🗂️" },
              { number: "100%", label: "Digital & Remote Process", icon: "💻" },
              { number: "Pan-India", label: "Client Coverage", icon: "🌐" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {s.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ CA & CS Verified Filings",
              "✔ Transparent, Upfront Pricing",
              "✔ End-to-End Digital Process",
              "✔ Dedicated Client Support",
            ].map((t) => (
              <div
                key={t}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* OUR STORY */}
          <section id="our-story">
            <SectionLabel text="Our Story" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              Why We Built Taxvio
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Most Indian business owners run into the same problem:
                  compliance is{" "}
                  <strong>scattered across multiple departments</strong> —
                  FSSAI for food licensing, GST for tax filings, Income Tax
                  for returns and TDS, and the Registrar of Companies (ROC)
                  for company and LLP compliance — often handled by{" "}
                  <strong>different professionals with inconsistent
                  pricing and communication</strong>.
                </p>
                <p>
                  <strong>Taxvio</strong> was built to bring all of this
                  together into{" "}
                  <strong>one platform</strong>. Rather than juggling
                  separate consultants for every registration or filing,
                  business owners can come to Taxvio for{" "}
                  <strong>
                    FSSAI licensing, GST compliance, Income Tax filing, and
                    ROC/MCA services
                  </strong>{" "}
                  — with clear packages, upfront pricing, and a{" "}
                  <strong>
                    real team of Chartered Accountants and Company
                    Secretaries
                  </strong>{" "}
                  behind every filing.
                </p>
                <p>
                  Taxvio is based in{" "}
                  <strong>Khatauli, Muzaffarnagar, Uttar Pradesh</strong>, and
                  serves clients{" "}
                  <strong>across India through a fully remote,
                  digital-first process</strong>
                  — from document collection to filing on the relevant
                  government portal, without requiring an office visit.
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <p className="font-bold text-blue-800 mb-3">
                  🎯 Our Mission
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  To make tax and regulatory compliance{" "}
                  <strong>simple, transparent, and accessible</strong> for
                  every Indian business — regardless of size, location, or
                  familiarity with government processes.
                </p>
                <div className="space-y-2">
                  {[
                    {
                      title: "One Platform, Every Filing",
                      desc: "FSSAI, GST, Income Tax, and ROC/MCA compliance handled under a single roof.",
                    },
                    {
                      title: "Real Professionals, Not Just Software",
                      desc: "Every filing is prepared and reviewed with support from qualified CAs and CS professionals.",
                    },
                    {
                      title: "Clarity Over Confusion",
                      desc: "Upfront packages, clear documentation checklists, and plain-language guidance at every step.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-lg p-3 border border-blue-100"
                    >
                      <p className="font-bold text-blue-700 text-sm mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* WHAT WE DO */}
          <section id="what-we-do">
            <SectionLabel text="What We Do" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Compliance Services Across 4 Categories
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              From food licensing to company incorporation, Taxvio covers the
              full spectrum of compliance an Indian business is likely to
              need:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "FSSAI Services",
                  icon: "🍽️",
                  link: "/serviceslist/fssai",
                  count: "6+ Services",
                  desc: "Basic, State & Central FSSAI registration, renewal, modification, and annual return filing for food businesses.",
                },
                {
                  title: "GST Services",
                  icon: "🧾",
                  link: "/serviceslist/gst",
                  count: "28+ Services",
                  desc: "Registration, return filing, refunds, ITC reconciliation, notices, audits, and industry-specific GST support.",
                },
                {
                  title: "Income Tax Services",
                  icon: "📋",
                  link: "/serviceslist/income-tax",
                  count: "30+ Services",
                  desc: "ITR filing for individuals, firms & companies, TDS/TCS compliance, tax planning, and notice handling.",
                },
                {
                  title: "ROC / MCA Services",
                  icon: "🏢",
                  link: "/serviceslist/roc",
                  count: "27+ Services",
                  desc: "Company & LLP formation, annual compliance, conversions, restorations, and Registrar of Companies filings.",
                },
              ].map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-1">
                    {cat.title}
                  </h3>
                  <span className="inline-block text-xs font-semibold text-[#00416a] bg-[#00416a]/10 px-2 py-1 rounded-full mb-3">
                    {cat.count}
                  </span>
                  <p className="text-sm text-gray-600 mb-3">{cat.desc}</p>
                  <span className="text-sm text-[#00416a] font-semibold group-hover:underline">
                    View Services →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section id="why-choose-us">
            <SectionLabel text="Why Choose Us" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Why Businesses Choose Taxvio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "👩‍💼",
                  title: "Expert CA & CS Team",
                  desc: "Every filing is prepared and reviewed with support from qualified Chartered Accountants and Company Secretaries — not just automated forms.",
                },
                {
                  icon: "💰",
                  title: "Transparent, Upfront Pricing",
                  desc: "Packages and add-ons are clearly listed before you commit — no hidden fees or surprise charges midway through a filing.",
                },
                {
                  icon: "💻",
                  title: "End-to-End Digital Process",
                  desc: "From document collection to government portal filing, everything happens online — no need to visit an office in person.",
                },
                {
                  icon: "🌐",
                  title: "Pan-India Remote Support",
                  desc: "Serving clients across India regardless of location, with the same level of documentation support and turnaround.",
                },
                {
                  icon: "🗂️",
                  title: "One Platform, Every Compliance Need",
                  desc: "FSSAI, GST, Income Tax, and ROC/MCA compliance handled under one roof, so you don't need to coordinate multiple vendors.",
                },
                {
                  icon: "💬",
                  title: "Responsive Support",
                  desc: "Reach us via WhatsApp, phone, or email whenever you have a question about your filing or its status.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW WE WORK */}
          <section id="how-we-work">
            <SectionLabel text="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How We Work
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Share Your Requirement",
                    description:
                      "Tell us what you need — a registration, a return, or ongoing compliance support — via WhatsApp, phone, or the contact form. We'll confirm the right service and package for your situation.",
                  },
                  {
                    step: 2,
                    title: "Document Collection & Review",
                    description:
                      "We share a clear checklist of required documents, collect them digitally, and verify eligibility and compliance requirements upfront so there are no surprises later.",
                  },
                  {
                    step: 3,
                    title: "Preparation & Filing",
                    description:
                      "Our CA/CS team prepares your application, return, or filing and submits it on the relevant government portal — FSSAI, GST, Income Tax, or MCA — on your behalf.",
                  },
                  {
                    step: 4,
                    title: "Confirmation & Ongoing Support",
                    description:
                      "You receive your filing confirmation, certificate, or acknowledgment, and we flag any follow-up compliance you'll need to stay on top of going forward.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-green-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#00416a] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* OUR VALUES */}
          <section id="our-values">
            <SectionLabel text="Our Values" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              What We Stand For
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🤝",
                  title: "Integrity",
                  desc: "We give straightforward advice, even when it means telling you a service isn't the right fit for your situation.",
                },
                {
                  icon: "🔍",
                  title: "Transparency",
                  desc: "Clear pricing, clear timelines, and clear documentation requirements — no fine print surprises.",
                },
                {
                  icon: "⏱️",
                  title: "Timeliness",
                  desc: "Compliance deadlines matter. We track them closely so your filings stay on schedule.",
                },
                {
                  icon: "🎯",
                  title: "Client-First",
                  desc: "Every package and process is designed around what makes compliance easiest for the business owner, not just easiest for us.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 border rounded-2xl p-6 text-center hover:border-[#00416a]/40 transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FOUNDER NOTE */}
          <section id="founder-note">
            <SectionLabel text="From the Founder" />
            <div className="bg-white border-2 border-[#00416a]/10 rounded-3xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#00416a] text-white flex items-center justify-center text-3xl font-bold">
                  A
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed italic mb-4">
                    "I started Taxvio because I kept hearing the same
                    frustration from business owners — compliance felt
                    scattered, confusing, and expensive to coordinate across
                    different consultants. I wanted to build a platform where
                    someone could come for any FSSAI, GST, Income Tax, or ROC
                    need and get a clear process, honest pricing, and real
                    professional support behind it — not just a form to fill
                    out."
                  </p>
                  <p className="font-bold text-[#00416a]">Aditya Barodiya</p>
                  <p className="text-sm text-gray-500">Founder, Taxvio</p>
                </div>
              </div>
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="coverage">
            <SectionLabel text="Where We Serve" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Serving Businesses Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong>{" "}
              and delivers every service remotely — so location is never a
              barrier. We regularly serve clients across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and cities throughout India.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
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
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default"
                >
                  📍 {city}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Let's Simplify Your Compliance
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Ready to Get Started?
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Whether it's FSSAI, GST, Income Tax, or ROC compliance,
                    our team is ready to help — with clear pricing, honest
                    guidance, and real professionals behind every filing.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/serviceslist"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footar />

        {/* FIXED WHATSAPP BUTTON */}
        {showWhatsApp && (
          <a
            href="https://wa.me/918937980366?text=Hi%2C%20I%20have%20a%20question%20about%20Taxvio's%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-200 z-50 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="absolute -top-10 right-0 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Need Help? Chat Now!
            </span>
          </a>
        )}
      </main>
    </>
  );
}

/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What services does Taxvio offer?",
      a: "Taxvio offers over 90 compliance services across four categories: FSSAI registration, renewal, and food compliance; GST registration, return filing, refunds, and specialized industry support; Income Tax filing for individuals, firms, and companies along with TDS/TCS compliance; and ROC/MCA services covering company and LLP formation, annual filings, conversions, and restorations. You can browse the full list on our Services page.",
    },
    {
      q: "Is Taxvio's process fully online?",
      a: "Yes. From sharing your requirement and submitting documents to receiving your filing confirmation, the entire process happens digitally — over WhatsApp, email, and our online forms. You don't need to visit an office in person for any of our services.",
    },
    {
      q: "Do you serve clients outside Uttar Pradesh?",
      a: "Yes. While Taxvio is based in Khatauli, Muzaffarnagar, Uttar Pradesh, we serve clients across India remotely, including Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat, and other cities — with the same documentation support and turnaround regardless of location.",
    },
    {
      q: "Who prepares and files my compliance documents?",
      a: "Every filing is prepared and reviewed with support from qualified Chartered Accountants and Company Secretaries as part of our team — not handled purely by automated software. This applies whether you're filing a GST return, incorporating a company, or applying for an FSSAI license.",
    },
    {
      q: "How do I get started with Taxvio?",
      a: "Reach out via WhatsApp, phone, or our contact form to tell us what you need. We'll confirm the right service and package for your situation, share a documentation checklist, and get started on your filing — with clear pricing shared upfront before you commit.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — About Taxvio
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group border rounded-2xl overflow-hidden"
            open={open === i}
            onToggle={(e) =>
              setOpen((e.target as HTMLDetailsElement).open ? i : null)
            }
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{f.q}</span>
              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─── SHARED ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}