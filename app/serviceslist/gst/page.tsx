// app/serviceslist/gst/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata: Metadata = {
  title: "GST Services & Compliance Solutions | Taxvio",
  description:
    "Complete GST services for businesses including GST registration, return filing, refunds, LUT, e-invoicing, ITC reconciliation, GST notices, e-way bills, and industry-specific GST compliance. Serving Khatauli, Muzaffarnagar, Meerut, Noida, Delhi NCR and pan-India.",
  keywords: [
    "GST services",
    "GST registration",
    "GST return filing",
    "GST refund",
    "GST LUT filing",
    "GSTR-9 filing",
    "GST notice reply",
    "GST audit assistance",
    "GST e-invoicing",
    "GST ITC reconciliation",
    "GST e-way bill",
    "GST for e-commerce sellers",
    "GST for freelancers",
    "GST for importers exporters",
    "GST services Muzaffarnagar",
    "GST consultant Meerut",
    "GST filing Noida",
    "GST consultant Delhi NCR",
    "GST CA services",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst",
  },
  openGraph: {
    title: "GST Services & Compliance Solutions | Taxvio",
    description:
      "Complete GST registration, return filing, refund, LUT, notice reply, audit, e-invoicing, ITC reconciliation and industry-specific GST support.",
    url: "https://www.taxvio.in/serviceslist/gst",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-services.jpg",
        width: 1200,
        height: 630,
        alt: "GST Services and Compliance Solutions — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Services & Compliance Solutions | Taxvio",
    description:
      "Expert GST registration, filing, refund and advisory services for businesses across India.",
    images: ["https://www.taxvio.in/og/gst-services.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const gstServices = [
  {
    slug: "gst-registration",
    title: "GST Registration",
    icon: "📝",
    description:
      "Complete GST registration support with eligibility assessment, documentation, application filing, and GSTIN approval assistance.",
    price: "Starting ₹999",
    badge: "Popular",
  },
  {
    slug: "gst-return",
    title: "GST Return Filing",
    icon: "📊",
    description:
      "Monthly and quarterly GSTR-1 and GSTR-3B filing with invoice reconciliation and compliance monitoring.",
    price: "Starting ₹999/month",
  },
  {
    slug: "gst-refund",
    title: "GST Refund Application",
    icon: "💸",
    description:
      "Professional assistance for export refunds, excess ITC refunds, application preparation, and department follow-up.",
    price: "Starting ₹2,999",
  },
  {
    slug: "gst-cancellation",
    title: "GST Cancellation",
    icon: "❌",
    description:
      "GST cancellation application, final return guidance, document preparation, and cancellation order follow-up.",
    price: "Starting ₹1,999",
  },
  {
    slug: "gst-amendment",
    title: "GST Amendment / Update",
    icon: "✏️",
    description:
      "Update business address, trade name, contact details, bank details, partners, directors, and other GST registration information.",
    price: "Starting ₹999",
  },
  {
    slug: "gst-search",
    title: "GSTIN Search & Verification",
    icon: "🔍",
    description:
      "Verify GSTIN status, legal name, trade name, registration date, taxpayer type, and jurisdiction details.",
    price: "Quick Verification",
  },
  {
    slug: "gst-lut",
    title: "GST LUT Filing",
    icon: "🌍",
    description:
      "Annual Letter of Undertaking filing for exporters supplying goods or services without payment of IGST.",
    price: "Starting ₹999",
  },
  {
    slug: "gstr-9",
    title: "GST Annual Return — GSTR-9",
    icon: "📅",
    description:
      "GSTR-9 preparation and filing with annual data reconciliation, error identification, and compliance review.",
    price: "Starting ₹4,999",
  },
  {
    slug: "gst-notice-reply",
    title: "GST Notice Reply",
    icon: "⚖️",
    description:
      "GST notice analysis, reply drafting, supporting document submission, and departmental follow-up.",
    price: "Starting ₹2,999",
  },
  {
    slug: "gst-audit",
    title: "GST Audit Assistance",
    icon: "📋",
    description:
      "GST audit support including data reconciliation, documentation, audit report preparation, and department coordination.",
    price: "Starting ₹9,999",
  },
  {
    slug: "gst-e-invoicing",
    title: "GST E-Invoicing Setup",
    icon: "🧾",
    description:
      "E-invoicing registration, IRN generation, accounting software integration, and ongoing compliance monitoring.",
    price: "Starting ₹2,999",
  },
  {
    slug: "gst-for-e-commerce",
    title: "GST for E-Commerce Sellers",
    icon: "🛒",
    description:
      "GST compliance for Amazon, Flipkart, Meesho, Shopify, D2C, ONDC, Zomato, and Swiggy sellers.",
    price: "Starting ₹1,499",
    badge: "Specialized",
  },
  {
    slug: "gst-for-freelancers",
    title: "GST for Freelancers",
    icon: "💻",
    description:
      "GST setup for developers, designers, consultants, content creators, and professionals billing Indian or foreign clients.",
    price: "Starting ₹1,499",
    badge: "Specialized",
  },
  {
    slug: "gst-composition-scheme",
    title: "GST Composition Scheme",
    icon: "📦",
    description:
      "Eligibility assessment, CMP-02 filing, CMP-08 payment support, and annual GSTR-4 compliance.",
    price: "Starting ₹2,499",
  },
  {
    slug: "gst-itc-reconciliation",
    title: "GST ITC Reconciliation",
    icon: "🔄",
    description:
      "GSTR-2B and purchase register reconciliation to identify mismatches and maximize eligible ITC.",
    price: "Starting ₹2,999/month",
  },
  {
    slug: "gst-revocation",
    title: "GST Registration Revocation",
    icon: "♻️",
    description:
      "Restore cancelled GST registrations through REG-21 filing, pending return clearance, and department follow-up.",
    price: "Starting ₹4,999",
  },
  {
    slug: "gstr-10-final-return",
    title: "GSTR-10 Final Return",
    icon: "📄",
    description:
      "Final GST return filing after cancellation, including closing stock valuation and ITC reversal computation.",
    price: "Starting ₹1,999",
  },
  {
    slug: "gst-tds-compliance",
    title: "GST TDS Compliance",
    icon: "🏛️",
    description:
      "Section 51 GST TDS applicability review, GSTR-7 filing, deductee reconciliation, and certificate support.",
    price: "Starting ₹2,999/month",
  },
  {
    slug: "gst-eway-bill",
    title: "GST E-Way Bill Compliance",
    icon: "🚚",
    description:
      "E-way bill generation, vehicle and transporter updates, validity extension, and transport compliance review.",
    price: "Starting ₹999",
  },
  {
    slug: "gst-appeal-filing",
    title: "GST Appeal Filing",
    icon: "⚖️",
    description:
      "Order analysis, grounds of appeal, APL-01 drafting, pre-deposit computation, and hearing support.",
    price: "Starting ₹14,999",
  },
  {
    slug: "gst-advance-ruling",
    title: "GST Advance Ruling",
    icon: "🔎",
    description:
      "Advance ruling application for GST rate, classification, taxability, and transaction structuring clarity.",
    price: "Starting ₹19,999",
  },
  {
    slug: "gst-job-work",
    title: "GST Job Work Compliance",
    icon: "🏭",
    description:
      "Job work challan tracking, ITC-04 filing, input and capital goods reconciliation, and deadline monitoring.",
    price: "Starting ₹2,999",
  },
  {
    slug: "gst-composition-to-regular",
    title: "Composition to Regular Transition",
    icon: "📈",
    description:
      "Transition support including CMP-04 withdrawal, ITC-01 stock credit claim, and regular return setup.",
    price: "Starting ₹4,999",
  },
  {
    slug: "gst-hsn-sac-classification",
    title: "HSN/SAC Classification Advisory",
    icon: "🏷️",
    description:
      "Product and service classification review, GST rate determination, and invoice compliance advisory.",
    price: "Starting ₹1,999",
  },
  {
    slug: "gst-for-restaurants",
    title: "GST for Restaurants & Hospitality",
    icon: "🍽️",
    description:
      "GST registration, composition advisory, Section 9(5) compliance, and Zomato/Swiggy settlement reconciliation.",
    price: "Starting ₹2,999/month",
    badge: "Industry-Specific",
  },
  {
    slug: "gst-for-manufacturers",
    title: "GST for Manufacturers & Job Workers",
    icon: "🏗️",
    description:
      "Manufacturing GST support covering ITC optimization, job work, stock transfers, e-way bills, and multi-state registrations.",
    price: "Starting ₹4,999/month",
    badge: "Industry-Specific",
  },
  {
    slug: "gst-for-real-estate",
    title: "GST for Real Estate & Construction",
    icon: "🏢",
    description:
      "GST rate, ITC, RCM, joint development agreement, works contract, and construction-sector compliance advisory.",
    price: "Starting ₹4,999",
    badge: "Industry-Specific",
  },
  {
    slug: "gst-for-importers-exporters",
    title: "GST for Importers & Exporters",
    icon: "🌐",
    description:
      "IGST on imports, Bill of Entry reconciliation, export documentation, LUT filing, refund, and RCM support.",
    price: "Starting ₹4,999/month",
    badge: "Industry-Specific",
  },
];

const categoryJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "GST Services & Compliance Solutions",
  description:
    "Complete GST registration, return filing, refunds, LUT, audit, e-invoicing, ITC reconciliation, notice reply, and industry-specific GST services.",
  url: "https://www.taxvio.in/serviceslist/gst",
  isPartOf: {
    "@type": "WebSite",
    name: "Taxvio",
    url: "https://www.taxvio.in",
  },
  provider: {
    "@type": "ProfessionalService",
    name: "Taxvio",
    areaServed: "India",
  },
};

export default function GstServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categoryJsonLd),
        }}
      />

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/serviceslist"
                className="hover:text-white transition"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-white">GST Services</span>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                🧾 GST Compliance & Advisory
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Complete GST Services
                <br />
                <span className="text-[#7ecbf0]">for Every Business</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-10">
                From GST registration and monthly return filing to refunds,
                LUT, e-invoicing, ITC reconciliation, GST notices, audits, and
                industry-specific compliance — Taxvio provides reliable,
                end-to-end GST support for businesses across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                >
                  Get GST Assistance →
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                >
                  Explore Services ↓
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                {[
                  "✅ CA-Assisted Compliance",
                  "✅ Monthly & Annual Filing",
                  "✅ GST Notice Support",
                  "✅ Pan-India Service",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🧾", number: "28+", label: "GST Services" },
              { icon: "📊", number: "2,500+", label: "Returns Filed" },
              { icon: "💼", number: "500+", label: "Businesses Served" },
              { icon: "🇮🇳", number: "Pan-India", label: "Online Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {stat.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ GST Registration Experts",
              "✔ Accurate Return Filing",
              "✔ ITC Reconciliation Support",
              "✔ CA-Assisted Compliance",
            ].map((badge) => (
              <div
                key={badge}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {badge}
              </div>
            ))}
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
                GST Support for Businesses
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-5">
                GST Compliance Without the Complexity
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                GST compliance involves more than simply filing returns. A
                business must maintain accurate invoices, reconcile ITC, track
                filing deadlines, manage e-way bills, respond to notices, and
                comply with sector-specific requirements.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Taxvio combines technology-enabled processes with CA-assisted
                review to help businesses remain compliant, reduce tax errors,
                and claim eligible credits and refunds.
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8">
              <h3 className="font-bold text-blue-800 text-xl mb-5">
                Why Choose Taxvio for GST?
              </h3>

              <ul className="space-y-4 text-sm text-gray-700">
                {[
                  "Personalized compliance calendar for your business",
                  "GSTR-1 and GSTR-3B filing with data review",
                  "GSTR-2B and purchase register reconciliation",
                  "Industry-specific GST advisory",
                  "Support for GST notices and departmental queries",
                  "Secure document collection and digital communication",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-gray-50 py-20 border-y">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-white">
                Our GST Services
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
                Choose the GST Service You Need
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto">
                Practical GST support for startups, freelancers, traders,
                manufacturers, exporters, e-commerce sellers, restaurants, and
                growing companies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gstServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/serviceslist/gst/${service.slug}`}
                  className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-[#00416a]/40 transition-all duration-200 group"
                >
                  {service.badge && (
                    <span className="absolute top-4 right-4 bg-[#00416a] text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}

                  <div className="text-4xl mb-4">{service.icon}</div>

                  <h3 className="text-xl font-bold text-[#00416a] mb-3 pr-12">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between gap-3 border-t pt-4">
                    <span className="text-sm font-bold text-[#00416a]">
                      {service.price}
                    </span>

                    <span className="text-sm font-semibold text-[#00416a] group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
              Industry-Specific GST
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              GST Support for Different Business Models
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🛒",
                title: "E-Commerce & D2C",
                text: "Marketplace reconciliation, TCS matching, GSTR-8, returns, and GST notices.",
                link: "/serviceslist/gst/gst-for-e-commerce",
              },
              {
                icon: "🌍",
                title: "Importers & Exporters",
                text: "IGST on imports, LUT, shipping bill matching, refunds, and RCM.",
                link: "/serviceslist/gst/gst-for-importers-exporters",
              },
              {
                icon: "🏭",
                title: "Manufacturers",
                text: "ITC optimization, job work, e-way bills, stock transfers, and multi-state GST.",
                link: "/serviceslist/gst/gst-for-manufacturers",
              },
              {
                icon: "💻",
                title: "Freelancers & Professionals",
                text: "GST registration, LUT for foreign clients, SAC mapping, and return filing.",
                link: "/serviceslist/gst/gst-for-freelancers",
              },
              {
                icon: "🍽️",
                title: "Restaurants & Hospitality",
                text: "Composition advisory, Section 9(5), platform reconciliation, and monthly filing.",
                link: "/serviceslist/gst/gst-for-restaurants",
              },
              {
                icon: "🏢",
                title: "Real Estate & Construction",
                text: "GST rates, ITC restrictions, works contract RCM, and project advisory.",
                link: "/serviceslist/gst/gst-for-real-estate",
              },
            ].map((industry) => (
              <Link
                key={industry.title}
                href={industry.link}
                className="border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-[#00416a] text-lg mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{industry.text}</p>
                <span className="text-sm text-[#00416a] font-semibold group-hover:underline">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-gray-50 py-20 border-y">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-white">
                Simple Process
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
                How Our GST Service Works
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Share Details",
                  text: "Tell us about your business and GST requirement.",
                },
                {
                  step: "02",
                  title: "Document Review",
                  text: "Our team reviews your documents and transaction data.",
                },
                {
                  step: "03",
                  title: "Filing & Advisory",
                  text: "We prepare the required forms, returns, or applications.",
                },
                {
                  step: "04",
                  title: "Confirmation",
                  text: "Receive filing acknowledgment and compliance summary.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3">
                  Service Locations
                </span>

                <h2 className="text-3xl font-bold text-[#00416a] mb-4">
                  GST Services Across India
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Taxvio provides online GST registration, filing, advisory, and
                  notice support across Khatauli, Muzaffarnagar, Meerut, Noida,
                  Delhi NCR, Mumbai, Pune, Bangalore, Hyderabad, Chennai, and
                  all cities across India.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Khatauli",
                  "Muzaffarnagar",
                  "Meerut",
                  "Noida",
                  "Delhi NCR",
                  "Mumbai",
                  "Pune",
                  "Bangalore",
                  "Hyderabad",
                  "Chennai",
                  "Ahmedabad",
                  "Lucknow",
                ].map((city) => (
                  <div
                    key={city}
                    className="bg-white border rounded-xl p-3 text-center text-sm font-semibold text-[#00416a]"
                  >
                    📍 {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center lg:text-left">
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                  GST Compliance Support
                </p>

                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Need Help With Your GST Compliance?
                </h2>

                <p className="text-lg text-gray-200 leading-relaxed">
                  From registration to filing, refunds, notices, audits, and
                  industry-specific advisory, Taxvio helps you manage GST with
                  confidence.
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                >
                  Talk to a GST Expert →
                </Link>

                <a
                  href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20GST%20compliance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}