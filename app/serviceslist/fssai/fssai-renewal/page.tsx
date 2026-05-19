import Footar from "@/components/Footar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FSSAI License Renewal Online in India | Renew Food License | Taxvio",
  description:
    "Renew your FSSAI Basic, State or Central food license online before expiry. Avoid ₹100/day penalties and business disruption. Expert FSSAI renewal services in Khatauli, Muzaffarnagar, Noida, Delhi & Mumbai.",
  keywords:
    "FSSAI Renewal Online, Food License Renewal India, Renew FSSAI License, FSSAI Renewal Khatauli, FSSAI Renewal Muzaffarnagar, FSSAI Renewal Noida, FSSAI Renewal Delhi, FSSAI Basic Renewal, FSSAI State License Renewal, FSSAI Central License Renewal",
  openGraph: {
    title: "FSSAI License Renewal Online | Taxvio",
    description:
      "Expert FSSAI renewal services across India. Avoid daily penalties and business disruption with Taxvio's CA-supervised renewal process.",
    type: "website",
  },
};

export default function FSSAIRenewalPage() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
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
            <Link href="/serviceslist/fssai" className="hover:text-white transition">FSSAI</Link>
            <span>/</span>
            <span className="text-white">Renewal</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                🔄 FSSAI License Renewal
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                FSSAI License Renewal<br />
                <span className="text-[#7ecbf0]">Online — Fast &</span><br />
                Penalty-Free
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                Your FSSAI food license must be renewed <strong className="text-white">at least 30 days before expiry</strong>.
                Operating with an expired license attracts ₹100/day penalties and risks business closure.
                Taxvio handles your complete FSSAI renewal — from document review to portal filing and government follow-up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                >
                  Renew My License Now →
                </Link>
                <Link
                  href="tel:+919999999999"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                >
                  📞 Talk to an Expert
                </Link>
              </div>
            </div>

            {/* urgency card */}
            <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Renewal Snapshot</p>
              <ul className="space-y-4 text-sm text-gray-200">
                {[
                  ["⏰", "Apply 30 days before expiry"],
                  ["💸", "₹100/day late penalty"],
                  ["⚠️", "Expired = Illegal Operation"],
                  ["📋", "Valid for 1 to 5 Years"],
                  ["🔁", "All 3 license types covered"],
                  ["✅", "CA-supervised filing"],
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
            { number: "500+", label: "Renewals Processed", icon: "🔄" },
            { number: "₹100/day", label: "Penalty Avoided Per Client", icon: "💰" },
            { number: "7+ Years", label: "FSSAI Compliance Experience", icon: "📅" },
            { number: "PAN India", label: "Service Coverage", icon: "🗺️" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-2xl font-extrabold text-[#00416a] mb-1">{s.number}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
          {[
            "✔ Proactive Expiry Tracking",
            "✔ CA-Supervised Process",
            "✔ Zero Rejection Guarantee",
            "✔ Fast 7-Day Processing",
          ].map((t) => (
            <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* WHAT IS RENEWAL */}
        <section id="what-is-fssai-renewal">
          <SectionLabel text="Understanding Renewal" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
            What Is FSSAI License Renewal and Why Is It Mandatory?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <p>
                <strong>FSSAI License Renewal</strong> is the official process of extending the validity of an existing food
                license or registration under the Food Safety and Standards Authority of India. Every FSSAI license —
                whether Basic, State, or Central — is issued for a period of <strong>1 to 5 years</strong> at the time
                of initial registration. Once this period expires, the license must be renewed to maintain legal food
                business operations.
              </p>
              <p>
                The renewal process is governed by the <strong>Food Safety and Standards Act, 2006</strong> and the
                Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011. Renewal
                is not automatic — you must actively apply and receive confirmation from the relevant food authority
                before continuing operations.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Under FSSAI guidelines, the renewal application must be submitted <strong>at least 30 days before
                the expiry date</strong> on your current certificate. Timely renewal ensures business continuity,
                protects your brand reputation, and keeps you compliant with food safety regulations during audits,
                inspections, or e-commerce platform verifications.
              </p>
              <p>
                At <strong>Taxvio</strong>, we take a proactive approach to FSSAI renewal — we track your license
                expiry 60 days in advance, prepare your documentation, and complete the filing well before deadlines.
                Our team handles everything so you never face a lapsed license situation.
              </p>
            </div>
          </div>
        </section>

        {/* WHO NEEDS */}
        <section id="who-needs-renewal">
          <SectionLabel text="Applicability" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
            Who Needs to Renew Their FSSAI License?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📜", title: "Basic Registration Holders", desc: "Petty food vendors, home bakers, and small retailers with turnover up to ₹12 lakhs." },
              { icon: "🏢", title: "State License Holders", desc: "Restaurants, hotels, medium manufacturers, and businesses with turnover up to ₹20 crores." },
              { icon: "🏭", title: "Central License Holders", desc: "Large manufacturers, importers, exporters, and multi-state food businesses." },
              { icon: "☁️", title: "Cloud Kitchens & Caterers", desc: "Online food delivery kitchens, tiffin services, and event catering companies." },
              { icon: "🛒", title: "Retailers & Distributors", desc: "Grocery stores, supermarkets, wholesalers, and food distribution companies." },
              { icon: "🌐", title: "Online Food Sellers", desc: "D2C food brands, Zomato/Swiggy partners, and Amazon/Flipkart food sellers." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition group">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-[#00416a] mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE — WHEN TO APPLY */}
        <section id="when-to-apply">
          <SectionLabel text="Renewal Timeline" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            When Should You Apply for FSSAI Renewal?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Timing is everything with FSSAI renewal. Missing the 30-day window triggers daily penalties and risks
            cancellation. Here is the recommended renewal timeline for every food business:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { phase: "60 Days Before Expiry", color: "border-green-400 bg-green-50", badge: "bg-green-100 text-green-700", icon: "🟢", label: "Ideal Time", desc: "Begin document collection and compliance review. Taxvio sends your first renewal reminder at this stage." },
              { phase: "30 Days Before Expiry", color: "border-yellow-400 bg-yellow-50", badge: "bg-yellow-100 text-yellow-700", icon: "🟡", label: "Deadline", desc: "FSSAI mandated last date to submit renewal application without penalty. We file your application here at the latest." },
              { phase: "0–30 Days (Late Filing)", color: "border-orange-400 bg-orange-50", badge: "bg-orange-100 text-orange-700", icon: "🟠", label: "Penalty Zone", desc: "₹100 per day penalty begins. Application still accepted but every day of delay costs money." },
              { phase: "License Expired", color: "border-red-400 bg-red-50", badge: "bg-red-100 text-red-700", icon: "🔴", label: "Critical Risk", desc: "Operating with an expired license is illegal. Faces inspection, suspension, and possible license cancellation." },
            ].map((t) => (
              <div key={t.phase} className={`border-t-4 ${t.color} rounded-2xl p-6`}>
                <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${t.badge}`}>{t.label}</span>
                <p className="text-sm font-bold text-gray-800 mb-2">{t.phase}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DOCUMENTS */}
        <section id="documents-required">
          <SectionLabel text="Paperwork Checklist" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Documents Required for FSSAI License Renewal
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            The documents required vary slightly based on your license type. Our team reviews your existing license
            and prepares a tailored checklist. Below is the standard requirement for all three categories.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                type: "Basic Registration",
                color: "border-green-400",
                badge: "bg-green-50 text-green-700",
                docs: [
                  "Existing FSSAI Registration Certificate",
                  "Aadhaar Card / Voter ID of Owner",
                  "Updated Business Address Proof",
                  "Declaration Form (self-attested)",
                  "List of Food Products (updated)",
                ],
              },
              {
                type: "State License",
                color: "border-blue-400",
                badge: "bg-blue-50 text-blue-700",
                docs: [
                  "Existing FSSAI State License Copy",
                  "Updated PAN & GST Certificate",
                  "Food Safety Management Plan",
                  "Premises Ownership / Rent Agreement",
                  "Updated Product List with HSN Codes",
                  "Turnover Proof for Previous Year",
                ],
              },
              {
                type: "Central License",
                color: "border-[#00416a]",
                badge: "bg-[#00416a]/10 text-[#00416a]",
                docs: [
                  "All State License Renewal Documents",
                  "CA-Certified Turnover Statement",
                  "Updated IE Code (if applicable)",
                  "Board Resolution for Renewal",
                  "Revised Food Safety Management Plan",
                  "Equipment & Machinery List",
                  "Water Analysis Report (if applicable)",
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

        {/* PROCESS */}
        <section id="renewal-process">
          <SectionLabel text="How We Work" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Taxvio's 5-Step FSSAI Renewal Process
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Our structured renewal process ensures accuracy, speed, and zero compliance gaps — from expiry review
            to renewed certificate delivery.
          </p>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
            <div className="space-y-10">
              {[
                {
                  step: "01",
                  title: "License Expiry Review & Eligibility Check",
                  desc: "We retrieve your existing FSSAI certificate details, verify the expiry date, confirm your current license category (Basic / State / Central), and assess whether any modifications or upgrades are required before renewal.",
                },
                {
                  step: "02",
                  title: "Compliance Audit & Documentation",
                  desc: "Our compliance team reviews your food safety records, turnover figures, business premises, and product list to ensure all renewal documents are complete, updated, and match your current business profile.",
                },
                {
                  step: "03",
                  title: "Online Renewal Application Filing",
                  desc: "We file your renewal application on the official FSSAI Food Licensing and Registration System (FLRS) portal with all required documents, updated product categories, and accurate business details attached.",
                },
                {
                  step: "04",
                  title: "Government Follow-Up & Query Resolution",
                  desc: "Our team actively follows up with the designated food safety officer for timely processing, promptly responds to any government queries or clarification requests, and keeps you updated throughout.",
                },
                {
                  step: "05",
                  title: "Renewed Certificate Delivery & Next Reminder Set",
                  desc: "Once your renewed FSSAI license is issued, we deliver the digital certificate to you immediately and set a reminder for your next renewal — so you are always ahead of compliance deadlines.",
                },
              ].map((step, i) => (
                <div key={step.step} className="relative md:pl-16 flex gap-6 items-start">
                  <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm flex-shrink-0 z-10 border-4 border-white shadow-md">
                    {i + 1}
                  </div>
                  <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1">
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
            Penalties for Late or Non-Renewal of FSSAI License
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            The FSSAI takes non-renewal seriously. Food safety officers actively inspect licensed premises,
            and an expired license during inspection can result in severe consequences beyond just the daily penalty.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { offence: "Late renewal application filing", penalty: "₹100 per day penalty" },
              { offence: "Operating with expired license", penalty: "Business suspension risk" },
              { offence: "Non-compliance found during inspection", penalty: "Improvement notice issued" },
              { offence: "Repeated non-compliance", penalty: "License cancellation" },
              { offence: "Selling food post-cancellation", penalty: "Criminal prosecution" },
              { offence: "Failure to respond to notices", penalty: "Court proceedings" },
            ].map((p) => (
              <div key={p.offence} className="bg-white border border-red-100 rounded-xl p-5">
                <p className="text-sm text-gray-700 mb-2">{p.offence}</p>
                <p className="font-bold text-red-600 text-base">{p.penalty}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-red-100 border border-red-200 rounded-2xl px-6 py-5 text-sm text-red-800 leading-relaxed">
            <strong>⚠️ Important:</strong> Even if your FSSAI license has already expired, you can still renew it
            — but you will be liable for the accumulated daily penalty from the expiry date. Taxvio helps you
            calculate, minimise, and navigate the penalty payment process along with the renewal filing.
          </div>
        </section>

        {/* COMPARISON — RENEWAL VS FRESH */}
        <section id="renewal-vs-fresh">
          <SectionLabel text="Renewal vs Fresh Registration" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            FSSAI Renewal vs Fresh Registration — What's the Difference?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Many business owners are unsure whether to renew their existing license or apply fresh. Here is a
            clear comparison to help you decide.
          </p>
          <div className="overflow-x-auto rounded-2xl border shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-[#00416a] text-white">
                <tr>
                  {["Particulars", "Renewal", "Fresh Registration"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Applicable When", "Existing license near/past expiry", "New business or new premises"],
                  ["License Number", "Existing number retained", "New 14-digit number issued"],
                  ["Processing Time", "Faster (7–15 working days)", "Standard (7–60 working days)"],
                  ["Govt. Fee", "Same as initial fee per year", "Same as initial registration fee"],
                  ["Inspection Required", "Usually not required", "May be required for State/Central"],
                  ["Documentation", "Minimal updates required", "Complete fresh documentation"],
                  ["Penalty Risk", "₹100/day if filed late", "None (new application)"],
                ].map(([label, renewal, fresh], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-medium text-gray-800">{label}</td>
                    <td className="px-5 py-4 text-gray-700">{renewal}</td>
                    <td className="px-5 py-4 text-gray-700">{fresh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* WHY TAXVIO */}
        <section id="why-taxvio">
          <SectionLabel text="Our Advantage" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Why Choose Taxvio for FSSAI License Renewal?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            We do not just file your renewal — we manage your entire compliance lifecycle proactively.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "⏰", title: "Proactive Expiry Tracking", desc: "We monitor your FSSAI license expiry date and send alerts 60 days in advance, ensuring you are never caught off guard by an expired license." },
              { icon: "🎓", title: "CA-Supervised Filing", desc: "Every renewal application is reviewed by our Chartered Accountant team for compliance accuracy before portal submission." },
              { icon: "⚡", title: "Fast 7-Day Processing", desc: "Our pre-verified document checklist and direct portal access speeds up Basic renewal in as little as 7 working days." },
              { icon: "🔒", title: "Zero Data Risk", desc: "All your business documents and financial data are handled with strict confidentiality protocols and secure data handling." },
              { icon: "🗺️", title: "Local Expertise, National Coverage", desc: "Deep expertise in Khatauli, Muzaffarnagar, and UP food authority processes — combined with PAN India service capability." },
              { icon: "💼", title: "Full Lifecycle Support", desc: "From renewal to annual return filing, modifications, and notice replies — Taxvio covers your entire FSSAI compliance journey." },
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

        {/* LOCAL SEO */}
        <section id="cities-served">
          <SectionLabel text="Our Reach" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            FSSAI Renewal Services Across India
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Taxvio has deep roots in <strong>Khatauli</strong> and <strong>Muzaffarnagar</strong> — helping local
            food businesses maintain uninterrupted compliance since our founding. We also provide FSSAI renewal
            services in <strong>Noida</strong>, <strong>Delhi NCR</strong>, <strong>Ghaziabad</strong>,
            <strong> Meerut</strong>, and <strong>Mumbai</strong>. Our team is familiar with region-specific food
            safety authority processes and timelines, ensuring faster approvals for businesses in these areas.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Khatauli", "Muzaffarnagar", "Noida", "Delhi NCR", "Meerut", "Mumbai"].map((city) => (
              <div key={city} className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default">
                📍 {city}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <SectionLabel text="FAQs" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
            Frequently Asked Questions — FSSAI Renewal
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "When should I apply for FSSAI license renewal?",
                a: "You should apply for FSSAI renewal at least 30 days before your license expiry date. Taxvio recommends starting the process 60 days early to allow time for document preparation and any corrections.",
              },
              {
                q: "What is the penalty for late FSSAI renewal?",
                a: "A penalty of ₹100 per day is charged for every day of delay beyond the 30-day advance renewal deadline. This continues to accumulate until the renewed license is issued. Taxvio can help calculate and manage your penalty liability.",
              },
              {
                q: "Can I operate my food business with an expired FSSAI license?",
                a: "No. Operating a food business with an expired FSSAI license is illegal under the Food Safety and Standards Act, 2006. It can lead to suspension of business operations, heavy penalties, and potential legal action during inspections.",
              },
              {
                q: "How long does FSSAI renewal take?",
                a: "Basic Registration renewal typically takes 7–10 working days. State License renewal takes 15–30 working days. Central License renewal may take 30–60 working days depending on inspection and government processing time.",
              },
              {
                q: "Can I change my license category during renewal?",
                a: "Yes. If your business has grown and your current license category no longer matches your turnover or scale, Taxvio will simultaneously process a modification (upgrade) along with renewal to ensure you are operating under the correct license type.",
              },
              {
                q: "Is FSSAI renewal possible if the license has already expired?",
                a: "Yes. Even after expiry, you can file for renewal. However, you will be liable for the accumulated daily penalty from the expiry date. Taxvio helps you navigate the expired renewal process, including penalty calculations and documentation.",
              },
              {
                q: "Does the license number change after renewal?",
                a: "No. Your existing 14-digit FSSAI license number is retained after renewal. Only the validity period is extended. This means your existing packaging, labels, and registrations with platforms remain valid.",
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

        {/* RELATED SERVICES */}
        <section id="related-services">
          <SectionLabel text="Explore More" />
          <h2 className="text-3xl font-bold text-[#00416a] mb-8">Related FSSAI Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "FSSAI Registration", icon: "📝", link: "/serviceslist/fssai/fssai-registration", desc: "New FSSAI license for your food business." },
              { title: "License Modification", icon: "✏️", link: "/serviceslist/fssai/fssai-modification", desc: "Update address, ownership, or product category." },
              { title: "Annual Return Filing", icon: "📊", link: "/serviceslist/fssai/fssai-annual-return", desc: "File Form D1/D2 for yearly compliance." },
              { title: "Notice Reply", icon: "⚖️", link: "/serviceslist/fssai/fssai-notice-reply", desc: "Respond to improvement or suspension notices." },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.link}
                className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-[#00416a] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                <span className="text-sm text-[#00416a] font-semibold group-hover:underline">Learn More →</span>
              </Link>
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
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">Don't Wait for Penalties</p>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Renew Your FSSAI License Before It Expires
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Every day of delay costs ₹100. Get your FSSAI renewal filed today with Taxvio's expert
                  compliance team — trusted by 500+ food businesses across India.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                >
                  Renew Now — Free Consultation
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
                name: "When should I apply for FSSAI license renewal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You should apply for FSSAI renewal at least 30 days before your license expiry date. Starting 60 days early is recommended.",
                },
              },
              {
                "@type": "Question",
                name: "What is the penalty for late FSSAI renewal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A penalty of ₹100 per day is charged for every day of delay beyond the 30-day advance renewal deadline.",
                },
              },
              {
                "@type": "Question",
                name: "Can I operate my food business with an expired FSSAI license?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Operating with an expired FSSAI license is illegal under the Food Safety and Standards Act, 2006, and can lead to business suspension and penalties.",
                },
              },
              {
                "@type": "Question",
                name: "How long does FSSAI renewal take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Basic Registration renewal takes 7–10 working days. State License renewal takes 15–30 working days. Central License renewal may take 30–60 working days.",
                },
              },
              {
                "@type": "Question",
                name: "Does the license number change after renewal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Your existing 14-digit FSSAI license number is retained after renewal. Only the validity period is extended.",
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
            name: "Taxvio – FSSAI License Renewal Services",
            description:
              "Expert FSSAI license renewal services for Basic, State and Central food license holders across India. CA-supervised, fast processing, proactive expiry tracking.",
            url: "https://taxvio.in/serviceslist/fssai/fssai-renewal",
            areaServed: ["Khatauli", "Muzaffarnagar", "Noida", "Delhi", "Meerut", "Mumbai", "India"],
            serviceType: "FSSAI License Renewal",
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