import Footar from "@/components/Footar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FSSAI License Search & Verification Online | Check Food License Status | Taxvio",
  description:
    "Search and verify any FSSAI license number online. Check if a food business license is active, expired, suspended or cancelled. Expert FSSAI compliance support in Khatauli, Muzaffarnagar, Noida, Delhi & Mumbai.",
  keywords:
    "FSSAI License Search, Verify FSSAI Number Online, Check FSSAI License Status, FSSAI License Verification India, FSSAI Number Check, Food License Validity Check, FSSAI Active Status, FSSAI Consultant Khatauli, FSSAI Verification Muzaffarnagar, Check Food License India",
  openGraph: {
    title: "FSSAI License Search & Verification Online | Taxvio",
    description:
      "Verify any FSSAI license number online. Check active, expired, or suspended status. Expert support when issues are found.",
    type: "website",
  },
};

export default function FSSAISearchPage() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          {/* breadcrumb */}
          <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/serviceslist" className="hover:text-white transition">Services</Link>
            <span>/</span>
            <Link href="/serviceslist/fssai" className="hover:text-white transition">FSSAI</Link>
            <span>/</span>
            <span className="text-white">License Search</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                🔍 FSSAI License Search & Verification
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                FSSAI License Search —<br />
                <span className="text-[#7ecbf0]">Verify Any Food</span><br />
                License Instantly
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                Every food business in India operates under a <strong className="text-white">14-digit FSSAI license number</strong>.
                Verifying this number confirms whether the business is legally authorized, whether the license is
                currently active, and whether it covers the correct product categories. Taxvio helps consumers,
                distributors, retailers, and food businesses perform FSSAI verification — and resolves any
                compliance issues found during the check.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                >
                  Get Compliance Help →
                </Link>
                <Link
                  href="tel:+919999999999"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                >
                  📞 Speak to an Expert
                </Link>
              </div>
            </div>

            {/* info card */}
            <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Quick Reference</p>
              <ul className="space-y-4 text-sm text-gray-200">
                {[
                  ["🔢", "14-digit FSSAI number required"],
                  ["🌐", "Free official portal verification"],
                  ["📋", "Shows active / expired / suspended"],
                  ["🏷️", "Reveals license type & category"],
                  ["📍", "Shows registered business address"],
                  ["⚠️", "Issues found? Taxvio resolves them"],
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
            { number: "14-Digit", label: "FSSAI License Number Format", icon: "🔢" },
            { number: "3 Types", label: "Basic, State & Central Licenses", icon: "📋" },
            { number: "Free", label: "Official Portal Verification", icon: "✅" },
            { number: "PAN India", label: "Compliance Support Coverage", icon: "🗺️" },
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
            "✔ Official Portal Guidance",
            "✔ Discrepancy Resolution Support",
            "✔ CA-Supervised Compliance",
            "✔ End-to-End Issue Resolution",
          ].map((t) => (
            <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* WHAT IS FSSAI SEARCH */}
        <section id="what-is-fssai-search">
          <SectionLabel text="Understanding FSSAI Verification" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
            What Is FSSAI License Search and How Does It Work?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <p>
                <strong>FSSAI License Search</strong> is a free online verification service provided by the Food Safety
                and Standards Authority of India. It allows any individual, business, or regulatory body to verify the
                authenticity and current status of a food business operator's FSSAI registration or license using the
                unique <strong>14-digit FSSAI license number</strong> printed on their certificate and food packaging.
              </p>
              <p>
                The FSSAI license number is structured to carry meaningful information — the first digit indicates the
                state code, the next digits identify the license category and issuing office, and the remaining digits
                are the unique business identifier. By searching this number on the official
                <strong> Food Licensing and Registration System (FLRS) portal</strong>, anyone can instantly
                verify whether a food business is legally authorized to operate.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                This verification tool is critical across multiple use cases — consumers verifying food brands before
                purchase, e-commerce platforms like Amazon and Flipkart onboarding new food sellers, institutional
                buyers checking supplier credentials, and food aggregators like Zomato and Swiggy auditing their
                restaurant partners.
              </p>
              <p>
                At <strong>Taxvio</strong>, we go beyond just guiding you through the verification process.
                If the search reveals any compliance issue — expired license, wrong business details, suspended
                status, or incorrect product category — our FSSAI specialists step in immediately to identify
                the problem and resolve it through the correct regulatory channel.
              </p>
            </div>
          </div>
        </section>

        {/* WHO NEEDS TO VERIFY */}
        <section id="who-needs-verification">
          <SectionLabel text="Who Should Verify" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
            Who Needs to Search or Verify FSSAI License Numbers?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "👤", title: "Consumers", desc: "Verify that a food brand or restaurant you buy from holds a valid, active FSSAI license before purchasing." },
              { icon: "🏪", title: "Retailers & Distributors", desc: "Verify supplier credentials before onboarding to avoid stocking or distributing products from unlicensed manufacturers." },
              { icon: "📦", title: "E-Commerce Platforms", desc: "Amazon, Flipkart, and other marketplaces require verified FSSAI numbers before allowing food product listings." },
              { icon: "🍽️", title: "Food Aggregators", desc: "Zomato, Swiggy, and other food delivery platforms verify FSSAI license status during restaurant partner onboarding." },
              { icon: "🏭", title: "Manufacturers & Importers", desc: "Verify your own license status to confirm details match your current business profile before audits or exports." },
              { icon: "🏦", title: "Investors & Due Diligence", desc: "Verify food business compliance credentials during investment, acquisition, or business partnership evaluations." },
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

        {/* HOW TO SEARCH */}
        <section id="how-to-verify">
          <SectionLabel text="Step-by-Step Guide" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            How to Check FSSAI License Number Online — Step by Step
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            FSSAI license verification is a simple process on the official government portal. Here is exactly
            how to do it — and what to look for in the results.
          </p>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Visit the Official FSSAI Verification Portal",
                  desc: "Go to the official Food Licensing and Registration System (FLRS) portal at foscos.fssai.gov.in or the dedicated license search page at fssai.gov.in. These are the only authorised government portals for FSSAI verification — do not rely on third-party websites.",
                },
                {
                  step: "02",
                  title: "Navigate to the License Search Section",
                  desc: "On the portal homepage, look for the 'License/Registration Search' or 'Verify License' option. This is available without login — no account creation is needed to perform a basic verification check.",
                },
                {
                  step: "03",
                  title: "Enter the 14-Digit FSSAI License Number",
                  desc: "Type the complete 14-digit FSSAI license or registration number exactly as printed on the food business certificate or food product packaging. Even a single incorrect digit will return no results or incorrect information.",
                },
                {
                  step: "04",
                  title: "Complete the Captcha Verification",
                  desc: "Enter the captcha code displayed on screen to proceed. This is a standard security measure on the government portal to prevent automated bulk queries.",
                },
                {
                  step: "05",
                  title: "Review the License Details and Status",
                  desc: "The portal displays the complete license record including the business name, license type, registered address, product categories, validity period, and current status. Review all fields carefully for accuracy and active status.",
                },
                {
                  step: "06",
                  title: "Act on Any Issues Found",
                  desc: "If the license shows expired, suspended, cancelled, or contains incorrect details, contact Taxvio immediately. Our team will identify the correct remediation path — whether that is a renewal, modification, notice reply, or fresh registration.",
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

        {/* WHAT DETAILS APPEAR */}
        <section id="search-results-details">
          <SectionLabel text="What the Search Shows" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            What Information Is Displayed in FSSAI Search Results?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            When you search a valid FSSAI license number, the portal displays a comprehensive record of
            the food business. Here is what each field means and why it matters.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                field: "Business Operator Name",
                icon: "👤",
                meaning: "The registered name of the Food Business Operator (FBO) — individual, partnership, or company.",
                checkFor: "Verify this matches the name on packaging or invoices.",
              },
              {
                field: "14-Digit License Number",
                icon: "🔢",
                meaning: "The unique identifier assigned by FSSAI. The first digit is the state code; subsequent digits identify the office and business.",
                checkFor: "Confirms the number is genuine and matches official records.",
              },
              {
                field: "License Type",
                icon: "📋",
                meaning: "Indicates whether the business holds a Basic Registration, State License, or Central License.",
                checkFor: "Verify the license type matches the scale of operations described.",
              },
              {
                field: "Validity Period",
                icon: "📅",
                meaning: "The start and end dates of the current license registration period (1 to 5 years from issuance).",
                checkFor: "Confirm the license is currently valid and has not lapsed.",
              },
              {
                field: "Registered Business Address",
                icon: "📍",
                meaning: "The official address of the food business premises as registered with FSSAI.",
                checkFor: "Match with actual operating address — discrepancies need modification.",
              },
              {
                field: "Current Status",
                icon: "🟢",
                meaning: "Shows the real-time status: Active, Expired, Suspended, or Cancelled.",
                checkFor: "Only 'Active' status confirms legal authorization to operate.",
              },
            ].map((item) => (
              <div key={item.field} className="bg-white border rounded-2xl p-6 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-[#00416a]">{item.field}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.meaning}</p>
                <div className="bg-[#00416a]/5 border border-[#00416a]/10 rounded-xl px-4 py-2">
                  <p className="text-xs font-semibold text-[#00416a]">✓ What to check: {item.checkFor}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LICENSE STATUS MEANINGS */}
        <section id="license-status">
          <SectionLabel text="Status Definitions" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Understanding FSSAI License Status Results
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            The status field is the most critical piece of information in the FSSAI search result.
            Here is what each status means and what action is required.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                status: "✅ Active",
                color: "border-green-400 bg-green-50",
                badge: "bg-green-100 text-green-800",
                meaning: "The food business holds a valid, currently active FSSAI license within its validity period. The business is legally authorized to operate, manufacture, distribute, or sell food products.",
                action: "No immediate action required. Monitor expiry date and renew 30–60 days before it lapses.",
                actionColor: "bg-green-100 text-green-800",
              },
              {
                status: "⏰ Expired",
                color: "border-orange-400 bg-orange-50",
                badge: "bg-orange-100 text-orange-800",
                meaning: "The food license validity period has lapsed. The food business is currently operating without a valid FSSAI license, which is illegal under the FSS Act, 2006. A ₹100/day penalty is accumulating.",
                action: "Apply for FSSAI renewal immediately. Taxvio can process your renewal application and manage penalty calculation.",
                actionColor: "bg-orange-100 text-orange-800",
              },
              {
                status: "⛔ Suspended",
                color: "border-red-400 bg-red-50",
                badge: "bg-red-100 text-red-800",
                meaning: "The food safety authority has temporarily suspended the license due to non-compliance. The business must cease all food operations immediately. Continued operation is a criminal offence.",
                action: "Engage a compliance professional urgently. Taxvio will prepare a reinstatement application, compliance documentation, and coordinate with the food authority for license restoration.",
                actionColor: "bg-red-100 text-red-800",
              },
              {
                status: "❌ Cancelled",
                color: "border-red-600 bg-red-100",
                badge: "bg-red-200 text-red-900",
                meaning: "The food license has been permanently cancelled by the authority following serious violations or failure to comply with suspension orders. The business cannot legally operate under this license.",
                action: "Legal consultation is required. In some cases, cancellation can be appealed before the Food Safety Appellate Tribunal. Alternatively, a fresh FSSAI registration may be pursued.",
                actionColor: "bg-red-200 text-red-900",
              },
            ].map((item) => (
              <div key={item.status} className={`border-l-4 ${item.color} rounded-2xl p-7`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${item.badge}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.meaning}</p>
                <div className={`rounded-xl px-4 py-3 ${item.actionColor}`}>
                  <p className="text-xs font-semibold">→ Required Action: {item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMMON ISSUES */}
        <section id="common-issues">
          <SectionLabel text="Issues Found During Search" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Common Issues Discovered During FSSAI License Verification
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            A routine FSSAI search often reveals compliance issues that food business operators are unaware of.
            Here are the most common problems — and how Taxvio resolves each one.
          </p>
          <div className="overflow-x-auto rounded-2xl border shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-[#00416a] text-white">
                <tr>
                  {["Issue Found", "Cause", "Risk", "Taxvio Solution"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Expired License", "Renewal not filed on time", "Illegal operation, ₹100/day penalty", "FSSAI Renewal Application"],
                  ["Wrong Business Name", "Name change not updated with FSSAI", "Mismatch in packaging & legal docs", "FSSAI License Modification"],
                  ["Wrong Address", "Premises shifted without FSSAI update", "Inspection failure, notice risk", "FSSAI License Modification"],
                  ["Suspended Status", "Non-compliance or ignored notices", "Cannot operate legally", "Notice Reply + Reinstatement"],
                  ["Wrong Product Category", "Products added without modifying license", "Unauthorized category penalty", "FSSAI License Modification"],
                  ["Annual Return Not Filed", "Compliance missed for Form D1/D2", "Penalty & notice issuance", "FSSAI Annual Return Filing"],
                  ["No Record Found", "License number invalid or unregistered", "Operating without FSSAI", "Fresh FSSAI Registration"],
                ].map(([issue, cause, risk, solution], i) => (
                  <tr key={issue} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-medium text-gray-800">{issue}</td>
                    <td className="px-5 py-4 text-gray-600">{cause}</td>
                    <td className="px-5 py-4 text-red-600 font-medium">{risk}</td>
                    <td className="px-5 py-4 text-[#00416a] font-semibold">{solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* HOW TAXVIO HELPS */}
        <section id="how-taxvio-helps">
          <SectionLabel text="Issue Resolution" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            How Taxvio Helps After Your FSSAI License Search
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Finding an issue during FSSAI verification is only step one. Getting it resolved quickly and
            correctly is what protects your business. Taxvio handles every type of FSSAI compliance issue.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔄",
                title: "FSSAI Renewal",
                link: "/serviceslist/fssai/fssai-renewal",
                tag: "Expired License",
                desc: "If your search shows an expired license, we file your renewal application immediately, calculate accumulated penalties, and restore your active status.",
              },
              {
                icon: "✏️",
                title: "License Modification",
                link: "/serviceslist/fssai/fssai-modification",
                tag: "Wrong Details",
                desc: "If the search reveals incorrect name, address, or product category on record, we handle the complete modification process to align your license with current business reality.",
              },
              {
                icon: "⚖️",
                title: "Notice Reply Assistance",
                link: "/serviceslist/fssai/fssai-notice-reply",
                tag: "Suspended License",
                desc: "If your license is suspended, our legal and compliance team drafts a reinstatement application and professionally structured notice reply to restore operations.",
              },
              {
                icon: "📊",
                title: "Annual Return Filing",
                link: "/serviceslist/fssai/fssai-annual-return",
                tag: "Return Not Filed",
                desc: "If non-filing of Form D1/D2 is flagged, we prepare and submit the pending annual returns and clear your compliance record with the food authority.",
              },
              {
                icon: "📝",
                title: "Fresh Registration",
                link: "/serviceslist/fssai/fssai-registration",
                tag: "No Record Found",
                desc: "If no record exists for your business, or if a cancelled license needs to be replaced, we handle the complete fresh FSSAI registration process from scratch.",
              },
              {
                icon: "🔍",
                title: "Compliance Audit",
                link: "/contact",
                tag: "Full Review",
                desc: "Not sure what the issue is? Our experts conduct a complete FSSAI compliance audit — reviewing your license, returns, product categories, and labeling for full compliance.",
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

        {/* WHY VERIFY */}
        <section id="why-verification-important">
          <SectionLabel text="Why It Matters" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Why FSSAI License Verification Is Essential for Every Stakeholder
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            FSSAI verification is not just a technical formality — it has real business, legal, and
            safety implications for every party in the food supply chain.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🛡️", title: "Consumer Protection", desc: "Verifying a food brand's FSSAI license ensures the business has met minimum food safety and hygiene standards required by law, protecting you from unsafe or substandard food products." },
              { icon: "🤝", title: "Supply Chain Due Diligence", desc: "Distributors and wholesalers who verify supplier FSSAI credentials protect themselves from legal liability for distributing products of unlicensed or non-compliant manufacturers." },
              { icon: "🛒", title: "E-Commerce Compliance", desc: "Online marketplaces are required to ensure all food sellers on their platform hold valid FSSAI registrations. Sellers with expired or invalid licenses face delisting and account suspension." },
              { icon: "📑", title: "Audit & Inspection Readiness", desc: "Food businesses that proactively verify and maintain their FSSAI license status are better prepared for surprise inspections and government audits, reducing non-compliance risk significantly." },
              { icon: "🏦", title: "Business Transactions", desc: "Investors, lenders, and acquisition partners routinely verify FSSAI compliance as part of due diligence. An active, accurate FSSAI record adds credibility and business value." },
              { icon: "🌍", title: "Export Authorization", desc: "Indian food exporters need a valid Central FSSAI license with accurate product categories to obtain necessary export permits and APEDA certification. Verification ensures export readiness." },
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
            FSSAI Verification & Compliance Support Across India
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Taxvio provides FSSAI license verification guidance and post-search compliance resolution services
            to food businesses in <strong>Khatauli</strong>, <strong>Muzaffarnagar</strong>, <strong>Noida</strong>,
            <strong> Delhi NCR</strong>, <strong>Meerut</strong>, <strong>Ghaziabad</strong>, and
            <strong> Mumbai</strong>. Whether you have found an issue during a routine check or need a complete
            FSSAI compliance audit, our team is available to guide and resolve your situation swiftly.
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
            Frequently Asked Questions — FSSAI License Search
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "How can I verify an FSSAI license number online?",
                a: "Visit the official FSSAI portal at foscos.fssai.gov.in, navigate to the license search section, enter the complete 14-digit FSSAI license number, complete the captcha, and view the license record. The result shows the business name, license type, validity period, and current status.",
              },
              {
                q: "What does a 14-digit FSSAI number mean?",
                a: "The 14-digit FSSAI license number is a structured unique identifier. The first two digits indicate the state code, the next two identify the license category and year, and the remaining digits form the unique business registration number. This structure means every FSSAI number carries traceable information about the issuing state and business.",
              },
              {
                q: "What if the FSSAI license search shows 'No Record Found'?",
                a: "A 'No Record Found' result typically means the license number entered is incorrect, the business has not obtained FSSAI registration, or the registration was recently issued and not yet updated on the portal. Double-check the number. If it is correct and no record exists, the business may be operating illegally. Contact Taxvio for a compliance assessment.",
              },
              {
                q: "Is FSSAI license verification mandatory for consumers?",
                a: "Verification is not legally mandatory for consumers, but it is strongly recommended — especially for packaged food, online food orders, or catering engagements. Checking the FSSAI number printed on packaging against the portal confirms the food business is legally registered and currently authorized to sell food.",
              },
              {
                q: "Can I verify FSSAI license for free?",
                a: "Yes. The FSSAI license search tool on the official FLRS portal is completely free to use. No registration, login, or payment is required for a basic license number verification.",
              },
              {
                q: "My FSSAI search shows expired — what should I do?",
                a: "Stop operating immediately and apply for renewal as quickly as possible. A ₹100/day penalty is accumulating from the expiry date. Taxvio can process your renewal application urgently, calculate your total penalty liability, and file the application through the official portal to restore your active status.",
              },
              {
                q: "How do I update incorrect details on my FSSAI license?",
                a: "If the search reveals incorrect business name, address, or product categories, you need to apply for an FSSAI License Modification through the FLRS portal. Taxvio handles the complete modification process, ensuring the updated details are accurately reflected on your FSSAI certificate.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                  <span>{faq.q}</span>
                  <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">{faq.a}</div>
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
              { title: "FSSAI Registration", icon: "📝", link: "/serviceslist/fssai/fssai-registration", desc: "New food license for your business." },
              { title: "FSSAI Renewal", icon: "🔄", link: "/serviceslist/fssai/fssai-renewal", desc: "Renew before expiry — avoid penalties." },
              { title: "License Modification", icon: "✏️", link: "/serviceslist/fssai/fssai-modification", desc: "Update address, products, or ownership." },
              { title: "Annual Return Filing", icon: "📊", link: "/serviceslist/fssai/fssai-annual-return", desc: "File Form D1/D2 by May 31 annually." },
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
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">Found an Issue?</p>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  FSSAI Search Revealed a Problem?<br />We'll Fix It.
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Whether your license is expired, suspended, shows wrong details, or has unfiled returns —
                  Taxvio's FSSAI specialists resolve every compliance issue quickly and correctly, so your
                  food business remains legally protected.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                >
                  Get Expert Assistance
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
                name: "How can I verify an FSSAI license number online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Visit foscos.fssai.gov.in, navigate to the license search section, enter the 14-digit FSSAI number, complete the captcha, and view the license status and details.",
                },
              },
              {
                "@type": "Question",
                name: "What does a 14-digit FSSAI number mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 14-digit FSSAI number encodes the state code, license category, year of issue, and unique business identifier. It traces every food business to its issuing state authority.",
                },
              },
              {
                "@type": "Question",
                name: "What if FSSAI license search shows No Record Found?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No Record Found means the number entered is incorrect, the business is not registered, or the registration was recently issued. Verify the number carefully. If correct and no record exists, the business may be operating without FSSAI registration.",
                },
              },
              {
                "@type": "Question",
                name: "Can I verify FSSAI license for free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The FSSAI license search on the official FLRS portal is completely free. No login, registration, or payment is required.",
                },
              },
              {
                "@type": "Question",
                name: "My FSSAI search shows expired — what should I do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apply for FSSAI renewal immediately. A ₹100/day penalty accumulates from the expiry date. Taxvio can process your urgent renewal application and manage the penalty calculation.",
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
            name: "Taxvio – FSSAI License Search & Verification Support",
            description:
              "FSSAI license verification guidance and compliance issue resolution for food businesses across India. Expert support for expired, suspended, or incorrect FSSAI licenses.",
            url: "https://taxvio.in/serviceslist/fssai/fssai-search",
            areaServed: ["Khatauli", "Muzaffarnagar", "Noida", "Delhi", "Meerut", "Mumbai", "India"],
            serviceType: "FSSAI License Verification & Compliance Resolution",
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