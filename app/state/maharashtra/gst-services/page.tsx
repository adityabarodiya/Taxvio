// app/state/maharashtra/gst-services/page.tsx
// app/state/maharashtra/gst-services/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  CheckCircle, Globe, ShoppingCart, Laptop, Factory, Building2,
} from "lucide-react";
import { MH_CITIES, MH_REGIONS, slugifyCity } from "@/data/mh-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "GST Registration & Return Filing Services Across Maharashtra | Taxvio",
  description:
    "Taxvio provides expert GST registration, GSTR-1/GSTR-3B filing, GST refund, LUT filing, e-commerce GST, manufacturing GST, and notice reply across 750+ locations in Maharashtra — Mumbai, Pune, Nagpur, Nashik, Aurangabad, Thane, Kolhapur & more. CA-assisted, 100% online, starting ₹1,499.",
  keywords: [
    "GST registration Maharashtra",
    "GST services Maharashtra cities",
    "GST consultant Maharashtra",
    "GST return filing Maharashtra",
    "GSTIN registration Maharashtra",
    "GST Mumbai Pune Nagpur Nashik",
    "GST for e-commerce Maharashtra",
    "GST for manufacturing Maharashtra",
    "Taxvio Maharashtra GST",
    "GST search verification Maharashtra",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/maharashtra/gst-services" },
  openGraph: {
    title: "GST Services Across 750+ Maharashtra Locations | Taxvio",
    description: "Expert GST registration, return filing, refund, LUT & e-commerce GST across all Maharashtra cities — CA-assisted, from ₹1,499.",
    url: "https://www.taxvio.in/state/maharashtra/gst-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Services Across Maharashtra | Taxvio",
    description: "GST registration & filing across 750+ Maharashtra locations — from ₹1,499.",
  },
  robots: { index: true, follow: true },
};

/* ─── Service Quick List ─────────────────────────────────────────────────── */
const GST_SERVICES_QUICK = [
  { label: "GST Registration",      price: "₹1,499", icon: "🧾", desc: "GSTIN in 3–7 days" },
  { label: "GST Return Filing",     price: "₹999/mo", icon: "📄", desc: "GSTR-1 & GSTR-3B" },
  { label: "GST Refund",            price: "₹2,499", icon: "💰", desc: "Exporter & ITC refund" },
  { label: "GST LUT Filing",        price: "₹999",   icon: "📤", desc: "Zero-rated exports" },
  { label: "GST for E-Commerce",    price: "₹1,499", icon: "🛒", desc: "Amazon, Flipkart, Meesho" },
  { label: "GST for Manufacturing", price: "₹1,999", icon: "🏭", desc: "Factory compliance" },
];

/* ─── SEO Sections ──────────────────────────────────────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "GST Registration Services Across Maharashtra",
    body: `Maharashtra is India's largest state economy and the nation's manufacturing, financial services, IT/BPO, and international trade powerhouse — spanning the financial capital Mumbai and its satellite industrial belt across Thane, Navi Mumbai, and Palghar; the automotive and manufacturing corridor running through Pune, Pimpri-Chinchwad, Aurangabad, and Nashik; the textile, sugar, and agro-processing centres of Sangli, Kolhapur, Solapur, and the Western Maharashtra region; the cotton belt and power loom clusters in Vidarbha (Nagpur, Amravati, Akola, Yavatmal); and the diversified industrial economy of Marathwada (Aurangabad, Jalna, Latur, Nanded). Every business operating from a Maharashtra address — whether a trading firm in Crawford Market, a garment manufacturer in Ichalkaranji, a software exporter in Pune's Hinjewadi, or an agro-processing unit in Kolhapur — must register for GST once it crosses the prescribed turnover threshold or engages in interstate/e-commerce supply.

Taxvio provides end-to-end GST registration across all 750+ locations in Maharashtra — from Tier-1 commercial and industrial hubs like Mumbai (Colaba to Borivali), Pune (Shivajinagar to Hinjewadi), Nagpur (Sitabuldi to MIDC), and Nashik (Satpur to Ambad MIDC), to established manufacturing towns like Aurangabad, Solapur, Kolhapur, Sangli, Akola, and Jalgaon, down to tehsil headquarters, MIDC estates, and emerging industrial nodes across all six divisions. Our CA team handles eligibility assessment, document preparation, ARN generation, Aadhaar-based authentication, and GSTIN follow-up — entirely online, typically within 3–7 working days, regardless of which Maharashtra district or ward your registered office falls under.`,
  },
  {
    heading: "GST for E-Commerce Sellers, Manufacturers, and Exporters in Maharashtra",
    body: `Maharashtra is home to India's largest concentration of e-commerce sellers, D2C brands, manufacturing exporters, and FMCG distributors — and each segment has GST compliance needs that go well beyond standard registration and monthly filing. E-commerce sellers operating from Mumbai, Thane, Pune, and Nashik warehouses need GST registration that accounts for marketplace-specific GSTIN requirements, monthly GSTR-1/GSTR-3B filing reconciled against Amazon, Flipkart, and Meesho settlement reports, TCS credit matching under Section 52, and GSTR-8 compliance for businesses also operating as e-commerce operators.

Maharashtra's manufacturing economy — concentrated in the Pune-Pimpri automotive belt, Aurangabad pharmaceutical and auto component cluster, Nashik-Sinnar engineering and FMCG zone, Nagpur orange processing and textile units, and the power loom centres of Bhiwandi, Ichalkaranji, and Solapur — has equally specific GST needs: accurate HSN classification for finished goods and input materials, monthly ITC reconciliation on capital goods and raw material purchases, job work compliance under Section 143, and proper documentation for stock transfers between multiple factory locations. Exporters across Maharashtra's ports (Mumbai, JNPT Navi Mumbai) and inland container depots need LUT filing under Form RFD-11, shipping bill reconciliation for export refund claims, and correct IGST treatment on advance authorisation imports.

Taxvio's Maharashtra team handles all three segments with the deep domain expertise these compliance areas demand — we've served textile manufacturers in Ichalkaranji, auto component suppliers in Chakan, pharmaceutical exporters in Aurangabad, and D2C brands shipping from Bhiwandi warehouses.`,
  },
  {
    heading: "Why Maharashtra Businesses Across Every District Choose Taxvio",
    body: `Maharashtra's thirty-six districts and 750+ cities, towns, and industrial nodes each have a distinct commercial character — financial and professional services in Mumbai and Pune, automotive and engineering manufacturing in Pune-Pimpri and Aurangabad, textile and power loom production in Bhiwandi, Ichalkaranji, Solapur, and Malegaon, sugar and agro-processing in Sangli, Kolhapur, and Ahmednagar, cotton trade and ginning in Akola, Amravati, and Yavatmal, and IT/BPO services clustered in Mumbai's BKC, Pune's Hinjewadi, and Nagpur's MIHAN SEZ. GST compliance needs differ accordingly: a diamond trader in Mumbai's Zaveri Bazar needs accurate valuation and HSN codes for precious stones, while a power loom unit in Bhiwandi needs job work compliance and proper tax treatment of grey fabric sales.

Taxvio's GST team has filed applications and returns for clients across nearly every Maharashtra GST jurisdiction — from the Mumbai Central ward to the Aurangabad and Nagpur divisions, and from the Pune Hadapsar circle to the Kolhapur and Solapur ranges — giving us first-hand familiarity with Maharashtra GST department processing patterns, common query types, and the documentation nuances that speed up approvals. Our WhatsApp-first service model means a shop owner in Malegaon and a startup founder in Pune's Koregaon Park receive the exact same CA-quality, same-day response — with transparent pricing and zero office visits required.

Whether you're running a textile mill in Ichalkaranji, a pharmaceutical plant in Aurangabad, a logistics company in JNPT, or a D2C brand in Mumbai — Taxvio delivers the same expert, accessible, and affordable GST compliance support across every Maharashtra pin code.`,
  },
];

const TIER1_CITIES = MH_CITIES.filter((c) => c.tier === 1);
const TIER2_CITIES = MH_CITIES.filter((c) => c.tier === 2);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Maharashtra Cities — GST Services | Taxvio",
  numberOfItems: MH_CITIES.length,
  itemListElement: MH_CITIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — GST Services`,
    url: `https://www.taxvio.in/state/maharashtra/gst-services/${slugifyCity(c.name)}`,
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function MajorCityCard({ name, district, region }: { name: string; district: string; region: string }) {
  return (
    <Link href={`/state/maharashtra/gst-services/${slugifyCity(name)}`}
      aria-label={`GST services in ${name}, Maharashtra`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#003366] to-[#004080] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-orange-400/20 blur-2xl pointer-events-none" />
      <div className="relative p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">🏙️</span>
          <ArrowRight size={15} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5" />
        </div>
        <p className="font-bold text-base text-white leading-tight group-hover:text-orange-200 transition-colors">{name}</p>
        <p className="text-[11px] text-white/50 mt-0.5">{district} · {region}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {["Reg", "GSTR-1", "GSTR-3B", "Refund"].map((t) => (
            <span key={t} className="text-[10px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CityLink({ name }: { name: string }) {
  return (
    <Link href={`/state/maharashtra/gst-services/${slugifyCity(name)}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#003366] hover:bg-[#003366]/5 transition-all duration-150">
      <MapPin size={9} className="text-gray-300 group-hover:text-[#003366] shrink-0 transition-colors" />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function MaharashtraGSTIndexPage() {
  return (
    <>
      <Script id="maharashtra-gst-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#003366] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(255,107,53,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(0,89,179,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">GST Services — Maharashtra</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Maharashtra · 750+ Locations · GST Only · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  GST Services Across
                  <span className="block mt-2 bg-gradient-to-r from-[#FF6B35] to-[#ffa500] bg-clip-text text-transparent">
                    All Maharashtra Cities
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">GSTR-1 &amp; GSTR-3B filing</strong>, GST refund, LUT,
                  e-commerce GST, manufacturing GST, and GSTIN verification across{" "}
                  <strong className="text-white">{MH_CITIES.length}+</strong> Maharashtra locations —
                  Mumbai, Pune, Nagpur, Nashik, Thane, Aurangabad & beyond.
                  CA-assisted, starting <strong className="text-[#FF6B35]">₹1,499</strong>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { val: `${MH_CITIES.length}+`, label: "MH Locations Covered", icon: Globe },
                    { val: "18,500+", label: "MH Businesses Served", icon: Users },
                    { val: "₹1,499", label: "Starting Price", icon: TrendingUp },
                  ].map(({ val, label, icon: Icon }) => (
                    <div key={label} className="text-center rounded-2xl py-4 px-2"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      <Icon size={14} className="text-[#FF6B35] mx-auto mb-1.5" />
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20GST%20help%20in%20Maharashtra."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#003366] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right service grid */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">GST services across Maharashtra</p>
                <div className="grid grid-cols-2 gap-3">
                  {GST_SERVICES_QUICK.map(({ label, price, icon, desc }) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}>
                      <span className="text-lg shrink-0">{icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white/85 truncate">{label}</p>
                        <p className="text-[10px] text-[#FF6B35] font-semibold">{price} · {desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/30 text-center">100% online · No office visit · CA-certified</p>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, label: "CA-Certified Team" },
                { icon: Star,       label: "4.9★ Rating" },
                { icon: Zap,        label: "Same-Day Response" },
                { icon: Shield,     label: "100% Secure" },
                { icon: MessageCircle, label: "WhatsApp Support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-[#FF6B35] shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
          </svg>
        </section>

        {/* ════════ MAJOR CITIES ════════ */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#003366] to-[#FF6B35]" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#003366]">Major Commercial & Industrial Hubs</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">GST Services in Key Maharashtra Cities</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_CITIES.slice(0, 36).map((c) => (
                <MajorCityCard key={c.name} name={c.name} district={c.district} region={c.region} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIER-2 CITIES ════════ */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">Established Towns & Industrial Centers</p>
                <h2 className="text-xl font-extrabold text-gray-800">GST Services in Maharashtra Manufacturing & Trading Hubs</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_CITIES.slice(0, 50).map((c) => (
                <Link key={c.name} href={`/state/maharashtra/gst-services/${slugifyCity(c.name)}`}
                  className="group flex items-center gap-2.5 p-3.5 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#003366]/30 hover:shadow-sm hover:bg-white transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#003366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#003366] transition-all">
                    <MapPin size={13} className="text-[#003366] group-hover:text-white transition-all" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-800 group-hover:text-[#003366] transition truncate">{c.name}</p>
                    <p className="text-[10px] text-gray-400 truncate">{c.district}</p>
                  </div>
                  <ArrowRight size={11} className="ml-auto shrink-0 text-gray-300 group-hover:text-[#003366] transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ALL CITIES BY DIVISION ════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#003366] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Complete Maharashtra Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#003366] mt-4">
                GST Services — All Maharashtra Cities by Division
              </h2>
              <p className="text-gray-500 mt-2 text-sm">From Konkan to Vidarbha — comprehensive GST support across all {MH_CITIES.length}+ locations</p>
            </div>
            <div className="space-y-4">
              {Object.entries(MH_REGIONS).map(([division, districts]) => {
                const divisionCities = MH_CITIES.filter((c) => c.region === division);
                if (!divisionCities.length) return null;
                return (
                  <div key={division} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-[#003366] to-[#004080] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-[#FF6B35] shrink-0" />{division}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {divisionCities.length} locations
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {divisionCities.map((c) => <CityLink key={c.name} name={c.name} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ GST SERVICES GRID ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#003366] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                GST Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#003366] mt-4">
                All GST Services Available Across Every Maharashtra Location
              </h2>
              <p className="text-gray-500 mt-2 text-sm">Every service below is available across all {MH_CITIES.length}+ Maharashtra cities — 100% online, CA-assisted.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                { title:"GST Registration", price:"₹1,499", href:"/serviceslist/gst/gst-registration", icon:"🧾", color:"bg-emerald-50 border-emerald-100",
                  points:["GSTIN in 3–7 working days", "Eligibility consultation included", "Aadhaar OTP-based e-KYC", "All Maharashtra GST jurisdictions"] },
                { title:"GST Return Filing", price:"₹999/mo", href:"/serviceslist/gst/gst-return", icon:"📄", color:"bg-blue-50 border-blue-100",
                  points:["GSTR-1 & GSTR-3B monthly filing", "Invoice reconciliation", "Late fee & interest guidance", "Compliance monitoring & reminders"] },
                { title:"GST Refund Application", price:"₹2,499", href:"/serviceslist/gst/gst-refund", icon:"💰", color:"bg-sky-50 border-sky-100",
                  points:["Refund eligibility analysis", "Application preparation (RFD-01)", "Department follow-up", "Refund status tracking"] },
                { title:"GST Cancellation", price:"₹999", href:"/serviceslist/gst/gst-cancellation", icon:"❌", color:"bg-gray-50 border-gray-100",
                  points:["Eligibility check before filing", "Final return (GSTR-10) guidance", "Application filing on portal", "Cancellation order follow-up"] },
                { title:"GST Amendment / Update", price:"₹999", href:"/serviceslist/gst/gst-amendment", icon:"✏️", color:"bg-violet-50 border-violet-100",
                  points:["Core field amendment (address, etc.)", "Non-core field update", "Document upload & verification", "Approval tracking with ward officer"] },
                { title:"GSTIN Search & Verification", price:"Free", href:"/serviceslist/gst/gst-search", icon:"🔍", color:"bg-teal-50 border-teal-100",
                  points:["Real-time GST status check", "Legal & trade name verification", "Jurisdiction & registration date", "Vendor due-diligence support"] },
                { title:"GST LUT Filing", price:"₹999/yr", href:"/serviceslist/gst/gst-lut", icon:"📤", color:"bg-amber-50 border-amber-100",
                  points:["Letter of Undertaking — Form RFD-11", "Zero-rated export without IGST", "Annual renewal before April 1", "For goods & service exporters"] },
                { title:"GSTR-9 Annual Return", price:"₹2,999", href:"/serviceslist/gst/gstr-9", icon:"📅", color:"bg-orange-50 border-orange-100",
                  points:["Annual data reconciliation", "GSTR-1 vs GSTR-3B matching", "Error identification & correction", "Due 31st December every year"] },
                { title:"GST Notice Reply", price:"₹1,999", href:"/serviceslist/gst/gst-notice-reply", icon:"⚖️", color:"bg-rose-50 border-rose-100",
                  points:["ASMT-10 & DRC-01 notice analysis", "Detailed reply drafting", "Document submission on portal", "Case follow-up until closure"] },
                { title:"GST Audit Assistance", price:"₹4,999", href:"/serviceslist/gst/gst-audit", icon:"🔎", color:"bg-indigo-50 border-indigo-100",
                  points:["Audit applicability check", "Sales & purchase reconciliation", "Audit report preparation", "GST department coordination"] },
                { title:"GST E-Invoicing Setup", price:"₹999", href:"/serviceslist/gst/gst-e-invoicing", icon:"📱", color:"bg-cyan-50 border-cyan-100",
                  points:["E-invoice IRP registration", "IRN & QR code generation", "Accounting software integration", "Compliance monitoring"] },
                { title:"GST for E-Commerce", price:"₹1,499", href:"/serviceslist/gst/gst-for-e-commerce", icon:"🛒", color:"bg-fuchsia-50 border-fuchsia-100",
                  points:["Amazon, Flipkart, Meesho sellers", "Marketplace settlement reconciliation", "TCS credit matching (Sec. 52)", "GSTR-8 for e-commerce operators"] },
                { title:"GST for Manufacturing", price:"₹1,999", href:"/serviceslist/gst/gst-for-manufacturing", icon:"🏭", color:"bg-pink-50 border-pink-100",
                  points:["HSN classification for finished goods", "ITC on capital goods & raw materials", "Job work compliance (Sec. 143)", "Stock transfer documentation"] },
              ].map(({ title, price, href, icon, color, points }) => (
                <Link key={title} href={href}
                  className={`group relative flex flex-col p-5 bg-white border ${color.split(" ")[1]} rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.05]"
                    style={{ background: "linear-gradient(135deg,#003366,#FF6B35)" }} />
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${color} border flex items-center justify-center text-xl shrink-0`}>{icon}</div>
                    <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#003366] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#003366] transition-colors mb-1">{title}</h3>
                  <span className="text-[11px] font-bold text-[#003366] bg-blue-50 px-2.5 py-0.5 rounded-full self-start mb-3">{price}</span>
                  <ul className="space-y-1.5 mt-auto">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-[11px] text-gray-500">
                        <CheckCircle size={10} className="text-emerald-500 shrink-0 mt-0.5" />{p}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ SEO CONTENT ════════ */}
        <section className="py-20 bg-[#f8fbfd] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#003366] to-[#FF6B35] shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#003366] mb-4">{heading}</h2>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    {body.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ TAG CLOUD ════════ */}
        <section className="py-16 bg-[#003366]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">All Maharashtra Cities — GST Services</h2>
              <p className="text-white/55 text-sm mt-2">Click your city for dedicated GST registration & filing services</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {MH_CITIES.map((c, i) => (
                <Link key={`${c.name}-${i}`}
                  href={`/state/maharashtra/gst-services/${slugifyCity(c.name)}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#003366]"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}>
                  <MapPin size={9} className="text-[#FF6B35] group-hover:text-[#003366] shrink-0 transition-colors" />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#003366] rounded-3xl overflow-hidden p-10 md:p-14 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-orange-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
                    <Zap size={11} className="text-[#FF6B35]" /> Ready to Start?
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    GST Registration & Filing — Wherever You Are in Maharashtra
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day WhatsApp response. Our CA team serves every Maharashtra city — Mumbai to Gadchiroli. Starting ₹1,499.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20GST%20help%20in%20Maharashtra."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#003366] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <a href="tel:918937980366"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all">
                    <Phone size={16} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}