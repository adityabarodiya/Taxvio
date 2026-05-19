import { Metadata } from "next";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata: Metadata = {
  title: "FSSAI Registration, Renewal & Compliance Services in India | Taxvio",
  description:
    "Get FSSAI registration, renewal, modification, annual return filing and notice reply services across India. Expert food license consultants in Khatauli, Muzaffarnagar, Noida, Delhi & Mumbai. Start your FSSAI compliance today.",
  keywords:
    "FSSAI Registration India, Food License Online, FSSAI Consultant Khatauli, FSSAI Renewal, FSSAI Annual Return Filing, FSSAI License Muzaffarnagar, Food Safety License India, FSSAI Basic Registration, FSSAI State License, Central FSSAI License",
  openGraph: {
    title: "FSSAI Registration & Food License Compliance | Taxvio",
    description:
      "End-to-end FSSAI services for food businesses across India. Expert compliance support by CA-supervised professionals.",
    type: "website",
  },
};

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function FSSAIPillarPage() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
        {/* decorative rings */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          {/* breadcrumb */}
          <nav className="mb-6 text-sm text-white/60 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/serviceslist" className="hover:text-white transition">Services</Link>
            <span>/</span>
            <span className="text-white">FSSAI</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                🍽️ Food Safety & Standards Authority
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                FSSAI Registration &<br />
                <span className="text-[#7ecbf0]">Food License</span> Services
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                Every food business in India legally requires an FSSAI license under the Food Safety and Standards Act, 2006.
                Taxvio provides complete end-to-end FSSAI registration, renewal, modification, annual return filing, and notice
                reply services — backed by CA-supervised compliance professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                >
                  Get Free Consultation →
                </Link>
                <Link
                  href="tel:+919999999999"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                >
                  📞 Call Our Expert
                </Link>
              </div>
            </div>

            {/* hero card */}
            <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">Quick Facts</p>
              <ul className="space-y-4 text-sm text-gray-200">
                {[
                  ["⚖️", "Governed by FSSAI Act, 2006"],
                  ["🏪", "Mandatory for all Food Businesses"],
                  ["📋", "3 License Types: Basic, State, Central"],
                  ["🔁", "Valid 1–5 Years, Renewable"],
                  ["💰", "Avoid Penalties up to ₹5 Lakhs"],
                  ["🚀", "Registration in 7–30 Working Days"],
                ].map(([icon, text]) => (
                  <li key={text} className="flex items-start gap-3">
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
      <section className="bg-gray-50 py-16 border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "500+", label: "Food Businesses Served", icon: "🏢" },
            { number: "100%", label: "Compliance Focused", icon: "✅" },
            { number: "7+ Years", label: "Industry Experience", icon: "📅" },
            { number: "PAN India", label: "Service Coverage", icon: "🗺️" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-3xl font-extrabold text-[#00416a] mb-1">{s.number}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
          {[
            "✔ Government Portal Expertise",
            "✔ CA-Supervised Compliance",
            "✔ Data Confidentiality Assured",
            "✔ Fast Processing & Follow-ups",
          ].map((t) => (
            <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* INTRO */}
        <section id="what-is-fssai">
          <SectionLabel text="Regulatory Foundation" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
            What Is FSSAI and Why Is It Mandatory for Food Businesses?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <p>
                The <strong>Food Safety and Standards Authority of India (FSSAI)</strong> is an autonomous statutory body established
                under the Ministry of Health &amp; Family Welfare, Government of India. It is responsible for protecting and
                promoting public health through the regulation and supervision of food safety across the country.
              </p>
              <p>
                Under the <strong>Food Safety and Standards Act, 2006</strong>, every Food Business Operator (FBO) in India is legally
                obligated to obtain an FSSAI registration or license before commencing any food-related business activity.
                This applies to manufacturers, processors, distributors, retailers, importers, exporters, restaurants, cloud
                kitchens, sweet shops, catering companies, dairy units, and even online food delivery platforms.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Operating a food business without valid FSSAI registration is a punishable offence that can attract penalties
                of <strong>up to ₹5 lakhs</strong>, business suspension, seizure of food products, and in serious cases,
                imprisonment. FSSAI compliance not only ensures legal protection but also builds consumer trust, facilitates
                e-commerce onboarding, and opens doors for institutional and export contracts.
              </p>
              <p>
                At <strong>Taxvio</strong>, our FSSAI specialists handle the entire process from category assessment and
                document preparation to portal submission, follow-ups, and post-license compliance — so you can focus entirely
                on running your food business.
              </p>
            </div>
          </div>
        </section>

        {/* WHO NEEDS */}
        <section id="who-needs-fssai">
          <SectionLabel text="Applicability" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
            Who Needs FSSAI Registration or License?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🍽️", title: "Restaurants & Dhabas", desc: "All dine-in and takeaway food service establishments." },
              { icon: "🏭", title: "Food Manufacturers", desc: "Units producing packaged, processed, or branded food." },
              { icon: "🥛", title: "Dairy & Milk Units", desc: "Milk producers, dairies, and dairy product manufacturers." },
              { icon: "📦", title: "Importers & Exporters", desc: "Businesses involved in cross-border food trade." },
              { icon: "☁️", title: "Cloud Kitchens", desc: "Online-only food preparation and delivery businesses." },
              { icon: "🛒", title: "Retailers & Wholesalers", desc: "Grocery stores, supermarkets, and food distributors." },
              { icon: "🎂", title: "Bakeries & Sweet Shops", desc: "Confectionery, halwai, and home bakers selling online." },
              { icon: "🚚", title: "Transporters & Warehouses", desc: "Cold chain, food storage, and logistics operators." },
              { icon: "🌿", title: "Nutraceutical Companies", desc: "Health supplements, organic food, and ayurvedic products." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition group">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-[#00416a] group-hover:text-[#00416a] mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section id="license-types">
          <SectionLabel text="License Categories" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            FSSAI License Types: Basic, State & Central
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            FSSAI issues three types of registrations based on the scale and turnover of your food business.
            Choosing the correct category is critical — an incorrect filing can lead to rejection, delays, or penalties.
          </p>
          <div className="overflow-x-auto rounded-2xl border shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-[#00416a] text-white">
                <tr>
                  {["Particulars", "Basic Registration", "State License", "Central License"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Annual Turnover", "Up to ₹12 Lakhs", "₹12 Lakhs – ₹20 Crores", "Above ₹20 Crores"],
                  ["Applicable For", "Petty food vendors, home bakers, small retailers", "Medium businesses, restaurants, state-level manufacturers", "Large manufacturers, importers, exporters, multi-state operators"],
                  ["Form Number", "Form A", "Form B", "Form B"],
                  ["Issuing Authority", "Local FSSAI Body", "State Food Authority", "Central FSSAI, New Delhi"],
                  ["License Validity", "1 to 5 Years", "1 to 5 Years", "1 to 5 Years"],
                  ["Inspection Required", "Rarely", "Likely", "Mandatory"],
                  ["Govt. Fee (Annual)", "₹100", "₹2,000 – ₹5,000", "₹7,500+"],
                  ["Processing Time", "7–10 Working Days", "30–60 Working Days", "60–90 Working Days"],
                ].map(([label, basic, state, central], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-medium text-gray-800">{label}</td>
                    <td className="px-5 py-4 text-gray-700">{basic}</td>
                    <td className="px-5 py-4 text-gray-700">{state}</td>
                    <td className="px-5 py-4 text-gray-700">{central}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="our-services">
          <SectionLabel text="What We Offer" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Complete FSSAI Compliance Services by Taxvio
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            From new registration to renewal, modification, annual return filing and notice handling — we cover every stage
            of your FSSAI compliance lifecycle with expert precision.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📝",
                title: "FSSAI New Registration",
                link: "/serviceslist/fssai/fssai-registration",
                tag: "Most Popular",
                desc: "Apply for a new FSSAI Basic, State, or Central license. We assess eligibility, prepare documents, and handle portal submission for a smooth, first-time approval.",
              },
              {
                icon: "🔄",
                title: "FSSAI License Renewal",
                link: "/serviceslist/fssai/fssai-renewal",
                tag: "Time-Sensitive",
                desc: "Renew your FSSAI license 30 days before expiry to avoid penalties and business disruption. We track your renewal dates and handle it proactively.",
              },
              {
                icon: "✏️",
                title: "FSSAI Modification",
                link: "/serviceslist/fssai/fssai-modification",
                tag: "Change in Business",
                desc: "Update your address, ownership structure, product category, or business name on the FSSAI portal. All modifications handled accurately and promptly.",
              },
              {
                icon: "📊",
                title: "FSSAI Annual Return Filing",
                link: "/serviceslist/fssai/fssai-annual-return",
                tag: "Yearly Compliance",
                desc: "File mandatory Form D1 and D2 annual returns for State and Central license holders by May 31 each year. Avoid non-compliance penalties with our timely service.",
              },
              {
                icon: "⚖️",
                title: "FSSAI Notice Reply",
                link: "/serviceslist/fssai/fssai-notice-reply",
                tag: "Legal Protection",
                desc: "Received an improvement notice or suspension order? Our legal and compliance team drafts a professional, documented reply to protect your business license.",
              },
              {
                icon: "🔍",
                title: "FSSAI License Search & Verification",
                link: "/serviceslist/fssai/fssai-search",
                tag: "Free Tool",
                desc: "Verify the validity and status of any FSSAI license number instantly. Essential for vendor due diligence, e-commerce onboarding, and supply chain audits.",
              },
            ].map((s) => (
              <div key={s.title} className="relative border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white flex flex-col">
                <span className="absolute top-4 right-4 text-xs bg-[#00416a]/10 text-[#00416a] font-semibold px-3 py-1 rounded-full">{s.tag}</span>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#00416a] mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                <Link
                  href={s.link}
                  className="mt-5 inline-flex items-center gap-2 text-[#00416a] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* DOCUMENTS REQUIRED */}
        <section id="documents-required">
          <SectionLabel text="Paperwork Checklist" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Documents Required for FSSAI Registration
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Document requirements vary by license type. Below is a comprehensive checklist to help you get started.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                type: "Basic Registration",
                color: "border-green-400",
                badge: "bg-green-50 text-green-700",
                docs: [
                  "Aadhaar Card / Voter ID",
                  "Passport-size Photograph",
                  "Proof of Business Premises",
                  "Nature of Business Declaration",
                  "List of Food Products",
                ],
              },
              {
                type: "State License",
                color: "border-blue-400",
                badge: "bg-blue-50 text-blue-700",
                docs: [
                  "PAN Card of Business / Owner",
                  "GST Registration Certificate",
                  "Partnership Deed / MOA & AOA",
                  "Municipal NOC or Trade License",
                  "Water Testing Report (if dairy)",
                  "Blueprint / Layout of Premises",
                ],
              },
              {
                type: "Central License",
                color: "border-[#00416a]",
                badge: "bg-[#00416a]/10 text-[#00416a]",
                docs: [
                  "All State License Documents",
                  "IE Code (for import/export)",
                  "Food Safety Management Plan",
                  "Turnover Certificate from CA",
                  "Board Resolution (Companies)",
                  "Factory License (Manufacturing)",
                  "Medical Fitness Certificates (Staff)",
                ],
              },
            ].map((cat) => (
              <div key={cat.type} className={`border-t-4 ${cat.color} bg-white rounded-2xl p-6 shadow-sm`}>
                <p className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 ${cat.badge}`}>{cat.type}</p>
                <ul className="space-y-3">
                  {cat.docs.map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#00416a] font-bold mt-0.5">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section id="our-process">
          <SectionLabel text="How We Work" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Our 5-Step FSSAI Registration Process
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Our structured process ensures zero errors, faster approvals, and full regulatory compliance at every stage.
          </p>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
            <div className="space-y-10">
              {[
                {
                  step: "01",
                  title: "Free Eligibility Assessment",
                  desc: "Our consultant evaluates your business type, turnover, and operational scope to determine the correct FSSAI category — Basic, State, or Central. This critical first step prevents costly re-applications.",
                },
                {
                  step: "02",
                  title: "Document Collection & Verification",
                  desc: "We provide a tailored document checklist and review every document for accuracy before submission. Our team pre-checks all paperwork to eliminate rejection risk from incomplete or incorrect filings.",
                },
                {
                  step: "03",
                  title: "Online Application Filing",
                  desc: "We file your application directly on the official FSSAI Food Licensing and Registration System (FLRS) portal with all required details, product categories, and supporting documents attached.",
                },
                {
                  step: "04",
                  title: "Government Follow-Up & Inspection Support",
                  desc: "For State and Central licenses, we coordinate with the assigned food safety officer, respond to queries, prepare your premises for inspection, and ensure smooth department interactions.",
                },
                {
                  step: "05",
                  title: "License Delivery & Ongoing Compliance",
                  desc: "Upon approval, we deliver your FSSAI certificate and set up renewal reminders. We also provide ongoing support for annual return filing, modifications, and regulatory updates.",
                },
              ].map((step, i) => (
                <div key={step.step} className="relative md:pl-16 flex gap-6 items-start">
                  <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm flex-shrink-0 z-10 border-4 border-white shadow-md">
                    {i + 1}
                  </div>
                  <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1 group">
                    <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">Step {step.step}</span>
                    <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PENALTY SECTION */}
        <section id="penalties" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
          <SectionLabel text="Compliance Risk" />
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            Penalties for Non-Compliance with FSSAI Regulations
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Ignoring FSSAI compliance can have serious financial and legal consequences. Under the FSS Act, penalties are
            clearly defined and strictly enforced by food safety officers during inspections.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { offence: "Operating without FSSAI License", penalty: "Up to ₹5,00,000" },
              { offence: "Misbranding or Sub-standard Food", penalty: "Up to ₹3,00,000" },
              { offence: "Unhygienic / Unsafe Food Preparation", penalty: "Up to ₹1,00,000" },
              { offence: "Non-filing of Annual Returns", penalty: "₹100/day late fee" },
              { offence: "Non-compliance with Improvement Notice", penalty: "License Suspension" },
              { offence: "Adulteration Causing Injury/Death", penalty: "Criminal Prosecution" },
            ].map((p) => (
              <div key={p.offence} className="bg-white border border-red-100 rounded-xl p-5">
                <p className="text-sm text-gray-700 mb-2">{p.offence}</p>
                <p className="font-bold text-red-600 text-base">{p.penalty}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOCAL SEO */}
        <section id="cities-served">
          <SectionLabel text="Our Reach" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            FSSAI Services Across India — Local Experts, National Reach
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Taxvio has a strong on-ground presence in <strong>Khatauli</strong> and <strong>Muzaffarnagar</strong>,
            serving food businesses across UP since our founding. Our team also provides FSSAI registration and compliance
            services in <strong>Noida</strong>, <strong>Delhi NCR</strong>, <strong>Ghaziabad</strong>,
            <strong> Meerut</strong>, and <strong>Mumbai</strong>. No matter where your food business operates, our
            consultants ensure smooth, hassle-free compliance with state-specific requirements and local food safety authority
            guidelines.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { city: "Khatauli", icon: "📍" },
              { city: "Muzaffarnagar", icon: "📍" },
              { city: "Noida", icon: "📍" },
              { city: "Delhi NCR", icon: "📍" },
              { city: "Meerut", icon: "📍" },
              { city: "Mumbai", icon: "📍" },
            ].map((c) => (
              <div key={c.city} className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default">
                {c.icon} {c.city}
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-taxvio">
          <SectionLabel text="Our Advantage" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Why Food Businesses Choose Taxvio for FSSAI Compliance
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Over 500 food businesses have trusted Taxvio for FSSAI services. Here is what makes us different.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🎓", title: "CA-Supervised Process", desc: "Every FSSAI application is reviewed by our Chartered Accountant team for accuracy and compliance before submission." },
              { icon: "⚡", title: "Faster Turnaround", desc: "We use dedicated FSSAI portals and pre-verified document checklists to reduce processing time significantly." },
              { icon: "🔒", title: "100% Data Confidentiality", desc: "Your business documents, financial data, and personal information are handled with strict confidentiality and security." },
              { icon: "📞", title: "Dedicated Support Manager", desc: "Every client gets a dedicated relationship manager who handles queries, follow-ups, and updates personally." },
              { icon: "📆", title: "Proactive Renewal Reminders", desc: "We set automated reminders 60 days before license expiry, so you never face penalties for lapsed registrations." },
              { icon: "💼", title: "End-to-End Service", desc: "From new registration to annual returns, modifications, and notice replies — we handle the complete FSSAI lifecycle." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl border bg-white hover:shadow-md transition">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#00416a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <SectionLabel text="FAQs" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
            Frequently Asked Questions on FSSAI Registration
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "Is FSSAI registration mandatory for a home-based food business?",
                a: "Yes. Even home-based food businesses, tiffin services, and home bakers selling online are required to obtain at minimum FSSAI Basic Registration. Selling food without FSSAI registration is an offence under the FSS Act, 2006.",
              },
              {
                q: "What is the difference between FSSAI Registration and FSSAI License?",
                a: "FSSAI Registration (Form A) is for petty food businesses with turnover below ₹12 lakhs per year. FSSAI License (Form B) is required for medium and large food businesses with higher turnover. The application process, fees, and compliance requirements differ significantly.",
              },
              {
                q: "When should I renew my FSSAI license?",
                a: "Your FSSAI license should be renewed at least 30 days before the expiry date. Late renewal attracts a penalty of ₹100 per day. Taxvio sends proactive renewal reminders and completes the process well before the deadline.",
              },
              {
                q: "What happens if I don't file the FSSAI Annual Return?",
                a: "Annual return (Form D1/D2) is mandatory for State and Central license holders and must be filed by May 31 each year. Failure to file attracts penalties of ₹100 per day of delay and may trigger a compliance notice from the food authority.",
              },
              {
                q: "Can Taxvio help me respond to an FSSAI improvement notice?",
                a: "Yes. Our team specialises in drafting legally sound, evidence-backed replies to FSSAI improvement notices and suspension orders. Prompt and proper response to notices is critical to protecting your license status.",
              },
              {
                q: "How long does FSSAI registration take with Taxvio?",
                a: "Basic Registration is typically completed in 7–10 working days. State Licenses take 30–60 working days, and Central Licenses may take 60–90 working days depending on inspection scheduling and government processing speed.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                  <span>{faq.q}</span>
                  <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="cta">
          <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center lg:text-left">
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">Ready to Get Started?</p>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Ensure Complete FSSAI Compliance Today
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Avoid penalties, suspension, or license rejection. Get expert FSSAI assistance from Taxvio compliance
                  professionals — trusted by 500+ food businesses across India.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="tel:+919999999999"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                >
                  📞 Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>

      </article>

      <Footar />

      {/* ── SCHEMA MARKUP ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is FSSAI registration mandatory for a home-based food business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Even home-based food businesses, tiffin services, and home bakers selling online are required to obtain at minimum FSSAI Basic Registration under the Food Safety and Standards Act, 2006.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between FSSAI Registration and FSSAI License?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FSSAI Registration (Form A) is for petty food businesses with turnover below ₹12 lakhs per year. FSSAI License (Form B) is required for medium and large food businesses.",
                },
              },
              {
                "@type": "Question",
                name: "When should I renew my FSSAI license?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your FSSAI license should be renewed at least 30 days before the expiry date to avoid a penalty of ₹100 per day.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I don't file the FSSAI Annual Return?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Annual return (Form D1/D2) must be filed by May 31 each year. Failure attracts penalties of ₹100 per day and may trigger a compliance notice.",
                },
              },
              {
                "@type": "Question",
                name: "How long does FSSAI registration take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Basic Registration takes 7–10 working days. State Licenses take 30–60 working days, and Central Licenses may take 60–90 working days.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Taxvio – FSSAI Registration Services",
            description:
              "Complete FSSAI registration, renewal, modification, annual return filing and notice reply services across India.",
            url: "https://taxvio.in/serviceslist/fssai",
            areaServed: ["Khatauli", "Muzaffarnagar", "Noida", "Delhi", "Meerut", "Mumbai", "India"],
            serviceType: "FSSAI Compliance & Food License Services",
          }),
        }}
      />
    </main>
  );
}

/* ─────────────────────────── COMPONENTS ─────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}