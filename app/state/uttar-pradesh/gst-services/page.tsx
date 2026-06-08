// app/state/uttar-pradesh/gst-services/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, Building2,
  Globe, Receipt, CheckCircle, IndianRupee,
} from "lucide-react";
import { UP_CITIES, UP_REGIONS, slugifyCity } from "@/data/up-gst-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "GST Registration & Return Filing Services Across Uttar Pradesh | Taxvio",
  description:
    "Taxvio provides expert GST registration, GSTR-1, GSTR-3B & GSTR-9 filing, GST notice reply, LUT filing and e-invoicing compliance across 800+ cities and towns in Uttar Pradesh. CA-assisted, 100% online, starting ₹999.",
  keywords: [
    "GST registration Uttar Pradesh",
    "GST services UP cities",
    "GST consultant UP",
    "GST return filing UP",
    "GSTIN registration UP",
    "GST Noida Lucknow Agra Kanpur Varanasi",
    "GST filing service UP towns",
    "Taxvio UP GST",
    "GST all districts Uttar Pradesh",
    "online GST registration UP",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/uttar-pradesh/gst-services" },
  openGraph: {
    title: "GST Services Across 800+ UP Cities | Taxvio",
    description: "Expert GST registration, GSTR filing, LUT & notice reply across all UP cities — 100% online, CA-assisted, from ₹999.",
    url: "https://www.taxvio.in/state/uttar-pradesh/gst-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Services Across UP | Taxvio",
    description: "Expert GST registration & filing across 800+ UP cities — online, from ₹999.",
  },
  robots: { index: true, follow: true },
};

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const TIER1_CITIES = UP_CITIES.filter((c) => c.tier === 1);
const TIER2_CITIES = UP_CITIES.filter((c) => c.tier === 2);

const GST_SERVICES = [
  { label: "GST Registration", price: "₹999", icon: "🧾", desc: "GSTIN in 3–7 days" },
  { label: "GST Return Filing", price: "₹999/mo", icon: "📄", desc: "GSTR-1 & GSTR-3B" },
  { label: "GSTR-9 Annual Return", price: "₹2,999", icon: "📅", desc: "Yearly reconciliation" },
  { label: "GST LUT Filing", price: "₹999", icon: "📤", desc: "For exporters" },
  { label: "GST Notice Reply", price: "₹1,999", icon: "⚖️", desc: "DRC-01 & ASMT-10" },
  { label: "GST Refund", price: "₹2,999", icon: "💰", desc: "ITC & export refunds" },
];

const SEO_SECTIONS = [
  {
    heading: "GST Registration Services Across Uttar Pradesh",
    body: `Uttar Pradesh is India's most populous state and one of the largest GST taxpayer bases in the country, with millions of registered businesses across agriculture, manufacturing, trade, textiles, IT, and services. GST registration in UP is mandatory for businesses with annual turnover exceeding ₹40 lakh (goods) or ₹20 lakh (services), all interstate supply businesses, e-commerce sellers, and notified service providers irrespective of turnover.

Taxvio's dedicated UP team processes GST registrations across all 800+ cities and towns — from metro centres like Noida, Lucknow, Kanpur, Agra, Varanasi, and Meerut to small towns like Khatauli, Dhampur, Nakur, and Rasra. Our CA team handles eligibility assessment, document preparation (PAN, Aadhaar, electricity bill, photograph, bank statement), digital signature, portal filing, ARN generation, and GSTIN follow-up — entirely online, typically within 3–7 working days.`,
  },
  {
    heading: "GST Return Filing — GSTR-1, GSTR-3B & GSTR-9 in UP",
    body: `Monthly GST compliance is a recurring obligation for all registered businesses in Uttar Pradesh. Taxvio provides end-to-end GST return filing across UP covering GSTR-1 (outward supplies, due 11th monthly), GSTR-3B (monthly summary with net tax liability, due 20th monthly), GSTR-9 (annual reconciliation return, due 31st December), and GSTR-9C (reconciliation statement for turnover above ₹5 crore).

Our reconciliation-first approach ensures your GSTR-2B ITC matches purchase registers before every GSTR-3B filing — protecting your business from ITC mismatch notices (ASMT-10) and demand notices (DRC-01). For QRMP (Quarterly Return Monthly Payment) scheme businesses, we handle both the quarterly GSTR-1 and monthly PMT-06 challans. Our UP-based CA team understands state-specific GST jurisdiction and proper CGST/SGST/IGST classification for inter-district and interstate supply transactions.`,
  },
  {
    heading: "Why UP Businesses Choose Taxvio for GST Compliance",
    body: `Uttar Pradesh's diverse business landscape — from the brassware traders of Moradabad, carpet weavers of Bhadohi, glass manufacturers of Firozabad, and leather goods makers of Agra, to the IT companies of Noida and Lucknow's MSME corridor — requires GST expertise tailored to each industry's HSN classification, tax rates, and ITC eligibility rules.

Taxvio's team is specifically experienced in UP's dominant industries: textile and readymade garments (5%/12% GST, ITC restrictions), agricultural input trading (exempt vs taxable classification), food processing (NIL/5% rates), construction and real estate (works contract, RCM), e-commerce selling (TCS deduction, auto-populated returns), and B2B manufacturing (full ITC chain). Our WhatsApp-first communication model means businesses in any UP city — whether in the NCR belt or the remotest tehsil — receive the same CA-quality response within hours.`,
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "UP Cities with GST Services — Taxvio",
  description: "GST registration and return filing services across 800+ cities and towns in Uttar Pradesh.",
  numberOfItems: UP_CITIES.length,
  itemListElement: UP_CITIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — GST Services`,
    url: `https://www.taxvio.in/state/uttar-pradesh/gst-services/${slugifyCity(c.name)}`,
  })),
};

/* ─── Sub-components ──────────────────────────────────────────────────────── */
function MajorCityCard({ name, district, region }: { name: string; district: string; region: string }) {
  return (
    <Link href={`/state/uttar-pradesh/gst-services/${slugifyCity(name)}`}
      aria-label={`GST services in ${name}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
      <div className="relative p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">🏙️</span>
          <ArrowRight size={15} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5" />
        </div>
        <p className="font-bold text-base text-white leading-tight group-hover:text-sky-200 transition-colors">{name}</p>
        <p className="text-[11px] text-white/50 mt-0.5">{district} District · {region}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {["GSTR-1", "GSTR-3B", "Reg", "LUT"].map((t) => (
            <span key={t} className="text-[10px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CityLink({ name, district }: { name: string; district: string }) {
  return (
    <Link href={`/state/uttar-pradesh/gst-services/${slugifyCity(name)}`}
      aria-label={`GST services in ${name}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150">
      <MapPin size={9} className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors" />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function UPGSTIndexPage() {
  return (
    <>
      <Script id="up-gst-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════════ HERO ════════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">GST Services — Uttar Pradesh</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Uttar Pradesh · 800+ Cities · GST Only · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  GST Services Across
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Uttar Pradesh Cities
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">GSTR-1 & GSTR-3B filing</strong>, GST annual return,
                  LUT filing, GST refunds, and notice replies across all <strong className="text-white">{UP_CITIES.length}+</strong>{" "}
                  cities and towns in UP. CA-assisted, starting{" "}
                  <strong className="text-sky-300">₹999</strong>.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { val: `${UP_CITIES.length}+`, label: "UP Cities Covered", icon: Globe },
                    { val: "4,800+", label: "UP Businesses Served", icon: Users },
                    { val: "₹999", label: "Starting Price", icon: TrendingUp },
                  ].map(({ val, label, icon: Icon }) => (
                    <div key={label} className="text-center rounded-2xl py-4 px-2"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      <Icon size={14} className="text-sky-300 mx-auto mb-1.5" />
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20GST%20help%20in%20UP."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right — GST Service quick grid */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">GST services in every UP city</p>
                <div className="grid grid-cols-2 gap-3">
                  {GST_SERVICES.map(({ label, price, icon, desc }) => (
                    <div key={label}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}>
                      <span className="text-lg shrink-0">{icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white/85 truncate">{label}</p>
                        <p className="text-[10px] text-sky-300 font-semibold">{price} · {desc}</p>
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
                { icon: Star, label: "4.9★ Rating" },
                { icon: Zap, label: "Same-Day Response" },
                { icon: Shield, label: "100% Secure" },
                { icon: MessageCircle, label: "WhatsApp Support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-sky-400 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
          </svg>
        </section>

        {/* ════════════ MAJOR CITIES ════════════ */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">Major Cities</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  GST Services in Key UP Cities
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_CITIES.map((c) => (
                <MajorCityCard key={c.name} name={c.name} district={c.district} region={c.region} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ TIER 2 CITIES ════════════ */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">District Headquarters & Mid-Sized Cities</p>
                <h2 className="text-xl font-extrabold text-gray-800">GST Services in UP District Towns</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_CITIES.map((c) => (
                <Link key={c.name} href={`/state/uttar-pradesh/gst-services/${slugifyCity(c.name)}`}
                  className="group flex items-center gap-2.5 p-3.5 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm hover:bg-white transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                    <MapPin size={13} className="text-[#00416a] group-hover:text-white transition-all" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-800 group-hover:text-[#00416a] transition truncate">{c.name}</p>
                    <p className="text-[10px] text-gray-400 truncate">{c.district}</p>
                  </div>
                  <ArrowRight size={11} className="ml-auto shrink-0 text-gray-300 group-hover:text-[#00416a] transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ ALL CITIES BY REGION ════════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All UP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                GST Services — All Uttar Pradesh Cities by Region
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Every city below has a dedicated Taxvio GST service page — registration, return filing, and compliance.
              </p>
            </div>

            <div className="space-y-4">
              {Object.entries(UP_REGIONS).map(([region, districts]) => {
                const regionCities = UP_CITIES.filter((c) => c.region === region);
                if (regionCities.length === 0) return null;
                return (
                  <div key={region} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-[#00416a] to-[#005a90] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-sky-300 shrink-0" />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionCities.length} cities
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionCities.map((c) => (
                        <CityLink key={c.name} name={c.name} district={c.district} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════ GST SERVICES GRID ════════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                GST Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                GST Services Available in Every UP City
              </h2>
              <p className="text-gray-500 mt-2 text-sm">All services below are available across all {UP_CITIES.length}+ UP cities — 100% online.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  title: "GST Registration", price: "₹999",
                  href: "/serviceslist/gst/gst-registration",
                  icon: "🧾", color: "bg-emerald-50 border-emerald-100",
                  iconBg: "bg-emerald-100 text-emerald-700",
                  points: ["GSTIN in 3–7 working days", "All business types — Proprietor, LLP, Pvt Ltd", "e-KYC, Aadhaar OTP-based process", "State/Central GST jurisdiction handling"],
                },
                {
                  title: "GSTR-1 Filing", price: "₹999/mo",
                  href: "/serviceslist/gst/gst-return",
                  icon: "📄", color: "bg-blue-50 border-blue-100",
                  iconBg: "bg-blue-100 text-blue-700",
                  points: ["Outward supply statement — B2B, B2C, exports", "Due 11th monthly (monthly) or 13th (QRMP)", "HSN/SAC summary filing", "E-invoice JSON import & reconciliation"],
                },
                {
                  title: "GSTR-3B Filing", price: "₹999/mo",
                  href: "/serviceslist/gst/gst-return",
                  icon: "📊", color: "bg-violet-50 border-violet-100",
                  iconBg: "bg-violet-100 text-violet-700",
                  points: ["Monthly summary return with net tax liability", "ITC vs GSTR-2B reconciliation before filing", "CGST/SGST/IGST accurate split", "RCM liability computation"],
                },
                {
                  title: "GSTR-9 Annual Return", price: "₹2,999",
                  href: "/serviceslist/gst/gst-annual-return",
                  icon: "📅", color: "bg-amber-50 border-amber-100",
                  iconBg: "bg-amber-100 text-amber-700",
                  points: ["Full-year outward/inward supply reconciliation", "ITC availed vs eligible comparison", "GSTR-9C (audit certificate) for ₹5Cr+ turnover", "Amendments and corrections handled"],
                },
                {
                  title: "GST LUT Filing", price: "₹999/yr",
                  href: "/serviceslist/gst/gst-lut",
                  icon: "📤", color: "bg-teal-50 border-teal-100",
                  iconBg: "bg-teal-100 text-teal-700",
                  points: ["Letter of Undertaking for zero-rated exports", "Annual renewal before April 1", "IGST exemption on exports", "Service exports and SEZ supply"],
                },
                {
                  title: "GST Notice Reply", price: "₹1,999",
                  href: "/serviceslist/gst/gst-notice-reply",
                  icon: "⚖️", color: "bg-rose-50 border-rose-100",
                  iconBg: "bg-rose-100 text-rose-700",
                  points: ["ASMT-10 scrutiny notice reply", "DRC-01 demand notice response", "ITC mismatch resolution", "GSTR-2A vs GSTR-3B gap rectification"],
                },
                {
                  title: "GST Refund", price: "₹2,999",
                  href: "/serviceslist/gst/gst-refund",
                  icon: "💰", color: "bg-sky-50 border-sky-100",
                  iconBg: "bg-sky-100 text-sky-700",
                  points: ["Export refunds — IGST paid & ITC accumulation", "Inverted duty structure refund (Form RFD-01)", "Refund for wrong head payment", "End-to-end refund application & follow-up"],
                },
                {
                  title: "GST Cancellation / Revocation", price: "₹999",
                  href: "/serviceslist/gst/gst-cancellation",
                  icon: "❌", color: "bg-gray-50 border-gray-100",
                  iconBg: "bg-gray-100 text-gray-700",
                  points: ["Voluntary cancellation for ceased businesses", "Revocation of cancelled GSTIN", "Final return GSTR-10 filing", "Clearance of pending dues before closure"],
                },
                {
                  title: "E-Invoice & E-Way Bill", price: "₹999",
                  href: "/serviceslist/gst/e-invoice",
                  icon: "📱", color: "bg-indigo-50 border-indigo-100",
                  iconBg: "bg-indigo-100 text-indigo-700",
                  points: ["E-invoice setup for ₹5Cr+ turnover businesses", "IRN & QR code generation integration", "E-way bill for goods movement > ₹50,000", "Bulk e-way bill generation via portal/API"],
                },
              ].map(({ title, price, href, icon, color, iconBg, points }) => (
                <Link key={title} href={href}
                  className={`group relative flex flex-col p-5 bg-white border ${color.split(" ")[1]} rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.06]"
                    style={{ background: "linear-gradient(135deg,#00416a,#0ea5e9)" }} />
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${color} border flex items-center justify-center text-xl shrink-0`}>
                      {icon}
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#00416a] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors mb-1">{title}</h3>
                  <span className="text-[11px] font-bold text-[#00416a] bg-blue-50 px-2.5 py-0.5 rounded-full self-start mb-3">{price}</span>
                  <ul className="space-y-1.5 mt-auto">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-[11px] text-gray-500">
                        <CheckCircle size={10} className="text-emerald-500 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ SEO CONTENT ════════════ */}
        <section className="py-20 bg-[#f8fbfd] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4">{heading}</h2>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    {body.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ ALL CITIES TAG CLOUD ════════════ */}
        <section className="py-16 bg-[#00416a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">All UP Cities — GST Services</h2>
              <p className="text-white/55 text-sm mt-2">
                Click your city for dedicated GST registration, GSTR filing & compliance services
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {UP_CITIES.map((c, i) => (
                <Link key={`${c.name}-${i}`}
                  href={`/state/uttar-pradesh/gst-services/${slugifyCity(c.name)}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#00416a]"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}>
                  <MapPin size={9} className="text-sky-400 group-hover:text-[#00416a] shrink-0 transition-colors" />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ CTA BANNER ════════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
                    <Zap size={11} className="text-sky-300" /> Ready to Start?
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    GST Registration & Filing — Wherever You Are in UP
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day WhatsApp response. Our CA team serves every UP city — from Noida & Lucknow to the smallest tehsil town. Starting ₹999.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20GST%20help%20in%20UP."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
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